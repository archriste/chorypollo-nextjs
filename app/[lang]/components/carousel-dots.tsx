import classNames from "classnames";

type Props = {
  itemsLength: number;
  selectedIndex: number;
};

const Dots = ({ itemsLength, selectedIndex }: Props) => {
  const arr = new Array(itemsLength).fill(0);
  return (
    <div className="my-2 flex justify-center gap-1">
      {arr.map((_, index) => {
        const selected = index === selectedIndex;
        return (
          <div
            className={classNames({
              "h-2 w-2 rounded-full bg-white transition-all duration-300": true,
              "opacity-50": !selected,
            })}
            key={index}
          ></div>
        );
      })}
    </div>
  );
};

export default Dots;
