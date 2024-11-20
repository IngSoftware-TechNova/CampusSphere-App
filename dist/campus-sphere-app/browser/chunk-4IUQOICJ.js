import{a as $,b as ee}from"./chunk-QHIYM3ZA.js";import{b as te,c as be}from"./chunk-3I3UDCNX.js";import{$ as q,K as k,L as R,M as T,N,Na as W,Pa as X,Q as L,Qa as Z,S as D,Sa as xe,T as d,Ta as ve,V as B,W as A,Z as U,aa as V,fa as z,ga as H,ha as G,ia as j,ja as Q,ka as Y,la as J,oa as _e,pa as K}from"./chunk-B7PVSJFD.js";import{i as he,j as O,k as I,q as F}from"./chunk-3ZP3C6J6.js";import"./chunk-Q64FFBLU.js";import{Ab as t,Bb as s,Cb as se,Db as pe,Fb as v,Ib as u,Kb as b,Lc as y,Mc as P,Ob as ce,Pb as de,Qb as fe,Qc as w,Ta as le,Tb as C,Ub as o,Vb as ue,Wa as l,a as oe,b as ae,bc as h,da as f,dc as M,ec as S,fc as E,ha as g,ic as ge,lb as c,pb as me,qa as _,qb as m,ra as x,zb as e}from"./chunk-MWU7JMLF.js";var ie=class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=g({type:i,selectors:[["app-auth-layout"]],standalone:!0,features:[h],decls:4,vars:0,template:function(a,n){a&1&&(s(0,"app-navbar"),e(1,"div"),s(2,"router-outlet"),t(),s(3,"app-footer"))},dependencies:[xe,ve,he],styles:[".auth-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-height:100vh;justify-content:center;align-items:center;padding:20px}.content-wrapper[_ngcontent-%COMP%]{padding:20px}"]})};var ke=i=>({"background-image":i});function Re(i,r){i&1&&(e(0,"mat-error"),o(1,"Este campo es obligatorio"),t())}function Te(i,r){i&1&&(e(0,"mat-error"),o(1,"Introduce un correo electr\xF3nico v\xE1lido"),t())}function Ne(i,r){i&1&&(e(0,"mat-error"),o(1,"Este campo es obligatorio"),t())}function Le(i,r){i&1&&(e(0,"span"),o(1,"Iniciar Sesi\xF3n"),t())}function De(i,r){i&1&&s(0,"mat-spinner",18)}var re=class i{imagePath="0ff0d656-7189-48bc-b34c-f6dfcbf88579.png";loginForm;hidePassword=!0;isLoading=!1;fb=f(z);router=f(O);snackBar=f(X);authService=f(F);ADMIN_ROLE="ADMIN";STUDENT_ROLE="STUDENT";ADMIN_ROUTE="/admin/events/list";STUDENT_ROUTE="/student/catalog";DEFAULT_ROUTE="/home";constructor(){this.loginForm=this.fb.group({email:["",[d.required,d.email]],password:["",[d.required]]})}controlHasError(r,a){return this.loginForm.controls[r].hasError(a)}togglePasswordVisibility(){this.hidePassword=!this.hidePassword}onSubmit(){if(this.loginForm.invalid)return;this.isLoading=!0;let r=this.loginForm.value;this.authService.login(r).subscribe({next:()=>{this.showSnackBar("Inicio de sesion exitoso"),this.redirectUserBasedOnRole()},error:()=>{this.showSnackBar("Error en el inicio de sesion. Por favor, intenta de nuevo")},complete:()=>{this.isLoading=!1}})}redirectUserBasedOnRole(){let r=this.authService.getUserRole();r===this.STUDENT_ROLE?this.router.navigate([this.STUDENT_ROUTE]):r===this.ADMIN_ROLE?this.router.navigate([this.ADMIN_ROUTE]):this.router.navigate([this.DEFAULT_ROUTE])}showSnackBar(r){this.snackBar.open(r,"Cerrar",{duration:3e3,verticalPosition:"top"})}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=g({type:i,selectors:[["app-login"]],standalone:!0,features:[h],decls:36,vars:16,consts:[[1,"login-container"],[1,"login-card"],[1,"login-image",3,"ngStyle"],[1,"login-overlay"],[1,"login-text"],[1,"login-description"],[1,"login-form"],[3,"ngSubmit","formGroup"],[1,"form-field"],["matInput","","formControlName","email","type","email","placeholder","tu.correo@universidad.edu"],["matSuffix",""],[4,"ngIf"],["matInput","","formControlName","password","placeholder","Ingresa tu contrase\xF1a",3,"type"],["mat-icon-button","","matSuffix","",3,"click"],["type","submit",1,"submit-button",3,"disabled"],["diameter","24",4,"ngIf"],[1,"register-link"],["routerLink","/auth/register"],["diameter","24"]],template:function(a,n){a&1&&(e(0,"section",0)(1,"div",1)(2,"div",2),S(3,"apiImg"),e(4,"div",3)(5,"h3",4),o(6,"Bienvenido a CampusSphere"),t(),e(7,"p",5),o(8,"Inicia sesi\xF3n para explorar eventos, conectar con otros estudiantes y hacer que tu vida universitaria sea inolvidable."),t()()(),e(9,"div",6)(10,"h2"),o(11,"Iniciar Sesi\xF3n"),t(),e(12,"form",7),u("ngSubmit",function(){return n.onSubmit()}),e(13,"mat-form-field",8)(14,"mat-label"),o(15,"Correo Electr\xF3nico"),t(),s(16,"input",9),e(17,"mat-icon",10),o(18,"email"),t(),c(19,Re,2,0,"mat-error",11)(20,Te,2,0,"mat-error",11),t(),e(21,"mat-form-field",8)(22,"mat-label"),o(23,"Contrase\xF1a"),t(),s(24,"input",12),e(25,"button",13),u("click",function(){return n.togglePasswordVisibility()}),e(26,"mat-icon"),o(27),t()(),c(28,Ne,2,0,"mat-error",11),t(),e(29,"button",14),c(30,Le,2,0,"span",11)(31,De,1,0,"mat-spinner",15),t()(),e(32,"p",16),o(33,"\xBFNo tienes una cuenta? "),e(34,"a",17),o(35,"Reg\xEDstrate aqu\xED"),t()()()()()),a&2&&(l(2),m("ngStyle",M(14,ke,"url("+E(3,12,n.imagePath)+")")),l(10),m("formGroup",n.loginForm),l(7),m("ngIf",n.controlHasError("email","required")),l(),m("ngIf",n.controlHasError("email","email")),l(4),m("type",n.hidePassword?"password":"text"),l(),me("aria-label","Hide password")("aria-pressed",n.hidePassword),l(2),ue(n.hidePassword?"visibility_off":"visibility"),l(),m("ngIf",n.controlHasError("password","required")),l(),m("disabled",n.loginForm.invalid||n.isLoading),l(),m("ngIf",!n.isLoading),l(),m("ngIf",n.isLoading))},dependencies:[H,U,D,B,A,G,q,V,Q,j,L,R,T,N,k,Z,K,_e,I,W,w,y,P,ee,$,te,J,Y],styles:[".login-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;min-height:100vh;background:linear-gradient(135deg,#fff7ed,#fed7aa);padding:20px}.login-card[_ngcontent-%COMP%]{display:flex;background-color:#fff;border-radius:20px;overflow:hidden;box-shadow:0 10px 20px #0000001a;max-width:1000px;width:100%}.login-image[_ngcontent-%COMP%]{flex:1;background-size:cover;background-position:center;position:relative}.login-overlay[_ngcontent-%COMP%]{position:absolute;inset:0;background-color:#f97316cc;display:flex;flex-direction:column;justify-content:center;padding:40px;color:#fff}.login-text[_ngcontent-%COMP%]{font-size:2.5rem;font-weight:700;margin-bottom:20px;text-shadow:2px 2px 4px rgba(0,0,0,.3)}.login-description[_ngcontent-%COMP%]{font-size:1.2rem;line-height:1.5;text-shadow:1px 1px 2px rgba(0,0,0,.2)}.login-form[_ngcontent-%COMP%]{flex:1;padding:40px;display:flex;flex-direction:column}h2[_ngcontent-%COMP%]{font-size:2rem;margin-bottom:30px;color:#f97316;text-align:center}.form-field[_ngcontent-%COMP%]{width:100%;margin-bottom:20px}  .mat-form-field-appearance-outline .mat-form-field-outline{color:#f97316}  .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{color:#f97316}  .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick{color:#ef4444}  .mat-form-field-label{color:#0009}  .mat-form-field.mat-focused .mat-form-field-label{color:#f97316}.submit-button[_ngcontent-%COMP%]{width:100%;padding:12px;font-size:1.1rem;margin-top:20px;background-color:#f97316;color:#fff;border:none;border-radius:30px;cursor:pointer;transition:all .3s ease;display:flex;justify-content:center;align-items:center}.submit-button[_ngcontent-%COMP%]:hover{background-color:#ea580c;transform:translateY(-2px);box-shadow:0 4px 8px #0003}.submit-button[_ngcontent-%COMP%]:disabled{background-color:#fbd7c7;cursor:not-allowed;transform:none;box-shadow:none}.register-link[_ngcontent-%COMP%]{margin-top:20px;text-align:center;font-size:.9rem}.register-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#f97316;text-decoration:none;font-weight:700;transition:color .3s ease}.register-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#ea580c;text-decoration:underline}@media (max-width: 768px){.login-card[_ngcontent-%COMP%]{flex-direction:column}.login-image[_ngcontent-%COMP%]{height:200px}.login-form[_ngcontent-%COMP%]{padding:20px}}"]})};var Be=["fileInput"],Ae=i=>({"background-image":i});function Ue(i,r){if(i&1){let a=v();se(0),e(1,"button",26),u("click",function(){_(a),b();let p=C(18);return x(p.click())}),e(2,"mat-icon"),o(3,"add_a_photo"),t(),e(4,"span"),o(5,"Escoge tu foto de perfil"),t()(),pe()}}function qe(i,r){if(i&1){let a=v();e(0,"div",27),s(1,"img",28),e(2,"div",29),u("click",function(){_(a),b();let p=C(18);return x(p.click())}),e(3,"mat-icon"),o(4,"edit"),t()()()}if(i&2){let a=b();l(),m("src",a.profileImagePreview,le)}}function Ve(i,r){i&1&&(e(0,"mat-error"),o(1,"Este campo es obligatorio"),t())}function ze(i,r){i&1&&(e(0,"mat-error"),o(1,"Este campo es obligatorio"),t())}function He(i,r){i&1&&(e(0,"mat-error"),o(1,"Este campo es obligatorio"),t())}function Ge(i,r){i&1&&(e(0,"mat-error"),o(1,"Introduce un correo electr\xF3nico v\xE1lido"),t())}function je(i,r){i&1&&(e(0,"mat-error"),o(1,"Este campo es obligatorio"),t())}function Qe(i,r){i&1&&(e(0,"mat-error"),o(1,"La contrase\xF1a debe tener al menos 8 caracteres"),t())}function Ye(i,r){i&1&&(e(0,"mat-error"),o(1,"Este campo es obligatorio"),t())}function Je(i,r){i&1&&(e(0,"span"),o(1,"Unirme a CampusSphere"),t())}function Ke(i,r){i&1&&s(0,"mat-spinner",30)}var ne=class i{fileInput;imagePath="f2491173-6ecc-4762-a124-ec84b91f3e6a.png";registerForm;profileImagePreview=null;selectedFile=null;isLoading=!1;fb=f(z);router=f(O);snackBar=f(X);authService=f(F);mediaService=f(be);ngOnInit(){}constructor(){this.registerForm=this.fb.group({firstName:["",d.required],lastName:["",d.required],email:["",[d.required,d.email]],password:["",[d.required,d.minLength(8)]],career:["",d.required],profilePicPath:[""]})}controlHasError(r,a){return this.registerForm.controls[r].hasError(a)}onFileSelected(r){let a=r.target.files?.[0];if(a){this.selectedFile=a;let n=new FileReader;n.onload=p=>this.profileImagePreview=p.target?.result,n.readAsDataURL(a)}}onSubmit(){if(this.registerForm.valid)if(this.isLoading=!0,this.selectedFile){let r=new FormData;r.append("file",this.selectedFile),this.mediaService.upload(r).subscribe({next:a=>{let n=ae(oe({},this.registerForm.value),{profilePicPath:a.path});this.registerUser(n)},error:a=>{this.showSnackBar("Error al cargar la imagen de perfil."),console.error("Error uploading profile picture:",a),this.isLoading=!1}})}else this.registerUser(this.registerForm.value)}registerUser(r){this.authService.register(r).subscribe({next:()=>{this.showSnackBar("\xA1Bienvenido a CampusSphere! Tu cuenta ha sido creada."),this.router.navigate(["/auth/login"])},error:a=>{this.showSnackBar(a.error.message||"Error al registrar el usuario"),console.error("Error registering user:",a)},complete:()=>{this.isLoading=!1}})}showSnackBar(r){this.snackBar.open(r,"Cerrar",{duration:3e3})}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=g({type:i,selectors:[["app-register"]],viewQuery:function(a,n){if(a&1&&ce(Be,5),a&2){let p;de(p=fe())&&(n.fileInput=p.first)}},standalone:!0,features:[h],decls:64,vars:18,consts:[["profilePreview",""],["fileInput",""],[1,"register-container"],[1,"register-card"],[1,"register-image",3,"ngStyle"],[1,"register-overlay"],[1,"register-text"],[1,"register-description"],[1,"register-form"],[3,"ngSubmit","formGroup"],[1,"profile-picture-section"],[4,"ngIf","ngIfElse"],["type","file","hidden","","accept","image/*",3,"change"],[1,"form-row"],[1,"form-field"],["matInput","","formControlName","firstName","placeholder","Tu nombre"],["matSuffix",""],[4,"ngIf"],["matInput","","formControlName","lastName","placeholder","Tu apellido"],["matInput","","formControlName","email","type","email","placeholder","tu.correo@universidad.edu"],["matInput","","formControlName","password","type","password","placeholder","Crea una contrase\xF1a segura"],["matInput","","formControlName","career","placeholder","\xBFQu\xE9 est\xE1s estudiando?"],["type","submit",1,"submit-button",3,"disabled"],["diameter","24",4,"ngIf"],[1,"login-link"],["routerLink","/auth/login"],["type","button",1,"upload-btn",3,"click"],[1,"avatar"],["alt","Foto de perfil",1,"avatar-image",3,"src"],[1,"avatar-overlay",3,"click"],["diameter","24"]],template:function(a,n){if(a&1){let p=v();e(0,"section",2)(1,"div",3)(2,"div",4),S(3,"apiImg"),e(4,"div",5)(5,"h3",6),o(6,"\xDAnete a CampusSphere"),t(),e(7,"p",7),o(8,"Descubre eventos incre\xEDbles, con\xE9ctate con otros estudiantes y haz que tu vida universitaria sea inolvidable."),t()()(),e(9,"div",8)(10,"h2"),o(11,"Crea tu cuenta de estudiante"),t(),e(12,"form",9),u("ngSubmit",function(){return _(p),x(n.onSubmit())}),e(13,"div",10),c(14,Ue,6,0,"ng-container",11)(15,qe,5,1,"ng-template",null,0,ge),e(17,"input",12,1),u("change",function(Ee){return _(p),x(n.onFileSelected(Ee))}),t()(),e(19,"div",13)(20,"mat-form-field",14)(21,"mat-label"),o(22,"Nombre"),t(),s(23,"input",15),e(24,"mat-icon",16),o(25,"person"),t(),c(26,Ve,2,0,"mat-error",17),t(),e(27,"mat-form-field",14)(28,"mat-label"),o(29,"Apellido"),t(),s(30,"input",18),e(31,"mat-icon",16),o(32,"person"),t(),c(33,ze,2,0,"mat-error",17),t()(),e(34,"mat-form-field",14)(35,"mat-label"),o(36,"Correo Electr\xF3nico"),t(),s(37,"input",19),e(38,"mat-icon",16),o(39,"email"),t(),c(40,He,2,0,"mat-error",17)(41,Ge,2,0,"mat-error",17),t(),e(42,"mat-form-field",14)(43,"mat-label"),o(44,"Contrase\xF1a"),t(),s(45,"input",20),e(46,"mat-icon",16),o(47,"lock"),t(),c(48,je,2,0,"mat-error",17)(49,Qe,2,0,"mat-error",17),t(),e(50,"mat-form-field",14)(51,"mat-label"),o(52,"Carrera Universitaria"),t(),s(53,"input",21),e(54,"mat-icon",16),o(55,"school"),t(),c(56,Ye,2,0,"mat-error",17),t(),e(57,"button",22),c(58,Je,2,0,"span",17)(59,Ke,1,0,"mat-spinner",23),t()(),e(60,"p",24),o(61,"\xBFYa tienes una cuenta? "),e(62,"a",25),o(63,"Inicia sesi\xF3n aqu\xED"),t()()()()()}if(a&2){let p=C(16);l(2),m("ngStyle",M(16,Ae,"url("+E(3,14,n.imagePath)+")")),l(10),m("formGroup",n.registerForm),l(2),m("ngIf",!n.profileImagePreview)("ngIfElse",p),l(12),m("ngIf",n.controlHasError("firstName","required")),l(7),m("ngIf",n.controlHasError("lastName","required")),l(7),m("ngIf",n.controlHasError("email","required")),l(),m("ngIf",n.controlHasError("email","email")),l(7),m("ngIf",n.controlHasError("password","required")),l(),m("ngIf",n.controlHasError("password","minlength")),l(7),m("ngIf",n.controlHasError("career","required")),l(),m("disabled",n.registerForm.invalid||n.isLoading),l(),m("ngIf",!n.isLoading),l(),m("ngIf",n.isLoading)}},dependencies:[w,y,P,K,Q,j,L,R,T,N,k,I,H,U,D,B,A,G,q,V,Z,W,J,Y,te,ee,$],styles:[".register-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;min-height:100vh;background:linear-gradient(135deg,#fff7ed,#fed7aa);padding:20px}.register-card[_ngcontent-%COMP%]{display:flex;background-color:#fff;border-radius:20px;overflow:hidden;box-shadow:0 10px 20px #0000001a;max-width:1000px;width:100%}.register-image[_ngcontent-%COMP%]{flex:1;background-size:cover;background-position:center;position:relative}.register-overlay[_ngcontent-%COMP%]{position:absolute;inset:0;background-color:#f97316cc;display:flex;flex-direction:column;justify-content:center;padding:40px;color:#fff}.register-text[_ngcontent-%COMP%]{font-size:2.5rem;font-weight:700;margin-bottom:20px;text-shadow:2px 2px 4px rgba(0,0,0,.3)}.register-description[_ngcontent-%COMP%]{font-size:1.2rem;line-height:1.5;text-shadow:1px 1px 2px rgba(0,0,0,.2)}.register-form[_ngcontent-%COMP%]{flex:1;padding:40px;display:flex;flex-direction:column}h2[_ngcontent-%COMP%]{font-size:2rem;margin-bottom:30px;color:#f97316;text-align:center}.form-field[_ngcontent-%COMP%]{width:100%;margin-bottom:20px}.form-row[_ngcontent-%COMP%]{display:flex;gap:20px}.form-row[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]{flex:1}  .mat-form-field-appearance-outline .mat-form-field-outline{color:#f97316}  .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{color:#f97316}  .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick{color:#ef4444}  .mat-form-field-label{color:#0009}  .mat-form-field.mat-focused .mat-form-field-label{color:#f97316}.submit-button[_ngcontent-%COMP%]{width:100%;padding:12px;font-size:1.1rem;margin-top:20px;background-color:#f97316;color:#fff;border:none;border-radius:30px;cursor:pointer;transition:all .3s ease;display:flex;justify-content:center;align-items:center}.submit-button[_ngcontent-%COMP%]:hover{background-color:#ea580c;transform:translateY(-2px);box-shadow:0 4px 8px #0003}.submit-button[_ngcontent-%COMP%]:disabled{background-color:#fbd7c7;cursor:not-allowed;transform:none;box-shadow:none}.login-link[_ngcontent-%COMP%]{margin-top:20px;text-align:center;font-size:.9rem}.login-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#f97316;text-decoration:none;font-weight:700;transition:color .3s ease}.login-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#ea580c;text-decoration:underline}.profile-picture-section[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;margin-bottom:30px}.upload-btn[_ngcontent-%COMP%]{background-color:#f97316;color:#fff;border:none;padding:12px 24px;border-radius:30px;font-weight:700;display:flex;align-items:center;gap:8px;cursor:pointer;transition:all .3s ease}.upload-btn[_ngcontent-%COMP%]:hover{background-color:#ea580c;transform:translateY(-2px);box-shadow:0 4px 8px #0003}.avatar[_ngcontent-%COMP%]{width:120px;height:120px;border-radius:50%;overflow:hidden;margin-bottom:15px;box-shadow:0 4px 8px #0000001a;position:relative;cursor:pointer;transition:all .3s ease}.avatar[_ngcontent-%COMP%]:hover{transform:scale(1.05)}.avatar-image[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.avatar-overlay[_ngcontent-%COMP%]{position:absolute;inset:0;background-color:#f97316b3;display:flex;justify-content:center;align-items:center;opacity:0;transition:opacity .3s ease}.avatar[_ngcontent-%COMP%]:hover   .avatar-overlay[_ngcontent-%COMP%]{opacity:1}.avatar-overlay[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#fff;font-size:36px}@media (max-width: 768px){.register-card[_ngcontent-%COMP%]{flex-direction:column}.register-image[_ngcontent-%COMP%]{height:200px}.register-form[_ngcontent-%COMP%]{padding:20px}.form-row[_ngcontent-%COMP%]{flex-direction:column;gap:0}.profile-picture-section[_ngcontent-%COMP%]{margin-bottom:20px}.avatar[_ngcontent-%COMP%]{width:100px;height:100px}}"]})};var Vt=[{path:"",component:ie,children:[{path:"login",component:re},{path:"register",component:ne}]}];export{Vt as authRoutes};