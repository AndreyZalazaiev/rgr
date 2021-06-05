import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import { Button, Card, FormGroup, FormLabel } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { login } from '../../api/authApi';
import { useAuth } from '../../components/general/authHooks';
import { validationService } from '../../services/validationService';
import './Login.scss';

function Login() {
    const history = useHistory();
    const auth = useAuth();
    const [errorMessage, setError] = useState(null);

    function handleSubmit(values) {
        const user = login(values);
        if (user){
            auth.login(user);
            history.push('/');
        } else{
            setError('Неверный логин или пароль')
        }
    }

    return (
        <div className="row justify-content-center">
            <Card className="login-card">
                <Card.Body>
                    <Card.Title className="text-center">Вход</Card.Title>
                    <Formik
                        initialValues={{
                            username: '',
                            password: ''
                        }}
                        onSubmit={handleSubmit}>
                        {({ touched, errors }) =>
                        (
                            <Form>
                                {errorMessage && <div className="text-danger">{errorMessage}</div>}
                                <FormGroup>
                                    <FormLabel htmlFor="username">Логин:</FormLabel>
                                    <Field
                                        name="username" id="username"
                                        className="form-control" placeholder="Введите ваш логин"
                                        validate={validationService.validateRequired} />
                                    {touched.username && errors.username ? <span className="text-danger">{errors.username}</span> : null}
                                </FormGroup>
                                <FormGroup>
                                    <FormLabel htmlFor="password">Пароль:</FormLabel>
                                    <Field name="password" id="password"
                                        type="password" className="form-control" placeholder="Введите ваш пароль"
                                        validate={validationService.validateRequiredd} />
                                    {touched.password && errors.password ? <span className="text-danger">{errors.password}</span> : null}
                                </FormGroup>
                                <div className="my-2">Еще нет аккаунта? <Link to="/register">Создайте новый</Link></div>
                                <Button
                                    variant="primary" className="btn-block"
                                    type="submit" disabled={(touched.password && errors.password) || (touched.email && errors.email)}>
                                    Войти
                                    </Button>
                            </Form>
                        )}
                    </Formik>
                </Card.Body>
            </Card>
        </div>
    );
}

export { Login };