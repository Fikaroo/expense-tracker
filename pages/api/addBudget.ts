import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const budgetData = req.body;
  console.log(budgetData);

  const saveBudget = await prisma.budget.create({
    data: budgetData,
  });

  res.json(saveBudget);
};
