import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBooksByAuthorComponent } from './search-books-by-author.component';

describe('SearchBooksByAuthorComponent', () => {
  let component: SearchBooksByAuthorComponent;
  let fixture: ComponentFixture<SearchBooksByAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBooksByAuthorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBooksByAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
