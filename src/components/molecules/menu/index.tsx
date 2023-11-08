import { DATA_MENU as data } from "../../../data/data";
import { useState } from "react";
import MenuDesktop from "../../atoms/menu-desktop";
import MenuMobile from "../../atoms/menu-mobile";

const Menu = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div className="absolute lg:top-0 lg:left-0 sm:w-full lg:w-auto sm:h-full lg:h-auto">
        <MenuDesktop list={data} onclick={() => setMenu(true)} />
      </div>
      {menu && <MenuMobile list={data} onclick={() => setMenu(false)} />}
    </>
  );
};
export default Menu;
