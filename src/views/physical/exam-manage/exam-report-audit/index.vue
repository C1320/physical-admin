<template>
  <div style="margin-top: 15px" class="exam-box">
        <div>
      <el-row style="position: absolute;right: 50px;z-index: 999999">
        <el-button type="primary" @click="success" icon="el-icon-check" circle></el-button>
        <el-button type="danger" @click="refuse" icon="el-icon-close" circle></el-button>
      </el-row>
    </div>
    <div class="exam-result-card">
      <el-tabs type="border-card">
        <el-tab-pane label="基础信息">
          <base-exam :examData="examData" ></base-exam>
        </el-tab-pane>
        <el-tab-pane label="生化检查">
          <other-exam :examData="examData"></other-exam>
        </el-tab-pane>
      </el-tabs>
    </div>
    <el-dialog
      :title="dialogOptions.dialogTitle"
      :visible.sync="dialogOptions.DialogShow"
      width="30%"
      center>
      <el-input clearable @input="inputChange" type="textarea" v-model="dialogInput"
                :placeholder="dialogOptions.dialogPlaceholder"></el-input>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogOptions.DialogShow = false">取 消</el-button>
    <el-button :disabled="dialogInputDisable" type="primary" @click="dialogClicked">确 定</el-button>
  </span>
    </el-dialog>
  </div>

</template>

<script>
import baseExam from './components/base/index'
import otherExam from './components/other/index'

export default {
  name: 'index',
  data() {
    return {
      examData:{
      },
      dialogInput:'',
      dialogInputDisable:true,
      dialogOptions:{},
        RequisitionId: '',
    }
  },
  created() {
    this.RequisitionId = this.$route.params.id
    this.search()
  },
  methods:{
    search(){
      this.$get('/query_exam_base_and_urine_by_rid',{
        RequisitionId:this.RequisitionId
      }).then(res=>{
        if(res.data.status===200){
          this.examData = res.data.result
          console.log(222,this.examData)
        }else {
          this.messageTip(res.data.msg)
        }
      })
    },
    submit(status=1,remark=''){ //提交审核
      if(this.RequisitionId){
        this.$get('/exam_result_audit_by_rid',{
          RequisitionId:this.RequisitionId,
          status:status,
          remark:remark
        }).then(res=> {
            this.messageTip(res.data.msg, res.data.status === 200 ? "success" : 'error')
            setTimeout(()=>{
              this.$router.replace({
                name:'uploadPhysicalExam'
              })
            },1500)
      })
        }else {
          this.messageTip("体检编码为空！")
        }
       this.dialogOptions={}

    },
    inputChange(val){ //校验输入
      this.dialogInputDisable = !val;
      console.log(this.dialogInput)
    },
    dialogClicked(){
      this.submit(-1,this.dialogInput)
    },
    refuse() {//不通过
      this.dialogOptions = {
        dialogTitle: '备注',
        dialogPlaceholder: '请输入备注内容',
        DialogShow: true
      }
    },
    success() { // 通过
      this.$confirm('是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'info'
      }).then(() => {
         this.submit(1)
      }).catch(() => {

      });
    },
    messageTip(msg, type = 'error') {
      this.$message({
        showClose: true,
        message: msg,
        type: type
      })
    },
  },
  components: {
    baseExam,
    otherExam
  }

}
</script>

<style scoped>
.exam-result-card{
  overflow: auto;
  height: 580px;
}
.exam-box {
  height: 600px;
}

/deep/ .input-with-select {
  width: 50%;
  margin-left: 25%;
  margin-bottom: 25px;
}

/deep/ .el-select .el-input {

}

.input-with-select .el-input-group__prepend {
  background-color: #fff;
}

</style>
