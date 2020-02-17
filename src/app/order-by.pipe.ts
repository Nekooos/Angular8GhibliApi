import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(args: any[]): any[] {
    let test:any[] = [1,2,3];
    return test;
  }
}
