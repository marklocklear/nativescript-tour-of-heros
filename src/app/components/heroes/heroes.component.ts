import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "../../services/data.service";

@Component({
    selector: "ns-heroes",
    templateUrl: "./heroes.component.html",
    moduleId: module.id,
})
export class HeroesComponent {

    public heroes: Array<any>;

    public constructor(private router: Router, private data: DataService) {
        this.heroes = this.data.getHeroes();
    }

    public add(value: string) {
        if(value != "") {
            this.data.add(value);
        }
    }

    public remove(id: number) {
        this.data.delete(id);
    }

    public edit(id: number) {
        this.router.navigate(["/hero", id]);
    }

}