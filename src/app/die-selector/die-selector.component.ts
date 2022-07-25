import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Die } from '../dto/Die';

@Component({
  selector: 'app-die-selector',
  templateUrl: './die-selector.component.html',
  styleUrls: ['./die-selector.component.sass']
})
export class DieSelectorComponent implements OnInit {
  Die = Die;

  @Input()
  die = Die.d4();

  @Output()
  dieChange = new EventEmitter<Die>();

  constructor() { }

  ngOnInit(): void {
  }

  isD(die: Die) {
    return this.die.equals(die);
  }

  changeDie(newDie: Die) {
    this.die = newDie;
    this.dieChange.emit(this.die);
  }

}
