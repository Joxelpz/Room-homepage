import Image from "../image";

type Props = {
  srcD: string;
  srcM: string;
};

const ImageBanner = ({ srcD, srcM }: Props) => (
  <div className="col-span-14 row-span-4">
    <Image className="w-full h-full md:inline sm:hidden" src={srcD} alt="" />
    <Image className="w-full h-full sm:inline md:hidden" src={srcM} alt="" />
  </div>
);
export default ImageBanner;
