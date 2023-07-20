"use strict";(self.webpackChunkvue_google_maps_ui=self.webpackChunkvue_google_maps_ui||[]).push([[509],{464:function(n,a,s){s.r(a),s.d(a,{data:function(){return t}});const t={key:"v-8daa1a0e",path:"/",title:"Vue Google Map UI",lang:"en-US",frontmatter:{title:"Vue Google Map UI"},excerpt:"",headers:[{level:3,title:"Install via npm",slug:"install-via-npm",children:[]},{level:3,title:"Install via yarn",slug:"install-via-yarn",children:[]},{level:3,title:"Import Component",slug:"import-component",children:[]},{level:3,title:"Usage",slug:"usage",children:[]},{level:3,title:"Props",slug:"props",children:[]},{level:3,title:"Events",slug:"events",children:[]},{level:3,title:"Documentions",slug:"documentions",children:[]}],filePathRelative:"README.md",git:{updatedTime:1689838386e3,contributors:[]}}},218:function(n,a,s){s.r(a),s.d(a,{default:function(){return o}});var t=s(252);const e=(0,t.uE)('<h1 id="🗺-vue-google-maps-ui" tabindex="-1"><a class="header-anchor" href="#🗺-vue-google-maps-ui" aria-hidden="true">#</a> 🗺 Vue Google Maps UI</h1><h3 id="install-via-npm" tabindex="-1"><a class="header-anchor" href="#install-via-npm" aria-hidden="true">#</a> Install via npm</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> vue-google-maps-ui <span class="token parameter variable">--save</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="install-via-yarn" tabindex="-1"><a class="header-anchor" href="#install-via-yarn" aria-hidden="true">#</a> Install via yarn</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> vue-google-maps-ui\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="import-component" tabindex="-1"><a class="header-anchor" href="#import-component" aria-hidden="true">#</a> Import Component</h3><h4 id="global-register" tabindex="-1"><a class="header-anchor" href="#global-register" aria-hidden="true">#</a> Global Register</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// main.js file</span>\n<span class="token keyword">import</span> GoogleMap <span class="token keyword">from</span> <span class="token string">&#39;vue-google-maps-ui&#39;</span>\n<span class="token operator">...</span>\n<span class="token operator">...</span>\n\napp<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;Googlemap&#39;</span><span class="token punctuation">,</span> GoogleMap<span class="token punctuation">)</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="locale-register-for-options-api" tabindex="-1"><a class="header-anchor" href="#locale-register-for-options-api" aria-hidden="true">#</a> Locale Register For Options API</h4><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n    <span class="token keyword">import</span> GoogleMap <span class="token keyword">from</span> <span class="token string">&#39;vue-google-maps-ui&#39;</span>\n\n    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n      <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        GoogleMap\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h3><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Googlemap</span>\n    <span class="token attr-name">...props</span>\n    <span class="token attr-name">...events</span>\n  <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h3><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Googlemap</span>\n    <span class="token attr-name">apiKey</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">disabledSearch</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">inputClass</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">drawingMode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">autocomplete</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">currentAddress</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">location</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">language</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">circles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">polygons</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">polylines</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">rectangles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">markers</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">mapStyleOption</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">loaderOptions</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">drawingManagerOptions</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">drawingControlOptions</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span>\n  <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h3 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h3><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Googlemap</span>\n    <span class="token attr-name">@change-address</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">@update-circle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">@update-polygon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">@update-polyline</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">@update-rectangle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">@update-marker</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span>\n  <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="documentions" tabindex="-1"><a class="header-anchor" href="#documentions" aria-hidden="true">#</a> Documentions</h3>',17),p={href:"https://edisdev.github.io/google-maps-loader-helper/",target:"_blank",rel:"noopener noreferrer"},l={};var o=(0,s(789).Z)(l,[["render",function(n,a){const s=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[e,(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("a",p,[(0,t.Uk)("Go to google-maps-loader-helper Package Docs"),(0,t.Wm)(s)])])])],64)}]])}}]);