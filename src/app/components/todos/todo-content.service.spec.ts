import { TestBed } from '@angular/core/testing';

import { TodoContentService } from './todo-content.service';

describe('TodoContentService', () => {
  let service: TodoContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
