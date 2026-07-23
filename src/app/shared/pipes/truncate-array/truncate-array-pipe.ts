import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateArray',
})
export class TruncateArrayPipe implements PipeTransform {
  transform(value: string[] | null | undefined, maxItems = 10): string {
    if (!value?.length) {
      return '';
    }

    const limited = value.slice(0, maxItems).join(', ');

    return value.length > maxItems ? `${limited} ...` : limited;
  }
}
