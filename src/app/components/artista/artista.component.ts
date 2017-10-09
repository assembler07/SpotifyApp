import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent implements OnInit {

  artista:any;
  pistas:any[];

  constructor( private activatedRoute: ActivatedRoute,
               private _spotifyService: SpotifyService) { }

  ngOnInit() {
    this.activatedRoute.params
        .map(parametros => parametros['id'])//id puesto en rutas
        .subscribe( id => {
          //console.log(id);
          this._spotifyService.getArtista(id).subscribe( data => this.artista = data );

          this._spotifyService.getTop(id).subscribe( data => this.pistas = data );


        });// escuchar cuando vengas los datos subs
  }
}
