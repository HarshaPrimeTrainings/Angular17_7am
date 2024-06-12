import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eveorodd',
  pure:true
})
export class EveoroddPipe implements PipeTransform {

  count:number = 0;

  transform(value:any) {
    this.count = this.count+1;
    console.log(this.count);
    if(value%2==0){
      return 'EVEN';
    }
    return 'ODD';
  
  }

}
