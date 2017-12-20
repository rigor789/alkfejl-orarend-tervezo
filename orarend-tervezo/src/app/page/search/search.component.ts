// 8:30 2.em eszaki 2.63
import {Component, OnInit} from '@angular/core';
import {DataSource} from "@angular/cdk/collections";
import {Course} from "../../model/Course";
import {SearchService} from "../../service/search.service";
import {Observable} from "rxjs/Observable";
import * as debounce from "debounce";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

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
  dataSource: DataSource<Course> = new CourseDataSource(this.searchService, '');
  subjects = SUBJECTS;
  filter: String = '';


  constructor(private searchService: SearchService) {
  }

  ngOnInit(): void {
  }

  applyResFilter = debounce((filter) => {
    this.dataSource = new CourseDataSource(this.searchService, filter)
  }, 400);

  applyFilter(filter) {
    filter = filter.trim();
    filter = filter.toLowerCase();
    if (this.filter !== filter) {
      this.filter = filter;
      this.applyResFilter(filter)
    }
  }

  get filteredSubjects() {
    return this.subjects.filter(sub => sub.toLowerCase().indexOf(this.filter.toString().toLowerCase()) > -1);
  }

  select(course) {
    console.log(course)
  }
}

export class CourseDataSource extends DataSource<Course> {
  constructor(private searchService: SearchService, private name: String) {
    super();
  }

  connect(): Observable<Course[]> {
    return this.searchService.findByName(this.name);
  }

  disconnect() {
  }
}

const SUBJECTS = [
  'Analízis 1',
  'Analízis 2',
  'Analízis 3',
  'Numerikus módszerek 1',
  'Numerikus módszerek 2',
  'Modellek és algoritmusok',
  'Diszkrét matematika 1',
  'Diszkrét matematika 2',
  'Lineáris algebra',
  'Valószínűségszámítás és statisztika',
  'Logika és számításelmélet',
  'Algoritmusok és adatszerkezetek 1',
  'Algoritmusok és adatszerkezetek 2',
  'Formális nyelvek és automaták',
  'Mesterséges intelligencia',
  'Programozási alapismeretek',
  'Számítógépes alapismeretek',
  'Programozás',
  'Programozási nyelvek C++',
  'Programozási nyelvek JAVA',
  'Script nyelvek. EA',
  'Programozási technológia 1',
  'Programozási technológia 2',
  'Fordítóprogramok',
  'Alkalmazások fejlesztése',
  'Projekt eszközök',
  'Operációs rendszerek',
  'Számítógépes hálózatok',
  'Osztott rendszerek',
  'Adatbázisok 1',
  'Adatbázisok 2',
];
