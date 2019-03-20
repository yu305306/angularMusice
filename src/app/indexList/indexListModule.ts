import { Component, OnInit } from '@angular/core';
import Isprite from '../Isprite/Isprite';
import { MusiceService } from '../service/musice.service';


@Component({
    selector: 'indexListModule',
    templateUrl: './indexListModule.html',
    styleUrls: ['../../assets/css/index/indexListModule.less'],
    providers: [MusiceService]
})
class indexListModule extends Isprite {
    musiceList = new Array();
    constructor(private musiceService: MusiceService) {
        super();
    }
    init() {
        let _ts = this;
        this.musiceService.getMusiceList(function (res) {
            _ts.musiceList = res.list;
        });
    }

    randomNum() {
        return (10000 * Math.random()).toFixed(0);
    }

} export default indexListModule;
