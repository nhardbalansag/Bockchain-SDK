function t(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var e=/*#__PURE__*/t(require("isomorphic-unfetch"));function o(){return o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},o.apply(this,arguments)}function n(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,r(t,e)}function r(t,e){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},r(t,e)}var i=function(t,n,r){var i=this;this.username=void 0,this.password=void 0,this.apiKey=void 0,this.url=void 0,this.ToolTest=function(){console.log("Welcome to Interoperability tool "+i.username)},this.AccessApiEndPoint=function(t,n,r){var s=i.url+t,c=o({},r,{headers:{"Content-Type":"application/json","api-key":i.apiKey}});return e.default(s,c).then(function(t){if(t.ok)return t.json();throw new Error(t.statusText)})},this.username=t,this.password=n,this.apiKey=r,this.url="https://crossworld.metaprints.com/api/v1/"},s=/*#__PURE__*/function(t){function e(){for(var e,o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))||this).Test=function(t){e.ToolTest()},e.AuthenticateUser=function(t,o){return e.AccessApiEndPoint("auth",t,{method:"POST",body:JSON.stringify(o)})},e}return n(e,t),e}(i),c=new s("usernametest","123","l9Gog782sQV1Ez4nF3sv4XBH2hicEIOq5JfofXCJskOFzCop4K");c.AuthenticateUser({method:"POST",apikey:"l9Gog782sQV1Ez4nF3sv4XBH2hicEIOq5JfofXCJskOFzCop4K",key:"apikey",ContentType:"application/json"},{apikey:"l9Gog782sQV1Ez4nF3sv4XBH2hicEIOq5JfofXCJskOFzCop4K"}).then(function(t){console.log(t)}),c.Test("bernard balansag");var a,p=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}return n(e,t),e}(i);a=p,[s].forEach(function(t){Object.getOwnPropertyNames(t.prototype).forEach(function(e){Object.defineProperty(a.prototype,e,Object.getOwnPropertyDescriptor(t.prototype,e)||Object.create(null))})}),module.exports=p;
