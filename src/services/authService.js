import {API_BASE_URL} from "../config/consts";

const storageKey = 'USER_STORAGE_RGR';

function getUser() {
    const user = localStorage.getItem(storageKey);
    if (user) {
        return JSON.parse(user);
    }
    return null;
}

function storeAuthInfo(user) {
    localStorage.setItem(storageKey, JSON.stringify(user));
}

function cleanAuthInfo() {
    localStorage.removeItem(storageKey);
}

async function loginRequest(credentials) {
    return fetch(`${process.env.REACT_APP_API_BASE_URL}login`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
}

async function registerRequest(credentials) {
    const user = {
        username: credentials.username,
        email: credentials.email,
        password: credentials.password,
        role: credentials.isTeacher ? 'teacher' : 'student'
    };
    const data = await fetch(`${API_BASE_URL}register`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    return await data.json();
}

export { getUser, storeAuthInfo, cleanAuthInfo , loginRequest, registerRequest };