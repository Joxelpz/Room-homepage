import Logo from "../logo";
import TextLink from "../text-link";
import IconHamburger from "../../../icons/gl-hamburger";

type Props = {
  onclick?(): void;
  list: string[];
};

export const MenuDesktop = ({ onclick, list }: Props) => (
  <div className="sm:px-[26px] lg:px-[60px] py-[50px] flex items-center gap-[50px] sm:justify-between lg:justify-normal">
    <Logo />
    <div className="lg:flex items-center gap-[30px] sm:hidden">
      {list.map((item, i) => (
        <TextLink
          key={i}
          className="text-paragraph font-semibold py-[9px] border-solid border-b-[2px] border-transparent hover:border-white text-white lg:no-underline"
          text={item}
        />
      ))}
    </div>
    <div className="sm:inline lg:hidden cursor-pointer" onClick={onclick}>
      <IconHamburger />
    </div>
  </div>
);
export default MenuDesktop;
