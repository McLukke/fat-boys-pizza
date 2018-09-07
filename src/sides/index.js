import { RibbonLabel } from 'components/Label';
import Page from 'components/Page';
import { Row, Col } from 'antd';
import Panel from 'components/Panel';
import { Title, Description } from 'typography';

import content from './constants';

const SidesPage = () => (
  <Page.Content>
    {content.map((section, index) => (
      <React.Fragment key={`${section.title.toLowerCase().replace(' ', '-')}-${index}`}>
        <Row type="flex" justify="center" align="top">
          <Col xs={12}>
            <RibbonLabel>{section.title}</RibbonLabel>
          </Col>
        </Row>

        <Panel>
          {section.content.map((item, idx) => (
            <Row key={`${item.name.toLowerCase().replace(' ', '-')}-${idx}`}>
              <Col span={16}>
                <Title>{item.name}</Title>
                <Description>{item.description}</Description>
              </Col>

              <Col span={4}>{item.price}</Col>
              <Col span={4}>
                <button>Add to order</button>
              </Col>
            </Row>
          ))}
        </Panel>
      </React.Fragment>
    ))}
  </Page.Content>
);

export default SidesPage;
