import Page from 'components/Page';
import { RibbonLabel } from 'components/Label';
import { Row, Col } from 'antd';
import { Heading, Subheading } from 'typography';
import commonStyles from 'commonStyles';

import specialDeals from './constants';
import styles from './styles';

const HomePage = () => (
  <Page.Content>
    {specialDeals.map((specialDeal, index) => (
      <React.Fragment key={`${(specialDeal.title).toLowerCase().replace(' ', '-')}-${index}`}>
        <Row type="flex" justify="center" align="top">
          <Col xs={12}>
            <RibbonLabel>{specialDeal.title}</RibbonLabel>
          </Col>
        </Row>

        {specialDeal.content.map((special, idx) => (
          <Row
            key={`${special.displayName.toLowerCase().replace(' ', '-')}-${idx}`}
            type="flex"
            justify="start"
            align="middle"
            gutter={24}
            className={commonStyles.mb3}
          >
            <Col xs={12}>
              <img className={styles.images} src={special.image} alt={special.displayName} />
            </Col>

            <Col xs={12}>
              <Heading>{special.displayName}</Heading>
              <Subheading>
                {special.description ? `${special.description} - ` : ''}
                {special.price}
              </Subheading>
            </Col>
          </Row>
        ))}
      </React.Fragment>
    ))}
  </Page.Content>
);

export default HomePage;
