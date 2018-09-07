import { RibbonLabel } from 'components/Label';
import Page from 'components/Page';
import Panel from 'components/Panel';
import { Row, Col } from 'antd';
import { Title, Subheading } from 'typography';
import commonStyles from 'commonStyles';

import pageContent from './constants';

const SignaturePizzasPage = () => (
  <Page.Content>
    {pageContent.map((section, idx) => (
      <React.Fragment key={`${section.title.toLowerCase().replace(' ', '-')}-${idx}`}>
        <Row type="flex" justify="center" align="top">
          <Col xs={12}>
            <RibbonLabel>{section.title}</RibbonLabel>
          </Col>
        </Row>

        <Panel>
          {section.content.map((signaturePizzas, index) => (
            <Row
              key={`${signaturePizzas.title.toLowerCase().replace(' ', '-')}-${index}`}
              type="flex"
              justify="start"
              align="middle"
              guter={16}
            >
              <Col span={20}>
                <Title>{signaturePizzas.title}</Title>
                <Subheading className={commonStyles.mb2}>
                  {signaturePizzas.ingredients.join(', ')}
                </Subheading>
              </Col>

              <Col span={4}>
                <button>Add to Order</button>
              </Col>
            </Row>
          ))}
        </Panel>

        <div className={classNames(commonStyles.flex, commonStyles.mt2, commonStyles.mb2)} />
      </React.Fragment>
    ))}
  </Page.Content>
);

export default SignaturePizzasPage;
