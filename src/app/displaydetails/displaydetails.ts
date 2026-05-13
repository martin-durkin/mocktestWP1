import { Component, inject, signal } from '@angular/core';
import { Mockapi } from '../mockapi';
import { IUser } from '../interfaceUser';

@Component({
  selector: 'app-displaydetails',
  imports: [],
  templateUrl: './displaydetails.html',
  styleUrl: './displaydetails.css',
})
export class Displaydetails {

  // inject the service
  private _mockapi = inject(Mockapi);

  // signal to store the results
  results = signal<IUser[]>([]);

  // signal to store any error message
  errorMessage = signal('');

  // runs when component loads
  constructor() {
    this.getUsers();
  }

  getUsers(): void {
    this._mockapi.getUsers().subscribe({
      next: (data) => {
        this.results.set(data);
        console.log(data);
      },
      error: (err) => {
        this.errorMessage.set('Could not connect to the API: ' + err.message);
      }
    });
  }
}