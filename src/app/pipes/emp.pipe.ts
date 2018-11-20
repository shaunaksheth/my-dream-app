import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emp'
})
export class EmpPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value=="Male")
    {
      return "M"
    }else
    {
      return "F"
    }
  }

}
