import React, { FC, useState } from "react";
import StatsItem from "../Stats/StatsItem";

type EditBudgetProps = {
  handleSaveClick: any;
  budget: number;
};

const EditBudget: FC<EditBudgetProps> = ({ handleSaveClick, budget }) => {
  const [value, setValue] = useState(budget);

  const handleKeypress = (e: any) => {
    if (e.keyCode === 13) {
      handleSaveClick(value);
    }
  };

  return (
    <StatsItem
      figure={
        <button
          className="btn btn-sm mt-4 btn-success text-black"
          onClick={() => handleSaveClick(value)}
        >
          Save
        </button>
      }
      title={"Budget"}
      value={
        <input
          type="number"
          placeholder={value.toString()}
          className="input input-sm w-3/4 max-w-xs bg-slate-300"
          onChange={(e: any) => setValue(Number(e.target.value))}
          onKeyDown={(e) => handleKeypress(e)}
          autoFocus
        />
      }
      desc={"₼"}
    />
  );
};

export default EditBudget;
