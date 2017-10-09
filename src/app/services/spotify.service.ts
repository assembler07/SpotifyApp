import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'


@Injectable()
export class SpotifyService {

  artistas:any [] = [];

  urlBusqueda:string = "https://api.spotify.com/v1/search";
  urlArtista:string = "https://api.spotify.com/v1/artists/";
  urlTop:string = "";

  constructor( private http:Http) { }


getArtistas( termino:string ){

  const headers = new Headers();
  headers.append('authorization', 'Bearer BQBxiTo7kPPPSQYHrPHCrAR49ZlSViUJTBD1Mvx9CJByf_CZJeOzTdFdvjzdS1j2UV4MVZfHCRzfSyJya2Hbjw');

  let query = `?q=${ termino }&type=artist`;
  let url = this.urlBusqueda + query;

  return this.http.get( url, {headers} )
                  .map( res => {
                    //console.log( res.json().artists.items );
                    this.artistas = res.json().artists.items;

                  });
}

getArtista( id:string ){

  const headers = new Headers();
  headers.append('authorization', 'Bearer BQBxiTo7kPPPSQYHrPHCrAR49ZlSViUJTBD1Mvx9CJByf_CZJeOzTdFdvjzdS1j2UV4MVZfHCRzfSyJya2Hbjw');


  let query = `${ id }`;
  let url = this.urlArtista + query;

  return this.http.get( url, {headers}  )
                  .map( res => {
                    console.log( res.json() );
                    return res.json();
                  })
}

getTop( id:string ){

  const headers = new Headers();
  headers.append('authorization', 'Bearer BQBxiTo7kPPPSQYHrPHCrAR49ZlSViUJTBD1Mvx9CJByf_CZJeOzTdFdvjzdS1j2UV4MVZfHCRzfSyJya2Hbjw');


  let query = `${ id }/top-tracks?country=US`;
  let url = this.urlArtista + query;

  return this.http.get( url, {headers}  )
                  .map( res => {
                    console.log( res.json().tracks );
                    return res.json().tracks;
                  })
}


}
