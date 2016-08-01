import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'ed-nav',
  styleUrls: ['app/nav.component.css'],
  templateUrl: 'app/nav.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class NavComponent { }