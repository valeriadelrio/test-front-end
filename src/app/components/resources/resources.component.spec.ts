import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesComponent } from './resources.component';
import { SearchComponent } from '../search/search.component';
import { TranslateModule } from '@ngx-translate/core';
import { PaginatePipe } from 'src/app/pipes/paginate.pipe';
import { RowTableComponent } from '../row-table/row-table.component';
import { MatPaginatorModule, MatIconModule, MatTooltipModule, MAT_DIALOG_DATA, MatDialogModule, MatFormFieldModule } from '@angular/material';
import { IconsTableComponent } from '../icons-table/icons-table.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsService } from 'src/app/shared/services/posts.service';
import { PostsServiceStub } from 'src/app/shared/services/posts.service.stub';
import { post } from 'selenium-webdriver/http';
import { of } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { ModalResourceComponent } from '../modal-resource/modal-resource.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

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
        IconsTableComponent,
        ModalResourceComponent
       ],
      imports: [
        BrowserAnimationsModule,
        TranslateModule.forRoot(),
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        MatFormFieldModule,
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
    TestBed.overrideModule(BrowserDynamicTestingModule, {
      set: {
           entryComponents: [ModalResourceComponent],
      },
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

  it('should call getInfoRow()', async() => {
    component.dataTable = [];
    await component.getInfoRow(1)
  });

  it('should call showModal()', async() => {
    const spy = spyOn(posts, 'getPostById').and.callFake(() => of([]));
    await component.showModal(1);
    expect(spy).toHaveBeenCalled();
  });

  it('should call updateRow()', async() => {
    const spy = spyOn(posts, 'getPostById').and.callFake(() => of([]));
    await component.updateRow(1);
    expect(spy).toHaveBeenCalled();
  });

  it('should call clickIcon() with view', async() => {
    const event = { 
      event: 'view'
    }
    await component.clickIcon(event);
    expect(component.edit).toBe(false);
  });


  it('should call clickIcon() with delete', async() => {
    const event = { 
      event: 'delete'
    }
    await component.clickIcon(event);
  });


  it('should call clickIcon() with edit', async() => {
    const event = { 
      event: 'edit'
    }
    await component.clickIcon(event);
    expect(component.edit).toBe(true);
  });

  it('should call pageChange()', async() => {
    const event = { 
      pageIndex: 1,
      pageSize: 15,
      length: 100
    }
    await component.pageChange(event);
    expect(component.pageIndex).toBe(1);
  });



});
