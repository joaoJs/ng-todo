import { Component, OnInit } from '@angular/core';
import { Todo, Tags } from '../../models/Todo';
import { TodoContentService } from './todo-content.service';
import { TodoFunctionsService } from './todo-functions.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  // Models
  todos: Todo[];
  tags: Tags[];

  searchTag = '';
  orderByKey: string = '';
  inputTitle:string = '';
  inputDescription:string = '';
  inputDueDate:string = '';
  tag:string = '';

  constructor(private todoContent: TodoContentService,
    private todoFunctions: TodoFunctionsService) { }

  ngOnInit(): void {
    this.tags = this.todoContent.tags;
    this.todos = []
  }

  getTodoFunctions() {
    return this.todoFunctions;
  }

  // On change of a tag we will be changin the isSelected from true/false
  onChange () {
    console.log(this.tags)
  }

  // On click of a filter, make the searchTag equal to name of button being pressed, this will be passed to custom pipe
  tagFilter(name) {
    this.searchTag = name;
  }

  setOrderByKey(key: string) {
    this.orderByKey = key;
  }

  // On click of remove button, filter each todo and only return the one with the id not specified by the boutton
  deleteTodo (id:number) {
    this.todos = this.todos.filter((todo, index) => index !== id);
  }

  // Method to add a todo
  addTodo () {
    // This will filter through all the current tags, if isSelected is true, we will include them when adding a todo
    let filteredItemTags = this.tags.filter((tag) => tag.isSelected === true);

    // push all inputs from form into the todos array of objects
    this.todos.push({
      title: this.inputTitle,
      content: this.inputDescription,
      duedate: this.inputDueDate,
      itemTags: filteredItemTags,
      completed: false
    })

    // reset the input fields
    this.inputTitle = '';
    this.inputDueDate ='';
    this.inputDescription=''
    this.tags.forEach(tag => {
      tag.isSelected = false
    })
  }

  // When clicking the reset button, all todo items will be shown, rather than just the filtered ones.
  resetFilter() {
    this.searchTag='';
    this.orderByKey='';
  }

}

