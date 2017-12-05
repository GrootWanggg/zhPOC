import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {FormsModule}   from '@angular/forms';

import { ImagePicker } from '@ionic-native/image-picker';
import { Camera } from '@ionic-native/camera';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ContactPage } from '../pages/contact/contact';
import {LoginPage} from "../pages/login/login";
import {RegisterPage} from "../pages/register/register";
import {StudentPage} from "../pages/student/student";
import {CommentPage} from "../pages/comment/comment";
import {TimelinePage} from "../pages/timeline/timeline";
import {CreatePage} from "../pages/create/create";
import {InvitePage} from "../pages/invite/invite";
import {InviteModePage} from "../pages/invite-mode/invite-mode";
import {CommentPageModule} from "../pages/comment/comment.module";
import {LoginPageModule} from "../pages/login/login.module";
import {RegisterPageModule} from "../pages/register/register.module";
import {StudentPageModule} from "../pages/student/student.module";
import {TimelinePageModule} from "../pages/timeline/timeline.module";
import {CreatePageModule} from "../pages/create/create.module";
import {InvitePageModule} from "../pages/invite/invite.module";
import {InviteModePageModule} from "../pages/invite-mode/invite-mode.module";
import {SettingPage} from "../pages/setting/setting";
import {SettingPageModule} from "../pages/setting/setting.module";
import {RecordPage} from "../pages/record/record";
import {RecordPageModule} from "../pages/record/record.module";
import {SignPageModule} from "../pages/sign/sign.module";
import {SignPage} from "../pages/sign/sign";
import {RecordAllPage} from "../pages/record-all/record-all";
import {RecordAllPageModule} from "../pages/record-all/record-all.module";
import {ProfilePage} from "../pages/profile/profile";
import {ProfilePageModule} from "../pages/profile/profile.module";
import {ContactPageModule} from "../pages/contact/contact.module";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    //LoginPage,
    //RegisterPage,
    //StudentPage,
    //CommentPage,
    //TimelinePage,
    //CreatePage,
    //InvitePage,
    //InviteModePage,
    // ContactPage,
  ],
  imports: [
    CommentPageModule,
    LoginPageModule,
    RegisterPageModule,
    StudentPageModule,
    TimelinePageModule,
    CreatePageModule,
    InvitePageModule,
    InviteModePageModule,
    SettingPageModule,
    RecordPageModule,
    SignPageModule,
    RecordAllPageModule,
    ProfilePageModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    // ContactPageModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: '',
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ImagePicker,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
