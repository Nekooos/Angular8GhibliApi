import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  toogleNav(): void {
    const checkBox = document.getElementById("navi-toggle") as HTMLInputElement;
    checkBox.checked = false;
  }
}
