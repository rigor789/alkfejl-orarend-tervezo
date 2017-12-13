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
  /*
  [
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
  
  ]
  */
  displayedColumns = ["name", "subCode", "courseCode"]
  dataSource = new MatTableDataSource<Course>(JSON.parse(DATA));

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

  constructor() { 
    console.table(JSON.parse(DATA));
  }

  ngOnInit() {
  }
}

const DATA = `[{"id":0,"version":0,"name":"Adatbázisok 1. EA. (BSc,08,A)","subCode":"IP-08aAB1E","interval":{"day":"TUESDAY","endTime":{"hour":10,"min":0},"startTime":{"hour":8,"min":0},"length":120},"room":"Déli Tömb 0-823 Kitaibel Pál terem","note":"","type":"Presentation","courseCode":1,"teacher":"Hajas Csilla Dr."},{"id":0,"version":0,"name":"Adatbázisok 1. EA. (BSc,08,A)","subCode":"IP-08aAB1E","interval":{"day":"WEDNESDAY","endTime":{"hour":13,"min":0},"startTime":{"hour":12,"min":0},"length":60},"room":"","note":"","type":"Consultation","courseCode":2,"teacher":"Hajas Csilla Dr."},{"id":0,"version":0,"name":"Adatbázisok 1. EA. (BSc,08,E)","subCode":"IP-08EAB1E","interval":{"day":"TUESDAY","endTime":{"hour":21,"min":0},"startTime":{"hour":19,"min":30},"length":90},"room":"Déli Tömb 0-803 Szabó József eloadó","note":"","type":"Presentation","courseCode":1,"teacher":"Molnár Bálint"},{"id":0,"version":0,"name":"Adatbázisok 1. GY. (BSc,08,A)","subCode":"IP-08aAB1G","interval":{"day":"TUESDAY","endTime":{"hour":12,"min":0},"startTime":{"hour":10,"min":0},"length":120},"room":"Déli Tömb 00-411 (PC 7)","note":"","type":"Practice","courseCode":1,"teacher":"Hajas Csilla Dr."},{"id":0,"version":0,"name":"Adatbázisok 1. GY. (BSc,08,A)","subCode":"IP-08aAB1G","interval":{"day":"WEDNESDAY","endTime":{"hour":14,"min":0},"startTime":{"hour":12,"min":0},"length":120},"room":"Déli Tömb 2-520 (Mesterséges Intelligencia labor)","note":"","type":"Practice","courseCode":2,"teacher":"Vörös Péter"},{"id":0,"version":0,"name":"Adatbázisok 1. GY. (BSc,08,A)","subCode":"IP-08aAB1G","interval":{"day":"WEDNESDAY","endTime":{"hour":12,"min":0},"startTime":{"hour":10,"min":0},"length":120},"room":"Déli Tömb 2-520 (Mesterséges Intelligencia labor)","note":"","type":"Practice","courseCode":3,"teacher":"Vörös Péter"},{"id":0,"version":0,"name":"Adatbázisok 1. GY. (BSc,08,E)","subCode":"IP-08EAB1G","interval":{"day":"TUESDAY","endTime":{"hour":17,"min":30},"startTime":{"hour":16,"min":0},"length":90},"room":"Déli Tömb 00-807 Adatbázis labor","note":"","type":"Practice","courseCode":1,"teacher":"Béleczki András"},{"id":0,"version":0,"name":"Adatbázisok 1. GY. (BSc,08,E)","subCode":"IP-08EAB1G","interval":{"day":"THURSDAY","endTime":{"hour":21,"min":0},"startTime":{"hour":19,"min":30},"length":90},"room":"Déli Tömb 00-807 Adatbázis labor","note":"","type":"Practice","courseCode":2,"teacher":"Béleczki András"},{"id":0,"version":0,"name":"Adatbázisok 2 GY (BSc 08 A)","subCode":"IP-08aAB2G","interval":{"day":"WEDNESDAY","endTime":{"hour":12,"min":0},"startTime":{"hour":10,"min":0},"length":120},"room":"Déli Tömb 00-412 (PC 6)","note":"","type":"Practice","courseCode":1,"teacher":"Nikovits Tibor Dr."},{"id":0,"version":0,"name":"Adatbázisok 2 GY (BSc 08 A)","subCode":"IP-08aAB2G","interval":{"day":"FRIDAY","endTime":{"hour":12,"min":0},"startTime":{"hour":10,"min":0},"length":120},"room":"Déli Tömb 2-108 (PC5)","note":"","type":"Practice","courseCode":10,"teacher":"Brányi László"},{"id":0,"version":0,"name":"Adatbázisok 2 GY (BSc 08 A)","subCode":"IP-08aAB2G","interval":{"day":"FRIDAY","endTime":{"hour":14,"min":0},"startTime":{"hour":12,"min":0},"length":120},"room":"Déli Tömb 2-108 (PC5)","note":"","type":"Practice","courseCode":11,"teacher":"Brányi László"},{"id":0,"version":0,"name":"Adatbázisok 2 GY (BSc 08 A)","subCode":"IP-08aAB2G","interval":{"day":"FRIDAY","endTime":{"hour":10,"min":0},"startTime":{"hour":8,"min":0},"length":120},"room":"Déli Tömb 2-108 (PC5)","note":"","type":"Practice","courseCode":12,"teacher":"Nikovits Tibor Dr."},{"id":0,"version":0,"name":"Adatbázisok 2 GY (BSc 08 A)","subCode":"IP-08aAB2G","interval":{"day":"WEDNESDAY","endTime":{"hour":12,"min":0},"startTime":{"hour":10,"min":0},"length":120},"room":"Déli Tömb 2-108 (PC5)","note":"","type":"Practice","courseCode":13,"teacher":"Brányi László"},{"id":0,"version":0,"name":"Adatbázisok 2 GY (BSc 08 A)","subCode":"IP-08aAB2G","interval":{"day":"THURSDAY","endTime":{"hour":16,"min":0},"startTime":{"hour":14,"min":0},"length":120},"room":"Déli Tömb 00-412 (PC 6)","note":"","type":"Practice","courseCode":14,"teacher":"Varga Dániel"},{"id":0,"version":0,"name":"Adatbázisok 2 GY (BSc 08 A)","subCode":"IP-08aAB2G","interval":{"day":"TUESDAY","endTime":{"hour":16,"min":0},"startTime":{"hour":14,"min":0},"length":120},"room":"Déli Tömb 2-108 (PC5)","note":"","type":"Practice","courseCode":2,"teacher":"Brányi László"},{"id":0,"version":0,"name":"Adatbázisok 2 GY (BSc 08 A)","subCode":"IP-08aAB2G","interval":{"day":"TUESDAY","endTime":{"hour":14,"min":0},"startTime":{"hour":12,"min":0},"length":120},"room":"Déli Tömb 2-108 (PC5)","note":"","type":"Practice","courseCode":3,"teacher":"Brányi László"},{"id":0,"version":0,"name":"Adatbázisok 2 GY (BSc 08 A)","subCode":"IP-08aAB2G","interval":{"day":"THURSDAY","endTime":{"hour":19,"min":15},"startTime":{"hour":17,"min":45},"length":90},"room":"Déli Tömb 00-412 (PC 6)","note":"","type":"Practice","courseCode":4,"teacher":"Rudas Ákos"},{"id":0,"version":0,"name":"Adatbázisok 2 GY (BSc 08 A)","subCode":"IP-08aAB2G","interval":{"day":"WEDNESDAY","endTime":{"hour":10,"min":0},"startTime":{"hour":8,"min":0},"length":120},"room":"Déli Tömb 2-108 (PC5)","note":"","type":"Practice","courseCode":5,"teacher":"Nikovits Tibor Dr."},{"id":0,"version":0,"name":"Adatbázisok 2 GY (BSc 08 A)","subCode":"IP-08aAB2G","interval":{"day":"TUESDAY","endTime":{"hour":12,"min":0},"startTime":{"hour":10,"min":0},"length":120},"room":"Déli Tömb 2-108 (PC5)","note":"","type":"Practice","courseCode":6,"teacher":"Brányi László"},{"id":0,"version":0,"name":"Adatbázisok 2 GY (BSc 08 A)","subCode":"IP-08aAB2G","interval":{"day":"THURSDAY","endTime":{"hour":12,"min":0},"startTime":{"hour":10,"min":0},"length":120},"room":"Déli Tömb 2-108 (PC5)","note":"","type":"Practice","courseCode":7,"teacher":"Brányi László"},{"id":0,"version":0,"name":"Adatbázisok 2 GY (BSc 08 A)","subCode":"IP-08aAB2G","interval":{"day":"THURSDAY","endTime":{"hour":14,"min":0},"startTime":{"hour":12,"min":0},"length":120},"room":"Déli Tömb 2-108 (PC5)","note":"","type":"Practice","courseCode":8,"teacher":"Brányi László"},{"id":0,"version":0,"name":"Adatbázisok 2 GY (BSc 08 A)","subCode":"IP-08aAB2G","interval":{"day":"THURSDAY","endTime":{"hour":16,"min":0},"startTime":{"hour":14,"min":0},"length":120},"room":"Déli Tömb 2-108 (PC5)","note":"","type":"Practice","courseCode":9,"teacher":"Brányi László"},{"id":0,"version":0,"name":"Adatbázisok 2. EA. (BSc,08,A)","subCode":"IP-08aAB2E","interval":{"day":"TUESDAY","endTime":{"hour":10,"min":0},"startTime":{"hour":8,"min":0},"length":120},"room":"Déli Tömb 0-821 Bolyai János terem","note":"","type":"Presentation","courseCode":1,"teacher":"Kiss Attila Elemér dr."},{"id":0,"version":0,"name":"Adatbázisok Ea.","subCode":"IT-13KABE","interval":{"day":"MONDAY","endTime":{"hour":10,"min":0},"startTime":{"hour":8,"min":0},"length":120},"room":"Déli Tömb 1-817","note":"","type":"Presentation","courseCode":1,"teacher":"Hajas Csilla Dr."},{"id":0,"version":0,"name":"Adatbázisok Gy.","subCode":"IT-13KABG","interval":{"day":"MONDAY","endTime":{"hour":12,"min":0},"startTime":{"hour":10,"min":0},"length":120},"room":"Déli Tömb 2-202 (PC3)","note":"","type":"Practice","courseCode":1,"teacher":"Hajas Csilla Dr."},{"id":0,"version":0,"name":"Adatbázisok Használata","subCode":"mm1n1ah5e","interval":{"day":"WEDNESDAY","endTime":{"hour":14,"min":0},"startTime":{"hour":12,"min":0},"length":120},"room":"Déli Tömb 00-807 Adatbázis labor","note":"","type":"Presentation","courseCode":1,"teacher":"Molnár Bálint"},{"id":0,"version":0,"name":"Adatbázisok Használata","subCode":"mm1n2ah5e","interval":{"day":"TUESDAY","endTime":{"hour":10,"min":0},"startTime":{"hour":8,"min":0},"length":120},"room":"Déli Tömb 00-807 Adatbázis labor","note":"","type":"Practice","courseCode":1,"teacher":"Vincellér Zoltán"},{"id":0,"version":0,"name":"Adatbázisok Használata","subCode":"mm1n2ah5e","interval":{"day":"TUESDAY","endTime":{"hour":12,"min":0},"startTime":{"hour":10,"min":0},"length":120},"room":"Déli Tömb 00-807 Adatbázis labor","note":"","type":"Practice","courseCode":2,"teacher":"Vincellér Zoltán"},{"id":0,"version":0,"name":"Adatbázisok Használata","subCode":"mm1n2ah5e","interval":{"day":"TUESDAY","endTime":{"hour":14,"min":0},"startTime":{"hour":12,"min":0},"length":120},"room":"Déli Tömb 00-807 Adatbázis labor","note":"","type":"Practice","courseCode":3,"teacher":"Vincellér Zoltán"},{"id":0,"version":0,"name":"Csillagászati adatbázisok I.","subCode":"fffn9k24","interval":{"day":"TUESDAY","endTime":{"hour":18,"min":0},"startTime":{"hour":16,"min":0},"length":120},"room":"Északi Tömb 5.56 - Információtechnológiai laboratórium","note":"","type":"Presentation","courseCode":1,"teacher":"Dobos László"},{"id":0,"version":0,"name":"Hazai területi adatbázisok","subCode":"lh1c2397","interval":{"day":"THURSDAY","endTime":{"hour":14,"min":0},"startTime":{"hour":12,"min":0},"length":120},"room":"Déli Tömb 7-207","note":"","type":"Practice","courseCode":1,"teacher":"Kiss János Péter Dr."},{"id":0,"version":0,"name":"Hazai területi adatbázisok","subCode":"lh1c2397","interval":{"day":"THURSDAY","endTime":{"hour":14,"min":0},"startTime":{"hour":12,"min":0},"length":120},"room":"Déli Tömb 1-313 Földrajz számítástechnikai labor","note":"","type":"Practice","courseCode":1,"teacher":"Kiss János Péter Dr."},{"id":0,"version":0,"name":"Nemzetközi földrajzi adatbázisok (RTT)","subCode":"lh1c2913","interval":{"day":"THURSDAY","endTime":{"hour":10,"min":0},"startTime":{"hour":8,"min":0},"length":120},"room":"Déli Tömb 7-103 Andreanszky Gábor terem","note":"","type":"Practice","courseCode":1,"teacher":"Nemes-Nagy József Dr."}]`

export interface Course {
  name: string;
  subCode: string;
  courseCode: number;
}