import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/dto/character';

@Component({
  selector: 'app-base-info',
  templateUrl: './base-info.component.html',
  styleUrls: ['../character-sheet.component.sass']
})
export class BaseInfoComponent implements OnInit {

  @Input()
  character: Character | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
