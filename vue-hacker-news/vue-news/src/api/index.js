// package.json에 설치돼있던 라이브러리를 들고 옴.
import axios from 'axios';

const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
};

function fetchNewsList() {
    // return new Promise
    return axios.get(`${config.baseUrl}news/1.json`);
}

async function fetchAskList() {
    try {
        return await axios.get(`${config.baseUrl}ask/1.json`);
    } catch (error) {
    
    }
}

function fetJobsList() {
    return axios.get(`${config.baseUrl}jobs/1.json`);
}

function fetchUserInfo(username) {
    return axios.get(`${config.baseUrl}user/${username}.json`);
}

function fetchCommentItem(id) {
    return axios.get(`${config.baseUrl}item/${id}.json`);
}

function fetchList(pageName) {
    return axios.get(`${config.baseUrl}${pageName}/1.json`);
}

export {
    fetchNewsList,
    fetchAskList,
    fetJobsList,
    fetchUserInfo,
    fetchCommentItem,
    fetchList,
}