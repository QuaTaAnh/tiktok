import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './SidebarFooter.module.scss';

const cx = classNames.bind(styles);

function FooterItem({ target, href, title, more }) {
    return (
        <a className={cx('title-icon', { more })} target={target} href={href}>
            {title}
        </a>
    );
}

FooterItem.propTypes = {
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default FooterItem;
