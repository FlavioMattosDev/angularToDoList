export class Task {
  title: string;
  description: string;
  date: string | Date;

  constructor(title = '', description = '', date = '') {
    this.title = title;
    this.description = description;
    this.date = date;
  }
}
