import styles from './styles';

const Base = ({
  className,
  center,
  bold,
  ...restProps
}) => (
  <div
    className={classNames(
      styles.base,
      { [styles.center]: Boolean(center) },
      { [styles.bold]: Boolean(bold) },
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

export const Description = ({
  className,
  ...restProps
}) => (
  <Base
    className={classNames(
      styles.description,
      className,
    )}
    {...restProps}
  />
);
