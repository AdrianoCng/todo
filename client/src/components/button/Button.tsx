import classNames from "classnames";

import styles from "./Button.module.scss";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ className, ...props }: Props) {
    return (
        <button {...props} className={classNames(styles.button, className)}>
            {props.children}
        </button>
    );
}
