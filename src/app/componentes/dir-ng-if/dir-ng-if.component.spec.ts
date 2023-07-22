import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirNgIfComponent } from './dir-ng-if.component';

describe('DirNgIfComponent', () => {
  let component: DirNgIfComponent;
  let fixture: ComponentFixture<DirNgIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirNgIfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirNgIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
