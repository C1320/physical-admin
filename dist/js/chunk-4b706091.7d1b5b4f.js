(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b706091"],{"28a5":function(t,e,a){a("214f")("split",2,function(t,e,o){"use strict";var l=a("aae3"),n=o,i=[].push,r="split",s="length",c="lastIndex";if("c"=="abbc"[r](/(b)*/)[1]||4!="test"[r](/(?:)/,-1)[s]||2!="ab"[r](/(?:ab)*/)[s]||4!="."[r](/(.?)(.?)/)[s]||"."[r](/()()/)[s]>1||""[r](/.?/)[s]){var u=void 0===/()??/.exec("")[1];o=function(t,e){var a=String(this);if(void 0===t&&0===e)return[];if(!l(t))return n.call(a,t,e);var o,r,d,p,g,f=[],b=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,m=void 0===e?4294967295:e>>>0,v=new RegExp(t.source,b+"g");u||(o=new RegExp("^"+v.source+"$(?!\\s)",b));while(r=v.exec(a)){if(d=r.index+r[0][s],d>h&&(f.push(a.slice(h,r.index)),!u&&r[s]>1&&r[0].replace(o,function(){for(g=1;g<arguments[s]-2;g++)void 0===arguments[g]&&(r[g]=void 0)}),r[s]>1&&r.index<a[s]&&i.apply(f,r.slice(1)),p=r[0][s],h=d,f[s]>=m))break;v[c]===r.index&&v[c]++}return h===a[s]?!p&&v.test("")||f.push(""):f.push(a.slice(h)),f[s]>m?f.slice(0,m):f}}else"0"[r](void 0,0)[s]&&(o=function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)});return[function(a,l){var n=t(this),i=void 0==a?void 0:a[e];return void 0!==i?i.call(a,n,l):o.call(String(n),a,l)},o]})},"5cce":function(t,e,a){"use strict";a("8105")},"5f1c":function(t,e,a){"use strict";a("6707")},6707:function(t,e,a){},7098:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:t.dialogOptions.dialogTitle,visible:t.show,width:"30%",center:""},on:{"update:visible":function(e){t.show=e}}},[a("el-input",{attrs:{placeholder:t.dialogOptions.dialogPlaceholder},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogOptions.DialogShow=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.dialogClicked}},[t._v("确 定")])],1)],1)},l=[],n={name:"index",data:function(){return{input:"",center:!1}},methods:{dialogClicked:function(){this.dialogOptions.DialogShow=!1}},props:{show:!1,dialogOptions:{}}},i=n,r=a("0c7c"),s=Object(r["a"])(i,o,l,!1,null,"5b2bcc4f",null);e["a"]=s.exports},8105:function(t,e,a){},"8ac0":function(t,e,a){},"9fd5":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-header"},[a("el-page-header",{attrs:{content:t.contentTitle},on:{back:t.goBack}})],1)},l=[],n={name:"",data:function(){return{}},props:["contentTitle"],methods:{goBack:function(){this.$emit("goBack")}},components:{}},i=n,r=(a("5f1c"),a("0c7c")),s=Object(r["a"])(i,o,l,!1,null,"6432757b",null);e["a"]=s.exports},aae3:function(t,e,a){var o=a("d3f4"),l=a("2d95"),n=a("2b4c")("match");t.exports=function(t){var e;return o(t)&&(void 0!==(e=t[n])?!!e:"RegExp"==l(t))}},ba5f:function(t,e,a){"use strict";a.d(e,"g",function(){return o}),a.d(e,"i",function(){return l}),a.d(e,"h",function(){return n}),a.d(e,"b",function(){return i}),a.d(e,"e",function(){return r}),a.d(e,"a",function(){return s}),a.d(e,"f",function(){return c}),a.d(e,"c",function(){return u}),a.d(e,"d",function(){return d});a("6b54"),a("28a5");function o(){return[{label:"测试机构1",value:"45060001"},{label:"测试机构2",value:"45060002"},{label:"测试机构3",value:"45060003"},{label:"测试机构4",value:"45060004"},{label:"测试机构5",value:"45060005"},{label:"测试机构6",value:"45060006"}]}function l(){return{userName:[{required:!0,message:"请输入用户名"}],idCard:[{required:!0,message:"请输入身份证"}],age:[{required:!0,message:"字段值不可为空"}],nation:[{required:!0,message:"请选择民族"}],phone:[{required:!0,message:"亲输入手机号"}],gender:[{required:!0,message:"请选择性别"}],birthday:[{required:!0,message:"请选择出生日期"}],live_type:[{required:!0,message:"请选择居住类型"}],blood_type:[{required:!0,message:"请选择血型"}],person_type:[{required:!0,message:"请选择建档类型"}],address:[{required:!0,message:"请输入居住地址"}]}}function n(){return[{label:"老年人",value:"1"},{label:"孕产妇",value:"2"},{label:"0-6岁儿童",value:"3"},{label:"5—7到64岁",value:"4"}]}function i(){return[{label:"男",value:1},{label:"女",value:2}]}function r(){return[{label:"户籍",value:1},{label:"非户籍",value:2}]}function s(){return[{label:"A型",value:1},{label:"B型",value:2},{label:"O型",value:3},{label:"AB型",value:4},{label:"不详",value:5}]}function c(){return[{label:"布依族",value:"布依族"},{label:"汉族",value:"汉族"},{label:"回族",value:"回族"},{label:"蒙古族",value:"蒙古族"},{label:"朝鲜族",value:"朝鲜族"},{label:"满族",value:"满族"},{label:"苗族",value:"苗族"},{label:"瑶族",value:"瑶族"},{label:"藏族",value:"藏族"},{label:"侗族",value:"侗族"},{label:"维吾尔族",value:"维吾尔族"},{label:"壮族",value:"壮族"},{label:"布依族",value:"彝族"}]}function u(t){var e,a=t.split("-"),o=a[0],l=a[1],n=a[2],i=new Date,r=i.getFullYear(),s=i.getMonth()+1,c=i.getDate();if(r===o)e=0;else{var u=r-o;if(u>0)if(s===l){var d=c-n;e=d<0?u-1:u}else{var p=s-l;e=p<0?u-1:u}else e=-1}return e.toString()+"岁"}function d(t){var e;switch(t){case"1":case 1:e="男";break;case"2":case 2:e="女";break;default:e="未知";break}return e}},de23:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"notice-content",attrs:{id:"notice-content"}},[a("div",{staticClass:"notice-header"},[a("pageHeader",{attrs:{contentTitle:t.contentTitle},on:{goBack:t.goBack}}),a("div",{staticClass:"notice-header-right"},[a("el-dropdown",{attrs:{"split-button":""}},[t._v("\n        选择机构\n        "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},t._l(t.org_list,function(e){return a("el-dropdown-item",{key:e.org_code,attrs:{icon:e.icon}},[t._v(t._s(e.org_name)+"\n          ")])}))],1),a("searchInput",{attrs:{placeholder:t.placeholder},on:{search:t.search}}),a("el-badge",{staticClass:"item",attrs:{value:99,type:"info"}},[a("el-tag",{attrs:{type:"info"}},[t._v("今日处理")])],1),a("el-badge",{staticClass:"item",attrs:{value:1,type:"primary"}},[a("el-tag",{attrs:{type:"primary"}},[t._v("待审核")])],1),a("el-badge",{staticClass:"item",attrs:{value:2,type:"success"}},[a("el-tag",{attrs:{type:"success"}},[t._v("已通过")])],1),a("el-badge",{staticClass:"item",attrs:{value:2,type:"warning"}},[a("el-tag",{attrs:{type:"warning"}},[t._v("未通过")])],1),a("el-badge",{staticClass:"item",attrs:{max:10}},[a("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-refresh-left"},on:{click:t.refreshClicked}},[t._v("\n          刷新\n        ")])],1)],1)],1),a("div",{staticClass:"notice-table"},[a("el-table",{staticClass:"tableBox",staticStyle:{width:"100%"},attrs:{size:"mini",data:t.tableData,border:"",stripe:"","header-cell-style":{"background-color":"#F9F9F9","text-align":"center","font-size":"1rem"},"cell-style":{"text-align":"center","font-size":"1rem"},height:"600px","highlight-current-row":""},on:{"row-dblclick":t.rowDoubleClicked}},[a("el-table-column",{attrs:{fixed:"",prop:"ids",label:"序号",sortable:"",width:"60"}}),a("el-table-column",{attrs:{fixed:"",prop:"name",label:"姓名",sortable:"",width:"130"}}),a("el-table-column",{attrs:{prop:"gender",label:"性别",sortable:"",width:"80"}}),a("el-table-column",{attrs:{prop:"idCard",label:"证件",sortable:"",width:"200"}}),a("el-table-column",{attrs:{prop:"org_name",label:"所属机构",sortable:"",width:"200"}}),a("el-table-column",{attrs:{label:"体检项目",width:"130"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-popover",{attrs:{placement:"right",width:"400",trigger:"hover"}},[a("el-table",{attrs:{data:e.row.apply_type}},[a("el-table-column",{attrs:{width:"150",property:"FeeItemCode",label:"项目编码"}}),a("el-table-column",{attrs:{width:"100",property:"FeeItemName",label:"项目名称"}})],1),a("el-button",{attrs:{slot:"reference",type:"text",size:"small"},slot:"reference"},[t._v("查看")])],1)]}}])}),a("el-table-column",{attrs:{prop:"apply_time",label:"体检时间",sortable:"",width:"200"}}),a("el-table-column",{attrs:{prop:"complete_time",label:"审核时间",sortable:"",width:"200"}}),a("el-table-column",{attrs:{prop:"apply_status",sortable:"",label:"审核状态",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{type:e.row.apply_tag_style,"disable-transitions":""}},[t._v(t._s(e.row.apply_tag)+"\n          ")])]}}])}),a("el-table-column",{attrs:{prop:"operator_name",sortable:"",label:"操作人",width:"100"}}),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[0===e.row.apply_status?a("el-dropdown",{on:{command:t.dropdownCallback}},[a("span",{staticClass:"el-dropdown-link"},[t._v("\n          选择"),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{staticStyle:{color:"green"},attrs:{icon:"el-icon-success",command:{data:e.row,id:1}}},[t._v("同意\n              ")]),a("el-dropdown-item",{attrs:{icon:"el-icon-error",command:{data:e.row,id:-1}}},[t._v("拒绝")])],1)],1):1===e.row.apply_status?a("el-button",{attrs:{icon:"el-icon-remove",type:"success",size:"small"},on:{click:function(a){t.handleClick(e.row)}}},[t._v("\n            撤销\n          ")]):-1===e.row.apply_status?a("el-button",{attrs:{icon:"el-icon-s-help",type:"primary",size:"small"},on:{click:function(a){t.handleClick(e.row)}}},[t._v("复审\n          ")]):t._e()]}}])})],1)],1),a("div",{staticClass:"el-pagination"},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":[20,30,40],"page-size":t.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.userTotal},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),a("el-dialog",{attrs:{title:t.dialogOptions.dialogTitle,visible:t.dialogOptions.DialogShow,width:"30%",center:""},on:{"update:visible":function(e){t.$set(t.dialogOptions,"DialogShow",e)}}},[a("el-input",{attrs:{clearable:"",type:"textarea",placeholder:t.dialogOptions.dialogPlaceholder},on:{input:t.inputChange},model:{value:t.dialogInput,callback:function(e){t.dialogInput=e},expression:"dialogInput"}}),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogOptions.DialogShow=!1}}},[t._v("取 消")]),a("el-button",{attrs:{disabled:t.dialogInputDisable,type:"primary"},on:{click:t.dialogClicked}},[t._v("确 定")])],1)],1)],1)},l=[],n=(a("7f7f"),a("9fd5")),i=a("50b8"),r=(a("8ac0"),a("eaee")),s=a("7098"),c={name:"",data:function(){return{applyId:0,contentTitle:"审核中心",userTotal:0,placeholder:"支持姓名、证件、机构搜索",currentPage:1,pageSize:20,org_code:0,dialogInput:"",dialogInputDisable:!0,show:!1,dialogOptions:{},org_list:[{org_code:"45066",org_name:"测试机构1",icon:"el-icon-first-aid-kit"},{org_code:"45067",org_name:"测试机构2",icon:"el-icon-first-aid-kit"},{org_code:"45068",org_name:"测试机构3",icon:"el-icon-first-aid-kit"},{org_code:"45069",org_name:"测试机构4",icon:"el-icon-first-aid-kit"},{org_code:"45065",org_name:"测试机构5",icon:"el-icon-first-aid-kit"},{org_code:"45063",org_name:"测试机构6",icon:"el-icon-first-aid-kit"}],tableData:[]}},mounted:function(){this.get_apply_list()},methods:{refreshClicked:function(){var t=(new Date).valueOf();this.get_apply_list(t)},inputChange:function(t){console.log(this.dialogInput),this.dialogInputDisable=""===t},dialogClicked:function(){var t=this,e=this.$store.state.BaseStore.user.user_id;this.$get("/update-apply-status",{Id:this.applyId,apply_status:-1,operator_id:e,apply_reason:this.dialogInput}).then(function(e){t.messageTip(e.data.msg,200===e.data.status?"success":"error"),200===e.data.status&&(t.dialogOptions={DialogShow:!1})})},dropdownCallback:function(t){var e=this;this.applyId=t.data.id,1===t.id?this.confirmTip("是否同意".concat(t.data.name,"的申请?")).then(function(t){var a=e.$store.state.BaseStore.user.user_id,o={Id:e.applyId,apply_status:1,operator_id:a};e.getRequest("/update-apply-status",o).then(function(t){e.messageTip(t.data.msg,200===t.data.status?"success":"error")})}).catch(function(){console.log("拒绝")}):-1===t.id&&(this.show=!0,this.dialogOptions={dialogTitle:"说明拒绝原因",dialogPlaceholder:"请输入拒绝原因",DialogShow:!0})},search:function(t){this.currentPage=1,this.pageSize=20,this.$get("/searchApply",{searchText:t,page:this.currentPage,limit:this.pageSize}).then(function(t){console.log(t.data)})},get_apply_list:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.org_code=this.$store.state.BaseStore.user.org_id;var a={};a=0===e?{org_code:this.org_code,page:this.currentPage,limit:this.pageSize}:{org_code:this.org_code,page:this.currentPage,limit:this.pageSize,timestamp:e},this.$get("/applyList",a).then(function(e){console.log(e),200===e.data.status&&(t.userTotal=e.data.result.total,t.tableData=Object(r["c"])(e.data.result.lt))})},handleCurrentChange:function(t){this.currentPage=t,this.get_apply_list()},handleSizeChange:function(t){this.pageSize=t,this.get_apply_list()},rowDoubleClicked:function(t,e,a){console.log(t,e,a)},handleClick:function(t){var e=this,a=this.$store.state.BaseStore.user.user_id,o={Id:t.id,apply_status:0,operator_id:a};this.getRequest("/update-apply-status",o).then(function(t){e.$message({showClose:!0,message:t.data.msg,type:200===t.data.status?"success":"error"})})},toBack:function(){this.$router.go(-1)},tableRowClassName:function(t){t.row;var e=t.rowIndex;return 1===e?"warning-row":3===e?"success-row":""},goBack:function(){this.$router.go(-1)},messageTip:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";this.$message({showClose:!0,message:t,type:e})},confirmTip:function(t){return this.$confirm("".concat(t),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"})},getRequest:function(t,e){return this.$get("/update-apply-status",e)}},components:{pageHeader:n["a"],searchInput:i["a"],selfDialog:s["a"]}},u=c,d=(a("5cce"),a("0c7c")),p=Object(d["a"])(u,o,l,!1,null,"0dcb27b4",null);e["default"]=p.exports},eaee:function(t,e,a){"use strict";function o(t){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function l(t){return l="function"===typeof Symbol&&"symbol"===o(Symbol.iterator)?function(t){return o(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":o(t)},l(t)}a("6b54");var n=a("ba5f");function i(t,e){var a=t/100;return e/(a*a).toFixed(1).toString()}function r(t){for(var e in t)t[e].ids=(parseInt(e)+1).toString(),t[e].gender=Object(n["d"])(t[e].gender),t[e].birthday=Object(n["c"])(t[e].birthday),0===t[e].apply_status?(t[e].apply_tag="待审核",t[e].apply_tag_style="primary"):1===t[e].apply_status?(t[e].apply_tag="已审核",t[e].apply_tag_style="success"):-1===t[e].apply_status&&(t[e].apply_tag="未通过",t[e].apply_tag_style="danger");return t}function s(t){var e,a,o,n=l(t);if("array"===n)e=[];else{if("object"!==n)return t;e={}}if("array"===n){for(a=0,o=t.length;a<o;a++)e.push(s(t[a]));return e}if("object"===n){for(a in t)e[a]=s(t[a]);return e}}a.d(e,"b",function(){return i}),a.d(e,"c",function(){return r}),a.d(e,"a",function(){return s})}}]);
//# sourceMappingURL=chunk-4b706091.7d1b5b4f.js.map