import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Spell } from 'src/app/model/spell';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() spellData?: Spell;
  @Output() spellSelected = new EventEmitter<Spell>()

  select(){
    this.spellSelected.emit(this.spellData);
  }
}
