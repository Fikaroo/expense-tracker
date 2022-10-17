import React, { useState } from "react";
import ViewBudget from "./ViewBudget";
import EditBudget from "./EditBudget";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setAmount } from "../../redux/budgetSlice";

const Budget = () => {
  const amount = useAppSelector((state: { budget: any }) => state.budget.value);
  const dispatch = useAppDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (value: number) => {
    dispatch(setAmount(value));
    setIsEditing(false);
  };
  return (
    <>
      {isEditing ? (
        <EditBudget handleSaveClick={handleSaveClick} budget={amount} />
      ) : (
        <ViewBudget handleEditClick={handleEditClick} budget={amount} />
      )}
    </>
  );
};

export default Budget;
