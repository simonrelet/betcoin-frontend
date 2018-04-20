import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const mapStateToProps = ({ userProfile }) => ({ userProfile });

function WithUser({ userProfile, children }) {
  return children(userProfile);
}

WithUser.propTypes = {
  children: PropTypes.func.isRequired,
  userProfile: PropTypes.object,
};

export default connect(mapStateToProps)(WithUser);
