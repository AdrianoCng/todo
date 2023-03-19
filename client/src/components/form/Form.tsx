import * as S from "./form.styles";

interface Props extends React.FormHTMLAttributes<HTMLFormElement> {}

export default function Form({ ...props }: Props) {
    return <S.Form {...props} />;
}
