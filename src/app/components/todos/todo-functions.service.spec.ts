import { TestBed } from '@angular/core/testing';

import { TodoFunctionsService } from './todo-functions.service';

describe('TodoFunctionsService', () => {
  let service: TodoFunctionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoFunctionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
