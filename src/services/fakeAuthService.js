const storageKey = 'USER_STORAGE_RGR';

function getUser() {
    const user = localStorage.getItem(storageKey);
    if (user) {
        return JSON.parse(user);
    }
    return null;
}

function authLogin(user) {
    localStorage.setItem(storageKey, JSON.stringify(user));
}

function authLogout() {
    localStorage.removeItem(storageKey);
}

export { getUser, authLogin, authLogout };