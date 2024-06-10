import { Directive, ElementRef, Host, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSampleDirective]'
})
export class SampleDirectiveDirective {
  @Input() color1: string = 'black';
  @Input() color2: string = 'red';

 tick: boolean = false;
  constructor(private ele:ElementRef) { }

  @HostListener('click') func(){
    this.ele.nativeElement.style.backgroundColor = 'red'
  }

  @HostListener('mouseenter') cl(){
    this.ele.nativeElement.style.backgroundColor = 'yellow'
  }

  // @HostListener('click') onClick() {
  //   this.toggleColor();
  // }

  // toggleColor() {
  //   this.tick = !this.tick;
  //   this.ele.nativeElement.style.color = this.tick ? this.color2 : this.color1;
  // }

}
