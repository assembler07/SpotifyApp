import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'; // para usar este paquete se necesita un constructor


@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor( private domSanitizer:DomSanitizer ){

  }

  transform(value: string, url: string): any {
    return this.domSanitizer.bypassSecurityTrustResourceUrl( url + value);
  }

}
