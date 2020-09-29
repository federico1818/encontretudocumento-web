import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-input-file',
    templateUrl: './input-file.component.html',
    styleUrls: ['./input-file.component.scss']
})

export class InputFileComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    public onchange(event: Event): void {
        if(this.hasFile(event))
            console.log('Lalala')
    }

    protected hasFile(event: Event) {
        return event.target['files'] && event.target['files'][0]
    }
}
