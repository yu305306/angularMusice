import { Component, OnInit } from '@angular/core';
import Isprite from '../Isprite/Isprite';
import { MusiceService } from '../service/musice.service';


@Component({
    selector: 'appIndex',
    templateUrl: './IndexModule.html',
    styleUrls: ['../../assets/css/index/appIndex.less'],
    providers: [MusiceService]
})
class IndexModule extends Isprite {
    musiceType = new Array();
    constructor(private musiceService: MusiceService) {
        super();
    }
    init() {
        this.musiceService.getMusiceType(function (res) {
            this.musiceType = res.list;
        });
        // this.musiceService.getMusice();
    }

} export default IndexModule;
