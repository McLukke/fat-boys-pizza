import styles from './styles';

const Page = ({
  className,
  ...restProps
}) => <div className={classNames(className, styles.base)} {...restProps} />;

const Wrapper = ({
  className,
  ...restProps
}) => <div className={classNames(className, styles.wrapper)} {...restProps} />;

Page.Wrapper = Wrapper;

export default Page;
