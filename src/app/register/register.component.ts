import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [HttpClientModule,FormsModule]
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  name: string = '';
  mailid: string = '';
  phonenumber: string = '';
  address: string = '';
email: any;
phoneNumber: any;

  constructor(private http: HttpClient, private router: Router) {}

  register() {
    this.http.post('http://localhost:00/api/users/register', {
      username: this.username,
      password: this.password,
      name: this.name,
      mailid: this.mailid,
      phonenumber: this.phonenumber,
      address: this.address
    }).subscribe(
      (response: any) => {
        if (response) {
          this.router.navigate(['/user-table']);
        }
      },
      error => {
        console.error(error);
        alert('Registration failed');
      }
    );
  }
}
