import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptConfigComponent } from './script-config.component';

describe('ScriptConfigComponent', () => {
  let component: ScriptConfigComponent;
  let fixture: ComponentFixture<ScriptConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScriptConfigComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScriptConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
