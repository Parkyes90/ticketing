import { Publisher, OrderCancelledEvent, Subjects } from "@pystickets/common";

export class OrderCancelPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
