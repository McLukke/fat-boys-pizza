import Page from 'components/Page';
import NavBar from 'components/NavBar';
import { withRouter, Switch, Route } from 'react-router-dom';

import HomePage from 'home';
import SignaturePizzasPage from 'signaturepizzas';
import SidesPage from 'sides';
import CateringPage from 'catering';
import ContactPage from 'contact';
import ErrorPage from '404';

class App extends React.Component {
  render() {
    const { isLoading } = this.props;

    if (isLoading) {
      return <div>Loading</div>;
    }

    return (
      <Page.Wrapper>
        <NavBar />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/signature-pizzas" component={SignaturePizzasPage} />
          <Route path="/sides" component={SidesPage} />
          <Route path="/catering" component={CateringPage} />
          <Route path="/contact" component={ContactPage} />

          <Route component={ErrorPage} />
        </Switch>
      </Page.Wrapper>
    );
  }
}

App.propTypes = {
  isLoading: PropTypes.bool,
};

// need react router dom
export default withRouter(App);
