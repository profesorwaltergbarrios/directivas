import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirNgForComponent } from './dir-ng-for.component';

describe('DirNgForComponent', () => {
  let component: DirNgForComponent;
  let fixture: ComponentFixture<DirNgForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirNgForComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirNgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
