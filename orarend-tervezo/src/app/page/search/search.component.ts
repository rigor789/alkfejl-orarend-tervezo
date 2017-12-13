import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from "@angular/router";
import {MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  dataSource = new MatTableDataSource([
    {
      name: 'Analízis 1. EA. (BSc,08',
      subcetCode: 'dsadélsad',
      coursecode: '90',
      timeinterval: 'Hétfő 16:00-18:00',
      room: 'D-260',
      subjecttipe: 'Előadás',
      teachername: 'Gozsák Dávid',
      note: 'asdélfkjsdléfkj'
    }
  
  ]);

  subjects = [
    'Analízis 1. EA. (BSc,08',
    'Analízis 1. GY. (BSc,08',
    'Analízis 2. EA. (BSc,08',
    'Analízis 2. GY. (BSc,08',
    'Analízis 3. EA+GY. (BSc,08.',
    'Numerikus módszerek 1. EA. (BSc,08',
    'Numerikus módszerek 1. GY. (BSc,08',
    'Numerikus módszerek 2. EA+GY. (BSc,08',
    'Modellek és algoritmusok. EA+GY. (BSc,08',
    'Diszkrét matematika 1. EA. (BSc,08',
    'Diszkrét matematika 1. GY. (BSc,08',
    'Diszkrét matematika 2. EA. (BSc,08',
    'Diszkrét matematika 2. GY. (BSc,08',
    'Lineáris algebra. EA. (BSc,08',
    'Lineáris algebra. GY. (BSc,08',
    'Valószínűségszámítás és statisztika. EA. (BSc,08',
    'Valószínűségszámítás és statisztika. GY. (BSc,08',
    'Logika és számításelmélet. EA. (BSc,08',
    'Logika és számításelmélet. GY. (BSc,08',
    'Algoritmusok és adatszerkezetek 1. EA. (BSc,08',
    'Algoritmusok és adatszerkezetek 1. GY. (BSc,08',
    'Algoritmusok és adatszerkezetek 2. EA. (BSc,08',
    'Algoritmusok és adatszerkezetek 2. GY. (BSc,08',
    'Formális nyelvek és automaták. EA. (BSc,08',
    'Formális nyelvek és automaták. GY. (BSc,08',
    'Mesterséges intelligencia. EA. (BSc,08',
    'Programozási alapismeretek. EA+GY. (BSc,08',
    'Számítógépes alapismeretek. EA+GY. (BSc,08',
    'Programozás. EA+GY. (BSc,08',
    'Programozási nyelvek C++. EA+GY. (BSc,08',
    'Programozási nyelvek JAVA. EA+GY. (BSc,08',
    'Script nyelvek. EA',
    'Programozási technológia 1. EA+GY. (BSc,08',
    'Programozási technológia 2. EA+GY. (BSc,08',
    'Fordítóprogramok. EA. (BSc,08',
    'Fordítóprogramok. GY. (BSc,08',
    'Alkalmazások fejlesztése. GY. (BSc,08',
    'Projekt eszközök',
    'Operációs rendszerek. EA+GY. (BSc,08',
    'Számítógépes hálózatok. EA. (BSc,08',
    'Számítógépes hálózatok. GY. (BSc,08',
    'Osztott rendszerek. EA. (BSc,08',
    'Osztott rendszerek. GY. (BSc,08',
    'Adatbázisok 1. EA. (BSc,08',
    'Adatbázisok 1. GY. (BSc,08',
    'Adatbázisok 2. EA. (BSc,08',
    'Adatbázisok 2. GY. (BSc,08',
  ];

  selectedSubject = '';

  constructor() { }

  ngOnInit() {
  }
}
