import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  test : Date = new Date();
  isLoggedIn$: Observable <Boolean>;

  constructor(private authService: AuthService) { }

  ngOnInit() {
   
  }

}
