import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'lib-text-box',
    templateUrl: './text-box.component.html',
    host:{class:'editor-container'} // <-- If you replace class 'editor-container' with class 'lib-text-box', which is the tag selector, the style will be added, but the child classes of this component will not be checked by tailwind.
   
})
export class TextBoxComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
