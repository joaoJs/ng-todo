import { Injectable } from '@angular/core';
import { Tags } from 'src/app/models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoContentService {

  tags: Tags[] = [
    {id: 1, name: 'Personal', isSelected: false},
    {id: 1, name: 'Work', isSelected: false},
    {id: 1, name: 'Important', isSelected: false}
  ]

  constructor() { }
}
