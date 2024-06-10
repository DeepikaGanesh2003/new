import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHostBinding]'
})
export class HostBindingDirective {

  @Input() hoverColor: string = 'blue';
  @Input() clickColor: string = 'green';

  @HostBinding('style.color') textColor: string;
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor() {
    this.textColor = '';
    this.backgroundColor = '';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.textColor = this.hoverColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.textColor = '';
  }

  @HostListener('click') onClick() {
    this.backgroundColor = this.backgroundColor === this.clickColor ? '' : this.clickColor;
  }

}
