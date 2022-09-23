import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[move]'
})
export class MoveDirective {

  /* @Input('move') move: string = '';
  @Input('size') size: string = ''; */

  @HostListener ('mouseleave') leave (){
    this.renderer2.setStyle(this.element.nativeElement,'width','100px');
    this.renderer2.setStyle(this.element.nativeElement,'height','50px');
    this.renderer2.setStyle(this.element.nativeElement,'color','black');
    this.renderer2.setStyle(this.element.nativeElement,'font-size','50px');

    this.renderer2.setStyle(this.element.nativeElement,'transition','width 2s, height 2s, color 2s, font-size 2s');
  }

  @HostListener ('mouseenter') move (){
    this.renderer2.setStyle(this.element.nativeElement,'width','200px');
    this.renderer2.setStyle(this.element.nativeElement,'height','100px');
    this.renderer2.setStyle(this.element.nativeElement,'color','#800000');
    this.renderer2.setStyle(this.element.nativeElement,'font-size','100px');

    this.renderer2.setStyle(this.element.nativeElement,'transition','width 2s, height 2s, color 2s, font-size 2s');
  }

  constructor(private element: ElementRef, private renderer2: Renderer2) { }

}
