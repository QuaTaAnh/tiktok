import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faHome, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { Wrapper as Button } from '~/components/Button';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('sidebar-btn')}>
                <div className={cx('home-btn')}>
                    <Button
                        title="Dành cho bạn"
                        icon={faHome}
                        to={'/'}
                        primary
                        active
                    />
                </div>
                <div className={cx('follow-btn')}>
                    <Button
                        title="Đang Follow"
                        icon={faUserGroup}
                        to={'/following'}
                        primary
                    />
                </div>
                <div className={cx('live-btn')}>
                    <Button title="LIVE" icon={faFilm} primary />
                </div>
            </div>
            <div className={cx('sidebar-login')}>
                <p>
                    Đăng nhập để follow các tác giả, thích video và xem bình
                    luận
                </p>
                <div className={cx('login-btn')}>
                    <Button title="Đăng nhập" dispath />
                </div>
            </div>
            <div className={cx('sidebar-account')}>
                <p>Tài khoản được đề xuất</p>
                <AccountItem />
            </div>
        </aside>
    );
}

export default Sidebar;
