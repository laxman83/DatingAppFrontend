import {Component, OnInit} from '@angular/core';
import {AccountService} from "../_services/account.service";
import {Observable} from "rxjs";
import {User} from "../_model/user";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}
  currentUser$: Observable<User>;
  currentUser: User;
  constructor(public accountService: AccountService,
  private router: Router, private toaster: ToastrService) {
  }

  ngOnInit(): void {
   this.currentUser$ = this.accountService.currentUser$ ;
   this.currentUser = JSON.parse(localStorage.getItem('user'));
  }

  login() {
    this.accountService.login(this.model).subscribe((result) => {
     this.router.navigateByUrl('/members').then()
    }, error => {
      console.log(error);
      this.toaster.error(error.error)
    })
  }

  logout() {
    this.accountService.logout()

    this.router.navigateByUrl('/').then()
  }

}
