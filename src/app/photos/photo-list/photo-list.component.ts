import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo';
import { debounceTime } from 'rxjs/operators';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos:Photo[] = [];
  filter: string = ''!;
  userName: string = '';


  activatedDebounce: boolean = false;

  hasMore: boolean = true;
  currentPage: number = 1;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: PhotoService
  ) {}

  ngOnInit(): void {
    //Após adoção do Resolver, foi removida a sequencia de chamadas ao service daqui
    this.userName = this.activatedRoute.snapshot.params.userName;
    this.photos = this.activatedRoute.snapshot.data.photos;
  }

  load(){
    this.service.listFromUserPaginated(this.userName, ++this.currentPage)
      .subscribe(photos => {
        this.photos = this.photos.concat(photos); //IMPORTANTE SOBRE ANGULAR: nao pode ser o push, pq temos que associar a referencia de um novo objeto pro data binding sacar que precisa atualizar as coisas
        if(!photos.length)
          this.hasMore = false;
      })
  }

}
