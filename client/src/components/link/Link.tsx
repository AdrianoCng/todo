import { LinkProps } from "react-router-dom";

import * as S from "./link.styles";

export default function AnchorTag(props: LinkProps) {
    return <S.Anchor {...props}></S.Anchor>;
}
