import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirNgSwitchComponent } from './dir-ng-switch.component';

describe('DirNgSwitchComponent', () => {
  let component: DirNgSwitchComponent;
  let fixture: ComponentFixture<DirNgSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirNgSwitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirNgSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
