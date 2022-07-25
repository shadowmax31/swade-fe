import { Component, OnInit } from '@angular/core';
import { AttributeUtils } from '../dto/Attribute';
import { Character } from '../dto/Character';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.sass']
})
export class CharacterSheetComponent implements OnInit {
  AttributeUtils = AttributeUtils;

  public c: Character;

  constructor() { 
    this.c = new Character('Name!', 'Human');
  }

  ngOnInit(): void {
  }

}
