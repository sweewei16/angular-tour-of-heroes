import { Injectable } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  constructor(private messageService:MessageService) { 
    //Edit the constructor with a parameter that declares a private messageService property. 
    //Angular injects the singleton MessageService into that property when it creates the HeroService.
    
  }

  getHeroes(): Hero[] {//in actual prod, it is accessing to db, not a sync call like this.
    return HEROES;
  }

  getHeroesAsync(): Observable<Hero[]> {//async function
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
