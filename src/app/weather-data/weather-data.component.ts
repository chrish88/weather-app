
import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Component({
  selector: 'weather-data',
  templateUrl: './weather-data.component.html',
  styleUrls: ['./weather-data.component.css']
})
export class WeatherDataComponent implements OnInit {
ROOT_URL = ''
  constructor(private http: HttpClient) { }

  ngOnInit() {
    let obs = this.http.get('http://api.wunderground.com/api/6f1e96e055f4b933/conditions/q/89166.json')
    obs.subscribe((waresponse) => console.log(waresponse))
  }

}
