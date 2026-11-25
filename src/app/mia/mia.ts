import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-mia',
  imports: [],
  templateUrl: './mia.html',
  styleUrl: './mia.css',
})
export class Mia {
  protected readonly miaSlider1Img1 = signal('mia-slider1-1.svg');
  protected readonly miaSlider1Img2 = signal('mia-slider1-2.svg');
  protected readonly miaSlider2Img1 = signal('mia-slider2-1.svg');
  protected readonly miaSlider2Img2 = signal('mia-slider2-2.svg');
  protected readonly miaSlider3Img1 = signal('mia-slider3-1.svg');
  protected readonly miaSlider3Img2 = signal('mia-slider3-2.svg');
  currentSlide = 0;

  slides = [
    {
      title: 'Discover',
      description:
        'Help is there when you need it, without interrupting the conversation.',
      image1: this.miaSlider1Img1(),
      image2: this.miaSlider1Img2()
    },
    {
      title: 'Ask',
      description:
        "Users don't need to learn prompts. They simply ask MIA the way they'd ask a friend.",
      image1: this.miaSlider2Img1(),
      image2: this.miaSlider2Img2()
    },
    {
      title: 'Act',
      description:
        'Suggestions turn existing compatibility signals into something users can actually act on.',
      image1: this.miaSlider3Img1(),
      image2: this.miaSlider3Img2()
    }
  ];

  nextSlide() {
    this.currentSlide =
      (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }
}
