import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Wrapper(props) {
    return (
        <div className={cx('wrapper')}>
            <a>
                <FontAwesomeIcon className={cx('icon')} icon={props.icon} />
                <span>{props.title}</span>
            </a>
        </div>
    );
}

export default Wrapper;
