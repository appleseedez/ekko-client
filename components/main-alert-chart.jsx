import React, { PropTypes } from 'react'
import echarts from 'echarts'
const MainAlertChart = React.createClass({
  render () {
    return (
        <div className="chart-box" id="J_Echart1"></div>
    )
  },
  componentDidMount() {
    // 基于准备好的dom，初始化echarts实例
    var myChart1 = echarts.init(document.getElementById('J_Echart1'));
    // 指定图表的配置项和数据
    var option = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            left: 'center',
            bottom:'0',
            itemWidth: 14,
            data: ['超高门限','高门限','低门限','超低门限']
        },
        series : [
            {
                name: '在线人数',
                type: 'pie',
                radius : '60%',
                center: ['50%', '45%'],
                data:[
                    {value:335, name:'超高门限'},
                    {value:135, name:'高门限'},
                    {value:235, name:'低门限'},
                    {value:110, name:'超低门限'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart1.setOption(option);
  }
})

export default MainAlertChart
