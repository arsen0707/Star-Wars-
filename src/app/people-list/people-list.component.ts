import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  p:number = 1;
  itemsPerPage:number = 10;
  totalProducts:number = 82;
  people: any;

  constructor(private http: HttpClient) {}

 

  ngOnInit() {
    this.http.get('https://www.swapi.tech/api/people?page=1&limit=80')
      .subscribe((response: any) => {
        this.people = response.results.map((person: any) => {
          return {
            id: person.uid,
            name: person.name
          };
        });
      });
  }
}

