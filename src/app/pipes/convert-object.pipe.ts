import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertObject'
})
export class ConvertObjectPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return JSON.parse(value);
  }

}
