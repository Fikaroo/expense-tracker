import prisma from "../lib/prisma";
import Head from "next/head";
import { Header, Stats, Transaction, Transactions } from "../components";
import { useAppDispatch } from "../redux/hooks";
import axios from "axios";
import { FC, useEffect } from "react";
import { addTransaction } from "../redux/transactionSlice";

export const getServerSideProps = async () => {
  const transactionData = await prisma.transactions.findMany({
    // skip: 0,
    // take: 10,
    select: {
      id: true,
      name: true,
      desc: true,
      date: true,
      amount: true,
      type: true,
    },
  });

  const count = await prisma.transactions.count();

  const transactions = transactionData.map((transaction) => {
    return {
      ...transaction,
      amount: transaction.amount.toString(),
    };
  });

  return {
    props: {
      transactions: transactions,
    },
  };
};

type NextPage = {
  transactions: any;
};

const Home: FC<NextPage> = ({ transactions }) => {
  const dispatch = useAppDispatch();
  console.log(transactions);
  useEffect(() => {
    transactions.map((transaction: any) =>
      dispatch(addTransaction(transaction))
    );
  }, [dispatch, transactions]);

  return (
    <div className="font-poppins bg-gradient-to-r from-indigo-500 to-purple-500 text-white gr w-full h-screen font-medium">
      <Head>
        <title>Expense Tracker</title>
        <meta name="description" content="Develop by Fuad Bayramov" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gradient-to-r from-indigo-500 to-purple-500 min-h-min">
        <div className="px-6 py-2 space-y-12">
          <Header />
          <Stats />
          <Transaction />
          <Transactions />
        </div>
      </main>
    </div>
  );
};

export default Home;
