<template>
    <div>
        <!-- <user-profile></user-profile> -->
        <user-profile :info="userInfo">
            <div slot="username">{{ userInfo.id }}</div>
            <span slot="time">{{ 'Joined ' + userInfo.created }}, </span>
            <span slot="karma">{{ userInfo.karma }}</span>
        </user-profile>
    </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';

export default {
    components: {
        UserProfile,
    },
    computed: {
        userInfo() {
            // 코드를 짧게 변경하기 위한 방법1
            return this.$store.state.user;
        }
    },
    created() {
        const userName = this.$route.params.id;
        this.$store.dispatch('FETCH_USER', userName);
    }
}
</script>

<style>

</style>