import { RibbonLabel } from 'components/Label';
import Page from 'components/Page';
import { Row, Col } from 'antd';

const SidesPage = () => (
  <Page.Content>
    <Row type="flex" justify="center" align="top">
      <Col xs={12}>
        <RibbonLabel>Sides Menu</RibbonLabel>
      </Col>
    </Row>
  </Page.Content>
);

export default SidesPage;
