import PropTypes from 'prop-types';
import './Section.styled';
const Section = ({ title, children }) => (
  <>
    <h1>{title}</h1>
    {children}
  </>
);

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
