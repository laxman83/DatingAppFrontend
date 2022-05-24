import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../_model/user";
import {AccountService} from "../_services/account.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model:any = {}
  constructor(private accountService: AccountService,private toaster: ToastrService) { }

  ngOnInit(): void {
  }

  register() {
   this.accountService.register(this.model).subscribe(
     response =>{
       console.log('response', response)
       this.cancel()
     },error => {
       console.log(error);
       this.toaster.error(error.error);
     }
   )
  }

  cancel() {
   this.cancelRegister.emit(false)
  }
}
