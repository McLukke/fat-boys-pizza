import Page from 'components/Page';
import { withRouter } from 'react-router-dom';
import logo from 'assets/logo.jpg';

const ErrorPage = ({ history }) => (
  <Page.Content>
    <img src={logo} alt="Fat Boys Pizza" />

    Error!

    <button type="button" onClick={() => history.push('/')}>Go Back to Home</button>
  </Page.Content>
);

ErrorPage.propTypes = {
  history: PropTypes.shape(),
};

export default withRouter(ErrorPage);
