import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @Output() cancelRegister = new EventEmitter();

  constructor(private accountService: AccountService, private toastr: ToastrService) {}

  model: any = {};

  register() {
    this.accountService.register(this.model).subscribe({
      next: () => this.cancel(),
      error: err => {
        console.log(err);
        this.toastr.error(err.error);
      }
    })
  }

  cancel(){
    this.cancelRegister.emit(false);
  }
}
