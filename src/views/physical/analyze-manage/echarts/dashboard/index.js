export const dashOption= {
  series: [
    {
      type: 'gauge',
      progress: {
        show: true,
        width: 18
      },
      axisLine: {
        lineStyle: {
          width: 18
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        length: 15,
        lineStyle: {
          width: 2,
          color: '#999'
        }
      },
      axisLabel: {
        distance: 25,
        color: '#999',
        fontSize: 20
      },
      anchor: {
        show: true,
        showAbove: true,
        size: 25,
        itemStyle: {
          borderWidth: 10
        }
      },
      title: {
        text: '完成率'
      },
      detail: {
        valueAnimation: true,
        fontSize: 50,
        offsetCenter: [0, '70%'],
        formatter: '{value} %',
      },
      data: [
        {
          value: 70
        }
      ]
    }
  ]
};
