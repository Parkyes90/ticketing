import { Subjects, Publisher, PaymentCreateEvent } from "@pystickets/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreateEvent> {
  readonly subject = Subjects.PaymentCreated;
}
