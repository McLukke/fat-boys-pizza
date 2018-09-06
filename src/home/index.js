import Page from 'components/Page';
import { RibbonLabel } from 'components/Label';
import { Row, Col } from 'antd';

const HomePage = () => (
  <Page.Content>
    <Row type="flex" justify="center" align="top">
      <Col xs={12}>
        <RibbonLabel>Daily Specials</RibbonLabel>
      </Col>
    </Row>
  </Page.Content>
);

export default HomePage;
