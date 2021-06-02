export const users = [
    { username: 'test', password: 'test', email: 'test@test.com', role: 'student' },
    { username: 'admin', password: 'admin', email: 'admin@admin.com', role: 'teacher' },
]

export function login(credentials) {
    const user = users.find(u => 
        u.username === credentials.username && 
        u.password === credentials.password
    );
    return user;
}

export function register(credentials){
    const user = {
        username: credentials.username,
        email: credentials.email,
        password: credentials.password,
        role: credentials.isTeacher ? 'teacher' : 'student'
    };
    users.push(user);
    return user;
}