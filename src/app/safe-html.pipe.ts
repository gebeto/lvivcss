import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml'
})
export class SafeHtmlPipe implements PipeTransform {
  constructor(readonly sanitizer: DomSanitizer) { }
  transform(value: any, _args?: any): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(value || '');
  }

}
