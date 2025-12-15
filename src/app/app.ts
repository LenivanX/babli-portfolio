import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('babli-portfolio');
  protected readonly linkedInLink = signal('https://www.linkedin.com/in/shreya-dey-89110b17b?utm_source=share_via&utm_content=profile&utm_medium=member_android');
  protected readonly resumeLink = signal('');
  protected readonly header_profile = signal('header_profile.jpg');
  protected readonly header_arrow = signal('header_arrow.svg');
  protected readonly header_box1 = signal('header_box1.png');
  protected readonly header_box2 = signal('header_box2.png');
}
