import commonStyles from 'commonStyles';

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
  ...restProps
}) => (
  <div
    className={classNames(
      styles.content,
      className,
    )}
    {...restProps}
  />
);

Page.Wrapper = Wrapper;
Page.Content = Content;

export default Page;
