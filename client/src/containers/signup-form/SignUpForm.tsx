import { useState } from "react";
import { ApiError } from "../../api";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import withCenteredContainer from "../../hoc/withCenteredContainer";
import * as S from "./signUpForm.styles";

export default withCenteredContainer(function SignUpForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState<ApiError["errors"]>([]);

    const handleOnSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        setErrors([]);
    };

    return (
        <S.SignUpForm onSubmit={handleOnSubmit}>
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

            <Input
                type="password"
                value={confirmPassword}
                name="confirm-password"
                label="Confirm Password:"
                onChange={(event) => setConfirmPassword(event.target.value)}
                autoComplete="on"
                error={errors.find((err) => err.param === "password")?.msg}
            />

            <Button type="submit" disabled={false}>
                Sign Up
            </Button>
        </S.SignUpForm>
    );
});
