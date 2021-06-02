import { Field, Form, Formik } from 'formik';
import { Button, Card, FormCheck, FormGroup, FormLabel } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { register } from '../../api/authApi';
import { useAuth } from '../../components/AuthProvider/authHooks';
import { validationService } from '../../services/validationService';
import './Register.scss';

function Register() {
    const auth = useAuth();
    const history = useHistory();

    function handleSubmit(values) {
        const user = register(values);
        auth.login(user);
        history.push('/');
    }

    return (
        <div className="row justify-content-center">
            <Card className="register-card">
                <Card.Body>
                    <Card.Title className="text-center">Регистрация</Card.Title>
                    <Formik
                        initialValues={{
                            username: '',
                            password: '',
                            email: '',
                            confrirmPassword: '',
                            isTeacher: false
                        }}
                        onSubmit={handleSubmit}>
                        {({ touched, errors, values }) =>
                        (
                            <Form>
                                <FormGroup>
                                    <FormLabel htmlFor="username">Логин:</FormLabel>
                                    <Field
                                        name="username" id="username"
                                        className="form-control" placeholder="Введите логин"
                                        validate={validationService.validateUsername} />
                                    {touched.username && errors.username ? <span className="text-danger">{errors.username}</span> : null}
                                </FormGroup>
                                <FormGroup>
                                    <FormLabel htmlFor="email">Электронная почта:</FormLabel>
                                    <Field
                                        name="email" id="email"
                                        className="form-control" placeholder="Введите вашу электронную почту"
                                        validate={validationService.validateEmail} />
                                    {touched.email && errors.email ? <span className="text-danger">{errors.email}</span> : null}
                                </FormGroup>
                                <FormGroup>
                                    <FormLabel htmlFor="password">Пароль:</FormLabel>
                                    <Field name="password" id="password"
                                        type="password" className="form-control" placeholder="Введите пароль"
                                        validate={validationService.validatePassword} />
                                    {touched.password && errors.password ? <span className="text-danger">{errors.password}</span> : null}
                                </FormGroup>
                                <FormGroup>
                                    <FormLabel htmlFor="confrirmPassword">Подтверждение пароля:</FormLabel>
                                    <Field name="confrirmPassword" id="confrirmPassword"
                                        type="password" className="form-control" placeholder="Подтвердите пароль пароль"
                                        validate={validationService.validateRequired} />
                                    {touched.confrirmPassword && errors.confrirmPassword ? <span className="text-danger">{errors.confrirmPassword}</span> : null}
                                    {touched.confrirmPassword && values.confrirmPassword !== values.password ? <div className="text-danger">Пароли не совпадают</div> : null}
                                </FormGroup>
                                <FormCheck>
                                    <Field className="form-check-input" type="checkbox" name="isTeacher"/>
                                    <FormLabel className="form-check-label">Учитель?</FormLabel>
                                </FormCheck>
                                <div className="my-2">Уже есть аккаунт? <Link to="/login">Войти</Link></div>
                                <Button
                                    variant="primary" className="btn-block"
                                    type="submit">
                                    Зарегестрироваться
                                    </Button>
                            </Form>
                        )}
                    </Formik>
                </Card.Body>
            </Card>
        </div>
    );
}

export { Register };