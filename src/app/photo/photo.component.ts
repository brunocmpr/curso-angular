import { Component } from "@angular/core";


@Component({
    selector: 'ap-photo',
    templateUrl: './photo.component.html'
})
export class PhotoComponent{
    title = 'alurapic';
    description = "Leao"
    url1 = "https://www.collinsdictionary.com/images/thumb/lion_165448187_250.jpg?version=4.0.185"
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