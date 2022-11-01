import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import Menu from './Menu/Menu';
import MenuItem from './Menu/MenuItem';
import { routes } from '~/config';
import SidebarAccounts from '~/components/SidebarAccounts';
import SidebarFooter from '~/components/SidebarAccounts/SidebarFooter';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
function Sidebar() {
    const currentUser = true;
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    to={routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                    title="Dành cho bạn"
                />
                <MenuItem
                    to={routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                    title="Đang Follow"
                />
                <MenuItem
                    to={routes.live}
                    icon={<LiveIcon />}
                    activeIcon={<LiveActiveIcon />}
                    title="LIVE"
                />
            </Menu>

            {currentUser ? (
                <>
                    <SidebarAccounts
                        label="Tài khoản được đề xuất"
                        moreBtn="Xem tất cả"
                    />
                    <SidebarAccounts
                        label="Các tài khoản đang follow"
                        moreBtn="Xem thêm"
                    />
                </>
            ) : (
                <>
                    <div className={cx('sidebar-login')}>
                        <p className={cx('title-login')}>
                            Đăng nhập để follow các tác giả, thích video và xem
                            bình luận.
                        </p>
                        <Button outline big>
                            Đăng nhập
                        </Button>
                    </div>
                    <SidebarAccounts
                        label="Tài khoản được đề xuất"
                        moreBtn="Xem tất cả"
                    />
                </>
            )}

            <SidebarAccounts hastag label="Khám phá" />

            <SidebarFooter />
        </aside>
    );
}

export default Sidebar;
