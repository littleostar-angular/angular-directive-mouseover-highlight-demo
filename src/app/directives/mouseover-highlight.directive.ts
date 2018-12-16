import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appMouseoverHighlight]'
})
export class MouseoverHighlightDirective {


  @Input('appMouseoverHighlight')
  appMouseoverHighlight: string;
  @Input('appMouseoverHighlight_color')
  appMouseoverHighlight_color: string;
  private default_color = 'gray';

  constructor(
    public el: ElementRef
  ) {
  }

  @HostListener('mouseover')
  mouseover() {
    this.setStyleBackgroundColor(this.appMouseoverHighlight || this.appMouseoverHighlight_color || this.default_color);
  }

  @HostListener('mouseleave')
  mouseleave() {
    this.setStyleBackgroundColor(null);
  }

  private setStyleBackgroundColor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
