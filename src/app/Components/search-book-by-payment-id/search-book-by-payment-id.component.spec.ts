import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBookByPaymentIdComponent } from './search-book-by-payment-id.component';

describe('SearchBookByPaymentIdComponent', () => {
  let component: SearchBookByPaymentIdComponent;
  let fixture: ComponentFixture<SearchBookByPaymentIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBookByPaymentIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBookByPaymentIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
