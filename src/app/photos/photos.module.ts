import { NgModule } from "@angular/core";
import { PhotoComponent } from "./photo/photo.component";
import { PhotoService } from "./photo/photo.service";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations:[
        PhotoComponent
    ],
    imports:[
        HttpClientModule,
    ],
    exports: [
        PhotoComponent  //pelo visto alem de declarar o componente em "declarations",
                        //precisamos também exportar ele aqui... meio que os declarations
                        //sao declaracoes privadas
    ],
    providers:[
        PhotoService,
    ]
})
export class PhotosModule{

}