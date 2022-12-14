import React, { useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import StatsItem from "./StatsItem";

const Stats = () => {
  const transactions = useAppSelector(
    (state) => state.transaction.transactions
  );
  let totalIncome = 0;
  let totalExpense = 0;

  transactions.map((transaction: any) => {
    transaction.type === "Income"
      ? (totalIncome += Number(transaction.amount))
      : (totalExpense += Number(transaction.amount));
  });

  const benefit = totalIncome - totalExpense;
  return (
    <section className="w-full">
      <div className="stats w-full stats-vertical md:stats-horizontal">
        {/* <Budget /> */}
        <StatsItem
          title={"Total Income"}
          value={totalIncome.toString()}
          desc={"₼"}
        />
        <StatsItem
          title={"Total Expense"}
          value={totalExpense.toString()}
          desc={"₼"}
        />
        <StatsItem title={"Benefit"} value={benefit.toString()} desc={"₼"} />
      </div>
    </section>
  );
};

export default Stats;
