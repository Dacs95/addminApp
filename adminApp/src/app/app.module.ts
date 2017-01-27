import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {EditPage} from '../pages/edit/edit';
import {AngularFireModule} from 'angularfire2';

export const firebaseConfig = {
    apiKey: "AIzaSyA2L_sIFFq4Z0hxr5Qy6ZDkS1e44ktboR0",
    authDomain: "uploadtest-44f1e.firebaseapp.com",
    databaseURL: "https://uploadtest-44f1e.firebaseio.com",
    storageBucket: "uploadtest-44f1e.appspot.com",
    messagingSenderId: "263437282038"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    EditPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    EditPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
