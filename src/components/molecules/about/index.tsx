import Image from "../../atoms/image";
import TitleText from "../../atoms/title-tet";

type Props = {
  title: string;
  text: string;
};

const About = ({ title, text }: Props) => (
  <>
    <div className="lg:col-span-7 lg:row-span-2">
      <Image
        className="w-full h-full"
        src="./images/image-about-dark.jpg"
        alt=""
      />
    </div>
    <div className="my-auto lg:col-span-10 lg:row-span-2 bg-white">
      <div className="flex flex-col gap-[15px] max-w-[480px] mx-auto px-[30px] sm:py-[56px] lg:py-0">
        <TitleText
          title={{
            title: title,
            className:
              "sm:text-heading-2-sm lg:text-heading-2 uppercase font-bold",
          }}
          text={{
            text: text,
            className: "text-paragraph text-dark ",
          }}
        />
      </div>
    </div>
    <div className="lg:col-span-7 lg:row-span-2">
      <Image
        className="w-full h-full"
        src="./images/image-about-light.jpg"
        alt=""
      />
    </div>
  </>
);
export default About;
