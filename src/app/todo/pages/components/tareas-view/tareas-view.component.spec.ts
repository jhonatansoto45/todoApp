import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasViewComponent } from './tareas-view.component';

describe('TareasViewComponent', () => {
  let component: TareasViewComponent;
  let fixture: ComponentFixture<TareasViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareasViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareasViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
