import styles from './styles';

const Panel = ({
  className,
  ...restProps
}) => (
  <div className={classNames(className, styles.base)} {...restProps} />
);

export default Panel;
