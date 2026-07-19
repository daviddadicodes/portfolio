var Uo=Object.defineProperty;var Io=(i,e,t)=>e in i?Uo(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var O=(i,e,t)=>(Io(i,typeof e!="symbol"?e+"":e,t),t);const No=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}};No();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nr="152",Fo=0,dr=1,Oo=2,Ya=1,Bo=2,sn=3,mn=0,St=1,vt=2,pn=0,Zn=1,Qi=2,fr=3,pr=4,zo=5,$n=100,ko=101,Go=102,mr=103,gr=104,Ho=200,Vo=201,Wo=202,Xo=203,ja=204,$a=205,qo=206,Yo=207,jo=208,$o=209,Ko=210,Zo=0,Jo=1,Qo=2,Ys=3,el=4,tl=5,nl=6,il=7,Ka=0,sl=1,rl=2,an=0,al=1,ol=2,ll=3,cl=4,hl=5,Za=300,ei=301,ti=302,js=303,$s=304,as=306,Ks=1e3,Gt=1001,Zs=1002,_t=1003,_r=1004,fs=1005,Lt=1006,ul=1007,_i=1008,Ln=1009,dl=1010,fl=1011,Ja=1012,pl=1013,wn=1014,An=1015,vi=1016,ml=1017,gl=1018,Jn=1020,_l=1021,Ht=1023,vl=1024,xl=1025,Rn=1026,ni=1027,Ml=1028,Sl=1029,yl=1030,El=1031,bl=1033,ps=33776,ms=33777,gs=33778,_s=33779,vr=35840,xr=35841,Mr=35842,Sr=35843,Tl=36196,yr=37492,Er=37496,br=37808,Tr=37809,wr=37810,Ar=37811,Rr=37812,Cr=37813,Pr=37814,Lr=37815,Dr=37816,Ur=37817,Ir=37818,Nr=37819,Fr=37820,Or=37821,vs=36492,wl=36283,Br=36284,zr=36285,kr=36286,Qa=3e3,Cn=3001,Al=3200,Rl=3201,eo=0,Cl=1,Pn="",Re="srgb",Kt="srgb-linear",to="display-p3",xs=7680,Pl=519,Gr=35044,Hr="300 es",Js=1035;class ai{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ms=Math.PI/180,Qs=180/Math.PI;function xi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ut[i&255]+ut[i>>8&255]+ut[i>>16&255]+ut[i>>24&255]+"-"+ut[e&255]+ut[e>>8&255]+"-"+ut[e>>16&15|64]+ut[e>>24&255]+"-"+ut[t&63|128]+ut[t>>8&255]+"-"+ut[t>>16&255]+ut[t>>24&255]+ut[n&255]+ut[n>>8&255]+ut[n>>16&255]+ut[n>>24&255]).toLowerCase()}function Mt(i,e,t){return Math.max(e,Math.min(t,i))}function Ll(i,e){return(i%e+e)%e}function Ss(i,e,t){return(1-t)*i+t*e}function Vr(i){return(i&i-1)===0&&i!==0}function Dl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ti(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Et(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class se{constructor(e=0,t=0){se.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],m=n[5],g=n[8],_=s[0],p=s[3],h=s[6],S=s[1],M=s[4],E=s[7],T=s[2],A=s[5],L=s[8];return r[0]=a*_+o*S+l*T,r[3]=a*p+o*M+l*A,r[6]=a*h+o*E+l*L,r[1]=c*_+u*S+d*T,r[4]=c*p+u*M+d*A,r[7]=c*h+u*E+d*L,r[2]=f*_+m*S+g*T,r[5]=f*p+m*M+g*A,r[8]=f*h+m*E+g*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,f=o*l-u*r,m=c*r-a*l,g=t*d+n*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(s*c-u*n)*_,e[2]=(o*n-s*a)*_,e[3]=f*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=m*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ys.makeScale(e,t)),this}rotate(e){return this.premultiply(ys.makeRotation(-e)),this}translate(e,t){return this.premultiply(ys.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ys=new Fe;function no(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function es(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}const Wr={};function gi(i){i in Wr||(Wr[i]=!0,console.warn(i))}function Qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Es(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Ul=new Fe().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Il=new Fe().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Nl(i){return i.convertSRGBToLinear().applyMatrix3(Il)}function Fl(i){return i.applyMatrix3(Ul).convertLinearToSRGB()}const Ol={[Kt]:i=>i,[Re]:i=>i.convertSRGBToLinear(),[to]:Nl},Bl={[Kt]:i=>i,[Re]:i=>i.convertLinearToSRGB(),[to]:Fl},Nt={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return Kt},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Ol[e],s=Bl[t];if(n===void 0||s===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let Un;class io{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Un===void 0&&(Un=es("canvas")),Un.width=e.width,Un.height=e.height;const n=Un.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Un}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=es("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Qn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Qn(t[n]/255)*255):t[n]=Qn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class so{constructor(e=null){this.isSource=!0,this.uuid=xi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(bs(s[a].image)):r.push(bs(s[a]))}else r=bs(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function bs(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?io.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zl=0;class Rt extends ai{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,n=Gt,s=Gt,r=Lt,a=_i,o=Ht,l=Ln,c=Rt.DEFAULT_ANISOTROPY,u=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zl++}),this.uuid=xi(),this.name="",this.source=new so(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(gi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Cn?Re:Pn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Za)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ks:e.x=e.x-Math.floor(e.x);break;case Gt:e.x=e.x<0?0:1;break;case Zs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ks:e.y=e.y-Math.floor(e.y);break;case Gt:e.y=e.y<0?0:1;break;case Zs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return gi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Re?Cn:Qa}set encoding(e){gi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Cn?Re:Pn}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=Za;Rt.DEFAULT_ANISOTROPY=1;class qe{constructor(e=0,t=0,n=0,s=1){qe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],m=l[5],g=l[9],_=l[2],p=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,E=(m+1)/2,T=(h+1)/2,A=(u+f)/4,L=(d+_)/4,N=(g+p)/4;return M>E&&M>T?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=A/n,r=L/n):E>T?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=A/s,r=N/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=L/r,s=N/r),this.set(n,s,r,t),this}let S=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(d-_)/S,this.z=(f-u)/S,this.w=Math.acos((c+m+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vt extends ai{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new qe(0,0,e,t),this.scissorTest=!1,this.viewport=new qe(0,0,e,t);const s={width:e,height:t,depth:1};n.encoding!==void 0&&(gi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Cn?Re:Pn),this.texture=new Rt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Lt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new so(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ro extends Rt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=_t,this.minFilter=_t,this.wrapR=Gt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kl extends Rt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=_t,this.minFilter=_t,this.wrapR=Gt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3];const f=r[a+0],m=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==f||c!==m||u!==g){let p=1-o;const h=l*f+c*m+u*g+d*_,S=h>=0?1:-1,M=1-h*h;if(M>Number.EPSILON){const T=Math.sqrt(M),A=Math.atan2(T,h*S);p=Math.sin(p*A)/T,o=Math.sin(o*A)/T}const E=o*S;if(l=l*p+f*E,c=c*p+m*E,u=u*p+g*E,d=d*p+_*E,p===1-o){const T=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=T,c*=T,u*=T,d*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[a],f=r[a+1],m=r[a+2],g=r[a+3];return e[t]=o*g+u*d+l*m-c*f,e[t+1]=l*g+u*f+c*d-o*m,e[t+2]=c*g+u*m+o*f-l*d,e[t+3]=u*g-o*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),f=l(n/2),m=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*u*d+c*m*g,this._y=c*m*d-f*u*g,this._z=c*u*g+f*m*d,this._w=c*u*d-f*m*g;break;case"YXZ":this._x=f*u*d+c*m*g,this._y=c*m*d-f*u*g,this._z=c*u*g-f*m*d,this._w=c*u*d+f*m*g;break;case"ZXY":this._x=f*u*d-c*m*g,this._y=c*m*d+f*u*g,this._z=c*u*g+f*m*d,this._w=c*u*d-f*m*g;break;case"ZYX":this._x=f*u*d-c*m*g,this._y=c*m*d+f*u*g,this._z=c*u*g-f*m*d,this._w=c*u*d+f*m*g;break;case"YZX":this._x=f*u*d+c*m*g,this._y=c*m*d+f*u*g,this._z=c*u*g-f*m*d,this._w=c*u*d-f*m*g;break;case"XZY":this._x=f*u*d-c*m*g,this._y=c*m*d-f*u*g,this._z=c*u*g+f*m*d,this._w=c*u*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=n+o+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>d){const m=2*Math.sqrt(1+n-o-d);this._w=(u-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-n-d);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xr.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xr.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*s-o*n,u=l*n+o*t-r*s,d=l*s+r*n-a*t,f=-r*t-a*n-o*s;return this.x=c*l+f*-r+u*-o-d*-a,this.y=u*l+f*-a+d*-r-c*-o,this.z=d*l+f*-o+c*-a-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ts.copy(this).projectOnVector(e),this.sub(Ts)}reflect(e){return this.sub(Ts.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ts=new R,Xr=new Mi;class Si{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),In.copy(e.boundingBox),In.applyMatrix4(e.matrixWorld),this.union(In);else{const s=e.geometry;if(s!==void 0)if(t&&s.attributes!==void 0&&s.attributes.position!==void 0){const r=s.attributes.position;for(let a=0,o=r.count;a<o;a++)Jt.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Jt)}else s.boundingBox===null&&s.computeBoundingBox(),In.copy(s.boundingBox),In.applyMatrix4(e.matrixWorld),this.union(In)}const n=e.children;for(let s=0,r=n.length;s<r;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Jt),Jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ci),wi.subVectors(this.max,ci),Nn.subVectors(e.a,ci),Fn.subVectors(e.b,ci),On.subVectors(e.c,ci),ln.subVectors(Fn,Nn),cn.subVectors(On,Fn),xn.subVectors(Nn,On);let t=[0,-ln.z,ln.y,0,-cn.z,cn.y,0,-xn.z,xn.y,ln.z,0,-ln.x,cn.z,0,-cn.x,xn.z,0,-xn.x,-ln.y,ln.x,0,-cn.y,cn.x,0,-xn.y,xn.x,0];return!ws(t,Nn,Fn,On,wi)||(t=[1,0,0,0,1,0,0,0,1],!ws(t,Nn,Fn,On,wi))?!1:(Ai.crossVectors(ln,cn),t=[Ai.x,Ai.y,Ai.z],ws(t,Nn,Fn,On,wi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zt=[new R,new R,new R,new R,new R,new R,new R,new R],Jt=new R,In=new Si,Nn=new R,Fn=new R,On=new R,ln=new R,cn=new R,xn=new R,ci=new R,wi=new R,Ai=new R,Mn=new R;function ws(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Mn.fromArray(i,r);const o=s.x*Math.abs(Mn.x)+s.y*Math.abs(Mn.y)+s.z*Math.abs(Mn.z),l=e.dot(Mn),c=t.dot(Mn),u=n.dot(Mn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Gl=new Si,hi=new R,As=new R;class yi{constructor(e=new R,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Gl.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hi.subVectors(e,this.center);const t=hi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(hi,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(As.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hi.copy(e.center).add(As)),this.expandByPoint(hi.copy(e.center).sub(As))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qt=new R,Rs=new R,Ri=new R,hn=new R,Cs=new R,Ci=new R,Ps=new R;class ir{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Qt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qt.copy(this.origin).addScaledVector(this.direction,t),Qt.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Rs.copy(e).add(t).multiplyScalar(.5),Ri.copy(t).sub(e).normalize(),hn.copy(this.origin).sub(Rs);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ri),o=hn.dot(this.direction),l=-hn.dot(Ri),c=hn.lengthSq(),u=Math.abs(1-a*a);let d,f,m,g;if(u>0)if(d=a*l-o,f=a*o-l,g=r*u,d>=0)if(f>=-g)if(f<=g){const _=1/u;d*=_,f*=_,m=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Rs).addScaledVector(Ri,f),m}intersectSphere(e,t){Qt.subVectors(e.center,this.origin);const n=Qt.dot(this.direction),s=Qt.dot(Qt)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Qt)!==null}intersectTriangle(e,t,n,s,r){Cs.subVectors(t,e),Ci.subVectors(n,e),Ps.crossVectors(Cs,Ci);let a=this.direction.dot(Ps),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;hn.subVectors(this.origin,e);const l=o*this.direction.dot(Ci.crossVectors(hn,Ci));if(l<0)return null;const c=o*this.direction.dot(Cs.cross(hn));if(c<0||l+c>a)return null;const u=-o*hn.dot(Ps);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,s,r,a,o,l,c,u,d,f,m,g,_,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=m,h[7]=g,h[11]=_,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Bn.setFromMatrixColumn(e,0).length(),r=1/Bn.setFromMatrixColumn(e,1).length(),a=1/Bn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=a*u,m=a*d,g=o*u,_=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=m+g*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,m=l*d,g=c*u,_=c*d;t[0]=f+_*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=m*o-g,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,m=l*d,g=c*u,_=c*d;t[0]=f-_*o,t[4]=-a*d,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*u,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,m=a*d,g=o*u,_=o*d;t[0]=l*u,t[4]=g*c-m,t[8]=f*c+_,t[1]=l*d,t[5]=_*c+f,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-f*d,t[8]=g*d+m,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*d+g,t[10]=f-_*d}else if(e.order==="XZY"){const f=a*l,m=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+_,t[5]=a*u,t[9]=m*d-g,t[2]=g*d-m,t[6]=o*u,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hl,e,Vl)}lookAt(e,t,n){const s=this.elements;return bt.subVectors(e,t),bt.lengthSq()===0&&(bt.z=1),bt.normalize(),un.crossVectors(n,bt),un.lengthSq()===0&&(Math.abs(n.z)===1?bt.x+=1e-4:bt.z+=1e-4,bt.normalize(),un.crossVectors(n,bt)),un.normalize(),Pi.crossVectors(bt,un),s[0]=un.x,s[4]=Pi.x,s[8]=bt.x,s[1]=un.y,s[5]=Pi.y,s[9]=bt.y,s[2]=un.z,s[6]=Pi.z,s[10]=bt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],m=n[13],g=n[2],_=n[6],p=n[10],h=n[14],S=n[3],M=n[7],E=n[11],T=n[15],A=s[0],L=s[4],N=s[8],v=s[12],w=s[1],q=s[5],B=s[9],U=s[13],F=s[2],V=s[6],Z=s[10],j=s[14],Y=s[3],te=s[7],K=s[11],xe=s[15];return r[0]=a*A+o*w+l*F+c*Y,r[4]=a*L+o*q+l*V+c*te,r[8]=a*N+o*B+l*Z+c*K,r[12]=a*v+o*U+l*j+c*xe,r[1]=u*A+d*w+f*F+m*Y,r[5]=u*L+d*q+f*V+m*te,r[9]=u*N+d*B+f*Z+m*K,r[13]=u*v+d*U+f*j+m*xe,r[2]=g*A+_*w+p*F+h*Y,r[6]=g*L+_*q+p*V+h*te,r[10]=g*N+_*B+p*Z+h*K,r[14]=g*v+_*U+p*j+h*xe,r[3]=S*A+M*w+E*F+T*Y,r[7]=S*L+M*q+E*V+T*te,r[11]=S*N+M*B+E*Z+T*K,r[15]=S*v+M*U+E*j+T*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],m=e[14],g=e[3],_=e[7],p=e[11],h=e[15];return g*(+r*l*d-s*c*d-r*o*f+n*c*f+s*o*m-n*l*m)+_*(+t*l*m-t*c*f+r*a*f-s*a*m+s*c*u-r*l*u)+p*(+t*c*d-t*o*m-r*a*d+n*a*m+r*o*u-n*c*u)+h*(-s*o*u-t*l*d+t*o*f+s*a*d-n*a*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],m=e[11],g=e[12],_=e[13],p=e[14],h=e[15],S=d*p*c-_*f*c+_*l*m-o*p*m-d*l*h+o*f*h,M=g*f*c-u*p*c-g*l*m+a*p*m+u*l*h-a*f*h,E=u*_*c-g*d*c+g*o*m-a*_*m-u*o*h+a*d*h,T=g*d*l-u*_*l-g*o*f+a*_*f+u*o*p-a*d*p,A=t*S+n*M+s*E+r*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/A;return e[0]=S*L,e[1]=(_*f*r-d*p*r-_*s*m+n*p*m+d*s*h-n*f*h)*L,e[2]=(o*p*r-_*l*r+_*s*c-n*p*c-o*s*h+n*l*h)*L,e[3]=(d*l*r-o*f*r-d*s*c+n*f*c+o*s*m-n*l*m)*L,e[4]=M*L,e[5]=(u*p*r-g*f*r+g*s*m-t*p*m-u*s*h+t*f*h)*L,e[6]=(g*l*r-a*p*r-g*s*c+t*p*c+a*s*h-t*l*h)*L,e[7]=(a*f*r-u*l*r+u*s*c-t*f*c-a*s*m+t*l*m)*L,e[8]=E*L,e[9]=(g*d*r-u*_*r-g*n*m+t*_*m+u*n*h-t*d*h)*L,e[10]=(a*_*r-g*o*r+g*n*c-t*_*c-a*n*h+t*o*h)*L,e[11]=(u*o*r-a*d*r-u*n*c+t*d*c+a*n*m-t*o*m)*L,e[12]=T*L,e[13]=(u*_*s-g*d*s+g*n*f-t*_*f-u*n*p+t*d*p)*L,e[14]=(g*o*s-a*_*s-g*n*l+t*_*l+a*n*p-t*o*p)*L,e[15]=(a*d*s-u*o*s+u*n*l-t*d*l-a*n*f+t*o*f)*L,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,d=o+o,f=r*c,m=r*u,g=r*d,_=a*u,p=a*d,h=o*d,S=l*c,M=l*u,E=l*d,T=n.x,A=n.y,L=n.z;return s[0]=(1-(_+h))*T,s[1]=(m+E)*T,s[2]=(g-M)*T,s[3]=0,s[4]=(m-E)*A,s[5]=(1-(f+h))*A,s[6]=(p+S)*A,s[7]=0,s[8]=(g+M)*L,s[9]=(p-S)*L,s[10]=(1-(f+_))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Bn.set(s[0],s[1],s[2]).length();const a=Bn.set(s[4],s[5],s[6]).length(),o=Bn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Ft.copy(this);const c=1/r,u=1/a,d=1/o;return Ft.elements[0]*=c,Ft.elements[1]*=c,Ft.elements[2]*=c,Ft.elements[4]*=u,Ft.elements[5]*=u,Ft.elements[6]*=u,Ft.elements[8]*=d,Ft.elements[9]*=d,Ft.elements[10]*=d,t.setFromRotationMatrix(Ft),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a){const o=this.elements,l=2*r/(t-e),c=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),f=-(a+r)/(a-r),m=-2*a*r/(a-r);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=d,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,s,r,a){const o=this.elements,l=1/(t-e),c=1/(n-s),u=1/(a-r),d=(t+e)*l,f=(n+s)*c,m=(a+r)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-d,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-f,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Bn=new R,Ft=new je,Hl=new R(0,0,0),Vl=new R(1,1,1),un=new R,Pi=new R,bt=new R,qr=new je,Yr=new Mi;class os{constructor(e=0,t=0,n=0,s=os.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return qr.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qr,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yr.setFromEuler(this),this.setFromQuaternion(Yr,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}os.DEFAULT_ORDER="XYZ";class ao{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Wl=0;const jr=new R,zn=new Mi,en=new je,Li=new R,ui=new R,Xl=new R,ql=new Mi,$r=new R(1,0,0),Kr=new R(0,1,0),Zr=new R(0,0,1),Yl={type:"added"},Jr={type:"removed"};class ft extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wl++}),this.uuid=xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DEFAULT_UP.clone();const e=new R,t=new os,n=new Mi,s=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new je},normalMatrix:{value:new Fe}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ao,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zn.setFromAxisAngle(e,t),this.quaternion.multiply(zn),this}rotateOnWorldAxis(e,t){return zn.setFromAxisAngle(e,t),this.quaternion.premultiply(zn),this}rotateX(e){return this.rotateOnAxis($r,e)}rotateY(e){return this.rotateOnAxis(Kr,e)}rotateZ(e){return this.rotateOnAxis(Zr,e)}translateOnAxis(e,t){return jr.copy(e).applyQuaternion(this.quaternion),this.position.add(jr.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($r,e)}translateY(e){return this.translateOnAxis(Kr,e)}translateZ(e){return this.translateOnAxis(Zr,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(en.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Li.copy(e):Li.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ui.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?en.lookAt(ui,Li,this.up):en.lookAt(Li,ui,this.up),this.quaternion.setFromRotationMatrix(en),s&&(en.extractRotation(s.matrixWorld),zn.setFromRotationMatrix(en),this.quaternion.premultiply(zn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Yl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jr)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Jr)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),en.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),en.multiply(e.parent.matrixWorld)),e.applyMatrix4(en),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let s=0,r=this.children.length;s<r;s++){const a=this.children[s].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ui,e,Xl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ui,ql,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}ft.DEFAULT_UP=new R(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ot=new R,tn=new R,Ls=new R,nn=new R,kn=new R,Gn=new R,Qr=new R,Ds=new R,Us=new R,Is=new R;let Di=!1;class kt{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Ot.subVectors(e,t),s.cross(Ot);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Ot.subVectors(s,t),tn.subVectors(n,t),Ls.subVectors(e,t);const a=Ot.dot(Ot),o=Ot.dot(tn),l=Ot.dot(Ls),c=tn.dot(tn),u=tn.dot(Ls),d=a*c-o*o;if(d===0)return r.set(-2,-1,-1);const f=1/d,m=(c*l-o*u)*f,g=(a*u-o*l)*f;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,nn),nn.x>=0&&nn.y>=0&&nn.x+nn.y<=1}static getUV(e,t,n,s,r,a,o,l){return Di===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Di=!0),this.getInterpolation(e,t,n,s,r,a,o,l)}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,nn),l.setScalar(0),l.addScaledVector(r,nn.x),l.addScaledVector(a,nn.y),l.addScaledVector(o,nn.z),l}static isFrontFacing(e,t,n,s){return Ot.subVectors(n,t),tn.subVectors(e,t),Ot.cross(tn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ot.subVectors(this.c,this.b),tn.subVectors(this.a,this.b),Ot.cross(tn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return kt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Di===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Di=!0),kt.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return kt.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return kt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;kn.subVectors(s,n),Gn.subVectors(r,n),Ds.subVectors(e,n);const l=kn.dot(Ds),c=Gn.dot(Ds);if(l<=0&&c<=0)return t.copy(n);Us.subVectors(e,s);const u=kn.dot(Us),d=Gn.dot(Us);if(u>=0&&d<=u)return t.copy(s);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(kn,a);Is.subVectors(e,r);const m=kn.dot(Is),g=Gn.dot(Is);if(g>=0&&m<=g)return t.copy(r);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Gn,o);const p=u*g-m*d;if(p<=0&&d-u>=0&&m-g>=0)return Qr.subVectors(r,s),o=(d-u)/(d-u+(m-g)),t.copy(s).addScaledVector(Qr,o);const h=1/(p+_+f);return a=_*h,o=f*h,t.copy(n).addScaledVector(kn,a).addScaledVector(Gn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let jl=0;class Dn extends ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jl++}),this.uuid=xi(),this.name="",this.type="Material",this.blending=Zn,this.side=mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=ja,this.blendDst=$a,this.blendEquation=$n,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xs,this.stencilZFail=xs,this.stencilZPass=xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zn&&(n.blending=this.blending),this.side!==mn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const oo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bt={h:0,s:0,l:0},Ui={h:0,s:0,l:0};function Ns(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class we{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Re){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Nt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Nt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Nt.workingColorSpace){if(e=Ll(e,1),t=Mt(t,0,1),n=Mt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ns(a,r,e+1/3),this.g=Ns(a,r,e),this.b=Ns(a,r,e-1/3)}return Nt.toWorkingColorSpace(this,s),this}setStyle(e,t=Re){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Re){const n=oo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qn(e.r),this.g=Qn(e.g),this.b=Qn(e.b),this}copyLinearToSRGB(e){return this.r=Es(e.r),this.g=Es(e.g),this.b=Es(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Re){return Nt.fromWorkingColorSpace(dt.copy(this),e),Math.round(Mt(dt.r*255,0,255))*65536+Math.round(Mt(dt.g*255,0,255))*256+Math.round(Mt(dt.b*255,0,255))}getHexString(e=Re){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Nt.workingColorSpace){Nt.fromWorkingColorSpace(dt.copy(this),t);const n=dt.r,s=dt.g,r=dt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Nt.workingColorSpace){return Nt.fromWorkingColorSpace(dt.copy(this),t),e.r=dt.r,e.g=dt.g,e.b=dt.b,e}getStyle(e=Re){Nt.fromWorkingColorSpace(dt.copy(this),e);const t=dt.r,n=dt.g,s=dt.b;return e!==Re?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Bt),Bt.h+=e,Bt.s+=t,Bt.l+=n,this.setHSL(Bt.h,Bt.s,Bt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Bt),e.getHSL(Ui);const n=Ss(Bt.h,Ui.h,t),s=Ss(Bt.s,Ui.s,t),r=Ss(Bt.l,Ui.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dt=new we;we.NAMES=oo;class Ze extends Dn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ka,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qe=new R,Ii=new se;class $t{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Gr,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ii.fromBufferAttribute(this,t),Ii.applyMatrix3(e),this.setXY(t,Ii.x,Ii.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Qe.fromBufferAttribute(this,t),Qe.applyMatrix3(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Qe.fromBufferAttribute(this,t),Qe.applyMatrix4(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qe.fromBufferAttribute(this,t),Qe.applyNormalMatrix(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qe.fromBufferAttribute(this,t),Qe.transformDirection(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ti(t,this.array)),t}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ti(t,this.array)),t}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ti(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ti(t,this.array)),t}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),s=Et(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),s=Et(s,this.array),r=Et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gr&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class lo extends $t{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class co extends $t{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Xe extends $t{constructor(e,t,n){super(new Float32Array(e),t,n)}}let $l=0;const Pt=new je,Fs=new ft,Hn=new R,Tt=new Si,di=new Si,at=new R;class ct extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$l++}),this.uuid=xi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(no(e)?co:lo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Fe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pt.makeRotationFromQuaternion(e),this.applyMatrix4(Pt),this}rotateX(e){return Pt.makeRotationX(e),this.applyMatrix4(Pt),this}rotateY(e){return Pt.makeRotationY(e),this.applyMatrix4(Pt),this}rotateZ(e){return Pt.makeRotationZ(e),this.applyMatrix4(Pt),this}translate(e,t,n){return Pt.makeTranslation(e,t,n),this.applyMatrix4(Pt),this}scale(e,t,n){return Pt.makeScale(e,t,n),this.applyMatrix4(Pt),this}lookAt(e){return Fs.lookAt(e),Fs.updateMatrix(),this.applyMatrix4(Fs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hn).negate(),this.translate(Hn.x,Hn.y,Hn.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Xe(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Si);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Tt.setFromBufferAttribute(r),this.morphTargetsRelative?(at.addVectors(this.boundingBox.min,Tt.min),this.boundingBox.expandByPoint(at),at.addVectors(this.boundingBox.max,Tt.max),this.boundingBox.expandByPoint(at)):(this.boundingBox.expandByPoint(Tt.min),this.boundingBox.expandByPoint(Tt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(Tt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];di.setFromBufferAttribute(o),this.morphTargetsRelative?(at.addVectors(Tt.min,di.min),Tt.expandByPoint(at),at.addVectors(Tt.max,di.max),Tt.expandByPoint(at)):(Tt.expandByPoint(di.min),Tt.expandByPoint(di.max))}Tt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)at.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(at));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)at.fromBufferAttribute(o,c),l&&(Hn.fromBufferAttribute(e,c),at.add(Hn)),s=Math.max(s,n.distanceToSquared(at))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $t(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let w=0;w<o;w++)c[w]=new R,u[w]=new R;const d=new R,f=new R,m=new R,g=new se,_=new se,p=new se,h=new R,S=new R;function M(w,q,B){d.fromArray(s,w*3),f.fromArray(s,q*3),m.fromArray(s,B*3),g.fromArray(a,w*2),_.fromArray(a,q*2),p.fromArray(a,B*2),f.sub(d),m.sub(d),_.sub(g),p.sub(g);const U=1/(_.x*p.y-p.x*_.y);!isFinite(U)||(h.copy(f).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(U),S.copy(m).multiplyScalar(_.x).addScaledVector(f,-p.x).multiplyScalar(U),c[w].add(h),c[q].add(h),c[B].add(h),u[w].add(S),u[q].add(S),u[B].add(S))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let w=0,q=E.length;w<q;++w){const B=E[w],U=B.start,F=B.count;for(let V=U,Z=U+F;V<Z;V+=3)M(n[V+0],n[V+1],n[V+2])}const T=new R,A=new R,L=new R,N=new R;function v(w){L.fromArray(r,w*3),N.copy(L);const q=c[w];T.copy(q),T.sub(L.multiplyScalar(L.dot(q))).normalize(),A.crossVectors(N,q);const U=A.dot(u[w])<0?-1:1;l[w*4]=T.x,l[w*4+1]=T.y,l[w*4+2]=T.z,l[w*4+3]=U}for(let w=0,q=E.length;w<q;++w){const B=E[w],U=B.start,F=B.count;for(let V=U,Z=U+F;V<Z;V+=3)v(n[V+0]),v(n[V+1]),v(n[V+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const s=new R,r=new R,a=new R,o=new R,l=new R,c=new R,u=new R,d=new R;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)at.fromBufferAttribute(e,t),at.normalize(),e.setXYZ(t,at.x,at.y,at.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*u;for(let h=0;h<u;h++)f[g++]=c[m++]}return new $t(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ct,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){const f=c[u],m=e(f,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ea=new je,Xt=new ir,Ni=new yi,ta=new R,Vn=new R,Wn=new R,Xn=new R,Os=new R,Fi=new R,Oi=new se,Bi=new se,zi=new se,na=new R,ia=new R,sa=new R,ki=new R,Gi=new R;class Le extends ft{constructor(e=new ct,t=new Ze){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Fi.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],d=r[l];u!==0&&(Os.fromBufferAttribute(d,e),a?Fi.addScaledVector(Os,u):Fi.addScaledVector(Os.sub(t),u))}t.add(Fi)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ni.copy(n.boundingSphere),Ni.applyMatrix4(r),Xt.copy(e.ray).recast(e.near),!(Ni.containsPoint(Xt.origin)===!1&&(Xt.intersectSphere(Ni,ta)===null||Xt.origin.distanceToSquared(ta)>(e.far-e.near)**2))&&(ea.copy(r).invert(),Xt.copy(e.ray).applyMatrix4(ea),!(n.boundingBox!==null&&Xt.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t)))}_computeIntersections(e,t){let n;const s=this.geometry,r=this.material,a=s.index,o=s.attributes.position,l=s.attributes.uv,c=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,g=d.length;m<g;m++){const _=d[m],p=r[_.materialIndex],h=Math.max(_.start,f.start),S=Math.min(a.count,Math.min(_.start+_.count,f.start+f.count));for(let M=h,E=S;M<E;M+=3){const T=a.getX(M),A=a.getX(M+1),L=a.getX(M+2);n=Hi(this,p,e,Xt,l,c,u,T,A,L),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=_.materialIndex,t.push(n))}}else{const m=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let _=m,p=g;_<p;_+=3){const h=a.getX(_),S=a.getX(_+1),M=a.getX(_+2);n=Hi(this,r,e,Xt,l,c,u,h,S,M),n&&(n.faceIndex=Math.floor(_/3),t.push(n))}}else if(o!==void 0)if(Array.isArray(r))for(let m=0,g=d.length;m<g;m++){const _=d[m],p=r[_.materialIndex],h=Math.max(_.start,f.start),S=Math.min(o.count,Math.min(_.start+_.count,f.start+f.count));for(let M=h,E=S;M<E;M+=3){const T=M,A=M+1,L=M+2;n=Hi(this,p,e,Xt,l,c,u,T,A,L),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=_.materialIndex,t.push(n))}}else{const m=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let _=m,p=g;_<p;_+=3){const h=_,S=_+1,M=_+2;n=Hi(this,r,e,Xt,l,c,u,h,S,M),n&&(n.faceIndex=Math.floor(_/3),t.push(n))}}}}function Kl(i,e,t,n,s,r,a,o){let l;if(e.side===St?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===mn,o),l===null)return null;Gi.copy(o),Gi.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Gi);return c<t.near||c>t.far?null:{distance:c,point:Gi.clone(),object:i}}function Hi(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Vn),i.getVertexPosition(l,Wn),i.getVertexPosition(c,Xn);const u=Kl(i,e,t,n,Vn,Wn,Xn,ki);if(u){s&&(Oi.fromBufferAttribute(s,o),Bi.fromBufferAttribute(s,l),zi.fromBufferAttribute(s,c),u.uv=kt.getInterpolation(ki,Vn,Wn,Xn,Oi,Bi,zi,new se)),r&&(Oi.fromBufferAttribute(r,o),Bi.fromBufferAttribute(r,l),zi.fromBufferAttribute(r,c),u.uv1=kt.getInterpolation(ki,Vn,Wn,Xn,Oi,Bi,zi,new se),u.uv2=u.uv1),a&&(na.fromBufferAttribute(a,o),ia.fromBufferAttribute(a,l),sa.fromBufferAttribute(a,c),u.normal=kt.getInterpolation(ki,Vn,Wn,Xn,na,ia,sa,new R),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new R,materialIndex:0};kt.getNormal(Vn,Wn,Xn,d.normal),u.face=d}return u}class rn extends ct{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],d=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Xe(c,3)),this.setAttribute("normal",new Xe(u,3)),this.setAttribute("uv",new Xe(d,2));function g(_,p,h,S,M,E,T,A,L,N,v){const w=E/L,q=T/N,B=E/2,U=T/2,F=A/2,V=L+1,Z=N+1;let j=0,Y=0;const te=new R;for(let K=0;K<Z;K++){const xe=K*q-U;for(let ne=0;ne<V;ne++){const k=ne*w-B;te[_]=k*S,te[p]=xe*M,te[h]=F,c.push(te.x,te.y,te.z),te[_]=0,te[p]=0,te[h]=A>0?1:-1,u.push(te.x,te.y,te.z),d.push(ne/L),d.push(1-K/N),j+=1}}for(let K=0;K<N;K++)for(let xe=0;xe<L;xe++){const ne=f+xe+V*K,k=f+xe+V*(K+1),$=f+(xe+1)+V*(K+1),ae=f+(xe+1)+V*K;l.push(ne,k,ae),l.push(k,$,ae),Y+=6}o.addGroup(m,Y,v),m+=Y,f+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ii(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function gt(i){const e={};for(let t=0;t<i.length;t++){const n=ii(i[t]);for(const s in n)e[s]=n[s]}return e}function Zl(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ho(i){return i.getRenderTarget()===null?i.outputColorSpace:Kt}const ts={clone:ii,merge:gt};var Jl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ql=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class At extends Dn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jl,this.fragmentShader=Ql,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ii(e.uniforms),this.uniformsGroups=Zl(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class uo extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class wt extends uo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Qs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ms*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qs*2*Math.atan(Math.tan(Ms*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ms*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const qn=-90,Yn=1;class ec extends ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const s=new wt(qn,Yn,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(1,0,0),this.add(s);const r=new wt(qn,Yn,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const a=new wt(qn,Yn,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new wt(qn,Yn,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new wt(qn,Yn,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new wt(qn,Yn,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[s,r,a,o,l,c]=this.children,u=e.getRenderTarget(),d=e.toneMapping,f=e.xr.enabled;e.toneMapping=an,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,s),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=d,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class fo extends Rt{constructor(e,t,n,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ei,super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tc extends Vt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(gi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Cn?Re:Pn),this.texture=new fo(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Lt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new rn(5,5,5),r=new At({name:"CubemapFromEquirect",uniforms:ii(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:St,blending:pn});r.uniforms.tEquirect.value=t;const a=new Le(s,r),o=t.minFilter;return t.minFilter===_i&&(t.minFilter=Lt),new ec(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const Bs=new R,nc=new R,ic=new Fe;class yn{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Bs.subVectors(n,t).cross(nc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Bs),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ic.getNormalMatrix(e),s=this.coplanarPoint(Bs).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Sn=new yi,Vi=new R;class sr{constructor(e=new yn,t=new yn,n=new yn,s=new yn,r=new yn,a=new yn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,s=n[0],r=n[1],a=n[2],o=n[3],l=n[4],c=n[5],u=n[6],d=n[7],f=n[8],m=n[9],g=n[10],_=n[11],p=n[12],h=n[13],S=n[14],M=n[15];return t[0].setComponents(o-s,d-l,_-f,M-p).normalize(),t[1].setComponents(o+s,d+l,_+f,M+p).normalize(),t[2].setComponents(o+r,d+c,_+m,M+h).normalize(),t[3].setComponents(o-r,d-c,_-m,M-h).normalize(),t[4].setComponents(o-a,d-u,_-g,M-S).normalize(),t[5].setComponents(o+a,d+u,_+g,M+S).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Sn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Sn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Sn)}intersectsSprite(e){return Sn.center.set(0,0,0),Sn.radius=.7071067811865476,Sn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Sn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Vi.x=s.normal.x>0?e.max.x:e.min.x,Vi.y=s.normal.y>0?e.max.y:e.min.y,Vi.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Vi)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function po(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function sc(i,e){const t=e.isWebGL2,n=new WeakMap;function s(c,u){const d=c.array,f=c.usage,m=i.createBuffer();i.bindBuffer(u,m),i.bufferData(u,d,f),c.onUploadCallback();let g;if(d instanceof Float32Array)g=i.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)g=i.SHORT;else if(d instanceof Uint32Array)g=i.UNSIGNED_INT;else if(d instanceof Int32Array)g=i.INT;else if(d instanceof Int8Array)g=i.BYTE;else if(d instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,d){const f=u.array,m=u.updateRange;i.bindBuffer(d,c),m.count===-1?i.bufferSubData(d,0,f):(t?i.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):i.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d===void 0?n.set(c,s(c,u)):d.version<c.version&&(r(d.buffer,c,u),d.version=c.version)}return{get:a,remove:o,update:l}}class Yt extends ct{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,d=e/o,f=t/l,m=[],g=[],_=[],p=[];for(let h=0;h<u;h++){const S=h*f-a;for(let M=0;M<c;M++){const E=M*d-r;g.push(E,-S,0),_.push(0,0,1),p.push(M/o),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let S=0;S<o;S++){const M=S+c*h,E=S+c*(h+1),T=S+1+c*(h+1),A=S+1+c*h;m.push(M,E,A),m.push(E,T,A)}this.setIndex(m),this.setAttribute("position",new Xe(g,3)),this.setAttribute("normal",new Xe(_,3)),this.setAttribute("uv",new Xe(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yt(e.width,e.height,e.widthSegments,e.heightSegments)}}var rc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ac=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,lc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,hc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uc="vec3 transformed = vec3( position );",dc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fc=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,pc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,mc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,_c=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ec=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,bc=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Tc=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,wc=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ac=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lc="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dc=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Uc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ic=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nc=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Fc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Oc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Bc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hc=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Vc=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Wc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qc=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yc=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,jc=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,$c=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kc=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jc=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qc=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,eh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,th=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,nh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ih=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,sh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ah=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,oh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,lh=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,ch=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,uh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ph=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,gh=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,_h=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,vh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,xh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Mh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Eh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,bh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Th=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ah=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ch=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ph=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Uh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ih=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fh=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Oh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Bh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,zh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Hh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Wh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yh=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,jh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,$h=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Kh=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zh=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jh=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Qh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const eu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,nu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,su=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ru=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,au=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ou=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,lu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,cu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,hu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,du=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pu=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mu=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gu=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_u=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,xu=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Su=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yu=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Eu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bu=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Tu=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wu=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Au=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ru=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Cu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pu=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Du=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Uu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Pe={alphamap_fragment:rc,alphamap_pars_fragment:ac,alphatest_fragment:oc,alphatest_pars_fragment:lc,aomap_fragment:cc,aomap_pars_fragment:hc,begin_vertex:uc,beginnormal_vertex:dc,bsdfs:fc,iridescence_fragment:pc,bumpmap_pars_fragment:mc,clipping_planes_fragment:gc,clipping_planes_pars_fragment:_c,clipping_planes_pars_vertex:vc,clipping_planes_vertex:xc,color_fragment:Mc,color_pars_fragment:Sc,color_pars_vertex:yc,color_vertex:Ec,common:bc,cube_uv_reflection_fragment:Tc,defaultnormal_vertex:wc,displacementmap_pars_vertex:Ac,displacementmap_vertex:Rc,emissivemap_fragment:Cc,emissivemap_pars_fragment:Pc,encodings_fragment:Lc,encodings_pars_fragment:Dc,envmap_fragment:Uc,envmap_common_pars_fragment:Ic,envmap_pars_fragment:Nc,envmap_pars_vertex:Fc,envmap_physical_pars_fragment:jc,envmap_vertex:Oc,fog_vertex:Bc,fog_pars_vertex:zc,fog_fragment:kc,fog_pars_fragment:Gc,gradientmap_pars_fragment:Hc,lightmap_fragment:Vc,lightmap_pars_fragment:Wc,lights_lambert_fragment:Xc,lights_lambert_pars_fragment:qc,lights_pars_begin:Yc,lights_toon_fragment:$c,lights_toon_pars_fragment:Kc,lights_phong_fragment:Zc,lights_phong_pars_fragment:Jc,lights_physical_fragment:Qc,lights_physical_pars_fragment:eh,lights_fragment_begin:th,lights_fragment_maps:nh,lights_fragment_end:ih,logdepthbuf_fragment:sh,logdepthbuf_pars_fragment:rh,logdepthbuf_pars_vertex:ah,logdepthbuf_vertex:oh,map_fragment:lh,map_pars_fragment:ch,map_particle_fragment:hh,map_particle_pars_fragment:uh,metalnessmap_fragment:dh,metalnessmap_pars_fragment:fh,morphcolor_vertex:ph,morphnormal_vertex:mh,morphtarget_pars_vertex:gh,morphtarget_vertex:_h,normal_fragment_begin:vh,normal_fragment_maps:xh,normal_pars_fragment:Mh,normal_pars_vertex:Sh,normal_vertex:yh,normalmap_pars_fragment:Eh,clearcoat_normal_fragment_begin:bh,clearcoat_normal_fragment_maps:Th,clearcoat_pars_fragment:wh,iridescence_pars_fragment:Ah,output_fragment:Rh,packing:Ch,premultiplied_alpha_fragment:Ph,project_vertex:Lh,dithering_fragment:Dh,dithering_pars_fragment:Uh,roughnessmap_fragment:Ih,roughnessmap_pars_fragment:Nh,shadowmap_pars_fragment:Fh,shadowmap_pars_vertex:Oh,shadowmap_vertex:Bh,shadowmask_pars_fragment:zh,skinbase_vertex:kh,skinning_pars_vertex:Gh,skinning_vertex:Hh,skinnormal_vertex:Vh,specularmap_fragment:Wh,specularmap_pars_fragment:Xh,tonemapping_fragment:qh,tonemapping_pars_fragment:Yh,transmission_fragment:jh,transmission_pars_fragment:$h,uv_pars_fragment:Kh,uv_pars_vertex:Zh,uv_vertex:Jh,worldpos_vertex:Qh,background_vert:eu,background_frag:tu,backgroundCube_vert:nu,backgroundCube_frag:iu,cube_vert:su,cube_frag:ru,depth_vert:au,depth_frag:ou,distanceRGBA_vert:lu,distanceRGBA_frag:cu,equirect_vert:hu,equirect_frag:uu,linedashed_vert:du,linedashed_frag:fu,meshbasic_vert:pu,meshbasic_frag:mu,meshlambert_vert:gu,meshlambert_frag:_u,meshmatcap_vert:vu,meshmatcap_frag:xu,meshnormal_vert:Mu,meshnormal_frag:Su,meshphong_vert:yu,meshphong_frag:Eu,meshphysical_vert:bu,meshphysical_frag:Tu,meshtoon_vert:wu,meshtoon_frag:Au,points_vert:Ru,points_frag:Cu,shadow_vert:Pu,shadow_frag:Lu,sprite_vert:Du,sprite_frag:Uu},ie={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaTest:{value:0}}},jt={basic:{uniforms:gt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Pe.meshbasic_vert,fragmentShader:Pe.meshbasic_frag},lambert:{uniforms:gt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new we(0)}}]),vertexShader:Pe.meshlambert_vert,fragmentShader:Pe.meshlambert_frag},phong:{uniforms:gt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:Pe.meshphong_vert,fragmentShader:Pe.meshphong_frag},standard:{uniforms:gt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag},toon:{uniforms:gt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new we(0)}}]),vertexShader:Pe.meshtoon_vert,fragmentShader:Pe.meshtoon_frag},matcap:{uniforms:gt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Pe.meshmatcap_vert,fragmentShader:Pe.meshmatcap_frag},points:{uniforms:gt([ie.points,ie.fog]),vertexShader:Pe.points_vert,fragmentShader:Pe.points_frag},dashed:{uniforms:gt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pe.linedashed_vert,fragmentShader:Pe.linedashed_frag},depth:{uniforms:gt([ie.common,ie.displacementmap]),vertexShader:Pe.depth_vert,fragmentShader:Pe.depth_frag},normal:{uniforms:gt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Pe.meshnormal_vert,fragmentShader:Pe.meshnormal_frag},sprite:{uniforms:gt([ie.sprite,ie.fog]),vertexShader:Pe.sprite_vert,fragmentShader:Pe.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pe.background_vert,fragmentShader:Pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Pe.backgroundCube_vert,fragmentShader:Pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pe.cube_vert,fragmentShader:Pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pe.equirect_vert,fragmentShader:Pe.equirect_frag},distanceRGBA:{uniforms:gt([ie.common,ie.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pe.distanceRGBA_vert,fragmentShader:Pe.distanceRGBA_frag},shadow:{uniforms:gt([ie.lights,ie.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:Pe.shadow_vert,fragmentShader:Pe.shadow_frag}};jt.physical={uniforms:gt([jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag};const Wi={r:0,b:0,g:0};function Iu(i,e,t,n,s,r,a){const o=new we(0);let l=r===!0?0:1,c,u,d=null,f=0,m=null;function g(p,h){let S=!1,M=h.isScene===!0?h.background:null;switch(M&&M.isTexture&&(M=(h.backgroundBlurriness>0?t:e).get(M)),M===null?_(o,l):M&&M.isColor&&(_(M,1),S=!0),i.xr.getEnvironmentBlendMode()){case"opaque":S=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,a),S=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,a),S=!0;break}(i.autoClear||S)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),M&&(M.isCubeTexture||M.mapping===as)?(u===void 0&&(u=new Le(new rn(1,1,1),new At({name:"BackgroundCubeMaterial",uniforms:ii(jt.backgroundCube.uniforms),vertexShader:jt.backgroundCube.vertexShader,fragmentShader:jt.backgroundCube.fragmentShader,side:St,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,L,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=M.colorSpace!==Re,(d!==M||f!==M.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,d=M,f=M.version,m=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Le(new Yt(2,2),new At({name:"BackgroundMaterial",uniforms:ii(jt.background.uniforms),vertexShader:jt.background.vertexShader,fragmentShader:jt.background.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=M.colorSpace!==Re,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||f!==M.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=M,f=M.version,m=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,h){p.getRGB(Wi,ho(i)),n.buffers.color.setClear(Wi.r,Wi.g,Wi.b,h,a)}return{getClearColor:function(){return o},setClearColor:function(p,h=1){o.set(p),l=h,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(o,l)},render:g}}function Nu(i,e,t,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=p(null);let c=l,u=!1;function d(F,V,Z,j,Y){let te=!1;if(a){const K=_(j,Z,V);c!==K&&(c=K,m(c.object)),te=h(F,j,Z,Y),te&&S(F,j,Z,Y)}else{const K=V.wireframe===!0;(c.geometry!==j.id||c.program!==Z.id||c.wireframe!==K)&&(c.geometry=j.id,c.program=Z.id,c.wireframe=K,te=!0)}Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),(te||u)&&(u=!1,N(F,V,Z,j),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(F){return n.isWebGL2?i.bindVertexArray(F):r.bindVertexArrayOES(F)}function g(F){return n.isWebGL2?i.deleteVertexArray(F):r.deleteVertexArrayOES(F)}function _(F,V,Z){const j=Z.wireframe===!0;let Y=o[F.id];Y===void 0&&(Y={},o[F.id]=Y);let te=Y[V.id];te===void 0&&(te={},Y[V.id]=te);let K=te[j];return K===void 0&&(K=p(f()),te[j]=K),K}function p(F){const V=[],Z=[],j=[];for(let Y=0;Y<s;Y++)V[Y]=0,Z[Y]=0,j[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:Z,attributeDivisors:j,object:F,attributes:{},index:null}}function h(F,V,Z,j){const Y=c.attributes,te=V.attributes;let K=0;const xe=Z.getAttributes();for(const ne in xe)if(xe[ne].location>=0){const $=Y[ne];let ae=te[ne];if(ae===void 0&&(ne==="instanceMatrix"&&F.instanceMatrix&&(ae=F.instanceMatrix),ne==="instanceColor"&&F.instanceColor&&(ae=F.instanceColor)),$===void 0||$.attribute!==ae||ae&&$.data!==ae.data)return!0;K++}return c.attributesNum!==K||c.index!==j}function S(F,V,Z,j){const Y={},te=V.attributes;let K=0;const xe=Z.getAttributes();for(const ne in xe)if(xe[ne].location>=0){let $=te[ne];$===void 0&&(ne==="instanceMatrix"&&F.instanceMatrix&&($=F.instanceMatrix),ne==="instanceColor"&&F.instanceColor&&($=F.instanceColor));const ae={};ae.attribute=$,$&&$.data&&(ae.data=$.data),Y[ne]=ae,K++}c.attributes=Y,c.attributesNum=K,c.index=j}function M(){const F=c.newAttributes;for(let V=0,Z=F.length;V<Z;V++)F[V]=0}function E(F){T(F,0)}function T(F,V){const Z=c.newAttributes,j=c.enabledAttributes,Y=c.attributeDivisors;Z[F]=1,j[F]===0&&(i.enableVertexAttribArray(F),j[F]=1),Y[F]!==V&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,V),Y[F]=V)}function A(){const F=c.newAttributes,V=c.enabledAttributes;for(let Z=0,j=V.length;Z<j;Z++)V[Z]!==F[Z]&&(i.disableVertexAttribArray(Z),V[Z]=0)}function L(F,V,Z,j,Y,te){n.isWebGL2===!0&&(Z===i.INT||Z===i.UNSIGNED_INT)?i.vertexAttribIPointer(F,V,Z,Y,te):i.vertexAttribPointer(F,V,Z,j,Y,te)}function N(F,V,Z,j){if(n.isWebGL2===!1&&(F.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const Y=j.attributes,te=Z.getAttributes(),K=V.defaultAttributeValues;for(const xe in te){const ne=te[xe];if(ne.location>=0){let k=Y[xe];if(k===void 0&&(xe==="instanceMatrix"&&F.instanceMatrix&&(k=F.instanceMatrix),xe==="instanceColor"&&F.instanceColor&&(k=F.instanceColor)),k!==void 0){const $=k.normalized,ae=k.itemSize,le=t.get(k);if(le===void 0)continue;const P=le.buffer,Ae=le.type,be=le.bytesPerElement;if(k.isInterleavedBufferAttribute){const re=k.data,ye=re.stride,ze=k.offset;if(re.isInstancedInterleavedBuffer){for(let ge=0;ge<ne.locationSize;ge++)T(ne.location+ge,re.meshPerAttribute);F.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ge=0;ge<ne.locationSize;ge++)E(ne.location+ge);i.bindBuffer(i.ARRAY_BUFFER,P);for(let ge=0;ge<ne.locationSize;ge++)L(ne.location+ge,ae/ne.locationSize,Ae,$,ye*be,(ze+ae/ne.locationSize*ge)*be)}else{if(k.isInstancedBufferAttribute){for(let re=0;re<ne.locationSize;re++)T(ne.location+re,k.meshPerAttribute);F.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let re=0;re<ne.locationSize;re++)E(ne.location+re);i.bindBuffer(i.ARRAY_BUFFER,P);for(let re=0;re<ne.locationSize;re++)L(ne.location+re,ae/ne.locationSize,Ae,$,ae*be,ae/ne.locationSize*re*be)}}else if(K!==void 0){const $=K[xe];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(ne.location,$);break;case 3:i.vertexAttrib3fv(ne.location,$);break;case 4:i.vertexAttrib4fv(ne.location,$);break;default:i.vertexAttrib1fv(ne.location,$)}}}}A()}function v(){B();for(const F in o){const V=o[F];for(const Z in V){const j=V[Z];for(const Y in j)g(j[Y].object),delete j[Y];delete V[Z]}delete o[F]}}function w(F){if(o[F.id]===void 0)return;const V=o[F.id];for(const Z in V){const j=V[Z];for(const Y in j)g(j[Y].object),delete j[Y];delete V[Z]}delete o[F.id]}function q(F){for(const V in o){const Z=o[V];if(Z[F.id]===void 0)continue;const j=Z[F.id];for(const Y in j)g(j[Y].object),delete j[Y];delete Z[F.id]}}function B(){U(),u=!0,c!==l&&(c=l,m(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:B,resetDefaultState:U,dispose:v,releaseStatesOfGeometry:w,releaseStatesOfProgram:q,initAttributes:M,enableAttribute:E,disableUnusedAttributes:A}}function Fu(i,e,t,n){const s=n.isWebGL2;let r;function a(c){r=c}function o(c,u){i.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,d){if(d===0)return;let f,m;if(s)f=i,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,c,u,d),t.update(u,r,d)}this.setMode=a,this.render=o,this.renderInstances=l}function Ou(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext!="undefined"&&i.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),h=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=f>0,E=a||e.has("OES_texture_float"),T=M&&E,A=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:h,maxFragmentUniforms:S,vertexTextures:M,floatFragmentTextures:E,floatVertexTextures:T,maxSamples:A}}function Bu(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new yn,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||n!==0||s;return s=f,n=d.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,m){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,h=i.get(d);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{const S=r?0:n,M=S*4;let E=h.clippingState||null;l.value=E,E=u(g,f,M,m);for(let T=0;T!==M;++T)E[T]=t[T];h.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,m,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const h=m+_*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<h)&&(p=new Float32Array(h));for(let M=0,E=m;M!==_;++M,E+=4)a.copy(d[M]).applyMatrix4(S,o),a.normal.toArray(p,E),p[E+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function zu(i){let e=new WeakMap;function t(a,o){return o===js?a.mapping=ei:o===$s&&(a.mapping=ti),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===js||o===$s)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new tc(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class mo extends uo{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Kn=4,ra=[.125,.215,.35,.446,.526,.582],bn=20,zs=new mo,aa=new we;let ks=null;const En=(1+Math.sqrt(5))/2,jn=1/En,oa=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,En,jn),new R(0,En,-jn),new R(jn,0,En),new R(-jn,0,En),new R(En,jn,0),new R(-En,jn,0)];class la{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){ks=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ua(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ha(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ks),e.scissorTest=!1,Xi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ei||e.mapping===ti?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ks=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Lt,minFilter:Lt,generateMipmaps:!1,type:vi,format:Ht,colorSpace:Kt,depthBuffer:!1},s=ca(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ca(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ku(r)),this._blurMaterial=Gu(r,e,t)}return s}_compileMaterial(e){const t=new Le(this._lodPlanes[0],e);this._renderer.compile(t,zs)}_sceneToCubeUV(e,t,n,s){const o=new wt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(aa),u.toneMapping=an,u.autoClear=!1;const m=new Ze({name:"PMREM.Background",side:St,depthWrite:!1,depthTest:!1}),g=new Le(new rn,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(aa),_=!0);for(let h=0;h<6;h++){const S=h%3;S===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):S===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const M=this._cubeSize;Xi(s,S*M,h>2?M:0,M,M),u.setRenderTarget(s),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===ei||e.mapping===ti;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ua()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ha());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Le(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Xi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,zs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=oa[(s-1)%oa.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Le(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*bn-1),_=r/g,p=isFinite(r)?1+Math.floor(u*_):bn;p>bn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${bn}`);const h=[];let S=0;for(let L=0;L<bn;++L){const N=L/_,v=Math.exp(-N*N/2);h.push(v),L===0?S+=v:L<p&&(S+=2*v)}for(let L=0;L<h.length;L++)h[L]=h[L]/S;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=h,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-n;const E=this._sizeLods[s],T=3*E*(s>M-Kn?s-M+Kn:0),A=4*(this._cubeSize-E);Xi(t,T,A,3*E,2*E),l.setRenderTarget(t),l.render(d,zs)}}function ku(i){const e=[],t=[],n=[];let s=i;const r=i-Kn+1+ra.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Kn?l=ra[a-i+Kn-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,_=3,p=2,h=1,S=new Float32Array(_*g*m),M=new Float32Array(p*g*m),E=new Float32Array(h*g*m);for(let A=0;A<m;A++){const L=A%3*2/3-1,N=A>2?0:-1,v=[L,N,0,L+2/3,N,0,L+2/3,N+1,0,L,N,0,L+2/3,N+1,0,L,N+1,0];S.set(v,_*g*A),M.set(f,p*g*A);const w=[A,A,A,A,A,A];E.set(w,h*g*A)}const T=new ct;T.setAttribute("position",new $t(S,_)),T.setAttribute("uv",new $t(M,p)),T.setAttribute("faceIndex",new $t(E,h)),e.push(T),s>Kn&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ca(i,e,t){const n=new Vt(i,e,t);return n.texture.mapping=as,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xi(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Gu(i,e,t){const n=new Float32Array(bn),s=new R(0,1,0);return new At({name:"SphericalGaussianBlur",defines:{n:bn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:rr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function ha(){return new At({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function ua(){return new At({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function rr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Hu(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===js||l===$s,u=l===ei||l===ti;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new la(i)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||u&&d&&s(d)){t===null&&(t=new la(i));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Vu(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Wu(i,e,t,n){const s={},r=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const g in f)e.update(f[g],i.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const _=m[g];for(let p=0,h=_.length;p<h;p++)e.update(_[p],i.ARRAY_BUFFER)}}function c(d){const f=[],m=d.index,g=d.attributes.position;let _=0;if(m!==null){const S=m.array;_=m.version;for(let M=0,E=S.length;M<E;M+=3){const T=S[M+0],A=S[M+1],L=S[M+2];f.push(T,A,A,L,L,T)}}else{const S=g.array;_=g.version;for(let M=0,E=S.length/3-1;M<E;M+=3){const T=M+0,A=M+1,L=M+2;f.push(T,A,A,L,L,T)}}const p=new(no(f)?co:lo)(f,1);p.version=_;const h=r.get(d);h&&e.remove(h),r.set(d,p)}function u(d){const f=r.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function Xu(i,e,t,n){const s=n.isWebGL2;let r;function a(f){r=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function u(f,m){i.drawElements(r,m,o,f*l),t.update(m,r,1)}function d(f,m,g){if(g===0)return;let _,p;if(s)_=i,p="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[p](r,m,o,f*l,g),t.update(m,r,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=d}function qu(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Yu(i,e){return i[0]-e[0]}function ju(i,e){return Math.abs(e[1])-Math.abs(i[1])}function $u(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,a=new qe,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,d){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let p=r.get(u);if(p===void 0||p.count!==_){let V=function(){U.dispose(),r.delete(u),u.removeEventListener("dispose",V)};var m=V;p!==void 0&&p.texture.dispose();const M=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],L=u.morphAttributes.normal||[],N=u.morphAttributes.color||[];let v=0;M===!0&&(v=1),E===!0&&(v=2),T===!0&&(v=3);let w=u.attributes.position.count*v,q=1;w>e.maxTextureSize&&(q=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const B=new Float32Array(w*q*4*_),U=new ro(B,w,q,_);U.type=An,U.needsUpdate=!0;const F=v*4;for(let Z=0;Z<_;Z++){const j=A[Z],Y=L[Z],te=N[Z],K=w*q*4*Z;for(let xe=0;xe<j.count;xe++){const ne=xe*F;M===!0&&(a.fromBufferAttribute(j,xe),B[K+ne+0]=a.x,B[K+ne+1]=a.y,B[K+ne+2]=a.z,B[K+ne+3]=0),E===!0&&(a.fromBufferAttribute(Y,xe),B[K+ne+4]=a.x,B[K+ne+5]=a.y,B[K+ne+6]=a.z,B[K+ne+7]=0),T===!0&&(a.fromBufferAttribute(te,xe),B[K+ne+8]=a.x,B[K+ne+9]=a.y,B[K+ne+10]=a.z,B[K+ne+11]=te.itemSize===4?a.w:1)}}p={count:_,texture:U,size:new se(w,q)},r.set(u,p),u.addEventListener("dispose",V)}let h=0;for(let M=0;M<f.length;M++)h+=f[M];const S=u.morphTargetsRelative?1:1-h;d.getUniforms().setValue(i,"morphTargetBaseInfluence",S),d.getUniforms().setValue(i,"morphTargetInfluences",f),d.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const g=f===void 0?0:f.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let E=0;E<g;E++)_[E]=[E,0];n[u.id]=_}for(let E=0;E<g;E++){const T=_[E];T[0]=E,T[1]=f[E]}_.sort(ju);for(let E=0;E<8;E++)E<g&&_[E][1]?(o[E][0]=_[E][0],o[E][1]=_[E][1]):(o[E][0]=Number.MAX_SAFE_INTEGER,o[E][1]=0);o.sort(Yu);const p=u.morphAttributes.position,h=u.morphAttributes.normal;let S=0;for(let E=0;E<8;E++){const T=o[E],A=T[0],L=T[1];A!==Number.MAX_SAFE_INTEGER&&L?(p&&u.getAttribute("morphTarget"+E)!==p[A]&&u.setAttribute("morphTarget"+E,p[A]),h&&u.getAttribute("morphNormal"+E)!==h[A]&&u.setAttribute("morphNormal"+E,h[A]),s[E]=L,S+=L):(p&&u.hasAttribute("morphTarget"+E)===!0&&u.deleteAttribute("morphTarget"+E),h&&u.hasAttribute("morphNormal"+E)===!0&&u.deleteAttribute("morphNormal"+E),s[E]=0)}const M=u.morphTargetsRelative?1:1-S;d.getUniforms().setValue(i,"morphTargetBaseInfluence",M),d.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Ku(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);return s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER)),d}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const go=new Rt,_o=new ro,vo=new kl,xo=new fo,da=[],fa=[],pa=new Float32Array(16),ma=new Float32Array(9),ga=new Float32Array(4);function oi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=da[s];if(r===void 0&&(r=new Float32Array(s),da[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function tt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function nt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ls(i,e){let t=fa[e];t===void 0&&(t=new Int32Array(e),fa[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Zu(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Ju(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tt(t,e))return;i.uniform2fv(this.addr,e),nt(t,e)}}function Qu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tt(t,e))return;i.uniform3fv(this.addr,e),nt(t,e)}}function ed(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tt(t,e))return;i.uniform4fv(this.addr,e),nt(t,e)}}function td(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(tt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),nt(t,e)}else{if(tt(t,n))return;ga.set(n),i.uniformMatrix2fv(this.addr,!1,ga),nt(t,n)}}function nd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(tt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),nt(t,e)}else{if(tt(t,n))return;ma.set(n),i.uniformMatrix3fv(this.addr,!1,ma),nt(t,n)}}function id(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(tt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),nt(t,e)}else{if(tt(t,n))return;pa.set(n),i.uniformMatrix4fv(this.addr,!1,pa),nt(t,n)}}function sd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function rd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tt(t,e))return;i.uniform2iv(this.addr,e),nt(t,e)}}function ad(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tt(t,e))return;i.uniform3iv(this.addr,e),nt(t,e)}}function od(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tt(t,e))return;i.uniform4iv(this.addr,e),nt(t,e)}}function ld(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function cd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tt(t,e))return;i.uniform2uiv(this.addr,e),nt(t,e)}}function hd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tt(t,e))return;i.uniform3uiv(this.addr,e),nt(t,e)}}function ud(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tt(t,e))return;i.uniform4uiv(this.addr,e),nt(t,e)}}function dd(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2D(e||go,s)}function fd(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||vo,s)}function pd(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||xo,s)}function md(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||_o,s)}function gd(i){switch(i){case 5126:return Zu;case 35664:return Ju;case 35665:return Qu;case 35666:return ed;case 35674:return td;case 35675:return nd;case 35676:return id;case 5124:case 35670:return sd;case 35667:case 35671:return rd;case 35668:case 35672:return ad;case 35669:case 35673:return od;case 5125:return ld;case 36294:return cd;case 36295:return hd;case 36296:return ud;case 35678:case 36198:case 36298:case 36306:case 35682:return dd;case 35679:case 36299:case 36307:return fd;case 35680:case 36300:case 36308:case 36293:return pd;case 36289:case 36303:case 36311:case 36292:return md}}function _d(i,e){i.uniform1fv(this.addr,e)}function vd(i,e){const t=oi(e,this.size,2);i.uniform2fv(this.addr,t)}function xd(i,e){const t=oi(e,this.size,3);i.uniform3fv(this.addr,t)}function Md(i,e){const t=oi(e,this.size,4);i.uniform4fv(this.addr,t)}function Sd(i,e){const t=oi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function yd(i,e){const t=oi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Ed(i,e){const t=oi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function bd(i,e){i.uniform1iv(this.addr,e)}function Td(i,e){i.uniform2iv(this.addr,e)}function wd(i,e){i.uniform3iv(this.addr,e)}function Ad(i,e){i.uniform4iv(this.addr,e)}function Rd(i,e){i.uniform1uiv(this.addr,e)}function Cd(i,e){i.uniform2uiv(this.addr,e)}function Pd(i,e){i.uniform3uiv(this.addr,e)}function Ld(i,e){i.uniform4uiv(this.addr,e)}function Dd(i,e,t){const n=this.cache,s=e.length,r=ls(t,s);tt(n,r)||(i.uniform1iv(this.addr,r),nt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||go,r[a])}function Ud(i,e,t){const n=this.cache,s=e.length,r=ls(t,s);tt(n,r)||(i.uniform1iv(this.addr,r),nt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||vo,r[a])}function Id(i,e,t){const n=this.cache,s=e.length,r=ls(t,s);tt(n,r)||(i.uniform1iv(this.addr,r),nt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||xo,r[a])}function Nd(i,e,t){const n=this.cache,s=e.length,r=ls(t,s);tt(n,r)||(i.uniform1iv(this.addr,r),nt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||_o,r[a])}function Fd(i){switch(i){case 5126:return _d;case 35664:return vd;case 35665:return xd;case 35666:return Md;case 35674:return Sd;case 35675:return yd;case 35676:return Ed;case 5124:case 35670:return bd;case 35667:case 35671:return Td;case 35668:case 35672:return wd;case 35669:case 35673:return Ad;case 5125:return Rd;case 36294:return Cd;case 36295:return Pd;case 36296:return Ld;case 35678:case 36198:case 36298:case 36306:case 35682:return Dd;case 35679:case 36299:case 36307:return Ud;case 35680:case 36300:case 36308:case 36293:return Id;case 36289:case 36303:case 36311:case 36292:return Nd}}class Od{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=gd(t.type)}}class Bd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Fd(t.type)}}class zd{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Gs=/(\w+)(\])?(\[|\.)?/g;function _a(i,e){i.seq.push(e),i.map[e.id]=e}function kd(i,e,t){const n=i.name,s=n.length;for(Gs.lastIndex=0;;){const r=Gs.exec(n),a=Gs.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){_a(t,c===void 0?new Od(o,i,e):new Bd(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new zd(o),_a(t,d)),t=d}}}class Ki{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);kd(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function va(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let Gd=0;function Hd(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Vd(i){switch(i){case Kt:return["Linear","( value )"];case Re:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function xa(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Hd(i.getShaderSource(e),a)}else return s}function Wd(i,e){const t=Vd(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Xd(i,e){let t;switch(e){case al:t="Linear";break;case ol:t="Reinhard";break;case ll:t="OptimizedCineon";break;case cl:t="ACESFilmic";break;case hl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function qd(i){return[i.extensionDerivatives||!!i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(mi).join(`
`)}function Yd(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function jd(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function mi(i){return i!==""}function Ma(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sa(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $d=/^[ \t]*#include +<([\w\d./]+)>/gm;function er(i){return i.replace($d,Kd)}function Kd(i,e){const t=Pe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return er(t)}const Zd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ya(i){return i.replace(Zd,Jd)}function Jd(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ea(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Qd(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ya?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Bo?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===sn&&(e="SHADOWMAP_TYPE_VSM"),e}function ef(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ei:case ti:e="ENVMAP_TYPE_CUBE";break;case as:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tf(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ti:e="ENVMAP_MODE_REFRACTION";break}return e}function nf(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ka:e="ENVMAP_BLENDING_MULTIPLY";break;case sl:e="ENVMAP_BLENDING_MIX";break;case rl:e="ENVMAP_BLENDING_ADD";break}return e}function sf(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function rf(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Qd(t),c=ef(t),u=tf(t),d=nf(t),f=sf(t),m=t.isWebGL2?"":qd(t),g=Yd(r),_=s.createProgram();let p,h,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(mi).join(`
`),p.length>0&&(p+=`
`),h=[m,g].filter(mi).join(`
`),h.length>0&&(h+=`
`)):(p=[Ea(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mi).join(`
`),h=[m,Ea(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==an?"#define TONE_MAPPING":"",t.toneMapping!==an?Pe.tonemapping_pars_fragment:"",t.toneMapping!==an?Xd("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Pe.encodings_pars_fragment,Wd("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mi).join(`
`)),a=er(a),a=Ma(a,t),a=Sa(a,t),o=er(o),o=Ma(o,t),o=Sa(o,t),a=ya(a),o=ya(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",t.glslVersion===Hr?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const M=S+p+a,E=S+h+o,T=va(s,s.VERTEX_SHADER,M),A=va(s,s.FRAGMENT_SHADER,E);if(s.attachShader(_,T),s.attachShader(_,A),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_),i.debug.checkShaderErrors){const v=s.getProgramInfoLog(_).trim(),w=s.getShaderInfoLog(T).trim(),q=s.getShaderInfoLog(A).trim();let B=!0,U=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,T,A);else{const F=xa(s,T,"vertex"),V=xa(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Program Info Log: `+v+`
`+F+`
`+V)}else v!==""?console.warn("THREE.WebGLProgram: Program Info Log:",v):(w===""||q==="")&&(U=!1);U&&(this.diagnostics={runnable:B,programLog:v,vertexShader:{log:w,prefix:p},fragmentShader:{log:q,prefix:h}})}s.deleteShader(T),s.deleteShader(A);let L;this.getUniforms=function(){return L===void 0&&(L=new Ki(s,_)),L};let N;return this.getAttributes=function(){return N===void 0&&(N=jd(s,_)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.name=t.shaderName,this.id=Gd++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=A,this}let af=0;class of{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new lf(e),t.set(e,n)),n}}class lf{constructor(e){this.id=af++,this.code=e,this.usedTimes=0}}function cf(i,e,t,n,s,r,a){const o=new ao,l=new of,c=[],u=s.isWebGL2,d=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return v===1?"uv1":v===2?"uv2":v===3?"uv3":"uv"}function p(v,w,q,B,U){const F=B.fog,V=U.geometry,Z=v.isMeshStandardMaterial?B.environment:null,j=(v.isMeshStandardMaterial?t:e).get(v.envMap||Z),Y=!!j&&j.mapping===as?j.image.height:null,te=g[v.type];v.precision!==null&&(m=s.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const K=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,xe=K!==void 0?K.length:0;let ne=0;V.morphAttributes.position!==void 0&&(ne=1),V.morphAttributes.normal!==void 0&&(ne=2),V.morphAttributes.color!==void 0&&(ne=3);let k,$,ae,le;if(te){const Ve=jt[te];k=Ve.vertexShader,$=Ve.fragmentShader}else k=v.vertexShader,$=v.fragmentShader,l.update(v),ae=l.getVertexShaderID(v),le=l.getFragmentShaderID(v);const P=i.getRenderTarget(),Ae=U.isInstancedMesh===!0,be=!!v.map,re=!!v.matcap,ye=!!j,ze=!!v.aoMap,ge=!!v.lightMap,Ie=!!v.bumpMap,it=!!v.normalMap,ot=!!v.displacementMap,st=!!v.emissiveMap,et=!!v.metalnessMap,ke=!!v.roughnessMap,Ye=v.clearcoat>0,xt=v.iridescence>0,b=v.sheen>0,x=v.transmission>0,z=Ye&&!!v.clearcoatMap,Q=Ye&&!!v.clearcoatNormalMap,ee=Ye&&!!v.clearcoatRoughnessMap,oe=xt&&!!v.iridescenceMap,Ee=xt&&!!v.iridescenceThicknessMap,de=b&&!!v.sheenColorMap,W=b&&!!v.sheenRoughnessMap,pe=!!v.specularMap,_e=!!v.specularColorMap,Me=!!v.specularIntensityMap,ue=x&&!!v.transmissionMap,me=x&&!!v.thicknessMap,Oe=!!v.gradientMap,Ge=!!v.alphaMap,$e=v.alphaTest>0,C=!!v.extensions,G=!!V.attributes.uv1,J=!!V.attributes.uv2,he=!!V.attributes.uv3;return{isWebGL2:u,shaderID:te,shaderName:v.type,vertexShader:k,fragmentShader:$,defines:v.defines,customVertexShaderID:ae,customFragmentShaderID:le,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,instancing:Ae,instancingColor:Ae&&U.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:P===null?i.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Kt,map:be,matcap:re,envMap:ye,envMapMode:ye&&j.mapping,envMapCubeUVHeight:Y,aoMap:ze,lightMap:ge,bumpMap:Ie,normalMap:it,displacementMap:f&&ot,emissiveMap:st,normalMapObjectSpace:it&&v.normalMapType===Cl,normalMapTangentSpace:it&&v.normalMapType===eo,metalnessMap:et,roughnessMap:ke,clearcoat:Ye,clearcoatMap:z,clearcoatNormalMap:Q,clearcoatRoughnessMap:ee,iridescence:xt,iridescenceMap:oe,iridescenceThicknessMap:Ee,sheen:b,sheenColorMap:de,sheenRoughnessMap:W,specularMap:pe,specularColorMap:_e,specularIntensityMap:Me,transmission:x,transmissionMap:ue,thicknessMap:me,gradientMap:Oe,opaque:v.transparent===!1&&v.blending===Zn,alphaMap:Ge,alphaTest:$e,combine:v.combine,mapUv:be&&_(v.map.channel),aoMapUv:ze&&_(v.aoMap.channel),lightMapUv:ge&&_(v.lightMap.channel),bumpMapUv:Ie&&_(v.bumpMap.channel),normalMapUv:it&&_(v.normalMap.channel),displacementMapUv:ot&&_(v.displacementMap.channel),emissiveMapUv:st&&_(v.emissiveMap.channel),metalnessMapUv:et&&_(v.metalnessMap.channel),roughnessMapUv:ke&&_(v.roughnessMap.channel),clearcoatMapUv:z&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:Q&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:de&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:W&&_(v.sheenRoughnessMap.channel),specularMapUv:pe&&_(v.specularMap.channel),specularColorMapUv:_e&&_(v.specularColorMap.channel),specularIntensityMapUv:Me&&_(v.specularIntensityMap.channel),transmissionMapUv:ue&&_(v.transmissionMap.channel),thicknessMapUv:me&&_(v.thicknessMap.channel),alphaMapUv:Ge&&_(v.alphaMap.channel),vertexTangents:it&&!!V.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUv1s:G,vertexUv2s:J,vertexUv3s:he,pointsUvs:U.isPoints===!0&&!!V.attributes.uv&&(be||Ge),fog:!!F,useFog:v.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:U.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:ne,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&q.length>0,shadowMapType:i.shadowMap.type,toneMapping:v.toneMapped?i.toneMapping:an,useLegacyLights:i.useLegacyLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===vt,flipSided:v.side===St,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:C&&v.extensions.derivatives===!0,extensionFragDepth:C&&v.extensions.fragDepth===!0,extensionDrawBuffers:C&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:C&&v.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function h(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const q in v.defines)w.push(q),w.push(v.defines[q]);return v.isRawShaderMaterial===!1&&(S(w,v),M(w,v),w.push(i.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function S(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function M(v,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),v.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),v.push(o.mask)}function E(v){const w=g[v.type];let q;if(w){const B=jt[w];q=ts.clone(B.uniforms)}else q=v.uniforms;return q}function T(v,w){let q;for(let B=0,U=c.length;B<U;B++){const F=c[B];if(F.cacheKey===w){q=F,++q.usedTimes;break}}return q===void 0&&(q=new rf(i,w,v,r),c.push(q)),q}function A(v){if(--v.usedTimes===0){const w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),v.destroy()}}function L(v){l.remove(v)}function N(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:E,acquireProgram:T,releaseProgram:A,releaseShaderCache:L,programs:c,dispose:N}}function hf(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function uf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ba(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ta(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d,f,m,g,_,p){let h=i[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},i[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=m,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=_,h.group=p),e++,h}function o(d,f,m,g,_,p){const h=a(d,f,m,g,_,p);m.transmission>0?n.push(h):m.transparent===!0?s.push(h):t.push(h)}function l(d,f,m,g,_,p){const h=a(d,f,m,g,_,p);m.transmission>0?n.unshift(h):m.transparent===!0?s.unshift(h):t.unshift(h)}function c(d,f){t.length>1&&t.sort(d||uf),n.length>1&&n.sort(f||ba),s.length>1&&s.sort(f||ba)}function u(){for(let d=e,f=i.length;d<f;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function df(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Ta,i.set(n,[a])):s>=r.length?(a=new Ta,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function ff(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new we};break;case"SpotLight":t={position:new R,direction:new R,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new we,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new we,groundColor:new we};break;case"RectAreaLight":t={color:new we,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function pf(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let mf=0;function gf(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function _f(i,e){const t=new ff,n=pf(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)s.probe.push(new R);const r=new R,a=new je,o=new je;function l(u,d){let f=0,m=0,g=0;for(let q=0;q<9;q++)s.probe[q].set(0,0,0);let _=0,p=0,h=0,S=0,M=0,E=0,T=0,A=0,L=0,N=0;u.sort(gf);const v=d===!0?Math.PI:1;for(let q=0,B=u.length;q<B;q++){const U=u[q],F=U.color,V=U.intensity,Z=U.distance,j=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)f+=F.r*V*v,m+=F.g*V*v,g+=F.b*V*v;else if(U.isLightProbe)for(let Y=0;Y<9;Y++)s.probe[Y].addScaledVector(U.sh.coefficients[Y],V);else if(U.isDirectionalLight){const Y=t.get(U);if(Y.color.copy(U.color).multiplyScalar(U.intensity*v),U.castShadow){const te=U.shadow,K=n.get(U);K.shadowBias=te.bias,K.shadowNormalBias=te.normalBias,K.shadowRadius=te.radius,K.shadowMapSize=te.mapSize,s.directionalShadow[_]=K,s.directionalShadowMap[_]=j,s.directionalShadowMatrix[_]=U.shadow.matrix,E++}s.directional[_]=Y,_++}else if(U.isSpotLight){const Y=t.get(U);Y.position.setFromMatrixPosition(U.matrixWorld),Y.color.copy(F).multiplyScalar(V*v),Y.distance=Z,Y.coneCos=Math.cos(U.angle),Y.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),Y.decay=U.decay,s.spot[h]=Y;const te=U.shadow;if(U.map&&(s.spotLightMap[L]=U.map,L++,te.updateMatrices(U),U.castShadow&&N++),s.spotLightMatrix[h]=te.matrix,U.castShadow){const K=n.get(U);K.shadowBias=te.bias,K.shadowNormalBias=te.normalBias,K.shadowRadius=te.radius,K.shadowMapSize=te.mapSize,s.spotShadow[h]=K,s.spotShadowMap[h]=j,A++}h++}else if(U.isRectAreaLight){const Y=t.get(U);Y.color.copy(F).multiplyScalar(V),Y.halfWidth.set(U.width*.5,0,0),Y.halfHeight.set(0,U.height*.5,0),s.rectArea[S]=Y,S++}else if(U.isPointLight){const Y=t.get(U);if(Y.color.copy(U.color).multiplyScalar(U.intensity*v),Y.distance=U.distance,Y.decay=U.decay,U.castShadow){const te=U.shadow,K=n.get(U);K.shadowBias=te.bias,K.shadowNormalBias=te.normalBias,K.shadowRadius=te.radius,K.shadowMapSize=te.mapSize,K.shadowCameraNear=te.camera.near,K.shadowCameraFar=te.camera.far,s.pointShadow[p]=K,s.pointShadowMap[p]=j,s.pointShadowMatrix[p]=U.shadow.matrix,T++}s.point[p]=Y,p++}else if(U.isHemisphereLight){const Y=t.get(U);Y.skyColor.copy(U.color).multiplyScalar(V*v),Y.groundColor.copy(U.groundColor).multiplyScalar(V*v),s.hemi[M]=Y,M++}}S>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ie.LTC_FLOAT_1,s.rectAreaLTC2=ie.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ie.LTC_HALF_1,s.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=m,s.ambient[2]=g;const w=s.hash;(w.directionalLength!==_||w.pointLength!==p||w.spotLength!==h||w.rectAreaLength!==S||w.hemiLength!==M||w.numDirectionalShadows!==E||w.numPointShadows!==T||w.numSpotShadows!==A||w.numSpotMaps!==L)&&(s.directional.length=_,s.spot.length=h,s.rectArea.length=S,s.point.length=p,s.hemi.length=M,s.directionalShadow.length=E,s.directionalShadowMap.length=E,s.pointShadow.length=T,s.pointShadowMap.length=T,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=E,s.pointShadowMatrix.length=T,s.spotLightMatrix.length=A+L-N,s.spotLightMap.length=L,s.numSpotLightShadowsWithMaps=N,w.directionalLength=_,w.pointLength=p,w.spotLength=h,w.rectAreaLength=S,w.hemiLength=M,w.numDirectionalShadows=E,w.numPointShadows=T,w.numSpotShadows=A,w.numSpotMaps=L,s.version=mf++)}function c(u,d){let f=0,m=0,g=0,_=0,p=0;const h=d.matrixWorldInverse;for(let S=0,M=u.length;S<M;S++){const E=u[S];if(E.isDirectionalLight){const T=s.directional[f];T.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(h),f++}else if(E.isSpotLight){const T=s.spot[g];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(h),T.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(h),g++}else if(E.isRectAreaLight){const T=s.rectArea[_];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(h),o.identity(),a.copy(E.matrixWorld),a.premultiply(h),o.extractRotation(a),T.halfWidth.set(E.width*.5,0,0),T.halfHeight.set(0,E.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),_++}else if(E.isPointLight){const T=s.point[m];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(h),m++}else if(E.isHemisphereLight){const T=s.hemi[p];T.direction.setFromMatrixPosition(E.matrixWorld),T.direction.transformDirection(h),p++}}}return{setup:l,setupView:c,state:s}}function wa(i,e){const t=new _f(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(d){n.push(d)}function o(d){s.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function vf(i,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let l;return o===void 0?(l=new wa(i,e),t.set(r,[l])):a>=o.length?(l=new wa(i,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:n,dispose:s}}class xf extends Dn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Al,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Mf extends Dn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Sf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ef(i,e,t){let n=new sr;const s=new se,r=new se,a=new qe,o=new xf({depthPacking:Rl}),l=new Mf,c={},u=t.maxTextureSize,d={[mn]:St,[St]:mn,[vt]:vt},f=new At({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:Sf,fragmentShader:yf}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new ct;g.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Le(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ya;let h=this.type;this.render=function(T,A,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const N=i.getRenderTarget(),v=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),q=i.state;q.setBlending(pn),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const B=h!==sn&&this.type===sn,U=h===sn&&this.type!==sn;for(let F=0,V=T.length;F<V;F++){const Z=T[F],j=Z.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);const Y=j.getFrameExtents();if(s.multiply(Y),r.copy(j.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Y.x),s.x=r.x*Y.x,j.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Y.y),s.y=r.y*Y.y,j.mapSize.y=r.y)),j.map===null||B===!0||U===!0){const K=this.type!==sn?{minFilter:_t,magFilter:_t}:{};j.map!==null&&j.map.dispose(),j.map=new Vt(s.x,s.y,K),j.map.texture.name=Z.name+".shadowMap",j.camera.updateProjectionMatrix()}i.setRenderTarget(j.map),i.clear();const te=j.getViewportCount();for(let K=0;K<te;K++){const xe=j.getViewport(K);a.set(r.x*xe.x,r.y*xe.y,r.x*xe.z,r.y*xe.w),q.viewport(a),j.updateMatrices(Z,K),n=j.getFrustum(),E(A,L,j.camera,Z,this.type)}j.isPointLightShadow!==!0&&this.type===sn&&S(j,L),j.needsUpdate=!1}h=this.type,p.needsUpdate=!1,i.setRenderTarget(N,v,w)};function S(T,A){const L=e.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Vt(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,L,f,_,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,L,m,_,null)}function M(T,A,L,N){let v=null;const w=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(w!==void 0)v=w;else if(v=L.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const q=v.uuid,B=A.uuid;let U=c[q];U===void 0&&(U={},c[q]=U);let F=U[B];F===void 0&&(F=v.clone(),U[B]=F),v=F}if(v.visible=A.visible,v.wireframe=A.wireframe,N===sn?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:d[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,L.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const q=i.properties.get(v);q.light=L}return v}function E(T,A,L,N,v){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&v===sn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);const B=e.update(T),U=T.material;if(Array.isArray(U)){const F=B.groups;for(let V=0,Z=F.length;V<Z;V++){const j=F[V],Y=U[j.materialIndex];if(Y&&Y.visible){const te=M(T,Y,N,v);i.renderBufferDirect(L,null,B,te,T,j)}}}else if(U.visible){const F=M(T,U,N,v);i.renderBufferDirect(L,null,B,F,T,null)}}const q=T.children;for(let B=0,U=q.length;B<U;B++)E(q[B],A,L,N,v)}}function bf(i,e,t){const n=t.isWebGL2;function s(){let C=!1;const G=new qe;let J=null;const he=new qe(0,0,0,0);return{setMask:function(fe){J!==fe&&!C&&(i.colorMask(fe,fe,fe,fe),J=fe)},setLocked:function(fe){C=fe},setClear:function(fe,Ve,We,ht,on){on===!0&&(fe*=ht,Ve*=ht,We*=ht),G.set(fe,Ve,We,ht),he.equals(G)===!1&&(i.clearColor(fe,Ve,We,ht),he.copy(G))},reset:function(){C=!1,J=null,he.set(-1,0,0,0)}}}function r(){let C=!1,G=null,J=null,he=null;return{setTest:function(fe){fe?P(i.DEPTH_TEST):Ae(i.DEPTH_TEST)},setMask:function(fe){G!==fe&&!C&&(i.depthMask(fe),G=fe)},setFunc:function(fe){if(J!==fe){switch(fe){case Zo:i.depthFunc(i.NEVER);break;case Jo:i.depthFunc(i.ALWAYS);break;case Qo:i.depthFunc(i.LESS);break;case Ys:i.depthFunc(i.LEQUAL);break;case el:i.depthFunc(i.EQUAL);break;case tl:i.depthFunc(i.GEQUAL);break;case nl:i.depthFunc(i.GREATER);break;case il:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=fe}},setLocked:function(fe){C=fe},setClear:function(fe){he!==fe&&(i.clearDepth(fe),he=fe)},reset:function(){C=!1,G=null,J=null,he=null}}}function a(){let C=!1,G=null,J=null,he=null,fe=null,Ve=null,We=null,ht=null,on=null;return{setTest:function(Ke){C||(Ke?P(i.STENCIL_TEST):Ae(i.STENCIL_TEST))},setMask:function(Ke){G!==Ke&&!C&&(i.stencilMask(Ke),G=Ke)},setFunc:function(Ke,Ct,Wt){(J!==Ke||he!==Ct||fe!==Wt)&&(i.stencilFunc(Ke,Ct,Wt),J=Ke,he=Ct,fe=Wt)},setOp:function(Ke,Ct,Wt){(Ve!==Ke||We!==Ct||ht!==Wt)&&(i.stencilOp(Ke,Ct,Wt),Ve=Ke,We=Ct,ht=Wt)},setLocked:function(Ke){C=Ke},setClear:function(Ke){on!==Ke&&(i.clearStencil(Ke),on=Ke)},reset:function(){C=!1,G=null,J=null,he=null,fe=null,Ve=null,We=null,ht=null,on=null}}}const o=new s,l=new r,c=new a,u=new WeakMap,d=new WeakMap;let f={},m={},g=new WeakMap,_=[],p=null,h=!1,S=null,M=null,E=null,T=null,A=null,L=null,N=null,v=!1,w=null,q=null,B=null,U=null,F=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,j=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Y)[1]),Z=j>=1):Y.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),Z=j>=2);let te=null,K={};const xe=i.getParameter(i.SCISSOR_BOX),ne=i.getParameter(i.VIEWPORT),k=new qe().fromArray(xe),$=new qe().fromArray(ne);function ae(C,G,J,he){const fe=new Uint8Array(4),Ve=i.createTexture();i.bindTexture(C,Ve),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let We=0;We<J;We++)n&&(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)?i.texImage3D(G,0,i.RGBA,1,1,he,0,i.RGBA,i.UNSIGNED_BYTE,fe):i.texImage2D(G+We,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,fe);return Ve}const le={};le[i.TEXTURE_2D]=ae(i.TEXTURE_2D,i.TEXTURE_2D,1),le[i.TEXTURE_CUBE_MAP]=ae(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(le[i.TEXTURE_2D_ARRAY]=ae(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),le[i.TEXTURE_3D]=ae(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),P(i.DEPTH_TEST),l.setFunc(Ys),ot(!1),st(dr),P(i.CULL_FACE),Ie(pn);function P(C){f[C]!==!0&&(i.enable(C),f[C]=!0)}function Ae(C){f[C]!==!1&&(i.disable(C),f[C]=!1)}function be(C,G){return m[C]!==G?(i.bindFramebuffer(C,G),m[C]=G,n&&(C===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=G),C===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=G)),!0):!1}function re(C,G){let J=_,he=!1;if(C)if(J=g.get(G),J===void 0&&(J=[],g.set(G,J)),C.isWebGLMultipleRenderTargets){const fe=C.texture;if(J.length!==fe.length||J[0]!==i.COLOR_ATTACHMENT0){for(let Ve=0,We=fe.length;Ve<We;Ve++)J[Ve]=i.COLOR_ATTACHMENT0+Ve;J.length=fe.length,he=!0}}else J[0]!==i.COLOR_ATTACHMENT0&&(J[0]=i.COLOR_ATTACHMENT0,he=!0);else J[0]!==i.BACK&&(J[0]=i.BACK,he=!0);he&&(t.isWebGL2?i.drawBuffers(J):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(J))}function ye(C){return p!==C?(i.useProgram(C),p=C,!0):!1}const ze={[$n]:i.FUNC_ADD,[ko]:i.FUNC_SUBTRACT,[Go]:i.FUNC_REVERSE_SUBTRACT};if(n)ze[mr]=i.MIN,ze[gr]=i.MAX;else{const C=e.get("EXT_blend_minmax");C!==null&&(ze[mr]=C.MIN_EXT,ze[gr]=C.MAX_EXT)}const ge={[Ho]:i.ZERO,[Vo]:i.ONE,[Wo]:i.SRC_COLOR,[ja]:i.SRC_ALPHA,[Ko]:i.SRC_ALPHA_SATURATE,[jo]:i.DST_COLOR,[qo]:i.DST_ALPHA,[Xo]:i.ONE_MINUS_SRC_COLOR,[$a]:i.ONE_MINUS_SRC_ALPHA,[$o]:i.ONE_MINUS_DST_COLOR,[Yo]:i.ONE_MINUS_DST_ALPHA};function Ie(C,G,J,he,fe,Ve,We,ht){if(C===pn){h===!0&&(Ae(i.BLEND),h=!1);return}if(h===!1&&(P(i.BLEND),h=!0),C!==zo){if(C!==S||ht!==v){if((M!==$n||A!==$n)&&(i.blendEquation(i.FUNC_ADD),M=$n,A=$n),ht)switch(C){case Zn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qi:i.blendFunc(i.ONE,i.ONE);break;case fr:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pr:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Zn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qi:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case fr:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pr:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}E=null,T=null,L=null,N=null,S=C,v=ht}return}fe=fe||G,Ve=Ve||J,We=We||he,(G!==M||fe!==A)&&(i.blendEquationSeparate(ze[G],ze[fe]),M=G,A=fe),(J!==E||he!==T||Ve!==L||We!==N)&&(i.blendFuncSeparate(ge[J],ge[he],ge[Ve],ge[We]),E=J,T=he,L=Ve,N=We),S=C,v=!1}function it(C,G){C.side===vt?Ae(i.CULL_FACE):P(i.CULL_FACE);let J=C.side===St;G&&(J=!J),ot(J),C.blending===Zn&&C.transparent===!1?Ie(pn):Ie(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),o.setMask(C.colorWrite);const he=C.stencilWrite;c.setTest(he),he&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),ke(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?P(i.SAMPLE_ALPHA_TO_COVERAGE):Ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function ot(C){w!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),w=C)}function st(C){C!==Fo?(P(i.CULL_FACE),C!==q&&(C===dr?i.cullFace(i.BACK):C===Oo?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ae(i.CULL_FACE),q=C}function et(C){C!==B&&(Z&&i.lineWidth(C),B=C)}function ke(C,G,J){C?(P(i.POLYGON_OFFSET_FILL),(U!==G||F!==J)&&(i.polygonOffset(G,J),U=G,F=J)):Ae(i.POLYGON_OFFSET_FILL)}function Ye(C){C?P(i.SCISSOR_TEST):Ae(i.SCISSOR_TEST)}function xt(C){C===void 0&&(C=i.TEXTURE0+V-1),te!==C&&(i.activeTexture(C),te=C)}function b(C,G,J){J===void 0&&(te===null?J=i.TEXTURE0+V-1:J=te);let he=K[J];he===void 0&&(he={type:void 0,texture:void 0},K[J]=he),(he.type!==C||he.texture!==G)&&(te!==J&&(i.activeTexture(J),te=J),i.bindTexture(C,G||le[C]),he.type=C,he.texture=G)}function x(){const C=K[te];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ee(){try{i.texSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function oe(){try{i.texSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ee(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function de(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function W(){try{i.texStorage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function pe(){try{i.texStorage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function _e(){try{i.texImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Me(){try{i.texImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ue(C){k.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),k.copy(C))}function me(C){$.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),$.copy(C))}function Oe(C,G){let J=d.get(G);J===void 0&&(J=new WeakMap,d.set(G,J));let he=J.get(C);he===void 0&&(he=i.getUniformBlockIndex(G,C.name),J.set(C,he))}function Ge(C,G){const he=d.get(G).get(C);u.get(G)!==he&&(i.uniformBlockBinding(G,he,C.__bindingPointIndex),u.set(G,he))}function $e(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},te=null,K={},m={},g=new WeakMap,_=[],p=null,h=!1,S=null,M=null,E=null,T=null,A=null,L=null,N=null,v=!1,w=null,q=null,B=null,U=null,F=null,k.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:P,disable:Ae,bindFramebuffer:be,drawBuffers:re,useProgram:ye,setBlending:Ie,setMaterial:it,setFlipSided:ot,setCullFace:st,setLineWidth:et,setPolygonOffset:ke,setScissorTest:Ye,activeTexture:xt,bindTexture:b,unbindTexture:x,compressedTexImage2D:z,compressedTexImage3D:Q,texImage2D:_e,texImage3D:Me,updateUBOMapping:Oe,uniformBlockBinding:Ge,texStorage2D:W,texStorage3D:pe,texSubImage2D:ee,texSubImage3D:oe,compressedTexSubImage2D:Ee,compressedTexSubImage3D:de,scissor:ue,viewport:me,reset:$e}}function Tf(i,e,t,n,s,r,a){const o=s.isWebGL2,l=s.maxTextures,c=s.maxCubemapSize,u=s.maxTextureSize,d=s.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const p=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(b,x){return h?new OffscreenCanvas(b,x):es("canvas")}function M(b,x,z,Q){let ee=1;if((b.width>Q||b.height>Q)&&(ee=Q/Math.max(b.width,b.height)),ee<1||x===!0)if(typeof HTMLImageElement!="undefined"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&b instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&b instanceof ImageBitmap){const oe=x?Dl:Math.floor,Ee=oe(ee*b.width),de=oe(ee*b.height);_===void 0&&(_=S(Ee,de));const W=z?S(Ee,de):_;return W.width=Ee,W.height=de,W.getContext("2d").drawImage(b,0,0,Ee,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+Ee+"x"+de+")."),W}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function E(b){return Vr(b.width)&&Vr(b.height)}function T(b){return o?!1:b.wrapS!==Gt||b.wrapT!==Gt||b.minFilter!==_t&&b.minFilter!==Lt}function A(b,x){return b.generateMipmaps&&x&&b.minFilter!==_t&&b.minFilter!==Lt}function L(b){i.generateMipmap(b)}function N(b,x,z,Q,ee=!1){if(o===!1)return x;if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let oe=x;return x===i.RED&&(z===i.FLOAT&&(oe=i.R32F),z===i.HALF_FLOAT&&(oe=i.R16F),z===i.UNSIGNED_BYTE&&(oe=i.R8)),x===i.RG&&(z===i.FLOAT&&(oe=i.RG32F),z===i.HALF_FLOAT&&(oe=i.RG16F),z===i.UNSIGNED_BYTE&&(oe=i.RG8)),x===i.RGBA&&(z===i.FLOAT&&(oe=i.RGBA32F),z===i.HALF_FLOAT&&(oe=i.RGBA16F),z===i.UNSIGNED_BYTE&&(oe=Q===Re&&ee===!1?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(oe=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(oe=i.RGB5_A1)),(oe===i.R16F||oe===i.R32F||oe===i.RG16F||oe===i.RG32F||oe===i.RGBA16F||oe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function v(b,x,z){return A(b,z)===!0||b.isFramebufferTexture&&b.minFilter!==_t&&b.minFilter!==Lt?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function w(b){return b===_t||b===_r||b===fs?i.NEAREST:i.LINEAR}function q(b){const x=b.target;x.removeEventListener("dispose",q),U(x),x.isVideoTexture&&g.delete(x)}function B(b){const x=b.target;x.removeEventListener("dispose",B),V(x)}function U(b){const x=n.get(b);if(x.__webglInit===void 0)return;const z=b.source,Q=p.get(z);if(Q){const ee=Q[x.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&F(b),Object.keys(Q).length===0&&p.delete(z)}n.remove(b)}function F(b){const x=n.get(b);i.deleteTexture(x.__webglTexture);const z=b.source,Q=p.get(z);delete Q[x.__cacheKey],a.memory.textures--}function V(b){const x=b.texture,z=n.get(b),Q=n.get(x);if(Q.__webglTexture!==void 0&&(i.deleteTexture(Q.__webglTexture),a.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++)i.deleteFramebuffer(z.__webglFramebuffer[ee]),z.__webglDepthbuffer&&i.deleteRenderbuffer(z.__webglDepthbuffer[ee]);else{if(i.deleteFramebuffer(z.__webglFramebuffer),z.__webglDepthbuffer&&i.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&i.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let ee=0;ee<z.__webglColorRenderbuffer.length;ee++)z.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(z.__webglColorRenderbuffer[ee]);z.__webglDepthRenderbuffer&&i.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let ee=0,oe=x.length;ee<oe;ee++){const Ee=n.get(x[ee]);Ee.__webglTexture&&(i.deleteTexture(Ee.__webglTexture),a.memory.textures--),n.remove(x[ee])}n.remove(x),n.remove(b)}let Z=0;function j(){Z=0}function Y(){const b=Z;return b>=l&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+l),Z+=1,b}function te(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function K(b,x){const z=n.get(b);if(b.isVideoTexture&&Ye(b),b.isRenderTargetTexture===!1&&b.version>0&&z.__version!==b.version){const Q=b.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(z,b,x);return}}t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+x)}function xe(b,x){const z=n.get(b);if(b.version>0&&z.__version!==b.version){Ae(z,b,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+x)}function ne(b,x){const z=n.get(b);if(b.version>0&&z.__version!==b.version){Ae(z,b,x);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+x)}function k(b,x){const z=n.get(b);if(b.version>0&&z.__version!==b.version){be(z,b,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+x)}const $={[Ks]:i.REPEAT,[Gt]:i.CLAMP_TO_EDGE,[Zs]:i.MIRRORED_REPEAT},ae={[_t]:i.NEAREST,[_r]:i.NEAREST_MIPMAP_NEAREST,[fs]:i.NEAREST_MIPMAP_LINEAR,[Lt]:i.LINEAR,[ul]:i.LINEAR_MIPMAP_NEAREST,[_i]:i.LINEAR_MIPMAP_LINEAR};function le(b,x,z){if(z?(i.texParameteri(b,i.TEXTURE_WRAP_S,$[x.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,$[x.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,$[x.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,ae[x.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,ae[x.minFilter])):(i.texParameteri(b,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(b,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(x.wrapS!==Gt||x.wrapT!==Gt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(b,i.TEXTURE_MAG_FILTER,w(x.magFilter)),i.texParameteri(b,i.TEXTURE_MIN_FILTER,w(x.minFilter)),x.minFilter!==_t&&x.minFilter!==Lt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===_t||x.minFilter!==fs&&x.minFilter!==_i||x.type===An&&e.has("OES_texture_float_linear")===!1||o===!1&&x.type===vi&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(i.texParameterf(b,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function P(b,x){let z=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",q));const Q=x.source;let ee=p.get(Q);ee===void 0&&(ee={},p.set(Q,ee));const oe=te(x);if(oe!==b.__cacheKey){ee[oe]===void 0&&(ee[oe]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),ee[oe].usedTimes++;const Ee=ee[b.__cacheKey];Ee!==void 0&&(ee[b.__cacheKey].usedTimes--,Ee.usedTimes===0&&F(x)),b.__cacheKey=oe,b.__webglTexture=ee[oe].texture}return z}function Ae(b,x,z){let Q=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Q=i.TEXTURE_3D);const ee=P(b,x),oe=x.source;t.bindTexture(Q,b.__webglTexture,i.TEXTURE0+z);const Ee=n.get(oe);if(oe.version!==Ee.__version||ee===!0){t.activeTexture(i.TEXTURE0+z),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const de=T(x)&&E(x.image)===!1;let W=M(x.image,de,!1,u);W=xt(x,W);const pe=E(W)||o,_e=r.convert(x.format,x.colorSpace);let Me=r.convert(x.type),ue=N(x.internalFormat,_e,Me,x.colorSpace);le(Q,x,pe);let me;const Oe=x.mipmaps,Ge=o&&x.isVideoTexture!==!0,$e=Ee.__version===void 0||ee===!0,C=v(x,W,pe);if(x.isDepthTexture)ue=i.DEPTH_COMPONENT,o?x.type===An?ue=i.DEPTH_COMPONENT32F:x.type===wn?ue=i.DEPTH_COMPONENT24:x.type===Jn?ue=i.DEPTH24_STENCIL8:ue=i.DEPTH_COMPONENT16:x.type===An&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Rn&&ue===i.DEPTH_COMPONENT&&x.type!==Ja&&x.type!==wn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=wn,Me=r.convert(x.type)),x.format===ni&&ue===i.DEPTH_COMPONENT&&(ue=i.DEPTH_STENCIL,x.type!==Jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Jn,Me=r.convert(x.type))),$e&&(Ge?t.texStorage2D(i.TEXTURE_2D,1,ue,W.width,W.height):t.texImage2D(i.TEXTURE_2D,0,ue,W.width,W.height,0,_e,Me,null));else if(x.isDataTexture)if(Oe.length>0&&pe){Ge&&$e&&t.texStorage2D(i.TEXTURE_2D,C,ue,Oe[0].width,Oe[0].height);for(let G=0,J=Oe.length;G<J;G++)me=Oe[G],Ge?t.texSubImage2D(i.TEXTURE_2D,G,0,0,me.width,me.height,_e,Me,me.data):t.texImage2D(i.TEXTURE_2D,G,ue,me.width,me.height,0,_e,Me,me.data);x.generateMipmaps=!1}else Ge?($e&&t.texStorage2D(i.TEXTURE_2D,C,ue,W.width,W.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,W.width,W.height,_e,Me,W.data)):t.texImage2D(i.TEXTURE_2D,0,ue,W.width,W.height,0,_e,Me,W.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ge&&$e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,C,ue,Oe[0].width,Oe[0].height,W.depth);for(let G=0,J=Oe.length;G<J;G++)me=Oe[G],x.format!==Ht?_e!==null?Ge?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,me.width,me.height,W.depth,_e,me.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,G,ue,me.width,me.height,W.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?t.texSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,me.width,me.height,W.depth,_e,Me,me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,G,ue,me.width,me.height,W.depth,0,_e,Me,me.data)}else{Ge&&$e&&t.texStorage2D(i.TEXTURE_2D,C,ue,Oe[0].width,Oe[0].height);for(let G=0,J=Oe.length;G<J;G++)me=Oe[G],x.format!==Ht?_e!==null?Ge?t.compressedTexSubImage2D(i.TEXTURE_2D,G,0,0,me.width,me.height,_e,me.data):t.compressedTexImage2D(i.TEXTURE_2D,G,ue,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?t.texSubImage2D(i.TEXTURE_2D,G,0,0,me.width,me.height,_e,Me,me.data):t.texImage2D(i.TEXTURE_2D,G,ue,me.width,me.height,0,_e,Me,me.data)}else if(x.isDataArrayTexture)Ge?($e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,C,ue,W.width,W.height,W.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,W.width,W.height,W.depth,_e,Me,W.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,ue,W.width,W.height,W.depth,0,_e,Me,W.data);else if(x.isData3DTexture)Ge?($e&&t.texStorage3D(i.TEXTURE_3D,C,ue,W.width,W.height,W.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,W.width,W.height,W.depth,_e,Me,W.data)):t.texImage3D(i.TEXTURE_3D,0,ue,W.width,W.height,W.depth,0,_e,Me,W.data);else if(x.isFramebufferTexture){if($e)if(Ge)t.texStorage2D(i.TEXTURE_2D,C,ue,W.width,W.height);else{let G=W.width,J=W.height;for(let he=0;he<C;he++)t.texImage2D(i.TEXTURE_2D,he,ue,G,J,0,_e,Me,null),G>>=1,J>>=1}}else if(Oe.length>0&&pe){Ge&&$e&&t.texStorage2D(i.TEXTURE_2D,C,ue,Oe[0].width,Oe[0].height);for(let G=0,J=Oe.length;G<J;G++)me=Oe[G],Ge?t.texSubImage2D(i.TEXTURE_2D,G,0,0,_e,Me,me):t.texImage2D(i.TEXTURE_2D,G,ue,_e,Me,me);x.generateMipmaps=!1}else Ge?($e&&t.texStorage2D(i.TEXTURE_2D,C,ue,W.width,W.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e,Me,W)):t.texImage2D(i.TEXTURE_2D,0,ue,_e,Me,W);A(x,pe)&&L(Q),Ee.__version=oe.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function be(b,x,z){if(x.image.length!==6)return;const Q=P(b,x),ee=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+z);const oe=n.get(ee);if(ee.version!==oe.__version||Q===!0){t.activeTexture(i.TEXTURE0+z),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const Ee=x.isCompressedTexture||x.image[0].isCompressedTexture,de=x.image[0]&&x.image[0].isDataTexture,W=[];for(let G=0;G<6;G++)!Ee&&!de?W[G]=M(x.image[G],!1,!0,c):W[G]=de?x.image[G].image:x.image[G],W[G]=xt(x,W[G]);const pe=W[0],_e=E(pe)||o,Me=r.convert(x.format,x.colorSpace),ue=r.convert(x.type),me=N(x.internalFormat,Me,ue,x.colorSpace),Oe=o&&x.isVideoTexture!==!0,Ge=oe.__version===void 0||Q===!0;let $e=v(x,pe,_e);le(i.TEXTURE_CUBE_MAP,x,_e);let C;if(Ee){Oe&&Ge&&t.texStorage2D(i.TEXTURE_CUBE_MAP,$e,me,pe.width,pe.height);for(let G=0;G<6;G++){C=W[G].mipmaps;for(let J=0;J<C.length;J++){const he=C[J];x.format!==Ht?Me!==null?Oe?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,J,0,0,he.width,he.height,Me,he.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,J,me,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,J,0,0,he.width,he.height,Me,ue,he.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,J,me,he.width,he.height,0,Me,ue,he.data)}}}else{C=x.mipmaps,Oe&&Ge&&(C.length>0&&$e++,t.texStorage2D(i.TEXTURE_CUBE_MAP,$e,me,W[0].width,W[0].height));for(let G=0;G<6;G++)if(de){Oe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,W[G].width,W[G].height,Me,ue,W[G].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,me,W[G].width,W[G].height,0,Me,ue,W[G].data);for(let J=0;J<C.length;J++){const fe=C[J].image[G].image;Oe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,J+1,0,0,fe.width,fe.height,Me,ue,fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,J+1,me,fe.width,fe.height,0,Me,ue,fe.data)}}else{Oe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,Me,ue,W[G]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,me,Me,ue,W[G]);for(let J=0;J<C.length;J++){const he=C[J];Oe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,J+1,0,0,Me,ue,he.image[G]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,J+1,me,Me,ue,he.image[G])}}}A(x,_e)&&L(i.TEXTURE_CUBE_MAP),oe.__version=ee.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function re(b,x,z,Q,ee){const oe=r.convert(z.format,z.colorSpace),Ee=r.convert(z.type),de=N(z.internalFormat,oe,Ee,z.colorSpace);n.get(x).__hasExternalTextures||(ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,0,de,x.width,x.height,x.depth,0,oe,Ee,null):t.texImage2D(ee,0,de,x.width,x.height,0,oe,Ee,null)),t.bindFramebuffer(i.FRAMEBUFFER,b),ke(x)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,ee,n.get(z).__webglTexture,0,et(x)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,ee,n.get(z).__webglTexture,0),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ye(b,x,z){if(i.bindRenderbuffer(i.RENDERBUFFER,b),x.depthBuffer&&!x.stencilBuffer){let Q=i.DEPTH_COMPONENT16;if(z||ke(x)){const ee=x.depthTexture;ee&&ee.isDepthTexture&&(ee.type===An?Q=i.DEPTH_COMPONENT32F:ee.type===wn&&(Q=i.DEPTH_COMPONENT24));const oe=et(x);ke(x)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,Q,x.width,x.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,Q,x.width,x.height)}else i.renderbufferStorage(i.RENDERBUFFER,Q,x.width,x.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,b)}else if(x.depthBuffer&&x.stencilBuffer){const Q=et(x);z&&ke(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,i.DEPTH24_STENCIL8,x.width,x.height):ke(x)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Q,i.DEPTH24_STENCIL8,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,b)}else{const Q=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let ee=0;ee<Q.length;ee++){const oe=Q[ee],Ee=r.convert(oe.format,oe.colorSpace),de=r.convert(oe.type),W=N(oe.internalFormat,Ee,de,oe.colorSpace),pe=et(x);z&&ke(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,W,x.width,x.height):ke(x)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe,W,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,W,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ze(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),K(x.depthTexture,0);const Q=n.get(x.depthTexture).__webglTexture,ee=et(x);if(x.depthTexture.format===Rn)ke(x)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(x.depthTexture.format===ni)ke(x)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function ge(b){const x=n.get(b),z=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");ze(x.__webglFramebuffer,b)}else if(z){x.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Q]),x.__webglDepthbuffer[Q]=i.createRenderbuffer(),ye(x.__webglDepthbuffer[Q],b,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),ye(x.__webglDepthbuffer,b,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ie(b,x,z){const Q=n.get(b);x!==void 0&&re(Q.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D),z!==void 0&&ge(b)}function it(b){const x=b.texture,z=n.get(b),Q=n.get(x);b.addEventListener("dispose",B),b.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=x.version,a.memory.textures++);const ee=b.isWebGLCubeRenderTarget===!0,oe=b.isWebGLMultipleRenderTargets===!0,Ee=E(b)||o;if(ee){z.__webglFramebuffer=[];for(let de=0;de<6;de++)z.__webglFramebuffer[de]=i.createFramebuffer()}else{if(z.__webglFramebuffer=i.createFramebuffer(),oe)if(s.drawBuffers){const de=b.texture;for(let W=0,pe=de.length;W<pe;W++){const _e=n.get(de[W]);_e.__webglTexture===void 0&&(_e.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&b.samples>0&&ke(b)===!1){const de=oe?x:[x];z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let W=0;W<de.length;W++){const pe=de[W];z.__webglColorRenderbuffer[W]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[W]);const _e=r.convert(pe.format,pe.colorSpace),Me=r.convert(pe.type),ue=N(pe.internalFormat,_e,Me,pe.colorSpace,b.isXRRenderTarget===!0),me=et(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,me,ue,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+W,i.RENDERBUFFER,z.__webglColorRenderbuffer[W])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),ye(z.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ee){t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),le(i.TEXTURE_CUBE_MAP,x,Ee);for(let de=0;de<6;de++)re(z.__webglFramebuffer[de],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de);A(x,Ee)&&L(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){const de=b.texture;for(let W=0,pe=de.length;W<pe;W++){const _e=de[W],Me=n.get(_e);t.bindTexture(i.TEXTURE_2D,Me.__webglTexture),le(i.TEXTURE_2D,_e,Ee),re(z.__webglFramebuffer,b,_e,i.COLOR_ATTACHMENT0+W,i.TEXTURE_2D),A(_e,Ee)&&L(i.TEXTURE_2D)}t.unbindTexture()}else{let de=i.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(o?de=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(de,Q.__webglTexture),le(de,x,Ee),re(z.__webglFramebuffer,b,x,i.COLOR_ATTACHMENT0,de),A(x,Ee)&&L(de),t.unbindTexture()}b.depthBuffer&&ge(b)}function ot(b){const x=E(b)||o,z=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let Q=0,ee=z.length;Q<ee;Q++){const oe=z[Q];if(A(oe,x)){const Ee=b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,de=n.get(oe).__webglTexture;t.bindTexture(Ee,de),L(Ee),t.unbindTexture()}}}function st(b){if(o&&b.samples>0&&ke(b)===!1){const x=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],z=b.width,Q=b.height;let ee=i.COLOR_BUFFER_BIT;const oe=[],Ee=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=n.get(b),W=b.isWebGLMultipleRenderTargets===!0;if(W)for(let pe=0;pe<x.length;pe++)t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let pe=0;pe<x.length;pe++){oe.push(i.COLOR_ATTACHMENT0+pe),b.depthBuffer&&oe.push(Ee);const _e=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(_e===!1&&(b.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),W&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,de.__webglColorRenderbuffer[pe]),_e===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Ee]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Ee])),W){const Me=n.get(x[pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Me,0)}i.blitFramebuffer(0,0,z,Q,0,0,z,Q,ee,i.NEAREST),m&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,oe)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),W)for(let pe=0;pe<x.length;pe++){t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,de.__webglColorRenderbuffer[pe]);const _e=n.get(x[pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,_e,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}}function et(b){return Math.min(d,b.samples)}function ke(b){const x=n.get(b);return o&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ye(b){const x=a.render.frame;g.get(b)!==x&&(g.set(b,x),b.update())}function xt(b,x){const z=b.colorSpace,Q=b.format,ee=b.type;return b.isCompressedTexture===!0||b.format===Js||z!==Kt&&z!==Pn&&(z===Re?o===!1?e.has("EXT_sRGB")===!0&&Q===Ht?(b.format=Js,b.minFilter=Lt,b.generateMipmaps=!1):x=io.sRGBToLinear(x):(Q!==Ht||ee!==Ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),x}this.allocateTextureUnit=Y,this.resetTextureUnits=j,this.setTexture2D=K,this.setTexture2DArray=xe,this.setTexture3D=ne,this.setTextureCube=k,this.rebindTextures=Ie,this.setupRenderTarget=it,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=re,this.useMultisampledRTT=ke}function wf(i,e,t){const n=t.isWebGL2;function s(r,a=Pn){let o;if(r===Ln)return i.UNSIGNED_BYTE;if(r===ml)return i.UNSIGNED_SHORT_4_4_4_4;if(r===gl)return i.UNSIGNED_SHORT_5_5_5_1;if(r===dl)return i.BYTE;if(r===fl)return i.SHORT;if(r===Ja)return i.UNSIGNED_SHORT;if(r===pl)return i.INT;if(r===wn)return i.UNSIGNED_INT;if(r===An)return i.FLOAT;if(r===vi)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===_l)return i.ALPHA;if(r===Ht)return i.RGBA;if(r===vl)return i.LUMINANCE;if(r===xl)return i.LUMINANCE_ALPHA;if(r===Rn)return i.DEPTH_COMPONENT;if(r===ni)return i.DEPTH_STENCIL;if(r===Js)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Ml)return i.RED;if(r===Sl)return i.RED_INTEGER;if(r===yl)return i.RG;if(r===El)return i.RG_INTEGER;if(r===bl)return i.RGBA_INTEGER;if(r===ps||r===ms||r===gs||r===_s)if(a===Re)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===ps)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ms)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===gs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===_s)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===ps)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ms)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===gs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===_s)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===vr||r===xr||r===Mr||r===Sr)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===vr)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===xr)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Mr)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Sr)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Tl)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===yr||r===Er)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===yr)return a===Re?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Er)return a===Re?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===br||r===Tr||r===wr||r===Ar||r===Rr||r===Cr||r===Pr||r===Lr||r===Dr||r===Ur||r===Ir||r===Nr||r===Fr||r===Or)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===br)return a===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Tr)return a===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===wr)return a===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ar)return a===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Rr)return a===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Cr)return a===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Pr)return a===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Lr)return a===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Dr)return a===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ur)return a===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ir)return a===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Nr)return a===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Fr)return a===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Or)return a===Re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===vs)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===vs)return a===Re?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===wl||r===Br||r===zr||r===kr)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===vs)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Br)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===zr)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===kr)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Jn?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class Af extends wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Dt extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Rf={type:"move"};class Hs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),h=this._getHandJoint(c,_);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Rf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Dt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Cf extends Rt{constructor(e,t,n,s,r,a,o,l,c,u){if(u=u!==void 0?u:Rn,u!==Rn&&u!==ni)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Rn&&(n=wn),n===void 0&&u===ni&&(n=Jn),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:_t,this.minFilter=l!==void 0?l:_t,this.flipY=!1,this.generateMipmaps=!1}}class Pf extends ai{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,m=null,g=null;const _=t.getContextAttributes();let p=null,h=null;const S=[],M=[],E=new Set,T=new Map,A=new wt;A.layers.enable(1),A.viewport=new qe;const L=new wt;L.layers.enable(2),L.viewport=new qe;const N=[A,L],v=new Af;v.layers.enable(1),v.layers.enable(2);let w=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let $=S[k];return $===void 0&&($=new Hs,S[k]=$),$.getTargetRaySpace()},this.getControllerGrip=function(k){let $=S[k];return $===void 0&&($=new Hs,S[k]=$),$.getGripSpace()},this.getHand=function(k){let $=S[k];return $===void 0&&($=new Hs,S[k]=$),$.getHandSpace()};function B(k){const $=M.indexOf(k.inputSource);if($===-1)return;const ae=S[$];ae!==void 0&&(ae.update(k.inputSource,k.frame,c||a),ae.dispatchEvent({type:k.type,data:k.inputSource}))}function U(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",F);for(let k=0;k<S.length;k++){const $=M[k];$!==null&&(M[k]=null,S[k].disconnect($))}w=null,q=null,e.setRenderTarget(p),m=null,f=null,d=null,s=null,h=null,ne.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",U),s.addEventListener("inputsourceschange",F),_.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,$),s.updateRenderState({baseLayer:m}),h=new Vt(m.framebufferWidth,m.framebufferHeight,{format:Ht,type:Ln,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let $=null,ae=null,le=null;_.depth&&(le=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=_.stencil?ni:Rn,ae=_.stencil?Jn:wn);const P={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:r};d=new XRWebGLBinding(s,t),f=d.createProjectionLayer(P),s.updateRenderState({layers:[f]}),h=new Vt(f.textureWidth,f.textureHeight,{format:Ht,type:Ln,depthTexture:new Cf(f.textureWidth,f.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Ae=e.properties.get(h);Ae.__ignoreDepthValues=f.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ne.setContext(s),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function F(k){for(let $=0;$<k.removed.length;$++){const ae=k.removed[$],le=M.indexOf(ae);le>=0&&(M[le]=null,S[le].disconnect(ae))}for(let $=0;$<k.added.length;$++){const ae=k.added[$];let le=M.indexOf(ae);if(le===-1){for(let Ae=0;Ae<S.length;Ae++)if(Ae>=M.length){M.push(ae),le=Ae;break}else if(M[Ae]===null){M[Ae]=ae,le=Ae;break}if(le===-1)break}const P=S[le];P&&P.connect(ae)}}const V=new R,Z=new R;function j(k,$,ae){V.setFromMatrixPosition($.matrixWorld),Z.setFromMatrixPosition(ae.matrixWorld);const le=V.distanceTo(Z),P=$.projectionMatrix.elements,Ae=ae.projectionMatrix.elements,be=P[14]/(P[10]-1),re=P[14]/(P[10]+1),ye=(P[9]+1)/P[5],ze=(P[9]-1)/P[5],ge=(P[8]-1)/P[0],Ie=(Ae[8]+1)/Ae[0],it=be*ge,ot=be*Ie,st=le/(-ge+Ie),et=st*-ge;$.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(et),k.translateZ(st),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const ke=be+st,Ye=re+st,xt=it-et,b=ot+(le-et),x=ye*re/Ye*ke,z=ze*re/Ye*ke;k.projectionMatrix.makePerspective(xt,b,x,z,ke,Ye),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function Y(k,$){$===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices($.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;v.near=L.near=A.near=k.near,v.far=L.far=A.far=k.far,(w!==v.near||q!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),w=v.near,q=v.far);const $=k.parent,ae=v.cameras;Y(v,$);for(let le=0;le<ae.length;le++)Y(ae[le],$);ae.length===2?j(v,A,L):v.projectionMatrix.copy(A.projectionMatrix),te(k,v,$)};function te(k,$,ae){ae===null?k.matrix.copy($.matrixWorld):(k.matrix.copy(ae.matrixWorld),k.matrix.invert(),k.matrix.multiply($.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0);const le=k.children;for(let P=0,Ae=le.length;P<Ae;P++)le[P].updateMatrixWorld(!0);k.projectionMatrix.copy($.projectionMatrix),k.projectionMatrixInverse.copy($.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Qs*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(k){l=k,f!==null&&(f.fixedFoveation=k),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=k)},this.getPlanes=function(){return E};let K=null;function xe(k,$){if(u=$.getViewerPose(c||a),g=$,u!==null){const ae=u.views;m!==null&&(e.setRenderTargetFramebuffer(h,m.framebuffer),e.setRenderTarget(h));let le=!1;ae.length!==v.cameras.length&&(v.cameras.length=0,le=!0);for(let P=0;P<ae.length;P++){const Ae=ae[P];let be=null;if(m!==null)be=m.getViewport(Ae);else{const ye=d.getViewSubImage(f,Ae);be=ye.viewport,P===0&&(e.setRenderTargetTextures(h,ye.colorTexture,f.ignoreDepthValues?void 0:ye.depthStencilTexture),e.setRenderTarget(h))}let re=N[P];re===void 0&&(re=new wt,re.layers.enable(P),re.viewport=new qe,N[P]=re),re.matrix.fromArray(Ae.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(Ae.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(be.x,be.y,be.width,be.height),P===0&&(v.matrix.copy(re.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),le===!0&&v.cameras.push(re)}}for(let ae=0;ae<S.length;ae++){const le=M[ae],P=S[ae];le!==null&&P!==void 0&&P.update(le,$,c||a)}if(K&&K(k,$),$.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:$.detectedPlanes});let ae=null;for(const le of E)$.detectedPlanes.has(le)||(ae===null&&(ae=[]),ae.push(le));if(ae!==null)for(const le of ae)E.delete(le),T.delete(le),n.dispatchEvent({type:"planeremoved",data:le});for(const le of $.detectedPlanes)if(!E.has(le))E.add(le),T.set(le,$.lastChangedTime),n.dispatchEvent({type:"planeadded",data:le});else{const P=T.get(le);le.lastChangedTime>P&&(T.set(le,le.lastChangedTime),n.dispatchEvent({type:"planechanged",data:le}))}}g=null}const ne=new po;ne.setAnimationLoop(xe),this.setAnimationLoop=function(k){K=k},this.dispose=function(){}}}function Lf(i,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function n(p,h){h.color.getRGB(p.fogColor.value,ho(i)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function s(p,h,S,M,E){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(p,h):h.isMeshToonMaterial?(r(p,h),d(p,h)):h.isMeshPhongMaterial?(r(p,h),u(p,h)):h.isMeshStandardMaterial?(r(p,h),f(p,h),h.isMeshPhysicalMaterial&&m(p,h,E)):h.isMeshMatcapMaterial?(r(p,h),g(p,h)):h.isMeshDepthMaterial?r(p,h):h.isMeshDistanceMaterial?(r(p,h),_(p,h)):h.isMeshNormalMaterial?r(p,h):h.isLineBasicMaterial?(a(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?l(p,h,S,M):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===St&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===St&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const S=e.get(h).envMap;if(S&&(p.envMap.value=S,p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const M=i.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*M,t(h.lightMap,p.lightMapTransform)}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function a(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,S,M){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*S,p.scale.value=M*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function d(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,S){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===St&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,h){h.matcap&&(p.matcap.value=h.matcap)}function _(p,h){const S=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Df(i,e,t,n){let s={},r={},a=[];const o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,M){const E=M.program;n.uniformBlockBinding(S,E)}function c(S,M){let E=s[S.id];E===void 0&&(g(S),E=u(S),s[S.id]=E,S.addEventListener("dispose",p));const T=M.program;n.updateUBOMapping(S,T);const A=e.render.frame;r[S.id]!==A&&(f(S),r[S.id]=A)}function u(S){const M=d();S.__bindingPointIndex=M;const E=i.createBuffer(),T=S.__size,A=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,T,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,E),E}function d(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const M=s[S.id],E=S.uniforms,T=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let A=0,L=E.length;A<L;A++){const N=E[A];if(m(N,A,T)===!0){const v=N.__offset,w=Array.isArray(N.value)?N.value:[N.value];let q=0;for(let B=0;B<w.length;B++){const U=w[B],F=_(U);typeof U=="number"?(N.__data[0]=U,i.bufferSubData(i.UNIFORM_BUFFER,v+q,N.__data)):U.isMatrix3?(N.__data[0]=U.elements[0],N.__data[1]=U.elements[1],N.__data[2]=U.elements[2],N.__data[3]=U.elements[0],N.__data[4]=U.elements[3],N.__data[5]=U.elements[4],N.__data[6]=U.elements[5],N.__data[7]=U.elements[0],N.__data[8]=U.elements[6],N.__data[9]=U.elements[7],N.__data[10]=U.elements[8],N.__data[11]=U.elements[0]):(U.toArray(N.__data,q),q+=F.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,v,N.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(S,M,E){const T=S.value;if(E[M]===void 0){if(typeof T=="number")E[M]=T;else{const A=Array.isArray(T)?T:[T],L=[];for(let N=0;N<A.length;N++)L.push(A[N].clone());E[M]=L}return!0}else if(typeof T=="number"){if(E[M]!==T)return E[M]=T,!0}else{const A=Array.isArray(E[M])?E[M]:[E[M]],L=Array.isArray(T)?T:[T];for(let N=0;N<A.length;N++){const v=A[N];if(v.equals(L[N])===!1)return v.copy(L[N]),!0}}return!1}function g(S){const M=S.uniforms;let E=0;const T=16;let A=0;for(let L=0,N=M.length;L<N;L++){const v=M[L],w={boundary:0,storage:0},q=Array.isArray(v.value)?v.value:[v.value];for(let B=0,U=q.length;B<U;B++){const F=q[B],V=_(F);w.boundary+=V.boundary,w.storage+=V.storage}if(v.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),v.__offset=E,L>0){A=E%T;const B=T-A;A!==0&&B-w.boundary<0&&(E+=T-A,v.__offset=E)}E+=w.storage}return A=E%T,A>0&&(E+=T-A),S.__size=E,S.__cache={},this}function _(S){const M={boundary:0,storage:0};return typeof S=="number"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),M}function p(S){const M=S.target;M.removeEventListener("dispose",p);const E=a.indexOf(M.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function h(){for(const S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:h}}function Uf(){const i=es("canvas");return i.style.display="block",i}class Mo{constructor(e={}){const{canvas:t=Uf(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;let m=null,g=null;const _=[],p=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Re,this.useLegacyLights=!0,this.toneMapping=an,this.toneMappingExposure=1;const h=this;let S=!1,M=0,E=0,T=null,A=-1,L=null;const N=new qe,v=new qe;let w=null,q=t.width,B=t.height,U=1,F=null,V=null;const Z=new qe(0,0,q,B),j=new qe(0,0,q,B);let Y=!1;const te=new sr;let K=!1,xe=!1,ne=null;const k=new je,$=new R,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function le(){return T===null?U:1}let P=n;function Ae(y,I){for(let H=0;H<y.length;H++){const D=y[H],X=t.getContext(D,I);if(X!==null)return X}return null}try{const y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${nr}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",Oe,!1),t.addEventListener("webglcontextcreationerror",Ge,!1),P===null){const I=["webgl2","webgl","experimental-webgl"];if(h.isWebGL1Renderer===!0&&I.shift(),P=Ae(I,y),P===null)throw Ae(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let be,re,ye,ze,ge,Ie,it,ot,st,et,ke,Ye,xt,b,x,z,Q,ee,oe,Ee,de,W,pe,_e;function Me(){be=new Vu(P),re=new Ou(P,be,e),be.init(re),W=new wf(P,be,re),ye=new bf(P,be,re),ze=new qu(P),ge=new hf,Ie=new Tf(P,be,ye,ge,re,W,ze),it=new zu(h),ot=new Hu(h),st=new sc(P,re),pe=new Nu(P,be,st,re),et=new Wu(P,st,ze,pe),ke=new Ku(P,et,st,ze),oe=new $u(P,re,Ie),z=new Bu(ge),Ye=new cf(h,it,ot,be,re,pe,z),xt=new Lf(h,ge),b=new df,x=new vf(be,re),ee=new Iu(h,it,ot,ye,ke,f,l),Q=new Ef(h,ke,re),_e=new Df(P,ze,re,ye),Ee=new Fu(P,be,ze,re),de=new Xu(P,be,ze,re),ze.programs=Ye.programs,h.capabilities=re,h.extensions=be,h.properties=ge,h.renderLists=b,h.shadowMap=Q,h.state=ye,h.info=ze}Me();const ue=new Pf(h,P);this.xr=ue,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const y=be.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=be.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(y){y!==void 0&&(U=y,this.setSize(q,B,!1))},this.getSize=function(y){return y.set(q,B)},this.setSize=function(y,I,H=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=y,B=I,t.width=Math.floor(y*U),t.height=Math.floor(I*U),H===!0&&(t.style.width=y+"px",t.style.height=I+"px"),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(q*U,B*U).floor()},this.setDrawingBufferSize=function(y,I,H){q=y,B=I,U=H,t.width=Math.floor(y*H),t.height=Math.floor(I*H),this.setViewport(0,0,y,I)},this.getCurrentViewport=function(y){return y.copy(N)},this.getViewport=function(y){return y.copy(Z)},this.setViewport=function(y,I,H,D){y.isVector4?Z.set(y.x,y.y,y.z,y.w):Z.set(y,I,H,D),ye.viewport(N.copy(Z).multiplyScalar(U).floor())},this.getScissor=function(y){return y.copy(j)},this.setScissor=function(y,I,H,D){y.isVector4?j.set(y.x,y.y,y.z,y.w):j.set(y,I,H,D),ye.scissor(v.copy(j).multiplyScalar(U).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(y){ye.setScissorTest(Y=y)},this.setOpaqueSort=function(y){F=y},this.setTransparentSort=function(y){V=y},this.getClearColor=function(y){return y.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(y=!0,I=!0,H=!0){let D=0;y&&(D|=P.COLOR_BUFFER_BIT),I&&(D|=P.DEPTH_BUFFER_BIT),H&&(D|=P.STENCIL_BUFFER_BIT),P.clear(D)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",Oe,!1),t.removeEventListener("webglcontextcreationerror",Ge,!1),b.dispose(),x.dispose(),ge.dispose(),it.dispose(),ot.dispose(),ke.dispose(),pe.dispose(),_e.dispose(),Ye.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",fe),ue.removeEventListener("sessionend",Ve),ne&&(ne.dispose(),ne=null),We.stop()};function me(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Oe(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const y=ze.autoReset,I=Q.enabled,H=Q.autoUpdate,D=Q.needsUpdate,X=Q.type;Me(),ze.autoReset=y,Q.enabled=I,Q.autoUpdate=H,Q.needsUpdate=D,Q.type=X}function Ge(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function $e(y){const I=y.target;I.removeEventListener("dispose",$e),C(I)}function C(y){G(y),ge.remove(y)}function G(y){const I=ge.get(y).programs;I!==void 0&&(I.forEach(function(H){Ye.releaseProgram(H)}),y.isShaderMaterial&&Ye.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,H,D,X,ve){I===null&&(I=ae);const Se=X.isMesh&&X.matrixWorld.determinant()<0,Te=Co(y,I,H,D,X);ye.setMaterial(D,Se);let Ce=H.index,De=1;D.wireframe===!0&&(Ce=et.getWireframeAttribute(H),De=2);const Ue=H.drawRange,Ne=H.attributes.position;let He=Ue.start*De,pt=(Ue.start+Ue.count)*De;ve!==null&&(He=Math.max(He,ve.start*De),pt=Math.min(pt,(ve.start+ve.count)*De)),Ce!==null?(He=Math.max(He,0),pt=Math.min(pt,Ce.count)):Ne!=null&&(He=Math.max(He,0),pt=Math.min(pt,Ne.count));const It=pt-He;if(It<0||It===1/0)return;pe.setup(X,D,Te,H,Ce);let gn,Je=Ee;if(Ce!==null&&(gn=st.get(Ce),Je=de,Je.setIndex(gn)),X.isMesh)D.wireframe===!0?(ye.setLineWidth(D.wireframeLinewidth*le()),Je.setMode(P.LINES)):Je.setMode(P.TRIANGLES);else if(X.isLine){let Be=D.linewidth;Be===void 0&&(Be=1),ye.setLineWidth(Be*le()),X.isLineSegments?Je.setMode(P.LINES):X.isLineLoop?Je.setMode(P.LINE_LOOP):Je.setMode(P.LINE_STRIP)}else X.isPoints?Je.setMode(P.POINTS):X.isSprite&&Je.setMode(P.TRIANGLES);if(X.isInstancedMesh)Je.renderInstances(He,It,X.count);else if(H.isInstancedBufferGeometry){const Be=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,cs=Math.min(H.instanceCount,Be);Je.renderInstances(He,It,cs)}else Je.render(He,It)},this.compile=function(y,I){function H(D,X,ve){D.transparent===!0&&D.side===vt&&D.forceSinglePass===!1?(D.side=St,D.needsUpdate=!0,bi(D,X,ve),D.side=mn,D.needsUpdate=!0,bi(D,X,ve),D.side=vt):bi(D,X,ve)}g=x.get(y),g.init(),p.push(g),y.traverseVisible(function(D){D.isLight&&D.layers.test(I.layers)&&(g.pushLight(D),D.castShadow&&g.pushShadow(D))}),g.setupLights(h.useLegacyLights),y.traverse(function(D){const X=D.material;if(X)if(Array.isArray(X))for(let ve=0;ve<X.length;ve++){const Se=X[ve];H(Se,y,D)}else H(X,y,D)}),p.pop(),g=null};let J=null;function he(y){J&&J(y)}function fe(){We.stop()}function Ve(){We.start()}const We=new po;We.setAnimationLoop(he),typeof self!="undefined"&&We.setContext(self),this.setAnimationLoop=function(y){J=y,ue.setAnimationLoop(y),y===null?We.stop():We.start()},ue.addEventListener("sessionstart",fe),ue.addEventListener("sessionend",Ve),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(I),I=ue.getCamera()),y.isScene===!0&&y.onBeforeRender(h,y,I,T),g=x.get(y,p.length),g.init(),p.push(g),k.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),te.setFromProjectionMatrix(k),xe=this.localClippingEnabled,K=z.init(this.clippingPlanes,xe),m=b.get(y,_.length),m.init(),_.push(m),ht(y,I,0,h.sortObjects),m.finish(),h.sortObjects===!0&&m.sort(F,V),K===!0&&z.beginShadows();const H=g.state.shadowsArray;if(Q.render(H,y,I),K===!0&&z.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(m,y),g.setupLights(h.useLegacyLights),I.isArrayCamera){const D=I.cameras;for(let X=0,ve=D.length;X<ve;X++){const Se=D[X];on(m,y,Se,Se.viewport)}}else on(m,y,I);T!==null&&(Ie.updateMultisampleRenderTarget(T),Ie.updateRenderTargetMipmap(T)),y.isScene===!0&&y.onAfterRender(h,y,I),pe.resetDefaultState(),A=-1,L=null,p.pop(),p.length>0?g=p[p.length-1]:g=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function ht(y,I,H,D){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)H=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLight)g.pushLight(y),y.castShadow&&g.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||te.intersectsSprite(y)){D&&$.setFromMatrixPosition(y.matrixWorld).applyMatrix4(k);const Se=ke.update(y),Te=y.material;Te.visible&&m.push(y,Se,Te,H,$.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||te.intersectsObject(y))){y.isSkinnedMesh&&y.skeleton.frame!==ze.render.frame&&(y.skeleton.update(),y.skeleton.frame=ze.render.frame);const Se=ke.update(y),Te=y.material;if(D&&(Se.boundingSphere===null&&Se.computeBoundingSphere(),$.copy(Se.boundingSphere.center).applyMatrix4(y.matrixWorld).applyMatrix4(k)),Array.isArray(Te)){const Ce=Se.groups;for(let De=0,Ue=Ce.length;De<Ue;De++){const Ne=Ce[De],He=Te[Ne.materialIndex];He&&He.visible&&m.push(y,Se,He,H,$.z,Ne)}}else Te.visible&&m.push(y,Se,Te,H,$.z,null)}}const ve=y.children;for(let Se=0,Te=ve.length;Se<Te;Se++)ht(ve[Se],I,H,D)}function on(y,I,H,D){const X=y.opaque,ve=y.transmissive,Se=y.transparent;g.setupLightsView(H),K===!0&&z.setGlobalState(h.clippingPlanes,H),ve.length>0&&Ke(X,ve,I,H),D&&ye.viewport(N.copy(D)),X.length>0&&Ct(X,I,H),ve.length>0&&Ct(ve,I,H),Se.length>0&&Ct(Se,I,H),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Ke(y,I,H,D){if(ne===null){const Te=re.isWebGL2;ne=new Vt(1024,1024,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")?vi:Ln,minFilter:_i,samples:Te&&o===!0?4:0})}const X=h.getRenderTarget();h.setRenderTarget(ne),h.clear();const ve=h.toneMapping;h.toneMapping=an,Ct(y,H,D),Ie.updateMultisampleRenderTarget(ne),Ie.updateRenderTargetMipmap(ne);let Se=!1;for(let Te=0,Ce=I.length;Te<Ce;Te++){const De=I[Te],Ue=De.object,Ne=De.geometry,He=De.material,pt=De.group;if(He.side===vt&&Ue.layers.test(D.layers)){const It=He.side;He.side=St,He.needsUpdate=!0,Wt(Ue,H,D,Ne,He,pt),He.side=It,He.needsUpdate=!0,Se=!0}}Se===!0&&(Ie.updateMultisampleRenderTarget(ne),Ie.updateRenderTargetMipmap(ne)),h.setRenderTarget(X),h.toneMapping=ve}function Ct(y,I,H){const D=I.isScene===!0?I.overrideMaterial:null;for(let X=0,ve=y.length;X<ve;X++){const Se=y[X],Te=Se.object,Ce=Se.geometry,De=D===null?Se.material:D,Ue=Se.group;Te.layers.test(H.layers)&&Wt(Te,I,H,Ce,De,Ue)}}function Wt(y,I,H,D,X,ve){y.onBeforeRender(h,I,H,D,X,ve),y.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),X.onBeforeRender(h,I,H,D,y,ve),X.transparent===!0&&X.side===vt&&X.forceSinglePass===!1?(X.side=St,X.needsUpdate=!0,h.renderBufferDirect(H,I,D,X,y,ve),X.side=mn,X.needsUpdate=!0,h.renderBufferDirect(H,I,D,X,y,ve),X.side=vt):h.renderBufferDirect(H,I,D,X,y,ve),y.onAfterRender(h,I,H,D,X,ve)}function bi(y,I,H){I.isScene!==!0&&(I=ae);const D=ge.get(y),X=g.state.lights,ve=g.state.shadowsArray,Se=X.state.version,Te=Ye.getParameters(y,X.state,ve,I,H),Ce=Ye.getProgramCacheKey(Te);let De=D.programs;D.environment=y.isMeshStandardMaterial?I.environment:null,D.fog=I.fog,D.envMap=(y.isMeshStandardMaterial?ot:it).get(y.envMap||D.environment),De===void 0&&(y.addEventListener("dispose",$e),De=new Map,D.programs=De);let Ue=De.get(Ce);if(Ue!==void 0){if(D.currentProgram===Ue&&D.lightsStateVersion===Se)return cr(y,Te),Ue}else Te.uniforms=Ye.getUniforms(y),y.onBuild(H,Te,h),y.onBeforeCompile(Te,h),Ue=Ye.acquireProgram(Te,Ce),De.set(Ce,Ue),D.uniforms=Te.uniforms;const Ne=D.uniforms;(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ne.clippingPlanes=z.uniform),cr(y,Te),D.needsLights=Lo(y),D.lightsStateVersion=Se,D.needsLights&&(Ne.ambientLightColor.value=X.state.ambient,Ne.lightProbe.value=X.state.probe,Ne.directionalLights.value=X.state.directional,Ne.directionalLightShadows.value=X.state.directionalShadow,Ne.spotLights.value=X.state.spot,Ne.spotLightShadows.value=X.state.spotShadow,Ne.rectAreaLights.value=X.state.rectArea,Ne.ltc_1.value=X.state.rectAreaLTC1,Ne.ltc_2.value=X.state.rectAreaLTC2,Ne.pointLights.value=X.state.point,Ne.pointLightShadows.value=X.state.pointShadow,Ne.hemisphereLights.value=X.state.hemi,Ne.directionalShadowMap.value=X.state.directionalShadowMap,Ne.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ne.spotShadowMap.value=X.state.spotShadowMap,Ne.spotLightMatrix.value=X.state.spotLightMatrix,Ne.spotLightMap.value=X.state.spotLightMap,Ne.pointShadowMap.value=X.state.pointShadowMap,Ne.pointShadowMatrix.value=X.state.pointShadowMatrix);const He=Ue.getUniforms(),pt=Ki.seqWithValue(He.seq,Ne);return D.currentProgram=Ue,D.uniformsList=pt,Ue}function cr(y,I){const H=ge.get(y);H.outputColorSpace=I.outputColorSpace,H.instancing=I.instancing,H.skinning=I.skinning,H.morphTargets=I.morphTargets,H.morphNormals=I.morphNormals,H.morphColors=I.morphColors,H.morphTargetsCount=I.morphTargetsCount,H.numClippingPlanes=I.numClippingPlanes,H.numIntersection=I.numClipIntersection,H.vertexAlphas=I.vertexAlphas,H.vertexTangents=I.vertexTangents,H.toneMapping=I.toneMapping}function Co(y,I,H,D,X){I.isScene!==!0&&(I=ae),Ie.resetTextureUnits();const ve=I.fog,Se=D.isMeshStandardMaterial?I.environment:null,Te=T===null?h.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Kt,Ce=(D.isMeshStandardMaterial?ot:it).get(D.envMap||Se),De=D.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ue=!!D.normalMap&&!!H.attributes.tangent,Ne=!!H.morphAttributes.position,He=!!H.morphAttributes.normal,pt=!!H.morphAttributes.color,It=D.toneMapped?h.toneMapping:an,gn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Je=gn!==void 0?gn.length:0,Be=ge.get(D),cs=g.state.lights;if(K===!0&&(xe===!0||y!==L)){const yt=y===L&&D.id===A;z.setState(D,y,yt)}let rt=!1;D.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==cs.state.version||Be.outputColorSpace!==Te||X.isInstancedMesh&&Be.instancing===!1||!X.isInstancedMesh&&Be.instancing===!0||X.isSkinnedMesh&&Be.skinning===!1||!X.isSkinnedMesh&&Be.skinning===!0||Be.envMap!==Ce||D.fog===!0&&Be.fog!==ve||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==z.numPlanes||Be.numIntersection!==z.numIntersection)||Be.vertexAlphas!==De||Be.vertexTangents!==Ue||Be.morphTargets!==Ne||Be.morphNormals!==He||Be.morphColors!==pt||Be.toneMapping!==It||re.isWebGL2===!0&&Be.morphTargetsCount!==Je)&&(rt=!0):(rt=!0,Be.__version=D.version);let _n=Be.currentProgram;rt===!0&&(_n=bi(D,I,X));let hr=!1,li=!1,hs=!1;const mt=_n.getUniforms(),vn=Be.uniforms;if(ye.useProgram(_n.program)&&(hr=!0,li=!0,hs=!0),D.id!==A&&(A=D.id,li=!0),hr||L!==y){if(mt.setValue(P,"projectionMatrix",y.projectionMatrix),re.logarithmicDepthBuffer&&mt.setValue(P,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),L!==y&&(L=y,li=!0,hs=!0),D.isShaderMaterial||D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshStandardMaterial||D.envMap){const yt=mt.map.cameraPosition;yt!==void 0&&yt.setValue(P,$.setFromMatrixPosition(y.matrixWorld))}(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&mt.setValue(P,"isOrthographic",y.isOrthographicCamera===!0),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial||D.isShadowMaterial||X.isSkinnedMesh)&&mt.setValue(P,"viewMatrix",y.matrixWorldInverse)}if(X.isSkinnedMesh){mt.setOptional(P,X,"bindMatrix"),mt.setOptional(P,X,"bindMatrixInverse");const yt=X.skeleton;yt&&(re.floatVertexTextures?(yt.boneTexture===null&&yt.computeBoneTexture(),mt.setValue(P,"boneTexture",yt.boneTexture,Ie),mt.setValue(P,"boneTextureSize",yt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const us=H.morphAttributes;if((us.position!==void 0||us.normal!==void 0||us.color!==void 0&&re.isWebGL2===!0)&&oe.update(X,H,_n),(li||Be.receiveShadow!==X.receiveShadow)&&(Be.receiveShadow=X.receiveShadow,mt.setValue(P,"receiveShadow",X.receiveShadow)),D.isMeshGouraudMaterial&&D.envMap!==null&&(vn.envMap.value=Ce,vn.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),li&&(mt.setValue(P,"toneMappingExposure",h.toneMappingExposure),Be.needsLights&&Po(vn,hs),ve&&D.fog===!0&&xt.refreshFogUniforms(vn,ve),xt.refreshMaterialUniforms(vn,D,U,B,ne),Ki.upload(P,Be.uniformsList,vn,Ie)),D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(Ki.upload(P,Be.uniformsList,vn,Ie),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&mt.setValue(P,"center",X.center),mt.setValue(P,"modelViewMatrix",X.modelViewMatrix),mt.setValue(P,"normalMatrix",X.normalMatrix),mt.setValue(P,"modelMatrix",X.matrixWorld),D.isShaderMaterial||D.isRawShaderMaterial){const yt=D.uniformsGroups;for(let ds=0,Do=yt.length;ds<Do;ds++)if(re.isWebGL2){const ur=yt[ds];_e.update(ur,_n),_e.bind(ur,_n)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return _n}function Po(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function Lo(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(y,I,H){ge.get(y.texture).__webglTexture=I,ge.get(y.depthTexture).__webglTexture=H;const D=ge.get(y);D.__hasExternalTextures=!0,D.__hasExternalTextures&&(D.__autoAllocateDepthBuffer=H===void 0,D.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),D.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,I){const H=ge.get(y);H.__webglFramebuffer=I,H.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(y,I=0,H=0){T=y,M=I,E=H;let D=!0,X=null,ve=!1,Se=!1;if(y){const Ce=ge.get(y);Ce.__useDefaultFramebuffer!==void 0?(ye.bindFramebuffer(P.FRAMEBUFFER,null),D=!1):Ce.__webglFramebuffer===void 0?Ie.setupRenderTarget(y):Ce.__hasExternalTextures&&Ie.rebindTextures(y,ge.get(y.texture).__webglTexture,ge.get(y.depthTexture).__webglTexture);const De=y.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Se=!0);const Ue=ge.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(X=Ue[I],ve=!0):re.isWebGL2&&y.samples>0&&Ie.useMultisampledRTT(y)===!1?X=ge.get(y).__webglMultisampledFramebuffer:X=Ue,N.copy(y.viewport),v.copy(y.scissor),w=y.scissorTest}else N.copy(Z).multiplyScalar(U).floor(),v.copy(j).multiplyScalar(U).floor(),w=Y;if(ye.bindFramebuffer(P.FRAMEBUFFER,X)&&re.drawBuffers&&D&&ye.drawBuffers(y,X),ye.viewport(N),ye.scissor(v),ye.setScissorTest(w),ve){const Ce=ge.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+I,Ce.__webglTexture,H)}else if(Se){const Ce=ge.get(y.texture),De=I||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ce.__webglTexture,H||0,De)}A=-1},this.readRenderTargetPixels=function(y,I,H,D,X,ve,Se){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=ge.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Se!==void 0&&(Te=Te[Se]),Te){ye.bindFramebuffer(P.FRAMEBUFFER,Te);try{const Ce=y.texture,De=Ce.format,Ue=Ce.type;if(De!==Ht&&W.convert(De)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ne=Ue===vi&&(be.has("EXT_color_buffer_half_float")||re.isWebGL2&&be.has("EXT_color_buffer_float"));if(Ue!==Ln&&W.convert(Ue)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ue===An&&(re.isWebGL2||be.has("OES_texture_float")||be.has("WEBGL_color_buffer_float")))&&!Ne){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-D&&H>=0&&H<=y.height-X&&P.readPixels(I,H,D,X,W.convert(De),W.convert(Ue),ve)}finally{const Ce=T!==null?ge.get(T).__webglFramebuffer:null;ye.bindFramebuffer(P.FRAMEBUFFER,Ce)}}},this.copyFramebufferToTexture=function(y,I,H=0){const D=Math.pow(2,-H),X=Math.floor(I.image.width*D),ve=Math.floor(I.image.height*D);Ie.setTexture2D(I,0),P.copyTexSubImage2D(P.TEXTURE_2D,H,0,0,y.x,y.y,X,ve),ye.unbindTexture()},this.copyTextureToTexture=function(y,I,H,D=0){const X=I.image.width,ve=I.image.height,Se=W.convert(H.format),Te=W.convert(H.type);Ie.setTexture2D(H,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,H.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,H.unpackAlignment),I.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,D,y.x,y.y,X,ve,Se,Te,I.image.data):I.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,D,y.x,y.y,I.mipmaps[0].width,I.mipmaps[0].height,Se,I.mipmaps[0].data):P.texSubImage2D(P.TEXTURE_2D,D,y.x,y.y,Se,Te,I.image),D===0&&H.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),ye.unbindTexture()},this.copyTextureToTexture3D=function(y,I,H,D,X=0){if(h.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ve=y.max.x-y.min.x+1,Se=y.max.y-y.min.y+1,Te=y.max.z-y.min.z+1,Ce=W.convert(D.format),De=W.convert(D.type);let Ue;if(D.isData3DTexture)Ie.setTexture3D(D,0),Ue=P.TEXTURE_3D;else if(D.isDataArrayTexture)Ie.setTexture2DArray(D,0),Ue=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,D.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,D.unpackAlignment);const Ne=P.getParameter(P.UNPACK_ROW_LENGTH),He=P.getParameter(P.UNPACK_IMAGE_HEIGHT),pt=P.getParameter(P.UNPACK_SKIP_PIXELS),It=P.getParameter(P.UNPACK_SKIP_ROWS),gn=P.getParameter(P.UNPACK_SKIP_IMAGES),Je=H.isCompressedTexture?H.mipmaps[0]:H.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,Je.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Je.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,y.min.x),P.pixelStorei(P.UNPACK_SKIP_ROWS,y.min.y),P.pixelStorei(P.UNPACK_SKIP_IMAGES,y.min.z),H.isDataTexture||H.isData3DTexture?P.texSubImage3D(Ue,X,I.x,I.y,I.z,ve,Se,Te,Ce,De,Je.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),P.compressedTexSubImage3D(Ue,X,I.x,I.y,I.z,ve,Se,Te,Ce,Je.data)):P.texSubImage3D(Ue,X,I.x,I.y,I.z,ve,Se,Te,Ce,De,Je),P.pixelStorei(P.UNPACK_ROW_LENGTH,Ne),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,He),P.pixelStorei(P.UNPACK_SKIP_PIXELS,pt),P.pixelStorei(P.UNPACK_SKIP_ROWS,It),P.pixelStorei(P.UNPACK_SKIP_IMAGES,gn),X===0&&D.generateMipmaps&&P.generateMipmap(Ue),ye.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?Ie.setTextureCube(y,0):y.isData3DTexture?Ie.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Ie.setTexture2DArray(y,0):Ie.setTexture2D(y,0),ye.unbindTexture()},this.resetState=function(){M=0,E=0,T=null,ye.reset(),pe.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Re?Cn:Qa}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Cn?Re:Kt}}class If extends Mo{}If.prototype.isWebGL1Renderer=!0;class ns{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new we(e),this.density=t}clone(){return new ns(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}class Nf extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class So extends Dn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new we(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Aa=new R,Ra=new R,Ca=new je,Vs=new ir,qi=new yi;class Ff extends ft{constructor(e=new ct,t=new So){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Aa.fromBufferAttribute(t,s-1),Ra.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Aa.distanceTo(Ra);e.setAttribute("lineDistance",new Xe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qi.copy(n.boundingSphere),qi.applyMatrix4(s),qi.radius+=r,e.ray.intersectsSphere(qi)===!1)return;Ca.copy(s).invert(),Vs.copy(e.ray).applyMatrix4(Ca);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new R,u=new R,d=new R,f=new R,m=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const h=Math.max(0,a.start),S=Math.min(g.count,a.start+a.count);for(let M=h,E=S-1;M<E;M+=m){const T=g.getX(M),A=g.getX(M+1);if(c.fromBufferAttribute(p,T),u.fromBufferAttribute(p,A),Vs.distanceSqToSegment(c,u,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const N=e.ray.origin.distanceTo(f);N<e.near||N>e.far||t.push({distance:N,point:d.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const h=Math.max(0,a.start),S=Math.min(p.count,a.start+a.count);for(let M=h,E=S-1;M<E;M+=m){if(c.fromBufferAttribute(p,M),u.fromBufferAttribute(p,M+1),Vs.distanceSqToSegment(c,u,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(f);A<e.near||A>e.far||t.push({distance:A,point:d.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}class yo extends Dn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Pa=new je,tr=new ir,Yi=new yi,ji=new R;class Of extends ft{constructor(e=new ct,t=new yo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yi.copy(n.boundingSphere),Yi.applyMatrix4(s),Yi.radius+=r,e.ray.intersectsSphere(Yi)===!1)return;Pa.copy(s).invert(),tr.copy(e.ray).applyMatrix4(Pa);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=f,_=m;g<_;g++){const p=c.getX(g);ji.fromBufferAttribute(d,p),La(ji,p,l,s,e,t,this)}}else{const f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let g=f,_=m;g<_;g++)ji.fromBufferAttribute(d,g),La(ji,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function La(i,e,t,n,s,r,a){const o=tr.distanceSqToPoint(i);if(o<t){const l=new R;tr.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class Tn extends ct{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],f=[],m=[];let g=0;const _=[],p=n/2;let h=0;S(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new Xe(d,3)),this.setAttribute("normal",new Xe(f,3)),this.setAttribute("uv",new Xe(m,2));function S(){const E=new R,T=new R;let A=0;const L=(t-e)/n;for(let N=0;N<=r;N++){const v=[],w=N/r,q=w*(t-e)+e;for(let B=0;B<=s;B++){const U=B/s,F=U*l+o,V=Math.sin(F),Z=Math.cos(F);T.x=q*V,T.y=-w*n+p,T.z=q*Z,d.push(T.x,T.y,T.z),E.set(V,L,Z).normalize(),f.push(E.x,E.y,E.z),m.push(U,1-w),v.push(g++)}_.push(v)}for(let N=0;N<s;N++)for(let v=0;v<r;v++){const w=_[v][N],q=_[v+1][N],B=_[v+1][N+1],U=_[v][N+1];u.push(w,q,U),u.push(q,B,U),A+=6}c.addGroup(h,A,0),h+=A}function M(E){const T=g,A=new se,L=new R;let N=0;const v=E===!0?e:t,w=E===!0?1:-1;for(let B=1;B<=s;B++)d.push(0,p*w,0),f.push(0,w,0),m.push(.5,.5),g++;const q=g;for(let B=0;B<=s;B++){const F=B/s*l+o,V=Math.cos(F),Z=Math.sin(F);L.x=v*Z,L.y=p*w,L.z=v*V,d.push(L.x,L.y,L.z),f.push(0,w,0),A.x=V*.5+.5,A.y=Z*.5*w+.5,m.push(A.x,A.y),g++}for(let B=0;B<s;B++){const U=T+B,F=q+B;E===!0?u.push(F,F+1,U):u.push(F+1,F,U),N+=3}c.addGroup(h,N,E===!0?1:2),h+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ar extends ct{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new Xe(r,3)),this.setAttribute("normal",new Xe(r.slice(),3)),this.setAttribute("uv",new Xe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const M=new R,E=new R,T=new R;for(let A=0;A<t.length;A+=3)m(t[A+0],M),m(t[A+1],E),m(t[A+2],T),l(M,E,T,S)}function l(S,M,E,T){const A=T+1,L=[];for(let N=0;N<=A;N++){L[N]=[];const v=S.clone().lerp(E,N/A),w=M.clone().lerp(E,N/A),q=A-N;for(let B=0;B<=q;B++)B===0&&N===A?L[N][B]=v:L[N][B]=v.clone().lerp(w,B/q)}for(let N=0;N<A;N++)for(let v=0;v<2*(A-N)-1;v++){const w=Math.floor(v/2);v%2===0?(f(L[N][w+1]),f(L[N+1][w]),f(L[N][w])):(f(L[N][w+1]),f(L[N+1][w+1]),f(L[N+1][w]))}}function c(S){const M=new R;for(let E=0;E<r.length;E+=3)M.x=r[E+0],M.y=r[E+1],M.z=r[E+2],M.normalize().multiplyScalar(S),r[E+0]=M.x,r[E+1]=M.y,r[E+2]=M.z}function u(){const S=new R;for(let M=0;M<r.length;M+=3){S.x=r[M+0],S.y=r[M+1],S.z=r[M+2];const E=p(S)/2/Math.PI+.5,T=h(S)/Math.PI+.5;a.push(E,1-T)}g(),d()}function d(){for(let S=0;S<a.length;S+=6){const M=a[S+0],E=a[S+2],T=a[S+4],A=Math.max(M,E,T),L=Math.min(M,E,T);A>.9&&L<.1&&(M<.2&&(a[S+0]+=1),E<.2&&(a[S+2]+=1),T<.2&&(a[S+4]+=1))}}function f(S){r.push(S.x,S.y,S.z)}function m(S,M){const E=S*3;M.x=e[E+0],M.y=e[E+1],M.z=e[E+2]}function g(){const S=new R,M=new R,E=new R,T=new R,A=new se,L=new se,N=new se;for(let v=0,w=0;v<r.length;v+=9,w+=6){S.set(r[v+0],r[v+1],r[v+2]),M.set(r[v+3],r[v+4],r[v+5]),E.set(r[v+6],r[v+7],r[v+8]),A.set(a[w+0],a[w+1]),L.set(a[w+2],a[w+3]),N.set(a[w+4],a[w+5]),T.copy(S).add(M).add(E).divideScalar(3);const q=p(T);_(A,w+0,S,q),_(L,w+2,M,q),_(N,w+4,E,q)}}function _(S,M,E,T){T<0&&S.x===1&&(a[M]=S.x-1),E.x===0&&E.z===0&&(a[M]=T/2/Math.PI+.5)}function p(S){return Math.atan2(S.z,-S.x)}function h(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ar(e.vertices,e.indices,e.radius,e.details)}}class or extends ar{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new or(e.radius,e.detail)}}class is extends ct{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let d=e;const f=(t-e)/s,m=new R,g=new se;for(let _=0;_<=s;_++){for(let p=0;p<=n;p++){const h=r+p/n*a;m.x=d*Math.cos(h),m.y=d*Math.sin(h),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/t+1)/2,g.y=(m.y/t+1)/2,u.push(g.x,g.y)}d+=f}for(let _=0;_<s;_++){const p=_*(n+1);for(let h=0;h<n;h++){const S=h+p,M=S,E=S+n+1,T=S+n+2,A=S+1;o.push(M,E,A),o.push(E,T,A)}}this.setIndex(o),this.setAttribute("position",new Xe(l,3)),this.setAttribute("normal",new Xe(c,3)),this.setAttribute("uv",new Xe(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new is(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ut extends ct{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new R,f=new R,m=[],g=[],_=[],p=[];for(let h=0;h<=n;h++){const S=[],M=h/n;let E=0;h===0&&a===0?E=.5/t:h===n&&l===Math.PI&&(E=-.5/t);for(let T=0;T<=t;T++){const A=T/t;d.x=-e*Math.cos(s+A*r)*Math.sin(a+M*o),d.y=e*Math.cos(a+M*o),d.z=e*Math.sin(s+A*r)*Math.sin(a+M*o),g.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),p.push(A+E,1-M),S.push(c++)}u.push(S)}for(let h=0;h<n;h++)for(let S=0;S<t;S++){const M=u[h][S+1],E=u[h][S],T=u[h+1][S],A=u[h+1][S+1];(h!==0||a>0)&&m.push(M,E,A),(h!==n-1||l<Math.PI)&&m.push(E,T,A)}this.setIndex(m),this.setAttribute("position",new Xe(g,3)),this.setAttribute("normal",new Xe(_,3)),this.setAttribute("uv",new Xe(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ut(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ss extends ct{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],u=new R,d=new R,f=new R;for(let m=0;m<=n;m++)for(let g=0;g<=s;g++){const _=g/s*r,p=m/n*Math.PI*2;d.x=(e+t*Math.cos(p))*Math.cos(_),d.y=(e+t*Math.cos(p))*Math.sin(_),d.z=t*Math.sin(p),o.push(d.x,d.y,d.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),f.subVectors(d,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=s;g++){const _=(s+1)*m+g-1,p=(s+1)*(m-1)+g-1,h=(s+1)*(m-1)+g,S=(s+1)*m+g;a.push(_,p,S),a.push(p,h,S)}this.setIndex(a),this.setAttribute("position",new Xe(o,3)),this.setAttribute("normal",new Xe(l,3)),this.setAttribute("uv",new Xe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ss(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class zt extends Dn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=eo,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Eo extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ws=new je,Da=new R,Ua=new R;class Bf{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sr,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Da.setFromMatrixPosition(e.matrixWorld),t.position.copy(Da),Ua.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ua),t.updateMatrixWorld(),Ws.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ws),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ws)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ia=new je,fi=new R,Xs=new R;class zf extends Bf{constructor(){super(new wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new se(4,2),this._viewportCount=6,this._viewports=[new qe(2,1,1,1),new qe(0,1,1,1),new qe(3,1,1,1),new qe(1,1,1,1),new qe(3,0,1,1),new qe(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),fi.setFromMatrixPosition(e.matrixWorld),n.position.copy(fi),Xs.copy(n.position),Xs.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Xs),n.updateMatrixWorld(),s.makeTranslation(-fi.x,-fi.y,-fi.z),Ia.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ia)}}class Na extends Eo{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new zf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class kf extends Eo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class bo{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Fa(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Fa();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Fa(){return(typeof performance=="undefined"?Date:performance).now()}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nr}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nr);const To={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class Ei{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Gf=new mo(-1,1,1,-1,0,1),lr=new ct;lr.setAttribute("position",new Xe([-1,3,0,-1,-1,0,3,-1,0],3));lr.setAttribute("uv",new Xe([0,2,0,0,2,0],2));class wo{constructor(e){this._mesh=new Le(lr,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Gf)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Hf extends Ei{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof At?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ts.clone(e.uniforms),this.material=new At({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new wo(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Oa extends Ei{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class Vf extends Ei{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Wf{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new se);this._width=n.width,this._height=n.height,t=new Vt(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Hf(To),this.clock=new bo}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Oa!==void 0&&(a instanceof Oa?n=!0:a instanceof Vf&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new se);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Xf extends Ei{constructor(e,t,n,s,r){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r!==void 0?r:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new we}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==void 0&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),r=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,r),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=a),e.autoClear=s}}const qf={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new we(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class si extends Ei{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new se(e.x,e.y):new se(256,256),this.clearColor=new we(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Vt(r,a),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const f=new Vt(r,a);f.texture.name="UnrealBloomPass.h"+d,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const m=new Vt(r,a);m.texture.name="UnrealBloomPass.v"+d,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),a=Math.round(a/2)}const o=qf;this.highPassUniforms=ts.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new At({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.texSize.value=new se(r,a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=To;this.copyUniforms=ts.clone(u.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new At({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Qi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new we,this.oldClearAlpha=1,this.basic=new Ze,this.fsQuad=new wo(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.materialCopy.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.texSize.value=new se(n,s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=si.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=si.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){return new At({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new se(.5,.5)},direction:{value:new se(.5,.5)}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}
				void main() {
					vec2 invSize = 1.0 / texSize;
					float fSigma = float(SIGMA);
					float weightSum = gaussianPdf(0.0, fSigma);
					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianPdf(x, fSigma);
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new At({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}si.BlurDirectionX=new se(1,0);si.BlurDirectionY=new se(0,1);const Ba=[["###################","#P....#.....#....E#","#.###.#.###.#.###.#","#o#...#...#.#...#o#","#.#.#####.#.###.#.#","#.#.....#.#.....#.#","#.#####.#.#####.#.#","#.....#...#.....#.#","#####.###.###.###.#","#.....#..E..#.....#","#.###.#.###.#.###.#","#o..#...#G#...#..o#","###.###.#.#.###.###","#.....#.#.#.#.....#","#.###.#.#.#.#.###.#","#E....#...#...#...#","###################"],["###################","#P..#.....#.....#E#","#.#.#.###.#.###.#.#","#o#...#...#...#...#","#.###.#.#####.###.#","#..o..#...#...#..o#","###.#####.#.###.#.#","#...#.....#.....#.#","#.#.#.###G###.###.#","#.#...#..E..#.....#","#.#####.###.#####.#","#..o..#.#.#..o..#.#","#.###.#.#.#.###.#.#","#o#...#...#...#.#o#","#.#.#####.#.###.#.#","#E#.......#.....#.#","###################"],["###################","#P....#...#...#..E#","#.###.#.#.#.#.#.#.#","#o....#.#...#.#...#","#.#####.#####.###.#","#..o..#..o..#..o..#","#.###.#.###.#.###.#","#.#...#.#G#.#...#.#","#.#.###.#.#.###.#.#","#...#...E...#.....#","###.#.#####.#.###.#","#.o.#.#...#.#...#.o#","#.###.#.#.#.###.#.#","#o....#.#...#...#o#","#.#####.#####.###.#","#E...............##","###################"],["###################","#P....#.....#....E#","#.###.#.###.#.###.#","#...#...#...#...#.#","###.###.#.#####.#.#","#o....#.#.....#.#o#","#.###.#.#####.#.#.#","#.#...#...#...#...#","#.#.#####.#.#####.#","#.o.#..E..G..#.o..#","###.#.#####.###.#.#","#...#.....#.....#.#","#.#####.#.#####.#.#","#..o..#.#..o..#.#.#","#.###.#.#####.#.#.#","#E....#.......#...#","###################"],["###################","#P....#.....#....E#","#.###.#.###.#.###.#","#o#...#.#.#.#...#o#","#.#.###.#.#.###.#.#","#.#.....#.#.....#.#","#.#####.#.#.#####.#","#.....#...#...#...#","#####.#######.#.###","#.....#..E..#.#...#","#.###.#.###.#.###.#","#...#...#G#...#...#","#.#.###.#.#.###.#.#","#.#.....#.#.....#.#","#.#####.#.#.#####.#","#E......#.........#","###################"]],ce=2.4,Yf=6.4,jf=4.1,$f=15,za=4.2,Kf=500,ka=1500,Ga=6,Zf=1/30,Jf=6.2,Qf=23,Ha=12,qs=5,ep=920,ri={highScore:"neon-maze-runner-high-score",settings:"neon-maze-runner-settings",themes:"neon-maze-runner-themes",campaign:"neon-maze-runner-campaign-progress"},Va={musicVolume:.45,sfxVolume:.8,bloomEnabled:!0,cameraShake:!0,quality:"high"},tp=[{name:"Downtown Dusk",floorA:"#0d0913",floorB:"#241128",wall:"#42b9ff",wallGlow:"#f07ab1",player:"#ffe56f",pellet:"#8be7ff",power:"#ff7af6",background:"#09050d",accent:"#cc6d74",haze:"#1a0d18",hazeDensity:.034,ambient:"#c090ad",ambientIntensity:.38,skyLight:"#b55d8f",skyLightIntensity:11},{name:"Subway Night",floorA:"#08111b",floorB:"#102436",wall:"#2aa7da",wallGlow:"#87d8ff",player:"#ffe866",pellet:"#9fdfff",power:"#a678ff",background:"#03060c",accent:"#6ab7ff",haze:"#07131f",hazeDensity:.04,ambient:"#9ac7ff",ambientIntensity:.46,skyLight:"#5cc7ff",skyLightIntensity:14},{name:"Rooftop Sunrise",floorA:"#221208",floorB:"#5a2a13",wall:"#ff9140",wallGlow:"#ffd99c",player:"#faff73",pellet:"#ffd37b",power:"#ff72ad",background:"#2a1209",accent:"#ffb56b",haze:"#4b1e0f",hazeDensity:.02,ambient:"#ffe1b8",ambientIntensity:.72,skyLight:"#ffb05a",skyLightIntensity:22},{name:"Reactor District",floorA:"#07130d",floorB:"#173524",wall:"#63ff9a",wallGlow:"#b7ffd0",player:"#ffe166",pellet:"#9effc8",power:"#7efcff",background:"#030a06",accent:"#6effb1",haze:"#0b1611",hazeDensity:.034,ambient:"#baffcf",ambientIntensity:.52,skyLight:"#6fff9e",skyLightIntensity:17},{name:"Vault Core",floorA:"#100b18",floorB:"#25153a",wall:"#8664ff",wallGlow:"#ffd67f",player:"#ffe978",pellet:"#d8c6ff",power:"#ff86d6",background:"#06040c",accent:"#c59cff",haze:"#120a18",hazeDensity:.048,ambient:"#cab6ff",ambientIntensity:.48,skyLight:"#ffd27a",skyLightIntensity:24}],Wa=[{type:"hunter",color:"#ff4d6d",glow:"#ff94a8",name:"Hunter"},{type:"ambusher",color:"#8c7bff",glow:"#c4c2ff",name:"Ambusher"},{type:"roamer",color:"#29f0b4",glow:"#92ffd5",name:"Roamer"},{type:"guardian",color:"#ffa62b",glow:"#ffd18c",name:"Guardian"}],np={low:.75,medium:.9,high:1},Ao=(i,e,t)=>Math.min(t,Math.max(e,i)),ip=(i,e,t)=>i+(e-i)*t,Zi=(i,e,t,n)=>ip(i,e,1-Math.exp(-t*n)),fn=i=>`${i.x},${i.y}`,qt=(i,e)=>{const t=i.x-e.x,n=i.y-e.y;return t*t+n*n},lt=(i,e)=>new R((i+.5)*ce,0,(e+.5)*ce),sp=(i,e)=>{let t=e-i;for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;return t},rp=i=>{let e=i>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)};class rs{static load(e){var f,m;const t=Math.max(0,Math.min(Ba.length-1,e));let n=[...Ba[t]];const s=rp((e+1)*9137);n=n.map(g=>s()>.92?g.split("").reverse().join(""):g);const r=n.length,a=(m=(f=n[0])==null?void 0:f.length)!=null?m:0,o=[],l=[],c=[],u=[];let d=new se(1,1);return n.forEach((g,_)=>{const p=[];g.split("").forEach((h,S)=>{switch(h){case"#":p.push("wall");break;case"P":p.push("path"),d=new se(S,_);break;case"E":p.push("path"),c.push(new se(S,_));break;case"G":p.push("path"),u.push(new se(S,_));break;case".":p.push("path"),l.push({position:new se(S,_),kind:"pellet"});break;case"o":p.push("path"),l.push({position:new se(S,_),kind:"power"}),u.push(new se(S,_));break;default:p.push("path");break}}),o.push(p)}),{width:a,height:r,tiles:o,playerSpawn:d,enemySpawns:c,guardianTargets:u,collectibles:l}}static isWall(e,t,n){return t<0||n<0||t>=e.width||n>=e.height?!0:e.tiles[n][t]==="wall"}}const Xa=[new se(1,0),new se(-1,0),new se(0,1),new se(0,-1)];class Ji{static findNextStep(e,t,n){if(t.equals(n))return t.clone();const s=[t.clone()],r=new Set([fn(t)]),a=new Map;for(;s.length>0;){s.sort((u,d)=>qt(u,n)-qt(d,n));const c=s.shift();if(!c||c.equals(n))break;for(const u of Xa){const d=c.clone().add(u),f=fn(d);r.has(f)||rs.isWall(e,d.x,d.y)||(r.add(f),a.set(f,c.clone()),s.push(d))}}const o=fn(n);if(!a.has(o))return t.clone();let l=n.clone();for(;;){const c=a.get(fn(l));if(!c)return t.clone();if(c.equals(t))return l;l=c}}static getAvailableNeighbors(e,t){return Xa.map(n=>t.clone().add(n)).filter(n=>!rs.isWall(e,n.x,n.y))}}class ap{constructor(){O(this,"group",new Dt);O(this,"enemies",[])}build(e){this.clear();for(const t of e){const n=new Dt,s=new Le(new Ut(.68,20,20),new Ze({color:t.color}));s.position.y=.68;const r=new Le(new Ut(.09,8,8),new Ze({color:"#ffffff"})),a=new Le(new Ut(.09,8,8),new Ze({color:"#ffffff"}));r.position.set(-.18,.82,.48),a.position.set(.18,.82,.48),n.add(s,r,a),n.position.copy(lt(t.tileX,t.tileY)),this.group.add(n),this.enemies.push({state:t,group:n,body:s,eyeLeft:r,eyeRight:a,progress:1,fromTile:new se(t.tileX,t.tileY),toTile:new se(t.tileX,t.tileY)})}}getStates(){return this.enemies.map(e=>e.state)}getCollisionTargets(){return this.enemies.map(e=>({...e.state,worldX:e.group.position.x,worldZ:e.group.position.z}))}resetPositions(){for(const e of this.enemies)e.state.tileX=e.state.spawnX,e.state.tileY=e.state.spawnY,e.state.targetX=e.state.spawnX,e.state.targetY=e.state.spawnY,e.state.mode="patrol",e.state.modeTimer=1.2,e.state.stunTimer=0,e.state.speedBoostTimer=0,e.progress=1,e.fromTile.set(e.state.tileX,e.state.tileY),e.toTile.set(e.state.tileX,e.state.tileY),e.group.position.copy(lt(e.state.tileX,e.state.tileY)),e.body.material.color.set(e.state.color)}setFrightened(e){for(const t of this.enemies)t.state.mode==="defeated"||t.state.mode==="respawning"||(t.state.mode=e?"frightened":"chase",t.body.material.color.set(e?"#8ec5ff":t.state.color))}defeatEnemy(e){const t=this.enemies.find(n=>n.state.id===e);!t||(t.state.mode="defeated",t.state.modeTimer=Jf,t.state.stunTimer=0,t.body.material.color.set("#ffffff"))}stunEnemy(e,t){const n=this.enemies.find(s=>s.state.id===e);!n||n.state.mode==="defeated"||n.state.mode==="respawning"||(n.state.stunTimer=Math.max(n.state.stunTimer,t),n.body.material.color.set("#d6fbff"))}getStateById(e){var t,n;return(n=(t=this.enemies.find(s=>s.state.id===e))==null?void 0:t.state)!=null?n:null}update(e,t,n,s,r,a,o,l,c){for(const u of this.enemies)this.updateEnemy(u,e,t,n,s,r,a,o,l,c)}clear(){for(const e of this.enemies)this.group.remove(e.group),e.body.geometry.dispose(),e.body.material.dispose(),e.eyeLeft.geometry.dispose(),e.eyeLeft.material.dispose(),e.eyeRight.geometry.dispose(),e.eyeRight.material.dispose();this.enemies.length=0}updateEnemy(e,t,n,s,r,a,o,l,c,u){if(e.state.mode==="respawning"){e.state.modeTimer-=t,e.state.modeTimer<=0&&(e.state.mode=o?"frightened":"chase",e.state.tileX=e.state.spawnX,e.state.tileY=e.state.spawnY,e.fromTile.set(e.state.spawnX,e.state.spawnY),e.toTile.set(e.state.spawnX,e.state.spawnY),e.group.position.copy(lt(e.state.spawnX,e.state.spawnY)));return}if(e.state.mode==="defeated"){e.state.modeTimer-=t,e.group.position.lerp(lt(e.state.spawnX,e.state.spawnY),Math.min(1,t*4.5)),e.state.modeTimer<=0&&(e.state.mode="respawning",e.state.modeTimer=.9);return}if(e.state.stunTimer=Math.max(0,e.state.stunTimer-t),e.state.speedBoostTimer=Math.max(0,e.state.speedBoostTimer-t),e.state.stunTimer>0){e.body.material.color.set("#d6fbff"),e.body.position.y=.68+Math.sin(performance.now()*.02)*.04;return}if(e.progress>=1){e.fromTile.set(e.toTile.x,e.toTile.y),e.state.tileX=e.fromTile.x,e.state.tileY=e.fromTile.y;const g=new se(e.state.tileX,e.state.tileY),_=o?this.chooseFleeTarget(n,g,s):this.chooseTarget(e.state.type,n,s,r,g,a),p=Ji.findNextStep(n,g,this.clampTarget(n,_));e.toTile.copy(p),e.state.targetX=p.x,e.state.targetY=p.y,e.progress=0,e.state.directionX=Math.sign(p.x-g.x),e.state.directionY=Math.sign(p.y-g.y),this.applySignatureBehavior(e.state,g,s,a,u)}const d=e.state.speed*c*(o?.62:1)*(e.state.speedBoostTimer>0?1.22:1);e.progress=Math.min(1,e.progress+t*d/ce);const f=lt(e.fromTile.x,e.fromTile.y),m=lt(e.toTile.x,e.toTile.y);e.group.position.lerpVectors(f,m,e.progress),e.body.position.y=.68+Math.sin(performance.now()*.005+e.state.roamSeed)*.08,e.state.mode==="frightened"?l>0&&l<3&&Math.floor(performance.now()/140)%2===0?e.body.material.color.set("#f6fbff"):e.body.material.color.set("#8ec5ff"):e.body.material.color.set(e.state.speedBoostTimer>0?e.state.glow:e.state.color)}applySignatureBehavior(e,t,n,s,r){e.type==="hunter"&&(e.directionX===0||e.directionY===0)&&(e.speedBoostTimer=Math.max(e.speedBoostTimer,.35)),e.type==="ambusher"&&qt(t,n)<10&&(e.speedBoostTimer=Math.max(e.speedBoostTimer,.28)),e.type==="roamer"&&qt(t,n)<=r*r&&(e.speedBoostTimer=Math.max(e.speedBoostTimer,.6)),e.type==="guardian"&&s.some(a=>qt(a,t)<=4)&&(e.speedBoostTimer=Math.max(e.speedBoostTimer,.2))}chooseTarget(e,t,n,s,r,a){var o;switch(e){case"hunter":return n.clone();case"ambusher":return n.clone().add(s.clone().multiplyScalar(3));case"roamer":return qt(r,n)<20?n.clone():this.randomNeighborGoal(t,r,r.x*13+r.y*7);case"guardian":return(o=this.closestGuardTarget(a,n))!=null?o:n.clone();default:return n.clone()}}chooseFleeTarget(e,t,n){const s=Ji.getAvailableNeighbors(e,t);return s.length===0?t.clone():(s.sort((r,a)=>qt(a,n)-qt(r,n)),s[0])}closestGuardTarget(e,t){return e.length===0?null:[...e].sort((s,r)=>qt(s,t)-qt(r,t))[0].clone()}randomNeighborGoal(e,t,n){const s=Ji.getAvailableNeighbors(e,t);return s.length===0?t.clone():s[Math.abs(n)%s.length].clone()}clampTarget(e,t){return new se(Math.min(e.width-1,Math.max(0,t.x)),Math.min(e.height-1,Math.max(0,t.y)))}}class op{buildLevel(e){const t=rs.load(e.mazeId),n=e.hazardRules.enemySpeedBonus+Math.min(.14,(e.index-1)*.03),s=e.enemyRoster.map((r,a)=>{var u,d;const o=(u=Wa.find(f=>f.type===r))!=null?u:Wa[0],l=new se(t.playerSpawn.x+2+a,t.playerSpawn.y),c=(d=t.enemySpawns[a%t.enemySpawns.length])!=null?d:l;return{id:`${o.type}-${a}`,type:o.type,color:o.color,glow:o.glow,speed:jf+n+a*.05,tileX:c.x,tileY:c.y,directionX:0,directionY:0,targetX:c.x,targetY:c.y,spawnX:c.x,spawnY:c.y,mode:"patrol",modeTimer:1.2+a*.35,personalityTimer:0,roamSeed:a*17+e.index*19,stunTimer:0,speedBoostTimer:0}});return{maze:t,enemies:s,enemySpeedMultiplier:.94+n,playerSpeedMultiplier:1.03+Math.min(.16,(e.index-1)*.014),introLabel:`Stage ${e.index}: ${e.name}`,themeIndex:e.themeIndex,stage:e}}}const dn={up:new se(0,-1),down:new se(0,1),left:new se(-1,0),right:new se(1,0)};class lp{constructor(e){O(this,"group",new Dt);O(this,"tile",new se);O(this,"worldPosition",this.group.position);O(this,"direction",new se(0,0));O(this,"bufferedDirection",new se(0,0));O(this,"isMoving",!1);O(this,"powerPulse",0);O(this,"invincibilityTimer",0);O(this,"body");O(this,"baseColor");O(this,"powerColorA",new we("#ffe76d"));O(this,"powerColorB",new we("#ff78d2"));O(this,"blendedColor",new we);O(this,"targetTile",new se);O(this,"moveTarget",new se);O(this,"movementProgress",1);O(this,"rotation",0);O(this,"squash",0);this.baseColor=new we(e),this.body=new Le(new Ut(.72,28,28),new zt({color:this.baseColor.clone(),emissive:this.baseColor.clone(),emissiveIntensity:.12,metalness:.08,roughness:.34})),this.body.position.y=.72,this.group.add(this.body)}spawn(e,t){this.tile.set(e,t),this.targetTile.set(e,t),this.moveTarget.set(e,t),this.movementProgress=1,this.direction.set(0,0),this.bufferedDirection.set(0,0),this.isMoving=!1,this.worldPosition.copy(lt(e,t))}bufferDirection(e,t){this.bufferedDirection.set(e,t)}updateInputFromAction(e){e==="up"&&this.bufferDirection(dn.up.x,dn.up.y),e==="down"&&this.bufferDirection(dn.down.x,dn.down.y),e==="left"&&this.bufferDirection(dn.left.x,dn.left.y),e==="right"&&this.bufferDirection(dn.right.x,dn.right.y)}update(e,t,n,s){if(this.invincibilityTimer=Math.max(0,this.invincibilityTimer-e),this.powerPulse+=e*(s?6:2.5),this.squash=Math.max(0,this.squash-e*3.5),this.movementProgress>=1&&(this.tile.copy(this.targetTile),this.tryApplyBufferedTurn(t),this.direction.lengthSq()===0||this.isBlocked(t,this.direction)?(this.direction.set(0,0),this.isMoving=!1):(this.moveTarget.copy(this.tile).add(this.direction),this.targetTile.copy(this.moveTarget),this.movementProgress=0,this.isMoving=!0)),this.isMoving){const o=Yf*n;this.movementProgress=Math.min(1,this.movementProgress+e*o/ce);const l=lt(this.tile.x,this.tile.y),c=lt(this.targetTile.x,this.targetTile.y);this.worldPosition.lerpVectors(l,c,this.movementProgress),this.bufferedDirection.lengthSq()>0&&this.canTakeTurnSoon(t)&&this.tryApplyBufferedTurn(t)}const r=Math.atan2(this.direction.x,this.direction.y);this.rotation+=sp(this.rotation,r)*Math.min(1,e*12),this.body.rotation.y=this.rotation;const a=s?1+Math.sin(this.powerPulse*5)*.08:1+Math.sin(this.powerPulse*3)*.035;if(this.body.scale.set(1+this.squash*.18,a-this.squash*.08,1+this.squash*.18),s){const o=(Math.sin(this.powerPulse*8)+1)*.5;this.blendedColor.lerpColors(this.powerColorA,this.powerColorB,o),this.body.material.color.lerp(this.blendedColor,Math.min(1,e*12)),this.body.material.emissive.lerp(this.blendedColor,Math.min(1,e*8)),this.body.material.emissiveIntensity=.18}else this.body.material.color.lerp(this.baseColor,Math.min(1,e*10)),this.body.material.emissive.lerp(this.baseColor,Math.min(1,e*7)),this.body.material.emissiveIntensity=.12;this.body.material.opacity=this.invincibilityTimer>0?.55+Math.sin(this.powerPulse*18)*.2:1,this.body.material.transparent=this.invincibilityTimer>0}bounce(e=1){this.squash=Math.min(1.1,this.squash+e)}setColor(e){this.baseColor.copy(new we(e)),this.body.material.color.copy(this.baseColor),this.body.material.emissive.copy(this.baseColor)}tryApplyBufferedTurn(e){this.bufferedDirection.lengthSq()!==0&&(this.isBlocked(e,this.bufferedDirection)||this.direction.copy(this.bufferedDirection))}isBlocked(e,t){const n=this.tile.x+t.x,s=this.tile.y+t.y;return rs.isWall(e,n,s)}canTakeTurnSoon(e){const t=Math.abs(this.worldPosition.x-lt(this.tile.x,this.tile.y).x),n=Math.abs(this.worldPosition.z-lt(this.tile.x,this.tile.y).z);return t<.45&&n<.45&&!this.isBlocked(e,this.bufferedDirection)}}class cp{constructor(e){O(this,"group",new Dt);O(this,"dynamicLight",new Na("#6edcff",10,26,2));O(this,"ambientLight",new kf("#9fdfff",.48));O(this,"skyLight",new Na("#6edcff",8,120,2));this.scene=e,this.scene.add(this.group),this.scene.add(this.ambientLight),this.skyLight.position.set(22,16,10),this.scene.add(this.skyLight),this.scene.add(this.dynamicLight)}build(e,t,n){this.clear(),this.ambientLight.color.set(t.ambient),this.ambientLight.intensity=t.ambientIntensity,this.skyLight.color.set(t.skyLight),this.skyLight.intensity=t.skyLightIntensity,this.skyLight.position.set(e.width*ce*.5,n.id==="vault-core"?12:16,ce*2.2);const s=new Le(new Yt(e.width*ce,e.height*ce,e.width,e.height),new zt({color:new we(t.floorA),emissive:new we(t.floorB),emissiveIntensity:.16,metalness:.1,roughness:.6}));s.rotation.x=-Math.PI/2,s.position.set(e.width*ce/2,-.01,e.height*ce/2),this.group.add(s),this.addStageFloorMood(e,t,n);for(let o=0;o<e.height;o+=1)for(let l=0;l<e.width;l+=1){if(e.tiles[o][l]!=="wall")continue;const c=new Le(new rn(ce,this.getWallHeight(n),ce),new zt({color:t.wall,emissive:t.wallGlow,emissiveIntensity:.18,metalness:.18,roughness:.42}));c.position.copy(lt(l,o)),c.position.y=this.getWallHeight(n)*.5,this.group.add(c)}const r=Math.floor(e.height/2);for(let o=0;o<r;o+=1){const l=new Le(new Yt(e.width*ce,.08),new Ze({color:o%2===0?t.wall:t.floorB,transparent:!0,opacity:.1}));l.rotation.x=-Math.PI/2,l.position.set(e.width*ce/2,.03,o*ce*2+ce),this.group.add(l)}const a=6;for(let o=0;o<a;o+=1){const l=new Le(new Tn(.18,.18,2.8+o%3*.7,10),new zt({color:t.accent,emissive:t.wallGlow,emissiveIntensity:.11,metalness:.45,roughness:.36}));l.position.set(ce*(1.25+o%3*5.7),1.4,ce*(1.2+Math.floor(o/3)*(e.height-2.4))),this.group.add(l)}this.addStageSetPieces(e,t,n)}updateLight(e,t,n){this.dynamicLight.position.set(e,3.8,t),this.dynamicLight.color.set(n)}clear(){for(let e=this.group.children.length-1;e>=0;e-=1){const t=this.group.children[e];this.group.remove(t),t instanceof Le&&(t.geometry.dispose(),Array.isArray(t.material)?t.material.forEach(n=>n.dispose()):t.material.dispose())}}getWallHeight(e){return e.id==="subway-night"?2.2:e.id==="rooftop-sunrise"?1.5:e.id==="vault-core"?2.4:1.8}addStageFloorMood(e,t,n){const s=e.width*ce*.5,r=e.height*ce*.5;if(n.id==="downtown-dusk"){const a=new Le(new Yt(e.width*ce*.88,ce*3.2),new Ze({color:"#ff8ab8",transparent:!0,opacity:.12,side:vt}));a.rotation.x=-Math.PI/2,a.position.set(s,.04,r),this.group.add(a)}if(n.id==="subway-night")for(let a=0;a<2;a+=1){const o=new Le(new Yt(e.width*ce*.86,.12),new Ze({color:"#b7e8ff",transparent:!0,opacity:.28}));o.rotation.x=-Math.PI/2,o.position.set(s,.05,r+(a===0?-1.2:1.2)),this.group.add(o)}if(n.id==="rooftop-sunrise"){const a=new Le(new is(ce*1.2,ce*2.6,32),new Ze({color:"#ffca7a",transparent:!0,opacity:.18,side:vt}));a.rotation.x=-Math.PI/2,a.position.set(s,.05,r),this.group.add(a)}if(n.id==="reactor-district"){const a=new Le(new Yt(ce*2.4,e.height*ce*.78),new Ze({color:"#88ffaf",transparent:!0,opacity:.14,side:vt}));a.rotation.x=-Math.PI/2,a.position.set(s,.05,r),this.group.add(a)}if(n.id==="vault-core"){const a=new Le(new is(ce*2.2,ce*4.2,40),new Ze({color:"#ffd97c",transparent:!0,opacity:.16,side:vt}));a.rotation.x=-Math.PI/2,a.position.set(s,.06,r),this.group.add(a)}}addStageSetPieces(e,t,n){if(n.id==="downtown-dusk"){this.addSkylineRow(e,"#18283e","#ffc97a",3.8),this.addBillboards(e,"#ff88be");return}if(n.id==="subway-night"){this.addTunnelRibs(e,t),this.addBenchBlocks(e,"#31475f");return}if(n.id==="rooftop-sunrise"){this.addRoofFans(e,"#ffbd72"),this.addBeaconPoles(e,"#ffd98e");return}if(n.id==="reactor-district"){this.addReactorTanks(e,"#86ffb3"),this.addHazardPosts(e,"#9effc6");return}n.id==="vault-core"&&(this.addVaultMonoliths(e,"#253851"),this.addCoreHalo(e,"#ffd97c"))}addSkylineRow(e,t,n,s){for(let r=0;r<5;r+=1){const a=new Le(new rn(ce*(1+r%2*.25),s+r*.35,ce),new zt({color:"#16263d",emissive:t,emissiveIntensity:.35,metalness:.22,roughness:.4}));a.position.set(ce*(1.8+r*2.7),a.geometry.parameters.height*.5,ce*1.1),this.group.add(a);const o=new Le(new Yt(ce*.9,a.geometry.parameters.height*.72),new Ze({color:n,transparent:!0,opacity:.16,side:vt}));o.position.set(a.position.x,a.position.y,a.position.z+ce*.52),this.group.add(o)}}addBillboards(e,t){for(let n=0;n<3;n+=1){const s=new Le(new Yt(ce*1.8,ce*.8),new Ze({color:t,transparent:!0,opacity:.22,side:vt}));s.position.set(ce*(3+n*5),2.6,ce*(e.height-1.6)),this.group.add(s)}}addTunnelRibs(e,t){for(let n=0;n<5;n+=1){const s=new Le(new ss(ce*1.6,.1,8,24,Math.PI),new Ze({color:t.wallGlow,transparent:!0,opacity:.22}));s.rotation.z=Math.PI,s.position.set(ce*(2.4+n*3.4),2.2,ce*2.3),this.group.add(s)}}addBenchBlocks(e,t){for(let n=0;n<4;n+=1){const s=new Le(new rn(ce*1.3,.45,ce*.5),new zt({color:t,emissive:t,emissiveIntensity:.12,metalness:.3,roughness:.5}));s.position.set(ce*(2+n*4.1),.24,ce*(n%2===0?4.2:12.2)),this.group.add(s)}}addRoofFans(e,t){for(let n=0;n<4;n+=1){const s=new Le(new Tn(.36,.36,.22,14),new zt({color:t,emissive:t,emissiveIntensity:.2,metalness:.44,roughness:.38}));s.position.set(ce*(2.2+n*4.2),.18,ce*(n%2===0?2.2:e.height-2.2)),this.group.add(s)}}addBeaconPoles(e,t){for(let n=0;n<3;n+=1){const s=new Le(new Tn(.12,.12,3.2,10),new zt({color:t,emissive:t,emissiveIntensity:.45,metalness:.3,roughness:.24}));s.position.set(ce*(3+n*5.4),1.6,ce*1.4),this.group.add(s)}}addReactorTanks(e,t){for(let n=0;n<3;n+=1){const s=new Le(new Tn(.72,.72,2.6,16),new zt({color:"#163024",emissive:t,emissiveIntensity:.26,metalness:.34,roughness:.36}));s.position.set(ce*(2.2+n*6),1.3,ce*(e.height-1.8)),this.group.add(s)}}addHazardPosts(e,t){for(let n=0;n<5;n+=1){const s=new Le(new Tn(.14,.14,1.8,8),new zt({color:t,emissive:t,emissiveIntensity:.42,metalness:.2,roughness:.3}));s.position.set(ce*(1.8+n*3.2),.9,ce*1.15),this.group.add(s)}}addVaultMonoliths(e,t){const n=[new R(ce*2.1,2.4,ce*2.1),new R(ce*(e.width-2.1),2.4,ce*2.1),new R(ce*2.1,2.4,ce*(e.height-2.1)),new R(ce*(e.width-2.1),2.4,ce*(e.height-2.1))];for(const s of n){const r=new Le(new rn(ce*.8,4.8,ce*.8),new zt({color:t,emissive:"#6dc8ff",emissiveIntensity:.12,metalness:.42,roughness:.24}));r.position.copy(s),this.group.add(r)}}addCoreHalo(e,t){const n=new Le(new ss(ce*2.8,.12,10,42),new Ze({color:t,transparent:!0,opacity:.3}));n.rotation.x=Math.PI/2,n.position.set(e.width*ce*.5,.8,e.height*ce*.5),this.group.add(n)}}class hp{constructor(){O(this,"collectibles",new Map);O(this,"pelletGeometry",new Ut(.17,14,14));O(this,"powerGeometry",new Ut(.32,16,16))}build(e,t,n,s){this.clear(e);for(const r of t.collectibles){const a=r.kind==="pellet"?this.pelletGeometry:this.powerGeometry,o=new Le(a,new Ze({color:r.kind==="pellet"?n:s}));o.position.copy(lt(r.position.x,r.position.y)),o.position.y=r.kind==="pellet"?.36:.48,e.add(o),this.collectibles.set(fn(r.position),{tile:r.position.clone(),kind:r.kind,mesh:o,collected:!1})}}update(e){for(const t of this.collectibles.values()){if(t.collected)continue;const n=t.kind==="pellet"?1+Math.sin(e*4+t.tile.x)*.1:1+Math.sin(e*7+t.tile.y)*.22;t.mesh.scale.setScalar(n),t.mesh.position.y=t.kind==="pellet"?.36+Math.sin(e*5+t.tile.y)*.04:.5+Math.sin(e*6+t.tile.x)*.08}}collectAt(e){const t=this.collectibles.get(fn(e));return!t||t.collected?null:(t.collected=!0,t.mesh.visible=!1,t)}getRemainingCount(){let e=0;for(const t of this.collectibles.values())t.collected||(e+=1);return e}clear(e){for(const t of this.collectibles.values())e.remove(t.mesh),Array.isArray(t.mesh.material)?t.mesh.material.forEach(n=>n.dispose()):t.mesh.material.dispose();this.collectibles.clear()}}class up{findEnemyCollision(e,t,n){const s=n?1.85:1.45,r=s*s;for(const a of t){if(a.mode==="respawning")continue;const o=e.x-a.worldX,l=e.z-a.worldZ;if(o*o+l*l<=r)return a}return null}}class dp{constructor(){O(this,"score",0);O(this,"highScore",0);O(this,"combo",0);const e=window.localStorage.getItem(ri.highScore);this.highScore=e&&Number(e)||0}reset(){this.score=0,this.combo=0}addPellet(){this.addScore(10)}addPowerOrb(){this.combo=0,this.addScore(50)}addEnemyDefeat(){const e=200*(this.combo+1);return this.combo+=1,this.addScore(e),e}addLevelClear(e,t){const n=Math.max(0,Math.floor(ka-Math.min(ka,t*35))),s=Kf+e*140+n;return this.combo=0,this.addScore(s),s}breakCombo(){this.combo=0}addScore(e){this.score+=e,this.score>this.highScore&&(this.highScore=this.score,window.localStorage.setItem(ri.highScore,String(this.highScore)))}}class fp{constructor(){O(this,"audioContext",null);O(this,"masterGain",null);O(this,"musicGain",null);O(this,"sfxGain",null);O(this,"ambientOscillator",null);O(this,"musicVolume",.45);O(this,"sfxVolume",.8)}ensureStarted(){this.audioContext||(this.audioContext=new AudioContext,this.masterGain=this.audioContext.createGain(),this.musicGain=this.audioContext.createGain(),this.sfxGain=this.audioContext.createGain(),this.musicGain.connect(this.masterGain),this.sfxGain.connect(this.masterGain),this.masterGain.connect(this.audioContext.destination),this.startAmbientLoop(),this.applyVolumes())}applySettings(e){this.musicVolume=e.musicVolume,this.sfxVolume=e.sfxVolume,this.applyVolumes()}playPellet(){this.ping(740,.06,"square")}playPowerOrb(){this.sweep(280,680,.22,"sawtooth")}playPowerShift(){this.ping(620,.07,"triangle"),window.setTimeout(()=>this.ping(860,.08,"triangle"),55),window.setTimeout(()=>this.ping(1120,.1,"triangle"),120)}playEnemyDefeated(){this.sweep(500,180,.18,"triangle")}playCaught(){this.sweep(220,90,.34,"sawtooth")}playLevelClear(){this.ping(480,.12,"triangle"),window.setTimeout(()=>this.ping(720,.18,"triangle"),100)}playMenuClick(){this.ping(880,.05,"triangle")}playPause(){this.ping(300,.08,"square")}playAttack(){this.sweep(360,840,.12,"triangle")}playVictory(){this.ping(520,.14,"triangle"),window.setTimeout(()=>this.ping(760,.18,"triangle"),120),window.setTimeout(()=>this.ping(980,.22,"triangle"),260)}dispose(){var e,t;(e=this.ambientOscillator)==null||e.stop(),(t=this.audioContext)==null||t.close(),this.audioContext=null}startAmbientLoop(){if(!this.audioContext||!this.musicGain)return;const e=this.audioContext.createOscillator(),t=this.audioContext.createOscillator(),n=this.audioContext.createGain();e.type="triangle",e.frequency.value=92,t.frequency.value=.16,n.gain.value=14,t.connect(n),n.connect(e.frequency),e.connect(this.musicGain),e.start(),t.start(),this.ambientOscillator=e}applyVolumes(){!this.musicGain||!this.sfxGain||(this.musicGain.gain.value=this.musicVolume*.24,this.sfxGain.gain.value=this.sfxVolume*.4)}ping(e,t,n){if(this.ensureStarted(),!this.audioContext||!this.sfxGain)return;const s=this.audioContext.createOscillator(),r=this.audioContext.createGain();s.type=n,s.frequency.value=e,r.gain.value=.001,r.gain.exponentialRampToValueAtTime(.3,this.audioContext.currentTime+.01),r.gain.exponentialRampToValueAtTime(.001,this.audioContext.currentTime+t),s.connect(r),r.connect(this.sfxGain),s.start(),s.stop(this.audioContext.currentTime+t+.02)}sweep(e,t,n,s){if(this.ensureStarted(),!this.audioContext||!this.sfxGain)return;const r=this.audioContext.createOscillator(),a=this.audioContext.createGain();r.type=s,r.frequency.setValueAtTime(e,this.audioContext.currentTime),r.frequency.exponentialRampToValueAtTime(t,this.audioContext.currentTime+n),a.gain.value=.001,a.gain.exponentialRampToValueAtTime(.2,this.audioContext.currentTime+.01),a.gain.exponentialRampToValueAtTime(.001,this.audioContext.currentTime+n),r.connect(a),a.connect(this.sfxGain),r.start(),r.stop(this.audioContext.currentTime+n+.02)}}class pp{constructor(e){O(this,"root",new Dt);O(this,"bursts",[]);O(this,"trailGeometry",new ct);O(this,"trailMaterial",new So({color:"#d6f7ff",transparent:!0,opacity:.8}));O(this,"trailLine",new Ff(this.trailGeometry,this.trailMaterial));O(this,"trailHistory",[]);O(this,"shakeTimer",0);O(this,"shakeStrength",0);O(this,"levelTransition",0);e.add(this.root),this.root.add(this.trailLine)}update(e,t,n){if(this.updateTrail(n),this.updateBursts(e),this.shakeTimer=Math.max(0,this.shakeTimer-e),this.shakeTimer>0){const s=this.shakeStrength*(this.shakeTimer/.35);t.position.x+=(Math.random()-.5)*s,t.position.y+=(Math.random()-.5)*s,t.position.z+=(Math.random()-.5)*s}this.levelTransition=Zi(this.levelTransition,0,4,e)}triggerTrailBoost(){this.trailMaterial.opacity=1}spawnPelletBurst(e,t,n=!1){const s=n?26:14,r=new ct,a=[],o=[];for(let c=0;c<s;c+=1)a.push(e.x,e.y,e.z),o.push(new R((Math.random()-.5)*(n?4.2:2.4),Math.random()*(n?2.2:1.1),(Math.random()-.5)*(n?4.2:2.4)));r.setAttribute("position",new Xe(a,3));const l=new Of(r,new yo({color:t,size:n?.24:.14,transparent:!0,opacity:1,blending:Qi,depthWrite:!1}));this.root.add(l),this.bursts.push({points:l,velocities:o,life:n?.9:.45,maxLife:n?.9:.45})}triggerCatchShake(){this.shakeTimer=.35,this.shakeStrength=.35}triggerLevelTransition(){this.levelTransition=1}getLevelTransitionStrength(){return Ao(this.levelTransition,0,1)}dispose(e){e.remove(this.root),this.trailGeometry.dispose(),this.trailMaterial.dispose()}updateTrail(e){this.trailHistory.unshift(e.clone().add(new R(0,.1,0))),this.trailHistory.length>16&&this.trailHistory.pop();const t=this.trailHistory.flatMap(s=>[s.x,s.y,s.z]);this.trailGeometry.setAttribute("position",new Xe(t,3)),this.trailGeometry.computeBoundingSphere();const n=new we().setHSL(.14+Math.sin(performance.now()*.001)*.03,.9,.75);this.trailMaterial.color.copy(n),this.trailMaterial.opacity=.55}updateBursts(e){for(let t=this.bursts.length-1;t>=0;t-=1){const n=this.bursts[t];n.life-=e;const s=Math.max(0,n.life/n.maxLife);n.points.material.opacity=s;const r=n.points.geometry.getAttribute("position");for(let a=0;a<n.velocities.length;a+=1){const o=n.velocities[a];o.y-=e*4.2,r.setXYZ(a,r.getX(a)+o.x*e,r.getY(a)+o.y*e,r.getZ(a)+o.z*e)}r.needsUpdate=!0,n.life<=0&&(this.root.remove(n.points),n.points.geometry.dispose(),n.points.material.dispose(),this.bursts.splice(t,1))}}}const qa={ArrowUp:"up",ArrowDown:"down",ArrowLeft:"left",ArrowRight:"right",KeyW:"up",KeyS:"down",KeyA:"left",KeyD:"right",Escape:"pause",Space:"attack"};class mp{constructor(e){O(this,"pressedActions",new Set);O(this,"justPressedActions",new Set);O(this,"touchStartX",0);O(this,"touchStartY",0);O(this,"handleKeyDown",e=>{const t=qa[e.code];!t||(this.pressedActions.has(t)||this.justPressedActions.add(t),this.pressedActions.add(t))});O(this,"handleKeyUp",e=>{const t=qa[e.code];!t||this.pressedActions.delete(t)});O(this,"handleTouchStart",e=>{const t=e.changedTouches[0];!t||(this.touchStartX=t.clientX,this.touchStartY=t.clientY)});O(this,"handleTouchEnd",e=>{const t=e.changedTouches[0];if(!t)return;const n=t.clientX-this.touchStartX,s=t.clientY-this.touchStartY;Math.abs(n)<20&&Math.abs(s)<20||(Math.abs(n)>Math.abs(s)?this.tap(n>0?"right":"left"):this.tap(s>0?"down":"up"))});this.target=e}init(){window.addEventListener("keydown",this.handleKeyDown),window.addEventListener("keyup",this.handleKeyUp),this.target.addEventListener("touchstart",this.handleTouchStart,{passive:!0}),this.target.addEventListener("touchend",this.handleTouchEnd,{passive:!0})}dispose(){window.removeEventListener("keydown",this.handleKeyDown),window.removeEventListener("keyup",this.handleKeyUp),this.target.removeEventListener("touchstart",this.handleTouchStart),this.target.removeEventListener("touchend",this.handleTouchEnd)}update(){var t,n,s,r,a;const e=(t=navigator.getGamepads)==null?void 0:t.call(navigator)[0];if(e){const o=(n=e.axes[0])!=null?n:0,l=(s=e.axes[1])!=null?s:0;if(Math.abs(o)>.4||Math.abs(l)>.4){const c=Math.abs(o)>Math.abs(l);this.tap(c?o>0?"right":"left":l>0?"down":"up")}(r=e.buttons[9])!=null&&r.pressed&&this.tap("pause"),(a=e.buttons[0])!=null&&a.pressed&&this.tap("attack")}}wasPressed(e){return this.justPressedActions.has(e)?(this.justPressedActions.delete(e),!0):!1}tap(e){this.justPressedActions.add(e)}}class gp{constructor(e){O(this,"onAction",null);O(this,"onSettingChange",null);O(this,"root");O(this,"hud");O(this,"overlay");O(this,"banner");O(this,"loading");O(this,"mobileHint");O(this,"mobileAttackButton");O(this,"scoreValue",document.createElement("span"));O(this,"highScoreValue",document.createElement("span"));O(this,"livesValue",document.createElement("span"));O(this,"timerValue",document.createElement("span"));O(this,"comboValue",document.createElement("span"));O(this,"speedrunValue",document.createElement("span"));O(this,"stageValue",document.createElement("span"));O(this,"attackValue",document.createElement("span"));O(this,"bossValue",document.createElement("span"));O(this,"objectiveList",document.createElement("div"));O(this,"pauseButton",document.createElement("button"));O(this,"updateMobileHint",()=>{this.mobileHint.classList.toggle("visible",!1)});this.root=document.createElement("div"),this.root.className="ui-root",this.hud=document.createElement("div"),this.hud.className="hud",this.overlay=document.createElement("div"),this.overlay.className="overlay",this.banner=document.createElement("div"),this.banner.className="banner hidden",this.loading=document.createElement("div"),this.loading.className="loading-screen",this.loading.innerHTML='<div class="loading-card"><h1>Neon Maze Runner</h1><p>Booting campaign grid...</p></div>',this.mobileHint=document.createElement("div"),this.mobileHint.className="mobile-hint",this.mobileHint.textContent="Swipe to steer, tap attack when armed",this.mobileAttackButton=document.createElement("button"),this.mobileAttackButton.className="mobile-attack-button",this.mobileAttackButton.textContent="Attack",this.mobileAttackButton.addEventListener("click",()=>this.emitAction("use-attack")),this.pauseButton.className="pause-button",this.pauseButton.textContent="Pause",this.pauseButton.addEventListener("click",()=>this.emitAction("toggle-pause")),this.objectiveList.className="objective-list",this.hud.innerHTML=`
      <div class="hud-pills">
        <div class="hud-pill"><label>Score</label></div>
        <div class="hud-pill"><label>High</label></div>
        <div class="hud-pill"><label>Lives</label></div>
        <div class="hud-pill"><label>Stage</label></div>
        <div class="hud-pill"><label>Power</label></div>
        <div class="hud-pill"><label>Combo</label></div>
        <div class="hud-pill"><label>Attack</label></div>
        <div class="hud-pill"><label>Boss</label></div>
        <div class="hud-pill"><label>Run</label></div>
      </div>
      <div class="hud-side"></div>
    `;const t=this.hud.querySelectorAll(".hud-pill");t[0].append(this.scoreValue),t[1].append(this.highScoreValue),t[2].append(this.livesValue),t[3].append(this.stageValue),t[4].append(this.timerValue),t[5].append(this.comboValue),t[6].append(this.attackValue),t[7].append(this.bossValue),t[8].append(this.speedrunValue);const n=this.hud.querySelector(".hud-side");n==null||n.append(this.pauseButton,this.objectiveList),this.root.append(this.hud,this.banner,this.overlay,this.loading,this.mobileHint,this.mobileAttackButton),e.append(this.root),this.updateMobileHint(),window.addEventListener("resize",this.updateMobileHint)}showLoading(e){this.loading.classList.toggle("hidden",!e)}updateRuntime(e){this.scoreValue.textContent=e.score.toString(),this.highScoreValue.textContent=e.highScore.toString(),this.livesValue.textContent="O".repeat(e.lives),this.stageValue.textContent=`L${e.level} ${e.currentStageName}`,this.timerValue.textContent=e.powerModeTimer>0?`${e.powerModeTimer.toFixed(1)}s`:"Ready",this.comboValue.textContent=e.combo>0?`x${e.combo+1}`:"-",this.speedrunValue.textContent=`${e.speedrunTime.toFixed(1)}s`,this.attackValue.textContent=this.describeAttack(e.activeAttack),this.bossValue.textContent=e.bossPhase==="inactive"?"-":`${e.bossPhase} ${e.bossHealth>0?`${e.bossHealth}hp`:""}`.trim(),this.objectiveList.innerHTML=e.objectiveText.map(t=>`<div class="objective-line">${t}</div>`).join(""),this.mobileAttackButton.classList.toggle("visible",Boolean(e.activeAttack))}setFlow(e,t,n,s){this.hud.classList.toggle("visible",["stageIntro","bossIntro","playing","paused","gameOver","victory"].includes(e)),this.mobileHint.classList.toggle("visible",window.innerWidth<ep&&["stageIntro","bossIntro","playing","paused"].includes(e)),this.mobileAttackButton.classList.toggle("visible",Boolean(t.activeAttack)&&["stageIntro","bossIntro","playing","paused"].includes(e)),this.renderOverlay(e,t,n,s)}showBanner(e){this.banner.textContent=e,this.banner.classList.remove("hidden"),window.setTimeout(()=>this.banner.classList.add("hidden"),2e3)}dispose(){window.removeEventListener("resize",this.updateMobileHint),this.root.remove()}renderOverlay(e,t,n,s){var a,o;if(e==="playing"||e==="stageIntro"||e==="bossIntro"){this.overlay.innerHTML="",this.overlay.classList.remove("visible");return}let r="";e==="menu"?r=`
        <div class="menu-shell">
          <div class="menu-artboard">
            <div class="menu-utility-row">
              <div class="menu-utility-spacer"></div>
              <div class="menu-utility-icons">
                <div class="menu-utility-icon">\u25A5</div>
                <div class="menu-utility-icon">\u25CD</div>
                <div class="menu-utility-icon">\u2301</div>
                <div class="menu-utility-icon">\u2709</div>
                <div class="menu-utility-icon">\u2699</div>
              </div>
            </div>

            <section class="menu-left-rail">
              <article class="menu-profile-card">
                <div class="menu-profile-ring">
                  <div class="menu-profile-core"></div>
                </div>
                <div class="menu-profile-copy">
                  <span>Runner_07</span>
                  <strong>Level ${Math.max(1,t.campaignProgress.unlockedStage)}</strong>
                  <small>${t.highScore.toLocaleString()} Career Score</small>
                </div>
              </article>

              <article class="menu-side-card">
                <label>High Score</label>
                <strong>${t.highScore.toLocaleString()}</strong>
                <span>Best route logged for local pilot</span>
              </article>

              <article class="menu-side-card">
                <label>Campaign</label>
                <strong>${t.campaignProgress.completedStages.length}/5 Cleared</strong>
                <span>Vault access opens after district sweep</span>
              </article>

              <article class="menu-side-card">
                <label>Best Clear</label>
                <strong>${t.campaignProgress.bestClearTime?`${t.campaignProgress.bestClearTime.toFixed(1)}s`:"None Yet"}</strong>
                <span>Time attack ranking is stored locally</span>
              </article>
            </section>

            <section class="menu-center-stage">
              <div class="menu-kicker">Original Neon Arcade Campaign</div>
              <div class="menu-logo menu-logo-hero">
                <div class="menu-logo-type">
                  <span class="menu-logo-overline">Run. Dodge. Upgrade. Survive.</span>
                  <span class="menu-logo-top">NEON</span>
                  <span class="menu-logo-bottom">MAZE</span>
                  <span class="menu-logo-top menu-logo-top-secondary">RUNNER</span>
                </div>
              </div>
              <p class="menu-tagline">Five authored districts, grid-tight chase movement, temporary attack swings, and one final vault guardian standing between you and the trophy.</p>

              <div class="menu-feature-strip menu-feature-strip-wide">
                <div class="menu-feature">
                  <label>Campaign</label>
                  <strong>5 stage neon ascent</strong>
                </div>
                <div class="menu-feature">
                  <label>Pressure</label>
                  <strong>4 enemy styles, readable counterplay</strong>
                </div>
                <div class="menu-feature">
                  <label>Endgame</label>
                  <strong>Boss armor break and trophy extraction</strong>
                </div>
              </div>

              <div class="menu-action-grid">
                <button class="menu-tile menu-tile-primary" data-action="open-campaign">
                  <span class="menu-tile-icon">\u25B7</span>
                  <strong>Play</strong>
                  <small>Open campaign select</small>
                </button>
                <button class="menu-tile" data-action="continue">
                  <span class="menu-tile-icon">\u221E</span>
                  <strong>Continue</strong>
                  <small>Resume your latest run</small>
                </button>
                <button class="menu-tile" data-action="open-how-to">
                  <span class="menu-tile-icon">\u2318</span>
                  <strong>How To Play</strong>
                  <small>Controls and power rules</small>
                </button>
                <button class="menu-tile" data-action="open-settings">
                  <span class="menu-tile-icon">\u21EA</span>
                  <strong>Settings</strong>
                  <small>Bloom, audio, quality</small>
                </button>
                <button class="menu-tile" data-action="open-credits">
                  <span class="menu-tile-icon">\u2726</span>
                  <strong>Credits</strong>
                  <small>Project and tech stack</small>
                </button>
              </div>
            </section>

            <section class="menu-right-rail">
              <article class="menu-challenge-card">
                <div class="menu-challenge-badge">Daily Challenge</div>
                <div class="menu-challenge-emblem">\u26A1</div>
                <strong>Survive 180 Seconds</strong>
                <p>Power nodes slow pursuit units. Use timing windows to turn the maze in your favor.</p>
                <div class="menu-challenge-rewards">
                  <span>Score Boost</span>
                  <span>XP 250</span>
                </div>
              </article>

              <div class="menu-right-stack">
                <div class="menu-summary-card">
                  <label>Route Design</label>
                  <strong>Buffered turns and forgiving cornering keep the flow sharp.</strong>
                </div>
                <div class="menu-summary-card">
                  <label>Combat Swing</label>
                  <strong>Power mode, attack pickups, and boss weak points change the pace.</strong>
                </div>
              </div>
            </section>
          </div>
        </div>
      `:e==="campaignMap"?r=`
        <div class="screen-card wide">
          <div class="campaign-header">
            <div class="campaign-header-copy">
              <h1>Campaign Grid</h1>
              <p>Move district by district, stabilize your route, and push through to the vault core.</p>
            </div>
            <div class="campaign-header-stats">
              <div><label>Unlocked</label><strong>Stage ${t.campaignProgress.unlockedStage}</strong></div>
              <div><label>Completed</label><strong>${t.campaignProgress.completedStages.length}/5</strong></div>
              <div><label>Best Clear</label><strong>${t.campaignProgress.bestClearTime?`${t.campaignProgress.bestClearTime.toFixed(1)}s`:"None"}</strong></div>
            </div>
          </div>
          <section class="campaign-grid">
            ${s.map(l=>{var m,g;const c=l.index<=t.campaignProgress.unlockedStage,u=t.campaignProgress.completedStages.includes(l.index),d=l.enemyRoster.length,f=l.pickupSpawnRules.opening.length+((g=(m=l.pickupSpawnRules.bossSequence)==null?void 0:m.length)!=null?g:0);return`<article class="campaign-stage campaign-stage-${l.id} ${c?"unlocked":"locked"} ${u?"completed":""}">
                  <div class="campaign-stage-art campaign-stage-art-minimal">
                    <div class="campaign-stage-badge">${u?"Cleared":c?"Ready":"Locked"}</div>
                    <div class="campaign-stage-number">0${l.index}</div>
                    <div class="campaign-stage-titleblock">
                      <span>${l.timeOfDay}</span>
                      <strong>${l.name}</strong>
                    </div>
                  </div>
                    <div class="campaign-stage-copy">
                      <p>${l.introText}</p>
                      <div class="campaign-stage-meta">
                        <small>${d} enemy${d>1?" types":" type"}</small>
                        <small>${f>0?`${f} pickup lanes`:"Boss vault rules"}</small>
                        <small>${l.musicProfile}</small>
                      </div>
                    </div>
                </article>`}).join("")}
          </section>
          <div class="screen-actions">
            <button class="menu-button menu-button-primary" data-action="start">Start Fresh</button>
            <button class="menu-button" data-action="continue">Continue Run</button>
            <button class="menu-button" data-action="back-to-menu">Main Menu</button>
          </div>
        </div>
      `:e==="howToPlay"?r=this.card("How to Play",`
          <p>Move with WASD, arrows, gamepad, or swipes.</p>
          <p>Space or the attack button fires your currently equipped temporary pickup ability.</p>
          <p>Standard stages end when pellets are cleared. The final vault ends only after boss defeat and trophy capture.</p>
        `,'<button data-action="back-to-menu">Back</button>'):e==="settings"?r=this.card("Settings",`
          <label>Music Volume <input data-setting="musicVolume" type="range" min="0" max="1" step="0.01" value="${n.musicVolume}" /></label>
          <label>SFX Volume <input data-setting="sfxVolume" type="range" min="0" max="1" step="0.01" value="${n.sfxVolume}" /></label>
          <label><input data-setting="bloomEnabled" type="checkbox" ${n.bloomEnabled?"checked":""} /> Bloom</label>
          <label><input data-setting="cameraShake" type="checkbox" ${n.cameraShake?"checked":""} /> Camera Shake</label>
          <label>Quality
            <select data-setting="quality">
              <option value="low" ${n.quality==="low"?"selected":""}>Low</option>
              <option value="medium" ${n.quality==="medium"?"selected":""}>Medium</option>
              <option value="high" ${n.quality==="high"?"selected":""}>High</option>
            </select>
          </label>
        `,'<button data-action="back-to-menu">Back</button>'):e==="credits"?r=this.card("Credits","<p>Original browser campaign built with Three.js, Vite, TypeScript, generated audio, and authored neon stage content.</p>",'<button data-action="back-to-menu">Back</button>'):e==="paused"?r=this.card("Paused",`<p>${t.currentStageName}</p><p>${t.objectiveText.join(" / ")}</p>`,'<button data-action="resume">Resume</button><button data-action="restart">Restart Campaign</button>'):e==="gameOver"?r=this.card("Campaign Failed",`
          <p>Final Score: <strong>${t.score}</strong></p>
          <p>Stage Reached: <strong>${t.currentStageName}</strong></p>
          <p>Clear Time: <strong>${t.speedrunTime.toFixed(1)}s</strong></p>
        `,'<button data-action="play-again">Play Again</button><button data-action="back-to-menu">Main Menu</button>'):e==="victory"&&(r=this.card("Vault Cleared",`
          <p>Trophy secured. Final Score: <strong>${t.score}</strong></p>
          <p>Total Time: <strong>${t.speedrunTime.toFixed(1)}s</strong></p>
          <p>Best Clear: <strong>${(o=(a=t.campaignProgress.bestClearTime)==null?void 0:a.toFixed(1))!=null?o:t.speedrunTime.toFixed(1)}s</strong></p>
        `,'<button data-action="play-again">Replay Campaign</button><button data-action="back-to-menu">Main Menu</button>')),this.overlay.innerHTML=r,this.overlay.classList.add("visible"),this.overlay.querySelectorAll("[data-action]").forEach(l=>{l.addEventListener("click",()=>this.emitAction(l.dataset.action))}),this.overlay.querySelectorAll("[data-setting]").forEach(l=>{l.addEventListener("input",()=>{var d;const c=l.dataset.setting,u=l instanceof HTMLInputElement&&l.type==="checkbox"?l.checked:l instanceof HTMLInputElement?Number(l.value):l.value;(d=this.onSettingChange)==null||d.call(this,{[c]:u})})})}describeAttack(e){return e?`${e.icon} ${e.charges} ${e.duration.toFixed(1)}s`:"-"}card(e,t,n){return`
      <div class="screen-card wide">
        <h1>${e}</h1>
        <div class="screen-body">${t}</div>
        <div class="screen-actions">${n}</div>
      </div>
    `}emitAction(e){var t;(t=this.onAction)==null||t.call(this,e)}}const pi=[{id:"downtown-dusk",index:1,name:"Downtown Dusk",timeOfDay:"Dusk",mazeId:0,themeIndex:0,introText:"Clean lines, light pressure, and the first district sweep.",winCondition:"clearPellets",enemyRoster:["hunter"],pickupSpawnRules:{opening:["pulseBurst"],respawnSeconds:11},hazardRules:{enemySpeedBonus:-.2,roamerRageRadius:2.8,contactDamageOnly:!0},musicProfile:"glide"},{id:"subway-night",index:2,name:"Subway Night",timeOfDay:"Night",mazeId:1,themeIndex:1,introText:"Tighter lanes and harder reads under the rail glow.",winCondition:"clearPellets",enemyRoster:["hunter","roamer"],pickupSpawnRules:{opening:["arcShot","pulseBurst"],respawnSeconds:11},hazardRules:{enemySpeedBonus:-.1,roamerRageRadius:3.1,contactDamageOnly:!0},musicProfile:"pulse"},{id:"rooftop-sunrise",index:3,name:"Rooftop Sunrise",timeOfDay:"Sunrise",mazeId:2,themeIndex:2,introText:"Fast routes, bright horizons, and less room to stall.",winCondition:"clearPellets",enemyRoster:["hunter","guardian"],pickupSpawnRules:{opening:["dashBreaker","pulseBurst"],respawnSeconds:10},hazardRules:{enemySpeedBonus:-.02,roamerRageRadius:3.3,contactDamageOnly:!0},musicProfile:"solar"},{id:"reactor-district",index:4,name:"Reactor District",timeOfDay:"Late Dusk",mazeId:3,themeIndex:3,introText:"Full pressure. Guarded lanes, heavier denial, no wasted inputs.",winCondition:"clearPellets",enemyRoster:["hunter","ambusher"],pickupSpawnRules:{opening:["pulseBurst","arcShot","dashBreaker"],respawnSeconds:10},hazardRules:{enemySpeedBonus:.02,roamerRageRadius:3.5,contactDamageOnly:!0},musicProfile:"reactor"},{id:"vault-core",index:5,name:"Vault Core",timeOfDay:"Midnight",mazeId:4,themeIndex:4,introText:"Strip the vault, break the core, take the trophy.",winCondition:"collectTrophy",enemyRoster:["hunter","guardian"],pickupSpawnRules:{opening:[],respawnSeconds:8,bossSequence:["pulseBurst","dashBreaker","arcShot"]},hazardRules:{enemySpeedBonus:-.02,roamerRageRadius:3.2,contactDamageOnly:!0},musicProfile:"boss"}],$i=()=>({unlockedStage:1,completedStages:[],bestClearTime:null,lastStageIndex:1});class _p{getStages(){return pi}getStage(e){return pi[Math.max(0,Math.min(pi.length-1,e-1))]}getThemeForStage(e){return tp[this.getStage(e).themeIndex]}loadProgress(){const e=window.localStorage.getItem(ri.campaign);if(!e)return $i();try{return{...$i(),...JSON.parse(e)}}catch{return $i()}}saveProgress(e){window.localStorage.setItem(ri.campaign,JSON.stringify(e))}updateProgress(e,t,n){const s=Array.from(new Set([...n.completedStages,e])).sort((a,o)=>a-o),r={unlockedStage:Math.min(pi.length,Math.max(n.unlockedStage,e+1)),completedStages:s,bestClearTime:n.bestClearTime===null?t:Math.min(n.bestClearTime,t),lastStageIndex:Math.min(pi.length,e+1)};return this.saveProgress(r),r}resetProgress(){const e=$i();return this.saveProgress(e),e}}class vp{constructor(){O(this,"state",{pelletTarget:0,pelletsCollected:0,bossArmorRemaining:0,bossCoreHealth:0,trophyCollected:!1,currentText:[]})}init(e,t,n=0,s=0){this.state={pelletTarget:t,pelletsCollected:0,bossArmorRemaining:n,bossCoreHealth:s,trophyCollected:!1,currentText:[]},this.rebuildText(e,"inactive")}onPelletCollected(e){this.state.pelletsCollected+=1,this.rebuildText(e,"inactive")}onBossArmorChanged(e,t,n){this.state.bossArmorRemaining=t,this.rebuildText(e,n)}onBossHealthChanged(e,t,n){this.state.bossCoreHealth=t,this.rebuildText(e,n)}onTrophyCollected(e,t){this.state.trophyCollected=!0,this.rebuildText(e,t)}getState(){return this.state}rebuildText(e,t){const n=`Pellets ${this.state.pelletsCollected}/${this.state.pelletTarget}`;if(e.index<5){this.state.currentText=[n,"Clear the district","Stay alive and preserve combo"];return}const s=[n];this.state.pelletsCollected<this.state.pelletTarget?s.push("Strip the vault before the core opens"):t==="phase2"?s.push(`Break armor with special attacks ${this.state.bossArmorRemaining} left`):t==="phase3"?s.push(`Destroy exposed core ${this.state.bossCoreHealth} HP`):t==="defeated"||this.state.trophyCollected?s.push(this.state.trophyCollected?"Trophy secured":"Claim the trophy"):s.push("Survive the vault guardian"),this.state.currentText=s}}class xp{constructor(e){O(this,"group",new Dt);O(this,"body",new Le(new Ut(1.45,28,28),new Ze({color:"#ff5ea8"})));O(this,"core",new Le(new Ut(.55,16,16),new Ze({color:"#fff2a9"})));O(this,"state",{active:!1,phase:"inactive",armorSequence:[],armorRemaining:0,coreHealth:0,trophySpawned:!1,tile:new se,spawnTile:new se});O(this,"fromTile",new se);O(this,"toTile",new se);O(this,"progress",1);this.body.position.y=1.45,this.core.position.y=1.45,this.group.add(this.body,this.core),e.add(this.group),this.group.visible=!1}begin(e,t){this.state.active=!0,this.state.phase="phase1",this.state.armorSequence=[...t],this.state.armorRemaining=t.length,this.state.coreHealth=2,this.state.trophySpawned=!1,this.state.tile.copy(e),this.state.spawnTile.copy(e),this.fromTile.copy(e),this.toTile.copy(e),this.progress=1,this.group.visible=!0,this.group.position.copy(lt(e.x,e.y)),this.body.material.color.set("#ff5ea8"),this.core.visible=!1}deactivate(){this.state.active=!1,this.state.phase="inactive",this.group.visible=!1}update(e,t,n,s){if(!this.state.active||this.state.phase==="defeated")return;if(s&&this.state.phase==="phase1"&&(this.state.phase="phase2",this.body.material.color.set("#ffa7d0")),this.progress>=1){this.fromTile.copy(this.toTile),this.state.tile.copy(this.fromTile);const l=(this.state.phase==="phase3",n.clone()),c=Ji.findNextStep(t,this.state.tile,l);this.toTile.copy(c),this.progress=0}const r=this.state.phase==="phase3"?4.8:3.7;this.progress=Math.min(1,this.progress+e*r/ce);const a=lt(this.fromTile.x,this.fromTile.y),o=lt(this.toTile.x,this.toTile.y);this.group.position.lerpVectors(a,o,this.progress),this.body.position.y=1.45+Math.sin(performance.now()*.004)*.12,this.core.position.y=1.45,this.core.visible=this.state.phase==="phase3"}registerAttack(e,t){return!this.state.active||this.group.position.distanceTo(t)>4.8?!1:this.state.phase==="phase2"&&this.state.armorSequence[0]===e?(this.state.armorSequence.shift(),this.state.armorRemaining=this.state.armorSequence.length,this.state.armorRemaining<=0&&(this.state.phase="phase3",this.body.material.color.set("#ffd4f0")),!0):this.state.phase==="phase3"?(this.state.coreHealth=Math.max(0,this.state.coreHealth-1),this.core.material.color.set(this.state.coreHealth<=1?"#ff6363":"#fff2a9"),this.state.coreHealth<=0&&(this.state.phase="defeated",this.state.trophySpawned=!0,this.body.material.color.set("#2df0ba"),this.core.visible=!1),!0):!1}getState(){return this.state}getWorldPosition(){return this.group.position.clone()}}const Mp={pulseBurst:"#7efcff",arcShot:"#ff9dd9",dashBreaker:"#ffe166",trophy:"#8cff8a"};class Sp{constructor(e){O(this,"root",new Dt);O(this,"items",new Map);O(this,"pickupGeometry",new or(.42,0));O(this,"trophyGeometry",new Ut(.55,16,16));O(this,"stage",null);O(this,"spawnTiles",[]);O(this,"respawnTimer",0);O(this,"bossSequenceIndex",0);e.add(this.root)}build(e,t){this.clear(),this.stage=e,this.spawnTiles=[...t.guardianTargets,...t.enemySpawns].slice(0,5),this.spawnTiles.length===0&&(this.spawnTiles=[t.playerSpawn.clone().add(new se(3,0))]),this.respawnTimer=e.pickupSpawnRules.respawnSeconds,this.bossSequenceIndex=0;for(let n=0;n<e.pickupSpawnRules.opening.length;n+=1)this.spawnPickup(e.pickupSpawnRules.opening[n],this.spawnTiles[n%this.spawnTiles.length])}update(e,t,n){if(!this.stage)return;const s=Array.from(this.items.values()).filter(a=>a.active&&a.type!=="trophy").length;if(this.respawnTimer-=e,this.respawnTimer<=0&&s===0){if(this.stage.index===5&&t&&n&&this.stage.pickupSpawnRules.bossSequence){const a=this.stage.pickupSpawnRules.bossSequence[this.bossSequenceIndex%this.stage.pickupSpawnRules.bossSequence.length];this.bossSequenceIndex+=1,this.spawnPickup(a,this.spawnTiles[this.bossSequenceIndex%this.spawnTiles.length])}else if(this.stage.pickupSpawnRules.opening.length>0){const a=this.stage.pickupSpawnRules.opening[this.bossSequenceIndex%this.stage.pickupSpawnRules.opening.length];this.bossSequenceIndex+=1,this.spawnPickup(a,this.spawnTiles[this.bossSequenceIndex%this.spawnTiles.length])}this.respawnTimer=this.stage.pickupSpawnRules.respawnSeconds}const r=performance.now()*.001;for(const a of this.items.values())!a.active||(a.mesh.rotation.y+=e*1.8,a.mesh.position.y=(a.type==="trophy"?.85:.68)+Math.sin(r*4+a.tile.x)*.08)}collectAt(e){const t=this.items.get(fn(e));return!t||!t.active?null:(t.active=!1,t.mesh.visible=!1,t.type)}spawnTrophy(e){this.spawnGeneric("trophy",e)}clear(){for(const e of this.items.values())this.root.remove(e.mesh),e.mesh.geometry.dispose(),Array.isArray(e.mesh.material)?e.mesh.material.forEach(t=>t.dispose()):e.mesh.material.dispose();this.items.clear()}spawnPickup(e,t){this.spawnGeneric(e,t)}spawnGeneric(e,t){const n=fn(t),s=this.items.get(n);if(s){s.type=e,s.active=!0,s.mesh.visible=!0;return}const r=new Le(e==="trophy"?this.trophyGeometry.clone():this.pickupGeometry.clone(),new Ze({color:Mp[e]}));r.position.copy(lt(t.x,t.y)),r.position.y=e==="trophy"?.85:.68,this.root.add(r),this.items.set(n,{tile:t.clone(),type:e,mesh:r,active:!0})}}class yp{constructor(e){O(this,"root",new Dt);O(this,"projectiles",[]);O(this,"activeAttack",null);O(this,"dashTimer",0);e.add(this.root)}equip(e){const t=this.getConfig(e);this.activeAttack={type:e,label:t.label,duration:t.duration,maxDuration:t.duration,charges:t.charges,cooldown:0,icon:t.icon}}update(e,t,n){let s=!1;this.activeAttack&&(this.activeAttack.duration=Math.max(0,this.activeAttack.duration-e),this.activeAttack.cooldown=Math.max(0,this.activeAttack.cooldown-e),(this.activeAttack.duration<=0||this.activeAttack.charges<=0)&&(this.activeAttack=null)),this.dashTimer=Math.max(0,this.dashTimer-e);for(let r=this.projectiles.length-1;r>=0;r-=1){const a=this.projectiles[r];a.life-=e,a.mesh.position.addScaledVector(a.velocity,e);for(const o of t.getStates()){const l=new R(o.tileX*2.4+1.2,.8,o.tileY*2.4+1.2);a.mesh.position.distanceTo(l)<1.1&&o.mode!=="defeated"&&o.mode!=="respawning"&&(t.defeatEnemy(o.id),s=!0)}n.registerAttack("arcShot",a.mesh.position.clone())&&(s=!0),a.life<=0&&(this.root.remove(a.mesh),a.mesh.geometry.dispose(),Array.isArray(a.mesh.material)?a.mesh.material.forEach(o=>o.dispose()):a.mesh.material.dispose(),this.projectiles.splice(r,1))}return{attackConnected:s}}useAttack(e,t,n,s){if(!this.activeAttack||this.activeAttack.cooldown>0||this.activeAttack.charges<=0)return!1;let r=!1;if(this.activeAttack.type==="pulseBurst"){for(const a of n.getStates())new R(a.tileX*2.4+1.2,.8,a.tileY*2.4+1.2).distanceTo(e)<5.4&&a.mode!=="defeated"&&a.mode!=="respawning"&&(n.stunEnemy(a.id,1.6),r=!0);r=s.registerAttack("pulseBurst",e.clone())||r,this.activeAttack.cooldown=1.3}else if(this.activeAttack.type==="arcShot"){const a=t.lengthSq()>0?t.clone().normalize():new se(1,0),o=new Le(new Ut(.24,8,8),new Ze({color:"#ff9dd9"}));o.position.copy(e).add(new R(a.x*.8,.5,a.y*.8)),this.root.add(o),this.projectiles.push({mesh:o,velocity:new R(a.x*10,0,a.y*10),life:1.3}),this.activeAttack.cooldown=.45}else this.activeAttack.type==="dashBreaker"&&(this.dashTimer=.8,r=s.registerAttack("dashBreaker",e.clone())||r,this.activeAttack.cooldown=1.6);return this.activeAttack.charges-=1,this.activeAttack.charges<=0&&(this.activeAttack.duration=0),r}resolveDashHits(e,t,n){if(this.dashTimer<=0)return!1;let s=!1;for(const r of t.getStates())new R(r.tileX*2.4+1.2,.8,r.tileY*2.4+1.2).distanceTo(e)<2&&r.mode!=="defeated"&&r.mode!=="respawning"&&(t.defeatEnemy(r.id),s=!0);return s=n.registerAttack("dashBreaker",e.clone())||s,s}getPlayerSpeedMultiplier(){return this.dashTimer>0?1.85:1}getActiveAttack(){return this.activeAttack?{...this.activeAttack}:null}getDashTimer(){return this.dashTimer}dispose(){for(const e of this.projectiles)this.root.remove(e.mesh),e.mesh.geometry.dispose(),Array.isArray(e.mesh.material)?e.mesh.material.forEach(t=>t.dispose()):e.mesh.material.dispose();this.projectiles.length=0}getConfig(e){return e==="pulseBurst"?{label:"Pulse Burst",duration:9,charges:2,icon:"Pulse"}:e==="arcShot"?{label:"Arc Shot",duration:10,charges:4,icon:"Arc"}:{label:"Dash Breaker",duration:8,charges:2,icon:"Dash"}}}class Ep{constructor(e){O(this,"scene",new Nf);O(this,"camera",new wt(50,1,.1,300));O(this,"renderer",new Mo({antialias:!0,powerPreference:"high-performance"}));O(this,"composer");O(this,"bloomPass");O(this,"clock",new bo);O(this,"campaignManager",new _p);O(this,"levelManager",new op);O(this,"objectiveManager",new vp);O(this,"scoreSystem",new dp);O(this,"audioManager",new fp);O(this,"uiManager");O(this,"inputManager");O(this,"mazeRenderer",new cp(this.scene));O(this,"collectibleSystem",new hp);O(this,"attackPickupSystem",new Sp(this.scene));O(this,"collisionSystem",new up);O(this,"player",new lp("#ffe866"));O(this,"enemyAI",new ap);O(this,"bossController",new xp(this.scene));O(this,"effectsManager",new pp(this.scene));O(this,"combatSystem",new yp(this.scene));O(this,"animationFrame",0);O(this,"currentSettings");O(this,"currentStage");O(this,"currentMaze");O(this,"currentGuardTargets",[]);O(this,"enemySpeedMultiplier",1);O(this,"playerSpeedMultiplier",1);O(this,"introTimer",0);O(this,"trophySpawnHandled",!1);O(this,"runtime");O(this,"loop",()=>{this.animationFrame=window.requestAnimationFrame(this.loop);const e=Math.min(Zf,this.clock.getDelta());this.inputManager.update(),this.handleRealtimeInput(),(this.runtime.flow==="stageIntro"||this.runtime.flow==="bossIntro")&&(this.introTimer-=e,this.introTimer<=0&&(this.runtime.flow="playing")),this.runtime.flow==="playing"&&this.updatePlaying(e),this.updateCamera(e),this.collectibleSystem.update(performance.now()*.001);const t=this.bossController.getState();this.attackPickupSystem.update(e,this.collectibleSystem.getRemainingCount()===0,t.phase==="phase2"),this.effectsManager.update(this.currentSettings.cameraShake?e:0,this.camera,this.player.worldPosition),this.syncRuntime(!1),this.render()});O(this,"resize",()=>{const e=this.container.clientWidth||window.innerWidth,t=this.container.clientHeight||window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.composer.setSize(e,t)});this.container=e;const t=this.campaignManager.loadProgress(),n=this.campaignManager.getStage(1);this.currentStage=n,this.currentMaze=this.levelManager.buildLevel(n).maze,this.runtime={flow:"loading",score:0,highScore:this.scoreSystem.highScore,lives:Ga,level:1,currentStageName:n.name,powerModeTimer:0,levelTimer:0,combo:0,bestLevel:1,themeIndex:n.themeIndex,speedrunTime:0,objectiveText:[],activeAttack:null,bossHealth:0,bossPhase:"inactive",campaignProgress:t,trophyCollected:!1},this.scene.fog=new ns("#02050b",.03),this.renderer.setClearColor(new we("#02050b")),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.domElement.className="game-canvas",this.container.append(this.renderer.domElement),this.scene.add(this.player.group),this.scene.add(this.enemyAI.group),this.composer=new Wf(this.renderer),this.composer.addPass(new Xf(this.scene,this.camera)),this.bloomPass=new si(new se(1280,720),.72,.68,.24),this.composer.addPass(this.bloomPass),this.uiManager=new gp(e),this.inputManager=new mp(e),this.currentSettings=this.loadSettings()}init(){this.inputManager.init(),this.wireUI(),this.applySettings(this.currentSettings),this.resize(),this.loadStage(1,!0),this.runtime.flow="menu",this.syncRuntime(),this.uiManager.showLoading(!1),this.animationFrame=window.requestAnimationFrame(this.loop),window.addEventListener("resize",this.resize)}dispose(){window.cancelAnimationFrame(this.animationFrame),window.removeEventListener("resize",this.resize),this.inputManager.dispose(),this.uiManager.dispose(),this.audioManager.dispose(),this.combatSystem.dispose()}wireUI(){this.uiManager.onAction=e=>{this.audioManager.playMenuClick(),this.handleUiAction(e)},this.uiManager.onSettingChange=e=>{this.currentSettings={...this.currentSettings,...e},window.localStorage.setItem(ri.settings,JSON.stringify(this.currentSettings)),this.applySettings(this.currentSettings),this.syncRuntime()}}handleUiAction(e){if(e==="open-campaign")this.runtime.flow="campaignMap";else if(e==="start"||e==="restart"||e==="play-again"){this.audioManager.ensureStarted(),this.startNewCampaign();return}else if(e==="continue"){this.audioManager.ensureStarted(),this.continueCampaign();return}else e==="open-how-to"?this.runtime.flow="howToPlay":e==="open-settings"?this.runtime.flow="settings":e==="open-credits"?this.runtime.flow="credits":e==="back-to-menu"?this.runtime.flow="menu":e==="resume"?this.resumeGame():e==="toggle-pause"?this.togglePause():e==="use-attack"&&this.tryUseAttack();this.syncRuntime()}startNewCampaign(){this.scoreSystem.reset(),this.runtime.score=0,this.runtime.lives=Ga,this.runtime.speedrunTime=0,this.runtime.campaignProgress=this.campaignManager.resetProgress(),this.loadStage(1,!0),this.enterIntroFlow()}continueCampaign(){const e=Math.max(1,this.runtime.campaignProgress.lastStageIndex);this.loadStage(e,!0),this.enterIntroFlow()}enterIntroFlow(){this.runtime.flow=this.currentStage.index===5?"bossIntro":"stageIntro",this.introTimer=1.6,this.uiManager.showBanner(`Stage ${this.currentStage.index}: ${this.currentStage.name}`),this.syncRuntime()}loadStage(e,t){var a,o;const n=this.campaignManager.getStage(e),s=this.levelManager.buildLevel(n);this.currentStage=n,this.currentMaze=s.maze,this.currentGuardTargets=s.maze.guardianTargets,this.enemySpeedMultiplier=s.enemySpeedMultiplier,this.playerSpeedMultiplier=s.playerSpeedMultiplier;const r=this.campaignManager.getThemeForStage(n.index);if(this.scene.background=new we(r.background),this.scene.fog=new ns(r.haze,r.hazeDensity),this.player.setColor(r.player),this.mazeRenderer.build(s.maze,r,n),this.collectibleSystem.build(this.scene,s.maze,r.pellet,r.power),this.attackPickupSystem.build(n,s.maze),this.enemyAI.build(s.enemies),this.player.spawn(s.maze.playerSpawn.x,s.maze.playerSpawn.y),this.player.invincibilityTimer=t?1.1:za,this.runtime.level=n.index,this.runtime.currentStageName=n.name,this.runtime.powerModeTimer=0,this.runtime.levelTimer=0,this.runtime.themeIndex=n.themeIndex,this.runtime.trophyCollected=!1,this.enemyAI.setFrightened(!1),this.effectsManager.triggerLevelTransition(),this.trophySpawnHandled=!1,n.index===5){const l=(a=s.maze.enemySpawns[0])!=null?a:s.maze.playerSpawn.clone().add(new se(5,0));this.bossController.begin(l,(o=n.pickupSpawnRules.bossSequence)!=null?o:[]);const c=this.bossController.getState();this.objectiveManager.init(n,s.maze.collectibles.length,c.armorRemaining,c.coreHealth)}else this.bossController.deactivate(),this.objectiveManager.init(n,s.maze.collectibles.length)}handleRealtimeInput(){this.inputManager.wasPressed("up")&&this.player.updateInputFromAction("up"),this.inputManager.wasPressed("down")&&this.player.updateInputFromAction("down"),this.inputManager.wasPressed("left")&&this.player.updateInputFromAction("left"),this.inputManager.wasPressed("right")&&this.player.updateInputFromAction("right"),this.inputManager.wasPressed("pause")&&this.togglePause(),this.inputManager.wasPressed("attack")&&this.tryUseAttack()}updatePlaying(e){var o,l;this.runtime.levelTimer+=e,this.runtime.speedrunTime+=e,this.runtime.powerModeTimer=Math.max(0,this.runtime.powerModeTimer-e),this.runtime.powerModeTimer<=0&&(this.enemyAI.setFrightened(!1),this.scoreSystem.breakCombo()),this.player.update(e,this.currentMaze,this.playerSpeedMultiplier*this.combatSystem.getPlayerSpeedMultiplier(),this.runtime.powerModeTimer>0),this.enemyAI.update(e,this.currentMaze,this.player.tile.clone(),this.player.direction.clone(),this.currentGuardTargets,this.runtime.powerModeTimer>0,this.runtime.powerModeTimer,this.enemySpeedMultiplier,this.currentStage.hazardRules.roamerRageRadius),this.currentStage.index===5&&this.bossController.update(e,this.currentMaze,this.player.tile.clone(),this.collectibleSystem.getRemainingCount()===0);const t=this.collectibleSystem.collectAt(this.player.tile.clone());t&&(this.handleStandardCollectible(),t.kind==="power"?(this.player.bounce(1.2),this.effectsManager.spawnPelletBurst(t.mesh.position.clone(),"#ff7af6",!0),this.runtime.powerModeTimer=$f,this.scoreSystem.addPowerOrb(),this.enemyAI.setFrightened(!0),this.audioManager.playPowerOrb(),this.audioManager.playPowerShift(),this.uiManager.showBanner("Power orb: eat enemies")):(this.player.bounce(.45),this.effectsManager.spawnPelletBurst(t.mesh.position.clone(),"#8be7ff",!1),this.scoreSystem.addPellet(),this.audioManager.playPellet()));const n=this.attackPickupSystem.collectAt(this.player.tile.clone());if(n){if(n==="trophy"){this.runtime.trophyCollected=!0,this.objectiveManager.onTrophyCollected(this.currentStage,this.bossController.getState().phase),this.triggerVictory();return}this.combatSystem.equip(n),this.audioManager.playAttack(),this.effectsManager.spawnPelletBurst(this.player.worldPosition.clone(),"#ffe166",!0),this.uiManager.showBanner(`Armed: ${(l=(o=this.runtime.activeAttack)==null?void 0:o.label)!=null?l:n}`)}(this.combatSystem.update(e,this.enemyAI,this.bossController).attackConnected||this.combatSystem.resolveDashHits(this.player.worldPosition.clone(),this.enemyAI,this.bossController))&&(this.audioManager.playAttack(),this.effectsManager.spawnPelletBurst(this.player.worldPosition.clone(),"#ff9dd9",!1));const r=this.bossController.getState();this.objectiveManager.onBossArmorChanged(this.currentStage,r.armorRemaining,r.phase),this.objectiveManager.onBossHealthChanged(this.currentStage,r.coreHealth,r.phase),r.trophySpawned&&!this.trophySpawnHandled&&(this.attackPickupSystem.spawnTrophy(r.tile.clone()),this.uiManager.showBanner("Trophy exposed"),this.trophySpawnHandled=!0);const a=this.collisionSystem.findEnemyCollision(this.player.worldPosition.clone(),this.enemyAI.getCollisionTargets(),this.runtime.powerModeTimer>0);if(a)if(this.runtime.powerModeTimer>0&&a.mode!=="defeated"&&a.mode!=="respawning"){const c=this.scoreSystem.addEnemyDefeat();this.enemyAI.defeatEnemy(a.id),this.effectsManager.spawnPelletBurst(new R(a.worldX,0,a.worldZ),a.color,!0),this.uiManager.showBanner(`Enemy down +${c}`),this.audioManager.playEnemyDefeated()}else this.player.invincibilityTimer<=0&&this.handlePlayerCaught();r.active&&r.phase!=="defeated"&&this.bossController.getWorldPosition().distanceTo(this.player.worldPosition)<2.2&&this.player.invincibilityTimer<=0&&this.handlePlayerCaught(),this.currentStage.index<5&&this.collectibleSystem.getRemainingCount()===0&&this.completeStage()}handleStandardCollectible(){this.objectiveManager.onPelletCollected(this.currentStage)}tryUseAttack(){if(this.runtime.flow!=="playing")return;this.combatSystem.useAttack(this.player.worldPosition.clone(),this.player.direction.clone(),this.enemyAI,this.bossController)&&(this.audioManager.playAttack(),this.effectsManager.spawnPelletBurst(this.player.worldPosition.clone(),"#7efcff",!0)),this.syncRuntime()}completeStage(){const e=this.scoreSystem.addLevelClear(this.runtime.level,this.runtime.levelTimer);if(this.runtime.campaignProgress=this.campaignManager.updateProgress(this.currentStage.index,this.runtime.speedrunTime,this.runtime.campaignProgress),this.uiManager.showBanner(`District clear +${e}`),this.audioManager.playLevelClear(),this.currentStage.index>=5){this.triggerVictory();return}this.loadStage(this.currentStage.index+1,!1),this.enterIntroFlow()}triggerVictory(){this.runtime.campaignProgress=this.campaignManager.updateProgress(5,this.runtime.speedrunTime,this.runtime.campaignProgress),this.runtime.flow="victory",this.audioManager.playVictory(),this.syncRuntime()}handlePlayerCaught(){this.runtime.lives-=1,this.runtime.powerModeTimer=0,this.scoreSystem.breakCombo(),this.effectsManager.triggerCatchShake(),this.audioManager.playCaught(),this.player.invincibilityTimer=za,this.player.spawn(this.currentMaze.playerSpawn.x,this.currentMaze.playerSpawn.y),this.enemyAI.resetPositions(),this.runtime.lives<=0&&(this.runtime.flow="gameOver",this.syncRuntime())}updateCamera(e){const t=this.runtime.flow==="stageIntro"||this.runtime.flow==="bossIntro"?1+Ao(this.introTimer,0,1.4)*.25:1,n=this.player.worldPosition.clone(),s=n.x-Ha*t,r=Qf*t,a=n.z+Ha*.9*t;this.camera.position.x=Zi(this.camera.position.x,s,qs,e),this.camera.position.y=Zi(this.camera.position.y,r,qs,e),this.camera.position.z=Zi(this.camera.position.z,a,qs,e),this.camera.lookAt(new R(n.x,0,n.z)),this.mazeRenderer.updateLight(n.x,n.z,this.campaignManager.getThemeForStage(this.currentStage.index).player)}render(){this.composer.render()}togglePause(){this.runtime.flow==="playing"?(this.runtime.flow="paused",this.audioManager.playPause()):this.runtime.flow==="paused"&&this.resumeGame(),this.syncRuntime()}resumeGame(){this.runtime.flow==="paused"&&(this.runtime.flow="playing",this.audioManager.playPause()),this.syncRuntime()}syncRuntime(e=!0){const t=this.bossController.getState();this.runtime.score=this.scoreSystem.score,this.runtime.highScore=this.scoreSystem.highScore,this.runtime.combo=this.scoreSystem.combo,this.runtime.bestLevel=Math.max(this.runtime.bestLevel,this.runtime.level),this.runtime.objectiveText=this.objectiveManager.getState().currentText,this.runtime.activeAttack=this.combatSystem.getActiveAttack(),this.runtime.bossHealth=t.coreHealth,this.runtime.bossPhase=t.phase,this.uiManager.updateRuntime(this.runtime),e&&this.uiManager.setFlow(this.runtime.flow,this.runtime,this.currentSettings,this.campaignManager.getStages())}applySettings(e){this.currentSettings=e,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)*np[e.quality]),this.bloomPass.strength=e.bloomEnabled?e.quality==="high"?.72:e.quality==="medium"?.46:.22:0,this.audioManager.applySettings(e),this.resize()}loadSettings(){const e=window.localStorage.getItem(ri.settings);return e?{...Va,...JSON.parse(e)}:{...Va}}}const Ro=document.querySelector("#app");if(!Ro)throw new Error("Missing #app root element.");const bp=new Ep(Ro);bp.init();
