import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, forkJoin, map, switchMap } from 'rxjs';
import { Spell } from 'src/app/model/spell';

@Injectable({
  providedIn: 'root'
})
export class SpellService {

  selectedSpell = '';

  BASE_URL = 'https://www.dnd5eapi.co/api/spells/'

  constructor(private http: HttpClient) { }


  getAllSpells(): Observable<Spell[]>{

    return this.http.get<any>(this.BASE_URL).pipe(
      map(dataObj => dataObj.results),
      catchError(err => {
        console.log(err);
        return []
      })
    )

    // return this.http.get<Spell[]>(this.BASE_URL).pipe(
    //   map((dataObj: any) => dataObj.results)
    // )
  }

  getSpellDetail(){
    if (this.selectedSpell === '') {
      this.selectedSpell = 'acid-arrow'
    }
    return this.http.get<Spell>(this.BASE_URL + this.selectedSpell);
  }

  getSpellDetailWithIndex(spellIndex:string){
    return this.http.get<Spell>(this.BASE_URL + spellIndex);
  }


  // getAllSpellDetails(){
  //   return this.http.get<any>(this.BASE_URL).pipe(
  //     map(obj => obj.results),
  //     switchMap(spells => forkJoin(spells.map((spell:any) => this.http.get<Spell>(this.BASE_URL+spell.index))))
  //   )
  // }
}
