<template>
    <div class="user-container">
        <div>
            <i class="fa-solid fa-user"></i>
        </div>
    <div class="user-description">
        <!-- <router-link :to="`/user/${userInfo.id}`">{{userInfo.id}}</router-link> -->
        <slot name="username">
            <!-- 상위 컴포넌트에서 정의할 영역 -->
        </slot>
        <slot name="time">
                <!-- 상위 컴포넌트에서 정의할 영역 -->
        </slot>
        <slot name="karma">
            <!-- 상위 컴포넌트에서 정의할 영억 -->
        </slot>
    </div>
    </div>
</template>

<script>
export default {
    props: {
        info: Object
    },
    // computed: {
    //     userInfo() {
    //         // 코드를 짧게 변경하기 위한 방법1
    //         return this.$store.state.user;
    //     }
    // },
}
</script>

<style scoped>
.user-container {
    display: flex;
    align-items: center;
    padding: 0.5rem;
}
.fa-user {
    font-size: 2.5rem;
}
.user-description {
    padding-left: 8px;
}
.time {
    font-size: 0.7rem;
}
</style>