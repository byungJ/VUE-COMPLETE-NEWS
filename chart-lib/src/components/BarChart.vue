<template>
    <canvas ref="barChart" id="barChart" width="400" height="400"></canvas>
</template>

<script>
//import Chart from 'chart.js';

/* eslint-disable */
export default {
    props: ['propsdata'],
    mounted() {
        // document.getElementById는 화면에서 그려진 DOM에 다 접근해서 id같으면 충돌 날 확률이 높아집니다.
       // const ctx = document.getElementById('barChart');

       // ref: 레퍼런스 속성은 각각의 컴포넌트안의 템플릿에만 접근이 가능.
        const ctx = this.$refs.barChart;
        const barChart = new this.$_Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: this.propsdata
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
        });
    },
}
</script>

<style>

</style>