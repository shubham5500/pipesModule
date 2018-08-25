import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe',
  // pure: false // This will trigger the pipe whenever data changes but leads to performance issues
})
export class FilterPipePipe implements PipeTransform {

  transform(value: any, filteredString, propName): any {
    if(value.length === 0 || filteredString === ''){
      return value;
    }
    const resultArray = [];
    for(let item of value){
      if(item[propName] === filteredString){
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
