<template>
  <div style="margin-top: 15px" class="exam-box">
    <div class="exam-box-item">
      <el-input clearable placeholder="请输入体检编号" v-model="formData.RequisitionId" class="input-with-select">
        <el-select v-model="select" slot="prepend" placeholder="请选择">
          <el-option label="餐厅名" value="1"></el-option>
          <el-option label="订单号" value="2"></el-option>
          <el-option label="用户电话" value="3"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
      </el-input>
      <el-button type="primary" :disabled="testDisable" @click="checkTest" icon="el-icon-postcard">校验</el-button>
      <el-button type="primary" :disabled="testDisable" @click="heightTest" icon="el-icon-postcard">身高测试</el-button>
      <el-button type="primary" :disabled="testDisable" @click="weightTest" icon="el-icon-postcard">体重测试</el-button>
      <el-button type="primary" :disabled="testDisable" @click="tempTest" icon="el-icon-postcard">体温测试</el-button>
      <el-button type="primary" :disabled="testDisable" @click="HRTest" icon="el-icon-postcard">心率测试</el-button>
      <el-divider direction="vertical">ddd</el-divider>
      <el-button type="primary" @click="mockData" icon="el-icon-edit">MOCK数据</el-button>
      <el-button type="primary" @click="addExam" icon="el-icon-circle-plus-outline">新增体检</el-button>
    </div>
    <div class="progress">
      <div class="progress-rate">
        <span>进度：</span>
        <el-steps :space="200" :active="stepStatus" finish-status="success">
          <el-step title="身份校验"></el-step>
          <el-step title="身高测试"></el-step>
          <el-step title="体重测试"></el-step>
          <el-step title="体温测试"></el-step>
          <el-step title="心率测试"></el-step>
          <el-step title="待接收"></el-step>
          <el-step title="待保存"></el-step>
          <el-step title="已完成"></el-step>
        </el-steps>
      </div>
    </div>

    <div class="exam-card" v-if="examList">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <div slot="header" class="clearfix">
            <span style="color: blue">{{ message }}</span>
            <el-switch style="padding: 10px 10px"
                       v-model="switchStatus"
                       v-loading="loading"
                       @change="switchChange"
                       active-text="连接">
            </el-switch>
            <el-button icon="el-icon-monitor" style="margin-left: 5%;padding: 3px 0" @click="saveData" type="text">
              保存数据
            </el-button>
            <el-button icon="el-icon-orange" style="margin-left: 10%;padding: 3px 0" @click="confirmOpen(1)"
                       type="text">抑郁评估
            </el-button>
            <el-button icon="el-icon-orange" style="margin-left: 5%;padding: 3px 0" @click="confirmOpen(2)" type="text">
              自理评估
            </el-button>
            <el-button icon="el-icon-orange" style="margin-left: 5%;padding: 3px 0" @click="confirmOpen(3)" type="text">
              智力评估
            </el-button>
            <el-button icon="el-icon-orange" style="margin-left: 5%;padding: 3px 0" @click="confirmOpen(4)" type="text">
              中医药体质
            </el-button>

          </div>
        </div>
        <div class="physical-form">
          <div class="demo-input-suffix">
            姓名：
            <el-tag v-if="baseInfo.name">{{ baseInfo.name }}</el-tag>
          </div>
          <div class="demo-input-suffix">
            性别：
            <el-tag v-if="baseInfo.gender">{{ baseInfo.gender }}</el-tag>
          </div>
          <div class="demo-input-suffix">
            年龄：
            <el-tag v-if="baseInfo.birthday">{{ baseInfo.birthday }}</el-tag>
          </div>
          <div class="demo-input-suffix">
            体检编码：
            <el-tag v-if="baseInfo.RequisitionId">{{ baseInfo.RequisitionId }}</el-tag>
          </div>
          <div class="demo-input-suffix">
            更多：
            <el-button icon="el-icon-monitor" type="text">查看更多</el-button>
          </div>
        </div>
        <el-collapse accordion>
          <el-collapse-item title="基本体检" v-model="formData">
            <div class="item-flex">
              <span style="color: blue;width: 100px"> 1.身高(cm)</span>
              <span
                style="float: right;color: #67C23A;font-size: 1.3rem">{{ `${formData.Height}` }}</span>
              <el-divider></el-divider>
            </div>
            <div class="item-flex">
              <span style="color: blue;width: 100px"> 2.体重(kg)</span>
              <span
                style="float: right;color: #67C23A;font-size: 1.3rem">{{ `${formData.Weight}` }}</span>
              <el-divider></el-divider>
            </div>
            <div class="item-flex">
              <span style="color: blue;width: 100px"> 3.体温(℃)</span>
              <span
                style="float: right;color: #67C23A;font-size: 1.3rem">{{ `${formData.Temperature}` }}</span>
              <el-divider></el-divider>
            </div>
            <div class="item-flex">
              <span style="color: blue;width: 100px"> 4.心率(次/min)</span>
              <span
                style="float: right;color: #67C23A;font-size: 1.3rem">{{ `${formData.heart_rate}` }}</span>
              <el-divider></el-divider>
            </div>
          </el-collapse-item>
          <el-collapse-item :title="item.FeeItemName" :name="item.FeeItemName" v-for="item in examList"
                            :key="item.FeeItemCode" v-if="item.FeeItemCode!=='JB001'">
            <div class="item-flex" v-for="(ite,index) in item.lt" :key="ite.ItemCode">
              <span style="color: blue;width: 100px"> {{ index + 1 }}.{{ ite.ItemName }}</span>
              <span
                style="float: right;color: #67C23A;font-size: 1.3rem">{{ ite.value ? ite.value : '' + '' }}</span>
              <!--                style="float: right;color: #67C23A;font-size: 1.3rem">{{ ite.value+''+ite.ItemName }}</span>-->
              <el-divider></el-divider>
            </div>
          </el-collapse-item>
        </el-collapse>
      </el-card>
      <div class="card">
        <vue-seamless-scroll :data="listData" class="seamless-warp" :class-option="optionSingleHeight">
          <ul class="item">
            <li v-for="item in listData">
              <span class="title" v-text="item.title">

              </span><span class="date" v-text="item.date"></span>
            </li>
          </ul>
        </vue-seamless-scroll>
      </div>
    </div>

  </div>

</template>

<script>
import {MQTT, Utf8ArrayToStr} from "@/utils/MQTT";
import echarts from 'echarts';
import {dashOption} from '@/views/physical/exam-manage/user-exam/echarts'
import {getAge, handlefForMatTime, handleGender} from "@/utils/plugin/utils";

export default {
  name: 'index',
  data() {
    return {
      testDisable: true,
      stepStatus: 0,
      input3: '',
      select: '',
      baseInfo: {
        name: '',
        RequisitionId: '',
        birthday: '',
        creatTime: '',
        cur_address: '',
        gender: '',
        idCard: '',
        org_code: '',
        org_name: '',
        phone: '',
        userId: '',
      },
      examList: [],
      loading: false,
      switchStatus: false,
      message: '建立连接',
      client: '',
      topic: 'send/weight', // 发布主题
      sub: 'toServer', //订阅主题
      input: '',
      formData: {
        RequisitionId: '21101700009',
        Weight: '',
        Height: "",
        Temperature: '',
        heart_rate: '',
        BMI: '',
      },
      listData: []

    }
  },
  created() {
    this.client = this.$store.state.BaseStore.mqttClient
    this.switchStatus = this.$store.state.BaseStore.netConnect
    this.getStoreData();

  },
  mounted() {
    // console.log(handlefForMatTime(new Date()),525)
    // this.test_2()
  },
  methods: {
    checkTest() {
      if (this.client) {
        if (this.formData.RequisitionId) {
          this.mqttSendMsg({
            rid: this.formData.RequisitionId
          },'checkRid')
          console.log('校验测试')
          this.stepStatus = 1
          this.scrollList('校验测试成功')
        } else {
          this.messageTip('条码为空！')
        }
      } else {
        this.messageTip('服务未连接')
      }
    },
    HRTest() {
      if (this.client) {
        this.mqttSendMsg({
          type: '4'
        })
        this.stepStatus = 5
        console.log('心率测试')
         this.scrollList('心率测试')
      } else {
        this.messageTip('服务未连接')
      }

    },
    tempTest() {
      if (this.client) {
        this.mqttSendMsg({
          type: '3'
        })
        this.stepStatus = 4
        console.log('体温测试')
         this.scrollList('体温测试')
      } else {
        this.messageTip('服务未连接')
      }

    },
    weightTest() {
      if (this.client) {
        this.mqttSendMsg({
          type: '1'
        })
        this.stepStatus = 3
        console.log('体重测试')
         this.scrollList('体重测试')
      } else {
        this.messageTip('服务未连接')
      }

    },
    heightTest() {
      if (this.client) {
        this.mqttSendMsg({
          type: '2'
        })
        this.stepStatus = 2
        console.log('身高测试')
         this.scrollList('身高测试')
      } else {
        this.messageTip('服务未连接')
      }

    },
    MqttTip(msg, type = 'success') {
      this.$message({
        message: msg,
        type: type
      });
    },
    noticeMsg() {
      this.$notify({
        title: '成功',
        message: '数据接收成功',
        type: 'success'
      });
    },
    scrollList(title) {
        if (this.listData.length > 50) {
          this.listData = []
        }
        this.listData.push({
          'title': title,
          'date': handlefForMatTime(new Date())
        })
    },
    addExam() {
      this.$emit('add-exam')
    },
    mockData() {
      this.$router.push({name: 'examReportMock'})
    },
    search() {
      this.requestUserExamList()
    },
    saveData() {
      this.$post('/cache-base-exam', this.formData).then(res => {
        this.messageTip(res.data.msg, res.data.status === 200 ? 'success' : 'error')
        if (res.data.status === 200) {
          this.stepStatus = 7
          this.stepStatus = 8
        }
      })
    },
    updateData(params) {
      this.formData.Height = params.height||this.formData.Height;
      this.formData.Weight = params.weight||this.formData.Weight;
      this.formData.heart_rate = params.HR||this.formData.heart_rate;
      this.formData.Temperature = params.temperature||this.formData.Temperature
      this.$store.commit('BaseStore/updateExamList', this.examList)
    },
    requestUserExamList () { // 查询该条码下需要体检的项目大类
      this.$get('/current-exam-list', {
        RequisitionId: this.formData.RequisitionId
      }).then(res => {
        if (res.data.status !== 200) {
          this.messageTip(res.data.msg)
        } else {
          this.baseInfo = Object.assign({}, this.baseInfo, res.data.result)
          this.baseInfo.gender = handleGender(this.baseInfo.gender)
          this.baseInfo.birthday = getAge(this.baseInfo.birthday)
          this.examList = res.data.result.list
          this.$store.commit('BaseStore/updateExamList', this.examList)
          window.sessionStorage.setItem('key', JSON.stringify(res.data.result))
        }
        console.log(res)
      })
    },
    getStoreData() {
      let data = window.sessionStorage.getItem('key');
      if (data) {
        data = JSON.parse(data)
        this.baseInfo = Object.assign({}, this.baseInfo, data)
        this.baseInfo.gender = handleGender(this.baseInfo.gender)
        this.baseInfo.birthday = getAge(this.baseInfo.birthday)
        this.examList = data.list
      }
    },
    messageTip(msg, type = 'error') {
      this.$message({
        showClose: true,
        message: msg,
        type: type
      })
    },
    confirmOpen(type = 0) {
      if (this.baseInfo.birthday && parseInt(this.baseInfo.birthday.slice(0, 2)) < 65) {
        this.$confirm(`当前年龄【${this.baseInfo.birthday}】未满65周岁，是否继续评估？`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          switch (type) {
            case 1:
              this.$router.push({
                name: 'lnr_depression_assess_report',
                params: {id: this.baseInfo.userId, rid: this.baseInfo.RequisitionId}
              })
              break;
            case 2:
              this.$router.push({
                name: 'lnr_self_care_assess_report',
                params: {id: this.baseInfo.userId, rid: this.baseInfo.RequisitionId}
              })
              break;
            case 3:
              this.$router.push({
                name: 'lnr-mental-state-exam-report',
                params: {id: this.baseInfo.userId, rid: this.baseInfo.RequisitionId}
              })
              break;
            case 4:
              this.$router.push({
                name: 'follow-zyyjk-report',
                params: {id: this.baseInfo.userId, rid: this.baseInfo.RequisitionId}
              })
              break;
            default:
              break;
          }
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });
        });
      } else {

      }

    },
    switchChange(status) {
      this.loading = status
      if (status) {
        this.createConnection()
      } else {
        //连接断开
        if (this.client) {
          this.client.end()
          this.testDisable = true
          this.client = ''
        }
        this.$store.commit('BaseStore/updateMqttClient', '')
        this.$store.commit('BaseStore/updateNetConnect')
        this.message = '建立连接'
      }
    },
    // 创建连接
    createConnection() {
      let mqtt = new MQTT({
        clientId: `physical-weight${new Date().getTime()}`
      })

      this.client = mqtt.mqtt_init()
      this.client.on("connect", e => {
        this.message = '连接成功'
        this.loading = false
        this.testDisable = false
        this.$store.commit('BaseStore/updateNetConnect')
        this.$store.commit('BaseStore/updateMqttClient', this.client)
        this.client.subscribe(this.sub, (err) => {
          if (!err) {
            this.message = `连接成功`
            this.scrollList('MQTT连接成功')
            this.MqttTip('连接成功')
          } else {
            this.scrollList('MQTT连接异常')
            this.MqttTip('连接异常', 'error')
          }
        });

      });
      this.client.on("message", (topic, message) => {
        this.noticeMsg()
        this.stepStatus = 6
        console.log(topic, message)
        let data = Utf8ArrayToStr(message)
        console.log(data)
        const {
          params
        } = data
        //this.message = JSON.stringify(data)
        this.updateData(params)
      });
    },
    mqttSendMsg(data, topic = 'controlExam') {
      try {
        this.client.publish(topic, JSON.stringify(data))
        console.log('成功')
        // this.scrollList('发送成功')
      } catch (e) {
        this.MqttTip('发送失败', 'error')
        this.scrollList('发送失败')
      }
    }

  },
  computed: {
    optionSingleHeight() {
      return {
        singleHeight: 30
      }
    }
  }
}
</script>

<style scoped lang="scss">
.exam-box {
  .exam-box-item {
    display: flex;
    margin-left: 0;
    align-items: center;
    justify-content: space-between;
  }

  .progress {
  }

  .input-with-select {
    margin-left: 0;
    width: 30%;
    margin-bottom: 0;
  }
}

.date {
  margin-left: 150px;
}

.seamless-warp {
  height: 229px;
  overflow: hidden;
}

.card {

  .card-item-echarts {
    width: 80%;

    margin-left: 20px;
    background-color: rgba(51, 51, 51, 0.8);
  }

  cursor: pointer;
  width: 50%;
  height: 580px;
  background: rgb(255, 255, 255);
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 255, .2);
  transition: all .2s;
  box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.physical-form {
  display: flex;
  justify-content: space-between;
}

.item-flex {
  display: flex;
  justify-content: space-between;

}


.el-input {
  width: 100px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.exam-card {
  width: 100%;
  height: 580px;
  display: flex;
  justify-content: center;
}

.box-card {
  /*overflow: auto;*/
  width: 100%;
  min-width: 500px;
}
</style>
