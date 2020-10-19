import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SopaFeitaComponent } from './sopa-feita.component';

describe('SopaFeitaComponent', () => {
  let component: SopaFeitaComponent;
  let fixture: ComponentFixture<SopaFeitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SopaFeitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SopaFeitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
