import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faHome, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { Wrapper as Button } from '~/components/Button';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);
function Sidebar() {
    return <aside className={cx('wrapper')}>Sidebar</aside>;
}

export default Sidebar;
