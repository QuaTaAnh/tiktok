import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import AccountItem from './AccountItem';
import styles from './SidebarAccounts.module.scss';
import Hastag from '~/components/SidebarAccounts/Hastag';

const cx = classNames.bind(styles);

function SidebarAccounts({ label, moreBtn, hastag }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {hastag ? (
                <Hastag />
            ) : (
                <>
                    <AccountItem />
                    <p className={cx('more-btn')}>{moreBtn}</p>
                </>
            )}
        </div>
    );
}
SidebarAccounts.propTypes = {
    label: PropTypes.string.isRequired,
    hastag: PropTypes.string,
    moreBtn: PropTypes.string.isRequired,
};

export default SidebarAccounts;
