import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolConfigComponent } from './tool-config.component';

describe('ToolConfigComponent', () => {
  let component: ToolConfigComponent;
  let fixture: ComponentFixture<ToolConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolConfigComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
