import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {
    
    transform(value: string, capitalizado: boolean = false): string {
        if (!capitalizado) {
            return value.toLocaleUpperCase();
        } else {
            return value.substr(0,1).toUpperCase() + value.substr(1).toLocaleLowerCase();
        }
    }
}