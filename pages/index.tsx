import prisma from "../lib/prisma";
import Head from "next/head";
import { Header, Stats, Transaction, Transactions } from "../components";
import { useAppDispatch } from "../redux/hooks";
import { setAmount } from "../redux/budgetSlice";
import { NextPage } from "next";

// export const getServerSideProps = async () => {
//   const getBudget = await prisma.budget.findMany();
//   const amount = getBudget[0].amount.toJSON();

//   return {
//     props: {
//       budget: amount,
//     },
//   };
// };

// const setBudget = async (budget: number) => {
//   const res = await axios.post("/api/addBudget", {
//     amount: budget,
//   });

//   const data = await res.data;
//   console.log(data);
// };
const Home: NextPage = () => {
  // const dispatch = useAppDispatch();
  // dispatch(setAmount(budget));
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
