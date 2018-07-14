import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDemo]'
})
export class DemoDirective {

  constructor(private ele: ElementRef) {

  }

  @HostListener('mouseenter') onmouseenter() {
    this.setColor('red');
  }

  @HostListener('mouseleave') onmouseleave() {
    this.setColor('black');
  }

  setColor(color: string) {
    this.ele.nativeElement.style.color = color;
  }
}
