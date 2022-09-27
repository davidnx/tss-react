(this.webpackJsonpspa=this.webpackJsonpspa||[]).push([[0],{513:function(e,r,t){"use strict";t.r(r);t(277),t(295);var n=t(0),o=t.n(n),a=t(19),c=Object.fromEntries?Object.fromEntries:function(e){if(!e||!e[Symbol.iterator])throw new Error("Object.fromEntries() requires a single iterable argument");var r={};return Object.keys(e).forEach((function(t){var n=Object(a.a)(e[t],2),o=n[0],c=n[1];r[o]=c})),r};function s(e){return Object.keys(e)}function i(e,r){if(!e)throw new Error(r)}function l(e,r){return r}var d=function e(r){for(var t=r.length,n=0,o="";n<t;n++){var a=r[n];if(null!=a){var c=void 0;switch(typeof a){case"boolean":break;case"object":if(Array.isArray(a))c=e(a);else for(var s in i(!l(0,!1)),c="",a)a[s]&&s&&(c&&(c+=" "),c+=s);break;default:c=a}c&&(o&&(o+=" "),o+=c)}}return o},u=t(55),b=t(37),h=t(33);function p(e){return e instanceof Object&&!("styles"in e)&&!("length"in e)&&!("__emotion_styles"in e)}var j=function(){function e(e,r,t){var n=[],o=Object(b.a)(e,n,t);return n.length<2?t:o+r(n)}return{createCssAndCx:function(r){var t=r.cache,n=function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];var o=Object(u.a)(r,t.registered);Object(b.b)(t,o,!1);var a="".concat(t.key,"-").concat(o.name),c=r[0];return p(c)&&m.saveClassNameCSSObjectMapping(t,a,c),a};return{css:n,cx:function(){for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];var c=d(o),s=m.fixClassName(t,c,n);return e(t.registered,n,s)}}}}}(),f=j.createCssAndCx;function v(e){var r=e.useCache;return{useCssAndCx:function(){var e=r(),t=function(e,r){var t=Object(n.useRef)();return(!t.current||r.length!==t.current.prevDeps.length||t.current.prevDeps.map((function(e,t){return e===r[t]})).indexOf(!1)>=0)&&(t.current={v:e(),prevDeps:Object(h.a)(r)}),t.current.v}((function(){return f({cache:e})}),[e]);return{css:t.css,cx:t.cx}}}}var m=function(){var e=new WeakMap;return{saveClassNameCSSObjectMapping:function(r,t,n){var o=e.get(r);void 0===o&&(o=new Map,e.set(r,o)),o.set(t,n)},fixClassName:function(r,t,n){var o=e.get(r);return d(function(e){var r=!1;return e.map((function(e){var t,n=Object(a.a)(e,2),o=n[0],c=n[1];if(void 0===c)return o;if(r)t={"&&":c};else for(var s in t=o,c)if(s.startsWith("@media")){r=!0;break}return t}))}(t.split(" ").map((function(e){return[e,null===o||void 0===o?void 0:o.get(e)]}))).map((function(e){return"string"===typeof e?e:n(e)})))}}}();function g(e){if(!(e instanceof Object)||"function"===typeof e)return e;var r=[];for(var t in e){var n=e[t],o=typeof n;if("string"!==o&&("number"!==o||isNaN(n))&&"boolean"!==o&&void 0!==n&&null!==n)return e;r.push("".concat(t,":").concat(o,"_").concat(n))}return"xSqLiJdLMd9s"+r.join("|")}function x(e,r,t){if(!(r instanceof Object))return e;var n={};return s(e).forEach((function(o){return n[o]=t(e[o],r[o])})),s(r).forEach((function(t){if(!(t in e)){var o=r[t];"string"===typeof o&&(n[t]=o)}})),n}var O=t(31),y=0;function k(e){var r=e.useTheme,t=e.cache;function o(){var e=Object(O.d)(),r=null!==t&&void 0!==t?t:e;if(null===r)throw new Error(["In order to get SSR working with tss-react you need to explicitly provide an Emotion cache.","MUI users be aware: This is not an error strictly related to tss-react, with or without tss-react,","MUI needs an Emotion cache to be provided for SSR to work.","Here is the MUI documentation related to SSR setup: https://mui.com/material-ui/guides/server-rendering/","TSS provides helper that makes the process of setting up SSR easier: https://docs.tss-react.dev/ssr"].join("\n"));return r}var a=v({useCache:o}).useCssAndCx;return{makeStyles:function(e){var t=null!==e&&void 0!==e?e:{},d=t.name,u=t.uniqId,b=void 0===u?y++:u,h="object"!==typeof d?d:Object.keys(d)[0];return function(e){var t="function"===typeof e?e:function(){return e};return function(e,d){var u,p,j=r(),f=a(),v=f.css,m=f.cx,O=o(),y=Object(n.useMemo)((function(){var r={},n="undefined"!==typeof Proxy&&new Proxy({},{get:function(e,t){return"symbol"===typeof t&&i(!1),r[t]="".concat(O.key,"-").concat(b).concat(void 0!==h?"-".concat(h):"","-").concat(t,"-ref")}}),o=t(j,e,n||{}),a=c(s(o).map((function(e){var t=o[e];return t.label||(t.label="".concat(void 0!==h?"".concat(h,"-"):"").concat(e)),[e,"".concat(v(t)).concat(l(0,e in r)?" ".concat(r[e]):"")]})));return s(r).forEach((function(e){e in a||(a[e]=r[e])})),a}),[O,v,m,j,g(e)]),k=null===d||void 0===d?void 0:d.props.classes;y=Object(n.useMemo)((function(){return x(y,k,m)}),[y,g(k),m]);var w=void 0;try{w=void 0!==h?null===(p=null===(u=j.components)||void 0===u?void 0:u[h])||void 0===p?void 0:p.styleOverrides:void 0}catch(S){}var C=Object(n.useMemo)((function(){if(w){var e={};for(var r in w){var t=w[r];t instanceof Object&&(e[r]=v("function"===typeof t?t(Object.assign({theme:j,ownerState:null===d||void 0===d?void 0:d.ownerState},null===d||void 0===d?void 0:d.props)):t))}return e}}),[void 0===w?void 0:JSON.stringify(w),g(null===d||void 0===d?void 0:d.props),g(null===d||void 0===d?void 0:d.ownerState),v]);return{classes:y=Object(n.useMemo)((function(){return x(y,C,m)}),[y,C,m]),theme:j,css:v,cx:m}}}},useStyles:function(){var e=r(),t=a();return{theme:e,css:t.css,cx:t.cx}}}}var w=t(8);function C(e){return e.charAt(0).toUpperCase()+e.slice(1)}var S=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]])}return t};function N(e){var r={},t={};return Object.keys(e).forEach((function(n){return(n.startsWith("@media")?t:r)[n]=e[n]})),Object.keys(t).forEach((function(e){var n=t[e];Object.keys(n).forEach((function(t){var o;return r[t]=Object.assign(Object.assign({},null!==(o=r[t])&&void 0!==o?o:{}),Object(w.a)({},e,n[t]))}))})),r}var T=t(46);function _(e){var r=e.styles;return o.a.createElement(T.a,{styles:T.b(r)})}var B,E=t(536),M=(B={useTheme:E.a},Object.assign(Object.assign({},k(B)),function(e){var r=k({useTheme:e.useTheme,cache:e.cache}).makeStyles;return{withStyles:function(e,t,a){var c="string"===typeof e?function(){var r=e,t=function(e){var t=e.children,o=S(e,["children"]);return Object(n.createElement)(r,o,t)};return Object.defineProperty(t,"name",{value:C(r)}),t}():e,s=function(){var e=c.displayName;return e||c.name||(null===a||void 0===a?void 0:a.name)}(),i=r(Object.assign(Object.assign({},a),{name:s}))("function"===typeof t?function(e,r,n){return N(t(e,r,n))}:N(t));function l(e){for(var r in e)if("root"!==r)return!0;return!1}var d=Object(n.forwardRef)((function(r,t){var n=r.className,a=(r.classes,S(r,["className","classes"])),s=i(r,{props:r}),d=s.classes,u=s.cx;return o.a.createElement(c,Object.assign({ref:t,className:l(d)?n:u(d.root,n)},"string"===typeof e?{}:{classes:d},a))}));return void 0!==s&&(d.displayName="".concat(C(s),"WithStyles"),Object.defineProperty(d,"name",{value:d.displayName})),d}}}(B))),R=M.makeStyles,A=M.useStyles,I=M.withStyles,P=t(149),q=t(22),D=t(550),F=t(547),W=t(551),J=t(546),U=t(552),L=t(267),Y=t.n(L),H=t(1),z=Object(q.a)("h1")({color:"yellow"});function G(e){var r=e.className,t=K(),n=t.classes,o=t.css,a=t.cx;return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(_,{styles:{body:{backgroundColor:"pink"},".foo":{color:"cyan"}}}),Object(H.jsxs)("div",{className:n.root,children:[Object(H.jsx)("h1",{children:"Black"}),Object(H.jsx)("h1",{children:"Should be lime green"}),Object(H.jsx)("h1",{className:a(o({border:"1px solid black"}),r),children:"Black, should have border and shadow"}),Object(H.jsx)("h1",{className:"foo",children:"Should be cyan"}),Object(H.jsx)(z,{children:"Should be yellow"}),Object(H.jsx)(z,{className:n.ovStyled,children:"Should be dark red"}),Object(H.jsx)(D.a,{variant:"contained",color:"primary",children:" Background should be lime green "}),Object(H.jsx)(D.a,{variant:"contained",color:"primary",className:n.ovInternal,children:"Background should be dark blue"}),Object(H.jsx)("div",{className:n.parent,children:Object(H.jsx)("div",{className:n.child,children:"Background should turn red when mouse is hover the parent."})}),Object(H.jsxs)(F.a,{className:n.breadcrumbs_className,color:"primary",children:[Object(H.jsx)("span",{children:"background should be lightblue"}),Object(H.jsx)("span",{children:"and the separator (/) should be red except when hover, then it is blue"})]}),Object(H.jsx)("div",{style:{height:10}}),Object(H.jsxs)(F.a,{classes:{root:n.breadcrumbs2_root,separator:n.breadcrumbs2_separator},color:"primary",children:[Object(H.jsx)("span",{children:"background should be lightblue"}),Object(H.jsx)("span",{children:"and the separator (/) should be red except when hover, then it is blue"})]}),Object(H.jsxs)(Z,{children:[Object(H.jsx)("span",{children:"The separator"}),Object(H.jsx)("span",{children:"should be lightgreen"})]}),Object(H.jsx)(D.a,{variant:"contained",color:"primary",className:n.button2_className,children:Object(H.jsx)("span",{children:"The background should be red"})}),Object(H.jsx)(D.a,{variant:"contained",color:"primary",classes:{root:n.button2_root},children:Object(H.jsx)("span",{children:"The background should be red"})}),Object(H.jsx)("div",{className:a(n.testCx_bgYellow,n.testCx_bgCyan),children:"Background should be cyan"}),Object(H.jsx)("div",{className:a(n.testCx_bgCyan,n.testCx_bgYellow),children:"Background should be yellow"}),Object(H.jsxs)("div",{className:n.childRefTest_wrapper,children:[Object(H.jsx)("div",{className:a(n.childRefTest_textColorPink,n.childRefTest_wrapper1),children:"Background should turn cyan when mouse hover the parent. Also the text should NOT be pink"}),Object(H.jsx)("div",{className:a(n.childRefTest_wrapper2),children:"Background should NOT turn cyan when mouse hover the parent."})]}),Object(H.jsx)("div",{className:n.mq,children:"The background color should turn from lightgreen to cyan when the window inner with goes is below 960px"}),Object(H.jsx)(Q,{className:o({color:"red"}),colorSmall:"cyan"}),Object(H.jsx)(V,{children:"The text should turn from red to blue when the window inner width goes below 960px And I should have a class like tss-xxxxxx-MyStyledButton-text"}),Object(H.jsx)("br",{}),Object(H.jsx)(X,{href:"http://exampe.com",children:"Background should be red"}),Object(H.jsx)(X,{href:"https://exampe.com",children:"Background should be limegreen"}),Object(H.jsx)("div",{className:a(o({"@media screen and (min-width: 1px)":{backgroundColor:"red"},height:50}),o({backgroundColor:"lightgreen"})),children:"background should be lightgreen"}),Object(H.jsx)($,{}),Object(H.jsx)(ee,{}),Object(H.jsx)(re,{}),Object(H.jsx)(te,{}),Object(H.jsx)(ne,{className:o({backgroundColor:"white"}),classes:{root:o({backgroundColor:"red",border:"1px solid black"})},lightBulbBorderColor:"black"}),Object(H.jsx)(oe,{icon:Object(H.jsx)(Y.a,{}),label:"Background should be greenish"})]})]})}var K=R({name:{App:G}})((function(e,r,t){var n={border:"1px solid black",margin:30,height:100,color:"black"};return{root:{"& > h1:nth-child(2)":{color:e.palette.primary.main}},ovStyled:{color:"darkred"},ovInternal:{backgroundColor:"darkblue"},parent:Object(w.a)({border:"1px solid black",padding:30},"&:hover .".concat(t.child),{background:"red"}),child:{background:"blue",border:"1px solid black"},breadcrumbs_className:{backgroundColor:"lightblue","& .MuiBreadcrumbs-separator":{color:"red"},"&:hover .MuiBreadcrumbs-separator":{color:"blue"}},breadcrumbs2_root:Object(w.a)({backgroundColor:"lightblue"},"&:hover .".concat(t.breadcrumbs2_separator),{color:"blue"}),breadcrumbs2_separator:{color:"red"},button2_className:{backgroundColor:"red"},button2_root:{backgroundColor:"red"},testCx_bgYellow:{backgroundColor:"yellow"},testCx_bgCyan:{backgroundColor:"cyan"},childRefTest_wrapper:Object(w.a)({border:"1px solid black"},"&:hover .".concat(t.childRefTest_wrapper1),{backgroundColor:"cyan"}),childRefTest_wrapper1:Object(P.a)({},n),childRefTest_wrapper2:n,childRefTest_textColorPink:{color:"pink"},mq:{height:100,backgroundColor:"lightgreen","@media (max-width: 960px)":{backgroundColor:"cyan"}}}}));var Q=I((function(e){return Object(H.jsx)("div",{className:e.className,children:"The background color should turn from limegreen to cyan when the window inner with goes below 960px. Font should be red"})}),(function(e,r){return{root:{backgroundColor:e.palette.primary.main,height:100,marginTop:20},"@media (max-width: 960px)":{root:{backgroundColor:r.colorSmall}}}})),V=I(D.a,{text:{color:"red",textTransform:"unset"},"@media (max-width: 960px)":{text:{color:"blue"}}},{name:"MyStyledButton"}),X=I("a",(function(e,r){var t=r.href;return{root:{border:"1px solid black",backgroundColor:null!==t&&void 0!==t&&t.startsWith("https")?e.palette.primary.main:"red"}}})),Z=I(F.a,(function(e,r,t){return{ol:Object(w.a)({},"& .".concat(t.separator),{color:e.palette.primary.main})}})),$=function(){var e=Object(n.memo)((function(){var e=r({color:"primary"}),t=e.classes,n=e.cx;return Object(H.jsxs)("div",{className:t.root,children:[Object(H.jsx)("div",{className:t.child,children:"The Background take the primary theme color when the mouse is hover the parent."}),Object(H.jsx)("div",{className:n(t.child,t.small),children:"The Background take the primary theme color when the mouse is hover the parent. I am smaller than the other child."})]})})),r=R({name:{SecondNestedSelectorExample:e}})((function(e,r,t){var n=r.color;return{root:Object(w.a)({padding:30},"&:hover .".concat(t.child),{backgroundColor:e.palette[n].main}),small:{},child:Object(w.a)({border:"1px solid black",height:50},"&.".concat(t.small),{height:30})}}));return{SecondNestedSelectorExample:e}}().SecondNestedSelectorExample,ee=function(){var e=R()({foo:{border:"3px dotted black",backgroundColor:"red"},bar:{color:"pink"}}),r=function(r){var t=e(void 0,{props:r}).classes;return Object(H.jsx)("div",{className:t.foo,children:Object(H.jsx)("span",{className:t.bar,children:"The background should be green, the box should have a dotted border and the text should be pink"})})};return{MyTestComponentForMergedClasses:function(){var t=e().css;return Object(H.jsx)(r,{classes:{foo:t({backgroundColor:"green"})}})}}}().MyTestComponentForMergedClasses,re=function(){var e=R()((function(e){return{root:Object(P.a)(Object(P.a)({},e.typography.subtitle2),{},{color:"red"})}}));return{TestCastingMuiTypographyStyleToCSSObject:function(){var r=e().classes;return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(W.a,{variant:"subtitle2",children:"This text should be italic"}),Object(H.jsx)("span",{className:r.root,children:"This text should be italic and red"})]})}}}().TestCastingMuiTypographyStyleToCSSObject,te=function(){var e=I(J.a,(function(e){return{input:{backgroundColor:e.palette.grey[50]}}}));return{TestPr54:I(e,(function(){return{input:{backgroundColor:"red"}}}))}}().TestPr54,ne=function(){function e(e){var t=e.className,o=Object(n.useReducer)((function(e){return!e}),!1),c=Object(a.a)(o,2),s=c[0],i=c[1],l=r(void 0,{props:e,ownerState:{isOn:s}}),d=l.classes,u=l.cx;return Object(H.jsxs)("div",{className:u(d.root,t),children:[Object(H.jsx)("div",{className:d.lightBulb}),Object(H.jsx)("button",{onClick:i,children:"Turn ".concat(s?"off":"on")}),Object(H.jsx)("p",{children:"Div should have a border, background should be white"}),Object(H.jsx)("p",{children:"Light bulb should have black border, it should be yellow when turned on."})]})}var r=R({name:{TestingStyleOverrides:e}})((function(e){return{root:{border:"1px solid black",width:500,height:200,position:"relative",color:"black"},lightBulb:{position:"absolute",width:50,height:50,top:120,left:200,borderRadius:"50%"}}}));return{TestingStyleOverrides:e}}().TestingStyleOverrides,oe=I(U.a,{root:{backgroundColor:"red"},labelIcon:{backgroundColor:"green"}}),ae=t(549),ce=t(270),se=t(544),ie=t(269),le=t(113),de=Object(le.a)({key:"mui",prepend:!0}),ue=Object(ce.a)({palette:{primary:{main:"#32CD32"},info:{main:"#ffff00"}},typography:{subtitle2:{fontStyle:"italic"}},components:{TestingStyleOverrides:{styleOverrides:{lightBulb:function(e){var r=e.theme,t=e.ownerState.isOn,n=e.lightBulbBorderColor;return{border:"1px solid ".concat(n),backgroundColor:t?r.palette.info.main:"grey"}}}}}});function be(){var e=A().css;return Object(H.jsx)(G,{className:e({boxShadow:"10px 5px 5px teal"})})}Object(ie.createRoot)(document.getElementById("root")).render(Object(H.jsx)(n.StrictMode,{children:Object(H.jsx)(O.a,{value:de,children:Object(H.jsxs)(ae.a,{theme:ue,children:[Object(H.jsx)(se.a,{}),Object(H.jsx)(be,{})]})})}))}},[[513,1,2]]]);
//# sourceMappingURL=main.3d2f6bf6.chunk.js.map