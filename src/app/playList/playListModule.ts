import { Component, OnInit } from '@angular/core';
import { Isprite } from '../Isprite/Isprite';
import { MusiceService } from '../service/musice.service';


@Component({
    selector: 'playListModule',
    templateUrl: './playListModule.html',
    styleUrls: ['../../assets/css/playList/playListModule.less'],
    providers: [MusiceService]
})
export class playListModule extends Isprite {
    // musiceType = new Array();
    constructor(private musiceService: MusiceService) {
        super();
    }
    init() {
        let _ts = this;
        document.body.style.margin = "0";
        // this.musiceService.getMusiceType(function (res) {
        //     _ts.musiceType = res.list;
        // });
    }

}
