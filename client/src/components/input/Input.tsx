import * as S from "./input.styles";

type Props = React.InputHTMLAttributes<HTMLInputElement>;
export default function Input({ ...props }: Props) {
    return <S.Input {...props} />;
}
