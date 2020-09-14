import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBienvenidoComponent } from './new-bienvenido.component';

describe('NewBienvenidoComponent', () => {
  let component: NewBienvenidoComponent;
  let fixture: ComponentFixture<NewBienvenidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBienvenidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBienvenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
