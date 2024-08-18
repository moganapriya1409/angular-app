import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
editUser(arg0: any) {
throw new Error('Method not implemented.');
}
  users: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('http://localhost:5000/api/users')
      .subscribe(
        (response: any) => {
          this.users = response;
        },
        error => {
          console.error(error);
        }
      );
  }

  deleteUser(id: string) {
    this.http.delete(`http://localhost:5000/api/users/${id}`)
      .subscribe(
        () => {
          this.users = this.users.filter(user => user._id !== id);
        },
        error => {
          console.error(error);
        }
      );
  }
}
