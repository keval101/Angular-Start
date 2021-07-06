import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssisgmentComponent } from './assisgment.component';

describe('AssisgmentComponent', () => {
  let component: AssisgmentComponent;
  let fixture: ComponentFixture<AssisgmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssisgmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssisgmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
