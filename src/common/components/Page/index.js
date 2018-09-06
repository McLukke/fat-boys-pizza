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
      styles.wrapper,
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
    <Row type="flex" justify="center" align="top">
      <Col xs={24} md={16} lg={12}>
        {children}
      </Col>
    </Row>
  </div>
);

Page.Wrapper = Wrapper;
Page.Content = Content;

export default Page;
