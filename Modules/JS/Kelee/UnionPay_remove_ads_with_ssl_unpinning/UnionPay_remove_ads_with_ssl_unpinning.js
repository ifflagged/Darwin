/*
脚本引用https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/breakssl.js
*/
// 2023-12-11 17:00

const url = $request.url;
const header = $request.headers;
const ua = header["User-Agent"] || header["user-agent"];
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (ua === "iPhone CHSP") {
  // 云闪付
  if (url.includes("/app/inApp/sys/appShowGroup/")) {
    // 各项功能列表
    if (obj?.params?.groups?.length > 0) {
      let newGroups = [];
      for (let group of obj.params.groups) {
        if (group?.webShortcuts?.length > 0) {
          let newShorts = [];
          for (let item of group.webShortcuts) {
            // 保留项目列表
            if (
              [
                "10001", // 首页-专属优惠
                "10002", // 首页-发现小程序
                // "1002", // 卡管理页面-交易记录
                "10201", // 优惠页-优惠按钮
                // "10202", // 优惠页-轮播图
                "10303", // 卡管理页面-功能区
                // "10304", // 卡管理页面-跑马灯
                // "10305", // 卡管理页面-申请银行卡（主副标题）
                // "10306", // 卡管理页面-银行卡轮播
                // "10307", // 卡管理页面-下方功能入口 云闪付主题卡
                // "10308", // 卡管理页面-绑卡有优惠（主副标题）
                // "10309", // 卡管理页面-绑卡有优惠
                // "10310", // 卡管理页面-绑卡有优惠大
                // "10501", // 我的页面-左上角消费者保护中心
                "10502", // 我的页面-右上角功能区
                // "10503", // 我的页面-顶部签到入口
                "10504", // 我的页面-我的收藏入口 优惠券/商家/小程序
                "10505", // 我的页面-我的服务列表 信用报告 积分中心 数字藏品
                // "10506", // 我的页面-生态服务列表 聚合支付/商家服务 我是收银员 我是推广大使
                // "10507", // 我的页面-底部我的客服入口
                // "301", // 首页-frog轮播图V2
                // "601", // 首页-新版轮播图
                // "625", // 首页-新版背景图
                "8021", // 首页-顶栏-生活便利区
                "8022", // 首页-快捷功能栏
                // "8023", // 首页-跑马灯
                // "8024", // 首页-主推功能
                // "8025", // 首页-节日版
                // "8026", // 首页-签到
                // "8031", // 首页-搜索默认文案
                // "8118", // 优惠页-发现页为你推荐
                // "8160", // 优惠页-9.0生活频道轮播图
                "8161", // 优惠页-9.0生活频道生活场景
                // "8162", // 优惠页-9.0生活频道爆品抢购
                // "8163", // 优惠页-9.0生活频道热门优惠
                // "8164", // 优惠页-9.0生活频道商家分类
                // "8168", // 优惠页-生活频道爆品抢购new
                "8202", // 金融页-顶栏图标
                "8702", // 卡管理-功能列表
                "8800", // 首页-顶栏-搜索按钮
                // "9060", // 优惠页-生活频道浮标
                "9003", // 首页-信息流-本地专区
                // "9025", // 首页-9.0首页节日版2（三合一）
                // "9035", // 首页-9.0首页版本切换
                // "9063", // 我的页面-浮标
                "9302", // 我的页面-右上角功能区
                "9305", // 我的页面-功能项列表
                "9360", // 我的页面-功能项列表1-管家&账单
                "9361", // 我的页面-功能项列表2-奖励&积分
                "9362", // 我的页面-功能项列表3-商家服务
                "9363" // 我的页面-功能项列表4-我的客服
              ]?.includes(item?.listTp)
            ) {
              if (item?.shortAndApps?.length > 0) {
                let newApps = [];
                for (let i of item.shortAndApps) {
                  // 移除项目列表
                  if (
                    [
                      "1002", // 卡管理页面-交易记录
                      // "10102", // 首页顶栏-乘车码
                      // "1013", // 卡管理页面-余额查询
                      "10167", // 首页顶栏-理财信贷
                      "10188", // 金融页-活期+
                      "10480", // 金融页-晒单
                      "1055", // 首页顶栏-党费缴纳
                      "10829", // 首页信息流-权益精选
                      // "12343", // 快捷功能栏-扫一扫
                      // "123456", // 首页顶栏-公共缴费
                      "20210824", // 快捷功能栏-关爱版
                      "20210902", // 我的页面-小程序
                      // "20211027", // 卡管理页面-一键查卡
                      "20211223", // 卡管理页面-发红包
                      "2023111601", // 卡管理页面-预约转账
                      "2117", // 我的页面-积分
                      // "227", // 首页顶栏-城市服务
                      "23445", // 快捷功能栏-我的奖励
                      "23446", // 我的页面-合作共赢
                      "23451", // 我的页面-精选列表&精选列表
                      // "2399", // 卡管理页面-安全中心
                      "280878", // 卡管理-云惠保
                      "281988", // 首页顶栏-商城
                      "282180", // 金融页-跨境理财通
                      // "283566", // 快捷功能栏-我的客服
                      "284206", // 我的页面-数字藏品
                      "284486", // 我的页面-商家服务
                      "285323", // 金融页-大额分期
                      "287201", // 金融页-小微贷
                      "289722", // 快捷功能栏&我的页面-小程序榜单
                      "43121", // 金融页-体验金
                      "62225", // 首页顶栏-充值中心
                      "62249", // 首页顶栏-借款
                      "62375", // 首页信息流-境外服务
                      // "62476", // 首页顶栏-信用报告
                      "62666", // 首页信息流-云影票
                      "62763", // 金融页-贷款精选
                      "62851", // 我的页面-借款
                      "62851", // 金融页-借款
                      "62914", // 我的页面-会员中心
                      "62988", // 首页顶栏-新人礼包
                      "62997", // 金融页&卡管理页面-申请信用卡
                      "62999", // 金融页-基金
                      // "713", // 首页顶栏-信用卡还款
                      // "715", // 首页顶栏-转账
                      "758", // 首页顶栏-申请信用卡
                      "8016", // 卡管理-黄金
                      "8027", // 金融页-安全保障
                      "82023", // 金融页-返现主题卡
                      "82025", // 金融页-黄金
                      "8203", // 金融页-财富信贷
                      "85188", // 金融页-云闪付主题卡
                      "911", // 首页顶栏-银联无界卡
                      // "9107", // 快捷功能栏-添加银行卡
                      "9888", // 首页信息流-出行服务
                      "9994" // 首页顶栏-计划礼券
                    ]?.includes(i?.shortcut?.appId)
                  ) {
                    continue;
                  } else {
                    newApps.push(i);
                  }
                }
                item.shortAndApps = newApps;
              }
              newShorts.push(item);
            } else {
              continue;
            }
          }
          group.webShortcuts = newShorts;
        }
        newGroups.push(group);
      }
      obj.params.groups = newGroups;
    }
  } else if (url.includes("/fortune/inApp/common/")) {
    // 财富页面
    if (obj?.params?.fundProductTabInfoList?.length > 0) {
      // 零钱盈收 稳健精选 进阶攀升
      obj.params.fundProductTabInfoList = [];
    }
    if (obj?.params?.infoTabList?.length > 0) {
      // 热点资讯 行情解读 投教课程
      obj.params.infoTabList = [];
    }
    if (obj?.params?.moreInfo) {
      obj.params.moreInfo = {};
    }
    if (obj?.params?.moreJumpUrlInfo) {
      obj.params.moreJumpUrlInfo = {};
    }
  } else if (url.includes("/koala-pre/koala/recommend/hotList")) {
    // 优惠页面 热门优惠
    if (obj?.params?.hotCouponList?.length > 0) {
      obj.params.hotCouponList = [];
    }
  } else if (url.includes("/koala-pre/koala/right/queryAllRights")) {
    // 卡管理页面 热门卡权益
    if (obj?.params) {
      obj.params = {};
    }
  }
  // if (url.includes("/life/inApp/wealth/home/")) {
  //   // 10.0之前的财富页
  //   if (obj?.params) {
  //     obj.params = {};
  //   }
  // }
}

$done({ body: JSON.stringify(obj) });