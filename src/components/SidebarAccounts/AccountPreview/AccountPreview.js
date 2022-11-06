import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountPreview({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image
                    className={cx('avatar')}
                    src={data.avatar}
                    alt={data.nickname}
                />
                <div>
                    <Button primarySidebar>Follow</Button>
                </div>
            </div>
            <div className={cx('body')}>
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

                <p className={cx('parameter')}>
                    <strong className={cx('value')}>
                        {data.followers_count}
                    </strong>
                    <span className={cx('label')}>Follower</span>
                    <strong className={cx('value')}>{data.likes_count}</strong>
                    <span className={cx('label')}>Thích</span>
                </p>
            </div>
        </div>
    );
}

AccountPreview.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountPreview;
