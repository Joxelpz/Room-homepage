import clsx from "clsx";

type Props = {
  className?: string;
  title: string;
};

export const Title = ({ className, title }: Props) => {
  return <div className={clsx(className)}>{title}</div>;
};

export default Title;
