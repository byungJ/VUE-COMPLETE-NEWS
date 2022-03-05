import { fetchNewsList, fetJobsList, fetchAskList, fetchUserInfo, fetchCommentItem, fetchList } from '../api/index.js';

export default {
    // promise
    // FETCH_NEWS(context) {
    //     return fetchNewsList()
    //     .then(response => {
    //         context.commit('SET_NEWS', response.data);
    //         // return response가 Promise 객체를 반환.
    //         return response;
    //     })
    //     .catch(console.log);
    // },
    // async
    async FETCH_NEWS(context) {
        const response = await fetchNewsList();
        context.commit('SET_NEWS', response.data);
        return response;
    },

    // promise
    // FETCH_JOBS({ commit }) {
    //     return fetJobsList()
    //     .then(({ data }) => {
    //         commit('SET_JOBS', data);
    //     })
    //     .catch(console.log);
    // },
    // async
    async FETCH_JOBS({ commit }) {
        try {
            const response = await fetJobsList();
            commit('SET_JOBS',response.data);
            return response;
        } catch (error) {
            console.log(error);
        }
    },

    // promise
    // FETCH_ASK(context) {
    //     return fetchAskList()
    //     .then(response => context.commit('SET_ASK', response.data))
    //     .catch(console.log);
    // },
    // async
    async FETCH_ASK(context) {
        const response = await fetJobsList();
        context.commit('SET_ASK',response.data);
        return response;
    },

    FETCH_USER({ commit }, name) {
        return fetchUserInfo(name)
        .then(({ data }) => {
            commit('SET_USER', data)
        })
        .catch(console.log);
    },
    FETCH_ITEM(context, id) {
        return fetchCommentItem(id)
        .then(response => context.commit('SET_ITEM', response.data))
        .catch(console.log)
    },
    // #2
    // promise
    // FETCH_LIST({ commit }, pageName) {
    //     // #3
    //     return fetchList(pageName)
    //         .then(response => {
    //             // #4
    //             console.log('4');
    //             commit('SET_LIST', response.data);
    //             return response;
    //         })
    //         .catch(console.log);
    // },
    // async
    async FETCH_LIST({ commit }, pageName) {
        try {
            const response = await fetchAskList(pageName);
            commit('SET_LIST', response.data);
            return response       
        } catch (error) {
            console.log(error);
        }
    },
}