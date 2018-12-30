import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import * as _ from 'lodash';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input()
  data: Array<any>;
  @Input()
  fields: Array<string>;
  @Output() filterChange: EventEmitter<Array<any>>
  constructor() {
    this.filterChange = new EventEmitter<Array<any>>();
   }

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    const value = _.toLower(filterValue);
    const filtered = _.filter(this.data, row => _.some(this.fields, field => _.toLower(_.get(row, field, '').toString()).match(new RegExp(`${value}`))));
    this.filterChange.emit(filtered);
  }

}
