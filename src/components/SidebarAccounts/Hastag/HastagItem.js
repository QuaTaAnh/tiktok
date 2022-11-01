import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Hastag.module.scss';

const cx = classNames.bind(styles);

function HastagItem({ icon, title }) {
    return (
        <div className={cx('hastag-content')}>
            <div className={cx('hastag-item')}>
                <FontAwesomeIcon className={cx('hastag-icon')} icon={icon} />
                <p className={cx('hastag-title')}>{title}</p>
            </div>
        </div>
    );
}

HastagItem.propTypes = {
    icon: PropTypes.node.isRequired,
    title: PropTypes.string,
};

export default HastagItem;
