import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "../../services/data.service";

@Component({
    selector: "ns-dashboard",
    templateUrl: "./dashboard.component.html",
    moduleId: module.id,
})
export class DashboardComponent {

    public heroes: Array<any>;

    public constructor(private router: Router, private data: DataService) {
        this.heroes = this.data.getHeroes();
    }

    public edit(id: number) {
        this.router.navigate(["/hero", id]);
    }

}