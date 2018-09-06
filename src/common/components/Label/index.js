import styles from './styles';

const Label = ({
  className,
  ...restProps
}) => <div className={classNames(className, styles.base)} {...restProps} />;

export const RibbonLabel = ({
  className,
  ...restProps
}) => <div className={classNames(className, styles.ribbon)} {...restProps} />;

export default Label;
