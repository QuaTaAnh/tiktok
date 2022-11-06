import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import classNames from 'classnames/bind';
import styles from './SidebarAccounts.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from '~/components/SidebarAccounts/AccountPreview';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview data={data} />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy
                interactive
                placement="bottom"
                render={renderPreview}
                delay={[800, 0]}
                offset={[-20, 0]}
            >
                <div className={cx('account-item')}>
                    <Image
                        className={cx('avatar')}
                        alt={data.last_name}
                        src={data.avatar}
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nick-name')}>
                            <strong>{data.nickname}</strong>
                            {data.tick && (
                                <FontAwesomeIcon
                                    className={cx('check')}
                                    icon={faCircleCheck}
                                />
                            )}
                        </p>
                        <p
                            className={cx('name')}
                        >{`${data.first_name} ${data.last_name}`}</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
