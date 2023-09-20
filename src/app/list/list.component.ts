import { Component } from '@angular/core';
import { SpellService } from '../spell.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  constructor(private spell: SpellService, private router: Router){}

  selectSpell(){
    this.spell.selectedSpell = '/spell/fire-ball/'
    this.router.navigate(['detail'])
  }
}
