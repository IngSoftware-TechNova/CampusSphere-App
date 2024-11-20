import{a as gt,b as _t}from"./chunk-U6P3K6NM.js";import{d as ft,e as bt}from"./chunk-MDOQB4BV.js";import{K as ct,Na as ht,Pa as mt,Qa as ut,Ra as vt,ka as st,la as dt,ma as lt,pa as pt,s as j,u as ot,x as rt}from"./chunk-GX6NZYMJ.js";import{b as v,j as it,n as nt,o as g,q as at}from"./chunk-LGV345Q4.js";import{Ab as o,Bb as E,Cb as Q,Db as G,Fb as S,Hc as Y,Ib as C,Kb as l,Kc as Z,Lc as J,Oc as X,Pc as tt,Qc as et,Tb as $,Ub as r,Vb as p,Wa as c,Wb as k,Xa as h,Xb as M,Yb as K,Z as m,_ as V,aa as U,bc as L,ca as y,da as f,ec as _,fc as B,gc as b,ha as A,ia as N,ic as W,lb as u,qa as I,qb as s,ra as w,rb as q,sb as T,y as H,zb as n}from"./chunk-MWU7JMLF.js";var D=class i{constructor(t){this.http=t}baseURL=`${g.baseURL}/events`;getRecentEvents(){return this.http.get(`${this.baseURL}/recent`)}getEventDetailsById(t){return this.http.get(`${this.baseURL}/${t}`)}static \u0275fac=function(e){return new(e||i)(y(v))};static \u0275prov=m({token:i,factory:i.\u0275fac,providedIn:"root"})};var Et=new U("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})});var Ct=(()=>{class i{static{this.\u0275fac=function(a){return new(a||i)}}static{this.\u0275mod=N({type:i})}static{this.\u0275inj=V({providers:[ot,{provide:Et,useValue:{separatorKeyCodes:[13]}}],imports:[j,rt,j]})}}return i})();var R=class i{baseURL=`${g.baseURL}/inscriptions`;http=f(v);getAllInscription(){return this.http.get(this.baseURL)}create(t){return this.http.post(this.baseURL,t)}getInscriptionHistory(){return this.http.get(`${this.baseURL}/user`)}getInscriptionById(t){return this.http.get(`${this.baseURL}/${t}`)}confirmInscription(t){return this.http.put(`${this.baseURL}/confirm/${t}`,{})}static \u0275fac=function(e){return new(e||i)};static \u0275prov=m({token:i,factory:i.\u0275fac,providedIn:"root"})};var P=class i{constructor(t){this.http=t}baseURL=`${g.baseURL}/calendar`;getUserEvents(){return this.http.get(`${this.baseURL}/user`)}static \u0275fac=function(e){return new(e||i)(y(v))};static \u0275prov=m({token:i,factory:i.\u0275fac,providedIn:"root"})};var O=class i{constructor(t){this.http=t}baseURL=`${g.baseURL}/student-event-interest`;addInterest(t){return this.http.post(`${this.baseURL}`,{eventId:t})}removeInterest(t){return this.http.delete(`${this.baseURL}/${t}`)}getUserInterests(){return this.http.get(`${this.baseURL}/student`)}isEventFavorite(t){return this.http.get(`${this.baseURL}/is-favorite/${t}`)}static \u0275fac=function(e){return new(e||i)(y(v))};static \u0275prov=m({token:i,factory:i.\u0275fac,providedIn:"root"})};var F=class i{baseURL=`${g.baseURL}/event-programming`;http=f(v);create(t){return this.http.post(this.baseURL,t)}update(t,e,a){return this.http.put(`${this.baseURL}/${t}/${e}`,a)}delete(t,e){return this.http.delete(`${this.baseURL}/${t}/${e}`)}findAll(){return this.http.get(this.baseURL)}findByIdEvent(t){return this.http.get(`${this.baseURL}/event/${t}`)}findByIdSchedule(t){return this.http.get(`${this.baseURL}/schedule/${t}`)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=m({token:i,factory:i.\u0275fac,providedIn:"root"})};function Dt(i,t){if(i&1&&(n(0,"div",25)(1,"div",26),r(2),_(3,"date"),_(4,"date"),o(),n(5,"div",27),r(6),o(),n(7,"div",28),r(8),o()()),i&2){let e=t.$implicit;c(2),M("",b(3,5,e.startDate,"shortDate")," - ",b(4,8,e.endDate,"shortDate"),""),c(4),M("",e.scheduleStartHour," - ",e.scheduleEndHour,""),c(2),p(e.scheduleDescription)}}function Rt(i,t){if(i&1&&(n(0,"div",23)(1,"h2"),r(2,"Horarios del Evento"),o(),u(3,Dt,9,11,"div",24),o()),i&2){let e=l(2);c(3),s("ngForOf",e.eventSchedules)}}function Pt(i,t){if(i&1&&(n(0,"mat-icon"),r(1),o()),i&2){let e=l(3);c(),p(e.getEnrollButtonIcon())}}function Ot(i,t){i&1&&E(0,"mat-spinner",34)}function Ft(i,t){if(i&1&&(n(0,"mat-icon"),r(1,"favorite"),o()),i&2){let e=l(3);T("favorite",e.isFavorite)}}function At(i,t){i&1&&E(0,"mat-spinner",34)}function Tt(i,t){if(i&1){let e=S();Q(0),n(1,"button",29),C("click",function(){I(e);let d=l(2);return w(d.enrollInEvent())}),u(2,Pt,2,1,"mat-icon",30)(3,Ot,1,0,"mat-spinner",31),n(4,"span"),r(5),o()(),n(6,"button",32),C("click",function(){I(e);let d=l(2);return w(d.toggleFavorite())}),u(7,Ft,2,2,"mat-icon",33)(8,At,1,0,"mat-spinner",31),n(9,"span"),r(10),o()(),G()}if(i&2){let e=l(2);c(),s("disabled",e.enrollmentStatus!=="not-enrolled"||e.isEnrollLoading),c(),s("ngIf",!e.isEnrollLoading),c(),s("ngIf",e.isEnrollLoading),c(2),p(e.getEnrollButtonText()),c(),s("disabled",e.isFavoriteLoading),c(),s("ngIf",!e.isFavoriteLoading),c(),s("ngIf",e.isFavoriteLoading),c(2),p(e.isFavorite?"Quitar de favoritos":"Agregar a favoritos")}}function Lt(i,t){i&1&&(n(0,"p",35),r(1,"Inicia sesi\xF3n como estudiante para inscribirte o agregar a favoritos"),o())}function Bt(i,t){if(i&1&&(n(0,"div",25)(1,"div",26),r(2),_(3,"date"),o(),n(4,"div",27),r(5),o()()),i&2){let e=t.$implicit;c(2),p(b(3,3,e.eventStartDate,"shortDate")),c(3),M("",e.scheduleStart," - ",e.scheduleEnd,"")}}function jt(i,t){if(i&1){let e=S();n(0,"div",36)(1,"h3"),r(2,"\xA1Gracias por inscribirte!"),o(),n(3,"p"),r(4,"Asiste en uno de estos horarios:"),o(),u(5,Bt,6,6,"div",24),n(6,"button",37),C("click",function(){I(e);let d=l(2);return w(d.goToCalendar())}),n(7,"mat-icon"),r(8,"event"),o(),r(9," Rev\xEDsalo en tu calendario personal "),o()()}if(i&2){let e=l(2);c(5),s("ngForOf",e.eventSchedule)}}function zt(i,t){if(i&1){let e=S();n(0,"div",4)(1,"div",5),_(2,"apiImg"),n(3,"div",6)(4,"h1"),r(5),o(),n(6,"div",7)(7,"span",8),r(8),o(),n(9,"span",9),r(10),_(11,"currency"),o()()()(),n(12,"div",10)(13,"div",11)(14,"div",12)(15,"div",13)(16,"mat-icon"),r(17,"location_on"),o(),n(18,"span"),r(19),o()(),n(20,"div",13)(21,"mat-icon"),r(22,"event"),o(),n(23,"span"),r(24),_(25,"date"),o()(),n(26,"div",13)(27,"mat-icon"),r(28,"group"),o(),n(29,"span"),r(30),o()()(),n(31,"div",14)(32,"h2"),r(33,"Acerca del Evento"),o(),n(34,"p"),r(35),o()(),u(36,Rt,4,1,"div",15),n(37,"div",16),u(38,Tt,11,8,"ng-container",17)(39,Lt,2,0,"ng-template",null,0,W),o()(),n(41,"div",18)(42,"div",19)(43,"h3"),r(44,"Detalles del Evento"),o(),n(45,"div",20)(46,"mat-icon"),r(47,"calendar_today"),o(),n(48,"span"),r(49),_(50,"date"),o()(),n(51,"div",20)(52,"mat-icon"),r(53,"update"),o(),n(54,"span"),r(55),_(56,"date"),o()()(),u(57,jt,10,1,"div",21),o()(),n(58,"button",22),C("click",function(){I(e);let d=l();return w(d.goBackToHome())}),n(59,"mat-icon"),r(60,"arrow_back"),o()()()}if(i&2){let e=$(40),a=l();c(),q("background-image","url("+B(2,17,a.event.imagePath)+")"),c(4),p(a.event.name),c(3),p(a.event.categoryName),c(2),p(B(11,19,a.event.priceValue)),c(9),K("",a.event.locationName,", ",a.event.cityName,", ",a.event.countryName,""),c(5),p(b(25,21,a.event.createdAt,"fullDate")),c(6),k("Capacidad: ",a.event.capacity," personas"),c(5),p(a.event.description),c(),s("ngIf",a.eventSchedules&&a.eventSchedules.length>0),c(2),s("ngIf",a.isAuthenticated&&a.isStudent)("ngIfElse",e),c(11),k("Creado: ",b(50,24,a.event.createdAt,"shortDate"),""),c(6),k("Actualizado: ",b(56,27,a.event.updatedAt,"shortDate"),""),c(2),s("ngIf",a.isEnrolled&&a.eventSchedule)}}function Ht(i,t){i&1&&(n(0,"div",38),E(1,"mat-spinner"),o())}function Vt(i,t){if(i&1&&(n(0,"div",39)(1,"mat-icon"),r(2,"error"),o(),n(3,"span"),r(4),o()()),i&2){let e=l();c(4),p(e.error)}}var xt=class i{constructor(t,e,a,d,z,Ut,Nt,qt,Qt){this.eventService=t;this.homeService=e;this.inscriptionService=a;this.calendarService=d;this.authService=z;this.interestService=Ut;this.cartService=Nt;this.snackBar=qt;this.location=Qt}eventId;event=null;isAuthenticated=!1;isEnrolled=!1;isFavorite=!1;isStudent=!1;isAdmin=!1;isLoading=!0;isEnrollLoading=!1;isFavoriteLoading=!1;error=null;enrollmentStatus="not-enrolled";eventSchedule=null;eventSchedules=[];eventProgrammingService=f(F);router=f(it);ngOnInit(){this.isAuthenticated=this.authService.isAuthenticated(),this.isStudent=this.authService.getUserRole()==="STUDENT",this.isAdmin=this.authService.getUserRole()=="ADMIN",this.eventId?(this.loadEventDetails(),this.loadEventSchedules(),this.isStudent&&(this.checkEnrollmentStatus(),this.loadFavoriteStatus())):(this.error="No event ID provided",this.isLoading=!1)}loadEventDetails(){this.isLoading=!0,this.error=null,this.isStudent||this.isAdmin?this.eventService.getEventDetailsById(this.eventId).subscribe({next:t=>{this.event=t,this.isLoading=!1},error:t=>{console.error("Error loading event details:",t),this.error="Error al cargar detalles del evento",this.isLoading=!1,this.showSnackBar("Error al cargar detalles del evento")}}):this.homeService.getEventDetailsById(this.eventId).subscribe({next:t=>{this.event=t,this.isLoading=!1},error:t=>{console.error("Error loading event details:",t),this.error="Error al cargar detalles del evento",this.isLoading=!1,this.showSnackBar("Error al cargar detalles del evento")}})}loadEventSchedules(){this.eventProgrammingService.findByIdEvent(this.eventId).subscribe({next:t=>{this.eventSchedules=t},error:t=>{console.error("Error loading event schedules:",t),this.showSnackBar("Error al cargar los horarios del evento")}})}checkEnrollmentStatus(){H({inscriptions:this.inscriptionService.getInscriptionHistory(),calendarEvents:this.calendarService.getUserEvents()}).subscribe({next:({inscriptions:t,calendarEvents:e})=>{this.processInscriptions(t),this.processCalendarEvents(e)},error:t=>{console.error("Error checking enrollment status:",t),this.showSnackBar("Error al verificar el estado de inscripci\xF3n")}})}processInscriptions(t){for(let e of t){let a=e.items.find(d=>d.eventId===this.eventId);if(a){this.isEnrolled=!0,this.updateEnrollmentStatus(e.inscriptionStatus,a.price>0);return}}}processCalendarEvents(t){let e=t.find(a=>a.items.some(d=>d.eventId===this.eventId.toString()));e?(this.isEnrolled=!0,this.enrollmentStatus="enrolled",this.eventSchedule=e.items.filter(a=>a.eventId===this.eventId.toString())):this.isEnrolled||this.updateEnrollmentStatus()}goToCalendar(){this.router.navigate(["/student/calendar"])}loadFavoriteStatus(){this.interestService.isEventFavorite(this.eventId).subscribe({next:t=>{this.isFavorite=t},error:t=>{console.error("Error checking favorite status:",t),this.showSnackBar("Error al verificar estado de favorito")}})}enrollInEvent(){if(!this.isStudent||this.isEnrolled)return;this.isEnrollLoading=!0,this.enrollmentStatus="processing";let t={eventId:this.eventId,nameEvent:this.event?.name||"",quantity:1,price:this.event?.priceValue||0};try{this.cartService.addToCart(t),this.updateEnrollmentStatus(),this.showSnackBar("Evento agregado al carrito"),window.location.reload()}catch(e){console.error("Error adding event to cart:",e),this.showSnackBar("Error al agregar el evento al carrito"),this.enrollmentStatus="not-enrolled"}finally{this.isEnrollLoading=!1}}toggleFavorite(){this.isFavoriteLoading=!0,(this.isFavorite?this.interestService.removeInterest(this.eventId):this.interestService.addInterest(this.eventId)).subscribe({next:()=>{this.isFavorite=!this.isFavorite,this.showSnackBar(this.isFavorite?"Evento agregado a favoritos":"Evento eliminado de favoritos"),this.isFavoriteLoading=!1},error:e=>{console.error("Error toggling favorite:",e),this.showSnackBar("Error al actualizar favoritos"),this.isFavoriteLoading=!1}})}getEnrollButtonIcon(){switch(this.enrollmentStatus){case"processing":return"hourglass_empty";case"pending-payment":return"payment";case"pending-confirmation":return"schedule";case"enrolled":return"check_circle";default:return"how_to_reg"}}getEnrollButtonText(){switch(this.enrollmentStatus){case"processing":return"Procesando...";case"pending-payment":return"Pago pendiente";case"pending-confirmation":return"Confirmaci\xF3n pendiente";case"enrolled":return"Inscrito";default:return"Inscribirse"}}goBackToHome(){this.location.back()}updateEnrollmentStatus(t,e=!1){if(this.isEnrolled)switch(t){case"PAID":this.enrollmentStatus="enrolled";break;case"PENDING":this.enrollmentStatus=e?"pending-payment":"pending-confirmation";break;default:this.enrollmentStatus="enrolled"}else this.cartService.getCartItems().some(z=>z.eventId===this.eventId)?this.enrollmentStatus=this.event?.priceValue?"pending-payment":"pending-confirmation":this.enrollmentStatus="not-enrolled"}showSnackBar(t){this.snackBar.open(t,"Cerrar",{duration:3e3})}static \u0275fac=function(e){return new(e||i)(h(bt),h(D),h(R),h(P),h(at),h(O),h(vt),h(mt),h(Y))};static \u0275cmp=A({type:i,selectors:[["app-event-details"]],inputs:{eventId:"eventId"},standalone:!0,features:[L],decls:3,vars:3,consts:[["unauthenticatedActions",""],["class","event-details-container",4,"ngIf"],["class","loading-spinner",4,"ngIf"],["class","error-message",4,"ngIf"],[1,"event-details-container"],[1,"event-header"],[1,"event-header-overlay"],[1,"event-tags"],[1,"event-tag","category"],[1,"event-tag","price"],[1,"event-body"],[1,"event-main-info"],[1,"event-meta"],[1,"meta-item"],[1,"event-description"],["class","event-schedule",4,"ngIf"],[1,"event-actions"],[4,"ngIf","ngIfElse"],[1,"event-sidebar"],[1,"sidebar-card"],[1,"sidebar-item"],["class","sidebar-card enrolled-schedule",4,"ngIf"],[1,"fab-back",3,"click"],[1,"event-schedule"],["class","schedule-item",4,"ngFor","ngForOf"],[1,"schedule-item"],[1,"schedule-date"],[1,"schedule-time"],[1,"schedule-description"],[1,"btn-primary",3,"click","disabled"],[4,"ngIf"],["diameter","24",4,"ngIf"],[1,"btn-secondary",3,"click","disabled"],[3,"favorite",4,"ngIf"],["diameter","24"],[1,"auth-message"],[1,"sidebar-card","enrolled-schedule"],["mat-raised-button","","color","primary",1,"calendar-button",3,"click"],[1,"loading-spinner"],[1,"error-message"]],template:function(e,a){e&1&&u(0,zt,61,30,"div",1)(1,Ht,2,0,"div",2)(2,Vt,5,1,"div",3),e&2&&(s("ngIf",a.event&&!a.isLoading&&!a.error),c(),s("ngIf",a.isLoading),c(),s("ngIf",a.error))},dependencies:[et,Z,J,tt,X,nt,ct,pt,lt,dt,st,ut,_t,gt,Ct,ft,ht],styles:["[_nghost-%COMP%]{display:block;background-color:#eef0f2;min-height:100vh;font-family:Poppins,sans-serif}.event-details-container[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;padding:20px;position:relative}.event-header[_ngcontent-%COMP%]{height:400px;background-size:cover;background-position:center;border-radius:20px;position:relative;overflow:hidden;box-shadow:0 10px 30px #0000001a}.event-header-overlay[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;right:0;background:linear-gradient(to top,#ff9220e6,#ff922000);padding:40px;color:#fff}.event-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:3.5rem;margin-bottom:20px;font-weight:700;text-shadow:2px 2px 4px rgba(0,0,0,.5);letter-spacing:-.5px}.event-tags[_ngcontent-%COMP%]{display:flex;gap:10px}.event-tag[_ngcontent-%COMP%]{padding:8px 16px;border-radius:20px;font-weight:600;font-size:.9rem;text-transform:uppercase;letter-spacing:.5px}.event-tag.category[_ngcontent-%COMP%]{background-color:#ff9220;color:#fff}.event-tag.price[_ngcontent-%COMP%]{background-color:#4a8fe7;color:#fff}.event-body[_ngcontent-%COMP%]{display:flex;gap:30px;margin-top:30px}.event-main-info[_ngcontent-%COMP%]{flex:2}.event-meta[_ngcontent-%COMP%], .event-description[_ngcontent-%COMP%], .sidebar-card[_ngcontent-%COMP%]{background-color:#fff;border-radius:15px;padding:25px;box-shadow:0 5px 15px #0000000d;margin-bottom:30px}.meta-item[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:15px}.meta-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:15px;color:#ff9220;font-size:24px}.meta-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1rem;line-height:1.5}.event-description[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#0d21a1;font-size:2rem;margin-bottom:15px;font-weight:600}.event-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:1.8;color:#1e2019;font-size:1.1rem}.event-actions[_ngcontent-%COMP%]{display:flex;gap:15px;margin-top:30px}.btn-primary[_ngcontent-%COMP%], .btn-secondary[_ngcontent-%COMP%]{padding:12px 24px;border-radius:25px;font-size:1rem;font-weight:600;display:flex;align-items:center;justify-content:center;border:none;cursor:pointer;letter-spacing:.5px;transition:all .3s ease}.btn-primary[_ngcontent-%COMP%]{background-color:#ff9220;color:#fff}.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled){background-color:#e67e00;transform:translateY(-2px);box-shadow:0 4px 10px #ff92204d}.btn-primary[_ngcontent-%COMP%]:active:not(:disabled){transform:translateY(0);box-shadow:0 2px 5px #ff92204d}.btn-primary[_ngcontent-%COMP%]:disabled{background-color:#ffd199;cursor:not-allowed}.btn-secondary[_ngcontent-%COMP%]{background-color:#fff;color:#ff9220;border:2px solid #FF9220}.btn-secondary[_ngcontent-%COMP%]:hover{background-color:#ff9220;color:#fff;transform:translateY(-2px)}.btn-primary[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .btn-secondary[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:8px}.favorite[_ngcontent-%COMP%]{color:#ff4081}.event-sidebar[_ngcontent-%COMP%]{flex:1}.sidebar-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#0d21a1;font-size:1.5rem;margin-bottom:20px;font-weight:600}.sidebar-item[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:15px}.sidebar-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:15px;color:#4a8fe7;font-size:20px}.sidebar-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1rem;line-height:1.5}.fab-back[_ngcontent-%COMP%]{position:fixed;bottom:30px;right:30px;background-color:#ff9220;color:#fff;width:60px;height:60px;border-radius:50%;display:flex;align-items:center;justify-content:center;border:none;cursor:pointer;box-shadow:0 4px 10px #0003;transition:all .3s ease}.fab-back[_ngcontent-%COMP%]:hover{background-color:#0d21a1;transform:scale(1.1)}.loading-spinner[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:400px}.error-message[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:400px;color:#f44336;font-size:1.2rem}.error-message[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:10px;font-size:2rem}.event-schedule[_ngcontent-%COMP%]{background-color:#fff;border-radius:15px;padding:25px;box-shadow:0 5px 15px #0000000d;margin-bottom:30px}.event-schedule[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#0d21a1;font-size:2rem;margin-bottom:15px;font-weight:600}.schedule-item[_ngcontent-%COMP%]{border-bottom:1px solid #eee;padding:15px 0}.schedule-item[_ngcontent-%COMP%]:last-child{border-bottom:none}.schedule-date[_ngcontent-%COMP%]{font-weight:600;color:#ff9220;margin-bottom:5px}.schedule-time[_ngcontent-%COMP%]{font-size:.9rem;color:#666;margin-bottom:5px}.schedule-description[_ngcontent-%COMP%]{font-size:.9rem;color:#333}.enrolled-schedule[_ngcontent-%COMP%]{background-color:#e8f5e9;border-left:4px solid #4caf50}.enrolled-schedule[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#2e7d32;margin-bottom:10px}.enrolled-schedule[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#1b5e20;margin-bottom:15px}.enrolled-schedule[_ngcontent-%COMP%]   .schedule-item[_ngcontent-%COMP%]{background-color:#fff;border-radius:8px;padding:10px;margin-bottom:10px}.enrolled-schedule[_ngcontent-%COMP%]   .schedule-date[_ngcontent-%COMP%]{font-weight:600;color:#1b5e20}.enrolled-schedule[_ngcontent-%COMP%]   .schedule-time[_ngcontent-%COMP%]{color:#388e3c}.calendar-button[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:100%;margin-top:20px;padding:10px;font-size:16px;font-weight:500;text-transform:none}.calendar-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:8px}@media (max-width: 768px){.event-body[_ngcontent-%COMP%]{flex-direction:column}.event-header[_ngcontent-%COMP%]{height:300px}.event-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2.5rem}.event-header-overlay[_ngcontent-%COMP%]{padding:20px}.event-actions[_ngcontent-%COMP%]{flex-direction:column}.btn-primary[_ngcontent-%COMP%], .btn-secondary[_ngcontent-%COMP%]{width:100%}.fab-back[_ngcontent-%COMP%]{bottom:20px;right:20px;width:50px;height:50px}}"]})};export{D as a,Ct as b,R as c,P as d,O as e,xt as f};
