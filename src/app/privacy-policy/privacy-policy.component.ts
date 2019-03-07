import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  template: `
    <h1>This is rendered from the inline template</h1>
  `,
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
