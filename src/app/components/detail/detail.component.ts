import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Spell } from 'src/app/model/spell';
import { SpellService } from 'src/app/services/spell/spell.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {

  spellDetail?: Spell;

  constructor(public spellService: SpellService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.spellService.getSpellDetail()
    // .subscribe({
    //   next: detail => console.log(detail),
    //   error: error => console.log(error)
    // })

    // const params = new URLSearchParams(window.location.search);
    // if (params.get('spell')) {
    //   this.spellService
    //     .getSpellDetailWithIndex(params.get('spell')!)
    //     .subscribe({
    //       next: (detail) => console.log(detail),
    //       error: (error) => console.log(error),
    //     });
    // }


    if (this.route.snapshot.paramMap.get('index')) {
      this.spellService
        .getSpellDetailWithIndex(this.route.snapshot.paramMap.get('index')!)
        .subscribe({
          next: (detail) => this.spellDetail = detail,
          error: (error) => console.log(error),
        });
    }
  }
}
