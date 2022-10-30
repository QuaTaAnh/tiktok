import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import AccountItem from './AccountItem';
import styles from './SidebarAccounts.module.scss';

const cx = classNames.bind(styles);

function SidebarAccounts({ label, moreBtn }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <p className={cx('more-btn')}>{moreBtn}</p>
        </div>
    );
}
SidebarAccounts.propTypes = {
    label: PropTypes.string.isRequired,
    moreBtn: PropTypes.string.isRequired,
};

export default SidebarAccounts;
