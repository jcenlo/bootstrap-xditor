/*! bootstrap-xditor - 1.0.30 */
(()=>{"use strict";function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const t={'bootstrap-xditor':{}};function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function r(t){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?n(Object(o),!0).forEach((function(n){e(t,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}grapesjs.plugins.add("bootstrap-xditor",(function(e,n){var o=r(r({},{i18n:{}}),n);!function(e){e.DomComponents.addType('MY-COMPONENT',{model:{defaults:{}},view:{}})}(e),function(e){e.BlockManager.add('MY-BLOCK',{label:'My block',content:{type:'MY-COMPONENT'}})}(e),e.I18n&&e.I18n.addMessages(r({en:t},o.i18n)),e.on('load',(function(){return e.addComponents("<div style=\"margin:100px; padding:25px;\">\n            Content loaded from the plugin\n        </div>",{at:0})}))}))})();
//# sourceMappingURL=index.js.map