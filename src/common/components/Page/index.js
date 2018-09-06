import commonStyles from 'commonStyles';
import { Row, Col } from 'antd';

import styles from './styles';

const Page = ({
  className,
  ...restProps
}) => <div className={classNames(className, styles.base)} {...restProps} />;

const Wrapper = ({
  className,
  ...restProps
}) => (
  <div
    className={classNames(
      commonStyles.flex,
      commonStyles.flexColumn,
      className,
    )}
    {...restProps}
  />
);

const Content = ({
  className,
  children,
  ...restProps
}) => (
  <div
    className={classNames(
      styles.content,
      className,
    )}
    {...restProps}
  >
    <Row type="flex" justify="center" align="middle">
      <Col xs={24} md={16} lg={12}>
        {children}
      </Col>
    </Row>
  </div>
);

Page.Wrapper = Wrapper;
Page.Content = Content;

export default Page;
