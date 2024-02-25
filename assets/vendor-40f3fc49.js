function Oe(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var On={exports:{}};(function(t,e){(function(n){t.exports=n()})(function(){return function n(r,s,i){function o(l,h){if(!s[l]){if(!r[l]){var d=typeof Oe=="function"&&Oe;if(!h&&d)return d(l,!0);if(a)return a(l,!0);var _=new Error("Cannot find module '"+l+"'");throw _.code="MODULE_NOT_FOUND",_}var m=s[l]={exports:{}};r[l][0].call(m.exports,function(f){return o(r[l][1][f]||f)},m,m.exports,n,r,s,i)}return s[l].exports}for(var a=typeof Oe=="function"&&Oe,c=0;c<i.length;c++)o(i[c]);return o}({1:[function(n,r,s){Object.defineProperty(s,"__esModule",{value:!0}),s.create=s.visible=void 0;var i=function(c){var l=arguments.length>1&&arguments[1]!==void 0&&arguments[1],h=document.createElement("div");return h.innerHTML=c.trim(),l===!0?h.children:h.firstChild},o=function(c,l){var h=c.children;return h.length===1&&h[0].tagName===l},a=function(c){return(c=c||document.querySelector(".basicLightbox"))!=null&&c.ownerDocument.body.contains(c)===!0};s.visible=a,s.create=function(c,l){var h=function(m,f){var p=i(`
		<div class="basicLightbox `.concat(f.className,`">
			<div class="basicLightbox__placeholder" role="dialog"></div>
		</div>
	`)),w=p.querySelector(".basicLightbox__placeholder");m.forEach(function(ee){return w.appendChild(ee)});var b=o(w,"IMG"),S=o(w,"VIDEO"),T=o(w,"IFRAME");return b===!0&&p.classList.add("basicLightbox--img"),S===!0&&p.classList.add("basicLightbox--video"),T===!0&&p.classList.add("basicLightbox--iframe"),p}(c=function(m){var f=typeof m=="string",p=m instanceof HTMLElement==1;if(f===!1&&p===!1)throw new Error("Content must be a DOM element/node or string");return f===!0?Array.from(i(m,!0)):m.tagName==="TEMPLATE"?[m.content.cloneNode(!0)]:Array.from(m.children)}(c),l=function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if((m=Object.assign({},m)).closable==null&&(m.closable=!0),m.className==null&&(m.className=""),m.onShow==null&&(m.onShow=function(){}),m.onClose==null&&(m.onClose=function(){}),typeof m.closable!="boolean")throw new Error("Property `closable` must be a boolean");if(typeof m.className!="string")throw new Error("Property `className` must be a string");if(typeof m.onShow!="function")throw new Error("Property `onShow` must be a function");if(typeof m.onClose!="function")throw new Error("Property `onClose` must be a function");return m}(l)),d=function(m){return l.onClose(_)!==!1&&function(f,p){return f.classList.remove("basicLightbox--visible"),setTimeout(function(){return a(f)===!1||f.parentElement.removeChild(f),p()},410),!0}(h,function(){if(typeof m=="function")return m(_)})};l.closable===!0&&h.addEventListener("click",function(m){m.target===h&&d()});var _={element:function(){return h},visible:function(){return a(h)},show:function(m){return l.onShow(_)!==!1&&function(f,p){return document.body.appendChild(f),setTimeout(function(){requestAnimationFrame(function(){return f.classList.add("basicLightbox--visible"),p()})},10),!0}(h,function(){if(typeof m=="function")return m(_)})},close:d};return _}},{}]},{},[1])(1)})})(On);var Gc=On.exports;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Hr=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Pn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,h=i>>2,d=(i&3)<<4|a>>4;let _=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(_=64)),r.push(n[h],n[d],n[_],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Cn(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Hr(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||d==null)throw new jr;const _=i<<2|a>>4;if(r.push(_),l!==64){const m=a<<4&240|l>>2;if(r.push(m),d!==64){const f=l<<6&192|d;r.push(f)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class jr extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $r=function(t){const e=Cn(t);return Pn.encodeByteArray(e,!0)},kn=function(t){return $r(t).replace(/\./g,"")},Nn=function(t){try{return Pn.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vr(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr=()=>Vr().__FIREBASE_DEFAULTS__,zr=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},qr=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Nn(t[1]);return e&&JSON.parse(e)},St=()=>{try{return Wr()||zr()||qr()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Kr=t=>{var e,n;return(n=(e=St())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Dn=()=>{var t;return(t=St())===null||t===void 0?void 0:t.config},Ln=t=>{var e;return(e=St())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Jr(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(I())}function Yr(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Xr(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Qr(){const t=I();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Zr(){try{return typeof indexedDB=="object"}catch{return!1}}function es(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts="FirebaseError";class z extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ts,Object.setPrototypeOf(this,z.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ee.prototype.create)}}class Ee{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?ns(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new z(s,a,r)}}function ns(t,e){return t.replace(rs,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const rs=/\{\$([^}]+)}/g;function ss(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function xe(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Wt(i)&&Wt(o)){if(!xe(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Wt(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function de(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function he(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function is(t,e){const n=new os(t,e);return n.subscribe.bind(n)}class os{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");as(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=tt),s.error===void 0&&(s.error=tt),s.complete===void 0&&(s.complete=tt);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function as(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function tt(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(t){return t&&t._delegate?t._delegate:t}class ie{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Gr;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(us(e))try{this.getOrInitializeService({instanceIdentifier:G})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=G){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=G){return this.instances.has(e)}getOptions(e=G){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ls(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=G){return this.component?this.component.multipleInstances?e:G:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ls(t){return t===G?void 0:t}function us(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new cs(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var E;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(E||(E={}));const hs={debug:E.DEBUG,verbose:E.VERBOSE,info:E.INFO,warn:E.WARN,error:E.ERROR,silent:E.SILENT},fs=E.INFO,ps={[E.DEBUG]:"log",[E.VERBOSE]:"log",[E.INFO]:"info",[E.WARN]:"warn",[E.ERROR]:"error"},ms=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=ps[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Mn{constructor(e){this.name=e,this._logLevel=fs,this._logHandler=ms,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in E))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?hs[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,E.DEBUG,...e),this._logHandler(this,E.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,E.VERBOSE,...e),this._logHandler(this,E.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,E.INFO,...e),this._logHandler(this,E.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,E.WARN,...e),this._logHandler(this,E.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,E.ERROR,...e),this._logHandler(this,E.ERROR,...e)}}const gs=(t,e)=>e.some(n=>t instanceof n);let zt,qt;function _s(){return zt||(zt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ys(){return qt||(qt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Un=new WeakMap,ht=new WeakMap,xn=new WeakMap,nt=new WeakMap,Rt=new WeakMap;function Es(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(V(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Un.set(n,t)}).catch(()=>{}),Rt.set(e,t),e}function ws(t){if(ht.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ht.set(t,e)}let ft={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ht.get(t);if(e==="objectStoreNames")return t.objectStoreNames||xn.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return V(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function bs(t){ft=t(ft)}function vs(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(rt(this),e,...n);return xn.set(r,e.sort?e.sort():[e]),V(r)}:ys().includes(t)?function(...e){return t.apply(rt(this),e),V(Un.get(this))}:function(...e){return V(t.apply(rt(this),e))}}function Is(t){return typeof t=="function"?vs(t):(t instanceof IDBTransaction&&ws(t),gs(t,_s())?new Proxy(t,ft):t)}function V(t){if(t instanceof IDBRequest)return Es(t);if(nt.has(t))return nt.get(t);const e=Is(t);return e!==t&&(nt.set(t,e),Rt.set(e,t)),e}const rt=t=>Rt.get(t);function Ts(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=V(o);return r&&o.addEventListener("upgradeneeded",c=>{r(V(o.result),c.oldVersion,c.newVersion,V(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Ss=["get","getKey","getAll","getAllKeys","count"],Rs=["put","add","delete","clear"],st=new Map;function Kt(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(st.get(e))return st.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Rs.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Ss.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return st.set(e,i),i}bs(t=>({...t,get:(e,n,r)=>Kt(e,n)||t.get(e,n,r),has:(e,n)=>!!Kt(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Os(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Os(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const pt="@firebase/app",Gt="0.9.23";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y=new Mn("@firebase/app"),Cs="@firebase/app-compat",Ps="@firebase/analytics-compat",ks="@firebase/analytics",Ns="@firebase/app-check-compat",Ds="@firebase/app-check",Ls="@firebase/auth",Ms="@firebase/auth-compat",Us="@firebase/database",xs="@firebase/database-compat",Fs="@firebase/functions",Bs="@firebase/functions-compat",Hs="@firebase/installations",js="@firebase/installations-compat",$s="@firebase/messaging",Vs="@firebase/messaging-compat",Ws="@firebase/performance",zs="@firebase/performance-compat",qs="@firebase/remote-config",Ks="@firebase/remote-config-compat",Gs="@firebase/storage",Js="@firebase/storage-compat",Ys="@firebase/firestore",Xs="@firebase/firestore-compat",Qs="firebase",Zs="10.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt="[DEFAULT]",ei={[pt]:"fire-core",[Cs]:"fire-core-compat",[ks]:"fire-analytics",[Ps]:"fire-analytics-compat",[Ds]:"fire-app-check",[Ns]:"fire-app-check-compat",[Ls]:"fire-auth",[Ms]:"fire-auth-compat",[Us]:"fire-rtdb",[xs]:"fire-rtdb-compat",[Fs]:"fire-fn",[Bs]:"fire-fn-compat",[Hs]:"fire-iid",[js]:"fire-iid-compat",[$s]:"fire-fcm",[Vs]:"fire-fcm-compat",[Ws]:"fire-perf",[zs]:"fire-perf-compat",[qs]:"fire-rc",[Ks]:"fire-rc-compat",[Gs]:"fire-gcs",[Js]:"fire-gcs-compat",[Ys]:"fire-fst",[Xs]:"fire-fst-compat","fire-js":"fire-js",[Qs]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fe=new Map,gt=new Map;function ti(t,e){try{t.container.addComponent(e)}catch(n){Y.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function pe(t){const e=t.name;if(gt.has(e))return Y.debug(`There were multiple attempts to register component ${e}.`),!1;gt.set(e,t);for(const n of Fe.values())ti(n,t);return!0}function Fn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},W=new Ee("app","Firebase",ni);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ie("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw W.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be=Zs;function si(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:mt,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw W.create("bad-app-name",{appName:String(s)});if(n||(n=Dn()),!n)throw W.create("no-options");const i=Fe.get(s);if(i){if(xe(n,i.options)&&xe(r,i.config))return i;throw W.create("duplicate-app",{appName:s})}const o=new ds(s);for(const c of gt.values())o.addComponent(c);const a=new ri(n,r,o);return Fe.set(s,a),a}function ii(t=mt){const e=Fe.get(t);if(!e&&t===mt&&Dn())return si();if(!e)throw W.create("no-app",{appName:t});return e}function ne(t,e,n){var r;let s=(r=ei[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Y.warn(a.join(" "));return}pe(new ie(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi="firebase-heartbeat-database",ai=1,me="firebase-heartbeat-store";let it=null;function Bn(){return it||(it=Ts(oi,ai,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(me)}}}).catch(t=>{throw W.create("idb-open",{originalErrorMessage:t.message})})),it}async function ci(t){try{return await(await Bn()).transaction(me).objectStore(me).get(Hn(t))}catch(e){if(e instanceof z)Y.warn(e.message);else{const n=W.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Y.warn(n.message)}}}async function Jt(t,e){try{const r=(await Bn()).transaction(me,"readwrite");await r.objectStore(me).put(e,Hn(t)),await r.done}catch(n){if(n instanceof z)Y.warn(n.message);else{const r=W.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Y.warn(r.message)}}}function Hn(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li=1024,ui=30*24*60*60*1e3;class di{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new fi(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Yt();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=ui}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Yt(),{heartbeatsToSend:r,unsentEntries:s}=hi(this._heartbeatsCache.heartbeats),i=kn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Yt(){return new Date().toISOString().substring(0,10)}function hi(t,e=li){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Xt(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Xt(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class fi{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zr()?es().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ci(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Jt(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Jt(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Xt(t){return kn(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(t){pe(new ie("platform-logger",e=>new As(e),"PRIVATE")),pe(new ie("heartbeat",e=>new di(e),"PRIVATE")),ne(pt,Gt,t),ne(pt,Gt,"esm2017"),ne("fire-js","")}pi("");var mi="firebase",gi="10.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ne(mi,gi,"app");function At(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function jn(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _i=jn,$n=new Ee("auth","Firebase",jn());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Be=new Mn("@firebase/auth");function yi(t,...e){Be.logLevel<=E.WARN&&Be.warn(`Auth (${be}): ${t}`,...e)}function Pe(t,...e){Be.logLevel<=E.ERROR&&Be.error(`Auth (${be}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(t,...e){throw Ot(t,...e)}function C(t,...e){return Ot(t,...e)}function Ei(t,e,n){const r=Object.assign(Object.assign({},_i()),{[e]:n});return new Ee("auth","Firebase",r).create(e,{appName:t.name})}function Ot(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return $n.create(t,...e)}function g(t,e,...n){if(!t)throw Ot(e,...n)}function N(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Pe(e),new Error(e)}function M(t,e){t||N(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function wi(){return Qt()==="http:"||Qt()==="https:"}function Qt(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wi()||Yr()||"connection"in navigator)?navigator.onLine:!0}function vi(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e,n){this.shortDelay=e,this.longDelay=n,M(n>e,"Short delay should be less than long delay!"),this.isMobile=Jr()||Xr()}get(){return bi()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(t,e){M(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;N("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;N("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;N("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti=new ve(3e4,6e4);function K(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function U(t,e,n,r,s={}){return Wn(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=we(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Vn.fetch()(zn(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Wn(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ii),e);try{const s=new Ri(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ce(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ce(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ce(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ce(t,"user-disabled",o);const h=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Ei(t,h,l);A(t,h)}}catch(s){if(s instanceof z)throw s;A(t,"network-request-failed",{message:String(s)})}}async function Ie(t,e,n,r,s={}){const i=await U(t,e,n,r,s);return"mfaPendingCredential"in i&&A(t,"multi-factor-auth-required",{_serverResponse:i}),i}function zn(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Ct(t.config,s):`${t.config.apiScheme}://${s}`}function Si(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Ri{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(C(this.auth,"network-request-failed")),Ti.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ce(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=C(t,e,r);return s.customData._tokenResponse=n,s}function Zt(t){return t!==void 0&&t.enterprise!==void 0}class Ai{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Si(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Oi(t,e){return U(t,"GET","/v2/recaptchaConfig",K(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ci(t,e){return U(t,"POST","/v1/accounts:delete",e)}async function Pi(t,e){return U(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ki(t,e=!1){const n=q(t),r=await n.getIdToken(e),s=Pt(r);g(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:fe(ot(s.auth_time)),issuedAtTime:fe(ot(s.iat)),expirationTime:fe(ot(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ot(t){return Number(t)*1e3}function Pt(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Pe("JWT malformed, contained fewer than 3 sections"),null;try{const s=Nn(n);return s?JSON.parse(s):(Pe("Failed to decode base64 JWT payload"),null)}catch(s){return Pe("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ni(t){const e=Pt(t);return g(e,"internal-error"),g(typeof e.exp<"u","internal-error"),g(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oe(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof z&&Di(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Di({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=fe(this.lastLoginAt),this.creationTime=fe(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function He(t){var e;const n=t.auth,r=await t.getIdToken(),s=await oe(t,Pi(n,{idToken:r}));g(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?xi(i.providerUserInfo):[],a=Ui(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),h=c?l:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new qn(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function Mi(t){const e=q(t);await He(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ui(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function xi(t){return t.map(e=>{var{providerId:n}=e,r=At(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fi(t,e){const n=await Wn(t,{},async()=>{const r=we({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=zn(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Vn.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Bi(t,e){return U(t,"POST","/v2/accounts:revokeToken",K(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){g(e.idToken,"internal-error"),g(typeof e.idToken<"u","internal-error"),g(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ni(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return g(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Fi(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ge;return r&&(g(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(g(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(g(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ge,this.toJSON())}_performRefresh(){return N("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(t,e){g(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class J{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=At(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Li(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new qn(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await oe(this,this.stsTokenManager.getToken(this.auth,e));return g(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ki(this,e)}reload(){return Mi(this)}_assign(e){this!==e&&(g(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new J(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){g(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await He(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await oe(this,Ci(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,h;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,_=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,f=(o=n.photoURL)!==null&&o!==void 0?o:void 0,p=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,b=(l=n.createdAt)!==null&&l!==void 0?l:void 0,S=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:T,emailVerified:ee,isAnonymous:$t,providerData:Ze,stsTokenManager:Vt}=n;g(T&&Vt,e,"internal-error");const Fr=ge.fromJSON(this.name,Vt);g(typeof T=="string",e,"internal-error"),x(d,e.name),x(_,e.name),g(typeof ee=="boolean",e,"internal-error"),g(typeof $t=="boolean",e,"internal-error"),x(m,e.name),x(f,e.name),x(p,e.name),x(w,e.name),x(b,e.name),x(S,e.name);const et=new J({uid:T,auth:e,email:_,emailVerified:ee,displayName:d,isAnonymous:$t,photoURL:f,phoneNumber:m,tenantId:p,stsTokenManager:Fr,createdAt:b,lastLoginAt:S});return Ze&&Array.isArray(Ze)&&(et.providerData=Ze.map(Br=>Object.assign({},Br))),w&&(et._redirectEventId=w),et}static async _fromIdTokenResponse(e,n,r=!1){const s=new ge;s.updateFromServerResponse(n);const i=new J({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await He(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en=new Map;function D(t){M(t instanceof Function,"Expected a class definition");let e=en.get(t);return e?(M(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,en.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Kn.type="NONE";const tn=Kn;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(t,e,n){return`firebase:${t}:${e}:${n}`}class re{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ke(this.userKey,s.apiKey,i),this.fullPersistenceKey=ke("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?J._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new re(D(tn),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||D(tn);const o=ke(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const h=await l._get(o);if(h){const d=J._fromJSON(e,h);l!==i&&(a=d),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new re(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new re(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Yn(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Gn(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Qn(e))return"Blackberry";if(Zn(e))return"Webos";if(kt(e))return"Safari";if((e.includes("chrome/")||Jn(e))&&!e.includes("edge/"))return"Chrome";if(Xn(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Gn(t=I()){return/firefox\//i.test(t)}function kt(t=I()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Jn(t=I()){return/crios\//i.test(t)}function Yn(t=I()){return/iemobile/i.test(t)}function Xn(t=I()){return/android/i.test(t)}function Qn(t=I()){return/blackberry/i.test(t)}function Zn(t=I()){return/webos/i.test(t)}function ze(t=I()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Hi(t=I()){var e;return ze(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ji(){return Qr()&&document.documentMode===10}function er(t=I()){return ze(t)||Xn(t)||Zn(t)||Qn(t)||/windows phone/i.test(t)||Yn(t)}function $i(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(t,e=[]){let n;switch(t){case"Browser":n=nn(I());break;case"Worker":n=`${nn(I())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${be}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wi(t,e={}){return U(t,"GET","/v2/passwordPolicy",K(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi=6;class qi{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:zi,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new rn(this),this.idTokenSubscription=new rn(this),this.beforeStateQueue=new Vi(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$n,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=D(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await re.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return g(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await He(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vi()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?q(e):null;return n&&g(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&g(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(D(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Wi(this),n=new qi(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ee("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Bi(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&D(e)||this._popupRedirectResolver;g(n,this,"argument-error"),this.redirectPersistenceManager=await re.create(this,[D(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(g(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return g(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=tr(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&yi(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Z(t){return q(t)}class rn{constructor(e){this.auth=e,this.observer=null,this.addObserver=is(n=>this.observer=n)}get next(){return g(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function nr(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=C("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Gi().appendChild(r)})}function Ji(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Yi="https://www.google.com/recaptcha/enterprise.js?render=",Xi="recaptcha-enterprise",Qi="NO_RECAPTCHA";class Zi{constructor(e){this.type=Xi,this.auth=Z(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Oi(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Ai(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;Zt(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(Qi)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Zt(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}nr(Yi+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function sn(t,e,n,r=!1){const s=new Zi(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function yt(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await sn(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await sn(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(t,e){const n=Fn(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(xe(i,e??{}))return s;A(s,"already-initialized")}return n.initialize({options:e})}function to(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(D);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function no(t,e,n){const r=Z(t);g(r._canInitEmulator,r,"emulator-config-failed"),g(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=rr(e),{host:o,port:a}=ro(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||so()}function rr(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ro(t){const e=rr(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:on(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:on(o)}}}function on(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function so(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return N("not implemented")}_getIdTokenResponse(e){return N("not implemented")}_linkToIdToken(e,n){return N("not implemented")}_getReauthenticationResolver(e){return N("not implemented")}}async function io(t,e){return U(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oo(t,e){return Ie(t,"POST","/v1/accounts:signInWithPassword",K(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ao(t,e){return Ie(t,"POST","/v1/accounts:signInWithEmailLink",K(t,e))}async function co(t,e){return Ie(t,"POST","/v1/accounts:signInWithEmailLink",K(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e extends Nt{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new _e(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new _e(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return yt(e,n,"signInWithPassword",oo);case"emailLink":return ao(e,{email:this._email,oobCode:this._password});default:A(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return yt(e,r,"signUpPassword",io);case"emailLink":return co(e,{idToken:n,email:this._email,oobCode:this._password});default:A(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function se(t,e){return Ie(t,"POST","/v1/accounts:signInWithIdp",K(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo="http://localhost";class X extends Nt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new X(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):A("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=At(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new X(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return se(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,se(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,se(e,n)}buildRequest(){const e={requestUri:lo,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=we(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ho(t){const e=de(he(t)).link,n=e?de(he(e)).deep_link_id:null,r=de(he(t)).deep_link_id;return(r?de(he(r)).link:null)||r||n||e||t}class Dt{constructor(e){var n,r,s,i,o,a;const c=de(he(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,h=(r=c.oobCode)!==null&&r!==void 0?r:null,d=uo((s=c.mode)!==null&&s!==void 0?s:null);g(l&&h&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=h,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=ho(e);try{return new Dt(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(){this.providerId=ce.PROVIDER_ID}static credential(e,n){return _e._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Dt.parseLink(n);return g(r,"argument-error"),_e._fromEmailAndCode(e,r.code,r.tenantId)}}ce.PROVIDER_ID="password";ce.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ce.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te extends sr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B extends Te{constructor(){super("facebook.com")}static credential(e){return X._fromParams({providerId:B.PROVIDER_ID,signInMethod:B.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return B.credentialFromTaggedObject(e)}static credentialFromError(e){return B.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return B.credential(e.oauthAccessToken)}catch{return null}}}B.FACEBOOK_SIGN_IN_METHOD="facebook.com";B.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H extends Te{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return X._fromParams({providerId:H.PROVIDER_ID,signInMethod:H.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return H.credentialFromTaggedObject(e)}static credentialFromError(e){return H.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return H.credential(n,r)}catch{return null}}}H.GOOGLE_SIGN_IN_METHOD="google.com";H.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j extends Te{constructor(){super("github.com")}static credential(e){return X._fromParams({providerId:j.PROVIDER_ID,signInMethod:j.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return j.credentialFromTaggedObject(e)}static credentialFromError(e){return j.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return j.credential(e.oauthAccessToken)}catch{return null}}}j.GITHUB_SIGN_IN_METHOD="github.com";j.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $ extends Te{constructor(){super("twitter.com")}static credential(e,n){return X._fromParams({providerId:$.PROVIDER_ID,signInMethod:$.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return $.credentialFromTaggedObject(e)}static credentialFromError(e){return $.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return $.credential(n,r)}catch{return null}}}$.TWITTER_SIGN_IN_METHOD="twitter.com";$.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fo(t,e){return Ie(t,"POST","/v1/accounts:signUp",K(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await J._fromIdTokenResponse(e,r,s),o=an(r);return new Q({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=an(r);return new Q({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function an(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je extends z{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,je.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new je(e,n,r,s)}}function ir(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?je._fromErrorAndOperation(t,i,e,r):i})}async function po(t,e,n=!1){const r=await oe(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Q._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mo(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await oe(t,ir(r,s,e,t),n);g(i.idToken,r,"internal-error");const o=Pt(i.idToken);g(o,r,"internal-error");const{sub:a}=o;return g(t.uid===a,r,"user-mismatch"),Q._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&A(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function or(t,e,n=!1){const r="signIn",s=await ir(t,r,e),i=await Q._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function go(t,e){return or(Z(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ar(t){const e=Z(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Jc(t,e,n){const r=Z(t),o=await yt(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",fo).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&ar(t),c}),a=await Q._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function Yc(t,e,n){return go(q(t),ce.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ar(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _o(t,e){return U(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xc(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=q(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await oe(r,_o(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function yo(t,e,n,r){return q(t).onIdTokenChanged(e,n,r)}function Eo(t,e,n){return q(t).beforeAuthStateChanged(e,n)}const $e="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem($e,"1"),this.storage.removeItem($e),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wo(){const t=I();return kt(t)||ze(t)}const bo=1e3,vo=10;class lr extends cr{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=wo()&&$i(),this.fallbackToPolling=er(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);ji()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,vo):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},bo)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}lr.type="LOCAL";const Io=lr;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur extends cr{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ur.type="SESSION";const dr=ur;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new qe(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await To(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qe.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Lt("",20);s.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const _=d;if(_.data.eventId===l)switch(_.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(_.data.response);break;default:clearTimeout(h),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(){return window}function Ro(t){P().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(){return typeof P().WorkerGlobalScope<"u"&&typeof P().importScripts=="function"}async function Ao(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Oo(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Co(){return hr()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr="firebaseLocalStorageDb",Po=1,Ve="firebaseLocalStorage",pr="fbase_key";class Se{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ke(t,e){return t.transaction([Ve],e?"readwrite":"readonly").objectStore(Ve)}function ko(){const t=indexedDB.deleteDatabase(fr);return new Se(t).toPromise()}function Et(){const t=indexedDB.open(fr,Po);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ve,{keyPath:pr})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ve)?e(r):(r.close(),await ko(),e(await Et()))})})}async function cn(t,e,n){const r=Ke(t,!0).put({[pr]:e,value:n});return new Se(r).toPromise()}async function No(t,e){const n=Ke(t,!1).get(e),r=await new Se(n).toPromise();return r===void 0?null:r.value}function ln(t,e){const n=Ke(t,!0).delete(e);return new Se(n).toPromise()}const Do=800,Lo=3;class mr{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Et(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Lo)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hr()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qe._getInstance(Co()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Ao(),!this.activeServiceWorker)return;this.sender=new So(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Oo()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Et();return await cn(e,$e,"1"),await ln(e,$e),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>cn(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>No(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ln(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ke(s,!1).getAll();return new Se(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Do)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}mr.type="LOCAL";const Mo=mr;new ve(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(t,e){return e?D(e):(g(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt extends Nt{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return se(e,this._buildIdpRequest())}_linkToIdToken(e,n){return se(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return se(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function xo(t){return or(t.auth,new Mt(t),t.bypassAuthState)}function Fo(t){const{auth:e,user:n}=t;return g(n,e,"internal-error"),mo(n,new Mt(t),t.bypassAuthState)}async function Bo(t){const{auth:e,user:n}=t;return g(n,e,"internal-error"),po(n,new Mt(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xo;case"linkViaPopup":case"linkViaRedirect":return Bo;case"reauthViaPopup":case"reauthViaRedirect":return Fo;default:A(this.auth,"internal-error")}}resolve(e){M(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){M(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ho=new ve(2e3,1e4);class te extends gr{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,te.currentPopupAction&&te.currentPopupAction.cancel(),te.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return g(e,this.auth,"internal-error"),e}async onExecution(){M(this.filter.length===1,"Popup operations only handle one event");const e=Lt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(C(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(C(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,te.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(C(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ho.get())};e()}}te.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jo="pendingRedirect",Ne=new Map;class $o extends gr{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ne.get(this.auth._key());if(!e){try{const r=await Vo(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ne.set(this.auth._key(),e)}return this.bypassAuthState||Ne.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Vo(t,e){const n=qo(e),r=zo(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Wo(t,e){Ne.set(t._key(),e)}function zo(t){return D(t._redirectPersistence)}function qo(t){return ke(jo,t.config.apiKey,t.name)}async function Ko(t,e,n=!1){const r=Z(t),s=Uo(r,e),o=await new $o(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Go=10*60*1e3;class Jo{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Yo(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!_r(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(C(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Go&&this.cachedEventUids.clear(),this.cachedEventUids.has(un(e))}saveEventToCache(e){this.cachedEventUids.add(un(e)),this.lastProcessedEventTime=Date.now()}}function un(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function _r({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Yo(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _r(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xo(t,e={}){return U(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Zo=/^https?/;async function ea(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Xo(t);for(const n of e)try{if(ta(n))return}catch{}A(t,"unauthorized-domain")}function ta(t){const e=_t(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Zo.test(n))return!1;if(Qo.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na=new ve(3e4,6e4);function dn(){const t=P().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ra(t){return new Promise((e,n)=>{var r,s,i;function o(){dn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{dn(),n(C(t,"network-request-failed"))},timeout:na.get()})}if(!((s=(r=P().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=P().gapi)===null||i===void 0)&&i.load)o();else{const a=Ji("iframefcb");return P()[a]=()=>{gapi.load?o():n(C(t,"network-request-failed"))},nr(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw De=null,e})}let De=null;function sa(t){return De=De||ra(t),De}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia=new ve(5e3,15e3),oa="__/auth/iframe",aa="emulator/auth/iframe",ca={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},la=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ua(t){const e=t.config;g(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ct(e,aa):`https://${t.config.authDomain}/${oa}`,r={apiKey:e.apiKey,appName:t.name,v:be},s=la.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${we(r).slice(1)}`}async function da(t){const e=await sa(t),n=P().gapi;return g(n,t,"internal-error"),e.open({where:document.body,url:ua(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ca,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=C(t,"network-request-failed"),a=P().setTimeout(()=>{i(o)},ia.get());function c(){P().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fa=500,pa=600,ma="_blank",ga="http://localhost";class hn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _a(t,e,n,r=fa,s=pa){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},ha),{width:r.toString(),height:s.toString(),top:i,left:o}),l=I().toLowerCase();n&&(a=Jn(l)?ma:n),Gn(l)&&(e=e||ga,c.scrollbars="yes");const h=Object.entries(c).reduce((_,[m,f])=>`${_}${m}=${f},`,"");if(Hi(l)&&a!=="_self")return ya(e||"",a),new hn(null);const d=window.open(e||"",a,h);g(d,t,"popup-blocked");try{d.focus()}catch{}return new hn(d)}function ya(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea="__/auth/handler",wa="emulator/auth/handler",ba=encodeURIComponent("fac");async function fn(t,e,n,r,s,i){g(t.config.authDomain,t,"auth-domain-config-required"),g(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:be,eventId:s};if(e instanceof sr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ss(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries(i||{}))o[h]=d}if(e instanceof Te){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const c=await t._getAppCheckToken(),l=c?`#${ba}=${encodeURIComponent(c)}`:"";return`${va(t)}?${we(a).slice(1)}${l}`}function va({config:t}){return t.emulator?Ct(t,wa):`https://${t.authDomain}/${Ea}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at="webStorageSupport";class Ia{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=dr,this._completeRedirectFn=Ko,this._overrideRedirectResult=Wo}async _openPopup(e,n,r,s){var i;M((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await fn(e,n,r,_t(),s);return _a(e,o,Lt())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await fn(e,n,r,_t(),s);return Ro(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(M(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await da(e),r=new Jo(e);return n.register("authEvent",s=>(g(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(at,{type:at},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[at];o!==void 0&&n(!!o),A(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ea(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return er()||kt()||ze()}}const Ta=Ia;var pn="@firebase/auth",mn="1.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){g(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ra(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Aa(t){pe(new ie("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;g(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:tr(t)},l=new Ki(r,s,i,c);return to(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),pe(new ie("auth-internal",e=>{const n=Z(e.getProvider("auth").getImmediate());return(r=>new Sa(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ne(pn,mn,Ra(t)),ne(pn,mn,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oa=5*60,Ca=Ln("authIdTokenMaxAge")||Oa;let gn=null;const Pa=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Ca)return;const s=n==null?void 0:n.token;gn!==s&&(gn=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Qc(t=ii()){const e=Fn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=eo(t,{popupRedirectResolver:Ta,persistence:[Mo,Io,dr]}),r=Ln("authTokenSyncURL");if(r){const i=Pa(r);Eo(n,i,()=>i(n.currentUser)),yo(n,o=>i(o))}const s=Kr("auth");return s&&no(n,`http://${s}`),n}Aa("Browser");function yr(t,e){return function(){return t.apply(e,arguments)}}const{toString:ka}=Object.prototype,{getPrototypeOf:Ut}=Object,Ge=(t=>e=>{const n=ka.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),k=t=>(t=t.toLowerCase(),e=>Ge(e)===t),Je=t=>e=>typeof e===t,{isArray:le}=Array,ye=Je("undefined");function Na(t){return t!==null&&!ye(t)&&t.constructor!==null&&!ye(t.constructor)&&R(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Er=k("ArrayBuffer");function Da(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Er(t.buffer),e}const La=Je("string"),R=Je("function"),wr=Je("number"),Ye=t=>t!==null&&typeof t=="object",Ma=t=>t===!0||t===!1,Le=t=>{if(Ge(t)!=="object")return!1;const e=Ut(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},Ua=k("Date"),xa=k("File"),Fa=k("Blob"),Ba=k("FileList"),Ha=t=>Ye(t)&&R(t.pipe),ja=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||R(t.append)&&((e=Ge(t))==="formdata"||e==="object"&&R(t.toString)&&t.toString()==="[object FormData]"))},$a=k("URLSearchParams"),Va=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Re(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,s;if(typeof t!="object"&&(t=[t]),le(t))for(r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let a;for(r=0;r<o;r++)a=i[r],e.call(null,t[a],a,t)}}function br(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,s;for(;r-- >0;)if(s=n[r],e===s.toLowerCase())return s;return null}const vr=t=>!ye(t)&&t!=={};function wt(){const{caseless:t}=vr(this)&&this||{},e={},n=(r,s)=>{const i=t&&br(e,s)||s;Le(e[i])&&Le(r)?e[i]=wt(e[i],r):Le(r)?e[i]=wt({},r):le(r)?e[i]=r.slice():e[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&Re(arguments[r],n);return e}const Wa=(t,e,n,{allOwnKeys:r}={})=>(Re(e,(s,i)=>{n&&R(s)?t[i]=yr(s,n):t[i]=s},{allOwnKeys:r}),t),za=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),qa=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},Ka=(t,e,n,r)=>{let s,i,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),i=s.length;i-- >0;)o=s[i],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Ut(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},Ga=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},Ja=t=>{if(!t)return null;if(le(t))return t;let e=t.length;if(!wr(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},Ya=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Ut(Uint8Array)),Xa=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let s;for(;(s=r.next())&&!s.done;){const i=s.value;e.call(t,i[0],i[1])}},Qa=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},Za=k("HTMLFormElement"),ec=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),_n=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),tc=k("RegExp"),Ir=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};Re(n,(s,i)=>{let o;(o=e(s,i,t))!==!1&&(r[i]=o||s)}),Object.defineProperties(t,r)},nc=t=>{Ir(t,(e,n)=>{if(R(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(R(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},rc=(t,e)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return le(t)?r(t):r(String(t).split(e)),n},sc=()=>{},ic=(t,e)=>(t=+t,Number.isFinite(t)?t:e),ct="abcdefghijklmnopqrstuvwxyz",yn="0123456789",Tr={DIGIT:yn,ALPHA:ct,ALPHA_DIGIT:ct+ct.toUpperCase()+yn},oc=(t=16,e=Tr.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function ac(t){return!!(t&&R(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const cc=t=>{const e=new Array(10),n=(r,s)=>{if(Ye(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[s]=r;const i=le(r)?[]:{};return Re(r,(o,a)=>{const c=n(o,s+1);!ye(c)&&(i[a]=c)}),e[s]=void 0,i}}return r};return n(t,0)},lc=k("AsyncFunction"),uc=t=>t&&(Ye(t)||R(t))&&R(t.then)&&R(t.catch),u={isArray:le,isArrayBuffer:Er,isBuffer:Na,isFormData:ja,isArrayBufferView:Da,isString:La,isNumber:wr,isBoolean:Ma,isObject:Ye,isPlainObject:Le,isUndefined:ye,isDate:Ua,isFile:xa,isBlob:Fa,isRegExp:tc,isFunction:R,isStream:Ha,isURLSearchParams:$a,isTypedArray:Ya,isFileList:Ba,forEach:Re,merge:wt,extend:Wa,trim:Va,stripBOM:za,inherits:qa,toFlatObject:Ka,kindOf:Ge,kindOfTest:k,endsWith:Ga,toArray:Ja,forEachEntry:Xa,matchAll:Qa,isHTMLForm:Za,hasOwnProperty:_n,hasOwnProp:_n,reduceDescriptors:Ir,freezeMethods:nc,toObjectSet:rc,toCamelCase:ec,noop:sc,toFiniteNumber:ic,findKey:br,global:{},isContextDefined:vr,ALPHABET:Tr,generateString:oc,isSpecCompliantForm:ac,toJSONObject:cc,isAsyncFn:lc,isThenable:uc};function y(t,e,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}u.inherits(y,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:u.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Sr=y.prototype,Rr={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{Rr[t]={value:t}});Object.defineProperties(y,Rr);Object.defineProperty(Sr,"isAxiosError",{value:!0});y.from=(t,e,n,r,s,i)=>{const o=Object.create(Sr);return u.toFlatObject(t,o,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),y.call(o,t.message,e,n,r,s),o.cause=t,o.name=t.name,i&&Object.assign(o,i),o};const dc=null;function bt(t){return u.isPlainObject(t)||u.isArray(t)}function Ar(t){return u.endsWith(t,"[]")?t.slice(0,-2):t}function En(t,e,n){return t?t.concat(e).map(function(s,i){return s=Ar(s),!n&&i?"["+s+"]":s}).join(n?".":""):e}function hc(t){return u.isArray(t)&&!t.some(bt)}const fc=u.toFlatObject(u,{},null,function(e){return/^is[A-Z]/.test(e)});function Xe(t,e,n){if(!u.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=u.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(p,w){return!u.isUndefined(w[p])});const r=n.metaTokens,s=n.visitor||h,i=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&u.isSpecCompliantForm(e);if(!u.isFunction(s))throw new TypeError("visitor must be a function");function l(f){if(f===null)return"";if(u.isDate(f))return f.toISOString();if(!c&&u.isBlob(f))throw new y("Blob is not supported. Use a Buffer instead.");return u.isArrayBuffer(f)||u.isTypedArray(f)?c&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function h(f,p,w){let b=f;if(f&&!w&&typeof f=="object"){if(u.endsWith(p,"{}"))p=r?p:p.slice(0,-2),f=JSON.stringify(f);else if(u.isArray(f)&&hc(f)||(u.isFileList(f)||u.endsWith(p,"[]"))&&(b=u.toArray(f)))return p=Ar(p),b.forEach(function(T,ee){!(u.isUndefined(T)||T===null)&&e.append(o===!0?En([p],ee,i):o===null?p:p+"[]",l(T))}),!1}return bt(f)?!0:(e.append(En(w,p,i),l(f)),!1)}const d=[],_=Object.assign(fc,{defaultVisitor:h,convertValue:l,isVisitable:bt});function m(f,p){if(!u.isUndefined(f)){if(d.indexOf(f)!==-1)throw Error("Circular reference detected in "+p.join("."));d.push(f),u.forEach(f,function(b,S){(!(u.isUndefined(b)||b===null)&&s.call(e,b,u.isString(S)?S.trim():S,p,_))===!0&&m(b,p?p.concat(S):[S])}),d.pop()}}if(!u.isObject(t))throw new TypeError("data must be an object");return m(t),e}function wn(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function xt(t,e){this._pairs=[],t&&Xe(t,this,e)}const Or=xt.prototype;Or.append=function(e,n){this._pairs.push([e,n])};Or.toString=function(e){const n=e?function(r){return e.call(this,r,wn)}:wn;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function pc(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Cr(t,e,n){if(!e)return t;const r=n&&n.encode||pc,s=n&&n.serialize;let i;if(s?i=s(e,n):i=u.isURLSearchParams(e)?e.toString():new xt(e,n).toString(r),i){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class mc{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){u.forEach(this.handlers,function(r){r!==null&&e(r)})}}const bn=mc,Pr={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},gc=typeof URLSearchParams<"u"?URLSearchParams:xt,_c=typeof FormData<"u"?FormData:null,yc=typeof Blob<"u"?Blob:null,Ec={isBrowser:!0,classes:{URLSearchParams:gc,FormData:_c,Blob:yc},protocols:["http","https","file","blob","url","data"]},kr=typeof window<"u"&&typeof document<"u",wc=(t=>kr&&["ReactNative","NativeScript","NS"].indexOf(t)<0)(typeof navigator<"u"&&navigator.product),bc=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),vc=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:kr,hasStandardBrowserEnv:wc,hasStandardBrowserWebWorkerEnv:bc},Symbol.toStringTag,{value:"Module"})),O={...vc,...Ec};function Ic(t,e){return Xe(t,new O.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return O.isNode&&u.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}function Tc(t){return u.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Sc(t){const e={},n=Object.keys(t);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],e[i]=t[i];return e}function Nr(t){function e(n,r,s,i){let o=n[i++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),c=i>=n.length;return o=!o&&u.isArray(s)?s.length:o,c?(u.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!a):((!s[o]||!u.isObject(s[o]))&&(s[o]=[]),e(n,r,s[o],i)&&u.isArray(s[o])&&(s[o]=Sc(s[o])),!a)}if(u.isFormData(t)&&u.isFunction(t.entries)){const n={};return u.forEachEntry(t,(r,s)=>{e(Tc(r),s,n,0)}),n}return null}function Rc(t,e,n){if(u.isString(t))try{return(e||JSON.parse)(t),u.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const Ft={transitional:Pr,adapter:["xhr","http"],transformRequest:[function(e,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=u.isObject(e);if(i&&u.isHTMLForm(e)&&(e=new FormData(e)),u.isFormData(e))return s?JSON.stringify(Nr(e)):e;if(u.isArrayBuffer(e)||u.isBuffer(e)||u.isStream(e)||u.isFile(e)||u.isBlob(e))return e;if(u.isArrayBufferView(e))return e.buffer;if(u.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Ic(e,this.formSerializer).toString();if((a=u.isFileList(e))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return Xe(a?{"files[]":e}:e,c&&new c,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),Rc(e)):e}],transformResponse:[function(e){const n=this.transitional||Ft.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(e&&u.isString(e)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?y.from(a,y.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:O.classes.FormData,Blob:O.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};u.forEach(["delete","get","head","post","put","patch"],t=>{Ft.headers[t]={}});const Bt=Ft,Ac=u.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Oc=t=>{const e={};let n,r,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||e[n]&&Ac[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},vn=Symbol("internals");function ue(t){return t&&String(t).trim().toLowerCase()}function Me(t){return t===!1||t==null?t:u.isArray(t)?t.map(Me):String(t)}function Cc(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const Pc=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function lt(t,e,n,r,s){if(u.isFunction(r))return r.call(this,e,n);if(s&&(e=n),!!u.isString(e)){if(u.isString(r))return e.indexOf(r)!==-1;if(u.isRegExp(r))return r.test(e)}}function kc(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function Nc(t,e){const n=u.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(s,i,o){return this[r].call(this,e,s,i,o)},configurable:!0})})}class Qe{constructor(e){e&&this.set(e)}set(e,n,r){const s=this;function i(a,c,l){const h=ue(c);if(!h)throw new Error("header name must be a non-empty string");const d=u.findKey(s,h);(!d||s[d]===void 0||l===!0||l===void 0&&s[d]!==!1)&&(s[d||c]=Me(a))}const o=(a,c)=>u.forEach(a,(l,h)=>i(l,h,c));return u.isPlainObject(e)||e instanceof this.constructor?o(e,n):u.isString(e)&&(e=e.trim())&&!Pc(e)?o(Oc(e),n):e!=null&&i(n,e,r),this}get(e,n){if(e=ue(e),e){const r=u.findKey(this,e);if(r){const s=this[r];if(!n)return s;if(n===!0)return Cc(s);if(u.isFunction(n))return n.call(this,s,r);if(u.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=ue(e),e){const r=u.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||lt(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let s=!1;function i(o){if(o=ue(o),o){const a=u.findKey(r,o);a&&(!n||lt(r,r[a],a,n))&&(delete r[a],s=!0)}}return u.isArray(e)?e.forEach(i):i(e),s}clear(e){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!e||lt(this,this[i],i,e,!0))&&(delete this[i],s=!0)}return s}normalize(e){const n=this,r={};return u.forEach(this,(s,i)=>{const o=u.findKey(r,i);if(o){n[o]=Me(s),delete n[i];return}const a=e?kc(i):String(i).trim();a!==i&&delete n[i],n[a]=Me(s),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return u.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=e&&u.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(s=>r.set(s)),r}static accessor(e){const r=(this[vn]=this[vn]={accessors:{}}).accessors,s=this.prototype;function i(o){const a=ue(o);r[a]||(Nc(s,o),r[a]=!0)}return u.isArray(e)?e.forEach(i):i(e),this}}Qe.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);u.reduceDescriptors(Qe.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});u.freezeMethods(Qe);const L=Qe;function ut(t,e){const n=this||Bt,r=e||n,s=L.from(r.headers);let i=r.data;return u.forEach(t,function(a){i=a.call(n,i,s.normalize(),e?e.status:void 0)}),s.normalize(),i}function Dr(t){return!!(t&&t.__CANCEL__)}function Ae(t,e,n){y.call(this,t??"canceled",y.ERR_CANCELED,e,n),this.name="CanceledError"}u.inherits(Ae,y,{__CANCEL__:!0});function Dc(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new y("Request failed with status code "+n.status,[y.ERR_BAD_REQUEST,y.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Lc=O.hasStandardBrowserEnv?{write(t,e,n,r,s,i){const o=[t+"="+encodeURIComponent(e)];u.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),u.isString(r)&&o.push("path="+r),u.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Mc(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function Uc(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function Lr(t,e){return t&&!Mc(e)?Uc(t,e):e}const xc=O.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const a=u.isString(o)?s(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function Fc(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function Bc(t,e){t=t||10;const n=new Array(t),r=new Array(t);let s=0,i=0,o;return e=e!==void 0?e:1e3,function(c){const l=Date.now(),h=r[i];o||(o=l),n[s]=c,r[s]=l;let d=i,_=0;for(;d!==s;)_+=n[d++],d=d%t;if(s=(s+1)%t,s===i&&(i=(i+1)%t),l-o<e)return;const m=h&&l-h;return m?Math.round(_*1e3/m):void 0}}function In(t,e){let n=0;const r=Bc(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,a=i-n,c=r(a),l=i<=o;n=i;const h={loaded:i,total:o,progress:o?i/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&l?(o-i)/c:void 0,event:s};h[e?"download":"upload"]=!0,t(h)}}const Hc=typeof XMLHttpRequest<"u",jc=Hc&&function(t){return new Promise(function(n,r){let s=t.data;const i=L.from(t.headers).normalize();let{responseType:o,withXSRFToken:a}=t,c;function l(){t.cancelToken&&t.cancelToken.unsubscribe(c),t.signal&&t.signal.removeEventListener("abort",c)}let h;if(u.isFormData(s)){if(O.hasStandardBrowserEnv||O.hasStandardBrowserWebWorkerEnv)i.setContentType(!1);else if((h=i.getContentType())!==!1){const[p,...w]=h?h.split(";").map(b=>b.trim()).filter(Boolean):[];i.setContentType([p||"multipart/form-data",...w].join("; "))}}let d=new XMLHttpRequest;if(t.auth){const p=t.auth.username||"",w=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";i.set("Authorization","Basic "+btoa(p+":"+w))}const _=Lr(t.baseURL,t.url);d.open(t.method.toUpperCase(),Cr(_,t.params,t.paramsSerializer),!0),d.timeout=t.timeout;function m(){if(!d)return;const p=L.from("getAllResponseHeaders"in d&&d.getAllResponseHeaders()),b={data:!o||o==="text"||o==="json"?d.responseText:d.response,status:d.status,statusText:d.statusText,headers:p,config:t,request:d};Dc(function(T){n(T),l()},function(T){r(T),l()},b),d=null}if("onloadend"in d?d.onloadend=m:d.onreadystatechange=function(){!d||d.readyState!==4||d.status===0&&!(d.responseURL&&d.responseURL.indexOf("file:")===0)||setTimeout(m)},d.onabort=function(){d&&(r(new y("Request aborted",y.ECONNABORTED,t,d)),d=null)},d.onerror=function(){r(new y("Network Error",y.ERR_NETWORK,t,d)),d=null},d.ontimeout=function(){let w=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const b=t.transitional||Pr;t.timeoutErrorMessage&&(w=t.timeoutErrorMessage),r(new y(w,b.clarifyTimeoutError?y.ETIMEDOUT:y.ECONNABORTED,t,d)),d=null},O.hasStandardBrowserEnv&&(a&&u.isFunction(a)&&(a=a(t)),a||a!==!1&&xc(_))){const p=t.xsrfHeaderName&&t.xsrfCookieName&&Lc.read(t.xsrfCookieName);p&&i.set(t.xsrfHeaderName,p)}s===void 0&&i.setContentType(null),"setRequestHeader"in d&&u.forEach(i.toJSON(),function(w,b){d.setRequestHeader(b,w)}),u.isUndefined(t.withCredentials)||(d.withCredentials=!!t.withCredentials),o&&o!=="json"&&(d.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&d.addEventListener("progress",In(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&d.upload&&d.upload.addEventListener("progress",In(t.onUploadProgress)),(t.cancelToken||t.signal)&&(c=p=>{d&&(r(!p||p.type?new Ae(null,t,d):p),d.abort(),d=null)},t.cancelToken&&t.cancelToken.subscribe(c),t.signal&&(t.signal.aborted?c():t.signal.addEventListener("abort",c)));const f=Fc(_);if(f&&O.protocols.indexOf(f)===-1){r(new y("Unsupported protocol "+f+":",y.ERR_BAD_REQUEST,t));return}d.send(s||null)})},vt={http:dc,xhr:jc};u.forEach(vt,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Tn=t=>`- ${t}`,$c=t=>u.isFunction(t)||t===null||t===!1,Mr={getAdapter:t=>{t=u.isArray(t)?t:[t];const{length:e}=t;let n,r;const s={};for(let i=0;i<e;i++){n=t[i];let o;if(r=n,!$c(n)&&(r=vt[(o=String(n)).toLowerCase()],r===void 0))throw new y(`Unknown adapter '${o}'`);if(r)break;s[o||"#"+i]=r}if(!r){const i=Object.entries(s).map(([a,c])=>`adapter ${a} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=e?i.length>1?`since :
`+i.map(Tn).join(`
`):" "+Tn(i[0]):"as no adapter specified";throw new y("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:vt};function dt(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Ae(null,t)}function Sn(t){return dt(t),t.headers=L.from(t.headers),t.data=ut.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Mr.getAdapter(t.adapter||Bt.adapter)(t).then(function(r){return dt(t),r.data=ut.call(t,t.transformResponse,r),r.headers=L.from(r.headers),r},function(r){return Dr(r)||(dt(t),r&&r.response&&(r.response.data=ut.call(t,t.transformResponse,r.response),r.response.headers=L.from(r.response.headers))),Promise.reject(r)})}const Rn=t=>t instanceof L?t.toJSON():t;function ae(t,e){e=e||{};const n={};function r(l,h,d){return u.isPlainObject(l)&&u.isPlainObject(h)?u.merge.call({caseless:d},l,h):u.isPlainObject(h)?u.merge({},h):u.isArray(h)?h.slice():h}function s(l,h,d){if(u.isUndefined(h)){if(!u.isUndefined(l))return r(void 0,l,d)}else return r(l,h,d)}function i(l,h){if(!u.isUndefined(h))return r(void 0,h)}function o(l,h){if(u.isUndefined(h)){if(!u.isUndefined(l))return r(void 0,l)}else return r(void 0,h)}function a(l,h,d){if(d in e)return r(l,h);if(d in t)return r(void 0,l)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(l,h)=>s(Rn(l),Rn(h),!0)};return u.forEach(Object.keys(Object.assign({},t,e)),function(h){const d=c[h]||s,_=d(t[h],e[h],h);u.isUndefined(_)&&d!==a||(n[h]=_)}),n}const Ur="1.6.7",Ht={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Ht[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const An={};Ht.transitional=function(e,n,r){function s(i,o){return"[Axios v"+Ur+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,a)=>{if(e===!1)throw new y(s(o," has been removed"+(n?" in "+n:"")),y.ERR_DEPRECATED);return n&&!An[o]&&(An[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};function Vc(t,e,n){if(typeof t!="object")throw new y("options must be an object",y.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let s=r.length;for(;s-- >0;){const i=r[s],o=e[i];if(o){const a=t[i],c=a===void 0||o(a,i,t);if(c!==!0)throw new y("option "+i+" must be "+c,y.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new y("Unknown option "+i,y.ERR_BAD_OPTION)}}const It={assertOptions:Vc,validators:Ht},F=It.validators;class We{constructor(e){this.defaults=e,this.interceptors={request:new bn,response:new bn}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const i=s.stack?s.stack.replace(/^.+\n/,""):"";r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=ae(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&It.assertOptions(r,{silentJSONParsing:F.transitional(F.boolean),forcedJSONParsing:F.transitional(F.boolean),clarifyTimeoutError:F.transitional(F.boolean)},!1),s!=null&&(u.isFunction(s)?n.paramsSerializer={serialize:s}:It.assertOptions(s,{encode:F.function,serialize:F.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&u.merge(i.common,i[n.method]);i&&u.forEach(["delete","get","head","post","put","patch","common"],f=>{delete i[f]}),n.headers=L.concat(o,i);const a=[];let c=!0;this.interceptors.request.forEach(function(p){typeof p.runWhen=="function"&&p.runWhen(n)===!1||(c=c&&p.synchronous,a.unshift(p.fulfilled,p.rejected))});const l=[];this.interceptors.response.forEach(function(p){l.push(p.fulfilled,p.rejected)});let h,d=0,_;if(!c){const f=[Sn.bind(this),void 0];for(f.unshift.apply(f,a),f.push.apply(f,l),_=f.length,h=Promise.resolve(n);d<_;)h=h.then(f[d++],f[d++]);return h}_=a.length;let m=n;for(d=0;d<_;){const f=a[d++],p=a[d++];try{m=f(m)}catch(w){p.call(this,w);break}}try{h=Sn.call(this,m)}catch(f){return Promise.reject(f)}for(d=0,_=l.length;d<_;)h=h.then(l[d++],l[d++]);return h}getUri(e){e=ae(this.defaults,e);const n=Lr(e.baseURL,e.url);return Cr(n,e.params,e.paramsSerializer)}}u.forEach(["delete","get","head","options"],function(e){We.prototype[e]=function(n,r){return this.request(ae(r||{},{method:e,url:n,data:(r||{}).data}))}});u.forEach(["post","put","patch"],function(e){function n(r){return function(i,o,a){return this.request(ae(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}We.prototype[e]=n(),We.prototype[e+"Form"]=n(!0)});const Ue=We;class jt{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(a=>{r.subscribe(a),i=a}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},e(function(i,o,a){r.reason||(r.reason=new Ae(i,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new jt(function(s){e=s}),cancel:e}}}const Wc=jt;function zc(t){return function(n){return t.apply(null,n)}}function qc(t){return u.isObject(t)&&t.isAxiosError===!0}const Tt={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Tt).forEach(([t,e])=>{Tt[e]=t});const Kc=Tt;function xr(t){const e=new Ue(t),n=yr(Ue.prototype.request,e);return u.extend(n,Ue.prototype,e,{allOwnKeys:!0}),u.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return xr(ae(t,s))},n}const v=xr(Bt);v.Axios=Ue;v.CanceledError=Ae;v.CancelToken=Wc;v.isCancel=Dr;v.VERSION=Ur;v.toFormData=Xe;v.AxiosError=y;v.Cancel=v.CanceledError;v.all=function(e){return Promise.all(e)};v.spread=zc;v.isAxiosError=qc;v.mergeConfig=ae;v.AxiosHeaders=L;v.formToJSON=t=>Nr(u.isHTMLForm(t)?new FormData(t):t);v.getAdapter=Mr.getAdapter;v.HttpStatusCode=Kc;v.default=v;const Zc=v;export{Zc as a,Gc as b,Jc as c,Qc as g,si as i,Yc as s,Xc as u};
//# sourceMappingURL=vendor-40f3fc49.js.map
