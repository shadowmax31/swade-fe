import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { faGun, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { Character } from 'src/app/dto/character';
import { Weapon } from 'src/app/dto/weapon';
import { ModalComponent } from '../../modal/modal.component';

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['../character-sheet.component.sass']
})
export class WeaponsComponent implements OnInit {
  faMelee = faUtensils;
  faShooting = faGun;

  @ViewChild('weaponModal')
  private modal!: ModalComponent;

  @Input()
  character: Character | null = null;

  weapon: Weapon | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  open(weapon: Weapon | null = null) {
    if (weapon == null) {
      weapon = new Weapon();
    }

    this.weapon = weapon;
    this.modal.open();
  }

  remove(weapon: Weapon) {
    if (this.character) {
      const index = this.character.weapons.indexOf(weapon);
      this.character.weapons.splice(index, 1);
    }
  }

  save(weapon: Weapon) {
    if (this.character) {
      if (!this.character.weapons.includes(weapon)) {
        this.character.weapons.push(weapon);
      }
    }

    this.modal.close();
  }


}
