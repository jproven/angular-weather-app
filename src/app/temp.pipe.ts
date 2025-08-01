import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temp'
})
export class TempPipe implements PipeTransform {

  transform(value: number, numDecimals: number = 2): string {
    return value.toFixed(numDecimals) + " ºC";
  }

}
