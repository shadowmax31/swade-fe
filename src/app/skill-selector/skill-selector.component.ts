import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../dto/Character';
import { Die } from '../dto/Die';
import { Skill, SkillInfo } from '../dto/Skill';
import { SkillService } from '../services/skill.service';

@Component({
  selector: 'app-skill-selector',
  templateUrl: './skill-selector.component.html',
  styleUrls: ['./skill-selector.component.sass']
})
export class SkillSelectorComponent implements OnInit {
  
  @Input()
  character: Character | null = null;

  public visible = false;
  public skills: SkillInfo[] = [];

  constructor(private skillService: SkillService) { }

  ngOnInit(): void {
    this.skills = this.skillService.getAll();
  }

  addSkill(info: SkillInfo) {
    if (this.character != null) {
      this.character.skills.push(new Skill(info, Die.d4()));
    }
  }

  open() {
    this.visible = true;
  }

  close() {
    this.visible = false;
  }
}
