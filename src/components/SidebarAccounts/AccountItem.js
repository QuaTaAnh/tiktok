import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import classNames from 'classnames/bind';
import styles from './SidebarAccounts.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from '~/components/SidebarAccounts/AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <Tippy
            interactive
            placement="bottom"
            render={renderPreview}
            delay={[800, 0]}
            offset={[-20, 0]}
        >
            <div className={cx('account-item')}>
                <img
                    className={cx('avatar')}
                    alt=""
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1667325600&x-signature=n3zAuR7%2F5COHxTXZN5G6qBOtkGU%3D"
                />
                <div className={cx('item-info')}>
                    <p className={cx('nick-name')}>
                        <strong>theanh28entertaiment</strong>
                        <FontAwesomeIcon
                            className={cx('check')}
                            icon={faCircleCheck}
                        />
                    </p>
                    <p className={cx('name')}>Theanh28 Entertaiment</p>
                </div>
            </div>
        </Tippy>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
