import { useState } from "react";
import * as S from "./loginForm.styles";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import Label from "../../components/label/Label";
import useLogin from "../../hooks/useLogin";

function LoginForm() {
    const [login] = useLogin();

    const [email, setEmail] = useState("test1@gmail.com");
    const [password, setPassword] = useState("123q4aA!a");

    const handleOnSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        login({ email, password });
    };

    return (
        <S.LoginContainer>
            <S.LoginForm onSubmit={handleOnSubmit}>
                <Label>
                    Email:
                    <Input
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </Label>
                <Label>
                    Password:
                    <Input
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </Label>
                <Button type="submit">Login</Button>
            </S.LoginForm>
        </S.LoginContainer>
    );
}

export default LoginForm;
