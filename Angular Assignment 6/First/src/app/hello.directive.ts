import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHello]'
})
export class HelloDirective {

  constructor(private ele: ElementRef) {

  }

  @HostListener('mouseenter') onmouseenter() {
    this.setColor('green');
  }

  @HostListener('mouseleave') onmouseleave() {
    this.setColor('black');
  }

  setColor(color: string) {
    this.ele.nativeElement.style.color = color;
  }
}
