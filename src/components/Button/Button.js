import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    onClick,
    className,
    children,
    primary = false,
    primarySidebar = false,
    outline = false,
    small = false,
    large = false,
    text = false,
    disabled = false,
    rounded = false,
    leftIcon,
    menuItem,
    separate,
    ...passProps
}) {
    const classes = cx('wrapper', {
        primary,
        primarySidebar,
        outline,
        small,
        text,
        disabled,
        rounded,
        menuItem,
        separate,
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

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    text: PropTypes.bool,
    disabled: PropTypes.bool,
    separate: PropTypes.bool,
    rounded: PropTypes.bool,
    leftIcon: PropTypes.node,
    menuItem: PropTypes.bool,
};

export default Button;
