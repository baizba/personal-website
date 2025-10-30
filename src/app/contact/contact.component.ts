import {Component} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  openLink(url: string): void {
    window.open(url, '_blank');
  }

  openMail() {
    const a = document.createElement('a');
    a.href = 'mailto:branislav.vidovic.ba@gmail.com';
    a.click();
  }


}
