import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/dto/character';
import { Hindrance } from 'src/app/dto/hindrance';

@Component({
  selector: 'app-hindrances',
  templateUrl: './hindrances.component.html',
  styleUrls: ['../character-sheet.component.sass']
})
export class HindrancesComponent implements OnInit {

  @Input()
  public character: Character | null = null;

  public newHindrance = '';

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    this.character?.hindrances.push(new Hindrance(this.newHindrance));
    this.newHindrance = '';
  }

  remove(hindrance: Hindrance) {
    if (this.character) {
      const index = this.character.hindrances.indexOf(hindrance);
      this.character.hindrances.splice(index, 1);
    }
  }

}
