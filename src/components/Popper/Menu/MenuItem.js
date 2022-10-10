import { Wrapper as Button } from '~/components/Button';

function MenuItem({ data, onClick }) {
    return (
        <div>
            <Button
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
