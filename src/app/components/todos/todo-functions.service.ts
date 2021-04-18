import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoFunctionsService {

  constructor() { }

  filterTodoAlph() {
    console.log('from service');
  }
}
