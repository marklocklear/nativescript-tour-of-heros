import { Injectable } from "@angular/core";

@Injectable()
export class DataService {

    private heroes: Array<any>;

    public constructor() {
        this.heroes = [
            {
                "id": 1,
                "name": "Captain America"
            },
            {
                "id": 2,
                "name": "Iron Man"
            },
            {
                "id": 3,
                "name": "Hulk"
            },
            {
                "id": 4,
                "name": "Black Widow"
            },
            {
                "id": 5,
                "name": "Thor"
            }
        ];
    }

    public getHeroes(): Array<any> {
        return this.heroes;
    }

    public getHero(id: number): any {
        for(let i = 0; i < this.heroes.length; i++) {
            if(this.heroes[i].id == id) {
                return this.heroes[i];
            }
        }
        return -1;
    }

    public delete(id: number) {
        for(let i = 0; i < this.heroes.length; i++) {
            if(this.heroes[i].id == id) {
                this.heroes.splice(i, 1);
                break;
            }
        }
    }

    public add(value: string) {
        this.heroes.push(
            {
                "id": Math.floor(Math.random() * (100 - 1)) + 1,
                "name": value
            }
        );
    }

    public edit(id: number, name: string) {
        for(let i = 0; i < this.heroes.length; i++) {
            if(this.heroes[i].id == id) {
                this.heroes[i].name = name;
                break;
            }
        }
    }

}