<template>
    <canvas ref="lineChart" id="lineChart" width="400" height="400"></canvas>
</template>

<script>
//import Chart from 'chart.js';

/* eslint-disable */
export default {
    mounted() {
        const labels = ['January', 'February', 'March', 'April', 'May', 'June',];
        const data = {
            labels: labels,
            datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45],
            }]
        };

        const config = {
            type: 'line',
            data: data,
            options: {}
        };
        //const lineChart = new Chart(document.getElementById('lineChart'), config);
        const lineChart = new this.$_Chart(this.$refs.lineChart, config);
    },
}
</script>

<style>

</style>