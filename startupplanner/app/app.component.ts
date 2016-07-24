import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})

export class AppComponent { 
    title = "Customer";
    namecolor = "red";

    savecustomer() {
       this.namecolor = (this.namecolor === "red" ?  "blue" : "red");
    }
}

