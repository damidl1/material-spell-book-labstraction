import { Component, OnInit } from '@angular/core';
import { SpellService } from 'src/app/services/spell/spell.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  constructor(public spellService: SpellService) {}

  ngOnInit(): void {
    // this.spellService.getSpellDetail()
    // .subscribe({
    //   next: detail => console.log(detail),
    //   error: error => console.log(error)
    // })

    const params = new URLSearchParams(window.location.search);
    if (params.get('spell')) {
      this.spellService
        .getSpellDetailWithIndex(params.get('spell')!)
        .subscribe({
          next: (detail) => console.log(detail),
          error: (error) => console.log(error),
        });
    }
  }
}
