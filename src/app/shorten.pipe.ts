import { PipeTransform, Pipe } from "@angular/core";
@Pipe({
    name: 'shorten'
})

export class ShortenPipe implements PipeTransform{
    transform(value: any, limit: any, initial: string){
        if(value.length > limit){
            return initial + value.substr(0, limit) ;
        }
        return value;
    }
}