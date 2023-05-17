interface ITitleProps {
  title: string;
}
export const Title = ({ title }: ITitleProps) => <h1 style={{ letterSpacing: 5, textTransform: "uppercase" }}>{title}</h1>;
