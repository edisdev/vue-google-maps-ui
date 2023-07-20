---
title: 'Vue Google Map UI'
---
# 🗺 Vue Google Maps UI

### Install via npm

```bash
npm install vue-google-maps-ui --save
```


### Install via yarn

```bash
yarn add vue-google-maps-ui
```

### Import Component

#### Global Register

```js
// main.js file
import GoogleMap from 'vue-google-maps-ui'
...
...

app.component('Googlemap', GoogleMap)

```
#### Locale Register For Options API

```vue

  <script>
    import GoogleMap from 'vue-google-maps-ui'

    export default {
      components: {
        GoogleMap
      }
    }
  </script>
```

### Usage

```vue
<template>
  <Googlemap
    ...props
    ...events
  />
</template>
```

### Props

```vue
<template>
  <Googlemap
    apiKey=""
    disabledSearch=""
    id=""
    inputClass=""
    width=""
    height=""
    drawingMode=""
    autocomplete=""
    currentAddress=""
    location=""
    language=""
    circles=""
    polygons=""
    polylines=""
    rectangles=""
    markers=""
    mapStyleOption=""
    loaderOptions=""
    drawingManagerOptions=""
    drawingControlOptions=""
  />
</template>
```

### Events

```vue
<template>
  <Googlemap
    @change-address=""
    @update-circle=""
    @update-polygon=""
    @update-polyline=""
    @update-rectangle=""
    @update-marker=""
  />
</template>
```

### Documentions

- [Go to google-maps-loader-helper Package Docs](https://edisdev.github.io/google-maps-loader-helper/)