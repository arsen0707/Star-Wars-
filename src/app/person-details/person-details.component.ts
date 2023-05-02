import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss']
})
export class PersonDetailsComponent implements OnInit {
  person: any;
  description:any;
  currentDate: string='';
  birthYear: string = '';


  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    const personId = this.route.snapshot.paramMap.get('id');

    this.http.get(`https://www.swapi.tech/api/people/${personId}`)
      .subscribe((response: any) => {
        this.person = response.result.properties;
        this.description = response.result;
        this.birthYear =  new Date(parseInt(response.result.properties.birth_year), 0, 1).toLocaleDateString();
        this.currentDate = new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
      });
  }
}
