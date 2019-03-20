import { Component, OnInit } from '@angular/core';
import Isprite from '../../Isprite/Isprite';
import { MusiceService } from '../../service/musice.service';


@Component({
    selector: 'indexListModule',
    templateUrl: './indexListModule.html',
    styleUrls: ['../../../assets/css/index/indexListModule.less'],
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
        let num: Number = 500000 * Math.random();
        let numInt = parseInt(num.toString());
        let str: string = '';
        if (numInt > 10000) {
            str = (numInt / 10000).toFixed(0) + "万";
        } else {
            str = numInt.toString();
        }
        return str;
    }

} export default indexListModule;
