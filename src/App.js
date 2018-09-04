import PropTypes from 'prop-types';
// import Page from 'components/Page';
import PrimaryNavBar from 'components/PrimaryNavBar';
import { Switch, Route } from 'react-router-dom';
import commonStyles from 'commonStyles';

import HomePage from 'home';

const App = (props) => {
  const { isLoading } = props;

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <div
      className={classNames(
        commonStyles.flex,
        commonStyles.flexColumn,
      )}
    >
      <PrimaryNavBar />
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
};

App.propTypes = {
  isLoading: PropTypes.bool,
};

export default App;
