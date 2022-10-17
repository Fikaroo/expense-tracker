import React, { FC } from "react";
import StatsItem from "../Stats/StatsItem";

type ViewBudgetProps = {
  handleEditClick: any;
  budget: number;
};

const ViewBudget: FC<ViewBudgetProps> = ({ handleEditClick, budget }) => {
  return (
    <StatsItem
      figure={
        <button
          className="btn btn-sm btn-success text-black"
          onClick={handleEditClick}
        >
          Add funds
        </button>
      }
      title={"Budget"}
      value={budget.toString()}
      desc={"₼"}
    />
  );
};

export default ViewBudget;
