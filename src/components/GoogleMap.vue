<template>
  <div class="GoogleMap">
    <div class="SearchArea" v-if="autocomplete">
      <input
        v-bind="$attrs"
        ref="SearchInput"
        :class="inputClass"
        :disabled="disabledSearch"
        v-model="address"
      />
    </div>
    <div :ref="id" :style="mapStyle"></div>
  </div>
</template>

<script>
import GoogleMaps from 'google-maps-loader-helper'

export default {
  name: 'VueGoogleMapUI',
  emits: [
    'change-address',
    'update-circle',
    'update-polygon',
    'update-polyline',
    'update-rectangle',
    'update-marker'
  ],
  props: {
    apiKey: { type: String, required: true },
    disabledSearch: { type: Boolean },
    id: { type: String, default: 'GoogleMapArea' },
    inputClass: { type: String, default: '' },
    width: { type: String, default: '100%' },
    height: { type: String, default: '500px' },
    drawingMode: { type: String, default: '' },
    autocomplete: { type: Boolean, default: false },
    currentAddress: { type: Object, default: null },
    location: { type: Object, default: null },
    language: { type: String, default: '' },
    circles: { type: Array, default: () => [] },
    polygons: { type: Array, default: () => [] },
    polylines: { type: Array, default: () => [] },
    rectangles: { type: Array, default: () => [] },
    markers: { type: Array, default: () => [] },
    mapStyleOption: { type: Object, default: () => ({}) },
    loaderOptions: { type: Object, default: () => ({}) },
    drawingManagerOptions: { type: Object, default: () => ({}) },
    drawingControlOptions: { type: Object, default: () => ({}) }
  },
  data () {
    return {
      address: '',
      addressInfo: null
    }
  },
  computed: {
    mapStyle () {
      return {
        width: this.width,
        height: this.height,
        borderRadius: 'inherit',
        ...this.mapStyleOption
      }
    },
    GoogleMaps () {
      return new GoogleMaps({
        apiKey: this.apiKey,
        el: this.$refs[this.id],
        libraries: ['places', 'drawing'],
        language: this.language,
        location: this.location,
        loaderOptions: this.loaderOptions
      })
    },
    autoCompleteOptions () {
      return {
        fields: ['name', 'geometry', 'formatted_address', 'place_id'],
        strictBounds: true,
        types: ['establishment']
      }
    }
  },
  methods: {
    setAddressData (address) {
      if (!address) return
      this.addressInfo = address
      this.address = address.formatted_address
      this.GoogleMaps.closeInfoWindow()
      this.$emit('change-address', { info: address, address: this.address })
    },
    setAutoComplete () {
      const data = this.GoogleMaps.setAutoComplete()
      this.setAddressData(data)
    },
    async setLocation () {
      const address = await this.GoogleMaps.setMarkerData()
      this.setAddressData(address)
    },
    setCurrentAddres () {
      const address = JSON.parse(JSON.stringify(this.currentAddress))
      if (address) {
        const location = this.GoogleMaps.generateLocationData(address.geometry.location)
        address.geometry.location = location
        this.setAddressData(address)
        this.GoogleMaps.setNewAddress(address)
        this.GoogleMaps.setMarkerPosition(location)
      } else if (this.getShapesData().length === 0) {
        this.setLocation()
      }
    },
    mapFitWithCircle (circle) {
      this.GoogleMaps.drawingManager.mapFitWithCircle(circle)
    },
    getShapeTypes () {
      return this.GoogleMaps.google.maps.drawing.OverlayType
    },
    getShapesData () {
      const shapeTypes = this.getShapeTypes()
      return Object.values(shapeTypes)
        .reduce((list, type) => {
          list.push(...this[`${type}s`])
          return list
        }, [])
    },
    getShapesUpdateCallback () {
      const shapeTypes = this.getShapeTypes()
      return Object.values(shapeTypes).reduce((events, type) => {
        events[type] = (shapes) => this.updateShapes(type, shapes)
        return events
      }, {})
    },
    updateShapes (type, shapes) {
      this.$emit(`update-${type}`, shapes)
    },
    createShapes () {
      const shapeTypes = this.getShapeTypes()
      Object.values(shapeTypes).forEach(type => {
        const shapes = (this[`${type}s`] || [])
        this.GoogleMaps.drawingManager.createShapes({
          type,
          shapes
        })
      })
    },
    initMarker () {
      const mode = this.drawingMode
      this.GoogleMaps.createMarker({ draggable: !mode })
      this.GoogleMaps.visibleMarker(mode !== this.getShapeTypes().MARKER)
      this.GoogleMaps.markerAddListener('dragend', this.setLocation)
      this.GoogleMaps.markerAddListener('click', () => {
        this.GoogleMaps.openInfoWindow({ content: this.address })
      })
    },
    initAutoComplete () {
      if (this.autocomplete) {
        const inputEl = this.$refs.SearchInput
        this.GoogleMaps.createAutoComplete(inputEl, this.autoCompleteOptions)
        this.GoogleMaps.autoCompleteAddListener('place_changed', this.setAutoComplete)
      }
    },
    async initDrawingManager () {
      if (this.drawingMode) {
        const callbacks = this.getShapesUpdateCallback()
        const options = {
          drawingMode: this.drawingMode,
          ...this.drawingManagerOptions,
          drawingControlOptions: {
            drawingModes: [this.drawingMode],
            ...this.drawingControlOptions
          }
        }
        this.GoogleMaps.createDrawingManager(options, callbacks)
        this.createShapes()
      }
    },
    initGeocoder () {
      this.GoogleMaps.createGeocoder()
    },
    async initMap () {
      await this.GoogleMaps.init()
      this.initGeocoder()
      this.initMarker()
      this.initAutoComplete()
      this.initDrawingManager()
    }
  },
  async mounted () {
    await this.initMap()
    this.setCurrentAddres()
  },
  watch: {
    language () {
      window.location.reload()
    }
  },
  beforeUnmount () {
    this.GoogleMaps.Loader.deleteScript()
    this.address = ''
    this.addressInfo = ''
  }
}
</script>

<style>
.GoogleMap{
  height: max-content;
  background: rgb(229, 227, 223);
}

.GoogleMap .SearchArea{
  border: 1px solid #ddd;
  border-radius: 6px;
  display: flex;
}

.GoogleMap .SearchArea input{
  flex: 1;
  outline: none;
  border: none;
  height: 30px;
  padding: 10px;
}
</style>
