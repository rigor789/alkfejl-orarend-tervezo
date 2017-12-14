// "{
// "day":"MONDAY",
// "endTime":{"hour":14,"min":0},
// "startTime":{"hour":12,"min":0},
// "length":120}"
export class Time {
  private hour: number;
  private min: number;

  constructor(hour: number, min: number) {
    this.hour = hour;
    this.min = min;
  }
}

export class Interval {
  private day: String;
  private startTime: Time;
  private endTime: Time;
  private length: number;

  constructor(day?: String, startTime?: Time, endTime?: Time, length?: number) {
    this.day = day;
    this.startTime = startTime;
    this.endTime = endTime;
    this.length = length;
  }
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
