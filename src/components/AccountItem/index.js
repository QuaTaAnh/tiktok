import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountItem() {
    const classes = cx('wrapper');
    return (
        <>
            <div className={classes}>
                <Image
                    className={cx('avatar')}
                    src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/625aadaf16ba32e826d0dbfbbbdcd48a~c5_300x300.webp?x-expires=1665410400&x-signature=vr6Gn8ux85j1LGE%2BjTmyMvbnofo%3D"
                    alt="Avatar"
                />
                <div className={cx('info')}>
                    <h4 className={cx('name')}>
                        <span>Nhật Anh</span>
                        <FontAwesomeIcon
                            className={cx('check')}
                            icon={faCheckCircle}
                        />
                    </h4>
                    <span className={cx('username')}>nhatanhx123</span>
                </div>
            </div>
        </>
    );
}

export default AccountItem;
