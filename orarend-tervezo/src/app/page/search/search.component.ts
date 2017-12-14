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
  displayedColumns: String[] = ["name", "subCode", "courseCode"];
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
  'Analízis 1. EA.',
  'Analízis 1. GY.',
  'Analízis 2. EA.',
  'Analízis 2. GY.',
  'Analízis 3. EA+GY..',
  'Numerikus módszerek 1. EA.',
  'Numerikus módszerek 1. GY.',
  'Numerikus módszerek 2. EA+GY.',
  'Modellek és algoritmusok. EA+GY.',
  'Diszkrét matematika 1. EA.',
  'Diszkrét matematika 1. GY.',
  'Diszkrét matematika 2. EA.',
  'Diszkrét matematika 2. GY.',
  'Lineáris algebra. EA.',
  'Lineáris algebra. GY.',
  'Valószínűségszámítás és statisztika. EA.',
  'Valószínűségszámítás és statisztika. GY.',
  'Logika és számításelmélet. EA.',
  'Logika és számításelmélet. GY.',
  'Algoritmusok és adatszerkezetek 1. EA.',
  'Algoritmusok és adatszerkezetek 1. GY.',
  'Algoritmusok és adatszerkezetek 2. EA.',
  'Algoritmusok és adatszerkezetek 2. GY.',
  'Formális nyelvek és automaták. EA.',
  'Formális nyelvek és automaták. GY.',
  'Mesterséges intelligencia. EA.',
  'Programozási alapismeretek. EA+GY.',
  'Számítógépes alapismeretek. EA+GY.',
  'Programozás. EA+GY.',
  'Programozási nyelvek C++. EA+GY.',
  'Programozási nyelvek JAVA. EA+GY.',
  'Script nyelvek. EA',
  'Programozási technológia 1. EA+GY.',
  'Programozási technológia 2. EA+GY.',
  'Fordítóprogramok. EA.',
  'Fordítóprogramok. GY.',
  'Alkalmazások fejlesztése. GY.',
  'Projekt eszközök',
  'Operációs rendszerek. EA+GY.',
  'Számítógépes hálózatok. EA.',
  'Számítógépes hálózatok. GY.',
  'Osztott rendszerek. EA.',
  'Osztott rendszerek. GY.',
  'Adatbázisok 1. EA.',
  'Adatbázisok 1. GY.',
  'Adatbázisok 2. EA.',
  'Adatbázisok 2. GY.',
];
