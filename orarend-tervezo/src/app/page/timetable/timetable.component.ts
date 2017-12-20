import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {Course} from "../../model/Course";
import {DataSource} from "@angular/cdk/collections";
import {Observable} from "rxjs/Observable";
import {SearchService} from "../../service/search.service";
import {MatTableDataSource} from "@angular/material";
import {TimetableService} from "../../service/timetable.service";

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent implements OnInit {


  displayedColumns: String[] = [
    'name',
    'subCode',
    'room',
    'note',
    'type',
    'courseCode',
    'teacher',
    'actions'
  ];
  dataSource: DataSource<Course>;


  constructor(private authService: AuthService, private timetableService: TimetableService) {
    this.dataSource = new MatTableDataSource(authService.user.courses || []);

  }

  ngOnInit() {
  }

  remove(course) {
    this.timetableService.remove(course)
      .subscribe(
        res => {
          this.dataSource = new MatTableDataSource(res)
          this.authService.user.courses = res;
        },
        err => console.log(err))
  }
}
