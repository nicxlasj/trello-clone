import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './button.component.html'
})
export class ButtonComponent {
  @Input() colorBtn!: string;
  @Input() typeBtn : 'submit' | 'button' | 'reset' = 'button';

}
