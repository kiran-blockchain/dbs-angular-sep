import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: 'lowercase2'
})
export class Lowercase2 implements PipeTransform {
    transform(input: any) {
        if (typeof input == 'string') {
            return input.toLowerCase();
        }
        else {
            return input;
        }
    }
}