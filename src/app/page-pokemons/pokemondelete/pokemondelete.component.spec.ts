import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemondeleteComponent } from './pokemondelete.component';

describe('PokemondeleteComponent', () => {
  let component: PokemondeleteComponent;
  let fixture: ComponentFixture<PokemondeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemondeleteComponent]
    });
    fixture = TestBed.createComponent(PokemondeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
