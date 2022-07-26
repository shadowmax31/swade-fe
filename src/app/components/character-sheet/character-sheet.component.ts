import { Component, OnInit, ViewChild } from '@angular/core';
import { faShieldHeart, faShirt, faSocks } from '@fortawesome/free-solid-svg-icons';
import { Armor } from '../../dto/armor';
import { AttributeUtils } from '../../dto/attribute';
import { Character } from '../../dto/character';
import { Die } from '../../dto/die';
import { Hindrance } from '../../dto/hindrance';
import { Skill, SkillInfo } from '../../dto/skill';
import { CharacterFactory } from './factory/character-factory';
import { ModalComponent } from '../modal/modal.component';
import { SkillService } from '../../services/skill.service';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.sass']
})
export class CharacterSheetComponent implements OnInit {

  public c: Character;
  public armor: Armor | null = null;
  public newArmor = false;

  constructor(private skillService: SkillService) { 
    const factory = new CharacterFactory(this.skillService);

    this.c = factory.create('Name', 'Human');
  }

  ngOnInit(): void {
  }
}
