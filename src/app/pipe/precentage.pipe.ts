import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'precentage'
})
export class PrecentagePipe implements PipeTransform {

  transform(value: number): string {
    return `${value}%`;
  }

}
