import { TrashIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { deleteTransaction } from "../redux/transactionSlice";

const Transactions = () => {
  const transactions = useAppSelector(
    (state) => state.transaction.transactions
  );
  const [filteredData, setfilteredData] = useState(transactions || []);

  useEffect(() => {
    setfilteredData(transactions);
  }, [transactions]);

  const searchTransaction = (searchValue: string) => {
    if (searchValue !== "") {
      const searchResults = transactions.filter((filteredExpense: any) =>
        filteredExpense.transactionName
          .toLowerCase()
          .startsWith(searchValue.toLowerCase())
      );
      setfilteredData(searchResults);
    } else {
      setfilteredData(transactions);
    }
  };

  const dispatch = useAppDispatch();

  return (
    <section className="w-full overflow-hidden">
      <div className="flex justify-center w-full">
        <h2 className="text-3xl font-semibold">Transactions</h2>
      </div>

      <div className="flex justify-between items-end px-4">
        <div>
          Show{" "}
          <select
            className="select select-sm bg-white text-black"
            defaultValue="10"
          >
            <option value="10">10</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>{" "}
          entries
        </div>
        <div className="form-control">
          <label className="label">
            <span>Search :</span>
          </label>
          <input
            type="text"
            placeholder="Search name"
            className="input w-full max-w-xs text-black"
            onChange={(e) => searchTransaction(e.target.value)}
          />
        </div>
      </div>
      <div className="overflow-x-auto mt-4">
        <table className="table table-compact sm:table-normal w-full text-black">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Desc</th>
              <th>Date</th>
              <th>Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((transaction: any, idx: number) => (
              <tr key={transaction.id}>
                <th>{idx + 1}</th>
                <td>{transaction.transactionName}</td>
                <td>{transaction.desc}</td>
                <td>{transaction.transactionDate}</td>
                <td>
                  {transaction.amount === 0 ? (
                    <span
                      className={
                        "badge badge-info sm:text-base text-white p-2 sm:p-3"
                      }
                    >
                      0 ₼
                    </span>
                  ) : (
                    <span
                      className={`badge ${
                        transaction.transactionType === "Income"
                          ? "badge-primary"
                          : "badge-error"
                      } sm:text-base text-white p-2 sm:p-3`}
                    >
                      {transaction.transactionType === "Income"
                        ? `+ ${transaction.amount} ₼`
                        : `- ${transaction.amount} ₼`}
                    </span>
                  )}
                </td>
                <td className="w-1/12">
                  <TrashIcon
                    className="w-8 md:w-10 p-2 bg-error text-white rounded-md cursor-pointer hover:bg-opacity-90"
                    onClick={() => dispatch(deleteTransaction(transaction.id))}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Transactions;
