import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {

  @Input()
  public title: string = '';

  public visible = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  open() {
    this.visible = true;
  }

  close(event: any | null = null) {
    if (event == null || event.target.id === 'modal-container') {
      this.visible = false;
    }
  }
}
