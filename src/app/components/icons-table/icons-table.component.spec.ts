import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsTableComponent } from './icons-table.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule, MatTooltipModule } from '@angular/material';

describe('IconsTableComponent', () => {
  let component: IconsTableComponent;
  let fixture: ComponentFixture<IconsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsTableComponent ],
      imports: [
        TranslateModule.forRoot(),
        MatIconModule,
        MatTooltipModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call handleClickIcon()', () => {
    const spy = spyOn(component.onclick, 'emit').and.callThrough();
    component.handleClickIcon('edit', true);
    expect(spy).toHaveBeenCalled();    
  });
  
});
