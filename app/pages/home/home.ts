import {Page} from 'ionic-angular';
import {DatePicker, Geolocation, Camera, EmailComposer} from 'ionic-native';

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
    let options = {};

    Camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
    });
  }

  showEmail() {
    EmailComposer.isAvailable().then(
      available => console.log('email module run smoothly', available),
      err => console.error('email module is not available', err)
    );

    let email = {
      to: 'max@mustermann.de',
      cc: 'erika@mustermann.de',
      bcc: ['john@doe.com', 'jane@doe.com'],
      attachments: [],
      subject: 'Cordova Icons',
      body: 'How are you? Nice greetings from Leipzig',
      isHtml: true
    };

    // Send a text message using default options
    EmailComposer.open(email);
  }
}