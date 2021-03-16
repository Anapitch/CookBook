import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSearchbar } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  @ViewChild('search', { static: false }) search: IonSearchbar;

  public list: Array<Object> = [];
  private searchedItem: any;

  constructor(private route: Router) {
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
     this.search.getInputElement().then(item => console.log(item))
  }

  detail(title){
    this.route.navigate(['detail/'+title])
  }



}
