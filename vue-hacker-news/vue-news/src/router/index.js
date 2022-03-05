import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import createListView from '../views/CreateListView.js';
import bus from '../utils/bus.js';
import { store } from '../store/index.js';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            // 해당주소가 들어왔을때 redirect에 적혀있는 주소로 이동.
            redirect: '/news'
        },
       {
           // path: url에 대한 정보(주소)
           path: '/news',
           name: 'news',
           // url 주소로 갔을 때 표시될 컴포넌트
           //component: createListView('NewsView'),
           component: NewsView,
           beforeEnter: (to, from, next) => {
            bus.$emit('start:spinner');
            store.dispatch('FETCH_LIST', to.name)
            .then(() => {
                //bus.$emit('end:spinner');
                next();
            })
            .catch(console.log);
           },
       },
       {
            path: '/ask',
            name: 'ask',
            component: AskView,
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                .then(() => {
                    //bus.$emit('end:spinner');
                    next();
                })
                .catch(console.log);
               },
            //component: createListView('AskView'),
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                .then(() => next())
                .catch(console.log);
               },
            //component: createListView('JobsView'),
        },
        {
            path: '/user/:id',
            component: UserView,
        },
        {
            path: '/item/:id',
            component: ItemView,
        },
    ]
})