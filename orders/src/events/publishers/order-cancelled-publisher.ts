import { Publisher, OrderCancelledEvent, Subjects } from "@pystickets/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
