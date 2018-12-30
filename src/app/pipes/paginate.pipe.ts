import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginate'
})
export class PaginatePipe implements PipeTransform {

  transform(value: any[], args?: any): any {
    if (value) {
      return value.slice(args.itemsPerPage * args.currentPage, (args.currentPage + 1) * args.itemsPerPage) 
    }
  }

}
