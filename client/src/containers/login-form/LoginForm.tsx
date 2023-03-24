import { useState } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./loginForm.styles";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import useLogin from "../../hooks/useLogin";
import { routes } from "../../constants";
import { ApiError } from "../../api";

function LoginForm() {
    const [login] = useLogin();
    const navigate = useNavigate();
    const [email, setEmail] = useState("test1@gmail.com");
    const [password, setPassword] = useState("123q4aA!a");
    const [errors, setErrors] = useState<ApiError["errors"]>([]);

    const handleOnSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        login(
            { email, password },
            {
                onSuccess() {
                    navigate(routes.home);
                },
                onError(err) {
                    const errors = err.response?.data.errors;

                    if (!errors) return;

                    setErrors(errors);
                },
            }
        );
    };

    return (
        <S.LoginContainer>
            <S.LoginForm onSubmit={handleOnSubmit}>
                <Input
                    type="email"
                    value={email}
                    name="email"
                    label="Email:"
                    onChange={(event) => setEmail(event.target.value)}
                    error={errors.find((err) => err.param === "email")?.msg}
                />
                <Input
                    type="password"
                    value={password}
                    name="password"
                    label="Password:"
                    onChange={(event) => setPassword(event.target.value)}
                    autoComplete="on"
                    error={errors.find((err) => err.param === "password")?.msg}
                />

                <Button type="submit">Login</Button>
            </S.LoginForm>
        </S.LoginContainer>
    );
}

export default LoginForm;
