import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})

export class crudapi {

    constructor(private fs: AngularFirestore) {}

    //CRUD
    //read
    readData() {
      return this.fs.collection('food').snapshotChanges();
    }
    readdetail(){
      return this.fs.collection('detail').snapshotChanges();
    }

}

