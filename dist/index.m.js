import t from"isomorphic-unfetch";function o(){return o=Object.assign?Object.assign.bind():function(t){for(var o=1;o<arguments.length;o++){var e=arguments[o];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},o.apply(this,arguments)}function e(t,o){t.prototype=Object.create(o.prototype),t.prototype.constructor=t,r(t,o)}function r(t,o){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,o){return t.__proto__=o,t},r(t,o)}var n,i=/*#__PURE__*/function(t){function o(){for(var o,e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return(o=t.call.apply(t,[this].concat(r))||this).Test=function(t){o.ToolTest()},o.AuthenticateUser=function(t,e){return o.AccessApiEndPoint("auth",t,{method:"POST",body:JSON.stringify(e)})},o}return e(o,t),o}(function(e,r,n){var i=this;this.username=void 0,this.password=void 0,this.apiKey=void 0,this.url=void 0,this.ToolTest=function(){console.log("Welcome to Interoperability tool "+i.username)},this.AccessApiEndPoint=function(e,r,n){var s=i.url+e,c=o({},n,{headers:{"Content-Type":"application/json","api-key":i.apiKey}});return t(s,c).then(function(t){if(t.ok)return t.json();throw new Error(t.statusText)})},this.username=e,this.password=r,this.apiKey=n,this.url="https://crossworld.metaprints.com/api/v1/"}),s=/*#__PURE__*/function(t){function o(){return t.apply(this,arguments)||this}return e(o,t),o}(i);n=s,[i].forEach(function(t){Object.getOwnPropertyNames(t.prototype).forEach(function(o){Object.defineProperty(n.prototype,o,Object.getOwnPropertyDescriptor(t.prototype,o)||Object.create(null))})});export{s as default};
