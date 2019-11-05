export interface  Session {
  id: string;
  programId: string;
  startDate: Date;
  endDate: Date;
  text: string;
}

// tslint:disable-next-line: class-name
export interface sessionData {
  text: string;
  startdate: Date;
  enddate: Date;
}
