import Text from "../text";
import Title from "../title";

type Props = {
  title: {
    title: string;
    className: string;
  };
  text: {
    text: string;
    className: string;
  };
};

const TitleText = ({ title, text }: Props) => (
  <>
    <Title className={title.className} title={title.title} />
    <Text className={text.className} text={text.text} />
  </>
);
export default TitleText;
