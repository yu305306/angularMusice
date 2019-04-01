import { Component } from '@angular/core';
import Isprite from '../../Isprite/Isprite';
import { MusiceService } from '../../service/musice.service';

@Component({
    selector: 'indexMuscieListModule',
    templateUrl: './indexMuscieListModule.html',
    styleUrls: ['../../../assets/css/index/indexMuscieListModule.less'],
})
class indexMuscieListModule extends Isprite {
    private arr: Array<any>;
    private selectNum: Number = 0;
    constructor(private musiceService: MusiceService) {
        super();
    }
    init() {
        let _ts = this;
        let ss: string;
        _ts.getMusice();
    }

    getMusice() {
        let _ts = this;
        this.musiceService.getBooks().subscribe(
            function (res) {
                let listData = res.json();
                // 数据格式请看log
                _ts.arr = listData.musice;
            }, error => {
                console.log(error);
            });
    }

    musiceSelectPlay(item, index) {
        this.selectNum = index;
        // console.log("laji")
    }

    clearMusice() {
        this.arr.length = 0;
    }



} export default indexMuscieListModule;
