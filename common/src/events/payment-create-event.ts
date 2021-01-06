import { Subjects } from "./subjects";

export interface PaymentCreateEvent {
  readonly subject: Subjects.PaymentCreated;
  data: {
    id: string;
    orderId: string;
    stripeId: string;
  };
}
