(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[746],{5770:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/faq",function(){return t(4632)}])},4632:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return H}});var i=t(5893),r=t(7294),o=[{id:1,question:"Will a beginner, with absolutely no knowledge of github, gain anything fruitful?",answer:"Yeah, definitely. The organization is meant to assist the beginners grow in the field of development. We\u2019ll have distinct projects appropriate both for beginners as well as the accolades and thereby we\u2019ll make sure that each and every participant gets to learn something new from the projects he or she is contributing for. "},{id:2,question:"Is there any registration fee?",answer:"No, there is no registration fees for participation. It is absolutely free of cost. "},{id:3,question:"Any age limit for participation?",answer:"No, there is no age limit for participation in GSSoC. It is open for all. "},{id:4,question:"How will we receive the prizes (if won) and certificate?",answer:"We\u2019ll be providing all the participants with the digital certificate. The prize money to all the concerned students will be sent to their bank accounts.We\u2019ll ask for the bank account details via an email after the conclusion of the event. "},{id:5,question:"By what time will the result come?",answer:"The results will be declared in the first week of June "},{id:6,question:"What minimum conditions should the project satisfy?",answer:"There are no such conditions that the projects need to satisfy. The mentors can propose the idea in any field that they specifically expertise in. "},{id:7,question:"Is it strictly for girls or can boys also participate?",answer:"GirlScript aims to assist anyone who is new in the field of development and it specifically supports an inclusive environment. Thereby GSSOC is open both for girls and for boys . Everyone can participate and contribute their part in the development of open source community and our initiative. "},{id:8,question:"From where do we need to start being a beginner as of now so as contribute properly in the projects?",answer:"We\u2019ll be providing you with the links on our official website to start with Github and various other development to make sure that everyone is able to aptly contribute for the projects. "},{id:9,question:"How will participants communicate with mentors and admins?",answer:"All communication will happen on the corresponding channel for the particular project in the official GSSOC \u201922 Discord server . "},{id:10,question:"How will I know that I am selected?",answer:"The participants will be notified through email and the invite to the Slack workspace will be sent to them. "},{id:11,question:"What is the criterion for selection as a participant?",answer:"This program is for beginners to get started with open source. The only criterion for selection are your dedication and enthusiasm to contribute to open source. "}],a=t(894),s=t(2846),l=t(7496),c=t(5031),u=t(6450);function d(){return(d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}function f(e){return e.sort((function(e,n){var t=e.compareDocumentPosition(n);if(t&Node.DOCUMENT_POSITION_FOLLOWING||t&Node.DOCUMENT_POSITION_CONTAINED_BY)return-1;if(t&Node.DOCUMENT_POSITION_PRECEDING||t&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)throw Error("Cannot sort the given nodes.");return 0}))}function h(e,n,t){var i=e+1;return t&&i>=n&&(i=0),i}function p(e,n,t){var i=e-1;return t&&i<0&&(i=n),i}var m="undefined"!==typeof window?r.useLayoutEffect:r.useEffect,v=function(){var e=this;this.descendants=new Map,this.register=function(n){var t;if(null!=n)return"object"==typeof(t=n)&&"nodeType"in t&&t.nodeType===Node.ELEMENT_NODE?e.registerNode(n):function(t){e.registerNode(t,n)}},this.unregister=function(n){e.descendants.delete(n);var t=f(Array.from(e.descendants.keys()));e.assignIndex(t)},this.destroy=function(){e.descendants.clear()},this.assignIndex=function(n){e.descendants.forEach((function(e){var t=n.indexOf(e.node);e.index=t,e.node.dataset.index=e.index.toString()}))},this.count=function(){return e.descendants.size},this.enabledCount=function(){return e.enabledValues().length},this.values=function(){return Array.from(e.descendants.values()).sort((function(e,n){return e.index-n.index}))},this.enabledValues=function(){return e.values().filter((function(e){return!e.disabled}))},this.item=function(n){if(0!==e.count())return e.values()[n]},this.enabledItem=function(n){if(0!==e.enabledCount())return e.enabledValues()[n]},this.first=function(){return e.item(0)},this.firstEnabled=function(){return e.enabledItem(0)},this.last=function(){return e.item(e.descendants.size-1)},this.lastEnabled=function(){var n=e.enabledValues().length-1;return e.enabledItem(n)},this.indexOf=function(n){var t,i;return n&&null!=(t=null==(i=e.descendants.get(n))?void 0:i.index)?t:-1},this.enabledIndexOf=function(n){return null==n?-1:e.enabledValues().findIndex((function(e){return e.node.isSameNode(n)}))},this.next=function(n,t){void 0===t&&(t=!0);var i=h(n,e.count(),t);return e.item(i)},this.nextEnabled=function(n,t){void 0===t&&(t=!0);var i=e.item(n);if(i){var r=h(e.enabledIndexOf(i.node),e.enabledCount(),t);return e.enabledItem(r)}},this.prev=function(n,t){void 0===t&&(t=!0);var i=p(n,e.count()-1,t);return e.item(i)},this.prevEnabled=function(n,t){void 0===t&&(t=!0);var i=e.item(n);if(i){var r=p(e.enabledIndexOf(i.node),e.enabledCount()-1,t);return e.enabledItem(r)}},this.registerNode=function(n,t){if(n&&!e.descendants.has(n)){var i=f(Array.from(e.descendants.keys()).concat(n));null!=t&&t.disabled&&(t.disabled=!!t.disabled);var r=d({node:n,index:-1},t);e.descendants.set(n,r),e.assignIndex(i)}}};var b=(0,u.kr)({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"}),g=b[0],w=b[1];var y=t(7375);function x(){return(x=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}function N(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}var O=["onChange","defaultIndex","index","allowMultiple","allowToggle"],I=["isDisabled","isFocusable","id"],E=[g,function(){return w()},function(){return function(){var e=(0,r.useRef)(new v);return m((function(){return function(){return e.current.destroy()}})),e.current}()},function(e){return function(e){var n=w(),t=(0,r.useState)(-1),i=t[0],o=t[1],a=(0,r.useRef)(null);m((function(){return function(){a.current&&n.unregister(a.current)}}),[]),m((function(){if(a.current){var e=Number(a.current.dataset.index);i==e||Number.isNaN(e)||o(e)}}));var s=e?n.register(e):n.register;return{descendants:n,index:i,enabledIndex:n.enabledIndexOf(a.current),register:(0,u.lq)(s,a)}}(e)}],_=E[0],T=E[2],C=E[3];function k(e){var n=e.onChange,t=e.defaultIndex,i=e.index,o=e.allowMultiple,a=e.allowToggle,s=N(e,O);!function(e){var n=e.index||e.defaultIndex,t=!(0,c.o8)(n)&&!(0,c.kJ)(n)&&e.allowMultiple;(0,c.ZK)({condition:!!t,message:"If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: "+typeof n+","})}(e),function(e){(0,c.ZK)({condition:!(!e.allowMultiple||!e.allowToggle),message:"If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not"})}(e);var l=T(),u=(0,r.useState)(-1),d=u[0],f=u[1];(0,y.zq)((function(){f(-1)}));var h=(0,y.Tx)({value:i,defaultValue:function(){return o?null!=t?t:[]:null!=t?t:-1},onChange:n}),p=h[0],m=h[1];return{index:p,setIndex:m,htmlProps:s,getAccordionItemProps:function(e){var n=!1;null!==e&&(n=(0,c.kJ)(p)?p.includes(e):p===e);return{isOpen:n,onChange:function(n){if(null!==e)if(o&&(0,c.kJ)(p)){var t=n?(0,c.jX)(p,e):(0,c.cl)(p,e);m(t)}else n?m(e):a&&m(-1)}}},focusedIndex:d,setFocusedIndex:f,descendants:l}}var P=(0,u.kr)({name:"AccordionContext",errorMessage:"useAccordionContext: `context` is undefined. Seems you forgot to wrap the accordion components in `<Accordion />`"}),D=P[0],j=P[1];function A(e){var n=e.isDisabled,t=e.isFocusable,i=e.id,o=N(e,I),a=j(),s=a.getAccordionItemProps,l=a.setFocusedIndex,d=(0,r.useRef)(null),f=(0,y.ZS)(i,"accordion-button","accordion-panel"),h=f[0],p=f[1];!function(e){(0,c.ZK)({condition:!(!e.isFocusable||e.isDisabled),message:"Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.\n    "})}(e);var m=C({disabled:n&&!t}),v=m.register,b=m.index,g=m.descendants,w=s(-1===b?null:b),O=w.isOpen,E=w.onChange;!function(e){(0,c.ZK)({condition:e.isOpen&&!!e.isDisabled,message:"Cannot open a disabled accordion item"})}({isOpen:O,isDisabled:n});var _=(0,r.useCallback)((function(){null==E||E(!O),l(b)}),[b,l,O,E]),T=(0,r.useCallback)((function(e){var n={ArrowDown:function(){var e=g.nextEnabled(b);e&&(0,c.T_)(e.node)},ArrowUp:function(){var e=g.prevEnabled(b);e&&(0,c.T_)(e.node)},Home:function(){var e=g.firstEnabled();e&&(0,c.T_)(e.node)},End:function(){var e=g.lastEnabled();e&&(0,c.T_)(e.node)}}[(0,c.uh)(e)];n&&(e.preventDefault(),n(e))}),[g,b]),k=(0,r.useCallback)((function(){l(b)}),[l,b]),P=(0,r.useCallback)((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),x({},e,{type:"button",ref:(0,u.lq)(v,d,t),id:h,disabled:!!n,"aria-expanded":!!O,"aria-controls":p,onClick:(0,c.v0)(e.onClick,_),onFocus:(0,c.v0)(e.onFocus,k),onKeyDown:(0,c.v0)(e.onKeyDown,T)})}),[h,n,O,_,k,T,p,v]),D=(0,r.useCallback)((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),x({},e,{ref:n,role:"region",id:p,"aria-labelledby":h,hidden:!O})}),[h,O,p]);return{isOpen:O,isDisabled:n,isFocusable:t,onOpen:function(){null==E||E(!0)},onClose:function(){null==E||E(!1)},getButtonProps:P,getPanelProps:D,htmlProps:o}}var M=["children","reduceMotion"],S=["htmlProps","descendants"],q=["htmlProps"],F=(0,s.Gp)((function(e,n){var t=e.children,i=e.reduceMotion,o=N(e,M),a=(0,s.jC)("Accordion",o),l=k((0,s.Lr)(o)),u=l.htmlProps,d=l.descendants,f=N(l,S),h=r.useMemo((function(){return x({},f,{reduceMotion:!!i})}),[f,i]);return r.createElement(_,{value:d},r.createElement(D,{value:h},r.createElement(s.Fo,{value:a},r.createElement(s.m$.div,x({ref:n},u,{className:(0,c.cx)("chakra-accordion",o.className)}),t))))}));c.Ts&&(F.displayName="Accordion");var G=(0,u.kr)({name:"AccordionItemContext",errorMessage:"useAccordionItemContext: `context` is undefined. Seems you forgot to wrap the accordion item parts in `<AccordionItem />` "}),K=G[0],U=G[1],W=(0,s.Gp)((function(e,n){var t=e.children,i=e.className,o=A(e),a=o.htmlProps,l=N(o,q),u=x({},(0,s.yK)().container,{overflowAnchor:"none"}),d=r.useMemo((function(){return l}),[l]);return r.createElement(K,{value:d},r.createElement(s.m$.div,x({ref:n},a,{className:(0,c.cx)("chakra-accordion__item",i),__css:u}),(0,c.Pu)(t,{isExpanded:!!l.isOpen,isDisabled:!!l.isDisabled})))}));c.Ts&&(W.displayName="AccordionItem");var z=(0,s.Gp)((function(e,n){var t=(0,U().getButtonProps)(e,n),i=x({display:"flex",alignItems:"center",width:"100%",outline:0},(0,s.yK)().button);return r.createElement(s.m$.button,x({},t,{className:(0,c.cx)("chakra-accordion__button",e.className),__css:i}))}));c.Ts&&(z.displayName="AccordionButton");var L=(0,s.Gp)((function(e,n){var t=j().reduceMotion,i=U(),o=i.getPanelProps,a=i.isOpen,u=o(e,n),d=(0,c.cx)("chakra-accordion__panel",e.className),f=(0,s.yK)();t||delete u.hidden;var h=r.createElement(s.m$.div,x({},u,{__css:f.panel,className:d}));return t?h:r.createElement(l.UO,{in:a},h)}));c.Ts&&(L.displayName="AccordionPanel");var B=function(e){var n=U(),t=n.isOpen,i=n.isDisabled,o=j().reduceMotion,l=(0,c.cx)("chakra-accordion__icon",e.className),u=x({opacity:i?.4:1,transform:t?"rotate(-180deg)":void 0,transition:o?void 0:"transform 0.2s",transformOrigin:"center"},(0,s.yK)().icon);return r.createElement(a.JO,x({viewBox:"0 0 24 24","aria-hidden":!0,className:l,__css:u},e),r.createElement("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}))};c.Ts&&(B.displayName="AccordionIcon");var V=t(8527),J=function(e){var n=e.question,t=e.answer,o=(0,r.useState)(!1);o[0],o[1];return(0,i.jsx)(F,{allowMultiple:!0,children:(0,i.jsxs)(W,{m:2,color:"orange",backgroundColor:"#1F2937",w:"100%",children:[(0,i.jsx)("h2",{children:(0,i.jsxs)(z,{children:[(0,i.jsx)(V.xu,{flex:"1",textAlign:"left",children:n}),(0,i.jsx)(B,{})]})}),(0,i.jsx)(L,{pb:4,children:t})]})})};function Z(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var H=function(){var e=(0,r.useState)(o),n=e[0];e[1];return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("section",{className:"flex flex-col",children:[(0,i.jsx)("h1",{className:"flex flex-col text-orange-500 text-5xl font-bold m-3",children:"Frequently Asked Questions (FAQS)"}),n.map((function(e){var n=e.id;return(0,i.jsx)(J,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),i.forEach((function(n){Z(e,n,t[n])}))}return e}({},e),n)}))]})})}}},function(e){e.O(0,[740,527,774,888,179],(function(){return n=5770,e(e.s=n);var n}));var n=e.O();_N_E=n}]);