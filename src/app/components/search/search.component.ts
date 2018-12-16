import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.services';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  heroes:any = {};
  termino:string;

  constructor(private _activatedRoute:ActivatedRoute,
                private _heroesService:HeroesService) {
  }

  ngOnInit() {
    console.log("ngOnInit");
    this._activatedRoute.params.subscribe(params => {
      this.heroes = this._heroesService.buscarHeroes(params['nombre']);
      this.termino = params['nombre'];
    })

  }

}
