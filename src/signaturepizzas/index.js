import { RibbonLabel } from 'components/Label';
import Page from 'components/Page';
import Panel from 'components/Panel';
import { Row, Col } from 'antd';

const SignaturePizzasPage = () => (
  <Page.Content>
    <Row type="flex" justify="center" align="top">
      <Col xs={12}>
        <RibbonLabel>Signature Pizzas</RibbonLabel>
      </Col>
    </Row>

    <Panel>
      Content
    </Panel>
  </Page.Content>
);

export default SignaturePizzasPage;
