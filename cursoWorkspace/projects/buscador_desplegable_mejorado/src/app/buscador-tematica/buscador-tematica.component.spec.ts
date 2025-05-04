import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorTematicaComponent } from './buscador-tematica.component';

describe('BuscadorTematicaComponent', () => {
  let component: BuscadorTematicaComponent;
  let fixture: ComponentFixture<BuscadorTematicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscadorTematicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscadorTematicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
