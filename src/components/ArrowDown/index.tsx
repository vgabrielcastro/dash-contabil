import upArrow from "../../assets/arrow-up.svg";
import downArrow from "../../assets/down-arrow.svg";

type ArrowDownIconProps = {
  isOpen: boolean;
};

function ArrowDownIcon({ isOpen }: ArrowDownIconProps) {
  return (
    <img
      src={isOpen ? upArrow : downArrow}
      alt="Seta"
      className="w-6 h-6 transition-transform duration-300 ease-in-out transform rotate-0"
    />
  );
}

export default ArrowDownIcon;
