import {Component, OnInit} from '@angular/core';
import {Card} from '../../model/card';
import {Strip} from '../../model/strip';
import {Provider} from '../../model/provider';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  cardList: Card[];
  stripList: Strip[];
  providerList: Provider[];

  // card: Card;

  constructor() {
  }

  ngOnInit() {
    this.cardList = [
      {
        title: '我要开公司',
        baseInfo: {
          href: '#',
          text: '有限责任公司',
          desc: '一站式开公司服务'
        },
        price: 0.01,
        styleClass: 'card-1',
        productList: {
          grid: true,
          list: [
            {
              href: '#',
              text: '创业问诊',
              desc: '创业咨询服务'
            },
            {
              href: '#',
              text: '国内普通商标注册',
              desc: '产权保护第一步'
            },
            {
              href: '#',
              text: '公司注册地址',
              desc: '没有地址怎么办'
            },
            {
              href: '#',
              text: '代理记账',
              desc: '专业会计帮你记账'
            }
          ]
        }
      },
      {
        title: '我要做产品',
        baseInfo: {
          href: '#',
          text: '软件著作权',
          desc: '软件产品基础必备'
        },
        price: 200,
        styleClass: 'card-2',
        productList: {
          grid: true,
          list: [
            {
              href: '#',
              text: 'ICP经营许可证',
              desc: '网络经营敲门砖'
            },
            {
              href: '#',
              text: '公众号申请',
              desc: '公共号第一步'
            },
            {
              href: '#',
              text: '企业网站',
              desc: '网站定制服务'
            },
            {
              href: '#',
              text: '法律服务',
              desc: '一站式法律服务'
            }
          ]
        }
      },
      {
        title: '我要在推广',
        baseInfo: {
          href: '#',
          text: '电商解决方案',
          desc: '搭建你的专属微信商城'
        },
        price: 1,
        styleClass: 'card-3',
        productList: {
          grid: false,
          list: [
            {
              href: '#',
              text: '朋友圈广告',
              desc: '时下最火推广'
            },
            {
              href: '#',
              text: '手机短信营销',
              desc: '营销推广必备'
            },
            {
              href: '#',
              text: '微官网',
              desc: '微信官方网站搭建'
            }
          ]
        }
      },
      {
        title: '我要做内容创业',
        baseInfo: {
          href: '#',
          text: '在线设计工具',
          desc: '美化完善图文信息'
        },
        price: 0,
        styleClass: 'card-4',
        productList: {
          grid: false,
          list: [
            {
              href: '#',
              text: '效果追踪',
              desc: '内容运营好助手'
            },
            {
              href: '#',
              text: '公众号服务',
              desc: '微信运营必备'
            },
            {
              href: '#',
              text: '版权服务',
              desc: '作品版权证明'
            }
          ]
        }
      }
    ];
    this.stripList = [
      {
        coverBackGroud: '../../../assets/images/content/0.png',
        coverTitle: '内容策划',
        coverIntro: '视频/图文策划制作',
        coverMore: '#',
        items: [
          {
            title: '商品展示短视频(食品/鞋服/美妆/母婴等)',
            titleHref: '#',
            intro: '影视剧/广告片/宣传片/短视频等拍摄制作',
            price: 1200,
            sell: 6,
            consult: 48,
            buy: '#'
          },
          {
            title: '图文策划(稿件撰写/媒体平台稿件发布)',
            titleHref: '#',
            intro: '微信/微博等媒体平台合作稿件的撰写和发布',
            price: 54000,
            sell: 6,
            consult: 48,
            buy: '#'
          },
          {
            title: '内容运营咨询',
            titleHref: '#',
            intro: '借力新媒体内容运营突破传统推广思维',
            price: 8.88,
            sell: 6,
            consult: 48,
            buy: '#'
          }
        ]
      },
      {
        coverBackGroud: '../../../assets/images/content/1.png',
        coverTitle: '内容运营',
        coverIntro: '版权&数据服务和新媒体工具',
        coverMore: '#',
        items: [
          {
            title: '新媒体编辑器(文章编辑器/二维码生成器/PS工具)',
            titleHref: '#',
            intro: '适用于所有自媒体文章的美化',
            price: 10,
            sell: 79,
            consult: 48,
            buy: '#'
          },
          {
            title: '文字著作权(官费+代理费/含发票)',
            titleHref: '#',
            intro: '一口价-含发票',
            price: 499,
            sell: 16,
            consult: 78,
            buy: '#'
          },
          {
            title: '创客贴月VIP会员',
            titleHref: '#',
            intro: '创客贴是一款极简的平面设计工具',
            price: 20,
            sell: 116,
            consult: 487,
            buy: '#'
          }
        ]
      },
      {
        coverBackGroud: '../../../assets/images/content/2.png',
        coverTitle: '内容推广和变现',
        coverIntro: '内容推广/电商变现',
        coverMore: '#',
        items: [
          {
            title: '新媒体发布(17头条网软文发布)',
            titleHref: '#',
            intro: '[壹起航]为您提供优质效果',
            price: 36,
            sell: 6,
            consult: 48,
            buy: '#'
          },
          {
            title: '微商城',
            titleHref: '#',
            intro: '商品售卖交易,商品属性标记,限时购买',
            price: 340,
            sell: 6,
            consult: 48,
            buy: '#'
          },
          {
            title: '流量变现服务(APP/公众号)',
            titleHref: '#',
            intro: '自媒体/APP流量变现模块服务提供商',
            price: 10,
            sell: 102,
            consult: 107,
            buy: '#'
          }
        ]
      }];
    this.providerList = [
      {
        seller: '#',
        logo: '../../../assets/images/seller/1.png',
        title: '中细软',
        levelUrl: '#',
        level: '11',
        quality: '5.0',
        speed: '5.0',
        attitude: '5.0',
        tag: '知识产权',
        des: '中国商标注册专业服务结构'
      },
      {
        seller: '#',
        logo: '../../../assets/images/seller/1.png',
        title: '中细软',
        levelUrl: '#',
        level: '11',
        quality: '5.0',
        speed: '5.0',
        attitude: '5.0',
        tag: '知识产权',
        des: '中国商标注册专业服务结构'
      },
      {
        seller: '#',
        logo: '../../../assets/images/seller/1.png',
        title: '中细软',
        levelUrl: '#',
        level: '11',
        quality: '5.0',
        speed: '5.0',
        attitude: '5.0',
        tag: '知识产权',
        des: '中国商标注册专业服务结构'
      },
      {
        seller: '#',
        logo: '../../../assets/images/seller/1.png',
        title: '中细软',
        levelUrl: '#',
        level: '11',
        quality: '5.0',
        speed: '5.0',
        attitude: '5.0',
        tag: '知识产权',
        des: '中国商标注册专业服务结构'
      },
      {
        seller: '#',
        logo: '../../../assets/images/seller/1.png',
        title: '中细软',
        levelUrl: '#',
        level: '11',
        quality: '5.0',
        speed: '5.0',
        attitude: '5.0',
        tag: '知识产权',
        des: '中国商标注册专业服务结构'
      },
      {
        seller: '#',
        logo: '../../../assets/images/seller/1.png',
        title: '中细软',
        levelUrl: '#',
        level: '11',
        quality: '5.0',
        speed: '5.0',
        attitude: '5.0',
        tag: '知识产权',
        des: '中国商标注册专业服务结构'
      },
      {
        seller: '#',
        logo: '../../../assets/images/seller/1.png',
        title: '中细软',
        levelUrl: '#',
        level: '11',
        quality: '5.0',
        speed: '5.0',
        attitude: '5.0',
        tag: '知识产权',
        des: '中国商标注册专业服务结构'
      },
      {
        seller: '#',
        logo: '../../../assets/images/seller/1.png',
        title: '中细软',
        levelUrl: '#',
        level: '11',
        quality: '5.0',
        speed: '5.0',
        attitude: '5.0',
        tag: '知识产权',
        des: '中国商标注册专业服务结构'
      }
    ];
  }

}
