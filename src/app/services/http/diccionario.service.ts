import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { FxGlobalsService } from '../fxGlobals/fxGlobals.service';
import { finalize } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DiccionarioService {

  private headers: HttpHeaders;



  constructor( private _http: HttpClient, private _fxGlobals: FxGlobalsService ) {

    this.headers = new HttpHeaders();
    this.headers.append('Content-Type', 'application/json');
  }

  

  public getAllByCode( codigo: String ): Observable<any> {

    this._fxGlobals.showSpinner();

    let params = new HttpParams()
      .set('codigo', codigo.toString());

    return this._http.get(`${environment.apiUri}/diccionario/all-by-code`, 
      { params }
    )
    .pipe(
      finalize(() => this._fxGlobals.hideSpinner())
    );
  }


}
