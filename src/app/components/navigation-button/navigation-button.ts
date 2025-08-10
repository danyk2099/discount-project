import {Component, Input} from '@angular/core';

@Component({
  selector: 'navigation-button',
  imports: [],
  templateUrl: './navigation-button.html',
  styleUrl: './navigation-button.scss'
})
export class NavigationButton {
  @Input() text: string = '';
}
