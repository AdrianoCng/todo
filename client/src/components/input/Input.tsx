import * as S from "./input.styles";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}
export default function Input({ label, error, ...props }: Props) {
    const renderError = () => {
        if (!error) return null;

        return <S.InputError>{error}</S.InputError>;
    };

    return (
        <S.Label>
            {label && label}

            <S.Input {...props} />

            {renderError()}
        </S.Label>
    );
}
