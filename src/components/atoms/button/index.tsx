import clsx from "clsx";
import { PropsWithChildren } from "react";

const variantButton = {
  control: "sm:w-[60px] sm:h-[60px] lg:w-20 lg:h-20 grid place-content-center",
  shop: "w-fit h-8 flex items-center gap-[30px]",
};
const variantColor = {
  control: "bg-black hover:bg-very",
  shop: "w-fit h-8",
};

type Prosp = {
  className?: string;
  variant: "control" | "shop";
  color: "control" | "shop";
  onClick?(): void;
};

const Button = ({
  className,
  variant,
  color,
  children,
  onClick,
}: PropsWithChildren<Prosp>) => {
  return (
    <button
      className={clsx(
        className,
        "cursor-pointer",
        variantButton[variant as keyof typeof variantButton],
        variantColor[color as keyof typeof variantColor]
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
