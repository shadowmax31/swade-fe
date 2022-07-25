import { Component, OnInit, ViewChild } from '@angular/core';
import { AttributeUtils } from '../dto/attribute';
import { Character } from '../dto/character';
import { Die } from '../dto/die';
import { Skill, SkillInfo } from '../dto/skill';
import { CharacterFactory } from '../factory/character-factory';
import { ModalComponent } from '../modal/modal.component';
import { SkillService } from '../services/skill.service';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.sass']
})
export class CharacterSheetComponent implements OnInit {
  AttributeUtils = AttributeUtils;

  public c: Character;
  public skills: SkillInfo[] = [];

  @ViewChild('skillModal')
  private skillModal!: ModalComponent;

  constructor(private skillService: SkillService) { 
    const factory = new CharacterFactory(this.skillService);

    this.c = factory.create('Name', 'Human');
  }

  ngOnInit(): void {
    this.skills = this.skillService.getAll();
  }

  manageSkills() {
    this.skillModal.open();
  }

  addSkill(info: SkillInfo) {
    this.c.skills.push(new Skill(info, Die.d4()));
  }

  manageWeapons() {

  }

  manageArmors() {

  }

}
