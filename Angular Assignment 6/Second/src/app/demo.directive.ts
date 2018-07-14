import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appDemo]'
})
export class DemoDirective {

  constructor(private ele: ElementRef, renderer: Renderer) {
    ele.nativeElement.style.background = 'yellow';
    renderer.setElementStyle(ele.nativeElement, 'font-weight', 'bold');
  }

}
