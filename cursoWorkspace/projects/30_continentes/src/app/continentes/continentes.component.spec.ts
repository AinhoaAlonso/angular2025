import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinentesComponent } from './continentes.component';

describe('ContinentesComponent', () => {
  let component: ContinentesComponent;
  let fixture: ComponentFixture<ContinentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContinentesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContinentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
