import './polyfills.server.mjs';
import{A as de,B as z,C as he,D as fe,E as pe,F as Z,G as v,I as ge,M as me,O as ve,Q as _e,R as N,S as h,T as ye,U as X,W as Ce,X as Ve,_ as De,a as ie,b as re,c as oe,ca as be,d as se,e as H,f as L,fa as Me,g as f,h as p,i as W,j as g,k as ae,l as le,m as F,n as $,o as m,p as s,q,r as S,s as D,t as ue,u as ce,v as c,w as d,x as I,y as O,z as u}from"./chunk-5R2MXNS2.mjs";import{a,b as l}from"./chunk-5XUXGTUW.mjs";var Ye=["id","errrr"],x=class n{id=22;static \u0275fac=function(t){return new(t||n)};static \u0275cmp=p({type:n,selectors:[["","id","errrr"]],standalone:!0,features:[v],attrs:Ye,decls:1,vars:0,template:function(t,i){t&1&&u(0,"string text string text")}})};var xe=(()=>{class n{constructor(t,i){this._renderer=t,this._elementRef=i,this.onChange=r=>{},this.onTouched=()=>{}}setProperty(t,i){this._renderer.setProperty(this._elementRef.nativeElement,t,i)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static{this.\u0275fac=function(i){return new(i||n)(s(q),s($))}}static{this.\u0275dir=g({type:n})}}return n})(),Ke=(()=>{class n extends xe{static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=le(n)))(r||n)}})()}static{this.\u0275dir=g({type:n,features:[D]})}}return n})(),Pe=new f("");var Je={provide:Pe,useExisting:H(()=>G),multi:!0};function Qe(){let n=X()?X().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var et=new f(""),G=(()=>{class n extends xe{constructor(t,i,r){super(t,i),this._compositionMode=r,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!Qe())}writeValue(t){let i=t??"";this.setProperty("value",i)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static{this.\u0275fac=function(i){return new(i||n)(s(q),s($),s(et,8))}}static{this.\u0275dir=g({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&O("input",function(V){return r._handleInput(V.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(V){return r._compositionEnd(V.target.value)})},features:[Z([Je]),D]})}}return n})();var tt=new f(""),nt=new f("");function ke(n){return n!=null}function Te(n){return ge(n)?re(n):n}function Re(n){let e={};return n.forEach(t=>{e=t!=null?a(a({},e),t):e}),Object.keys(e).length===0?null:e}function Ge(n,e){return e.map(t=>t(n))}function it(n){return!n.validate}function je(n){return n.map(e=>it(e)?e:t=>e.validate(t))}function rt(n){if(!n)return null;let e=n.filter(ke);return e.length==0?null:function(t){return Re(Ge(t,e))}}function Be(n){return n!=null?rt(je(n)):null}function ot(n){if(!n)return null;let e=n.filter(ke);return e.length==0?null:function(t){let i=Ge(t,e).map(Te);return se(i).pipe(oe(Re))}}function Ue(n){return n!=null?ot(je(n)):null}function we(n,e){return n===null?[e]:Array.isArray(n)?[...n,e]:[n,e]}function st(n){return n._rawValidators}function at(n){return n._rawAsyncValidators}function K(n){return n?Array.isArray(n)?n:[n]:[]}function k(n,e){return Array.isArray(n)?n.includes(e):n===e}function Ee(n,e){let t=K(e);return K(n).forEach(r=>{k(t,r)||t.push(r)}),t}function Fe(n,e){return K(e).filter(t=>!k(n,t))}var T=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Be(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Ue(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},J=class extends T{get formDirective(){return null}get path(){return null}},E=class extends T{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},Q=class{constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},lt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Kt=l(a({},lt),{"[class.ng-submitted]":"isSubmitted"}),He=(()=>{class n extends Q{constructor(t){super(t)}static{this.\u0275fac=function(i){return new(i||n)(s(E,2))}}static{this.\u0275dir=g({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&ce("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[D]})}}return n})();var b="VALID",P="INVALID",_="PENDING",M="DISABLED",C=class{},R=class extends C{constructor(e,t){super(),this.value=e,this.source=t}},A=class extends C{constructor(e,t){super(),this.pristine=e,this.source=t}},w=class extends C{constructor(e,t){super(),this.touched=e,this.source=t}},y=class extends C{constructor(e,t){super(),this.status=e,this.source=t}};function ut(n){return(j(n)?n.validators:n)||null}function ct(n){return Array.isArray(n)?Be(n):n||null}function dt(n,e){return(j(e)?e.asyncValidators:n)||null}function ht(n){return Array.isArray(n)?Ue(n):n||null}function j(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}var ee=class{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=N(()=>this.statusReactive()),this.statusReactive=S(void 0),this._pristine=N(()=>this.pristineReactive()),this.pristineReactive=S(!0),this._touched=N(()=>this.touchedReactive()),this.touchedReactive=S(!1),this._events=new ie,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return h(this.statusReactive)}set status(e){h(()=>this.statusReactive.set(e))}get valid(){return this.status===b}get invalid(){return this.status===P}get pending(){return this.status==_}get disabled(){return this.status===M}get enabled(){return this.status!==M}get pristine(){return h(this.pristineReactive)}set pristine(e){h(()=>this.pristineReactive.set(e))}get dirty(){return!this.pristine}get touched(){return h(this.touchedReactive)}set touched(e){h(()=>this.touchedReactive.set(e))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Ee(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Ee(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Fe(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Fe(e,this._rawAsyncValidators))}hasValidator(e){return k(this._rawValidators,e)}hasAsyncValidator(e){return k(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(l(a({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new w(!0,i))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:i})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,i),t&&e.emitEvent!==!1&&this._events.next(new w(!1,i))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(l(a({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new A(!1,i))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,i),t&&e.emitEvent!==!1&&this._events.next(new A(!0,i))}markAsPending(e={}){this.status=_;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new y(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(l(a({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=M,this.errors=null,this._forEachChild(r=>{r.disable(l(a({},e),{onlySelf:!0}))}),this._updateValue();let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new R(this.value,i)),this._events.next(new y(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(l(a({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=b,this._forEachChild(i=>{i.enable(l(a({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(l(a({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===b||this.status===_)&&this._runAsyncValidator(i,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new R(this.value,t)),this._events.next(new y(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(l(a({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?M:b}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=_,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let i=Te(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((i,r)=>i&&i._find(r),this)}getError(e,t){let i=t?this.get(t):this;return i&&i.errors?i.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,i){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||i)&&this._events.next(new y(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,i)}_initObservables(){this.valueChanges=new F,this.statusChanges=new F}_calculateStatus(){return this._allControlsDisabled()?M:this.errors?P:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(_)?_:this._anyControlsHaveStatus(P)?P:b}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),r&&this._events.next(new A(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new w(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){j(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=ct(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=ht(this._rawAsyncValidators)}};var Le=new f("CallSetDisabledState",{providedIn:"root",factory:()=>te}),te="always";function ft(n,e){return[...e.path,n]}function pt(n,e,t=te){mt(n,e),e.valueAccessor.writeValue(n.value),(n.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(n.disabled),vt(n,e),yt(n,e),_t(n,e),gt(n,e)}function Se(n,e){n.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function gt(n,e){if(e.valueAccessor.setDisabledState){let t=i=>{e.valueAccessor.setDisabledState(i)};n.registerOnDisabledChange(t),e._registerOnDestroy(()=>{n._unregisterOnDisabledChange(t)})}}function mt(n,e){let t=st(n);e.validator!==null?n.setValidators(we(t,e.validator)):typeof t=="function"&&n.setValidators([t]);let i=at(n);e.asyncValidator!==null?n.setAsyncValidators(we(i,e.asyncValidator)):typeof i=="function"&&n.setAsyncValidators([i]);let r=()=>n.updateValueAndValidity();Se(e._rawValidators,r),Se(e._rawAsyncValidators,r)}function vt(n,e){e.valueAccessor.registerOnChange(t=>{n._pendingValue=t,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&We(n,e)})}function _t(n,e){e.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&We(n,e),n.updateOn!=="submit"&&n.markAsTouched()})}function We(n,e){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function yt(n,e){let t=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};n.registerOnChange(t),e._registerOnDestroy(()=>{n._unregisterOnChange(t)})}function Ct(n,e){if(!n.hasOwnProperty("model"))return!1;let t=n.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function Vt(n){return Object.getPrototypeOf(n.constructor)===Ke}function Dt(n,e){if(!e)return null;Array.isArray(e);let t,i,r;return e.forEach(o=>{o.constructor===G?t=o:Vt(o)?i=o:r=o}),r||i||t||null}function Ie(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function Oe(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var bt=class extends ee{constructor(e=null,t,i){super(ut(t),dt(i,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),j(t)&&(t.nonNullable||t.initialValueIsDefault)&&(Oe(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Ie(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Ie(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Oe(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Mt={provide:E,useExisting:H(()=>ne)},Ne=Promise.resolve(),ne=(()=>{class n extends E{constructor(t,i,r,o,V,Xe){super(),this._changeDetectorRef=V,this.callSetDisabledState=Xe,this.control=new bt,this._registered=!1,this.name="",this.update=new F,this._parent=t,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=Dt(this,o)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let i=t.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),Ct(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){pt(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){Ne.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let i=t.isDisabled.currentValue,r=i!==0&&_e(i);Ne.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?ft(t,this._parent):[t]}static{this.\u0275fac=function(i){return new(i||n)(s(J,9),s(tt,10),s(nt,10),s(Pe,10),s(ve,8),s(Le,8))}}static{this.\u0275dir=g({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[Z([Mt]),D,ae]})}}return n})();var At=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=W({type:n})}static{this.\u0275inj=L({})}}return n})();var $e=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:Le,useValue:t.callSetDisabledState??te}]}}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=W({type:n})}static{this.\u0275inj=L({imports:[At]})}}return n})();var B=class n{allowNewServer=!1;serverCreationStatus="No server was created";serverName="test default ";id=22;constructor(){setTimeout(()=>{this.allowNewServer=!0},2e3)}onCreateServer(){this.serverCreationStatus="Server Was Created and the name is: "+this.serverName}onUpdatedServerName(e){this.serverName=e.target.value}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=p({type:n,selectors:[["app-testtwo"]],standalone:!0,features:[v],decls:10,vars:5,consts:[["type","text",1,"form-control",3,"ngModelChange","ngModel"],[1,"btn","btn-primary",3,"click","disabled"]],template:function(t,i){t&1&&(c(0,"p"),u(1),d(),c(2,"label"),u(3,"Server name"),d(),c(4,"input",0),pe("ngModelChange",function(o){return fe(i.serverName,o)||(i.serverName=o),o}),d(),u(5),c(6,"button",1),O("click",function(){return i.onCreateServer()}),u(7,"press"),d(),c(8,"p"),u(9),d()),t&2&&(m(),z("Server 2 with the ID of ",i.id,""),m(3),he("ngModel",i.serverName),m(),z(" ",i.serverName," "),m(),ue("disabled",!i.allowNewServer),m(3),de(i.serverCreationStatus))},dependencies:[$e,G,He,ne]})};var U=class n{title="angular";static \u0275fac=function(t){return new(t||n)};static \u0275cmp=p({type:n,selectors:[["app-root"]],standalone:!0,features:[v],decls:6,vars:0,consts:[["id","errrr"],[1,"main"],[1,"content"]],template:function(t,i){t&1&&(c(0,"div",0),u(1,"something "),d(),I(2,"app-testtwo"),c(3,"main",1),I(4,"div",2),d(),I(5,"router-outlet"))},dependencies:[be,x,B],styles:[`[_nghost-%COMP%] {
    --bright-blue: oklch(51.01% 0.274 263.83);
    --electric-violet: oklch(53.18% 0.28 296.97);
    --french-violet: oklch(47.66% 0.246 305.88);
    --vivid-pink: oklch(69.02% 0.277 332.77);
    --hot-red: oklch(61.42% 0.238 15.34);
    --orange-red: oklch(63.32% 0.24 31.68);

    --gray-900: oklch(19.37% 0.006 300.98);
    --gray-700: oklch(36.98% 0.014 302.71);
    --gray-400: oklch(70.9% 0.015 304.04);

    --red-to-pink-to-purple-vertical-gradient: linear-gradient(
      180deg,
      var(--orange-red) 0%,
      var(--vivid-pink) 50%,
      var(--electric-violet) 100%
    );

    --red-to-pink-to-purple-horizontal-gradient: linear-gradient(
      90deg,
      var(--orange-red) 0%,
      var(--vivid-pink) 50%,
      var(--electric-violet) 100%
    );

    --pill-accent: var(--bright-blue);

    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1[_ngcontent-%COMP%] {
    font-size: 3.125rem;
    color: var(--gray-900);
    font-weight: 500;
    line-height: 100%;
    letter-spacing: -0.125rem;
    margin: 0;
    font-family: "Inter Tight", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
  }

  p[_ngcontent-%COMP%] {
    margin: 0;
    color: var(--gray-700);
  }

  main[_ngcontent-%COMP%] {
    width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    box-sizing: inherit;
    position: relative;
  }

  .angular-logo[_ngcontent-%COMP%] {
    max-width: 9.2rem;
  }

  .content[_ngcontent-%COMP%] {
    display: flex;
    justify-content: space-around;
    width: 100%;
    max-width: 700px;
    margin-bottom: 3rem;
  }

  .content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
    margin-top: 1.75rem;
  }

  .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
    margin-top: 1.5rem;
  }

  .divider[_ngcontent-%COMP%] {
    width: 1px;
    background: var(--red-to-pink-to-purple-vertical-gradient);
    margin-inline: 0.5rem;
  }

  .pill-group[_ngcontent-%COMP%] {
    display: flex;
    flex-direction: column;
    align-items: start;
    flex-wrap: wrap;
    gap: 1.25rem;
  }

  .pill[_ngcontent-%COMP%] {
    display: flex;
    align-items: center;
    --pill-accent: var(--bright-blue);
    background: color-mix(in srgb, var(--pill-accent) 5%, transparent);
    color: var(--pill-accent);
    padding-inline: 0.75rem;
    padding-block: 0.375rem;
    border-radius: 2.75rem;
    border: 0;
    transition: background 0.3s ease;
    font-family: var(--inter-font);
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.4rem;
    letter-spacing: -0.00875rem;
    text-decoration: none;
  }

  .pill[_ngcontent-%COMP%]:hover {
    background: color-mix(in srgb, var(--pill-accent) 15%, transparent);
  }

  .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 1) {
    --pill-accent: var(--bright-blue);
  }
  .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 2) {
    --pill-accent: var(--french-violet);
  }
  .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 3), 
   .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 4), 
   .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 5) {
    --pill-accent: var(--hot-red);
  }

  .pill-group[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
    margin-inline-start: 0.25rem;
  }

  .social-links[_ngcontent-%COMP%] {
    display: flex;
    align-items: center;
    gap: 0.73rem;
    margin-top: 1.5rem;
  }

  .social-links[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {
    transition: fill 0.3s ease;
    fill: var(--gray-400);
  }

  .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {
    fill: var(--gray-900);
  }

  @media screen and (max-width: 650px) {
    .content[_ngcontent-%COMP%] {
      flex-direction: column;
      width: max-content;
    }

    .divider[_ngcontent-%COMP%] {
      height: 1px;
      width: 100%;
      background: var(--red-to-pink-to-purple-horizontal-gradient);
      margin-block: 1.5rem;
    }
  }`]})};var qe=[];var ze={providers:[me({eventCoalescing:!0}),Me(qe),Ve()]};var Et={providers:[De()]},Ze=ye(ze,Et);var Ft=()=>Ce(U,Ze),Dn=Ft;export{Dn as a};
