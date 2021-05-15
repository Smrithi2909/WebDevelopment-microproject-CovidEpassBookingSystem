import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViruscountComponent } from './viruscount.component';

describe('ViruscountComponent', () => {
  let component: ViruscountComponent;
  let fixture: ComponentFixture<ViruscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViruscountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViruscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
