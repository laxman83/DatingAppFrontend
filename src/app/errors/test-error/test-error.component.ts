import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrls: ['./test-error.component.css']
})
export class TestErrorComponent implements OnInit {
  baseUrl = 'https://localhost:5000/'
 validationErrors: string;
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  get404Error() {
    this.http.get(this.baseUrl + 'Buggy/not-found').subscribe(
      response => {
        console.log(response);
      }, error => {
        console.log(error);
      }
    )
  }

  get400Error() {
    this.http.get(this.baseUrl + 'Buggy/bad-request').subscribe(
      response => {
        console.log(response);
      }, error => {
        console.log(error);
      }
    )
  }

  get500Error() {
    this.http.get('https://localhost:5000/Buggy/server-error').subscribe(
      response => {
        console.log(response);
      }, error => {
        console.log(error);
      }
    )
  }

  get401Error() {
    this.http.get(this.baseUrl + 'Buggy/auth').subscribe(
      response => {
        console.log(response);
      }, error => {
        console.log(error);
      }
    )
  }

  get400ValidationError() {
    this.http.post(this.baseUrl + 'account/register', {}).subscribe(
      response => {
        console.log(response);
      }, error => {
        console.log(error);
        this.validationErrors = error;
      }
    )
  }
}
