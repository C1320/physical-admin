(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8e70ea46"],{"054b":function(t,e,a){"use strict";a("0661")},"0661":function(t,e,a){},"28a5":function(t,e,a){a("214f")("split",2,function(t,e,s){"use strict";var i=a("aae3"),r=s,n=[].push,l="split",c="length",o="lastIndex";if("c"=="abbc"[l](/(b)*/)[1]||4!="test"[l](/(?:)/,-1)[c]||2!="ab"[l](/(?:ab)*/)[c]||4!="."[l](/(.?)(.?)/)[c]||"."[l](/()()/)[c]>1||""[l](/.?/)[c]){var u=void 0===/()??/.exec("")[1];s=function(t,e){var a=String(this);if(void 0===t&&0===e)return[];if(!i(t))return r.call(a,t,e);var s,l,h,d,p,g=[],v=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),_=0,m=void 0===e?4294967295:e>>>0,f=new RegExp(t.source,v+"g");u||(s=new RegExp("^"+f.source+"$(?!\\s)",v));while(l=f.exec(a)){if(h=l.index+l[0][c],h>_&&(g.push(a.slice(_,l.index)),!u&&l[c]>1&&l[0].replace(s,function(){for(p=1;p<arguments[c]-2;p++)void 0===arguments[p]&&(l[p]=void 0)}),l[c]>1&&l.index<a[c]&&n.apply(g,l.slice(1)),d=l[0][c],_=h,g[c]>=m))break;f[o]===l.index&&f[o]++}return _===a[c]?!d&&f.test("")||g.push(""):g.push(a.slice(_)),g[c]>m?g.slice(0,m):g}}else"0"[l](void 0,0)[c]&&(s=function(t,e){return void 0===t&&0===e?[]:r.call(this,t,e)});return[function(a,i){var r=t(this),n=void 0==a?void 0:a[e];return void 0!==n?n.call(a,r,i):s.call(String(r),a,i)},s]})},"860d":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-input",{staticClass:"input-with-select",attrs:{clearable:"",placeholder:"请输入体检编号"},model:{value:t.examData.RequisitionId,callback:function(e){t.$set(t.examData,"RequisitionId",e)},expression:"examData.RequisitionId"}},[a("el-select",{attrs:{slot:"prepend",placeholder:"请选择",value:"111"},slot:"prepend"},[a("el-option",{attrs:{label:"餐厅名",value:"1"}}),a("el-option",{attrs:{label:"订单号",value:"2"}}),a("el-option",{attrs:{label:"用户电话",value:"3"}})],1),a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:t.search},slot:"append"})],1),a("div",{staticStyle:{position:"absolute",top:"200px"}},[a("el-row",[a("el-button",{attrs:{type:"primary",icon:"el-icon-s-promotion"},on:{click:t.getBaseData}},[t._v("生成")])],1),a("el-row",[a("el-button",{attrs:{type:"danger",icon:"el-icon-check"},on:{click:t.saveBaseData}},[t._v("保存")])],1)],1),a("div",{staticStyle:{position:"absolute",top:"200px",right:"50px"}},[a("el-row",[a("el-button",{attrs:{type:"primary",icon:"el-icon-right"},on:{click:t.toNext}},[t._v("下一步")])],1)],1),a("h1",[t._v("体检结果基础信息")]),a("table",{staticClass:"base-info"},[a("tr",[a("td",[t._v("体检执行编号")]),a("td",{staticClass:" height-30",attrs:{colspan:"8"}},[t._v(t._s(t.examData.RequisitionId))])]),a("tr",[a("td",{staticClass:"center height-30"},[t._v("姓名")]),a("td",{staticClass:"center height-30",staticStyle:{width:"200px"},attrs:{colspan:"2"}},[t._v(t._s(t.examData.name))]),a("td",{staticClass:"center height-30",staticStyle:{height:"30px"}},[t._v("性别")]),a("td",{staticClass:"center height-30"},[t._v(t._s(2===t.examData.gender?"女":"男"))]),a("td",{staticClass:"center height-30",staticStyle:{height:"30px"}},[t._v("年龄")]),a("td",{staticClass:"center height-30",staticStyle:{width:"300px"},attrs:{colspan:"3"}},[t._v(t._s(t.examData.birthday))])]),a("tr",[a("td",{staticClass:"center height-30"},[t._v("证件号码")]),a("td",{staticClass:"center height-30",attrs:{colspan:"4"}},[t._v(t._s(t.examData.idCard))]),a("td",{staticClass:"center height-30"},[t._v("体检时间")]),a("td",{staticClass:"center height-30",attrs:{colspan:"3"}},[t._v(t._s(t.examData.VisitingDate))])]),a("tr",[a("td",{staticClass:"center height-30"},[t._v("联系地址")]),a("td",{staticClass:"center height-30",staticStyle:{width:"400px"},attrs:{colspan:"4"}},[t._v(t._s(t.examData.cur_address))]),a("td",[t._v("联系电话")]),a("td",{staticClass:"center height-30",staticStyle:{width:"300px"},attrs:{colspan:"3"}},[t._v(t._s(t.examData.phone))])]),a("tr",[a("td",{attrs:{rowspan:"6"}},[t._v("一般状况")]),a("td",{staticClass:"center height-30"},[t._v("身高")]),a("td",{staticClass:"center",attrs:{colspan:"2"}},[t._v(t._s(t.examData.Height)+" cm")]),a("td",{staticClass:"center height-30"},[t._v("体重")]),a("td",{staticClass:"center height-30",attrs:{colspan:"2"}},[t._v(t._s(t.examData.Weight)+" kg")]),a("td",{staticClass:"top",attrs:{rowspan:"6",colspan:"2"}})]),a("tr",[a("td",{staticClass:"center height-30"},[t._v(" 体质指数（BMI")]),a("td",{staticClass:"center height-30"},[t._v(t._s(""+t.examData.BMI)+"kg")]),a("td",{staticClass:"center height-30"},[t._v("参考值：")]),a("td",{attrs:{colspan:"2"}},[t._v("体质指数正常值：18.5～23.9")])]),a("tr",[a("td",{staticClass:"center height-30"},[t._v("心率")]),a("td",{staticClass:"center height-30"},[t._v(t._s(""+t.examData.heart_rate)+"次/分钟")]),a("td",{staticClass:"center height-30"},[t._v("体温")]),a("td",{staticClass:"center height-30"},[t._v(t._s(""+t.examData.Temperature)+"℃")])]),a("tr"),a("tr",[a("td",{staticClass:"center height-30"},[t._v(" 血压")]),a("td",{staticClass:"center height-30",attrs:{colspan:"4"}},[t._v(t._s(t.examData.LSBP+"/"+t.examData.LDBP)+"mmHg")])]),t._m(0),t._m(1),a("tr"),a("tr"),t._m(2),a("tr"),a("tr"),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),a("tr"),t._m(8),t._m(9),t._m(10),t._m(11),a("tr"),t._m(12),t._m(13),t._m(14),t._m(15),t._m(16)]),a("div",{staticClass:"tips"},[t._v("* 根据体检执行编号和血清检查执行编号可追溯检验医师相关信息及打印原始报告单据")]),a("el-dialog",{attrs:{title:t.dialogOptions.dialogTitle,visible:t.dialogOptions.DialogShow,width:"30%",center:""},on:{"update:visible":function(e){t.$set(t.dialogOptions,"DialogShow",e)}}},[a("el-input",{attrs:{clearable:"",type:"textarea",placeholder:t.dialogOptions.dialogPlaceholder},on:{input:t.inputChange},model:{value:t.dialogInput,callback:function(e){t.dialogInput=e},expression:"dialogInput"}}),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogOptions.DialogShow=!1}}},[t._v("取 消")]),a("el-button",{attrs:{disabled:t.dialogInputDisable,type:"primary"},on:{click:t.dialogClicked}},[t._v("确 定")])],1)],1)],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticClass:"center height-30",attrs:{colspan:"6"}},[t._v("血压正常值：舒张压：60-90mmHg 收缩压：90-140mmHg")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{attrs:{rowspan:"3"}},[t._v("心电图")]),a("td",{staticStyle:{height:"200px"},attrs:{colspan:"6"}},[t._v("血压正常值：舒张压：60-90mmHg 收缩压：90-140mmHg")]),a("td",{staticClass:"top",attrs:{rowspan:"3",colspan:"2"}},[t._v("医师意见: 可遵医嘱口服维"),a("br"),t._v("生素B族")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{attrs:{rowspan:"3"}},[t._v("B超")]),a("td",{staticStyle:{height:"200px"},attrs:{colspan:"6"}},[t._v("血压正常值：舒张压：60-90mmHg 收缩压：90-140mmHg")]),a("td",{staticClass:"top",attrs:{rowspan:"3",colspan:"2"}},[t._v("医师意见: 可遵医嘱口服维"),a("br"),t._v("生素B族")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{attrs:{rowspan:"4"}},[t._v("老年人评估")]),a("td",{staticClass:" height-30",attrs:{colspan:"2"}},[t._v("老年人智力评估")]),a("td",{staticClass:"center height-30",attrs:{colspan:"4"}},[t._v("心血管 : 正常")]),a("td",{staticClass:"top",attrs:{rowspan:"4",colspan:"2"}},[t._v("医师意见: 可遵医嘱口服维"),a("br"),t._v("生素B族")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticClass:" height-30",attrs:{colspan:"2"}},[t._v("老年人中医体质辨识")]),a("td",{staticClass:"center height-30",attrs:{colspan:"4"}},[t._v("心血管 : 正常")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticClass:" height-30",attrs:{colspan:"2"}},[t._v("老年人自理评估")]),a("td",{staticClass:"center height-30",attrs:{colspan:"4"}},[t._v("心血管 : 正常")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticClass:" height-30",attrs:{colspan:"2"}},[t._v("老年人自理评估")]),a("td",{staticClass:"center height-30",attrs:{colspan:"4"}},[t._v("心血管 : 觉哦啊红烧婚纱后送哈怂上海好好")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{attrs:{rowspan:"5"}},[t._v("内科")]),a("td",{staticClass:" height-30",staticStyle:{height:"30px"},attrs:{colspan:"3"}}),a("td",{staticClass:" height-30",staticStyle:{height:"30px"},attrs:{colspan:"3"}}),a("td",{staticClass:"top",attrs:{rowspan:"5",colspan:"2"}},[a("br"),t._v("时吃药;脂肪肝,平时注意运动,"),a("br")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticClass:" height-30",attrs:{colspan:"3"}}),a("td",{staticClass:" height-30",attrs:{colspan:"3"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticClass:" height-30",attrs:{colspan:"3"}}),a("td",{staticClass:" height-30",attrs:{colspan:"3"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticClass:" height-30",attrs:{colspan:"6"}},[t._v("其他 : 无")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{attrs:{rowspan:"4"}},[t._v("外科")]),a("td",{staticClass:" height-30",attrs:{colspan:"2"}},[t._v("皮肤 : 正常")]),a("td",{staticClass:" height-30",attrs:{colspan:"2"}},[t._v("四肢 : 正常")]),a("td",{staticClass:" height-30",attrs:{colspan:"2"}},[t._v("淋巴 : 无")]),a("td",{staticClass:"top",attrs:{rowspan:"4",colspan:"2"}},[t._v("医生意见 : 建议去专业健身中"),a("br"),t._v("心在教练指导下进行减重训练")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticClass:" height-30",attrs:{colspan:"2"}},[t._v("关节 : 正常")]),a("td",{staticClass:" height-30",attrs:{colspan:"2"}},[t._v("脊柱 : 正常")]),a("td",{staticClass:" height-30",attrs:{colspan:"2"}},[t._v("甲状腺 : 正常")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticClass:" height-30",attrs:{colspan:"6"}},[t._v("其他 : 无")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",[t._v("化验检验")]),a("td",{staticClass:" height-30",attrs:{colspan:"3"}},[t._v("肝功能(ALT) : 正常")]),a("td",{staticClass:" height-30",attrs:{colspan:"5"}},[t._v("乙型肝炎表面抗原(HBsAg) : 阴性")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",[t._v("胸部透视")]),a("td",{staticClass:" height-30",attrs:{colspan:"3"}},[t._v("正常")]),a("td",{staticClass:" height-30",attrs:{colspan:"5"}},[t._v("其他 : 无")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticClass:"center height-30"},[t._v("审核医生")]),a("td",{staticClass:"center height-30",attrs:{colspan:"8"}})])}],r=(a("6b54"),a("7f7f"),a("f751"),a("eaee")),n={name:"base-info",data:function(){return{dialogOptions:{},dialogInput:"",dialogInputDisable:!1,visible:!1,examData:{RequisitionId:"21101700009",org_code:"",Height:"",Weight:"",name:"",birthday:"",gender:"",idCard:"",VisitingDate:"",cur_address:"",phone:"",BMI:"",heart_rate:"",Temperature:"36.5",LSBP:"",LDBP:""}}},created:function(){this.visible=this.$route.params.visible},methods:{toNext:function(){this.$router.push({name:"examMockUrine",params:{id:this.examData.RequisitionId}})},search:function(){var t=this;this.$get("/get-cache-base-exam",{RequisitionId:this.examData.RequisitionId}).then(function(e){200===e.data.status?t.examData=Object.assign({},t.examData,e.data.result):t.messageTip(e.data.msg)})},saveBaseData:function(){var t=this;this.examData.Operator=this.$store.state.BaseStore.user.name,console.log(this.examData),this.$post("/insertbaseexam",this.examData).then(function(e){t.messageTip(e.data.msg)})},getBaseData:function(){var t=this;this.$http.get("/api/base-exam").then(function(e){t.$confirm("是否覆盖现有数据?","提示",{confirmButtonText:"覆盖",cancelButtonText:"不了",type:"warning"}).then(function(){t.examData.LDBP=e.data.LDBP,t.examData.LSBP=e.data.LSBP,t.examData.Weight=e.data.Weight.toString(),t.examData.Height=e.data.Height.toString(),t.examData.heart_rate=e.data.heart_rate.toString(),t.examData.Temperature=e.data.Temperature.toString(),t.examData.VisitingDate=e.data.VisitingDate,t.examData.BMI=Object(r["b"])(e.data.Height,e.data.Weight)}).catch(function(){t.examData.LDBP=e.data.LDBP,t.examData.LSBP=e.data.LSBP,t.examData.heart_rate=e.data.heart_rate.toString(),t.examData.Temperature=e.data.Temperature.toString(),t.examData.VisitingDate=e.data.VisitingDate,t.examData.BMI=Object(r["b"])(e.data.Height,e.data.Weight)})})},inputChange:function(){},messageTip:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"error";this.$message({showClose:!0,message:t,type:e})},dialogClicked:function(){},refuse:function(){this.dialogOptions={dialogTitle:"备注",dialogPlaceholder:"请输入备注内容",DialogShow:!0}},success:function(){var t=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$message({type:"success",message:"操作成功!"})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})}}},l=n,c=(a("054b"),a("0c7c")),o=Object(c["a"])(l,s,i,!1,null,"731a0c10",null);e["default"]=o.exports},aae3:function(t,e,a){var s=a("d3f4"),i=a("2d95"),r=a("2b4c")("match");t.exports=function(t){var e;return s(t)&&(void 0!==(e=t[r])?!!e:"RegExp"==i(t))}},ba5f:function(t,e,a){"use strict";a.d(e,"g",function(){return s}),a.d(e,"i",function(){return i}),a.d(e,"h",function(){return r}),a.d(e,"b",function(){return n}),a.d(e,"e",function(){return l}),a.d(e,"a",function(){return c}),a.d(e,"f",function(){return o}),a.d(e,"c",function(){return u}),a.d(e,"d",function(){return h});a("6b54"),a("28a5");function s(){return[{label:"测试机构1",value:"45060001"},{label:"测试机构2",value:"45060002"},{label:"测试机构3",value:"45060003"},{label:"测试机构4",value:"45060004"},{label:"测试机构5",value:"45060005"},{label:"测试机构6",value:"45060006"}]}function i(){return{userName:[{required:!0,message:"请输入用户名"}],idCard:[{required:!0,message:"请输入身份证"}],age:[{required:!0,message:"字段值不可为空"}],nation:[{required:!0,message:"请选择民族"}],phone:[{required:!0,message:"亲输入手机号"}],gender:[{required:!0,message:"请选择性别"}],birthday:[{required:!0,message:"请选择出生日期"}],live_type:[{required:!0,message:"请选择居住类型"}],blood_type:[{required:!0,message:"请选择血型"}],person_type:[{required:!0,message:"请选择建档类型"}],address:[{required:!0,message:"请输入居住地址"}]}}function r(){return[{label:"老年人",value:"1"},{label:"孕产妇",value:"2"},{label:"0-6岁儿童",value:"3"},{label:"5—7到64岁",value:"4"}]}function n(){return[{label:"男",value:1},{label:"女",value:2}]}function l(){return[{label:"户籍",value:1},{label:"非户籍",value:2}]}function c(){return[{label:"A型",value:1},{label:"B型",value:2},{label:"O型",value:3},{label:"AB型",value:4},{label:"不详",value:5}]}function o(){return[{label:"布依族",value:"布依族"},{label:"汉族",value:"汉族"},{label:"回族",value:"回族"},{label:"蒙古族",value:"蒙古族"},{label:"朝鲜族",value:"朝鲜族"},{label:"满族",value:"满族"},{label:"苗族",value:"苗族"},{label:"瑶族",value:"瑶族"},{label:"藏族",value:"藏族"},{label:"侗族",value:"侗族"},{label:"维吾尔族",value:"维吾尔族"},{label:"壮族",value:"壮族"},{label:"布依族",value:"彝族"}]}function u(t){var e,a=t.split("-"),s=a[0],i=a[1],r=a[2],n=new Date,l=n.getFullYear(),c=n.getMonth()+1,o=n.getDate();if(l===s)e=0;else{var u=l-s;if(u>0)if(c===i){var h=o-r;e=h<0?u-1:u}else{var d=c-i;e=d<0?u-1:u}else e=-1}return e.toString()+"岁"}function h(t){var e;switch(t){case"1":case 1:e="男";break;case"2":case 2:e="女";break;default:e="未知";break}return e}},eaee:function(t,e,a){"use strict";function s(t){return s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function i(t){return i="function"===typeof Symbol&&"symbol"===s(Symbol.iterator)?function(t){return s(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":s(t)},i(t)}a("6b54");var r=a("ba5f");function n(t,e){var a=t/100;return e/(a*a).toFixed(1).toString()}function l(t){for(var e in t)t[e].ids=(parseInt(e)+1).toString(),t[e].gender=Object(r["d"])(t[e].gender),t[e].birthday=Object(r["c"])(t[e].birthday),0===t[e].apply_status?(t[e].apply_tag="待审核",t[e].apply_tag_style="primary"):1===t[e].apply_status?(t[e].apply_tag="已审核",t[e].apply_tag_style="success"):-1===t[e].apply_status&&(t[e].apply_tag="未通过",t[e].apply_tag_style="danger");return t}function c(t){var e,a,s,r=i(t);if("array"===r)e=[];else{if("object"!==r)return t;e={}}if("array"===r){for(a=0,s=t.length;a<s;a++)e.push(c(t[a]));return e}if("object"===r){for(a in t)e[a]=c(t[a]);return e}}a.d(e,"b",function(){return n}),a.d(e,"c",function(){return l}),a.d(e,"a",function(){return c})}}]);
//# sourceMappingURL=chunk-8e70ea46.4967e1c5.js.map