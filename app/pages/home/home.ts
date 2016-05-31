import {Page} from 'ionic-angular';
import {DatePicker, Geolocation, Camera} from 'ionic-native';

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor() { }

  getGeolocationData() {
    Geolocation.getCurrentPosition().then(
      resp => console.log("Latitude: ", resp.coords.latitude, "Longitude: ", resp.coords.longitude),
      err => console.error("Error occurred while getting geolocation data:", err)
    );
  }

  showDatePicker() {
    DatePicker.show({
      date: new Date,
      mode: 'date'
    }).then(
      date => console.log("Got date: ", date),
      err => console.error("Error occurred while getting date:", err)
    )
  }

  showTimePicker() {
    DatePicker.show({
      date: new Date,
      mode: 'time'
    }).then(
      date => console.log("Got date: ", date),
      err => console.error("Error occurred while getting date:", err)
    )
  }

  showDateTimePicker() {
    DatePicker.show({
      date: new Date,
      mode: 'datetime'
    }).then(
      date => console.log("Got date: ", date),
      err => console.error("Error occurred while getting date:", err)
      )
  }



  showCamera() {
    // Camera.getPicture().then((imageData) => {
    //   // imageData is either a base64 encoded string or a file URI
    //   // If it's base64:
    //   let base64Image = "data:image/jpeg;base64," + imageData;
    // }, (err) => {
    // });
  }
}