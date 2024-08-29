import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePokemonsComponent } from './page-pokemons.component';

describe('PagePokemonsComponent', () => {
  let component: PagePokemonsComponent;
  let fixture: ComponentFixture<PagePokemonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagePokemonsComponent]
    });
    fixture = TestBed.createComponent(PagePokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
