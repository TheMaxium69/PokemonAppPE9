import { Component } from '@angular/core';
import {TokenService} from "../../_service/token/token.service";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-uploadtoken',
  templateUrl: './uploadtoken.component.html',
  styleUrls: ['./uploadtoken.component.css']
})
export class UploadtokenComponent {

  isResult:boolean = false;
  isCorrect:boolean = false;

  constructor(private tokenService:TokenService,
              private app:AppComponent) {}


  uploadToken() {
      this.tokenService.getUploadToken(this.app.API_URL_TOKEN, this.app.createCorsToken()).subscribe(response => {

        if (response.Token == this.app.TOKEN){
          this.isCorrect = true;
        } else {
          this.isCorrect = false;
        }
        this.isResult = true;

      });
  }

}
