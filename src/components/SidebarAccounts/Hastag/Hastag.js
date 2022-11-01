import classNames from 'classnames/bind';
import { faHashtag, faMusic } from '@fortawesome/free-solid-svg-icons';

import styles from './Hastag.module.scss';
import HastagItem from './HastagItem';

const cx = classNames.bind(styles);

function Hastag() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('hastag-row')}>
                <HastagItem icon={faHashtag} title="sansangthaydoi" />
                <HastagItem icon={faHashtag} title="mackedoi" />
            </div>
            <HastagItem icon={faHashtag} title="sansangthaydoi" />
            <HastagItem icon={faMusic} title="Thiên Thần Tình Yêu" />
            <HastagItem icon={faMusic} title="Thiên Thần Tình Yêu" />
            <HastagItem icon={faMusic} title="Thiên Thần Tình Yêu" />
            <HastagItem icon={faMusic} title="Thiên Thần Tình Yêu" />
        </div>
    );
}

export default Hastag;
