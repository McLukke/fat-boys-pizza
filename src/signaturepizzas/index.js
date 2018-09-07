import { RibbonLabel } from 'components/Label';
import Page from 'components/Page';
import Panel from 'components/Panel';
import { Row, Col } from 'antd';
import { Title, Subheading } from 'typography';
import commonStyles from 'commonStyles';

import pageContent from './constants';
import styles from './styles';

const SignaturePizzasPage = () => (
  <Page.Content>
    <Row type="flex" justify="center" align="top">
      <Col xs={12}>
        <RibbonLabel>{pageContent.signaturePizzas.title}</RibbonLabel>
      </Col>
    </Row>

    <Panel>
      {pageContent.signaturePizzas.content.map((signaturePizzas, index) => (
        <Row key={`${signaturePizzas.title.toLowerCase().replace(' ', '-')}-${index}`}>
          <Col xs={24}>
            <div className={styles['signature-item']}>
              <Title>{signaturePizzas.title}</Title>
              <Subheading>{signaturePizzas.ingredients.join(', ')}</Subheading>
            </div>
          </Col>
        </Row>
      ))}
    </Panel>

    <div className={classNames(commonStyles.mt2, commonStyles.mb2)} />

    <Row type="flex" justify="center" align="top">
      <Col xs={12}>
        <RibbonLabel className={commonStyles.mt2}>
          {pageContent.premiumSignaturePizzas.title}
        </RibbonLabel>
      </Col>
    </Row>

    <Panel>
      {pageContent.premiumSignaturePizzas.content.map((premiumSignaturePizzas, index) => (
        <Row key={`${premiumSignaturePizzas.title.toLowerCase().replace(' ', '-')}-${index}`}>
          <Col xs={24}>
            <div className={styles['signature-item']}>
              <Title>{premiumSignaturePizzas.title}</Title>
              <Subheading>{premiumSignaturePizzas.ingredients.join(', ')}</Subheading>
            </div>
          </Col>
        </Row>
      ))}
    </Panel>
  </Page.Content>
);

export default SignaturePizzasPage;
