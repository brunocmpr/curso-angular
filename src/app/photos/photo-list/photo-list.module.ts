import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { DarkenOnHoverModule } from 'src/app/shared/directives/darken-on-hover/darken-on-hover.module';
import { PhotoModule } from '../photo/photo.module';
import { LoadButtonComponent } from '../photos-list/load-button/load-button.component';
import { FilterByDescription } from './filter-by-description.pipe';
import { PhotoListComponent } from './photo-list.component';
import { PhotosComponent } from './photos/photos.component';
import { SearchComponent } from './search/search.component';

@NgModule({
    declarations: [
        PhotoListComponent,
        PhotosComponent,
        LoadButtonComponent,
        FilterByDescription,
        SearchComponent,
    ],
    imports: [
        CommonModule,   //SEMPRE IMPORTAR COMMONMODULE em qualquer modulo que criar, pelo menos os que tiverem componentes filhos diretos.
                        //Senão não precisa
                        //O BrowserModule é quem permite o uso de diretivas como ngIf e ngFor, mas este só pode ser
                        //importado 1x na aplicacao, e pelo visto é sempre em AppModule. Entao aqui só podemos importar
                        //esse submodulo de BrowserModule, o CommonModule. Então a boa prática é SEMPRE importar este módulo.
        PhotoModule,
        CardModule,
        DarkenOnHoverModule,
    ]
})
export class PhotoListModule{

}