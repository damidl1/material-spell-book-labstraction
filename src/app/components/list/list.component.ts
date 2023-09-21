import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Spell } from 'src/app/model/spell';
import { SpellService } from 'src/app/services/spell/spell.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{

  spells: Spell[] = [];

  constructor(private spellService: SpellService, private router: Router){}

  ngOnInit(): void {
    this.spellService.getAllSpells().subscribe(data => this.spells = data);
    // this.spellService.getAllSpellDetails().subscribe(details => console.log(details))
  }

  // openDetail(spell: Spell){
  //   this.spellService.selectedSpell = spell.index;
  //   this.router.navigateByUrl('/detail')
  // }

  openDetail(spell: Spell){
    this.router.navigateByUrl('/detail?spell=' + spell.index)
  }
}
