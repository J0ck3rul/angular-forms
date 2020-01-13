import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-render',
  templateUrl: './form-render.component.html',
  styleUrls: ['./form-render.component.css']
})
export class FormRenderComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get('http://127.0.0.1:3000').subscribe(value => {
      console.log(value);
    })
  }

}
