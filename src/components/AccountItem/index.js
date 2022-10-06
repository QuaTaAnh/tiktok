import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <>
            <div className={cx('wrapper')}>
                <img className={cx('avatar')} src="" alt="Avatar" />
                <div className={cx('info')}>
                    <p className={cx('name')}>
                        <span>Nhật Anh</span>
                        <FontAwesomeIcon
                            className={cx('tick-blue')}
                            icon={faCircleCheck}
                        />
                    </p>
                    <span className={cx('username')}>nhatanhx123</span>
                </div>
            </div>
        </>
    );
}

export default AccountItem;
