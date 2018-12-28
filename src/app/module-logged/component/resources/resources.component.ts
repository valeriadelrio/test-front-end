import { Component, OnInit } from '@angular/core';
import * as alertify from 'alertifyjs';
import { TranslateService } from '@ngx-translate/core';
import * as _ from 'lodash';
import { ResourceService } from '../../../shared/services/resources.service';
import { MatPaginator, MatDialogConfig, MatDialog } from '@angular/material';
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
  lengthTable: number;
  paginator: MatPaginator;
  loading: boolean;


  constructor(private translate: TranslateService,
              private resources: ResourceService,
              private dialog: MatDialog) {
                this.pageIndex = 0;
                this.pageSize = 15;
               }

  ngOnInit() {
    this.getResources();
  }

  getResources() {
    this.resources.getResource().toPromise().then((data: any) => {
      this.dataTable = data;
    });
  }

  deleteRow(id: number) {
    const indexRowDelete = _.findIndex(this.dataTable, function(o) {
      return o.id === id;
    });
    this.dataTable.splice(indexRowDelete, 1);
  }

  getInfoRow(id: number) {
    const indexRowDelete = _.findIndex(this.dataTable, function(o) {
      if (o.id === id) {
       return indexRowDelete;
      }
    });
  }

  showView(event: any) {
    this.resources.getResourceById(event.id).toPromise().then((data: any) => {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.autoFocus = true;
      dialogConfig.width = '50%';
      dialogConfig.data = {
        compactView: false,
        loading: false,
        dataRow: data,
        showBorder: true
      };
      this.dialog.open(ModalResourceComponent, dialogConfig);
    });
  }



  clickIcon(event: any) {
    this.loading = true;
    console.log(event);
    switch (event.event) {
      case 'view':
        // openModal
        this.showView(event);
        break;
      case 'delete':
        alertify
          .confirm(
            this.translate.instant(event.event),
            this.translate.instant('delete_resource'),
            // Success
            () => {
              this.resources.deleteResource(event.id).toPromise().then(
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
        // openModal

    }
  }


}
