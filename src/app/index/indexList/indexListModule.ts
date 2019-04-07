import { Component, OnInit } from '@angular/core';
import { Isprite } from '../../Isprite/Isprite';
import { MusiceService } from '../../service/musice.service';
import { Store } from '@ngrx/store';
import * as musiceAction from 'src/app/ngrx/musiceAction';

@Component({
    selector: 'indexListModule',
    templateUrl: './indexListModule.html',
    styleUrls: ['../../../assets/css/index/indexListModule.less'],
    // providers: [MusiceService]
})
export class indexListModule extends Isprite {
    musiceList = new Array();
    constructor(private musiceService: MusiceService, private store: Store<any>) {
        super();
    }
    init() {
        let _ts = this;
        this.musiceService.getMusiceList(function (res) {
            _ts.musiceList = res.list;
        });
    }

    randomNum(num) {
        let numT = num * Math.random();
        let numInt = parseInt(numT.toString());
        let str: string = '';
        if (numInt > 10000) {
            str = (numInt / 10000).toFixed(0) + "万";
        } else {
            str = numInt.toString();
        }
        return str;
    }

    clickMusice(num: number) {
        let str: string = (num % 2).toFixed(0);
        this.store.dispatch({
            type: musiceAction.CLICK_MUSICE,
            clickList: str
        });
    }

};
