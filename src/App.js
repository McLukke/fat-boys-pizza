import PropTypes from 'prop-types';
import PrimaryNavBar from 'components/PrimaryNavBar';
import HomePage from 'home';
import { Switch, Route } from 'react-router-dom';


const App = (props) => {
  const { isLoading } = props;

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <div>
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
