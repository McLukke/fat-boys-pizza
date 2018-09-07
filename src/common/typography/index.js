import styles from './styles';

export const Heading = ({
  className,
  ...restProps
}) => <div className={classNames(className, styles.heading)} {...restProps} />;

export const Subheading = ({
  className,
  ...restProps
}) => <div className={classNames(className, styles.subheading)} {...restProps} />;

export const Title = ({
  className,
  ...restProps
}) => <div className={classNames(className, styles.title)} {...restProps} />;
