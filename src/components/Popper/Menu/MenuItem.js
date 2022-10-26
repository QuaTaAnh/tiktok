import PropTypes from 'prop-types';
import Button from '~/components/Button';

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

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};
export default MenuItem;
