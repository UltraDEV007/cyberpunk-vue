(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{426:function(e,t,a){},553:function(e,t,a){"use strict";var n=a(426);a.n(n).a},592:function(e,t,a){"use strict";a.r(t);var n=a(470),o=a(471),c=a(472),i=a(473),r=a(474),s=a(261),d={name:"Demo",mixins:[a(271).a],components:{CLayout:n.a,CHeader:o.a,CAside:c.a,CMain:i.a,CFooter:r.a,CIcon:s.a},data:function(){return{codeStr:'\n        <c-layout>\n          <c-header height="50">Header</c-header>\n          <c-main>Main</c-main>\n          <c-footer height="50">Footer</c-footer>\n        </c-layout>\n\n        <c-layout>\n          <c-aside width="200">Aside</c-aside>\n          <c-layout>\n            <c-header height="50">Header</c-header>\n            <c-main>Main</c-main>\n            <c-footer height="50">Footer</c-footer>\n          </c-layout>\n        </c-layout>\n\n        <c-layout>\n          <c-header height="50">Header</c-header>\n          <c-layout>\n            <c-aside width="200">Aside</c-aside>\n            <c-main>Main</c-main>\n          </c-layout>\n          <c-footer height="50">Footer</c-footer>\n        </c-layout>\n\n        <c-layout>\n          <c-header height="50">Header</c-header>\n          <c-layout>\n            <c-aside width="200">Aside</c-aside>\n            <c-layout>\n              <c-main>Main</c-main>\n              <c-footer height="50">Footer</c-footer>\n            </c-layout>\n          </c-layout>\n        </c-layout>\n\n        <style>\n          header,\n          footer,\n          main,\n          aside, {\n            font-size: 16px;\n            font-weight: bold;\n            color: #2E2E32;\n          }\n          header,\n          footer {\n            background-color: #99a9bf;\n            line-height: 50px;\n            text-align: center;\n          }\n\n          main,\n          aside {\n            background-color: #d3dce6;\n            line-height: 70px;\n            text-align: center;\n          }\n\n          aside {\n            background-color: #80889c;\n          }\n        </style>\n      '}}},h=(a(553),a(2)),l=Object(h.a)(d,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"demo"},[a("h2",[e._v("基础用法")]),e._v(" "),a("p",[e._v("用于布局的容器组件，方便快速搭建页面的基本结构")]),e._v(" "),a("div",{staticClass:"component-wrapper"},[a("div",{staticClass:"component-wrapper-demo"},[a("c-layout",[a("c-header",{attrs:{height:"50"}},[e._v("Header")]),e._v(" "),a("c-main",[e._v("Main")]),e._v(" "),a("c-footer",{attrs:{height:"50"}},[e._v("Footer")])],1),e._v(" "),a("c-layout",[a("c-aside",{attrs:{width:"200"}},[e._v("Aside")]),e._v(" "),a("c-layout",[a("c-header",{attrs:{height:"50"}},[e._v("Header")]),e._v(" "),a("c-main",[e._v("Main")]),e._v(" "),a("c-footer",{attrs:{height:"50"}},[e._v("Footer")])],1)],1),e._v(" "),a("c-layout",[a("c-header",{attrs:{height:"50"}},[e._v("Header")]),e._v(" "),a("c-layout",[a("c-aside",{attrs:{width:"200"}},[e._v("Aside")]),e._v(" "),a("c-main",[e._v("Main")])],1),e._v(" "),a("c-footer",{attrs:{height:"50"}},[e._v("Footer")])],1),e._v(" "),a("c-layout",[a("c-header",{attrs:{height:"50"}},[e._v("Header")]),e._v(" "),a("c-layout",[a("c-aside",{attrs:{width:"200"}},[e._v("Aside")]),e._v(" "),a("c-layout",[a("c-main",[e._v("Main")]),e._v(" "),a("c-footer",{attrs:{height:"50"}},[e._v("Footer")])],1)],1)],1)],1),e._v(" "),a("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"code-content",staticStyle:{height:"0"}},[a("div",{staticClass:"code-content-height"},[a("pre",[a("code",{staticClass:"html"},[e._v(e._s(e.parseCode(e.codeStr)))])])])]),e._v(" "),a("div",{staticClass:"lock-code",on:{click:function(t){return e.showCode(0)}}},[a("c-icon",{staticClass:"icon-down",attrs:{type:e.isShowCode(0,"icon","cn")}}),e._v(" "),a("span",{staticClass:"lock-code-word"},[e._v(e._s(e.isShowCode(0,"text","cn")))])],1)])])}),[],!1,null,"5c76999e",null);t.default=l.exports}}]);