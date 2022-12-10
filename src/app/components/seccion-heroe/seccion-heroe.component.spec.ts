import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionHeroeComponent } from './seccion-heroe.component';

describe('SeccionHeroeComponent', () => {
  let component: SeccionHeroeComponent;
  let fixture: ComponentFixture<SeccionHeroeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionHeroeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
