import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { useState, useEffect } from 'react';

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
import * as userService from '~/services/userService';
import * as followingService from '~/services/followingService';

const cx = classNames.bind(styles);
const INIT_PAGE = 1;
const PER_PAGE = 5;

function Sidebar() {
    const [page, setPage] = useState(INIT_PAGE);
    const [suggestedUsers, setSuggestedUsers] = useState([]);
    const [followingAccounts, setFollowingAccounts] = useState([]);

    useEffect(() => {
        userService
            .getSuggest({ page, per_page: PER_PAGE })
            .then((data) => {
                setSuggestedUsers((prev) => [...prev, ...data]);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [page]);

    const handleSeeAll = () => {
        setPage(page + 1);
    };

    useEffect(() => {
        followingService
            .getFollowing({ page: 1 })
            .then((data) => {
                setFollowingAccounts(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

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
                        dataSuggested={suggestedUsers}
                        onSeeAll={handleSeeAll}
                    />
                    <SidebarAccounts
                        label="Các tài khoản đang follow"
                        moreBtn="Xem thêm"
                        dataFollowing={followingAccounts}
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
                        dataSuggested={suggestedUsers}
                        onSeeAll={handleSeeAll}
                    />
                </>
            )}

            <SidebarAccounts hastag label="Khám phá" />

            <SidebarFooter />
        </aside>
    );
}

export default Sidebar;
