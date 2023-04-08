import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username!: string;
  password!: string;

  constructor(private authService: AuthenticationService, private router: Router) { }

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe(
      (data: any) => {
        localStorage.setItem('token', data.token);
        this.router.navigate(['/dashboard']);
      },
      (      error: any) => {
        console.log(error);
      }
    );
  }
}
