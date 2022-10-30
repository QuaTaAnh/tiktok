import PropTypes from 'prop-types';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    const classes = cx('wrapper');
    return (
        <>
            <Link to={`/@${data.nickname}`} className={classes}>
                <Image
                    className={cx('avatar')}
                    src={data.avatar}
                    alt={data.full_name}
                />
                <div className={cx('info')}>
                    <h4 className={cx('name')}>
                        <span>{data.full_name}</span>
                        {data.tick && (
                            <FontAwesomeIcon
                                className={cx('check')}
                                icon={faCircleCheck}
                            />
                        )}
                    </h4>
                    <span className={cx('username')}>{data.nickname}</span>
                </div>
            </Link>
        </>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
