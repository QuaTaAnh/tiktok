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
    primary,
    outline,
    small,
    icon,
    ...passProps
}) {
    const classes = cx('wrapper', {
        primary,
        outline,
        small,
    });

    let Component = 'Button';
    const props = {
        onClick,
        ...passProps,
    };
    if (to) {
        props.to = to;
        Component = Link;
    } else if (href) {
        props.href = href;
        Component = 'a';
    }
    return (
        <Component className={classes} {...props}>
            <FontAwesomeIcon className={cx('icon-btn')} icon={icon} />
            <span>{children}</span>
        </Component>
    );
}

export default Wrapper;
