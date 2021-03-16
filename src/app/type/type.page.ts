import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({selector: 'aap-type', templateUrl: './type.page.html', styleUrls: ['./type.page.scss']})
export class TypePage implements OnInit {

    data : any = [
        {
            name: "อาหารไทย",
            src:"https://images.unsplash.com/photo-1580212206172-dbea2d1b64dc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            name: "อาหารยุโรป",
            src:"https://images.unsplash.com/photo-1524182576066-1bb979e25342?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            name: "อาหารเกาหลี",
            src:"https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
        },
        {
            name: "อาหารคลีน",
            src:"https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1335&q=80"
        },
    ]

    constructor(public nav : NavController) {}
    ngOnInit() {}


    go(items) {
        if (items == "อาหารไทย") {
            this.nav.navigateForward(['food', items]);
        }
        if (items == "อาหารยุโรป") {
            this.nav.navigateForward(['food', items]);

        }
        if (items == "อาหารเกาหลี") {
            this.nav.navigateForward(['food', items]);
        }
        if (items == "อาหารคลีน") {
            this.nav.navigateForward(['food', items]);
        }
    }


}
