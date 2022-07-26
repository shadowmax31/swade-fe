import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { faShieldHeart, faShirt, faSocks } from '@fortawesome/free-solid-svg-icons';
import { Armor } from 'src/app/dto/armor';
import { Character } from 'src/app/dto/character';
import { ModalComponent } from '../../modal/modal.component';

@Component({
  selector: 'app-armors',
  templateUrl: './armors.component.html',
  styleUrls: ['../character-sheet.component.sass']
})
export class ArmorsComponent implements OnInit {
  faShield = faShieldHeart;
  faPlate = faShirt;
  faArmorOther = faSocks;

  @Input()
  character: Character | null = null;
  armor: Armor | null = null;

  @ViewChild('armorModal')
  private modal!: ModalComponent;

  constructor() { }

  ngOnInit(): void {
  }

  open(armor: Armor | null = null) {
    if (armor == null) {
      armor = new Armor();
    }

    this.armor = armor;
    this.modal.open();
  }

  remove(armor: Armor) {
    if (this.character) {
      const index = this.character.armors.indexOf(armor);
      this.character.armors.splice(index, 1);
    }
  }

  save(armor: Armor) {
    if (!this.character?.armors.includes(armor)) {
      this.character?.armors.push(armor);
    }

    this.modal.close();
  }

  formatBonus(bonus: number) {
    let str = bonus.toString();

    if (bonus > 0) {
      str = "+" + str;
    }

    return str;
  }

}
