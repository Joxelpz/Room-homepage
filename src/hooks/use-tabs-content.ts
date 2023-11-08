import { useState } from "react";

export const useTabsContent = () => {
  const [tab, setTab] = useState(0);
  const incrementarContador = () => {
    if (tab < 2) {
      setTab(tab + 1);
    }
  };

  const decrementarContador = () => {
    if (tab > 0) {
      setTab(tab - 1);
    }
  };
  return { tab, incrementarContador, decrementarContador };
};
export default useTabsContent;
