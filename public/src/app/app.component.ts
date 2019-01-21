import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Implement OnInit.
export class AppComponent implements OnInit {
  tasks = [];
  constructor(private _httpService: HttpService) { }
  // ngOnInit will run when the component is initialized, after the constructor method.
  ngOnInit() {
    this.getTasksFromService();
  }

  getTasksFromService() {
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("got the tasks again", data);
      this.tasks = data["tasks"];
      console.log(this.tasks["0"]["title"]);
    })
  }
}