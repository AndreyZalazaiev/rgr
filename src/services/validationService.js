class ValidationService {

    validateUsername(value) {
        let error;
        if (!value) {
            error = 'Это поле обязательно';
        } else if (value.length < 6 || value.length > 20) {
            error = 'Имя пользователя должно быть от 6 до 20 символов';
        }
        return error;
    }

    validateRequired(value){
        let error;
        if (!value) {
            error = 'Это поле обязательно';
        }
        return error;
    }

    validatePassword(value) {
        let error;
        if (!value) {
            error = 'Это поле обязательно';
        } else if (value.length < 6 || value.length > 50) {
            error = 'Пароль должен быть от 6 до 50 символов';
        } else if (value.search(/\d/) === -1) {
            error = 'Пароль должен содержать как минимум одну цифру';
        } else if (value.search(/[a-z]/) === -1) {
            error = 'Пароль должен содержать как минимум одну букву нижнего регистра';
        } else if (value.search(/[A-Z]/) === -1) {
            error = 'Пароль должен содержать как минимум одну букву верхнего регистра';
        } else if (value.search(/[!@#$%^&*]/) === -1) {
            error = 'Пароль должен содержать как минимум один специальный символ';
        }
        return error;
    }

    validateEmail(value) {
        let error;
        if (!value) {
            error = 'Это поле обязательно';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            error = 'Неверный email';
        }
        return error;
    }

}

export const validationService = new ValidationService();

