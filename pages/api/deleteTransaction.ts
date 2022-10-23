import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

const deleteTransaction = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.body;
  try {
    const delTransaction = await prisma.transactions.delete({
      where: {
        id,
      },
    });
    res.status(200);
  } catch (error) {
    res
      .status(403)
      .json({ err: "Error occured while deleting a transaction item." });
  }
};

export default deleteTransaction;
