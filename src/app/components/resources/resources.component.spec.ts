import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesComponent } from './resources.component';
import { SearchComponent } from '../search/search.component';
import { TranslateModule } from '@ngx-translate/core';
import { PaginatePipe } from 'src/app/pipes/paginate.pipe';
import { RowTableComponent } from '../row-table/row-table.component';
import { MatPaginatorModule, MatIconModule, MatTooltipModule, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material';
import { IconsTableComponent } from '../icons-table/icons-table.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsService } from 'src/app/shared/services/posts.service';
import { PostsServiceStub } from 'src/app/shared/services/posts.service.stub';
import { post } from 'selenium-webdriver/http';
import { of } from 'rxjs';

describe('ResourcesComponent', () => {
  let component: ResourcesComponent;
  let fixture: ComponentFixture<ResourcesComponent>;
  let posts: PostsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ResourcesComponent,
        SearchComponent,
        PaginatePipe,
        RowTableComponent,
        IconsTableComponent
       ],
      imports: [
        TranslateModule.forRoot(),
        HttpClientModule,
        MatPaginatorModule,
        MatIconModule,
        MatTooltipModule,
        MatDialogModule
      ],
      providers: [
        {provide: MAT_DIALOG_DATA, useValue: {}},
        { provide: PostsService, useClass: PostsServiceStub}

      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesComponent);
    component = fixture.componentInstance;
    posts = TestBed.get(PostsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getResources()', async() => {
    const spy = spyOn(posts, 'getPosts').and.callFake(() => of([]));
    component.filteredDataTable = [];
    await component.getResources()
    expect(spy).toHaveBeenCalled();
    expect(component.filteredDataTable).toEqual([]);
  });

  it('should call deleteRow()', async() => {
    component.dataTable = [];
    await component.deleteRow(1)
  });
});
