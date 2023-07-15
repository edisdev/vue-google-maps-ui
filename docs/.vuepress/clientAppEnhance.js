import { defineClientAppEnhance } from '@vuepress/client'
//
import GoogleMap from '@/components/GoogleMap.vue'
//
export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component('GoogleMap', GoogleMap)
})
