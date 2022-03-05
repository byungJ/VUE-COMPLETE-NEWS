import bus from '../utils/bus.js';

export default {
    // 재사용 할 컴포넌트 옵션 & 로직
    // created() {
    //     bus.$emit('start:spinner');
    //     // #1
    //     this.$store.dispatch('FETCH_LIST', this.$route.name)
    //     .then(() => {
    //         // #5
    //         console.log('5');
    //         bus.$emit('end:spinner');
    //     })
    //     .catch(console.log);
    // }
    mounted() {
        bus.$emit('end:spinner');
    }
}
