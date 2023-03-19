import * as S from "./button.styles";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary";
}

export default function Button({ variant = "primary", ...props }: ButtonProps) {
    return <S.Button variant={variant} {...props} />;
}
