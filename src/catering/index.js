import { RibbonLabel } from 'components/Label';
import Page from 'components/Page';
import { Row, Col } from 'antd';
import { Subheading } from 'typography';

const CateringPage = () => (
  <Page.Content>
    <Row type="flex" justify="center" align="top">
      <Col span={14}>
        <RibbonLabel>Catering</RibbonLabel>
        <Subheading center>Please allow minimum of 24 hours advance notice</Subheading>
      </Col>
    </Row>
  </Page.Content>
);

export default CateringPage;
