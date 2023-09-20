import { Component } from '@angular/core';
import { SpellService } from '../spell.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {

  constructor(public spell: SpellService ){}
}
