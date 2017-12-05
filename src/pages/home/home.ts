import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {StudentPage} from "../student/student";
import {CreatePage} from "../create/create";
import {InvitePage} from "../invite/invite";
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private username : any = '';
  private password : any = '';
  constructor(public navCtrl: NavController,private http : Http) {

  }

  getInfo(){
    if(this.username != ''&&this.password != ""){
      this.http.get('http://manulife.nttdatadm.com/pocTest/api/wxtracking/login?username='+this.username+'&password='+this.password)
        .toPromise().then((response) => {
        console.log(response.json().data);
        this.navCtrl.push('page-student', {
          'id': response.json().data
        });

      });
    }else {
      alert('请输入用户名密码')
    }

  }
}
