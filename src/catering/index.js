import { RibbonLabel } from 'components/Label';
import Page from 'components/Page';
import { Row, Col } from 'antd';
import { Subheading, Title } from 'typography';
import Panel from 'components/Panel';
import commonStyles from 'commonStyles';

import cateringItems from './constants';

const CateringPage = () => (
  <Page.Content>
    <Row type="flex" justify="center" align="top">
      <Col span={14}>
        <RibbonLabel>Catering</RibbonLabel>
        <Subheading center>Please allow minimum of 24 hours advance notice</Subheading>
      </Col>
    </Row>

    <div className={classNames(commonStyles.flex, commonStyles.mb2, commonStyles.mt2)} />

    <Panel>
      <Row className={commonStyles.mb1}>
        <Col span={6} offset={12}>
          <Title center bold>Small Tray</Title>
        </Col>
        <Col span={6}>
          <Title center bold>Large Tray</Title>
        </Col>
      </Row>

      {cateringItems.map((item, index) => (
        <div key={`${item.name.toLowerCase().replace(' ', '-')}-${index}`} className={commonStyles.mb1}>
          <Row>
            <Col span={12}>
              {item.name}
            </Col>

            <Col span={6}>
              <div style={{ textAlign: 'center' }}>{item.small}</div>
            </Col>

            <Col span={6}>
              <div style={{ textAlign: 'center' }}>{item.large}</div>
            </Col>
          </Row>
        </div>
      ))}
    </Panel>
  </Page.Content>
);

export default CateringPage;
