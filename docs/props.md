---
title: 'Props'
---

## apiKey
This is Google MAPS API KEY

## disabledSearch
This props disable autocomplete input.

## id
The id of the element that the map will render. Defaults `GoogleMapArea`

## inputClass
The inputClass styles the autocomplete input

## width
The width of the map to load. Defaults `100%`

## height
The height of the map to load. Defaults `500px`

## drawingMode

This is Google Maps Drawing Manager type.
It should be one of the following options.

  - Circle
  - Polygon
  - Polyline
  - Rectangle
  - Marker

If drawingMode is not empty, google maps drawing manager will be active.

## autocomplete

This props is used to search for locations.

## currentAddress

This props is used set default address for first load.

## location

This props is used set default location for first load.

## language

This props to determine google map language.

```vue
  <template>
    <GoogleMap
      api-key="xxxxxxx"
      language="en"
    />
  </template>
```

<img src="examples/Lang-EN.png" />

```vue
  <template>
    <GoogleMap
      api-key="xxxxxxx"
      language="tr"
    />
  </template>
```

<img src="examples/Lang-TR.png" />

## circles

This is Default circle areas for drawing manager.

## polygons

This is Default polygon areas for drawing manager.

## polylines

This is Default polygon areas for drawing manager.

## rectangles

This is Default rectangle areas for drawing manager.

## markers

This is Default markers areas for drawing manager.

## mapStyleOption

This props to determine google map area style.

```vue
<template>
  <GoogleMap
    api-key="xxxxxxx"
    :map-style-option="{ borderRadius: '9px', border: '4px solid orange' }"
  />
</template>
```

<img src="examples/MapStyleOption.png"/>

## loaderOptions

This props extra configrations for Google Map Loader

## drawingManagerOptions

This props extra configrations for Google Map Drawing Manager

```vue
<template>
  <GoogleMap
    drawing-mode="circle"
    api-key="xxxxxxx"
    :drawingManagerOptions="{ isSingle: false }"
  />
</template>
```

<img src="examples/MultipleShapes.png"/>

## drawingControlOptions

This props extra configrations for Google Map Drawing Manager Control Options

::: tip
This component uses google-maps-loader-helper package.

[Show Package Detail](https://edisdev.github.io/google-maps-loader-helper/)
:::