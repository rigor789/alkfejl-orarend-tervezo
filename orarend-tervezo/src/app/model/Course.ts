export class Interval {
  // todo
}

export class Course {
  private id: number;
  private version: number;
  private name: String;
  private subCode: String;
  private interval: Interval;
  private room: String;
  private note: String;
  private type: String;
  private courseCode: number;
  private teacher: String;

  constructor(id?: number, version?: number, name?: String, subCode?: String, interval?: Interval, room?: String, note?: String, type?: String, courseCode?: number, teacher?: String) {
    this.id = id;
    this.version = version;
    this.name = name;
    this.subCode = subCode;
    this.interval = interval;
    this.room = room;
    this.note = note;
    this.type = type;
    this.courseCode = courseCode;
    this.teacher = teacher;
  }
}
