(self.webpackChunkmined_erp=self.webpackChunkmined_erp||[]).push([[357],{"./src/app/component/catalogo/saet/component/saet-grafica-linear/__stories__/saet-grafica-linear.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>saet_grafica_linear_stories});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),animations=__webpack_require__("./node_modules/@angular/platform-browser/fesm2020/animations.mjs"),swimlane_ngx_charts=__webpack_require__("./node_modules/@swimlane/ngx-charts/fesm2020/swimlane-ngx-charts.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var saet_grafica_linear_componentngResource=__webpack_require__("./src/app/component/catalogo/saet/component/saet-grafica-linear/saet-grafica-linear.component.css?ngResource"),saet_grafica_linear_componentngResource_default=__webpack_require__.n(saet_grafica_linear_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let SaetGraficaLinearComponent=class SaetGraficaLinearComponent{constructor(){this.multi=[],this.view=[700,300],this.legend=!0,this.showLabels=!0,this.animations=!0,this.xAxis=!0,this.yAxis=!0,this.showYAxisLabel=!0,this.showXAxisLabel=!0,this.xAxisLabel="",this.yAxisLabel="",this.timeline=!0,this.colorScheme={domain:["#5AA454","#E44D25","#CFC0BB","#7aa3e5","#a8385d","#aae3f5"]},Object.assign(this,{multi:this.multi})}onSelect(data){console.log("Item clicked",JSON.parse(JSON.stringify(data)))}onActivate(data){console.log("Activate",JSON.parse(JSON.stringify(data)))}onDeactivate(data){console.log("Deactivate",JSON.parse(JSON.stringify(data)))}static#_=this.ctorParameters=()=>[]};SaetGraficaLinearComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"app-saet-grafica-linear",template:'<ngx-charts-line-chart\n  [view]="view"\n  [legend]="legend"\n  [showXAxisLabel]="showXAxisLabel"\n  [showYAxisLabel]="showYAxisLabel"\n  [xAxis]="xAxis"\n  [yAxis]="yAxis"\n  [xAxisLabel]="xAxisLabel"\n  [yAxisLabel]="yAxisLabel"\n  [timeline]="timeline"\n  [results]="multi"\n  (select)="onSelect($event)"\n  (activate)="onActivate($event)"\n  (deactivate)="onDeactivate($event)"\n>\n</ngx-charts-line-chart>\n',styles:[saet_grafica_linear_componentngResource_default()]})],SaetGraficaLinearComponent);const saet_grafica_linear_stories={title:"Grafica linear",component:SaetGraficaLinearComponent,decorators:[(0,dist.moduleMetadata)({imports:[animations.BrowserAnimationsModule,swimlane_ngx_charts.a4]})]},Default=(args=>({component:SaetGraficaLinearComponent,props:args})).bind({});Default.args={multi:[{name:"Casos abordados por sexo-femenino",series:[{name:"ENE",value:20},{name:"FEB",value:30},{name:"MAR",value:25},{name:"ABR",value:40},{name:"MAY",value:50},{name:"JUN",value:70},{name:"JUL",value:60},{name:"AGO",value:65},{name:"SEP",value:55},{name:"OCT",value:70},{name:"NOV",value:75},{name:"DIC",value:80}]}],view:[700,400]},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"(args: SaetGraficaLinearComponent) => ({\n  component: SaetGraficaLinearComponent,\n  props: args\n})",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/app/component/catalogo/saet/component/saet-grafica-linear/saet-grafica-linear.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);