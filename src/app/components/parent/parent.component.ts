import { Component } from "@angular/core";
import { SegmentedBarItem } from "ui/segmented-bar";
import { Router } from "@angular/router";

@Component({
    selector: 'ns-parent',
    templateUrl: './parent.component.html',
    moduleId: module.id,
  })
  
export class ParentComponent {

    public navItems: Array<SegmentedBarItem>;

    public constructor(private router: Router) {
        this.navItems = [];
        this.navItems.push(this.createSegmentedBarItem("Dashboard"));
        this.navItems.push(this.createSegmentedBarItem("Heroes"));
    }

    private createSegmentedBarItem(title: string): SegmentedBarItem {
        let item: SegmentedBarItem = <SegmentedBarItem> new SegmentedBarItem();
        item.title = title;
        return item;
    }

    public navigate(index: number) {
        switch(index) {
            case 0:
                this.router.navigate(["/"]);
                break;
            case 1:
                this.router.navigate(["/heroes"]);
                break;
        }
    }

}