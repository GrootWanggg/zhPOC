import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/toPromise';
import {Http} from "@angular/http";

/**
 * Generated class for the InviteModePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage(
  {
    name: 'page-invite-mode',
    segment: 'detail/:token'
  }
)
@Component({
  selector: 'page-invite-mode',
  templateUrl: 'invite-mode.html',
})
export class InviteModePage {
  private list : Array<any> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: Http) {
  }

  ionViewDidLoad() {
    // alert(this.navParams.get('id'))
    // this.http.get('http://manulife.nttdatadm.com/pocTest/api/wxtracking/customer?stk=99131')
    this.http.get('http://manulife.nttdatadm.com/pocTest/api/wxtracking/customer?stk='+this.navParams.get('id'))
      .toPromise().then((response) => {
      console.log(response.json());
      this.list = response.json().data.list
      console.log(this.list)
    });
  }

}
