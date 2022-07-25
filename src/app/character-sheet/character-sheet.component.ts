import { Component, OnInit, ViewChild } from '@angular/core';
import { faShieldHeart, faShirt, faSocks } from '@fortawesome/free-solid-svg-icons';
import { Armor } from '../dto/armor';
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
  faShield = faShieldHeart;
  faPlate = faShirt;
  faArmorOther = faSocks;

  AttributeUtils = AttributeUtils;

  public c: Character;
  public skills: SkillInfo[] = [];
  public newArmor: Armor | null = null;

  @ViewChild('armorModal')
  private armorModal!: ModalComponent;

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
    this.newArmor = new Armor();
    this.armorModal.open();
  }

  addArmor(armor: Armor) {
    this.c.armors.push(armor);

    this.armorModal.close();
  }

  formatBonus(bonus: number) {
    let str = bonus.toString();

    if (bonus > 0) {
      str = "+" + str;
    }

    return str;
  }

}
