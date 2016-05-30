import {Page} from 'ionic-angular';
import {Camera} from 'ionic-native';
// import {DatePicker} from 'ionic-native';

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor() {
    // DatePicker.show({
    //   date: new Date(),
    //   mode: 'date'
    // }).then(
    //   date => console.log("Got date: ", date),
    //   err => console.log("Error occurred while getting date:", err)
    // );
  }
}
