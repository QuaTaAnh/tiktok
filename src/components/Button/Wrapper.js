import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Wrapper({
    to,
    href,
    onClick,
    children,
    primary = false,
    outline = false,
    small = false,
    large = false,
    text = false,
    disabled = false,
    rounded = false,
    leftIcon,
    menuItem,
    ...passProps
}) {
    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        text,
        disabled,
        rounded,
        menuItem,
    });

    let Component = 'Button';
    const props = {
        onClick,
        ...passProps,
    };

    //Nếu có disabled thì không click được
    if (disabled) {
        delete props.disabled;
    }

    if (to) {
        props.to = to;
        Component = Link;
    } else if (href) {
        props.href = href;
        Component = 'a';
    }
    return (
        <Component className={classes} {...props} onClick={onClick}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
        </Component>
    );
}

export default Wrapper;
