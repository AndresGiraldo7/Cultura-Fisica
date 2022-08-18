import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SieteComponent } from './siete.component';

describe('SieteComponent', () => {
  let component: SieteComponent;
  let fixture: ComponentFixture<SieteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SieteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
