import {Component, Input} from '@angular/core';
import {NavigationButton} from '../navigation-button/navigation-button';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'navigation-bar',
  imports: [
    NavigationButton,
    RouterLink
  ],
  templateUrl: './navigation-bar.html',
  styleUrl: './navigation-bar.scss'
})
export class NavigationBar {
  @Input() buttons: string[] = [];
}
