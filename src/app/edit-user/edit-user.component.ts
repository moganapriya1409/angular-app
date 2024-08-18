import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
  standalone: true,
  imports: [HttpClientModule, FormsModule]
})
export class EditUserComponent implements OnInit {
  user: any = {
    name: '',
    mailid: '',
    phonenumber: '',
    address: ''
  };
  id: string = '';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.http.get(`http://localhost:5000/api/users/${this.id}`)
      .subscribe(
        (response: any) => {
          this.user = response;
        },
        error => {
          console.error(error);
        }
      );
  }

  updateUser() {
    this.http.put(`http://localhost:5000/api/users/${this.id}`, this.user)
      .subscribe(
        () => {
          this.router.navigate(['/user-table']);
        },
        error => {
          console.error(error);
        }
      );
  }
}
