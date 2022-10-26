import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    return (
        <div>
            <Button
                separate={data.separate}
                menuItem
                leftIcon={data.icon}
                to={data.to}
                onClick={onClick}
            >
                {data.title}
            </Button>
        </div>
    );
}

export default MenuItem;
