<template>
  <div class="list">
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="index" label="序号" width="35">
      </el-table-column>
      <el-table-column prop="stationName" label="变电站名称" width="80">
      </el-table-column>
      <el-table-column prop="equipName" label="设备名称" width="140">
      </el-table-column>
      <el-table-column prop="equipA" label="设备主人A角" width="65">
      </el-table-column>
      <el-table-column prop="equipB" label="设备主人B角" width="65">
      </el-table-column>
      <el-table-column prop="content" label="设备范围">
      </el-table-column>
      <el-table-column prop="option" label="操作" width="80">
        <template slot-scope="scope">
          <el-button @click="toDetail">调整</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style scoped>
  
</style>

<script>
  export default {
    name: 'login',
    data() {
      return {
        tableData: [{
          index: 1,
          stationName: '500kV曲靖站',
          equipName: '500kV第一、二串间隔、500kVⅠⅡ母线间隔；500kV#1、#2主变一次设备',
          equipA: '李懋',
          equipB: '高红',
          gourp: '500kV三宝巡维中心',
          content: '间隔所有断路器、隔离开关、电流互感器、电压互感器、高压电抗器、避雷器、阻波器、结合滤波器及500kV#1、#2主变本体'
        }, {
          index: 2,
          stationName: '500kV曲靖站',
          equipName: '500kV第三、四、五串间隔一次设备',
          equipA: '高红',
          equipB: '朱金勇',
          gourp: '500kV三宝巡维中心',
          content: '间隔所有断路器、隔离开关、电流互感器、电压互感器、高压电抗器、避雷器、阻波器、结合滤波器等一次设备'
        }, {
          index: 3,
          stationName: '500kV曲靖站',
          equipName: '融冰装置一次设备，#0、#1、#2站用变、35kV电压间隔所有一次设备及500kV 51小室、52小室、35kV35小室',
          equipA: '朱金勇',
          equipB: '李懋',
          gourp: '500kV三宝巡维中心',
          content: '融冰装置一次设备，#0、#1、#2站用变、35kV电压间隔所有断路器、隔离开关、电流互感器、电压互感器、电抗器、避雷器等一次设备及500kV 51小室、52小室、35kV35小室所有保护装置、测控装置、故障录波器、打印机等二次设备'
        }, {
          index: 4,
          stationName: '500kV曲靖站',
          equipName: '220kV第一、二、四串间隔所有一次设备',
          equipA: '马锦波',
          equipB: '王金斌',
          gourp: '500kV三宝巡维中心',
          content: '间隔所有断路器、隔离开关、电流互感器、电压互感器、避雷器、阻波器、结合滤波器等一次设备'
        }, {
          index: 5,
          stationName: '500kV曲靖站',
          equipName: '220kV第五、六、七串间隔所有一设备',
          equipA: '王金斌',
          equipB: '马锦波',
          gourp: '500kV三宝巡维中心',
          content: '间隔所有断路器、隔离开关、电流互感器、电压互感器、避雷器、阻波器、结合滤波器等一次设备'
        }, {
          index: 6,
          stationName: '500kV曲靖站',
          equipName: '直流系统及巡检机器人',
          equipA: '喻国敏',
          equipB: '孙琼仙',
          gourp: '500kV三宝巡维中心',
          content: '直流系统及巡检机器人'
        }, {
          index: 7,
          stationName: '500kV曲靖站',
          equipName: '220kV 21小室、22小室、23小室、',
          equipA: '孙琼仙',
          equipB: '喻国敏',
          gourp: '500kV三宝巡维中心',
          content: '220kV 、21小室、22小室、直流系统、所有保护装置、测控装置、故障录波器、打印机等二次设备'
        }, {
          index: 8,
          stationName: '500kV曲靖站、220kV同乐变电站、110kV阿岗变电站、35kV温泉站、35kV茨营站、35kV水城变电站、',
          equipName: '生产设施',
          equipA: '刘钢',
          equipB: '赵家富',
          gourp: '500kV三宝巡维中心',
          content: '含变电站围墙、构建筑物、地理位置是否存在危及变电站上设备、变电站内外防洪防汛情况、室内通风孔、室内外相连接的电缆进出口处、电缆井电缆层等，可能导致小动物进入室内的防小动物检查点或其他地方；消防灭火器材、火灾报警系统装置'
        }, {
          index: 9,
          stationName: '110kV新田变电站、110kV东山站、110kV越州站、35kV上坡坡站、35kV高家村站',
          equipName: '生产设施',
          equipA: '马锦波',
          equipB: '王金斌',
          gourp: '500kV三宝巡维中心',
          content: '含变电站围墙、构建筑物、地理位置是否存在危及变电站上设备、变电站内外防洪防汛情况、室内通风孔、室内外相连接的电缆进出口处、电缆井电缆层等，可能导致小动物进入室内的防小动物检查点或其他地方；消防灭火器材、火灾报警系统装置'
        }, {
          index: 10,
          stationName: '220kV同乐变电站',
          equipName: '220kV电压等级（区域）及35kV电压等级（区域）所有一、二次设备',
          equipA: '刘任虎',
          equipB: '魏岭',
          gourp: '500kV三宝巡维中心',
          content: '包含区域内的220kV ⅠⅡ组母线、220kV曲同I回线274断路器间隔、220kV曲同II回线273断路器间隔、220kV母联212断路器间隔的断路器、隔离开关、电流互感器、电压互感器、避雷器、母线及相关二次保护、测控装置及35kV区域内的ⅠⅡ组母线，35kV所有断路器、隔离开关、电流互感器、电压互感器、避雷器、电容器及相关二次保护、测控装置'
        }, {
          index: 11,
          stationName: '220kV同乐变电站',
          equipName: '110kV电压等级（区域）所有一、二次设备',
          equipA: '魏岭',
          equipB: '杨雄',
          gourp: '500kV三宝巡维中心',
          content: '包含110kV区域内的ⅠⅡ组母线，110kV所有断路器、隔离开关、电流互感器、电压互感器、避雷器、母线及相关二次保护、测控装置'
        }, {
          index: 12,
          stationName: '220kV同乐变电站',
          equipName: '220kV#1、#2主变，#1、#2站用变直流系统，公用系统',
          equipA: '杨雄',
          equipB: '刘任虎',
          gourp: '500kV三宝巡维中心',
          content: '220kV#1、#2主变，#1、#2站用变相关二次设备的保护装置，测控装置，直流系统，公用系统'
        }, {
          index: 13,
          stationName: '110kV越州变电站',
          equipName: '110kV、35kV、10kV电压等级（区域）所有一、二次设备',
          equipA: '武坤',
          equipB: '马锦波',
          gourp: '500kV三宝巡维中心',
          content: '全站所有主变压器、站用变压器、断路器、隔离开关、电流互感器、电压互感器、避雷器、母线及相关二次保护、测控装置、直流系统，后台、五防相应电压等级部分'
        }, {
          index: 14,
          stationName: '110kV阿岗变电站',
          equipName: '110kV、35kV、10kV电压等级（区域）所有一、二次设备',
          equipA: '代红丽',
          equipB: '朱金勇',
          gourp: '500kV三宝巡维中心',
          content: '全站所有主变压器、站用变压器、断路器、隔离开关、电流互感器、电压互感器、避雷器、母线及相关二次保护、测控装置、直流系统，后台、五防相应电压等级部分'
        }, {
          index: 15,
          stationName: '110kV东山变电站',
          equipName: '110kV、35kV、10kV电压等级（区域）所有一、二次设备',
          equipA: '熊莉',
          equipB: '武坤',
          gourp: '500kV三宝巡维中心',
          content: '全站所有主变压器、站用变压器、断路器、隔离开关、电流互感器、电压互感器、避雷器、母线及相关二次保护、测控装置、直流系统，后台、五防相应电压等级部分'
        }, {
          index: 16,
          stationName: '110kV新田变电站',
          equipName: '110kV、35kV、10kV电压等级（区域）所有一、二次设备',
          equipA: '吕吉林',
          equipB: '熊莉',
          gourp: '500kV三宝巡维中心',
          content: '全站所有主变压器、站用变压器、断路器、隔离开关、电流互感器、电压互感器、避雷器、母线及相关二次保护、测控装置、直流系统，后台、五防相应电压等级部分'
        }, {
          index: 17,
          stationName: '35kV茨营变电站',
          equipName: '35kV、10kV电压等级（区域）所有一、二次设备',
          equipA: '张志萍',
          equipB: '吴忧',
          gourp: '500kV三宝巡维中心',
          content: '包含110kV区域内的ⅠⅡ组母线，110kV所有断路全站所有主变压器、站用变压器、断路器、隔离开关、电流互感器、电压互感器、避雷器、母线及相关二次保护、测控装置、直流系统，后台、五防相应电压等级部分器、隔离开关、电流互感器、电压互感器、避雷器、母线及相关二次保护、测控装置'
        }, {
          index: 18,
          stationName: '35kV水城变电站',
          equipName: '35kV、10kV电压等级（区域）所有一、二次设备',
          equipA: '赵嫕',
          equipB: '张志萍',
          gourp: '500kV三宝巡维中心',
          content: '全站所有主变压器、站用变压器、断路器、隔离开关、电流互感器、电压互感器、避雷器、母线及相关二次保护、测控装置、直流系统，后台、五防相应电压等级部分'
        }, {
          index: 19,
          stationName: '35kV高家村变电站',
          equipName: '35kV、10kV电压等级（区域）所有一、二次设备',
          equipA: '陈娟',
          equipB: '吴鑫',
          gourp: '500kV三宝巡维中心',
          content: '全站所有主变压器、站用变压器、断路器、隔离开关、电流互感器、电压互感器、避雷器、母线及相关二次保护、测控装置、直流系统，后台、五防相应电压等级部分'
        }, {
          index: 20,
          stationName: '35kV上坡坡变电站',
          equipName: '35kV、10kV电压等级（区域）所有一、二次设备',
          equipA: '吴鑫',
          equipB: '陈娟',
          gourp: '500kV三宝巡维中心',
          content: '全站所有主变压器、站用变压器、断路器、隔离开关、电流互感器、电压互感器、避雷器、母线及相关二次保护、测控装置、直流系统，后台、五防相应电压等级部分'
        }, {
          index: 21,
          stationName: '35kV温泉变电站',
          equipName: '35kV、10kV电压等级（区域）所有一、二次设备',
          equipA: '吴忧',
          equipB: '赵嫕',
          gourp: '500kV三宝巡维中心',
          content: '全站所有主变压器、站用变压器、断路器、隔离开关、电流互感器、电压互感器、避雷器、母线及相关二次保护、测控装置、直流系统，后台、五防相应电压等级部分'
        }]
      }
    },
    methods: {
      toDetail() {
        this.$router.push({name: 'adminAdjustDetail'})
      }
    },
    components: {
  
    }
  }
</script>

