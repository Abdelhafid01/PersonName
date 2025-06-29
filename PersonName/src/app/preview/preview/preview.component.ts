import { Component } from '@angular/core';
import { NamePipe } from '../../../pipes/name.pipe';
import { DotifierPipe } from '../../../pipes/dotifier.pipe';

@Component({
  selector: 'app-preview',
  standalone: true,
  imports: [NamePipe, DotifierPipe],
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.css'
})
export class PreviewComponent {
  public person = {
    firstName: 'First',
    lastName: 'Last',
  }
}
