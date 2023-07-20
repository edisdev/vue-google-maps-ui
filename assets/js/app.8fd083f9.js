"use strict";(self.webpackChunkvue_google_maps_ui=self.webpackChunkvue_google_maps_ui||[]).push([[143],{716:function(e,t,a){a.d(t,{g:function(){return b}});var s=a(744),n=a(971),o=a(598),i=a(621),r=a(252),d=a(963),l=a(577);const p={class:"GoogleMap"},h={key:0,class:"SearchArea"},c=["disabled"];var u=a(182),g={name:"VueGoogleMapUI",emits:["change-address","update-circle","update-polygon","update-polyline","update-rectangle","update-marker"],props:{apiKey:{type:String,required:!0},disabledSearch:{type:Boolean},id:{type:String,default:"GoogleMapArea"},inputClass:{type:String,default:""},width:{type:String,default:"100%"},height:{type:String,default:"500px"},drawingMode:{type:String,default:""},autocomplete:{type:Boolean,default:!1},currentAddress:{type:Object,default:null},location:{type:Object,default:null},language:{type:String,default:""},circles:{type:Array,default:()=>[]},polygons:{type:Array,default:()=>[]},polylines:{type:Array,default:()=>[]},rectangles:{type:Array,default:()=>[]},markers:{type:Array,default:()=>[]},mapStyleOption:{type:Object,default:()=>({})},loaderOptions:{type:Object,default:()=>({})},drawingManagerOptions:{type:Object,default:()=>({})},drawingControlOptions:{type:Object,default:()=>({})}},data(){return{address:"",addressInfo:null}},computed:{mapStyle(){return{width:this.width,height:this.height,borderRadius:"inherit",...this.mapStyleOption}},GoogleMaps(){return new u.Z({apiKey:this.apiKey,el:this.$refs[this.id],libraries:["places","drawing"],language:this.language,location:this.location,loaderOptions:this.loaderOptions})},autoCompleteOptions(){return{fields:["name","geometry","formatted_address","place_id"],strictBounds:!0,types:["establishment"]}}},methods:{setAddressData(e){e&&(this.addressInfo=e,this.address=e.formatted_address,this.GoogleMaps.closeInfoWindow(),this.$emit("change-address",{info:e,address:this.address}))},setAutoComplete(){const e=this.GoogleMaps.setAutoComplete();this.setAddressData(e)},async setLocation(){const e=await this.GoogleMaps.setMarkerData();this.setAddressData(e)},setCurrentAddres(){const e=JSON.parse(JSON.stringify(this.currentAddress));if(e){const t=this.GoogleMaps.generateLocationData(e.geometry.location);e.geometry.location=t,this.setAddressData(e),this.GoogleMaps.setNewAddress(e),this.GoogleMaps.setMarkerPosition(t)}else 0===this.getShapesData().length&&this.setLocation()},mapFitWithCircle(e){this.GoogleMaps.drawingManager.mapFitWithCircle(e)},getShapeTypes(){return this.GoogleMaps.google.maps.drawing.OverlayType},getShapesData(){const e=this.getShapeTypes();return Object.values(e).reduce(((e,t)=>(e.push(...this[`${t}s`]),e)),[])},getShapesUpdateCallback(){const e=this.getShapeTypes();return Object.values(e).reduce(((e,t)=>(e[t]=e=>this.updateShapes(t,e),e)),{})},updateShapes(e,t){this.$emit(`update-${e}`,t)},createShapes(){const e=this.getShapeTypes();Object.values(e).forEach((e=>{const t=this[`${e}s`]||[];this.GoogleMaps.drawingManager.createShapes({type:e,shapes:t})}))},initMarker(){const e=this.drawingMode;this.GoogleMaps.createMarker({draggable:!e}),this.GoogleMaps.visibleMarker(e!==this.getShapeTypes().MARKER),this.GoogleMaps.markerAddListener("dragend",this.setLocation),this.GoogleMaps.markerAddListener("click",(()=>{this.GoogleMaps.openInfoWindow({content:this.address})}))},initAutoComplete(){if(this.autocomplete){const e=this.$refs.SearchInput;this.GoogleMaps.createAutoComplete(e,this.autoCompleteOptions),this.GoogleMaps.autoCompleteAddListener("place_changed",this.setAutoComplete)}},async initDrawingManager(){if(this.drawingMode){const e=this.getShapesUpdateCallback(),t={drawingMode:this.drawingMode,...this.drawingManagerOptions,drawingControlOptions:{drawingModes:[this.drawingMode],...this.drawingControlOptions}};this.GoogleMaps.createDrawingManager(t,e),this.createShapes()}},initGeocoder(){this.GoogleMaps.createGeocoder()},async initMap(){await this.GoogleMaps.init(),this.initGeocoder(),this.initMarker(),this.initAutoComplete(),this.initDrawingManager()}},async mounted(){await this.initMap(),this.setCurrentAddres()},watch:{language(){window.location.reload()}},beforeUnmount(){this.GoogleMaps.Loader.deleteScript(),this.address="",this.addressInfo=""}},m=(0,a(789).Z)(g,[["render",function(e,t,a,s,n,o){return(0,r.wg)(),(0,r.iD)("div",p,[a.autocomplete?((0,r.wg)(),(0,r.iD)("div",h,[(0,r.wy)((0,r._)("input",(0,r.dG)(e.$attrs,{ref:"SearchInput",class:a.inputClass,disabled:a.disabledSearch,"onUpdate:modelValue":t[0]||(t[0]=e=>n.address=e)}),null,16,c),[[d.YZ,n.address]])])):(0,r.kq)("",!0),(0,r._)("div",{ref:a.id,style:(0,l.j5)(o.mapStyle)},null,4)])}]]),f=(0,i.vW)((({app:e,router:t,siteData:a})=>{e.component("GoogleMap",m)}));const b=[s.Z,n.Z,o.Z,f]},947:function(e,t,a){a.d(t,{p:function(){return s}});const s=[a(51).Z]},611:function(e,t,a){a.d(t,{l:function(){return i}});var s=a(866),n=a(263),o=a(243);const i=[s.Z,n.Z,o.Z]},150:function(e,t,a){a.d(t,{Z:function(){return n}});var s=a(252);const n={404:(0,s.RC)((()=>a.e(277).then(a.bind(a,277)))),Layout:(0,s.RC)((()=>a.e(654).then(a.bind(a,654))))}},56:function(e,t,a){a.d(t,{b:function(){return n}});var s=a(252);const n={"v-8daa1a0e":(0,s.RC)((()=>a.e(509).then(a.bind(a,218)))),"v-6bd2cec7":(0,s.RC)((()=>a.e(431).then(a.bind(a,502)))),"v-63f25852":(0,s.RC)((()=>a.e(607).then(a.bind(a,361)))),"v-6ca815f4":(0,s.RC)((()=>a.e(661).then(a.bind(a,246)))),"v-a5f7a5bc":(0,s.RC)((()=>a.e(946).then(a.bind(a,828)))),"v-3706649a":(0,s.RC)((()=>a.e(88).then(a.bind(a,41))))}},706:function(e,t,a){a.d(t,{T:function(){return s}});const s={"v-8daa1a0e":()=>a.e(509).then(a.bind(a,464)).then((({data:e})=>e)),"v-6bd2cec7":()=>a.e(431).then(a.bind(a,965)).then((({data:e})=>e)),"v-63f25852":()=>a.e(607).then(a.bind(a,244)).then((({data:e})=>e)),"v-6ca815f4":()=>a.e(661).then(a.bind(a,67)).then((({data:e})=>e)),"v-a5f7a5bc":()=>a.e(946).then(a.bind(a,240)).then((({data:e})=>e)),"v-3706649a":()=>a.e(88).then(a.bind(a,801)).then((({data:e})=>e))}},634:function(e,t,a){a.d(t,{g:function(){return n}});var s=a(802);const n=[["v-8daa1a0e","/","Vue Google Map UI",["/index.html","/README.md"]],["v-6bd2cec7","/events.html","Events",["/events","/events.md"]],["v-63f25852","/examples.html","Component Using",["/examples","/examples.md"]],["v-6ca815f4","/installation.html","Installation",["/installation","/installation.md"]],["v-a5f7a5bc","/props.html","Props",["/props","/props.md"]],["v-3706649a","/404.html","",["/404"]]].reduce(((e,[t,a,n,o])=>(e.push({name:t,path:a,component:s.Y,meta:{title:n}},...o.map((e=>({path:e,redirect:a})))),e)),[{name:"404",path:"/:catchAll(.*)",component:s.Y}])},220:function(e,t,a){a.d(t,{H:function(){return s}});const s={base:"/vue-google-maps-ui/",lang:"en-US",title:"Vue Google Maps",description:"A Google Map Component for Vue",head:[["link",{rel:"icon",href:"favicon.ico"}]],locales:{}}},232:function(e,t,a){a.d(t,{f:function(){return s}});const s={editLinks:!0,repoLabel:"GitHub",repo:"https://github.com/edisdev/vue-google-maps-ui",docsRepo:"https://github.com/edisdev/vue-google-maps-ui",docsDir:"docs",docsBranch:"main",contributors:!0,backToTop:!0,sidebar:[{link:"/",text:"GETTING STARTED",collapsable:!1,children:["/installation/","/props/","/events/"]},{text:"EXAMPLES",children:["/examples/"]}],locales:{"/":{selectLanguageName:"English"}},navbar:[],logo:null,darkMode:!0,selectLanguageText:"Languages",selectLanguageAriaLabel:"Select language",sidebarDepth:2,editLink:!0,editLinkText:"Edit this page",lastUpdated:!0,lastUpdatedText:"Last Updated",contributorsText:"Contributors",notFound:["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."],backToHome:"Take me home",openInNewWindow:"open in new window",toggleDarkMode:"toggle dark mode"}}},function(e){e.O(0,[279,397],(function(){return 463,e(e.s=463)})),e.O()}]);