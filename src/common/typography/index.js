import styles from './styles';

const Base = ({
  className,
  center,
  ...restProps
}) => (
  <div
    className={classNames(
      styles.base,
      { [styles.center]: Boolean(center) },
      className,
    )}
    {...restProps}
  />
);

export const Heading = ({
  className,
  ...restProps
}) => (
  <Base
    className={classNames(
      styles.heading,
      className,
    )}
    {...restProps}
  />
);

export const Subheading = ({
  className,
  ...restProps
}) => (
  <Base
    className={classNames(
      styles.subheading,
      className,
    )}
    {...restProps}
  />
);

export const Title = ({
  className,
  ...restProps
}) => (
  <Base
    className={classNames(
      styles.title,
      className,
    )}
    {...restProps}
  />
);
