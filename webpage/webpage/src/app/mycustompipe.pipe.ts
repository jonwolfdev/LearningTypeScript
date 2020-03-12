import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mycustompipe'
})
export class MycustompipePipe implements PipeTransform {

  transform(value: string, num: number): string {
    let str = '';
    for (let i = 0; i < num; i++) {
      str += value;
    }
    return str;
  }

}
