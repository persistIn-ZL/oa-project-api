var X=Object.defineProperty,Y=Object.defineProperties;var Z=Object.getOwnPropertyDescriptors;var U=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;var j=(e,s,r)=>s in e?X(e,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[s]=r,B=(e,s)=>{for(var r in s||(s={}))x.call(s,r)&&j(e,r,s[r]);if(U)for(var r of U(s))ee.call(s,r)&&j(e,r,s[r]);return e},K=(e,s)=>Y(e,Z(s));import{g as te,l as ae}from"./index.65e2a609.js";import{g as $,s as oe,l as le,u as se,a as ne,d as de,b as ie}from"./dictFormat.31da75fc.js";import{_ as re,a as ce,b as ue}from"./index.da4ff793.js";import{u as me}from"./useDrawer.8b3a90cf.js";import{F as pe}from"./index.ab3e0a2d.js";import{u as fe}from"./useI18n.25a437e0.js";import{d as ge,c as O,r as S,a as R,f as ve,a6 as be,q as u,a3 as he,t as E,y as ye,z as A,k as a,x as l,a4 as V,S as k,R as h,v as Se,D as ke,n as M,M as N}from"./ant-design-vue.27440fdb.js";const{t:d}=fe(),Ce=[{title:d("routes.dict.dictLabel"),dataIndex:"dictLabel",key:"dictLabel",align:"center"},{title:d("routes.dict.dictValue"),dataIndex:"dictValue",key:"dictValue",align:"center"},{title:d("routes.dict.dictSort"),dataIndex:"dictSort",key:"dictSort",align:"center"},{title:d("routes.dict.status"),dataIndex:"status",key:"status",align:"center",slots:{customRender:"status"}},{title:d("routes.dict.remark"),dataIndex:"remark",key:"remark",align:"center"},{title:d("routes.dict.createdAt"),dataIndex:"createdAt",key:"createdAt",align:"center"},{title:d("routes.dict.action"),key:"action",align:"center",slots:{customRender:"action"}}],Te=ge({components:{FormSearch:pe},setup(){const e=O(()=>ce().loading),s=ue(),r=S(),L=S([]),C=S([]),I={dictName:[{required:!0,message:d("routes.dict.dictNameCannotBeRmpty"),trigger:"blur"}],dictLabel:[{required:!0,message:d("routes.dict.dictTypeCannotBeRmpty"),trigger:"blur"}],status:[{required:!0,message:d("routes.dict.\u72B6\u6001\u4E0D\u80FD\u4E3A\u7A7A"),trigger:"change"}]},y=R([{type:"select",label:d("routes.dict.dictType"),name:"dictType",value:void 0,placeholder:d("routes.dict.dictTypePlaceholder"),normalizer:{value:"dictType",label:"dictName"},options:r},{type:"input",label:d("routes.dict.dictLabel"),name:"dictLabel",value:"",placeholder:d("routes.dict.dictLabelPlaceholder")},{type:"select",label:d("routes.dict.status"),name:"status",value:void 0,placeholder:d("routes.dict.statusPlaceholder"),normalizer:{value:"dictValue",label:"dictLabel"},options:C}]),o=R({pageNum:1,pageSize:10,dictLabel:"",dictType:"",status:""}),m=t=>{p.value.current=1,o.pageNum=p.value.current,o.dictType=t.dictType,o.dictLabel=t.dictLabel,o.status=t.status,f(o)},D=t=>{y[0].value=void 0,M(()=>{o.dictLabel=t.dictLabel,o.status=t.status,y[0].value=o.dictType,f(o)})},b=S([]),p=S({total:0,current:1,pageSize:10,showSizeChanger:!0,showTotal:t=>`\u5171 ${t} \u6761`}),T=t=>{p.value=t,o.pageNum=p.value.current,o.pageSize=p.value.pageSize,f(o)},c=R({selectedRowKeys:[]}),F=O(()=>c.selectedRowKeys.length>0),_=t=>{console.log("selectedRowKeys changed: ",t),c.selectedRowKeys=t},f=t=>{le(t).then(g=>{console.log(g),b.value=g.data.rows,p.value.total=g.data.count,c.selectedRowKeys=[]})},z=()=>{te(s.params.id).then(t=>{o.dictType=t.data.dictType,y[0].value=t.data.dictType,console.log(o),f(o)}),ae().then(t=>{r.value=t.data.rows})},v=S(),i=R({id:void 0,dictType:"",dictLabel:"",dictValue:"",dictSort:1,status:"1",remark:""}),{open:n,drawerTitle:w}=me();console.log(n);const q=()=>{i.id=void 0,v.value.resetFields(),console.log(v),n.value=!1},Q=()=>{console.log(i),v.value.validate().then(()=>{i.id?se(i).then(t=>{N.success(t.message),i.id=void 0,v.value.resetFields(),n.value=!1,f(o)}):ne(i).then(t=>{N.success(t.message),i.id=void 0,v.value.resetFields(),n.value=!1,f(o)})}).catch(t=>{console.log("error",t)})},G=t=>{const g=t.id||c.selectedRowKeys;de(g).then(()=>{(g.length&&g.length===b.value.length||b.value.length===1)&&Math.ceil(p.value.total/o.pageSize)===o.pageNum&&o.pageNum>1&&o.pageNum--,f(o),N.success(d("common.deleteSuccess"))})},H=t=>{console.log(t),N.success(d("common.cancelDelete"))},J=()=>{n.value=!0,w.value=d("common.add"),i.dictType=o.dictType},W=t=>{ie(t.id).then(g=>{n.value=!0,i.dictType=o.dictType,w.value=d("common.update"),M(()=>{Object.keys(i).forEach(P=>{i[P]=g.data[P]})})})};return ve(async()=>{console.log(o),C.value=await $("sys_normal_disable"),L.value=await $("sys_normal_disable"),L.value.forEach(t=>{t.label=t.dictLabel,t.value=t.dictValue}),console.log(C),z()}),K(B({t:d,loading:e,queryParams:o,formFields:y,handleQuery:m,handleReset:D,dataList:b,columns:Ce,pagination:p,handleTableChange:T,selectDictLabel:oe,statusOptions:C},be(c)),{hasSelected:F,onSelectChange:_,typeOptions:r,open:n,drawerTitle:w,formState:i,labelCol:{span:6},wrapperCol:{span:18},rules:I,formRef:v,handleClose:q,handleSubmit:Q,confirm:G,cancel:H,handleAdd:J,handleUpdate:W,disableOptions:L})}}),we={class:"p-4"},Le={class:"mb-3"};function De(e,s,r,L,C,I){const y=u("form-search"),o=u("a-button"),m=u("a-col"),D=u("a-popconfirm"),b=u("a-row"),p=u("a-table"),T=u("a-input"),c=u("a-form-item"),F=u("a-input-number"),_=u("a-radio-group"),f=u("a-textarea"),z=u("a-form"),v=u("a-drawer"),i=he("has-permi");return E(),ye("div",we,[A("div",Le,[a(y,{formFields:e.formFields,onSearch:e.handleQuery,onReset:e.handleReset},null,8,["formFields","onSearch","onReset"])]),a(b,{gutter:10,class:"mb-2"},{default:l(()=>[V(a(m,null,{default:l(()=>[a(o,{color:"success",onClick:e.handleAdd},{default:l(()=>[k(h(e.t("common.add")),1)]),_:1},8,["onClick"])]),_:1},512),[[i,["system:dictData:add"]]]),V(a(m,null,{default:l(()=>[a(D,{title:e.t("common.confirmDelete"),"ok-text":e.t("common.okText"),"cancel-text":e.t("common.cancelText"),onConfirm:e.confirm,onCancel:e.cancel},{default:l(()=>[a(o,{disabled:!e.hasSelected,color:"error"},{default:l(()=>[k(h(e.t("common.delete")),1)]),_:1},8,["disabled"])]),_:1},8,["title","ok-text","cancel-text","onConfirm","onCancel"])]),_:1},512),[[i,["system:dictData:delete"]]])]),_:1}),a(p,{loading:e.loading,rowKey:"id","row-selection":{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange},columns:e.columns,"data-source":e.dataList,pagination:e.pagination,onChange:e.handleTableChange},{status:l(({record:n})=>[A("span",null,h(e.selectDictLabel(e.statusOptions,n.status)),1)]),action:l(({record:n})=>[A("span",null,[V(a(o,{type:"link",color:"success",class:"mr-3",onClick:w=>e.handleUpdate(n)},{default:l(()=>[k(h(e.t("common.update")),1)]),_:2},1032,["onClick"]),[[i,["system:dictData:update"]]]),a(D,{title:e.t("common.confirmDelete"),"ok-text":e.t("common.okText"),"cancel-text":e.t("common.cancelText"),onConfirm:w=>e.confirm(n),onCancel:e.cancel},{default:l(()=>[V(a(o,{type:"link",color:"error"},{default:l(()=>[k(h(e.t("common.delete")),1)]),_:1},512),[[i,["system:dictData:delete"]]])]),_:2},1032,["title","ok-text","cancel-text","onConfirm","onCancel"])])]),_:1},8,["loading","row-selection","columns","data-source","pagination","onChange"]),a(v,{width:"50%",title:e.drawerTitle,placement:"right",visible:e.open,"onUpdate:visible":s[6]||(s[6]=n=>e.open=n),maskClosable:!1,onClose:e.handleClose},{default:l(()=>[e.open?(E(),Se(z,{key:0,ref:"formRef",model:e.formState,rules:e.rules,"label-col":e.labelCol,"wrapper-col":e.wrapperCol},{default:l(()=>[a(b,null,{default:l(()=>[a(m,{span:12},{default:l(()=>[a(c,{label:e.t("routes.dict.dictName"),name:"dictType"},{default:l(()=>[a(T,{disabled:"",value:e.formState.dictType,"onUpdate:value":s[0]||(s[0]=n=>e.formState.dictType=n),placeholder:e.t("routes.dict.dictTypePlaceholder")},null,8,["value","placeholder"])]),_:1},8,["label"])]),_:1}),a(m,{span:12},{default:l(()=>[a(c,{label:e.t("routes.dict.dictLabel"),name:"dictLabel"},{default:l(()=>[a(T,{value:e.formState.dictLabel,"onUpdate:value":s[1]||(s[1]=n=>e.formState.dictLabel=n),placeholder:e.t("routes.dict.dictLabelPlaceholder")},null,8,["value","placeholder"])]),_:1},8,["label"])]),_:1}),a(m,{span:12},{default:l(()=>[a(c,{label:e.t("routes.dict.dictValue"),name:"dictValue"},{default:l(()=>[a(T,{value:e.formState.dictValue,"onUpdate:value":s[2]||(s[2]=n=>e.formState.dictValue=n),placeholder:e.t("routes.dict.dictValuePlaceholder")},null,8,["value","placeholder"])]),_:1},8,["label"])]),_:1}),a(m,{span:12},{default:l(()=>[a(c,{label:e.t("routes.dict.dictSort"),name:"dictSort"},{default:l(()=>[a(F,{class:"!w-[100%]",value:e.formState.dictSort,"onUpdate:value":s[3]||(s[3]=n=>e.formState.dictSort=n),placeholder:e.t("routes.dict.dictSortPlaceholder")},null,8,["value","placeholder"])]),_:1},8,["label"])]),_:1}),a(m,{span:12},{default:l(()=>[a(c,{label:e.t("routes.dict.status"),name:"status"},{default:l(()=>[a(_,{value:e.formState.status,"onUpdate:value":s[4]||(s[4]=n=>e.formState.status=n),options:e.disableOptions},null,8,["value","options"])]),_:1},8,["label"])]),_:1}),a(m,{span:12},{default:l(()=>[a(c,{label:e.t("routes.dict.remark"),name:"remark"},{default:l(()=>[a(f,{rows:3,value:e.formState.remark,"onUpdate:value":s[5]||(s[5]=n=>e.formState.remark=n),placeholder:e.t("routes.dict.remarkPlaceholder")},null,8,["value","placeholder"])]),_:1},8,["label"])]),_:1}),a(m,{span:24},{default:l(()=>[a(c,null,{default:l(()=>[a(o,{type:"primary",class:"mr-3",onClick:e.handleSubmit},{default:l(()=>[k(h(e.t("common.okText")),1)]),_:1},8,["onClick"]),a(o,{onClick:e.handleClose},{default:l(()=>[k(h(e.t("common.cancelText")),1)]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules","label-col","wrapper-col"])):ke("",!0)]),_:1},8,["title","visible","onClose"])])}var Pe=re(Te,[["render",De]]);export{Pe as default};
