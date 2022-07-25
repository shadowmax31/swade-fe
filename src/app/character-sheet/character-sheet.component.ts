import { Component, OnInit, ViewChild } from '@angular/core';
import { AttributeUtils } from '../dto/attribute';
import { Character } from '../dto/character';
import { CharacterFactory } from '../factory/character-factory';
import { SkillService } from '../services/skill.service';
import { SkillSelectorComponent } from '../skill-selector/skill-selector.component';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.sass']
})
export class CharacterSheetComponent implements OnInit {
  AttributeUtils = AttributeUtils;

  public c: Character;

  @ViewChild('skillSelector')
  private skillSelector!: SkillSelectorComponent;

  constructor(private skillService: SkillService) { 
    const factory = new CharacterFactory(this.skillService);

    this.c = factory.create('Name', 'Human');
  }

  ngOnInit(): void {

  }

  manageSkills() {
    this.skillSelector.open();
  }

}
