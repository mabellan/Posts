import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';
export const FETCH_POST = 'fetch_post';


const url = 'http://reduxblog.herokuapp.com/api';
const api_key = '?key=llaveunica';

export function fetchPosts() {
    const request = axios.get(`${url}/posts${api_key}`);
    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function createPost(values, callback) {
    const request = axios.post(`${url}/posts${api_key}`, values).then(
    () => callback()
    );
    return {
        type: CREATE_POST,
        payload: request
    };

}

export function fetchPost(id) {
    const request = axios.get(`${url}/posts/${id}${api_key}`)

    return {
        type: FETCH_POST,
        payload: request
    };
}

