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
  displayedColumns: String[] = ['name', 'subCode', 'interval', 'room', 'note', 'type', 'courseCode', 'teacher'];
  dataSource: DataSource<Course> = new CourseDataSource(this.searchService, '');
  subjects = SUBJECTS;

  constructor(private searchService: SearchService) {
  }

  ngOnInit(): void {
  }

  filter: String = '';
  applyFilter = debounce((filter) => {
    console.log('fired');
    filter = filter.trim();
    filter = filter.toLowerCase();
    if (this.filter === filter) {
      return
    }
    this.filter = filter;
    this.dataSource = new CourseDataSource(this.searchService, filter)
  }, 300)
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
