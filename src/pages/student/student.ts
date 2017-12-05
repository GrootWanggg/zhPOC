import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {CommentPage} from "../comment/comment";
import {TimelinePage} from "../timeline/timeline";
import {InviteModePage} from "../invite-mode/invite-mode";
import {RecordPage} from "../record/record";


/**
 * Generated class for the StudentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage(
  {
    name: 'page-student',
    segment: 'detail/:token'
  }
)
@Component({
  selector: 'page-student',
  templateUrl: 'student.html',
})
export class StudentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  // 分享
  shared() {
    // alert(this.navParams.get('id'))
    Wechat.share({
      message: {
        title: "2018新年赠险",
        description: "2018新年赠险",
        media: {
          type: Wechat.Type.WEBPAGE,
          webpageUrl: "http://manulife.nttdatadm.com/pocTest/Home/Index?stk="+this.navParams.get('id')
        }
      },
      scene: Wechat.Scene.TIMELINE   // share to Timeline
    },function () {
      alert("Success");
    }, function (reason) {
      alert("Failed: " + reason);
    });
  }

  //获取用户信息
  check() {
    this.navCtrl.push('page-invite-mode', {
      'id': this.navParams.get('id')
    });
  }

}
