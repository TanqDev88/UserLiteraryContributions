import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  validMessage ='';
 users!: User[];

  loginForm: FormGroup;

  constructor(private router: Router, private usersService: UsersService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      //Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:
      zipcode: new FormControl('', [Validators.required])
    });

  }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(
      data => this.users=data,
      error => console.error('Fallo el request al API REST')

    );
    localStorage.clear();
  }

  get controles(){
    return this.loginForm.controls;
  }

  submitLogin(){
    if (this.loginForm.valid) {
      var email = this.loginForm.value.email;
      var zipcode = this.loginForm.value.zipcode;
      this.validMessage='';


        for (let i = 0; i < this.users.length; i++) {

          if(this.users[i].email== email && this.users[i].address.zipcode == zipcode){
            localStorage.setItem("Usuario", email);
            localStorage.setItem("Id", this.users[i].id.toString());
            this.router.navigate(['/']);
          }

        }

        this.validMessage = "Email o password incorrectos"
        this.loginForm.reset();

    }
  }


}
