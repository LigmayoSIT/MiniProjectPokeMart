import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuService } from './menu-service';

describe('MenuService', () => {
  let component: MenuService;
  let fixture: ComponentFixture<MenuService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuService],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
