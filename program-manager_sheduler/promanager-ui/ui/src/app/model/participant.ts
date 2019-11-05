export class CSVRecord {
  public name: string;
  public email: string;
}

export class Participant {
  public id: string;
  public name: string;
  public email: string;
  public programId: string;
  public productId: string;
  public text: string;
  public startDate: Date;
  public endDate: Date;
  public tasks: Array<Task>;
}

export class Task {
  public taskId: string;
  public taskName: string;
  public dueDate: Date;
  public status: boolean;
}

export class TaskCalendar {
  public taskId: string;
  public taskName: string;
  public endDate: Date;
  public startDate: Date;
  public status: boolean;
}

export class ParticipantList {
  public id: string;
  public name: string;
  public email: string;
  public programId: string;
  public productId: string;
  public text: string;
  public startDate: Date;
  public endDate: Date;
  public tasks: Array<Rseponse>;
}

export class Rseponse {
  public date: string;
  public tasks: Array<Task>;
}
