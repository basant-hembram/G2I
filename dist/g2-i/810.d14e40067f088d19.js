"use strict";(self.webpackChunkG2I=self.webpackChunkG2I||[]).push([[810],{3810:(w,m,o)=>{o.r(m),o.d(m,{AuthModule:()=>f});var i=o(6895),s=o(612),c=o(9299),t=o(4650),l=o(9549),u=o(4144);let h=(()=>{class e{constructor(n){this._location=n}goBack(){this._location.back()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(i.Ye))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-bank-details"]],decls:28,vars:0,consts:[[1,"form-wrapper"],[1,"back-nav","mb-auto",3,"click"],[1,"material-symbols-outlined"],[1,"dense-2"],["appearance","outline",1,"w-100"],["matInput",""],[1,"btn","btn-primary","w-100"],[1,"btn","btn-primary","w-100","mt-4"],[1,"mt-auto"]],template:function(n,d){1&n&&(t.TgZ(0,"div",0)(1,"div",1),t.NdJ("click",function(){return d.goBack()}),t.TgZ(2,"span",2),t._uU(3," keyboard_arrow_left "),t.qZA()(),t.TgZ(4,"h4"),t._uU(5,"Welcome to Global Genius Index(G2I)"),t.qZA(),t.TgZ(6,"div",3)(7,"mat-form-field",4)(8,"mat-label"),t._uU(9,"Bank Name"),t.qZA(),t._UZ(10,"input",5),t.qZA(),t.TgZ(11,"mat-form-field",4)(12,"mat-label"),t._uU(13,"Account's holder Name"),t.qZA(),t._UZ(14,"input",5),t.qZA(),t.TgZ(15,"mat-form-field",4)(16,"mat-label"),t._uU(17,"Account Number"),t.qZA(),t._UZ(18,"input",5),t.qZA(),t.TgZ(19,"mat-form-field",4)(20,"mat-label"),t._uU(21,"Re-enter Account Number"),t.qZA(),t._UZ(22,"input",5),t.qZA(),t.TgZ(23,"button",6),t._uU(24,"Link Account"),t.qZA(),t.TgZ(25,"button",7),t._uU(26,"Skip"),t.qZA()(),t._UZ(27,"div",8),t.qZA())},dependencies:[l.KE,l.hX,u.Nt],styles:[".form-wrapper[_ngcontent-%COMP%]{display:flex;padding:15px 70px;height:100%;flex-direction:column;justify-content:center}.form-wrapper[_ngcontent-%COMP%]   .back-nav[_ngcontent-%COMP%]{border:2px solid #320F5A;align-self:flex-start;width:40px;height:40px;display:flex;align-items:center;justify-content:center;border-radius:50%;cursor:pointer}.form-wrapper[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]{border-radius:15px;padding:8px 0;font-size:18px;font-weight:600}.form-wrapper[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#230041;font-weight:600;margin-bottom:30px;text-align:center}.form-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#746283;font-weight:500}  .dense-2 .mat-mdc-form-field-infix{min-height:48px}  .dense-2 .mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label{top:24px}  .dense-2 .mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{--mat-mdc-form-field-label-transform: translateY( -30.75px) scale(var(--mat-mdc-form-field-floating-label-scale, .75));transform:var(--mat-mdc-form-field-label-transform)}  .dense-2 .mat-mdc-text-field-wrapper.mdc-text-field--outlined .mat-mdc-form-field-infix{padding-top:12px;padding-bottom:12px}  .dense-2 .mat-mdc-text-field-wrapper:not(.mdc-text-field--outlined) .mat-mdc-form-field-infix{padding-top:12px;padding-bottom:12px}  .dense-2 .mdc-text-field--no-label:not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mat-mdc-form-field-infix{padding-top:12px;padding-bottom:12px}  .dense-2 .mat-mdc-text-field-wrapper:not(.mdc-text-field--outlined) .mat-mdc-floating-label{display:none}  .dense-2 .mat-mdc-checkbox .mdc-checkbox{padding:calc((var(--mdc-checkbox-ripple-size, 32px) - 18px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 32px) - 32px) / 2)}  .dense-2 .mat-mdc-checkbox .mdc-checkbox .mdc-checkbox__background{top:calc((var(--mdc-checkbox-ripple-size, 32px) - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 32px) - 18px) / 2)}  .dense-2 .mat-mdc-checkbox .mdc-checkbox .mdc-checkbox__native-control{top:calc((32px - var(--mdc-checkbox-touch-target-size, 32px)) / 2);right:calc((32px - var(--mdc-checkbox-touch-target-size, 32px)) / 2);left:calc((32px - var(--mdc-checkbox-touch-target-size, 32px)) / 2);width:var(--mdc-checkbox-touch-target-size, 32px);height:var(--mdc-checkbox-touch-target-size, 32px)}  .dense-2 .mat-mdc-checkbox-touch-target{display:none}  .dense-2 .mat-mdc-chip{height:24px}  .dense-2 .mat-mdc-chip .mdc-evolution-chip__action-touch{display:none}  .dense-2 .mat-mdc-slide-toggle{--mdc-switch-state-layer-size: 40px}  .dense-2 .mat-mdc-radio-button .mdc-radio{padding:6px;margin:0}  .dense-2 .mat-mdc-radio-button .mdc-radio .mdc-radio__background:before{top:-6px;left:-6px;width:32px;height:32px}  .dense-2 .mat-mdc-radio-button .mdc-radio .mdc-radio__native-control{top:0;right:0;left:0;width:32px;height:32px}  .dense-2 .mat-mdc-radio-touch-target{display:none}  .dense-2 .mat-mdc-list-base{--mdc-list-list-item-one-line-container-height: 40px;--mdc-list-list-item-two-line-container-height: 56px;--mdc-list-list-item-three-line-container-height: 80px}  .dense-2 .mat-mdc-list-item.mdc-list-item--with-leading-avatar.mdc-list-item--with-one-line,   .dense-2 .mat-mdc-list-item.mdc-list-item--with-leading-checkbox.mdc-list-item--with-one-line,   .dense-2 .mat-mdc-list-item.mdc-list-item--with-leading-icon.mdc-list-item--with-one-line{height:48px}  .dense-2 .mat-mdc-list-item.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines,   .dense-2 .mat-mdc-list-item.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines,   .dense-2 .mat-mdc-list-item.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines{height:64px}  .dense-2 .mat-mdc-paginator .mat-mdc-form-field-infix{min-height:40px}  .dense-2 .mat-mdc-paginator .mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label{top:20px}  .dense-2 .mat-mdc-paginator .mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{--mat-mdc-form-field-label-transform: translateY( -26.75px) scale(var(--mat-mdc-form-field-floating-label-scale, .75));transform:var(--mat-mdc-form-field-label-transform)}  .dense-2 .mat-mdc-paginator .mat-mdc-text-field-wrapper.mdc-text-field--outlined .mat-mdc-form-field-infix{padding-top:8px;padding-bottom:8px}  .dense-2 .mat-mdc-paginator .mat-mdc-text-field-wrapper:not(.mdc-text-field--outlined) .mat-mdc-form-field-infix{padding-top:8px;padding-bottom:8px}  .dense-2 .mat-mdc-paginator .mdc-text-field--no-label:not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mat-mdc-form-field-infix{padding-top:8px;padding-bottom:8px}  .dense-2 .mat-mdc-paginator .mat-mdc-text-field-wrapper:not(.mdc-text-field--outlined) .mat-mdc-floating-label{display:none}  .dense-2 .mat-mdc-paginator-container{min-height:48px}  .dense-2 .mat-mdc-tab-header .mdc-tab{height:40px}  .dense-2 .mat-mdc-button.mat-mdc-button-base,   .dense-2 .mat-mdc-raised-button.mat-mdc-button-base,   .dense-2 .mat-mdc-unelevated-button.mat-mdc-button-base,   .dense-2 .mat-mdc-outlined-button.mat-mdc-button-base{height:28px;margin-top:0;margin-bottom:0}  .dense-2 .mat-mdc-button.mat-mdc-button-base .mdc-button__touch,   .dense-2 .mat-mdc-raised-button.mat-mdc-button-base .mdc-button__touch,   .dense-2 .mat-mdc-unelevated-button.mat-mdc-button-base .mdc-button__touch,   .dense-2 .mat-mdc-outlined-button.mat-mdc-button-base .mdc-button__touch{height:100%}  .dense-2 .mat-mdc-button.mat-mdc-button-base .mat-mdc-button-touch-target,   .dense-2 .mat-mdc-raised-button.mat-mdc-button-base .mat-mdc-button-touch-target,   .dense-2 .mat-mdc-unelevated-button.mat-mdc-button-base .mat-mdc-button-touch-target,   .dense-2 .mat-mdc-outlined-button.mat-mdc-button-base .mat-mdc-button-touch-target{display:none}  .dense-2 .mat-mdc-icon-button.mat-mdc-button-base{width:40px;height:40px;padding:8px}  .dense-2 .mat-mdc-icon-button.mat-mdc-button-base .mdc-icon-button__focus-ring{max-height:40px;max-width:40px}  .dense-2 .mat-mdc-icon-button.mat-mdc-button-base.mdc-icon-button--reduced-size .mdc-icon-button__ripple{width:40px;height:40px;margin:0}  .dense-2 .mat-mdc-icon-button.mat-mdc-button-base.mdc-icon-button--reduced-size .mdc-icon-button__focus-ring{max-height:40px;max-width:40px}  .dense-2 .mat-mdc-icon-button.mat-mdc-button-base .mdc-icon-button__touch{position:absolute;top:50%;height:40px;left:50%;width:40px;transform:translate(-50%,-50%)}  .dense-2 .mat-mdc-icon-button.mat-mdc-button-base .mat-mdc-button-touch-target{display:none}  .dense-2 .mat-mdc-table .mdc-data-table__row{height:44px}  .dense-2 .mat-mdc-table .mdc-data-table__pagination{min-height:44px}  .dense-2 .mat-mdc-table .mdc-data-table__header-row{height:48px}  .dense-2 .mat-expansion-panel-header{height:40px}  .dense-2 .mat-expansion-panel-header.mat-expanded{height:56px}  .dense-2 .mat-horizontal-stepper-header{height:64px}  .dense-2 .mat-stepper-label-position-bottom .mat-horizontal-stepper-header,   .dense-2 .mat-vertical-stepper-header{padding:20px 24px}  .dense-2 .mat-stepper-vertical-line:before{top:-12px;bottom:-12px}  .dense-2 .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:after,   .dense-2 .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:before{top:32px}  .dense-2 .mat-stepper-label-position-bottom .mat-stepper-horizontal-line{top:32px}  .dense-2 .mat-toolbar-multiple-rows{min-height:56px}  .dense-2 .mat-toolbar-row,   .dense-2 .mat-toolbar-single-row{height:56px}@media (max-width: 599px){  .dense-2 .mat-toolbar-multiple-rows{min-height:48px}  .dense-2 .mat-toolbar-row,   .dense-2 .mat-toolbar-single-row{height:48px}}  .dense-2 .mat-tree-node{min-height:40px}  .dense-2 .mat-button-toggle-appearance-standard .mat-button-toggle-label-content{line-height:40px}  .dense-2 mat-form-field{width:150px}  .dense-2 mat-form-field label{font-size:14px}  .dense-2 .mat-mdc-form-field-infix{min-height:42px}  .dense-2 .mat-mdc-text-field-wrapper.mdc-text-field--outlined .mat-mdc-form-field-infix{padding-top:8px;padding-bottom:8px}  .dense-2 .mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label{top:20px}  .dense-2 .mat-mdc-select{font-size:14px}  .dense-2 .mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:12px}  .dense-2 .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:15px;border-bottom-left-radius:15px}  .dense-2 .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-right-radius:15px;border-bottom-right-radius:15px}"]}),e})();var r=o(9712);const g=[{path:"",loadChildren:()=>o.e(166).then(o.bind(o,6166)).then(e=>e.TabModule)},{path:"bank-details",component:h},{path:"otp",component:(()=>{class e{constructor(n){this._location=n,this.otpInputConfig={otpLength:5,autofocus:!0,classList:{container:"justify-content-evenly",inputBox:"otp-wrapper",input:"otp-input",inputFilled:"otp-filled",inputDisabled:"otp-disabled",inputSuccess:"otp-success",inputError:"otp-error"}}}goBack(){this._location.back()}handleFillEvent(n){console.log(n)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(i.Ye))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-otp"]],decls:11,vars:1,consts:[[1,"form-wrapper"],[1,"back-nav","mb-auto",3,"click"],[1,"material-symbols-outlined"],[1,""],[3,"config","fill"],[1,"btn","btn-primary","w-100","mt-4"],[1,"mt-auto"]],template:function(n,d){1&n&&(t.TgZ(0,"div",0)(1,"div",1),t.NdJ("click",function(){return d.goBack()}),t.TgZ(2,"span",2),t._uU(3," keyboard_arrow_left "),t.qZA()(),t.TgZ(4,"h4"),t._uU(5,"Welcome to Global Genius Index(G2I)"),t.qZA(),t.TgZ(6,"div",3)(7,"ngx-otp-input",4),t.NdJ("fill",function(b){return d.handleFillEvent(b)}),t.qZA(),t.TgZ(8,"button",5),t._uU(9,"Submit"),t.qZA()(),t._UZ(10,"div",6),t.qZA()),2&n&&(t.xp6(7),t.Q6J("config",d.otpInputConfig))},dependencies:[r.lH],styles:[".form-wrapper[_ngcontent-%COMP%]{display:flex;padding:15px 70px;height:100%;flex-direction:column;justify-content:center}.form-wrapper[_ngcontent-%COMP%]   .back-nav[_ngcontent-%COMP%]{border:2px solid #320F5A;align-self:flex-start;width:40px;height:40px;display:flex;align-items:center;justify-content:center;border-radius:50%;cursor:pointer}.form-wrapper[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]{border-radius:15px;padding:8px 0;font-size:18px;font-weight:600}.form-wrapper[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#230041;font-weight:600;margin-bottom:30px;text-align:center}.form-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#746283;font-weight:500}  .otp-input{width:50px!important;height:50px!important;border:1px solid rgba(88,55,129,.5)!important}"]}),e})()},{path:"qr",component:(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-qr"]],decls:10,vars:0,consts:[[1,"form-wrapper"],[1,"text-center","mt-auto"],["src","../../../assets/image/qrcode.png","alt",""],[1,"back-nav","align-self-end","mt-auto"],[1,"material-symbols-outlined"]],template:function(n,d){1&n&&(t.TgZ(0,"div",0)(1,"h4"),t._uU(2,"Welcome to Global Genius Index(G2I)"),t.qZA(),t.TgZ(3,"h2"),t._uU(4," PAYMENT QR SCAN "),t.qZA(),t.TgZ(5,"div",1),t._UZ(6,"img",2),t.qZA(),t.TgZ(7,"div",3)(8,"span",4),t._uU(9," keyboard_arrow_right "),t.qZA()()())},styles:[".form-wrapper[_ngcontent-%COMP%]{display:flex;padding:15px 70px;height:100%;flex-direction:column;justify-content:center}.form-wrapper[_ngcontent-%COMP%]   .back-nav[_ngcontent-%COMP%]{border:2px solid #320F5A;align-self:flex-start;width:40px;height:40px;display:flex;align-items:center;justify-content:center;border-radius:50%;cursor:pointer}.form-wrapper[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#230041;font-weight:600;margin-bottom:30px;text-align:center}.form-wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#230041;font-weight:600;margin-top:30px;margin-bottom:0;text-align:center}.form-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:300px}"]}),e})()}];let x=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.Bz.forChild(g),c.Bz]}),e})(),f=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[i.ez,s.Y,x,r.t4]}),e})()}}]);