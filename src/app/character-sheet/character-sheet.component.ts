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
  public armor: Armor | null = null;
  public newArmor = false;

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

  openArmor(armor: Armor | null = null) {
    if (armor == null) {
      armor = new Armor();
      this.newArmor = true;
    }
    else {
      this.newArmor = false;
    }

    this.armor = armor;
    this.armorModal.open();
  }

  deleteArmor(armor: Armor) {
    const index = this.c.armors.indexOf(armor);
    this.c.armors.splice(index, 1);
  }

  saveArmor(armor: Armor) {
    if (this.newArmor) {
      this.c.armors.push(armor);
    }

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
