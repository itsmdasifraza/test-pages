(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{n4HB:function(t,n,e){"use strict";e.r(n),e.d(n,"SingleBlogModule",(function(){return _}));var o=e("ofXK"),i=e("tyNb"),s=e("AytR"),r=e("fXoL"),l=e("KMqJ"),d=e("jhN1"),b=e("yA8E"),a=e("7Nr3"),g=e("F2rd"),c=e("xJkR"),p=e("jxiw");function m(t,n){if(1&t&&(r.Sb(0,"article"),r.Sb(1,"div",18),r.Qb(2,"div",19),r.fc(3,"safe"),r.Rb(),r.Rb()),2&t){const t=r.ec(2);r.Fb(2),r.kc("innerHtml",r.gc(3,1,t.singlePost.article,"html"),r.tc)}}function h(t,n){1&t&&(r.Sb(0,"div",20),r.Sb(1,"h1"),r.zc(2,"Related Post"),r.Rb(),r.Rb())}function y(t,n){if(1&t&&(r.Sb(0,"div",21),r.Sb(1,"div",22),r.Sb(2,"div",23),r.Sb(3,"div",12),r.Qb(4,"img",13),r.Rb(),r.Qb(5,"div",14),r.Rb(),r.Sb(6,"div",24),r.Sb(7,"small"),r.zc(8),r.Rb(),r.Sb(9,"h6"),r.zc(10),r.Rb(),r.Rb(),r.Rb(),r.Rb()),2&t){const t=n.$implicit;r.Fb(1),r.lc("routerLink","/blog/"+t.slug),r.Fb(3),r.lc("src",t.featuredImage,r.uc),r.lc("alt",t.slug),r.Fb(4),r.Cc("",t.author,", ",t.timestamp,"."),r.Fb(2),r.Ac(t.title)}}function u(t,n){if(1&t&&(r.Sb(0,"div",9),r.Sb(1,"article"),r.Sb(2,"h1"),r.zc(3),r.Rb(),r.Sb(4,"div",10),r.Sb(5,"small"),r.zc(6),r.Rb(),r.Rb(),r.Sb(7,"div",11),r.Sb(8,"div",12),r.Qb(9,"img",13),r.Rb(),r.Qb(10,"div",14),r.Rb(),r.Rb(),r.yc(11,m,4,4,"article",15),r.yc(12,h,3,0,"div",16),r.Sb(13,"div",2),r.yc(14,y,11,6,"div",17),r.Rb(),r.Rb()),2&t){const t=r.ec();r.Fb(3),r.Ac(t.singlePost.title),r.Fb(3),r.Cc("",t.singlePost.author,", Last Updated ",t.singlePost.timestamp,"."),r.Fb(3),r.lc("src",t.singlePost.featuredImage,r.uc),r.lc("alt",t.singlePost.url),r.Fb(2),r.kc("ngIf",t.singlePost&&t.singlePost.article),r.Fb(1),r.kc("ngIf",t.relatedPost&&t.relatedPost.length>0),r.Fb(2),r.kc("ngForOf",t.relatedPost)}}const f=function(){return{"border-radius":"0",height:"15px","background-color":"gray"}},k=function(){return{"border-radius":"0",height:"15px",width:"60%","background-color":"gray"}},v=function(){return{"border-radius":"0",height:"100%","background-color":"gray"}},P=function(){return{"border-radius":"0",height:"13px","background-color":"gray"}},x=function(){return{"border-radius":"0",height:"13px",width:"90%","background-color":"gray"}},w=function(){return{"border-radius":"0",height:"13px",width:"83%","background-color":"gray"}},S=function(){return{"border-radius":"0",height:"13px",width:"100%","background-color":"gray"}};function R(t,n){1&t&&(r.Sb(0,"div",9),r.Sb(1,"div"),r.Qb(2,"ngx-skeleton-loader",25),r.Qb(3,"ngx-skeleton-loader",25),r.Qb(4,"ngx-skeleton-loader",25),r.Sb(5,"div",11),r.Sb(6,"div",12),r.Qb(7,"ngx-skeleton-loader",26),r.Rb(),r.Rb(),r.Sb(8,"div"),r.Qb(9,"ngx-skeleton-loader",27),r.Qb(10,"ngx-skeleton-loader",25),r.Qb(11,"ngx-skeleton-loader",27),r.Qb(12,"ngx-skeleton-loader",25),r.Qb(13,"ngx-skeleton-loader",27),r.Qb(14,"ngx-skeleton-loader",25),r.Qb(15,"ngx-skeleton-loader",27),r.Qb(16,"ngx-skeleton-loader",25),r.Rb(),r.Rb(),r.Rb()),2&t&&(r.Fb(2),r.kc("theme",r.nc(12,f)),r.Fb(1),r.kc("theme",r.nc(13,f)),r.Fb(1),r.kc("theme",r.nc(14,k)),r.Fb(3),r.kc("theme",r.nc(15,v)),r.Fb(2),r.kc("theme",r.nc(16,P)),r.Fb(1),r.kc("theme",r.nc(17,x)),r.Fb(1),r.kc("theme",r.nc(18,P)),r.Fb(1),r.kc("theme",r.nc(19,w)),r.Fb(1),r.kc("theme",r.nc(20,P)),r.Fb(1),r.kc("theme",r.nc(21,x)),r.Fb(1),r.kc("theme",r.nc(22,P)),r.Fb(1),r.kc("theme",r.nc(23,S)))}const M=[{path:"",component:(()=>{class t{constructor(t,n,e,o,i){this.blogService=t,this.activatedRoute=n,this.router=e,this.title=o,this.meta=i,this.admin=s.a.admin,this.origin=window.location.origin,this.loader=!0,this.location="",this.relatedPost=[],this.month=["","January","February","March","April","May","June","July","August","September","October","November","December"]}ngOnInit(){var t=document.getElementById("scrollable");this.activatedRoute.params.subscribe(n=>{window.scroll({behavior:"smooth",top:0}),t.scroll({behavior:"smooth",top:0}),setTimeout(()=>{this.singlePost=void 0,this.loader=!0,this.location=window.location.href,this.relatedPost=[],this.getSinglePost(n.id)},500)})}getSinglePost(t){this.postSubscription=this.blogService.readSingleBlogPost(t).subscribe(t=>{if(t){this.loader=!1,this.singlePost=t.data;const n=new Date(this.singlePost.timestamp);this.singlePost.timestamp=`${n.getDate()-1} ${this.month[n.getMonth()+1]} ${n.getFullYear()}`,setTimeout(()=>{let t=document.getElementsByClassName("gist-github-67677");for(let n=0;n<t.length;n++){let e=`<html><body style="margin :0 !important;"><style type="text/css">\n             \n                /* width */\n                ::-webkit-scrollbar {\n                  height: 8px;\n                }\n                \n                /* Track */\n                ::-webkit-scrollbar-track {\n                  background: #303030;\n                }\n                \n                /* Handle */\n                ::-webkit-scrollbar-thumb {\n                  background: #727272;\n                }\n              @media only screen and (max-width : 575px){\n                ::-webkit-scrollbar {\n                  height: 3px;\n                }\n              }\n\n            .gist-meta{\n              display:none !important;\n            }\n            .gist .gist-file , .gist .gist-data {\n              border: none !important;    \n              border-radius: 0 !important;        \n          }\n          .gist .blob-wrapper tr:first-child td {\n            padding-top: 15px !important;\n        }\n        .gist .blob-wrapper tr:last-child td {\n          padding-bottom: 15px !important;\n      }\n            body .gist .highlight {\n              background: #303030;\n          }\n          body .gist .blob-num,\n          body .gist .blob-code-inner,\n          body .gist .highlight,\n          body .gist .pl-enm,\n          body .gist .pl-ko,\n          body .gist .pl-mo,\n          body .gist .pl-mp1 .pl-sf,\n          body .gist .pl-ms,\n          body .gist .pl-pdc1,\n          body .gist .pl-scp,\n          body .gist .pl-smc,\n          body .gist .pl-som,\n          body .gist .pl-va,\n          body .gist .pl-vpf,\n          body .gist .pl-vpu,\n          body .gist .pl-mdr {\n               color: #aab1bf;\n          }\n          body .gist .pl-mb,\n          body .gist .pl-pdb {\n               font-weight: 700;\n          }\n          body .gist .pl-c,\n          body .gist .pl-c span,\n          body .gist .pl-pdc {\n               color: #5b6270;\n               font-style: italic;\n          }\n          body .gist .pl-sr .pl-cce {\n               color: #56b5c2;\n               font-weight: 400;\n          }\n          body .gist .pl-ef,\n          body .gist .pl-en,\n          body .gist .pl-enf,\n          body .gist .pl-eoai,\n          body .gist .pl-kos,\n          body .gist .pl-mh .pl-pdh,\n          body .gist .pl-mr {\n               color: #61afef;\n          }\n          body .gist .pl-ens,\n          body .gist .pl-vi {\n               color: #be5046;\n          }\n          body .gist .pl-enti,\n          body .gist .pl-mai .pl-sf,\n          body .gist .pl-ml,\n          body .gist .pl-sf,\n          body .gist .pl-sr,\n          body .gist .pl-sr .pl-sra,\n          body .gist .pl-src,\n          body .gist .pl-st,\n          body .gist .pl-vo {\n               color: #56b5c2;\n          }\n          body .gist .pl-eoi,\n          body .gist .pl-mri,\n          body .gist .pl-pds,\n          body .gist .pl-pse .pl-s1,\n          body .gist .pl-s,\n          body .gist .pl-s1 {\n               color: #97c279;\n          }\n          body .gist .pl-k,\n          body .gist .pl-kolp,\n          body .gist .pl-mc,\n          body .gist .pl-pde {\n               color: #c578dd;\n          }\n          body .gist .pl-mi,\n          body .gist .pl-pdi {\n               color: #c578dd;\n               font-style: italic;\n          }\n          body .gist .pl-mp,\n          body .gist .pl-stp {\n               color: #818896;\n          }\n          body .gist .pl-mdh,\n          body .gist .pl-mdi,\n          body .gist .pl-mdr {\n               font-weight: 400;\n          }\n          body .gist .pl-mdht,\n          body .gist .pl-mi1 {\n               color: #97c279;\n               background: #020;\n          }\n          body .gist .pl-md,\n          body .gist .pl-mdhf {\n               color: #df6b75;\n               background: #200;\n          }\n          body .gist .pl-corl {\n               color: #df6b75;\n               text-decoration: underline;\n          }\n          body .gist .pl-ib {\n               background: #df6b75;\n          }\n          body .gist .pl-ii {\n               background: #e0c184;\n               color: #fff;\n          }\n          body .gist .pl-iu {\n               background: #e05151;\n          }\n          body .gist .pl-ms1 {\n               color: #aab1bf;\n               background: #373b41;\n          }\n          body .gist .pl-c1,\n          body .gist .pl-cn,\n          body .gist .pl-e,\n          body .gist .pl-eoa,\n          body .gist .pl-eoac,\n          body .gist .pl-eoac .pl-pde,\n          body .gist .pl-kou,\n          body .gist .pl-mm,\n          body .gist .pl-mp .pl-s3,\n          body .gist .pl-mq,\n          body .gist .pl-s3,\n          body .gist .pl-sok,\n          body .gist .pl-sv,\n          body .gist .pl-mb {\n               color: #d19965;\n          }\n          body .gist .pl-enc,\n          body .gist .pl-entc,\n          body .gist .pl-pse .pl-s2,\n          body .gist .pl-s2,\n          body .gist .pl-sc,\n          body .gist .pl-smp,\n          body .gist .pl-sr .pl-sre,\n          body .gist .pl-stj,\n          body .gist .pl-v,\n          body .gist .pl-pdb {\n               color: #e4bf7a;\n          }\n          body .gist .pl-ent,\n          body .gist .pl-entl,\n          body .gist .pl-entm,\n          body .gist .pl-mh,\n          body .gist .pl-pdv,\n          body .gist .pl-smi,\n          body .gist .pl-sol,\n          body .gist .pl-mdh,\n          body .gist .pl-mdi {\n               color: #df6b75;\n          } </style>${t[n].innerHTML}</body></html>`,o=document.createElement("iframe");o.setAttribute("srcdoc",e),o.setAttribute("frameborder","0"),o.setAttribute("style","min-width: 200px;  height: auto;"),o.setAttribute("scrolling","no"),o.setAttribute("seamless","seamless"),o.setAttribute("onload","this.style.height=(this.contentWindow.document.body.scrollHeight+20)+'px';"),t[n].innerHTML="",t[n].appendChild(o)}},0),this.title.setTitle(`${this.singlePost.title} | ${this.admin.name}`),this.meta.updateTag({name:"robots",content:"index, follow"}),this.meta.updateTag({name:"keywords",content:""+this.singlePost.keywords}),this.meta.updateTag({name:"description",content:""+this.singlePost.description}),this.meta.updateTag({property:"og:url",content:""+this.location}),this.meta.updateTag({property:"og:type",content:"article"}),this.meta.updateTag({property:"og:title",content:`${this.singlePost.title} | ${this.admin.name}`}),this.meta.updateTag({property:"og:description",content:""+this.singlePost.description}),this.meta.updateTag({property:"og:image",content:""+this.singlePost.featuredImg}),this.meta.updateTag({property:"og:image:secure_url",content:""+this.singlePost.featuredImg}),this.getRelatedPost(this.singlePost.category)}},t=>{})}getRelatedPost(t){this.relatedSubscription=this.blogService.readRelatedBlogPost(t).subscribe(t=>{t&&t.data.forEach(t=>{if(t.slug!=this.singlePost.slug){const n=new Date(t.timestamp);t.timestamp=`${n.getDate()-1} ${this.month[n.getMonth()+1]} ${n.getFullYear()}`,this.relatedPost.push(t)}})},t=>{})}ngOnDestroy(){this.postSubscription.unsubscribe(),this.relatedSubscription.unsubscribe()}}return t.\u0275fac=function(n){return new(n||t)(r.Pb(l.a),r.Pb(i.a),r.Pb(i.b),r.Pb(d.d),r.Pb(d.c))},t.\u0275cmp=r.Jb({type:t,selectors:[["app-single-blog"]],decls:22,vars:2,consts:[[1,"single-post"],[1,"container"],[1,"row"],[1,"col-lg-8","col-xs-12","pb-sm-4","pb-0"],["class","sing-post",4,"ngIf"],[1,"col-lg-4","col-xs-12","pb-4","d-lg-block","d-none"],[2,"height","100%"],[2,"position","-webkit-sticky","position","sticky","top","90px !important"],[1,"col-lg-12","col-md-6","col-sm-6","col-12"],[1,"sing-post"],[1,"mb-2"],[1,"item-image"],[1,"image-section"],["width","100%","height","100%",3,"src","alt"],[1,"image-bg"],[4,"ngIf"],["class","mb-4",4,"ngIf"],["class","col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 pb-sm-4 pb-0",4,"ngFor","ngForOf"],[1,"art-box"],[3,"innerHtml"],[1,"mb-4"],[1,"col-xl-6","col-lg-6","col-md-6","col-sm-6","col-xs-12","pb-sm-4","pb-0"],[1,"related",3,"routerLink"],[1,"related-img"],[1,"related-content"],[3,"theme"],["animation","progress",3,"theme"],["count","2",3,"theme"]],template:function(t,n){1&t&&(r.Sb(0,"section"),r.Qb(1,"app-top-loader-line"),r.Sb(2,"div",0),r.Sb(3,"div",1),r.Sb(4,"div",2),r.Sb(5,"div",3),r.yc(6,u,15,8,"div",4),r.yc(7,R,17,24,"div",4),r.Rb(),r.Sb(8,"div",5),r.Sb(9,"div",6),r.Sb(10,"div",7),r.Sb(11,"div",2),r.Sb(12,"div",8),r.Sb(13,"div"),r.Qb(14,"app-custom-ad"),r.Rb(),r.Rb(),r.Sb(15,"div",8),r.Sb(16,"div"),r.Qb(17,"app-custom-ad"),r.Rb(),r.Rb(),r.Sb(18,"div",8),r.Sb(19,"div"),r.Qb(20,"app-custom-ad"),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Qb(21,"app-footer")),2&t&&(r.Fb(6),r.kc("ngIf",n.singlePost),r.Fb(1),r.kc("ngIf",1==n.loader))},directives:[b.a,o.j,a.a,g.a,o.i,i.c,c.a],pipes:[p.b],styles:[".single-post[_ngcontent-%COMP%]{position:relative;padding-top:20px;z-index:0}small[_ngcontent-%COMP%]{margin-bottom:10px}.item-image[_ngcontent-%COMP%]{width:calc(100% + 30px);padding-top:56.25%;position:relative;border:none;overflow:hidden;margin:20px -15px 25px}.image-bg[_ngcontent-%COMP%]{z-index:4;background-color:grey}.image-bg[_ngcontent-%COMP%], .image-section[_ngcontent-%COMP%]{border:none;position:absolute;top:0;left:0;bottom:0;right:0}.image-section[_ngcontent-%COMP%]{z-index:5}.related[_ngcontent-%COMP%]{cursor:pointer!important;outline:none;text-decoration:none;overflow:hidden;width:calc(100% + 30px);margin-left:-15px;margin-right:-15px}.related[_ngcontent-%COMP%]   .related-img[_ngcontent-%COMP%]{position:relative;width:100%;padding-top:56.25%;border:none;overflow:hidden;cursor:pointer}.related[_ngcontent-%COMP%]   .image-section[_ngcontent-%COMP%]{z-index:5}.related[_ngcontent-%COMP%]   .image-bg[_ngcontent-%COMP%], .related[_ngcontent-%COMP%]   .image-section[_ngcontent-%COMP%]{border:none;position:absolute;top:0;left:0;bottom:0;right:0}.related[_ngcontent-%COMP%]   .image-bg[_ngcontent-%COMP%]{z-index:4;background-color:grey}.related[_ngcontent-%COMP%]   .related-content[_ngcontent-%COMP%]{padding:.938rem 15px;height:6.25rem;overflow:hidden}.related[_ngcontent-%COMP%]   .related-content[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:1.063rem;font-weight:400;outline:none;text-transform:capitalize;color:var(--theme-color-secondary);margin-bottom:0;letter-spacing:1px;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:2;display:-webkit-box;-webkit-box-orient:vertical;word-wrap:break-word}.related[_ngcontent-%COMP%]:hover   h6[_ngcontent-%COMP%]{color:var(--theme-color-primary)!important}.related[_ngcontent-%COMP%]:hover{opacity:.9}@media only screen and (min-width:576px){.item-image[_ngcontent-%COMP%]{width:100%;margin-left:0;margin-right:0;border-radius:8px;-webkit-border-radius:8px;-moz-border-radius:8px;-ms-border-radius:8px;-o-border-radius:8px}.single-post[_ngcontent-%COMP%]{padding:40px 0}.related[_ngcontent-%COMP%]{width:100%;margin-left:0;margin-right:0;transition:.1s ease;-webkit-transition:.1s ease;-moz-transition:.1s ease;-ms-transition:.1s ease;-o-transition:.1s ease}.related[_ngcontent-%COMP%]:active{transform:scale(.98);-webkit-transform:scale(.98);-moz-transform:scale(.98);-ms-transform:scale(.98);-o-transform:scale(.98)}.related[_ngcontent-%COMP%]   .related-content[_ngcontent-%COMP%]{padding-left:0;padding-right:0}.related[_ngcontent-%COMP%]   .related-img[_ngcontent-%COMP%]{border-radius:8px;-webkit-border-radius:8px;-moz-border-radius:8px;-ms-border-radius:8px;-o-border-radius:8px}}"]}),t})()}];let C=(()=>{class t{}return t.\u0275mod=r.Nb({type:t}),t.\u0275inj=r.Mb({factory:function(n){return new(n||t)},imports:[[i.f.forChild(M)],i.f]}),t})();var O=e("33kn");let _=(()=>{class t{}return t.\u0275mod=r.Nb({type:t}),t.\u0275inj=r.Mb({factory:function(n){return new(n||t)},imports:[[o.b,C,O.a,c.b,p.a]]}),t})()}}]);