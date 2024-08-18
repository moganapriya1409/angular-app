import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [HttpClientModule, FormsModule] // Add HttpClientModule here
})
export class LoginComponent {
goToRegister() {
  this.router.navigate(['/register']);
throw new Error('Method not implemented.');
}
  username: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    const credentials = { username: this.username, password: this.password };

    this.http.post<any>('http://localhost:3000/api/users/login', credentials).subscribe({
      next: (response) => {
        alert(response.message);
        if (response.message === 'Successfully submitted') {
          this.router.navigate(['/register']);
        }
      },
      error: (error) => {
        alert('Invalid credentials');
      }
    });
  }
}
