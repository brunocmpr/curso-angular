import { Component, Input } from "@angular/core";


@Component({
    selector: 'ap-photo',
    templateUrl: './photo.component.html'
})
export class PhotoComponent{
    
    @Input() description = ""
    @Input() url = ""
    
    // url2 = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/280px-Lion_waiting_in_Namibia.jpg"
    // flag:  boolean = false;
    // urlFinal = this.determinaUrl();
    
    // trocaImagem():void{
    //     this.flag = !this.flag;
    //     this.urlFinal = this.determinaUrl();
    // }

    // determinaUrl(): string{
    //     return this.flag ? this.url1 : this.url2;
    // }
}