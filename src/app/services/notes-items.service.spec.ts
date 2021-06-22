import { TestBed } from '@angular/core/testing';

import { NotesItemsService } from './notes-items.service';

describe('NotesItemsService', () => {
  let service: NotesItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotesItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
