import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  protected readonly title = signal('babli-portfolio');
  protected readonly linkedInLink = signal('https://www.linkedin.com/in/shreya-dey-89110b17b?utm_source=share_via&utm_content=profile&utm_medium=member_android');
  protected readonly resumeLink = signal('');
  protected readonly about_profile = signal('header_profile.jpg');
  protected readonly about_pin = signal('header_pin.svg');
  protected readonly about_arrow = signal('header_arrow.svg');
  protected readonly previously = signal('uptye.png');
  protected readonly currently = signal('keypr.png');
  protected readonly work_card1 = signal('work-card1.jpg');
  protected readonly gallery_1 = signal('gallery-1.svg');
  protected readonly gallery_2 = signal('gallery-2.svg');
  protected readonly gallery_3 = signal('gallery-3.svg');
  protected readonly gallery_4 = signal('gallery-4.svg');
  protected readonly gallery_5 = signal('gallery-5.svg');
  protected readonly gallery_6 = signal('gallery-6.svg');
  protected readonly bts1 = signal('bts-1.svg');
  protected readonly bts2 = signal('bts-2.svg');
  protected readonly bts3 = signal('bts-3.svg');
  protected readonly bts4 = signal('bts-4.svg');

  activeSection = signal('about');

  ngOnInit() {
    const sections = document.querySelectorAll('section');
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.activeSection.set(entry.target.id);
          console.log('Active Section:', this.activeSection);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));
  }
}
