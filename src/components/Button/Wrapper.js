import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import clsx from 'clsx';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Wrapper(props) {
    const classes = clsx({
        [styles.color]: props.color,
        [styles.primary]: props.primary,
        [styles.active]: props.active,
        [styles.dispath]: props.dispath,
    });
    return (
        <div className={cx('wrapper')}>
            <Link className={classes} to={props.to ? props.to : '/'}>
                <FontAwesomeIcon className={cx('icon-btn')} icon={props.icon} />
                <span>{props.title}</span>
            </Link>
        </div>
    );
}

export default Wrapper;
