import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/dto/character';

@Component({
  selector: 'app-derived-stats',
  templateUrl: './derived-stats.component.html',
  styleUrls: ['../character-sheet.component.sass']
})
export class DerivedStatsComponent implements OnInit {

  @Input()
  character: Character | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
