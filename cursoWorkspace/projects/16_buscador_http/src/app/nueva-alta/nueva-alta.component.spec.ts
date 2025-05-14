import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaAltaComponent } from './nueva-alta.component';

describe('NuevaAltaComponent', () => {
  let component: NuevaAltaComponent;
  let fixture: ComponentFixture<NuevaAltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevaAltaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevaAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
