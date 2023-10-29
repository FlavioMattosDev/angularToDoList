export class Task {
  title: string;
  description: string;
  date: string | Date;
  status: string;

  constructor(title = '', description = '', date = '', status = '') {
    this.title = title;
    this.description = description;
    this.date = date;
    this.status = status;
  }
}
