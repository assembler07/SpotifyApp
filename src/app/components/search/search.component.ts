import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  termino:string = "";

  constructor( private _spotifyService:SpotifyService ) { }

  ngOnInit() {}

  buscarArtistas(){
    //console.log(this.termino);
    this._spotifyService.getArtistas( this.termino ) //escucha el observable, pero para escuchar debemos subscribirnos ->
      .subscribe();
  }

}
