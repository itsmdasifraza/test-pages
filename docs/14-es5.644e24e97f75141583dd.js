function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{X2BB:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var o=n("R0Ic"),i=n("fXoL"),a=n("tyNb"),r=n("ofXK");function c(t,e){if(1&t&&(i.Sb(0,"span"),i.zc(1),i.Rb()),2&t){var n=e.$implicit;i.Fb(1),i.Ac(n)}}function l(t,e){if(1&t&&(i.Sb(0,"h1"),i.yc(1,c,2,1,"span",2),i.Rb()),2&t){var n=i.ec();i.kc("@stagger",n.heading.length),i.Fb(1),i.kc("ngForOf",n.heading)}}var s=function(){var t=function(){function t(e){_classCallCheck(this,t),this.route=e,this.heading=[]}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.route.queryParams.subscribe((function(t){})),this.route.params.subscribe((function(e){var n=window.location.href.split("/").splice(-1)[0];"about"==n?setTimeout((function(){t.heading=["A","b","o","u","t"]}),100):"contact"==n?setTimeout((function(){t.heading=["C","o","n","t","a","c","t"]}),100):"web-development"==n?setTimeout((function(){t.heading=["D","e","v","e","l","o","p","m","e","n","t"]}),100):"blog"==n?setTimeout((function(){t.heading=["R","e","c","e","n","t","","","P","o","s","t"]}),100):"marketing"==n?setTimeout((function(){t.heading=["M","a","r","k","e","t","i","n","g"]}),100):"frontend"==n||"backend"==n?setTimeout((function(){t.heading=["S"," t","r","e","n","g","t","h"]}),100):"project"==n?setTimeout((function(){t.heading=["P","r","o","j","e","c","t"]}),100):"disclaimer"==n?setTimeout((function(){t.heading=["D","i","s","c","l","a","i","m","e","r"]}),100):"terms-and-conditions"==n?setTimeout((function(){t.heading=["T","e","r","m","s","","","&","","","C","o","n","d","i","t","i","o","n","s"]}),100):"privacy-policy"==n?setTimeout((function(){t.heading=["P","r","i","v","a","c","y","","","P","o","l","i","c","y"]}),100):setTimeout((function(){t.heading=["E","r","r","o","r"]}),100)}))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(i.Pb(a.a))},t.\u0275cmp=i.Jb({type:t,selectors:[["app-heading"]],decls:2,vars:1,consts:[[1,"heading"],[4,"ngIf"],[4,"ngFor","ngForOf"]],template:function(t,e){1&t&&(i.Sb(0,"div",0),i.yc(1,l,2,2,"h1",1),i.Rb()),2&t&&(i.Fb(1),i.kc("ngIf",e.heading))},directives:[r.j,r.i],styles:[".heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:var(--theme-color-primary);font-weight:bolder;font-size:1.75rem;margin-top:0;margin-bottom:1.875rem}.heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;position:relative;margin-right:7px}.heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{animation:mytext .2s;cursor:pointer;-webkit-animation:mytext .2s}@-webkit-keyframes mytext{0%{transform:scaleY(1);-webkit-transform:scaleY(1);-moz-transform:scaleY(1);-ms-transform:scaleY(1);-o-transform:scaleY(1)}20%{transform:scaleY(.7) scaleX(1.3);-webkit-transform:scaleY(.7) scaleX(1.3);-moz-transform:scaleY(.7) scaleX(1.3);-ms-transform:scaleY(.7) scaleX(1.3);-o-transform:scaleY(.7) scaleX(1.3)}40%{transform:scaleY(.7) scaleX(1.3)}60%{transform:scaleY(1) scaleX(1)}80%{transform:scaleY(.8) scaleX(1.2);-webkit-transform:scaleY(.8) scaleX(1.2);-moz-transform:scaleY(.8) scaleX(1.2);-ms-transform:scaleY(.8) scaleX(1.2);-o-transform:scaleY(.8) scaleX(1.2)}to{transform:scaleY(1) scaleX(1);-webkit-transform:scaleY(1) scaleX(1);-moz-transform:scaleY(1) scaleX(1);-ms-transform:scaleY(1) scaleX(1);-o-transform:scaleY(1) scaleX(1)}}@keyframes mytext{0%{transform:scaleY(1);-webkit-transform:scaleY(1);-moz-transform:scaleY(1);-ms-transform:scaleY(1);-o-transform:scaleY(1)}20%{transform:scaleY(.7) scaleX(1.3);-webkit-transform:scaleY(.7) scaleX(1.3);-moz-transform:scaleY(.7) scaleX(1.3);-ms-transform:scaleY(.7) scaleX(1.3);-o-transform:scaleY(.7) scaleX(1.3)}40%{transform:scaleY(.7) scaleX(1.3)}60%{transform:scaleY(1) scaleX(1)}80%{transform:scaleY(.8) scaleX(1.2);-webkit-transform:scaleY(.8) scaleX(1.2);-moz-transform:scaleY(.8) scaleX(1.2);-ms-transform:scaleY(.8) scaleX(1.2);-o-transform:scaleY(.8) scaleX(1.2)}to{transform:scaleY(1) scaleX(1);-webkit-transform:scaleY(1) scaleX(1);-moz-transform:scaleY(1) scaleX(1);-ms-transform:scaleY(1) scaleX(1);-o-transform:scaleY(1) scaleX(1)}}@media only screen and (max-width:767px){.heading[_ngcontent-%COMP%]{display:none!important}}"],data:{animation:[Object(o.n)("stagger",[Object(o.m)("* => *",[Object(o.h)(":enter",[Object(o.l)({opacity:0}),Object(o.j)(130,[Object(o.e)("0.2s",Object(o.l)({opacity:1}))])],{optional:!0})])])]}}),t}()},dLZ0:function(t,e,n){"use strict";n.r(e),n.d(e,"AboutModule",(function(){return v}));var o=n("ofXK"),i=n("tyNb"),a=n("AytR"),r=n("HbP6"),c=n.n(r),l=n("fXoL"),s=n("jhN1"),m=n("yA8E"),d=n("X2BB");function g(t,e){if(1&t&&(l.Sb(0,"li",2),l.Sb(1,"div",3),l.Qb(2,"img",4),l.Rb(),l.Sb(3,"div",5),l.Sb(4,"div",6),l.Sb(5,"h4",7),l.zc(6),l.Rb(),l.Sb(7,"p"),l.Sb(8,"small",8),l.Qb(9,"i",9),l.zc(10),l.Rb(),l.Rb(),l.Rb(),l.Qb(11,"div",10),l.Rb(),l.Rb()),2&t){var n=e.$implicit;l.Fb(2),l.lc("src",n.logo,l.uc),l.Fb(4),l.Ac(n.institute),l.Fb(4),l.Ac(n.location)}}var p,b,f=((b=function(){function t(){_classCallCheck(this,t),this.admin=a.a.admin}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||b)},b.\u0275cmp=l.Jb({type:b,selectors:[["app-education"]],decls:5,vars:1,consts:[[1,"timeline"],["class","timeline-inverted",4,"ngFor","ngForOf"],[1,"timeline-inverted"],[1,"timeline-badge","warning"],["width","100%","height","100%","alt","",2,"border-radius","50%",3,"src"],[1,"timeline-panel"],[1,"timeline-heading"],[1,"timeline-title"],[1,"text-muted"],[1,"glyphicon","glyphicon-time"],[1,"timeline-body"]],template:function(t,e){1&t&&(l.Sb(0,"div"),l.Sb(1,"h3"),l.zc(2,"EDUCATION"),l.Rb(),l.Rb(),l.Sb(3,"ul",0),l.yc(4,g,12,3,"li",1),l.Rb()),2&t&&(l.Fb(4),l.kc("ngForOf",e.admin.education))},directives:[o.i],styles:['.timeline[_ngcontent-%COMP%]{list-style:none;padding:20px 0;position:relative}.timeline[_ngcontent-%COMP%]:before{top:0;bottom:0;position:absolute;content:" ";width:3px;background-color:var(--theme-background-color-secondary);left:50%;margin-left:-1.5px}.timeline[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{margin-bottom:20px;position:relative}.timeline[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:after, .timeline[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:" ";display:table}.timeline[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:after{clear:both}.timeline[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > .timeline-panel[_ngcontent-%COMP%]{width:46%;float:left;background-color:var(--theme-background-color-secondary);border-radius:2px;padding:20px;position:relative;box-shadow:0 1px 6px rgba(0,0,0,.175)}.timeline[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > .timeline-panel[_ngcontent-%COMP%]:before{top:26px;right:-15px;border-top:15px solid transparent;border-left:15px solid var(--theme-background-color-secondary);border-bottom:15px solid transparent}.timeline[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > .timeline-panel[_ngcontent-%COMP%]:after, .timeline[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > .timeline-panel[_ngcontent-%COMP%]:before{position:absolute;display:inline-block;border-right:0 solid var(--theme-background-color-secondary);content:" "}.timeline[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > .timeline-panel[_ngcontent-%COMP%]:after{top:27px;right:-14px;border-top:14px solid transparent;border-left:14px solid var(--theme-background-color-secondary);border-bottom:14px solid transparent}.timeline[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > .timeline-badge[_ngcontent-%COMP%]{color:var(--theme-background-color-secondary);width:50px;height:50px;line-height:50px;font-size:1.4em;text-align:center;position:absolute;top:16px;left:50%;margin-left:-25px;background-color:var(--theme-background-color-secondary);z-index:100;border-top-right-radius:50%;border-top-left-radius:50%;border-bottom-right-radius:50%;border-bottom-left-radius:50%}.timeline[_ngcontent-%COMP%] > li.timeline-inverted[_ngcontent-%COMP%] > .timeline-panel[_ngcontent-%COMP%]{float:right}.timeline[_ngcontent-%COMP%] > li.timeline-inverted[_ngcontent-%COMP%] > .timeline-panel[_ngcontent-%COMP%]:before{border-left-width:0;border-right-width:15px;left:-15px;right:auto}.timeline[_ngcontent-%COMP%] > li.timeline-inverted[_ngcontent-%COMP%] > .timeline-panel[_ngcontent-%COMP%]:after{border-left-width:0;border-right-width:14px;left:-14px;right:auto}.timeline-badge.warning[_ngcontent-%COMP%]{background-color:var(--theme-background-color-primary)!important}.timeline-title[_ngcontent-%COMP%]{margin-top:0;color:inherit}.timeline-body[_ngcontent-%COMP%] > p[_ngcontent-%COMP%], .timeline-body[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%]{margin-bottom:0}.timeline-body[_ngcontent-%COMP%] > p[_ngcontent-%COMP%] + p[_ngcontent-%COMP%]{margin-top:5px}ul.timeline[_ngcontent-%COMP%]:before{left:40px}ul.timeline[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > .timeline-panel[_ngcontent-%COMP%]{width:calc(100% - 90px);width:-webkit-calc(100% - 90px)}ul.timeline[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > .timeline-badge[_ngcontent-%COMP%]{left:15px;margin-left:0;top:16px}ul.timeline[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > .timeline-panel[_ngcontent-%COMP%]{float:right}ul.timeline[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > .timeline-panel[_ngcontent-%COMP%]:before{border-left-width:0;border-right-width:15px;left:-15px;right:auto}ul.timeline[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > .timeline-panel[_ngcontent-%COMP%]:after{border-left-width:0;border-right-width:14px;left:-14px;right:auto}h4[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{text-align:left}h4[_ngcontent-%COMP%]{font-size:.875rem!important;margin-bottom:5px}p[_ngcontent-%COMP%]{line-height:15px!important;margin-bottom:0}']}),b),u=((p=function(){function t(){_classCallCheck(this,t),this.images=[]}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||p)},p.\u0275cmp=l.Jb({type:p,selectors:[["app-image-gallery"]],decls:0,vars:0,template:function(t,e){},styles:[""]}),p),h=n("F2rd");function _(t,e){if(1&t&&(l.Sb(0,"p",11),l.zc(1),l.Rb()),2&t){var n=e.$implicit;l.Fb(1),l.Ac(n)}}var C,O,P,M=[{path:"",component:(C=function(){function t(e,n){_classCallCheck(this,t),this.titleService=e,this.meta=n,this.location=window.location.href,this.origin=window.location.origin,this.admin=a.a.admin,this.titleService.setTitle("About | "+this.admin.name),this.meta.updateTag({name:"robots",content:"index, follow"}),this.meta.updateTag({name:"keywords",content:"about, about ".concat(this.admin.name,", ").concat(this.admin.name)}),this.meta.updateTag({name:"description",content:""+this.admin.about[0]}),this.meta.updateTag({property:"og:url",content:""+this.location}),this.meta.updateTag({property:"og:type",content:"website"}),this.meta.updateTag({property:"og:title",content:"About | "+this.admin.name}),this.meta.updateTag({property:"og:description",content:""+this.admin.about[0]}),this.meta.updateTag({property:"og:image",content:this.origin+"/assets/logo/featured_logo.png"}),this.meta.updateTag({property:"og:image:secure_url",content:this.origin+"/assets/logo/featured_logo.png"})}return _createClass(t,[{key:"ngOnInit",value:function(){this.rellax=new c.a(".rellax")}},{key:"ngOnDestroy",value:function(){this.rellax.destroy()}}]),t}(),C.\u0275fac=function(t){return new(t||C)(l.Pb(s.d),l.Pb(s.c))},C.\u0275cmp=l.Jb({type:C,selectors:[["app-about"]],decls:24,vars:2,consts:[[1,"main-about"],[1,"about"],[1,"container"],[1,"row","heading"],[1,"col-lg-8","col-md-7","col-sm-12","col-xs-12","pb-4"],[1,"about-header"],["data-rellax-speed","0","data-rellax-tablet-speed","0","data-rellax-xs-speed","0","data-rellax-mobile-speed","0",1,"rellax"],[1,"animate__animated","animate__fadeInUp",2,"animation-delay",".3s"],[1,"data-maindata"],["style","animation-delay:.6s ;","class","animate__animated animate__fadeInUp",4,"ngFor","ngForOf"],[1,"col-lg-4","col-md-5","col-sm-12","col-xs-12"],[1,"animate__animated","animate__fadeInUp",2,"animation-delay",".6s"]],template:function(t,e){1&t&&(l.Sb(0,"div",0),l.Qb(1,"app-top-loader-line"),l.Sb(2,"div",1),l.Sb(3,"div",2),l.Sb(4,"div",3),l.Sb(5,"div",4),l.Qb(6,"app-heading"),l.Sb(7,"div",5),l.Sb(8,"div",6),l.Sb(9,"p",7),l.zc(10,"Hii, I'm"),l.Qb(11,"br"),l.Sb(12,"span"),l.zc(13),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Sb(14,"div",8),l.Sb(15,"div"),l.yc(16,_,2,1,"p",9),l.Rb(),l.Rb(),l.Qb(17,"div"),l.Rb(),l.Sb(18,"div",10),l.Sb(19,"div"),l.Qb(20,"app-education"),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Sb(21,"div"),l.Qb(22,"app-image-gallery"),l.Rb(),l.Rb(),l.Rb(),l.Qb(23,"app-footer")),2&t&&(l.Fb(13),l.Bc("",e.admin.name,","),l.Fb(3),l.kc("ngForOf",e.admin.about))},directives:[m.a,d.a,o.i,f,u,h.a],styles:[".about[_ngcontent-%COMP%]{padding-top:var(--compo-padding-top);padding-bottom:var(--compo-padding-bottom)}.about[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:2.188rem;font-weight:600;letter-spacing:2px;font-family:Orelega_One,Times New Roman,Times,serif,apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;color:var(--theme-color-primary);text-transform:uppercase}.about[_ngcontent-%COMP%]   .about-header[_ngcontent-%COMP%]{padding:15px;background-color:var(--theme-background-color-secondary);border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px;margin-bottom:20px;box-shadow:2px 2px 4px 0 rgba(0,0,0,.2)}.about[_ngcontent-%COMP%]   .about-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.about[_ngcontent-%COMP%]   .data-maindata[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:justify}"]}),C)}],y=((O=function t(){_classCallCheck(this,t)}).\u0275mod=l.Nb({type:O}),O.\u0275inj=l.Mb({factory:function(t){return new(t||O)},imports:[[i.f.forChild(M)],i.f]}),O),x=n("33kn"),v=((P=function t(){_classCallCheck(this,t)}).\u0275mod=l.Nb({type:P}),P.\u0275inj=l.Mb({factory:function(t){return new(t||P)},imports:[[o.b,y,x.a]]}),P)}}]);