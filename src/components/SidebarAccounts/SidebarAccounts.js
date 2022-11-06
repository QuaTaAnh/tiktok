import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import AccountItem from './AccountItem';
import styles from './SidebarAccounts.module.scss';
import Hastag from '~/components/SidebarAccounts/Hastag';

const cx = classNames.bind(styles);

function SidebarAccounts({
    label,
    moreBtn,
    hastag,
    dataSuggested = [],
    onSeeAll,
    dataFollowing = [],
}) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {hastag ? (
                <Hastag />
            ) : (
                <>
                    {dataSuggested.map((account) => (
                        <AccountItem key={account.id} data={account} />
                    ))}
                    <p className={cx('more-btn')} onClick={onSeeAll}>
                        {moreBtn}
                    </p>
                </>
            )}
        </div>
    );
}
SidebarAccounts.propTypes = {
    label: PropTypes.string.isRequired,
    hastag: PropTypes.string,
    moreBtn: PropTypes.string.isRequired,
    data: PropTypes.array,
};

export default SidebarAccounts;
