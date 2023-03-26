import { useState } from "react";
import { ApiError } from "../../api";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import AnchorTag from "../../components/link/Link";
import { routes } from "../../constants";
import withCenteredContainer from "../../hoc/withCenteredContainer";
import useSignUp from "../../hooks/useSignUp";
import * as S from "./signUpForm.styles";

export default withCenteredContainer(function SignUpForm() {
    const [signUp, signUpMutation] = useSignUp();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState<ApiError["errors"]>([]);

    const handleOnSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        signUp(
            {
                email,
                password,
                confirmPassword,
            },
            {
                onSuccess() {
                    setErrors([]);
                },
                onError(error) {
                    if (!error.response?.data) return;

                    const errors = error.response?.data.errors;

                    if (!errors) return;

                    setErrors(errors);
                },
            }
        );
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
                name="confirmPassword"
                label="Confirm Password:"
                onChange={(event) => setConfirmPassword(event.target.value)}
                autoComplete="on"
                error={errors.find((err) => err.param === "confirmPassword")?.msg}
            />

            <AnchorTag to={routes.login()}>Login</AnchorTag>

            <Button type="submit" disabled={signUpMutation.isLoading}>
                Sign Up
            </Button>
        </S.SignUpForm>
    );
});
