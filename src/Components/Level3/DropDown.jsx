import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const DropDown = ({ title, list, onChange }) => {
  const listItems = list.split(",");
  const [showList, setShowList] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowList(false);
    onChange(item); // Call the callback function with the selected item
  };

  return (
    <div>
      <div className="flex justify-center">
        <button
          onClick={() => setShowList(!showList)}
          className="items-center text-[12px] w-[90%] p-[5px_20px] flex justify-between shadow-[0px_-2px_10px_rgba(0,0,0,1)]"
        >
          {selectedItem || title}
          <span>
            <IoIosArrowDown />
          </span>
        </button>
      </div>
      {showList && (
        <div className="mx-auto my-[10px] flex p-[10px_20px] shadow-[0px_-2px_10px_rgba(0,0,0,1)] w-[90%]">
          <ul className="w-[100%]">
            {listItems.map((item, index) => (
              <li
                className="p-[5px_10px] my-1 text-[12px] hover:bg-gray-950 text-white shadow-[0px_-2px_10px_rgba(0,0,0,1)] cursor-pointer"
                key={index}
                onClick={() => handleItemClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDown;
