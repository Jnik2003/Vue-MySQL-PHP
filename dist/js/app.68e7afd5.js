(function(){"use strict";var e={9762:function(e,t,n){var a=n(3396);function o(e,t){const n=(0,a.up)("router-link"),o=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("nav",null,[(0,a.Wm)(n,{to:"/"},{default:(0,a.w5)((()=>[(0,a.Uk)("Home")])),_:1}),(0,a.Uk)(" | "),(0,a.Wm)(n,{to:"/about"},{default:(0,a.w5)((()=>[(0,a.Uk)("About")])),_:1})]),(0,a.Wm)(o)],64)}var r=n(89);const l={},u=(0,r.Z)(l,[["render",o]]);var i=u,s=n(9242),c=n(2483),h=n(7139);const d=e=>((0,a.dD)("data-v-4be6e83e"),e=e(),(0,a.Cn)(),e),m={class:"home"},f={class:"inputs"},p=["type","value"],v={for:"pages-count"},g=d((()=>(0,a._)("option",{value:"5"},"5",-1))),b=d((()=>(0,a._)("option",{value:"10"},"10",-1))),V=d((()=>(0,a._)("option",{value:"50"},"50",-1))),w=[g,b,V],y={border:"1",width:"100%",style:{"border-collapse":"collapse"}},_=d((()=>(0,a._)("tr",null,[(0,a._)("th",null,"N"),(0,a._)("th",null,"Дата"),(0,a._)("th",null,"Название"),(0,a._)("th",null,"Количество"),(0,a._)("th",null,"Расстояние")],-1))),S={class:"pages"},k=["onClick"];function C(e,t,n,o,r,l){const u=(0,a.up)("my-column-select"),i=(0,a.up)("my-select");return(0,a.wg)(),(0,a.iD)("div",m,[(0,a._)("div",f,[(0,a.Wm)(u,{column:r.column,sortValue:r.sortValue,onValueForSort:l.valueForSort,onChange:l.setSearchValue},null,8,["column","sortValue","onValueForSort","onChange"]),(0,a.Wm)(i,{term:r.term,termValue:r.termValue,sortValue:r.sortValue,onTermForSort:l.termForSort},null,8,["term","termValue","sortValue","onTermForSort"]),(0,a._)("input",{type:"date"==r.sortValue?"date":"description"==r.sortValue?"text":"number",value:r.searchValue,onInput:t[0]||(t[0]=(...e)=>l.updateSearchValue&&l.updateSearchValue(...e))},null,40,p),(0,a._)("form",null,[(0,a._)("label",v,"Всего записей: "+(0,h.zw)(r.totalEntries),1),(0,a._)("select",{name:"pages-count",onChange:t[1]||(t[1]=e=>l.changeLimit(e))},w,32)])]),(0,a._)("table",y,[_,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.filterResult,(e=>((0,a.wg)(),(0,a.iD)("tr",{key:e.id},[(0,a._)("td",null,(0,h.zw)(e.id),1),(0,a._)("td",null,(0,h.zw)(e.date),1),(0,a._)("td",null,(0,h.zw)(e.description),1),(0,a._)("td",null,(0,h.zw)(e.count),1),(0,a._)("td",null,(0,h.zw)(e.distance),1)])))),128))]),(0,a._)("div",S,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.totalPages,((e,t)=>((0,a.wg)(),(0,a.iD)("div",{class:(0,h.C_)(["page",{active:r.page===e}]),key:t,onClick:t=>l.changePage(e)},(0,h.zw)(e),11,k)))),128))])])}const T={for:"sort-select"},O=["disabled"],P=(0,a._)("option",{value:"",disabled:"",selected:""},"-- Выберите условие --",-1),D=["value"];function j(e,t,n,o,r,l){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("form",null,[(0,a._)("label",T,(0,h.zw)(),1),(0,a._)("select",{name:"city",id:"sort-select",onChange:t[0]||(t[0]=e=>l.selectTerm(e)),disabled:""==n.sortValue},[P,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.term,((e,t)=>((0,a.wg)(),(0,a.iD)("option",{value:e.value,key:t,ref_for:!0,ref:"opt"},(0,h.zw)(e.name),9,D)))),128))],40,O)])])}var F={name:"MySelect",props:{term:{type:Array},termValue:{type:String},sortValue:{type:String}},methods:{selectTerm(e){this.$emit("termForSort",e.target.value)}},computed:{}};const z=(0,r.Z)(F,[["render",j]]);var x=z;const E={for:"col-select"},M=(0,a._)("option",{value:"",disabled:"",selected:""},"-- Выберите колонку --",-1),A=["value"];function H(e,t,n,o,r,l){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("form",null,[(0,a._)("label",E,(0,h.zw)(),1),(0,a._)("select",{name:"city",id:"col-select",onChange:t[0]||(t[0]=(...e)=>l.selectColumn&&l.selectColumn(...e))},[M,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.column,((e,t)=>((0,a.wg)(),(0,a.iD)("option",{value:e.value,key:t},(0,h.zw)(e.name),9,A)))),128))],32)])])}var N={name:"MyColumnSelect",props:{column:{type:Array},sortValue:{type:String}},methods:{selectColumn(e){this.$emit("valueForSort",e.target.value)}}};const L=(0,r.Z)(N,[["render",H]]);var W=L,Y={name:"HomeView",data(){return{dataTable:[],column:[{value:"date",name:"Дата"},{value:"description",name:"Название"},{value:"count",name:"Количество"},{value:"distance",name:"Расстояние"}],sortValue:"",term:[{value:"same",name:"Равно"},{value:"more",name:"Больше"},{value:"less",name:"Меньше"},{value:"contains",name:"Содержит"}],termValue:"",searchValue:"",searchDate:(new Date).toISOString().slice(0,10),page:1,limit:5,totalPages:0,totalEntries:0}},components:{MySelect:x,MyColumnSelect:W},methods:{async fetchPosts(){try{this.isPostLoading=!0;const e=await fetch("http://testtask/api/request.php",{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:JSON.stringify({limit:this.limit,page:this.page})}),t=await e.text();this.dataTable=JSON.parse(t)}catch(e){console.log("err")}finally{this.isPostLoading=!1}},async fetchCount(){try{const e=await fetch("http://testtask/api/request.php",{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/x-www-form-urlencoded"}}),t=await e.text();this.dataTable=JSON.parse(t),this.totalPages=Math.ceil(this.dataTable.length/this.limit),this.totalEntries=this.dataTable.length}catch(e){console.log("err2")}},valueForSort(e){this.sortValue=e},termForSort(e){this.termValue=e},updateSearchValue(e){this.searchValue=e.target.value},setSearchValue(){"date"==this.sortValue?this.searchValue=this.searchDate:this.searchValue=""},changePage(e){this.page=e,this.fetchPosts()},changeLimit(e){console.log(e.target.value),this.limit=e.target.value,this.fetchCount(),this.fetchPosts()}},computed:{filterResult(){return this.sortValue?this.dataTable.filter((e=>0==this.searchValue||""==this.searchValue||"date"==this.sortValue&&""==this.termValue?e[this.sortValue]:"same"==this.termValue?e[this.sortValue]==this.searchValue:"more"==this.termValue?e[this.sortValue]>this.searchValue:"less"==this.termValue?e[this.sortValue]<this.searchValue:"count"==this.sortValue||"distance"==this.sortValue&&""==this.termValue?e[this.sortValue]:"contains"==this.termValue&&"description"==this.sortValue&&e[this.sortValue].includes(this.searchValue))):this.dataTable}},mounted(){this.fetchCount(),this.fetchPosts()},watch:{}};const K=(0,r.Z)(Y,[["render",C],["__scopeId","data-v-4be6e83e"]]);var Z=K;const q=[{path:"/",name:"home",component:Z},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,7381))}],I=(0,c.p7)({history:(0,c.PO)("/"),routes:q});var J=I,U=n(65),R=(0,U.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});const $=s.ri(i);$.use(R).use(J).mount("#app")}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,a,o,r){if(!a){var l=1/0;for(c=0;c<e.length;c++){a=e[c][0],o=e[c][1],r=e[c][2];for(var u=!0,i=0;i<a.length;i++)(!1&r||l>=r)&&Object.keys(n.O).every((function(e){return n.O[e](a[i])}))?a.splice(i--,1):(u=!1,r<l&&(l=r));if(u){e.splice(c--,1);var s=o();void 0!==s&&(t=s)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[a,o,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,a){return n.f[a](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.700f8d14.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="test_task:";n.l=function(a,o,r,l){if(e[a])e[a].push(o);else{var u,i;if(void 0!==r)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var h=s[c];if(h.getAttribute("src")==a||h.getAttribute("data-webpack")==t+r){u=h;break}}u||(i=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+r),u.src=a),e[a]=[o];var d=function(t,n){u.onerror=u.onload=null,clearTimeout(m);var o=e[a];if(delete e[a],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),i&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={143:0};n.f.j=function(t,a){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)a.push(o[2]);else{var r=new Promise((function(n,a){o=e[t]=[n,a]}));a.push(o[2]=r);var l=n.p+n.u(t),u=new Error,i=function(a){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var r=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.src;u.message="Loading chunk "+t+" failed.\n("+r+": "+l+")",u.name="ChunkLoadError",u.type=r,u.request=l,o[1](u)}};n.l(l,i,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,r,l=a[0],u=a[1],i=a[2],s=0;if(l.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(i)var c=i(n)}for(t&&t(a);s<l.length;s++)r=l[s],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(c)},a=self["webpackChunktest_task"]=self["webpackChunktest_task"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(9762)}));a=n.O(a)})();
//# sourceMappingURL=app.68e7afd5.js.map