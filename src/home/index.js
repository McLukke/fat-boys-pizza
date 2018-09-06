import Page from 'components/Page';
import { RibbonLabel } from 'components/Label';
import { Row, Col } from 'antd';
import { Heading, Subheading } from 'typography';

import { dailySpecials } from './constants';

const HomePage = () => (
  <Page.Content>
    <Row type="flex" justify="center" align="top">
      <Col xs={12}>
        <RibbonLabel>Daily Specials</RibbonLabel>

        <Row type="flex" justify="start" align="center" gutter={8}>
          {dailySpecials.map((dailySpecial, index) => (
            <div key={`${dailySpecial.displayName.split(' ').join('-')}-${index}`}>
              <img src={dailySpecial.image} alt={dailySpecial.displayName} />
              <Heading>{dailySpecial.displayName}</Heading>
              <Subheading>{dailySpecial.description}</Subheading>
            </div>
          ))}
        </Row>
      </Col>
    </Row>
  </Page.Content>
);

export default HomePage;
