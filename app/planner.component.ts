import { Component, Input, OnInit } from 'angular2/core';



@Component({
    selector: 'planner',
    templateUrl: 'app/views/weekday.html',
    styleUrls: []
})
export class PlannerComponent {


    goBack() {
        window.history.back();
    }

    addSlot(){
        console.log('Clicked on add slot');
    }

}
