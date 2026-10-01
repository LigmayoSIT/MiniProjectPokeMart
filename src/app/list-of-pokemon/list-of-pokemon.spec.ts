import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListOfPokemon } from './list-of-pokemon';

describe('ListOfPokemon', () => {
  let component: ListOfPokemon;
  let fixture: ComponentFixture<ListOfPokemon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListOfPokemon],
    }).compileComponents();

    fixture = TestBed.createComponent(ListOfPokemon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
