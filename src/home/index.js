import Page from 'components/Page';
import { RibbonLabel } from 'components/Label';
import { Row, Col } from 'antd';
import { Heading, Subheading } from 'typography';
import commonStyles from 'commonStyles';

import { dailySpecials } from './constants';
import styles from './styles';

const HomePage = () => (
  <Page.Content>
    <Row type="flex" justify="center" align="top">
      <Col xs={12}>
        <RibbonLabel>Daily Specials</RibbonLabel>
      </Col>
    </Row>

    {dailySpecials.map((dailySpecial, index) => (
      <Row
        key={`${dailySpecial.displayName.split(' ').join('-')}-${index}`}
        type="flex"
        justify="start"
        align="middle"
        gutter={24}
        className={commonStyles.mb3}
      >
        <Col xs={12}>
          <img className={styles.images} src={dailySpecial.image} alt={dailySpecial.displayName} />
        </Col>

        <Col xs={12}>
          <Heading>{dailySpecial.displayName}</Heading>
          <Subheading>{dailySpecial.description} - {dailySpecial.price}</Subheading>
        </Col>
      </Row>
    ))}
  </Page.Content>
);

export default HomePage;
