import IconClose from "../../../icons/gl-close";
import TextLink from "../text-link";
type Props = {
  onclick?(): void;
  list: string[];
};

const MenuMobile = ({ onclick, list }: Props) => (
  <div className="fixed top-0 w-full lg:hidden h-full bg-[#00000050] z-10">
    <div className="bg-white px-[26px] py-[50px] flex items-center gap-[20px] sm:justify-between">
      <div onClick={onclick}>
        <IconClose />
      </div>
      <div className="flex items-center gap-[25px] ">
        {list.map((item, i) => (
          <TextLink
            key={i}
            className="text-paragraph font-semibold py-[9px] text-black"
            text={item}
          />
        ))}
      </div>
    </div>
  </div>
);
export default MenuMobile;
