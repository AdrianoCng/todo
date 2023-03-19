/* eslint-disable */
import styled from "styled-components";

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
    tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}
export function Header({ tag, ...props }: Props) {
    const headers = [
        {
            tag: "h1",
            header: Header1,
        },
        {
            tag: "h2",
            header: Header2,
        },
        {
            tag: "h3",
            header: Header3,
        },
        {
            tag: "h4",
            header: Header4,
        },
        {
            tag: "h5",
            header: Header5,
        },
        {
            tag: "h6",
            header: Header6,
        },
    ];

    const Component = headers.find((header) => header.tag === tag)?.header;

    if (!Component) return null;

    return <Component {...props} />;
}

const Header1 = styled.h1`
    font-size: ${({ theme }) => theme.fonts.xlg};
    margin-bottom: 20px;
`;

const Header2 = styled.h2`
    font-size: ${({ theme }) => theme.fonts.lg};
    margin-bottom: 20px;
`;

const Header3 = styled.h3`
    font-size: ${({ theme }) => theme.fonts.md};
    margin-bottom: 20px;
`;

const Header4 = styled.h4`
    font-size: ${({ theme }) => theme.fonts.sm};
    margin-bottom: 20px;
`;

const Header5 = styled.h5`
    font-size: ${({ theme }) => theme.fonts.xsm};
    margin-bottom: 20px;
`;

const Header6 = styled.h6`
    font-size: ${({ theme }) => theme.fonts.xsm};
    margin-bottom: 20px;
`;
