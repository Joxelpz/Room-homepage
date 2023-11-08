import clsx from "clsx";

type Props = {
  className?: string;
  text: string;
};

export const Text = ({ className, text }: Props) => {
  return <div className={clsx(className)}>{text}</div>;
};

export default Text;
