import {Component, OnInit} from '@angular/core';
import {AccountService} from "../_services/account.service";
import {Observable} from "rxjs";
import {User} from "../_model/user";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}
  currentUser$: Observable<User>;
  currentUser: User;
  constructor(public accountService: AccountService) {
  }

  ngOnInit(): void {
   this.currentUser$ = this.accountService.currentUser$ ;
   this.currentUser = JSON.parse(localStorage.getItem('user'));
  }

  login() {
    this.accountService.login(this.model).subscribe((result) => {
      console.log('result', result);
    }, error => {
      console.log(error);
    })
  }

  logout() {
    this.accountService.logout()
  }

}
