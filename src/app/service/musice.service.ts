import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class MusiceService {
  constructor(private http: Http) {
  }

  getMusiceList(fun: Function) {
    let arr = {
      "list":
        [
          {
            "img": "http://p2.music.126.net/4-9QKim3Jx_hqY_jPukoNQ==/109951163924400411.jpg?param=140y140?param=140y140",
            "name": "恋爱攻略 | 心动只需要一首歌的时间",
            "niceName": "卿公子的字"
          },
          {
            "img": "http://p1.music.126.net/IBIBHtl1ZoDhhucmKKdUlA==/109951163920738309.jpg?param=140y140",
            "name": "白色情人 | 这些歌送给我们的男孩！",
            "niceName": "索尼音乐娱乐"
          },
          {
            "img": "http://p1.music.126.net/-hXO9DYtc_alxuNYc1HnwQ==/109951163907651951.jpg?param=140y140",
            "name": "耳机分你一个，想和你开启听歌心动模式",
            "niceName": "茉瑾年"
          },
          {
            "img": "http://p1.music.126.net/nQUZHgbC0KEVqRQEg48qHQ==/109951163923087481.jpg?param=140y140",
            "name": "只要有想见的人，就不是孤身一人",
            "niceName": "橘子觉主"
          },
          {
            "img": "http://p1.music.126.net/MULpmwMME1jXhvEYDvhNKg==/109951163908765462.jpg?param=140y140",
            "name": "那些很适合画画/写作业/玩游戏时听的音乐",
            "niceName": "终将成为猫奴"
          },
          {
            "img": "http://p1.music.126.net/ZU3n0btbBG2FiqHv9hiJog==/109951163906802125.jpg?param=140y140",
            "name": "S.H.E全专辑正序集",
            "niceName": "雨不飄"
          },
          {
            "img": "http://p1.music.126.net/6k6L9DtmNyDQ2elG1smxyw==/19064432114600478.jpg?param=140y140",
            "name": "滚石香港黄金十年",
            "niceName": "莫矮老子"
          },
          {
            "img": "http://p1.music.126.net/GS9o0AT6vJnNDQ7xcJbFWA==/109951163529902427.jpg?param=140y140",
            "name": "朗朗入耳的歌曲｜中文DJ版｜音魂不散",
            "niceName": "借風擁妳"
          },
          {
            "img": "http://p1.music.126.net/zc9UfQOwlQB8_mYv9oaN2g==/109951163436384760.jpg?param=140y140",
            "name": "孙燕姿莫文蔚梁静茹田馥甄刘若英蔡健雅",
            "niceName": "歌尽桃花朵朵开"
          }
        ]

    };
    fun(arr);
  }

  getMusiceType(fun: Function) {
    let arr = {
      "list": [
        {
          "title": "语种",
          "typeList": ["华语", "欧美", "日语", "韩语", "粤语", "小语种"]
        },
        {
          "title": "风格",
          "typeList": ["流行", "摇滚", "民谣", "电子", "舞曲", "说唱", "轻音乐", "爵士", "乡村", "古典", "民族", "英伦", "金属", "朋克", "蓝调"]
        },
        {
          "title": "场景",
          "typeList": ["清晨", "夜晚", "学习", "工作", "午休", "下午茶", "地铁", "驾车", "运动", "旅行", "散步"]
        },
        {
          "title": "情感",
          "typeList": ["怀旧", "清新", "浪漫", "性感", "伤感", "治愈", "放松", "孤独", "感动", "兴奋", "快乐", "安静", "思念"]
        },
        {
          "title": "主题",
          "typeList": ["影视原声", "儿童", "校园", "游戏", "70后", "80后", "90后", "网络歌曲", "经典", "翻唱", "吉他", "钢琴", "器乐"]
        }
      ]
    };
    return fun(arr);
    // this.http.get(url)
    //   .subscribe(function (res) {
    //     fun(res)
    //   });
  }

}
