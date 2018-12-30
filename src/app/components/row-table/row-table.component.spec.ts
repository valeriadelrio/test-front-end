import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowTableComponent } from './row-table.component';
import { IconsTableComponent } from '../icons-table/icons-table.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule, MatTooltipModule } from '@angular/material';

describe('RowTableComponent', () => {
  let component: RowTableComponent;
  let fixture: ComponentFixture<RowTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RowTableComponent,
        IconsTableComponent
      ],
      imports: [
        TranslateModule.forRoot(),
        MatIconModule,
        MatTooltipModule

      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call clickIconTable()', () => {
    const event = 'edit'
    const spy = spyOn(component.clickIcon, 'emit');
    component.clickIconTable(event, 1);
    expect(spy).toHaveBeenCalledWith({ event, id: 1 });
  });
});
