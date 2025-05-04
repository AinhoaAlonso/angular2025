import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevasTematicasComponent } from './nuevas-tematicas.component';

describe('NuevasTematicasComponent', () => {
  let component: NuevasTematicasComponent;
  let fixture: ComponentFixture<NuevasTematicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevasTematicasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevasTematicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
