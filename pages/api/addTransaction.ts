import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

const addTransaction = async (req: NextApiRequest, res: NextApiResponse) => {
  const transactionData = req.body;
  const saveTransaction = await prisma.transactions.create({
    data: {
      name: transactionData.data.transactionName,
      desc: transactionData.data.desc,
      date: transactionData.data.transactionDate,
      amount: transactionData.data.amount,
      type: transactionData.data.transactionType,
    },
  });

  res.json(saveTransaction);
};

export default addTransaction;
