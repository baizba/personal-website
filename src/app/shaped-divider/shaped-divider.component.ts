import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-shaped-divider',
  templateUrl: './shaped-divider.component.html',
  styleUrls: ['./shaped-divider.component.css']
})
export class ShapedDividerComponent {
  @Input() foregroundColor: string = '#000000';
  @Input() backgroundColor: string = '#ffffff';
}
