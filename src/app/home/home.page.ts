import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({selector: 'app-home', templateUrl: './home.page.html', styleUrls: ['./home.page.scss']})
export class HomePage implements OnInit {
    x = 0;
    constructor(public navCtrl : NavController) {}

    ngOnInit() {
        this.Timer();
    }


    Timer() {
        setTimeout(() => {
            this.go();
        }, 2500);

    }

    go() {
        this.navCtrl.navigateForward('type');
    }
}
