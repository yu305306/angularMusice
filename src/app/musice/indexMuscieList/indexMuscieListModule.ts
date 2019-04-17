import { Component, ElementRef, Renderer2, ViewChild, Output, Input, EventEmitter } from '@angular/core';
import { Isprite } from '../../Isprite/Isprite';
import { MusiceService } from '../../service/musice.service';
import BScroll from 'better-scroll';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { musice } from 'src/app/ngrx/musiceModel';

@Component({
    selector: 'indexMuscieListModule',
    templateUrl: './indexMuscieListModule.html',
    styleUrls: ['../../../assets/css/index/indexMuscieListModule.less'],
})
export class indexMuscieListModule extends Isprite {
    @ViewChild("scroll") scroll: ElementRef;
    public arr: Array<any>;
    public soundLriy: Array<any> = [];
    public selectNum: number = 0;
    public readyVideo_url: string = '';
    public video_url: string = '';
    public videoStatue: string = '';
    public selectTitle: string = '';
    public scrollF: BScroll;
    public videoPlay: number = -1;

    public afterElem: ElementRef;

    public video: any;

    str: Observable<any>;

    @Output() public musiceDataEvent = new EventEmitter<any>();

    constructor(private musiceService: MusiceService, private el: ElementRef, private renderer: Renderer2, private store: Store<any>) {
        super();
    }
    init() {
        let _ts = this;
        // _ts.getMusice();
        _ts.addEventVideo();
    }

    scrollFun() {
        let _ts = this;
        if (_ts.scrollF == null) {
            _ts.scrollF = new BScroll(this.scroll.nativeElement, {
                scrollY: true,
            });
        } else {
            _ts.scrollF.refresh();
            _ts.scrollF.scrollTo(0, 0, 10);
        }
    }

    addEventVideo() {
        let _ts = this;
        _ts.video = _ts.el.nativeElement.querySelector('#ctrlMusice');

        _ts.video.onended = function () {
            _ts.videoCtrl('next');
        }

        _ts.video.addEventListener("timeupdate", function (e) {
            let tNum = e.target.currentTime;
            if (_ts.video.buffered.length > 0) {
                let widthNum = _ts.video.buffered.end(_ts.video.buffered.length - 1);
                // let wStr = (490 * (widthNum / video.duration)).toFixed(0);
                // _ts.renderer.setStyle(barbufferLine, 'width', wStr + 'px');
                // console.log(widthNum);
                let videoData = {
                    status: 'play',
                    time: tNum,
                    duration: _ts.video.duration,
                    buffer: widthNum
                }
                _ts.musiceDataEvent.emit(videoData);
            }
            if (_ts.scrollFun != null && _ts.soundLriy != null && _ts.soundLriy.length > 0) {
                _ts.soundLriy.forEach(function (item, index) {
                    if (tNum > item.time && _ts.videoPlay < item.time) {
                        _ts.videoPlay = item.time;
                        let obj = _ts.el.nativeElement.querySelector('.soundLriy' + index);
                        let totla = _ts.el.nativeElement.querySelector('.listUl');
                        if (_ts.afterElem == null) {
                            _ts.afterElem = obj;
                        } else {
                            _ts.renderer.removeClass(_ts.afterElem, 'soundLriyPlay');
                            _ts.afterElem = obj;
                        }
                        _ts.renderer.addClass(obj, 'soundLriyPlay');
                        if (Math.abs(_ts.scrollF.maxScrollY) > (obj.offsetTop + 224)) {
                            if (obj.offsetTop - 112 > 0) {
                                _ts.scrollF.scrollTo(0, -(obj.offsetTop - 112), 200);
                            }
                        }
                        return;
                    }
                });
            }
        })

        _ts.video.addEventListener("progress", function (e) {
            // console.log(e);
        });
        _ts.str = _ts.store.select('musice');
        _ts.str.subscribe((state) => {
            if (state != null)
                if (state.videoStatus != null) {
                    _ts.videoCtrl(state.videoStatus);
                } else if (state.addList != null) {
                    _ts.addList(state.addList);
                } else {
                    _ts.getMusice(state.clickList);
                }

        });
    }

    videoCtrl(state: string) {
        let _ts = this;
        _ts.videoStatue = state;
        if (_ts.arr.length > 0) {
            if (state == 'play') {
                if (_ts.video_url.length == 0) {
                    _ts.musiceSelectPlay(_ts.arr[_ts.selectNum], _ts.selectNum);
                } else {
                    _ts.video.play();
                }
            } else if (state == 'pause') {
                _ts.video.pause();
            } else if (state == 'playPre') {
                // _ts.video_url = _ts.readyVideo_url;
                _ts.musiceIndex(false);
                _ts.musiceSelectPlay(_ts.arr[_ts.selectNum], _ts.selectNum);
            } else if (state == 'playNext') {
                // _ts.video_url = _ts.readyVideo_url;
                _ts.musiceIndex();
                _ts.musiceSelectPlay(_ts.arr[_ts.selectNum], _ts.selectNum);
            }
        }
    }

    getMusice(str: string) {
        let _ts = this;
        this.musiceService.getBooks(str).subscribe(
            function (res) {
                let listData = res.json();
                // 数据格式请看log
                _ts.arr = listData.musice;
                if (_ts.arr.length > 0) {
                    _ts.musiceSelectPlay(_ts.arr[0], 0);
                }
            }, error => {
                console.log(error);
            });
    }

    addList(obj: any) {
        let _ts = this;
        if (Array.isArray(obj)) {
            if (_ts.arr == null || _ts.arr.length == 0) {
                _ts.arr = obj;
            } else {
                obj.forEach(function (value) {
                    let bol: boolean = true;
                    _ts.arr.forEach(function (item) {
                        if (value.title == item.title) {
                            bol = false;
                        }
                    });
                    if (bol) {
                        _ts.arr.push(value);
                    }
                });
            }
            _ts.musiceDataEvent.emit({ status: 'msg', data: _ts.arr[0], len: _ts.arr.length });
        } else {
            if (_ts.arr != null && _ts.arr.length > 0) {
                _ts.arr.forEach(function (item) {
                    if (obj.title == item.title) {
                        return;
                    }
                });
            }
            _ts.arr.push(obj);
            _ts.musiceDataEvent.emit({ status: 'msg', data: obj, len: _ts.arr.length });
        }
    }

    musiceIndex(bol: boolean = true) {
        let _ts = this;
        if (bol) {
            _ts.selectNum++;
            if (_ts.selectNum >= _ts.arr.length) {
                _ts.selectNum = 0;
            }
        } else {
            _ts.selectNum--;
            if (_ts.selectNum < 0) {
                _ts.selectNum = _ts.arr.length - 1;
            }
        }
    }

    musiceSelectPlay(item: any, index: number) {
        let _ts = this;
        _ts.selectNum = index;
        _ts.selectTitle = item.title;
        // this.video_url = $sce.trustAsResourceUrl(item.url);
        _ts.videoPlay = 0;
        if (_ts.videoStatue != null && _ts.videoStatue.length > 0 && _ts.videoStatue != 'pause') {
            _ts.video_url = _ts.readyVideo_url = item.url;
        } else {
            _ts.readyVideo_url = item.url;
        }
        _ts.musiceDataEvent.emit({ status: 'msg', data: item, len: _ts.arr.length });
        // _ts.video_url = item.url;
        // console.log("laji")
        _ts.musiceService.loadData(item.lyric).subscribe(
            function (res) {
                let listData = res.json();
                // 数据格式请看log
                let lrcArr: Array<string> = listData.lyric.split('\n');
                let lArr: Array<any> = [];
                for (let i = 0; i < lrcArr.length; i++) {
                    let str = lrcArr[i];
                    let matchArr = str.match(/\[(.+)\]/g);
                    if (matchArr != null && matchArr.length > 0) {
                        let t = matchArr[0];
                        t = t.replace(/\[/g, '').replace(/\]/g, '');
                        let tArr = t.split(':');
                        let min = parseInt(tArr[0]);
                        let ss = parseFloat(tArr[1]);
                        let lycStr = str.replace(/\[(.+)\]/g, '');
                        lArr.push({
                            str: lycStr,
                            time: min * 60 + ss
                        })

                    }
                }
                _ts.soundLriy = lArr;
                setTimeout(_ts.scrollFun.bind(_ts), 50);
            }, error => {
                console.log(error);
            });
    }

    clearMusice() {
        this.arr.length = 0;
    }



} 