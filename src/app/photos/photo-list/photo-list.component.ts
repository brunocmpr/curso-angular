import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { Photo } from '../photo/photo';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {

  photos:Photo[] = [];
  filter: string = ''!;

  debounce: Subject<string> = new Subject<string>();
  activatedDebounce: boolean = false;
  constructor(
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //Após adoção do Resolver, foi removida a sequencia de chamadas ao service daqui

    this.photos = this.activatedRoute.snapshot.data.photos;

    this.debounce
    .pipe(debounceTime(300))
    .subscribe(filter => {
      this.filter = filter;
    });
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

}
