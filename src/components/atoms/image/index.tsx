type Props = {
  className?: string;
  src: string;
  alt: string;
};

export const Image = ({ className, src, alt }: Props) => (
  <img className={className} src={src} alt={alt} />
);
export default Image;
