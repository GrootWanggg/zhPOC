import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {StudentPage} from "../student/student";
import {CreatePage} from "../create/create";
import {InvitePage} from "../invite/invite";
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {el} from "@angular/platform-browser/testing/src/browser_util";

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
        console.log(response.json());

        if(response.json().status == 200){
          this.navCtrl.push('page-student', {
            'id': response.json().data
          });
        }else {
          alert(response.json().message)
        }


      });
    }else {
      alert('请输入用户名密码')
    }

  }
}
