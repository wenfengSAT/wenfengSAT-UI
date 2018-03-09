layui.use(['layer'], function() {
  var $ = layui.jquery,
    layer = layui.layer;
  //数据
  var dataProvince = [{
    name: '北京',
    value: 21300
  }, {
    name: '天津',
    value: 5816
  }, {
    name: '上海',
    value: 28408
  }, {
    name: '重庆',
    value: 7890
  }, {
    name: '河北',
    value: 7120
  }, {
    name: '河南',
    value: 12406
  }, {
    name: '云南',
    value: 6870
  }, {
    name: '辽宁',
    value: 9845
  }, {
    name: '黑龙江',
    value: 5222
  }, {
    name: '湖南',
    value: 12658
  }, {
    name: '安徽',
    value: 10783
  }, {
    name: '山东',
    value: 16253
  }, {
    name: '新疆',
    value: 3536
  }, {
    name: '江苏',
    value: 31939
  }, {
    name: '浙江',
    value: 33156
  }, {
    name: '江西',
    value: 8684
  }, {
    name: '湖北',
    value: 14803
  }, {
    name: '广西',
    value: 7531
  }, {
    name: '甘肃',
    value: 2880
  }, {
    name: '山西',
    value: 5444
  }, {
    name: '内蒙古',
    value: 37750
  }, {
    name: '陕西',
    value: 7435
  }, {
    name: '吉林',
    value: 40190
  }, {
    name: '福建',
    value: 14269
  }, {
    name: '贵州',
    value: 5106
  }, {
    name: '广东',
    value: 11800
  }, {
    name: '青海',
    value: 60001
  }, {
    name: '西藏',
    value: 36500
  }, {
    name: '四川',
    value: 48894
  }, {
    name: '宁夏',
    value: 10270
  }, {
    name: '海南',
    value: 2149
  }, {
    name: '台湾',
    value: 58888
  }, {
    name: '香港',
    value: 36666
  }, {
    name: '澳门',
    value: 7000
  }];
  var provinceNum = []; //新建人数的空数组
  dataProvince.forEach(function(val, key) {
    provinceNum.push(val.value);
  })
  provinceMaxNum = provinceNum.max(); //得到数组最大值
  console.log("人数最多的省份" + provinceMaxNum); //人数最多的省份
  //让数目为整万数
  provinceMaxNum = Math.ceil(provinceMaxNum / 10000) * 10000;
  console.log("人数最多的省份最接近的整万数" + provinceMaxNum);
  /**
   * 地图
   */
  var echartMap = echarts.init(document.getElementById('user-form-map'));
  echartMap.setOption({
    title: {
      text: '本站用户来源省份',
      subtext: '',
      left: 'center',
      textStyle: {
        fontWeight: 'normal'
      }
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['2016年']
    },
    visualMap: {
      min: 0,
      max: provinceMaxNum, //以人数最多的省份作为上限
      left: 'left',
      top: 'middle',
      text: ['高', '低'],
      calculable: true
    },
    toolbox: {
      show: true,
      orient: 'vertical',
      right: '5%',
      top: 'center',
      feature: {
        saveAsImage: {}
      }
    },
    series: [{ //系列列表。每个系列通过 type 决定自己的图表类型
      name: '本站用户来源的省份',
      type: 'map',
      mapType: 'china',
      roam: false,
      label: {
        normal: {
          show: true
        },
        emphasis: {
          show: true
        }
      },
      data: dataProvince
    }, ]
  });
  /**
   * 饼状图
   */
  //新建前十省份数据数组
  var dataTopProvince = dataProvince.sort(sortBy('value')).reverse().splice(0, 10); //人数前十的省份数据
  var provinceTopName = []; //新建前十省份名称的空数组
  dataTopProvince.forEach(function(val, key) {
    provinceTopName.push(val.name);
  })
  var provinceTopNums = []; //新建前十省份人数的空数组
  dataTopProvince.forEach(function(val, key) {
    provinceTopNums.push(val.value);
  })
  var echartPie = echarts.init(document.getElementById("user-form-pie"));
  echartPie.setOption({
    title: {
      text: '站点用户来源最多的十大省份',
      subtext: '',
      x: 'center',
      textStyle: {
        fontWeight: 'normal'
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      top: 'middle',
      data: provinceTopName
    },
    series: [{ //系列列表。每个系列通过 type 决定自己的图表类型
      name: '访问来源',
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      data: dataTopProvince,
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
  });
  /**
   * 折线图
   */
  console.log('前十省份名称' + provinceTopName);
  console.log('前十省份人数' + provinceTopNums);
  //生成一个模拟数组，来装投资用户人数，实际应用中可能会将所有用户返回在一起，需要自己将各种分隔出来
  var payUser = [];
  provinceTopNums.forEach(function(val, key) {
    payUser.push(val / 2);
  })
  console.log('投资用户人数' + payUser);
  var echartLine = echarts.init(document.getElementById("user-form-line"), 'macarons');
  echartLine.setOption({
    title: {
      text: '本站用户增长曲线',
      subtext: '数据是错误的，实际用法一样',
      left: 'center',
      textStyle: {
        color: '#333'
      }
    },
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['注册人数', '投资人数'], //此处的data必须与数据处的name保持一致
      top: 50
    },
    toolbox: { //工具栏
      feature: {
        saveAsImage: {} //下载图片
      },
      right: 15,
      top: 20
    },
    grid: { //坐标系绘图网格
      top: 100,
      left: 10, //边距
      right: 20,
      bottom: 10,
      containLabel: true, //grid 区域是否包含坐标轴的刻度标签，在无法确定坐标轴标签的宽度，容器有比较小无法预留较多空间的时候，可以设为 true 防止标签溢出容器。
      borderWidth: 0
    },
    xAxis: { //直角坐标系X轴
      type: 'category',
      boundaryGap: false, //false 时柱状图会覆盖边线
      nameTextStyle: { //X轴标题字体颜色
        color: '#646464'
      },
      axisLine: { //坐标线
        lineStyle: {
          color: '#999999',
          type: 'solid',
          width: 1
        }
      },
      z: 10, //Z-index
      data: provinceTopName
    },
    yAxis: [{ //直角坐标系Y轴
      type: 'value',
      name: '注册人数（人）',
      splitNumber: '5', //y轴分割线
      nameTextStyle: { //y轴标题字体颜色
        color: '#646464'
      },
      axisTick: { //坐标轴刻度设置
        show: true
      },
      min: 0,
      axisLine: { //坐标轴线
        lineStyle: {
          color: '#999999',
          width: 1
        }
      }
    }],
    series: [{ //系列列表。每个系列通过 type 决定自己的图表类型
      name: '注册人数',
      type: 'line',
      symbolSize: 6, //标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示高和宽，例如 [20, 10] 表示标记宽为20，高为10。
      //stack: '总量',
      z: 10,
      smooth: true, //是否平滑显示
      data: provinceTopNums,
      itemStyle: { //折线的颜色
        normal: {
          color: "#ff6e6e",
          borderWidth: 2
        }
      }
    }, { //系列列表。每个系列通过 type 决定自己的图表类型
      name: '投资人数',
      type: 'line',
      symbolSize: 6, //标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示高和宽，例如 [20, 10] 表示标记宽为20，高为10。
      //stack: '总量',
      z: 10,
      smooth: true, //是否平滑显示
      data: payUser,
      itemStyle: { //折线的颜色
        normal: {
          color: "#0099cc",
          borderWidth: 2
        }
      }
    }]
  });
});
/**
 * 柱形图
 */
var echartBar = echarts.init(document.getElementById("user-form-bar"));
echartBar.setOption({
  title: {
    text: '本站用户增长曲线',
    subtext: '随便放的数据',
    left: 'center',
    textStyle: {
      color: '#333'
    }
  },
  tooltip: {
    trigger: 'axis'
  },
  toolbox: {
    feature: {
      dataView: {
        show: true,
        readOnly: false
      },
      magicType: {
        show: true,
        type: ['line', 'bar']
      },
      restore: {
        show: true
      },
      saveAsImage: {
        show: true
      }
    },
    top: 30,
    right: 15
  },
  grid: {
    top: 100,
    left: 10, //边距
    right: 10,
    bottom: 10,
    containLabel: true, //grid 区域是否包含坐标轴的刻度标签，在无法确定坐标轴标签的宽度，容器有比较小无法预留较多空间的时候，可以设为 true 防止标签溢出容器。
    borderWidth: 0
  },
  legend: {
    data: ['蒸发量', '降水量', '平均温度'],
    top: 50
  },
  xAxis: [{
    type: 'category',
    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
  }],
  yAxis: [{
    type: 'value',
    name: '水量',
    min: 0,
    max: 250,
    interval: 50,
    axisLabel: {
      formatter: '{value} ml'
    }
  }, {
    type: 'value',
    name: '温度',
    min: 0,
    max: 25,
    interval: 5,
    axisLabel: {
      formatter: '{value} °C'
    }
  }],
  series: [{
    name: '蒸发量',
    type: 'bar',
    data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
  }, {
    name: '降水量',
    type: 'bar',
    data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
  }, {
    name: '平均温度',
    type: 'line',
    yAxisIndex: 1,
    data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
  }]
})