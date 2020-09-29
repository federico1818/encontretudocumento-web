import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-input-file',
    templateUrl: './input-file.component.html',
    styleUrls: ['./input-file.component.scss']
})

export class InputFileComponent implements OnInit {
    public imgSrc

    constructor() {}

    ngOnInit(): void {
    }

    public onchange(event: Event): void {
        if(this.hasFile(event))
            this.renderFile(event)
    }

    protected renderFile(event: Event) {
        let fileReader = new FileReader()
        fileReader.onloadend = () => {
            this.imgSrc = fileReader.result
        }
        fileReader.readAsDataURL(event.target['files'][0])
    }

    protected hasFile(event: Event) {
        return event.target['files'] && event.target['files'][0]
    }

    public get imageUploaded(): boolean {
        return this.imgSrc
    } 
}
