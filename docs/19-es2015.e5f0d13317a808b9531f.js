(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"40V1":function(t,e,n){"use strict";n.r(e),n.d(e,"PortfolioModule",(function(){return j}));var o=n("ofXK"),i=n("tyNb"),r=n("AytR"),c=n("fXoL"),a=n("jhN1"),d=n("F5nt"),s=n("yA8E"),g=n("i7Yu"),l=n("X2BB"),m=n("3Pt+"),b=n("F2rd"),p=n("xJkR"),h=n("cZdB");function u(t,e){if(1&t){const t=c.Tb();c.Sb(0,"a",7),c.ac("click",(function(){c.sc(t);const n=e.$implicit;return c.ec().setTag(n.tag)})),c.zc(1),c.Rb()}if(2&t){const t=e.$implicit;c.Fb(1),c.Ac(t.name)}}function f(t,e){if(1&t&&(c.Sb(0,"div",15),c.Sb(1,"div",16),c.Sb(2,"div",17),c.Sb(3,"div",18),c.Qb(4,"img",19),c.Rb(),c.Qb(5,"div",20),c.Rb(),c.Sb(6,"div",21),c.Sb(7,"small"),c.zc(8),c.Rb(),c.Sb(9,"h2"),c.zc(10),c.fc(11,"slice"),c.Rb(),c.Sb(12,"p"),c.zc(13),c.Rb(),c.Rb(),c.Rb(),c.Rb()),2&t){const t=e.$implicit;c.Fb(1),c.mc("routerLink","/project/",t.slug,""),c.Fb(3),c.lc("src",t.featuredImage,c.uc),c.lc("alt",t.url),c.Fb(4),c.Cc("",t.developer,", ",t.timestamp,"."),c.Fb(2),c.Ac(c.hc(11,7,t.title,0,100)),c.Fb(3),c.Ac(t.description)}}function P(t,e){if(1&t&&(c.Sb(0,"div",2),c.yc(1,f,14,11,"div",14),c.fc(2,"filter"),c.Rb()),2&t){const t=c.ec();c.Fb(1),c.kc("ngForOf",c.gc(2,1,t.projectPost,t.searchText))}}const x=function(){return{"border-radius":"0px",height:"100%","background-color":"gray"}},M=function(){return{"border-radius":"0",height:"0.625rem",width:"70%","background-color":"gray"}},C=function(){return{"border-radius":"0",height:"0.625rem","background-color":"gray"}};function O(t,e){1&t&&(c.Sb(0,"div",27),c.Sb(1,"div",23),c.Sb(2,"div",17),c.Sb(3,"div",18),c.Qb(4,"ngx-skeleton-loader",24),c.Rb(),c.Rb(),c.Sb(5,"div",21),c.Qb(6,"ngx-skeleton-loader",24),c.Qb(7,"ngx-skeleton-loader",28),c.Rb(),c.Rb(),c.Rb()),2&t&&(c.Fb(4),c.kc("theme",c.nc(3,x)),c.Fb(2),c.kc("theme",c.nc(4,M)),c.Fb(1),c.kc("theme",c.nc(5,C)))}const y=function(){return{"border-radius":"0",height:"0.75rem",width:"70%","background-color":"gray"}},_=function(){return{"border-radius":"0",height:"0.938rem","background-color":"gray"}},w=function(){return{"border-radius":"0",height:"0.938rem",width:"40%","background-color":"gray"}},k=function(){return{"border-radius":"0",height:"0.75rem","background-color":"gray"}};function v(t,e){if(1&t&&(c.Sb(0,"div",2),c.Sb(1,"div",22),c.Sb(2,"div",23),c.Sb(3,"div",17),c.Sb(4,"div",18),c.Qb(5,"ngx-skeleton-loader",24),c.Rb(),c.Rb(),c.Sb(6,"div",21),c.Qb(7,"ngx-skeleton-loader",24),c.Qb(8,"ngx-skeleton-loader",24),c.Qb(9,"ngx-skeleton-loader",24),c.Qb(10,"ngx-skeleton-loader",25),c.Rb(),c.Rb(),c.Rb(),c.yc(11,O,8,6,"div",26),c.Rb()),2&t){const t=c.ec();c.Fb(5),c.kc("theme",c.nc(6,x)),c.Fb(2),c.kc("theme",c.nc(7,y)),c.Fb(1),c.kc("theme",c.nc(8,_)),c.Fb(1),c.kc("theme",c.nc(9,w)),c.Fb(1),c.kc("theme",c.nc(10,k)),c.Fb(1),c.kc("ngForOf",t.loader)}}const S=[{path:"",component:(()=>{class t{constructor(t,e,n){this.titleService=t,this.appService=e,this.meta=n,this.admin=r.a.admin,this.origin=window.location.origin,this.location=window.location.href,this.projectPost=[],this.loader=["","",""],this.month=["","January","February","March","April","May","June","July","August","September","October","November","December"],this.titleService.setTitle("Blog | "+this.admin.name),this.meta.updateTag({name:"robots",content:"index, follow"}),this.meta.updateTag({name:"keywords",content:`blog, blog ${this.admin.name}, ${this.admin.name}`}),this.meta.updateTag({name:"description",content:"This blog is about web programming, data science and machine learning."}),this.meta.updateTag({property:"og:url",content:""+this.location}),this.meta.updateTag({property:"og:type",content:"website"}),this.meta.updateTag({property:"og:title",content:"Blog | "+this.admin.name}),this.meta.updateTag({property:"og:description",content:""}),this.meta.updateTag({property:"og:image",content:this.origin+"/assets/logo/featured_logo.png"}),this.meta.updateTag({property:"og:image:secure_url",content:this.origin+"/assets/logo/featured_logo.png"})}ngOnInit(){this.getProjects(),this.getProjectCategory()}setTag(t){this.searchText=t}getProjectCategory(){this.projectCategorySub=this.appService.readProjectCategory().subscribe(t=>{t&&(this.category=t.data)},t=>{})}getProjects(){this.projectSub=this.appService.readProjectPost().subscribe(t=>{t&&(this.loader=[],this.projectPost=t.data,this.projectPost.forEach(t=>{const e=new Date(t.timestamp);t.timestamp=`${e.getDate()-1} ${this.month[e.getMonth()+1]} ${e.getFullYear()}`}))},t=>{})}ngOnDestroy(){this.projectCategorySub.unsubscribe(),this.projectSub.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(c.Pb(a.d),c.Pb(d.a),c.Pb(a.c))},t.\u0275cmp=c.Jb({type:t,selectors:[["app-portfolio"]],decls:22,vars:4,consts:[[1,"show-blog"],[1,"container"],[1,"row"],[1,"col-12","mobile-no-padding"],[1,"secondary-header"],[1,"link-item"],["drag-scroll-y-disabled","false"],[3,"click"],[3,"click",4,"ngFor","ngForOf"],[1,"col-12"],[1,"searchbox"],["type","text","autocomplete","off","name","search","placeholder","search chat",3,"ngModel","ngModelChange"],[1,"col-lg-12","col-md-12","col-sm-12","col-xs-12"],["class","row",4,"ngIf"],["class","item-main col-lg-4 col-md-6 col-sm-6 col-xs-12 pb-md-5 pb-sm-4 pb-0",4,"ngFor","ngForOf"],[1,"item-main","col-lg-4","col-md-6","col-sm-6","col-xs-12","pb-md-5","pb-sm-4","pb-0"],[1,"item",3,"routerLink"],[1,"item-image"],[1,"image-section"],["loading","lazy","width","100%","height","100%",3,"src","alt"],[1,"image-bg"],[1,"item-text"],[1,"item-main","col-lg-4","col-md-6","col-sm-6","col-xs-12","pb-md-5","pb-sm-4","pb-0","d-md-block","d-none"],[1,"item"],["animation","progress",3,"theme"],["animation","progress","count","3",3,"theme"],["class","col-lg-4 col-md-6 col-sm-6 col-xs-12 pb-md-5 pb-sm-4 pb-0",4,"ngFor","ngForOf"],[1,"col-lg-4","col-md-6","col-sm-6","col-xs-12","pb-md-5","pb-sm-4","pb-0"],["animation","progress","count","2",3,"theme"]],template:function(t,e){1&t&&(c.Sb(0,"section"),c.Qb(1,"app-top-loader-line"),c.Sb(2,"div",0),c.Sb(3,"div",1),c.Sb(4,"div",2),c.Sb(5,"div",3),c.Sb(6,"div",4),c.Sb(7,"div",5),c.Sb(8,"drag-scroll",6),c.Sb(9,"a",7),c.ac("click",(function(){return e.setTag("")})),c.zc(10,"All"),c.Rb(),c.yc(11,u,2,1,"a",8),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Sb(12,"div",2),c.Sb(13,"div",9),c.Qb(14,"app-heading"),c.Rb(),c.Rb(),c.Sb(15,"div",10),c.Sb(16,"input",11),c.ac("ngModelChange",(function(t){return e.searchText=t})),c.Rb(),c.Rb(),c.Sb(17,"div",2),c.Sb(18,"div",12),c.yc(19,P,3,4,"div",13),c.yc(20,v,12,11,"div",13),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Qb(21,"app-footer")),2&t&&(c.Fb(11),c.kc("ngForOf",e.category),c.Fb(5),c.kc("ngModel",e.searchText),c.Fb(3),c.kc("ngIf",e.projectPost&&e.projectPost.length>0),c.Fb(1),c.kc("ngIf",e.loader&&e.loader.length>0))},directives:[s.a,g.a,o.i,l.a,m.a,m.g,m.i,o.j,b.a,i.c,p.a],pipes:[h.a,o.n],styles:[".show-blog[_ngcontent-%COMP%]{padding-top:0;padding-bottom:0}.item[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.063rem;font-weight:400;letter-spacing:1px;text-transform:capitalize;outline:none;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:2;display:-webkit-box;-webkit-box-orient:vertical;word-wrap:break-word;margin-bottom:0}.item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:none!important}.item[_ngcontent-%COMP%]:hover   h2[_ngcontent-%COMP%]{color:var(--theme-color-primary);cursor:pointer}.item[_ngcontent-%COMP%]{z-index:0!important;cursor:pointer;overflow:hidden;outline:none;text-decoration:none;width:calc(100% + 30px);margin-left:-15px;margin-right:-15px}.item[_ngcontent-%COMP%]:hover{opacity:.9}small[_ngcontent-%COMP%]{margin-bottom:10px}.item-text[_ngcontent-%COMP%]{padding:.938rem 15px;height:6.25rem;overflow:hidden}.item-image[_ngcontent-%COMP%]{position:relative;width:100%;padding-top:56.25%;border:none;overflow:hidden;cursor:pointer}.image-bg[_ngcontent-%COMP%]{z-index:4;background-color:grey}.image-bg[_ngcontent-%COMP%], .image-section[_ngcontent-%COMP%]{border:none;position:absolute;top:0;left:0;bottom:0;right:0}.image-section[_ngcontent-%COMP%]{z-index:5}img[_ngcontent-%COMP%]{outline:none}.secondary-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:left;width:calc(100% + 30px);padding-top:20px;padding-bottom:20px;margin-left:-15px;margin-right:-15px;cursor:-webkit-grab;cursor:grab}.secondary-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--theme-color-secondary);padding:8px 10px;margin:0 7.5px;border-radius:20px;-webkit-border-radius:20px;-moz-border-radius:20px;-ms-border-radius:20px;-o-border-radius:20px;background:var(--theme-background-color-secondary)}.secondary-header[_ngcontent-%COMP%]   .link-item[_ngcontent-%COMP%]{width:100%;overflow:hidden}.secondary-header[_ngcontent-%COMP%]   .link-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child{margin-left:15px}.secondary-header[_ngcontent-%COMP%]   .link-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child{margin-right:15px}.secondary-header[_ngcontent-%COMP%]   drag-scroll[_ngcontent-%COMP%]{width:100%}.searchbox[_ngcontent-%COMP%]{position:absolute;opacity:0}@media only screen and (min-width:576px){.item[_ngcontent-%COMP%]{width:100%;margin-left:0;margin-right:0;transition:.1s ease;-webkit-transition:.1s ease;-moz-transition:.1s ease;-ms-transition:.1s ease;-o-transition:.1s ease}.item[_ngcontent-%COMP%]:active{transform:scale(.98);-webkit-transform:scale(.98);-moz-transform:scale(.98);-ms-transform:scale(.98);-o-transform:scale(.98)}.item-text[_ngcontent-%COMP%]{padding-left:0;padding-right:0}.show-blog[_ngcontent-%COMP%]{padding-top:var(--compo-padding-top);padding-bottom:var(--compo-padding-bottom)}.item-image[_ngcontent-%COMP%]{border-radius:8px;-webkit-border-radius:8px;-moz-border-radius:8px;-ms-border-radius:8px;-o-border-radius:8px}.secondary-header[_ngcontent-%COMP%]{width:100%;margin-left:0;margin-right:0}.secondary-header[_ngcontent-%COMP%]   .link-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child{margin-left:0}.secondary-header[_ngcontent-%COMP%]   .link-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child{margin-right:0}}@media only screen and (min-width:768px){.item-main[_ngcontent-%COMP%]:first-child{max-width:100%!important;flex:100%}.item-main[_ngcontent-%COMP%]:first-child   .item[_ngcontent-%COMP%]{display:flex;height:175px;overflow:hidden}.item-main[_ngcontent-%COMP%]:first-child   .item[_ngcontent-%COMP%]   .item-image[_ngcontent-%COMP%]{width:calc(50% - 15px);padding-top:25.25%}.item-main[_ngcontent-%COMP%]:first-child   .item[_ngcontent-%COMP%]   .item-text[_ngcontent-%COMP%]{width:calc(50% + 15px);padding:0 0 0 30px;height:100%}.item-main[_ngcontent-%COMP%]:first-child   .item[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2.188rem}.item-main[_ngcontent-%COMP%]:first-child   .item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:block!important;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:2;display:-webkit-box!important;-webkit-box-orient:vertical;word-wrap:break-word}}@media only screen and (min-width:992px){.item-main[_ngcontent-%COMP%]:first-child   .item[_ngcontent-%COMP%]{height:235px}.item-main[_ngcontent-%COMP%]:first-child   .item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{-webkit-line-clamp:4}}@media only screen and (min-width:1200px){.item-main[_ngcontent-%COMP%]:first-child   .item[_ngcontent-%COMP%]{height:280px}.item-main[_ngcontent-%COMP%]:first-child   .item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{-webkit-line-clamp:5}}"]}),t})()}];let R=(()=>{class t{}return t.\u0275mod=c.Nb({type:t}),t.\u0275inj=c.Mb({factory:function(e){return new(e||t)},imports:[[i.f.forChild(S)],i.f]}),t})();var F=n("33kn");let j=(()=>{class t{}return t.\u0275mod=c.Nb({type:t}),t.\u0275inj=c.Mb({factory:function(e){return new(e||t)},imports:[[o.b,R,F.a,p.b,h.b,g.b,m.f]]}),t})()}}]);