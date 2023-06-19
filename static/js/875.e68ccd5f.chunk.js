"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[875],{9875:function(n,e,t){t.r(e),t.d(e,{default:function(){return un}});var r=t(2791),i=t(9434),o=t(5036),a="NOT_FOUND";var u=function(n,e){return n===e};function c(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,i=void 0===r?u:r,o=t.maxSize,c=void 0===o?1:o,s=t.resultEqualityCheck,l=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,i=0;i<r;i++)if(!n(e[i],t[i]))return!1;return!0}}(i),p=1===c?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:a},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(l):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var i=t[r];return r>0&&(t.splice(r,1),t.unshift(i)),i.value}return a}return{get:r,put:function(e,i){r(e)===a&&(t.unshift({key:e,value:i}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(c,l);function d(){var e=p.get(arguments);if(e===a){if(e=n.apply(null,arguments),s){var t=p.getEntries(),r=t.find((function(n){return s(n.value,e)}));r&&(e=r.value)}p.put(arguments,e)}return e}return d.clearCache=function(){return p.clear()},d}function s(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function l(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var i=function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var o,a=0,u={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(u=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var l=u,p=l.memoizeOptions,d=void 0===p?t:p,f=Array.isArray(d)?d:[d],m=s(r),h=n.apply(void 0,[function(){return a++,c.apply(null,arguments)}].concat(f)),x=n((function(){for(var n=[],e=m.length,t=0;t<e;t++)n.push(m[t].apply(null,arguments));return o=h.apply(null,n)}));return Object.assign(x,{resultFunc:c,memoizedResultFunc:h,dependencies:m,lastResult:function(){return o},recomputations:function(){return a},resetRecomputations:function(){return a=0}}),x};return i}var p,d,f,m,h,x,v,g,y,b,Z,j,w,k,C=l(c),z=function(n){return n.filter},A=function(n){return n.contacts.contacts},F=function(n){return n.contacts.isLoading.fetchContacts},q=function(n){return n.contacts.isLoading.addContact},E=C([A,z],(function(n,e){var t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(t)}))})),L=t(2916),N=t(9439),S=t(168),_=t(5706),I=_.Z.li(p||(p=(0,S.Z)(["\n  width: calc((100% - 66px) / 3);\n  font-size: 18px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n\n  border: 1px solid gray;\n  padding: 15px 5px;\n  border-radius: 4px;\n"]))),O=_.Z.button(d||(d=(0,S.Z)(["\n  position: relative;\n  min-width: 70px;\n"]))),R=_.Z.span(f||(f=(0,S.Z)([""]))),B=_.Z.a(m||(m=(0,S.Z)(["\n  font-weight: 700;\n  cursor: pointer;\n  padding: 0;\n\n  color: black;\n\n  transition: color 150ms linear;\n\n  :hover {\n    color: tomato;\n  }\n"]))),D=t(8174),J=t(184),K=function(n){var e=n.id,t=n.name,a=n.number,u=(0,i.I0)(),c=(0,r.useState)(!1),s=(0,N.Z)(c,2),l=s[0],p=s[1];return(0,J.jsxs)(I,{children:[(0,J.jsx)(R,{children:t}),(0,J.jsx)(B,{href:"tel:".concat(a),children:a}),(0,J.jsx)(O,{onClick:function(){u((0,o.GK)(e)),p(!0),D.Am.success("".concat(t," has been removed from contacts"))},disabled:l,children:l?"Loading":"Delete"})]})},M=_.Z.ul(h||(h=(0,S.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n\n  gap: 15px;\n"]))),T=function(){var n=(0,i.I0)();(0,r.useEffect)((function(){n((0,o.yF)())}),[n]);var e=(0,i.v9)(E),t=(0,i.v9)(F);return(0,J.jsx)(M,{children:t?(0,J.jsx)(L.Z,{width:80,height:80,styles:{margin:"0 auto"}}):e.map((function(n){var e=n.name,t=n.number,r=n.id;return(0,J.jsx)(K,{name:e,number:t,id:r},r)}))})},G=t(5705),P=t(6727),U=(0,_.Z)(G.l0)(x||(x=(0,S.Z)(["\n  padding: 15px;\n  margin: 0 auto 15px;\n  width: 350px;\n\n  background-color: lightgray;\n  border: 1px solid grey;\n  border-radius: 4px;\n"]))),V=(0,_.Z)(G.gN)(v||(v=(0,S.Z)(["\n  height: 30px;\n  font-size: 16px;\n\n  border-radius: 5px;\n  border: 1px solid grey;\n"]))),$=(0,_.Z)(G.Bc)(g||(g=(0,S.Z)(["\n  color: red !important;\n"]))),H=_.Z.label(y||(y=(0,S.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n\n  margin-bottom: 15px;\n"]))),Q=_.Z.button(b||(b=(0,S.Z)(["\n  position: relative;\n  font-size: 16px;\n\n  width: 150px;\n  height: 40px;\n\n  display: block;\n  margin: 0 auto;\n\n  color: white;\n  background-color: tomato;\n\n  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);\n  opacity: 1;\n  transition: opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover {\n    opacity: 0.8;\n    transition: opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  }\n"]))),W=(0,P.Ry)({name:(0,P.Z_)().required(),number:(0,P.Rx)("please write a number").required()}),X={name:"",number:""},Y=function(){var n=(0,i.v9)(A),e=(0,i.v9)(q),t=(0,i.I0)();return(0,J.jsx)(J.Fragment,{children:(0,J.jsx)(G.J9,{initialValues:X,validationSchema:W,onSubmit:function(e,r){var i=r.resetForm,a=e.name.toLowerCase();n.find((function(n){return n.name.toLowerCase()===a}))?D.Am.error("".concat(e.name," is already in contacts")):t((0,o.uK)(e))&&D.Am.success("".concat(e.name," has been added to your contacts"))&&i()},children:(0,J.jsxs)(U,{children:[(0,J.jsxs)(H,{children:["Name",(0,J.jsx)(V,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,J.jsx)($,{name:"name",component:"div"})]}),(0,J.jsxs)(H,{children:["Number",(0,J.jsx)(V,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,J.jsx)($,{name:"number",component:"div"})]}),(0,J.jsxs)(Q,{type:"submit",disabled:e,children:["add contact",e&&(0,J.jsx)(L.Z,{width:20,height:20,color:"#3b5998",styles:{position:"absolute",top:"50%",marginTop:-10,right:6}})]})]})})})},nn=t(1634),en=_.Z.label(Z||(Z=(0,S.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  gap: 5px;\n  margin-bottom: 15px;\n"]))),tn=_.Z.input(j||(j=(0,S.Z)(["\n  font-size: 16px;\n  outline: none;\n  font-weight: 500;\n\n  border: 1px solid gray;\n  width: 350px;\n  padding: 11px;\n  border-radius: 4px;\n"]))),rn=function(){var n=(0,i.v9)(z),e=(0,i.I0)();return(0,J.jsxs)(en,{children:["Find contacts by name",(0,J.jsx)(tn,{placeholder:"Find",type:"text",name:"filter",onChange:function(n){return e((0,nn.M)(n.target.value))},value:n})]})},on=_.Z.div(w||(w=(0,S.Z)([""]))),an=_.Z.h2(k||(k=(0,S.Z)(["\n  text-align: center;\n  font-size: 34px;\n  margin-bottom: 20px;\n"]))),un=function(){return(0,J.jsxs)(on,{children:[(0,J.jsx)(Y,{}),(0,J.jsx)(an,{children:"Contacts"}),(0,J.jsx)(rn,{}),(0,J.jsx)(T,{})]})}}}]);
//# sourceMappingURL=875.e68ccd5f.chunk.js.map