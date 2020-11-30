import { Publisher, Subjects, TicketCreatedEvent } from "@pystickets/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
