// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1667325600&x-signature=n3zAuR7%2F5COHxTXZN5G6qBOtkGU%3D"
                    alt=""
                />
                <div>
                    <Button primarySidebar>Follow</Button>
                </div>
            </div>
            <div className={cx('body')}>
                <p className={cx('nick-name')}>
                    <strong>theanh28entertaiment</strong>
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCircleCheck}
                    />
                </p>
                <p className={cx('name')}>Theanh28 Entertaiment</p>

                <p className={cx('parameter')}>
                    <strong className={cx('value')}>7.8M</strong>
                    <span className={cx('label')}>Follower</span>
                    <strong className={cx('value')}>556.6M</strong>
                    <span className={cx('label')}>Thích</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
