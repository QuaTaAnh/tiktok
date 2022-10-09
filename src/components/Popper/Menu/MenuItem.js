import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import { Wrapper as Button } from '~/components/Button';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
    return (
        <div>
            <Button menuItem leftIcon={data.icon} to={data.to}>
                {data.title}
            </Button>
        </div>
    );
}

export default MenuItem;
