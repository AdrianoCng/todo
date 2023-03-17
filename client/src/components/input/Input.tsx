import classNames from "classnames";

import styles from "./Input.module.scss";

type Props = React.InputHTMLAttributes<HTMLInputElement>;
export default function Input({ ...props }: Props) {
    return <input {...props} className={classNames(styles.input, props.className)} />;
}
