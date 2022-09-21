import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksPurchasedComponent } from './books-purchased.component';

describe('BooksPurchasedComponent', () => {
  let component: BooksPurchasedComponent;
  let fixture: ComponentFixture<BooksPurchasedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksPurchasedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksPurchasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
