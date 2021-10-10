import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
    selector: '[apDarkenOnHover]'
})
export class DarkenOnHoverDirective{

    @Input() brightness = '70%';

    constructor( private el: ElementRef,
        private render: Renderer2 ){
    }

    @HostListener('mouseover')
    darkenOn(){
        //muda propriedade css filter com valor propriedade brightness(70%)
        this.render.setStyle(this.el.nativeElement, 'filter', `brightness(${this.brightness})`);
    }

    @HostListener('mouseleave')
    darkenOff(){
        this.render.setStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
    }
}