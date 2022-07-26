import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/dto/character';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['../character-sheet.component.sass']
})
export class AttributesComponent implements OnInit {

  @Input()
  public character: Character | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
