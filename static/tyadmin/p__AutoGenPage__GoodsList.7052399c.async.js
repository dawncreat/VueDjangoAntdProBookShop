(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12,295],{"06pI":function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"f",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"g",(function(){return m})),n.d(t,"e",(function(){return h})),n.d(t,"d",(function(){return j})),n.d(t,"c",(function(){return y}));var r=n("WmNS"),a=n.n(r),c=n("9og8"),i=n("io9h"),u=n("+n12");function o(e){return s.apply(this,arguments)}function s(){return s=Object(c["a"])(a.a.mark((function e(t){return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i["a"])("/api/xadmin/v1/goods",{params:t}));case 1:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}function l(e){return p.apply(this,arguments)}function p(){return p=Object(c["a"])(a.a.mark((function e(t){return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i["a"])("/api/xadmin/v1/goods/".concat(t),{method:"DELETE"}));case 1:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}function d(e){return f.apply(this,arguments)}function f(){return f=Object(c["a"])(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=["goods_front_image"],r=Object(u["c"])(t,n),e.abrupt("return",Object(i["a"])("/api/xadmin/v1/goods",{method:"POST",data:r}));case 3:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function m(e,t){return b.apply(this,arguments)}function b(){return b=Object(c["a"])(a.a.mark((function e(t,n){var r,c;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=["goods_front_image"],c=Object(u["c"])(t,r),e.abrupt("return",Object(i["a"])("/api/xadmin/v1/goods/".concat(n),{method:"PUT",data:c}));case 3:case"end":return e.stop()}}),e)}))),b.apply(this,arguments)}function h(e){return v.apply(this,arguments)}function v(){return v=Object(c["a"])(a.a.mark((function e(t){return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i["a"])("/api/xadmin/v1/goods/verbose_name",{params:t}));case 1:case"end":return e.stop()}}),e)}))),v.apply(this,arguments)}function j(e){return O.apply(this,arguments)}function O(){return O=Object(c["a"])(a.a.mark((function e(t){return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i["a"])("/api/xadmin/v1/goods/list_display",{params:t}));case 1:case"end":return e.stop()}}),e)}))),O.apply(this,arguments)}function y(e){return w.apply(this,arguments)}function w(){return w=Object(c["a"])(a.a.mark((function e(t){return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i["a"])("/api/xadmin/v1/goods/display_order",{params:t}));case 1:case"end":return e.stop()}}),e)}))),w.apply(this,arguments)}},"4KAj":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888.3 757.4h-53.8c-4.2 0-7.7 3.5-7.7 7.7v61.8H197.1V197.1h629.8v61.8c0 4.2 3.5 7.7 7.7 7.7h53.8c4.2 0 7.7-3.4 7.7-7.7V158.7c0-17-13.7-30.7-30.7-30.7H158.7c-17 0-30.7 13.7-30.7 30.7v706.6c0 17 13.7 30.7 30.7 30.7h706.6c17 0 30.7-13.7 30.7-30.7V765.1c0-4.3-3.5-7.7-7.7-7.7zm18.6-251.7L765 393.7c-5.3-4.2-13-.4-13 6.3v76H438c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z"}}]},name:"export",theme:"outlined"},c=a,i=n("6VBw"),u=function(e,t){return r["createElement"](i["a"],Object.assign({},e,{ref:t,icon:c}))};u.displayName="ExportOutlined";t["default"]=r["forwardRef"](u)},IpcI:function(e,t,n){e.exports={container:"container___nT1ry"}},PkmJ:function(e,t,n){"use strict";n("DZo9");var r=n("8z0m"),a=n("oBTY"),c=n("fWQN"),i=n("mtLc"),u=n("yKVA"),o=n("879j"),s=n("q1tI"),l=n.n(s),p=n("ye1Q"),d=n("xvlK"),f=n("IpcI"),m=n.n(f);function b(e,t){var n=new FileReader;n.addEventListener("load",(function(){return t(n.result)})),n.readAsDataURL(e)}var h=function(e){Object(u["a"])(n,e);var t=Object(o["a"])(n);function n(e){var r;return Object(c["a"])(this,n),r=t.call(this,e),r.state={loading:!1,fileList:[]},r.handleChange=function(e){var t=Object(a["a"])(e.fileList);t=t.slice(-1),t=t.map((function(e){return e.response&&(e.url=e.response.url),e})),r.props.onChange(e),e.file&&b(t[0].originFileObj,(function(e){return r.setState({fileList:t,imageUrl:e,loading:!1})}))},r}return Object(i["a"])(n,[{key:"render",value:function(e){var t=l.a.createElement("div",null,this.state.loading?l.a.createElement(p["default"],null):l.a.createElement(d["default"],null),l.a.createElement("div",{className:"ant-upload-text"},"Upload")),n=this.state.imageUrl;return"img"in this.props&&"string"==typeof this.props.img&&(n=this.props.img),l.a.createElement(r["a"],{name:"avatar",listType:"picture-card",showUploadList:!1,beforeUpload:this.props.beforeUpload,onChange:this.handleChange,fileList:this.state.fileList},n?l.a.createElement("img",{src:n,alt:"avatar",style:{width:"100%"}}):t)}}]),n}(l.a.Component);t["a"]=function(e){return l.a.createElement("div",{className:m.a.container},l.a.createElement("div",{id:"components-upload-demo-avatar"},l.a.createElement(h,e)))}},SfMD:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"f",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"g",(function(){return m})),n.d(t,"e",(function(){return h})),n.d(t,"d",(function(){return j})),n.d(t,"c",(function(){return y}));var r=n("WmNS"),a=n.n(r),c=n("9og8"),i=n("io9h"),u=n("+n12");function o(e){return s.apply(this,arguments)}function s(){return s=Object(c["a"])(a.a.mark((function e(t){return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i["a"])("/api/xadmin/v1/goods_category",{params:t}));case 1:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}function l(e){return p.apply(this,arguments)}function p(){return p=Object(c["a"])(a.a.mark((function e(t){return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i["a"])("/api/xadmin/v1/goods_category/".concat(t),{method:"DELETE"}));case 1:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}function d(e){return f.apply(this,arguments)}function f(){return f=Object(c["a"])(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=[],r=Object(u["c"])(t,n),e.abrupt("return",Object(i["a"])("/api/xadmin/v1/goods_category",{method:"POST",data:r}));case 3:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function m(e,t){return b.apply(this,arguments)}function b(){return b=Object(c["a"])(a.a.mark((function e(t,n){var r,c;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=[],c=Object(u["c"])(t,r),e.abrupt("return",Object(i["a"])("/api/xadmin/v1/goods_category/".concat(n),{method:"PUT",data:c}));case 3:case"end":return e.stop()}}),e)}))),b.apply(this,arguments)}function h(e){return v.apply(this,arguments)}function v(){return v=Object(c["a"])(a.a.mark((function e(t){return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i["a"])("/api/xadmin/v1/goods_category/verbose_name",{params:t}));case 1:case"end":return e.stop()}}),e)}))),v.apply(this,arguments)}function j(e){return O.apply(this,arguments)}function O(){return O=Object(c["a"])(a.a.mark((function e(t){return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i["a"])("/api/xadmin/v1/goods_category/list_display",{params:t}));case 1:case"end":return e.stop()}}),e)}))),O.apply(this,arguments)}function y(e){return w.apply(this,arguments)}function w(){return w=Object(c["a"])(a.a.mark((function e(t){return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i["a"])("/api/xadmin/v1/goods_category/display_order",{params:t}));case 1:case"end":return e.stop()}}),e)}))),w.apply(this,arguments)}},xCIH:function(e,t,n){"use strict";n.r(t);n("qVdP");var r=n("jsC+"),a=(n("lUTK"),n("BvKs")),c=(n("5NDa"),n("5rEg")),i=(n("+L6B"),n("2/Rp")),u=n("oBTY"),o=(n("P2fV"),n("NJEC")),s=(n("/zsF"),n("PArb")),l=n("PpiC"),p=n("WmNS"),d=n.n(p),f=n("k1fw"),m=(n("miYZ"),n("tsqr")),b=n("9og8"),h=n("tJVT"),v=(n("y8nQ"),n("Vl3Y")),j=(n("OaEy"),n("2fM7")),O=n("G3dp"),y=n("/MfK"),w=n("xvlK"),g=n("4KAj"),x=n("8Skl"),E=n("q1tI"),k=n.n(E),_=n("Hx5s"),I=n("56R7"),C=(n("2qtc"),n("kLXV")),S=function(e){var t=e.modalVisible,n=e.onCancel;return k.a.createElement(C["a"],{destroyOnClose:!0,title:"\u65b0\u5efa\u5546\u54c1\u4fe1\u606f",visible:t,width:1200,onCancel:function(){return n()},footer:null},e.children)},V=S,R=n("06pI"),T=function(e){var t=e.modalVisible,n=e.onCancel;return k.a.createElement(C["a"],{destroyOnClose:!0,title:"\u4fee\u6539\u5546\u54c1\u4fe1\u606f",visible:t,width:1200,onCancel:function(){return n()},footer:null},e.children)},L=T,A=n("PkmJ"),F=n("SfMD"),K=n("wd/R"),q=n.n(K),N=n("+n12"),P=(n("Lzxq"),j["a"].Option,v["a"].Item,function(){var e=Object(E["useState"])(!1),t=Object(h["a"])(e,2),n=t[0],p=t[1],v=Object(E["useState"])(!1),j=Object(h["a"])(v,2),C=j[0],S=j[1],T=Object(E["useState"])({}),K=Object(h["a"])(T,2),P=K[0],U=K[1],z=Object(E["useRef"])(),B=Object(E["useRef"])(),D=Object(E["useRef"])(),J=function(){var e=Object(b["a"])(d.a.mark((function e(t){var n;return d.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=m["b"].loading("\u6b63\u5728\u6dfb\u52a0"),e.prev=1,e.next=4,Object(R["a"])(Object(f["a"])({},t));case 4:return n(),m["b"].success("\u6dfb\u52a0\u6210\u529f"),e.abrupt("return",!0);case 9:return e.prev=9,e.t0=e["catch"](1),e.abrupt("return",Object(N["e"])(e.t0,B,n,"\u6dfb\u52a0"));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(b["a"])(d.a.mark((function e(t,n){var r;return d.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=m["b"].loading("\u6b63\u5728\u4fee\u6539"),e.prev=1,e.next=4,Object(R["g"])(t,n);case 4:return r(),m["b"].success("\u4fee\u6539\u6210\u529f"),e.abrupt("return",!0);case 9:return e.prev=9,e.t0=e["catch"](1),e.abrupt("return",Object(N["e"])(e.t0,D,r,"\u4fee\u6539"));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}(),H=function(){var e=Object(b["a"])(d.a.mark((function e(t){var n,r;return d.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=m["b"].loading("\u6b63\u5728\u5220\u9664"),t){e.next=3;break}return e.abrupt("return",!0);case 3:return e.prev=3,r=t.map((function(e){return e.id})).join(","),e.next=7,Object(R["f"])(r);case 7:return n(),m["b"].success("\u5220\u9664\u6210\u529f"),e.abrupt("return",!0);case 12:return e.prev=12,e.t0=e["catch"](3),n(),e.abrupt("return",Object(N["h"])(e.t0,"\u5220\u9664"));case 16:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}(),W=["add_time"],Y=[{title:"id",hideInForm:!0,hideInSearch:!0,dataIndex:"id",valueType:"digit",rules:[]},{title:"\u5546\u54c1\u7c7b\u76ee",dataIndex:"category",rules:[{required:!0,message:"\u5546\u54c1\u7c7b\u76ee\u4e3a\u5fc5\u586b\u9879"}],renderFormItem:function(e,t){var n=t.value,r=t.onChange;return Object(N["f"])(e,n,r,he)},render:function(e,t){return Object(N["v"])(e,ye)}},{title:"\u5546\u54c1\u552f\u4e00\u8d27\u53f7",initialValue:"",dataIndex:"goods_sn",rules:[]},{title:"\u5546\u54c1\u540d",dataIndex:"name",rules:[{required:!0,message:"\u5546\u54c1\u540d\u4e3a\u5fc5\u586b\u9879"}]},{title:"\u70b9\u51fb\u6570",initialValue:0,dataIndex:"click_num",valueType:"digit",rules:[]},{title:"\u5546\u54c1\u9500\u552e\u91cf",initialValue:0,dataIndex:"sold_num",valueType:"digit",rules:[]},{title:"\u6536\u85cf\u6570",initialValue:0,dataIndex:"fav_num",valueType:"digit",rules:[]},{title:"\u5e93\u5b58\u6570",initialValue:0,dataIndex:"goods_num",valueType:"digit",rules:[]},{title:"\u5e02\u573a\u4ef7\u683c",initialValue:"0",dataIndex:"market_price",rules:[]},{title:"\u672c\u5e97\u4ef7\u683c",initialValue:"0",dataIndex:"shop_price",rules:[]},{title:"\u5546\u54c1\u7b80\u77ed\u63cf\u8ff0",dataIndex:"goods_brief",valueType:"textarea",rules:[{required:!0,message:"\u5546\u54c1\u7b80\u77ed\u63cf\u8ff0\u4e3a\u5fc5\u586b\u9879"}]},{title:"\u5185\u5bb9",hideInSearch:!0,initialValue:"",dataIndex:"goods_desc",valueType:"textarea",rules:[],customCol:N["x"],ellipsis:!0,renderFormItem:function(e,t,n){t.type,t.defaultRender;var r=Object(l["a"])(t,["type","defaultRender"]);return Object(N["y"])(n,r.id)}},{title:"\u662f\u5426\u627f\u62c5\u8fd0\u8d39",initialValue:!0,dataIndex:"ship_free",rules:[],render:function(e,t){return Object(N["a"])(e)},renderFormItem:function(e,t){var n=t.value,r=t.onChange;return Object(N["b"])(n,r)}},{title:"\u5c01\u9762\u56fe",hideInSearch:!0,dataIndex:"goods_front_image",rules:[],render:function(e,t){return k.a.createElement("img",{src:e,width:"80px",alt:""})},renderFormItem:function(e,t,n){t.type,t.defaultRender,Object(l["a"])(t,["type","defaultRender"]);var r=n.getFieldValue("goods_front_image");return k.a.createElement(A["a"],{img:r})}},{title:"\u662f\u5426\u65b0\u54c1",initialValue:!1,dataIndex:"is_new",rules:[],render:function(e,t){return Object(N["a"])(e)},renderFormItem:function(e,t){var n=t.value,r=t.onChange;return Object(N["b"])(n,r)}},{title:"\u662f\u5426\u70ed\u9500",initialValue:!1,dataIndex:"is_hot",rules:[],render:function(e,t){return Object(N["a"])(e)},renderFormItem:function(e,t){var n=t.value,r=t.onChange;return Object(N["b"])(n,r)}},{title:"\u6dfb\u52a0\u65f6\u95f4",hideInForm:!0,dataIndex:"add_time",valueType:"dateTime",rules:[]},{title:"\u64cd\u4f5c",dataIndex:"option",valueType:"option",fixed:"right",width:100,render:function(e,t){return k.a.createElement(k.a.Fragment,null,k.a.createElement(O["default"],{title:"\u7f16\u8f91",className:"icon",onClick:Object(b["a"])(d.a.mark((function e(){return d.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.add_time=null===t.add_time?t.add_time:q()(t.add_time),S(!0),U(t);case 3:case"end":return e.stop()}}),e)})))}),k.a.createElement(s["a"],{type:"vertical"}),k.a.createElement(o["a"],{title:"\u60a8\u786e\u5b9a\u8981\u5220\u9664\u5546\u54c1\u4fe1\u606f\u5417\uff1f",placement:"topRight",onConfirm:function(){H([t]),z.current.reloadAndRest()},okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88"},k.a.createElement(y["default"],{title:"\u5220\u9664",className:"icon"})))}}],Q=Object(N["j"])(Y),Z=Object(E["useState"])([]),G=Object(h["a"])(Z,2),X=G[0],$=G[1];Object(E["useEffect"])((function(){Object(R["c"])().then((function(e){$(e.form_order)}))}),[]);var ee=Object(N["r"])(Q),te=Object(N["j"])(Y),ne=Object(N["t"])(X,te),re=Object(u["a"])(ne),ae=Object(N["j"])(ne),ce=Object(N["s"])(ae),ie=Object(E["useState"])({}),ue=Object(h["a"])(ie,2),oe=ue[0],se=ue[1],le=Object(E["useState"])({}),pe=Object(h["a"])(le,2),de=pe[0],fe=pe[1];Object(E["useEffect"])((function(){Object(R["d"])().then((function(e){se(e)}))}),[]);var me=Object(E["useState"])([]),be=Object(h["a"])(me,2),he=be[0],ve=be[1];Object(E["useEffect"])((function(){Object(F["b"])({all:1}).then((function(e){ve(e)}))}),[]);var je=Object(E["useState"])([]),Oe=Object(h["a"])(je,2),ye=Oe[0],we=Oe[1];return Object(E["useEffect"])((function(){Object(F["e"])().then((function(e){we(e)}))}),[]),k.a.createElement(_["c"],null,k.a.createElement(I["a"],{beforeSearchSubmit:function(e){return Object(N["i"])(e,W),e},params:de,scroll:{x:"100%"},columnsStateMap:oe,onColumnsStateChange:function(e){return se(e)},headerTitle:"\u5546\u54c1\u4fe1\u606f\u8868\u683c",actionRef:z,rowKey:"id",toolBarRender:function(e,t){var n=t.selectedRows;return[k.a.createElement(i["a"],{type:"primary",onClick:function(){return p(!0)}},k.a.createElement(w["default"],null)," \u65b0\u5efa"),k.a.createElement(i["a"],{type:"primary",onClick:function(){return Object(N["k"])(de,R["b"],ee,"\u5546\u54c1\u4fe1\u606f-All")}},k.a.createElement(g["default"],null)," \u5bfc\u51fa\u5168\u90e8"),k.a.createElement(c["a"].Search,{style:{marginRight:20},placeholder:"\u641c\u7d22\u5546\u54c1\u4fe1\u606f",onSearch:function(e){fe({search:e}),z.current.reload()}}),n&&n.length>0&&k.a.createElement(r["a"],{overlay:k.a.createElement(a["a"],{onClick:function(){var e=Object(b["a"])(d.a.mark((function e(t){return d.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("remove"!==t.key){e.next=6;break}return e.next=3,H(n);case 3:z.current.reloadAndRest(),e.next=7;break;case 6:"export_current"===t.key&&Object(N["l"])(n,ee,"\u5546\u54c1\u4fe1\u606f-select");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),selectedKeys:[]},k.a.createElement(a["a"].Item,{key:"remove"},"\u6279\u91cf\u5220\u9664"),k.a.createElement(a["a"].Item,{key:"export_current"},"\u5bfc\u51fa\u5df2\u9009"))},k.a.createElement(i["a"],null,"\u6279\u91cf\u64cd\u4f5c ",k.a.createElement(x["default"],null)))]},tableAlertRender:function(e){var t=e.selectedRowKeys;e.selectedRows;return t.length>0&&k.a.createElement("div",null,"\u5df2\u9009\u62e9"," ",k.a.createElement("a",{style:{fontWeight:600}},t.length)," ","\u9879\xa0\xa0")},request:function(e,t,n){return Object(R["b"])(Object(f["a"])(Object(f["a"])({},e),{},{sorter:t,filter:n}))},columns:ee,rowSelection:{}}),k.a.createElement(V,{onCancel:function(){return p(!1)},modalVisible:n},k.a.createElement(I["a"],{formRef:B,onSubmit:function(){var e=Object(b["a"])(d.a.mark((function e(t){var n;return d.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return Object(N["z"])(t),e.next=3,J(t);case 3:n=e.sent,n&&(p(!1),z.current&&z.current.reload());case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),rowKey:"key",type:"form",search:N["A"],form:{labelCol:{span:6},labelAlign:"left"},columns:re,rowSelection:{}})),k.a.createElement(L,{onCancel:function(){return S(!1)},modalVisible:C},k.a.createElement(I["a"],{formRef:D,onSubmit:function(){var e=Object(b["a"])(d.a.mark((function e(t){var n;return d.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return Object(N["z"])(t),e.next=3,M(t,P.id);case 3:n=e.sent,n&&(S(!1),z.current&&z.current.reload());case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),rowKey:"key",search:N["A"],type:"form",form:{initialValues:P,labelCol:{span:6},labelAlign:"left"},columns:ce,rowSelection:{}})))});t["default"]=P}}]);