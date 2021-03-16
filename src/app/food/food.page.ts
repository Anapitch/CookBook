import { NavController } from '@ionic/angular';
import { crudapi } from './crudapi';
import { Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonSearchbar } from '@ionic/angular';

@Component({
  selector: 'app-food',
  templateUrl: './food.page.html',
  styleUrls: ['./food.page.scss'],
})
export class FoodPage implements OnInit {

  @ViewChild('search', { static: false }) search: IonSearchbar;

  public list: Array<Object> = [];
  private searchedItem: any;

  [x: string]: any;
  a: any;
  Idata: any;
  loop: any = [];

  constructor(
    private getcrud: crudapi,
    private activatedRoute: ActivatedRoute,
    private nav: NavController
  ) {
    this.list = [
      { title: "ข้าวผัดหมู" },
      { title: "ต้มยำกุ้งน้ำข้น" },
      { title: "พะแนงไก่" },
      { title: "ข้าวหมูแดง" },
      { title: "กระเพราหมูชิ้น" },
      { title: "แกงเขียวหวานไก่" },
      { title: "สปาเก็ตตี้ซอสมะเขือเทศ" },
      { title: "ข้าวผัดกิมจิชีส" },
      { title: "ซุปกิมจิ" },
      { title: "บะหมี่หยกอกไก่หมัก" },
      { title: "ผักโขมอบชีส" },
      { title: "ลาบปลาทูน่า" },
      { title: "ข้าวยำเกาหลี หรือ บิบิมบับ" },
      { title: "ลาซานญ่าผักโขมอบชีส" },
      { title: "ต๊อกปกกี" },
      { title: "น้ำพริกอ่องไก่" },
      { title: "ส้มตำข้าวโพด" },
      { title: "แซลมอนดองซีอิ้วเกาหลี" },
      { title: "ปลาแซลมอนครีมซอสเลมอน" },
      { title: "ซุปผักโขม" },
    ];
    this.searchedItem = this.list
  }

  ngOnInit() {
    this.Idata = this.activatedRoute.snapshot.paramMap.get('items');

    this.getcrud.readData().subscribe((data) => {
      this.a = data.map((e) => {
        return {
          id: e.payload.doc.id,
          foodname: e.payload.doc.data()['foodname'.toString()],
          image: e.payload.doc.data()['image'.toString()],
          type: e.payload.doc.data()['type'.toString()],
        };
      });

      for (let i = 0; i < this.a.length; i++) {
        console.log(this.a);
        if (this.Idata == this.a[i].type) {
          this.loop.push(this.a[i]);
        }
      }
    });
  }

  ionViewDidEnter() {
    setTimeout(() => {
      this.search.setFocus();
    });
  }

  _ionChange(event) {
    const val = event.target.value;

    this.searchedItem = this.list;
    if (val && val.trim() != '') {
      this.searchedItem = this.searchedItem.filter((item: any) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    // this.search.getInputElement().then(item => console.log(item))
  }

  back() {
    this.nav.navigateForward('type');
  }

  Search() {
    this.nav.navigateForward('search');
  }




  next(iv) {
      if (iv == "ข้าวผัดหมู") {
        this.nav.navigateForward(['detail',iv])
      }
      if (iv == "ต้มยำกุ้งน้ำข้น") {
        this.nav.navigateForward(['detail',iv])
      }
      if (iv == "พะแนงไก่") {
        this.nav.navigateForward(['detail',iv])
      }
      if (iv == "ข้าวหมูแดง") {
        this.nav.navigateForward(['detail',iv])
      }
      if (iv == "กระเพราหมูชิ้น") {
        this.nav.navigateForward(['detail',iv])
      }
      if (iv == "แกงเขียวหวานไก่") {
        this.nav.navigateForward(['detail',iv])
      }
      if (iv == "สปาเก็ตตี้ซอสมะเขือเทศ") {
        this.nav.navigateForward(['detail',iv])
      }
      if (iv == "ข้าวผัดกิมจิชีส") {
        this.nav.navigateForward(['detail',iv])
      }
      if (iv == "ซุปกิมจิ") {
        this.nav.navigateForward(['detail',iv])
      }
      if (iv == "บะหมี่หยกอกไก่หมัก") {
        this.nav.navigateForward(['detail',iv])
      }
      if (iv == "ผักโขมอบชีส") {
        this.nav.navigateForward(['detail',iv])
      }
      if (iv == "ลาบปลาทูน่า") {
        this.nav.navigateForward(['detail',iv])
      }
      if (iv == "ข้าวยำเกาหลี หรือ บิบิมบับ") {
        this.nav.navigateForward(['detail',iv])
      }
      if (iv == "ลาซานญ่าผักโขมอบชีส") {
        this.nav.navigateForward(['detail',iv])
      }
      if (iv == "ต๊อกปกกี") {
        this.nav.navigateForward(['detail',iv])
      }
      if (iv == "น้ำพริกอ่องไก่") {
        this.nav.navigateForward(['detail',iv])
      }
      if (iv == "ส้มตำข้าวโพด") {
        this.nav.navigateForward(['detail',iv])
      }
      if (iv == "แซลมอนดองซีอิ้วเกาหลี") {
        this.nav.navigateForward(['detail',iv])
      }
      if (iv == "ปลาแซลมอนครีมซอสเลมอน") {
        this.nav.navigateForward(['detail',iv])
      }
      if (iv == "ซุปผักโขม") {
        this.nav.navigateForward(['detail',iv])
      }
    }

}
