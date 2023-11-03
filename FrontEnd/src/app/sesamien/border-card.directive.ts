import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[sesamienBorderCard]'
})
export class BorderCardDirective {

  private initialColor: string = '#f5f5f5';
  private defaultColor: string = '#009688';

  constructor(private el: ElementRef, private renderer: Renderer2) { 
    this.setBorder(this.initialColor);
  } 

  @Input('sesamienBorderCard') borderColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor);
  }

  private setBorder(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'border', `solid 4px ${color}`);
  }
}
