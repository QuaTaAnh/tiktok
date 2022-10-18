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

const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem icon={<HomeIcon />} title="Dành cho bạn" />
                <MenuItem icon={<UserGroupIcon />} title="Đang Follow" />
                <MenuItem icon={<LiveIcon />} title="LIVE" />
            </Menu>
        </aside>
    );
}

export default Sidebar;
