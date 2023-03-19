import * as S from "./label.styles";

interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export default function Label({ ...props }: Props) {
    return <S.Label {...props} />;
}
