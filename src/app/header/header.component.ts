import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [`
    .example-spacer {
      flex: 1 1 auto;
    }
  `]
})
export class HeaderComponent {
  title: string = 'RecipEZ';
}
