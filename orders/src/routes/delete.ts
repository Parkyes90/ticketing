import express, { Request, Response } from "express";
import {
  NotAuthorizedError,
  NotFoundError,
  OrderStatus,
  requireAuth,
} from "@pystickets/common";
import { Order } from "../models/order";
import { OrderCancelPublisher } from "../events/publishers/order-cancel-publisher";
import { natsWrapper } from "../nats-wrapper";

const router = express.Router();

router.delete(
  "/api/orders/:orderId",
  requireAuth,
  async (req: Request, res: Response) => {
    const { orderId } = req.params;
    const order = await Order.findById(orderId).populate("ticket");
    if (!order) {
      throw new NotFoundError();
    }
    if (order.userId !== req.currentUser!.id) {
      throw new NotAuthorizedError();
    }
    order.status = OrderStatus.Cancelled;
    order.save();
    await new OrderCancelPublisher(natsWrapper.client).publish({
      id: order.id as string,
      ticket: {
        id: order.ticket.id as string,
        price: order.ticket.price,
      },
    });
    res.status(204).send(order);
  }
);

export { router as deleteOrderRouter };
