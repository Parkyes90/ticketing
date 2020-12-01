import mongoose from "mongoose";
import express, { Request, Response } from "express";
import {
  NotFoundError,
  requireAuth,
  validateRequest,
} from "@pystickets/common";
import { body } from "express-validator";
import { Ticket } from "../models/ticket";
import { Order } from "../models/order";

const router = express.Router();

router.post(
  "/api/orders",
  requireAuth,
  [
    body("ticketId")
      .not()
      .isEmpty()
      .custom((input: string) => mongoose.Types.ObjectId.isValid(input))
      .withMessage("TicketId must be provided"),
  ],
  async (req: Request, res: Response) => {
    // const { ticketId } = req.body;
    // const ticket = await Ticket.findById(ticketId);
    // if (!ticket) {
    //   throw new NotFoundError();
    // }
    // console.log("tes123t");
    res.send({});
  }
);

export { router as newOrderRouter };
