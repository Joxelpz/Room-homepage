import clsx from "clsx";
import Title from "../title";
import Button from "../button";
import IconArrow from "../../../icons/gl-arrow";
import TitleText from "../title-tet";

type Props = {
  className?: string;
  title: string;
  description: string;
};

const CardBanner = ({ className, title, description }: Props) => {
  return (
    <div
      className={clsx(
        className,
        "flex flex-col justify-center gap-5 mx-auto max-w-[500px] h-full"
      )}
    >
      <TitleText
        title={{
          title: title,
          className:
            "sm:text-heading-1-sm lg:text-heading-1 font-bold leading-[46px]",
        }}
        text={{ text: description, className: "text-paragraph text-dark " }}
      />
      <Button variant="shop" color="shop">
        <Title className="text-heading-3 font-medium" title="SHOP NOW" />
        <IconArrow />
      </Button>
    </div>
  );
};
export default CardBanner;
