<template>
  <div id="components-grid-demo-playground">
    <a-row :gutter="16">
      <a-col class="gutter-row" :span="12">
        <div class="gutter-box" id="id1" style="width: 600px;height:400px;">
          col-6
        </div>
      </a-col>
      <a-col class="gutter-row" :span="12">
        <div class="gutter-box" id="id2" style="width: 600px;height:400px;">
          col-6
        </div>
      </a-col>
    </a-row>
    <a-row :gutter="16">
      <a-col class="gutter-row" :span="16">
        <div class="gutter-box" id="id3" style="">
          col-6
        </div>
      </a-col>
      <a-col class="gutter-row" :span="8">
        <div>
          <a-card hoverable style="border-radius: 8px; width: 60%; height: auto; margin: 0 auto;">
            <img
              slot="cover"
              alt="avatar"
              src="../assets/img/v2.jpg"
            />
            <a-card-meta title="用户001">
              <template slot="description">
                追求高安全边际和持续稳定的成长性，在有较强估值保护时买入
              </template>
            </a-card-meta>
          </a-card>
        </div>

      </a-col>
    </a-row>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  data() {
    const gutters = {};
    const colCounts = {};
    const vgutters = {};
    [8, 16, 24, 32, 40, 48].forEach((value, i) => {
      gutters[i] = value;
    });
    [8, 16, 24, 32, 40, 48].forEach((value, i) => {
      vgutters[i] = value;
    });
    [2, 3, 4, 6, 8, 12].forEach((value, i) => {
      colCounts[i] = value;
    });
    return {
      gutterKey: 1,
      vgutterKey: 1,
      colCountKey: 0,
      colCounts,
      gutters,
      vgutters,

    };
  },

  mounted() {
    this.init();
  },
  methods: {
    init(){
      // 基于准备好的dom，初始化echarts实例
      var myChart1 = this.$echarts.init(document.getElementById('id1'));
      // 指定图表的配置项和数据
      var option1 = {
        title: {
          text: '年化收益率'
        },
        tooltip: {},
        legend: {
          data:['收益率']
        },
        xAxis: {
          data: ["2017","2018","2019","2020"]
        },
        yAxis: {},
        series: [{
          name: '年化收益率',
          type: 'bar',
          data: [0.3, 0.2, 0.5, 0.75, ]
        }]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart1.setOption(option1);

      var myChart2 = this.$echarts.init(document.getElementById('id2'));
      var option2 = {
        title: {
          text: '持仓占比'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center'
        },
        series: [
          {
            name: '持仓占比',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#ffffff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '40',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              {value: 0.3, name: '上海银行'},
              {value: 0.2, name: '陕西黑猫'},
              {value: 0.2, name: '金发科技'},
              {value: 0.2, name: '东华能源'},
              {value: 0.1, name: '中国石油'}
            ]
          }
        ]
      };
      myChart2.setOption(option2);

      var jdata = require('../../static/data/ret.json');
      // console.log(jdata.date);
      var myChart3 = this.$echarts.init(document.getElementById('id3'));
      var option3 = {
        title: {
          text: '收益率-2020年'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['沪深300', '持仓收益', ]
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: jdata.date,

        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '沪深300',
            type: 'line',

            data: jdata.hs300
          },
          {
            name: '持仓收益',
            type: 'line',

            data: jdata.return
          },
        ]
      };
      myChart3.setOption(option3);


    }
  }




}

</script>

<style scoped>
@import '../../node_modules/ant-design-vue/dist/antd.css';

#components-grid-demo-playground [class~='ant-col'] {
  background: #f9f9f9;
  border: 0;
}
#components-grid-demo-playground [class~='ant-col'] > div {
  padding: 30px; /**/
  height: 400px;
  line-height: 120px;
  font-size: 13px;
}

</style>
