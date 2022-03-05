/* eslint-disable */ 
import Chart from 'chart.js';

export default {
    install(Vue) {
        // LineChart, BarChart
        // this.$_Chart 로 접근
        Vue.prototype.$_Chart = Chart;
    }
}