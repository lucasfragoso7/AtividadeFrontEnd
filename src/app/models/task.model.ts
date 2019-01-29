export class Task { 
  id:number;
  assignment:string;
  creationDate:Date;

  constructor(id:number, assignement:string, creationDate:Date) { 
    this.assignment =assignement;
    this.id = id;
    this.creationDate = creationDate;
  }
}
