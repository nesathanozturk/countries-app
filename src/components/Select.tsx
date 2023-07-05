import { FaAngleDown } from "react-icons/fa";

const Select = () => {
  return (
    <div className="text-lm-txt">
      <div className="bg-lm-el p-4 px-5 rounded-md flex gap-8 items-center shadow-sm">
        <h1 className="text-xs font-semibold">Filter by Region</h1>
        <FaAngleDown size={13} />
      </div>
      <div className="hidden bg-lm-el p-4 px-6 rounded-md mt-1 font-semibold text-xs shadow-sm">
        <ul>
          <li className="mb-2">Africa</li>
          <li className="mb-2">America</li>
          <li className="mb-2">Asia</li>
          <li className="mb-2">Europe</li>
          <li>Ocenia</li>
        </ul>
      </div>
    </div>
  );
};

export default Select;