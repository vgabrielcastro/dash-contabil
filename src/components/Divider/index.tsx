interface DividerProps {
  className?: string;
}

const Divider = ({ className = "" }: DividerProps) => {
  return (
    <div className={`flex w-full items-center justify-center mb-3 ${className}`}>
      <div className="border-t border-cool-gray  w-full"></div>
      <div className="border-t border-cool-gray w-full"></div>
    </div>
  );
};

export default Divider;
