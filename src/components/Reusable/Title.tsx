interface ITitle {
    name: string;
    extra?: string;
}

const Title = ({ name, extra }: ITitle) => {
  return (
    <h2 className="text-headline-md mb-4 rotate-tilt-xsm">
      <span className="underline-bold">{name}</span>{extra && ` - ${extra}`}
    </h2>
  );
};

export default Title;
