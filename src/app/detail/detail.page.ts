import { crudapi } from '../food/crudapi';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  detail: any;
  Idata: any;
  loop: any = [];
  items: any = [
    { video: 'https://www.youtube.com/embed/YFgwjDuIe1I' },
    { video: 'https://www.youtube.com/watch?v=zo8x7Vy31c8' },
    { video: 'https://www.youtube.com/watch?v=ZApzBv3YuEg' },
    { video: 'https://www.youtube.com/watch?v=s-dmDkMaB3Q' },
    { video: 'https://www.youtube.com/watch?v=c_uadEibYGk' },
    { video: 'https://www.youtube.com/watch?v=CPZQTfYDtP0' },
    { video: 'https://www.youtube.com/embed/VtNtEzVEYS8' },
    { video: 'https://www.youtube.com/watch?v=_p3SNGKUP28' },
    { video: 'https://www.youtube.com/watch?v=uFkVeqd_St0' },
    { video: 'https://www.youtube.com/watch?v=Qu0PKvfMtM8' },
    { video: 'https://www.youtube.com/watch?v=NSrZtjYoPWc' },
    { video: 'https://www.youtube.com/watch?v=6CVkzm8u3Z0' },
    { video: 'https://www.youtube.com/watch?v=Amv4UpFmYW8' },
    { video: 'https://www.youtube.com/watch?v=sPXagLEAYT0' },
    { video: 'https://www.youtube.com/watch?v=H9OHiP40j2Q' },
    { video: 'https://www.youtube.com/watch?v=uSQmzWjc6gw' },
    { video: 'https://www.youtube.com/watch?v=TnB5tU6IKzI' },
    { video: 'https://www.youtube.com/watch?v=_fJ1bNfNEjM' },
    { video: 'https://www.youtube.com/watch?v=OUS2vaNIIeE' },
    { video: 'https://www.youtube.com/watch?v=ddS1dhZJVMc' },
  ];
  saveURL:any;
  x: String;
  constructor(
    private getcrud: crudapi,
    private activatedRoute: ActivatedRoute,
    private nav: NavController,
    private domSanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.Idata = this.activatedRoute.snapshot.paramMap.get('iv');

    this.getcrud.readdetail().subscribe((data) => {
      this.detail = data.map((e) => {
        return {
          name: e.payload.doc.data()['name'.toString()],
          igd: e.payload.doc.data()['IGD'.toString()],
          video: e.payload.doc.data()['video'.toString()],

        };

      });

      for (let i = 0; i < this.detail.length; i++) {
        if (this.Idata == this.detail[i].name) {
          this.loop.push(this.detail[i]);
        }
      }
    });
  if(this.Idata=='ข้าวผัดหมู') {
    var A = "https://www.youtube.com/embed/YFgwjDuIe1I"
    this.saveURL = this.domSanitizer.bypassSecurityTrustResourceUrl(A);
  }
  if(this.Idata=='ต้มยำกุ้งน้ำข้น') {
    var B = "https://www.youtube.com/embed/Tz7jH-XijB4"
    this.saveURL = this.domSanitizer.bypassSecurityTrustResourceUrl(B);
  }
  if(this.Idata=='พะแนงไก่') {
    var C = "https://www.youtube.com/embed/ZApzBv3YuEg"
    this.saveURL = this.domSanitizer.bypassSecurityTrustResourceUrl(C);
  }
  if(this.Idata=='ข้าวหมูแดง') {
    var D = "https://www.youtube.com/embed/RkyhyUaMCcY"
    this.saveURL = this.domSanitizer.bypassSecurityTrustResourceUrl(D);
  }
  if(this.Idata=='กระเพราหมูชิ้น') {
    var E = "https://www.youtube.com/embed/c_uadEibYGk"
    this.saveURL = this.domSanitizer.bypassSecurityTrustResourceUrl(E);
  }
  if(this.Idata=='แกงเขียวหวานไก่') {
    var F = "https://www.youtube.com/embed/eeGIrnqV7J8"
    this.saveURL = this.domSanitizer.bypassSecurityTrustResourceUrl(F);
  }
  if(this.Idata=='สปาเก็ตตี้ซอสมะเขีอเทศ') {
    var G = "https://www.youtube.com/embed/VtNtEzVEYS8"
    this.saveURL = this.domSanitizer.bypassSecurityTrustResourceUrl(G);
  }
  if(this.Idata=='ข้าวผัดกิมจิชีส') {
    var H = "https://www.youtube.com/embed/4uk5OK7IbbY"
    this.saveURL = this.domSanitizer.bypassSecurityTrustResourceUrl(H);
  }
  if(this.Idata=='ซุปกิมจิ') {
    var I = "https://www.youtube.com/embed/Amv4UpFmYW8"
    this.saveURL = this.domSanitizer.bypassSecurityTrustResourceUrl(I);
  }
  if(this.Idata=='บะหมี่หยกอกไก่หมัก') {
    var J = "https://www.youtube.com/embed/TnB5tU6IKzI"
    this.saveURL = this.domSanitizer.bypassSecurityTrustResourceUrl(J);
  }
  if(this.Idata=='ผักโขมอบชีส') {
    var K = "https://www.youtube.com/embed/AKJ24bdVt40"
    this.saveURL = this.domSanitizer.bypassSecurityTrustResourceUrl(K);
  }
  if(this.Idata=='ลาบปลาทูน่า') {
    var L = "https://www.youtube.comembed/_fJ1bNfNEjM"
    this.saveURL = this.domSanitizer.bypassSecurityTrustResourceUrl(L);
  }
  if(this.Idata=='ข้าวยำเกาหลี หรือ บิบิมบับ') {
    var M = "https://www.youtube.com/embed/JhdzlGC2Uj8"
    this.saveURL = this.domSanitizer.bypassSecurityTrustResourceUrl(M);
  }
  if(this.Idata=='ลาซานญ่าผักโขมอบชีส') {
    var N = "https://www.youtube.com/embed/uFkVeqd_St0"
    this.saveURL = this.domSanitizer.bypassSecurityTrustResourceUrl(N);
  }
  if(this.Idata=='ต๊อกปกกี') {
    var O = "https://www.youtube.com/embed/C7Wn8ug0F4c"
    this.saveURL = this.domSanitizer.bypassSecurityTrustResourceUrl(O);
  }
  if(this.Idata=='น้ำพริกอ่องไก่') {
    var P = "https://www.youtube.com/embed/OUS2vaNIIeE"
    this.saveURL = this.domSanitizer.bypassSecurityTrustResourceUrl(P);
  }
  if(this.Idata=='ส้มตำข้าวโพด') {
    var Q = "https://www.youtube.com/embed/ddS1dhZJVMc"
    this.saveURL = this.domSanitizer.bypassSecurityTrustResourceUrl(Q);
  }
  if(this.Idata=='แซลมอนดองซีอิ้วเกาหลี') {
    var R = "https://www.youtube.com/embed/uSQmzWjc6gw"
    this.saveURL = this.domSanitizer.bypassSecurityTrustResourceUrl(R);
  }if(this.Idata=='ปลาแซลมอนครีมซอสเลมอน') {
    var S = "https://www.youtube.com/embed/Qu0PKvfMtM8"
    this.saveURL = this.domSanitizer.bypassSecurityTrustResourceUrl(S);
  }
  if(this.Idata=='ซุปผักโขม') {
    var T = "https://www.youtube.com/embed/w2eWNsG2rTw"
    this.saveURL = this.domSanitizer.bypassSecurityTrustResourceUrl(T);
  }
  }

  b1() {
    this.nav.navigateForward('type');
  }
}
