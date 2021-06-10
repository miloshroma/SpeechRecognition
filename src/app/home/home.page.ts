import { Component } from '@angular/core';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  str:string='';
  isStop: boolean = true;
  constructor(
    private speechRecognition: SpeechRecognition
  ) {}

  speak() {
    this.isStop = false;
    this.speechRecognition.startListening().subscribe((speach:Array<string>) => {
      // alert(speach[0]);
      console.log('speach:',speach)
      this.str = speach[0];;
      console.log('speach[0]:',speach[0])
    },(err) => {
      alert(JSON.stringify(err));
    });
  }

  checkPermissions() {
    this.speechRecognition.hasPermission().then((perm) => {
      if (perm) {
        alert('already have permission');
      }
      else {
        alert('not have permission'); 
      }
    },(err) => {
      alert(JSON.stringify(err));
    })
  }

  requestPermossions() {
    this.speechRecognition.requestPermission().then((data) => {
      alert(JSON.stringify(data));
    },(err)=> {
      alert(JSON.stringify(err)); 
    })
  }
  stop() {
    this.speechRecognition.stopListening();
    // this.isStop = true;
  }
  show () {
    this.isStop = true;
  }
}
