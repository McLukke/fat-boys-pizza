import Page from 'components/Page';
import NavBar from 'components/NavBar';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'home';
import SignaturePizzasPage from 'signaturepizzas';
import SidesPage from 'sides';
import CateringPage from 'catering';
import ContactPage from 'contact';
import ErrorPage from '404';

const App = (props) => {
  const { isLoading } = props;

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <Page.Wrapper>
      <NavBar />

      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/signature-pizzas" component={SignaturePizzasPage} />
        <Route path="/sides" component={SidesPage} />
        <Route path="/catering" component={CateringPage} />
        <Route path="/contact" component={ContactPage} />

        <Route component={ErrorPage} />
      </Switch>
    </Page.Wrapper>
  );
};

App.propTypes = {
  isLoading: PropTypes.bool,
};

export default App;
