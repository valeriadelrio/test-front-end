import { Component, OnInit, Output } from '@angular/core';
import * as alertify from 'alertifyjs';
import { TranslateService } from '@ngx-translate/core';
import * as _ from 'lodash';
import { PostsService } from '../../shared/services/posts.service';
import { MatPaginator, MatDialogConfig, MatDialog, PageEvent } from '@angular/material';
import { ModalResourceComponent } from '../modal-resource/modal-resource.component';
@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {
  dataTable: Array<any>;
  pageSize: number;
  pageIndex: number;
  length: number;
  paginator: MatPaginator;
  edit: boolean;
  filteredDataTable: Array<any>;

  constructor(private translate: TranslateService,
              private posts: PostsService,
              private dialog: MatDialog) {
                this.pageIndex = 0;
                this.pageSize = 15;
                this.edit = false;
               }

  ngOnInit() {
    this.getResources();
  }

  updateFilteredData(data) { 
    this.filteredDataTable = data;
  }

  getResources() {
    this.posts.getPosts().toPromise().then((data: any) => {
      this.dataTable = data;
      this.filteredDataTable = data;
    });
  }

  deleteRow(id: number) {
    const indexRowDelete = _.findIndex(this.dataTable, function(o) {
      return o.id === id;
    });
    this.dataTable.splice(indexRowDelete, 1);
  }

  getInfoRow(id: number) {
    const index = _.findIndex(this.dataTable, function(o) {
      if (o.id === id) {
       return index;
      }
    });
  }

  showModal(event: any) {
    this.posts.getPostById(event.id).toPromise().then((data: any) => {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.autoFocus = true;
      dialogConfig.width = '50%';
      dialogConfig.data = {
        edit: this.edit,
        dataRow: data,
        onSave: this.updateRow.bind(this)

      };
      const dialogRef = this.dialog.open(ModalResourceComponent, dialogConfig);
      dialogRef.componentInstance.closed.subscribe(event => {
        if(event.saved) {
          this.updateRow(event.id);
        }
        dialogRef.close();
      })
    });
  }

  updateRow(id: number ) {
    const index = _.findIndex(this.dataTable, function(o) {
      return o.id === id;
    });
    this.posts.getPostById(id).toPromise().then( post => {
      this.dataTable[index] = Object.assign(this.dataTable[index], post);
    });
  }



  clickIcon(event: any) {
    switch (event.event) {
      case 'view':
      this.edit = false;
        this.showModal(event);
        break;
      case 'delete':
        alertify
          .confirm(
            this.translate.instant(event.event),
            this.translate.instant('delete_resource'),
            // Success
            () => {
              this.posts.deletePost(event.id).toPromise().then(
                response => {
                  this.deleteRow(event.id);
                  alertify.success(
                    this.translate.instant('delete_success')
                  );
                }
              );
            },
             // Error
             () => {
              alertify.error(this.translate.instant('action_cancel'));
            }
          )
          .set('labels', {
            ok: this.translate.instant('accept'),
            cancel: this.translate.instant('cancel')
          });
        break;
      case 'edit':
      this.edit = true;
        this.showModal(event);

    }
  }


  pageChange(event: PageEvent) { 
    this.pageIndex = event.pageIndex;
  }
}
