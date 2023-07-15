---
title: 'Component Using'
---

## SIMPLE

By default shows the current location on the map.

```vue
  <template>
    <GoogleMap api-key="xxxxxxx"/>
  </template>
```

<img src="examples/Simple.png" >



## WITH LOCATION

By default shows the current location on the map.

```vue
  <template>
    <GoogleMap
      api-key="xxxxxxx"
      :location="{ lat: 3.2534090502147195, lng: 72.99958054910493 }"
    />
  </template>
```

<img src="examples/WithLocation.png" >

---

## WITH AUTOCOMPLETE

By default shows the current location on the map.

```vue
  <template>
    <GoogleMap
      api-key="xxxxxxx"
      :autocomplete="true"
      :location="{ lat: 3.2534090502147195, lng: 72.99958054910493 }"
    />
  </template>
```

<img src="examples/Autocomplete.gif">

## WITH CURRENT ADDRESS

By default shows the current location on the map.

```vue
  <template>
    <GoogleMap
      api-key="xxxxxxx"
      :current-address="{ 
        geometry: {
          location: { lat: 37.0317978, lng: 27.4291652 }
        },
        formatted_address: 'Çarşı, Kale Cd., 48400 Bodrum/Muğla,Türkiye'
      }"
    />
  </template>
```

<img src="examples/WithCurrentAddress.png" >

---

## DRAWING MANAGER

### CIRCLES

<em>Defaults</em>

```vue
  <template>
    <GoogleMap
      api-key="xxxxxxx"
      drawing-mode="circle",
      @update-circle="getCircles"
    />
  </template>
  <script>
    export default {
      methods: {
        getCircles (circles) {
          Object.keys(circles).forEach(key => {
            const circle = circles[key]
            const { lat, lng } = circle.center
            console.log({
              circle,
              radius: circle.radius,
              center: { lat: lat(), lng: lng() }
            })
          })
        }
      }
    }
  </script>
```
<img src="examples/Circles.gif">

<em>With Default Circles</em>

```vue
  <template>
    <GoogleMap
      api-key="xxxxxxx"
      drawing-mode="circle"
      :circles="circles"
      @update-circle="getCircles"
    />
  </template>
  <script>
    export default {
      data () {
        return {
          circles: [
            {
              radius: 6443.95449686417,
              center: {
                lat: 37.066946628899466,
                lng: 27.421465132160183
              }
            }
          ]
        }
      },
      methods: {
        getCircles (circles) {
          Object.keys(circles).forEach(key => {
            const circle = circles[key]
            const { lat, lng } = circle.center
            console.log({
              circle,
              radius: circle.radius,
              center: { lat: lat(), lng: lng() }
            })
          })
        }
      }
    }
  </script>
```

<img src="examples/withDefaultCircle.png">

### POLYGONS

<em>Defaults</em>

```vue
  <template>
    <GoogleMap
      api-key="xxxxxxx"
      drawing-mode="polygon"
      @update-polygon="getPolygon"
    />
  </template>
  <script>
    export default {
      methods: {
        getPolygon (polygons) {
          const polygonPaths = Object.keys(polygons).reduce((obj, key) => {
            let paths = polygons[key].getPath().getArray().map(path => {
              return { lat: path.lat(), lng: path.lng() }
            })
      
            obj[key] = paths
            return obj
          }, {})

          console.log(polygonPaths)
        }
      }
    }
  </script>
```

<img src="examples/Polygon.gif" />

<em>With Default Defaults</em>

```vue
  <template>
    <GoogleMap
      :polygons="[
        [
          {
            lat: 37.08456887094567,
            lng: 27.404445961718746
          },
          {
            lat: 37.01825985647625,
            lng: 27.37835343242187
          },
          {
            lat: 37.013325466409626,
            lng: 27.550014809374996
          }
        ]
      ]"
      api-key="xxxxxxx"
      drawing-mode="polygon"
      @update-polygon="getPolygon"
    />
  </template>
  <script>
    export default {
      methods: {
        getPolygon (polygons) {
          const polygonPaths = Object.keys(polygons).reduce((obj, key) => {
            let paths = polygons[key].getPath().getArray().map(path => {
              return { lat: path.lat(), lng: path.lng() }
            })
      
            obj[key] = paths
            return obj
          }, {})

          console.log(polygonPaths)
        }
      }
    }
  </script>
```

<img src="examples/PolygonDefault.png" />

### POLYLINES

<em>Defaults</em>

```vue
  <template>
    <GoogleMap
      api-key="xxxxxxx"
      drawing-mode="polyline"
      @update-polyline="getPolylines"
    />
  </template>
  <script>
    export default {
      methods: {
        getPolylines (polylines) {
          const polylinePaths = Object.keys(polylines).reduce((obj, key) => {
            let paths = polylines[key].getPath().getArray().map(path => {
              return { lat: path.lat(), lng: path.lng() }
            })
      
            obj[key] = paths
            return obj
          }, {})

          console.log(polylinePaths)
        }
      }
    }
  </script>
```

<img src="examples/Polyline.gif" />

<em>With Default Defaults</em>

```vue
  <template>
    <GoogleMap
      :polylines="[
        [
          {
            lat: 37.08456887094567,
            lng: 27.404445961718746
          },
          {
            lat: 37.01825985647625,
            lng: 27.37835343242187
          },
          {
            lat: 37.013325466409626,
            lng: 27.550014809374996
          }
        ]
      ]"
      api-key="xxxxxxx"
      drawing-mode="polyline"
      @update-polygon="getPolylines"
    />
  </template>
  <script>
    export default {
      methods: {
        getPolylines (polylines) {
          const polylinePaths = Object.keys(polylines).reduce((obj, key) => {
            let paths = polylines[key].getPath().getArray().map(path => {
              return { lat: path.lat(), lng: path.lng() }
            })
      
            obj[key] = paths
            return obj
          }, {})

          console.log(polylinePaths)
        }
      }
    }
  </script>
```

<img src="examples/PolylineDefault.png" />

### RECTANGLES

<em>Defaults</em>

```vue
  <template>
    <GoogleMap
      api-key="xxxxxxx"
      drawing-mode="rectangle"
      @update-rectangle="getRectangles"
    />
  </template>
  <script>
    export default {
      methods: {
        getRectangles (rectangles) {
        const bounds = Object.keys(rectangles).reduce((obj, key) => {
            const info = rectangles[key].getBounds()
            const nortEast = info.getNorthEast()
            const southWest = info.getSouthWest()
            obj[key] = {
              north: nortEast.lat(),
              east: nortEast.lng(),
              south: southWest.lat(),
              west: southWest.lng()
            }
            return obj
          }, {})

          console.log(bounds)
        }
      }
    }
  </script>
```

<img src="examples/Rectangle.gif">


<em>With Default Rectangles</em>

```vue
  <template>
    <GoogleMap
      :rectangles="[
        {
          north: 37.08233924733791,
          east: 27.499889687304684,
          south: 36.975445928850334,
          west: 27.35569413066406
        }
      ]"
      api-key="xxxxxxx"
      drawing-mode="rectangle"
      @update-rectangle="getRectangles"
    />
  </template>
  <script>
    export default {
      methods: {
        getRectangles (rectangles) {
        const bounds = Object.keys(rectangles).reduce((obj, key) => {
            const info = rectangles[key].getBounds()
            const nortEast = info.getNorthEast()
            const southWest = info.getSouthWest()
            obj[key] = {
              north: nortEast.lat(),
              east: nortEast.lng(),
              south: southWest.lat(),
              west: southWest.lng()
            }
            return obj
          }, {})

          console.log(bounds)
        }
      }
    }
  </script>
```

<img src="examples/RectangleDefault.png">


### MARKERS

<em>Defaults</em>

```vue
  <template>
    <GoogleMap
      api-key="xxxxxxx"
      drawing-mode="marker",
      @update-marker="getMarkers"
    />
  </template>
  <script>
    export default {
      methods: {
        getMarkers (markers) {
          Object.keys(markers).forEach(key => {
            const marker = markers[key]
            const { lat, lng } = marker.center
            console.log({
              marker,
              radius: marker.radius,
              center: { lat: lat(), lng: lng() }
            })
          })
        }
      }
    }
  </script>
```

<img src="examples/Marker.gif">

<em>With Default Markers</em>

```vue
<template>
  <GoogleMap
    api-key="xxxxxxx"
    drawing-mode="marker"
    :markers="markers"
    @update-marker="getMarkers"
  />
</template>

<script>
  export default {
    data () {
      return {
        markers: [
          {
            lat: 37.04152202567242,
            lng: 27.42723434329895
          }
        ]
      }
    },
    methods: {
      getMarkers (markers) {
        const markerData = Object.keys(markers).reduce((obj, key) => {
          const marker = markers[key]
          const position = marker.getPosition()

          obj[key] = {
            lat: position.lat(),
            lng: position.lng()
          }
          return obj
        }, {})

        console.log(markerData)
      }
    }
  }
</script>
```

<img src="examples/MarkerDefault.png">
