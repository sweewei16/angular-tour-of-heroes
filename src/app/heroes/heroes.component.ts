import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/hero';
import { HEROES } from 'src/mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  herotest:Hero = {
    id:1,
    name:'Windstorm',
    strength:null
  };

  //heroes= HEROES;
  heroes: Hero[] = [];//access HeroService
  selectedHero?: Hero;
  heroService :HeroService;
constructor(private heroservice:HeroService,private messageService: MessageService){
 this.heroService=heroservice;
}

  ngOnInit(): void {
    //this.getHeroes();
    this.getHeroesAsync();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add('HeroesComponent: Selected hero id=${hero.id}');
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();// this is sync call. in actual production, it will be async. use observarable
  }

  getHeroesAsync(): void {
    this.heroService.getHeroesAsync()
    .subscribe(heroes => this.heroes = heroes);
  }
}
