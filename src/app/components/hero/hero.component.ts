import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../../services/data.service";

@Component({
    selector: "ns-hero",
    templateUrl: "./hero.component.html",
    moduleId: module.id,
})
export class HeroComponent implements OnInit {

    public hero: any;

    public constructor(private location: Location, private route: ActivatedRoute, private data: DataService) {
        this.hero = {};
    }

    public ngOnInit() {
        this.route.params.subscribe(params => {
            this.hero = this.data.getHero(params["id"]);
        });
    }

    public cancel() {
        this.location.back();
    }

    public save(id: number, name: string) {
        if(name != "") {
            this.data.edit(id, name);
            this.location.back();
        }
    }

}