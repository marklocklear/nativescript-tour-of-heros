import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ParentComponent } from "./components/parent/parent.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { HeroComponent } from "./components/hero/hero.component";

const routes: Routes = [
    { path: "", component: ParentComponent, children: [
        { path: "", component: DashboardComponent },
        { path: "heroes", component: HeroesComponent },
        { path: "hero/:id", component: HeroComponent },
    ]}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }