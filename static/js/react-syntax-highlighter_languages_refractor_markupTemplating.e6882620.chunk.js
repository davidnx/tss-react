(this["webpackJsonptss-react_landingpage"]=this["webpackJsonptss-react_landingpage"]||[]).push([[81],{612:function(e,n,t){"use strict";function a(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,r,o){if(t.language===a){var i=t.tokenStack=[];t.code=t.code.replace(r,(function(e){if("function"===typeof o&&!o(e))return e;for(var r,s=i.length;-1!==t.code.indexOf(r=n(a,s));)++s;return i[s]=e,r})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var r=0,o=Object.keys(t.tokenStack);!function i(s){for(var c=0;c<s.length&&!(r>=o.length);c++){var p=s[c];if("string"===typeof p||p.content&&"string"===typeof p.content){var u=o[r],g=t.tokenStack[u],l="string"===typeof p?p:p.content,f=n(a,u),k=l.indexOf(f);if(k>-1){++r;var d=l.substring(0,k),h=new e.Token(a,e.tokenize(g,t.grammar),"language-"+a,g),m=l.substring(k+f.length),y=[];d&&y.push.apply(y,i([d])),y.push(h),m&&y.push.apply(y,i([m])),"string"===typeof p?s.splice.apply(s,[c,1].concat(y)):p.content=y}}else p.content&&i(p.content)}return s}(t.tokens)}}}})}(e)}e.exports=a,a.displayName="markupTemplating",a.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_markupTemplating.e6882620.chunk.js.map