import clsx from "clsx";
import Button from "../../atoms/button";
import IconAngleLeft from "../../../icons/gl-angle-left";
import IconAngleRight from "../../../icons/gl-angle-right";

type Props = {
  className?: string;
  onClickLeft?(): void;
  onClickRight?(): void;
  tab?: number;
  classNameLeft?: string;
  classNameRight?: string;
  left?: {
    onClick?(): void;
    className?: string;
  };
  right?: {
    onClick?(): void;
    className?: string;
  };
};

const ButtonsControls = ({ left, right }: Props) => {
  return (
    <div
      className={clsx(
        "absolute sm:right-0 sm:-top-[60px] lg:top-auto lg:bottom-0 lg:left-0 flex"
      )}
    >
      <Button
        className={left?.className}
        variant="control"
        color="control"
        onClick={left?.onClick}
      >
        <IconAngleLeft />
      </Button>
      <Button
        className={right?.className}
        variant="control"
        color="control"
        onClick={right?.onClick}
      >
        <IconAngleRight />
      </Button>
    </div>
  );
};
export default ButtonsControls;
