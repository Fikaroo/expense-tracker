import { XCircleIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch } from "../redux/hooks";
import { addTransaction } from "../redux/transactionSlice";

type FormValues = {
  transactionName: string;
  desc: string;
  amount: number;
  transactionDate: string;
  transactionType: string;
};

const schema = yup.object().shape({
  transactionType: yup.string(),
  transactionName: yup.string().required("This field required"),
  desc: yup.string().required("This field required"),
  transactionDate: yup.string(),
  amount: yup.number().required("This field required"),
});

const Transanction = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [isShow, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: yupResolver(schema) });
  const dispatch = useAppDispatch();
  const onSubmit = handleSubmit((data) => {
    if (data) {
      setSuccess(true);
      setShow(true);
      setTimeout(() => setSuccess(false), 1000);
      setTimeout(() => setShow(false), 1500);
      dispatch(addTransaction(data));
      setIsModalOpen(!isModalOpen);
      reset();
    }
  });

  return (
    <section className="w-full flex justify-center items-center ">
      {isShow && (
        <div
          className={`alert alert-success absolute top-10 max-w-sm shadow-lg transition-all ${
            isSuccess
              ? "animate-in duration-500 slide-in-from-top-10"
              : "animate-out duration-500 slide-out-to-top-32"
          }`}
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Transaction added!</span>
          </div>
        </div>
      )}
      <label
        htmlFor="transaction"
        className="btn btn-wide btn-accent hover:bg-white hover:bg-opacity-75 text-black modal-button"
      >
        Add Transaction
      </label>

      <input
        type="checkbox"
        id="transaction"
        className="modal-toggle"
        checked={isModalOpen}
        onChange={() => setIsModalOpen(!isModalOpen)}
      />
      <div className="modal modal-bottom sm:modal-middle text-black">
        <div className="modal-box bg-white ">
          <label htmlFor="transaction" className=" absolute right-2 top-2">
            <XCircleIcon className="w-9 cursor-pointer" />
          </label>
          <h3 className="font-bold text-2xl text-center">Add Transaction</h3>
          <form onSubmit={onSubmit}>
            <div className="form-control min-w-min w-full items-center flex flex-col">
              <label className="label max-w-xs w-full ">
                <span>Transaction Type</span>
              </label>
              <select
                {...register("transactionType")}
                className="select w-full max-w-xs"
                defaultValue="Income"
              >
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
              </select>
              <label className="label max-w-xs w-full ">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500">
                  Transaction Name
                </span>
              </label>
              <input
                {...register("transactionName")}
                className={`input w-full max-w-xs ${
                  errors?.transactionName && "border-pink-600"
                }`}
              />
              {errors?.transactionName && (
                <p className="w-full max-w-xs mt-2 text-pink-600 text-sm">
                  {errors.transactionName.message}
                </p>
              )}

              <label className="label max-w-xs w-full">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500">
                  Description
                </span>
              </label>
              <input
                {...register("desc")}
                className={`input w-full max-w-xs ${
                  errors?.desc && "border-pink-600"
                }`}
              />
              {errors?.desc && (
                <p className="w-full max-w-xs mt-2 text-pink-600 text-sm">
                  {errors.desc.message}
                </p>
              )}

              <label className="label max-w-xs w-full">
                <span>Date</span>
              </label>
              <input
                type="text"
                {...register("transactionDate")}
                className="hidden"
                value={startDate.toLocaleDateString("en-GB")}
              />
              <DatePicker
                selected={startDate}
                onChange={(date: Date) => setStartDate(date)}
                dateFormat="dd/MM/yyyy"
                className={`input w-[8rem] max-w-xs ${
                  errors?.transactionDate && "border-pink-600"
                }`}
              />
              <label className="label max-w-xs w-full">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500">
                  Amount
                </span>
              </label>
              <input
                {...register("amount")}
                type="number"
                className={`input w-full max-w-xs ${
                  errors?.amount && "border-pink-600"
                }`}
              />
              {errors?.amount && (
                <p className="w-full max-w-xs mt-2 text-pink-600 text-sm">
                  This field required
                </p>
              )}
            </div>
            <div className="modal-action flex items-center justify-center">
              <button type="submit" className="btn btn-success max-w-xs w-full">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Transanction;
