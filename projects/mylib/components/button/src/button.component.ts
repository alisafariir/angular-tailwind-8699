import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'lib-button',
    templateUrl: './button.component.html',
    host:{class:'lib-button'}
})
export class ButtonComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
