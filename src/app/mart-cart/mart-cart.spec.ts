import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MartCart } from './mart-cart';

describe('MartCart', () => {
  let component: MartCart;
  let fixture: ComponentFixture<MartCart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MartCart],
    }).compileComponents();

    fixture = TestBed.createComponent(MartCart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
