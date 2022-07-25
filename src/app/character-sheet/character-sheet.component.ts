import { Component, OnInit } from '@angular/core';
import { AttributeUtils } from '../dto/Attribute';
import { Character } from '../dto/Character';
import { CharacterFactory } from '../factory/character-factory';
import { SkillService } from '../services/skill.service';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.sass']
})
export class CharacterSheetComponent implements OnInit {
  AttributeUtils = AttributeUtils;

  public c: Character;

  constructor(private skillService: SkillService) { 
    const factory = new CharacterFactory(this.skillService);

    this.c = factory.create('Name', 'Human');
  }

  ngOnInit(): void {

  }

}
