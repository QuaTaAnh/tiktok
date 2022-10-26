import PropTypes from 'prop-types';
import './GlobalStyles.scss';

function GlobalStyles({ children }) {
    return children;
}
GlobalStyles.PropTypes = {
    children: PropTypes.node.isRequired,
};

export default GlobalStyles;
