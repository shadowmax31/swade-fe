import { Injectable } from '@angular/core';
import { Attribute } from '../dto/attribute';
import { Skill, SkillInfo, Skills } from '../dto/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  
  private skills: SkillInfo[] = [];
  
  constructor() {
    // Core
    this.skills.push(new SkillInfo(Skills.ATHLETICS, 'Athletics', Attribute.AGILITY, null));
    this.skills.push(new SkillInfo(Skills.COMMON_KNOWLEDGE, 'Common Knowledge', Attribute.SMARTS, null));
    this.skills.push(new SkillInfo(Skills.NOTICE, 'Notice', Attribute.SMARTS, null));
    this.skills.push(new SkillInfo(Skills.PERSUASION, 'Persuasion', Attribute.SPIRIT, null));
    this.skills.push(new SkillInfo(Skills.STEALTH, 'Stealth', Attribute.AGILITY, null));

    // Other
    this.skills.push(new SkillInfo(Skills.FIGHTING, 'Fighthing', Attribute.AGILITY, null));
    this.skills.push(new SkillInfo(Skills.SHOOTING, 'Shooting', Attribute.AGILITY, null));
  }

  public getAll() {
    return this.skills;
  }
  
  public get(s: Skills) {
    let skill: SkillInfo | null = null;

    for (const loop of this.skills) {
      if (loop.id === s) {
        skill = loop;
        break;
      }
    }

    if (skill == null) {
      throw Error(`Skill [${s}] not found!`);
    }

    return skill;
  }
}
