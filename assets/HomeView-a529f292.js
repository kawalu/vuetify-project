import{Y as f,Z as V,a0 as h,a1 as n,a3 as _,a4 as a,c as t,V as C,ag as k,ab as l,af as u,ah as x,ai as S,aj as g,ak as b,K as B,al as w,ae as v,x as P,am as N,a2 as i,a6 as p,a7 as R,an as L,ao as T}from"./index-9966b410.js";import{V as A}from"./VContainer-a496f058.js";import{V as $,a as m}from"./VRow-8f5357b4.js";const j={__name:"ProductCard",props:{_id:{type:String,default:()=>""},category:{type:String,default:()=>""},description:{type:String,default:()=>""},image:{type:String,default:()=>""},name:{type:String,default:()=>""},price:{type:Number,default:()=>0},sell:{type:Boolean,default:()=>!0}},setup(e){const c=e,o=f(),s=V(),d=async()=>{try{const{data:r}=await v.post("/users/cart",{product:c._id,quantity:1});s.cart=r.result}catch(r){o({text:r.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}};return(r,z)=>{const y=h("RouterLink");return n(),_(w,null,{default:a(()=>[t(C,{src:e.image,cover:"",height:"200"},null,8,["src"]),t(k,null,{default:a(()=>[t(y,{to:"/products/"+e._id,class:"text-primary text-decoration-none"},{default:a(()=>[l(u(e.name),1)]),_:1},8,["to"])]),_:1}),t(x,null,{default:a(()=>[l("$"+u(e.price),1)]),_:1}),t(S,null,{default:a(()=>[g("pre",null,u(e.description),1)]),_:1}),t(b,null,{default:a(()=>[t(B,{color:"primary","prepend-icon":"mdi-cart",onClick:d},{default:a(()=>[l("加入購物車")]),_:1})]),_:1})]),_:1})}}},q=g("h1",null,"購物網",-1),H={__name:"HomeView",setup(e){const c=f(),o=P([]);return(async()=>{try{const{data:s}=await N.get("/products");o.value.push(...s.result)}catch(s){c({text:s.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}})(),(s,d)=>(n(),i(p,null,[t(A,null,{default:a(()=>[t($,null,{default:a(()=>[t(m,{cols:"12"},{default:a(()=>[q]),_:1}),(n(!0),i(p,null,R(o.value,r=>(n(),_(m,{cols:"12",md:"6",lg:"3",key:r._id},{default:a(()=>[t(j,L(T(r)),null,16)]),_:2},1024))),128))]),_:1})]),_:1}),l("> ")],64))}};export{H as default};
