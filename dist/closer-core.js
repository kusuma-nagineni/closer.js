(function(definition){if(typeof exports==="object"){module.exports=definition();}else if(typeof define==="function"&&define.amd){define(definition);}else{mori=definition();}})(function(){return function(){
var f,aa=this;
function m(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==
b&&"undefined"==typeof a.call)return"object";return b}var ba="closure_uid_"+(1E9*Math.random()>>>0),ca=0;function n(a,b){var c=a.split("."),d=aa;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d=d[e]?d[e]:d[e]={}:d[e]=b};function da(a,b){a.sort(b||ea)}function fa(a,b){for(var c=0;c<a.length;c++)a[c]={index:c,value:a[c]};var d=b||ea;da(a,function(a,b){return d(a.value,b.value)||a.index-b.index});for(c=0;c<a.length;c++)a[c]=a[c].value}function ea(a,b){return a>b?1:a<b?-1:0};function ga(a,b){for(var c in a)b.call(void 0,a[c],c,a)};function ha(a,b){null!=a&&this.append.apply(this,arguments)}ha.prototype.Ja="";ha.prototype.append=function(a,b,c){this.Ja+=a;if(null!=b)for(var d=1;d<arguments.length;d++)this.Ja+=arguments[d];return this};ha.prototype.toString=function(){return this.Ja};var ia,ja=null;function ka(){return new ma(null,5,[oa,!0,pa,!0,qa,!1,ra,!1,sa,null],null)}function p(a){return null!=a&&!1!==a}function ta(a){return p(a)?!1:!0}function s(a,b){return a[m(null==b?null:b)]?!0:a._?!0:t?!1:null}function ua(a){return null==a?null:a.constructor}function v(a,b){var c=ua(b),c=p(p(c)?c.bb:c)?c.ab:m(b);return Error(["No protocol method ",a," defined for type ",c,": ",b].join(""))}function va(a){var b=a.ab;return p(b)?b:""+w(a)}
function wa(a){for(var b=a.length,c=Array(b),d=0;;)if(d<b)c[d]=a[d],d+=1;else break;return c}function xa(a){return Array.prototype.slice.call(arguments)}
var za=function(){function a(a,b){return x.c?x.c(function(a,b){a.push(b);return a},[],b):x.call(null,function(a,b){a.push(b);return a},[],b)}function b(a){return c.a(null,a)}var c=null,c=function(d,c){switch(arguments.length){case 1:return b.call(this,d);case 2:return a.call(this,0,c)}throw Error("Invalid arity: "+arguments.length);};c.b=b;c.a=a;return c}(),Aa={},Ba={};
function Ca(a){if(a?a.J:a)return a.J(a);var b;b=Ca[m(null==a?null:a)];if(!b&&(b=Ca._,!b))throw v("ICounted.-count",a);return b.call(null,a)}function Da(a){if(a?a.G:a)return a.G(a);var b;b=Da[m(null==a?null:a)];if(!b&&(b=Da._,!b))throw v("IEmptyableCollection.-empty",a);return b.call(null,a)}var Ea={};function Fa(a,b){if(a?a.D:a)return a.D(a,b);var c;c=Fa[m(null==a?null:a)];if(!c&&(c=Fa._,!c))throw v("ICollection.-conj",a);return c.call(null,a,b)}
var Ga={},y=function(){function a(a,b,c){if(a?a.$:a)return a.$(a,b,c);var h;h=y[m(null==a?null:a)];if(!h&&(h=y._,!h))throw v("IIndexed.-nth",a);return h.call(null,a,b,c)}function b(a,b){if(a?a.P:a)return a.P(a,b);var c;c=y[m(null==a?null:a)];if(!c&&(c=y._,!c))throw v("IIndexed.-nth",a);return c.call(null,a,b)}var c=null,c=function(c,e,g){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,g)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.c=a;return c}(),
Ha={};function Ia(a){if(a?a.O:a)return a.O(a);var b;b=Ia[m(null==a?null:a)];if(!b&&(b=Ia._,!b))throw v("ISeq.-first",a);return b.call(null,a)}function Ja(a){if(a?a.T:a)return a.T(a);var b;b=Ja[m(null==a?null:a)];if(!b&&(b=Ja._,!b))throw v("ISeq.-rest",a);return b.call(null,a)}
var Ka={},La={},Ma=function(){function a(a,b,c){if(a?a.u:a)return a.u(a,b,c);var h;h=Ma[m(null==a?null:a)];if(!h&&(h=Ma._,!h))throw v("ILookup.-lookup",a);return h.call(null,a,b,c)}function b(a,b){if(a?a.t:a)return a.t(a,b);var c;c=Ma[m(null==a?null:a)];if(!c&&(c=Ma._,!c))throw v("ILookup.-lookup",a);return c.call(null,a,b)}var c=null,c=function(c,e,g){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,g)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.c=
a;return c}(),Oa={};function Pa(a,b){if(a?a.Wa:a)return a.Wa(a,b);var c;c=Pa[m(null==a?null:a)];if(!c&&(c=Pa._,!c))throw v("IAssociative.-contains-key?",a);return c.call(null,a,b)}function Qa(a,b,c){if(a?a.pa:a)return a.pa(a,b,c);var d;d=Qa[m(null==a?null:a)];if(!d&&(d=Qa._,!d))throw v("IAssociative.-assoc",a);return d.call(null,a,b,c)}var Ra={};function Sa(a,b){if(a?a.Za:a)return a.Za(a,b);var c;c=Sa[m(null==a?null:a)];if(!c&&(c=Sa._,!c))throw v("IMap.-dissoc",a);return c.call(null,a,b)}var Ta={};
function Ua(a){if(a?a.La:a)return a.La(a);var b;b=Ua[m(null==a?null:a)];if(!b&&(b=Ua._,!b))throw v("IMapEntry.-key",a);return b.call(null,a)}function Va(a){if(a?a.Ma:a)return a.Ma(a);var b;b=Va[m(null==a?null:a)];if(!b&&(b=Va._,!b))throw v("IMapEntry.-val",a);return b.call(null,a)}var Wa={};function Xa(a,b){if(a?a.vb:a)return a.vb(a,b);var c;c=Xa[m(null==a?null:a)];if(!c&&(c=Xa._,!c))throw v("ISet.-disjoin",a);return c.call(null,a,b)}
function Ya(a){if(a?a.wa:a)return a.wa(a);var b;b=Ya[m(null==a?null:a)];if(!b&&(b=Ya._,!b))throw v("IStack.-peek",a);return b.call(null,a)}function Za(a){if(a?a.xa:a)return a.xa(a);var b;b=Za[m(null==a?null:a)];if(!b&&(b=Za._,!b))throw v("IStack.-pop",a);return b.call(null,a)}var $a={};function ab(a,b,c){if(a?a.za:a)return a.za(a,b,c);var d;d=ab[m(null==a?null:a)];if(!d&&(d=ab._,!d))throw v("IVector.-assoc-n",a);return d.call(null,a,b,c)}
function bb(a){if(a?a.hb:a)return a.hb(a);var b;b=bb[m(null==a?null:a)];if(!b&&(b=bb._,!b))throw v("IDeref.-deref",a);return b.call(null,a)}var cb={};function db(a){if(a?a.B:a)return a.B(a);var b;b=db[m(null==a?null:a)];if(!b&&(b=db._,!b))throw v("IMeta.-meta",a);return b.call(null,a)}var eb={};function fb(a,b){if(a?a.C:a)return a.C(a,b);var c;c=fb[m(null==a?null:a)];if(!c&&(c=fb._,!c))throw v("IWithMeta.-with-meta",a);return c.call(null,a,b)}
var gb={},hb=function(){function a(a,b,c){if(a?a.K:a)return a.K(a,b,c);var h;h=hb[m(null==a?null:a)];if(!h&&(h=hb._,!h))throw v("IReduce.-reduce",a);return h.call(null,a,b,c)}function b(a,b){if(a?a.N:a)return a.N(a,b);var c;c=hb[m(null==a?null:a)];if(!c&&(c=hb._,!c))throw v("IReduce.-reduce",a);return c.call(null,a,b)}var c=null,c=function(c,e,g){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,g)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.c=a;return c}();
function jb(a,b,c){if(a?a.Ka:a)return a.Ka(a,b,c);var d;d=jb[m(null==a?null:a)];if(!d&&(d=jb._,!d))throw v("IKVReduce.-kv-reduce",a);return d.call(null,a,b,c)}function kb(a,b){if(a?a.v:a)return a.v(a,b);var c;c=kb[m(null==a?null:a)];if(!c&&(c=kb._,!c))throw v("IEquiv.-equiv",a);return c.call(null,a,b)}function lb(a){if(a?a.A:a)return a.A(a);var b;b=lb[m(null==a?null:a)];if(!b&&(b=lb._,!b))throw v("IHash.-hash",a);return b.call(null,a)}var mb={};
function nb(a){if(a?a.F:a)return a.F(a);var b;b=nb[m(null==a?null:a)];if(!b&&(b=nb._,!b))throw v("ISeqable.-seq",a);return b.call(null,a)}var ob={},pb={},qb={};function rb(a){if(a?a.Ga:a)return a.Ga(a);var b;b=rb[m(null==a?null:a)];if(!b&&(b=rb._,!b))throw v("IReversible.-rseq",a);return b.call(null,a)}function sb(a,b){if(a?a.yb:a)return a.yb(a,b);var c;c=sb[m(null==a?null:a)];if(!c&&(c=sb._,!c))throw v("ISorted.-sorted-seq",a);return c.call(null,a,b)}
function tb(a,b,c){if(a?a.zb:a)return a.zb(a,b,c);var d;d=tb[m(null==a?null:a)];if(!d&&(d=tb._,!d))throw v("ISorted.-sorted-seq-from",a);return d.call(null,a,b,c)}function ub(a,b){if(a?a.xb:a)return a.xb(a,b);var c;c=ub[m(null==a?null:a)];if(!c&&(c=ub._,!c))throw v("ISorted.-entry-key",a);return c.call(null,a,b)}function vb(a){if(a?a.wb:a)return a.wb(a);var b;b=vb[m(null==a?null:a)];if(!b&&(b=vb._,!b))throw v("ISorted.-comparator",a);return b.call(null,a)}
function z(a,b){if(a?a.Qb:a)return a.Qb(0,b);var c;c=z[m(null==a?null:a)];if(!c&&(c=z._,!c))throw v("IWriter.-write",a);return c.call(null,a,b)}var xb={};function yb(a,b,c){if(a?a.w:a)return a.w(a,b,c);var d;d=yb[m(null==a?null:a)];if(!d&&(d=yb._,!d))throw v("IPrintWithWriter.-pr-writer",a);return d.call(null,a,b,c)}function zb(a,b,c){if(a?a.Pb:a)return a.Pb(0,b,c);var d;d=zb[m(null==a?null:a)];if(!d&&(d=zb._,!d))throw v("IWatchable.-notify-watches",a);return d.call(null,a,b,c)}
function Ab(a){if(a?a.Ea:a)return a.Ea(a);var b;b=Ab[m(null==a?null:a)];if(!b&&(b=Ab._,!b))throw v("IEditableCollection.-as-transient",a);return b.call(null,a)}function Bb(a,b){if(a?a.qa:a)return a.qa(a,b);var c;c=Bb[m(null==a?null:a)];if(!c&&(c=Bb._,!c))throw v("ITransientCollection.-conj!",a);return c.call(null,a,b)}function Cb(a){if(a?a.ya:a)return a.ya(a);var b;b=Cb[m(null==a?null:a)];if(!b&&(b=Cb._,!b))throw v("ITransientCollection.-persistent!",a);return b.call(null,a)}
function Db(a,b,c){if(a?a.Oa:a)return a.Oa(a,b,c);var d;d=Db[m(null==a?null:a)];if(!d&&(d=Db._,!d))throw v("ITransientAssociative.-assoc!",a);return d.call(null,a,b,c)}function Eb(a,b){if(a?a.Ab:a)return a.Ab(a,b);var c;c=Eb[m(null==a?null:a)];if(!c&&(c=Eb._,!c))throw v("ITransientMap.-dissoc!",a);return c.call(null,a,b)}function Fb(a,b,c){if(a?a.Nb:a)return a.Nb(0,b,c);var d;d=Fb[m(null==a?null:a)];if(!d&&(d=Fb._,!d))throw v("ITransientVector.-assoc-n!",a);return d.call(null,a,b,c)}
function Gb(a){if(a?a.Ob:a)return a.Ob();var b;b=Gb[m(null==a?null:a)];if(!b&&(b=Gb._,!b))throw v("ITransientVector.-pop!",a);return b.call(null,a)}function Hb(a,b){if(a?a.Mb:a)return a.Mb(0,b);var c;c=Hb[m(null==a?null:a)];if(!c&&(c=Hb._,!c))throw v("ITransientSet.-disjoin!",a);return c.call(null,a,b)}function Ib(a){if(a?a.Ib:a)return a.Ib();var b;b=Ib[m(null==a?null:a)];if(!b&&(b=Ib._,!b))throw v("IChunk.-drop-first",a);return b.call(null,a)}
function Jb(a){if(a?a.fb:a)return a.fb(a);var b;b=Jb[m(null==a?null:a)];if(!b&&(b=Jb._,!b))throw v("IChunkedSeq.-chunked-first",a);return b.call(null,a)}function Kb(a){if(a?a.gb:a)return a.gb(a);var b;b=Kb[m(null==a?null:a)];if(!b&&(b=Kb._,!b))throw v("IChunkedSeq.-chunked-rest",a);return b.call(null,a)}function Lb(a){if(a?a.eb:a)return a.eb(a);var b;b=Lb[m(null==a?null:a)];if(!b&&(b=Lb._,!b))throw v("IChunkedNext.-chunked-next",a);return b.call(null,a)}
function Mb(a){this.kc=a;this.p=0;this.h=1073741824}Mb.prototype.Qb=function(a,b){return this.kc.append(b)};function Nb(a){var b=new ha;a.w(null,new Mb(b),ka());return""+w(b)}function Ob(a,b){if(p(Pb.a?Pb.a(a,b):Pb.call(null,a,b)))return 0;var c=ta(a.X);if(p(c?b.X:c))return-1;if(p(a.X)){if(ta(b.X))return 1;c=Qb.a?Qb.a(a.X,b.X):Qb.call(null,a.X,b.X);return 0===c?Qb.a?Qb.a(a.name,b.name):Qb.call(null,a.name,b.name):c}return Rb?Qb.a?Qb.a(a.name,b.name):Qb.call(null,a.name,b.name):null}
function Sb(a,b,c,d,e){this.X=a;this.name=b;this.ua=c;this.va=d;this.V=e;this.h=2154168321;this.p=4096}f=Sb.prototype;f.w=function(a,b){return z(b,this.ua)};f.A=function(){var a=this.va;return null!=a?a:this.va=a=Tb.a?Tb.a(A.b?A.b(this.X):A.call(null,this.X),A.b?A.b(this.name):A.call(null,this.name)):Tb.call(null,A.b?A.b(this.X):A.call(null,this.X),A.b?A.b(this.name):A.call(null,this.name))};f.C=function(a,b){return new Sb(this.X,this.name,this.ua,this.va,b)};f.B=function(){return this.V};
f.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return Ma.c(c,this,null);case 3:return Ma.c(c,this,d)}throw Error("Invalid arity: "+arguments.length);}}();f.apply=function(a,b){return this.call.apply(this,[this].concat(wa(b)))};f.b=function(a){return Ma.c(a,this,null)};f.a=function(a,b){return Ma.c(a,this,b)};f.v=function(a,b){return b instanceof Sb?this.ua===b.ua:!1};f.toString=function(){return this.ua};
function C(a){if(null==a)return null;if(a&&(a.h&8388608||a.ac))return a.F(null);if(a instanceof Array||"string"===typeof a)return 0===a.length?null:new Ub(a,0);if(s(mb,a))return nb(a);if(t)throw Error([w(a),w("is not ISeqable")].join(""));return null}function D(a){if(null==a)return null;if(a&&(a.h&64||a.Na))return a.O(null);a=C(a);return null==a?null:Ia(a)}function E(a){return null!=a?a&&(a.h&64||a.Na)?a.T(null):(a=C(a))?Ja(a):F:F}
function G(a){return null==a?null:a&&(a.h&128||a.$a)?a.S(null):C(E(a))}
var Pb=function(){function a(a,b){return null==a?null==b:a===b||kb(a,b)}var b=null,c=function(){function a(b,d,k){var l=null;2<arguments.length&&(l=H(Array.prototype.slice.call(arguments,2),0));return c.call(this,b,d,l)}function c(a,d,e){for(;;)if(b.a(a,d))if(G(e))a=d,d=D(e),e=G(e);else return b.a(d,D(e));else return!1}a.i=2;a.f=function(a){var b=D(a);a=G(a);var d=D(a);a=E(a);return c(b,d,a)};a.e=c;return a}(),b=function(b,e,g){switch(arguments.length){case 1:return!0;case 2:return a.call(this,b,
e);default:return c.e(b,e,H(arguments,2))}throw Error("Invalid arity: "+arguments.length);};b.i=2;b.f=c.f;b.b=function(){return!0};b.a=a;b.e=c.e;return b}();Ba["null"]=!0;Ca["null"]=function(){return 0};Date.prototype.v=function(a,b){return b instanceof Date&&this.toString()===b.toString()};kb.number=function(a,b){return a===b};cb["function"]=!0;db["function"]=function(){return null};Aa["function"]=!0;lb._=function(a){return a[ba]||(a[ba]=++ca)};function Vb(a){this.k=a;this.p=0;this.h=32768}
Vb.prototype.hb=function(){return this.k};function Wb(a){return a instanceof Vb}
var Xb=function(){function a(a,b,c,d){for(var l=Ca(a);;)if(d<l){c=b.a?b.a(c,y.a(a,d)):b.call(null,c,y.a(a,d));if(Wb(c))return I.b?I.b(c):I.call(null,c);d+=1}else return c}function b(a,b,c){for(var d=Ca(a),l=0;;)if(l<d){c=b.a?b.a(c,y.a(a,l)):b.call(null,c,y.a(a,l));if(Wb(c))return I.b?I.b(c):I.call(null,c);l+=1}else return c}function c(a,b){var c=Ca(a);if(0===c)return b.m?b.m():b.call(null);for(var d=y.a(a,0),l=1;;)if(l<c){d=b.a?b.a(d,y.a(a,l)):b.call(null,d,y.a(a,l));if(Wb(d))return I.b?I.b(d):I.call(null,
d);l+=1}else return d}var d=null,d=function(d,g,h,k){switch(arguments.length){case 2:return c.call(this,d,g);case 3:return b.call(this,d,g,h);case 4:return a.call(this,d,g,h,k)}throw Error("Invalid arity: "+arguments.length);};d.a=c;d.c=b;d.n=a;return d}(),Yb=function(){function a(a,b,c,d){for(var l=a.length;;)if(d<l){c=b.a?b.a(c,a[d]):b.call(null,c,a[d]);if(Wb(c))return I.b?I.b(c):I.call(null,c);d+=1}else return c}function b(a,b,c){for(var d=a.length,l=0;;)if(l<d){c=b.a?b.a(c,a[l]):b.call(null,c,
a[l]);if(Wb(c))return I.b?I.b(c):I.call(null,c);l+=1}else return c}function c(a,b){var c=a.length;if(0===a.length)return b.m?b.m():b.call(null);for(var d=a[0],l=1;;)if(l<c){d=b.a?b.a(d,a[l]):b.call(null,d,a[l]);if(Wb(d))return I.b?I.b(d):I.call(null,d);l+=1}else return d}var d=null,d=function(d,g,h,k){switch(arguments.length){case 2:return c.call(this,d,g);case 3:return b.call(this,d,g,h);case 4:return a.call(this,d,g,h,k)}throw Error("Invalid arity: "+arguments.length);};d.a=c;d.c=b;d.n=a;return d}();
function Zb(a){return a?a.h&2||a.Tb?!0:a.h?!1:s(Ba,a):s(Ba,a)}function $b(a){return a?a.h&16||a.Jb?!0:a.h?!1:s(Ga,a):s(Ga,a)}function Ub(a,b){this.d=a;this.o=b;this.h=166199550;this.p=8192}f=Ub.prototype;f.A=function(){return ac.b?ac.b(this):ac.call(null,this)};f.S=function(){return this.o+1<this.d.length?new Ub(this.d,this.o+1):null};f.D=function(a,b){return J.a?J.a(b,this):J.call(null,b,this)};f.Ga=function(){var a=Ca(this);return 0<a?new bc(this,a-1,null):null};f.toString=function(){return Nb(this)};
f.N=function(a,b){return Yb.n(this.d,b,this.d[this.o],this.o+1)};f.K=function(a,b,c){return Yb.n(this.d,b,c,this.o)};f.F=function(){return this};f.J=function(){return this.d.length-this.o};f.O=function(){return this.d[this.o]};f.T=function(){return this.o+1<this.d.length?new Ub(this.d,this.o+1):F};f.v=function(a,b){return cc.a?cc.a(this,b):cc.call(null,this,b)};f.P=function(a,b){var c=b+this.o;return c<this.d.length?this.d[c]:null};f.$=function(a,b,c){a=b+this.o;return a<this.d.length?this.d[a]:c};
f.G=function(){return F};
var dc=function(){function a(a,b){return b<a.length?new Ub(a,b):null}function b(a){return c.a(a,0)}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);};c.b=b;c.a=a;return c}(),H=function(){function a(a,b){return dc.a(a,b)}function b(a){return dc.a(a,0)}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);
};c.b=b;c.a=a;return c}();function bc(a,b,c){this.Va=a;this.o=b;this.j=c;this.h=32374990;this.p=8192}f=bc.prototype;f.A=function(){return ac.b?ac.b(this):ac.call(null,this)};f.S=function(){return 0<this.o?new bc(this.Va,this.o-1,null):null};f.D=function(a,b){return J.a?J.a(b,this):J.call(null,b,this)};f.toString=function(){return Nb(this)};f.N=function(a,b){return K.a?K.a(b,this):K.call(null,b,this)};f.K=function(a,b,c){return K.c?K.c(b,c,this):K.call(null,b,c,this)};f.F=function(){return this};
f.J=function(){return this.o+1};f.O=function(){return y.a(this.Va,this.o)};f.T=function(){return 0<this.o?new bc(this.Va,this.o-1,null):F};f.v=function(a,b){return cc.a?cc.a(this,b):cc.call(null,this,b)};f.C=function(a,b){return new bc(this.Va,this.o,b)};f.B=function(){return this.j};f.G=function(){return M.a?M.a(F,this.j):M.call(null,F,this.j)};function ec(a){for(;;){var b=G(a);if(null!=b)a=b;else return D(a)}}kb._=function(a,b){return a===b};
var fc=function(){function a(a,b){return null!=a?Fa(a,b):Fa(F,b)}var b=null,c=function(){function a(b,d,k){var l=null;2<arguments.length&&(l=H(Array.prototype.slice.call(arguments,2),0));return c.call(this,b,d,l)}function c(a,d,e){for(;;)if(p(e))a=b.a(a,d),d=D(e),e=G(e);else return b.a(a,d)}a.i=2;a.f=function(a){var b=D(a);a=G(a);var d=D(a);a=E(a);return c(b,d,a)};a.e=c;return a}(),b=function(b,e,g){switch(arguments.length){case 2:return a.call(this,b,e);default:return c.e(b,e,H(arguments,2))}throw Error("Invalid arity: "+
arguments.length);};b.i=2;b.f=c.f;b.a=a;b.e=c.e;return b}();function gc(a){return null==a?null:Da(a)}function N(a){if(null!=a)if(a&&(a.h&2||a.Tb))a=a.J(null);else if(a instanceof Array)a=a.length;else if("string"===typeof a)a=a.length;else if(s(Ba,a))a=Ca(a);else if(t)a:{a=C(a);for(var b=0;;){if(Zb(a)){a=b+Ca(a);break a}a=G(a);b+=1}a=void 0}else a=null;else a=0;return a}
var hc=function(){function a(a,b,c){for(;;){if(null==a)return c;if(0===b)return C(a)?D(a):c;if($b(a))return y.c(a,b,c);if(C(a))a=G(a),b-=1;else return t?c:null}}function b(a,b){for(;;){if(null==a)throw Error("Index out of bounds");if(0===b){if(C(a))return D(a);throw Error("Index out of bounds");}if($b(a))return y.a(a,b);if(C(a)){var c=G(a),h=b-1;a=c;b=h}else{if(t)throw Error("Index out of bounds");return null}}}var c=null,c=function(c,e,g){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,
c,e,g)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.c=a;return c}(),O=function(){function a(a,b,c){if("number"!==typeof b)throw Error("index argument to nth must be a number.");if(null==a)return c;if(a&&(a.h&16||a.Jb))return a.$(null,b,c);if(a instanceof Array||"string"===typeof a)return b<a.length?a[b]:c;if(s(Ga,a))return y.a(a,b);if(a?a.h&64||a.Na||(a.h?0:s(Ha,a)):s(Ha,a))return hc.c(a,b,c);if(t)throw Error([w("nth not supported on this type "),w(va(ua(a)))].join(""));return null}function b(a,
b){if("number"!==typeof b)throw Error("index argument to nth must be a number");if(null==a)return a;if(a&&(a.h&16||a.Jb))return a.P(null,b);if(a instanceof Array||"string"===typeof a)return b<a.length?a[b]:null;if(s(Ga,a))return y.a(a,b);if(a?a.h&64||a.Na||(a.h?0:s(Ha,a)):s(Ha,a))return hc.a(a,b);if(t)throw Error([w("nth not supported on this type "),w(va(ua(a)))].join(""));return null}var c=null,c=function(c,e,g){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,
e,g)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.c=a;return c}(),P=function(){function a(a,b,c){return null!=a?a&&(a.h&256||a.Kb)?a.u(null,b,c):a instanceof Array?b<a.length?a[b]:c:"string"===typeof a?b<a.length?a[b]:c:s(La,a)?Ma.c(a,b,c):t?c:null:c}function b(a,b){return null==a?null:a&&(a.h&256||a.Kb)?a.t(null,b):a instanceof Array?b<a.length?a[b]:null:"string"===typeof a?b<a.length?a[b]:null:s(La,a)?Ma.a(a,b):null}var c=null,c=function(c,e,g){switch(arguments.length){case 2:return b.call(this,
c,e);case 3:return a.call(this,c,e,g)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.c=a;return c}(),Q=function(){function a(a,b,c){return null!=a?Qa(a,b,c):ic.a?ic.a([b],[c]):ic.call(null,[b],[c])}var b=null,c=function(){function a(b,d,k,l){var q=null;3<arguments.length&&(q=H(Array.prototype.slice.call(arguments,3),0));return c.call(this,b,d,k,q)}function c(a,d,e,l){for(;;)if(a=b.c(a,d,e),p(l))d=D(l),e=D(G(l)),l=G(G(l));else return a}a.i=3;a.f=function(a){var b=D(a);a=G(a);var d=D(a);
a=G(a);var l=D(a);a=E(a);return c(b,d,l,a)};a.e=c;return a}(),b=function(b,e,g,h){switch(arguments.length){case 3:return a.call(this,b,e,g);default:return c.e(b,e,g,H(arguments,3))}throw Error("Invalid arity: "+arguments.length);};b.i=3;b.f=c.f;b.c=a;b.e=c.e;return b}(),jc=function(){function a(a,b){return null==a?null:Sa(a,b)}var b=null,c=function(){function a(b,d,k){var l=null;2<arguments.length&&(l=H(Array.prototype.slice.call(arguments,2),0));return c.call(this,b,d,l)}function c(a,d,e){for(;;){if(null==
a)return null;a=b.a(a,d);if(p(e))d=D(e),e=G(e);else return a}}a.i=2;a.f=function(a){var b=D(a);a=G(a);var d=D(a);a=E(a);return c(b,d,a)};a.e=c;return a}(),b=function(b,e,g){switch(arguments.length){case 1:return b;case 2:return a.call(this,b,e);default:return c.e(b,e,H(arguments,2))}throw Error("Invalid arity: "+arguments.length);};b.i=2;b.f=c.f;b.b=function(a){return a};b.a=a;b.e=c.e;return b}();function kc(a){var b="function"==m(a);return b?b:a?p(p(null)?null:a.Sb)?!0:a.Cb?!1:s(Aa,a):s(Aa,a)}
var M=function lc(b,c){return kc(b)&&!(b?b.h&262144||b.Ac||(b.h?0:s(eb,b)):s(eb,b))?lc(function(){"undefined"===typeof ia&&(ia=function(b,c,g,h){this.j=b;this.Sa=c;this.mc=g;this.gc=h;this.p=0;this.h=393217},ia.bb=!0,ia.ab="cljs.core/t5164",ia.Bb=function(b,c){return z(c,"cljs.core/t5164")},ia.prototype.call=function(){function b(d,h){d=this;var k=null;1<arguments.length&&(k=H(Array.prototype.slice.call(arguments,1),0));return c.call(this,d,k)}function c(b,d){return R.a?R.a(b.Sa,d):R.call(null,b.Sa,
d)}b.i=1;b.f=function(b){var d=D(b);b=E(b);return c(d,b)};b.e=c;return b}(),ia.prototype.apply=function(b,c){return this.call.apply(this,[this].concat(wa(c)))},ia.prototype.a=function(){function b(d){var h=null;0<arguments.length&&(h=H(Array.prototype.slice.call(arguments,0),0));return c.call(this,h)}function c(b){return R.a?R.a(self__.Sa,b):R.call(null,self__.Sa,b)}b.i=0;b.f=function(b){b=C(b);return c(b)};b.e=c;return b}(),ia.prototype.Sb=!0,ia.prototype.B=function(){return this.gc},ia.prototype.C=
function(b,c){return new ia(this.j,this.Sa,this.mc,c)});return new ia(c,b,lc,null)}(),c):null==b?null:fb(b,c)};function mc(a){var b=null!=a;return(b?a?a.h&131072||a.Yb||(a.h?0:s(cb,a)):s(cb,a):b)?db(a):null}function nc(a){return null==a?null:Ya(a)}function oc(a){return null==a?null:Za(a)}
var pc=function(){function a(a,b){return null==a?null:Xa(a,b)}var b=null,c=function(){function a(b,d,k){var l=null;2<arguments.length&&(l=H(Array.prototype.slice.call(arguments,2),0));return c.call(this,b,d,l)}function c(a,d,e){for(;;){if(null==a)return null;a=b.a(a,d);if(p(e))d=D(e),e=G(e);else return a}}a.i=2;a.f=function(a){var b=D(a);a=G(a);var d=D(a);a=E(a);return c(b,d,a)};a.e=c;return a}(),b=function(b,e,g){switch(arguments.length){case 1:return b;case 2:return a.call(this,b,e);default:return c.e(b,
e,H(arguments,2))}throw Error("Invalid arity: "+arguments.length);};b.i=2;b.f=c.f;b.b=function(a){return a};b.a=a;b.e=c.e;return b}(),qc={},rc=0;function A(a){if(a&&(a.h&4194304||a.tc))a=a.A(null);else if("number"===typeof a)a=Math.floor(a)%2147483647;else if(!0===a)a=1;else if(!1===a)a=0;else if("string"===typeof a){255<rc&&(qc={},rc=0);var b=qc[a];if("number"!==typeof b){for(var c=b=0;c<a.length;++c)b=31*b+a.charCodeAt(c),b%=4294967296;qc[a]=b;rc+=1}a=b}else a=null==a?0:t?lb(a):null;return a}
function sc(a){return null==a||ta(C(a))}function tc(a){return null==a?!1:a?a.h&8||a.qc?!0:a.h?!1:s(Ea,a):s(Ea,a)}function uc(a){return null==a?!1:a?a.h&4096||a.yc?!0:a.h?!1:s(Wa,a):s(Wa,a)}function vc(a){return a?a.h&512||a.oc?!0:a.h?!1:s(Oa,a):s(Oa,a)}function wc(a){return a?a.h&16777216||a.xc?!0:a.h?!1:s(ob,a):s(ob,a)}function xc(a){return null==a?!1:a?a.h&1024||a.vc?!0:a.h?!1:s(Ra,a):s(Ra,a)}function yc(a){return a?a.h&16384||a.zc?!0:a.h?!1:s($a,a):s($a,a)}
function zc(a){return a?a.p&512||a.pc?!0:!1:!1}function Ac(a){var b=[];ga(a,function(a){return function(b,e){return a.push(e)}}(b));return b}function Bc(a,b,c,d,e){for(;0!==e;)c[d]=a[b],d+=1,e-=1,b+=1}var Cc={};function Dc(a){return null==a?!1:a?a.h&64||a.Na?!0:a.h?!1:s(Ha,a):s(Ha,a)}function Ec(a){return p(a)?!0:!1}function Fc(a,b){return P.c(a,b,Cc)===Cc?!1:!0}
function Qb(a,b){if(a===b)return 0;if(null==a)return-1;if(null==b)return 1;if(ua(a)===ua(b))return a&&(a.p&2048||a.Xa)?a.Ya(null,b):ea(a,b);if(t)throw Error("compare on non-nil objects of different types");return null}
var Gc=function(){function a(a,b,c,h){for(;;){var k=Qb(O.a(a,h),O.a(b,h));if(0===k&&h+1<c)h+=1;else return k}}function b(a,b){var g=N(a),h=N(b);return g<h?-1:g>h?1:t?c.n(a,b,g,0):null}var c=null,c=function(c,e,g,h){switch(arguments.length){case 2:return b.call(this,c,e);case 4:return a.call(this,c,e,g,h)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.n=a;return c}();
function Hc(a){return Pb.a(a,Qb)?Qb:function(b,c){var d=a.a?a.a(b,c):a.call(null,b,c);return"number"===typeof d?d:p(d)?-1:p(a.a?a.a(c,b):a.call(null,c,b))?1:0}}
var Jc=function(){function a(a,b){if(C(b)){var c=Ic.b?Ic.b(b):Ic.call(null,b);fa(c,Hc(a));return C(c)}return F}function b(a){return c.a(Qb,a)}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);};c.b=b;c.a=a;return c}(),Kc=function(){function a(a,b,c){return Jc.a(function(c,g){return Hc(b).call(null,a.b?a.b(c):a.call(null,c),a.b?a.b(g):a.call(null,g))},c)}function b(a,b){return c.c(a,Qb,b)}
var c=null,c=function(c,e,g){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,g)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.c=a;return c}(),K=function(){function a(a,b,c){for(c=C(c);;)if(c){b=a.a?a.a(b,D(c)):a.call(null,b,D(c));if(Wb(b))return I.b?I.b(b):I.call(null,b);c=G(c)}else return b}function b(a,b){var c=C(b);return c?x.c?x.c(a,D(c),G(c)):x.call(null,a,D(c),G(c)):a.m?a.m():a.call(null)}var c=null,c=function(c,e,g){switch(arguments.length){case 2:return b.call(this,
c,e);case 3:return a.call(this,c,e,g)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.c=a;return c}(),x=function(){function a(a,b,c){return c&&(c.h&524288||c.Lb)?c.K(null,a,b):c instanceof Array?Yb.c(c,a,b):"string"===typeof c?Yb.c(c,a,b):s(gb,c)?hb.c(c,a,b):t?K.c(a,b,c):null}function b(a,b){return b&&(b.h&524288||b.Lb)?b.N(null,a):b instanceof Array?Yb.a(b,a):"string"===typeof b?Yb.a(b,a):s(gb,b)?hb.a(b,a):t?K.a(a,b):null}var c=null,c=function(c,e,g){switch(arguments.length){case 2:return b.call(this,
c,e);case 3:return a.call(this,c,e,g)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.c=a;return c}(),Lc=function(){var a=null,b=function(){function a(c,g,h){var k=null;2<arguments.length&&(k=H(Array.prototype.slice.call(arguments,2),0));return b.call(this,c,g,k)}function b(a,c,d){for(;;)if(a>c)if(G(d))a=c,c=D(d),d=G(d);else return c>D(d);else return!1}a.i=2;a.f=function(a){var c=D(a);a=G(a);var h=D(a);a=E(a);return b(c,h,a)};a.e=b;return a}(),a=function(a,d,e){switch(arguments.length){case 1:return!0;
case 2:return a>d;default:return b.e(a,d,H(arguments,2))}throw Error("Invalid arity: "+arguments.length);};a.i=2;a.f=b.f;a.b=function(){return!0};a.a=function(a,b){return a>b};a.e=b.e;return a}(),Mc=function(){var a=null,b=function(){function a(c,g,h){var k=null;2<arguments.length&&(k=H(Array.prototype.slice.call(arguments,2),0));return b.call(this,c,g,k)}function b(a,c,d){for(;;)if(a>=c)if(G(d))a=c,c=D(d),d=G(d);else return c>=D(d);else return!1}a.i=2;a.f=function(a){var c=D(a);a=G(a);var h=D(a);
a=E(a);return b(c,h,a)};a.e=b;return a}(),a=function(a,d,e){switch(arguments.length){case 1:return!0;case 2:return a>=d;default:return b.e(a,d,H(arguments,2))}throw Error("Invalid arity: "+arguments.length);};a.i=2;a.f=b.f;a.b=function(){return!0};a.a=function(a,b){return a>=b};a.e=b.e;return a}();function Nc(a){return a-1}function Oc(a){return 0<=(a-a%2)/2?Math.floor.b?Math.floor.b((a-a%2)/2):Math.floor.call(null,(a-a%2)/2):Math.ceil.b?Math.ceil.b((a-a%2)/2):Math.ceil.call(null,(a-a%2)/2)}
function Pc(a){a-=a>>1&1431655765;a=(a&858993459)+(a>>2&858993459);return 16843009*(a+(a>>4)&252645135)>>24}function Qc(a){var b=1;for(a=C(a);;)if(a&&0<b)b-=1,a=G(a);else return a}
var w=function(){function a(a){return null==a?"":a.toString()}var b=null,c=function(){function a(b,d){var k=null;1<arguments.length&&(k=H(Array.prototype.slice.call(arguments,1),0));return c.call(this,b,k)}function c(a,d){for(var e=new ha(b.b(a)),l=d;;)if(p(l))e=e.append(b.b(D(l))),l=G(l);else return e.toString()}a.i=1;a.f=function(a){var b=D(a);a=E(a);return c(b,a)};a.e=c;return a}(),b=function(b,e){switch(arguments.length){case 0:return"";case 1:return a.call(this,b);default:return c.e(b,H(arguments,
1))}throw Error("Invalid arity: "+arguments.length);};b.i=1;b.f=c.f;b.m=function(){return""};b.b=a;b.e=c.e;return b}();function cc(a,b){return Ec(wc(b)?function(){for(var c=C(a),d=C(b);;){if(null==c)return null==d;if(null==d)return!1;if(Pb.a(D(c),D(d)))c=G(c),d=G(d);else return t?!1:null}}():null)}function Tb(a,b){return a^b+2654435769+(a<<6)+(a>>2)}function ac(a){if(C(a)){var b=A(D(a));for(a=G(a);;){if(null==a)return b;b=Tb(b,A(D(a)));a=G(a)}}else return 0}
function Rc(a){var b=0;for(a=C(a);;)if(a){var c=D(a),b=(b+(A(Sc.b?Sc.b(c):Sc.call(null,c))^A(Tc.b?Tc.b(c):Tc.call(null,c))))%4503599627370496;a=G(a)}else return b}function Uc(a){var b=0;for(a=C(a);;)if(a){var c=D(a),b=(b+A(c))%4503599627370496;a=G(a)}else return b}function Vc(a,b,c,d,e){this.j=a;this.Ha=b;this.oa=c;this.count=d;this.l=e;this.h=65937646;this.p=8192}f=Vc.prototype;f.A=function(){var a=this.l;return null!=a?a:this.l=a=ac(this)};f.S=function(){return 1===this.count?null:this.oa};
f.D=function(a,b){return new Vc(this.j,b,this,this.count+1,null)};f.toString=function(){return Nb(this)};f.N=function(a,b){return K.a(b,this)};f.K=function(a,b,c){return K.c(b,c,this)};f.F=function(){return this};f.J=function(){return this.count};f.wa=function(){return this.Ha};f.xa=function(){return Ja(this)};f.O=function(){return this.Ha};f.T=function(){return 1===this.count?F:this.oa};f.v=function(a,b){return cc(this,b)};f.C=function(a,b){return new Vc(b,this.Ha,this.oa,this.count,this.l)};
f.B=function(){return this.j};f.G=function(){return F};function Wc(a){this.j=a;this.h=65937614;this.p=8192}f=Wc.prototype;f.A=function(){return 0};f.S=function(){return null};f.D=function(a,b){return new Vc(this.j,b,null,1,null)};f.toString=function(){return Nb(this)};f.N=function(a,b){return K.a(b,this)};f.K=function(a,b,c){return K.c(b,c,this)};f.F=function(){return null};f.J=function(){return 0};f.wa=function(){return null};f.xa=function(){throw Error("Can't pop empty list");};f.O=function(){return null};
f.T=function(){return F};f.v=function(a,b){return cc(this,b)};f.C=function(a,b){return new Wc(b)};f.B=function(){return this.j};f.G=function(){return this};var F=new Wc(null);function Xc(a){return a?a.h&134217728||a.wc?!0:a.h?!1:s(qb,a):s(qb,a)}function Yc(a){return Xc(a)?rb(a):x.c(fc,F,a)}
var Zc=function(){function a(a){var d=null;0<arguments.length&&(d=H(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){var b;if(a instanceof Ub&&0===a.o)b=a.d;else a:{for(b=[];;)if(null!=a)b.push(a.O(null)),a=a.S(null);else break a;b=void 0}a=b.length;for(var e=F;;)if(0<a){var g=a-1,e=e.D(null,b[a-1]);a=g}else return e}a.i=0;a.f=function(a){a=C(a);return b(a)};a.e=b;return a}();function $c(a,b,c,d){this.j=a;this.Ha=b;this.oa=c;this.l=d;this.h=65929452;this.p=8192}f=$c.prototype;
f.A=function(){var a=this.l;return null!=a?a:this.l=a=ac(this)};f.S=function(){return null==this.oa?null:C(this.oa)};f.D=function(a,b){return new $c(null,b,this,this.l)};f.toString=function(){return Nb(this)};f.N=function(a,b){return K.a(b,this)};f.K=function(a,b,c){return K.c(b,c,this)};f.F=function(){return this};f.O=function(){return this.Ha};f.T=function(){return null==this.oa?F:this.oa};f.v=function(a,b){return cc(this,b)};f.C=function(a,b){return new $c(b,this.Ha,this.oa,this.l)};f.B=function(){return this.j};
f.G=function(){return M(F,this.j)};function J(a,b){var c=null==b;return(c?c:b&&(b.h&64||b.Na))?new $c(null,a,b,null):new $c(null,a,C(b),null)}function U(a,b,c,d){this.X=a;this.name=b;this.sa=c;this.va=d;this.h=2153775105;this.p=4096}f=U.prototype;f.w=function(a,b){return z(b,[w(":"),w(this.sa)].join(""))};f.A=function(){null==this.va&&(this.va=Tb(A(this.X),A(this.name))+2654435769);return this.va};
f.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return P.a(c,this);case 3:return P.c(c,this,d)}throw Error("Invalid arity: "+arguments.length);}}();f.apply=function(a,b){return this.call.apply(this,[this].concat(wa(b)))};f.b=function(a){return P.a(a,this)};f.a=function(a,b){return P.c(a,this,b)};f.v=function(a,b){return b instanceof U?this.sa===b.sa:!1};f.toString=function(){return[w(":"),w(this.sa)].join("")};
function ad(a,b){return a===b?!0:a instanceof U&&b instanceof U?a.sa===b.sa:!1}
var cd=function(){function a(a,b){return new U(a,b,[w(p(a)?[w(a),w("/")].join(""):null),w(b)].join(""),null)}function b(a){if(a instanceof U)return a;if(a instanceof Sb){var b;if(a&&(a.p&4096||a.Zb))b=a.X;else throw Error([w("Doesn't support namespace: "),w(a)].join(""));return new U(b,bd.b?bd.b(a):bd.call(null,a),a.ua,null)}return"string"===typeof a?(b=a.split("/"),2===b.length?new U(b[0],b[1],a,null):new U(null,b[0],a,null)):null}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,
c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);};c.b=b;c.a=a;return c}();function V(a,b,c,d){this.j=a;this.Ia=b;this.I=c;this.l=d;this.p=0;this.h=32374988}f=V.prototype;f.A=function(){var a=this.l;return null!=a?a:this.l=a=ac(this)};f.S=function(){nb(this);return null==this.I?null:G(this.I)};f.D=function(a,b){return J(b,this)};f.toString=function(){return Nb(this)};function dd(a){null!=a.Ia&&(a.I=a.Ia.m?a.Ia.m():a.Ia.call(null),a.Ia=null);return a.I}
f.N=function(a,b){return K.a(b,this)};f.K=function(a,b,c){return K.c(b,c,this)};f.F=function(){dd(this);if(null==this.I)return null;for(var a=this.I;;)if(a instanceof V)a=dd(a);else return this.I=a,C(this.I)};f.O=function(){nb(this);return null==this.I?null:D(this.I)};f.T=function(){nb(this);return null!=this.I?E(this.I):F};f.v=function(a,b){return cc(this,b)};f.C=function(a,b){return new V(b,this.Ia,this.I,this.l)};f.B=function(){return this.j};f.G=function(){return M(F,this.j)};
function ed(a,b){this.cb=a;this.end=b;this.p=0;this.h=2}ed.prototype.J=function(){return this.end};ed.prototype.add=function(a){this.cb[this.end]=a;return this.end+=1};ed.prototype.ba=function(){var a=new fd(this.cb,0,this.end);this.cb=null;return a};function fd(a,b,c){this.d=a;this.L=b;this.end=c;this.p=0;this.h=524306}f=fd.prototype;f.N=function(a,b){return Yb.n(this.d,b,this.d[this.L],this.L+1)};f.K=function(a,b,c){return Yb.n(this.d,b,c,this.L)};
f.Ib=function(){if(this.L===this.end)throw Error("-drop-first of empty chunk");return new fd(this.d,this.L+1,this.end)};f.P=function(a,b){return this.d[this.L+b]};f.$=function(a,b,c){return 0<=b&&b<this.end-this.L?this.d[this.L+b]:c};f.J=function(){return this.end-this.L};
var gd=function(){function a(a,b,c){return new fd(a,b,c)}function b(a,b){return new fd(a,b,a.length)}function c(a){return new fd(a,0,a.length)}var d=null,d=function(d,g,h){switch(arguments.length){case 1:return c.call(this,d);case 2:return b.call(this,d,g);case 3:return a.call(this,d,g,h)}throw Error("Invalid arity: "+arguments.length);};d.b=c;d.a=b;d.c=a;return d}();function hd(a,b,c,d){this.ba=a;this.la=b;this.j=c;this.l=d;this.h=31850732;this.p=1536}f=hd.prototype;
f.A=function(){var a=this.l;return null!=a?a:this.l=a=ac(this)};f.S=function(){if(1<Ca(this.ba))return new hd(Ib(this.ba),this.la,this.j,null);var a=nb(this.la);return null==a?null:a};f.D=function(a,b){return J(b,this)};f.toString=function(){return Nb(this)};f.F=function(){return this};f.O=function(){return y.a(this.ba,0)};f.T=function(){return 1<Ca(this.ba)?new hd(Ib(this.ba),this.la,this.j,null):null==this.la?F:this.la};f.eb=function(){return null==this.la?null:this.la};
f.v=function(a,b){return cc(this,b)};f.C=function(a,b){return new hd(this.ba,this.la,b,this.l)};f.B=function(){return this.j};f.G=function(){return M(F,this.j)};f.fb=function(){return this.ba};f.gb=function(){return null==this.la?F:this.la};function id(a,b){return 0===Ca(a)?b:new hd(a,b,null,null)}function Ic(a){for(var b=[];;)if(C(a))b.push(D(a)),a=G(a);else return b}function jd(a,b){if(Zb(a))return N(a);for(var c=a,d=b,e=0;;)if(0<d&&C(c))c=G(c),d-=1,e+=1;else return e}
var ld=function kd(b){return null==b?null:null==G(b)?C(D(b)):t?J(D(b),kd(G(b))):null},md=function(){function a(a,b){return new V(null,function(){var c=C(a);return c?zc(c)?id(Jb(c),d.a(Kb(c),b)):J(D(c),d.a(E(c),b)):b},null,null)}function b(a){return new V(null,function(){return a},null,null)}function c(){return new V(null,function(){return null},null,null)}var d=null,e=function(){function a(c,d,e){var g=null;2<arguments.length&&(g=H(Array.prototype.slice.call(arguments,2),0));return b.call(this,c,
d,g)}function b(a,c,e){return function u(a,b){return new V(null,function(){var c=C(a);return c?zc(c)?id(Jb(c),u(Kb(c),b)):J(D(c),u(E(c),b)):p(b)?u(D(b),G(b)):null},null,null)}(d.a(a,c),e)}a.i=2;a.f=function(a){var c=D(a);a=G(a);var d=D(a);a=E(a);return b(c,d,a)};a.e=b;return a}(),d=function(d,h,k){switch(arguments.length){case 0:return c.call(this);case 1:return b.call(this,d);case 2:return a.call(this,d,h);default:return e.e(d,h,H(arguments,2))}throw Error("Invalid arity: "+arguments.length);};d.i=
2;d.f=e.f;d.m=c;d.b=b;d.a=a;d.e=e.e;return d}(),nd=function(){function a(a,b,c,d){return J(a,J(b,J(c,d)))}function b(a,b,c){return J(a,J(b,c))}var c=null,d=function(){function a(c,d,e,q,r){var u=null;4<arguments.length&&(u=H(Array.prototype.slice.call(arguments,4),0));return b.call(this,c,d,e,q,u)}function b(a,c,d,e,g){return J(a,J(c,J(d,J(e,ld(g)))))}a.i=4;a.f=function(a){var c=D(a);a=G(a);var d=D(a);a=G(a);var e=D(a);a=G(a);var r=D(a);a=E(a);return b(c,d,e,r,a)};a.e=b;return a}(),c=function(c,g,
h,k,l){switch(arguments.length){case 1:return C(c);case 2:return J(c,g);case 3:return b.call(this,c,g,h);case 4:return a.call(this,c,g,h,k);default:return d.e(c,g,h,k,H(arguments,4))}throw Error("Invalid arity: "+arguments.length);};c.i=4;c.f=d.f;c.b=function(a){return C(a)};c.a=function(a,b){return J(a,b)};c.c=b;c.n=a;c.e=d.e;return c}();function od(a){return Cb(a)}
var pd=function(){var a=null,b=function(){function a(c,g,h){var k=null;2<arguments.length&&(k=H(Array.prototype.slice.call(arguments,2),0));return b.call(this,c,g,k)}function b(a,c,d){for(;;)if(a=Bb(a,c),p(d))c=D(d),d=G(d);else return a}a.i=2;a.f=function(a){var c=D(a);a=G(a);var h=D(a);a=E(a);return b(c,h,a)};a.e=b;return a}(),a=function(a,d,e){switch(arguments.length){case 2:return Bb(a,d);default:return b.e(a,d,H(arguments,2))}throw Error("Invalid arity: "+arguments.length);};a.i=2;a.f=b.f;a.a=
function(a,b){return Bb(a,b)};a.e=b.e;return a}(),qd=function(){var a=null,b=function(){function a(c,g,h,k){var l=null;3<arguments.length&&(l=H(Array.prototype.slice.call(arguments,3),0));return b.call(this,c,g,h,l)}function b(a,c,d,k){for(;;)if(a=Db(a,c,d),p(k))c=D(k),d=D(G(k)),k=G(G(k));else return a}a.i=3;a.f=function(a){var c=D(a);a=G(a);var h=D(a);a=G(a);var k=D(a);a=E(a);return b(c,h,k,a)};a.e=b;return a}(),a=function(a,d,e,g){switch(arguments.length){case 3:return Db(a,d,e);default:return b.e(a,
d,e,H(arguments,3))}throw Error("Invalid arity: "+arguments.length);};a.i=3;a.f=b.f;a.c=function(a,b,e){return Db(a,b,e)};a.e=b.e;return a}(),rd=function(){var a=null,b=function(){function a(c,g,h){var k=null;2<arguments.length&&(k=H(Array.prototype.slice.call(arguments,2),0));return b.call(this,c,g,k)}function b(a,c,d){for(;;)if(a=Eb(a,c),p(d))c=D(d),d=G(d);else return a}a.i=2;a.f=function(a){var c=D(a);a=G(a);var h=D(a);a=E(a);return b(c,h,a)};a.e=b;return a}(),a=function(a,d,e){switch(arguments.length){case 2:return Eb(a,
d);default:return b.e(a,d,H(arguments,2))}throw Error("Invalid arity: "+arguments.length);};a.i=2;a.f=b.f;a.a=function(a,b){return Eb(a,b)};a.e=b.e;return a}(),sd=function(){var a=null,b=function(){function a(c,g,h){var k=null;2<arguments.length&&(k=H(Array.prototype.slice.call(arguments,2),0));return b.call(this,c,g,k)}function b(a,c,d){for(;;)if(a=Hb(a,c),p(d))c=D(d),d=G(d);else return a}a.i=2;a.f=function(a){var c=D(a);a=G(a);var h=D(a);a=E(a);return b(c,h,a)};a.e=b;return a}(),a=function(a,d,
e){switch(arguments.length){case 2:return Hb(a,d);default:return b.e(a,d,H(arguments,2))}throw Error("Invalid arity: "+arguments.length);};a.i=2;a.f=b.f;a.a=function(a,b){return Hb(a,b)};a.e=b.e;return a}();
function td(a,b,c){var d=C(c);if(0===b)return a.m?a.m():a.call(null);c=Ia(d);var e=Ja(d);if(1===b)return a.b?a.b(c):a.b?a.b(c):a.call(null,c);var d=Ia(e),g=Ja(e);if(2===b)return a.a?a.a(c,d):a.a?a.a(c,d):a.call(null,c,d);var e=Ia(g),h=Ja(g);if(3===b)return a.c?a.c(c,d,e):a.c?a.c(c,d,e):a.call(null,c,d,e);var g=Ia(h),k=Ja(h);if(4===b)return a.n?a.n(c,d,e,g):a.n?a.n(c,d,e,g):a.call(null,c,d,e,g);var h=Ia(k),l=Ja(k);if(5===b)return a.r?a.r(c,d,e,g,h):a.r?a.r(c,d,e,g,h):a.call(null,c,d,e,g,h);var k=Ia(l),
q=Ja(l);if(6===b)return a.da?a.da(c,d,e,g,h,k):a.da?a.da(c,d,e,g,h,k):a.call(null,c,d,e,g,h,k);var l=Ia(q),r=Ja(q);if(7===b)return a.Fa?a.Fa(c,d,e,g,h,k,l):a.Fa?a.Fa(c,d,e,g,h,k,l):a.call(null,c,d,e,g,h,k,l);var q=Ia(r),u=Ja(r);if(8===b)return a.tb?a.tb(c,d,e,g,h,k,l,q):a.tb?a.tb(c,d,e,g,h,k,l,q):a.call(null,c,d,e,g,h,k,l,q);var r=Ia(u),B=Ja(u);if(9===b)return a.ub?a.ub(c,d,e,g,h,k,l,q,r):a.ub?a.ub(c,d,e,g,h,k,l,q,r):a.call(null,c,d,e,g,h,k,l,q,r);var u=Ia(B),S=Ja(B);if(10===b)return a.ib?a.ib(c,
d,e,g,h,k,l,q,r,u):a.ib?a.ib(c,d,e,g,h,k,l,q,r,u):a.call(null,c,d,e,g,h,k,l,q,r,u);var B=Ia(S),L=Ja(S);if(11===b)return a.jb?a.jb(c,d,e,g,h,k,l,q,r,u,B):a.jb?a.jb(c,d,e,g,h,k,l,q,r,u,B):a.call(null,c,d,e,g,h,k,l,q,r,u,B);var S=Ia(L),T=Ja(L);if(12===b)return a.kb?a.kb(c,d,e,g,h,k,l,q,r,u,B,S):a.kb?a.kb(c,d,e,g,h,k,l,q,r,u,B,S):a.call(null,c,d,e,g,h,k,l,q,r,u,B,S);var L=Ia(T),la=Ja(T);if(13===b)return a.lb?a.lb(c,d,e,g,h,k,l,q,r,u,B,S,L):a.lb?a.lb(c,d,e,g,h,k,l,q,r,u,B,S,L):a.call(null,c,d,e,g,h,k,
l,q,r,u,B,S,L);var T=Ia(la),na=Ja(la);if(14===b)return a.mb?a.mb(c,d,e,g,h,k,l,q,r,u,B,S,L,T):a.mb?a.mb(c,d,e,g,h,k,l,q,r,u,B,S,L,T):a.call(null,c,d,e,g,h,k,l,q,r,u,B,S,L,T);var la=Ia(na),ya=Ja(na);if(15===b)return a.nb?a.nb(c,d,e,g,h,k,l,q,r,u,B,S,L,T,la):a.nb?a.nb(c,d,e,g,h,k,l,q,r,u,B,S,L,T,la):a.call(null,c,d,e,g,h,k,l,q,r,u,B,S,L,T,la);var na=Ia(ya),Na=Ja(ya);if(16===b)return a.ob?a.ob(c,d,e,g,h,k,l,q,r,u,B,S,L,T,la,na):a.ob?a.ob(c,d,e,g,h,k,l,q,r,u,B,S,L,T,la,na):a.call(null,c,d,e,g,h,k,l,q,
r,u,B,S,L,T,la,na);var ya=Ia(Na),ib=Ja(Na);if(17===b)return a.pb?a.pb(c,d,e,g,h,k,l,q,r,u,B,S,L,T,la,na,ya):a.pb?a.pb(c,d,e,g,h,k,l,q,r,u,B,S,L,T,la,na,ya):a.call(null,c,d,e,g,h,k,l,q,r,u,B,S,L,T,la,na,ya);var Na=Ia(ib),wb=Ja(ib);if(18===b)return a.qb?a.qb(c,d,e,g,h,k,l,q,r,u,B,S,L,T,la,na,ya,Na):a.qb?a.qb(c,d,e,g,h,k,l,q,r,u,B,S,L,T,la,na,ya,Na):a.call(null,c,d,e,g,h,k,l,q,r,u,B,S,L,T,la,na,ya,Na);ib=Ia(wb);wb=Ja(wb);if(19===b)return a.rb?a.rb(c,d,e,g,h,k,l,q,r,u,B,S,L,T,la,na,ya,Na,ib):a.rb?a.rb(c,
d,e,g,h,k,l,q,r,u,B,S,L,T,la,na,ya,Na,ib):a.call(null,c,d,e,g,h,k,l,q,r,u,B,S,L,T,la,na,ya,Na,ib);var Wd=Ia(wb);Ja(wb);if(20===b)return a.sb?a.sb(c,d,e,g,h,k,l,q,r,u,B,S,L,T,la,na,ya,Na,ib,Wd):a.sb?a.sb(c,d,e,g,h,k,l,q,r,u,B,S,L,T,la,na,ya,Na,ib,Wd):a.call(null,c,d,e,g,h,k,l,q,r,u,B,S,L,T,la,na,ya,Na,ib,Wd);throw Error("Only up to 20 arguments supported on functions");}
var R=function(){function a(a,b,c,d,e){b=nd.n(b,c,d,e);c=a.i;return a.f?(d=jd(b,c+1),d<=c?td(a,d,b):a.f(b)):a.apply(a,Ic(b))}function b(a,b,c,d){b=nd.c(b,c,d);c=a.i;return a.f?(d=jd(b,c+1),d<=c?td(a,d,b):a.f(b)):a.apply(a,Ic(b))}function c(a,b,c){b=nd.a(b,c);c=a.i;if(a.f){var d=jd(b,c+1);return d<=c?td(a,d,b):a.f(b)}return a.apply(a,Ic(b))}function d(a,b){var c=a.i;if(a.f){var d=jd(b,c+1);return d<=c?td(a,d,b):a.f(b)}return a.apply(a,Ic(b))}var e=null,g=function(){function a(c,d,e,g,h,S){var L=null;
5<arguments.length&&(L=H(Array.prototype.slice.call(arguments,5),0));return b.call(this,c,d,e,g,h,L)}function b(a,c,d,e,g,h){c=J(c,J(d,J(e,J(g,ld(h)))));d=a.i;return a.f?(e=jd(c,d+1),e<=d?td(a,e,c):a.f(c)):a.apply(a,Ic(c))}a.i=5;a.f=function(a){var c=D(a);a=G(a);var d=D(a);a=G(a);var e=D(a);a=G(a);var g=D(a);a=G(a);var h=D(a);a=E(a);return b(c,d,e,g,h,a)};a.e=b;return a}(),e=function(e,k,l,q,r,u){switch(arguments.length){case 2:return d.call(this,e,k);case 3:return c.call(this,e,k,l);case 4:return b.call(this,
e,k,l,q);case 5:return a.call(this,e,k,l,q,r);default:return g.e(e,k,l,q,r,H(arguments,5))}throw Error("Invalid arity: "+arguments.length);};e.i=5;e.f=g.f;e.a=d;e.c=c;e.n=b;e.r=a;e.e=g.e;return e}();function ud(a,b){for(;;){if(null==C(b))return!0;if(p(a.b?a.b(D(b)):a.call(null,D(b)))){var c=a,d=G(b);a=c;b=d}else return t?!1:null}}function vd(a,b){for(;;)if(C(b)){var c=a.b?a.b(D(b)):a.call(null,D(b));if(p(c))return c;var c=a,d=G(b);a=c;b=d}else return null}function wd(a){return a}
function xd(a){return function(){var b=null,c=function(){function b(a,d,k){var l=null;2<arguments.length&&(l=H(Array.prototype.slice.call(arguments,2),0));return c.call(this,a,d,l)}function c(b,d,e){return ta(R.n(a,b,d,e))}b.i=2;b.f=function(a){var b=D(a);a=G(a);var d=D(a);a=E(a);return c(b,d,a)};b.e=c;return b}(),b=function(b,e,g){switch(arguments.length){case 0:return ta(a.m?a.m():a.call(null));case 1:return ta(a.b?a.b(b):a.call(null,b));case 2:return ta(a.a?a.a(b,e):a.call(null,b,e));default:return c.e(b,
e,H(arguments,2))}throw Error("Invalid arity: "+arguments.length);};b.i=2;b.f=c.f;return b}()}
var yd=function(){function a(a,b,c){return function(){var d=null,l=function(){function d(a,b,c,e){var g=null;3<arguments.length&&(g=H(Array.prototype.slice.call(arguments,3),0));return k.call(this,a,b,c,g)}function k(d,l,q,r){return a.b?a.b(b.b?b.b(R.r(c,d,l,q,r)):b.call(null,R.r(c,d,l,q,r))):a.call(null,b.b?b.b(R.r(c,d,l,q,r)):b.call(null,R.r(c,d,l,q,r)))}d.i=3;d.f=function(a){var b=D(a);a=G(a);var c=D(a);a=G(a);var d=D(a);a=E(a);return k(b,c,d,a)};d.e=k;return d}(),d=function(d,k,u,B){switch(arguments.length){case 0:return a.b?
a.b(b.b?b.b(c.m?c.m():c.call(null)):b.call(null,c.m?c.m():c.call(null))):a.call(null,b.b?b.b(c.m?c.m():c.call(null)):b.call(null,c.m?c.m():c.call(null)));case 1:return a.b?a.b(b.b?b.b(c.b?c.b(d):c.call(null,d)):b.call(null,c.b?c.b(d):c.call(null,d))):a.call(null,b.b?b.b(c.b?c.b(d):c.call(null,d)):b.call(null,c.b?c.b(d):c.call(null,d)));case 2:return a.b?a.b(b.b?b.b(c.a?c.a(d,k):c.call(null,d,k)):b.call(null,c.a?c.a(d,k):c.call(null,d,k))):a.call(null,b.b?b.b(c.a?c.a(d,k):c.call(null,d,k)):b.call(null,
c.a?c.a(d,k):c.call(null,d,k)));case 3:return a.b?a.b(b.b?b.b(c.c?c.c(d,k,u):c.call(null,d,k,u)):b.call(null,c.c?c.c(d,k,u):c.call(null,d,k,u))):a.call(null,b.b?b.b(c.c?c.c(d,k,u):c.call(null,d,k,u)):b.call(null,c.c?c.c(d,k,u):c.call(null,d,k,u)));default:return l.e(d,k,u,H(arguments,3))}throw Error("Invalid arity: "+arguments.length);};d.i=3;d.f=l.f;return d}()}function b(a,b){return function(){var c=null,d=function(){function c(a,b,e,g){var h=null;3<arguments.length&&(h=H(Array.prototype.slice.call(arguments,
3),0));return d.call(this,a,b,e,h)}function d(c,h,k,l){return a.b?a.b(R.r(b,c,h,k,l)):a.call(null,R.r(b,c,h,k,l))}c.i=3;c.f=function(a){var b=D(a);a=G(a);var c=D(a);a=G(a);var e=D(a);a=E(a);return d(b,c,e,a)};c.e=d;return c}(),c=function(c,h,r,u){switch(arguments.length){case 0:return a.b?a.b(b.m?b.m():b.call(null)):a.call(null,b.m?b.m():b.call(null));case 1:return a.b?a.b(b.b?b.b(c):b.call(null,c)):a.call(null,b.b?b.b(c):b.call(null,c));case 2:return a.b?a.b(b.a?b.a(c,h):b.call(null,c,h)):a.call(null,
b.a?b.a(c,h):b.call(null,c,h));case 3:return a.b?a.b(b.c?b.c(c,h,r):b.call(null,c,h,r)):a.call(null,b.c?b.c(c,h,r):b.call(null,c,h,r));default:return d.e(c,h,r,H(arguments,3))}throw Error("Invalid arity: "+arguments.length);};c.i=3;c.f=d.f;return c}()}var c=null,d=function(){function a(c,d,e,q){var r=null;3<arguments.length&&(r=H(Array.prototype.slice.call(arguments,3),0));return b.call(this,c,d,e,r)}function b(a,c,d,e){return function(a){return function(){function b(a){var d=null;0<arguments.length&&
(d=H(Array.prototype.slice.call(arguments,0),0));return c.call(this,d)}function c(b){b=R.a(D(a),b);for(var d=G(a);;)if(d)b=D(d).call(null,b),d=G(d);else return b}b.i=0;b.f=function(a){a=C(a);return c(a)};b.e=c;return b}()}(Yc(nd.n(a,c,d,e)))}a.i=3;a.f=function(a){var c=D(a);a=G(a);var d=D(a);a=G(a);var e=D(a);a=E(a);return b(c,d,e,a)};a.e=b;return a}(),c=function(c,g,h,k){switch(arguments.length){case 0:return wd;case 1:return c;case 2:return b.call(this,c,g);case 3:return a.call(this,c,g,h);default:return d.e(c,
g,h,H(arguments,3))}throw Error("Invalid arity: "+arguments.length);};c.i=3;c.f=d.f;c.m=function(){return wd};c.b=function(a){return a};c.a=b;c.c=a;c.e=d.e;return c}(),zd=function(){function a(a,b,c,d){return function(){function e(a){var b=null;0<arguments.length&&(b=H(Array.prototype.slice.call(arguments,0),0));return r.call(this,b)}function r(e){return R.r(a,b,c,d,e)}e.i=0;e.f=function(a){a=C(a);return r(a)};e.e=r;return e}()}function b(a,b,c){return function(){function d(a){var b=null;0<arguments.length&&
(b=H(Array.prototype.slice.call(arguments,0),0));return e.call(this,b)}function e(d){return R.n(a,b,c,d)}d.i=0;d.f=function(a){a=C(a);return e(a)};d.e=e;return d}()}function c(a,b){return function(){function c(a){var b=null;0<arguments.length&&(b=H(Array.prototype.slice.call(arguments,0),0));return d.call(this,b)}function d(c){return R.c(a,b,c)}c.i=0;c.f=function(a){a=C(a);return d(a)};c.e=d;return c}()}var d=null,e=function(){function a(c,d,e,g,u){var B=null;4<arguments.length&&(B=H(Array.prototype.slice.call(arguments,
4),0));return b.call(this,c,d,e,g,B)}function b(a,c,d,e,g){return function(){function b(a){var c=null;0<arguments.length&&(c=H(Array.prototype.slice.call(arguments,0),0));return h.call(this,c)}function h(b){return R.r(a,c,d,e,md.a(g,b))}b.i=0;b.f=function(a){a=C(a);return h(a)};b.e=h;return b}()}a.i=4;a.f=function(a){var c=D(a);a=G(a);var d=D(a);a=G(a);var e=D(a);a=G(a);var g=D(a);a=E(a);return b(c,d,e,g,a)};a.e=b;return a}(),d=function(d,h,k,l,q){switch(arguments.length){case 1:return d;case 2:return c.call(this,
d,h);case 3:return b.call(this,d,h,k);case 4:return a.call(this,d,h,k,l);default:return e.e(d,h,k,l,H(arguments,4))}throw Error("Invalid arity: "+arguments.length);};d.i=4;d.f=e.f;d.b=function(a){return a};d.a=c;d.c=b;d.n=a;d.e=e.e;return d}(),Ad=function(){function a(a,b,c,d){return function(){var l=null,q=function(){function l(a,b,c,d){var e=null;3<arguments.length&&(e=H(Array.prototype.slice.call(arguments,3),0));return q.call(this,a,b,c,e)}function q(l,r,u,T){return R.r(a,null==l?b:l,null==r?
c:r,null==u?d:u,T)}l.i=3;l.f=function(a){var b=D(a);a=G(a);var c=D(a);a=G(a);var d=D(a);a=E(a);return q(b,c,d,a)};l.e=q;return l}(),l=function(l,u,B,S){switch(arguments.length){case 2:return a.a?a.a(null==l?b:l,null==u?c:u):a.call(null,null==l?b:l,null==u?c:u);case 3:return a.c?a.c(null==l?b:l,null==u?c:u,null==B?d:B):a.call(null,null==l?b:l,null==u?c:u,null==B?d:B);default:return q.e(l,u,B,H(arguments,3))}throw Error("Invalid arity: "+arguments.length);};l.i=3;l.f=q.f;return l}()}function b(a,b,
c){return function(){var d=null,l=function(){function d(a,b,c,e){var g=null;3<arguments.length&&(g=H(Array.prototype.slice.call(arguments,3),0));return k.call(this,a,b,c,g)}function k(d,l,q,r){return R.r(a,null==d?b:d,null==l?c:l,q,r)}d.i=3;d.f=function(a){var b=D(a);a=G(a);var c=D(a);a=G(a);var d=D(a);a=E(a);return k(b,c,d,a)};d.e=k;return d}(),d=function(d,k,u,B){switch(arguments.length){case 2:return a.a?a.a(null==d?b:d,null==k?c:k):a.call(null,null==d?b:d,null==k?c:k);case 3:return a.c?a.c(null==
d?b:d,null==k?c:k,u):a.call(null,null==d?b:d,null==k?c:k,u);default:return l.e(d,k,u,H(arguments,3))}throw Error("Invalid arity: "+arguments.length);};d.i=3;d.f=l.f;return d}()}function c(a,b){return function(){var c=null,d=function(){function c(a,b,e,g){var h=null;3<arguments.length&&(h=H(Array.prototype.slice.call(arguments,3),0));return d.call(this,a,b,e,h)}function d(c,h,k,l){return R.r(a,null==c?b:c,h,k,l)}c.i=3;c.f=function(a){var b=D(a);a=G(a);var c=D(a);a=G(a);var e=D(a);a=E(a);return d(b,
c,e,a)};c.e=d;return c}(),c=function(c,h,r,u){switch(arguments.length){case 1:return a.b?a.b(null==c?b:c):a.call(null,null==c?b:c);case 2:return a.a?a.a(null==c?b:c,h):a.call(null,null==c?b:c,h);case 3:return a.c?a.c(null==c?b:c,h,r):a.call(null,null==c?b:c,h,r);default:return d.e(c,h,r,H(arguments,3))}throw Error("Invalid arity: "+arguments.length);};c.i=3;c.f=d.f;return c}()}var d=null,d=function(d,g,h,k){switch(arguments.length){case 2:return c.call(this,d,g);case 3:return b.call(this,d,g,h);case 4:return a.call(this,
d,g,h,k)}throw Error("Invalid arity: "+arguments.length);};d.a=c;d.c=b;d.n=a;return d}(),W=function(){function a(a,b,c,e){return new V(null,function(){var q=C(b),r=C(c),u=C(e);return q&&r&&u?J(a.c?a.c(D(q),D(r),D(u)):a.call(null,D(q),D(r),D(u)),d.n(a,E(q),E(r),E(u))):null},null,null)}function b(a,b,c){return new V(null,function(){var e=C(b),q=C(c);return e&&q?J(a.a?a.a(D(e),D(q)):a.call(null,D(e),D(q)),d.c(a,E(e),E(q))):null},null,null)}function c(a,b){return new V(null,function(){var c=C(b);if(c){if(zc(c)){for(var e=
Jb(c),q=N(e),r=new ed(Array(q),0),u=0;;)if(u<q){var B=a.b?a.b(y.a(e,u)):a.call(null,y.a(e,u));r.add(B);u+=1}else break;return id(r.ba(),d.a(a,Kb(c)))}return J(a.b?a.b(D(c)):a.call(null,D(c)),d.a(a,E(c)))}return null},null,null)}var d=null,e=function(){function a(c,d,e,g,u){var B=null;4<arguments.length&&(B=H(Array.prototype.slice.call(arguments,4),0));return b.call(this,c,d,e,g,B)}function b(a,c,e,g,h){var B=function L(a){return new V(null,function(){var b=d.a(C,a);return ud(wd,b)?J(d.a(D,b),L(d.a(E,
b))):null},null,null)};return d.a(function(){return function(b){return R.a(a,b)}}(B),B(fc.e(h,g,H([e,c],0))))}a.i=4;a.f=function(a){var c=D(a);a=G(a);var d=D(a);a=G(a);var e=D(a);a=G(a);var g=D(a);a=E(a);return b(c,d,e,g,a)};a.e=b;return a}(),d=function(d,h,k,l,q){switch(arguments.length){case 2:return c.call(this,d,h);case 3:return b.call(this,d,h,k);case 4:return a.call(this,d,h,k,l);default:return e.e(d,h,k,l,H(arguments,4))}throw Error("Invalid arity: "+arguments.length);};d.i=4;d.f=e.f;d.a=c;
d.c=b;d.n=a;d.e=e.e;return d}(),Cd=function Bd(b,c){return new V(null,function(){if(0<b){var d=C(c);return d?J(D(d),Bd(b-1,E(d))):null}return null},null,null)};function Dd(a,b){return new V(null,function(c){return function(){return c(a,b)}}(function(a,b){for(;;){var e=C(b);if(0<a&&e){var g=a-1,e=E(e);a=g;b=e}else return e}}),null,null)}
var Ed=function(){function a(a,b){return Cd(a,c.b(b))}function b(a){return new V(null,function(){return J(a,c.b(a))},null,null)}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);};c.b=b;c.a=a;return c}(),Fd=function(){function a(a,b){return Cd(a,c.b(b))}function b(a){return new V(null,function(){return J(a.m?a.m():a.call(null),c.b(a))},null,null)}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,
c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);};c.b=b;c.a=a;return c}(),Gd=function(){function a(a,c){return new V(null,function(){var g=C(a),h=C(c);return g&&h?J(D(g),J(D(h),b.a(E(g),E(h)))):null},null,null)}var b=null,c=function(){function a(b,d,k){var l=null;2<arguments.length&&(l=H(Array.prototype.slice.call(arguments,2),0));return c.call(this,b,d,l)}function c(a,d,e){return new V(null,function(){var c=W.a(C,fc.e(e,d,H([a],0)));return ud(wd,c)?md.a(W.a(D,c),
R.a(b,W.a(E,c))):null},null,null)}a.i=2;a.f=function(a){var b=D(a);a=G(a);var d=D(a);a=E(a);return c(b,d,a)};a.e=c;return a}(),b=function(b,e,g){switch(arguments.length){case 2:return a.call(this,b,e);default:return c.e(b,e,H(arguments,2))}throw Error("Invalid arity: "+arguments.length);};b.i=2;b.f=c.f;b.a=a;b.e=c.e;return b}();function Hd(a){return function c(a,e){return new V(null,function(){var g=C(a);return g?J(D(g),c(E(g),e)):C(e)?c(D(e),E(e)):null},null,null)}(null,a)}
var Id=function(){function a(a,b){return Hd(W.a(a,b))}var b=null,c=function(){function a(c,d,k){var l=null;2<arguments.length&&(l=H(Array.prototype.slice.call(arguments,2),0));return b.call(this,c,d,l)}function b(a,c,d){return Hd(R.n(W,a,c,d))}a.i=2;a.f=function(a){var c=D(a);a=G(a);var d=D(a);a=E(a);return b(c,d,a)};a.e=b;return a}(),b=function(b,e,g){switch(arguments.length){case 2:return a.call(this,b,e);default:return c.e(b,e,H(arguments,2))}throw Error("Invalid arity: "+arguments.length);};b.i=
2;b.f=c.f;b.a=a;b.e=c.e;return b}(),Kd=function Jd(b,c){return new V(null,function(){var d=C(c);if(d){if(zc(d)){for(var e=Jb(d),g=N(e),h=new ed(Array(g),0),k=0;;)if(k<g){if(p(b.b?b.b(y.a(e,k)):b.call(null,y.a(e,k)))){var l=y.a(e,k);h.add(l)}k+=1}else break;return id(h.ba(),Jd(b,Kb(d)))}e=D(d);d=E(d);return p(b.b?b.b(e):b.call(null,e))?J(e,Jd(b,d)):Jd(b,d)}return null},null,null)};function Ld(a,b){return Kd(xd(a),b)}
function Md(a){var b=Nd;return function d(a){return new V(null,function(){return J(a,p(b.b?b.b(a):b.call(null,a))?Id.a(d,C.b?C.b(a):C.call(null,a)):null)},null,null)}(a)}function Od(a,b){return null!=a?a&&(a.p&4||a.rc)?od(x.c(Bb,Ab(a),b)):x.c(Fa,a,b):x.c(fc,F,b)}
var Pd=function(){function a(a,b,c,k){return new V(null,function(){var l=C(k);if(l){var q=Cd(a,l);return a===N(q)?J(q,d.n(a,b,c,Dd(b,l))):Fa(F,Cd(a,md.a(q,c)))}return null},null,null)}function b(a,b,c){return new V(null,function(){var k=C(c);if(k){var l=Cd(a,k);return a===N(l)?J(l,d.c(a,b,Dd(b,k))):null}return null},null,null)}function c(a,b){return d.c(a,a,b)}var d=null,d=function(d,g,h,k){switch(arguments.length){case 2:return c.call(this,d,g);case 3:return b.call(this,d,g,h);case 4:return a.call(this,
d,g,h,k)}throw Error("Invalid arity: "+arguments.length);};d.a=c;d.c=b;d.n=a;return d}(),Qd=function(){function a(a,b,c){var h=Cc;for(b=C(b);;)if(b){var k=a;if(k?k.h&256||k.Kb||(k.h?0:s(La,k)):s(La,k)){a=P.c(a,D(b),h);if(h===a)return c;b=G(b)}else return c}else return a}function b(a,b){return c.c(a,b,null)}var c=null,c=function(c,e,g){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,g)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.c=a;return c}(),Rd=
function(){function a(a,b,c,d,g,u){var B=O.c(b,0,null);return(b=Qc(b))?Q.c(a,B,e.da(P.a(a,B),b,c,d,g,u)):Q.c(a,B,c.n?c.n(P.a(a,B),d,g,u):c.call(null,P.a(a,B),d,g,u))}function b(a,b,c,d,g){var u=O.c(b,0,null);return(b=Qc(b))?Q.c(a,u,e.r(P.a(a,u),b,c,d,g)):Q.c(a,u,c.c?c.c(P.a(a,u),d,g):c.call(null,P.a(a,u),d,g))}function c(a,b,c,d){var g=O.c(b,0,null);return(b=Qc(b))?Q.c(a,g,e.n(P.a(a,g),b,c,d)):Q.c(a,g,c.a?c.a(P.a(a,g),d):c.call(null,P.a(a,g),d))}function d(a,b,c){var d=O.c(b,0,null);return(b=Qc(b))?
Q.c(a,d,e.c(P.a(a,d),b,c)):Q.c(a,d,c.b?c.b(P.a(a,d)):c.call(null,P.a(a,d)))}var e=null,g=function(){function a(c,d,e,g,h,S,L){var T=null;6<arguments.length&&(T=H(Array.prototype.slice.call(arguments,6),0));return b.call(this,c,d,e,g,h,S,T)}function b(a,c,d,g,h,k,L){var T=O.c(c,0,null);return(c=Qc(c))?Q.c(a,T,R.e(e,P.a(a,T),c,d,g,H([h,k,L],0))):Q.c(a,T,R.e(d,P.a(a,T),g,h,k,H([L],0)))}a.i=6;a.f=function(a){var c=D(a);a=G(a);var d=D(a);a=G(a);var e=D(a);a=G(a);var g=D(a);a=G(a);var h=D(a);a=G(a);var L=
D(a);a=E(a);return b(c,d,e,g,h,L,a)};a.e=b;return a}(),e=function(e,k,l,q,r,u,B){switch(arguments.length){case 3:return d.call(this,e,k,l);case 4:return c.call(this,e,k,l,q);case 5:return b.call(this,e,k,l,q,r);case 6:return a.call(this,e,k,l,q,r,u);default:return g.e(e,k,l,q,r,u,H(arguments,6))}throw Error("Invalid arity: "+arguments.length);};e.i=6;e.f=g.f;e.c=d;e.n=c;e.r=b;e.da=a;e.e=g.e;return e}();function Sd(a,b){this.q=a;this.d=b}
function Td(a){return new Sd(a,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null])}function Ud(a){return new Sd(a.q,wa(a.d))}function Vd(a){a=a.g;return 32>a?0:a-1>>>5<<5}function Xd(a,b,c){for(;;){if(0===b)return c;var d=Td(a);d.d[0]=c;c=d;b-=5}}var Zd=function Yd(b,c,d,e){var g=Ud(d),h=b.g-1>>>c&31;5===c?g.d[h]=e:(d=d.d[h],b=null!=d?Yd(b,c-5,d,e):Xd(null,c-5,e),g.d[h]=b);return g};
function $d(a,b){throw Error([w("No item "),w(a),w(" in vector of length "),w(b)].join(""));}function ae(a){var b=a.root;for(a=a.shift;;)if(0<a)a-=5,b=b.d[0];else return b.d}function be(a,b){if(b>=Vd(a))return a.Q;for(var c=a.root,d=a.shift;;)if(0<d)var e=d-5,c=c.d[b>>>d&31],d=e;else return c.d}function ce(a,b){return 0<=b&&b<a.g?be(a,b):$d(b,a.g)}
var ee=function de(b,c,d,e,g){var h=Ud(d);if(0===c)h.d[e&31]=g;else{var k=e>>>c&31;b=de(b,c-5,d.d[k],e,g);h.d[k]=b}return h},ge=function fe(b,c,d){var e=b.g-2>>>c&31;if(5<c){b=fe(b,c-5,d.d[e]);if(null==b&&0===e)return null;d=Ud(d);d.d[e]=b;return d}return 0===e?null:t?(d=Ud(d),d.d[e]=null,d):null};function X(a,b,c,d,e,g){this.j=a;this.g=b;this.shift=c;this.root=d;this.Q=e;this.l=g;this.p=8196;this.h=167668511}f=X.prototype;
f.Ea=function(){return new he(this.g,this.shift,ie.b?ie.b(this.root):ie.call(null,this.root),je.b?je.b(this.Q):je.call(null,this.Q))};f.A=function(){var a=this.l;return null!=a?a:this.l=a=ac(this)};f.t=function(a,b){return Ma.c(this,b,null)};f.u=function(a,b,c){return"number"===typeof b?y.c(this,b,c):c};f.pa=function(a,b,c){if("number"===typeof b)return ab(this,b,c);throw Error("Vector's key for assoc must be a number.");};
f.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.P(null,c);case 3:return this.$(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();f.apply=function(a,b){return this.call.apply(this,[this].concat(wa(b)))};f.b=function(a){return this.P(null,a)};f.a=function(a,b){return this.$(null,a,b)};
f.Ka=function(a,b,c){a=[0,c];for(c=0;;)if(c<this.g){var d=be(this,c),e=d.length;a:{for(var g=0,h=a[1];;)if(g<e){h=b.c?b.c(h,g+c,d[g]):b.call(null,h,g+c,d[g]);if(Wb(h)){d=h;break a}g+=1}else{a[0]=e;d=a[1]=h;break a}d=void 0}if(Wb(d))return I.b?I.b(d):I.call(null,d);c+=a[0]}else return a[1]};
f.D=function(a,b){if(32>this.g-Vd(this)){for(var c=this.Q.length,d=Array(c+1),e=0;;)if(e<c)d[e]=this.Q[e],e+=1;else break;d[c]=b;return new X(this.j,this.g+1,this.shift,this.root,d,null)}c=(d=this.g>>>5>1<<this.shift)?this.shift+5:this.shift;d?(d=Td(null),d.d[0]=this.root,e=Xd(null,this.shift,new Sd(null,this.Q)),d.d[1]=e):d=Zd(this,this.shift,this.root,new Sd(null,this.Q));return new X(this.j,this.g+1,c,d,[b],null)};f.Ga=function(){return 0<this.g?new bc(this,this.g-1,null):null};
f.La=function(){return y.a(this,0)};f.Ma=function(){return y.a(this,1)};f.toString=function(){return Nb(this)};f.N=function(a,b){return Xb.a(this,b)};f.K=function(a,b,c){return Xb.c(this,b,c)};f.F=function(){return 0===this.g?null:32>=this.g?new Ub(this.Q,0):t?ke.n?ke.n(this,ae(this),0,0):ke.call(null,this,ae(this),0,0):null};f.J=function(){return this.g};f.wa=function(){return 0<this.g?y.a(this,this.g-1):null};
f.xa=function(){if(0===this.g)throw Error("Can't pop empty vector");if(1===this.g)return fb(le,this.j);if(1<this.g-Vd(this))return new X(this.j,this.g-1,this.shift,this.root,this.Q.slice(0,-1),null);if(t){var a=be(this,this.g-2),b=ge(this,this.shift,this.root),b=null==b?Y:b,c=this.g-1;return 5<this.shift&&null==b.d[1]?new X(this.j,c,this.shift-5,b.d[0],a,null):new X(this.j,c,this.shift,b,a,null)}return null};
f.za=function(a,b,c){if(0<=b&&b<this.g)return Vd(this)<=b?(a=wa(this.Q),a[b&31]=c,new X(this.j,this.g,this.shift,this.root,a,null)):new X(this.j,this.g,this.shift,ee(this,this.shift,this.root,b,c),this.Q,null);if(b===this.g)return Fa(this,c);if(t)throw Error([w("Index "),w(b),w(" out of bounds  [0,"),w(this.g),w("]")].join(""));return null};f.v=function(a,b){return cc(this,b)};f.C=function(a,b){return new X(b,this.g,this.shift,this.root,this.Q,this.l)};f.B=function(){return this.j};
f.P=function(a,b){return ce(this,b)[b&31]};f.$=function(a,b,c){return 0<=b&&b<this.g?be(this,b)[b&31]:c};f.G=function(){return M(le,this.j)};var Y=new Sd(null,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]),le=new X(null,0,5,Y,[],0);
function me(a,b){var c=a.length,d=b?a:wa(a);if(32>c)return new X(null,c,5,Y,d,null);for(var e=d.slice(0,32),g=32,h=(new X(null,32,5,Y,e,null)).Ea(null);;)if(g<c)e=g+1,h=pd.a(h,d[g]),g=e;else return Cb(h)}function ne(a){return Cb(x.c(Bb,Ab(le),a))}
var oe=function(){function a(a){var d=null;0<arguments.length&&(d=H(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){return a instanceof Ub&&0===a.o?me.a?me.a(a.d,!0):me.call(null,a.d,!0):ne(a)}a.i=0;a.f=function(a){a=C(a);return b(a)};a.e=b;return a}();function pe(a,b,c,d,e,g){this.M=a;this.ca=b;this.o=c;this.L=d;this.j=e;this.l=g;this.h=32243948;this.p=1536}f=pe.prototype;f.A=function(){var a=this.l;return null!=a?a:this.l=a=ac(this)};
f.S=function(){if(this.L+1<this.ca.length){var a=ke.n?ke.n(this.M,this.ca,this.o,this.L+1):ke.call(null,this.M,this.ca,this.o,this.L+1);return null==a?null:a}return Lb(this)};f.D=function(a,b){return J(b,this)};f.toString=function(){return Nb(this)};f.N=function(a,b){return Xb.a(qe.c?qe.c(this.M,this.o+this.L,N(this.M)):qe.call(null,this.M,this.o+this.L,N(this.M)),b)};f.K=function(a,b,c){return Xb.c(qe.c?qe.c(this.M,this.o+this.L,N(this.M)):qe.call(null,this.M,this.o+this.L,N(this.M)),b,c)};f.F=function(){return this};
f.O=function(){return this.ca[this.L]};f.T=function(){if(this.L+1<this.ca.length){var a=ke.n?ke.n(this.M,this.ca,this.o,this.L+1):ke.call(null,this.M,this.ca,this.o,this.L+1);return null==a?F:a}return Kb(this)};f.eb=function(){var a=this.o+this.ca.length;return a<Ca(this.M)?ke.n?ke.n(this.M,be(this.M,a),a,0):ke.call(null,this.M,be(this.M,a),a,0):null};f.v=function(a,b){return cc(this,b)};f.C=function(a,b){return ke.r?ke.r(this.M,this.ca,this.o,this.L,b):ke.call(null,this.M,this.ca,this.o,this.L,b)};
f.G=function(){return M(le,this.j)};f.fb=function(){return gd.a(this.ca,this.L)};f.gb=function(){var a=this.o+this.ca.length;return a<Ca(this.M)?ke.n?ke.n(this.M,be(this.M,a),a,0):ke.call(null,this.M,be(this.M,a),a,0):F};
var ke=function(){function a(a,b,c,d,l){return new pe(a,b,c,d,l,null)}function b(a,b,c,d){return new pe(a,b,c,d,null,null)}function c(a,b,c){return new pe(a,ce(a,b),b,c,null,null)}var d=null,d=function(d,g,h,k,l){switch(arguments.length){case 3:return c.call(this,d,g,h);case 4:return b.call(this,d,g,h,k);case 5:return a.call(this,d,g,h,k,l)}throw Error("Invalid arity: "+arguments.length);};d.c=c;d.n=b;d.r=a;return d}();
function re(a,b,c,d,e){this.j=a;this.aa=b;this.start=c;this.end=d;this.l=e;this.h=166617887;this.p=8192}f=re.prototype;f.A=function(){var a=this.l;return null!=a?a:this.l=a=ac(this)};f.t=function(a,b){return Ma.c(this,b,null)};f.u=function(a,b,c){return"number"===typeof b?y.c(this,b,c):c};f.pa=function(a,b,c){if("number"===typeof b)return ab(this,b,c);throw Error("Subvec's key for assoc must be a number.");};
f.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.P(null,c);case 3:return this.$(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();f.apply=function(a,b){return this.call.apply(this,[this].concat(wa(b)))};f.b=function(a){return this.P(null,a)};f.a=function(a,b){return this.$(null,a,b)};
f.D=function(a,b){return se.r?se.r(this.j,ab(this.aa,this.end,b),this.start,this.end+1,null):se.call(null,this.j,ab(this.aa,this.end,b),this.start,this.end+1,null)};f.Ga=function(){return this.start!==this.end?new bc(this,this.end-this.start-1,null):null};f.toString=function(){return Nb(this)};f.N=function(a,b){return Xb.a(this,b)};f.K=function(a,b,c){return Xb.c(this,b,c)};
f.F=function(){var a=this;return function(b){return function d(e){return e===a.end?null:J(y.a(a.aa,e),new V(null,function(){return function(){return d(e+1)}}(b),null,null))}}(this)(a.start)};f.J=function(){return this.end-this.start};f.wa=function(){return y.a(this.aa,this.end-1)};f.xa=function(){if(this.start===this.end)throw Error("Can't pop empty vector");return se.r?se.r(this.j,this.aa,this.start,this.end-1,null):se.call(null,this.j,this.aa,this.start,this.end-1,null)};
f.za=function(a,b,c){var d=this,e=d.start+b;return se.r?se.r(d.j,Q.c(d.aa,e,c),d.start,function(){var a=d.end,b=e+1;return a>b?a:b}(),null):se.call(null,d.j,Q.c(d.aa,e,c),d.start,function(){var a=d.end,b=e+1;return a>b?a:b}(),null)};f.v=function(a,b){return cc(this,b)};f.C=function(a,b){return se.r?se.r(b,this.aa,this.start,this.end,this.l):se.call(null,b,this.aa,this.start,this.end,this.l)};f.B=function(){return this.j};
f.P=function(a,b){return 0>b||this.end<=this.start+b?$d(b,this.end-this.start):y.a(this.aa,this.start+b)};f.$=function(a,b,c){return 0>b||this.end<=this.start+b?c:y.c(this.aa,this.start+b,c)};f.G=function(){return M(le,this.j)};function se(a,b,c,d,e){for(;;)if(b instanceof re)c=b.start+c,d=b.start+d,b=b.aa;else{var g=N(b);if(0>c||0>d||c>g||d>g)throw Error("Index out of bounds");return new re(a,b,c,d,e)}}
var qe=function(){function a(a,b,c){return se(null,a,b,c,null)}function b(a,b){return c.c(a,b,N(a))}var c=null,c=function(c,e,g){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,g)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.c=a;return c}();function te(a,b){return a===b.q?b:new Sd(a,wa(b.d))}function ie(a){return new Sd({},wa(a.d))}
function je(a){var b=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];Bc(a,0,b,0,a.length);return b}
var ve=function ue(b,c,d,e){d=te(b.root.q,d);var g=b.g-1>>>c&31;if(5===c)b=e;else{var h=d.d[g];b=null!=h?ue(b,c-5,h,e):Xd(b.root.q,c-5,e)}d.d[g]=b;return d},xe=function we(b,c,d){d=te(b.root.q,d);var e=b.g-2>>>c&31;if(5<c){b=we(b,c-5,d.d[e]);if(null==b&&0===e)return null;d.d[e]=b;return d}return 0===e?null:t?(d.d[e]=null,d):null};function he(a,b,c,d){this.g=a;this.shift=b;this.root=c;this.Q=d;this.h=275;this.p=88}f=he.prototype;
f.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.t(null,c);case 3:return this.u(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();f.apply=function(a,b){return this.call.apply(this,[this].concat(wa(b)))};f.b=function(a){return this.t(null,a)};f.a=function(a,b){return this.u(null,a,b)};f.t=function(a,b){return Ma.c(this,b,null)};f.u=function(a,b,c){return"number"===typeof b?y.c(this,b,c):c};
f.P=function(a,b){if(this.root.q)return ce(this,b)[b&31];throw Error("nth after persistent!");};f.$=function(a,b,c){return 0<=b&&b<this.g?y.a(this,b):c};f.J=function(){if(this.root.q)return this.g;throw Error("count after persistent!");};
f.Nb=function(a,b,c){var d=this;if(d.root.q){if(0<=b&&b<d.g)return Vd(this)<=b?d.Q[b&31]=c:(a=function(){return function g(a,k){var l=te(d.root.q,k);if(0===a)l.d[b&31]=c;else{var q=b>>>a&31,r=g(a-5,l.d[q]);l.d[q]=r}return l}}(this).call(null,d.shift,d.root),d.root=a),this;if(b===d.g)return Bb(this,c);if(t)throw Error([w("Index "),w(b),w(" out of bounds for TransientVector of length"),w(d.g)].join(""));return null}throw Error("assoc! after persistent!");};
f.Ob=function(){if(this.root.q){if(0===this.g)throw Error("Can't pop empty vector");if(1===this.g)return this.g=0,this;if(0<(this.g-1&31))return this.g-=1,this;if(t){var a;a:if(a=this.g-2,a>=Vd(this))a=this.Q;else{for(var b=this.root,c=b,d=this.shift;;)if(0<d)c=te(b.q,c.d[a>>>d&31]),d-=5;else{a=c.d;break a}a=void 0}b=xe(this,this.shift,this.root);b=null!=b?b:new Sd(this.root.q,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,
null,null,null,null,null,null,null,null]);5<this.shift&&null==b.d[1]?(this.root=te(this.root.q,b.d[0]),this.shift-=5):this.root=b;this.g-=1;this.Q=a;return this}return null}throw Error("pop! after persistent!");};f.Oa=function(a,b,c){if("number"===typeof b)return Fb(this,b,c);throw Error("TransientVector's key for assoc! must be a number.");};
f.qa=function(a,b){if(this.root.q){if(32>this.g-Vd(this))this.Q[this.g&31]=b;else{var c=new Sd(this.root.q,this.Q),d=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];d[0]=b;this.Q=d;if(this.g>>>5>1<<this.shift){var d=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],e=this.shift+
5;d[0]=this.root;d[1]=Xd(this.root.q,this.shift,c);this.root=new Sd(this.root.q,d);this.shift=e}else this.root=ve(this,this.shift,this.root,c)}this.g+=1;return this}throw Error("conj! after persistent!");};f.ya=function(){if(this.root.q){this.root.q=null;var a=this.g-Vd(this),b=Array(a);Bc(this.Q,0,b,0,a);return new X(null,this.g,this.shift,this.root,b,null)}throw Error("persistent! called twice");};function ye(){this.p=0;this.h=2097152}ye.prototype.v=function(){return!1};var ze=new ye;
function Ae(a,b){return Ec(xc(b)?N(a)===N(b)?ud(wd,W.a(function(a){return Pb.a(P.c(b,D(a),ze),D(G(a)))},a)):null:null)}
function Be(a,b){var c=a.d;if(b instanceof U)a:{for(var d=c.length,e=b.sa,g=0;;){if(d<=g){c=-1;break a}var h=c[g];if(h instanceof U&&e===h.sa){c=g;break a}if(t)g+=2;else{c=null;break a}}c=void 0}else if("string"==typeof b||"number"===typeof b)a:{d=c.length;for(e=0;;){if(d<=e){c=-1;break a}if(b===c[e]){c=e;break a}if(t)e+=2;else{c=null;break a}}c=void 0}else if(b instanceof Sb)a:{d=c.length;e=b.ua;for(g=0;;){if(d<=g){c=-1;break a}h=c[g];if(h instanceof Sb&&e===h.ua){c=g;break a}if(t)g+=2;else{c=null;
break a}}c=void 0}else if(null==b)a:{d=c.length;for(e=0;;){if(d<=e){c=-1;break a}if(null==c[e]){c=e;break a}if(t)e+=2;else{c=null;break a}}c=void 0}else if(t)a:{d=c.length;for(e=0;;){if(d<=e){c=-1;break a}if(Pb.a(b,c[e])){c=e;break a}if(t)e+=2;else{c=null;break a}}c=void 0}else c=null;return c}function Ce(a,b,c){this.d=a;this.o=b;this.V=c;this.p=0;this.h=32374990}f=Ce.prototype;f.A=function(){return ac(this)};f.S=function(){return this.o<this.d.length-2?new Ce(this.d,this.o+2,this.V):null};
f.D=function(a,b){return J(b,this)};f.toString=function(){return Nb(this)};f.N=function(a,b){return K.a(b,this)};f.K=function(a,b,c){return K.c(b,c,this)};f.F=function(){return this};f.J=function(){return(this.d.length-this.o)/2};f.O=function(){return new X(null,2,5,Y,[this.d[this.o],this.d[this.o+1]],null)};f.T=function(){return this.o<this.d.length-2?new Ce(this.d,this.o+2,this.V):F};f.v=function(a,b){return cc(this,b)};f.C=function(a,b){return new Ce(this.d,this.o,b)};f.B=function(){return this.V};
f.G=function(){return M(F,this.V)};function ma(a,b,c,d){this.j=a;this.g=b;this.d=c;this.l=d;this.p=8196;this.h=16123663}f=ma.prototype;f.Ea=function(){return new De({},this.d.length,wa(this.d))};f.A=function(){var a=this.l;return null!=a?a:this.l=a=Rc(this)};f.t=function(a,b){return Ma.c(this,b,null)};f.u=function(a,b,c){a=Be(this,b);return-1===a?c:this.d[a+1]};
f.pa=function(a,b,c){a=Be(this,b);if(-1===a){if(this.g<Ee){a=this.d;for(var d=a.length,e=Array(d+2),g=0;;)if(g<d)e[g]=a[g],g+=1;else break;e[d]=b;e[d+1]=c;return new ma(this.j,this.g+1,e,null)}return fb(Qa(Od(Fe,this),b,c),this.j)}return c===this.d[a+1]?this:t?(b=wa(this.d),b[a+1]=c,new ma(this.j,this.g,b,null)):null};f.Wa=function(a,b){return-1!==Be(this,b)};
f.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.t(null,c);case 3:return this.u(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();f.apply=function(a,b){return this.call.apply(this,[this].concat(wa(b)))};f.b=function(a){return this.t(null,a)};f.a=function(a,b){return this.u(null,a,b)};
f.Ka=function(a,b,c){a=this.d.length;for(var d=0;;)if(d<a){c=b.c?b.c(c,this.d[d],this.d[d+1]):b.call(null,c,this.d[d],this.d[d+1]);if(Wb(c))return I.b?I.b(c):I.call(null,c);d+=2}else return c};f.D=function(a,b){return yc(b)?Qa(this,y.a(b,0),y.a(b,1)):x.c(Fa,this,b)};f.toString=function(){return Nb(this)};f.F=function(){return 0<=this.d.length-2?new Ce(this.d,0,null):null};f.J=function(){return this.g};f.v=function(a,b){return Ae(this,b)};f.C=function(a,b){return new ma(b,this.g,this.d,this.l)};
f.B=function(){return this.j};f.G=function(){return fb(Ge,this.j)};f.Za=function(a,b){if(0<=Be(this,b)){var c=this.d.length,d=c-2;if(0===d)return Da(this);for(var d=Array(d),e=0,g=0;;){if(e>=c)return new ma(this.j,this.g-1,d,null);if(Pb.a(b,this.d[e]))e+=2;else if(t)d[g]=this.d[e],d[g+1]=this.d[e+1],g+=2,e+=2;else return null}}else return this};var Ge=new ma(null,0,[],null),Ee=8;function De(a,b,c){this.Ba=a;this.ga=b;this.d=c;this.p=56;this.h=258}f=De.prototype;
f.Ab=function(a,b){if(p(this.Ba)){var c=Be(this,b);0<=c&&(this.d[c]=this.d[this.ga-2],this.d[c+1]=this.d[this.ga-1],c=this.d,c.pop(),c.pop(),this.ga-=2);return this}throw Error("dissoc! after persistent!");};f.Oa=function(a,b,c){if(p(this.Ba)){a=Be(this,b);if(-1===a)return this.ga+2<=2*Ee?(this.ga+=2,this.d.push(b),this.d.push(c),this):qd.c(He.a?He.a(this.ga,this.d):He.call(null,this.ga,this.d),b,c);c!==this.d[a+1]&&(this.d[a+1]=c);return this}throw Error("assoc! after persistent!");};
f.qa=function(a,b){if(p(this.Ba)){if(b?b.h&2048||b.Xb||(b.h?0:s(Ta,b)):s(Ta,b))return Db(this,Sc.b?Sc.b(b):Sc.call(null,b),Tc.b?Tc.b(b):Tc.call(null,b));for(var c=C(b),d=this;;){var e=D(c);if(p(e))c=G(c),d=Db(d,Sc.b?Sc.b(e):Sc.call(null,e),Tc.b?Tc.b(e):Tc.call(null,e));else return d}}else throw Error("conj! after persistent!");};f.ya=function(){if(p(this.Ba))return this.Ba=!1,new ma(null,Oc(this.ga),this.d,null);throw Error("persistent! called twice");};f.t=function(a,b){return Ma.c(this,b,null)};
f.u=function(a,b,c){if(p(this.Ba))return a=Be(this,b),-1===a?c:this.d[a+1];throw Error("lookup after persistent!");};f.J=function(){if(p(this.Ba))return Oc(this.ga);throw Error("count after persistent!");};function He(a,b){for(var c=Ab(Fe),d=0;;)if(d<a)c=qd.c(c,b[d],b[d+1]),d+=2;else return c}function Ie(){this.k=!1}function Je(a,b){return a===b?!0:ad(a,b)?!0:t?Pb.a(a,b):null}
var Ke=function(){function a(a,b,c,h,k){a=wa(a);a[b]=c;a[h]=k;return a}function b(a,b,c){a=wa(a);a[b]=c;return a}var c=null,c=function(c,e,g,h,k){switch(arguments.length){case 3:return b.call(this,c,e,g);case 5:return a.call(this,c,e,g,h,k)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.r=a;return c}();function Le(a,b){var c=Array(a.length-2);Bc(a,0,c,0,2*b);Bc(a,2*(b+1),c,2*b,c.length-2*b);return c}
var Me=function(){function a(a,b,c,h,k,l){a=a.ra(b);a.d[c]=h;a.d[k]=l;return a}function b(a,b,c,h){a=a.ra(b);a.d[c]=h;return a}var c=null,c=function(c,e,g,h,k,l){switch(arguments.length){case 4:return b.call(this,c,e,g,h);case 6:return a.call(this,c,e,g,h,k,l)}throw Error("Invalid arity: "+arguments.length);};c.n=b;c.da=a;return c}();
function Ne(a,b,c){for(var d=a.length,e=0;;)if(e<d){var g=a[e];null!=g?c=b.c?b.c(c,g,a[e+1]):b.call(null,c,g,a[e+1]):(g=a[e+1],c=null!=g?g.Da(b,c):c);if(Wb(c))return I.b?I.b(c):I.call(null,c);e+=2}else return c}function Oe(a,b,c){this.q=a;this.s=b;this.d=c}function Pe(a,b,c,d){if(a.s===c)return null;a=a.ra(b);b=a.d;var e=b.length;a.s^=c;Bc(b,2*(d+1),b,2*d,e-2*(d+1));b[e-2]=null;b[e-1]=null;return a}f=Oe.prototype;
f.fa=function(a,b,c,d,e,g){var h=1<<(c>>>b&31),k=Pc(this.s&h-1);if(0===(this.s&h)){var l=Pc(this.s);if(2*l<this.d.length){a=this.ra(a);b=a.d;g.k=!0;a:for(c=2*(l-k),g=2*k+(c-1),l=2*(k+1)+(c-1);;){if(0===c)break a;b[l]=b[g];l-=1;c-=1;g-=1}b[2*k]=d;b[2*k+1]=e;a.s|=h;return a}if(16<=l){k=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];k[c>>>b&31]=Qe.fa(a,b+5,c,d,e,g);for(e=d=0;;)if(32>d)0!==
(this.s>>>d&1)&&(k[d]=null!=this.d[e]?Qe.fa(a,b+5,A(this.d[e]),this.d[e],this.d[e+1],g):this.d[e+1],e+=2),d+=1;else break;return new Re(a,l+1,k)}return t?(b=Array(2*(l+4)),Bc(this.d,0,b,0,2*k),b[2*k]=d,b[2*k+1]=e,Bc(this.d,2*k,b,2*(k+1),2*(l-k)),g.k=!0,a=this.ra(a),a.d=b,a.s|=h,a):null}l=this.d[2*k];h=this.d[2*k+1];return null==l?(l=h.fa(a,b+5,c,d,e,g),l===h?this:Me.n(this,a,2*k+1,l)):Je(d,l)?e===h?this:Me.n(this,a,2*k+1,e):t?(g.k=!0,Me.da(this,a,2*k,null,2*k+1,Se.Fa?Se.Fa(a,b+5,l,h,c,d,e):Se.call(null,
a,b+5,l,h,c,d,e))):null};f.Pa=function(){return Te.b?Te.b(this.d):Te.call(null,this.d)};f.Ra=function(a,b,c,d,e){var g=1<<(c>>>b&31);if(0===(this.s&g))return this;var h=Pc(this.s&g-1),k=this.d[2*h],l=this.d[2*h+1];return null==k?(b=l.Ra(a,b+5,c,d,e),b===l?this:null!=b?Me.n(this,a,2*h+1,b):this.s===g?null:t?Pe(this,a,g,h):null):Je(d,k)?(e[0]=!0,Pe(this,a,g,h)):t?this:null};
f.ra=function(a){if(a===this.q)return this;var b=Pc(this.s),c=Array(0>b?4:2*(b+1));Bc(this.d,0,c,0,2*b);return new Oe(a,this.s,c)};f.Da=function(a,b){return Ne(this.d,a,b)};f.Qa=function(a,b,c){var d=1<<(b>>>a&31);if(0===(this.s&d))return this;var e=Pc(this.s&d-1),g=this.d[2*e],h=this.d[2*e+1];return null==g?(a=h.Qa(a+5,b,c),a===h?this:null!=a?new Oe(null,this.s,Ke.c(this.d,2*e+1,a)):this.s===d?null:t?new Oe(null,this.s^d,Le(this.d,e)):null):Je(c,g)?new Oe(null,this.s^d,Le(this.d,e)):t?this:null};
f.ea=function(a,b,c,d,e){var g=1<<(b>>>a&31),h=Pc(this.s&g-1);if(0===(this.s&g)){var k=Pc(this.s);if(16<=k){h=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];h[b>>>a&31]=Qe.ea(a+5,b,c,d,e);for(d=c=0;;)if(32>c)0!==(this.s>>>c&1)&&(h[c]=null!=this.d[d]?Qe.ea(a+5,A(this.d[d]),this.d[d],this.d[d+1],e):this.d[d+1],d+=2),c+=1;else break;return new Re(null,k+1,h)}a=Array(2*(k+1));Bc(this.d,0,
a,0,2*h);a[2*h]=c;a[2*h+1]=d;Bc(this.d,2*h,a,2*(h+1),2*(k-h));e.k=!0;return new Oe(null,this.s|g,a)}k=this.d[2*h];g=this.d[2*h+1];return null==k?(k=g.ea(a+5,b,c,d,e),k===g?this:new Oe(null,this.s,Ke.c(this.d,2*h+1,k))):Je(c,k)?d===g?this:new Oe(null,this.s,Ke.c(this.d,2*h+1,d)):t?(e.k=!0,new Oe(null,this.s,Ke.r(this.d,2*h,null,2*h+1,Se.da?Se.da(a+5,k,g,b,c,d):Se.call(null,a+5,k,g,b,c,d)))):null};
f.ta=function(a,b,c,d){var e=1<<(b>>>a&31);if(0===(this.s&e))return d;var g=Pc(this.s&e-1),e=this.d[2*g],g=this.d[2*g+1];return null==e?g.ta(a+5,b,c,d):Je(c,e)?g:t?d:null};var Qe=new Oe(null,0,[]);function Ue(a,b,c){var d=a.d;a=2*(a.g-1);for(var e=Array(a),g=0,h=1,k=0;;)if(g<a)g!==c&&null!=d[g]&&(e[h]=d[g],h+=2,k|=1<<g),g+=1;else return new Oe(b,k,e)}function Re(a,b,c){this.q=a;this.g=b;this.d=c}f=Re.prototype;
f.fa=function(a,b,c,d,e,g){var h=c>>>b&31,k=this.d[h];if(null==k)return a=Me.n(this,a,h,Qe.fa(a,b+5,c,d,e,g)),a.g+=1,a;b=k.fa(a,b+5,c,d,e,g);return b===k?this:Me.n(this,a,h,b)};f.Pa=function(){return Ve.b?Ve.b(this.d):Ve.call(null,this.d)};f.Ra=function(a,b,c,d,e){var g=c>>>b&31,h=this.d[g];if(null==h)return this;b=h.Ra(a,b+5,c,d,e);if(b===h)return this;if(null==b){if(8>=this.g)return Ue(this,a,g);a=Me.n(this,a,g,b);a.g-=1;return a}return t?Me.n(this,a,g,b):null};
f.ra=function(a){return a===this.q?this:new Re(a,this.g,wa(this.d))};f.Da=function(a,b){for(var c=this.d.length,d=0,e=b;;)if(d<c){var g=this.d[d];if(null!=g&&(e=g.Da(a,e),Wb(e)))return I.b?I.b(e):I.call(null,e);d+=1}else return e};f.Qa=function(a,b,c){var d=b>>>a&31,e=this.d[d];return null!=e?(a=e.Qa(a+5,b,c),a===e?this:null==a?8>=this.g?Ue(this,null,d):new Re(null,this.g-1,Ke.c(this.d,d,a)):t?new Re(null,this.g,Ke.c(this.d,d,a)):null):this};
f.ea=function(a,b,c,d,e){var g=b>>>a&31,h=this.d[g];if(null==h)return new Re(null,this.g+1,Ke.c(this.d,g,Qe.ea(a+5,b,c,d,e)));a=h.ea(a+5,b,c,d,e);return a===h?this:new Re(null,this.g,Ke.c(this.d,g,a))};f.ta=function(a,b,c,d){var e=this.d[b>>>a&31];return null!=e?e.ta(a+5,b,c,d):d};function We(a,b,c){b*=2;for(var d=0;;)if(d<b){if(Je(c,a[d]))return d;d+=2}else return-1}function Xe(a,b,c,d){this.q=a;this.na=b;this.g=c;this.d=d}f=Xe.prototype;
f.fa=function(a,b,c,d,e,g){if(c===this.na){b=We(this.d,this.g,d);if(-1===b){if(this.d.length>2*this.g)return a=Me.da(this,a,2*this.g,d,2*this.g+1,e),g.k=!0,a.g+=1,a;c=this.d.length;b=Array(c+2);Bc(this.d,0,b,0,c);b[c]=d;b[c+1]=e;g.k=!0;g=this.g+1;a===this.q?(this.d=b,this.g=g,a=this):a=new Xe(this.q,this.na,g,b);return a}return this.d[b+1]===e?this:Me.n(this,a,b+1,e)}return(new Oe(a,1<<(this.na>>>b&31),[null,this,null,null])).fa(a,b,c,d,e,g)};
f.Pa=function(){return Te.b?Te.b(this.d):Te.call(null,this.d)};f.Ra=function(a,b,c,d,e){b=We(this.d,this.g,d);if(-1===b)return this;e[0]=!0;if(1===this.g)return null;a=this.ra(a);e=a.d;e[b]=e[2*this.g-2];e[b+1]=e[2*this.g-1];e[2*this.g-1]=null;e[2*this.g-2]=null;a.g-=1;return a};f.ra=function(a){if(a===this.q)return this;var b=Array(2*(this.g+1));Bc(this.d,0,b,0,2*this.g);return new Xe(a,this.na,this.g,b)};f.Da=function(a,b){return Ne(this.d,a,b)};
f.Qa=function(a,b,c){a=We(this.d,this.g,c);return-1===a?this:1===this.g?null:t?new Xe(null,this.na,this.g-1,Le(this.d,Oc(a))):null};f.ea=function(a,b,c,d,e){return b===this.na?(a=We(this.d,this.g,c),-1===a?(a=2*this.g,b=Array(a+2),Bc(this.d,0,b,0,a),b[a]=c,b[a+1]=d,e.k=!0,new Xe(null,this.na,this.g+1,b)):Pb.a(this.d[a],d)?this:new Xe(null,this.na,this.g,Ke.c(this.d,a+1,d))):(new Oe(null,1<<(this.na>>>a&31),[null,this])).ea(a,b,c,d,e)};
f.ta=function(a,b,c,d){a=We(this.d,this.g,c);return 0>a?d:Je(c,this.d[a])?this.d[a+1]:t?d:null};
var Se=function(){function a(a,b,c,h,k,l,q){var r=A(c);if(r===k)return new Xe(null,r,2,[c,h,l,q]);var u=new Ie;return Qe.fa(a,b,r,c,h,u).fa(a,b,k,l,q,u)}function b(a,b,c,h,k,l){var q=A(b);if(q===h)return new Xe(null,q,2,[b,c,k,l]);var r=new Ie;return Qe.ea(a,q,b,c,r).ea(a,h,k,l,r)}var c=null,c=function(c,e,g,h,k,l,q){switch(arguments.length){case 6:return b.call(this,c,e,g,h,k,l);case 7:return a.call(this,c,e,g,h,k,l,q)}throw Error("Invalid arity: "+arguments.length);};c.da=b;c.Fa=a;return c}();
function Ye(a,b,c,d,e){this.j=a;this.ha=b;this.o=c;this.I=d;this.l=e;this.p=0;this.h=32374860}f=Ye.prototype;f.A=function(){var a=this.l;return null!=a?a:this.l=a=ac(this)};f.D=function(a,b){return J(b,this)};f.toString=function(){return Nb(this)};f.N=function(a,b){return K.a(b,this)};f.K=function(a,b,c){return K.c(b,c,this)};f.F=function(){return this};f.O=function(){return null==this.I?new X(null,2,5,Y,[this.ha[this.o],this.ha[this.o+1]],null):D(this.I)};
f.T=function(){return null==this.I?Te.c?Te.c(this.ha,this.o+2,null):Te.call(null,this.ha,this.o+2,null):Te.c?Te.c(this.ha,this.o,G(this.I)):Te.call(null,this.ha,this.o,G(this.I))};f.v=function(a,b){return cc(this,b)};f.C=function(a,b){return new Ye(b,this.ha,this.o,this.I,this.l)};f.B=function(){return this.j};f.G=function(){return M(F,this.j)};
var Te=function(){function a(a,b,c){if(null==c)for(c=a.length;;)if(b<c){if(null!=a[b])return new Ye(null,a,b,null,null);var h=a[b+1];if(p(h)&&(h=h.Pa(),p(h)))return new Ye(null,a,b+2,h,null);b+=2}else return null;else return new Ye(null,a,b,c,null)}function b(a){return c.c(a,0,null)}var c=null,c=function(c,e,g){switch(arguments.length){case 1:return b.call(this,c);case 3:return a.call(this,c,e,g)}throw Error("Invalid arity: "+arguments.length);};c.b=b;c.c=a;return c}();
function Ze(a,b,c,d,e){this.j=a;this.ha=b;this.o=c;this.I=d;this.l=e;this.p=0;this.h=32374860}f=Ze.prototype;f.A=function(){var a=this.l;return null!=a?a:this.l=a=ac(this)};f.D=function(a,b){return J(b,this)};f.toString=function(){return Nb(this)};f.N=function(a,b){return K.a(b,this)};f.K=function(a,b,c){return K.c(b,c,this)};f.F=function(){return this};f.O=function(){return D(this.I)};f.T=function(){return Ve.n?Ve.n(null,this.ha,this.o,G(this.I)):Ve.call(null,null,this.ha,this.o,G(this.I))};
f.v=function(a,b){return cc(this,b)};f.C=function(a,b){return new Ze(b,this.ha,this.o,this.I,this.l)};f.B=function(){return this.j};f.G=function(){return M(F,this.j)};
var Ve=function(){function a(a,b,c,h){if(null==h)for(h=b.length;;)if(c<h){var k=b[c];if(p(k)&&(k=k.Pa(),p(k)))return new Ze(a,b,c+1,k,null);c+=1}else return null;else return new Ze(a,b,c,h,null)}function b(a){return c.n(null,a,0,null)}var c=null,c=function(c,e,g,h){switch(arguments.length){case 1:return b.call(this,c);case 4:return a.call(this,c,e,g,h)}throw Error("Invalid arity: "+arguments.length);};c.b=b;c.n=a;return c}();
function $e(a,b,c,d,e,g){this.j=a;this.g=b;this.root=c;this.R=d;this.W=e;this.l=g;this.p=8196;this.h=16123663}f=$e.prototype;f.Ea=function(){return new af({},this.root,this.g,this.R,this.W)};f.A=function(){var a=this.l;return null!=a?a:this.l=a=Rc(this)};f.t=function(a,b){return Ma.c(this,b,null)};f.u=function(a,b,c){return null==b?this.R?this.W:c:null==this.root?c:t?this.root.ta(0,A(b),b,c):null};
f.pa=function(a,b,c){if(null==b)return this.R&&c===this.W?this:new $e(this.j,this.R?this.g:this.g+1,this.root,!0,c,null);a=new Ie;b=(null==this.root?Qe:this.root).ea(0,A(b),b,c,a);return b===this.root?this:new $e(this.j,a.k?this.g+1:this.g,b,this.R,this.W,null)};f.Wa=function(a,b){return null==b?this.R:null==this.root?!1:t?this.root.ta(0,A(b),b,Cc)!==Cc:null};
f.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.t(null,c);case 3:return this.u(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();f.apply=function(a,b){return this.call.apply(this,[this].concat(wa(b)))};f.b=function(a){return this.t(null,a)};f.a=function(a,b){return this.u(null,a,b)};
f.Ka=function(a,b,c){a=this.R?b.c?b.c(c,null,this.W):b.call(null,c,null,this.W):c;return Wb(a)?I.b?I.b(a):I.call(null,a):null!=this.root?this.root.Da(b,a):t?a:null};f.D=function(a,b){return yc(b)?Qa(this,y.a(b,0),y.a(b,1)):x.c(Fa,this,b)};f.toString=function(){return Nb(this)};f.F=function(){if(0<this.g){var a=null!=this.root?this.root.Pa():null;return this.R?J(new X(null,2,5,Y,[null,this.W],null),a):a}return null};f.J=function(){return this.g};f.v=function(a,b){return Ae(this,b)};
f.C=function(a,b){return new $e(b,this.g,this.root,this.R,this.W,this.l)};f.B=function(){return this.j};f.G=function(){return fb(Fe,this.j)};f.Za=function(a,b){if(null==b)return this.R?new $e(this.j,this.g-1,this.root,!1,null,null):this;if(null==this.root)return this;if(t){var c=this.root.Qa(0,A(b),b);return c===this.root?this:new $e(this.j,this.g-1,c,this.R,this.W,null)}return null};var Fe=new $e(null,0,null,!1,null,0);
function ic(a,b){for(var c=a.length,d=0,e=Ab(Fe);;)if(d<c)var g=d+1,e=e.Oa(null,a[d],b[d]),d=g;else return Cb(e)}function af(a,b,c,d,e){this.q=a;this.root=b;this.count=c;this.R=d;this.W=e;this.p=56;this.h=258}f=af.prototype;f.Ab=function(a,b){if(this.q)if(null==b)this.R&&(this.R=!1,this.W=null,this.count-=1);else{if(null!=this.root){var c=new Ie,d=this.root.Ra(this.q,0,A(b),b,c);d!==this.root&&(this.root=d);p(c[0])&&(this.count-=1)}}else throw Error("dissoc! after persistent!");return this};
f.Oa=function(a,b,c){return bf(this,b,c)};f.qa=function(a,b){var c;a:{if(this.q){if(b?b.h&2048||b.Xb||(b.h?0:s(Ta,b)):s(Ta,b)){c=bf(this,Sc.b?Sc.b(b):Sc.call(null,b),Tc.b?Tc.b(b):Tc.call(null,b));break a}c=C(b);for(var d=this;;){var e=D(c);if(p(e))c=G(c),d=bf(d,Sc.b?Sc.b(e):Sc.call(null,e),Tc.b?Tc.b(e):Tc.call(null,e));else{c=d;break a}}}else throw Error("conj! after persistent");c=void 0}return c};
f.ya=function(){var a;if(this.q)this.q=null,a=new $e(null,this.count,this.root,this.R,this.W,null);else throw Error("persistent! called twice");return a};f.t=function(a,b){return null==b?this.R?this.W:null:null==this.root?null:this.root.ta(0,A(b),b)};f.u=function(a,b,c){return null==b?this.R?this.W:c:null==this.root?c:this.root.ta(0,A(b),b,c)};f.J=function(){if(this.q)return this.count;throw Error("count after persistent!");};
function bf(a,b,c){if(a.q){if(null==b)a.W!==c&&(a.W=c),a.R||(a.count+=1,a.R=!0);else{var d=new Ie;b=(null==a.root?Qe:a.root).fa(a.q,0,A(b),b,c,d);b!==a.root&&(a.root=b);d.k&&(a.count+=1)}return a}throw Error("assoc! after persistent!");}function cf(a,b,c){for(var d=b;;)if(null!=a)b=c?a.left:a.right,d=fc.a(d,a),a=b;else return d}function df(a,b,c,d,e){this.j=a;this.stack=b;this.Ua=c;this.g=d;this.l=e;this.p=0;this.h=32374862}f=df.prototype;f.A=function(){var a=this.l;return null!=a?a:this.l=a=ac(this)};
f.D=function(a,b){return J(b,this)};f.toString=function(){return Nb(this)};f.N=function(a,b){return K.a(b,this)};f.K=function(a,b,c){return K.c(b,c,this)};f.F=function(){return this};f.J=function(){return 0>this.g?N(G(this))+1:this.g};f.O=function(){return nc(this.stack)};f.T=function(){var a=D(this.stack),a=cf(this.Ua?a.right:a.left,G(this.stack),this.Ua);return null!=a?new df(null,a,this.Ua,this.g-1,null):F};f.v=function(a,b){return cc(this,b)};
f.C=function(a,b){return new df(b,this.stack,this.Ua,this.g,this.l)};f.B=function(){return this.j};f.G=function(){return M(F,this.j)};function ef(a,b,c,d){return c instanceof Z?c.left instanceof Z?new Z(c.key,c.k,c.left.ma(),new $(a,b,c.right,d,null),null):c.right instanceof Z?new Z(c.right.key,c.right.k,new $(c.key,c.k,c.left,c.right.left,null),new $(a,b,c.right.right,d,null),null):t?new $(a,b,c,d,null):null:new $(a,b,c,d,null)}
function ff(a,b,c,d){return d instanceof Z?d.right instanceof Z?new Z(d.key,d.k,new $(a,b,c,d.left,null),d.right.ma(),null):d.left instanceof Z?new Z(d.left.key,d.left.k,new $(a,b,c,d.left.left,null),new $(d.key,d.k,d.left.right,d.right,null),null):t?new $(a,b,c,d,null):null:new $(a,b,c,d,null)}
function gf(a,b,c,d){if(c instanceof Z)return new Z(a,b,c.ma(),d,null);if(d instanceof $)return ff(a,b,c,d.Ta());if(d instanceof Z&&d.left instanceof $)return new Z(d.left.key,d.left.k,new $(a,b,c,d.left.left,null),ff(d.key,d.k,d.left.right,d.right.Ta()),null);if(t)throw Error("red-black tree invariant violation");return null}
var jf=function hf(b,c,d){d=null!=b.left?hf(b.left,c,d):d;if(Wb(d))return I.b?I.b(d):I.call(null,d);d=c.c?c.c(d,b.key,b.k):c.call(null,d,b.key,b.k);if(Wb(d))return I.b?I.b(d):I.call(null,d);b=null!=b.right?hf(b.right,c,d):d;return Wb(b)?I.b?I.b(b):I.call(null,b):b};function $(a,b,c,d,e){this.key=a;this.k=b;this.left=c;this.right=d;this.l=e;this.p=0;this.h=32402207}f=$.prototype;f.A=function(){var a=this.l;return null!=a?a:this.l=a=ac(this)};f.t=function(a,b){return y.c(this,b,null)};
f.u=function(a,b,c){return y.c(this,b,c)};f.pa=function(a,b,c){return Q.c(new X(null,2,5,Y,[this.key,this.k],null),b,c)};f.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.t(null,c);case 3:return this.u(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();f.apply=function(a,b){return this.call.apply(this,[this].concat(wa(b)))};f.b=function(a){return this.t(null,a)};f.a=function(a,b){return this.u(null,a,b)};
f.D=function(a,b){return new X(null,3,5,Y,[this.key,this.k,b],null)};f.La=function(){return this.key};f.Ma=function(){return this.k};f.Fb=function(a){return a.Hb(this)};f.Ta=function(){return new Z(this.key,this.k,this.left,this.right,null)};f.replace=function(a,b,c,d){return new $(a,b,c,d,null)};f.Da=function(a,b){return jf(this,a,b)};f.Eb=function(a){return a.Gb(this)};f.Gb=function(a){return new $(a.key,a.k,this,a.right,null)};f.Hb=function(a){return new $(a.key,a.k,a.left,this,null)};f.ma=function(){return this};
f.N=function(a,b){return Xb.a(this,b)};f.K=function(a,b,c){return Xb.c(this,b,c)};f.F=function(){return Fa(Fa(F,this.k),this.key)};f.J=function(){return 2};f.wa=function(){return this.k};f.xa=function(){return new X(null,1,5,Y,[this.key],null)};f.za=function(a,b,c){return(new X(null,2,5,Y,[this.key,this.k],null)).za(null,b,c)};f.v=function(a,b){return cc(this,b)};f.C=function(a,b){return M(new X(null,2,5,Y,[this.key,this.k],null),b)};f.B=function(){return null};
f.P=function(a,b){return 0===b?this.key:1===b?this.k:null};f.$=function(a,b,c){return 0===b?this.key:1===b?this.k:t?c:null};f.G=function(){return le};function Z(a,b,c,d,e){this.key=a;this.k=b;this.left=c;this.right=d;this.l=e;this.p=0;this.h=32402207}f=Z.prototype;f.A=function(){var a=this.l;return null!=a?a:this.l=a=ac(this)};f.t=function(a,b){return y.c(this,b,null)};f.u=function(a,b,c){return y.c(this,b,c)};f.pa=function(a,b,c){return Q.c(new X(null,2,5,Y,[this.key,this.k],null),b,c)};
f.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.t(null,c);case 3:return this.u(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();f.apply=function(a,b){return this.call.apply(this,[this].concat(wa(b)))};f.b=function(a){return this.t(null,a)};f.a=function(a,b){return this.u(null,a,b)};f.D=function(a,b){return new X(null,3,5,Y,[this.key,this.k,b],null)};f.La=function(){return this.key};f.Ma=function(){return this.k};
f.Fb=function(a){return new Z(this.key,this.k,this.left,a,null)};f.Ta=function(){throw Error("red-black tree invariant violation");};f.replace=function(a,b,c,d){return new Z(a,b,c,d,null)};f.Da=function(a,b){return jf(this,a,b)};f.Eb=function(a){return new Z(this.key,this.k,a,this.right,null)};
f.Gb=function(a){return this.left instanceof Z?new Z(this.key,this.k,this.left.ma(),new $(a.key,a.k,this.right,a.right,null),null):this.right instanceof Z?new Z(this.right.key,this.right.k,new $(this.key,this.k,this.left,this.right.left,null),new $(a.key,a.k,this.right.right,a.right,null),null):t?new $(a.key,a.k,this,a.right,null):null};
f.Hb=function(a){return this.right instanceof Z?new Z(this.key,this.k,new $(a.key,a.k,a.left,this.left,null),this.right.ma(),null):this.left instanceof Z?new Z(this.left.key,this.left.k,new $(a.key,a.k,a.left,this.left.left,null),new $(this.key,this.k,this.left.right,this.right,null),null):t?new $(a.key,a.k,a.left,this,null):null};f.ma=function(){return new $(this.key,this.k,this.left,this.right,null)};f.N=function(a,b){return Xb.a(this,b)};f.K=function(a,b,c){return Xb.c(this,b,c)};
f.F=function(){return Fa(Fa(F,this.k),this.key)};f.J=function(){return 2};f.wa=function(){return this.k};f.xa=function(){return new X(null,1,5,Y,[this.key],null)};f.za=function(a,b,c){return(new X(null,2,5,Y,[this.key,this.k],null)).za(null,b,c)};f.v=function(a,b){return cc(this,b)};f.C=function(a,b){return M(new X(null,2,5,Y,[this.key,this.k],null),b)};f.B=function(){return null};f.P=function(a,b){return 0===b?this.key:1===b?this.k:null};
f.$=function(a,b,c){return 0===b?this.key:1===b?this.k:t?c:null};f.G=function(){return le};
var lf=function kf(b,c,d,e,g){if(null==c)return new Z(d,e,null,null,null);var h=b.a?b.a(d,c.key):b.call(null,d,c.key);return 0===h?(g[0]=c,null):0>h?(b=kf(b,c.left,d,e,g),null!=b?c.Eb(b):null):t?(b=kf(b,c.right,d,e,g),null!=b?c.Fb(b):null):null},nf=function mf(b,c){if(null==b)return c;if(null==c)return b;if(b instanceof Z){if(c instanceof Z){var d=mf(b.right,c.left);return d instanceof Z?new Z(d.key,d.k,new Z(b.key,b.k,b.left,d.left,null),new Z(c.key,c.k,d.right,c.right,null),null):new Z(b.key,b.k,
b.left,new Z(c.key,c.k,d,c.right,null),null)}return new Z(b.key,b.k,b.left,mf(b.right,c),null)}return c instanceof Z?new Z(c.key,c.k,mf(b,c.left),c.right,null):t?(d=mf(b.right,c.left),d instanceof Z?new Z(d.key,d.k,new $(b.key,b.k,b.left,d.left,null),new $(c.key,c.k,d.right,c.right,null),null):gf(b.key,b.k,b.left,new $(c.key,c.k,d,c.right,null))):null},pf=function of(b,c,d,e){if(null!=c){var g=b.a?b.a(d,c.key):b.call(null,d,c.key);if(0===g)return e[0]=c,nf(c.left,c.right);if(0>g)return b=of(b,c.left,
d,e),null!=b||null!=e[0]?c.left instanceof $?gf(c.key,c.k,b,c.right):new Z(c.key,c.k,b,c.right,null):null;if(t){b=of(b,c.right,d,e);if(null!=b||null!=e[0])if(c.right instanceof $)if(e=c.key,d=c.k,c=c.left,b instanceof Z)c=new Z(e,d,c,b.ma(),null);else if(c instanceof $)c=ef(e,d,c.Ta(),b);else if(c instanceof Z&&c.right instanceof $)c=new Z(c.right.key,c.right.k,ef(c.key,c.k,c.left.Ta(),c.right.left),new $(e,d,c.right.right,b,null),null);else{if(t)throw Error("red-black tree invariant violation");
c=null}else c=new Z(c.key,c.k,c.left,b,null);else c=null;return c}}return null},rf=function qf(b,c,d,e){var g=c.key,h=b.a?b.a(d,g):b.call(null,d,g);return 0===h?c.replace(g,e,c.left,c.right):0>h?c.replace(g,c.k,qf(b,c.left,d,e),c.right):t?c.replace(g,c.k,c.left,qf(b,c.right,d,e)):null};function sf(a,b,c,d,e){this.Y=a;this.ja=b;this.g=c;this.j=d;this.l=e;this.h=418776847;this.p=8192}f=sf.prototype;f.A=function(){var a=this.l;return null!=a?a:this.l=a=Rc(this)};
f.t=function(a,b){return Ma.c(this,b,null)};f.u=function(a,b,c){a=tf(this,b);return null!=a?a.k:c};f.pa=function(a,b,c){a=[null];var d=lf(this.Y,this.ja,b,c,a);return null==d?(a=O.a(a,0),Pb.a(c,a.k)?this:new sf(this.Y,rf(this.Y,this.ja,b,c),this.g,this.j,null)):new sf(this.Y,d.ma(),this.g+1,this.j,null)};f.Wa=function(a,b){return null!=tf(this,b)};
f.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.t(null,c);case 3:return this.u(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();f.apply=function(a,b){return this.call.apply(this,[this].concat(wa(b)))};f.b=function(a){return this.t(null,a)};f.a=function(a,b){return this.u(null,a,b)};f.Ka=function(a,b,c){return null!=this.ja?jf(this.ja,b,c):c};f.D=function(a,b){return yc(b)?Qa(this,y.a(b,0),y.a(b,1)):x.c(Fa,this,b)};
f.Ga=function(){return 0<this.g?new df(null,cf(this.ja,null,!1),!1,this.g,null):null};f.toString=function(){return Nb(this)};function tf(a,b){for(var c=a.ja;;)if(null!=c){var d=a.Y.a?a.Y.a(b,c.key):a.Y.call(null,b,c.key);if(0===d)return c;if(0>d)c=c.left;else if(t)c=c.right;else return null}else return null}f.yb=function(a,b){return 0<this.g?new df(null,cf(this.ja,null,b),b,this.g,null):null};
f.zb=function(a,b,c){if(0<this.g){a=null;for(var d=this.ja;;)if(null!=d){var e=this.Y.a?this.Y.a(b,d.key):this.Y.call(null,b,d.key);if(0===e)return new df(null,fc.a(a,d),c,-1,null);if(p(c))0>e?(a=fc.a(a,d),d=d.left):d=d.right;else if(t)0<e?(a=fc.a(a,d),d=d.right):d=d.left;else return null}else return null==a?null:new df(null,a,c,-1,null)}else return null};f.xb=function(a,b){return Sc.b?Sc.b(b):Sc.call(null,b)};f.wb=function(){return this.Y};
f.F=function(){return 0<this.g?new df(null,cf(this.ja,null,!0),!0,this.g,null):null};f.J=function(){return this.g};f.v=function(a,b){return Ae(this,b)};f.C=function(a,b){return new sf(this.Y,this.ja,this.g,b,this.l)};f.B=function(){return this.j};f.G=function(){return M(uf,this.j)};f.Za=function(a,b){var c=[null],d=pf(this.Y,this.ja,b,c);return null==d?null==O.a(c,0)?this:new sf(this.Y,null,0,this.j,null):new sf(this.Y,d.ma(),this.g-1,this.j,null)};
var uf=new sf(Qb,null,0,null,0),vf=function(){function a(a){var d=null;0<arguments.length&&(d=H(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){a=C(a);for(var b=Ab(Fe);;)if(a){var e=G(G(a)),b=qd.c(b,D(a),D(G(a)));a=e}else return Cb(b)}a.i=0;a.f=function(a){a=C(a);return b(a)};a.e=b;return a}(),wf=function(){function a(a){var d=null;0<arguments.length&&(d=H(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){return new ma(null,Oc(N(a)),R.a(xa,
a),null)}a.i=0;a.f=function(a){a=C(a);return b(a)};a.e=b;return a}(),xf=function(){function a(a){var d=null;0<arguments.length&&(d=H(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){a=C(a);for(var b=uf;;)if(a){var e=G(G(a)),b=Q.c(b,D(a),D(G(a)));a=e}else return b}a.i=0;a.f=function(a){a=C(a);return b(a)};a.e=b;return a}(),yf=function(){function a(a,d){var e=null;1<arguments.length&&(e=H(Array.prototype.slice.call(arguments,1),0));return b.call(this,a,e)}function b(a,
b){for(var e=C(b),g=new sf(Hc(a),null,0,null,0);;)if(e)var h=G(G(e)),g=Q.c(g,D(e),D(G(e))),e=h;else return g}a.i=1;a.f=function(a){var d=D(a);a=E(a);return b(d,a)};a.e=b;return a}();function zf(a,b){this.U=a;this.V=b;this.p=0;this.h=32374988}f=zf.prototype;f.A=function(){return ac(this)};f.S=function(){var a=this.U,a=(a?a.h&128||a.$a||(a.h?0:s(Ka,a)):s(Ka,a))?this.U.S(null):G(this.U);return null==a?null:new zf(a,this.V)};f.D=function(a,b){return J(b,this)};f.toString=function(){return Nb(this)};
f.N=function(a,b){return K.a(b,this)};f.K=function(a,b,c){return K.c(b,c,this)};f.F=function(){return this};f.O=function(){return this.U.O(null).La(null)};f.T=function(){var a=this.U,a=(a?a.h&128||a.$a||(a.h?0:s(Ka,a)):s(Ka,a))?this.U.S(null):G(this.U);return null!=a?new zf(a,this.V):F};f.v=function(a,b){return cc(this,b)};f.C=function(a,b){return new zf(this.U,b)};f.B=function(){return this.V};f.G=function(){return M(F,this.V)};function Af(a){return(a=C(a))?new zf(a,null):null}
function Sc(a){return Ua(a)}function Bf(a,b){this.U=a;this.V=b;this.p=0;this.h=32374988}f=Bf.prototype;f.A=function(){return ac(this)};f.S=function(){var a=this.U,a=(a?a.h&128||a.$a||(a.h?0:s(Ka,a)):s(Ka,a))?this.U.S(null):G(this.U);return null==a?null:new Bf(a,this.V)};f.D=function(a,b){return J(b,this)};f.toString=function(){return Nb(this)};f.N=function(a,b){return K.a(b,this)};f.K=function(a,b,c){return K.c(b,c,this)};f.F=function(){return this};f.O=function(){return this.U.O(null).Ma(null)};
f.T=function(){var a=this.U,a=(a?a.h&128||a.$a||(a.h?0:s(Ka,a)):s(Ka,a))?this.U.S(null):G(this.U);return null!=a?new Bf(a,this.V):F};f.v=function(a,b){return cc(this,b)};f.C=function(a,b){return new Bf(this.U,b)};f.B=function(){return this.V};f.G=function(){return M(F,this.V)};function Tc(a){return Va(a)}
var Cf=function(){function a(a){var d=null;0<arguments.length&&(d=H(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){return p(vd(wd,a))?x.a(function(a,b){return fc.a(p(a)?a:Ge,b)},a):null}a.i=0;a.f=function(a){a=C(a);return b(a)};a.e=b;return a}();function Df(a,b,c){this.j=a;this.Ca=b;this.l=c;this.p=8196;this.h=15077647}f=Df.prototype;f.Ea=function(){return new Ef(Ab(this.Ca))};f.A=function(){var a=this.l;return null!=a?a:this.l=a=Uc(this)};
f.t=function(a,b){return Ma.c(this,b,null)};f.u=function(a,b,c){return Pa(this.Ca,b)?b:c};f.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.t(null,c);case 3:return this.u(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();f.apply=function(a,b){return this.call.apply(this,[this].concat(wa(b)))};f.b=function(a){return this.t(null,a)};f.a=function(a,b){return this.u(null,a,b)};f.D=function(a,b){return new Df(this.j,Q.c(this.Ca,b,null),null)};
f.toString=function(){return Nb(this)};f.F=function(){return Af(this.Ca)};f.vb=function(a,b){return new Df(this.j,Sa(this.Ca,b),null)};f.J=function(){return Ca(this.Ca)};f.v=function(a,b){return uc(b)&&N(this)===N(b)&&ud(function(a){return function(b){return Fc(a,b)}}(this),b)};f.C=function(a,b){return new Df(b,this.Ca,this.l)};f.B=function(){return this.j};f.G=function(){return M(Ff,this.j)};var Ff=new Df(null,Ge,0);function Ef(a){this.ia=a;this.h=259;this.p=136}f=Ef.prototype;
f.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return Ma.c(this.ia,c,Cc)===Cc?null:c;case 3:return Ma.c(this.ia,c,Cc)===Cc?d:c}throw Error("Invalid arity: "+arguments.length);}}();f.apply=function(a,b){return this.call.apply(this,[this].concat(wa(b)))};f.b=function(a){return Ma.c(this.ia,a,Cc)===Cc?null:a};f.a=function(a,b){return Ma.c(this.ia,a,Cc)===Cc?b:a};f.t=function(a,b){return Ma.c(this,b,null)};f.u=function(a,b,c){return Ma.c(this.ia,b,Cc)===Cc?c:b};
f.J=function(){return N(this.ia)};f.Mb=function(a,b){this.ia=rd.a(this.ia,b);return this};f.qa=function(a,b){this.ia=qd.c(this.ia,b,null);return this};f.ya=function(){return new Df(null,Cb(this.ia),null)};function Gf(a,b,c){this.j=a;this.ka=b;this.l=c;this.h=417730831;this.p=8192}f=Gf.prototype;f.A=function(){var a=this.l;return null!=a?a:this.l=a=Uc(this)};f.t=function(a,b){return Ma.c(this,b,null)};f.u=function(a,b,c){a=tf(this.ka,b);return null!=a?a.key:c};
f.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.t(null,c);case 3:return this.u(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();f.apply=function(a,b){return this.call.apply(this,[this].concat(wa(b)))};f.b=function(a){return this.t(null,a)};f.a=function(a,b){return this.u(null,a,b)};f.D=function(a,b){return new Gf(this.j,Q.c(this.ka,b,null),null)};f.Ga=function(){return 0<N(this.ka)?W.a(Sc,rb(this.ka)):null};f.toString=function(){return Nb(this)};
f.yb=function(a,b){return W.a(Sc,sb(this.ka,b))};f.zb=function(a,b,c){return W.a(Sc,tb(this.ka,b,c))};f.xb=function(a,b){return b};f.wb=function(){return vb(this.ka)};f.F=function(){return Af(this.ka)};f.vb=function(a,b){return new Gf(this.j,jc.a(this.ka,b),null)};f.J=function(){return N(this.ka)};f.v=function(a,b){return uc(b)&&N(this)===N(b)&&ud(function(a){return function(b){return Fc(a,b)}}(this),b)};f.C=function(a,b){return new Gf(b,this.ka,this.l)};f.B=function(){return this.j};
f.G=function(){return M(Hf,this.j)};
var Hf=new Gf(null,uf,0),If=function(){function a(a){var d=null;0<arguments.length&&(d=H(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){return x.c(Fa,Hf,a)}a.i=0;a.f=function(a){a=C(a);return b(a)};a.e=b;return a}(),Jf=function(){function a(a,d){var e=null;1<arguments.length&&(e=H(Array.prototype.slice.call(arguments,1),0));return b.call(this,a,e)}function b(a,b){return x.c(Fa,new Gf(null,yf(a),0),b)}a.i=1;a.f=function(a){var d=D(a);a=E(a);return b(d,a)};a.e=b;return a}();
function Kf(a){for(var b=le;;)if(G(a))b=fc.a(b,D(a)),a=G(a);else return C(b)}function bd(a){if(a&&(a.p&4096||a.Zb))return a.name;if("string"===typeof a)return a;throw Error([w("Doesn't support name: "),w(a)].join(""));}
var Lf=function(){function a(a,b,c){return(a.b?a.b(b):a.call(null,b))>(a.b?a.b(c):a.call(null,c))?b:c}var b=null,c=function(){function a(b,d,k,l){var q=null;3<arguments.length&&(q=H(Array.prototype.slice.call(arguments,3),0));return c.call(this,b,d,k,q)}function c(a,d,e,l){return x.c(function(c,d){return b.c(a,c,d)},b.c(a,d,e),l)}a.i=3;a.f=function(a){var b=D(a);a=G(a);var d=D(a);a=G(a);var l=D(a);a=E(a);return c(b,d,l,a)};a.e=c;return a}(),b=function(b,e,g,h){switch(arguments.length){case 2:return e;
case 3:return a.call(this,b,e,g);default:return c.e(b,e,g,H(arguments,3))}throw Error("Invalid arity: "+arguments.length);};b.i=3;b.f=c.f;b.a=function(a,b){return b};b.c=a;b.e=c.e;return b}(),Nf=function Mf(b,c){return new V(null,function(){var d=C(c);return d?p(b.b?b.b(D(d)):b.call(null,D(d)))?J(D(d),Mf(b,E(d))):null:null},null,null)};
function Of(a,b,c){return function(d){var e=vb(a);return b.a?b.a(e.a?e.a(ub(a,d),c):e.call(null,ub(a,d),c),0):b.call(null,e.a?e.a(ub(a,d),c):e.call(null,ub(a,d),c),0)}}
var Pf=function(){function a(a,b,c,h,k){var l=tb(a,c,!0);if(p(l)){var q=O.c(l,0,null);return Nf(Of(a,h,k),p(Of(a,b,c).call(null,q))?l:G(l))}return null}function b(a,b,c){var h=Of(a,b,c),k;a:{k=[Lc,Mc];var l=k.length;if(l<=Ee)for(var q=0,r=Ab(Ge);;)if(q<l)var u=q+1,r=Db(r,k[q],null),q=u;else{k=new Df(null,Cb(r),null);break a}else for(q=0,r=Ab(Ff);;)if(q<l)u=q+1,r=Bb(r,k[q]),q=u;else{k=Cb(r);break a}k=void 0}return p(k.call(null,b))?(a=tb(a,c,!0),p(a)?(b=O.c(a,0,null),p(h.b?h.b(b):h.call(null,b))?a:
G(a)):null):Nf(h,sb(a,!0))}var c=null,c=function(c,e,g,h,k){switch(arguments.length){case 3:return b.call(this,c,e,g);case 5:return a.call(this,c,e,g,h,k)}throw Error("Invalid arity: "+arguments.length);};c.c=b;c.r=a;return c}();function Qf(a,b,c,d,e){this.j=a;this.start=b;this.end=c;this.step=d;this.l=e;this.h=32375006;this.p=8192}f=Qf.prototype;f.A=function(){var a=this.l;return null!=a?a:this.l=a=ac(this)};
f.S=function(){return 0<this.step?this.start+this.step<this.end?new Qf(this.j,this.start+this.step,this.end,this.step,null):null:this.start+this.step>this.end?new Qf(this.j,this.start+this.step,this.end,this.step,null):null};f.D=function(a,b){return J(b,this)};f.toString=function(){return Nb(this)};f.N=function(a,b){return Xb.a(this,b)};f.K=function(a,b,c){return Xb.c(this,b,c)};f.F=function(){return 0<this.step?this.start<this.end?this:null:this.start>this.end?this:null};
f.J=function(){return ta(nb(this))?0:Math.ceil((this.end-this.start)/this.step)};f.O=function(){return null==nb(this)?null:this.start};f.T=function(){return null!=nb(this)?new Qf(this.j,this.start+this.step,this.end,this.step,null):F};f.v=function(a,b){return cc(this,b)};f.C=function(a,b){return new Qf(b,this.start,this.end,this.step,this.l)};f.B=function(){return this.j};
f.P=function(a,b){if(b<Ca(this))return this.start+b*this.step;if(this.start>this.end&&0===this.step)return this.start;throw Error("Index out of bounds");};f.$=function(a,b,c){return b<Ca(this)?this.start+b*this.step:this.start>this.end&&0===this.step?this.start:c};f.G=function(){return M(F,this.j)};
var Rf=function(){function a(a,b,c){return new Qf(null,a,b,c,null)}function b(a,b){return e.c(a,b,1)}function c(a){return e.c(0,a,1)}function d(){return e.c(0,Number.MAX_VALUE,1)}var e=null,e=function(e,h,k){switch(arguments.length){case 0:return d.call(this);case 1:return c.call(this,e);case 2:return b.call(this,e,h);case 3:return a.call(this,e,h,k)}throw Error("Invalid arity: "+arguments.length);};e.m=d;e.b=c;e.a=b;e.c=a;return e}(),Sf=function(){function a(a,b){for(;;)if(C(b)&&0<a){var c=a-1,h=
G(b);a=c;b=h}else return null}function b(a){for(;;)if(C(a))a=G(a);else return null}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);};c.b=b;c.a=a;return c}(),Tf=function(){function a(a,b){Sf.a(a,b);return b}function b(a){Sf.b(a);return a}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);
};c.b=b;c.a=a;return c}();function Uf(a,b,c,d,e,g,h){var k=ja;try{ja=null==ja?null:ja-1;if(null!=ja&&0>ja)return z(a,"#");z(a,c);C(h)&&(b.c?b.c(D(h),a,g):b.call(null,D(h),a,g));for(var l=G(h),q=sa.b(g);l&&(null==q||0!==q);){z(a,d);b.c?b.c(D(l),a,g):b.call(null,D(l),a,g);var r=G(l);c=q-1;l=r;q=c}p(sa.b(g))&&(z(a,d),b.c?b.c("...",a,g):b.call(null,"...",a,g));return z(a,e)}finally{ja=k}}
var Vf=function(){function a(a,d){var e=null;1<arguments.length&&(e=H(Array.prototype.slice.call(arguments,1),0));return b.call(this,a,e)}function b(a,b){for(var e=C(b),g=null,h=0,k=0;;)if(k<h){var l=g.P(null,k);z(a,l);k+=1}else if(e=C(e))g=e,zc(g)?(e=Jb(g),h=Kb(g),g=e,l=N(e),e=h,h=l):(l=D(g),z(a,l),e=G(g),g=null,h=0),k=0;else return null}a.i=1;a.f=function(a){var d=D(a);a=E(a);return b(d,a)};a.e=b;return a}(),Wf={'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"};
function Xf(a){return[w('"'),w(a.replace(RegExp('[\\\\"\b\f\n\r\t]',"g"),function(a){return Wf[a]})),w('"')].join("")}
var $f=function Yf(b,c,d){if(null==b)return z(c,"nil");if(void 0===b)return z(c,"#\x3cundefined\x3e");if(t){p(function(){var c=P.a(d,qa);return p(c)?(c=b?b.h&131072||b.Yb?!0:b.h?!1:s(cb,b):s(cb,b))?mc(b):c:c}())&&(z(c,"^"),Yf(mc(b),c,d),z(c," "));if(null==b)return z(c,"nil");if(b.bb)return b.Bb(b,c,d);if(b&&(b.h&2147483648||b.H))return b.w(null,c,d);if(ua(b)===Boolean||"number"===typeof b)return z(c,""+w(b));if(null!=b&&b.constructor===Object)return z(c,"#js "),Zf.n?Zf.n(W.a(function(c){return new X(null,
2,5,Y,[cd.b(c),b[c]],null)},Ac(b)),Yf,c,d):Zf.call(null,W.a(function(c){return new X(null,2,5,Y,[cd.b(c),b[c]],null)},Ac(b)),Yf,c,d);if(b instanceof Array)return Uf(c,Yf,"#js ["," ","]",d,b);if("string"==typeof b)return p(pa.b(d))?z(c,Xf(b)):z(c,b);if(kc(b))return Vf.e(c,H(["#\x3c",""+w(b),"\x3e"],0));if(b instanceof Date){var e=function(b,c){for(var d=""+w(b);;)if(N(d)<c)d=[w("0"),w(d)].join("");else return d};return Vf.e(c,H(['#inst "',""+w(b.getUTCFullYear()),"-",e(b.getUTCMonth()+1,2),"-",e(b.getUTCDate(),
2),"T",e(b.getUTCHours(),2),":",e(b.getUTCMinutes(),2),":",e(b.getUTCSeconds(),2),".",e(b.getUTCMilliseconds(),3),"-",'00:00"'],0))}return b instanceof RegExp?Vf.e(c,H(['#"',b.source,'"'],0)):(b?b.h&2147483648||b.H||(b.h?0:s(xb,b)):s(xb,b))?yb(b,c,d):t?Vf.e(c,H(["#\x3c",""+w(b),"\x3e"],0)):null}return null},ag=function(){function a(a){var d=null;0<arguments.length&&(d=H(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){var b;if(sc(a))b="";else{b=w;var e=ka(),g=new ha;
a:{var h=new Mb(g);$f(D(a),h,e);a=C(G(a));for(var k=null,l=0,q=0;;)if(q<l){var r=k.P(null,q);z(h," ");$f(r,h,e);q+=1}else if(a=C(a))k=a,zc(k)?(a=Jb(k),l=Kb(k),k=a,r=N(a),a=l,l=r):(r=D(k),z(h," "),$f(r,h,e),a=G(k),k=null,l=0),q=0;else break a}b=""+b(g)}return b}a.i=0;a.f=function(a){a=C(a);return b(a)};a.e=b;return a}();function Zf(a,b,c,d){return Uf(c,function(a,c,d){b.c?b.c(Ua(a),c,d):b.call(null,Ua(a),c,d);z(c," ");return b.c?b.c(Va(a),c,d):b.call(null,Va(a),c,d)},"{",", ","}",d,C(a))}
zf.prototype.H=!0;zf.prototype.w=function(a,b,c){return Uf(b,$f,"("," ",")",c,this)};Ub.prototype.H=!0;Ub.prototype.w=function(a,b,c){return Uf(b,$f,"("," ",")",c,this)};re.prototype.H=!0;re.prototype.w=function(a,b,c){return Uf(b,$f,"["," ","]",c,this)};hd.prototype.H=!0;hd.prototype.w=function(a,b,c){return Uf(b,$f,"("," ",")",c,this)};sf.prototype.H=!0;sf.prototype.w=function(a,b,c){return Zf(this,$f,b,c)};ma.prototype.H=!0;ma.prototype.w=function(a,b,c){return Zf(this,$f,b,c)};V.prototype.H=!0;
V.prototype.w=function(a,b,c){return Uf(b,$f,"("," ",")",c,this)};bc.prototype.H=!0;bc.prototype.w=function(a,b,c){return Uf(b,$f,"("," ",")",c,this)};Gf.prototype.H=!0;Gf.prototype.w=function(a,b,c){return Uf(b,$f,"#{"," ","}",c,this)};Ye.prototype.H=!0;Ye.prototype.w=function(a,b,c){return Uf(b,$f,"("," ",")",c,this)};Z.prototype.H=!0;Z.prototype.w=function(a,b,c){return Uf(b,$f,"["," ","]",c,this)};pe.prototype.H=!0;pe.prototype.w=function(a,b,c){return Uf(b,$f,"("," ",")",c,this)};
$e.prototype.H=!0;$e.prototype.w=function(a,b,c){return Zf(this,$f,b,c)};Df.prototype.H=!0;Df.prototype.w=function(a,b,c){return Uf(b,$f,"#{"," ","}",c,this)};X.prototype.H=!0;X.prototype.w=function(a,b,c){return Uf(b,$f,"["," ","]",c,this)};Vc.prototype.H=!0;Vc.prototype.w=function(a,b,c){return Uf(b,$f,"("," ",")",c,this)};Ce.prototype.H=!0;Ce.prototype.w=function(a,b,c){return Uf(b,$f,"("," ",")",c,this)};Wc.prototype.H=!0;Wc.prototype.w=function(a,b){return z(b,"()")};$.prototype.H=!0;
$.prototype.w=function(a,b,c){return Uf(b,$f,"["," ","]",c,this)};$c.prototype.H=!0;$c.prototype.w=function(a,b,c){return Uf(b,$f,"("," ",")",c,this)};Qf.prototype.H=!0;Qf.prototype.w=function(a,b,c){return Uf(b,$f,"("," ",")",c,this)};Ze.prototype.H=!0;Ze.prototype.w=function(a,b,c){return Uf(b,$f,"("," ",")",c,this)};Bf.prototype.H=!0;Bf.prototype.w=function(a,b,c){return Uf(b,$f,"("," ",")",c,this)};df.prototype.H=!0;df.prototype.w=function(a,b,c){return Uf(b,$f,"("," ",")",c,this)};
X.prototype.Xa=!0;X.prototype.Ya=function(a,b){return Gc.a(this,b)};re.prototype.Xa=!0;re.prototype.Ya=function(a,b){return Gc.a(this,b)};U.prototype.Xa=!0;U.prototype.Ya=function(a,b){return Ob(this,b)};Sb.prototype.Xa=!0;Sb.prototype.Ya=function(a,b){return Ob(this,b)};function bg(a,b){if(a?a.$b:a)return a.$b(a,b);var c;c=bg[m(null==a?null:a)];if(!c&&(c=bg._,!c))throw v("IReset.-reset!",a);return c.call(null,a,b)}
var cg=function(){function a(a,b,c,d,e){if(a?a.ec:a)return a.ec(a,b,c,d,e);var r;r=cg[m(null==a?null:a)];if(!r&&(r=cg._,!r))throw v("ISwap.-swap!",a);return r.call(null,a,b,c,d,e)}function b(a,b,c,d){if(a?a.dc:a)return a.dc(a,b,c,d);var e;e=cg[m(null==a?null:a)];if(!e&&(e=cg._,!e))throw v("ISwap.-swap!",a);return e.call(null,a,b,c,d)}function c(a,b,c){if(a?a.cc:a)return a.cc(a,b,c);var d;d=cg[m(null==a?null:a)];if(!d&&(d=cg._,!d))throw v("ISwap.-swap!",a);return d.call(null,a,b,c)}function d(a,b){if(a?
a.bc:a)return a.bc(a,b);var c;c=cg[m(null==a?null:a)];if(!c&&(c=cg._,!c))throw v("ISwap.-swap!",a);return c.call(null,a,b)}var e=null,e=function(e,h,k,l,q){switch(arguments.length){case 2:return d.call(this,e,h);case 3:return c.call(this,e,h,k);case 4:return b.call(this,e,h,k,l);case 5:return a.call(this,e,h,k,l,q)}throw Error("Invalid arity: "+arguments.length);};e.a=d;e.c=c;e.n=b;e.r=a;return e}();function dg(a,b,c,d){this.state=a;this.j=b;this.lc=c;this.Rb=d;this.h=2153938944;this.p=16386}f=dg.prototype;
f.A=function(){return this[ba]||(this[ba]=++ca)};f.Pb=function(a,b,c){a=C(this.Rb);for(var d=null,e=0,g=0;;)if(g<e){var h=d.P(null,g),k=O.c(h,0,null),h=O.c(h,1,null);h.n?h.n(k,this,b,c):h.call(null,k,this,b,c);g+=1}else if(a=C(a))zc(a)?(d=Jb(a),a=Kb(a),k=d,e=N(d),d=k):(d=D(a),k=O.c(d,0,null),h=O.c(d,1,null),h.n?h.n(k,this,b,c):h.call(null,k,this,b,c),a=G(a),d=null,e=0),g=0;else return null};f.w=function(a,b,c){z(b,"#\x3cAtom: ");$f(this.state,b,c);return z(b,"\x3e")};f.B=function(){return this.j};
f.hb=function(){return this.state};f.v=function(a,b){return this===b};
var fg=function(){function a(a){return new dg(a,null,null,null)}var b=null,c=function(){function a(c,d){var k=null;1<arguments.length&&(k=H(Array.prototype.slice.call(arguments,1),0));return b.call(this,c,k)}function b(a,c){var d=Dc(c)?R.a(vf,c):c,e=P.a(d,eg),d=P.a(d,qa);return new dg(a,d,e,null)}a.i=1;a.f=function(a){var c=D(a);a=E(a);return b(c,a)};a.e=b;return a}(),b=function(b,e){switch(arguments.length){case 1:return a.call(this,b);default:return c.e(b,H(arguments,1))}throw Error("Invalid arity: "+
arguments.length);};b.i=1;b.f=c.f;b.b=a;b.e=c.e;return b}();function gg(a,b){if(a instanceof dg){var c=a.lc;if(null!=c&&!p(c.b?c.b(b):c.call(null,b)))throw Error([w("Assert failed: "),w("Validator rejected reference state"),w("\n"),w(ag.e(H([Zc(new Sb(null,"validate","validate",1233162959,null),new Sb(null,"new-value","new-value",972165309,null))],0)))].join(""));c=a.state;a.state=b;null!=a.Rb&&zb(a,c,b);return b}return bg(a,b)}function I(a){return bb(a)}
var hg=function(){function a(a,b,c,d){return a instanceof dg?gg(a,b.c?b.c(a.state,c,d):b.call(null,a.state,c,d)):cg.n(a,b,c,d)}function b(a,b,c){return a instanceof dg?gg(a,b.a?b.a(a.state,c):b.call(null,a.state,c)):cg.c(a,b,c)}function c(a,b){return a instanceof dg?gg(a,b.b?b.b(a.state):b.call(null,a.state)):cg.a(a,b)}var d=null,e=function(){function a(c,d,e,g,u){var B=null;4<arguments.length&&(B=H(Array.prototype.slice.call(arguments,4),0));return b.call(this,c,d,e,g,B)}function b(a,c,d,e,g){return a instanceof
dg?gg(a,R.r(c,a.state,d,e,g)):cg.r(a,c,d,e,g)}a.i=4;a.f=function(a){var c=D(a);a=G(a);var d=D(a);a=G(a);var e=D(a);a=G(a);var g=D(a);a=E(a);return b(c,d,e,g,a)};a.e=b;return a}(),d=function(d,h,k,l,q){switch(arguments.length){case 2:return c.call(this,d,h);case 3:return b.call(this,d,h,k);case 4:return a.call(this,d,h,k,l);default:return e.e(d,h,k,l,H(arguments,4))}throw Error("Invalid arity: "+arguments.length);};d.i=4;d.f=e.f;d.a=c;d.c=b;d.n=a;d.e=e.e;return d}(),ig={};
function jg(a){if(a?a.Wb:a)return a.Wb(a);var b;b=jg[m(null==a?null:a)];if(!b&&(b=jg._,!b))throw v("IEncodeJS.-clj-\x3ejs",a);return b.call(null,a)}function kg(a){return(a?p(p(null)?null:a.Vb)||(a.Cb?0:s(ig,a)):s(ig,a))?jg(a):"string"===typeof a||"number"===typeof a||a instanceof U||a instanceof Sb?lg.b?lg.b(a):lg.call(null,a):ag.e(H([a],0))}
var lg=function mg(b){if(null==b)return null;if(b?p(p(null)?null:b.Vb)||(b.Cb?0:s(ig,b)):s(ig,b))return jg(b);if(b instanceof U)return bd(b);if(b instanceof Sb)return""+w(b);if(xc(b)){var c={};b=C(b);for(var d=null,e=0,g=0;;)if(g<e){var h=d.P(null,g),k=O.c(h,0,null),h=O.c(h,1,null);c[kg(k)]=mg(h);g+=1}else if(b=C(b))zc(b)?(e=Jb(b),b=Kb(b),d=e,e=N(e)):(e=D(b),d=O.c(e,0,null),e=O.c(e,1,null),c[kg(d)]=mg(e),b=G(b),d=null,e=0),g=0;else break;return c}if(tc(b)){c=[];b=C(W.a(mg,b));d=null;for(g=e=0;;)if(g<
e)k=d.P(null,g),c.push(k),g+=1;else if(b=C(b))d=b,zc(d)?(b=Jb(d),g=Kb(d),d=b,e=N(b),b=g):(b=D(d),c.push(b),b=G(d),d=null,e=0),g=0;else break;return c}return t?b:null},ng={};function og(a,b){if(a?a.Ub:a)return a.Ub(a,b);var c;c=og[m(null==a?null:a)];if(!c&&(c=og._,!c))throw v("IEncodeClojure.-js-\x3eclj",a);return c.call(null,a,b)}
var qg=function(){function a(a){return b.e(a,H([new ma(null,1,[pg,!1],null)],0))}var b=null,c=function(){function a(c,d){var k=null;1<arguments.length&&(k=H(Array.prototype.slice.call(arguments,1),0));return b.call(this,c,k)}function b(a,c){if(a?p(p(null)?null:a.sc)||(a.Cb?0:s(ng,a)):s(ng,a))return og(a,R.a(wf,c));if(C(c)){var d=Dc(c)?R.a(vf,c):c,e=P.a(d,pg);return function(a,b,c,d){return function L(e){return Dc(e)?Tf.b(W.a(L,e)):tc(e)?Od(gc(e),W.a(L,e)):e instanceof Array?ne(W.a(L,e)):ua(e)===Object?
Od(Ge,function(){return function(a,b,c,d){return function wb(g){return new V(null,function(a,b,c,d){return function(){for(;;){var a=C(g);if(a){if(zc(a)){var b=Jb(a),c=N(b),h=new ed(Array(c),0);a:{for(var k=0;;)if(k<c){var l=y.a(b,k),l=new X(null,2,5,Y,[d.b?d.b(l):d.call(null,l),L(e[l])],null);h.add(l);k+=1}else{b=!0;break a}b=void 0}return b?id(h.ba(),wb(Kb(a))):id(h.ba(),null)}h=D(a);return J(new X(null,2,5,Y,[d.b?d.b(h):d.call(null,h),L(e[h])],null),wb(E(a)))}return null}}}(a,b,c,d),null,null)}}(a,
b,c,d)(Ac(e))}()):t?e:null}}(c,d,e,p(e)?cd:w)(a)}return null}a.i=1;a.f=function(a){var c=D(a);a=E(a);return b(c,a)};a.e=b;return a}(),b=function(b,e){switch(arguments.length){case 1:return a.call(this,b);default:return c.e(b,H(arguments,1))}throw Error("Invalid arity: "+arguments.length);};b.i=1;b.f=c.f;b.b=a;b.e=c.e;return b}();var ra=new U(null,"dup","dup"),rg=new U(null,"r","r"),sg=new U(null,"pnodes","pnodes"),Rb=new U(null,"default","default"),tg=new U(null,"ppath","ppath"),ug=new U("zip","branch?","zip/branch?"),pg=new U(null,"keywordize-keys","keywordize-keys"),vg=new U(null,"changed?","changed?"),oa=new U(null,"flush-on-newline","flush-on-newline"),wg=new U(null,"end","end"),xg=new U(null,"l","l"),yg=new U("zip","make-node","zip/make-node"),sa=new U(null,"print-length","print-length"),zg=new U("mori","not-found",
"mori/not-found"),t=new U(null,"else","else"),pa=new U(null,"readably","readably"),eg=new U(null,"validator","validator"),qa=new U(null,"meta","meta"),Ag=new U("zip","children","zip/children");var Bg,Cg;function Dg(a){return a.m?a.m():a.call(null)}var Eg=function(){function a(a,b,c){return xc(c)?jb(c,a,b):null==c?b:c instanceof Array?Yb.c(c,a,b):t?hb.c(c,a,b):null}function b(a,b){return c.c(a,a.m?a.m():a.call(null),b)}var c=null,c=function(c,e,g){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,g)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.c=a;return c}();
function Fg(a,b,c,d){if(a?a.Db:a)return a.Db(a,b,c,d);var e;e=Fg[m(null==a?null:a)];if(!e&&(e=Fg._,!e))throw v("CollFold.coll-fold",a);return e.call(null,a,b,c,d)}
var Hg=function Gg(b,c){"undefined"===typeof Bg&&(Bg=function(b,c,g,h){this.Z=b;this.Aa=c;this.jc=g;this.hc=h;this.p=0;this.h=917504},Bg.bb=!0,Bg.ab="clojure.core.reducers/t6077",Bg.Bb=function(b,c){return z(c,"clojure.core.reducers/t6077")},Bg.prototype.N=function(b,c){return hb.c(this,c,c.m?c.m():c.call(null))},Bg.prototype.K=function(b,c,g){return hb.c(this.Aa,this.Z.b?this.Z.b(c):this.Z.call(null,c),g)},Bg.prototype.B=function(){return this.hc},Bg.prototype.C=function(b,c){return new Bg(this.Z,
this.Aa,this.jc,c)});return new Bg(c,b,Gg,null)},Jg=function Ig(b,c){"undefined"===typeof Cg&&(Cg=function(b,c,g,h){this.Z=b;this.Aa=c;this.fc=g;this.ic=h;this.p=0;this.h=917504},Cg.bb=!0,Cg.ab="clojure.core.reducers/t6083",Cg.Bb=function(b,c){return z(c,"clojure.core.reducers/t6083")},Cg.prototype.Db=function(b,c,g,h){return Fg(this.Aa,c,g,this.Z.b?this.Z.b(h):this.Z.call(null,h))},Cg.prototype.N=function(b,c){return hb.c(this.Aa,this.Z.b?this.Z.b(c):this.Z.call(null,c),c.m?c.m():c.call(null))},
Cg.prototype.K=function(b,c,g){return hb.c(this.Aa,this.Z.b?this.Z.b(c):this.Z.call(null,c),g)},Cg.prototype.B=function(){return this.ic},Cg.prototype.C=function(b,c){return new Cg(this.Z,this.Aa,this.fc,c)});return new Cg(c,b,Ig,null)},Kg=function(){function a(a,b){return Jg(b,function(b){return function(){var c=null;return c=function(c,e,h){switch(arguments.length){case 0:return b.m?b.m():b.call(null);case 2:return b.a?b.a(c,a.b?a.b(e):a.call(null,e)):b.call(null,c,a.b?a.b(e):a.call(null,e));case 3:return b.a?
b.a(c,a.a?a.a(e,h):a.call(null,e,h)):b.call(null,c,a.a?a.a(e,h):a.call(null,e,h))}throw Error("Invalid arity: "+arguments.length);}}()})}function b(a){return function(b){return c.a(a,b)}}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);};c.b=b;c.a=a;return c}(),Lg=function(){function a(a,b){return Jg(b,function(b){return function(){var c=null;return c=function(c,e,h){switch(arguments.length){case 0:return b.m?
b.m():b.call(null);case 2:return p(a.b?a.b(e):a.call(null,e))?b.a?b.a(c,e):b.call(null,c,e):c;case 3:return p(a.a?a.a(e,h):a.call(null,e,h))?b.c?b.c(c,e,h):b.call(null,c,e,h):c}throw Error("Invalid arity: "+arguments.length);}}()})}function b(a){return function(b){return c.a(a,b)}}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);};c.b=b;c.a=a;return c}(),Mg=function(){function a(a){return Jg(a,
function(a){return function(){var b=null;return b=function(b,d){switch(arguments.length){case 0:return a.m?a.m():a.call(null);case 2:return wc(d)?c.b(d).K(null,a,b):a.a?a.a(b,d):a.call(null,b,d)}throw Error("Invalid arity: "+arguments.length);}}()})}function b(){return function(a){return c.b(a)}}var c=null,c=function(c){switch(arguments.length){case 0:return b.call(this);case 1:return a.call(this,c)}throw Error("Invalid arity: "+arguments.length);};c.m=b;c.b=a;return c}(),Ng=function(){function a(a,
b){return Lg.a(xd(a),b)}function b(a){return function(b){return c.a(a,b)}}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);};c.b=b;c.a=a;return c}(),Og=function(){function a(a,b){return Hg(b,function(b){return function(){var c=null;return c=function(c,e,h){switch(arguments.length){case 0:return b.m?b.m():b.call(null);case 2:return p(a.b?a.b(e):a.call(null,e))?b.a?b.a(c,e):b.call(null,c,e):
new Vb(c);case 3:return p(a.a?a.a(e,h):a.call(null,e,h))?b.c?b.c(c,e,h):b.call(null,c,e,h):new Vb(c)}throw Error("Invalid arity: "+arguments.length);}}()})}function b(a){return function(b){return c.a(a,b)}}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);};c.b=b;c.a=a;return c}(),Pg=function(){function a(a,b){return Hg(b,function(b){return function(a){return function(){var c=null;return c=
function(c,d,e){switch(arguments.length){case 0:return b.m?b.m():b.call(null);case 2:return hg.a(a,Nc),0>bb(a)?new Vb(c):b.a?b.a(c,d):b.call(null,c,d);case 3:return hg.a(a,Nc),0>bb(a)?new Vb(c):b.c?b.c(c,d,e):b.call(null,c,d,e)}throw Error("Invalid arity: "+arguments.length);}}()}(fg.b(a))})}function b(a){return function(b){return c.a(a,b)}}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);
};c.b=b;c.a=a;return c}(),Qg=function(){function a(a,b){return Hg(b,function(b){return function(a){return function(){var c=null;return c=function(c,d,e){switch(arguments.length){case 0:return b.m?b.m():b.call(null);case 2:return hg.a(a,Nc),0>bb(a)?b.a?b.a(c,d):b.call(null,c,d):c;case 3:return hg.a(a,Nc),0>bb(a)?b.c?b.c(c,d,e):b.call(null,c,d,e):c}throw Error("Invalid arity: "+arguments.length);}}()}(fg.b(a))})}function b(a){return function(b){return c.a(a,b)}}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,
c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);};c.b=b;c.a=a;return c}(),Sg=function Rg(b,c,d,e){if(sc(b))return d.m?d.m():d.call(null);if(N(b)<=c)return Eg.c(e,d.m?d.m():d.call(null),b);if(t){var g=Oc(N(b)),h=qe.c(b,0,g);b=qe.c(b,g,N(b));return Dg(function(b,c,e,g){return function(){var b=g(c),h;h=g(e);return d.a?d.a(b.m?b.m():b.call(null),h.m?h.m():h.call(null)):d.call(null,b.m?b.m():b.call(null),h.m?h.m():h.call(null))}}(g,h,b,function(b,g,h){return function(r){return function(){return function(){return Rg(r,
c,d,e)}}(b,g,h)}}(g,h,b)))}return null};X.prototype.Db=function(a,b,c,d){return Sg(this,b,c,d)};Fg.object=function(a,b,c,d){return Eg.c(d,c.m?c.m():c.call(null),a)};Fg["null"]=function(a,b,c){return c.m?c.m():c.call(null)};function Tg(a,b){var c=R.c(Lf,a,b);return J(c,Ld(function(a){return function(b){return a===b}}(c),b))}
var Ug=function(){function a(a,b){return N(a)<N(b)?x.c(fc,b,a):x.c(fc,a,b)}var b=null,c=function(){function a(c,d,k){var l=null;2<arguments.length&&(l=H(Array.prototype.slice.call(arguments,2),0));return b.call(this,c,d,l)}function b(a,c,d){a=Tg(N,fc.e(d,c,H([a],0)));return x.c(Od,D(a),E(a))}a.i=2;a.f=function(a){var c=D(a);a=G(a);var d=D(a);a=E(a);return b(c,d,a)};a.e=b;return a}(),b=function(b,e,g){switch(arguments.length){case 0:return Ff;case 1:return b;case 2:return a.call(this,b,e);default:return c.e(b,
e,H(arguments,2))}throw Error("Invalid arity: "+arguments.length);};b.i=2;b.f=c.f;b.m=function(){return Ff};b.b=function(a){return a};b.a=a;b.e=c.e;return b}(),Vg=function(){function a(a,b){for(;;)if(N(b)<N(a)){var c=a;a=b;b=c}else return x.c(function(a,b){return function(a,c){return Fc(b,c)?a:pc.a(a,c)}}(a,b),a,a)}var b=null,c=function(){function a(b,d,k){var l=null;2<arguments.length&&(l=H(Array.prototype.slice.call(arguments,2),0));return c.call(this,b,d,l)}function c(a,d,e){a=Tg(function(a){return-N(a)},
fc.e(e,d,H([a],0)));return x.c(b,D(a),E(a))}a.i=2;a.f=function(a){var b=D(a);a=G(a);var d=D(a);a=E(a);return c(b,d,a)};a.e=c;return a}(),b=function(b,e,g){switch(arguments.length){case 1:return b;case 2:return a.call(this,b,e);default:return c.e(b,e,H(arguments,2))}throw Error("Invalid arity: "+arguments.length);};b.i=2;b.f=c.f;b.b=function(a){return a};b.a=a;b.e=c.e;return b}(),Wg=function(){function a(a,b){return N(a)<N(b)?x.c(function(a,c){return Fc(b,c)?pc.a(a,c):a},a,a):x.c(pc,a,b)}var b=null,
c=function(){function a(b,d,k){var l=null;2<arguments.length&&(l=H(Array.prototype.slice.call(arguments,2),0));return c.call(this,b,d,l)}function c(a,d,e){return x.c(b,a,fc.a(e,d))}a.i=2;a.f=function(a){var b=D(a);a=G(a);var d=D(a);a=E(a);return c(b,d,a)};a.e=c;return a}(),b=function(b,e,g){switch(arguments.length){case 1:return b;case 2:return a.call(this,b,e);default:return c.e(b,e,H(arguments,2))}throw Error("Invalid arity: "+arguments.length);};b.i=2;b.f=c.f;b.b=function(a){return a};b.a=a;b.e=
c.e;return b}();n("mori.apply",R);n("mori.count",N);n("mori.empty",gc);n("mori.first",D);n("mori.rest",E);n("mori.seq",C);n("mori.conj",fc);n("mori.cons",J);n("mori.find",function(a,b){return null!=a&&vc(a)&&Fc(a,b)?new X(null,2,5,Y,[b,P.a(a,b)],null):null});n("mori.nth",O);n("mori.last",ec);n("mori.assoc",Q);n("mori.dissoc",jc);n("mori.get_in",Qd);n("mori.update_in",Rd);n("mori.assoc_in",function Xg(b,c,d){var e=O.c(c,0,null);return(c=Qc(c))?Q.c(b,e,Xg(P.a(b,e),c,d)):Q.c(b,e,d)});n("mori.fnil",Ad);
n("mori.disj",pc);n("mori.pop",oc);n("mori.peek",nc);n("mori.hash",A);n("mori.get",P);n("mori.has_key",Fc);n("mori.is_empty",sc);n("mori.reverse",Yc);n("mori.take",Cd);n("mori.drop",Dd);n("mori.partition",Pd);n("mori.partition_by",function Yg(b,c){return new V(null,function(){var d=C(c);if(d){var e=D(d),g=b.b?b.b(e):b.call(null,e),e=J(e,Nf(function(c,d){return function(c){return Pb.a(d,b.b?b.b(c):b.call(null,c))}}(e,g,d,d),G(d)));return J(e,Yg(b,C(Dd(N(e),d))))}return null},null,null)});
n("mori.iterate",function Zg(b,c){return J(c,new V(null,function(){return Zg(b,b.b?b.b(c):b.call(null,c))},null,null))});n("mori.into",Od);n("mori.merge",Cf);n("mori.subvec",qe);n("mori.take_while",Nf);n("mori.drop_while",function(a,b){return new V(null,function(c){return function(){return c(a,b)}}(function(a,b){for(;;){var e=C(b),g;g=(g=e)?a.b?a.b(D(e)):a.call(null,D(e)):g;if(p(g))g=a,e=E(e),a=g,b=e;else return e}}),null,null)});
n("mori.group_by",function(a,b){return x.c(function(b,d){var e=a.b?a.b(d):a.call(null,d);return Q.c(b,e,fc.a(P.c(b,e,le),d))},Ge,b)});n("mori.interpose",function(a,b){return Dd(1,Gd.a(Ed.b(a),b))});n("mori.interleave",Gd);n("mori.concat",md);function Nd(a){return a instanceof Array||wc(a)}n("mori.flatten",function(a){return Kd(function(a){return!Nd(a)},E(Md(a)))});n("mori.keys",Af);n("mori.vals",function(a){return(a=C(a))?new Bf(a,null):null});n("mori.prim_seq",dc);n("mori.map",W);
n("mori.mapcat",Id);n("mori.reduce",x);n("mori.reduce_kv",function(a,b,c){return null!=c?jb(c,a,b):b});n("mori.filter",Kd);n("mori.remove",Ld);n("mori.some",vd);n("mori.every",ud);n("mori.equals",Pb);n("mori.range",Rf);n("mori.repeat",Ed);n("mori.repeatedly",Fd);n("mori.sort",Jc);n("mori.sort_by",Kc);n("mori.into_array",za);n("mori.subseq",Pf);n("mori.rmap",Kg);n("mori.rfilter",Lg);n("mori.rremove",Ng);n("mori.rtake",Pg);n("mori.rtake_while",Og);n("mori.rdrop",Qg);n("mori.rflatten",Mg);
n("mori.list",Zc);n("mori.vector",oe);n("mori.array_map",wf);n("mori.hash_map",vf);n("mori.set",function(a){a=C(a);if(null==a)return Ff;if(a instanceof Ub&&0===a.o){a=a.d;a:{for(var b=0,c=Ab(Ff);;)if(b<a.length)var d=b+1,c=c.qa(null,a[b]),b=d;else{a=c;break a}a=void 0}return a.ya(null)}if(t)for(d=Ab(Ff);;)if(null!=a)b=a.S(null),d=d.qa(null,a.O(null)),a=b;else return d.ya(null);else return null});n("mori.sorted_set",If);n("mori.sorted_set_by",Jf);n("mori.sorted_map",xf);n("mori.sorted_map_by",yf);
n("mori.keyword",cd);n("mori.zipmap",function(a,b){for(var c=Ab(Ge),d=C(a),e=C(b);;)if(d&&e)c=qd.c(c,D(d),D(e)),d=G(d),e=G(e);else return Cb(c)});n("mori.is_list",function(a){return a?a.h&33554432||a.uc?!0:a.h?!1:s(pb,a):s(pb,a)});n("mori.is_seq",Dc);n("mori.is_vector",yc);n("mori.is_map",xc);n("mori.is_set",uc);n("mori.is_keyword",function(a){return a instanceof U});n("mori.is_collection",tc);n("mori.is_sequential",wc);n("mori.is_associative",vc);n("mori.is_counted",Zb);n("mori.is_indexed",$b);
n("mori.is_reduceable",function(a){return a?a.h&524288||a.Lb?!0:a.h?!1:s(gb,a):s(gb,a)});n("mori.is_seqable",function(a){return a?a.h&8388608||a.ac?!0:a.h?!1:s(mb,a):s(mb,a)});n("mori.is_reversible",Xc);n("mori.union",Ug);n("mori.intersection",Vg);n("mori.difference",Wg);n("mori.is_subset",function(a,b){return N(a)<=N(b)&&ud(function(a){return Fc(b,a)},a)});n("mori.is_superset",function(a,b){return N(a)>=N(b)&&ud(function(b){return Fc(a,b)},b)});n("mori.partial",zd);n("mori.comp",yd);
n("mori.pipeline",function(){function a(a){var d=null;0<arguments.length&&(d=H(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){return x.a?x.a(function(a,b){return b.b?b.b(a):b.call(null,a)},a):x.call(null,function(a,b){return b.b?b.b(a):b.call(null,a)},a)}a.i=0;a.f=function(a){a=C(a);return b(a)};a.e=b;return a}());
n("mori.curry",function(){function a(a,d){var e=null;1<arguments.length&&(e=H(Array.prototype.slice.call(arguments,1),0));return b.call(this,a,e)}function b(a,b){return function(e){return R.a(a,J.a?J.a(e,b):J.call(null,e,b))}}a.i=1;a.f=function(a){var d=D(a);a=E(a);return b(d,a)};a.e=b;return a}());
n("mori.juxt",function(){function a(a){var d=null;0<arguments.length&&(d=H(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){return function(){function b(a){var c=null;0<arguments.length&&(c=H(Array.prototype.slice.call(arguments,0),0));return e.call(this,c)}function e(b){return za.b?za.b(W.a?W.a(function(a){return R.a(a,b)},a):W.call(null,function(a){return R.a(a,b)},a)):za.call(null,W.a?W.a(function(a){return R.a(a,b)},a):W.call(null,function(a){return R.a(a,b)},a))}
b.i=0;b.f=function(a){a=C(a);return e(a)};b.e=e;return b}()}a.i=0;a.f=function(a){a=C(a);return b(a)};a.e=b;return a}());
n("mori.knit",function(){function a(a){var d=null;0<arguments.length&&(d=H(Array.prototype.slice.call(arguments,0),0));return b.call(this,d)}function b(a){return function(b){return za.b?za.b(W.c?W.c(function(a,b){return a.b?a.b(b):a.call(null,b)},a,b):W.call(null,function(a,b){return a.b?a.b(b):a.call(null,b)},a,b)):za.call(null,W.c?W.c(function(a,b){return a.b?a.b(b):a.call(null,b)},a,b):W.call(null,function(a,b){return a.b?a.b(b):a.call(null,b)},a,b))}}a.i=0;a.f=function(a){a=C(a);return b(a)};
a.e=b;return a}());n("mori.sum",function(a,b){return a+b});n("mori.inc",function(a){return a+1});n("mori.dec",function(a){return a-1});n("mori.is_even",function(a){return 0===(a%2+2)%2});n("mori.is_odd",function(a){return 1===(a%2+2)%2});n("mori.each",function(a,b){for(var c=C(a),d=null,e=0,g=0;;)if(g<e){var h=d.P(null,g);b.b?b.b(h):b.call(null,h);g+=1}else if(c=C(c))d=c,zc(d)?(c=Jb(d),e=Kb(d),d=c,h=N(c),c=e,e=h):(h=D(d),b.b?b.b(h):b.call(null,h),c=G(d),d=null,e=0),g=0;else return null});
n("mori.identity",wd);n("mori.constantly",function(a){return function(){function b(b){0<arguments.length&&H(Array.prototype.slice.call(arguments,0),0);return a}b.i=0;b.f=function(b){C(b);return a};b.e=function(){return a};return b}()});n("mori.clj_to_js",lg);
n("mori.js_to_clj",function(){function a(a,b){return qg.e(a,H([pg,b],0))}function b(a){return qg.b(a)}var c=null,c=function(c,e){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,e)}throw Error("Invalid arity: "+arguments.length);};c.b=b;c.a=a;return c}());
n("mori.proxy",function(a){if("undefined"!==typeof Proxy)return Proxy.create(function(){return{has:function(b){return Fc(a,b)},hasOwn:function(b){return Fc(a,b)},get:function(b,c){var d=P.c?P.c(a,c,zg):P.call(null,a,c,zg);return ad(d,zg)?Zb(a)&&"length"===c?N.b?N.b(a):N.call(null,a):null:t?d:null},set:function(){return null},enumerate:function(){return za.b?za.b(Af.b?Af.b(a):Af.call(null,a)):za.call(null,Af.b?Af.b(a):Af.call(null,a))},keys:function(){return xc(a)?za.b?za.b(Af.b?Af.b(a):Af.call(null,
a)):za.call(null,Af.b?Af.b(a):Af.call(null,a)):yc(a)?za.b?za.b(Rf.b?Rf.b(N.b?N.b(a):N.call(null,a)):Rf.call(null,N.b?N.b(a):N.call(null,a))):za.call(null,Rf.b?Rf.b(N.b?N.b(a):N.call(null,a)):Rf.call(null,N.b?N.b(a):N.call(null,a))):null}}}());throw Error("ES6 Proxy not supported!");});V.prototype.inspect=function(){return this.toString()};Ub.prototype.inspect=function(){return this.toString()};bc.prototype.inspect=function(){return this.toString()};df.prototype.inspect=function(){return this.toString()};
Ye.prototype.inspect=function(){return this.toString()};Ze.prototype.inspect=function(){return this.toString()};Vc.prototype.inspect=function(){return this.toString()};$c.prototype.inspect=function(){return this.toString()};Wc.prototype.inspect=function(){return this.toString()};X.prototype.inspect=function(){return this.toString()};hd.prototype.inspect=function(){return this.toString()};pe.prototype.inspect=function(){return this.toString()};re.prototype.inspect=function(){return this.toString()};
$.prototype.inspect=function(){return this.toString()};Z.prototype.inspect=function(){return this.toString()};ma.prototype.inspect=function(){return this.toString()};$e.prototype.inspect=function(){return this.toString()};sf.prototype.inspect=function(){return this.toString()};Df.prototype.inspect=function(){return this.toString()};Gf.prototype.inspect=function(){return this.toString()};Qf.prototype.inspect=function(){return this.toString()};function $g(a,b,c,d){return M(new X(null,2,5,Y,[d,null],null),new ma(null,3,[yg,c,Ag,b,ug,a],null))}function ah(a){return a.b?a.b(0):a.call(null,0)}function bh(a){return ug.b(mc(a)).call(null,ah(a))}function ch(a){if(p(bh(a)))return Ag.b(mc(a)).call(null,ah(a));throw"called children on a leaf node";}function dh(a,b,c){return yg.b(mc(a)).call(null,b,c)}
function eh(a){if(p(bh(a))){var b=O.c(a,0,null),c=O.c(a,1,null),d=ch(a),e=O.c(d,0,null),g=Qc(d);return p(d)?M(new X(null,2,5,Y,[e,new ma(null,4,[xg,le,sg,p(c)?fc.a(sg.b(c),b):new X(null,1,5,Y,[b],null),tg,c,rg,g],null)],null),mc(a)):null}return null}
function fh(a){var b=O.c(a,0,null),c=O.c(a,1,null),d=Dc(c)?R.a(vf,c):c,c=P.a(d,xg),e=P.a(d,tg),g=P.a(d,sg),h=P.a(d,rg),d=P.a(d,vg);return p(g)?(g=nc(g),M(p(d)?new X(null,2,5,Y,[dh(a,g,md.a(c,J(b,h))),p(e)?Q.c(e,vg,!0):e],null):new X(null,2,5,Y,[g,e],null),mc(a))):null}function gh(a){var b=O.c(a,0,null),c=O.c(a,1,null),c=Dc(c)?R.a(vf,c):c,d=P.a(c,xg),e=P.a(c,rg),g=O.c(e,0,null),h=Qc(e);return p(p(c)?e:c)?M(new X(null,2,5,Y,[g,Q.e(c,xg,fc.a(d,b),H([rg,h],0))],null),mc(a)):null}
function hh(a){var b=O.c(a,0,null),c=O.c(a,1,null),c=Dc(c)?R.a(vf,c):c,d=P.a(c,xg),e=P.a(c,rg);return p(p(c)?e:c)?M(new X(null,2,5,Y,[ec(e),Q.e(c,xg,R.n(fc,d,b,Kf(e)),H([rg,null],0))],null),mc(a)):a}function ih(a){var b=O.c(a,0,null),c=O.c(a,1,null),c=Dc(c)?R.a(vf,c):c,d=P.a(c,xg),e=P.a(c,rg);return p(p(c)?C(d):c)?M(new X(null,2,5,Y,[nc(d),Q.e(c,xg,oc(d),H([rg,J(b,e)],0))],null),mc(a)):null}
function jh(a,b){O.c(a,0,null);var c=O.c(a,1,null);return M(new X(null,2,5,Y,[b,Q.c(c,vg,!0)],null),mc(a))}var kh=function(){function a(a,d,e){var g=null;2<arguments.length&&(g=H(Array.prototype.slice.call(arguments,2),0));return b.call(this,a,d,g)}function b(a,b,e){return jh(a,R.c(b,ah(a),e))}a.i=2;a.f=function(a){var d=D(a);a=G(a);var e=D(a);a=E(a);return b(d,e,a)};a.e=b;return a}();n("mori.zip.zipper",$g);n("mori.zip.seq_zip",function(a){return $g(Dc,wd,function(a,c){return M(c,mc(a))},a)});n("mori.zip.vector_zip",function(a){return $g(yc,C,function(a,c){return M(ne(c),mc(a))},a)});n("mori.zip.node",ah);n("mori.zip.is_branch",{}.nc);n("mori.zip.children",ch);n("mori.zip.make_node",dh);n("mori.zip.path",function(a){return sg.b(a.b?a.b(1):a.call(null,1))});n("mori.zip.lefts",function(a){return C(xg.b(a.b?a.b(1):a.call(null,1)))});
n("mori.zip.rights",function(a){return rg.b(a.b?a.b(1):a.call(null,1))});n("mori.zip.down",eh);n("mori.zip.up",fh);n("mori.zip.root",function(a){for(;;){if(Pb.a(wg,a.b?a.b(1):a.call(null,1)))return ah(a);var b=fh(a);if(p(b))a=b;else return ah(a)}});n("mori.zip.right",gh);n("mori.zip.rightmost",hh);n("mori.zip.left",ih);
n("mori.zip.leftmost",function(a){var b=O.c(a,0,null),c=O.c(a,1,null),c=Dc(c)?R.a(vf,c):c,d=P.a(c,xg),e=P.a(c,rg);return p(p(c)?C(d):c)?M(new X(null,2,5,Y,[D(d),Q.e(c,xg,le,H([rg,md.e(E(d),new X(null,1,5,Y,[b],null),H([e],0))],0))],null),mc(a)):a});n("mori.zip.insert_left",function(a,b){var c=O.c(a,0,null),d=O.c(a,1,null),d=Dc(d)?R.a(vf,d):d,e=P.a(d,xg);if(null==d)throw"Insert at top";return M(new X(null,2,5,Y,[c,Q.e(d,xg,fc.a(e,b),H([vg,!0],0))],null),mc(a))});
n("mori.zip.insert_right",function(a,b){var c=O.c(a,0,null),d=O.c(a,1,null),d=Dc(d)?R.a(vf,d):d,e=P.a(d,rg);if(null==d)throw"Insert at top";return M(new X(null,2,5,Y,[c,Q.e(d,rg,J(b,e),H([vg,!0],0))],null),mc(a))});n("mori.zip.replace",jh);n("mori.zip.edit",kh);n("mori.zip.insert_child",function(a,b){return jh(a,dh(a,ah(a),J(b,ch(a))))});n("mori.zip.append_child",function(a,b){return jh(a,dh(a,ah(a),md.a(ch(a),new X(null,1,5,Y,[b],null))))});
n("mori.zip.next",function(a){if(Pb.a(wg,a.b?a.b(1):a.call(null,1)))return a;var b;b=bh(a);b=p(b)?eh(a):b;if(p(b))return b;b=gh(a);if(p(b))return b;for(;;)if(p(fh(a))){b=gh(fh(a));if(p(b))return b;a=fh(a)}else return new X(null,2,5,Y,[ah(a),wg],null)});n("mori.zip.prev",function(a){var b=ih(a);if(p(b))for(a=b;;)if(b=bh(a),b=p(b)?eh(a):b,p(b))a=hh(b);else return a;else return fh(a)});n("mori.zip.is_end",function(a){return Pb.a(wg,a.b?a.b(1):a.call(null,1))});
n("mori.zip.remove",function(a){O.c(a,0,null);var b=O.c(a,1,null),b=Dc(b)?R.a(vf,b):b,c=P.a(b,xg),d=P.a(b,tg),e=P.a(b,sg),g=P.a(b,rg);if(null==b)throw"Remove at top";if(0<N(c))for(a=M(new X(null,2,5,Y,[nc(c),Q.e(b,xg,oc(c),H([vg,!0],0))],null),mc(a));;)if(b=bh(a),b=p(b)?eh(a):b,p(b))a=hh(b);else return a;else return M(new X(null,2,5,Y,[dh(a,nc(e),g),p(d)?Q.c(d,vg,!0):d],null),mc(a))});n("mori.mutable.thaw",function(a){return Ab(a)});n("mori.mutable.freeze",od);n("mori.mutable.conj1",function(a,b){return a.qa(null,b)});n("mori.mutable.conj",pd);n("mori.mutable.assoc",qd);n("mori.mutable.dissoc",rd);n("mori.mutable.pop",function(a){return Gb(a)});n("mori.mutable.disj",sd);;return this.mori;}.call({});});

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
(function() {
  var assertions, core, m, _, _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8,
    __slice = [].slice;

  core = {
    '_$PLUS_': function() {
      var nums;
      nums = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      assertions.arity(0, Infinity, arguments.length);
      assertions.numbers(nums);
      return _.reduce(nums, (function(sum, num) {
        return sum + num;
      }), 0);
    },
    '_$_': function() {
      var nums;
      nums = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      assertions.arity(1, Infinity, arguments.length);
      assertions.numbers(nums);
      if (nums.length === 1) {
        nums.unshift(0);
      }
      return _.reduce(nums.slice(1), (function(diff, num) {
        return diff - num;
      }), nums[0]);
    },
    '_$STAR_': function() {
      var nums;
      nums = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      assertions.arity(0, Infinity, arguments.length);
      assertions.numbers(nums);
      return _.reduce(nums, (function(prod, num) {
        return prod * num;
      }), 1);
    },
    '_$SLASH_': function() {
      var nums;
      nums = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      assertions.arity(1, Infinity, arguments.length);
      assertions.numbers(nums);
      if (nums.length === 1) {
        nums.unshift(1);
      }
      return _.reduce(nums.slice(1), (function(quo, num) {
        return quo / num;
      }), nums[0]);
    },
    'inc': function(num) {
      assertions.arity(1, arguments.length);
      assertions.numbers(num);
      return ++num;
    },
    'dec': function(num) {
      assertions.arity(1, arguments.length);
      assertions.numbers(num);
      return --num;
    },
    'max': function() {
      var nums;
      nums = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      assertions.arity(1, Infinity, arguments.length);
      assertions.numbers(nums);
      return _.max(nums);
    },
    'min': function() {
      var nums;
      nums = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      assertions.arity(1, Infinity, arguments.length);
      assertions.numbers(nums);
      return _.min(nums);
    },
    'quot': function(num, div) {
      var sign;
      assertions.arity(2, arguments.length);
      assertions.numbers(arguments);
      sign = num > 0 && div > 0 || num < 0 && div < 0 ? 1 : -1;
      return sign * Math.floor(Math.abs(num / div));
    },
    'rem': function(num, div) {
      assertions.arity(2, arguments.length);
      assertions.numbers(arguments);
      return num % div;
    },
    'mod': function(num, div) {
      var rem;
      assertions.arity(2, arguments.length);
      assertions.numbers(arguments);
      rem = num % div;
      if (rem === 0 || (num > 0 && div > 0 || num < 0 && div < 0)) {
        return rem;
      } else {
        return rem + div;
      }
    },
    'rand': function() {
      var n;
      assertions.arity(0, 1, arguments.length);
      n = 1;
      if (arguments.length === 1) {
        assertions.numbers(arguments[0]);
        n = arguments[0];
      }
      return Math.random() * n;
    },
    'rand_$_int': function(n) {
      var r;
      assertions.arity(1, arguments.length);
      r = core.rand(n);
      if (r >= 0) {
        return Math.floor(r);
      } else {
        return Math.ceil(r);
      }
    },
    '_$EQ_': function() {
      var args;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      assertions.arity(1, Infinity, arguments.length);
      args = _.uniq(args);
      if (args.length === 1) {
        return true;
      }
      return m.equals.apply(null, args);
    },
    'not_$EQ_': function() {
      var args;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      assertions.arity(1, Infinity, arguments.length);
      return core.not(core['_$EQ_'].apply(null, args));
    },
    '_$EQ__$EQ_': function() {
      var args;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      assertions.arity(1, Infinity, arguments.length);
      if (args.length === 1) {
        return true;
      }
      assertions.numbers(args);
      return core['_$EQ_'].apply(null, args);
    },
    '_$LT_': function() {
      var args;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      assertions.arity(1, Infinity, arguments.length);
      if (args.length === 1) {
        return true;
      }
      assertions.numbers(args);
      return _.reduce(args, (function(result, val, idx) {
        return result && (idx + 1 === args.length || val < args[idx + 1]);
      }), true);
    },
    '_$GT_': function() {
      var args;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      assertions.arity(1, Infinity, arguments.length);
      if (args.length === 1) {
        return true;
      }
      assertions.numbers(args);
      return _.reduce(args, (function(result, val, idx) {
        return result && (idx + 1 === args.length || val > args[idx + 1]);
      }), true);
    },
    '_$LT__$EQ_': function() {
      var args;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      assertions.arity(1, Infinity, arguments.length);
      if (args.length === 1) {
        return true;
      }
      assertions.numbers(args);
      return _.reduce(args, (function(result, val, idx) {
        return result && (idx + 1 === args.length || val <= args[idx + 1]);
      }), true);
    },
    '_$GT__$EQ_': function() {
      var args;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      assertions.arity(1, Infinity, arguments.length);
      if (args.length === 1) {
        return true;
      }
      assertions.numbers(args);
      return _.reduce(args, (function(result, val, idx) {
        return result && (idx + 1 === args.length || val >= args[idx + 1]);
      }), true);
    },
    'identical_$QMARK_': function(x, y) {
      assertions.arity(2, arguments.length);
      return x === y;
    },
    'true_$QMARK_': function(arg) {
      assertions.arity(1, arguments.length);
      return arg === true;
    },
    'false_$QMARK_': function(arg) {
      assertions.arity(1, arguments.length);
      return arg === false;
    },
    'nil_$QMARK_': function(arg) {
      assertions.arity(1, arguments.length);
      return arg === null;
    },
    'some_$QMARK_': function(arg) {
      assertions.arity(1, arguments.length);
      return arg !== null;
    },
    'number_$QMARK_': function(x) {
      assertions.arity(1, arguments.length);
      return typeof x === 'number';
    },
    'integer_$QMARK_': function(x) {
      assertions.arity(1, arguments.length);
      return typeof x === 'number' && x % 1 === 0;
    },
    'float_$QMARK_': function(x) {
      assertions.arity(1, arguments.length);
      return typeof x === 'number' && x % 1 !== 0;
    },
    'zero_$QMARK_': function(x) {
      assertions.arity(1, arguments.length);
      return core['_$EQ__$EQ_'](x, 0);
    },
    'pos_$QMARK_': function(x) {
      assertions.arity(1, arguments.length);
      return core['_$GT_'](x, 0);
    },
    'neg_$QMARK_': function(x) {
      assertions.arity(1, arguments.length);
      return core['_$LT_'](x, 0);
    },
    'even_$QMARK_': function(x) {
      assertions.arity(1, arguments.length);
      assertions.integers(x);
      return core['zero_$QMARK_'](core['mod'](x, 2));
    },
    'odd_$QMARK_': function(x) {
      return core['not'](core['even_$QMARK_'](x));
    },
    'contains_$QMARK_': function(coll, key) {
      assertions.arity(2, arguments.length);
      assertions.associativeOrSet(coll);
      return m.has_key(coll, key);
    },
    'empty_$QMARK_': function(coll) {
      assertions.arity(1, arguments.length);
      return m.is_empty(coll);
    },
    'keyword_$QMARK_': function(x) {
      assertions.arity(1, arguments.length);
      return m.is_keyword(x);
    },
    'list_$QMARK_': function(x) {
      assertions.arity(1, arguments.length);
      return m.is_list(x);
    },
    'seq_$QMARK_': function(x) {
      assertions.arity(1, arguments.length);
      return m.is_seq(x);
    },
    'vector_$QMARK_': function(x) {
      assertions.arity(1, arguments.length);
      return m.is_vector(x);
    },
    'map_$QMARK_': function(x) {
      assertions.arity(1, arguments.length);
      return m.is_map(x);
    },
    'set_$QMARK_': function(x) {
      assertions.arity(1, arguments.length);
      return m.is_set(x);
    },
    'coll_$QMARK_': function(x) {
      assertions.arity(1, arguments.length);
      return m.is_collection(x);
    },
    'sequential_$QMARK_': function(coll) {
      assertions.arity(1, arguments.length);
      return m.is_sequential(coll);
    },
    'associative_$QMARK_': function(coll) {
      assertions.arity(1, arguments.length);
      return m.is_associative(coll);
    },
    'counted_$QMARK_': function(coll) {
      assertions.arity(1, arguments.length);
      return m.is_counted(coll);
    },
    'seqable_$QMARK_': function(coll) {
      assertions.arity(1, arguments.length);
      return m.is_seqable(coll);
    },
    'reversible_$QMARK_': function(coll) {
      assertions.arity(1, arguments.length);
      return m.is_reversible(coll);
    },
    'boolean': function(arg) {
      assertions.arity(1, arguments.length);
      return arg !== false && arg !== null;
    },
    'not': function(arg) {
      assertions.arity(1, arguments.length);
      return !core.boolean(arg);
    },
    'str': function() {
      var args;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      assertions.arity(0, Infinity, arguments.length);
      return _.reduce(args, (function(str, arg) {
        return str += core['nil_$QMARK_'](arg) ? '' : arg.toString();
      }), '');
    },
    'println': function() {
      var args;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      assertions.arity(0, Infinity, arguments.length);
      return console.log.apply(null, args);
    },
    'keyword': function(name) {
      assertions.arity(1, arguments.length);
      return m.keyword(name);
    },
    'list': function() {
      var items;
      items = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      assertions.arity(0, Infinity, arguments.length);
      return m.list.apply(null, items);
    },
    'vector': function() {
      var items;
      items = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      assertions.arity(0, Infinity, arguments.length);
      return m.vector.apply(null, items);
    },
    'hash_$_map': function() {
      var items;
      items = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      assertions.arity_custom(arguments, function(args) {
        if (args.length % 2 !== 0) {
          return "Expected even number of args, got " + args.length;
        }
      });
      return m.hash_map.apply(null, items);
    },
    'hash_$_set': function() {
      var items;
      items = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      assertions.arity(0, Infinity, arguments.length);
      return m.set(items);
    },
    'count': function(coll) {
      assertions.arity(1, arguments.length);
      assertions.seqable(coll);
      return m.count(coll);
    },
    'empty': function(coll) {
      var error;
      assertions.arity(1, arguments.length);
      try {
        return m.empty(coll);
      } catch (_error) {
        error = _error;
        return null;
      }
    },
    'not_$_empty': function(coll) {
      assertions.arity(1, arguments.length);
      if (core.count(coll) === 0) {
        return null;
      } else {
        return coll;
      }
    },
    'get': function(coll, key, notFound) {
      if (notFound == null) {
        notFound = null;
      }
      assertions.arity(2, 3, arguments.length);
      return m.get(coll, key, notFound);
    },
    'seq': function(coll) {
      assertions.arity(1, arguments.length);
      assertions.seqable(coll);
      return m.seq(coll);
    },
    'first': function(coll) {
      assertions.arity(1, arguments.length);
      return m.first(coll);
    },
    'rest': function(coll) {
      assertions.arity(1, arguments.length);
      return m.rest(coll);
    },
    'next': function(coll) {
      var rest;
      assertions.arity(1, arguments.length);
      rest = core.rest(coll);
      if (core['empty_$QMARK_'](rest)) {
        return null;
      } else {
        return rest;
      }
    },
    'last': function(coll) {
      assertions.arity(1, arguments.length);
      return m.last(coll);
    },
    'nth': function(coll, index, notFound) {
      var e, error;
      assertions.arity(2, 3, arguments.length);
      assertions.sequential(coll);
      assertions.numbers(index);
      if (coll === null) {
        return (notFound !== void 0 ? notFound : null);
      }
      if (_.isString(coll) && index >= coll.length && notFound === void 0) {
        error = new Error("Index out of bounds");
        error.name = 'IndexOutOfBoundsError';
        throw error;
      }
      try {
        if (notFound !== void 0) {
          return m.nth(coll, index, notFound);
        } else {
          return m.nth(coll, index);
        }
      } catch (_error) {
        e = _error;
        if (/^No item/.test(e.message) || /^Index out of bounds/.test(e.message)) {
          error = new Error("Index out of bounds");
          error.name = 'IndexOutOfBoundsError';
          throw error;
        } else {
          throw e;
        }
      }
    },
    'peek': function(coll) {
      assertions.arity(1, arguments.length);
      assertions.stack(coll);
      return m.peek(coll);
    },
    'pop': function(coll) {
      assertions.arity(1, arguments.length);
      assertions.stack(coll);
      return m.pop(coll);
    },
    'cons': function(x, seq) {
      assertions.arity(2, arguments.length);
      return m.cons(x, seq);
    },
    'conj': function() {
      var coll, xs;
      coll = arguments[0], xs = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      assertions.arity(2, Infinity, arguments.length);
      if (core['map_$QMARK_'](coll) && _.any(xs, function(x) {
        return core['vector_$QMARK_'](x) && core.count(x) !== 2;
      })) {
        throw new TypeError('vector args to conjoin to a map must be pairs');
      }
      return m.conj.apply(null, _.flatten([coll, xs]));
    },
    'disj': function() {
      var ks, set;
      set = arguments[0], ks = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      assertions.arity(1, Infinity, arguments.length);
      assertions.type_custom(function() {
        if (!core.set_$QMARK_(set)) {
          return "" + set + " is not a set";
        }
      });
      if (ks === void 0) {
        ks = [];
      }
      return core.apply(m.disj, set, ks);
    },
    'into': function(to, from) {
      assertions.arity(2, arguments.length);
      if (to === null && from === null) {
        return null;
      }
      return m.reduce(core.conj, to, from);
    },
    'concat': function() {
      var seqs;
      seqs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      assertions.arity(0, Infinity, arguments.length);
      assertions.seqable.apply(null, seqs);
      return m.concat.apply(null, seqs);
    },
    'flatten': function(coll) {
      assertions.arity(1, arguments.length);
      return m.flatten(coll);
    },
    'reverse': function(coll) {
      assertions.arity(1, arguments.length);
      assertions.seqable(coll);
      return m.reverse(coll);
    },
    'assoc': function() {
      var kvs, map;
      map = arguments[0], kvs = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      assertions.arity_custom(arguments, function(args) {
        if (args.length < 3 || args.length % 2 === 0) {
          return "Expected odd number of args (at least 3), got " + args.length;
        }
      });
      return m.assoc.apply(null, _.flatten([map, kvs]));
    },
    'dissoc': function() {
      var keys, map;
      map = arguments[0], keys = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      assertions.arity(1, Infinity, arguments.length);
      if (keys.length === 0) {
        return map;
      }
      return m.dissoc.apply(null, _.flatten([map, keys]));
    },
    'keys': function(map) {
      assertions.arity(1, arguments.length);
      assertions.map(map);
      return m.keys(map);
    },
    'vals': function(map) {
      assertions.arity(1, arguments.length);
      assertions.map(map);
      return m.vals(map);
    },
    'key': function(e) {
      assertions.arity(1, arguments.length);
      assertions.type_custom(function() {
        if (!(core.vector_$QMARK_(e) && core.count(e) === 2)) {
          return "" + e + " is not a valid map entry";
        }
      });
      return core.first(e);
    },
    'val': function(e) {
      assertions.arity(1, arguments.length);
      assertions.type_custom(function() {
        if (!(core.vector_$QMARK_(e) && core.count(e) === 2)) {
          return "" + e + " is not a valid map entry";
        }
      });
      return core.last(e);
    },
    'find': function(map, key) {
      assertions.arity(2, arguments.length);
      assertions.associative(map);
      return m.find(map, key);
    },
    'range': function() {
      var args;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      assertions.arity(0, 3, arguments.length);
      assertions.numbers(args);
      return m.range.apply(null, args);
    },
    'identity': function(x) {
      assertions.arity(1, arguments.length);
      return x;
    },
    'apply': function() {
      var args, f, i, last, lastSeq, rest, _i, _ref;
      f = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      assertions.arity(2, Infinity, arguments.length);
      last = args[args.length - 1];
      rest = args.slice(0, args.length - 1);
      assertions["function"](f);
      assertions.seqable(last);
      lastSeq = core.seq(last);
      for (i = _i = 0, _ref = core.count(lastSeq); 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
        rest.push(core.nth(lastSeq, i));
      }
      return f.apply(null, rest);
    },
    'map': function() {
      var colls, f;
      f = arguments[0], colls = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      assertions.arity(2, Infinity, arguments.length);
      assertions["function"](f);
      return m.map.apply(null, arguments);
    },
    'mapcat': function() {
      var colls, f;
      f = arguments[0], colls = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      assertions.arity(2, Infinity, arguments.length);
      assertions["function"](f);
      return m.mapcat.apply(null, arguments);
    },
    'filter': function(pred, coll) {
      assertions.arity(2, arguments.length);
      assertions["function"](pred);
      return m.filter(pred, coll);
    },
    'remove': function(pred, coll) {
      assertions.arity(2, arguments.length);
      assertions["function"](pred);
      return m.remove(pred, coll);
    },
    'reduce': function() {
      var args;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      assertions.arity(2, 3, arguments.length);
      assertions["function"](args[0]);
      return m.reduce.apply(null, args);
    },
    'reduce_$_kv': function(f, init, coll) {
      assertions.arity(3, arguments.length);
      assertions["function"](f);
      return m.reduce_kv(f, init, coll);
    },
    'take': function(n, coll) {
      assertions.arity(2, arguments.length);
      assertions.numbers(n);
      assertions.seqable(coll);
      return m.take(n, coll);
    },
    'drop': function(n, coll) {
      assertions.arity(2, arguments.length);
      assertions.numbers(n);
      assertions.seqable(coll);
      return m.drop(n, coll);
    },
    'some': function(pred, coll) {
      assertions.arity(2, arguments.length);
      assertions["function"](pred);
      assertions.seqable(coll);
      return m.some(pred, coll);
    },
    'every_$QMARK_': function(pred, coll) {
      assertions.arity(2, arguments.length);
      assertions["function"](pred);
      assertions.seqable(coll);
      return m.every(pred, coll);
    },
    'sort': function() {
      assertions.arity(1, 2, arguments.length);
      if (arguments.length === 1) {
        assertions.seqable(arguments[0]);
      } else {
        assertions["function"](arguments[0]);
        assertions.seqable(arguments[1]);
      }
      return m.sort.apply(null, arguments);
    },
    'sort_$_by': function() {
      assertions.arity(2, 3, arguments.length);
      if (arguments.length === 2) {
        assertions["function"](arguments[0]);
        assertions.seqable(arguments[1]);
      } else {
        assertions["function"](arguments[0], arguments[1]);
        assertions.seqable(arguments[2]);
      }
      return m.sort_by.apply(null, arguments);
    },
    'partition': function() {
      var coll, n, pad, step;
      assertions.arity(2, 4, arguments.length);
      switch (arguments.length) {
        case 2:
          n = arguments[0], coll = arguments[1];
          break;
        case 3:
          n = arguments[0], step = arguments[1], coll = arguments[2];
          assertions.numbers(step);
          break;
        case 4:
          n = arguments[0], step = arguments[1], pad = arguments[2], coll = arguments[3];
          assertions.numbers(step);
          assertions.seqable(pad);
      }
      assertions.numbers(n);
      assertions.seqable(coll);
      return m.partition.apply(null, arguments);
    },
    'partition_$_by': function(f, coll) {
      assertions.arity(2, arguments.length);
      assertions["function"](f);
      assertions.seqable(coll);
      return m.partition_by(f, coll);
    },
    'group_$_by': function(f, coll) {
      assertions.arity(2, arguments.length);
      assertions["function"](f);
      assertions.seqable(coll);
      return m.group_by(f, coll);
    },
    'zipmap': function(keys, vals) {
      assertions.arity(2, arguments.length);
      assertions.seqable(keys, vals);
      return m.zipmap(keys, vals);
    },
    'iterate': function(f, x) {
      assertions.arity(2, arguments.length);
      assertions["function"](f);
      return m.iterate(f, x);
    },
    'constantly': function(x) {
      assertions.arity(1, arguments.length);
      return m.constantly(x);
    },
    'repeat': function() {
      assertions.arity(1, 2, arguments.length);
      if (arguments.length === 2) {
        assertions.numbers(arguments[0]);
      }
      return m.repeat.apply(null, arguments);
    },
    'repeatedly': function() {
      var f, n;
      assertions.arity(1, 2, arguments.length);
      if (arguments.length === 1) {
        f = arguments[0];
      } else {
        n = arguments[0], f = arguments[1];
      }
      if (typeof n !== 'undefined') {
        assertions.numbers(n);
      }
      assertions["function"](f);
      return m.repeatedly.apply(null, arguments);
    },
    'comp': function() {
      var fs;
      fs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      assertions.arity(0, Infinity, arguments.length);
      assertions["function"].apply(null, fs);
      return m.comp.apply(null, fs);
    },
    'partial': function() {
      var args, f;
      f = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      assertions.arity(1, Infinity, arguments.length);
      assertions["function"](f);
      return m.partial.apply(null, arguments);
    }
  };

  module.exports = core;

  _ = (_ref = (_ref1 = (_ref2 = typeof window !== "undefined" && window !== null ? window._ : void 0) != null ? _ref2 : typeof self !== "undefined" && self !== null ? self._ : void 0) != null ? _ref1 : typeof global !== "undefined" && global !== null ? global._ : void 0) != null ? _ref : require('lodash-node');

  m = (_ref3 = (_ref4 = (_ref5 = typeof window !== "undefined" && window !== null ? window.mori : void 0) != null ? _ref5 : typeof self !== "undefined" && self !== null ? self.mori : void 0) != null ? _ref4 : typeof global !== "undefined" && global !== null ? global.mori : void 0) != null ? _ref3 : require('mori');

  assertions = (_ref6 = (_ref7 = (_ref8 = typeof window !== "undefined" && window !== null ? window.assertions : void 0) != null ? _ref8 : typeof self !== "undefined" && self !== null ? self.assertions : void 0) != null ? _ref7 : typeof global !== "undefined" && global !== null ? global.assertions : void 0) != null ? _ref6 : require('./assertions');

  if (typeof self !== "undefined" && self !== null) {
    self.closerCore = core;
  }

  if (typeof window !== "undefined" && window !== null) {
    window.closerCore = core;
  }

}).call(this);

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])