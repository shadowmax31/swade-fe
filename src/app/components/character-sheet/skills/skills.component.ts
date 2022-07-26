import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AttributeUtils } from 'src/app/dto/attribute';
import { Character } from 'src/app/dto/character';
import { Die } from 'src/app/dto/die';
import { Skill, SkillInfo } from 'src/app/dto/skill';
import { SkillService } from 'src/app/services/skill.service';
import { ModalComponent } from '../../modal/modal.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['../character-sheet.component.sass']
})
export class SkillsComponent implements OnInit {
  AttributeUtils = AttributeUtils;

  @Input()
  public character: Character | null = null;

  @ViewChild('skillModal')
  private modal!: ModalComponent;

  public skills: SkillInfo[] = [];

  constructor(private skillService: SkillService) { }

  ngOnInit(): void {
    this.skills = this.skillService.getAll();
  }

  add(info: SkillInfo) {
    this.character?.skills.push(new Skill(info, Die.d4()));
  }

  remove(info: SkillInfo) {
    if (this.character) {
      const foundList = this.character.skills.filter(s => s.info.id === info.id);

      for (const found of foundList) {
        const index = this.character.skills.indexOf(found);
        this.character.skills.splice(index, 1);
      }
    }
  }

  manage() {
    this.modal.open();
  }

  getOtherSkills(): SkillInfo[] {
    return this.skills.filter(x => !x.core);
  }
}
