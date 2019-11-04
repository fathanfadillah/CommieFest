import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { AuthService } from '../_shared/_services/auth.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  searchQuery = '';

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit() {

    // Get Data From URL
    this.route.queryParams.subscribe(params => {
      this.searchQuery = params.q;
    });

  }

}
