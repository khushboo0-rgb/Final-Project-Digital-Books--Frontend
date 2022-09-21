import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBooksAllComponent } from './search-books-all.component';

describe('SearchBooksAllComponent', () => {
  let component: SearchBooksAllComponent;
  let fixture: ComponentFixture<SearchBooksAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBooksAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBooksAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
