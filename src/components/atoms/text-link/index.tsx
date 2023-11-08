import clsx from "clsx";

type Props = {
  className?: string;
  text: string;
};

export const TextLink = ({ className, text }: Props) => {
  return (
    <a className={clsx(className)} href="/">
      {text}
    </a>
  );
};

export default TextLink;
