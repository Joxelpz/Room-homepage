import CardBanner from "./components/atoms/card-banner";
import ImageBanner from "./components/atoms/image-banner";
import About from "./components/molecules/about";
import ButtonsControls from "./components/molecules/buttons-controls";
import Menu from "./components/molecules/menu";
import { DATA_BANNER as data } from "./data/data";
import { DATA_ABOUT as about } from "./data/data";
import useTabsContent from "./hooks/use-tabs-content";

function App() {
  const { tab, incrementarContador, decrementarContador } = useTabsContent();

  return (
    <div className="sm:flex sm:flex-col lg:grid lg:grid-cols-24 lg:grid-rows-6 lg:min-h-screen relative">
      <Menu />
      <ImageBanner srcD={data[tab].imageD} srcM={data[tab].imageM} />
      <div className="lg:col-span-10 lg:row-span-4 relative">
        <CardBanner
          className="gap-5 sm:px-[30px] sm:py-[56px] lg:py-0 lg:px-6"
          title={data[tab].title}
          description={data[tab].description}
        />
        <ButtonsControls
          left={{
            className:
              tab === 0 && tab === 0 ? "bg-very !cursor-not-allowed" : "",
            onClick: decrementarContador,
          }}
          right={{
            className:
              tab === 2 && tab === 2 ? "bg-very !cursor-not-allowed" : "",
            onClick: incrementarContador,
          }}
        />
      </div>
      <About title={about.title} text={about.description} />
    </div>
  );
}

export default App;
