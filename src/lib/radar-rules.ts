export const defaultRules = {
  "81.cn": {
    _name: "中国军网",
    "81rc": [
      {
        title: "军队人才网",
        docs: "https://docs.rsshub.app/routes/government#zhon-guo-jun-wang-jun-dui-ren-cai-wang",
        source: ["/"],
        target: (params, url) => {
          url = new URL(url)
          const path = url.href
            .match(/81rc\.81\.cn(.*?)/)
            .replace(/\/index\.html$/, "")

          return `/81/81rc${path === "/" ? "" : path}`
        },
      },
    ],
  },
  "163.com": {
    _name: "网易",
    ".": [
      {
        title: "网易号（通用）",
        docs: "https://docs.rsshub.app/routes/new-media#wang-yi-hao",
        source: ["/dy/media/:id", "/news/sub/:id"],
        target: (params) => `/163/dy2/${params.id.replace(".html", "")}`,
      },
    ],
    "3g": [
      {
        title: "网易号（通用）",
        docs: "https://docs.rsshub.app/routes/new-media#wang-yi-hao",
        source: ["/dy/media/:id", "/news/sub/:id"],
        target: (params) => `/163/dy2/${params.id.replace(".html", "")}`,
      },
      {
        title: "独家栏目",
        docs: "https://docs.rsshub.app/routes/new-media#wang-yi-du-jia-lan-mu",
        source: ["/touch/exclusive/sub/:id"],
        target: "/163/exclusive/:id?",
      },
    ],
    "c.m": [
      {
        title: "网易号（通用）",
        docs: "https://docs.rsshub.app/routes/new-media#wang-yi-hao",
        source: ["/dy/media/:id", "/news/sub/:id"],
        target: (params) => `/163/dy2/${params.id.replace(".html", "")}`,
      },
    ],
    ds: [
      {
        title: "大神",
        docs: "https://docs.rsshub.app/routes/game#wang-yi-da-shen",
        source: "/user/:id",
        target: "/163/ds/:id",
      },
    ],
    m: [
      {
        title: "今日关注",
        docs: "https://docs.rsshub.app/routes/new-media#wang-yi-xin-wen-jin-ri-guan-zhu",
        source: ["/"],
        target: "/163/today",
      },
    ],
    music: [
      {
        title: "云音乐 - 用户歌单",
        docs: "https://docs.rsshub.app/routes/multimedia#wang-yi-yun-yin-yue",
        source: "/",
        target: (params, url) => {
          const id = new URL(url).hash.match(/home\?id=(.*)/)[1]
          return id ? `/163/music/user/playlist/${id}` : ""
        },
      },
      {
        title: "云音乐 - 歌单歌曲",
        docs: "https://docs.rsshub.app/routes/multimedia#wang-yi-yun-yin-yue",
        source: "/",
        target: (params, url) => {
          const id = new URL(url).hash.match(/playlist\?id=(.*)/)[1]
          return id ? `/163/music/playlist/${id}` : ""
        },
      },
      {
        title: "云音乐 - 歌手专辑",
        docs: "https://docs.rsshub.app/routes/multimedia#wang-yi-yun-yin-yue",
        source: "/",
        target: (params, url) => {
          const id = new URL(url).hash.match(/album\?id=(.*)/)[1]
          return id ? `/163/music/artist/${id}` : ""
        },
      },
      {
        title: "云音乐 - 歌手歌曲",
        docs: "https://docs.rsshub.app/routes/multimedia#wang-yi-yun-yin-yue",
        source: "/",
        target: (_params, url) => {
          const id = new URL(url).hash.match(/artist\?id=(.*)/)[1]
          return id ? `/163/music/artist/songs/${id}` : ""
        },
      },
      {
        title: "云音乐 - 电台节目",
        docs: "https://docs.rsshub.app/routes/multimedia#wang-yi-yun-yin-yue",
        source: "/",
        target: (params, url) => {
          const id = new URL(url).hash.match(/djradio\?id=(.*)/)[1]
          return id ? `/163/music/djradio/${id}` : ""
        },
      },
      {
        title: "用户动态",
        docs: "https://docs.rsshub.app/routes/multimedia#wang-yi-yun-yin-yue-yong-hu-dong-tai",
        source: ["/"],
        target: (_, url) => {
          const id = new URL(url).hash.match(/event\?id=(.*)/)[1]
          return id ? `/163/music/user/events/${id}` : ""
        },
      },
    ],
    news: [
      {
        title: "排行榜",
        docs: "https://docs.rsshub.app/routes/new-media#wang-yi-xin-wen-pai-hang-bang",
      },
    ],
    renjian: [
      {
        title: "人间",
        docs: "https://docs.rsshub.app/routes/new-media#wang-yi-xin-wen-ren-jian",
        source: ["/:category", "/"],
        target: "/163/renjian/:category?",
      },
    ],
    "vip.open": [
      {
        title: "公开课 精品课程",
        docs: "https://docs.rsshub.app/routes/study#wang-yi-gong-kai-ke",
        source: ["/"],
        target: "/163/open/vip",
      },
    ],
    "wp.m": [
      {
        title: "今日关注",
        docs: "https://docs.rsshub.app/routes/new-media#wang-yi-xin-wen",
        source: ["/163/html/newsapp/todayFocus/index.html", "/"],
        target: "/163/today",
      },
    ],
    "y.music": [
      {
        title: "云音乐 - 用户歌单",
        docs: "https://docs.rsshub.app/routes/multimedia#wang-yi-yun-yin-yue",
        source: "/m/user",
        target: (params, url) =>
          `/163/music/user/playlist/${new URL(url).searchParams.get("id")}`,
      },
      {
        title: "云音乐 - 歌单歌曲",
        docs: "https://docs.rsshub.app/routes/multimedia#wang-yi-yun-yin-yue",
        source: "/m/playlist",
        target: (params, url) =>
          `/163/music/playlist/${new URL(url).searchParams.get("id")}`,
      },
      {
        title: "云音乐 - 歌手专辑",
        docs: "https://docs.rsshub.app/routes/multimedia#wang-yi-yun-yin-yue",
        source: "/m/album",
        target: (params, url) =>
          `/163/music/artist/${new URL(url).searchParams.get("id")}`,
      },
      {
        title: "云音乐 - 电台节目",
        docs: "https://docs.rsshub.app/routes/multimedia#wang-yi-yun-yin-yue",
        source: ["/m/radio", "/m/djradio"],
        target: (params, url) =>
          `/163/music/djradio/${new URL(url).searchParams.get("id")}`,
      },
      {
        title: "用户动态",
        docs: "https://docs.rsshub.app/routes/multimedia#wang-yi-yun-yin-yue-yong-hu-dong-tai",
      },
    ],
  },
  "591.com.tw": {
    _name: "591 租屋網",
    rent: [
      {
        title: "所有物件",
        docs: "https://docs.rsshub.app/routes/other#591-zu-wu-wang",
        source: ["/"],
        target: (params, url) => {
          const searchParams = new URL(url).searchParams
          return `/591/tw/rent/${searchParams.toString()}`
        },
      },
    ],
  },
  "2047.name": {
    _name: "2047",
    ".": [
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/bbs#2047-fen-lei",
        source: ["/"],
        target: "/2047/:category?/:sort?",
      },
    ],
  },
  "hjd2048.com": {
    _name: "2048 核基地",
    ".": [
      {
        title: "论坛",
        docs: "https://docs.rsshub.app/routes/multimedia#2048-he-ji-di",
        source: ["/2048/thread.php?fid-3.html"],
        target: (_, url) => `/2048/${url.match(/fid-(\d+?)\.html/)[1]}`,
      },
    ],
  },
  "8264.com": {
    _name: "8264",
    ".": [
      {
        title: "热门推荐",
        docs: "https://docs.rsshub.app/routes/new-media#8264-lie-biao",
        source: ["/list/751"],
        target: "/8264/list/751",
      },
      {
        title: "户外知识",
        docs: "https://docs.rsshub.app/routes/new-media#8264-lie-biao",
        source: ["/list/238"],
        target: "/8264/list/238",
      },
      {
        title: "户外装备",
        docs: "https://docs.rsshub.app/routes/new-media#8264-lie-biao",
        source: ["/list/204"],
        target: "/8264/list/204",
      },
      {
        title: "业界",
        docs: "https://docs.rsshub.app/routes/new-media#8264-lie-biao",
        source: ["/list/489"],
        target: "/8264/list/489",
      },
      {
        title: "国际",
        docs: "https://docs.rsshub.app/routes/new-media#8264-lie-biao",
        source: ["/list/733"],
        target: "/8264/list/733",
      },
      {
        title: "专访",
        docs: "https://docs.rsshub.app/routes/new-media#8264-lie-biao",
        source: ["/list/746"],
        target: "/8264/list/746",
      },
      {
        title: "图说",
        docs: "https://docs.rsshub.app/routes/new-media#8264-lie-biao",
        source: ["/list/902"],
        target: "/8264/list/902",
      },
      {
        title: "户外",
        docs: "https://docs.rsshub.app/routes/new-media#8264-lie-biao",
        source: ["/list/914"],
        target: "/8264/list/914",
      },
      {
        title: "登山",
        docs: "https://docs.rsshub.app/routes/new-media#8264-lie-biao",
        source: ["/list/934"],
        target: "/8264/list/934",
      },
      {
        title: "攀岩",
        docs: "https://docs.rsshub.app/routes/new-media#8264-lie-biao",
        source: ["/list/935"],
        target: "/8264/list/935",
      },
      {
        title: "徒步",
        docs: "https://docs.rsshub.app/routes/new-media#8264-lie-biao",
        source: ["/list/242"],
        target: "/8264/list/242",
      },
      {
        title: "露营",
        docs: "https://docs.rsshub.app/routes/new-media#8264-lie-biao",
        source: ["/list/950"],
        target: "/8264/list/950",
      },
      {
        title: "安全急救",
        docs: "https://docs.rsshub.app/routes/new-media#8264-lie-biao",
        source: ["/list/931"],
        target: "/8264/list/931",
      },
      {
        title: "领队",
        docs: "https://docs.rsshub.app/routes/new-media#8264-lie-biao",
        source: ["/list/920"],
        target: "/8264/list/920",
      },
      {
        title: "登雪山",
        docs: "https://docs.rsshub.app/routes/new-media#8264-lie-biao",
        source: ["/list/915"],
        target: "/8264/list/915",
      },
      {
        title: "攀岩",
        docs: "https://docs.rsshub.app/routes/new-media#8264-lie-biao",
        source: ["/list/916"],
        target: "/8264/list/916",
      },
      {
        title: "骑行",
        docs: "https://docs.rsshub.app/routes/new-media#8264-lie-biao",
        source: ["/list/917"],
        target: "/8264/list/917",
      },
      {
        title: "跑步",
        docs: "https://docs.rsshub.app/routes/new-media#8264-lie-biao",
        source: ["/list/918"],
        target: "/8264/list/918",
      },
      {
        title: "滑雪",
        docs: "https://docs.rsshub.app/routes/new-media#8264-lie-biao",
        source: ["/list/919"],
        target: "/8264/list/919",
      },
      {
        title: "水上运动",
        docs: "https://docs.rsshub.app/routes/new-media#8264-lie-biao",
        source: ["/list/921"],
        target: "/8264/list/921",
      },
      {
        title: "钓鱼",
        docs: "https://docs.rsshub.app/routes/new-media#8264-lie-biao",
        source: ["/list/951"],
        target: "/8264/list/951",
      },
      {
        title: "潜水",
        docs: "https://docs.rsshub.app/routes/new-media#8264-lie-biao",
        source: ["/list/952"],
        target: "/8264/list/952",
      },
      {
        title: "攀冰",
        docs: "https://docs.rsshub.app/routes/new-media#8264-lie-biao",
        source: ["/list/953"],
        target: "/8264/list/953",
      },
      {
        title: "冲浪",
        docs: "https://docs.rsshub.app/routes/new-media#8264-lie-biao",
        source: ["/list/966"],
        target: "/8264/list/966",
      },
      {
        title: "网球",
        docs: "https://docs.rsshub.app/routes/new-media#8264-lie-biao",
        source: ["/list/967"],
        target: "/8264/list/967",
      },
      {
        title: "绳索知识",
        docs: "https://docs.rsshub.app/routes/new-media#8264-lie-biao",
        source: ["/list/968"],
        target: "/8264/list/968",
      },
      {
        title: "高尔夫",
        docs: "https://docs.rsshub.app/routes/new-media#8264-lie-biao",
        source: ["/list/969"],
        target: "/8264/list/969",
      },
      {
        title: "马术",
        docs: "https://docs.rsshub.app/routes/new-media#8264-lie-biao",
        source: ["/list/970"],
        target: "/8264/list/970",
      },
      {
        title: "户外摄影",
        docs: "https://docs.rsshub.app/routes/new-media#8264-lie-biao",
        source: ["/list/973"],
        target: "/8264/list/973",
      },
      {
        title: "羽毛球",
        docs: "https://docs.rsshub.app/routes/new-media#8264-lie-biao",
        source: ["/list/971"],
        target: "/8264/list/971",
      },
      {
        title: "游泳",
        docs: "https://docs.rsshub.app/routes/new-media#8264-lie-biao",
        source: ["/list/974"],
        target: "/8264/list/974",
      },
      {
        title: "溯溪",
        docs: "https://docs.rsshub.app/routes/new-media#8264-lie-biao",
        source: ["/list/975"],
        target: "/8264/list/975",
      },
      {
        title: "健身",
        docs: "https://docs.rsshub.app/routes/new-media#8264-lie-biao",
        source: ["/list/976"],
        target: "/8264/list/976",
      },
      {
        title: "瑜伽",
        docs: "https://docs.rsshub.app/routes/new-media#8264-lie-biao",
        source: ["/list/977"],
        target: "/8264/list/977",
      },
      {
        title: "服装",
        docs: "https://docs.rsshub.app/routes/new-media#8264-lie-biao",
        source: ["/list/209"],
        target: "/8264/list/209",
      },
      {
        title: "冲锋衣",
        docs: "https://docs.rsshub.app/routes/new-media#8264-lie-biao",
        source: ["/list/923"],
        target: "/8264/list/923",
      },
      {
        title: "抓绒衣",
        docs: "https://docs.rsshub.app/routes/new-media#8264-lie-biao",
        source: ["/list/924"],
        target: "/8264/list/924",
      },
      {
        title: "皮肤衣",
        docs: "https://docs.rsshub.app/routes/new-media#8264-lie-biao",
        source: ["/list/925"],
        target: "/8264/list/925",
      },
      {
        title: "速干衣",
        docs: "https://docs.rsshub.app/routes/new-media#8264-lie-biao",
        source: ["/list/926"],
        target: "/8264/list/926",
      },
      {
        title: "羽绒服",
        docs: "https://docs.rsshub.app/routes/new-media#8264-lie-biao",
        source: ["/list/927"],
        target: "/8264/list/927",
      },
      {
        title: "软壳",
        docs: "https://docs.rsshub.app/routes/new-media#8264-lie-biao",
        source: ["/list/929"],
        target: "/8264/list/929",
      },
      {
        title: "户外鞋",
        docs: "https://docs.rsshub.app/routes/new-media#8264-lie-biao",
        source: ["/list/211"],
        target: "/8264/list/211",
      },
      {
        title: "登山鞋",
        docs: "https://docs.rsshub.app/routes/new-media#8264-lie-biao",
        source: ["/list/928"],
        target: "/8264/list/928",
      },
      {
        title: "徒步鞋",
        docs: "https://docs.rsshub.app/routes/new-media#8264-lie-biao",
        source: ["/list/930"],
        target: "/8264/list/930",
      },
      {
        title: "越野跑鞋",
        docs: "https://docs.rsshub.app/routes/new-media#8264-lie-biao",
        source: ["/list/933"],
        target: "/8264/list/933",
      },
      {
        title: "溯溪鞋",
        docs: "https://docs.rsshub.app/routes/new-media#8264-lie-biao",
        source: ["/list/932"],
        target: "/8264/list/932",
      },
      {
        title: "登山杖",
        docs: "https://docs.rsshub.app/routes/new-media#8264-lie-biao",
        source: ["/list/220"],
        target: "/8264/list/220",
      },
      {
        title: "帐篷",
        docs: "https://docs.rsshub.app/routes/new-media#8264-lie-biao",
        source: ["/list/208"],
        target: "/8264/list/208",
      },
      {
        title: "睡袋",
        docs: "https://docs.rsshub.app/routes/new-media#8264-lie-biao",
        source: ["/list/212"],
        target: "/8264/list/212",
      },
      {
        title: "炉具",
        docs: "https://docs.rsshub.app/routes/new-media#8264-lie-biao",
        source: ["/list/792"],
        target: "/8264/list/792",
      },
      {
        title: "灯具",
        docs: "https://docs.rsshub.app/routes/new-media#8264-lie-biao",
        source: ["/list/218"],
        target: "/8264/list/218",
      },
      {
        title: "水具",
        docs: "https://docs.rsshub.app/routes/new-media#8264-lie-biao",
        source: ["/list/219"],
        target: "/8264/list/219",
      },
      {
        title: "面料",
        docs: "https://docs.rsshub.app/routes/new-media#8264-lie-biao",
        source: ["/list/222"],
        target: "/8264/list/222",
      },
      {
        title: "背包",
        docs: "https://docs.rsshub.app/routes/new-media#8264-lie-biao",
        source: ["/list/207"],
        target: "/8264/list/207",
      },
      {
        title: "防潮垫",
        docs: "https://docs.rsshub.app/routes/new-media#8264-lie-biao",
        source: ["/list/214"],
        target: "/8264/list/214",
      },
      {
        title: "电子导航",
        docs: "https://docs.rsshub.app/routes/new-media#8264-lie-biao",
        source: ["/list/216"],
        target: "/8264/list/216",
      },
      {
        title: "冰岩绳索",
        docs: "https://docs.rsshub.app/routes/new-media#8264-lie-biao",
        source: ["/list/215"],
        target: "/8264/list/215",
      },
      {
        title: "综合装备",
        docs: "https://docs.rsshub.app/routes/new-media#8264-lie-biao",
        source: ["/list/223"],
        target: "/8264/list/223",
      },
    ],
  },
  "12306.cn": {
    _name: "12306",
    kyfw: [
      {
        title: "售票信息",
        docs: "https://docs.rsshub.app/routes/travel#12306-shou-shu-piao-piao-xin-shen-xi",
        source: ["/", "/otn/leftTicket/init"],
        target: (params, url) => {
          const searchParams = new URL(url).searchParams
          const from = searchParams.get("fs").split(",")[0]
          const to = searchParams.get("ts").split(",")[0]
          const date = searchParams.get("date")

          return `/12306/${date}/${from}/${to}`
        },
      },
    ],
    www: [
      {
        title: "最新动态",
        docs: "https://docs.rsshub.app/routes/travel#12306-zui-cuo-xin-dong-tai",
        source: ["/", "/mormhweb/1/:id/index_fl.html"],
        target: "/12306/zxdt/:id",
      },
    ],
  },
  "0818tuan.com": {
    _name: "0818 团",
    ".": [
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/shopping#0818-tuan",
        source: ["/:listId", "/"],
        target: (params) =>
          `/0818tuan${params.listId ? "/" + params.listId.replace("list-", "").replace("-0.html", "") : ""}`,
      },
    ],
  },
  "141jav.com": {
    _name: "141JAV",
    ".": [
      {
        title: "今日种子",
        docs: "https://docs.rsshub.app/routes/multimedia#141jav",
        source: "/",
        target: (params, url, document) => {
          const today = document
            .querySelector("div.card.mb-1.card-overview")
            .getAttribute("data-date")
            .replace(/-/g, "")
          return `/141jav/day/${today}`
        },
      },
      {
        title: "今日演员",
        docs: "https://docs.rsshub.app/routes/multimedia#141jav",
        source: "/",
        target: (params, url, document) => {
          const star = document
            .querySelector("div.card-content > div > a")
            .getAttribute("href")
          return `/141jav${star}`
        },
      },
      {
        title: "页面种子",
        docs: "https://docs.rsshub.app/routes/multimedia#141jav",
        source: ["/:type", "/:type/:key", "/:type/:key/:morekey"],
        target: (params, url, document) => {
          const itype =
            params.morekey === undefined
              ? params.type
              : params.type === "tag"
                ? "tag"
                : "day"
          let ikey = `${itype === "day" ? params.type : ""}${params.key || ""}${itype === "tag" && params.morekey !== undefined ? "%2F" : ""}${params.morekey || ""}`
          if (ikey === "" && itype === "tag") {
            ikey = document
              .querySelector("div.thumbnail.is-inline > a")
              .getAttribute("href")
              .replace("/tag/", "")
              .replace(/\//g, "%2F")
          } else if (ikey === "" && itype === "actress") {
            ikey = document
              .querySelector("div.card > a")
              .getAttribute("href")
              .replace("/actress/", "")
          }
          return `/141jav/${itype}/${ikey}`
        },
      },
    ],
  },
  "141ppv.com": {
    _name: "141JAV",
    ".": [
      {
        title: "今日种子",
        docs: "https://docs.rsshub.app/routes/multimedia#141ppv",
        source: "/",
        target: (params, url, document) => {
          const today = document
            .querySelector("div.card.mb-1.card-overview")
            .getAttribute("data-date")
            .replace(/-/g, "")
          return `/141ppv/day/${today}`
        },
      },
      {
        title: "今日演员",
        docs: "https://docs.rsshub.app/routes/multimedia#141ppv",
        source: "/",
        target: (params, url, document) => {
          const star = document
            .querySelector("div.card-content > div > a")
            .getAttribute("href")
          return `/141ppv${star}`
        },
      },
      {
        title: "页面种子",
        docs: "https://docs.rsshub.app/routes/multimedia#141ppv",
        source: ["/:type", "/:type/:key", "/:type/:key/:morekey"],
        target: (params, url, document) => {
          const itype =
            params.morekey === undefined
              ? params.type
              : params.type === "tag"
                ? "tag"
                : "day"
          let ikey = `${itype === "day" ? params.type : ""}${params.key || ""}${itype === "tag" && params.morekey !== undefined ? "%2F" : ""}${params.morekey || ""}`
          if (ikey === "" && itype === "tag") {
            ikey = document
              .querySelector("div.thumbnail.is-inline > a")
              .getAttribute("href")
              .replace("/tag/", "")
              .replace(/\//g, "%2F")
          } else if (ikey === "" && itype === "actress") {
            ikey = document
              .querySelector("div.card > a")
              .getAttribute("href")
              .replace("/actress/", "")
          }
          return `/141ppv/${itype}/${ikey}`
        },
      },
    ],
  },
  "18comic.org": {
    _name: "禁漫天堂",
    ".": [
      {
        title: "成人 A 漫",
        docs: "https://docs.rsshub.app/routes/anime#jin-man-tian-tang-cheng-ren-a-man",
        source: ["/"],
        target: "/18comic/:category?/:time?/:order?/:keyword?",
      },
      {
        title: "搜索",
        docs: "https://docs.rsshub.app/routes/anime#jin-man-tian-tang-sou-suo",
        source: ["/"],
        target: "/18comic/search/:option?/:category?:keyword?/:time?/:order?",
      },
      {
        title: "专辑",
        docs: "https://docs.rsshub.app/routes/anime#jin-man-tian-tang-zhuan-ji",
        source: ["/"],
        target: "/18comic/album/:id",
      },
      {
        title: "文庫",
        docs: "https://docs.rsshub.app/routes/anime#jin-man-tian-tang-wen-ku",
        source: ["/"],
        target: "/18comic/blogs/:category?",
      },
    ],
  },
  "18comic.vip": {
    _name: "禁漫天堂",
    ".": [
      {
        title: "成人 A 漫",
        docs: "https://docs.rsshub.app/routes/anime#jin-man-tian-tang-cheng-ren-a-man",
        source: ["/"],
        target: "/18comic/:category?/:time?/:order?/:keyword?",
      },
      {
        title: "搜索",
        docs: "https://docs.rsshub.app/routes/anime#jin-man-tian-tang-sou-suo",
        source: ["/"],
        target: "/18comic/search/:option?/:category?:keyword?/:time?/:order?",
      },
      {
        title: "专辑",
        docs: "https://docs.rsshub.app/routes/anime#jin-man-tian-tang-zhuan-ji",
        source: ["/"],
        target: "/18comic/album/:id",
      },
      {
        title: "文庫",
        docs: "https://docs.rsshub.app/routes/anime#jin-man-tian-tang-wen-ku",
        source: ["/"],
        target: "/18comic/blogs/:category?",
      },
    ],
  },
  "jmcomic.me": {
    _name: "禁漫天堂",
    ".": [
      {
        title: "成人 A 漫",
        docs: "https://docs.rsshub.app/routes/anime#jin-man-tian-tang-cheng-ren-a-man",
        source: ["/"],
        target: "/18comic/:category?/:time?/:order?/:keyword?",
      },
      {
        title: "搜索",
        docs: "https://docs.rsshub.app/routes/anime#jin-man-tian-tang-sou-suo",
        source: ["/"],
        target: "/18comic/search/:option?/:category?:keyword?/:time?/:order?",
      },
      {
        title: "专辑",
        docs: "https://docs.rsshub.app/routes/anime#jin-man-tian-tang-zhuan-ji",
        source: ["/"],
        target: "/18comic/album/:id",
      },
      {
        title: "文庫",
        docs: "https://docs.rsshub.app/routes/anime#jin-man-tian-tang-wen-ku",
        source: ["/"],
        target: "/18comic/blogs/:category?",
      },
    ],
  },
  "jmcomic1.me": {
    _name: "禁漫天堂",
    ".": [
      {
        title: "成人 A 漫",
        docs: "https://docs.rsshub.app/routes/anime#jin-man-tian-tang-cheng-ren-a-man",
        source: ["/"],
        target: "/18comic/:category?/:time?/:order?/:keyword?",
      },
      {
        title: "搜索",
        docs: "https://docs.rsshub.app/routes/anime#jin-man-tian-tang-sou-suo",
        source: ["/"],
        target: "/18comic/search/:option?/:category?:keyword?/:time?/:order?",
      },
      {
        title: "专辑",
        docs: "https://docs.rsshub.app/routes/anime#jin-man-tian-tang-zhuan-ji",
        source: ["/"],
        target: "/18comic/album/:id",
      },
      {
        title: "文庫",
        docs: "https://docs.rsshub.app/routes/anime#jin-man-tian-tang-wen-ku",
        source: ["/"],
        target: "/18comic/blogs/:category?",
      },
    ],
  },
  "jmcomic.rocks": {
    _name: "禁漫天堂",
    ".": [
      {
        title: "成人 A 漫",
        docs: "https://docs.rsshub.app/routes/anime#jin-man-tian-tang-cheng-ren-a-man",
        source: ["/"],
        target: "/18comic/:category?/:time?/:order?/:keyword?",
      },
      {
        title: "搜索",
        docs: "https://docs.rsshub.app/routes/anime#jin-man-tian-tang-sou-suo",
        source: ["/"],
        target: "/18comic/search/:option?/:category?:keyword?/:time?/:order?",
      },
      {
        title: "专辑",
        docs: "https://docs.rsshub.app/routes/anime#jin-man-tian-tang-zhuan-ji",
        source: ["/"],
        target: "/18comic/album/:id",
      },
      {
        title: "文庫",
        docs: "https://docs.rsshub.app/routes/anime#jin-man-tian-tang-wen-ku",
        source: ["/"],
        target: "/18comic/blogs/:category?",
      },
    ],
  },
  "jmcomic1.rocks": {
    _name: "禁漫天堂",
    ".": [
      {
        title: "成人 A 漫",
        docs: "https://docs.rsshub.app/routes/anime#jin-man-tian-tang-cheng-ren-a-man",
        source: ["/"],
        target: "/18comic/:category?/:time?/:order?/:keyword?",
      },
      {
        title: "搜索",
        docs: "https://docs.rsshub.app/routes/anime#jin-man-tian-tang-sou-suo",
        source: ["/"],
        target: "/18comic/search/:option?/:category?:keyword?/:time?/:order?",
      },
      {
        title: "专辑",
        docs: "https://docs.rsshub.app/routes/anime#jin-man-tian-tang-zhuan-ji",
        source: ["/"],
        target: "/18comic/album/:id",
      },
      {
        title: "文庫",
        docs: "https://docs.rsshub.app/routes/anime#jin-man-tian-tang-wen-ku",
        source: ["/"],
        target: "/18comic/blogs/:category?",
      },
    ],
  },
  "jmcomic.group": {
    _name: "禁漫天堂",
    ".": [
      {
        title: "成人 A 漫",
        docs: "https://docs.rsshub.app/routes/anime#jin-man-tian-tang-cheng-ren-a-man",
        source: ["/"],
        target: "/18comic/:category?/:time?/:order?/:keyword?",
      },
      {
        title: "搜索",
        docs: "https://docs.rsshub.app/routes/anime#jin-man-tian-tang-sou-suo",
        source: ["/"],
        target: "/18comic/search/:option?/:category?:keyword?/:time?/:order?",
      },
      {
        title: "专辑",
        docs: "https://docs.rsshub.app/routes/anime#jin-man-tian-tang-zhuan-ji",
        source: ["/"],
        target: "/18comic/album/:id",
      },
      {
        title: "文庫",
        docs: "https://docs.rsshub.app/routes/anime#jin-man-tian-tang-wen-ku",
        source: ["/"],
        target: "/18comic/blogs/:category?",
      },
    ],
  },
  "19lou.com": {
    _name: "19 楼",
    ".": [
      {
        title: "头条",
        docs: "https://docs.rsshub.app/routes/bbs#19-lou-tou-tiao",
        source: ["/"],
        target: (params, url) =>
          `/19lou/${new URL(url).toString().match(/\/\/(.*?)\.19lou/)[1]}`,
      },
    ],
    www: [
      {
        title: "头条",
        docs: "https://docs.rsshub.app/routes/bbs#19-lou-tou-tiao",
        source: ["/"],
        target: "/19lou/www",
      },
    ],
    jiaxing: [
      {
        title: "头条",
        docs: "https://docs.rsshub.app/routes/bbs#19-lou-tou-tiao",
        source: ["/"],
        target: "/19lou/jiaxing",
      },
    ],
  },
  "1point3acres.com": {
    _name: "一亩三分地",
    blog: [
      {
        title: "博客",
        docs: "https://docs.rsshub.app/routes/bbs#yi-mu-san-fen-di",
        source: ["/:category"],
        target: "/1point3acres/blog/:category?",
      },
    ],
    instant: [
      {
        title: "帖子",
        docs: "https://docs.rsshub.app/routes/bbs#yi-mu-san-fen-di",
        source: ["/"],
        target: "/1point3acres/thread/:type?/:order?",
      },
      {
        title: "分区",
        docs: "https://docs.rsshub.app/routes/bbs#yi-mu-san-fen-di",
        source: ["/section/:id", "/"],
        target: "/1point3acres/section/:id?/:type?/:order?",
      },
      {
        title: "标签",
        docs: "https://docs.rsshub.app/routes/bbs#yi-mu-san-fen-di",
        source: ["/section/:id", "/"],
        target: "/1point3acres/category/:id?/:type?/:order?",
      },
      {
        title: "用户主题帖",
        docs: "https://docs.rsshub.app/routes/bbs#yi-mu-san-fen-di",
        source: ["/profile/:id", "/"],
        target: "/1point3acres/user/:id/threads",
      },
      {
        title: "用户回帖",
        docs: "https://docs.rsshub.app/routes/bbs#yi-mu-san-fen-di",
        source: ["/profile/:id", "/"],
        target: "/1point3acres/user/:id/posts",
      },
    ],
    offer: [
      {
        title: "录取结果",
        docs: "https://docs.rsshub.app/routes/bbs#yi-mu-san-fen-di",
        source: ["/"],
        target: "/1point3acres/offer",
      },
    ],
  },
  "2cycd.com": {
    _name: "二次元虫洞",
    ".": [
      {
        title: "板块",
        docs: "https://docs.rsshub.app/routes/bbs#er-ci-yuan-chong-dong",
        source: "/:path",
        target: (params, url) => {
          let pid, sort
          const static_matched = params.path.match(/forum-(\d+)-\d+.html/)
          if (static_matched) {
            pid = static_matched[1]
          } else if (params.path === "forum.php") {
            pid = new URL(url).searchParams.get("fid")
            sort = new URL(url).searchParams.get("orderby")
          } else {
            return false
          }
          return `/2cycd/${pid}/${sort ? sort : "dateline"}`
        },
      },
    ],
  },
  "35photo.pro": {
    _name: "35PHOTO",
    ".": [
      {
        title: "New photos",
        docs: "https://docs.rsshub.app/routes/picture#35photo-new-photos",
        source: ["/new", "/"],
        target: "/35photo/new",
      },
      {
        title: "Featured photos",
        docs: "https://docs.rsshub.app/routes/picture#35photo-featured-photos",
        source: ["/new/actual", "/"],
        target: "/35photo/actual",
      },
      {
        title: "New interesting",
        docs: "https://docs.rsshub.app/routes/picture#35photo-new-interesting",
        source: ["/new/interesting", "/"],
        target: "/35photo/interesting",
      },
      {
        title: "Photos on the world map",
        docs: "https://docs.rsshub.app/routes/picture#35photo-photos-on-the-world-map",
        source: ["/new/map", "/"],
        target: "/35photo/map",
      },
      {
        title: "Genre",
        docs: "https://docs.rsshub.app/routes/picture#35photo-genre",
        source: ["/"],
        target: (params, url) =>
          `/35photo/genre/${url.match(/genre_(\d+)/)[1]}`,
      },
      {
        title: "Author",
        docs: "https://docs.rsshub.app/routes/picture#35photo-author",
        source: ["/:id", "/"],
        target: "/35photo/author/:id",
      },
    ],
  },
  "36kr.com": {
    _name: "36氪",
    ".": [
      {
        title: "资讯",
        docs: "https://docs.rsshub.app/routes/new-media#36kr-zi-xun",
        source: ["/information/:category", "/"],
        target: "/36kr/information/:category",
      },
      {
        title: "快讯",
        docs: "https://docs.rsshub.app/routes/new-media#36kr-kuai-xun",
        source: ["/newsflashes", "/"],
        target: "/36kr/newsflashes",
      },
      {
        title: "用户文章",
        docs: "https://docs.rsshub.app/routes/new-media#36kr-yong-hu-wen-zhang",
        source: ["/user/:id", "/"],
        target: "/36kr/user/:id",
      },
      {
        title: "主题文章",
        docs: "https://docs.rsshub.app/routes/new-media#36kr-zhu-ti-wen-zhang",
        source: ["/motif/:id", "/"],
        target: "/36kr/motif/:id",
      },
      {
        title: "专题文章",
        docs: "https://docs.rsshub.app/routes/new-media#36kr-zhuan-ti-wen-zhang",
        source: ["/topics/:id", "/"],
        target: "/36kr/topics/:id",
      },
      {
        title: "搜索文章",
        docs: "https://docs.rsshub.app/routes/new-media#36kr-sou-suo-wen-zhang",
        source: ["/search/articles/:keyword", "/"],
        target: "/36kr/search/articles/:keyword",
      },
      {
        title: "搜索快讯",
        docs: "https://docs.rsshub.app/routes/new-media#36kr-sou-suo-kuai-xun",
        source: ["/search/newsflashes/:keyword", "/"],
        target: "/36kr/search/newsflashes/:keyword",
      },
      {
        title: "资讯热榜",
        docs: "https://docs.rsshub.app/routes/new-media#36kr-zi-xun-re-bang",
        source: ["/hot-list/:category", "/"],
        target: "/36kr/hot-list/:category",
      },
    ],
  },
  "3dmgame.com": {
    _name: "3DMGame",
    ".": [
      {
        title: "新闻中心",
        docs: "https://docs.rsshub.app/routes/game#3dmgame",
        source: ["/news/:category?", "/news"],
        target: "/3dmgame/news/:category?",
      },
      {
        title: "游戏资讯",
        docs: "https://docs.rsshub.app/routes/game#3dmgame",
        source: ["/games/:name/:type"],
        target: "/3dmgame/:name/:type?",
      },
    ],
  },
  "423down.com": {
    _name: "423down",
    www: [
      {
        title: "首页",
        docs: "https://docs.rsshub.app/routes/bbs#423down",
        source: "/",
        target: "/423down/index/all",
      },
      {
        title: "安卓软件",
        docs: "https://docs.rsshub.app/routes/bbs#423down",
        source: "/:type",
        target: (params) => {
          if (params.type === "apk") {
            return "/423down/android/apk"
          }
        },
      },
      {
        title: "原创软件",
        docs: "https://docs.rsshub.app/routes/bbs#423down",
        source: "/:type",
        target: (params) => {
          if (params.type === "zd423") {
            return "/423down/computer/originalsoft"
          }
        },
      },
      {
        title: "媒体播放",
        docs: "https://docs.rsshub.app/routes/bbs#423down",
        source: "/:type",
        target: (params) => {
          if (params.type === "multimedia") {
            return "/423down/computer/multimedia"
          }
        },
      },
      {
        title: "网页浏览",
        docs: "https://docs.rsshub.app/routes/bbs#423down",
        source: "/:type",
        target: (params) => {
          if (params.type === "browser") {
            return "/423down/computer/browser"
          }
        },
      },
      {
        title: "图形图像",
        docs: "https://docs.rsshub.app/routes/bbs#423down",
        source: "/:type",
        target: (params) => {
          if (params.type === "image") {
            return "/423down/computer/image"
          }
        },
      },
      {
        title: "聊天软件",
        docs: "https://docs.rsshub.app/routes/bbs#423down",
        source: "/:type",
        target: (params) => {
          if (params.type === "im") {
            return "/423down/computer/im"
          }
        },
      },
      {
        title: "办公软件",
        docs: "https://docs.rsshub.app/routes/bbs#423down",
        source: "/:type",
        target: (params) => {
          if (params.type === "work") {
            return "/423down/computer/work"
          }
        },
      },
      {
        title: "上传下载",
        docs: "https://docs.rsshub.app/routes/bbs#423down",
        source: "/:type",
        target: (params) => {
          if (params.type === "down") {
            return "/423down/computer/down"
          }
        },
      },
      {
        title: "系统辅助",
        docs: "https://docs.rsshub.app/routes/bbs#423down",
        source: "/:type",
        target: (params) => {
          if (params.type === "systemsoft") {
            return "/423down/computer/systemsoft"
          }
        },
      },
      {
        title: "系统必备",
        docs: "https://docs.rsshub.app/routes/bbs#423down",
        source: "/:type",
        target: (params) => {
          if (params.type === "systemplus") {
            return "/423down/computer/systemplus"
          }
        },
      },
      {
        title: "安全软件",
        docs: "https://docs.rsshub.app/routes/bbs#423down",
        source: "/:type",
        target: (params) => {
          if (params.type === "security") {
            return "/423down/computer/security"
          }
        },
      },
      {
        title: "补丁相关",
        docs: "https://docs.rsshub.app/routes/bbs#423down",
        source: "/:type",
        target: (params) => {
          if (params.type === "patch") {
            return "/423down/computer/patch"
          }
        },
      },
      {
        title: "硬件相关",
        docs: "https://docs.rsshub.app/routes/bbs#423down",
        source: "/:type",
        target: (params) => {
          if (params.type === "hardwork") {
            return "/423down/computer/hardware"
          }
        },
      },
      {
        title: "windows 11",
        docs: "https://docs.rsshub.app/routes/bbs#423down",
        source: "/:type",
        target: (params) => {
          if (params.type === "win11") {
            return "/423down/os/win11"
          }
        },
      },
      {
        title: "windows 10",
        docs: "https://docs.rsshub.app/routes/bbs#423down",
        source: "/:type",
        target: (params) => {
          if (params.type === "win10") {
            return "/423down/os/win10"
          }
        },
      },
      {
        title: "windows 7",
        docs: "https://docs.rsshub.app/routes/bbs#423down",
        source: "/:type",
        target: (params) => {
          if (params.type === "win7") {
            return "/423down/os/win7"
          }
        },
      },
      {
        title: "windows xp",
        docs: "https://docs.rsshub.app/routes/bbs#423down",
        source: "/:type",
        target: (params) => {
          if (params.type === "winxp") {
            return "/423down/os/winxp"
          }
        },
      },
      {
        title: "windows pe",
        docs: "https://docs.rsshub.app/routes/bbs#423down",
        source: "/:type",
        target: (params) => {
          if (params.type === "winpe") {
            return "/423down/os/winpe"
          }
        },
      },
    ],
  },
  "4ksj.com": {
    _name: "4k 世界",
    ".": [
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/multimedia#4k-shi-jie-fen-lei",
        source: ["/forum-2-1.html", "/"],
        target: (params, url) =>
          `/4ksj/forum/${new URL(url).href.match(/\/forum-([\w-]+)\.html/)[1]}`,
      },
    ],
  },
  "500px.com.cn": {
    _name: "500px 摄影社区",
    ".": [
      {
        title: "部落影集",
        docs: "https://docs.rsshub.app/routes/picture#500px-she-ying-she-qu",
        source: ["/page/tribe/detail"],
        target: (_, url) =>
          `/500px/tribe/set/${url.searchParams.get("tribeId")}`,
      },
      {
        title: "摄影师作品",
        docs: "https://docs.rsshub.app/routes/picture#500px-she-ying-she-qu",
        source: [
          "/:id",
          "/community/user-details/:id",
          "/community/user-details/:id/*",
        ],
        target: "/500px/user/works/:id",
      },
    ],
  },
  "50forum.org.cn": {
    _name: "经济 50 人论坛",
    ".": [
      {
        title: "专家文章",
        docs: "https://docs.rsshub.app/routes/study#jing-ji-50-ren-lun-tan",
        source: ["/home/article/index/category/zhuanjia.html", "/"],
        target: "/50forum",
      },
    ],
  },
  "52hrtt.com": {
    _name: "52hrtt 华人头条",
    ".": [
      {
        title: "新闻",
        docs: "https://docs.rsshub.app/routes/new-media#52hrtt-hua-ren-tou-tiao",
        source: "/",
        target: (_params, url) =>
          `/52hrtt/${new URL(url).searchParams.get("infoTypeId")}`,
      },
      {
        title: "专题",
        docs: "https://docs.rsshub.app/routes/new-media#52hrtt-hua-ren-tou-tiao",
        source: "/global/n/w/symposium/:id",
        target: "/52hrtt/symposium/:id",
      },
    ],
  },
  "5eplay.com": {
    _name: "5EPLAY",
    csgo: [
      {
        title: "新闻列表",
        docs: "https://docs.rsshub.app/routes/game#5eplay-xin-wen-lie-biao",
        source: ["/", "/article"],
        target: "/5eplay/article",
      },
    ],
  },
  "6parkbbs.com": {
    _name: "留园网",
    club: [
      {
        title: "分站",
        docs: "https://docs.rsshub.app/routes/new-media#liu-yuan-wang",
        source: ["/:id/index.php", "/"],
        target: "/6park/:id?",
      },
      {
        title: "精华区",
        docs: "https://docs.rsshub.app/routes/new-media#liu-yuan-wang",
        source: ["/:id/index.php", "/"],
        target: "/6park/:id/gold",
      },
      {
        title: "搜索关键字",
        docs: "https://docs.rsshub.app/routes/new-media#liu-yuan-wang",
        source: ["/:id/index.php", "/"],
        target: (params, url) =>
          `/6park/:id/keywords/${new URL(url).searchParams.get("keywords")}`,
      },
    ],
    local: [
      {
        title: "新闻栏目",
        docs: "https://docs.rsshub.app/routes/new-media#liu-yuan-wang",
        source: ["/index.php", "/"],
        target: (params, url) =>
          `/6park/news/local/${new URL(url).searchParams.get("type_id")}`,
      },
      {
        title: "头条精选",
        docs: "https://docs.rsshub.app/routes/new-media#liu-yuan-wang",
        source: ["/index.php", "/"],
        target: "/6park/news/newspark/gold",
      },
      {
        title: "新闻搜索",
        docs: "https://docs.rsshub.app/routes/new-media#liu-yuan-wang",
        source: ["/index.php", "/"],
        target: (params, url) =>
          `/6park/news/newspark/keywords/${new URL(url).searchParams.get("keywords")}`,
      },
    ],
    newspark: [
      {
        title: "新闻栏目",
        docs: "https://docs.rsshub.app/routes/new-media#liu-yuan-wang",
        source: ["/newspark/index.php", "/"],
        target: (params, url) =>
          `/6park/news/newspark/${new URL(url).searchParams.get("type")}`,
      },
      {
        title: "头条精选",
        docs: "https://docs.rsshub.app/routes/new-media#liu-yuan-wang",
        source: ["/newspark/index.php", "/"],
        target: "/6park/news/newspark/gold",
      },
      {
        title: "新闻搜索",
        docs: "https://docs.rsshub.app/routes/new-media#liu-yuan-wang",
        source: ["/newspark/index.php", "/"],
        target: (params, url) =>
          `/6park/news/newspark/keywords/${new URL(url).searchParams.get("keywords")}`,
      },
    ],
  },
  "hao6v.cc": {
    _name: "6v电影",
    ".": [
      {
        title: "最新电影",
        docs: "https://docs.rsshub.app/routes/multimedia#6v-dian-ying",
        source: ["/", "/gvod/zx.html"],
        target: "/6v123/latestMovies",
      },
      {
        title: "最新电视剧",
        docs: "https://docs.rsshub.app/routes/multimedia#6v-dian-ying",
        source: ["/", "/gvod/dsj.html"],
        target: "/6v123/latestTVSeries",
      },
    ],
  },
  "hao6v.tv": {
    _name: "6v电影",
    ".": [
      {
        title: "最新电影",
        docs: "https://docs.rsshub.app/routes/multimedia#6v-dian-ying",
        source: ["/", "/gvod/zx.html"],
        target: "/6v123/latestMovies",
      },
      {
        title: "最新电视剧",
        docs: "https://docs.rsshub.app/routes/multimedia#6v-dian-ying",
        source: ["/", "/gvod/dsj.html"],
        target: "/6v123/latestTVSeries",
      },
    ],
  },
  "hao6v.com": {
    _name: "6v电影",
    ".": [
      {
        title: "最新电影",
        docs: "https://docs.rsshub.app/routes/multimedia#6v-dian-ying",
        source: ["/", "/gvod/zx.html"],
        target: "/6v123/latestMovies",
      },
      {
        title: "最新电视剧",
        docs: "https://docs.rsshub.app/routes/multimedia#6v-dian-ying",
        source: ["/", "/gvod/dsj.html"],
        target: "/6v123/latestTVSeries",
      },
    ],
  },
  "78dm.net": {
    _name: "78动漫",
    ".": [
      {
        title: "新品速递",
        docs: "https://docs.rsshub.app/routes/anime#78-dong-man-xin-pin-su-di",
        source: ["/news", "/"],
        target: (params, url) =>
          `/78dm${new URL(url)
            .toString()
            .match(/78dm\.net(.*)$/)[1]
            .replace(/\.html$/, "")}`,
      },
      {
        title: "精彩评测",
        docs: "https://docs.rsshub.app/routes/anime#78-dong-man-jing-cai-ping-ce",
        source: ["/eval_list", "/"],
        target: (params, url) =>
          `/78dm${new URL(url)
            .toString()
            .match(/78dm\.net(.*)$/)[1]
            .replace(/\.html$/, "")}`,
      },
      {
        title: "新品速递",
        docs: "https://docs.rsshub.app/routes/anime#78-dong-man-hao-tie-tui-jian",
        source: ["/ht_list", "/"],
        target: (params, url) =>
          `/78dm${new URL(url)
            .toString()
            .match(/78dm\.net(.*)$/)[1]
            .replace(/\.html$/, "")}`,
      },
    ],
  },
  "7mmtv.tv": {
    _name: "7mmtv.tv",
    ".": [
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/multimedia#7mmtv-fen-lei",
        source: ["/"],
        target: (params, url) =>
          `/7mmtv/${new URL(url).toString().match(/\/(en|ja|ko|zh)\/([\w\d-]+\/){0,2}/)[1]}`,
      },
      {
        title: "制作商",
        docs: "https://docs.rsshub.app/routes/multimedia#7mmtv-zhi-zuo-shang",
        source: ["/"],
        target: (params, url) =>
          `/7mmtv/${new URL(url).toString().match(/\/(en|ja|ko|zh)\/([\w\d-]+\/){0,2}/)[1]}`,
      },
    ],
  },
  "8kcosplay.com": {
    _name: "8KCosplay",
    ".": [
      {
        title: "最新",
        docs: "https://docs.rsshub.app/routes/picture#8kcosplay",
        source: ["/"],
        target: "/8kcos",
      },
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/picture#8kcosplay",
        source: ["/category/:cat*"],
        target: (params, url) => `/8kcos/cat/${new URL(url).pathname}`,
      },
      {
        title: "标签",
        docs: "https://docs.rsshub.app/routes/picture#8kcosplay",
        source: ["/tag/:tag"],
        target: "/8kcos/tag/:tag",
      },
    ],
  },
  "8world.com": {
    _name: "8视界",
    ".": [
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/new-media#8-shi-jie-fen-lei",
        source: ["/:category", "/"],
        target: "/8world/:category?",
      },
      {
        title: "标签",
        docs: "https://docs.rsshub.app/routes/new-media#8-shi-jie-biao-qian",
        source: ["/topic/:id", "/"],
        target: "/8world/topic/:id",
      },
    ],
  },
  "91porn.com": {
    _name: "91porn",
    ".": [
      {
        title: "今日排行",
        docs: "https://docs.rsshub.app/routes/multimedia#91porn",
        source: ["/index.php"],
        target: "/91porn",
      },
      {
        title: "作者",
        docs: "https://docs.rsshub.app/routes/multimedia#91porn",
        source: ["/uvideos.php"],
        target: (_params, url) =>
          `/91porn/author/${new URL(url).searchParams.get("UID")}`,
      },
    ],
  },
  "95mm.org": {
    _name: "MM范",
    ".": [
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/picture#mm-fan-fen-lei",
        source: "/",
        target: "/95mm/tab/:tab?",
      },
      {
        title: "标签",
        docs: "https://docs.rsshub.app/routes/picture#mm-fan-biao-qian",
        source: "/",
        target: "/95mm/tag/:tag",
      },
      {
        title: "集合",
        docs: "https://docs.rsshub.app/routes/picture#mm-fan-ji-he",
        source: "/",
        target: "/95mm/category/:category",
      },
    ],
  },
  "9to5toys.com": {
    _name: "9to5",
    ".": [
      {
        title: "Toys 分站",
        docs: "https://docs.rsshub.app/routes/new-media#9to5",
        source: ["/", "/guides/:tag"],
        target: "/9to5/toys/:tag?",
      },
    ],
  },
  "9to5mac.com": {
    _name: "9to5",
    ".": [
      {
        title: "Mac 分站",
        docs: "https://docs.rsshub.app/routes/new-media#9to5",
        source: ["/", "/guides/:tag"],
        target: "/9to5/mac/:tag?",
      },
    ],
  },
  "9to5google.com": {
    _name: "9to5",
    ".": [
      {
        title: "Google 分站",
        docs: "https://docs.rsshub.app/routes/new-media#9to5",
        source: ["/", "/guides/:tag"],
        target: "/9to5/google/:tag?",
      },
    ],
  },
  "aamacau.com": {
    _name: "論盡媒體 AllAboutMacau Media",
    ".": [
      {
        title: "话题",
        docs: "https://docs.rsshub.app/routes/new-media#lun-jin-mei-ti-allaboutmacau-media-hua-ti",
        source: ["/"],
        target: "/:category?/:id?",
      },
    ],
  },
  "abc.net.au": {
    _name: "ABC News",
    ".": [
      {
        title: "Channel & Topic",
        docs: "https://docs.rsshub.app/routes/traditional-media#abc-news",
        source: ["/:category*"],
        target: "/abc/:category",
      },
    ],
  },
  "abmedia.io": {
    _name: "abmedia.io",
    www: [
      {
        title: "首页最新新闻",
        docs: "https://docs.rsshub.app/routes/new-media#lian-xin-wen-abmedia-shou-ye-zui-xin-xin-wen",
        source: ["/"],
        target: "/abmedia/index",
      },
      {
        title: "频道",
        docs: "https://docs.rsshub.app/routes/new-media#lian-xin-wen-abmedia-lei-bie",
        source: ["/category/:catehory"],
        target: "/abmedia/:category",
      },
    ],
  },
  "abskoop.com": {
    _name: "A姐分享",
    nsfw: [
      {
        title: "NSFW 存档列表",
        docs: "https://docs.rsshub.app/routes/multimedia#a-jie-fen-xiang",
        source: ["/articles-archive", "/"],
        target: "/abskoop",
      },
    ],
  },
  "ahhhhfs.com": {
    _name: "A姐分享",
    ".": [
      {
        title: "存档列表",
        docs: "https://docs.rsshub.app/routes/multimedia#a-jie-fen-xiang",
        source: ["/"],
        target: "/abskoop",
      },
    ],
  },
  "acfun.cn": {
    _name: "AcFun",
    www: [
      {
        title: "番剧",
        docs: "https://docs.rsshub.app/routes/anime#acfun-fan-ju",
        source: "/bangumi/:id",
        target: (params) => `/acfun/bangumi/${params.id.replace("aa", "")}`,
      },
      {
        title: "用户投稿",
        docs: "https://docs.rsshub.app/routes/anime#acfun-yong-hu-tou-gao",
        source: "/u/:id",
        target: "/acfun/user/video/:id",
      },
      {
        title: "文章",
        docs: "https://docs.rsshub.app/routes/anime#acfun",
        source: "/v/:categoryId/index.htm",
        target: (params) =>
          `/acfun/article/${params.categoryId.replace("list", "")}`,
      },
    ],
  },
  "acg17.com": {
    _name: "ACG17",
    ".": [
      {
        title: "全部文章",
        docs: "https://docs.rsshub.app/routes/anime#acg17",
        source: ["/post"],
        target: "/acg17/post/all",
      },
    ],
  },
  "acs.org": {
    _name: "American Chemistry Society",
    pubs: [
      {
        title: "Journal",
        docs: "https://docs.rsshub.app/routes/journal#american-chemistry-society",
        source: ["/journal/:id", "/"],
        target: "/acs/journal/:id",
      },
    ],
  },
  "aeaweb.org": {
    _name: "American Economic Association",
    ".": [
      {
        title: "Journal",
        docs: "https://docs.rsshub.app/routes/journal#american-economic-association-journal",
        source: ["/journals/:id", "/"],
        target: "/aeaweb/:id",
      },
    ],
  },
  "aeon.co": {
    _name: "AEON",
    aeon: [
      {
        title: "Types (Essays, Videos, or Audio)",
        docs: "https://docs.rsshub.app/routes/new-media##aeon",
        source: ["/:type"],
        target: "/aeon/:type",
      },
      {
        title: "Category",
        docs: "https://docs.rsshub.app/routes/new-media##aeon",
        source: ["/:category"],
        target: "/aeon/category/:category",
      },
    ],
  },
  "agemys.cc": {
    _name: "AGE动漫",
    ".": [
      {
        title: "最近更新",
        docs: "https://docs.rsshub.app/routes/anime#age-dong-man",
        source: ["/update", "/"],
        target: "/agefans/update",
      },
      {
        title: "番剧详情",
        docs: "https://docs.rsshub.app/routes/anime#age-dong-man",
        source: ["/detail/:id"],
        target: "/agefans/detail/:id",
      },
    ],
  },
  "agemys.org": {
    _name: "AGE动漫",
    ".": [
      {
        title: "最近更新",
        docs: "https://docs.rsshub.app/routes/anime#age-dong-man",
        source: ["/update", "/"],
        target: "/agefans/update",
      },
      {
        title: "番剧详情",
        docs: "https://docs.rsshub.app/routes/anime#age-dong-man",
        source: ["/detail/:id"],
        target: "/agefans/detail/:id",
      },
    ],
  },
  "aotter.net": {
    _name: "電獺少女",
    agirls: [
      {
        title: "分類",
        docs: "https://docs.rsshub.app/routes/new-media##dian-ta-shao-nu",
        source: ["/posts/:category"],
        target: "/agirls/:category",
      },
      {
        title: "精選主題列表",
        docs: "https://docs.rsshub.app/routes/new-media##dian-ta-shao-nu",
        source: ["/", "/topic"],
        target: "/agirls/topic_list",
      },
      {
        title: "精选主题",
        docs: "https://docs.rsshub.app/routes/new-media##dian-ta-shao-nu",
        source: ["/topic/:topic"],
        target: "/agirls/topic/:topic",
      },
    ],
  },
  "github.io": {
    _name: "GitHub",
    agorahub: [
      {
        title: "共和報",
        docs: "https://docs.rsshub.app/routes/new-media#ag0ra",
        source: ["/pen0"],
        target: "/agora0/pen0",
      },
    ],
  },
  "gitlab.io": {
    _name: "GitLab",
    agora0: [
      {
        title: "零博客",
        docs: "https://docs.rsshub.app/routes/new-media#ag0ra",
        source: ["/blog/:category", "/"],
        target: "/agora0/:category",
      },
    ],
  },
  "ahjzu.edu.cn": {
    _name: "安徽建筑大学",
    news: [
      {
        title: "通知公告",
        docs: "https://docs.rsshub.app/routes/university#an-hui-jian-zhu-da-xue",
        source: "/20/list.htm",
        target: "/ahjzu/news",
      },
    ],
  },
  "aicaijing.com": {
    _name: "AI 财经社",
    www: [
      {
        title: "最新文章",
        docs: "https://docs.rsshub.app/routes/finance#ai-cai-jing-she-zui-xin-wen-zhang",
        source: ["/"],
        target: "/aicaijing/latest",
      },
      {
        title: "封面文章",
        docs: "https://docs.rsshub.app/routes/finance#ai-cai-jing-she-feng-mian-wen-zhang",
        source: ["/"],
        target: "/aicaijing/cover",
      },
      {
        title: "推荐资讯",
        docs: "https://docs.rsshub.app/routes/finance#ai-cai-jing-she-tui-jian-zi-xun",
        source: ["/"],
        target: "/aicaijing/recommend",
      },
      {
        title: "热点 & 深度",
        docs: "https://docs.rsshub.app/routes/finance#ai-cai-jing-she-re-dian-shen-du",
        source: ["/information/:id", "/"],
        target: "/aicaijing/information/:id?",
      },
    ],
  },
  "aiea.org": {
    _name: "Asian Innovation and Entrepreneurship Association",
    www: [
      {
        title: "Seminar Series",
        docs: "https://docs.rsshub.app/routes/study#AIEA-Seminar-Series",
        source: ["/0504", "/"],
        target: "/aiea/seminars/upcoming",
      },
    ],
  },
  aijishu: {
    _name: "极术社区",
    www: [
      {
        title: "频道",
        docs: "https://docs.rsshub.app/routes/programming#ji-shu-she-qu",
        source: ["/channel/:name"],
        target: "/aijishu/channel/:name",
      },
      {
        title: "用户",
        docs: "https://docs.rsshub.app/routes/programming#ji-shu-she-qu",
        source: ["/u/:name"],
        target: "/aijishu/u/:name",
      },
      {
        title: "专栏",
        docs: "https://docs.rsshub.app/routes/programming#ji-shu-she-qu",
        source: ["/blog/:name"],
        target: "/aijishu/blog/:name",
      },
    ],
  },
  "ainvest.com": {
    _name: "AInvest",
    ".": [
      {
        title: "Latest Article",
        docs: "https://docs.rsshub.app/routes/finance#ainvest",
        source: ["/news"],
        target: "/ainvest/article",
      },
      {
        title: "Latest News",
        docs: "https://docs.rsshub.app/routes/finance#ainvest",
        source: ["/news"],
        target: "/ainvest/news",
      },
    ],
  },
  "aip.org": {
    _name: "American Institute of Physics",
    pubs: [
      {
        title: "Journal",
        docs: "https://docs.rsshub.app/routes/journal#american-institute-of-physics",
        source: "/:pub/:jrn",
        target: "/aip/:pub/:jrn",
      },
    ],
  },
  "airchina.com.cn": {
    _name: "中国国际航空公司",
    www: [
      {
        title: "服务公告",
        docs: "https://docs.rsshub.app/routes/travel#zhong-guo-guo-ji-hang-kong-gong-si",
        source: "/",
        target: "/airchina/announcement",
      },
    ],
  },
  "aisixiang.com": {
    _name: "爱思想",
    ".": [
      {
        title: "栏目",
        docs: "https://docs.rsshub.app/routes/reading#ai-si-xiang",
        source: ["/data/search", "/"],
        target: (params, url) =>
          `/aisixiang/column/${new URL(url).searchParams.get("column")}`,
      },
      {
        title: "专题",
        docs: "https://docs.rsshub.app/routes/reading#ai-si-xiang",
        source: ["/zhuanti", "/"],
        target: (params, url) =>
          `/aisixiang/zhuanti/${new URL(url).href.match(/\/zhuanti\/(.*?)\.html/)[1]}`,
      },
      {
        title: "排行",
        docs: "https://docs.rsshub.app/routes/reading#ai-si-xiang",
        source: ["/toplist", "/"],
        target: (params, url) => {
          const id = new URL(url).searchParams.get("id")
          const period = new URL(url).searchParams.get("period")
          return `/aisixiang/toplist${id ? `/${id}${(id === "1" || !id) && period ? `/${period}` : ""}` : ""}`
        },
      },
      {
        title: "思想库（专栏）",
        docs: "https://docs.rsshub.app/routes/reading#ai-si-xiang",
        source: ["/thinktank", "/"],
        target: (params, url) =>
          `/aisixiang/thinktank/${new URL(url).href.match(/thinktank\/(.*)\.html/)[1]}`,
      },
    ],
  },
  "ajmide.com": {
    _name: "阿基米德FM",
    m: [
      {
        title: "播客",
        docs: "https://docs.rsshub.app/routes/multimedia#a-ji-mi-de-fm-bo-ke",
        source: ["/m/brand"],
        target: (_, url) => {
          const id = new URL(url).searchParams.get("id")
          return `/ajmide/${id}`
        },
      },
    ],
  },
  "aliresearch.com": {
    _name: "阿里研究院",
    ".": [
      {
        title: "资讯",
        docs: "https://docs.rsshub.app/routes/new-media#a-li-yan-jiu-yuan",
        source: ["/cn/information", "/"],
        target: "/aliresearch/information",
      },
    ],
  },
  "alistapart.com": {
    _name: "A List Apart",
    ".": [
      {
        title: "Articles",
        docs: "https://docs.rsshub.app/routes/en/programming#a-list-apart",
        source: ["/articles/"],
        target: "/alistapart",
      },
      {
        title: "Topics",
        docs: "https://docs.rsshub.app/routes/en/programming#a-list-apart",
        source: ["/blog/topic/:topic"],
        target: "/alistapart/:topic",
      },
    ],
  },
  "aliyun.com": {
    _name: "阿里云",
    developer: [
      {
        title: "开发者社区 - 主题",
        docs: "https://docs.rsshub.app/routes/programming#a-li-yun",
        source: ["/group/:type"],
        target: "/aliyun/developer/group/:type",
      },
    ],
    help: [
      {
        title: "公告",
        docs: "https://docs.rsshub.app/routes/programming#a-li-yun",
        source: ["/noticelist/:type", "/"],
        target: (params) =>
          `/aliyun/notice${params.type ? "/" + params.type.replace(".html", "") : ""}`,
      },
    ],
  },
  "taobao.org": {
    _name: "阿里云",
    mysql: [
      {
        title: "数据库内核月报",
        docs: "https://docs.rsshub.app/routes/programming#a-li-yun",
        source: ["/monthly", "/"],
        target: "/aliyun/database_month",
      },
    ],
  },
  "aliyundrive.com": {
    _name: "阿里云盘",
    www: [
      {
        title: "文件列表",
        docs: "https://docs.rsshub.app/routes/programming#a-li-yun-pan",
        source: ["/s/:share_id", "/s/:share_id/folder/:parent_file_id"],
        target: "/aliyundrive/files/:share_id/:parent_file_id?",
      },
    ],
  },
  "aljazeera.com": {
    _name: "Aljazeera 半岛电视台",
    ".": [
      {
        title: "News",
        docs: "https://docs.rsshub.app/routes/traditional-media#aljazeera-ban-dao-dian-shi-tai-xin-wen",
        source: ["/:category", "/"],
        target: "/aljazeera/english/:category",
      },
      {
        title: "Tag",
        docs: "https://docs.rsshub.app/routes/traditional-media#aljazeera-ban-dao-dian-shi-tai-biao-qian",
        source: ["/tag/:id", "/"],
        target: "/aljazeera/english/tag/:id",
      },
      {
        title: "Official RSS",
        docs: "https://docs.rsshub.app/routes/traditional-media#aljazeera-ban-dao-dian-shi-tai-guan-fang-rss",
        source: ["/xml/rss/all.xml", "/"],
        target: "/aljazeera/english/rss",
      },
    ],
  },
  "aljazeera.net": {
    _name: "Aljazeera 半岛电视台",
    ".": [
      {
        title: "News",
        docs: "https://docs.rsshub.app/routes/traditional-media#aljazeera-ban-dao-dian-shi-tai-xin-wen",
        source: ["/:category", "/"],
        target: "/aljazeera/arbric/:category",
      },
      {
        title: "Tag",
        docs: "https://docs.rsshub.app/routes/traditional-media#aljazeera-ban-dao-dian-shi-tai-biao-qian",
        source: ["/tag/:id", "/"],
        target: "/aljazeera/arbric/tag/:id",
      },
      {
        title: "Official RSS",
        docs: "https://docs.rsshub.app/routes/traditional-media#aljazeera-ban-dao-dian-shi-tai-guan-fang-rss",
        source: ["/rss", "/"],
        target: "/aljazeera/arbric/rss",
      },
    ],
    chinese: [
      {
        title: "新闻",
        docs: "https://docs.rsshub.app/routes/traditional-media#aljazeera-ban-dao-dian-shi-tai-xin-wen",
        source: ["/:category", "/"],
        target: "/aljazeera/chinese/:category",
      },
      {
        title: "标签",
        docs: "https://docs.rsshub.app/routes/traditional-media#aljazeera-ban-dao-dian-shi-tai-biao-qian",
        source: ["/tag/:id", "/"],
        target: "/aljazeera/chinese/tag/:id",
      },
    ],
  },
  "allrecode.com": {
    _name: "重构",
    ".": [
      {
        title: "推荐",
        docs: "https://docs.rsshub.app/routes/news-media#chong-gou-tui-jian",
        source: ["/recommends", "/"],
        target: "/allrecode/recommends",
      },
      {
        title: "快讯",
        docs: "https://docs.rsshub.app/routes/news-media#chong-gou-kuai-xun",
        source: ["/news", "/"],
        target: "/allrecode/news",
      },
      {
        title: "资讯",
        docs: "https://docs.rsshub.app/routes/news-media#chong-gou-zi-xun",
        source: ["/:category", "/"],
        target: "/allrecode/:category",
      },
    ],
  },
  "ally.net.cn": {
    _name: "艾莱资讯",
    rail: [
      {
        title: "世界轨道交通资讯网",
        docs: "https://docs.rsshub.app/routes/new-media#ai-lai-zi-xun",
        source: ["/", "/html/:category?/:topic?"],
        target: "/ally/rail/:category?/:topic?",
      },
    ],
  },
  "alternativeto.net": {
    _name: "AlternativeTo",
    www: [
      {
        title: "Software Alternatives",
        docs: "https://docs.rsshub.app/routes/programming#alternativeto-software-alternatives",
        source: "/software/:name",
        target: "/software/:name",
      },
      {
        title: "Platform Software",
        docs: "https://docs.rsshub.app/routes/programming#alternativeto-platform-software",
        source: "/platform/:name",
        target: "/platform/:name",
      },
    ],
  },
  "altervista.org": {
    _name: "Altervista",
    hyp3rlinx: [
      {
        title: "hyp3rlinx blog",
        docs: "https://docs.rsshub.app/",
        source: ["/"],
        target:
          "/rsshub/transform/html/http%3A%2F%2Fhyp3rlinx.altervista.org%2F/item=table[border=%221%22]%20tr%20td%20a",
      },
    ],
  },
  "amazon.com": {
    _name: "Amazon",
    ".": [
      {
        title: "Kindle 软件更新",
        docs: "https://docs.rsshub.app/routes/program-update#amazon",
        source: ["/gp/help/customer/display.html"],
        target: (_, url) => {
          const nodeId = new URL(url).searchParams.get("nodeId")
          if (nodeId === "GKMQC26VQQMM8XSW") {
            return "/amazon/kindle/software-updates"
          }
        },
      },
    ],
    aws: [
      {
        title: "AWS blogs",
        docs: "https://docs.rsshub.app/routes/blogs#amazon",
      },
    ],
  },
  "android.com": {
    _name: "Android Developers",
    developer: [
      {
        title: "SDK Platform Tools release notes",
        docs: "https://docs.rsshub.app/routes/program-update#android-sdk-platform-tools-release-notes",
        source: ["/studio/releases/platform-tools", "/"],
        target: "/android/platform-tools-releases",
      },
    ],
  },
  "annualreviews.org": {
    _name: "Annual Reviews",
    ".": [
      {
        title: "Journal",
        docs: "https://docs.rsshub.app/routes/journal#annual-reviews-journal",
        source: ["/journal/:id", "/"],
        target: "/annualreviews/:id",
      },
    ],
  },
  "anquanke.com": {
    _name: "安全客",
    ".": [
      {
        title: "分类订阅",
        docs: "https://docs.rsshub.app/routes/programming#an-quan-ke",
        source: ["/:category", "/"],
        target: (params) =>
          `/anquanke/${params.category === "week-list" ? "week" : params.category}`,
      },
    ],
  },
  "apache.org": {
    _name: "Apache",
    apisix: [
      {
        title: "APISIX 博客",
        docs: "https://docs.rsshub.app/routes/blog#apache",
        source: ["/zh/blog"],
        target: () => "/apache/apisix/blog",
      },
    ],
  },
  "apiseven.com": {
    _name: "支流科技",
    ".": [
      {
        title: "博客",
        docs: "https://docs.rsshub.app/routes/blog#zhi-liu-ke-ji",
        source: ["/blog"],
        target: () => "/apiseven/blog",
      },
    ],
  },
  "apkpure.com": {
    _name: "APKPure",
    ".": [
      {
        title: "所有版本",
        docs: "https://docs.rsshub.app/routes/program-update#apkpure",
        source: [
          "/:region/:stuff/:pkg/versions",
          "/:stuff/:pkg/versions",
          "/:stuff/:pkg",
        ],
        target: (params) =>
          `/apkpure/versions/${params.pkg}${params.region ? `/${params.region}` : ""}`,
      },
    ],
  },
  "apnews.com": {
    _name: "AP News",
    ".": [
      {
        title: "话题",
        docs: "https://docs.rsshub.app/routes/traditional-media#ap-news",
        source: "/hub/:topic",
        target: "/apnews/topics/:topic",
      },
    ],
  },
  "appcenter.ms": {
    _name: "App Center",
    install: [
      {
        title: "App Center Release",
        docs: "https://docs.rsshub.app/routes/program-update#app-center",
        source: [
          "/users/:user/apps/:app/distribution_groups/:distribution_group",
          "/orgs/:user/apps/:app/distribution_groups/:distribution_group",
        ],
        target: "/app-center/release/:user/:app/:distribution_group",
      },
    ],
  },
  "apple.com": {
    _name: "Apple",
    apps: [
      {
        title: "价格更新",
        docs: "https://docs.rsshub.app/routes/program-update#app-store-mac-app-store",
        source: ["/"],
        target: "/appstore/price/:country/:type/:id",
      },
    ],
  },
  "appledaily.com": {
    _name: "苹果新闻网",
    tw: [
      {
        title: "首頁",
        docs: "https://docs.rsshub.app/routes/traditional-media#ping-guo-xin-wen-wang",
        source: ["/:channel"],
        target: (params) => {
          if (params.channel === "home") {
            return "/appledaily/:channel"
          }
        },
      },
      {
        title: "焦点",
        docs: "https://docs.rsshub.app/routes/traditional-media#ping-guo-xin-wen-wang",
        source: ["/realtime/:channel"],
        target: (params) => {
          if (params.channel === "recommend") {
            return "/appledaily/:channel"
          }
        },
      },
      {
        title: "最新",
        docs: "https://docs.rsshub.app/routes/traditional-media#ping-guo-xin-wen-wang",
        source: ["/realtime/:channel"],
        target: (params) => {
          if (params.channel === "new") {
            return "/appledaily/:channel"
          }
        },
      },
      {
        title: "热门",
        docs: "https://docs.rsshub.app/routes/traditional-media#ping-guo-xin-wen-wang",
        source: ["/realtime/:channel"],
        target: (params) => {
          if (params.channel === "hot") {
            return "/appledaily/:channel"
          }
        },
      },
      {
        title: "生活",
        docs: "https://docs.rsshub.app/routes/traditional-media#ping-guo-xin-wen-wang",
        source: ["/realtime/:channel"],
        target: (params) => {
          if (params.channel === "life") {
            return "/appledaily/:channel"
          }
        },
      },
      {
        title: "娱乐",
        docs: "https://docs.rsshub.app/routes/traditional-media#ping-guo-xin-wen-wang",
        source: ["/realtime/:channel"],
        target: (params) => {
          if (params.channel === "entertainment") {
            return "/appledaily/:channel"
          }
        },
      },
      {
        title: "社会",
        docs: "https://docs.rsshub.app/routes/traditional-media#ping-guo-xin-wen-wang",
        source: ["/realtime/:channel"],
        target: (params) => {
          if (params.channel === "local") {
            return "/appledaily/:channel"
          }
        },
      },
      {
        title: "财经地产",
        docs: "https://docs.rsshub.app/routes/traditional-media#ping-guo-xin-wen-wang",
        source: ["/realtime/:channel"],
        target: (params) => {
          if (params.channel === "property") {
            return "/appledaily/:channel"
          }
        },
      },
      {
        title: "国际",
        docs: "https://docs.rsshub.app/routes/traditional-media#ping-guo-xin-wen-wang",
        source: ["/realtime/:channel"],
        target: (params) => {
          if (params.channel === "international") {
            return "/appledaily/:channel"
          }
        },
      },
      {
        title: "政治",
        docs: "https://docs.rsshub.app/routes/traditional-media#ping-guo-xin-wen-wang",
        source: ["/realtime/:channel"],
        target: (params) => {
          if (params.channel === "politics") {
            return "/appledaily/:channel"
          }
        },
      },
      {
        title: "3C车城",
        docs: "https://docs.rsshub.app/routes/traditional-media#ping-guo-xin-wen-wang",
        source: ["/realtime/:channel"],
        target: (params) => {
          if (params.channel === "gadget") {
            return "/appledaily/:channel"
          }
        },
      },
      {
        title: "吃喝玩乐",
        docs: "https://docs.rsshub.app/routes/traditional-media#ping-guo-xin-wen-wang",
        source: ["/realtime/:channel"],
        target: (params) => {
          if (params.channel === "supplement") {
            return "/appledaily/:channel"
          }
        },
      },
      {
        title: "体育",
        docs: "https://docs.rsshub.app/routes/traditional-media#ping-guo-xin-wen-wang",
        source: ["/realtime/:channel"],
        target: (params) => {
          if (params.channel === "sports") {
            return "/appledaily/:channel"
          }
        },
      },
      {
        title: "苹评理",
        docs: "https://docs.rsshub.app/routes/traditional-media#ping-guo-xin-wen-wang",
        source: ["/realtime/:channel"],
        target: (params) => {
          if (params.channel === "forum") {
            return "/appledaily/:channel"
          }
        },
      },
      {
        title: "微视频",
        docs: "https://docs.rsshub.app/routes/traditional-media#ping-guo-xin-wen-wang",
        source: ["/realtime/:channel"],
        target: (params) => {
          if (params.channel === "micromovie") {
            return "/appledaily/:channel"
          }
        },
      },
    ],
  },
  "appleinsider.com": {
    _name: "AppleInsider",
    ".": [
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/new-media#appleinsider-fen-lei",
        source: ["/:category", "/"],
        target: "/appleinsider/:category",
      },
    ],
  },
  "app.so": {
    _name: "鲜面连线",
    ".": [
      {
        title: "限免应用",
        docs: "https://docs.rsshub.app/routes/program-update#app-store-mac-app-store",
        source: ["/xianmian"],
        target: "/appstore/xianmian",
      },
    ],
  },
  "gofans.cn": {
    _name: "GoFans",
    ".": [
      {
        title: "最新限免",
        docs: "https://docs.rsshub.app/routes/program-update#app-store-mac-app-store",
        source: ["/"],
        target: "/appstore/gofans",
      },
    ],
  },
  "aqara.com": {
    _name: "Aqara",
    ".": [
      {
        title: "新闻",
        docs: "https://docs.rsshub.app/routes/other#aqara-xin-wen",
        source: ["/:region/about-us/news", "/news"],
        target: "/aqara/:region/news",
      },
      {
        title: "博客",
        docs: "https://docs.rsshub.app/routes/other#aqara-bo-ke",
        source: ["/:region/blog"],
        target: "/aqara/:region/blog",
      },
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/other#aqara-fen-lei",
        source: ["/:region/category/:id"],
        target: "/aqara/:region/category/:id",
      },
      {
        title: "标签",
        docs: "https://docs.rsshub.app/routes/other#aqara-biao-qian",
        source: ["/:region/tag/:id"],
        target: "/aqara/:region/tag/:id",
      },
    ],
    community: [
      {
        title: "社区",
        docs: "https://docs.rsshub.app/routes/other#aqara-she-qu",
        source: ["/pc", "/"],
        target: (params, url) =>
          `/aqara/community/${new URL(url).searchParams.get("id")}`,
      },
    ],
  },
  "arcteryx.com": {
    _name: "Arcteryx",
    ".": [
      {
        title: "新发布",
        docs: "https://docs.rsshub.app/routes/shopping#arcteryx",
        source: ["/:country/en/c/:gender/new-arrivals"],
        target: "/arcteryx/new-arrivals/:country/:gender",
      },
    ],
    outlet: [
      {
        title: "Outlet",
        docs: "https://docs.rsshub.app/routes/shopping#arcteryx",
        source: ["/:country/en/c/:gender"],
        target: "/arcteryx/outlet/:country/:gender",
      },
    ],
    regear: [
      {
        title: "Regear 新发布",
        docs: "https://docs.rsshub.app/routes/shopping#arcteryx",
        source: ["/shop/new-arrivals", "/"],
        target: "/arcteryx/regear/new-arrivals",
      },
    ],
  },
  "arknights.jp": {
    _name: "明日方舟",
    ak: [
      {
        title: "アークナイツ（日服新闻）",
        docs: "https://docs.rsshub.app/routes/game#ming-ri-fang-zhou",
        source: ["/news", "/"],
        target: "/arknights/japan",
      },
    ],
  },
  "hypergryph.com": {
    _name: "明日方舟",
    ak: [
      {
        title: "游戏公告与新闻",
        docs: "https://docs.rsshub.app/routes/game#ming-ri-fang-zhou",
        source: ["/news.html", "/"],
        target: "/arknights/news",
      },
    ],
    "ak-conf": [
      {
        title: "游戏内公告",
        docs: "https://docs.rsshub.app/routes/game#ming-ri-fang-zhou",
        source: ["/*"],
        target: "/arknights/news",
      },
    ],
    "monster-siren": [
      {
        title: "塞壬唱片",
        docs: "https://docs.rsshub.app/routes/game#ming-ri-fang-zhou",
        source: ["/info", "/"],
        target: "/siren/news",
      },
    ],
  },
  "blog.leanstack.com": {
    _name: "Ash Maurya's blog",
    ".": [
      {
        title: "Ash Maurya's blog",
        docs: "https://docs.rsshub.app/routes/en/blog#ash-maurya",
        source: ["/"],
        target: "/ash-maurya",
      },
    ],
  },
  "asiantolick.com": {
    _name: "Asian to lick",
    ".": [
      {
        title: "Top rated",
        docs: "https://docs.rsshub.app/routes/picture#asian-to-lick-top-rated",
        source: ["/"],
        target: "/asiantolick",
      },
      {
        title: "News",
        docs: "https://docs.rsshub.app/routes/picture#asian-to-lick-news",
        source: ["/page/news"],
        target: "/asiantolick/page/news",
      },
      {
        title: "Category",
        docs: "https://docs.rsshub.app/routes/picture#asian-to-lick-category",
        source: ["/"],
        target: (params, url) => {
          url = new URL(url)
          const id = url.href.match(/\/category\/(\w+)/)[1]

          return `/asiantolick${id ? `/category/${id}` : ""}`
        },
      },
      {
        title: "Tag",
        docs: "https://docs.rsshub.app/routes/picture#asian-to-lick-tag",
        source: ["/"],
        target: (params, url) => {
          url = new URL(url)
          const id = url.href.match(/\/tag\/(\w+)/)[1]

          return `/asiantolick${id ? `/tag/${id}` : ""}`
        },
      },
      {
        title: "Search",
        docs: "https://docs.rsshub.app/routes/picture#asian-to-lick-search",
        source: ["/search/:keyword"],
        target: "/asiantolick/search/:keyword",
      },
      {
        title: "Page",
        docs: "https://docs.rsshub.app/routes/picture#asian-to-lick-page",
        source: ["/page/:id"],
        target: "/asiantolick/page/:id",
      },
    ],
  },
  "asus.com.cn": {
    _name: "Asus 华硕",
    ".": [
      {
        title: "固件",
        docs: "https://docs.rsshub.app/routes/program-update#hua-shuo",
        source: ["/"],
        target: "/asus/bios/:model",
      },
    ],
  },
  "asus.com": {
    _name: "ASUS",
    ".": [
      {
        title: "GPU Tweak",
        docs: "https://docs.rsshub.app/routes/program-update#hua-shuo",
        source: ["/campaign/GPU-Tweak-III/*", "/"],
        target: "/asus/gpu-tweak",
      },
    ],
  },
  "atcoder.jp": {
    _name: "AtCoder",
    ".": [
      {
        title: "Posts",
        docs: "https://docs.rsshub.app/routes/programming#atcoder-posts",
        source: ["/posts", "/"],
        target: (params, url) =>
          `/atcoder/post/${new URL(url).searchParams.get("lang") ?? "en"}/${new URL(url).searchParams.get("keyword") ?? ""}`,
      },
      {
        title: "Contests",
        docs: "https://docs.rsshub.app/routes/programming#atcoder-contests",
        source: ["/contests/archive", "/contests"],
        target: (params, url) =>
          `/atcoder/content/${new URL(url).searchParams.get("lang") ?? "en"}/${new URL(url).searchParams.get("ratedType") ?? "0"}/${new URL(url).searchParams.get("category") ?? "0"}/${
            new URL(url).searchParams.get("keyword") ?? ""
          }`,
      },
    ],
  },
  "audiobar.cn": {
    _name: "音频应用",
    ".": [
      {
        title: "最新主题",
        docs: "https://docs.rsshub.app/routes/bbs#yin-pin-ying-yong",
        source: ["/all.php"],
        target: "/audiobar/latest",
      },
    ],
  },
  "baai.ac.cn": {
    _name: "北京智源人工智能研究院",
    hub: [
      {
        title: "智源社区",
        docs: "https://docs.rsshub.app/routes/programming#bei-jing-zhi-yuan-ren-gong-zhi-neng-yan-jiu-yuan",
        source: ["/"],
        target: (params, url) => {
          const searchParams = new URL(url).searchParams
          const tagId = searchParams.get("tag_id")
          const sort = searchParams.get("sort")
          const range = searchParams.get("time_range")
          return `/baai/hub${tagId ? `/${tagId}` : ""}${sort ? `/${sort}` : ""}${range ? `/${range}` : ""}`
        },
      },
      {
        title: "活动 - 智源社区",
        docs: "https://docs.rsshub.app/routes/programming#bei-jing-zhi-yuan-ren-gong-zhi-neng-yan-jiu-yuan",
        source: ["/events", "/"],
        target: "/baai/hub/events",
      },
      {
        title: "评论 - 智源社区",
        docs: "https://docs.rsshub.app/routes/programming#bei-jing-zhi-yuan-ren-gong-zhi-neng-yan-jiu-yuan",
        source: ["/comments", "/"],
        target: "/baai/hub/comments",
      },
    ],
  },
  "bad.news": {
    _name: "Bad.news",
    ".": [
      {
        title: "通用",
        docs: "https://docs.rsshub.app/routes/new-media#bad-news-tong-yong",
        source: ["/"],
        target: (params, url) =>
          `/bad${new URL(url).href.match(/bad\.news(.*?)/)[1]}`,
      },
    ],
  },
  "baidu.com": {
    _name: "百度",
    gushitong: [
      {
        title: "首页指数",
        docs: "https://docs.rsshub.app/routes/finance#bai-du-gu-shi-tong",
        source: ["/"],
        target: "/baidu/gushitong/index",
      },
    ],
    tieba: [
      {
        title: "帖子列表",
        docs: "https://docs.rsshub.app/routes/bbs#bai-du-tie-ba",
        source: "f",
        target: (params, url) => {
          const type = new URL(url).searchParams.get("tab")
          if (!type || type === "main") {
            return `/baidu/tieba/forum/${new URL(url).searchParams.get("kw")}`
          }
        },
      },
      {
        title: "精品帖子",
        docs: "https://docs.rsshub.app/routes/bbs#bai-du-tie-ba",
        source: "f",
        target: (params, url) => {
          const type = new URL(url).searchParams.get("tab")
          if (type === "good") {
            return `/baidu/tieba/forum/good/${new URL(url).searchParams.get("kw")}`
          }
        },
      },
      {
        title: "帖子动态",
        docs: "https://docs.rsshub.app/routes/bbs#bai-du-tie-ba",
        source: "/p/:id",
        target: "/baidu/tieba/post/:id",
      },
      {
        title: "只看楼主",
        docs: "https://docs.rsshub.app/routes/bbs#bai-du-tie-ba",
        source: "/p/:id",
        target: "/baidu/tieba/post/lz/:id",
      },
      {
        title: "用户帖子",
        docs: "https://docs.rsshub.app/routes/bbs#bai-du-tie-ba",
        source: "/home/main",
        target: (params, url) => {
          const uid = new URL(url).searchParams.get("un")
          if (uid) {
            return `/baidu/tieba/user/${uid}`
          }
        },
      },
      {
        title: "贴吧搜索",
        docs: "https://docs.rsshub.app/routes/bbs#bai-du-tie-ba",
        source: "/f/search/res",
        target: (params, url) => {
          const searchParams = new URL(url).searchParams
          const qw = searchParams.get("qw")
          const kw = searchParams.get("kw")
          if (qw) {
            const route = `/baidu/tieba/user/${qw}`
            return kw ? `${route}/kw=${kw}` : route
          }
        },
      },
    ],
    top: [
      {
        title: "热搜榜单",
        docs: "https://docs.rsshub.app/routes/other#bai-du-re-sou",
        source: ["/board"],
        target: (_, url) =>
          `/baidu/top/${new URL(url).searchParams.get("tab")}`,
      },
    ],
  },
  "baijingapp.com": {
    _name: "白鲸出海",
    ".": [
      {
        title: "最新",
        docs: "https://docs.rsshub.app/routes/new-media#bai-jing-chu-hai",
        source: ["/article", "/"],
        target: "/baijing",
      },
      {
        title: "资讯",
        docs: "https://docs.rsshub.app/routes/new-media#bai-jing-chu-hai",
        source: ["/article", "/"],
        target: (params, url) => {
          const matches = String(new URL(url)).match(/\/article\/type-(\d+)/)
          return `/baijing${matches ? `/${matches[1]}` : ""}`
        },
      },
    ],
  },
  "bandcamp.com": {
    _name: "Bandcamp",
    ".": [
      {
        title: "Tag",
        docs: "https://docs.rsshub.app/routes/multimedia#bandcamp",
        source: ["/tag/:tag"],
        target: "/bandcamp/tag/:tag",
      },
      {
        title: "Upcoming Live Streams",
        docs: "https://docs.rsshub.app/routes/multimedia#bandcamp-upcoming-live-streams",
        source: ["/live_schedule"],
        target: "/bandcamp/live",
      },
      {
        title: "Weekly",
        docs: "https://docs.rsshub.app/routes/multimedia#bandcamp",
        source: ["/"],
        target: "/bandcamp/weekly",
      },
    ],
  },
  "bangumi.moe": {
    _name: "萌番組",
    ".": [
      {
        title: "最新",
        docs: "https://docs.rsshub.app/routes/anime#meng-fan-zu-zui-xin",
        source: ["/"],
        target: "/bangumi/moe",
      },
      {
        title: "标签",
        docs: "https://docs.rsshub.app/routes/anime#meng-fan-zu-biao-qian",
        source: ["/search/index"],
        target: "/bangumi/moe/:tags?",
      },
    ],
  },
  "bangumi.online": {
    _name: "アニメ新番組",
    ".": [
      {
        title: "當季新番",
        docs: "https://docs.rsshub.app/routes/anime#アニメ-xin-fan-zu-dang-ji-xin-fan",
        source: ["/"],
        target: "/bangumi/online",
      },
    ],
  },
  "bangumi.tv": {
    _name: "Bangumi 番组计划",
    ".": [
      {
        title: "小组话题",
        docs: "https://docs.rsshub.app/routes/anime#bangumi-fan-zu-ji-hua",
        source: "/group/:id",
        target: "/bangumi/tv/group/:id",
      },
      {
        title: "小组话题的新回复",
        docs: "https://docs.rsshub.app/routes/anime#bangumi-fan-zu-ji-hua",
        source: "/group/topic/:id",
        target: "/bangumi/tv/topic/:id",
      },
      {
        title: "现实人物的新作品",
        docs: "https://docs.rsshub.app/routes/anime#bangumi-fan-zu-ji-hua",
        source: "/person/:id",
        target: "/bangumi/tv/person/:id",
      },
      {
        title: "用户日志",
        docs: "https://docs.rsshub.app/routes/anime#bangumi-fan-zu-ji-hua",
        source: "/user/:id",
        target: "/bangumi/tv/user/blog/:id",
      },
      {
        title: "条目的讨论",
        docs: "https://docs.rsshub.app/routes/anime#bangumi-fan-zu-ji-hua",
        source: "/subject/:id",
        target: "/bangumi/tv/subject/:id/topics",
      },
      {
        title: "条目的评论",
        docs: "https://docs.rsshub.app/routes/anime#bangumi-fan-zu-ji-hua",
        source: "/subject/:id",
        target: "/bangumi/tv/subject/:id/blogs",
      },
      {
        title: "条目的章节",
        docs: "https://docs.rsshub.app/routes/anime#bangumi-fan-zu-ji-hua",
        source: "/subject/:id",
        target: "/bangumi/tv/subject/:id",
      },
      {
        title: "条目的吐槽箱",
        docs: "https://docs.rsshub.app/routes/anime#bangumi-fan-zu-ji-hua",
        source: "/subject/:id",
        target: "/bangumi/tv/subject/:id/comments",
      },
      {
        title: "放送列表",
        docs: "https://docs.rsshub.app/routes/anime#bangumi-fan-zu-ji-hua",
        source: "/calendar",
        target: "/bangumi/tv/calendar/today",
      },
      {
        title: "成员关注动画榜",
        docs: "https://docs.rsshub.app/routes/anime#bangumi-fan-zu-ji-hua",
        source: "/anime",
        target: "/bangumi/tv/followrank",
      },
      {
        title: "用户想看",
        docs: "https://docs.rsshub.app/routes/anime#bangumi-fan-zu-ji-hua",
        source: "/anime/list/:id/wish",
        target: "/bangumi/tv/user/wish/:id",
      },
    ],
  },
  "bgm.tv": {
    _name: "Bangumi 番组计划",
    ".": [
      {
        title: "小组话题",
        docs: "https://docs.rsshub.app/routes/anime#bangumi-fan-zu-ji-hua",
        source: "/group/:id",
        target: "/bangumi/tv/group/:id",
      },
      {
        title: "小组话题的新回复",
        docs: "https://docs.rsshub.app/routes/anime#bangumi-fan-zu-ji-hua",
        source: "/group/topic/:id",
        target: "/bangumi/tv/topic/:id",
      },
      {
        title: "现实人物的新作品",
        docs: "https://docs.rsshub.app/routes/anime#bangumi-fan-zu-ji-hua",
        source: "/person/:id",
        target: "/bangumi/tv/person/:id",
      },
      {
        title: "用户日志",
        docs: "https://docs.rsshub.app/routes/anime#bangumi-fan-zu-ji-hua",
        source: "/user/:id",
        target: "/bangumi/tv/user/blog/:id",
      },
      {
        title: "条目的讨论",
        docs: "https://docs.rsshub.app/routes/anime#bangumi-fan-zu-ji-hua",
        source: "/subject/:id",
        target: "/bangumi/tv/subject/:id/topics",
      },
      {
        title: "条目的评论",
        docs: "https://docs.rsshub.app/routes/anime#bangumi-fan-zu-ji-hua",
        source: "/subject/:id",
        target: "/bangumi/tv/subject/:id/blogs",
      },
      {
        title: "条目的章节",
        docs: "https://docs.rsshub.app/routes/anime#bangumi-fan-zu-ji-hua",
        source: "/subject/:id",
        target: "/bangumi/tv/subject/:id",
      },
      {
        title: "条目的吐槽箱",
        docs: "https://docs.rsshub.app/routes/anime#bangumi-fan-zu-ji-hua",
        source: "/subject/:id",
        target: "/bangumi/tv/subject/:id/comments",
      },
      {
        title: "放送列表",
        docs: "https://docs.rsshub.app/routes/anime#bangumi-fan-zu-ji-hua",
        source: "/calendar",
        target: "/bangumi/tv/calendar/today",
      },
      {
        title: "成员关注动画榜",
        docs: "https://docs.rsshub.app/routes/anime#bangumi-fan-zu-ji-hua",
        source: "/anime",
        target: "/bangumi/tv/followrank",
      },
      {
        title: "用户想看",
        docs: "https://docs.rsshub.app/routes/anime#bangumi-fan-zu-ji-hua",
        source: "/anime/list/:id/wish",
        target: "/bangumi/tv/user/wish/:id",
      },
    ],
  },
  "baozimh.com": {
    _name: "包子漫画",
    www: [
      {
        title: "订阅漫画",
        docs: "https://docs.rsshub.app/routes/multimedia#bandcamp-upcoming-live-streams",
        source: "/comic/:name",
        target: "/baozimh/comic/:name",
      },
    ],
  },
  "barronschina.com.cn": {
    _name: "巴伦周刊中文版",
    ".": [
      {
        title: "栏目",
        docs: "https://docs.rsshub.app/routes/finance#ba-lun-zhou-kan-zhong-wen-ban-lan-mu",
        source: ["/"],
        target: "/barronschina/:category?",
      },
    ],
  },
  "bast.net.cn": {
    _name: "北京市科学技术协会",
    ".": [
      {
        title: "通用",
        docs: "https://docs.rsshub.app/routes/new-media#bei-jing-shi-ke-xue-ji-shu-xie-hui-tong-yong",
        source: ["/col", "/"],
        target: (params, url) =>
          `/bast/${new URL(url).href.match(/bast\.net\.cn\/(.*)/)[1].replace(/\/index\.html/, "")}`,
      },
    ],
  },
  "bbc.com": {
    _name: "BBC",
    ".": [
      {
        title: "News",
        docs: "https://docs.rsshub.app/routes/traditional-media#bbc",
      },
    ],
  },
  "bbcnewslabs.co.uk": {
    _name: "BBC News Labs",
    ".": [
      {
        title: "News",
        docs: "https://docs.rsshub.app/routes/programming#bbc-news-labs",
        source: "/",
        target: "/bbcnewslabs/news",
      },
    ],
  },
  "52bdys.com": {
    _name: "哔嘀影视",
    ".": [
      {
        title: "首页",
        docs: "https://docs.rsshub.app/routes/multimedia#bi-di-ying-shi",
        source: ["/s/:caty"],
        target: (params, url) => {
          const searchParams = new URL(url).searchParams
          return `/bdys/${params.caty}/${searchParams.get("type") || "all"}/${searchParams.get("area") || "all"}/${searchParams.get("year") || "all"}/${searchParams.get("order") || "0"}`
        },
      },
    ],
  },
  "bde4.icu": {
    _name: "哔嘀影视",
    ".": [
      {
        title: "首页",
        docs: "https://docs.rsshub.app/routes/multimedia#bi-di-ying-shi",
        source: ["/s/:caty"],
        target: (params, url) => {
          const searchParams = new URL(url).searchParams
          return `/bdys/${params.caty}/${searchParams.get("type") || "all"}/${searchParams.get("area") || "all"}/${searchParams.get("year") || "all"}/${searchParams.get("order") || "0"}`
        },
      },
    ],
  },
  "bdys01.com": {
    _name: "哔嘀影视",
    ".": [
      {
        title: "首页",
        docs: "https://docs.rsshub.app/routes/multimedia#bi-di-ying-shi",
        source: ["/s/:caty"],
        target: (params, url) => {
          const searchParams = new URL(url).searchParams
          return `/bdys/${params.caty}/${searchParams.get("type") || "all"}/${searchParams.get("area") || "all"}/${searchParams.get("year") || "all"}/${searchParams.get("order") || "0"}`
        },
      },
    ],
  },
  "behance.net": {
    _name: "Behance",
    www: [
      {
        title: "User",
        docs: "https://docs.rsshub.app/routes/design#behance-yong-hu-zuo-pin",
        source: ["/:user", "/:user/:types", "/gallery/:galleryid/:galleryname"],
        target: (params, url, document) => {
          let uid
          let type = ""
          if (params.types && params.types.match("appreciated")) {
            type = "/appreciated"
          }
          if (url.match(/gallery\/\d+/)) {
            uid =
              document &&
              document
                .querySelector(".e2e-project-avatar")
                .childNodes[0].attributes[1].value.match(/behance.net\/(.*)/)[1]
          } else {
            uid =
              document &&
              document
                .querySelector("html")
                .innerHTML.match(/([^/]+)\/insights/)[1]
          }

          return `/behance/${uid}${type}`
        },
      },
    ],
  },
  "bellroy.com": {
    _name: "Bellroy",
    ".": [
      {
        title: "新发布",
        docs: "https://docs.rsshub.app/routes/shopping#bellroy",
        source: ["/collection/new-releases", "/"],
        target: "/bellroy/new-releases",
      },
    ],
  },
  "bendibao.com": {
    _name: "本地宝",
    ".": [
      {
        title: "焦点资讯",
        docs: "https://docs.rsshub.app/routes/new-media#ben-di-bao-jiao-dian-zi-xun",
        source: "/",
        target: "/bendibao/news/:city",
      },
    ],
  },
  "bgmlist.com": {
    _name: "番组放送",
    ".": [
      {
        title: "开播提醒",
        docs: "https://docs.rsshub.app/routes/anime#fan-zu-fang-song",
        source: ["/"],
        target: "/bgmlist/onair/zh-Hans",
      },
    ],
  },
  "bigquant.com": {
    _name: "BigQuant",
    ".": [
      {
        title: "专题报告",
        docs: "https://docs.rsshub.app/routes/finance#bigquant-zhuan-ti-bao-gao",
        source: "/",
        target: "/bigquant/collections",
      },
    ],
  },
  "bilibili.com": {
    _name: "bilibili",
    www: [
      {
        title: "分区视频",
        docs: "https://docs.rsshub.app/routes/social-media#bilibili",
        source: ["/v/*tpath", "/documentary", "/movie", "/tv"],
      },
      {
        title: "视频评论",
        docs: "https://docs.rsshub.app/routes/social-media#bilibili",
        source: "/video/:aid",
        target: (params) =>
          `/bilibili/video/reply/${params.aid.replace("av", "")}`,
      },
      {
        title: "视频弹幕",
        docs: "https://docs.rsshub.app/routes/social-media#bilibili",
        source: "/video/:aid",
        target: (params, url) => {
          const pid = new URL(url).searchParams.get("p")
          return `/bilibili/video/danmaku/${params.aid.replace("av", "")}/${pid ? pid : 1}`
        },
      },
      {
        title: "番剧",
        docs: "https://docs.rsshub.app/routes/social-media#bilibili",
        source: "/bangumi/media/:bid",
        target: (params) =>
          `/bilibili/bangumi/media/${params.bid.replace("md", "")}`,
      },
      {
        title: "当前在线",
        docs: "https://docs.rsshub.app/routes/social-media#bilibili",
        source: "/video/online.html",
        target: "/bilibili/online",
      },
      {
        title: "热搜",
        docs: "https://docs.rsshub.app/routes/social-media#bilibili",
        source: "/",
        target: "/bilibili/hot-search",
      },
      {
        title: "频道排行榜",
        docs: "https://docs.rsshub.app/routes/social-media#bilibili",
        source: "/v/channel/:channelid/",
        target: "/bilibili/channel/:channelid/hot",
      },
    ],
    space: [
      {
        title: "UP 主动态",
        docs: "https://docs.rsshub.app/routes/social-media#bilibili",
        source: "/:uid",
        target: "/bilibili/user/dynamic/:uid",
      },
      {
        title: "UP 主投稿",
        docs: "https://docs.rsshub.app/routes/social-media#bilibili",
        source: "/:uid",
        target: "/bilibili/user/video/:uid",
      },
      {
        title: "UP 主所有视频",
        docs: "https://docs.rsshub.app/routes/social-media#bilibili",
        source: "/:uid",
        target: "/bilibili/user/video-all/:uid",
      },
      {
        title: "UP 主频道的合集",
        docs: "https://docs.rsshub.app/routes/social-media#bilibili",
        source: "/:uid/channel/collectiondetail",
        target: (params, url) => {
          const sid = new URL(url).searchParams.get("sid")
          return `/bilibili/user/collection/${params.uid}/${sid}`
        },
      },
      {
        title: "UP 主频道的视频列表",
        docs: "https://docs.rsshub.app/routes/social-media#bilibili",
        source: "/:uid/channel/seriesdetail",
        target: (params, url) => {
          const sid = new URL(url).searchParams.get("sid")
          return `/bilibili/user/channel/${params.uid}/${sid}`
        },
      },
      {
        title: "UP 主专栏",
        docs: "https://docs.rsshub.app/routes/social-media#bilibili",
        source: "/:uid",
        target: "/bilibili/user/article/:uid",
      },
      {
        title: "UP 主默认收藏夹",
        docs: "https://docs.rsshub.app/routes/social-media#bilibili",
        source: ["/:uid", "/:uid/favlist"],
        target: "/bilibili/user/fav/:uid",
      },
      {
        title: "UP 主非默认收藏夹",
        docs: "https://docs.rsshub.app/routes/social-media#bilibili",
        source: "/:uid/favlist",
        target: (params, url) =>
          `/bilibili/fav/${params.uid}/${new URL(url).searchParams.get("fid")}`,
      },
      {
        title: "UP 主投币视频",
        docs: "https://docs.rsshub.app/routes/social-media#bilibili",
        source: "/:uid",
        target: "/bilibili/user/coin/:uid",
      },
      {
        title: "UP 主粉丝",
        docs: "https://docs.rsshub.app/routes/social-media#bilibili",
        source: "/:uid",
        target: "/bilibili/user/followers/:uid",
      },
      {
        title: "UP 主关注用户",
        docs: "https://docs.rsshub.app/routes/social-media#bilibili",
        source: "/:uid",
        target: "/bilibili/user/followings/:uid",
      },
      {
        title: "用户追番列表",
        docs: "https://docs.rsshub.app/routes/social-media#bilibili",
        source: "/:uid",
        target: "/bilibili/user/bangumi/:uid",
      },
    ],
    manga: [
      {
        title: "漫画更新",
        docs: "https://docs.rsshub.app/routes/social-media#bilibili-man-hua-geng-xin",
        source: "/detail/:comicid",
        target: "/bilibili/manga/update/:comicid",
      },
    ],
    live: [
      {
        title: "直播开播",
        docs: "https://docs.rsshub.app/routes/live#bi-li-bi-li-zhi-bo-zhi-bo-kai-bo",
        source: ["/:roomID"],
        target: "/bilibili/live/room/:roomID",
      },
    ],
    show: [
      {
        title: "会员购票务",
        docs: "https://docs.rsshub.app/routes/social-media#bilibili-hui-yuan-gou-zuo-pin",
        source: "/platform",
        target: "/bilibili/platform/:area?/:p_type?/:uid?",
      },
    ],
  },
  "biodiscover.com": {
    _name: "生物探索",
    www: [
      {
        title: "频道",
        docs: "https://docs.rsshub.app/routes/new-media#sheng-wu-tan-suo",
        source: "/:channel",
        target: "/biodiscover/:channel",
      },
    ],
  },
  "bioone.org": {
    _name: "BioOne",
    ".": [
      {
        title: "Featured articles",
        docs: "https://docs.rsshub.app/routes/journal#bioone-featured-articles",
        source: "/",
        target: "/bioone/featured",
      },
      {
        title: "Journals",
        docs: "https://docs.rsshub.app/routes/journal#bioone-journals",
        source: ["/journals/:journal", "/"],
        target: "/bioone/journals/:journal",
      },
    ],
  },
  "xbiquwx.la": {
    _name: "笔趣阁",
    ".": [
      {
        title: "小说",
        docs: "https://docs.rsshub.app/routes/reading#bi-qu-ge-xiao-shuo",
        source: ["/"],
        target: (params, url) => `/biquge/${new URL(url).toString()}`,
      },
    ],
  },
  "biqu5200.net": {
    _name: "笔趣阁",
    ".": [
      {
        title: "小说",
        docs: "https://docs.rsshub.app/routes/reading#bi-qu-ge-xiao-shuo",
        source: ["/"],
        target: (params, url) => `/biquge/${new URL(url).toString()}`,
      },
    ],
  },
  "xbiquge.so": {
    _name: "笔趣阁",
    ".": [
      {
        title: "小说",
        docs: "https://docs.rsshub.app/routes/reading#bi-qu-ge-xiao-shuo",
        source: ["/"],
        target: (params, url) => `/biquge/${new URL(url).toString()}`,
      },
    ],
  },
  "biqugeu.net": {
    _name: "笔趣阁",
    ".": [
      {
        title: "小说",
        docs: "https://docs.rsshub.app/routes/reading#bi-qu-ge-xiao-shuo",
        source: ["/"],
        target: (params, url) => `/biquge/${new URL(url).toString()}`,
      },
    ],
  },
  "b520.cc": {
    _name: "笔趣阁",
    ".": [
      {
        title: "小说",
        docs: "https://docs.rsshub.app/routes/reading#bi-qu-ge-xiao-shuo",
        source: ["/"],
        target: (params, url) => `/biquge/${new URL(url).toString()}`,
      },
    ],
  },
  "biquge.biz": {
    _name: "笔趣阁",
    ".": [
      {
        title: "小说",
        docs: "https://docs.rsshub.app/routes/reading#bi-qu-ge-xiao-shuo",
        source: ["/"],
        target: (params, url) => `/biquge/${new URL(url).toString()}`,
      },
    ],
  },
  "xbiquge.la": {
    _name: "笔趣阁",
    ".": [
      {
        title: "小说",
        docs: "https://docs.rsshub.app/routes/reading#bi-qu-ge-xiao-shuo",
        source: ["/"],
        target: (params, url) => `/biquge/${new URL(url).toString()}`,
      },
    ],
  },
  "qbiqu.com": {
    _name: "笔趣阁",
    ".": [
      {
        title: "小说",
        docs: "https://docs.rsshub.app/routes/reading#bi-qu-ge-xiao-shuo",
        source: ["/"],
        target: (params, url) => `/biquge/${new URL(url).toString()}`,
      },
    ],
  },
  "bswtan.com": {
    _name: "笔趣阁",
    ".": [
      {
        title: "小说",
        docs: "https://docs.rsshub.app/routes/reading#bi-qu-ge-xiao-shuo",
        source: ["/"],
        target: (params, url) => `/biquge/${new URL(url).toString()}`,
      },
    ],
  },
  "biquge.co": {
    _name: "笔趣阁",
    ".": [
      {
        title: "小说",
        docs: "https://docs.rsshub.app/routes/reading#bi-qu-ge-xiao-shuo",
        source: ["/"],
        target: (params, url) => `/biquge/${new URL(url).toString()}`,
      },
    ],
  },
  "zhhbqg.com": {
    _name: "笔趣阁",
    ".": [
      {
        title: "小说",
        docs: "https://docs.rsshub.app/routes/reading#bi-qu-ge-xiao-shuo",
        source: ["/"],
        target: (params, url) => `/biquge/${new URL(url).toString()}`,
      },
    ],
  },
  "biqugse.com": {
    _name: "笔趣阁",
    ".": [
      {
        title: "小说",
        docs: "https://docs.rsshub.app/routes/reading#bi-qu-ge-xiao-shuo",
        source: ["/"],
        target: (params, url) => `/biquge/${new URL(url).toString()}`,
      },
    ],
  },
  "ibiquge.net": {
    _name: "笔趣阁",
    ".": [
      {
        title: "小说",
        docs: "https://docs.rsshub.app/routes/reading#bi-qu-ge-xiao-shuo",
        source: ["/"],
        target: (params, url) => `/biquge/${new URL(url).toString()}`,
      },
    ],
  },
  "shuquge.com": {
    _name: "笔趣阁",
    ".": [
      {
        title: "小说",
        docs: "https://docs.rsshub.app/routes/reading#bi-qu-ge-xiao-shuo",
        source: ["/"],
        target: (params, url) => `/biquge/${new URL(url).toString()}`,
      },
    ],
  },
  "mayiwxw.com": {
    _name: "笔趣阁",
    ".": [
      {
        title: "小说",
        docs: "https://docs.rsshub.app/routes/reading#bi-qu-ge-xiao-shuo",
        source: ["/"],
        target: (params, url) => `/biquge/${new URL(url).toString()}`,
      },
    ],
  },
  "bit.edu.cn": {
    _name: "北京理工大学",
    cs: [
      {
        title: "计院通知",
        docs: "https://docs.rsshub.app/routes/university#bei-jing-li-gong-da-xue",
        source: ["/tzgg", "/"],
        target: "/bit/cs",
      },
    ],
    grd: [
      {
        title: "研究生院招生信息",
        docs: "https://docs.rsshub.app/routes/university#bei-jing-li-gong-da-xue",
        source: ["/zsgz/zsxx/index.htm", "/"],
        target: "/bit/yjs",
      },
    ],
    jwc: [
      {
        title: "教务处通知",
        docs: "https://docs.rsshub.app/routes/university#bei-jing-li-gong-da-xue",
        source: ["/tzgg", "/"],
        target: "/bit/jwc",
      },
    ],
    rszhaopin: [
      {
        title: "人才招聘",
        docs: "https://docs.rsshub.app/routes/university#bei-jing-li-gong-da-xue-ren-cai-zhao-pin",
        source: ["/"],
        target: "/bit/rszhaopin",
      },
    ],
  },
  "bitbucket.com": {
    _name: "Bitbucket",
    ".": [
      {
        title: "Commits",
        docs: "https://docs.rsshub.app/routes/programming#bitbucket",
        source: ["/commits/:workspace/:repo_slug"],
        target: "/bitbucket/commits/:workspace/:repo_slug",
      },
      {
        title: "Tags",
        docs: "https://docs.rsshub.app/routes/programming#bitbucket",
        source: ["/tags/:workspace/:repo_slug"],
        target: "/bitbcuket/tags/:workspace/:repo_slug",
      },
    ],
  },
  "bitmovin.com": {
    _name: "Bitmovin",
    ".": [
      {
        title: "Blog",
        docs: "https://docs.rsshub.app/routes/programming#bitmovin",
        source: ["/blog", "/"],
        target: "/bitmovin/blog",
      },
    ],
  },
  "bjfu.edu.cn": {
    _name: "北京林业大学",
    graduate: [
      {
        title: "研究生院培养动态",
        docs: "https://docs.rsshub.app/routes/university#bei-jing-lin-ye-da-xue",
        source: "/",
        target: "/bjfu/grs",
      },
    ],
    it: [
      {
        title: "信息学院通知",
        docs: "https://docs.rsshub.app/routes/university#bei-jing-lin-ye-da-xue",
        source: "/:type/index.html",
        target: "/bjfu/it/:type",
      },
    ],
    jwc: [
      {
        title: "教务处通知公告",
        docs: "https://docs.rsshub.app/routes/university#bei-jing-lin-ye-da-xue",
        source: "/:type/index.html",
        target: "/bjfu/jwc/:type",
      },
    ],
    kyc: [
      {
        title: "科技处通知公告",
        docs: "https://docs.rsshub.app/routes/university#bei-jing-lin-ye-da-xue",
        source: "/",
        target: "/bjfu/kjc",
      },
    ],
    news: [
      {
        title: "绿色新闻网",
        docs: "https://docs.rsshub.app/routes/university#bei-jing-lin-ye-da-xue",
        source: "/:type/index.html",
        target: "/bjfu/news/:type",
      },
    ],
  },
  "bjp.org.cn": {
    _name: "北京天文馆",
    ".": [
      {
        title: "每日一图",
        docs: "https://docs.rsshub.app/routes/picture#bei-jing-tian-wen-guan",
        source: ["/APOD/today.shtml", "/APOD/list.shtml", "/"],
        target: "/bjp/apod",
      },
    ],
  },
  "bjsk.org.cn": {
    _name: "北京社科网",
    ".": [
      {
        title: "通用",
        docs: "https://docs.rsshub.app/routes/government#bei-jing-she-ke-wang",
        source: ["/*"],
        target: (_, url) => `/bjsk/${url.split("/")[3].replace(".html", "")}`,
      },
    ],
    keti: [
      {
        title: "基金项目管理平台",
        docs: "https://docs.rsshub.app/routes/government#bei-jing-she-ke-wang",
        source: ["/indexAction!to_index.action", "/"],
        target: "/bjsk/keti/:id",
      },
    ],
  },
  "bjwxdxh.org.cn": {
    _name: "北京无线电协会",
    www: [
      {
        title: "最新资讯",
        docs: "https://docs.rsshub.app/routes/government#bei-jing-wu-xian-dian-xie-hui",
        source: "/news/class/",
        target: (params, url) =>
          url.includes("?")
            ? `/bjwxdxh/${url.split("?")[1].split(".")[0]}`
            : "/bjwxdxh",
      },
    ],
  },
  "bjx.com.cn": {
    _name: "北极星电力网",
    guangfu: [
      {
        title: "光伏 - 分类",
        docs: "https://docs.rsshub.app/routes/traditional-media#bei-ji-xing-dian-li-wang",
        source: ["/:type", "/"],
        target: "/bjx/gf/:type?",
      },
    ],
    huanbao: [
      {
        title: "环保要闻",
        docs: "https://docs.rsshub.app/routes/traditional-media#bei-ji-xing-dian-li-wang",
        source: ["/yw", "/"],
        target: "/bjx/huanbao",
      },
    ],
  },
  "blizzard.com": {
    _name: "Blizzard",
    news: [
      {
        title: "News",
        docs: "https://docs.rsshub.app/routes/game#blizzard",
        source: ["/:language/:category?", "/:language"],
        target: "/blizzard/news/:language/:category?",
      },
    ],
  },
  "theblockbeats.info": {
    _name: "律动",
    rszhaopin: [
      {
        title: "快讯",
        docs: "https://docs.rsshub.app/routes/new-media#lu-dong-xin-wen-kuai-xun",
        source: ["/"],
        target: "/blockbeats/newsflash",
      },
      {
        title: "文章",
        docs: "https://docs.rsshub.app/routes/new-media#lu-dong-xin-wen-kuai-xun",
        source: ["/"],
        target: "/blockbeats/article",
      },
    ],
  },
  "bloomberg.com": {
    _name: "Bloomberg",
    www: [
      {
        title: "News",
        docs: "https://docs.rsshub.app/routes/finance#bloomberg-news",
        source: ["/:site", "/"],
        target: "/bloomberg/:site?",
      },
      {
        title: "Authors",
        docs: "https://docs.rsshub.app/routes/finance#bloomberg",
        source: ["/*/authors/:id/:slug", "/authors/:id/:slug"],
        target: "/bloomberg/authors/:id/:slug",
      },
    ],
  },
  "bluestacks.com": {
    _name: "BlueStacks",
    ".": [
      {
        title: "BlueStacks 5 版本日誌",
        docs: "https://docs.rsshub.app/routes/program-update#bluestacks",
        source: [
          "/hc/en-us/articles/360056960211-Release-Notes-BlueStacks-5",
          "/",
        ],
        target: "/bluestacks/release/5",
      },
    ],
  },
  "bmkg.go.id": {
    _name: "BMKG 印尼气象气候和地球物理局",
    ".": [
      {
        title: "最近的地震",
        docs: "https://docs.rsshub.app/routes/new-media#BMKG-yin-ni-qi-xiang-qi-hou-he-di-qiu-wu-li-ju",
        source: ["/", "/gempabumi-terkini.html"],
        target: "/bmkg/earthquake",
      },
      {
        title: "新闻",
        docs: "https://docs.rsshub.app/routes/new-media#BMKG-yin-ni-qi-xiang-qi-hou-he-di-qiu-wu-li-ju",
        source: ["/", "/berita"],
        target: "/bmkg/news",
      },
    ],
  },
  "bnu.edu.cn": {
    _name: "北京师范大学",
    bs: [
      {
        title: "经济与工商管理学院",
        docs: "https://docs.rsshub.app/routes/university#bei-jing-shi-fan-da-xue",
        source: ["/:category/index.html"],
        target: "/bnu/bs/:category",
      },
    ],
    dwxgb: [
      {
        title: "党委学生工作部",
        docs: "https://docs.rsshub.app/routes/university#bei-jing-shi-fan-da-xue",
        source: ["/:category/:type/index.html"],
        target: "/bnu/dwxgb/:category/:type",
      },
    ],
    fdy: [
      {
        title: "党委学生工作部辅导员发展中心",
        docs: "https://docs.rsshub.app/routes/university#bei-jing-shi-fan-da-xue",
        source: ["/"],
        target: (_, url) =>
          `/bnu/fdy${new URL(url).pathname.replace(/\/index\.htm(l)?$/, "")}`,
      },
    ],
    "www.lib": [
      {
        title: "图书馆通知",
        docs: "https://docs.rsshub.app/routes/university#bei-jing-shi-fan-da-xue",
        source: ["/:category/index.htm"],
        target: "/bnu/lib/:category",
      },
    ],
  },
  "boc.cn": {
    _name: "中国银行",
    ".": [
      {
        title: "外汇牌价",
        docs: "https://docs.rsshub.app/routes/others#zhong-guo-yin-hang",
        source: ["/sourcedb/whpj", "/"],
        target: "/boc/whpj",
      },
    ],
  },
  "bookfere.com": {
    _name: "书伴",
    ".": [
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/reading#shu-ban",
      },
    ],
  },
  "booru.org": {
    _name: "Booru",
    mmda: [
      {
        title: "MMDArchive 标签查询",
        docs: "https://docs.rsshub.app/routes/picture#booru-mmdarchive-biao-qian-cha-xun",
        source: "/index.php",
      },
    ],
  },
  "bossdesign.cn": {
    _name: "Boss 设计",
    ".": [
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/design#boss-she-ji",
        source: ["/:category?", "/"],
        target: (params) =>
          `/bossdesign${params.category ? `/${params.category}` : ""}`,
      },
    ],
  },
  "brave.com": {
    _name: "Brave",
    ".": [
      {
        title: "Release Notes",
        docs: "https://docs.rsshub.app/routes/program-update#brave-release-notes",
        source: ["/latest", "/"],
        target: "/brave/latest",
      },
    ],
  },
  "brooklynmuseum.org": {
    _name: "Brooklyn Museum",
    www: [
      {
        title: "Exhibitions",
        docs: "https://docs.rsshub.app/routes/en/travel#brooklyn-museum",
      },
    ],
  },
  "bse.cn": {
    _name: "北京证券交易所",
    ".": [
      {
        title: "栏目",
        docs: "https://docs.rsshub.app/routes/finance#bei-jing-zheng-quan-jiao-yi-suo-lan-mu",
        source: ["/"],
        target: "/bse/:category?/:keyword?",
      },
    ],
  },
  "bsky.app": {
    _name: "Bluesky",
    ".": [
      {
        title: "关键词",
        docs: "https://docs.rsshub.app/routes/social-media#bluesky-bsky",
        source: "/search",
        target: (params, url) =>
          `/bsky/keyword/${new URL(url).searchParams.get("q")}`,
      },
    ],
  },
  "btbtt20.com": {
    _name: "BT之家",
    ".": [
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/multimedia#bt-zhi-jia",
        source: ["/"],
        target: "/btzj/:category?",
      },
    ],
  },
  "buaa.edu.cn": {
    _name: "北京航空航天大学",
    news: [
      {
        title: "新闻网",
        docs: "https://docs.rsshub.app/routes/university#bei-jing-hang-kong-hang-tian-da-xue",
        source: ["/*"],
        target: (_, url) =>
          `/buaa/news${new URL(url).pathname.replace(".htm", "")}`,
      },
    ],
    "www.sme": [
      {
        title: "集成电路科学与工程学院",
        docs: "https://docs.rsshub.app/routes/university#bei-jing-hang-kong-hang-tian-da-xue-ji-cheng-dian-lu-ke-xue-yu-gong-cheng-xue-yuan",
        source: ["/*"],
        target: (_, url) =>
          `/buaa/sme${new URL(url).pathname.replace(".htm", "")}`,
      },
    ],
  },
  "bupt.edu.cn": {
    _name: "北京邮电大学",
    ".": [
      {
        title: "人才招聘",
        docs: "https://docs.rsshub.app/routes/university#bei-jing-you-dian-da-xue-ren-cai-zhao-pin",
        source: ["/"],
        target: "/bupt/rczp",
      },
    ],
  },
  "byteclicks.com": {
    _name: "字节点击",
    ".": [
      {
        title: "首页",
        docs: "https://docs.rsshub.app/routes/new-media#zi-jie-dian-ji",
        source: ["/"],
        target: "/byteclicks",
      },
      {
        title: "标签",
        docs: "https://docs.rsshub.app/routes/new-media#zi-jie-dian-ji",
        source: ["/tag/:tag"],
        target: "/byteclicks/tag/:tag",
      },
    ],
  },
  "bytes.dev": {
    _name: "ui.dev",
    ".": [
      {
        title: "React Newsletter",
        docs: "https://docs.rsshub.app/routes/en/programming#ui-dev-bytes",
        source: ["/issues", "/"],
        target: "/reactnewsletter",
      },
    ],
  },
  "c114.com.cn": {
    _name: "C114通信网",
    ".": [
      {
        title: "滚动新闻",
        docs: "https://docs.rsshub.app/routes/new-media#c114-tong-xin-wang-gun-dong-xin-wen",
        source: ["/news/roll.asp", "/"],
        target: "/c114/roll",
      },
    ],
  },
  "caai.cn": {
    _name: "中国人工智能学会",
    ".": [
      {
        title: "学会动态",
        docs: "https://docs.rsshub.app/routes/study#zhong-guo-ren-gong-zhi-neng-xue-hui",
        source: ["/index.php"],
        target: (_, url) => `/caai/${url.match(/\/(\d+)\.html/)[1]}`,
      },
    ],
  },
  "caareviews.org": {
    _name: "caa.reviews",
    ".": [
      {
        title: "Book Reviews",
        docs: "https://docs.rsshub.app/routes/journal#caa-reviews",
        source: ["/reviews/book"],
        target: "/caareviews/book",
      },
      {
        title: "Exhibition Reviews",
        docs: "https://docs.rsshub.app/routes/journal#caa-reviews",
        source: ["/reviews/exhibition"],
        target: "/caareviews/exhibition",
      },
      {
        title: "Essays",
        docs: "https://docs.rsshub.app/routes/journal#caa-reviews",
        source: ["/reviews/essay"],
        target: "/caareviews/essay",
      },
    ],
  },
  "cahkms.org": {
    _name: "全国港澳研究会",
    ".": [
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/new-media#quan-guo-gang-ao-yan-jiu-hui-fen-lei",
        source: "/",
        target: "/cahkms/:category?",
      },
    ],
  },
  "caijing.com.cn": {
    _name: "财经网",
    roll: [
      {
        title: "滚动新闻",
        docs: "https://docs.rsshub.app/routes/finance#cai-jing-wang",
        source: ["/index1.html", "/"],
        target: "/caijing/roll",
      },
    ],
  },
  "caixin.com": {
    _name: "财新网",
    ".": [
      {
        title: "新闻分类",
        docs: "https://docs.rsshub.app/routes/traditional-media#cai-xin-wang",
      },
      {
        title: "首页新闻",
        docs: "https://docs.rsshub.app/routes/traditional-media#cai-xin-wang",
        source: ["/"],
        target: "/caixin/article",
      },
      {
        title: "最新文章",
        docs: "https://docs.rsshub.app/routes/traditional-media#cai-xin-wang",
        source: ["/"],
        target: "/caixin/latest",
      },
      {
        title: "用户博客",
        docs: "https://docs.rsshub.app/routes/blog#cai-xin-bo-ke",
      },
    ],
    database: [
      {
        title: "财新数据通",
        docs: "https://docs.rsshub.app/routes/traditional-media#cai-xin-wang",
        source: ["/news", "/"],
        target: "/caixin/database",
      },
    ],
    k: [
      {
        title: "财新一线",
        docs: "https://docs.rsshub.app/routes/traditional-media#cai-xin-wang",
        source: ["/web", "/"],
        target: "/caixin/database",
      },
    ],
    weekly: [
      {
        title: "财新周刊",
        docs: "https://docs.rsshub.app/routes/traditional-media#cai-xin-wang",
        source: ["/", "/*"],
        target: "/caixin/weekly",
      },
    ],
  },
  "caixinglobal.com": {
    _name: "Caixin Global",
    ".": [
      {
        title: "Latest News",
        docs: "https://docs.rsshub.app/routes/traditional-media#caixin-global",
        source: ["/news", "/"],
        target: "/caixinglobal/latest",
      },
    ],
  },
  "cste.org.cn": {
    _name: "中国技术经济学会",
    ".": [
      {
        title: "栏目",
        docs: "https://docs.rsshub.app/routes/study#zhong-guo-ji-shu-jing-ji-xue-hui-lan-mu",
        source: ["/site/term", "/"],
        target: (params, url) =>
          `/cste/${url.match(/site\/term\/(\d+)\.html/)[1]}`,
      },
    ],
  },
  "cankaoxiaoxi.com": {
    _name: "参考消息",
    ".": [
      {
        title: "栏目",
        docs: "https://docs.rsshub.app/routes/traditional-media#can-kao-xiao-xi-lan-mu",
        source: ["/"],
        target: (params, url) => {
          const urlStr = new URL(url).toString()
          return `/cankaoxiaoxi/column${/\/#\//.test(urlStr) ? `/${urlStr.split("/").pop()}` : ""}`
        },
      },
    ],
  },
  "cartoonmad.com": {
    _name: "動漫狂",
    ".": [
      {
        title: "漫画更新",
        docs: "https://docs.rsshub.app/routes/anime#dong-man-kuang",
        source: ["/comic/:id"],
        target: "/cartoonmad/comic/:id",
      },
    ],
  },
  "cas.cn": {
    _name: "中国科学院",
    www: [
      {
        title: "成果转化",
        docs: "https://docs.rsshub.app/routes/university#zhong-guo-ke-xue-yuan",
        source: ["/cg/:caty?"],
        target: "/cas/cg/:caty?",
      },
    ],
    "www.genetics": [
      {
        title: "遗传与生物学研究所 - 学术活动",
        docs: "https://docs.rsshub.app/routes/university#zhong-guo-ke-xue-yuan",
        source: ["/jixs/yg", "/"],
        target: "/cas/genetics/xshd",
      },
    ],
    "www.ia": [
      {
        title: "自动化所",
        docs: "https://docs.rsshub.app/routes/university#zhong-guo-ke-xue-yuan",
        source: ["/yjsjy/zs/sszs", "/"],
        target: "/cas/ia/yjs",
      },
    ],
    "www.iee": [
      {
        title: "电工研究所 科研动态",
        docs: "https://docs.rsshub.app/routes/university#zhong-guo-ke-xue-yuan",
        source: ["/xwzx/kydt", "/"],
        target: "/cas/iee/kydt",
      },
    ],
    "www.is": [
      {
        title: "软件研究所",
        docs: "https://docs.rsshub.app/routes/university#zhong-guo-ke-xue-yuan",
        source: ["/"],
        target: (params, url, document) => {
          if (document.querySelector(".list-news")) {
            return `/cas/is/${url.split("/").slice(3, -1).join("/")}`
          }
        },
      },
    ],
    "www.sim": [
      {
        title: "上海微系统与信息技术研究所 - 科技进展",
        docs: "https://docs.rsshub.app/routes/university#zhong-guo-ke-xue-yuan",
        source: ["/xwzx2016/kyjz", "/"],
        target: "/cas/sim/kyjz",
      },
    ],
  },
  "mesalab.cn": {
    _name: "中国科学院",
    www: [
      {
        title: "信息工程研究所 第二研究室 处理架构组 知识库",
        docs: "https://docs.rsshub.app/routes/university#zhong-guo-ke-xue-yuan",
        source: ["/f/article/articleList", "/"],
        target: "/cas/mesalab/kb",
      },
    ],
  },
  "cast.org.cn": {
    _name: "中国科学技术协会",
    ".": [
      {
        title: "通用",
        docs: "https://docs.rsshub.app/routes/government#zhong-guo-ke-xue-ji-shu-xie-hui",
        source: ["/col/:column/index.html"],
        target: (params) => `/cast/${params.column.replace("col", "")}`,
      },
    ],
  },
  "cau.edu.cn": {
    _name: "中国农业大学",
    ciee: [
      {
        title: "信息与电气工程学院",
        docs: "https://docs.rsshub.app/routes/university#zhong-guo-nong-ye-da-xue",
        source: ["/col/col26712/index.html", "/"],
        target: "/cau/ele",
      },
    ],
    yz: [
      {
        title: "研招网通知公告",
        docs: "https://docs.rsshub.app/routes/university#zhong-guo-nong-ye-da-xue",
        source: ["/col/col41740/index.html", "/"],
        target: "/cau/yjs",
      },
    ],
  },
  "caus.com": {
    _name: "加美财经",
    ".": [
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/new-media#jia-mei-cai-jing",
        source: ["/home", "/focus_news", "/hours", "/fortune", "/life"],
        target: (_, url) => `/caus/${new URL(url).searchParams.get("id")}`,
      },
    ],
  },
  "cbaigui.com": {
    _name: "纪妖",
    ".": [
      {
        title: "通用",
        docs: "https://docs.rsshub.app/routes/new-media#ji-yao-tong-yong",
        source: ["/"],
        target: (params, url) => {
          url = new URL(url)
          const path = url.href.match(/\.com(.*?)/)[1]

          return `/cbaigui${path}`
        },
      },
    ],
  },
  "cbc.ca": {
    _name: "Canadian Broadcasting Corporation",
    ".": [
      {
        title: "News",
        docs: "https://docs.rsshub.app/routes/traditional-media#canadian-broadcasting-corporation",
        source: ["/news"],
        target: "/cbc/topics",
      },
    ],
  },
  "cbirc.gov.cn": {
    _name: "中国银行保险监督管理委员会",
    ".": [
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/government#zhong-guo-yin-xing-bao-xian-jian-du-guan-li-wei-yuan-hui",
        source: ["/:category", "/"],
        target: "/cbirc/:category?",
      },
    ],
  },
  "cbnweek.com": {
    _name: "第一财经杂志",
    ".": [
      {
        title: "首页",
        docs: "https://docs.rsshub.app/routes/finance#di-yi-cai-jing-za-zhi-shou-ye",
        source: ["/"],
        target: "/cbnweek",
      },
    ],
  },
  "ccac.org.mo": {
    _name: "澳门廉政公署",
    ".": [
      {
        title: "最新消息",
        docs: "https://docs.rsshub.app/routes/government#ao-men-lian-zheng-gong-shu",
        source: ["/:lang/news.html"],
        target: "/ccac/news/all/:lang",
      },
    ],
  },
  "ccf.org.cn": {
    _name: "中国计算机学会",
    ".": [
      {
        title: "新闻",
        docs: "https://docs.rsshub.app/routes/study#zhong-guo-ji-suan-ji-xue-hui",
        source: ["/:category", "/"],
        target: "/ccf/news/:category",
      },
    ],
    ccfcv: [
      {
        title: "计算机视觉专委会 - 学术动态 - 学术前沿",
        docs: "https://docs.rsshub.app/routes/study#zhong-guo-ji-suan-ji-xue-hui",
        source: ["/ccfcv/xsdt/xsqy/"],
        target: "/ccf/ccfcv/xsdt/xsqy",
      },
      {
        title: "计算机视觉专委会 - 学术动态 - 热点征文",
        docs: "https://docs.rsshub.app/routes/study#zhong-guo-ji-suan-ji-xue-hui",
        source: ["/ccfcv/xsdt/rdzw/"],
        target: "/ccf/ccfcv/xsdt/rdzw",
      },
      {
        title: "计算机视觉专委会 - 学术动态 - 学术会议",
        docs: "https://docs.rsshub.app/routes/study#zhong-guo-ji-suan-ji-xue-hui",
        source: ["/ccfcv/xsdt/xshy/"],
        target: "/ccf/ccfcv/xsdt/xshy",
      },
    ],
    tfbd: [
      {
        title: "大数据专家委员会",
        docs: "https://docs.rsshub.app/routes/study#zhong-guo-ji-suan-ji-xue-hui",
        source: ["/tfbd/:caty/:id", "/"],
        target: "/ccf/tfbd/:caty/:id",
      },
    ],
  },
  "91wllm.com": {
    _name: "湖北高校就业网络联盟",
    wtu: [
      {
        title: "武汉纺织大学就业信息",
        docs: "https://docs.rsshub.app/routes/university#wu-han-fang-zhi-da-xue",
        source: "/news/index/tag/:type",
        target: "/wtu/job/:type",
      },
    ],
  },
  "ccnu.edu.cn": {
    _name: "华中师范大学",
    cs: [
      {
        title: "计算机学院",
        docs: "https://docs.rsshub.app/routes/university#hua-zhong-shi-fan-da-xue",
        source: ["/xwzx/tzgg.htm", "/"],
        target: "/ccnu/cs",
      },
    ],
    gs: [
      {
        title: "研究生通知公告",
        docs: "https://docs.rsshub.app/routes/university#hua-zhong-shi-fan-da-xue",
        source: ["/zsgz/ssyjs.htm", "/"],
        target: "/ccnu/yjs",
      },
    ],
    uowji: [
      {
        title: "伍论贡学院",
        docs: "https://docs.rsshub.app/routes/university#hua-zhong-shi-fan-da-xue",
        source: ["/xwzx/tzgg.htm", "/"],
        target: "/ccnu/wu",
      },
    ],
  },
  "ccreports.com.cn": {
    _name: "消费者报道",
    www: [
      {
        title: "要闻",
        docs: "https://docs.rsshub.app/routes/shopping#xiao-fei-zhe-bao-dao-yao-wen",
        source: ["/"],
        target: "/ccreports/article",
      },
    ],
  },
  "cctv.com": {
    _name: "CCTV",
    navi: [
      {
        title: "栏目订阅",
        docs: "https://docs.rsshub.app/routes/multimedia#cntv-lan-mu",
        source: ["/"],
        target: "/cntv/:column",
      },
    ],
  },
  "cde.org.cn": {
    _name: "国家药品监督管理局药品审评中心",
    www: [
      {
        title: "政务新闻",
        docs: "https://docs.rsshub.app/routes/government#guo-jia-yao-pin-shen-ping-wang-zhan-shou-ye",
        source: ["/main/news/listpage/545cf855a50574699b46b26bcb165f32"],
        target: "/cde/news/zwxw",
      },
      {
        title: "要闻导读",
        docs: "https://docs.rsshub.app/routes/government#guo-jia-yao-pin-shen-ping-wang-zhan-shou-ye",
        source: ["/main/news/listpage/1e0a362d64015ebcbf32d6949acbba11"],
        target: "/cde/news/ywdd",
      },
      {
        title: "图片新闻",
        docs: "https://docs.rsshub.app/routes/government#guo-jia-yao-pin-shen-ping-wang-zhan-shou-ye",
        source: ["/main/news/listpage/4b49e3142441860ac6a48c888a54712a"],
        target: "/cde/news/tpxw",
      },
      {
        title: "工作动态",
        docs: "https://docs.rsshub.app/routes/government#guo-jia-yao-pin-shen-ping-wang-zhan-shou-ye",
        source: ["/main/news/listpage/3cc45b396497b598341ce3af000490e5"],
        target: "/cde/news/gzdt",
      },
      {
        title: "法律法规",
        docs: "https://docs.rsshub.app/routes/government#guo-jia-yao-pin-shen-ping-wang-zhan-shou-ye",
        source: ["/main/policy/listpage/9f9c74c73e0f8f56a8bfbc646055026d"],
        target: "/cde/policy/flfg",
      },
      {
        title: "中心规章",
        docs: "https://docs.rsshub.app/routes/government#guo-jia-yao-pin-shen-ping-wang-zhan-shou-ye",
        source: ["/main/policy/listpage/369ac7cfeb67c6000c33f85e6f374044"],
        target: "/cde/policy/zxgz",
      },
      {
        title: "优先审评公示 - 信息公开",
        docs: "https://docs.rsshub.app/routes/government#guo-jia-yao-pin-shen-ping-wang-zhan-shou-ye",
        source: ["/main/xxgk/listpage/2f78f372d351c6851af7431c7710a731"],
        target: "/cde/xxgf/priorityApproval",
      },
      {
        title: "突破性治疗公示 - 信息公开",
        docs: "https://docs.rsshub.app/routes/government#guo-jia-yao-pin-shen-ping-wang-zhan-shou-ye",
        source: ["/main/xxgk/listpage/da6efd086c099b7fc949121166f0130c"],
        target: "/cde/xxgf/breakthroughCure",
      },
      {
        title: "临床试验默示许可 - 信息公开",
        docs: "https://docs.rsshub.app/routes/government#guo-jia-yao-pin-shen-ping-wang-zhan-shou-ye",
        source: ["/main/xxgk/listpage/4b5255eb0a84820cef4ca3e8b6bbe20c"],
        target: "/cde/xxgf/cliniCal",
      },
      {
        title: "发布通告 - 指导原则专栏",
        docs: "https://docs.rsshub.app/routes/government#guo-jia-yao-pin-shen-ping-wang-zhan-shou-ye",
        source: ["/main/xxgk/listpage/2853510d929253719601db17b8a9fd81"],
        target: "/cde/zdyz/domesticGuide",
      },
      {
        title: "征求意见 - 指导原则专栏",
        docs: "https://docs.rsshub.app/routes/government#guo-jia-yao-pin-shen-ping-wang-zhan-shou-ye",
        source: ["/main/xxgk/listpage/3c49fad55caad7a034c263cfc2b6eb9c"],
        target: "/cde/zdyz/opinionList",
      },
    ],
  },
  "cdi.com.cn": {
    _name: "国家高端智库 / 综合开发研究院",
    ".": [
      {
        title: "栏目",
        docs: "https://docs.rsshub.app/routes/new-media#guo-jia-gao-duan-zhi-ku-zong-he-kai-fa-yan-jiu-yuan",
        source: ["/Article/List", "/"],
        target: (params, url) =>
          `/cdi/${new URL(url).searchParams.get("ColumnId")}`,
      },
    ],
  },
  "cdzjryb.com": {
    _name: "成都住建蓉 e 办",
    zw: [
      {
        title: "商品住房购房登记",
        docs: "https://docs.rsshub.app/routes/other#cheng-dou-zhu-jian-rong-e-ban",
        source: ["/lottery/accept/projectList", "/"],
        target: "/cdzjryb/zw/projectList",
      },
    ],
  },
  "cebbank.com": {
    _name: "中国光大银行",
    ".": [
      {
        title: "外汇牌价 - 牌价总览",
        docs: "https://docs.rsshub.app/routes/other#zhong-guo-guang-da-yin-hang",
        source: ["/site/ygzx/whpj/index.html", "/eportal/ui", "/"],
        target: "/cebbank/quotation/all",
      },
      {
        title: "外汇牌价 - 历史记录",
        docs: "https://docs.rsshub.app/routes/other#zhong-guo-guang-da-yin-hang",
        source: ["/site/ygzx/whpj/rmbwhpjlspj/index.html"],
        target: (_, url) =>
          `/cebbank/quotation/history/${new URL(url).searchParams.get("currcode")}`,
      },
    ],
  },
  "cfachina.org": {
    _name: "中国期货业协会",
    ".": [
      {
        title: "分析师园地",
        docs: "https://docs.rsshub.app/other#zhong-guo-qi-huo-ye-xie-hui",
        source: ["/servicesupport/analygarden/:program?", "/"],
        target: "/cfachina/servicesupport/analygarden/:program?",
      },
    ],
  },
  "cgtn.com": {
    _name: "中国环球电视网 CGTN",
    ".": [
      {
        title: "播客",
        docs: "https://docs.rsshub.app/routes/traditional-media#zhong-guo-huan-qiu-dian-shi-wang",
        source: ["/podcast/column/:category/*/:id"],
        target: "/cgtn/podcast/:category/:id",
      },
    ],
  },
  "chaincatcher.com": {
    _name: "链捕手 ChainCatcher",
    ".": [
      {
        title: "首页",
        docs: "https://docs.rsshub.app/routes/new-media#lian-bu-shou-chaincatcher",
        source: ["/"],
        target: "/chaincatcher",
      },
      {
        title: "快讯",
        docs: "https://docs.rsshub.app/routes/new-media#lian-bu-shou-chaincatcher",
        source: ["/news", "/"],
        target: "/chaincatcher/news",
      },
    ],
  },
  "changba.com": {
    _name: "唱吧",
    ".": [
      {
        title: "用户",
        docs: "https://docs.rsshub.app/routes/social-media#chang-ba",
        source: ["/s/:userid"],
        target: "/changba/:userid",
      },
    ],
  },
  "chaoxing.com": {
    _name: "超星",
    ".": [
      {
        title: "期刊",
        docs: "https://docs.rsshub.app/routes/reading#chao-xing-qi-kan",
        source: ["/"],
        target: (params, url) =>
          `/chaoxing/qk/${new URL(url).searchParams.get("mags")}`,
      },
    ],
  },
  "chaping.cn": {
    _name: "差评",
    ".": [
      {
        title: "图片墙",
        docs: "https://docs.rsshub.app/routes/new-media#cha-ping",
        source: ["/"],
        target: "/chaping/banner",
      },
      {
        title: "资讯",
        docs: "https://docs.rsshub.app/routes/new-media#cha-ping",
        source: ["/news"],
        target: (params, url) => {
          const cateList = ["15", "3", "7", "5", "6", "1", "8", "9"]
          const cate = new URL(url).searchParams.get("cate")
          if (cateList.includes(cate)) {
            return `/chaping/news/${cate}`
          }
        },
      },
      {
        title: "快讯",
        docs: "https://docs.rsshub.app/routes/new-media#cha-ping",
        source: ["/newsflash"],
        target: "/chaping/newsflash",
      },
    ],
  },
  "chiculture.org.hk": {
    _name: "通識・現代中國",
    ".": [
      {
        title: "議題熱話",
        docs: "https://docs.rsshub.app/routes/new-media#tong-shi-・-xian-dai-zhong-guo",
        source: ["/tc/hot-topics"],
        target: (_, url) => {
          const searchParams = new URL(url).searchParams
          return `/chiculture${searchParams.has("category") ? `/${searchParams.get("category")}` : ""}`
        },
      },
    ],
  },
  "china.com": {
    _name: "中华网",
    finance: [
      {
        title: "财经新闻",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-hua-wang",
        source: "/:category",
        target: "/china/finance/:category?",
      },
    ],
    military: [
      {
        title: "军事新闻",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-hua-wang",
        source: "/news",
        target: "/china/news/military",
      },
    ],
    news: [
      {
        title: "时事新闻",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-hua-wang",
        source: "/:category",
        target: "/china/news/:category?",
      },
    ],
  },
  "chinacef.cn": {
    _name: "首席经济学家论坛",
    ".": [
      {
        title: "最新文章列表",
        docs: "https://docs.rsshub.app/routes/finance#shou-xi-jing-ji-xue-jia-lun-tan",
        source: ["/"],
        target: "/chinacef",
      },
      {
        title: "专家文章",
        docs: "https://docs.rsshub.app/routes/finance#shou-xi-jing-ji-xue-jia-lun-tan-zhuan-jia",
        source: ["/index.php/experts/zjmain/experts_id/:experts_id"],
        target: "/chinacef/:experts_id",
      },
      {
        title: "金融热点",
        docs: "https://docs.rsshub.app/routes/finance#shou-xi-jing-ji-xue-jia-lun-tan-jin-rong-re-dian",
        source: ["/index.php/index/index"],
        target: "/chinacef/portal/hot",
      },
    ],
  },
  "chinadegrees.com.cn": {
    _name: "中华人民共和国学位证书查询",
    ".": [
      {
        title: "各学位授予单位学位证书上网进度",
        docs: "https://docs.rsshub.app/routes/study#zhong-hua-ren-min-gong-he-guo-xue-wei-zheng-shu-cha-xun",
        source: ["/help/*province"],
        target: (params) =>
          `/chinadegrees/${params.province.replace("unitSwqk", "").replace(".html", "")}`,
      },
    ],
  },
  "chinafactcheck.com": {
    _name: "有据",
    ".": [
      {
        title: "最新文章列表",
        docs: "https://docs.rsshub.app/routes/other#you-ju-zui-xin-wen-zhang-lie-biao",
        source: ["/"],
        target: "/chinafactcheck",
      },
    ],
  },
  "chinaisa.org.cn": {
    _name: "中国钢铁工业协会",
    ".": [
      {
        title: "栏目",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-gang-tie-gong-ye-xie-hui-lan-mu",
        source: ["/gxportal/xfgl/portal/list.html"],
        target: (params, url) => {
          url = new URL(url)
          const columnId = url.searchParams.get("columnId")

          return `/chinaisa${columnId ? `/${columnId}` : ""}`
        },
      },
    ],
  },
  "chinanews.com.cn": {
    _name: "中国新闻网",
    ".": [
      {
        title: "最新",
        docs: "https://docs.rsshub.app/routes/traditional-media#zhong-xin-wang",
        source: ["/"],
        target: "/chinanews",
      },
    ],
  },
  "chinathinktanks.org.cn": {
    _name: "中国智库网",
    www: [
      {
        title: "观点与实践",
        docs: "https://docs.rsshub.app/routes/study#zhong-guo-zhi-ku-wang",
        source: "/",
        target: (params, url) =>
          `/chinathinktanks/${new URL(url).searchParams.get("id")}`,
      },
    ],
  },
  "chinaventure.com.cn": {
    _name: "投中网",
    ".": [
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/new-media#tou-zhong-wang",
        source: ["/"],
        target: "/chinaventure",
      },
    ],
  },
  "chinawriter.com.cn": {
    _name: "中国作家网",
    ".": [
      {
        title: "栏目",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/:id*"],
        target: (params, url) => {
          url = new URL(url)
          const path = url.href.match(
            /\.\w+([\d/]+)(?:\/index(?:\.html)?)?$/,
          )[1]

          return `/chinawriter${path ?? ""}`
        },
      },
      {
        title: "服务",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/403937"],
        target: "/chinawriter/403937",
      },
      {
        title: "会员",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/403978"],
        target: "/chinawriter/403978",
      },
      {
        title: "文学奖项",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/403973"],
        target: "/chinawriter/403973",
      },
      {
        title: "新闻",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/403990"],
        target: "/chinawriter/403990",
      },
      {
        title: "访谈",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/403997"],
        target: "/chinawriter/403997",
      },
      {
        title: "艺术",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404002"],
        target: "/chinawriter/404002",
      },
      {
        title: "理论评论",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404029"],
        target: "/chinawriter/404029",
      },
      {
        title: "文史",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404057"],
        target: "/chinawriter/404057",
      },
      {
        title: "科幻",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404078"],
        target: "/chinawriter/404078",
      },
      {
        title: "书汇",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404058"],
        target: "/chinawriter/404058",
      },
      {
        title: "新作品",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404015"],
        target: "/chinawriter/404015",
      },
      {
        title: "世界文坛",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404085"],
        target: "/chinawriter/404085",
      },
      {
        title: "民族文艺",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404086"],
        target: "/chinawriter/404086",
      },
      {
        title: "网络文学",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404022"],
        target: "/chinawriter/404022",
      },
      {
        title: "儿童文学",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404059"],
        target: "/chinawriter/404059",
      },
      {
        title: "会员 - 新发展会员名单",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/403978/403979", "/403978"],
        target: "/chinawriter/403978/403979",
      },
      {
        title: "会员 - 讣告",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/403978/403981", "/403978"],
        target: "/chinawriter/403978/403981",
      },
      {
        title: "文学奖项 - 其他文学奖项",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/403973/419349", "/403973"],
        target: "/chinawriter/403973/419349",
      },
      {
        title: "新闻 - 时政新闻",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/403990/403991", "/403990"],
        target: "/chinawriter/403990/403991",
      },
      {
        title: "新闻 - 中国作协",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/403990/403993", "/403990"],
        target: "/chinawriter/403990/403993",
      },
      {
        title: "新闻 - 主席",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/403990/441519", "/403990"],
        target: "/chinawriter/403990/441519",
      },
      {
        title: "新闻 - 党组书记",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/403990/441520", "/403990"],
        target: "/chinawriter/403990/441520",
      },
      {
        title: "新闻 - 各地文讯",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/403990/403994", "/403990"],
        target: "/chinawriter/403990/403994",
      },
      {
        title: "艺术 - 新闻",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404002/404003", "/404002"],
        target: "/chinawriter/404002/404003",
      },
      {
        title: "艺术 - 影视",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404002/419388", "/404002"],
        target: "/chinawriter/404002/419388",
      },
      {
        title: "艺术 - 舞台",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404002/419389", "/404002"],
        target: "/chinawriter/404002/419389",
      },
      {
        title: "艺术 - 人物",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404002/404005", "/404002"],
        target: "/chinawriter/404002/404005",
      },
      {
        title: "艺术 - 展览",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404002/419390", "/404002"],
        target: "/chinawriter/404002/419390",
      },
      {
        title: "艺术 - 书画",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404002/419391", "/404002"],
        target: "/chinawriter/404002/419391",
      },
      {
        title: "理论评论 - 重要理论文章",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404029/419350", "/404029"],
        target: "/chinawriter/404029/419350",
      },
      {
        title: "理论评论 - 理论热点",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404029/419351", "/404029"],
        target: "/chinawriter/404029/419351",
      },
      {
        title: "理论评论 - 文学评论",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404029/404030", "/404029"],
        target: "/chinawriter/404029/404030",
      },
      {
        title: "理论评论 - 创作谈",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404029/404032", "/404029"],
        target: "/chinawriter/404029/404032",
      },
      {
        title: "理论评论 - 争鸣",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404029/404033", "/404029"],
        target: "/chinawriter/404029/404033",
      },
      {
        title: "理论评论 - 综述",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404029/404034", "/404029"],
        target: "/chinawriter/404029/404034",
      },
      {
        title: "理论评论 - 《中国当代文学研究》",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404087/404988/425775", "/404087/404988", "/404087"],
        target: "/chinawriter/404087/404988/425775",
      },
      {
        title: "文史 - 文坛轶事",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404057/404063", "/404057"],
        target: "/chinawriter/404057/404063",
      },
      {
        title: "文史 - 文史漫谈",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404057/442005", "/404057"],
        target: "/chinawriter/404057/442005",
      },
      {
        title: "文史 - 重温经典",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404057/419384", "/404057"],
        target: "/chinawriter/404057/419384",
      },
      {
        title: "文史 - 版本研究",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404057/419387", "/404057"],
        target: "/chinawriter/404057/419387",
      },
      {
        title: "文史 - 名人手迹",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404057/419382", "/404057"],
        target: "/chinawriter/404057/419382",
      },
      {
        title: "文史 - 茅盾文学奖获奖作家研究",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404087/404988/429369", "/404087/404988", "/404087"],
        target: "/chinawriter/404087/404988/429369",
      },
      {
        title: "科幻 - 动态",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404078/404079", "/404078"],
        target: "/chinawriter/404078/404079",
      },
      {
        title: "科幻 - 评论",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404078/404080", "/404078"],
        target: "/chinawriter/404078/404080",
      },
      {
        title: "科幻 - 作家印象",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404078/404081", "/404078"],
        target: "/chinawriter/404078/404081",
      },
      {
        title: "科幻 - 作品",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404078/404083", "/404078"],
        target: "/chinawriter/404078/404083",
      },
      {
        title: "科幻 - 科声幻影",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404078/404084", "/404078"],
        target: "/chinawriter/404078/404084",
      },
      {
        title: "书汇 - 书摘",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404058/404067", "/404058"],
        target: "/chinawriter/404058/404067",
      },
      {
        title: "书汇 - 图书排行",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404058/404069", "/404058"],
        target: "/chinawriter/404058/404069",
      },
      {
        title: "新作品 - 小说",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404015/404017", "/404015"],
        target: "/chinawriter/404015/404017",
      },
      {
        title: "新作品 - 诗歌",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404015/404020", "/404015"],
        target: "/chinawriter/404015/404020",
      },
      {
        title: "新作品 - 散文",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404015/404018", "/404015"],
        target: "/chinawriter/404015/404018",
      },
      {
        title: "新作品 - 纪实",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404015/404019", "/404015"],
        target: "/chinawriter/404015/404019",
      },
      {
        title: "新作品 - 其他",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404015/419926", "/404015"],
        target: "/chinawriter/404015/419926",
      },
      {
        title: "新作品 - 平台推荐",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404015/419789", "/404015"],
        target: "/chinawriter/404015/419789",
      },
      {
        title: "新作品 - 本周之星",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404015/431511", "/404015"],
        target: "/chinawriter/404015/431511",
      },
      {
        title: "新作品 - 2018年5月18日前原创作品",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404009"],
        target: "/chinawriter/404009",
      },
      {
        title: "新作品 - 《人民文学》",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404015/416204/418925", "/404015/416204", "/404015"],
        target: "/chinawriter/404015/416204/418925",
      },
      {
        title: "新作品 - 《诗刊》",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404015/416204/418926", "/404015/416204", "/404015"],
        target: "/chinawriter/404015/416204/418926",
      },
      {
        title: "新作品 - 《民族文学》",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404015/416204/418928", "/404015/416204", "/404015"],
        target: "/chinawriter/404015/416204/418928",
      },
      {
        title: "新作品 - 《收获》",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404015/416204/418958", "/404015/416204", "/404015"],
        target: "/chinawriter/404015/416204/418958",
      },
      {
        title: "新作品 - 《十月》",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404015/416204/418956", "/404015/416204", "/404015"],
        target: "/chinawriter/404015/416204/418956",
      },
      {
        title: "新作品 - 《小说选刊》",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404015/416204/418929", "/404015/416204", "/404015"],
        target: "/chinawriter/404015/416204/418929",
      },
      {
        title: "新作品 - 《北京文学》",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404015/416204/418954", "/404015/416204", "/404015"],
        target: "/chinawriter/404015/416204/418954",
      },
      {
        title: "新作品 - 《上海文学》",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404015/416204/418962", "/404015/416204", "/404015"],
        target: "/chinawriter/404015/416204/418962",
      },
      {
        title: "新作品 - 《天津文学》",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404015/416204/419004", "/404015/416204", "/404015"],
        target: "/chinawriter/404015/416204/419004",
      },
      {
        title: "新作品 - 《草原》",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404015/416204/418989", "/404015/416204", "/404015"],
        target: "/chinawriter/404015/416204/418989",
      },
      {
        title: "新作品 - 《黄河》",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404015/416204/426204", "/404015/416204", "/404015"],
        target: "/chinawriter/404015/416204/426204",
      },
      {
        title: "新作品 - 《江南》",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404015/416204/418957", "/404015/416204", "/404015"],
        target: "/chinawriter/404015/416204/418957",
      },
      {
        title: "新作品 - 《钟山》",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404015/416204/418984", "/404015/416204", "/404015"],
        target: "/chinawriter/404015/416204/418984",
      },
      {
        title: "新作品 - 《广州文艺》",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404015/416204/419881", "/404015/416204", "/404015"],
        target: "/chinawriter/404015/416204/419881",
      },
      {
        title: "新作品 - 《湖南文学》",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404015/416204/419156", "/404015/416204", "/404015"],
        target: "/chinawriter/404015/416204/419156",
      },
      {
        title: "新作品 - 《山西文学》",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404015/416204/419827", "/404015/416204", "/404015"],
        target: "/chinawriter/404015/416204/419827",
      },
      {
        title: "新作品 - 《花城》",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404015/416204/418960", "/404015/416204", "/404015"],
        target: "/chinawriter/404015/416204/418960",
      },
      {
        title: "新作品 - 《青年作家》",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404015/416204/418967", "/404015/416204", "/404015"],
        target: "/chinawriter/404015/416204/418967",
      },
      {
        title: "新作品 - 《雨花》",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404015/416204/419885", "/404015/416204", "/404015"],
        target: "/chinawriter/404015/416204/419885",
      },
      {
        title: "新作品 - 《红豆》",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404015/416204/418993", "/404015/416204", "/404015"],
        target: "/chinawriter/404015/416204/418993",
      },
      {
        title: "新作品 - 《长江文艺》",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404015/416204/418961", "/404015/416204", "/404015"],
        target: "/chinawriter/404015/416204/418961",
      },
      {
        title: "新作品 - 《中国作家》",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404015/416204/418927", "/404015/416204", "/404015"],
        target: "/chinawriter/404015/416204/418927",
      },
      {
        title: "新作品 - 《青年文学》",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404015/416204/418979", "/404015/416204", "/404015"],
        target: "/chinawriter/404015/416204/418979",
      },
      {
        title: "新作品 - 《美文》",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404015/416204/418985", "/404015/416204", "/404015"],
        target: "/chinawriter/404015/416204/418985",
      },
      {
        title: "新作品 - 《芙蓉》",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404015/416204/418986", "/404015/416204", "/404015"],
        target: "/chinawriter/404015/416204/418986",
      },
      {
        title: "新作品 - 《长城》",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404015/416204/418987", "/404015/416204", "/404015"],
        target: "/chinawriter/404015/416204/418987",
      },
      {
        title: "新作品 - 《福建文学》",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404015/416204/419003", "/404015/416204", "/404015"],
        target: "/chinawriter/404015/416204/419003",
      },
      {
        title: "新作品 - 《啄木鸟》",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404015/416204/435225", "/404015/416204", "/404015"],
        target: "/chinawriter/404015/416204/435225",
      },
      {
        title: "新作品 - 《芳草》",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404015/416204/424311", "/404015/416204", "/404015"],
        target: "/chinawriter/404015/416204/424311",
      },
      {
        title: "新作品 - 《小说月报》",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404015/416204/418963", "/404015/416204", "/404015"],
        target: "/chinawriter/404015/416204/418963",
      },
      {
        title: "世界文坛 - 视点",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404085/404090", "/404085"],
        target: "/chinawriter/404085/404090",
      },
      {
        title: "世界文坛 - 译介",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404085/431803", "/404085"],
        target: "/chinawriter/404085/431803",
      },
      {
        title: "世界文坛 - 作家印象",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404085/404091", "/404085"],
        target: "/chinawriter/404085/404091",
      },
      {
        title: "世界文坛 - 文学评论",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404085/404092", "/404085"],
        target: "/chinawriter/404085/404092",
      },
      {
        title: "世界文坛 - 影像艺术",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404085/404093", "/404085"],
        target: "/chinawriter/404085/404093",
      },
      {
        title: "世界文坛 - 作品推介",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404085/404095", "/404085"],
        target: "/chinawriter/404085/404095",
      },
      {
        title: "民族文艺 - 动态",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404086/404098", "/404086"],
        target: "/chinawriter/404086/404098",
      },
      {
        title: "民族文艺 - 品评",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404086/404101", "/404086"],
        target: "/chinawriter/404086/404101",
      },
      {
        title: "民族文艺 - 作家印象",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404086/404099", "/404086"],
        target: "/chinawriter/404086/404099",
      },
      {
        title: "民族文艺 - 作品",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404086/404100", "/404086"],
        target: "/chinawriter/404086/404100",
      },
      {
        title: "民族文艺 - 影像",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404086/404102", "/404086"],
        target: "/chinawriter/404086/404102",
      },
      {
        title: "网络文学 - 动态",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404022/404023", "/404022"],
        target: "/chinawriter/404022/404023",
      },
      {
        title: "网络文学 - 观察",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404022/404027", "/404022"],
        target: "/chinawriter/404022/404027",
      },
      {
        title: "网络文学 - 访谈",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404022/404024", "/404022"],
        target: "/chinawriter/404022/404024",
      },
      {
        title: "网络文学 - 中国网络小说排行榜",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404022/404028", "/404022"],
        target: "/chinawriter/404022/404028",
      },
      {
        title: "儿童文学 - 视点",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404059/404071", "/404059"],
        target: "/chinawriter/404059/404071",
      },
      {
        title: "儿童文学 - 文学评论",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404059/404072", "/404059"],
        target: "/chinawriter/404059/404072",
      },
      {
        title: "儿童文学 - 作家印象",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404059/404073", "/404059"],
        target: "/chinawriter/404059/404073",
      },
      {
        title: "儿童文学 - 作品推介",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404059/404075", "/404059"],
        target: "/chinawriter/404059/404075",
      },
      {
        title: "儿童文学 - 动漫艺术",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-zuo-jia-wang-lan-mu",
        source: ["/404059/404076", "/404059"],
        target: "/chinawriter/404059/404076",
      },
    ],
  },
  "chsi.com.cn": {
    _name: "中国研究生招生信息网",
    yz: [
      {
        title: "考研热点新闻",
        docs: "https://docs.rsshub.app/routes/study#zhong-guo-yan-jiu-sheng-zhao-sheng-xin-xi-wang",
        source: ["/"],
        target: "/chsi/hotnews",
      },
      {
        title: "考研动态",
        docs: "https://docs.rsshub.app/routes/study#zhong-guo-yan-jiu-sheng-zhao-sheng-xin-xi-wang",
        source: ["/kyzx/kydt"],
        target: "/chsi/kydt",
      },
      {
        title: "考研资讯",
        docs: "https://docs.rsshub.app/routes/study#zhong-guo-yan-jiu-sheng-zhao-sheng-xin-xi-wang",
        source: ["/kyzx/:type"],
        target: "/chsi/kyzx/:type",
      },
    ],
  },
  "ciidbnu.org": {
    _name: "中国收入分配研究院",
    ".": [
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/new-media#",
        source: ["/new1.asp", "/"],
        target: (_params, url) =>
          `/ciidbnu/${new URL(url).searchParams.get("pagetype")}`,
      },
    ],
  },
  "civitai.com": {
    _name: "Civitai",
    ".": [
      {
        title: "Latest models",
        docs: "https://docs.rsshub.app/routes/program-update#civitai",
        source: "/",
        target: "/civitai/models",
      },
      {
        title: "Discussions",
        docs: "https://docs.rsshub.app/routes/program-update#civitai",
        source: "/models/:modelId",
        target: "/civitai/discussions/:modelId",
      },
    ],
  },
  "github.com": {
    _name: "GitHub",
    ".": [
      {
        title: "仓库 Branches",
        docs: "https://docs.rsshub.app/routes/programming#github",
        source: ["/:user/:repo/branches", "/:user/:repo"],
        target: "/github/branches/:user/:repo",
      },
      {
        title: "Issues / Pull Requests 评论",
        docs: "https://docs.rsshub.app/routes/programming#github",
        source: ["/:user/:repo/:type/:number"],
        target: "/github/comments/:user/:repo/:number",
      },
      {
        title: "Issue & Pull Request comments",
        docs: "https://docs.rsshub.app/routes/programming#github",
        source: ["/:user/:repo/:type"],
        target: "/github/comments/:user/:repo",
      },
      {
        title: "仓库 Contributors",
        docs: "https://docs.rsshub.app/routes/programming#github",
        source: ["/:user/:repo/graphs/contributors", "/:user/:repo"],
        target: "/github/contributors/:user/:repo",
      },
      {
        title: "文件 Commits",
        docs: "https://docs.rsshub.app/routes/programming#github",
        source: "/:user/:repo/blob/:branch/*filepath",
        target: "/github/file/:user/:repo/:branch/:filepath",
      },
      {
        title: "仓库 Issue",
        docs: "https://docs.rsshub.app/routes/programming#github",
        source: [
          "/:user/:repo/issues",
          "/:user/:repo/issues/:id",
          "/:user/:repo",
        ],
        target: "/github/issue/:user/:repo",
      },
      {
        title: "仓库 Pull Requests",
        docs: "https://docs.rsshub.app/routes/programming#github",
        source: [
          "/:user/:repo/pulls",
          "/:user/:repo/pulls/:id",
          "/:user/:repo",
        ],
        target: "/github/pull/:user/:repo",
      },
      {
        title: "Pulse",
        docs: "https://docs.rsshub.app/routes/programming#github",
        source: ["/:user/:repo/pulse", "/:user/:repo/pulse/:period"],
        target: "/github/pulse/:user/:repo/:period?",
      },
      {
        title: "用户仓库",
        docs: "https://docs.rsshub.app/routes/programming#github",
        source: "/:user",
        target: "/github/repos/:user",
      },
      {
        title: "仓库 Stars",
        docs: "https://docs.rsshub.app/routes/programming#github",
        source: ["/:user/:repo/stargazers", "/:user/:repo"],
        target: "/github/stars/:user/:repo",
      },
      {
        title: "用户 Starred Repositories",
        docs: "https://docs.rsshub.app/routes/programming#github",
        source: "/:user",
        target: "/github/starred_repos/:user",
      },
      {
        title: "Topics",
        docs: "https://docs.rsshub.app/routes/programming#github",
        source: "/topics",
        target: "/github/topics/:name/:qs?",
      },
      {
        title: "Trending",
        docs: "https://docs.rsshub.app/routes/programming#github",
        source: "/trending",
        target: "/github/trending/:since",
      },
      {
        title: "用户 Followers",
        docs: "https://docs.rsshub.app/routes/programming#github",
        source: "/:user",
        target: "/github/user/followers/:user",
      },
      {
        title: "Wiki 历史",
        docs: "https://docs.rsshub.app/routes/programming#github",
        source: [
          "/:user/:repo/wiki/:page/_history",
          "/:user/:repo/wiki/:page",
          "/:user/:repo/wiki/_history",
          "/:user/:repo/wiki",
        ],
        target: "/github/wiki/:user/:repo/:page",
      },
      {
        title: "Notifications 通知",
        docs: "https://docs.rsshub.app/routes/programming#github",
        source: ["/notifications"],
        target: "/github/notifications",
      },
    ],
    gist: [
      {
        title: "Gist Commits",
        docs: "https://docs.rsshub.app/routes/programming#github",
        source: [
          "/:owner/:gistId/revisions",
          "/:owner/:gistId/stargazers",
          "/:owner/:gistId/forks",
          "/:owner/:gistId",
        ],
        target: "/github/gist/:gistId",
      },
    ],
  },
  "clickme.net": {
    _name: "ClickMe",
    ".": [
      {
        title: "文章",
        docs: "https://docs.rsshub.app/routes/other#clickme",
        source: ["/:grouping/:name"],
        target: (params) =>
          `/clickme/default/${params.grouping === "t" ? "tag" : "category"}/${params.name}`,
      },
    ],
    r18: [
      {
        title: "文章",
        docs: "https://docs.rsshub.app/routes/other#clickme",
        source: ["/:grouping/:name"],
        target: (params) =>
          `/clickme/r18/${params.grouping === "t" ? "tag" : "category"}/${params.name}`,
      },
    ],
  },
  "cloudnative.to": {
    _name: "云原生社区",
    ".": [
      {
        title: "博客",
        docs: "https://docs.rsshub.app/routes/blog#yun-yuan-sheng-she-qu",
        source: ["/blog"],
        target: () => "/cloudnative/blog",
      },
    ],
  },
  "cls.cn": {
    _name: "财联社",
    ".": [
      {
        title: "电报",
        docs: "https://docs.rsshub.app/routes/finance#cai-lian-she",
        source: ["/telegraph", "/"],
        target: "/cls/telegraph",
      },
      {
        title: "深度",
        docs: "https://docs.rsshub.app/routes/finance#cai-lian-she",
        source: ["/depth", "/"],
        target: (_, url) => `/cls/depth/${new URL(url).searchParams.get("id")}`,
      },
      {
        title: "热门文章排行榜",
        docs: "https://docs.rsshub.app/routes/finance#cai-lian-she",
        source: ["/"],
        target: "/cls/hot",
      },
    ],
  },
  "cma.cn": {
    _name: "中国气象局",
    weather: [
      {
        title: "天气预报频道",
        docs: "https://docs.rsshub.app/routes/forecast#zhong-guo-qi-xiang-ju-tian-qi-yu-bao-pin-dao",
        source: ["/web/*"],
        target: (_, url) => {
          url = new URL(url).href
          const idMatches = url.match(/channel-(\d+)\.html/)

          return `/cma/channel${idMatches ? `/${idMatches[1]}` : ""}`
        },
      },
    ],
  },
  "cmde.org.cn": {
    _name: "国家药品监督管理局医疗器械技术审评中心",
    www: [
      {
        title: "通用",
        docs: "https://docs.rsshub.app/routes/government#guo-jia-yao-pin-jian-du-guan-li-ju-yi-liao-qi-xie-ji-shu-shen-ping-zhong-xin",
        source: ["/*cate"],
        target: (params) => `/cmde/${params.cate.replace("/index.html", "")}`,
      },
    ],
  },
  "cmpxchg8b.com": {
    _name: "cmpxchg8b",
    lock: [
      {
        title: "文章 articles",
        docs: "https://docs.rsshub.app/routes/blog#cmpxchg8b",
        source: ["/articles"],
        target: "/cmpxchg8b/articles",
      },
    ],
  },
  "cn-healthcare.com": {
    _name: "健康界",
    ".": [
      {
        title: "首页-资讯",
        docs: "https://docs.rsshub.app/routes/new-media#jian-kang-jie",
        source: ["/"],
        target: "/cn-healthcare/index",
      },
    ],
  },
  "cna.com.tw": {
    _name: "中央通訊社",
    ".": [
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/traditional-media#zhong-yang-tong-xun-she",
        source: ["/list/:id", "/topic/newstopic/:id"],
        target: (params) => `/cna/${params.id.replace(".aspx", "")}`,
      },
      {
        title: "分类(网页爬虫方法)",
        docs: "https://docs.rsshub.app/routes/traditional-media#zhong-yang-tong-xun-she",
        source: ["/list/:id"],
        target: (params) => `/cna/web/${params.id.replace(".aspx", "")}`,
      },
    ],
  },
  "cnbc.com": {
    _name: "CNBC",
    search: [
      {
        title: "全文 RSS",
        docs: "https://docs.rsshub.app/routes/traditional-media#cnbc",
        source: ["/rs/search/combinedcms/view.xml"],
        target: (_, url) => `/cnbc/rss/${new URL(url).searchParams.get("id")}`,
      },
    ],
    www: [
      {
        title: "全文 RSS",
        docs: "https://docs.rsshub.app/routes/traditional-media#cnbc",
        source: ["/id/:id/device/rss/rss.html"],
        target: "/cnbc/rss/:id",
      },
    ],
  },
  "cnbeta.com.tw": {
    _name: "cnBeta.COM",
    ".": [
      {
        title: "头条资讯",
        docs: "https://docs.rsshub.app/routes/new-media#cnbeta-com-tou-tiao-zi-xun",
        source: ["/"],
        target: "/cnbeta",
      },
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/new-media#cnbeta-com-fen-lei",
        source: ["/category/:id", "/"],
        target: "/cnbeta/category/:id",
      },
      {
        title: "主题",
        docs: "https://docs.rsshub.app/routes/new-media#cnbeta-com-zhu-ti",
        source: ["/topics/:id", "/"],
        target: "/cnbeta/topics/:id",
      },
    ],
  },
  "cnblogs.com": {
    _name: "博客园",
    www: [
      {
        title: "10天推荐排行榜",
        docs: "https://docs.rsshub.app/routes/blog#博客园",
        source: ["/aggsite/topdiggs"],
        target: "/cnblogs/aggsite/topdiggs",
      },
      {
        title: "48小时阅读排行",
        docs: "https://docs.rsshub.app/routes/blog#博客园",
        source: ["/aggsite/topviews"],
        target: "/cnblogs/aggsite/topviews",
      },
      {
        title: "编辑推荐",
        docs: "https://docs.rsshub.app/routes/blog#博客园",
        source: ["/aggsite/headline"],
        target: "/cnblogs/aggsite/headline",
      },
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/blog#博客园",
        source: ["/cate/:type"],
        target: "/cnblogs/cate/:type",
      },
      {
        title: "精华区",
        docs: "https://docs.rsshub.app/routes/blog#博客园",
        source: ["/pick"],
        target: "/cnblogs/pick",
      },
    ],
  },
  "cncf.io": {
    _name: "CNCF",
    ".": [
      {
        title: "Blog",
        docs: "https://docs.rsshub.app/routes/programming#cncf",
        source: ["/blog"],
        target: "/cncf/blog",
      },
      {
        title: "News",
        docs: "https://docs.rsshub.app/routes/programming#cncf",
        source: ["/news"],
        target: "/cncf/news",
      },
      {
        title: "Announcements",
        docs: "https://docs.rsshub.app/routes/programming#cncf",
        source: ["/announcements"],
        target: "/cncf/announcements",
      },
      {
        title: "Reports",
        docs: "https://docs.rsshub.app/routes/programming#cncf",
        source: ["/reports"],
        target: "/cncf/reports",
      },
    ],
  },
  "cneb.gov.cn": {
    _name: "中国国家应急广播",
    ".": [
      {
        title: "应急新闻",
        docs: "https://docs.rsshub.app/routes/forecast#zhong-guo-guo-jia-ying-ji-guang-bo",
        source: ["/yjxw/:category?", "/"],
        target: "/cneb/yjxw/:category?",
      },
      {
        title: "预警信息",
        docs: "https://docs.rsshub.app/routes/forecast#zhong-guo-guo-jia-ying-ji-guang-bo",
        source: ["/yjxx", "/"],
        target: "/cneb/yjxx",
      },
    ],
  },
  "cngal.org": {
    _name: "CnGal",
    www: [
      {
        title: "每周速报",
        docs: "https://docs.rsshub.app/routes/anime#cngal-mei-zhou-su-bao",
        source: ["/", "/weeklynews"],
        target: "/cngal/weekly",
      },
      {
        title: "制作者/游戏新闻",
        docs: "https://docs.rsshub.app/routes/anime#cngal-zhi-zuo-zhe-you-xi-xin-wen",
        source: ["/entries/index/:id"],
        target: "/cngal/entry/:id",
      },
    ],
  },
  "cnjxol.com": {
    _name: "南湖清风",
    ".": [
      {
        title: "嘉兴日报",
        docs: "https://docs.rsshub.app/routes/traditional-media#nan-hu-qing-feng-jia-xing-ri-bao",
        source: ["/"],
        target: "/cnjxol/jxrb/:id",
      },
      {
        title: "南湖晚报",
        docs: "https://docs.rsshub.app/routes/traditional-media#nan-hu-qing-feng-nan-hu-wan-bao",
        source: ["/"],
        target: "/cnjxol/nhwb/:id",
      },
    ],
  },
  "cnki.net": {
    _name: "中国知网",
    navi: [
      {
        title: "期刊",
        docs: "https://docs.rsshub.app/routes/journal#zhong-guo-zhi-wang-qi-kan",
        source: ["/knavi/journals/:name/detail"],
        target: "/cnki/journals/:name",
      },
      {
        title: "网络首发",
        docs: "https://docs.rsshub.app/routes/journal#zhong-guo-zhi-wang-wang-luo-shou-fa",
        source: ["/knavi/journals/:name/detail"],
        target: "/cnki/journals/debut/:name",
      },
    ],
    kns: [
      {
        title: "作者期刊文献",
        docs: "https://docs.rsshub.app/routes/journal#zhong-guo-zhi-wang-zuo-zhe-qi-kan-wen-xian",
        source: ["/kcms/detail/knetsearch.aspx", "/"],
        target: (_, url) =>
          `/cnki/author/${new URL(url).searchParams.get("code")}`,
      },
    ],
  },
  "cntheory.com": {
    _name: "理论网",
    paper: [
      {
        title: "学习时报",
        docs: "https://docs.rsshub.app/routes/traditional-media#li-lun-wang-xue-xi-shi-bao",
        source: ["/"],
        target: (params, url) =>
          `/cntheory/paper/${new URL(url).toString().match(/-(\w+)\.htm/)[1]}`,
      },
    ],
  },
  "codeforces.com": {
    _name: "Codeforces",
    ".": [
      {
        title: "Recent Actions",
        docs: "https://docs.rsshub.app/routes/programming#codeforces-recent-actions",
        source: ["/recent-actions"],
        target: "/codeforces/recent-actions",
      },
    ],
    www: [
      {
        title: "最新比赛",
        docs: "https://docs.rsshub.app/routes/programming#codeforces-zui-xin-bi-sai",
        source: ["/contests"],
        target: "/codeforces/contests",
      },
    ],
  },
  "coindesk.com": {
    _name: "CoinDesk",
    ".": [
      {
        title: "Coindesk Consensus Magazine",
        docs: "https://docs.rsshub.app/routes/new-media#coindesk-consensus-magazine",
        source: ["/"],
        target: "/coindesk/consensus-magazine",
      },
    ],
  },
  "comicat.org": {
    _name: "Comicat",
    ".": [
      {
        title: "搜索关键词",
        docs: "https://docs.rsshub.app/routes/anime#comicat",
      },
    ],
  },
  "comicskingdom.com": {
    _name: "Comics Kingdom",
    ".": [
      {
        title: "Archive",
        docs: "https://docs.rsshub.app/routes/anime#comics-kingdom",
        source: ["/:name/*", "/:name"],
        target: "/comicskingdom/:name",
      },
    ],
  },
  "consumer.org.hk": {
    _name: "消费者委员会",
    ".": [
      {
        title: "文章",
        docs: "https://docs.rsshub.app/routes/new-media#xiao-fei-zhe-wei-yuan-hui-wen-zhang",
        source: ["/"],
        target: "/consumer/:category?/:language?/:keyword?",
      },
    ],
  },
  "cool18.com": {
    _name: "酷 18",
    ".": [
      {
        title: "分站",
        docs: "https://docs.rsshub.app/routes/picture#cool-18",
        source: "/",
        target: "/cool18/:id?/:type?/:keyword?",
      },
    ],
  },
  "coolapk.com": {
    _name: "酷安",
    ".": [
      {
        title: "图文",
        docs: "https://docs.rsshub.app/routes/social-media#ku-an",
      },
      {
        title: "头条",
        docs: "https://docs.rsshub.app/routes/social-media#ku-an",
      },
      {
        title: "看看号",
        docs: "https://docs.rsshub.app/routes/social-media#ku-an",
      },
      {
        title: "话题",
        docs: "https://docs.rsshub.app/routes/social-media#ku-an",
      },
      {
        title: "用户",
        docs: "https://docs.rsshub.app/routes/social-media#ku-an",
      },
      {
        title: "热榜",
        docs: "https://docs.rsshub.app/routes/social-media#ku-an",
      },
    ],
  },
  "coomer.party": {
    _name: "Coomer",
    ".": [
      {
        title: "Artist",
        docs: "https://docs.rsshub.app/routes/multimedia#coomer-artist",
        source: ["/onlyfans/user/:id", "/"],
        target: "/coomer/artist/:id",
      },
      {
        title: "Recent Posts",
        docs: "https://docs.rsshub.app/routes/multimedia#coomer-recent-posts",
        source: ["/posts", "/"],
        target: "/coomer/posts",
      },
    ],
  },
  "copymanga.com": {
    _name: "拷贝漫画",
    ".": [
      {
        title: "漫画更新",
        docs: "https://docs.rsshub.app/routes/anime#kao-bei-man-hua",
        source: "/comic/:id",
        target: "/copymanga/comic/:id/5",
      },
    ],
  },
  "copymanga.info": {
    _name: "拷贝漫画",
    ".": [
      {
        title: "漫画更新",
        docs: "https://docs.rsshub.app/routes/anime#kao-bei-man-hua",
        source: "/comic/:id",
        target: "/copymanga/comic/:id/5",
      },
    ],
  },
  "copymanga.net": {
    _name: "拷贝漫画",
    ".": [
      {
        title: "漫画更新",
        docs: "https://docs.rsshub.app/routes/anime#kao-bei-man-hua",
        source: "/comic/:id",
        target: "/copymanga/comic/:id/5",
      },
    ],
  },
  "copymanga.org": {
    _name: "拷贝漫画",
    ".": [
      {
        title: "漫画更新",
        docs: "https://docs.rsshub.app/routes/anime#kao-bei-man-hua",
        source: "/comic/:id",
        target: "/copymanga/comic/:id/5",
      },
    ],
  },
  "copymanga.site": {
    _name: "拷贝漫画",
    ".": [
      {
        title: "漫画更新",
        docs: "https://docs.rsshub.app/routes/anime#kao-bei-man-hua",
        source: "/comic/:id",
        target: "/copymanga/comic/:id/5",
      },
    ],
  },
  "ey.gov.tw": {
    _name: "行政院消费者保护会",
    cpc: [
      {
        title: "新闻稿",
        docs: "https://docs.rsshub.app/routes/government#tai-wan-xing-zheng-yuan-xiao-fei-zhe-bao-hu-hui",
        source: "/Page/:type",
        target: (params) => {
          if (params.type === "A3412E2A5A7B398F") {
            return "/cycey/xwg"
          }
        },
      },
      {
        title: "消费资讯",
        docs: "https://docs.rsshub.app/routes/government#tai-wan-xing-zheng-yuan-xiao-fei-zhe-bao-hu-hui",
        source: "/Page/:type",
        target: (params) => {
          if (params.type === "E414CC218269CCE8") {
            return "/cycey/xfzx"
          }
        },
      },
    ],
  },
  "cpuid.com": {
    _name: "CPUID",
    ".": [
      {
        title: "News",
        docs: "https://docs.rsshub.app/routes/program-update#cpuid",
        source: ["/news.html", "/"],
        target: "/cpuid/news",
      },
    ],
  },
  "cqgas.cn": {
    _name: "重庆燃气",
    ".": [
      {
        title: "停气检修通知",
        docs: "https://docs.rsshub.app/routes/forecast#chong-qing-ran-qi",
        source: ["/"],
        target: "/cqgas/tqtz",
      },
    ],
  },
  "cqwu.net": {
    _name: "重庆文理学院",
    www: [
      {
        title: "通知",
        docs: "https://docs.rsshub.app/routes/university#chong-qing-wen-li-xue-yuan",
        source: "/:type",
        target: (params) => {
          if (params.type === "channel_24894.html") {
            return "/cqwu/news/notify"
          }
        },
      },
      {
        title: "学术活动",
        docs: "https://docs.rsshub.app/routes/university#chong-qing-wen-li-xue-yuan",
        source: "/:type",
        target: (params) => {
          if (params.type === "channel_24895.html") {
            return "/cqwu/news/academiceve"
          }
        },
      },
    ],
  },
  "crac.org.cn": {
    _name: "中国无线电协会业余无线电分会",
    www: [
      {
        title: "最新资讯",
        docs: "https://docs.rsshub.app/routes/government#zhong-guo-wu-xian-dian-xie-hui-ye-yu-wu-xian-dian-fen-hui",
        source: "/News/List",
        target: (params, url) =>
          `/crac/${new URL(url).searchParams.get("type") || ""}`,
      },
    ],
  },
  "creative-comic.tw": {
    _name: "CCC 創作集",
    ".": [
      {
        title: "漫畫",
        docs: "https://docs.rsshub.app/routes/anime#ccc-chuang-zuo-ji",
        source: ["/book/:id/*"],
        target: "/creative-comic/:id",
      },
    ],
  },
  "crossbell.io": {
    _name: "Crossbell",
    ".": [
      {
        title: "Notes",
        docs: "https://docs.rsshub.app/routes/social-media#crossbell",
        source: "/*",
        target: "/crossbell/notes",
      },
    ],
  },
  "xlog.app": {
    _name: "xLog",
    ".": [
      {
        title: "Notes",
        docs: "https://docs.rsshub.app/routes/social-media#crossbell",
        source: "/*",
        target: "/crossbell/notes/source/xlog",
      },
    ],
  },
  "csc.edu.cn": {
    _name: "国家留学网",
    www: [
      {
        title: "遴选通知",
        docs: "https://docs.rsshub.app/routes/other#guo-jia-liu-xue-wang",
        source: "/*",
        target: "/csc/notice/lxtz",
      },
      {
        title: "综合项目专栏",
        docs: "https://docs.rsshub.app/routes/other#guo-jia-liu-xue-wang",
        source: "/*",
        target: "/csc/notice/xmzl",
      },
      {
        title: "常见问题解答",
        docs: "https://docs.rsshub.app/routes/other#guo-jia-liu-xue-wang",
        source: "/*",
        target: "/csc/notice/wtjd",
      },
      {
        title: "录取公告",
        docs: "https://docs.rsshub.app/routes/other#guo-jia-liu-xue-wang",
        source: "/*",
        target: "/csc/notice/lqgg",
      },
    ],
  },
  "cscse.edu.cn": {
    _name: "中国留学网",
    ".": [
      {
        title: "通知公告",
        docs: "https://docs.rsshub.app/routes/study#zhong-guo-liu-xue-wang-tong-zhi-gong-gao",
        source: ["/cscse/index/tzgg", "/"],
        target: "/cscse/tzgg",
      },
    ],
  },
  "csdn.net": {
    _name: "CSDN",
    blog: [
      {
        title: "博客",
        docs: "https://docs.rsshub.app/routes/blog#csdn",
        source: ["/:user"],
        target: "/csdn/blog/:user",
      },
    ],
  },
  "cssn.cn": {
    _name: "中国社会科学网",
    iolaw: [
      {
        title: "中国法学网",
        docs: "https://docs.rsshub.app/routes/study#zhong-guo-she-hui-ke-xue-wang",
      },
    ],
  },
  "csu.edu.cn": {
    _name: "中南大学",
    career: [
      {
        title: "就业信息网招聘信息",
        docs: "https://docs.rsshub.app/routes/university#zhong-nan-da-xue",
        source: ["/campus/index/category/1", "/campus", "/"],
        target: "/csu/career",
      },
    ],
    cse: [
      {
        title: "计算机学院",
        docs: "https://docs.rsshub.app/routes/university#zhong-nan-da-xue",
        source: ["/index/:type"],
        target: (params) => `/csu/cse/${params.type.substring(0, 4)}`,
      },
    ],
    oa: [
      {
        title: "校长信箱",
        docs: "https://docs.rsshub.app/routes/university#zhong-nan-da-xue",
        source: ["/mailbox/NoAuth/MailList_Pub"],
        target: (_, url) => `/csu/mail/${new URL(url).searchParams.get("tp")}`,
      },
    ],
  },
  "cts.com.tw": {
    _name: "華視",
    news: [
      {
        title: "新聞",
        docs: "https://docs.rsshub.app/routes/traditional-media#hua-shi-xin-wen",
        source: "/:category/index.html",
        target: "/cts/:category",
      },
    ],
  },
  "cuc.edu.cn": {
    _name: "中国传媒大学",
    yz: [
      {
        title: "研究生招生网",
        docs: "https://docs.rsshub.app/routes/university#zhong-guo-chuan-mei-da-xue",
        source: ["/8549/list.htm", "/"],
        target: "/cuc/yz",
      },
    ],
  },
  "curiouscat.live": {
    _name: "CuriousCat",
    ".": [
      {
        title: "User",
        docs: "https://docs.rsshub.app/routes/en/social-media#curiouscat",
        source: ["/:id"],
        target: "/curiouscat/user/:id",
      },
    ],
  },
  "curius.app": {
    _name: "Curius",
    ".": [
      {
        title: "用户",
        docs: "https://docs.rsshub.app/routes/social-media#curius",
        source: "/:name",
        target: "/curius/links/:name",
      },
    ],
  },
  "cw.com.tw": {
    _name: "天下雜誌",
    ".": [
      {
        title: "最新上線",
        docs: "https://docs.rsshub.app/routes/traditional-media#tian-xia-za-zhi",
        source: ["/today", "/"],
        target: "/cw/today",
      },
      {
        title: "主頻道",
        docs: "https://docs.rsshub.app/routes/traditional-media#tian-xia-za-zhi",
        source: ["/masterChannel.action"],
        target: (_, url) =>
          `/cw/master/${new URL(url).searchParams.get("idMasterChannel")}`,
      },
      {
        title: "子頻道",
        docs: "https://docs.rsshub.app/routes/traditional-media#tian-xia-za-zhi",
        source: ["/subchannel.action"],
        target: (_, url) =>
          `/cw/sub/${new URL(url).searchParams.get("idSubChannel")}`,
      },
      {
        title: "作者",
        docs: "https://docs.rsshub.app/routes/traditional-media#tian-xia-za-zhi",
        source: ["/author/:channel"],
        target: "/cw/author/:channel",
      },
    ],
  },
  "cyzone.cn": {
    _name: "创业邦",
    ".": [
      {
        title: "资讯",
        docs: "https://docs.rsshub.app/routes/new-media#chuang-ye-bang-zi-xun",
        source: ["/channel/:id", "/"],
        target: "/cyzone/:id",
      },
      {
        title: "作者",
        docs: "https://docs.rsshub.app/routes/new-media#chuang-ye-bang-zuo-zhe",
        source: ["/author/:id", "/"],
        target: "/cyzone/author/:id",
      },
      {
        title: "标签",
        docs: "https://docs.rsshub.app/routes/new-media#chuang-ye-bang-biao-qian",
        source: ["/label/:name", "/"],
        target: "/cyzone/label/:name",
      },
    ],
  },
  "cztv.com": {
    _name: "新蓝网",
    ".": [
      {
        title: "浙江新闻联播",
        docs: "https://docs.rsshub.app/routes/traditional-media#xin-lan-wang-zhe-jiang-guang-bo-dian-shi-ji-tuan",
        source: ["/videos/zjxwlb", "/"],
        target: "/cztv/zjxwlb",
      },
      {
        title: "浙江新闻联播-每日合集",
        docs: "https://docs.rsshub.app/routes/traditional-media#xin-lan-wang-zhe-jiang-guang-bo-dian-shi-ji-tuan",
        source: ["/videos/zjxwlb", "/"],
        target: "/cztv/zjxwlb/daily",
      },
    ],
  },
  "dahecube.com": {
    _name: "大河财立方",
    ".": [
      {
        title: "新闻",
        docs: "https://docs.rsshub.app/routes/new-media#da-he-cai-li-fang",
        source: ["/channel.html", "/index.html"],
        target: (_, url) => {
          const id = parseInt(new URL(url).searchParams.get("recid"))
          let type = "recommend"
          const TypeMap = {
            recommend: {
              name: "推荐",
              id: 1,
            },
            history: {
              name: "党史",
              id: 37,
            },
            stock: {
              name: "豫股",
              id: 2,
            },
            business: {
              name: "财经",
              id: 4,
            },
            education: {
              name: "投教",
              id: 36,
            },
            finance: {
              name: "金融",
              id: 5,
            },
            science: {
              name: "科创",
              id: 19,
            },
            invest: {
              name: "投融",
              id: 29,
            },
            column: {
              name: "专栏",
              id: 33,
            },
          }
          Object.entries(TypeMap).forEach(([key, value]) => {
            if (value.id === id) {
              type = key
            }
          })
          return `/dahecube/${type}`
        },
      },
    ],
  },
  "daily.dev": {
    _name: "Daily.dev",
    ".": [
      {
        title: "Most Discussed",
        docs: "https://docs.rsshub.app/routes/en/social-media#daily.dev",
        source: ["/discussed"],
        target: "/daily/discussed",
      },
      {
        title: "Most Upvoted",
        docs: "https://docs.rsshub.app/routes/en/social-media#daily.dev",
        source: ["/upvoted"],
        target: "/daily/upvoted",
      },
      {
        title: "Popular",
        docs: "https://docs.rsshub.app/routes/en/social-media#daily.dev",
        source: ["/popular"],
        target: "/daily",
      },
    ],
  },
  "dapenti.com": {
    _name: "喷嚏",
    ".": [
      {
        title: "图卦",
        docs: "https://docs.rsshub.app/routes/picture#pen-ti",
        source: ["/blog/blog.asp"],
        target: (params, url) => {
          if (new URL(url).searchParams.get("subjectid") === "70") {
            return "/dapenti/tugua"
          }
        },
      },
      {
        title: "主题",
        docs: "https://docs.rsshub.app/routes/picture#pen-ti",
        source: ["/blog/blog.asp"],
        target: (params, url) => {
          if (new URL(url).searchParams.get("subjectid")) {
            return (
              "/dapenti/subject/" + new URL(url).searchParams.get("subjectid")
            )
          }
        },
      },
    ],
  },
  "darwinawards.com": {
    _name: "Darwin Awards",
    ".": [
      {
        title: "Award Winners",
        docs: "https://docs.rsshub.app/routes/other#darwin-awards-award-winners",
        source: ["/darwin", "/"],
        target: "/darwinawards",
      },
    ],
  },
  "dayanzai.me": {
    _name: "大眼仔旭",
    ".": [
      {
        title: "大眼仔旭",
        docs: "https://docs.rsshub.app/routes/bbs#dayanzai",
        source: ["/:category", "/:category/*"],
        target: "/dayanzai/:category",
      },
    ],
  },
  "dblp.org": {
    _name: "DBLP",
    ".": [
      {
        title: "关键字搜索",
        docs: "https://docs.rsshub.app/routes/study#dblp",
        source: ["/:field"],
        target: "/dblp/:field",
      },
    ],
  },
  "buxiuse.com": {
    _name: "不羞涩",
    ".": [
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/picture#bu-xiu-se",
        source: "/",
        target: (_params, url) =>
          `/dbmv${new URL(url).searchParams.has("cid") ? `/${new URL(url).searchParams.get("cid")}` : ""}`,
      },
    ],
  },
  "dcard.tw": {
    _name: "Dcard",
    www: [
      {
        title: "首頁帖子-最新",
        docs: "https://docs.rsshub.app/routes/bbs#dcard",
        source: "/f",
        target: "/dcard/posts/latest",
      },
      {
        title: "首頁帖子-熱門",
        docs: "https://docs.rsshub.app/routes/bbs#dcard",
        source: "/f",
        target: "/dcard/posts/popular",
      },
      {
        title: "板塊帖子-最新",
        docs: "https://docs.rsshub.app/routes/bbs#dcard",
        source: "/f/:section",
        target: "/dcard/:section/latest",
      },
      {
        title: "板塊帖子-熱門",
        docs: "https://docs.rsshub.app/routes/bbs#dcard",
        source: "/f/:section",
        target: "/dcard/:section/popular",
      },
    ],
  },
  "dcfever.com": {
    _name: "DCFever",
    ".": [
      {
        title: "新聞中心",
        docs: "https://docs.rsshub.app/routes/new-media#dcfever",
        source: ["/news/index.php", "/"],
        target: (_, url) => {
          const searchParams = new URL(url).searchParams
          return `/dcfever/news${searchParams.has("type") ? `/${new URL(url).searchParams.get("type")}` : ""}`
        },
      },
      {
        title: "測試報告",
        docs: "https://docs.rsshub.app/routes/new-media#dcfever",
        source: ["/:type/reviews.php"],
        target: "/dcfever/reviews/:type",
      },
      {
        title: "二手市集",
        docs: "https://docs.rsshub.app/routes/new-media#dcfever",
        source: ["/trading/listing.php"],
        target: (_, url) =>
          `/dcfever/trading/${new URL(url).searchParams.get("id")}`,
      },
      {
        title: "二手市集 - 物品搜尋",
        docs: "https://docs.rsshub.app/routes/new-media#dcfever",
        source: ["/trading/search.php"],
        target: (_, url) => {
          const searchParams = new URL(url).searchParams
          return `/dcfever/trading/search/${searchParams.get("keyword")}${searchParams.has("main_cat") ? `/${searchParams.get("main_cat")}` : ""}`
        },
      },
    ],
  },
  "ddosi.org": {
    _name: "🔰雨苁ℒ🔰",
    ".": [
      {
        title: "首页",
        docs: "https://docs.rsshub.app/routes/blog#yu-cong-bo-ke-shou-ye",
        source: ["/"],
        target: "/ddosi",
      },
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/blog#yu-cong-bo-ke-fen-lei",
        source: ["/category/:category/"],
        target: "/ddosi/category/:category",
      },
    ],
  },
  "deadline.com": {
    _name: "Deadline",
    ".": [
      {
        title: "Latest Articles",
        docs: "https://docs.rsshub.app/routes/en/new-media#deadline",
        source: ["/"],
        target: "/deadline",
      },
    ],
  },
  "dedao.cn": {
    _name: "得到",
    ".": [
      {
        title: "知识城邦",
        docs: "https://docs.rsshub.app/routes/new-media#de-dao-zhi-shi-cheng-bang",
        source: ["/knowledge/topic/:topic", "/knowledge", "/"],
        target: "/dedao/knowledge/:topic?/:type?",
      },
    ],
  },
  "igetget.com": {
    _name: "得到",
    ".": [
      {
        title: "首页",
        docs: "https://docs.rsshub.app/routes/new-media#de-dao-shou-ye",
        source: ["/"],
        target: "/dedao/list/:category?",
      },
      {
        title: "新闻",
        docs: "https://docs.rsshub.app/routes/new-media#de-dao-xin-wen",
        source: ["/news", "/"],
        target: "/dedao/news",
      },
      {
        title: "人物故事",
        docs: "https://docs.rsshub.app/routes/new-media#de-dao-ren-wu-gu-shi",
        source: ["/news", "/"],
        target: "/dedao/figure",
      },
      {
        title: "视频",
        docs: "https://docs.rsshub.app/routes/new-media#de-dao-shi-pin",
        source: ["/video", "/"],
        target: "/dedao/video",
      },
    ],
    m: [
      {
        title: "用户主页",
        docs: "https://docs.rsshub.app/routes/new-media#de-dao-yong-hu-zhu-ye",
        source: ["/native/mine/account", "/"],
        target: (params, url) =>
          `/dedao/user/${new URL(url).searchParams.get("enId")}`,
      },
    ],
  },
  "deepmind.com": {
    _name: "DeepMind",
    ".": [
      {
        title: "Blog",
        docs: "https://docs.rsshub.app/routes/new-media#deepmind",
        source: ["/blog", "/"],
        target: "/blog",
      },
    ],
  },
  "delta.io": {
    _name: "Delta Lake",
    ".": [
      {
        title: "Blogs",
        docs: "https://docs.rsshub.app/routes/blog#deltalake",
        source: "/blog",
        target: "/deltaio/blog",
      },
    ],
  },
  "devolverdigital.com": {
    _name: "DevolverDigital",
    ".": [
      {
        title: "官方博客",
        docs: "https://docs.rsshub.app/routes/blog#devolverdigital",
        source: "/blog",
        target: "/devolverdigital/blog",
      },
    ],
  },
  "dgjyw.com": {
    _name: "东莞教研网",
    ".": [
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/other#dong-guan-jia-yan-wang-fen-lei",
        source: ["/"],
        target: (params, url) =>
          `/dgjyw/${new URL(url).toString().match(/dgjyw\.com\/(.*)\.htm$/)[1]}`,
      },
    ],
  },
  "dhu.edu.cn": {
    _name: "东华大学",
    gs: [
      {
        title: "研究生院通知",
        docs: "https://docs.rsshub.app/routes/university#dong-hua-da-xue",
      },
    ],
    jw: [
      {
        title: "教务处通知",
        docs: "https://docs.rsshub.app/routes/university#dong-hua-da-xue",
      },
    ],
    news: [
      {
        title: "学术信息",
        docs: "https://docs.rsshub.app/routes/university#dong-hua-da-xue",
        source: ["/6410"],
        target: "/dhu/news/xsxx",
      },
    ],
    xxgk: [
      {
        title: "最新信息公开",
        docs: "https://docs.rsshub.app/routes/university#dong-hua-da-xue",
      },
    ],
    yjs: [
      {
        title: "研究生信息",
        docs: "https://docs.rsshub.app/routes/university#dong-hua-da-xue",
      },
    ],
  },
  "diandong.com": {
    _name: "电动邦",
    ".": [
      {
        title: "资讯",
        docs: "https://docs.rsshub.app/routes/new-media#dong-qiu-di",
        source: ["/news"],
        target: "/diandong/news/:cate",
      },
      {
        title: "电动号",
        docs: "https://docs.rsshub.app/routes/new-media#dong-qiu-di",
        source: ["/news/ddh"],
        target: "/diandong/ddh/:cate",
      },
    ],
  },
  "diershoubing.com": {
    _name: "二柄 APP",
    ".": [
      {
        title: "新闻",
        docs: "https://docs.rsshub.app/routes/game#er-bing-app",
        source: ["/"],
        target: "/diershoubing/news",
      },
    ],
  },
  "discord.com": {
    _name: "Discord",
    ".": [
      {
        title: "Channel Messages",
        docs: "https://docs.rsshub.app/routes/en/social-media#discord",
        source: [
          "/channels/:guildId/:channelId/:messageID",
          "/channels/:guildId/:channelId",
        ],
        target: "/discord/channel/:channelId",
      },
    ],
  },
  "disinfo.eu": {
    _name: "EU Disinfo Lab",
    ".": [
      {
        title: "Publications",
        docs: "https://docs.rsshub.app/routes/new-media#eu-disinfo-lab",
        source: ["/"],
        target: "/disinfo/publications",
      },
    ],
  },
  "disinformationindex.org": {
    _name: "Global Disinformation Index",
    ".": [
      {
        title: "Blog",
        docs: "https://docs.rsshub.app/routes/new-media#global-disinformation-index",
        source: ["/"],
        target: "/disinformationindex/blog",
      },
      {
        title: "Research",
        docs: "https://docs.rsshub.app/routes/new-media#global-disinformation-index",
        source: ["/"],
        target: "/disinformationindex/research",
      },
    ],
  },
  "diskanalyzer.com": {
    _name: "What's New",
    ".": [
      {
        title: "Change Log",
        docs: "https://docs.rsshub.app/routes/program-update#wiztree-whats-new",
        source: ["/whats-new", "/"],
        target: "/diskanalyzer/whats-new",
      },
    ],
  },
  "distill.pub": {
    _name: "Distill",
    ".": [
      {
        title: "Latest",
        docs: "https://docs.rsshub.app/routes/programming#distill",
        source: ["/"],
        target: "/distill",
      },
    ],
  },
  "dlnews.com": {
    _name: "DL NEWS",
    ".": [
      {
        title: "All Articles",
        docs: "https://docs.rsshub.app/routes/finance#dl-news",
        source: ["/articles/"],
        target: "/dlnews/",
      },
      {
        title: "Topic",
        docs: "https://docs.rsshub.app/routes/finance#dl-news",
        source: ["/articles/:category"],
        target: "/dlnews/:category",
      },
    ],
  },
  "dlsite.com": {
    _name: "DLsite",
    ".": [
      {
        title: "通用",
        docs: "https://docs.rsshub.app/routes/anime#dlsite",
        source: ["/"],
        target: (params, url) =>
          `/dlsite${new URL(url).href.match(/dlsite\.com\/(.*?)/)[1]}`,
      },
      {
        title: "当前日期发售的新产品",
        docs: "https://docs.rsshub.app/routes/anime#dlsite",
      },
      {
        title: "产品打折信息",
        docs: "https://docs.rsshub.app/routes/anime#dlsite",
      },
    ],
    "ci-en": [
      {
        title: "Ci-en 创作者文章",
        docs: "https://docs.rsshub.app/routes/anime#dlsite",
        source: ["/creator/:id/article/843558", "/"],
        target: "/dlsite/ci-en/:id/article",
      },
    ],
  },
  "dmzj.com": {
    _name: "动漫之家",
    news: [
      {
        title: "宅新闻",
        docs: "https://docs.rsshub.app/routes/anime#dong-man-zhi-jia",
        source: "/",
        target: "/dmzj/news",
      },
      {
        title: "漫画情报",
        docs: "https://docs.rsshub.app/routes/anime#dong-man-zhi-jia",
        source: "/manhuaqingbao",
        target: "/dmzj/news/manhuaqingbao",
      },
      {
        title: "轻小说情报",
        docs: "https://docs.rsshub.app/routes/anime#dong-man-zhi-jia",
        source: "/qingxiaoshuoqingbao",
        target: "/dmzj/news/qingxiaoshuoqingbao",
      },
      {
        title: "动漫周边",
        docs: "https://docs.rsshub.app/routes/anime#dong-man-zhi-jia",
        source: "/manhuazhoubian",
        target: "/dmzj/news/manhuazhoubian",
      },
      {
        title: "声优情报",
        docs: "https://docs.rsshub.app/routes/anime#dong-man-zhi-jia",
        source: "/shengyouqingbao",
        target: "/dmzj/news/shengyouqingbao",
      },
      {
        title: "音乐资讯",
        docs: "https://docs.rsshub.app/routes/anime#dong-man-zhi-jia",
        source: "/yinyuezixun",
        target: "/dmzj/news/yinyuezixun",
      },
      {
        title: "游戏资讯",
        docs: "https://docs.rsshub.app/routes/anime#dong-man-zhi-jia",
        source: "/youxizixun",
        target: "/dmzj/news/youxizixun",
      },
      {
        title: "美图欣赏",
        docs: "https://docs.rsshub.app/routes/anime#dong-man-zhi-jia",
        source: "/meituxinshang",
        target: "/dmzj/news/meituxinshang",
      },
      {
        title: "漫展情报",
        docs: "https://docs.rsshub.app/routes/anime#dong-man-zhi-jia",
        source: "/manzhanqingbao",
        target: "/dmzj/news/manzhanqingbao",
      },
      {
        title: "大杂烩",
        docs: "https://docs.rsshub.app/routes/anime#dong-man-zhi-jia",
        source: "/dazahui",
        target: "/dmzj/news/dazahui",
      },
    ],
  },
  "dn.com": {
    _name: "DN.com",
    ".": [
      {
        title: "The Latest",
        docs: "https://docs.rsshub.app/routes/new-media#dn.com-news",
        source: ["/en-us/news/p1", "/en-us/news"],
        target: "/dn/en-us/news",
      },
      {
        title: "Industry Information",
        docs: "https://docs.rsshub.app/routes/new-media#dn.com-news",
        source: ["/en-us/news/category-1"],
        target: "/dn/en-us/news/category-1",
      },
      {
        title: "Knowledge",
        docs: "https://docs.rsshub.app/routes/new-media#dn.com-news",
        source: ["/en-us/news/category-2"],
        target: "/dn/en-us/news/category-2",
      },
      {
        title: "Investment",
        docs: "https://docs.rsshub.app/routes/new-media#dn.com-news",
        source: ["/en-us/news/category-3"],
        target: "/dn/en-us/news/category-3",
      },
      {
        title: "最新",
        docs: "https://docs.rsshub.app/routes/new-media#dn.com-news",
        source: ["/zh-cn/news/p1", "/zh-cn/news"],
        target: "/dn/zh-cn/news",
      },
      {
        title: "行业资讯",
        docs: "https://docs.rsshub.app/routes/new-media#dn.com-news",
        source: ["/zh-cn/news/category-1"],
        target: "/dn/zh-cn/news/category-1",
      },
      {
        title: "域名知识",
        docs: "https://docs.rsshub.app/routes/new-media#dn.com-news",
        source: ["/zh-cn/news/category-2"],
        target: "/dn/zh-cn/news/category-2",
      },
      {
        title: "域名投资",
        docs: "https://docs.rsshub.app/routes/new-media#dn.com-news",
        source: ["/zh-cn/news/category-3"],
        target: "/dn/zh-cn/news/category-3",
      },
    ],
  },
  "dnaindia.com": {
    _name: "DNA India",
    ".": [
      {
        title: "News",
        docs: "https://docs.rsshub.app/routes/en/traditional-media#dna-india",
        source: ["/:category"],
        target: "/dnaindia/:category",
      },
      {
        title: "Topic",
        docs: "https://docs.rsshub.app/routes/en/traditional-media#dna-india",
        source: ["/topic/:topic"],
        target: "/dnaindia/topic/:topic",
      },
    ],
  },
  "docker.com": {
    _name: "Docker Hub",
    hub: [
      {
        title: "镜像有新 Build",
        docs: "https://docs.rsshub.app/routes/program-update#docker-hub",
        source: ["/r/:owner/:image", "/r/:owner/:image/tags", "/_/:image"],
        target: (params) =>
          `/dockerhub/build/${params.owner ? params.owner : "library"}/${params.image}`,
      },
      {
        title: "镜像有新 Tag",
        docs: "https://docs.rsshub.app/routes/program-update#docker-hub",
        source: ["/r/:owner/:image", "/r/:owner/:image/tags", "/_/:image"],
        target: (params) =>
          `/dockerhub/tag/${params.owner ? params.owner : "library"}/${params.image}`,
      },
    ],
  },
  docschina: {
    _name: "印记中文",
    ".": [
      {
        title: "周刊 - JavaScript",
        docs: "https://docs.rsshub.app/routes/programming#yin-ji-zhong-wen-zhou-kan",
        source: ["/weekly/js/*", "/weekly/js", "/"],
        target: "/docschina/jsweekly",
      },
    ],
  },
  "domp4.cc": {
    _name: "domp4电影",
    ".": [
      {
        title: "最近更新",
        docs: "https://docs.rsshub.app/routes/multimedia#domp4-ying-shi",
        source: ["/", "/custom/update.html"],
        target: "/domp4/latest/:type?",
      },
      {
        title: "剧集订阅",
        docs: "https://docs.rsshub.app/routes/multimedia#domp4-ying-shi",
        source: "/html/:id",
        target: "/domp4/detail/:id",
      },
      {
        title: "剧集订阅",
        docs: "https://docs.rsshub.app/routes/multimedia#domp4-ying-shi",
        source: "/detail/:id",
        target: "/domp4/detail/:id",
      },
    ],
  },
  "dongqiudi.com": {
    _name: "懂球帝",
    m: [
      {
        title: "新闻",
        docs: "https://docs.rsshub.app/routes/new-media#dong-qiu-di",
        source: ["/home/:id"],
        target: "/dongqiudi/top_news/:id",
      },
    ],
    www: [
      {
        title: "专题",
        docs: "https://docs.rsshub.app/routes/new-media#dong-qiu-di",
        source: ["/special/:id"],
        target: "/dongqiudi/special/:id",
      },
      {
        title: "早报",
        docs: "https://docs.rsshub.app/routes/new-media#dong-qiu-di",
        source: ["/special/48"],
        target: "/dongqiudi/daily",
      },
      {
        title: "足球赛果",
        docs: "https://docs.rsshub.app/routes/new-media#dong-qiu-di",
        source: ["/team/*team"],
        target: (params) =>
          `/dongqiudi/result/${params.team.replace(".html", "")}`,
      },
      {
        title: "球队新闻",
        docs: "https://docs.rsshub.app/routes/new-media#dong-qiu-di",
        source: ["/team/*team"],
        target: (params) =>
          `/dongqiudi/team_news/${params.team.replace(".html", "")}`,
      },
      {
        title: "球员新闻",
        docs: "https://docs.rsshub.app/routes/new-media#dong-qiu-di",
        source: ["/player/*id"],
        target: (params) =>
          `/dongqiudi/player_news/${params.id.replace(".html", "")}`,
      },
    ],
  },
  "dorohedoro.net": {
    _name: "Dorohedoro",
    ".": [
      {
        title: "News",
        docs: "https://docs.rsshub.app/routes/game#dorohedoro",
        source: ["/news", "/"],
        target: "/dorohedoro/news",
      },
    ],
  },
  "douban.com": {
    _name: "豆瓣",
    www: [
      {
        title: "用户的广播",
        docs: "https://docs.rsshub.app/routes/social-media#dou-ban",
        source: "/people/:user/",
        target: (params, url, document) => {
          const uid =
            document &&
            document.querySelector("html").innerHTML.match(/"id":"([0-9]+)"/)[1]
          return uid ? `/douban/people/${uid}/status` : ""
        },
      },
      {
        title: "小组-最新",
        docs: "https://docs.rsshub.app/routes/social-media#dou-ban",
        source: "/group/:groupid",
        target: "/douban/group/:groupid",
      },
      {
        title: "小组-最热",
        docs: "https://docs.rsshub.app/routes/social-media#dou-ban",
        source: "/group/:groupid",
        target: "/douban/group/:groupid/essence",
      },
      {
        title: "小组-精华",
        docs: "https://docs.rsshub.app/routes/social-media#dou-ban",
        source: "/group/:groupid",
        target: "/douban/group/:groupid/elite",
      },
      {
        title: "榜单与集合",
        docs: "https://docs.rsshub.app/routes/social-media#douban",
        source: ["/subject_collection/:type"],
        target: "/douban/list/:type",
      },
    ],
    jobs: [
      {
        title: "社会招聘",
        docs: "https://docs.rsshub.app/routes/social-media#dou-ban",
        source: "/jobs/social",
        target: "/jobs/social",
      },
      {
        title: "校园招聘",
        docs: "https://docs.rsshub.app/routes/social-media#dou-ban",
        source: "/jobs/campus",
        target: "/jobs/campus",
      },
      {
        title: "实习生招聘",
        docs: "https://docs.rsshub.app/routes/social-media#dou-ban",
        source: "/jobs/intern",
        target: "/jobs/intern",
      },
    ],
    book: [
      {
        title: "读书论坛",
        docs: "https://docs.rsshub.app/routes/social-media#dou-ban",
        source: "/:id/discussion",
        target: "/:id/discussion",
      },
    ],
  },
  "douyin.com": {
    _name: "抖音",
    ".": [
      {
        title: "标签",
        docs: "https://docs.rsshub.app/routes/social-media#dou-yin",
        source: "/hashtag/:cid",
        target: "/douyin/hashtag/:cid",
      },
      {
        title: "博主",
        docs: "https://docs.rsshub.app/routes/social-media#dou-yin",
        source: "/user/:uid",
        target: "/douyin/user/:uid",
      },
    ],
    live: [
      {
        title: "直播间开播",
        docs: "https://docs.rsshub.app/routes/live#dou-yin-zhi-bo",
        source: "/:rid",
        target: "/douyin/live/:rid",
      },
    ],
  },
  "douyu.com": {
    _name: "斗鱼",
    www: [
      {
        title: "直播间开播",
        docs: "https://docs.rsshub.app/routes/live#dou-yu-zhi-bo-zhi-bo-jian-kai-bo",
        source: ["/:id", "/"],
        target: "/douyu/room/:id",
      },
    ],
    yuba: [
      {
        title: "鱼吧帖子",
        docs: "https://docs.rsshub.app/routes/bbs#dou-yu-yu-ba-tie-zi",
        source: ["/group/:id", "/group/newself/:id", "/group/newall/:id", "/"],
        target: "/douyu/group/:id",
      },
      {
        title: "鱼吧跟帖",
        docs: "https://docs.rsshub.app/routes/bbs#dou-yu-yu-ba-gen-tie",
        source: ["/p/:id", "/"],
        target: "/douyu/post/:id",
      },
    ],
  },
  "dribbble.com": {
    _name: "Dribbble",
    ".": [
      {
        title: "Keyword",
        docs: "https://docs.rsshub.app/routes/design#dribbble",
        source: ["/search/shots/recent"],
        target: (_, url) =>
          `/dribbble/keyword/${new URL(url).searchParams.get("q")}`,
      },
      {
        title: "Popular",
        docs: "https://docs.rsshub.app/routes/design#dribbble",
        source: ["/"],
        target: "/dribbble/popular",
      },
      {
        title: "User (or team)",
        docs: "https://docs.rsshub.app/routes/design#dribbble",
        source: ["/:name"],
        target: "/dribbble/user/:name",
      },
    ],
  },
  "dtcj.com": {
    _name: "DT 财经",
    ".": [
      {
        title: "数据侠专栏",
        docs: "https://docs.rsshub.app/routes/finance#dt-cai-jing",
        source: ["/datahero/topic"],
        target: (_params, url) =>
          `/dtcj/datahero/${new URL(url).searchParams.get("topic_id")}`,
      },
      {
        title: "数据洞察",
        docs: "https://docs.rsshub.app/routes/finance#dt-cai-jing",
        source: ["/dtcj/datainsight"],
        target: "/dtcj/datainsight",
      },
      {
        title: "数据洞察",
        docs: "https://docs.rsshub.app/routes/finance#dt-cai-jing",
        source: ["/insighttopic/:id"],
        target: "/dtcj/datainsight/:id",
      },
    ],
  },
  "duozhuayu.com": {
    _name: "多抓鱼",
    ".": [
      {
        title: "搜索结果",
        docs: "https://docs.rsshub.app/routes/shopping#duo-zhua-yu",
        source: ["/search/book/:wd"],
        target: "/duozhuayu/search/:wd",
      },
    ],
  },
  "dushu.io": {
    _name: "樊登读书会",
    card: [
      {
        title: "福州运营中心",
        docs: "https://docs.rsshub.app/routes/new-media#fan-deng-du-shu-fan-deng-fu-zhou-yun-ying-zhong-xin",
        source: ["*"],
        target: "/dushu/fuzhou",
      },
    ],
  },
  "dushu365.com": {
    _name: "樊登读书会",
    www: [
      {
        title: "福州运营中心",
        docs: "https://docs.rsshub.app/routes/new-media#fan-deng-du-shu-fan-deng-fu-zhou-yun-ying-zhong-xin",
        source: ["*"],
        target: "/dushu/fuzhou",
      },
    ],
  },
  "dlut.edu.cn": {
    _name: "大连理工大学",
    news: [
      {
        title: "新闻网",
        docs: "https://docs.rsshub.app/routes/university#da-lian-li-gong-da-xue-xin-wen-wang",
        source: ["/"],
        target: (params, url) =>
          `/dut/${url.match(/:\/\/[\w\d]+\./)[1]}/${url.match(/\.cn\/(.*)\.htm/)[1]}`,
      },
    ],
    perdep: [
      {
        title: "人事处",
        docs: "https://docs.rsshub.app/routes/university#da-lian-li-gong-da-xue-ren-shi-chu",
        source: ["/"],
        target: (params, url) =>
          `/dut/${url.match(/:\/\/[\w\d]+\./)[1]}/${url.match(/\.cn\/(.*)\.htm/)[1]}`,
      },
    ],
    teach: [
      {
        title: "教务处",
        docs: "https://docs.rsshub.app/routes/university#da-lian-li-gong-da-xue-jiao-wu-chu",
        source: ["/"],
        target: (params, url) =>
          `/dut/${url.match(/:\/\/[\w\d]+\./)[1]}/${url.match(/\.cn\/(.*)\.htm/)[1]}`,
      },
    ],
    gs: [
      {
        title: "研究生院",
        docs: "https://docs.rsshub.app/routes/university#da-lian-li-gong-da-xue-yan-jiu-sheng-yuan",
        source: ["/"],
        target: (params, url) =>
          `/dut/${url.match(/:\/\/[\w\d]+\./)[1]}/${url.match(/\.cn\/(.*)\.htm/)[1]}`,
      },
    ],
    ssdut: [
      {
        title: "软件学院",
        docs: "https://docs.rsshub.app/routes/university#da-lian-li-gong-da-xue-ruan-jian-xue-yuan",
        source: ["/"],
        target: (params, url) =>
          `/dut/${url.match(/:\/\/[\w\d]+\./)[1]}/${url.match(/\.cn\/(.*)\.htm/)[1]}`,
      },
    ],
    eda: [
      {
        title: "开发区校区",
        docs: "https://docs.rsshub.app/routes/university#da-lian-li-gong-da-xue-kai-fa-qu-xiao-qu",
        source: ["/"],
        target: (params, url) =>
          `/dut/${url.match(/:\/\/[\w\d]+\./)[1]}/${url.match(/\.cn\/(.*)\.htm/)[1]}`,
      },
    ],
    panjin: [
      {
        title: "盘锦校区",
        docs: "https://docs.rsshub.app/routes/university#da-lian-li-gong-da-xue-pan-jin-xiao-qu",
        source: ["/"],
        target: (params, url) =>
          `/dut/${url.match(/:\/\/[\w\d]+\./)[1]}/${url.match(/\.cn\/(.*)\.htm/)[1]}`,
      },
    ],
    xsgzb: [
      {
        title: "盘锦校区学生事务办公室",
        docs: "https://docs.rsshub.app/routes/university#da-lian-li-gong-da-xue-pan-jin-xiao-qu-xue-sheng-shi-wu-ban-gong-shi",
        source: ["/"],
        target: (params, url) =>
          `/dut/${url.match(/:\/\/[\w\d]+\./)[1]}/${url.match(/\.cn\/(.*)\.htm/)[1]}`,
      },
    ],
    pjteach: [
      {
        title: "盘锦校区教务教学事务办公室",
        docs: "https://docs.rsshub.app/routes/university#da-lian-li-gong-da-xue-pan-jin-xiao-qu-jiao-wu-jiao-xue-shi-wu-ban-gong-shi",
        source: ["/"],
        target: (params, url) =>
          `/dut/${url.match(/:\/\/[\w\d]+\./)[1]}/${url.match(/\.cn\/(.*)\.htm/)[1]}`,
      },
    ],
    pjxqzwb: [
      {
        title: "盘锦校区总务部",
        docs: "https://docs.rsshub.app/routes/university#da-lian-li-gong-da-xue-pan-jin-xiao-qu-zong-wu-bu",
        source: ["/"],
        target: (params, url) =>
          `/dut/${url.match(/:\/\/[\w\d]+\./)[1]}/${url.match(/\.cn\/(.*)\.htm/)[1]}`,
      },
    ],
    tjpj: [
      {
        title: "体育与健康学院盘锦分院",
        docs: "https://docs.rsshub.app/routes/university#da-lian-li-gong-da-xue-ti-yu-jian-kang-xue-yuan-pan-jin-fen-yuan",
        source: ["/"],
        target: (params, url) =>
          `/dut/${url.match(/:\/\/[\w\d]+\./)[1]}/${url.match(/\.cn\/(.*)\.htm/)[1]}`,
      },
    ],
    dutdice: [
      {
        title: "国际合作与交流处（港澳台办）",
        docs: "https://docs.rsshub.app/routes/university#da-lian-li-gong-da-xue-guo-ji-he-zuo-yu-jiao-liu-chu-gang-ao-tai-ban",
        source: ["/"],
        target: (params, url) =>
          `/dut/${url.match(/:\/\/[\w\d]+\./)[1]}/${url.match(/\.cn\/(.*)\.htm/)[1]}`,
      },
    ],
    tycgzx: [
      {
        title: "体育场馆中心",
        docs: "https://docs.rsshub.app/routes/university#da-lian-li-gong-da-xue-ti-yu-chang-guan-zhong-xin",
        source: ["/"],
        target: (params, url) =>
          `/dut/${url.match(/:\/\/[\w\d]+\./)[1]}/${url.match(/\.cn\/(.*)\.htm/)[1]}`,
      },
    ],
  },
  "dx2025.com": {
    _name: "东西智库",
    ".": [
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/multimedia#e-hentai-fen-lei",
        source: [
          "/archives/category/:type/:category?",
          "/archives/category/:type",
        ],
        target: (params) =>
          `/dx2025/${params.type}/${params.category ? params.category : ""}`,
      },
      {
        title: "标签",
        docs: "https://docs.rsshub.app/routes/multimedia#e-hentai-biao-qian",
        source: ["/archives/tag/:tag"],
        target: "/dx2025/tag/:tag",
      },
    ],
  },
  "dxy.cn": {
    _name: "丁香园",
    ".": [
      {
        title: "个人帖子",
        docs: "https://docs.rsshub.app/routes/bbs#ding-xiang-yuan",
        source: [
          "/bbs/newweb/pc/profile/:userId/threads",
          "/bbs/newweb/pc/profile/:userId",
        ],
        target: "/dxy/bbs/profile/thread/:userId",
      },
    ],
    "3g": [
      {
        title: "专题",
        docs: "https://docs.rsshub.app/routes/bbs#ding-xiang-yuan",
        source: ["/bbs/special"],
        target: (_, url) =>
          `/dxy/bbs/special/${new URL(url).searchParams.get("specialId")}`,
      },
    ],
  },
  "e-hentai.org": {
    _name: "E-Hentai",
    ".": [
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/multimedia#e-hentai-fen-lei",
        source: ["/:category", "/"],
        target: "/e-hentai/category/:category",
      },
      {
        title: "收藏",
        docs: "https://docs.rsshub.app/routes/picture#e-hentai",
        source: ["/favorites.php", "/"],
        target: (_params, url) =>
          `/ehentai/favorites/${new URL(url).searchParams.get("favcat")}`,
      },
      {
        title: "标签",
        docs: "https://docs.rsshub.app/routes/multimedia#e-hentai-biao-qian",
        source: ["/tag/:tag", "/"],
        target: "/e-hentai/tag/:tag",
      },
      {
        title: "标签",
        docs: "https://docs.rsshub.app/routes/picture#e-hentai",
        source: ["/tag/:tag", "/"],
        target: "/ehentai/tag/:tag",
      },
      {
        title: "搜索",
        docs: "https://docs.rsshub.app/routes/multimedia#e-hentai-sou-suo",
        source: ["/:keyword", "/"],
        target: "/e-hentai/search/:keyword",
      },
      {
        title: "搜索",
        docs: "https://docs.rsshub.app/routes/picture#e-hentai",
        source: ["/"],
        target: (_params, url) =>
          `/ehentai/search/${new URL(url).searchParams.get("f_search")}`,
      },
    ],
  },
  "eagle.cool": {
    _name: "Eagle",
    cn: [
      {
        title: "更新日志",
        docs: "https://docs.rsshub.app/routes/program-update#eagle",
        source: "/changelog",
        target: "/eagle/changelog/cn",
      },
      {
        title: "全部",
        docs: "https://docs.rsshub.app/routes/design#eagle",
        source: ["/blog"],
        target: "/eagle/blog",
      },
      {
        title: "设计资源",
        docs: "https://docs.rsshub.app/routes/design#eagle",
        source: ["/blog/design-resources"],
        target: "/eagle/blog/design-resources",
      },
      {
        title: "设计技巧",
        docs: "https://docs.rsshub.app/routes/design#eagle",
        source: ["/blog/learn-design"],
        target: "/eagle/blog/learn-design",
      },
      {
        title: "最新消息",
        docs: "https://docs.rsshub.app/routes/design#eagle",
        source: ["/blog/inside-eagle"],
        target: "/eagle/blog/inside-eagle",
      },
    ],
    tw: [
      {
        title: "更新日誌",
        docs: "https://docs.rsshub.app/routes/program-update#eagle",
        source: "/changelog",
        target: "/eagle/changelog/tw",
      },
      {
        title: "全部",
        docs: "https://docs.rsshub.app/routes/design#eagle",
        source: ["/blog"],
        target: "/eagle/blog/tw",
      },
      {
        title: "設計資源",
        docs: "https://docs.rsshub.app/routes/design#eagle",
        source: ["/blog/design-resources"],
        target: "/eagle/blog/design-resources/tw",
      },
      {
        title: "設計技巧",
        docs: "https://docs.rsshub.app/routes/design#eagle",
        source: ["/blog/learn-design"],
        target: "/eagle/blog/learn-design/tw",
      },
      {
        title: "最新消息",
        docs: "https://docs.rsshub.app/routes/design#eagle",
        source: ["/blog/inside-eagle"],
        target: "/eagle/blog/inside-eagle/tw",
      },
    ],
    en: [
      {
        title: "Release Notes",
        docs: "https://docs.rsshub.app/routes/program-update#eagle",
        source: "/changelog",
        target: "/eagle/changelog/en",
      },
      {
        title: "All",
        docs: "https://docs.rsshub.app/routes/design#eagle",
        source: ["/blog"],
        target: "/eagle/blog/en",
      },
      {
        title: "Design Resources",
        docs: "https://docs.rsshub.app/routes/design#eagle",
        source: ["/blog/design-resources"],
        target: "/eagle/blog/design-resources/en",
      },
      {
        title: "Learn Design",
        docs: "https://docs.rsshub.app/routes/design#eagle",
        source: ["/blog/learn-design"],
        target: "/eagle/blog/learn-design/en",
      },
      {
        title: "Inside Eagle",
        docs: "https://docs.rsshub.app/routes/design#eagle",
        source: ["/blog/inside-eagle"],
        target: "/eagle/blog/inside-eagle/en",
      },
    ],
  },
  "ac.cn": {
    _name: "地震速报",
    "www.ceic": [
      {
        title: "中国地震台",
        docs: "https://docs.rsshub.app/routes/forecast#di-zhen-su-bao",
        source: ["/speedsearch", "/"],
        target: "/earthquake/ceic",
      },
    ],
  },
  "cea.gov.cn": {
    _name: "地震速报",
    www: [
      {
        title: "中国地震局",
        docs: "https://docs.rsshub.app/routes/forecast#di-zhen-su-bao",
        source: ["/cea/xwzx/zqsd/index.html", "/"],
        target: "/earthquake",
      },
    ],
  },
  "eastday.com": {
    _name: "东方网",
    mini: [
      {
        title: "24 小时热闻",
        docs: "https://docs.rsshub.app/routes/traditional-media#dong-fang-wang",
        source: "/",
        target: "/eastday/24",
      },
    ],
    sh: [
      {
        title: "上海新闻",
        docs: "https://docs.rsshub.app/routes/traditional-media#dong-fang-wang",
        source: "/",
        target: "/eastday/sh",
      },
    ],
    www: [
      {
        title: "热点搜索",
        docs: "https://docs.rsshub.app/routes/traditional-media#dong-fang-wang-re-dian-sou-suo",
        source: "/",
        target: "/eastday/find",
      },
      {
        title: "原创",
        docs: "https://docs.rsshub.app/routes/traditional-media#dong-fang-wang-yuan-chuang",
        source: "/",
        target: "/eastday/portrait",
      },
    ],
  },
  "eastmoney.com": {
    _name: "东方财富",
    data: [
      {
        title: "研究报告",
        docs: "https://docs.rsshub.app/routes/finance#dong-fang-cai-fu",
        source: ["/report/:category"],
        target: "/eastmoney/report/:category",
      },
    ],
    fundbarmob: [
      {
        title: "天天基金用户动态",
        docs: "https://docs.rsshub.app/routes/finance#dong-fang-cai-fu",
        source: ["/"],
        target: (_param, url) =>
          `/eastmoney/ttjj/user/${new URL(url).searchParams.get("userid")}`,
      },
    ],
    so: [
      {
        title: "搜索",
        docs: "https://docs.rsshub.app/routes/finance#dong-fang-cai-fu",
        source: ["/News/s"],
        target: (_param, url) =>
          `/eastmoney/search/${new URL(url).searchParams.get("KeyWord")}`,
      },
    ],
  },
  "ecnu.edu.cn": {
    _name: "华东师范大学",
    acm: [
      {
        title: "所有比赛列表",
        docs: "https://docs.rsshub.app/routes/university#hua-dong-shi-fan-da-xue",
        source: ["/contest/", "/"],
        target: "/ecnu/acm/contest/",
      },
      {
        title: "仅公开比赛列表",
        docs: "https://docs.rsshub.app/routes/university#hua-dong-shi-fan-da-xue",
        source: ["/contest/", "/"],
        target: "/ecnu/acm/contest/public",
      },
    ],
  },
  "kaoyan.com": {
    _name: "华东师范大学",
    yz: [
      {
        title: "研究生院",
        docs: "https://docs.rsshub.app/routes/university#hua-dong-shi-fan-da-xue",
        source: ["/ecnu/tiaoji", "/"],
        target: "/ecnu/yjs",
      },
    ],
  },
  "economist.com": {
    _name: "The Economist",
    ".": [
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/traditional-media#the-economist",
        source: ["/:endpoint"],
        target: "/economist/:endpoint",
      },
      {
        title: "Espresso",
        docs: "https://docs.rsshub.app/routes/traditional-media#the-economist",
        source: ["/the-world-in-brief", "/espresso"],
        target: "/economist/espresso",
      },
    ],
    gre: [
      {
        title: "GRE Vocabulary",
        docs: "https://docs.rsshub.app/routes/traditional-media#the-economist",
        source: [
          "/",
          "/gre-advice/gre-vocabulary/which-words-study/most-common-gre-vocabulary-list-organized-difficulty",
        ],
        target: "/economist/gre-vocabulary",
      },
    ],
  },
  "businessreview.global": {
    _name: "The Economist",
    ".": [
      {
        title: "商论",
        docs: "https://docs.rsshub.app/routes/traditional-media#the-economist",
        source: ["/"],
        target: "/economist/global-business-review",
      },
    ],
  },
  "ecust.edu.cn": {
    _name: "华东理工大学",
    e: [
      {
        title: "继续教育学院 - 学院公告",
        docs: "https://docs.rsshub.app/routes/university#hua-dong-li-gong-da-xue",
        source: ["/engine2/m/38F638B77773ADD3", "/"],
        target: "/ecust/jxjy/news",
      },
    ],
    gschool: [
      {
        title: "研究生院通知公告",
        docs: "https://docs.rsshub.app/routes/university#hua-dong-li-gong-da-xue",
        source: ["/12753/list.htm", "/"],
        target: "/ecust/yjs",
      },
    ],
    jwc: [
      {
        title: "本科教务处信息网",
        docs: "https://docs.rsshub.app/routes/university#hua-dong-li-gong-da-xue",
        source: ["/"],
        target: "/ecust/jwc/notice/:category?",
      },
    ],
  },
  "eet-china.com": {
    _name: "电子工程专辑",
    ".": [
      {
        title: "芯语",
        docs: "https://docs.rsshub.app/routes/new-media#dian-zi-gong-cheng-zhuan-ji-xin-yu",
        source: ["/mp", "/"],
        target: (params, url) => {
          url = new URL(url)
          const path = url.href.match(/\.com\/mp(.*?)/)[1]

          return `/eet-china/mp${path ? `/${path}` : ""}`
        },
      },
      {
        title: "芯语 - 标签",
        docs: "https://docs.rsshub.app/routes/new-media#dian-zi-gong-cheng-zhuan-ji-xin-yu-biao-qian",
        source: ["/mp/tags/:id", "/"],
        target: "/eet-china/mp/tags/:id",
      },
    ],
  },
  "egsea.com": {
    _name: "e 公司",
    ".": [
      {
        title: "快讯",
        docs: "https://docs.rsshub.app/routes/new-media#e-gong-si",
        source: ["/news/flash"],
        target: "/egsea/flash",
      },
    ],
  },
  "elasticsearch.cn": {
    _name: "Elastic 中文社区",
    ".": [
      {
        title: "发现",
        docs: "https://docs.rsshub.app/routes/bbs#elastic-zhong-wen-she-qu-fa-xian",
        source: ["/:params", "/"],
        target: "/elasticsearch-cn/:params",
      },
    ],
  },
  "eleduck.com": {
    _name: "电鸭社区",
    ".": [
      {
        title: "工作机会",
        docs: "https://docs.rsshub.app/routes/bbs#dian-ya-she-qu-fen-lei-wen-zhang",
        source: ["/categories/5", "/"],
        target: "/eleduck/jobs",
      },
      {
        title: "分类文章",
        docs: "https://docs.rsshub.app/routes/bbs#dian-ya-she-qu-fen-lei-wen-zhang",
        source: "/categories/:cid",
        target: (params) => `/eleduck/posts/${params.cid}`,
      },
      {
        title: "全部文章",
        docs: "https://docs.rsshub.app/routes/bbs#dian-ya-she-qu-fen-lei-wen-zhang",
        source: ["/", "*"],
        target: () => "/eleduck/posts",
      },
    ],
  },
  "sciencedirect.com": {
    _name: "ScienceDirect",
    ".": [
      {
        title: "Journal",
        docs: "https://docs.rsshub.app/routes/journal#sciencedirect-journal",
        source: ["/journal/:id", "/"],
        target: "/sciencedirect/journal/:id",
      },
    ],
  },
  "china-embassy.org": {
    _name: "中国驻外使领馆",
    ca: [
      {
        title: "重要通知 - 加拿大大使馆",
        docs: "https://docs.rsshub.app/routes/government#zhong-guo-zhu-wai-shi-ling-guan",
        source: ["/chn/zytz", "/"],
        target: "/embassy/ca",
      },
    ],
    jp: [
      {
        title: "通知通告 - 日本大使馆",
        docs: "https://docs.rsshub.app/routes/government#zhong-guo-zhu-wai-shi-ling-guan",
        source: ["/chn/lsfws/LSB", "/"],
        target: "/embassy/jp",
      },
    ],
    kr: [
      {
        title: "重要通知 - 韩国大使馆",
        docs: "https://docs.rsshub.app/routes/government#zhong-guo-zhu-wai-shi-ling-guan",
        source: ["/lsqz/ls_tz", "/"],
        target: "/embassy/kr",
      },
    ],
    my: [
      {
        title: "重要通知 - 马来西亚大使馆",
        docs: "https://docs.rsshub.app/routes/government#zhong-guo-zhu-wai-shi-ling-guan",
        source: ["/chn/zytz", "/"],
        target: "/embassy/my",
      },
    ],
    sg: [
      {
        title: "重要通知 - 新加坡大使馆",
        docs: "https://docs.rsshub.app/routes/government#zhong-guo-zhu-wai-shi-ling-guan",
        source: ["/chn/lsfw/zytzs", "/"],
        target: "/embassy/sg",
      },
    ],
  },
  "china-embassy.gov.cn": {
    _name: "中国驻外使领馆",
    us: [
      {
        title: "重要通知 - 美国大使馆",
        docs: "https://docs.rsshub.app/routes/government#zhong-guo-zhu-wai-shi-ling-guan",
        source: ["/zytz", "/"],
        target: "/embassy/us",
      },
    ],
  },
  "chinese-embassy.org.uk": {
    _name: "中国驻外使领馆",
    www: [
      {
        title: "领事协助 - 英国大使馆",
        docs: "https://docs.rsshub.app/routes/government#zhong-guo-zhu-wai-shi-ling-guan",
        source: ["/chn/lsfw/lsxz", "/"],
        target: "/embassy/us",
      },
    ],
  },
  "chineseembassy.org": {
    _name: "中国驻外使领馆",
    de: [
      {
        title: "近期通知 - 德国大使馆",
        docs: "https://docs.rsshub.app/routes/government#zhong-guo-zhu-wai-shi-ling-guan",
        source: ["/chn/lsfw/jqtz", "/"],
        target: "/embassy/de",
      },
    ],
    fr: [
      {
        title: "重要通知 - 法国大使馆",
        docs: "https://docs.rsshub.app/routes/government#zhong-guo-zhu-wai-shi-ling-guan",
        source: ["/chn/zgzfg/zgsg/lsb", "/"],
        target: "/embassy/fr",
      },
    ],
  },
  "china-consulate.org": {
    _name: "中国驻外使领馆",
    marseille: [
      {
        title: "领事服务最新公告 - 马赛总领事馆",
        docs: "https://docs.rsshub.app/routes/government#zhong-guo-zhu-wai-shi-ling-guan",
        source: ["/chn/lsfwgg", "/"],
        target: "/embassy/fr/marseille",
      },
    ],
    strasbourg: [
      {
        title: "重要通知 - 斯特拉斯堡总领事馆",
        docs: "https://docs.rsshub.app/routes/government#zhong-guo-zhu-wai-shi-ling-guan",
        source: ["/chn/lsfw", "/"],
        target: "/embassy/fr/strasbourg",
      },
    ],
    lyon: [
      {
        title: "通知、通告 - 里昂总领事馆",
        docs: "https://docs.rsshub.app/routes/government#zhong-guo-zhu-wai-shi-ling-guan",
        source: ["/chn/tztg", "/"],
        target: "/embassy/fr/lyon",
      },
    ],
    nagasaki: [
      {
        title: "通知公告 - 长崎总领事馆",
        docs: "https://docs.rsshub.app/routes/government#zhong-guo-zhu-wai-shi-ling-guan",
        source: ["/chn/tzgg", "/"],
        target: "/embassy/jp/nagasaki",
      },
    ],
    osaka: [
      {
        title: "通知公告 - 大阪总领事馆",
        docs: "https://docs.rsshub.app/routes/government#zhong-guo-zhu-wai-shi-ling-guan",
        source: ["/chn/tzgg", "/"],
        target: "/embassy/jp/osaka",
      },
    ],
    fukuoka: [
      {
        title: "通知公告 - 福冈总领事馆",
        docs: "https://docs.rsshub.app/routes/government#zhong-guo-zhu-wai-shi-ling-guan",
        source: ["/chn/tzgg", "/"],
        target: "/embassy/jp/fukuoka",
      },
    ],
    sapporo: [
      {
        title: "通知公告 - 札幌总领事馆",
        docs: "https://docs.rsshub.app/routes/government#zhong-guo-zhu-wai-shi-ling-guan",
        source: ["/chn/tzgg", "/"],
        target: "/embassy/jp/sapporo",
      },
    ],
    niigata: [
      {
        title: "通知通告 - 新潟总领事馆",
        docs: "https://docs.rsshub.app/routes/government#zhong-guo-zhu-wai-shi-ling-guan",
        source: ["/chn/lsbh/tztg", "/"],
        target: "/embassy/jp/niigata",
      },
    ],
    busan: [
      {
        title: "通知公告 - 釜山总领事馆",
        docs: "https://docs.rsshub.app/routes/government#zhong-guo-zhu-wai-shi-ling-guan",
        source: ["/chn/lsfw/tzgg101", "/"],
        target: "/embassy/kr/busan",
      },
    ],
    gwangju: [
      {
        title: "公告通知 - 光州总领事馆",
        docs: "https://docs.rsshub.app/routes/government#zhong-guo-zhu-wai-shi-ling-guan",
        source: ["/chn/lbxx/ggtz", "/"],
        target: "/embassy/kr/gwangju",
      },
    ],
    edinburgh: [
      {
        title: "重要通知 - 爱丁堡总领事馆",
        docs: "https://docs.rsshub.app/routes/government#zhong-guo-zhu-wai-shi-ling-guan",
        source: ["/chn/zytz", "/"],
        target: "/embassy/uk/edinburgh",
      },
    ],
    newyork: [
      {
        title: "重要通知 - 纽约总领事馆",
        docs: "https://docs.rsshub.app/routes/government#zhong-guo-zhu-wai-shi-ling-guan",
        source: ["/chn/fwzc/zxtz", "/"],
        target: "/embassy/us/newyork",
      },
    ],
  },
  "chinaconsulatechicago.org": {
    _name: "中国驻外使领馆",
    www: [
      {
        title: "领馆重要通知 - 芝加哥总领事馆",
        docs: "https://docs.rsshub.app/routes/government#zhong-guo-zhu-wai-shi-ling-guan",
        source: ["/chn/zytz", "/"],
        target: "/embassy/us/chicago",
      },
    ],
  },
  "chinaconsulatesf.org": {
    _name: "中国驻外使领馆",
    www: [
      {
        title: "重要通知 - 旧金山总领事馆",
        docs: "https://docs.rsshub.app/routes/government#zhong-guo-zhu-wai-shi-ling-guan",
        source: ["/chn/zytz", "/"],
        target: "/embassy/us/sanfrancisco",
      },
    ],
  },
  "chineseconsulate.org": {
    _name: "中国驻外使领馆",
    montreal: [
      {
        title: "重要通知 - 蒙特利尔总领事馆",
        docs: "https://docs.rsshub.app/routes/government#zhong-guo-zhu-wai-shi-ling-guan",
        source: ["/chn/zytz", "/"],
        target: "/embassy/ca/montreal",
      },
    ],
    munich: [
      {
        title: "近期通知 - 慕尼黑总领馆",
        docs: "https://docs.rsshub.app/routes/government#zhong-guo-zhu-wai-shi-ling-guan",
        source: ["/chn/jqtz", "/"],
        target: "/embassy/de/munich",
      },
    ],
    nagoya: [
      {
        title: "通知公告 - 名古屋总领事馆",
        docs: "https://docs.rsshub.app/routes/government#zhong-guo-zhu-wai-shi-ling-guan",
        source: "/",
        target: "/embassy/jp/nagoya",
      },
    ],
    jeju: [
      {
        title: "公告栏 - 济州总领事馆",
        docs: "https://docs.rsshub.app/routes/government#zhong-guo-zhu-wai-shi-ling-guan",
        source: ["/chn/ggl", "/"],
        target: "/embassy/kr/jeju",
      },
    ],
    belfast: [
      {
        title: "通知通告 - 贝尔法斯特总领馆",
        docs: "https://docs.rsshub.app/routes/government#zhong-guo-zhu-wai-shi-ling-guan",
        source: ["/chn/tztg", "/"],
        target: "/embassy/uk/belfast",
      },
    ],
    manchester: [
      {
        title: "通知公告 - 曼彻斯特总领事馆",
        docs: "https://docs.rsshub.app/routes/government#zhong-guo-zhu-wai-shi-ling-guan",
        source: ["/chn/tzgg", "/"],
        target: "/embassy/uk/manchester",
      },
    ],
  },
  "ems.com.cn": {
    _name: "中国邮政速递物流",
    www: [
      {
        title: "新闻",
        docs: "https://docs.rsshub.app/routes/other#zhong-guo-you-zheng-su-di-wu-liu",
        source: "/aboutus/xin_wen_yu_shi_jian.html",
        target: "/ems/news",
      },
      {
        title: "苹果邮件",
        docs: "https://docs.rsshub.app/routes/other#zhong-guo-you-zheng-su-di-wu-liu",
        source: ["/apple/query/:id"],
        target: "/apple/ems/:id",
      },
    ],
  },
  "epicgames.com": {
    _name: "Epic Games Store",
    store: [
      {
        title: "免费游戏",
        docs: "https://docs.rsshub.app/routes/game#epic-games-store",
        source: ["/:locale/free-games"],
        target: "/epicgames/freegames/:locale",
      },
    ],
  },
  "eprice.com.tw": {
    _name: "ePrice",
    ".": [
      {
        title: "ePrice 比價王",
        docs: "https://docs.rsshub.app/routes/new-media#eprice",
        source: ["/"],
        target: "/eprice/tw",
      },
    ],
  },
  "eprice.com.hk": {
    _name: "ePrice",
    ".": [
      {
        title: "ePrice 香港",
        docs: "https://docs.rsshub.app/routes/new-media#eprice",
        source: ["/"],
        target: "/eprice/hk",
      },
    ],
  },
  "eventernote.com": {
    _name: "Eventernote",
    www: [
      {
        title: "声优活动及演唱会",
        docs: "https://docs.rsshub.app/routes/anime#eventernote",
        source: "/actors/:name/:id/events",
        target: "/eventernote/actors/:name/:id",
      },
    ],
  },
  "ezone.hk": {
    _name: "ezone.hk",
    ".": [
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/new-media#ezone-hk-fen-lei",
        source: ["/:category", "/"],
        target: "/ezone/:category?",
      },
    ],
  },
  "famitsu.com": {
    _name: "ファミ通",
    ".": [
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/game#ファミ-tong",
        source: ["/search"],
        target: (_, url) =>
          `/famitsu/category/${new URL(url).searchParams.get("category")}`,
      },
    ],
  },
  "fantia.jp": {
    _name: "Fantia",
    ".": [
      {
        title: "用户投稿",
        docs: "https://docs.rsshub.app/routes/picture#fantia",
        source: ["/fanclubs/:id"],
        target: "/fantia/user/:id",
      },
    ],
  },
  "farmatters.com": {
    _name: "Farmatters",
    ".": [
      {
        title: "Viewpoint",
        docs: "https://docs.rsshub.app/routes/new-media#farmatters-viewpoint",
        source: ["/news"],
        target: "/farmatters/news",
      },
      {
        title: "Exclusive",
        docs: "https://docs.rsshub.app/routes/new-media#farmatters-exclusive",
        source: ["/exclusive"],
        target: "/farmatters/exclusive",
      },
      {
        title: "Tag",
        docs: "https://docs.rsshub.app/routes/new-media#farmatters-tag",
        source: ["/tag/:id", "/:locale/tag/:id"],
        target: (params) => {
          const id = params.id
          const locale = params.locale

          return `/farmatters/tag${id ? `/${id}${locale ? `/${locale}` : ""}` : ""}`
        },
      },
      {
        title: "Wiki",
        docs: "https://docs.rsshub.app/routes/new-media#farmatters-wiki",
        source: ["/wiki"],
        target: "/farmatters/wiki",
      },
    ],
  },
  "fastbull.cn": {
    _name: "法布财经",
    ".": [
      {
        title: "新闻",
        docs: "https://docs.rsshub.app/routes/finance#fa-bu-cai-jing-xin-wen",
        source: ["/news", "/"],
        target: "/fastbull/news",
      },
      {
        title: "快讯",
        docs: "https://docs.rsshub.app/routes/finance#fa-bu-cai-jing-kuai-xun",
        source: ["/express-news", "/"],
        target: "/fastbull/express-news",
      },
    ],
  },
  "fda.gov": {
    _name: "U.S. Food and Drug Administration",
    ".": [
      {
        title: "CDRHNew",
        docs: "https://docs.rsshub.app/routes/government#mei-guo-shi-pin-yao-pin-jian-du-guan-li-ju-cdrhnew",
        source: [
          "/medical-devices/news-events-medical-devices/cdrhnew-news-and-updates",
          "/",
        ],
        target: "/fda/cdrh/:titleOnly",
      },
    ],
  },
  "feng.com": {
    _name: "威锋",
    ".": [
      {
        title: "社区",
        docs: "https://docs.rsshub.app/routes/bbs#wei-feng",
        source: ["/forum/photo/:id", "/forum/:id"],
        target: "/feng/forum/:id",
      },
    ],
  },
  "finalfantasyxiv.com": {
    _name: "最终幻想 14",
    eu: [
      {
        title: "国际服 （Lodestone）",
        docs: "https://docs.rsshub.app/routes/game#zui-zhong-huan-xiang-14",
        source: ["/lodestone/news", "/"],
        target: (_, url) =>
          `/ff14/global/${url.match(/\/\/(\w+?)\.finalfantasyxiv\.com/)[1]}`,
      },
    ],
    fr: [
      {
        title: "国际服 （Lodestone）",
        docs: "https://docs.rsshub.app/routes/game#zui-zhong-huan-xiang-14",
        source: ["/lodestone/news", "/"],
        target: (_, url) =>
          `/ff14/global/${url.match(/\/\/(\w+?)\.finalfantasyxiv\.com/)[1]}`,
      },
    ],
    de: [
      {
        title: "国际服 （Lodestone）",
        docs: "https://docs.rsshub.app/routes/game#zui-zhong-huan-xiang-14",
        source: ["/lodestone/news", "/"],
        target: (_, url) =>
          `/ff14/global/${url.match(/\/\/(\w+?)\.finalfantasyxiv\.com/)[1]}`,
      },
    ],
    jp: [
      {
        title: "国际服 （Lodestone）",
        docs: "https://docs.rsshub.app/routes/game#zui-zhong-huan-xiang-14",
        source: ["/lodestone/news", "/"],
        target: (_, url) =>
          `/ff14/global/${url.match(/\/\/(\w+?)\.finalfantasyxiv\.com/)[1]}`,
      },
    ],
    na: [
      {
        title: "国际服 （Lodestone）",
        docs: "https://docs.rsshub.app/routes/game#zui-zhong-huan-xiang-14",
        source: ["/lodestone/news", "/"],
        target: (_, url) =>
          `/ff14/global/${url.match(/\/\/(\w+?)\.finalfantasyxiv\.com/)[1]}`,
      },
    ],
  },
  "sdo.com": {
    _name: "最终幻想 14",
    "ff.web": [
      {
        title: "国服",
        docs: "https://docs.rsshub.app/routes/game#zui-zhong-huan-xiang-14",
        source: ["/web8/index.html"],
        target: "/ff14/zh",
      },
    ],
  },
  "fffdm.com": {
    _name: "风之动漫",
    manhua: [
      {
        title: "在线漫画",
        docs: "https://docs.rsshub.app/routes/anime#feng-zhi-dong-man",
        source: ["/manhua/:id", "/:id"],
        target: "/fffdm/manhua/:id",
      },
    ],
    www: [
      {
        title: "在线漫画",
        docs: "https://docs.rsshub.app/routes/anime#feng-zhi-dong-man",
        source: ["/manhua/:id", "/:id"],
        target: "/fffdm/manhua/:id",
      },
    ],
  },
  "filmdeepfocus.com": {
    _name: "深焦",
    ".": [
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/new-media#shen-jiao-fen-lei",
        source: ["/:category", "/"],
        target: "/filmdeepfocus/:category?",
      },
    ],
  },
  "finology.in": {
    _name: "Finology Insider",
    insider: [
      {
        title: "Bullets",
        docs: "https://docs.rsshub.app/routes/finance#finology-insider",
        source: ["/bullets"],
        target: "/finology/bullets",
      },
      {
        title: "Category",
        docs: "https://docs.rsshub.app/routes/finance#finology-insider",
        source: "/:category",
        target: "/finology/:category",
      },
      {
        title: "Most Viewed",
        docs: "https://docs.rsshub.app/routes/finance#finology-insider",
        source: "/most-viewed",
        target: "/finology/most-viewed/monthly",
      },
      {
        title: "Trending Topic",
        docs: "https://docs.rsshub.app/routes/finance#finology-insider",
        source: ["/tag/:topic"],
        target: "/finology/tag/:topic",
      },
    ],
  },
  "finviz.com": {
    _name: "finviz",
    ".": [
      {
        title: "News",
        docs: "https://docs.rsshub.app/routes/finance#finviz-news",
        source: ["/news.ashx", "/"],
        target: "/finviz/:category?",
      },
      {
        title: "US Stock News",
        docs: "https://docs.rsshub.app/routes/finance#finviz-mei-gu-gu-piao-xin-wen",
        source: ["/quote.ashx", "/"],
        target: "/finviz/news/:category?",
      },
    ],
  },
  "firecore.com": {
    _name: "Infuse",
    ".": [
      {
        title: "Release Notes",
        docs: "https://docs.rsshub.app/routes/program-update#infuse",
        source: ["/releases", "/"],
        target: "/firecore/:os?",
      },
    ],
  },
  "firefox.com": {
    _name: "Mozilla",
    monitor: [
      {
        title: "Firefox Monitor",
        docs: "https://docs.rsshub.app/routes/other#mozilla",
        source: ["/", "/breaches"],
        target: "/firefox/breaches",
      },
    ],
  },
  "mozilla.org": {
    _name: "Mozilla",
    addons: [
      {
        title: "Add-ons Update",
        docs: "https://docs.rsshub.app/routes/program-update#firefox",
        source: [
          "/:lang/firefox/addon/:id/versions",
          "/:lang/firefox/addon/:id",
        ],
        target: "/firefox/addons/:id",
      },
    ],
    ".": [
      {
        title: "Firefox New Release",
        docs: "https://docs.rsshub.app/routes/program-update#firefox",
      },
    ],
  },
  "fisher.spb.ru": {
    _name: "fisher spb",
    ".": [
      {
        title: "news",
        docs: "https://docs.rsshub.app/routes/en/other#fisher-spb",
        source: ["/news"],
        target: "/fisher-spb/news",
      },
    ],
  },
  "fishshell.com": {
    _name: "fish shell",
    ".": [
      {
        title: "Release Notes",
        docs: "https://docs.rsshub.app/routes/program-update#fish-shell",
        source: ["/"],
        target: "/fishshell",
      },
    ],
  },
  "fjksbm.com": {
    _name: "福建考试报名网",
    ".": [
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/study#fu-jian-kao-shi-bao-ming-wang",
        source: ["/portal/:category?", "/portal"],
        target: "/fjksbm/:category?",
      },
    ],
  },
  "flyert.com": {
    _name: "飞客茶馆",
    ".": [
      {
        title: "优惠信息",
        docs: "https://docs.rsshub.app/routes/travel#fei-ke-cha-guan-you-hui-xin-xi",
        source: "/",
        target: "/flyert/preferential",
      },
      {
        title: "信用卡",
        docs: "https://docs.rsshub.app/routes/travel#fei-ke-cha-guan-xin-yong-ka",
        source: "/",
        target: "/flyert/creditcard/:bank",
      },
    ],
  },
  "focustaiwan.tw": {
    _name: "Focus Taiwan",
    ".": [
      {
        title: "Category",
        docs: "https://docs.rsshub.app/routes/new-media#focus-taiwan-category",
        source: ["/:category", "/"],
        target: "/focustaiwan/category?",
      },
    ],
  },
  "followin.io": {
    _name: "Followin",
    ".": [
      {
        title: "首页",
        docs: "https://docs.rsshub.app/routes/finance#followin",
        source: ["/:lang"],
        target: (params) => (params.lang !== "news" ? "/followin/1/:lang" : ""),
      },
      {
        title: "快讯",
        docs: "https://docs.rsshub.app/routes/finance#followin",
        source: ["/:lang?/news", "/news"],
        target: "/followin/news/:lang?",
      },
      {
        title: "KOL",
        docs: "https://docs.rsshub.app/routes/finance#followin",
        source: ["/:lang/kol/:kolId", "/kol/:kolId"],
        target: "/followin/kol/:kolId/:lang?",
      },
      {
        title: "话题",
        docs: "https://docs.rsshub.app/routes/finance#followin",
        source: ["/:lang/topic/:topicId", "/topic/:topicId"],
        target: "/followin/topic/:topicId/:lang?",
      },
      {
        title: "标签",
        docs: "https://docs.rsshub.app/routes/finance#followin",
        source: ["/:lang/tag/:tagId", "/tag/:tagId"],
        target: "/followin/tag/:tagId/:lang?",
      },
    ],
  },
  "foresightnews.pro": {
    _name: "Foresight News",
    ".": [
      {
        title: "首页",
        docs: "https://docs.rsshub.app/routes/new-media#foresight-news-shou-ye",
        source: ["/"],
        target: "/foresightnews",
      },
      {
        title: "文章",
        docs: "https://docs.rsshub.app/routes/new-media#foresight-news-wen-zhang",
        source: ["/"],
        target: "/foresightnews/article",
      },
      {
        title: "快讯",
        docs: "https://docs.rsshub.app/routes/new-media#foresight-news-kuai-xun",
        source: ["/news", "/"],
        target: "/foresightnews/news",
      },
      {
        title: "专栏",
        docs: "https://docs.rsshub.app/routes/new-media#foresight-news-zhuan-lan",
        source: ["/column/detail/:id", "/"],
        target: "/foresightnews/column/:id",
      },
    ],
  },
  "foreverblog.cn": {
    _name: "十年之约",
    www: [
      {
        title: "专题展示",
        docs: "https://docs.rsshub.app/routes/blog#shi-nian-zhi-yue",
        source: ["/feeds.html"],
        target: "/foreverblog/feeds",
      },
    ],
  },
  "fortnite.com": {
    _name: "Fortnite",
    ".": [
      {
        title: "News",
        docs: "https://docs.rsshub.app/routes/game#fortnite",
        source: ["/news"],
        target: (_, url) => {
          const lang = url.match(/\?(lang=\w*)/)
          return lang ? `/fortnite/news/${lang[1]}` : `/fortnite/news`
        },
      },
    ],
  },
  "fortunechina.com": {
    _name: "财富中文网",
    ".": [
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/new-media#cai-fu-zhong-wen-wang-fen-lei",
        source: ["/:category", "/"],
        target: "/fortunechina/:category?",
      },
    ],
  },
  "fosshub.com": {
    _name: "FossHub",
    ".": [
      {
        title: "Software Update",
        docs: "https://docs.rsshub.app/routes/program-update#fosshub-software-update",
        source: ["/"],
        target: (params, url) => `/fosshub/${url.match(/\/(.*?)\.html$/)[1]}`,
      },
    ],
  },
  "freebuf.com": {
    _name: "Freebuf",
    ".": [
      {
        title: "文章",
        docs: "https://docs.rsshub.app/routes/blog#freebuf",
        source: ["/articles/:type/*.html", "/articles/:type"],
        target: "/freebuf/articles/:type",
      },
    ],
  },
  "freecomputerbooks.com": {
    _name: "Free Computer Books",
    ".": [
      {
        title: "Selected New Books",
        docs: "https://docs.rsshub.app/routes/en/reading#free-computer-books",
        source: ["/", "/index.html"],
        target: "/freecomputerbooks",
      },
      {
        title: "Current Book List",
        docs: "https://docs.rsshub.app/routes/en/reading#free-computer-books",
        source: ["/:category"],
        target: (params, _, document) => {
          const categoryId = params.category.replace(".html", "")

          if (categoryId === "index") {
            return // only matching the "Selected New Books" rule above
          }

          if (!document.querySelector("ul[id^=newBooks]")) {
            return // not a proper book list page
          }

          return "/freecomputerbooks/" + categoryId
        },
      },
    ],
  },
  "freewechat.com": {
    _name: "自由微信",
    ".": [
      {
        title: "公众号",
        docs: "https://docs.rsshub.app/routes/new-media#zi-you-wei-xin",
        source: ["/profile/:id"],
        target: "/freewechat/profile/:id",
      },
    ],
  },
  "ftchinese.com": {
    _name: "Financial Times",
    ".": [
      {
        title: "FT 中文网",
        docs: "https://docs.rsshub.app/routes/traditional-media#financial-times",
      },
      {
        title: "myFT 个人 RSS",
        docs: "https://docs.rsshub.app/routes/traditional-media#financial-times",
      },
    ],
  },
  "ft.com": {
    _name: "Financial Times",
    ".": [
      {
        title: "myFT personal RSS",
        docs: "https://docs.rsshub.app/routes/en/traditional-media#financial-times",
      },
    ],
  },
  "fuliba2023.net": {
    _name: "福利吧",
    ".": [
      {
        title: "最新",
        docs: "https://docs.rsshub.app/routes/new-media#fuliba",
        source: "/",
        target: "/fuliba/latest",
      },
    ],
  },
  "furstar.jp": {
    _name: "Furstar",
    ".": [
      {
        title: "安全文摘首頁",
        docs: "https://docs.rsshub.app/routes/shopping#an-quan-wen-zhai",
        source: ["/", "/"],
        target: "/secnews/index",
      },
    ],
  },
  "futunn.com": {
    _name: "富途牛牛",
    news: [
      {
        title: "要闻",
        docs: "https://docs.rsshub.app/routes/finance#fu-tu-niu-niu",
        source: ["/main", "/"],
        target: "/futunn/main",
      },
    ],
  },
  "fx-markets.com": {
    _name: "FX-Markets",
    ".": [
      {
        title: "Trading",
        docs: "https://docs.rsshub.app/routes/finance#fx-markets",
        source: "/trading",
        target: "/fx-markets/trading",
      },
      {
        title: "Infrastructure",
        docs: "https://docs.rsshub.app/routes/finance#fx-markets",
        source: "/infrastructure",
        target: "/fx-markets/infrastructure",
      },
      {
        title: "Tech and Data",
        docs: "https://docs.rsshub.app/routes/finance#fx-markets",
        source: "/tech-and-data",
        target: "/fx-markets/tech-and-data",
      },
      {
        title: "Regulation",
        docs: "https://docs.rsshub.app/routes/finance#fx-markets",
        source: "/regulation",
        target: "/fx-markets/regulation",
      },
    ],
  },
  "fx678.com": {
    _name: "汇通网",
    ".": [
      {
        title: "7x24 小时快讯",
        docs: "https://docs.rsshub.app/routes/finance#hui-tong-wang",
        source: ["/kx"],
        target: "/fx678/kx",
      },
    ],
  },
  "fzmtr.com": {
    _name: "福州地铁",
    www: [
      {
        title: "通知公告",
        docs: "https://docs.rsshub.app/routes/travel#fu-zhou-di-tie",
      },
    ],
  },
  "gameapps.hk": {
    _name: "GameApps.hk 香港手机游戏网",
    ".": [
      {
        title: "最新消息",
        docs: "https://docs.rsshub.app/routes/game#gameapps-hk-xiang-gang-shou-ji-you-xi-wang",
        source: ["/"],
        target: "/gameapps",
      },
    ],
  },
  "gamebase.com.tw": {
    _name: "遊戲基地 Gamebase",
    news: [
      {
        title: "新聞",
        docs: "https://docs.rsshub.app/routes/game#gamebase-xin-wen",
        source: ["/news/:type"],
        target: (params, url) =>
          `/gamebase/news/${params.type}/${new URL(url).searchParams.get("type")}`,
      },
    ],
  },
  "gamegene.cn": {
    _name: "游戏基因",
    news: [
      {
        title: "资讯",
        docs: "https://docs.rsshub.app/routes/game#you-xi-ji-yin",
        source: ["/news"],
        target: "/gamegene/news",
      },
    ],
  },
  "gamer.com.tw": {
    _name: "巴哈姆特電玩資訊站",
    acg: [
      {
        title: "GNN 新聞",
        docs: "https://docs.rsshub.app/routes/bbs#ba-ha-mu-te-dian-wan-zi-xun-zhan",
        source: ["/news.php"],
        target: (params, url) =>
          `/gamer/gnn/${new URL(url).searchParams.get("p")}`,
      },
    ],
    forum: [
      {
        title: "熱門推薦",
        docs: "https://docs.rsshub.app/routes/bbs#ba-ha-mu-te-dian-wan-zi-xun-zhan",
        source: ["/A.php", "/B.php"],
        target: (params, url) =>
          `/gamer/hot/${new URL(url).searchParams.get("bsn")}`,
      },
    ],
    gnn: [
      {
        title: "GNN 新聞",
        docs: "https://docs.rsshub.app/routes/bbs#ba-ha-mu-te-dian-wan-zi-xun-zhan",
        source: ["/index.php"],
        target: (params, url) =>
          `/gamer/gnn/${new URL(url).searchParams.get("k")}`,
      },
    ],
  },
  "gamersecret.com": {
    _name: "Gamer Secret",
    ".": [
      {
        title: "最新資訊",
        docs: "https://docs.rsshub.app/routes/game#gamer-secret-zui-xin-zi-xun",
        source: ["/:type", "/:type/:category", "/"],
        target: "/gamersecret",
      },
      {
        title: "分類",
        docs: "https://docs.rsshub.app/routes/game#gamer-secret-fen-lei",
        source: ["/:type", "/:type/:category", "/"],
        target: "/gamersecret/:type?/:category?",
      },
      {
        title: "Latest News",
        docs: "https://docs.rsshub.app/routes/game#gamer-secret-latest-news",
        source: ["/:type", "/:type/:category", "/"],
        target: "/gamersecret",
      },
      {
        title: "Category",
        docs: "https://docs.rsshub.app/routes/game#gamer-secret-category",
        source: ["/:type", "/:type/:category", "/"],
        target: "/gamersecret/:type?/:category?",
      },
    ],
  },
  "gamme.com.tw": {
    _name: "卡卡洛普",
    news: [
      {
        title: "宅宅新聞 - 分類",
        docs: "https://docs.rsshub.app/routes/new-media#ka-ka-luo-pu",
        source: ["/category/:category", "/"],
        target: (params) =>
          `/gamme/news${params.category ? `/${params.category}` : ""}`,
      },
      {
        title: "宅宅新聞 - 標籤",
        docs: "https://docs.rsshub.app/routes/new-media#ka-ka-luo-pu",
        source: ["/tag/:tag"],
        target: "/gamme/news/tag/:tag",
      },
    ],
    sexynews: [
      {
        title: "西斯新聞 - 分類",
        docs: "https://docs.rsshub.app/routes/new-media#ka-ka-luo-pu",
        source: ["/category/:category", "/"],
        target: (params) =>
          `/gamme/sexynews${params.category ? `/${params.category}` : ""}`,
      },
      {
        title: "西斯新聞 - 標籤",
        docs: "https://docs.rsshub.app/routes/new-media#ka-ka-luo-pu",
        source: ["/tag/:tag"],
        target: "/gamme/sexynews/tag/:tag",
      },
    ],
  },
  "gaze.run": {
    _name: "注视影视",
    ".": [
      {
        title: "更新通知",
        docs: "https://docs.rsshub.app/routes//multimedia#gaze-run",
        source: ["/play/:mid"],
        target: (params) => `/gaze/update/${params.mid}`,
      },
    ],
  },
  "gcores.com": {
    _name: "机核网",
    ".": [
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/new-media#ji-he-wang-fen-lei",
        source: ["/:category"],
        target: "/gcores/category/:category",
      },
      {
        title: "标签",
        docs: "https://docs.rsshub.app/routes/new-media#ji-he-wang-biao-qian",
        source: ["/categories/:tag", "/"],
        target: "/gcores/tag/:tag",
      },
      {
        title: "播客",
        docs: "https://docs.rsshub.app/routes/new-media#ji-he-wang-bo-ke",
        source: ["/radios"],
        target: "/gcores/radios",
      },
      {
        title: "播客-分类",
        docs: "https://docs.rsshub.app/routes/new-media#ji-he-wang-bo-ke",
        source: ["/categories/:category"],
        target: "/gcores/radios/:category",
      },
      {
        title: "专题",
        docs: "https://docs.rsshub.app/routes/new-media#ji-he-wang-zhuan-ti",
        source: ["/collections/:collection"],
        target: "/gcores/collections/:collection",
      },
    ],
  },
  "gdsrx.org.cn": {
    _name: "广东省食品药品审评认证技术协会",
    ".": [
      {
        title: "栏目",
        docs: "https://docs.rsshub.app/routes/other#guang-dong-sheng-shi-pin-yao-pin-shen-ping-ren-zheng-ji-shu-xie-hui-lan-mu",
        source: ["/portal/list/index/id"],
        target: (_, url) => {
          url = new URL(url)

          const idMatches = url.href.match(/\/id\/(\d+)\.html/)

          return `/gdsrx${idMatches ? `/${idMatches[1]}` : ""}`
        },
      },
      {
        title: "法规文库",
        docs: "https://docs.rsshub.app/routes/other#guang-dong-sheng-shi-pin-yao-pin-shen-ping-ren-zheng-ji-shu-xie-hui-lan-mu",
        source: ["/portal/list/index/id/10.html"],
        target: "/gdsrx/10",
      },
      {
        title: "法规资讯",
        docs: "https://docs.rsshub.app/routes/other#guang-dong-sheng-shi-pin-yao-pin-shen-ping-ren-zheng-ji-shu-xie-hui-lan-mu",
        source: ["/portal/list/index/id/12.html"],
        target: "/gdsrx/12",
      },
      {
        title: "专家供稿",
        docs: "https://docs.rsshub.app/routes/other#guang-dong-sheng-shi-pin-yao-pin-shen-ping-ren-zheng-ji-shu-xie-hui-lan-mu",
        source: ["/portal/list/index/id/13.html"],
        target: "/gdsrx/13",
      },
      {
        title: "协会动态 会员动态",
        docs: "https://docs.rsshub.app/routes/other#guang-dong-sheng-shi-pin-yao-pin-shen-ping-ren-zheng-ji-shu-xie-hui-lan-mu",
        source: ["/portal/list/index/id/20.html"],
        target: "/gdsrx/20",
      },
      {
        title: "协会动态",
        docs: "https://docs.rsshub.app/routes/other#guang-dong-sheng-shi-pin-yao-pin-shen-ping-ren-zheng-ji-shu-xie-hui-lan-mu",
        source: ["/portal/list/index/id/37.html"],
        target: "/gdsrx/37",
      },
      {
        title: "协会通知公告",
        docs: "https://docs.rsshub.app/routes/other#guang-dong-sheng-shi-pin-yao-pin-shen-ping-ren-zheng-ji-shu-xie-hui-lan-mu",
        source: ["/portal/list/index/id/38.html"],
        target: "/gdsrx/38",
      },
      {
        title: "会员动态",
        docs: "https://docs.rsshub.app/routes/other#guang-dong-sheng-shi-pin-yao-pin-shen-ping-ren-zheng-ji-shu-xie-hui-lan-mu",
        source: ["/portal/list/index/id/39.html"],
        target: "/gdsrx/39",
      },
    ],
  },
  "gdut.edu.cn": {
    _name: "广东工业大学",
    oas: [
      {
        title: "通知公文网",
        docs: "https://docs.rsshub.app/routes/university#guang-dong-gong-ye-da-xue-tong-zhi-gong-wen-wang",
        source: "/seeyon",
        target: "/gdut/oa_news/",
      },
    ],
  },
  "gelonghui.com": {
    _name: "格隆汇",
    ".": [
      {
        title: "首页",
        docs: "https://docs.rsshub.app/routes/finance#ge-long-hui",
        source: ["/tag/:tag", "/"],
        target: (params) =>
          `/gelonghui/home${params.tag ? `/${params.tag}` : ""}`,
      },
      {
        title: "最热文章",
        docs: "https://docs.rsshub.app/routes/finance#ge-long-hui",
        source: ["/"],
        target: "/gelonghui/hot-article",
      },
      {
        title: "搜索关键字",
        docs: "https://docs.rsshub.app/routes/finance#ge-long-hui",
        source: ["/search"],
        target: (_, url) =>
          `/gelonghui/keyword/${new URL(url).searchParams.get("keyword")}`,
      },
      {
        title: "实时快讯",
        docs: "https://docs.rsshub.app/routes/finance#ge-long-hui",
        source: ["/live", "/"],
        target: "/gelonghui/live",
      },
      {
        title: "主题文章",
        docs: "https://docs.rsshub.app/routes/finance#ge-long-hui",
        source: ["/subject/:id"],
        target: "/gelonghui/subject/:id",
      },
      {
        title: "用户文章",
        docs: "https://docs.rsshub.app/routes/finance#ge-long-hui",
        source: ["/user/:id"],
        target: "/gelonghui/user/:id",
      },
    ],
  },
  "geocaching.com": {
    _name: "Geocaching",
    ".": [
      {
        title: "博客更新",
        docs: "https://docs.rsshub.app/routes/blog#geocaching",
        source: ["/blog/", "/"],
        target: "/geocaching/blogs",
      },
    ],
  },
  "getdr.com": {
    _name: "趨勢科技防詐達人",
    ".": [
      {
        title: "最新詐騙情報",
        docs: "https://docs.rsshub.app/routes/new-media#qu-shi-ke-ji-fang-zha-da-ren-zui-xin-zha-pian-qing-bao",
        source: ["/"],
        target: "/getdr",
      },
    ],
  },
  "getitfree.cn": {
    _name: "正版中国",
    ".": [
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/shopping#zheng-ban-zhong-guo-fen-lei",
        source: ["/category/:id"],
        target: "/getitfree/category/:id",
      },
      {
        title: "标签",
        docs: "https://docs.rsshub.app/routes/shopping#zheng-ban-zhong-guo-biao-qian",
        source: ["/tag/:id"],
        target: "/getitfree/tag/:id",
      },
      {
        title: "搜索",
        docs: "https://docs.rsshub.app/routes/shopping#zheng-ban-zhong-guo-sou-suo",
        source: ["/"],
        target: (_, url) => {
          url = new URL(url)
          const keyword = url.searchParams.get("s")

          return `/getitfree/search${keyword ? `/${keyword}` : ""}`
        },
      },
    ],
  },
  "gettr.com": {
    _name: "GETTR",
    ".": [
      {
        title: "个人时间线",
        docs: "https://docs.rsshub.app/routes/social-media#gettr",
        source: ["/user/:id"],
        target: "/gettr/user/:id",
      },
    ],
  },
  "sunborngame.com": {
    _name: "少女前线",
    ".": [
      {
        title: "情报局",
        docs: "https://docs.rsshub.app/routes/game#shao-nv-qian-xian-qing-bao-ju",
        source: ["/:category", "/"],
        target: "/gf-cn/news/:category?",
      },
    ],
  },
  "gihyo.jp": {
    _name: "gihyo.jp",
    ".": [
      {
        title: "記事一覧",
        docs: "https://docs.rsshub.app/routes/programming#gihyo-jp",
        source: "/list/group/:id",
        target: "/gihyo/list/group/:id",
      },
    ],
  },
  "gitee.com": {
    _name: "Gitee",
    ".": [
      {
        title: "仓库 Releases",
        docs: "https://docs.rsshub.app/routes/programming#gitee",
        source: ["/:owner/:repo/releases"],
        target: "/gitee/releases/:owner/:repo",
      },
      {
        title: "仓库提交",
        docs: "https://docs.rsshub.app/routes/programming#gitee",
        source: ["/:owner/:repo/commits"],
        target: "/gitee/commits/:owner/:repo",
      },
      {
        title: "用户公开动态",
        docs: "https://docs.rsshub.app/routes/programming#gitee",
        source: ["/:username"],
        target: "/gitee/events/:username",
      },
      {
        title: "仓库动态",
        docs: "https://docs.rsshub.app/routes/programming#gitee",
        source: ["/:owner/:repo"],
        target: "/gitee/events/:owner/:repo",
      },
    ],
  },
  "gitpod.io": {
    _name: "Gitpod",
    ".": [
      {
        title: "博客",
        docs: "https://docs.rsshub.app/routes/programming#gitpod",
        source: ["/blog", "/"],
        target: "/gitpod/blog",
      },
      {
        title: "更新日志",
        docs: "https://docs.rsshub.app/routes/programming#gitpod",
        source: ["/changelog", "/"],
        target: "/gitpod/changelog",
      },
    ],
  },
  "globallawreview.org": {
    _name: "环球法律评论",
    ".": [
      {
        title: "期刊",
        docs: "https://docs.rsshub.app/routes/journal#huan-qiu-fa-lu-ping-lun",
        source: ["/Magazine/GetIssueContentList", "/"],
        target: "/globallawreview",
      },
    ],
  },
  "gocn.vip": {
    _name: "GoCN",
    ".": [
      {
        title: "最新动态",
        docs: "https://docs.rsshub.app/routes/programming#GoCN",
        source: ["/"],
        target: "/gocn/news",
      },
      {
        title: "每日新闻",
        docs: "https://docs.rsshub.app/routes/programming#GoCN",
        source: ["/"],
        target: "/gocn/topics",
      },
      {
        title: "招聘",
        docs: "https://docs.rsshub.app/routes/programming#GoCN",
        source: ["/"],
        target: "/gocn/jobs",
      },
    ],
  },
  "anitaku.to": {
    _name: "Gogoanime",
    developer: [
      {
        title: "Recent Releases",
        docs: "https://docs.rsshub.app/routes/anime#gogoanimehd",
        source: ["/"],
        target: "/gogoanimehd/recent-releases",
      },
    ],
  },
  "good.news": {
    _name: "Good.news",
    ".": [
      {
        title: "今日要闻",
        docs: "https://docs.rsshub.app/routes/new-media#good-news-jin-ri-yao-wen",
        source: ["/"],
        target: "/good",
      },
    ],
  },
  "google.com": {
    _name: "谷歌",
    chrome: [
      {
        title: "插件更新",
        source: "/webstore/detail/:name/:id",
        docs: "https://docs.rsshub.app/routes/program-update#chrome-wang-shang-ying-yong-dian",
        target: "/chrome/webstore/extensions/:id",
      },
    ],
    photos: [
      {
        title: "相册",
        docs: "https://docs.rsshub.app/routes/picture#google-xiang-ce",
        source: "/share/*",
        target: (params, url, document) => {
          const id =
            document &&
            document
              .querySelector("html")
              .innerHTML.match(/photos.app.goo.gl\/(.*?)"/)[1]
          return id ? `/google/album/${id}` : ""
        },
      },
    ],
    sites: [
      {
        title: "Sites",
        docs: "https://docs.rsshub.app/routes/blog#google-sites",
        source: ["/site/:id/*", "/site/:id"],
        target: "/google/sites/:id",
      },
    ],
    fonts: [
      {
        title: "Fonts - Sort by Name",
        docs: "https://docs.rsshub.app/routes/font#google-fonts",
        source: ["/"],
        target: "/google/fonts/alpha",
      },
      {
        title: "Fonts - Sort by Trending",
        docs: "https://docs.rsshub.app/routes/font#google-fonts",
        source: ["/"],
        target: "/google/fonts/trending",
      },
      {
        title: "Fonts - Sort by Most Popular",
        docs: "https://docs.rsshub.app/routes/font#google-fonts",
        source: ["/"],
        target: "/google/fonts/popularity",
      },
      {
        title: "Fonts - Sort by Newest",
        docs: "https://docs.rsshub.app/routes/font#google-fonts",
        source: ["/"],
        target: "/google/fonts/date",
      },
      {
        title: "Fonts - Sort by Number of Styles",
        docs: "https://docs.rsshub.app/routes/font#google-fonts",
        source: ["/"],
        target: "/google/fonts/style",
      },
    ],
  },
  "ah.gov.cn": {
    _name: "安徽省科技厅",
    kjt: [
      {
        title: "科技资讯",
        docs: "https://docs.rsshub.app/routes/government#an-hui-sheng-ke-ji-ting-ke-ji-zi-xun",
        source: ["/*"],
        target: (params, url) =>
          `/gov/anhui/kjt${new URL(url).href.match(/kjt\.ah\.gov\.cn(.*)\/index.html/)[1] ?? ""}`,
      },
      {
        title: "科技资源",
        docs: "https://docs.rsshub.app/routes/government#an-hui-sheng-ke-ji-ting-ke-ji-zi-yuan",
        source: ["/*"],
        target: (params, url) =>
          `/gov/anhui/kjt${new URL(url).href.match(/kjt\.ah\.gov\.cn(.*)\/index.html/)[1] ?? ""}`,
      },
    ],
  },
  "beijing.gov.cn": {
    _name: "北京市人民政府",
    jw: [
      {
        title: "北京市教育委员会通知公告",
        docs: "https://docs.rsshub.app/routes/government#bei-jing-shi-jiao-yu-wei-yuan-tong-zhi-gong-gao",
        source: ["/tzgg"],
        target: "/gov/beijing/jw/tzgg",
      },
    ],
    kw: [
      {
        title: "北京市科委央地协同",
        docs: "https://docs.rsshub.app/routes/government#bei-jing-shi-ke-xue-ji-shu-wei-yuan-hui-zhong-guan-cun-ke-ji-yuan-qu-guan-li-wei-yuan-hui",
        source: ["/col/:channel/index.html"],
        target: (params) => {
          if (params.channel === "col1132") {
            return "/gov/beijing/kw/:channel"
          }
        },
      },
      {
        title: "北京市科委三城一区",
        docs: "https://docs.rsshub.app/routes/government#bei-jing-shi-ke-xue-ji-shu-wei-yuan-hui-zhong-guan-cun-ke-ji-yuan-qu-guan-li-wei-yuan-hui",
        source: ["/col/:channel/index.html"],
        target: (params) => {
          if (params.channel === "col1134") {
            return "/gov/beijing/kw/:channel"
          }
        },
      },
      {
        title: "北京市科委高精尖产业",
        docs: "https://docs.rsshub.app/routes/government#bei-jing-shi-ke-xue-ji-shu-wei-yuan-hui-zhong-guan-cun-ke-ji-yuan-qu-guan-li-wei-yuan-hui",
        source: ["/col/:channel/index.html"],
        target: (params) => {
          if (params.channel === "col1136") {
            return "/gov/beijing/kw/:channel"
          }
        },
      },
      {
        title: "北京市科委开放创新",
        docs: "https://docs.rsshub.app/routes/government#bei-jing-shi-ke-xue-ji-shu-wei-yuan-hui-zhong-guan-cun-ke-ji-yuan-qu-guan-li-wei-yuan-hui",
        source: ["/col/:channel/index.html"],
        target: (params) => {
          if (params.channel === "col1138") {
            return "/gov/beijing/kw/:channel"
          }
        },
      },
      {
        title: "北京市科委深化改革",
        docs: "https://docs.rsshub.app/routes/government#bei-jing-shi-ke-xue-ji-shu-wei-yuan-hui-zhong-guan-cun-ke-ji-yuan-qu-guan-li-wei-yuan-hui",
        source: ["/col/:channel/index.html"],
        target: (params) => {
          if (params.channel === "col1140") {
            return "/gov/beijing/kw/:channel"
          }
        },
      },
      {
        title: "北京市科委内设机构",
        docs: "https://docs.rsshub.app/routes/government#bei-jing-shi-ke-xue-ji-shu-wei-yuan-hui-zhong-guan-cun-ke-ji-yuan-qu-guan-li-wei-yuan-hui",
        source: ["/col/:channel/index.html"],
        target: (params) => {
          if (params.channel === "col746") {
            return "/gov/beijing/kw/:channel"
          }
        },
      },
      {
        title: "北京市科委直属机构",
        docs: "https://docs.rsshub.app/routes/government#bei-jing-shi-ke-xue-ji-shu-wei-yuan-hui-zhong-guan-cun-ke-ji-yuan-qu-guan-li-wei-yuan-hui",
        source: ["/col/:channel/index.html"],
        target: (params) => {
          if (params.channel === "col748") {
            return "/gov/beijing/kw/:channel"
          }
        },
      },
      {
        title: "北京市科委行政许可",
        docs: "https://docs.rsshub.app/routes/government#bei-jing-shi-ke-xue-ji-shu-wei-yuan-hui-zhong-guan-cun-ke-ji-yuan-qu-guan-li-wei-yuan-hui",
        source: ["/col/:channel/index.html"],
        target: (params) => {
          if (params.channel === "col1520") {
            return "/gov/beijing/kw/:channel"
          }
        },
      },
      {
        title: "北京市科委行政处罚",
        docs: "https://docs.rsshub.app/routes/government#bei-jing-shi-ke-xue-ji-shu-wei-yuan-hui-zhong-guan-cun-ke-ji-yuan-qu-guan-li-wei-yuan-hui",
        source: ["/col/:channel/index.html"],
        target: (params) => {
          if (params.channel === "col1522") {
            return "/gov/beijing/kw/:channel"
          }
        },
      },
      {
        title: "北京市科委行政确认",
        docs: "https://docs.rsshub.app/routes/government#bei-jing-shi-ke-xue-ji-shu-wei-yuan-hui-zhong-guan-cun-ke-ji-yuan-qu-guan-li-wei-yuan-hui",
        source: ["/col/:channel/index.html"],
        target: (params) => {
          if (params.channel === "col1524") {
            return "/gov/beijing/kw/:channel"
          }
        },
      },
      {
        title: "北京市科委行政奖励",
        docs: "https://docs.rsshub.app/routes/government#bei-jing-shi-ke-xue-ji-shu-wei-yuan-hui-zhong-guan-cun-ke-ji-yuan-qu-guan-li-wei-yuan-hui",
        source: ["/col/:channel/index.html"],
        target: (params) => {
          if (params.channel === "col1526") {
            return "/gov/beijing/kw/:channel"
          }
        },
      },
      {
        title: "行北京市科委政检查",
        docs: "https://docs.rsshub.app/routes/government#bei-jing-shi-ke-xue-ji-shu-wei-yuan-hui-zhong-guan-cun-ke-ji-yuan-qu-guan-li-wei-yuan-hui",
        source: ["/col/:channel/index.html"],
        target: (params) => {
          if (params.channel === "col1528") {
            return "/gov/beijing/kw/:channel"
          }
        },
      },
      {
        title: "北京市科委其他权力",
        docs: "https://docs.rsshub.app/routes/government#bei-jing-shi-ke-xue-ji-shu-wei-yuan-hui-zhong-guan-cun-ke-ji-yuan-qu-guan-li-wei-yuan-hui",
        source: ["/col/:channel/index.html"],
        target: (params) => {
          if (params.channel === "col1542") {
            return "/gov/beijing/kw/:channel"
          }
        },
      },
      {
        title: "北京市科委最新政策",
        docs: "https://docs.rsshub.app/routes/government#bei-jing-shi-ke-xue-ji-shu-wei-yuan-hui-zhong-guan-cun-ke-ji-yuan-qu-guan-li-wei-yuan-hui",
        source: ["/col/:channel/index.html"],
        target: (params) => {
          if (params.channel === "col2380") {
            return "/gov/beijing/kw/:channel"
          }
        },
      },
      {
        title: "北京市科委科技政策-科技法规规章文件",
        docs: "https://docs.rsshub.app/routes/government#bei-jing-shi-ke-xue-ji-shu-wei-yuan-hui-zhong-guan-cun-ke-ji-yuan-qu-guan-li-wei-yuan-hui",
        source: ["/col/:channel/index.html"],
        target: (params) => {
          if (params.channel === "col2962" || params.channel === "col2384") {
            return "/gov/beijing/kw/col2384"
          }
        },
      },
      {
        title: "北京市科委科技政策-科委规范性文件",
        docs: "https://docs.rsshub.app/routes/government#bei-jing-shi-ke-xue-ji-shu-wei-yuan-hui-zhong-guan-cun-ke-ji-yuan-qu-guan-li-wei-yuan-hui",
        source: ["/col/:channel/index.html"],
        target: (params) => {
          if (params.channel === "col2962" || params.channel === "col2386") {
            return "/gov/beijing/kw/col2386"
          }
        },
      },
      {
        title: "北京市科委科技政策-其他科技政策",
        docs: "https://docs.rsshub.app/routes/government#bei-jing-shi-ke-xue-ji-shu-wei-yuan-hui-zhong-guan-cun-ke-ji-yuan-qu-guan-li-wei-yuan-hui",
        source: ["/col/:channel/index.html"],
        target: (params) => {
          if (params.channel === "col2962" || params.channel === "col2388") {
            return "/gov/beijing/kw/col2388"
          }
        },
      },
      {
        title: "北京市科委国家科技政策",
        docs: "https://docs.rsshub.app/routes/government#bei-jing-shi-ke-xue-ji-shu-wei-yuan-hui-zhong-guan-cun-ke-ji-yuan-qu-guan-li-wei-yuan-hui",
        source: ["/col/:channel/index.html"],
        target: (params) => {
          if (params.channel === "col2964") {
            return "/gov/beijing/kw/:channel"
          }
        },
      },
      {
        title: "北京市科委政策解读",
        docs: "https://docs.rsshub.app/routes/government#bei-jing-shi-ke-xue-ji-shu-wei-yuan-hui-zhong-guan-cun-ke-ji-yuan-qu-guan-li-wei-yuan-hui",
        source: ["/col/:channel/index.html"],
        target: (params) => {
          if (params.channel === "col2396") {
            return "/gov/beijing/kw/:channel"
          }
        },
      },
      {
        title: "北京市科委通知公告",
        docs: "https://docs.rsshub.app/routes/government#bei-jing-shi-ke-xue-ji-shu-wei-yuan-hui-zhong-guan-cun-ke-ji-yuan-qu-guan-li-wei-yuan-hui",
        source: ["/col/:channel/index.html"],
        target: (params) => {
          if (params.channel === "col736") {
            return "/gov/beijing/kw/:channel"
          }
        },
      },
      {
        title: "北京市科委新闻中心",
        docs: "https://docs.rsshub.app/routes/government#bei-jing-shi-ke-xue-ji-shu-wei-yuan-hui-zhong-guan-cun-ke-ji-yuan-qu-guan-li-wei-yuan-hui",
        source: ["/col/:channel/index.html"],
        target: (params) => {
          if (params.channel === "col6382") {
            return "/gov/beijing/kw/:channel"
          }
        },
      },
      {
        title: "北京市科委要闻",
        docs: "https://docs.rsshub.app/routes/government#bei-jing-shi-ke-xue-ji-shu-wei-yuan-hui-zhong-guan-cun-ke-ji-yuan-qu-guan-li-wei-yuan-hui",
        source: ["/col/:channel/index.html"],
        target: (params) => {
          if (params.channel === "col6344") {
            return "/gov/beijing/kw/:channel"
          }
        },
      },
      {
        title: "北京市科委工作动态",
        docs: "https://docs.rsshub.app/routes/government#bei-jing-shi-ke-xue-ji-shu-wei-yuan-hui-zhong-guan-cun-ke-ji-yuan-qu-guan-li-wei-yuan-hui",
        source: ["/col/:channel/index.html"],
        target: (params) => {
          if (params.channel === "col2330") {
            return "/gov/beijing/kw/:channel"
          }
        },
      },
      {
        title: "北京市科委媒体报道",
        docs: "https://docs.rsshub.app/routes/government#bei-jing-shi-ke-xue-ji-shu-wei-yuan-hui-zhong-guan-cun-ke-ji-yuan-qu-guan-li-wei-yuan-hui",
        source: ["/col/:channel/index.html"],
        target: (params) => {
          if (params.channel === "col2332") {
            return "/gov/beijing/kw/:channel"
          }
        },
      },
      {
        title: "北京市科委图片报道",
        docs: "https://docs.rsshub.app/routes/government#bei-jing-shi-ke-xue-ji-shu-wei-yuan-hui-zhong-guan-cun-ke-ji-yuan-qu-guan-li-wei-yuan-hui",
        source: ["/col/:channel/index.html"],
        target: (params) => {
          if (params.channel === "col6346") {
            return "/gov/beijing/kw/:channel"
          }
        },
      },
      {
        title: "北京市科委政府网站年报专栏",
        docs: "https://docs.rsshub.app/routes/government#bei-jing-shi-ke-xue-ji-shu-wei-yuan-hui-zhong-guan-cun-ke-ji-yuan-qu-guan-li-wei-yuan-hui",
        source: ["/col/:channel/index.html"],
        target: (params) => {
          if (params.channel === "col1008") {
            return "/gov/beijing/kw/:channel"
          }
        },
      },
    ],
    wjw: [
      {
        title: "北京卫生健康委员会",
        docs: "https://docs.rsshub.app/routes/government#bei-jing-shi-wei-sheng-jian-kang-wei-yuan-hui",
        source: "/xwzx_20031/:caty",
        target: "/gov/beijing/mhc/:caty",
      },
    ],
  },
  "bphc.com.cn": {
    _name: "北京保障房中心有限公司",
    gycpt: [
      {
        title: "北京市共有产权住房租赁服务平台",
        docs: "https://docs.rsshub.app/routes/government#bei-jing-shi-bao-zhang-fang-zhong-xin-you-xian-gong-si",
        source: ["/*"],
        target: (params, url) =>
          `/gov/bphc/${new URL(url).href.match(/gycpt\.bphc\.com\.cn\/(.*)/)[1]}`,
      },
    ],
  },
  "cac.gov.cn": {
    _name: "中央网信办",
    ".": [
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/government#zhong-yang-wang-xin-ban",
        source: ["/*"],
        target: (params, url) =>
          `/gov/cac/${new URL(url).href.match(/cac\.gov\.cn(.*?)\/(A.*?\.htm)/)[1]}`,
      },
    ],
  },
  "ccdi.gov.cn": {
    _name: "中央纪委国家监委",
    www: [
      {
        title: "要闻",
        docs: "https://docs.rsshub.app/routes/government#zhong-yang-ji-wei-guo-jia-jian-wei-yao-wen",
        source: ["/*"],
        target: (params, url) =>
          `/gov/ccdi/${new URL(url).href.match(/ccdi\.gov\.cn\/(.*)/)[1]}`,
      },
    ],
  },
  "changsha.gov.cn": {
    _name: "湖南省人民政府",
    wlwz: [
      {
        title: "市长信箱",
        docs: "https://docs.rsshub.app/routes/government#hu-nan-sheng-ren-min-zheng-fu",
        source: ["/webapp/cs2020/email/*"],
        target: "/gov/hunan/changsha/major-email",
      },
    ],
  },
  "chinatax.gov.cn": {
    _name: "国家税务总局",
    www: [
      {
        title: "国家税务总局 - 最新文件",
        docs: "https://docs.rsshub.app/routes/government#guo-jia-shui-wu-zong-ju",
        source: ["/*"],
        target: "/gov/chinatax/latest",
      },
    ],
  },
  "cmse.gov.cn": {
    _name: "中国载人航天",
    www: [
      {
        title: "综合新闻",
        docs: "https://docs.rsshub.app/routes/government#zhong-guo-zai-ren-hang-tian",
        source: ["/xwzx/zhxw"],
        target: "/gov/cmse/xwzx/zhxw",
      },
      {
        title: "研制进展",
        docs: "https://docs.rsshub.app/routes/government#zhong-guo-zai-ren-hang-tian",
        source: ["/xwzx/yzjz"],
        target: "/gov/cmse/xwzx/yzjz",
      },
      {
        title: "官方公告",
        docs: "https://docs.rsshub.app/routes/government#zhong-guo-zai-ren-hang-tian",
        source: ["/gfgg"],
        target: "/gov/cmse/gfgg",
      },
      {
        title: "飞行任务",
        docs: "https://docs.rsshub.app/routes/government#zhong-guo-zai-ren-hang-tian",
        source: ["/fxrw"],
        target: "/gov/cmse/fxrw",
      },
      {
        title: "任务动态",
        docs: "https://docs.rsshub.app/routes/government#zhong-guo-zai-ren-hang-tian",
        source: ["/fxrw/:id/:category"],
        target: "/gov/cmse/fxrw/:id/:category",
      },
      {
        title: "空间科学",
        docs: "https://docs.rsshub.app/routes/government#zhong-guo-zai-ren-hang-tian",
        source: ["/kjkx/:id"],
        target: "/gov/cmse/kjkx/:id",
      },
      {
        title: "国际合作",
        docs: "https://docs.rsshub.app/routes/government#zhong-guo-zai-ren-hang-tian",
        source: ["/gjhz"],
        target: "/gov/cmse/gjhz",
      },
      {
        title: "环球视野",
        docs: "https://docs.rsshub.app/routes/government#zhong-guo-zai-ren-hang-tian",
        source: ["/hqsy/:id"],
        target: "/gov/cmse/hqsy/:id",
      },
      {
        title: "专题报道",
        docs: "https://docs.rsshub.app/routes/government#zhong-guo-zai-ren-hang-tian",
        source: ["/ztbd/:id"],
        target: "/gov/cmse/ztbd/:id",
      },
      {
        title: "科普教育",
        docs: "https://docs.rsshub.app/routes/government#zhong-guo-zai-ren-hang-tian",
        source: ["/kpjy/:id"],
        target: "/gov/cmse/kpjy/:id",
      },
    ],
  },
  "cnnic.net.cn": {
    _name: "中国互联网络信息中心",
    www: [
      {
        title: "新闻中心",
        docs: "https://docs.rsshub.app/routes/government#zhong-guo-hu-lian-wang-luo-xin-xi-zhong-xin-xin-wen-zhong-xin",
        source: ["/"],
        target: (params, url) =>
          `/gov/cnnic/${url.match(/cnnic\.net\.cn\/(.*)/)[1]}`,
      },
    ],
  },
  "cq.gov.cn": {
    _name: "重庆市人民政府",
    rlsbj: [
      {
        title: "重庆人事考试通知公告",
        docs: "https://docs.rsshub.app/routes/government#zhong-qing-shi-ren-min-zheng-fu",
        source: ["/"],
        target: "/gov/chongqing/rsks",
      },
      {
        title: "重庆事业单位公开招聘",
        docs: "https://docs.rsshub.app/routes/government#chong-qing-shi-ren-min-zheng-fu",
        source: ["/"],
        target: "/gov/chongqing/sydwgkzp",
      },
    ],
    gzw: [
      {
        title: "国有资产监督管理委员会",
        docs: "https://docs.rsshub.app/routes/government#chong-qing-shi-ren-min-zheng-fu-guo-you-zi-chan-jian-du-guan-li-wei-yuan-hui",
        source: ["/:category*"],
        target: (params) => {
          const category = params.category

          return `/gov/chongqing/gzw${category ? `/${category}` : ""}`
        },
      },
    ],
  },
  "csrc.gov.cn": {
    _name: "中国证券监督管理委员会",
    neris: [
      {
        title: "申请事项进度",
        docs: "https://docs.rsshub.app/routes/government#zhong-guo-zheng-quan-jian-du-guan-li-wei-yuan-hui",
        source: ["/alappl/home1/onlinealog"],
        target: (_, url) =>
          `/gov/csrc/auditstatus/${new URL(url).searchParams.get("appMatrCde")}`,
      },
    ],
    www: [
      {
        title: "通用",
        docs: "https://docs.rsshub.app/routes/government#zhong-guo-zheng-quan-jian-du-guan-li-wei-yuan-hui",
        source: ["/csrc/*suffix"],
        target: "/gov/csrc/:suffix",
      },
    ],
  },
  "customs.gov.cn": {
    _name: "中华人民共和国海关总署",
    www: [
      {
        title: "拍卖信息 / 海关法规",
        docs: "https://docs.rsshub.app/routes/government#zhong-hua-ren-min-gong-he-guo-hai-guan-zong-shu",
        source: ["/"],
        target: "/gov/customs/list",
      },
    ],
  },
  "deyang.gov.cn": {
    _name: "德阳市人民政府",
    ".": [
      {
        title: "德阳市政府公开信息",
        docs: "https://docs.rsshub.app/routes/government#de-yang-shi-fu-ren-min-zheng-zheng-fu",
        source: ["/*"],
        target: "/sichuan/deyang/govpublicinfo/:countyName",
      },
    ],
  },
  "dianbai.gov.cn": {
    _name: "茂名市电白区人民政府",
    www: [
      {
        title: "茂名市电白区人民政府",
        docs: "https://docs.rsshub.app/routes/government#mao-ming-shi-ren-min-zheng-fu-mao-ming-shi-dian-bai-qu-ren-min-zheng-fu",
        source: ["/*"],
        target: (params, url) =>
          `/gov/dianbai/${new URL(url).host.split(".dianbai.gov.cn")[0] + new URL(url).pathname.replace(/(index.*$)/g, "")}`,
      },
    ],
  },
  "forestry.gov.cn": {
    _name: "国家林业和草原局",
    ".": [
      {
        title: "国家林草科技大讲堂",
        docs: "https://docs.rsshub.app/routes/government#guo-jia-lin-ye-he-cao-yuan-ju-guo-jia-lin-cao-ke-ji-da-jiang-tang",
        source: ["gjlckjdjt.jhtml"],
        target: (_, url) => {
          url = new URL(url)
          const path = url.href.match(/\/([\w]+)\.jhtml/)[1]

          return `/gov/forestry/gjlckjdjt${path ? `/${path}` : ""}`
        },
      },
      {
        title: "国家林草科技大讲堂 - 经济林",
        docs: "https://docs.rsshub.app/routes/government#guo-jia-lin-ye-he-cao-yuan-ju-guo-jia-lin-cao-ke-ji-da-jiang-tang",
        source: ["jjl.jhtml"],
        target: "/gov/forestry/gjlckjdjt/jjl",
      },
      {
        title: "国家林草科技大讲堂 - 林木良种",
        docs: "https://docs.rsshub.app/routes/government#guo-jia-lin-ye-he-cao-yuan-ju-guo-jia-lin-cao-ke-ji-da-jiang-tang",
        source: ["lmlz.jhtml"],
        target: "/gov/forestry/gjlckjdjt/lmlz",
      },
      {
        title: "国家林草科技大讲堂 - 林下经济",
        docs: "https://docs.rsshub.app/routes/government#guo-jia-lin-ye-he-cao-yuan-ju-guo-jia-lin-cao-ke-ji-da-jiang-tang",
        source: ["lxjj.jhtml"],
        target: "/gov/forestry/gjlckjdjt/lxjj",
      },
      {
        title: "国家林草科技大讲堂 - 生态修复",
        docs: "https://docs.rsshub.app/routes/government#guo-jia-lin-ye-he-cao-yuan-ju-guo-jia-lin-cao-ke-ji-da-jiang-tang",
        source: ["stxf.jhtml"],
        target: "/gov/forestry/gjlckjdjt/stxf",
      },
      {
        title: "国家林草科技大讲堂 - 用材林",
        docs: "https://docs.rsshub.app/routes/government#guo-jia-lin-ye-he-cao-yuan-ju-guo-jia-lin-cao-ke-ji-da-jiang-tang",
        source: ["ycl.jhtml"],
        target: "/gov/forestry/gjlckjdjt/ycl",
      },
      {
        title: "国家林草科技大讲堂 - 其他",
        docs: "https://docs.rsshub.app/routes/government#guo-jia-lin-ye-he-cao-yuan-ju-guo-jia-lin-cao-ke-ji-da-jiang-tang",
        source: ["qt.jhtml"],
        target: "/gov/forestry/gjlckjdjt/qt",
      },
    ],
  },
  "gaozhou.gov.cn": {
    _name: "高州市人民政府",
    www: [
      {
        title: "高州市人民政府",
        docs: "https://docs.rsshub.app/routes/government#mao-ming-shi-ren-min-zheng-fu-gao-zhou-shi-ren-min-zheng-fu",
        source: ["/*"],
        target: (params, url) =>
          `/gov/gaozhou/${new URL(url).host.split(".gaozhou.gov.cn")[0] + new URL(url).pathname.replace(/(index.*$)/g, "")}`,
      },
    ],
  },
  "gz.gov.cn": {
    _name: "广州市人民政府",
    www: [
      {
        title: "新闻",
        docs: "https://docs.rsshub.app/routes/government#guang-zhou-shi-ren-min-zheng-fu",
        source: ["/:channel/:category"],
        target: (params) => `/gov/gz/${params.channel}/${params.category}`,
      },
    ],
  },
  "hebei.gov.cn": {
    _name: "河北省人民政府",
    czt: [
      {
        title: "河北省财政厅 - 财政动态",
        docs: "https://docs.rsshub.app/routes/government#he-bei-sheng-cai-zheng-ting-cai-zheng-dong-tai",
        source: ["/xwdt/:category"],
        target: (params) => {
          if (params.category === "gzdt") {
            return "/gov/hebei/czt/xwdt/:category"
          }
        },
      },
      {
        title: "河北省财政厅 - 综合新闻",
        docs: "https://docs.rsshub.app/routes/government#he-bei-sheng-cai-zheng-ting-zong-he-xin-wen",
        source: ["/xwdt/:category"],
        target: (params) => {
          if (params.category === "zhxw") {
            return "/gov/hebei/czt/xwdt/:category"
          }
        },
      },
      {
        title: "河北省财政厅 - 通知公告",
        docs: "https://docs.rsshub.app/routes/government#he-bei-sheng-cai-zheng-ting-tong-zhi-gong-gao",
        source: ["/xwdt/:category"],
        target: (params) => {
          if (params.category === "tzgg") {
            return "/gov/hebei/czt/xwdt/:category"
          }
        },
      },
    ],
  },
  "homeaffairs.gov.au": {
    _name: "Department of Home Affairs",
    immi: [
      {
        title: "Immigration and Citizenship",
        docs: "https://docs.rsshub.app/routes/en/government#Australia-Department-of-Home-Affairs",
        source: "/news-media/archive",
        target: () => "/gov/immiau/news",
      },
    ],
  },
  "huazhou.gov.cn": {
    _name: "化州市人民政府",
    www: [
      {
        title: "化州市人民政府",
        docs: "https://docs.rsshub.app/routes/government#mao-ming-shi-ren-min-zheng-fu-hua-zhou-shi-ren-min-zheng-fu",
        source: ["/*"],
        target: (params, url) =>
          `/gov/huazhou/${new URL(url).host.split(".huazhou.gov.cn")[0] + new URL(url).pathname.replace(/(index.*$)/g, "")}`,
      },
    ],
  },
  "huizhou.gov.cn": {
    _name: "惠州市人民政府",
    www: [
      {
        title: "政务公开 - 政务要闻",
        docs: "https://docs.rsshub.app/routes/government#guang-yan-an-dong-sheng-xing-xian-ren-min-zheng-zheng-fu-hui-zhou-shi-fu-ren-min-zheng-zheng-fu-zheng-zheng-wu-gong-kai",
        source: ["/zwgk/hzsz/:category"],
        target: (params) => {
          if (params.category === "zwyw") {
            return "/gov/huizhou/zwgk/zwyw"
          }
        },
      },
      {
        title: "政务公开 - 机关动态",
        docs: "https://docs.rsshub.app/routes/government#guang-yan-an-dong-sheng-xing-xian-ren-min-zheng-zheng-fu-hui-zhou-shi-fu-ren-min-zheng-zheng-fu-zheng-zheng-wu-gong-kai",
        source: ["/zwgk/hzsz/:category"],
        target: (params) => {
          if (params.category === "jgdt") {
            return "/gov/huizhou/zwgk/jgdt"
          }
        },
      },
      {
        title: "政务公开 - 县区要闻",
        docs: "https://docs.rsshub.app/routes/government#guang-yan-an-dong-sheng-xing-xian-ren-min-zheng-zheng-fu-hui-zhou-shi-fu-ren-min-zheng-zheng-fu-zheng-zheng-wu-gong-kai",
        source: ["/zwgk/hzsz/:category"],
        target: (params) => {
          if (params.category === "xqyw") {
            return "/gov/huizhou/zwgk/xqyw"
          }
        },
      },
    ],
  },
  "jinan.gov.cn": {
    _name: "济南市卫生健康委员会",
    jnmhc: [
      {
        title: "获取国家医师资格考试通知",
        docs: "https://docs.rsshub.app/routes/government#ji-nan-shi-wei-sheng-jian-kang-wei-yuan-hui",
        source: ["/*"],
        target: "/gov/jinan/healthcommission/medical_exam_notice",
      },
    ],
  },
  "maoming.gov.cn": {
    _name: "茂名市人民政府门户网站",
    ".": [
      {
        title: "茂名市人民政府",
        docs: "https://docs.rsshub.app/routes/government#mao-ming-shi-ren-min-zheng-fu-mao-ming-shi-ren-min-zheng-fu-men-hu-wang-zhan",
        source: ["/*"],
        target: (params, url) =>
          `/gov/maoming/${new URL(url).host.split(".maoming.gov.cn")[0] + new URL(url).pathname.replace(/(index.*$)/g, "")}`,
      },
    ],
  },
  "maonan.gov.cn": {
    _name: "茂名市茂南区人民政府",
    ".": [
      {
        title: "政务公开",
        docs: "https://docs.rsshub.app/routes/government#mao-ming-shi-ren-min-zheng-fu-mao-ming-shi-mao-nan-qu-ren-min-zheng-fu",
        source: ["/zwgk/*"],
        target: "/gov/maonan/zwgk",
      },
      {
        title: "政务新闻",
        docs: "https://docs.rsshub.app/routes/government#mao-ming-shi-ren-min-zheng-fu-mao-ming-shi-mao-nan-qu-ren-min-zheng-fu",
        source: ["/zwxw/*"],
        target: "/gov/maonan/zwxw",
      },
      {
        title: "茂南动态",
        docs: "https://docs.rsshub.app/routes/government#mao-ming-shi-ren-min-zheng-fu-mao-ming-shi-mao-nan-qu-ren-min-zheng-fu",
        source: ["/zwxw/mndt/*"],
        target: "/gov/maonan/mndt",
      },
      {
        title: "重大会议",
        docs: "https://docs.rsshub.app/routes/government#mao-ming-shi-ren-min-zheng-fu-mao-ming-shi-mao-nan-qu-ren-min-zheng-fu",
        source: ["/zwxw/zdhy/*"],
        target: "/gov/maonan/zdhy",
      },
      {
        title: "公告公示",
        docs: "https://docs.rsshub.app/routes/government#mao-ming-shi-ren-min-zheng-fu-mao-ming-shi-mao-nan-qu-ren-min-zheng-fu",
        source: ["/zwgk/tzgg/*"],
        target: "/gov/maonan/tzgg",
      },
      {
        title: "招录信息",
        docs: "https://docs.rsshub.app/routes/government#mao-ming-shi-ren-min-zheng-fu-mao-ming-shi-mao-nan-qu-ren-min-zheng-fu",
        source: ["/zwgk/zlxx/*"],
        target: "/gov/maonan/zlxx",
      },
      {
        title: "政策解读",
        docs: "https://docs.rsshub.app/routes/government#mao-ming-shi-ren-min-zheng-fu-mao-ming-shi-mao-nan-qu-ren-min-zheng-fu",
        source: ["/zwgk/zcjd/*"],
        target: "/gov/maonan/zcjd",
      },
    ],
  },
  "mee.gov.cn": {
    _name: "生态环境部",
    www: [
      {
        title: "要闻动态",
        docs: "https://docs.rsshub.app/routes/government#zhong-hua-ren-min-gong-he-guo-sheng-tai-huan-jing-bu",
        source: ["/ywdt/:category"],
        target: "/gov/mee/ywdt/:category",
      },
    ],
  },
  "mem.gov.cn": {
    _name: "应急管理部",
    www: [
      {
        title: "事故及灾害查处",
        docs: "https://docs.rsshub.app/routes/government#zhong-hua-ren-min-gong-he-guo-ying-ji-guan-li-bu",
        source: ["/gk/sgcc/:category"],
        target: "/gov/mem/gk/sgcc/:category",
      },
    ],
  },
  "mfa.gov.cn": {
    _name: "中华人民共和国外交部",
    www: [
      {
        title: "外交动态",
        docs: "https://docs.rsshub.app/routes/government#zhong-hua-ren-min-gong-he-guo-wai-jiao-bu-wai-jiao-dong-tai",
        source: ["/web/wjdt_674879/:category"],
        target: (params) => `/gov/mfa/wjdt/${params.category.split("_")[0]}`,
      },
    ],
  },
  "mgs.gov.cn": {
    _name: "广东茂名滨海新区政务网",
    www: [
      {
        title: "广东茂名滨海新区政务网",
        docs: "https://docs.rsshub.app/routes/government#mao-ming-shi-ren-min-zheng-fu-guang-dong-mao-ming-bin-hai-xin-qu-zheng-wu-wang",
        source: ["/*"],
        target: (params, url) =>
          `/gov/mgs/${new URL(url).host.split(".mgs.gov.cn")[0] + new URL(url).pathname.replace(/(index.*$)/g, "")}`,
      },
    ],
  },
  "miit.gov.cn": {
    _name: "工业和信息化部",
    ".": [
      {
        title: "部门 文件发布",
        docs: "https://docs.rsshub.app/routes/government#zhong-guo-gong-ye-he-xin-xi-hua-bu",
        source: ["/jgsj/:ministry/wjfb/index.html"],
        target: "/miit/wjfb/:ministry",
      },
      {
        title: "征集意见",
        docs: "https://docs.rsshub.app/routes/government#zhong-guo-gong-ye-he-xin-xi-hua-bu",
        source: ["/gzcy/yjzj/index.html"],
        target: "/miit/yjzj",
      },
    ],
  },
  "mmht.gov.cn": {
    _name: "广东茂名高新技术产业开发区",
    www: [
      {
        title: "茂名高新技术产业开发区政务网",
        docs: "https://docs.rsshub.app/routes/government#mao-ming-shi-ren-min-zheng-fu-guang-dong-mao-ming-gao-xin-ji-shu-chan-ye-kai-fa-qu",
        source: ["/*"],
        target: (params, url) =>
          `/gov/mmht/${new URL(url).host.split(".mmht.gov.cn")[0] + new URL(url).pathname.replace(/(index.*$)/g, "")}`,
      },
    ],
  },
  "moa.gov.cn": {
    _name: "中华人民共和国农业农村部",
    ".": [
      {
        title: "新闻",
        docs: "https://docs.rsshub.app/routes/government#zhong-hua-ren-min-gong-he-guo-jiao-yu-bu-xin-wen",
        source: ["/"],
        target: "/gov/moa/:suburl",
      },
    ],
    zdscxx: [
      {
        title: "数据",
        docs: "https://docs.rsshub.app/routes/government#zhong-hua-ren-min-gong-he-guo-jiao-yu-bu",
        source: ["/nyb/pc/messageView.jsp"],
        target: (_params, _url, document) => {
          if (!document) {
            return "/gov/moa/zdscxx"
          }
          const selected = document.querySelectorAll(".colorRed")
          const categories = Array.from(selected)
            .map((s: any) => s.getAttribute("_key"))
            .join("/")

          return `/gov/moa/zdscxx${categories ? `/${categories}` : ""}`
        },
      },
    ],
  },
  "moe.gov.cn": {
    _name: "中华人民共和国教育部",
    ".": [
      {
        title: "新闻",
        docs: "https://docs.rsshub.app/routes/government#zhong-hua-ren-min-gong-he-guo-jiao-yu-bu",
        source: ["/"],
        target: "/gov/moe/newest_file",
      },
      {
        title: "司局通知",
        docs: "https://docs.rsshub.app/routes/government#zhong-hua-ren-min-gong-he-guo-jiao-yu-bu",
        source: ["/s78/:column/tongzhi", "/s78/:column"],
        target: "/gov/moe/s78/:column",
      },
    ],
  },
  "mofcom.gov.cn": {
    _name: "中华人民共和国商务部",
    ".": [
      {
        title: "新闻发布",
        docs: "https://docs.rsshub.app/routes/government#zhong-hua-ren-min-gong-he-guo-shang-wu-bu",
        source: ["/article/*"],
        target: (_, url) =>
          `/gov/mofcom/article/${new URL(url).pathname.replace("/article/", "")}`,
      },
    ],
  },
  "moj.gov.tw": {
    _name: "台灣法務部廉政署",
    "www.aac": [
      {
        title: "最新消息",
        docs: "https://docs.rsshub.app/routes/government#zhong-hua-ren-min-gong-he-guo-jiao-yu-bu",
        source: ["/7204/7246/"],
        target: (_params, url) =>
          `/gov/moj/aac/news${new URL(url).searchParams.has("type") ? "/" + new URL(url).searchParams.get("type") : ""}`,
      },
    ],
  },
  "mot.gov.cn": {
    _name: "中华人民共和国交通运输部",
    ".": [
      {
        title: "栏目",
        docs: "https://docs.rsshub.app/routes/government#zhong-hua-ren-min-gong-he-guo-jiao-tong-yun-shu-bu-lan-mu",
        source: ["/:category*"],
        target: (params) => {
          const category = params.category

          return `/gov/mot${category ? `/${category}` : ""}`
        },
      },
      {
        title: "时政要闻",
        docs: "https://docs.rsshub.app/routes/government#zhong-hua-ren-min-gong-he-guo-jiao-tong-yun-shu-bu-lan-mu",
        source: ["/shizhengyaowen"],
        target: "/gov/mot/shizhengyaowen",
      },
      {
        title: "交通要闻",
        docs: "https://docs.rsshub.app/routes/government#zhong-hua-ren-min-gong-he-guo-jiao-tong-yun-shu-bu-lan-mu",
        source: ["/jiaotongyaowen"],
        target: "/gov/mot/jiaotongyaowen",
      },
      {
        title: "重要会议",
        docs: "https://docs.rsshub.app/routes/government#zhong-hua-ren-min-gong-he-guo-jiao-tong-yun-shu-bu-lan-mu",
        source: ["/zhongyaohuiyi"],
        target: "/gov/mot/zhongyaohuiyi",
      },
      {
        title: "数据开放",
        docs: "https://docs.rsshub.app/routes/government#zhong-hua-ren-min-gong-he-guo-jiao-tong-yun-shu-bu-lan-mu",
        source: ["/sjkf"],
        target: "/gov/mot/sjkf",
      },
      {
        title: "统计数据",
        docs: "https://docs.rsshub.app/routes/government#zhong-hua-ren-min-gong-he-guo-jiao-tong-yun-shu-bu-lan-mu",
        source: ["/tongjishuju"],
        target: "/gov/mot/tongjishuju",
      },
      {
        title: "分析公报",
        docs: "https://docs.rsshub.app/routes/government#zhong-hua-ren-min-gong-he-guo-jiao-tong-yun-shu-bu-lan-mu",
        source: ["/fenxigongbao"],
        target: "/gov/mot/fenxigongbao",
      },
      {
        title: "运价指数",
        docs: "https://docs.rsshub.app/routes/government#zhong-hua-ren-min-gong-he-guo-jiao-tong-yun-shu-bu-lan-mu",
        source: ["/yunjiazhishu"],
        target: "/gov/mot/yunjiazhishu",
      },
      {
        title: "公路",
        docs: "https://docs.rsshub.app/routes/government#zhong-hua-ren-min-gong-he-guo-jiao-tong-yun-shu-bu-lan-mu",
        source: ["/tongjishuju/gonglu"],
        target: "/gov/mot/tongjishuju/gonglu",
      },
      {
        title: "水运",
        docs: "https://docs.rsshub.app/routes/government#zhong-hua-ren-min-gong-he-guo-jiao-tong-yun-shu-bu-lan-mu",
        source: ["/tongjishuju/shuiyun"],
        target: "/gov/mot/tongjishuju/shuiyun",
      },
      {
        title: "铁路",
        docs: "https://docs.rsshub.app/routes/government#zhong-hua-ren-min-gong-he-guo-jiao-tong-yun-shu-bu-lan-mu",
        source: ["/tongjishuju/tielu"],
        target: "/gov/mot/tongjishuju/tielu",
      },
      {
        title: "民航",
        docs: "https://docs.rsshub.app/routes/government#zhong-hua-ren-min-gong-he-guo-jiao-tong-yun-shu-bu-lan-mu",
        source: ["/tongjishuju/minhang"],
        target: "/gov/mot/tongjishuju/minhang",
      },
      {
        title: "邮政",
        docs: "https://docs.rsshub.app/routes/government#zhong-hua-ren-min-gong-he-guo-jiao-tong-yun-shu-bu-lan-mu",
        source: ["/tongjishuju/youzheng"],
        target: "/gov/mot/tongjishuju/youzheng",
      },
      {
        title: "城市客运",
        docs: "https://docs.rsshub.app/routes/government#zhong-hua-ren-min-gong-he-guo-jiao-tong-yun-shu-bu-lan-mu",
        source: ["/tongjishuju/chengshikeyun"],
        target: "/gov/mot/tongjishuju/chengshikeyun",
      },
      {
        title: "港口货物旅客吞吐量",
        docs: "https://docs.rsshub.app/routes/government#zhong-hua-ren-min-gong-he-guo-jiao-tong-yun-shu-bu-lan-mu",
        source: ["/tongjishuju/gangkouhuowulvkettl"],
        target: "/gov/mot/tongjishuju/gangkouhuowulvkettl",
      },
      {
        title: "固定资产投资完成情况",
        docs: "https://docs.rsshub.app/routes/government#zhong-hua-ren-min-gong-he-guo-jiao-tong-yun-shu-bu-lan-mu",
        source: ["/tongjishuju/gudingzichantouziwcqk"],
        target: "/gov/mot/tongjishuju/gudingzichantouziwcqk",
      },
      {
        title: "行业公报",
        docs: "https://docs.rsshub.app/routes/government#zhong-hua-ren-min-gong-he-guo-jiao-tong-yun-shu-bu-lan-mu",
        source: ["/fenxigongbao/hangyegongbao"],
        target: "/gov/mot/fenxigongbao/hangyegongbao",
      },
      {
        title: "经济分析",
        docs: "https://docs.rsshub.app/routes/government#zhong-hua-ren-min-gong-he-guo-jiao-tong-yun-shu-bu-lan-mu",
        source: ["/fenxigongbao/jingjifenxi"],
        target: "/gov/mot/fenxigongbao/jingjifenxi",
      },
      {
        title: "科技统计",
        docs: "https://docs.rsshub.app/routes/government#zhong-hua-ren-min-gong-he-guo-jiao-tong-yun-shu-bu-lan-mu",
        source: ["/fenxigongbao/kejitongji"],
        target: "/gov/mot/fenxigongbao/kejitongji",
      },
      {
        title: "运力分析",
        docs: "https://docs.rsshub.app/routes/government#zhong-hua-ren-min-gong-he-guo-jiao-tong-yun-shu-bu-lan-mu",
        source: ["/fenxigongbao/yunlifenxi"],
        target: "/gov/mot/fenxigongbao/yunlifenxi",
      },
      {
        title: "沿海散货运价指数",
        docs: "https://docs.rsshub.app/routes/government#zhong-hua-ren-min-gong-he-guo-jiao-tong-yun-shu-bu-lan-mu",
        source: ["/yunjiazhishu/yanhaisanhuoyjzs"],
        target: "/gov/mot/yunjiazhishu/yanhaisanhuoyjzs",
      },
      {
        title: "出口集装箱运价指数",
        docs: "https://docs.rsshub.app/routes/government#zhong-hua-ren-min-gong-he-guo-jiao-tong-yun-shu-bu-lan-mu",
        source: ["/yunjiazhishu/chukoujizhuangxiangyjzs"],
        target: "/gov/mot/yunjiazhishu/chukoujizhuangxiangyjzs",
      },
      {
        title: "长江航运指数分析",
        docs: "https://docs.rsshub.app/routes/government#zhong-hua-ren-min-gong-he-guo-jiao-tong-yun-shu-bu-lan-mu",
        source: ["/yunjiazhishu/changjianghangyunzsfx"],
        target: "/gov/mot/yunjiazhishu/changjianghangyunzsfx",
      },
      {
        title: "珠江水运经济运行分析",
        docs: "https://docs.rsshub.app/routes/government#zhong-hua-ren-min-gong-he-guo-jiao-tong-yun-shu-bu-lan-mu",
        source: ["/yunjiazhishu/zhujiangshuiyunjjyxfx"],
        target: "/gov/mot/yunjiazhishu/zhujiangshuiyunjjyxfx",
      },
    ],
  },
  "mztoday.gov.cn": {
    _name: "德阳市人民政府",
    www: [
      {
        title: "今日绵竹",
        docs: "https://docs.rsshub.app/routes/government#de-yang-shi-ren-min-zheng-fu",
        source: ["/*"],
        target: "/gov/sichuan/deyang/mztoday",
      },
    ],
  },
  "nifdc.gov.cn": {
    _name: "国家药品监督管理局医疗器械标准管理中心",
    ".": [
      {
        title: "通用",
        docs: "https://docs.rsshub.app/routes/government#guo-jia-yao-pin-jian-du-guan-li-ju-yi-liao-qi-xie-biao-zhun-guan-li-zhong-xin",
        source: ["/*"],
        target: (params) =>
          `/gov/nifdc/${params.path.replace(/\/index\.html$/, "")}`,
      },
    ],
  },
  "nmpa.gov.cn": {
    _name: "国家药品监督管理局",
    ".": [
      {
        title: "通用",
        docs: "https://docs.rsshub.app/routes/government#guo-jia-yao-pin-jian-du-guan-li-ju",
        source: ["/*path"],
        target: (params) =>
          `/gov/nmpa/${params.path.replace("/index.html", "")}`,
      },
    ],
  },
  "nopss.gov.cn": {
    _name: "全国哲学社会科学工作办公室",
    ".": [
      {
        title: "通用",
        docs: "https://docs.rsshub.app/routes/government#quan-guo-zhe-xue-she-hui-ke-xue-gong-zuo-ban-gong-shi",
        source: ["/*path"],
        target: (params) =>
          `/gov/nopss/${params.path.replace("/index.html", "")}`,
      },
    ],
  },
  "npc.gov.cn": {
    _name: "中国人大网",
    ".": [
      {
        title: "通用",
        docs: "https://docs.rsshub.app/routes/government#zhong-guo-ren-da-wang",
        source: ["/npc/c2/:caty"],
        target: "/gov/npc/:caty",
      },
    ],
  },
  "nrta.gov.cn": {
    _name: "国家广播电视总局",
    ".": [
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/government#guo-jia-guang-bo-dian-shi-zong-ju",
        source: ["/col/*category"],
        target: (params) =>
          `/gov/nrta/news/${params.category.replace("col", "").replace("/index.html", "")}`,
      },
    ],
    dsj: [
      {
        title: "电视剧政务平台",
        docs: "https://docs.rsshub.app/routes/government#guo-jia-guang-bo-dian-shi-zong-ju",
        source: ["/tims/site/views/applications.shanty", "/"],
        target: (params, url) => {
          url = new URL(url)
          const category = url.searchParams.get("appName")

          return `/gov/nrta/dsj/${category}`
        },
      },
    ],
  },
  "nsfc.gov.cn": {
    _name: "国家自然科学基金委员会",
    ".": [
      {
        title: "基金要闻",
        docs: "https://docs.rsshub.app/routes/other#guo-jia-zi-ran-ke-xue-ji-jin-wei-yuan-hui-ji-jin-yao-wen",
        source: ["/*"],
        target: "/nsfc/news/jjyw",
      },
      {
        title: "通知公告",
        docs: "https://docs.rsshub.app/routes/other#guo-jia-zi-ran-ke-xue-ji-jin-wei-yuan-hui-ji-jin-yao-wen",
        source: ["/*"],
        target: "/nsfc/news/tzgg",
      },
      {
        title: "资助成果",
        docs: "https://docs.rsshub.app/routes/other#guo-jia-zi-ran-ke-xue-ji-jin-wei-yuan-hui-ji-jin-yao-wen",
        source: ["/*"],
        target: "/nsfc/news/zzcg",
      },
      {
        title: "科普快讯",
        docs: "https://docs.rsshub.app/routes/other#guo-jia-zi-ran-ke-xue-ji-jin-wei-yuan-hui-ji-jin-yao-wen",
        source: ["/*"],
        target: "/nsfc/news/kpkx",
      },
    ],
  },
  "pbc.gov.cn": {
    _name: "中国人民银行",
    ".": [
      {
        title: "沟通交流",
        docs: "https://docs.rsshub.app/routes/finance#zhong-guo-ren-min-yin-xing",
        source: ["/goutongjiaoliu/113456/113469/index.html"],
        target: "/gov/pbc/goutongjiaoliu",
      },
      {
        title: "货币政策司公开市场交易公告",
        docs: "https://docs.rsshub.app/routes/finance#zhong-guo-ren-min-yin-xing",
        source: ["/zhengcehuobisi/125207/125213/125431/125475/index.html"],
        target: "/gov/pbc/zhengcehuobisi",
      },
      {
        title: "政策研究",
        docs: "https://docs.rsshub.app/routes/finance#zhong-guo-ren-min-yin-xing",
        source: ["/redianzhuanti/118742/4122386/4122510/index.html"],
        target: "/gov/pbc/zcyj",
      },
      {
        title: "工作论文",
        docs: "https://docs.rsshub.app/routes/finance#zhong-guo-ren-min-yin-xing",
        source: ["/redianzhuanti/118742/4122386/4122692/index.html"],
        target: "/gov/pbc/gzlw",
      },
    ],
  },
  "samr.gov.cn": {
    _name: "国家市场监督管理总局",
    xgzlyhd: [
      {
        title: "留言咨询",
        docs: "https://docs.rsshub.app/routes/government#guo-jia-shi-chang-jian-du-guan-li-zong-ju",
        source: ["/gjjly/index"],
        target: "/gov/samr/xgzlyhd/:category?/:department?",
      },
    ],
  },
  "safe.gov.cn": {
    _name: "国家外汇管理局",
    ".": [
      {
        title: "业务咨询",
        docs: "https://docs.rsshub.app/routes/government#guo-jia-wai-hui-guan-li-ju-ye-wu-zi-xun",
        source: ["/:site/ywzx/index.html"],
        target: (params) => {
          const site = params.site

          return `/gov/safe/business/${site}`
        },
      },
      {
        title: "投诉建议",
        docs: "https://docs.rsshub.app/routes/government#guo-jia-wai-hui-guan-li-ju-tou-su-jian-yi",
        source: ["/:site/tsjy/index.html"],
        target: (params) => {
          const site = params.site

          return `/gov/safe/complaint/${site}`
        },
      },
    ],
  },
  "sasac.gov.cn": {
    _name: "国务院国有资产监督管理委员会",
    ".": [
      {
        title: "通用",
        docs: "https://docs.rsshub.app/routes/other#guo-wu-yuan-guo-you-zi-chan-jian-du-guan-li-wei-yuan-hui",
        source: ["/*path"],
        target: (params) =>
          `/gov/sasac/${params.path.replace("/index.html", "")}`,
      },
    ],
  },
  "sdb.gov.cn": {
    _name: "广东省茂名水东湾新城建设管理委员会",
    www: [
      {
        title: "广东省茂名水东湾新城建设管理委员会",
        docs: "https://docs.rsshub.app/routes/government#mao-ming-shi-ren-min-zheng-fu-guang-dong-sheng-mao-ming-shui-dong-wan-xin-cheng-jian-she-guan-li-wei-yuan-hui",
        source: ["/*"],
        target: (params, url) =>
          `/gov/sdb/${new URL(url).host.split(".sdb.gov.cn")[0] + new URL(url).pathname.replace(/(index.*$)/g, "")}`,
      },
    ],
  },
  "sh.gov.cn": {
    _name: "上海市人民政府",
    wsjkw: [
      {
        title: "上海卫健委 疫情通报",
        docs: "https://docs.rsshub.app/routes/other#xin-guan-fei-yan-yi-qing-xin-wen-dong-tai-yi-qing-tong-bao-shang-hai-wei-jian-wei",
        source: ["/"],
        target: "/gov/shanghai/wsjkw/yqtb",
      },
    ],
    rsj: [
      {
        title: "上海市职业能力考试院 考试项目",
        docs: "https://docs.rsshub.app/routes/government#shang-hai-shi-ren-min-zheng-fu-shang-hai-shi-zhi-ye-neng-li-kao-shi-yuan-kao-shi-xiang-mu",
        source: ["/"],
        target: "/gov/shanghai/rsj/ksxm",
      },
    ],
    yjj: [
      {
        title: "上海市药品监督管理局",
        docs: "https://docs.rsshub.app/routes/government#shang-hai-shi-ren-min-zheng-fu-shang-hai-shi-yao-pin-jian-du-guan-li-ju",
        source: ["/"],
        target: (params, url) =>
          `/gov/shanghai/yjj/${url.match(/yjj\.sh\.gov\.cn\/(.*)\/index.html/)[1]}`,
      },
    ],
    "wsbs.wgj": [
      {
        title: "上海市文旅局审批公告",
        docs: "https://docs.rsshub.app/routes/government#shang-hai-shi-ren-min-zheng-fu-shang-hai-shi-wen-lv-ju-shen-pi-gong-gao",
        source: ["/"],
        target: "/gov/shanghai/wgj",
      },
    ],
  },
  "shaanxi.gov.cn": {
    _name: "陕西省人民政府",
    kjt: [
      {
        title: "陕西省科学技术厅",
        docs: "https://docs.rsshub.app/routes/government#shan-xi-sheng-sheng-ren-min-zheng-fu-sheng-ke-xue-ji-shu-ting",
        source: ["/view/iList.jsp", "/"],
        target: (params, url) =>
          `/gov/shaanxi/kjt/${new URL(url).searchParams.get("cat_id")}`,
      },
    ],
  },
  "sousuo.gov.cn": {
    _name: "中国政府网",
    kjt: [
      {
        title: "政府新闻 - 政策文件",
        docs: "https://docs.rsshub.app/routes/government#shan-xi-sheng-sheng-ren-min-zheng-fu-sheng-ke-xue-ji-shu-ting",
        source: ["/s.htm", "/"],
        target: "/gov/news/zhengce",
      },
    ],
  },
  "stats.gov.cn": {
    _name: "国家统计局",
    www: [
      {
        title: "通用",
        docs: "https://docs.rsshub.app/routes/government#guo-jia-tong-ji-ju-shu-ju-tong-yong",
        source: ["/*"],
        target: (params, url) =>
          `/gov/stats/${new URL(url).href.match(/stats\.gov\.cn\/(.*)/)[1]}`,
      },
    ],
  },
  "sz.gov.cn": {
    _name: "深圳政府在线移动门户",
    hrss: [
      {
        title: "考试院公告",
        docs: "https://docs.rsshub.app/routes/government#guang-dong-sheng-ren-min-zheng-fu-shen-zhen-shi-wei-zu-zhi-bu",
        source: ["/*"],
        target: "/gov/shenzhen/hrss/szksy/:caty/:page?",
      },
    ],
    xxgk: [
      {
        title: "深圳市人民政府",
        docs: "https://docs.rsshub.app/routes/government#guang-dong-sheng-ren-min-zheng-fu-guang-dong-sheng-shen-zhen-shi-ren-min-zheng-fu",
        source: ["/cn/xxgk/zfxxgj/:caty"],
        target: "/gov/shenzhen/hrss/szksy/:caty/:page?",
      },
    ],
    zjj: [
      {
        title: "深圳市住房和建设局",
        docs: "https://docs.rsshub.app/routes/government#guang-dong-sheng-ren-min-zheng-fu-shen-zhen-shi-zhu-fang-he-jian-she-ju",
        source: ["/xxgk/:caty"],
        target: "/gov/shenzhen/zjj/xxgk/:caty",
      },
    ],
    zzb: [
      {
        title: "组工在线公告",
        docs: "https://docs.rsshub.app/routes/government#guang-dong-sheng-ren-min-zheng-fu-shen-zhen-shi-kao-shi-yuan",
        source: ["/*"],
        target: "/gov/shenzhen/zzb/:caty/:page?",
      },
    ],
  },
  "taiyuan.gov.cn": {
    _name: "太原市人民政府",
    rsj: [
      {
        title: "太原市人力资源和社会保障局政府公开信息",
        docs: "https://docs.rsshub.app/routes/government#tai-yuan-shi-ren-min-zheng-fu-tai-yuan-shi-ren-li-zi-yuan-he-she-hui-bao-zhang-ju-zheng-fu-gong-kai-xin-xi",
        source: ["/*"],
        target: "/taiyuan/rsj/:caty/:page?",
      },
    ],
  },
  "tqyb.com.cn": {
    _name: "广州天气",
    www: [
      {
        title: "突发性天气提示",
        docs: "https://docs.rsshub.app/routes/government#guang-zhou-tian-qi-tu-fa-xing-tian-qi-ti-shi",
        source: ["/gz/weatherAlarm/suddenWeather/"],
        target: "/gov/guangdong/tqyb/tfxtq",
      },
      {
        title: "广东省内城市预警信号",
        docs: "https://docs.rsshub.app/routes/government#guang-zhou-tian-qi-guang-dong-sheng-nei-cheng-shi-yu-jing-xin-hao",
        source: ["/gz/weatherAlarm/otherCity/"],
        target: "/gov/guangdong/tqyb/sncsyjxh",
      },
    ],
  },
  "xinyi.gov.cn": {
    _name: "信宜市人民政府",
    www: [
      {
        title: "信宜市人民政府",
        docs: "https://docs.rsshub.app/routes/government#mao-ming-shi-ren-min-zheng-fu-xin-yi-shi-ren-min-zheng-fu",
        source: ["/*"],
        target: (params, url) =>
          `/gov/xinyi/${new URL(url).host.split(".xinyi.gov.cn")[0] + new URL(url).pathname.replace(/(index.*$)/g, "")}`,
      },
    ],
  },
  "www.gov.cn": {
    _name: "中国政府网",
    ".": [
      {
        title: "政府新闻 - 政务部门",
        docs: "https://docs.rsshub.app/routes/government#zhong-guo-zheng-fu-wang",
        source: ["/lianbo/bumen/index.htm", "/"],
        target: "/gov/news/bm",
      },
      {
        title: "政府新闻 - 滚动新闻",
        docs: "https://docs.rsshub.app/routes/government#zhong-guo-zheng-fu-wang",
        source: ["/xinwen/gundong.htm", "/"],
        target: "/gov/news/gd",
      },
      {
        title: "政府新闻 - 新闻要闻",
        docs: "https://docs.rsshub.app/routes/government#zhong-guo-zheng-fu-wang",
        source: ["/yaowen/index.htm", "/"],
        target: "/gov/news/yw",
      },
      {
        title: "政府新闻 - 国务院新闻",
        docs: "https://docs.rsshub.app/routes/government#zhong-guo-zheng-fu-wang",
        source: ["/pushinfo/v150203", "/"],
        target: "/gov/news/gwy",
      },
      {
        title: "政策",
        docs: "https://docs.rsshub.app/routes/government#zhong-guo-zheng-fu-wang-zheng-ce",
        source: ["/zhengce/:category*"],
        target: (params) => {
          const category = params.category

          return `/gov/zhengce${category ? `/${category}` : ""}`
        },
      },
      {
        title: "最新政策",
        docs: "https://docs.rsshub.app/routes/government#zhong-guo-zheng-fu-wang",
        source: ["/zhengce/zuixin.htm", "/"],
        target: "/gov/zhengce/zuixin",
      },
      {
        title: "最新文件",
        docs: "https://docs.rsshub.app/routes/government#zhong-guo-zheng-fu-wang",
        source: ["/"],
        target: "/gov/zhengce/wenjian",
      },
      {
        title: "信息稿件",
        docs: "https://docs.rsshub.app/routes/government#zhong-guo-zheng-fu-wang",
        source: ["/"],
        target: "/gov/zhengce/govall",
      },
      {
        title: "国务院政策文件库",
        docs: "https://docs.rsshub.app/routes/government#zhong-guo-zheng-fu-wang",
        source: ["/zhengce/zhengceku/:lib"],
        target: (params) => `/gov/zhengce/zhengceku/${params.libs}`,
      },
    ],
  },
  "wuhan.gov.cn": {
    _name: "武汉市人民政府",
    ".": [
      {
        title: "武汉要闻",
        docs: "https://docs.rsshub.app/routes/government#zhong-guo-zheng-fu-wang",
        source: ["/sy/whyw/", "/whyw", "/"],
        target: "/gov/wuhan/sy/whyw",
      },
    ],
  },
  "xz.gov.cn": {
    _name: "徐州市人民政府",
    hrss: [
      {
        title: "徐州市人力资源和社会保障局",
        docs: "https://docs.rsshub.app/routes/government#xu-zhou-shi-ren-min-zheng-fu-xu-zhou-shi-ren-li-zi-yuan-he-she-hui-bao-zhang-ju",
        source: ["/*"],
        target: (params, url) =>
          `/gov/xuzhou/hrss${new URL(url).href.match(/\/(\d+)\/subPage.html/)[1] ?? ""}`,
      },
    ],
  },
  "zjks.gov.cn": {
    _name: "浙江省公务员考试录用网",
    ".": [
      {
        title: "地市专栏",
        docs: "https://docs.rsshub.app/routes/government#zhe-jiang-sheng-gong-wu-yuan-kao-shi-lu-yong-wang",
        source: [
          "/zjgwy/website/init.htm",
          "/zjgwy/website/queryDetail.htm",
          "/zjgwy/website/queryMore.htm",
        ],
        target: "/gov/zhejiang/gwy",
      },
    ],
  },
  "gq.com.tw": {
    _name: "GQ Taiwan",
    ".": [
      {
        title: "GQ Taiwan",
        docs: "https://docs.rsshub.app/routes/new-media#gq",
        source: ["/*path"],
        target: "/gq/tw/:path",
      },
    ],
  },
  "greasyfork.org": {
    _name: "Greasy Fork",
    ".": [
      {
        title: "User scripts",
        docs: "https://docs.rsshub.app/routes/program-update#greasy-fork",
        source: ["/:language", "/:language/scripts/by-site/:domain?"],
        target: "/greasyfork/:language/:domain?",
      },
      {
        title: "Feedback",
        docs: "https://docs.rsshub.app/routes/program-update#greasy-fork",
        source: "/:language/scripts/:script/feedback",
        target: "/greasyfork/scripts/:script/feedback",
      },
      {
        title: "Version history",
        docs: "https://docs.rsshub.app/routes/program-update#greasy-fork",
        source: "/:language/scripts/:script/versions",
        target: "/greasyfork/scripts/:script/versions",
      },
    ],
  },
  "grist.org": {
    _name: "Grist",
    ".": [
      {
        title: "Articles",
        docs: "https://docs.rsshub.app/routes/new-media#grist",
        source: ["/articles/"],
        target: "/grist/",
      },
      {
        title: "Featured",
        docs: "https://docs.rsshub.app/routes/new-media#grist",
        source: "/",
        target: "/grist/featured",
      },
      {
        title: "Series",
        docs: "https://docs.rsshub.app/routes/new-media#grist",
        source: "/series/:series",
        target: "/grist/series/:series",
      },
      {
        title: "Topic",
        docs: "https://docs.rsshub.app/routes/new-media#grist",
        source: ["/:topic"],
        target: "/grist/topic/:topic",
      },
    ],
  },
  "grubstreet.com": {
    _name: "Grub Street",
    ".": [
      {
        title: "Posts",
        docs: "https://docs.rsshub.app/routes/new-media#grub-street",
        source: ["/"],
        target: "/grubstreet",
      },
    ],
  },
  "guancha.cn": {
    _name: "观察者网",
    ".": [
      {
        title: "头条",
        docs: "https://docs.rsshub.app/routes/new-media#guan-cha-zhe-wang-tou-tiao",
        source: ["/GuanChaZheTouTiao", "/"],
        target: "/guancha/headline",
      },
      {
        title: "首页",
        docs: "https://docs.rsshub.app/routes/new-media#guan-cha-zhe-wang-shou-ye",
        source: ["/"],
        target: "/guancha/:category?",
      },
      {
        title: "观学院",
        docs: "https://docs.rsshub.app/routes/new-media#guan-cha-zhe-wang-guan-xue-yuan",
        source: ["/"],
        target: "/guancha/:category?",
      },
    ],
    app: [
      {
        title: "个人主页文章",
        docs: "https://docs.rsshub.app/routes/new-media#guan-cha-zhe-wang-ge-ren-zhu-ye-wen-zhang",
        source: ["/user/get-published-list", "/"],
        target: (params, url) =>
          `/guancha/personalpage/${new URL(url).searchParams.get("uid")}`,
      },
    ],
    member: [
      {
        title: "观学院",
        docs: "https://docs.rsshub.app/routes/new-media#guan-cha-zhe-wang-guan-xue-yuan",
        source: ["/"],
        target: "/guancha/member/recommend",
      },
    ],
    user: [
      {
        title: "风闻话题",
        docs: "https://docs.rsshub.app/routes/new-media#guan-cha-zhe-wang-feng-wen-hua-ti",
        source: ["/topic/post-list", "/"],
        target: (params, url) =>
          `/guancha/topic/${new URL(url).searchParams.get("topic_id")}/${new URL(url).searchParams.get("order")}`,
      },
    ],
  },
  "guandian.cn": {
    _name: "观点网",
    www: [
      {
        title: "资讯",
        docs: "https://docs.rsshub.app/routes/new-media#guan-dian-wang-zi-xun",
        source: ["/:category"],
        target: "/guandian/:category",
      },
    ],
  },
  "guangdiu.com": {
    _name: "逛丢",
    ".": [
      {
        title: "折扣",
        docs: "https://docs.rsshub.app/routes/shopping#guang-diu",
        source: ["/", "/cate.php"],
        target: (param, url) =>
          `/guangdiu/${url.indexOf("?") > -1 ? url.split("?")[1] : ""}`,
      },
      {
        title: "一小时风云榜",
        docs: "https://docs.rsshub.app/routes/shopping#guang-diu",
        source: ["/rank"],
        target: "/guangdiu/rank",
      },
      {
        title: "九块九",
        docs: "https://docs.rsshub.app/routes/shopping#guang-diu",
        source: ["/cheaps.php"],
        target: (param, url) =>
          `/guangdiu/${url.indexOf("?") > -1 ? url.split("?")[1] : ""}`,
      },
      {
        title: "关键字搜索",
        docs: "https://docs.rsshub.app/routes/shopping#guang-diu",
        source: ["/search.php"],
        target: (param, url) =>
          `/guangdiu/${url.indexOf("?") > -1 ? url.split("?")[1] : ""}`,
      },
    ],
  },
  "gzmtr.com": {
    _name: "广州地铁",
    www: [
      {
        title: "新闻",
        docs: "https://docs.rsshub.app/routes/travel#guang-zhou-di-tie",
      },
    ],
  },
  "guanhai.com.cn": {
    _name: "观海新闻",
    ".": [
      {
        title: "首页",
        docs: "https://docs.rsshub.app/routes/new-media#guan-hai-xin-wen",
        source: ["/"],
        target: "/guanhai",
      },
    ],
  },
  "guduodata.com": {
    _name: "骨朵数据",
    data: [
      {
        title: "日榜",
        docs: "https://docs.rsshub.app/routes/other#gu-duo-shu-ju",
        source: ["/"],
        target: "/guduodata/daily",
      },
    ],
  },
  "guggenheim.org": {
    _name: "Solomon R. Guggenheim Museum",
    www: [
      {
        title: "Exhibitions",
        docs: "https://docs.rsshub.app/routes/en/travel#solomon-r-guggenheim-museum",
      },
    ],
  },
  "gumroad.com": {
    _name: "Gumroad",
    ".": [
      {
        title: "产品",
        docs: "https://docs.rsshub.app/routes/shopping#gumroad",
        source: ["/l/:products"],
        target: (params, url) => {
          const username = new URL(url).host.split(".")[0]

          return `/gumroad/${username}/${params.products}`
        },
      },
    ],
  },
  "guokr.com": {
    _name: "果壳网",
    ".": [
      {
        title: "科学人",
        docs: "https://docs.rsshub.app/routes/new-media#guo-ke-wang-ke-xue-ren",
        source: ["/scientific", "/"],
        target: "/guokr/scientific",
      },
      {
        title: "专栏",
        docs: "https://docs.rsshub.app/routes/new-media#guo-ke-wang-zhuan-lan",
        source: ["/"],
        target: "/guokr/:channel",
      },
    ],
  },
  "gxmzu.edu.cn": {
    _name: "广西民族大学",
    ai: [
      {
        title: "人工智能学院通知公告",
        docs: "https://docs.rsshub.app/routes/university#guang-xi-min-zu-da-xue-ren-gong-zhi-neng-xue-yuan-tong-zhi-gong-gao",
        source: ["/index/tzgg.htm", "/"],
        target: "/gxmzu/aitzgg",
      },
    ],
    library: [
      {
        title: "图书馆最新消息",
        docs: "https://docs.rsshub.app/routes/unversity#guang-xi-min-zu-da-xue-tu-shu-guan-zui-xin-xiao-xi",
        source: ["/news/news_list.jsp", "/"],
        target: "/gxmzu/libzxxx",
      },
    ],
    yjs: [
      {
        title: "研究生院招生公告",
        docs: "https://docs.rsshub.app/routes/university#guang-xi-min-zu-da-xue-yan-jiu-sheng-yuan-zhao-sheng-gong-gao",
        source: ["/tzgg/zsgg.htm", "/"],
        target: "/gxmzu/yjszsgg",
      },
    ],
  },
  "gz-cmc.com": {
    _name: "广州市融媒体中心",
    ".": [
      {
        title: "频道",
        docs: "https://docs.rsshub.app/routes/traditional-media#guang-zhou-shi-rong-mei-ti-zhong-xin",
        source: ["/"],
      },
    ],
  },
  "gzdaily.cn": {
    _name: "广州日报",
    ".": [
      {
        title: "客户端",
        docs: "https://docs.rsshub.app/routes/traditional-media#guang-zhou-ri-bao",
        source: ["/"],
      },
    ],
  },
  "gzh360.com": {
    _name: "公众号360",
    web: [
      {
        title: "公众号",
        docs: "https://docs.rsshub.app/routes/new-media#gong-zhong-hao-360",
        source: ["/gzh_articles", "/gzh", "/"],
        target: (params, url) =>
          `/gzh360/gzh/${new URL(url).searchParams.get("id") ?? ""}`,
      },
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/new-media#gong-zhong-hao-360",
        source: ["/category", "/"],
        target: (params, url) =>
          `/gzh360/category/${new URL(url).searchParams.get("id") ?? ""}`,
      },
    ],
  },
  "gzhu.edu.cn": {
    _name: "广州大学",
    yjsy: [
      {
        title: "研究生院招生动态",
        docs: "https://docs.rsshub.app/routes/university#guang-zhou-da-xue",
        source: ["/zsxx/zsdt/zsdt.htm", "/"],
        target: "/gzhu/yjs",
      },
    ],
  },
  "ycombinator.com": {
    _name: "Hacker News",
    ".": [
      {
        title: "Section",
        docs: "https://docs.rsshub.app/routes/programming#hacker-news",
        source: ["/:section", "/"],
        target: "/hackernews/:section?/:type?/:user?",
      },
    ],
  },
  "hackertalk.net": {
    _name: "Hacker Talk 黑客说",
    ".": [
      {
        title: "最新的帖子",
        docs: "https://docs.rsshub.app/routes/bbs#hacker-talk-hei-ke-shuo",
        source: ["/"],
        target: "/hackertalk",
      },
    ],
  },
  "hacking8.com": {
    _name: "Hacking8",
    ".": [
      {
        title: "信息流",
        docs: "https://docs.rsshub.app/routes/programming#hacking8-xin-xi-liu",
        source: ["/index/:category", "/"],
        target: "/hacking8/:category?",
      },
      {
        title: "搜索",
        docs: "https://docs.rsshub.app/routes/programming#hacking8-sou-suo",
        source: ["/search", "/"],
        target: (params, url) =>
          `/hacking8/search/${new URL(url).searchParams.get("q")}`,
      },
    ],
  },
  "hackmd.io": {
    _name: "HackMD",
    ".": [
      {
        title: "Profile",
        docs: "https://docs.rsshub.app/routes/programming#hackmd",
        source: ["/:profile"],
        target: (params) => `/hackmd/profile/${params.replace("@", "")}`,
      },
    ],
  },
  "hackyournews.com": {
    _name: "HackYourNews",
    ".": [
      {
        title: "Index",
        docs: "https://docs.rsshub.app/routes/programming#hack-your-news",
        source: ["/"],
        target: "/hackyournews",
      },
    ],
  },
  "hafu.edu.cn": {
    _name: "河南财政金融学院",
    www: [
      {
        title: "河南财政金融学院 - 通知公告",
        docs: "https://docs.rsshub.app/routes/university#he-nan-cai-zheng-jin-rong-xue-yuan",
        source: "/*",
        target: (params, url) => {
          if (url.indexOf("www")) {
            return "/hafu/news/ggtz"
          }
          if (url.indexOf("jwc")) {
            return "/hafu/news/jwc"
          }
          if (url.indexOf("zsjyc")) {
            return "/hafu/news/zsjyc"
          }
        },
      },
    ],
  },
  "hakkatv.org.tw": {
    _name: "客家電視台",
    ".": [
      {
        title: "新聞首頁 - 客家電視台",
        docs: "https://docs.rsshub.app/routes/traditional-media#ke-jia-dian-shi-tai",
        source: "/news",
        target: "/hakkatv/news",
      },
    ],
  },
  "syosetu.org": {
    _name: "hameln",
    ".": [
      {
        title: "章节更新",
        docs: "https://docs.rsshub.app/routes/reading#hameln-zhang-jie-geng-xin",
        source: ["/novel/:id"],
        target: "/hameln/chapter/:id",
      },
    ],
  },
  "harvard.edu": {
    _name: "Harvard University",
    "www.health": [
      {
        title: "Health Blog",
        docs: "https://docs.rsshub.app/routes/new-media#harvard-health-publishing",
        source: ["/blog"],
        target: "/harvard/health/blog",
      },
    ],
  },
  "hashnode.dev": {
    _name: "hashnode",
    ".": [
      {
        title: "Hashnode Blog",
        docs: "https://docs.rsshub.app/routes/blog#hashnode",
        source: "/",
        target: "/hashnode/blog/:username",
      },
    ],
  },
  "hbr.org": {
    _name: "Harvard Business Review",
    ".": [
      {
        title: "Topic",
        docs: "https://docs.rsshub.app/routes/new-media#harvard-business-review-topic",
        source: ["/topic/:topic?", "/"],
        target: "/hbr/topic/:topic?/:type?",
      },
    ],
  },
  "hdu.edu.cn": {
    _name: "杭州电子科技大学",
    computer: [
      {
        title: "计算机学院 - 通知公告",
        docs: "https://docs.rsshub.app/routes/university#hang-zhou-dian-zi-ke-ji-da-xue",
        source: "/6738/list.htm",
        target: "/hdu/cs",
      },
      {
        title: "杭电计算机-研究生通知",
        docs: "https://docs.rsshub.app/routes/university#hang-zhou-dian-zi-ke-ji-da-xue",
        source: "/6769/list.htm",
        target: "/hdu/cs/pg",
      },
    ],
  },
  "hebtv.com": {
    _name: "河北网络广播电视台",
    "web.cmc": [
      {
        title: "农博士在行动",
        docs: "https://docs.rsshub.app/routes/traditional-media#he-bei-wang-luo-guang-bo-dian-shi-tai",
        source: "/cms/rmt0336/19/19js/st/ds/nmpd/nbszxd/index.shtml",
        target: "/hebtv/nbszxd",
      },
    ],
  },
  "hellobtc.com": {
    _name: "白话区块链",
    ".": [
      {
        title: "首页-最新",
        docs: "https://docs.rsshub.app/routes/new-media#bai-hua-qu-kuai-lian",
        source: ["/"],
        target: "/hellobtc/information/latest",
      },
      {
        title: "首页-应用",
        docs: "https://docs.rsshub.app/routes/new-media#bai-hua-qu-kuai-lian",
        source: ["/"],
        target: "/hellobtc/information/application",
      },
      {
        title: "快讯",
        docs: "https://docs.rsshub.app/routes/new-media#bai-hua-qu-kuai-lian",
        source: ["/news"],
        target: "/hellobtc/news",
      },
      {
        title: "科普-最新",
        docs: "https://docs.rsshub.app/routes/new-media#bai-hua-qu-kuai-lian",
        source: ["/kepu.html"],
        target: "/hellobtc/kepu/latest",
      },
      {
        title: "科普-比特币",
        docs: "https://docs.rsshub.app/routes/new-media#bai-hua-qu-kuai-lian",
        source: ["/kepu.html"],
        target: "/hellobtc/kepu/bitcoin",
      },
      {
        title: "科普-以太坊",
        docs: "https://docs.rsshub.app/routes/new-media#bai-hua-qu-kuai-lian",
        source: ["/kepu.html"],
        target: "/hellobtc/kepu/ethereum",
      },
      {
        title: "科普-DeFi",
        docs: "https://docs.rsshub.app/routes/new-media#bai-hua-qu-kuai-lian",
        source: ["/kepu.html"],
        target: "/hellobtc/kepu/defi",
      },
      {
        title: "科普-跨链",
        docs: "https://docs.rsshub.app/routes/new-media#bai-hua-qu-kuai-lian",
        source: ["/kepu.html"],
        target: "/hellobtc/kepu/inter_blockchain",
      },
      {
        title: "科普-挖矿",
        docs: "https://docs.rsshub.app/routes/new-media#bai-hua-qu-kuai-lian",
        source: ["/kepu.html"],
        target: "/hellobtc/kepu/mining",
      },
      {
        title: "科普-安全",
        docs: "https://docs.rsshub.app/routes/new-media#bai-hua-qu-kuai-lian",
        source: ["/kepu.html"],
        target: "/hellobtc/kepu/safety",
      },
      {
        title: "科普-中本聪",
        docs: "https://docs.rsshub.app/routes/new-media#bai-hua-qu-kuai-lian",
        source: ["/kepu.html"],
        target: "/hellobtc/kepu/satoshi_nakamoto",
      },
      {
        title: "科普-公链",
        docs: "https://docs.rsshub.app/routes/new-media#bai-hua-qu-kuai-lian",
        source: ["/kepu.html"],
        target: "/hellobtc/kepu/public_blockchain",
      },
      {
        title: "专栏",
        docs: "https://docs.rsshub.app/routes/new-media#bai-hua-qu-kuai-lian",
        source: ["/topic/:id"],
        target: (params) => `/hellobtc/topic/${params.id.split(".")[0]}`,
      },
    ],
  },
  "hellogithub.com": {
    _name: "HelloGitHub",
    ".": [
      {
        title: "热门",
        docs: "https://docs.rsshub.app/routes/programming#hellogithub-re-men",
        source: ["/"],
        target: (params, url) => {
          const sort = new URL(url).searchParams.get("sort_by")
          const id = new URL(url).searchParams.get("tid")
          return `/hellogithub${sort ? `/sort` : ""}${id ? `/id` : ""}`
        },
      },
      {
        title: "最近",
        docs: "https://docs.rsshub.app/routes/programming#hellogithub-zui-jin",
        source: ["/"],
        target: (params, url) => {
          const sort = new URL(url).searchParams.get("sort_by")
          const id = new URL(url).searchParams.get("tid")
          return `/hellogithub${sort ? `/sort` : ""}${id ? `/id` : ""}`
        },
      },
      {
        title: "文章",
        docs: "https://docs.rsshub.app/routes/programming#hellogithub-wen-zhang",
        source: ["/"],
        target: (params, url) => {
          const sort = new URL(url).searchParams.get("sort_by")
          const id = new URL(url).searchParams.get("tid")
          return `/hellogithub/article${sort ? `/sort` : ""}${id ? `/id` : ""}`
        },
      },
      {
        title: "排行榜",
        docs: "https://docs.rsshub.app/routes/programming#hellogithub-pai-hang-bang",
        source: ["/report/:type", "/"],
        target: "/hellogithub/report/:type",
      },
      {
        title: "月刊",
        docs: "https://docs.rsshub.app/routes/programming#hellogithub-yue-kan",
        source: ["/periodical/volume/:id", "/"],
        target: "/hellogithub/volume",
      },
    ],
  },
  "hex-rays.com": {
    _name: "Hex-Rays",
    ".": [
      {
        title: "Hex-Rays News",
        docs: "https://docs.rsshub.app/routes/programming#hex-rays",
        source: ["/", "/blog"],
        target: "/hex-rays/news",
      },
    ],
  },
  "hinatazaka46.com": {
    _name: "日向坂46",
    ".": [
      {
        title: "公式ブログ",
        docs: "https://docs.rsshub.app/routes/new-media#ban-dao-xi-lie-guan-wang-zi-xun-ri-xiang-ban-46-bo-ke",
        source: ["/s/official/diary/member/list", "/"],
        target: (params, url) =>
          `/hinatazaka46/blog/${new URL(url).searchParams.get("ct")}`,
      },
      {
        title: "ニュース",
        docs: "https://docs.rsshub.app/routes/new-media#ban-dao-xi-lie-guan-wang-zi-xun-ri-xiang-ban-46-xin-wen",
        source: ["/s/official/news/list", "/"],
        target: "/hinatazaka46/news",
      },
    ],
  },
  "hit.edu.cn": {
    _name: "哈尔滨工业大学",
    jwc: [
      {
        title: "哈尔滨工业大学教务处通知公告",
        docs: "https://docs.rsshub.app/routes/university#ha-er-bin-gong-ye-da-xue",
        source: "/*",
        target: "/hit/jwc",
      },
    ],
    today: [
      {
        title: "今日哈工大",
        docs: "https://docs.rsshub.app/routes/university#ha-er-bin-gong-ye-da-xue",
        source: "/category/:category",
        target: "/hit/today/:category",
      },
    ],
    hitgs: [
      {
        title: "哈工大研究生院通知公告",
        docs: "https://docs.rsshub.app/routes/university#ha-er-bin-gong-ye-da-xue",
        source: "/*",
        target: "/hit/hitgs",
      },
    ],
  },
  "hitsz.edu.cn": {
    _name: "哈尔滨工业大学（深圳）",
    ".": [
      {
        title: "新闻中心",
        docs: "https://docs.rsshub.app/routes/university#ha-er-bin-gong-ye-da-xue-shen-zhen",
        source: ["/article/:category?", "/subject/:category?"],
        target: (params) =>
          `/hitsz/article/${params.category.replace(".html", "")}`,
      },
    ],
  },
  "hitwh.edu.cn": {
    _name: "哈尔滨工业大学（威海）",
    ".": [
      {
        title: "今日工大 - 通知公告",
        docs: "https://docs.rsshub.app/routes/university#ha-er-bin-gong-ye-da-xue-wei-hai",
        source: ["/1024/list.htm", "/"],
        target: "/hitwh/today",
      },
    ],
  },
  "hizh.cn": {
    _name: "珠海网",
    ".": [
      {
        title: "栏目",
        docs: "https://docs.rsshub.app/routes/new-media#zhu-hai-wang-lan-mu",
        source: "/",
        target: "/hizu/:column?",
      },
    ],
  },
  "hjedd.com": {
    _name: "海角社区",
    ".": [
      {
        title: "热门",
        docs: "https://docs.rsshub.app/routes/bbs#hai-jiao-she-qu-re-men",
        source: ["/"],
        target: "/hjedd/hot",
      },
      {
        title: "新闻",
        docs: "https://docs.rsshub.app/routes/bbs#hai-jiao-she-qu-xin-wen",
        source: ["/"],
        target: "/hjedd/news",
      },
      {
        title: "大事记",
        docs: "https://docs.rsshub.app/routes/bbs#hai-jiao-she-qu-da-shi-ji",
        source: ["/article", "/"],
        target: "/hjedd/event",
      },
      {
        title: "原创",
        docs: "https://docs.rsshub.app/routes/bbs#hai-jiao-she-qu-da-yuan-chuang",
        source: ["/"],
        target: "/hjedd/original",
      },
      {
        title: "精华",
        docs: "https://docs.rsshub.app/routes/bbs#hai-jiao-she-qu-da-jing-hua",
        source: ["/"],
        target: "/hjedd/top",
      },
      {
        title: "公告",
        docs: "https://docs.rsshub.app/routes/bbs#hai-jiao-she-qu-da-gong-gao",
        source: ["/"],
        target: "/hjedd/notice",
      },
      {
        title: "最新",
        docs: "https://docs.rsshub.app/routes/bbs#hai-jiao-she-qu-da-zui-xin",
        source: ["/"],
        target: "/hjedd/latest",
      },
      {
        title: "文章",
        docs: "https://docs.rsshub.app/routes/bbs#hai-jiao-she-qu-da-wen-zhang",
        source: ["/article", "/"],
        target: (params, url) =>
          `/hjedd/${new URL(url).searchParams.get("nodeId")}`,
      },
    ],
  },
  "hk01.com": {
    _name: "香港01",
    ".": [
      {
        title: "热门",
        docs: "https://docs.rsshub.app/routes/new-media#xiang-gang-01-re-men",
        source: ["/hot", "/"],
        target: "/hk01/hot",
      },
      {
        title: "栏目",
        docs: "https://docs.rsshub.app/routes/new-media#xiang-gang-01-lan-mu",
        source: ["/zone/:id", "/"],
        target: "/hk01/zone/:id?",
      },
      {
        title: "子栏目",
        docs: "https://docs.rsshub.app/routes/new-media#xiang-gang-01-zi-lan-mu",
        source: ["/channel/:id", "/"],
        target: "/hk01/channel/:id?",
      },
      {
        title: "专题",
        docs: "https://docs.rsshub.app/routes/new-media#xiang-gang-01-zhuan-ti",
        source: ["/issue/:id", "/"],
        target: "/hk01/issue/:id?",
      },
      {
        title: "标签",
        docs: "https://docs.rsshub.app/routes/new-media#xiang-gang-01-biao-qian",
        source: ["/tag/:id", "/"],
        target: "/hk01/tag/:id?",
      },
      {
        title: "即時",
        docs: "https://docs.rsshub.app/routes/new-media#xiang-gang-01-ji-shi",
        source: ["/latest", "/"],
        target: "/hk01/latest",
      },
    ],
  },
  "hkej.com": {
    _name: "信报财经新闻",
    ".": [
      {
        title: "即时新闻",
        docs: "https://docs.rsshub.app/routes/traditional-media##xin-bao-cai-jing-xin-wen",
        source: ["/"],
        target: "/hkej/:category?",
      },
    ],
  },
  "hkepc.com": {
    _name: "HKEPC",
    ".": [
      {
        title: "HKEPC 电脑领域",
        docs: "https://docs.rsshub.app/routes/new-media#hkepc",
        source: ["/:category?"],
        target: "/hkepc/:category?",
      },
      {
        title: "HKEPC 电脑领域",
        docs: "https://docs.rsshub.app/routes/new-media#hkepc",
        source: ["/"],
        target: "/hkepc",
      },
    ],
  },
  "hket.com": {
    _name: "香港经济日报",
    china: [
      {
        title: "新闻",
        docs: "https://docs.rsshub.app/routes/traditional-media#xiang-gang-jing-ji-ri-bao",
        source: ["/:category/*"],
        target: "/hket/:category",
      },
    ],
    inews: [
      {
        title: "新闻",
        docs: "https://docs.rsshub.app/routes/traditional-media#xiang-gang-jing-ji-ri-bao",
        source: ["/:category/*"],
        target: "/hket/:category",
      },
    ],
    topick: [
      {
        title: "新闻",
        docs: "https://docs.rsshub.app/routes/traditional-media#xiang-gang-jing-ji-ri-bao",
        source: ["/:category/*"],
        target: "/hket/:category",
      },
    ],
    wealth: [
      {
        title: "新闻",
        docs: "https://docs.rsshub.app/routes/traditional-media#xiang-gang-jing-ji-ri-bao",
        source: ["/:category/*"],
        target: "/hket/:category",
      },
    ],
    www: [
      {
        title: "新闻",
        docs: "https://docs.rsshub.app/routes/traditional-media#xiang-gang-jing-ji-ri-bao",
        source: ["/"],
        target: "/hket",
      },
    ],
  },
  "hkjunkcall.com": {
    _name: "HKJunkCall資訊中心",
    ".": [
      {
        title: "近期資訊",
        docs: "https://docs.rsshub.app/routes/new-media#hkjunkcall-zi-xun-zhong-xin-jin-qi-zi-xun",
        source: ["/"],
        target: "/hkjunkcall",
      },
    ],
  },
  "hljucm.net": {
    _name: "黑龙江中医药大学",
    yjsy: [
      {
        title: "研究生院",
        docs: "https://docs.rsshub.app/routes/university#hei-long-jiang-zhong-yi-yao-da-xue",
        source: ["/index/:category", "/index"],
        target: (params) =>
          `/hljucm/yjsy/${params.category.replace(".htm", "")}`,
      },
    ],
  },
  "voc.com.cn": {
    _name: "华声在线",
    ".": [
      {
        title: "湖南日报",
        docs: "https://docs.rsshub.app/routes/journal#hu-nan-ri-bao-dian-zi-kan-wu",
        source: ["/"],
        target: "/hnrb/:id",
      },
    ],
  },
  "hnu.edu.cn": {
    _name: "湖南大学",
    scc: [
      {
        title: "校园招聘",
        docs: "https://docs.rsshub.app/routes/university#hu-nan-da-xue",
        target: "/hnu/careers",
      },
    ],
  },
  "dh.gov.hk": {
    _name: "香港卫生署",
    ".": [
      {
        title: "新闻公报",
        docs: "https://docs.rsshub.app/routes/government#xiang-gang-wei-sheng-shu-xin-wen-gong-bao",
        source: ["/"],
        target: "/hongkong/dh/:language?",
      },
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/government#xiang-gang-wei-sheng-fang-hu-zhong-xin-fen-lei",
        source: ["/"],
        target: "/hongkong/chp/:category?/:language?",
      },
    ],
  },
  "hostmonit.com": {
    _name: "全球主机监控",
    stock: [
      {
        title: "CloudFlareYes",
        docs: "https://docs.rsshub.app/routes/other#quan-qiu-zhu-ji-jian-kong-cloudflareyes",
        source: ["/:type"],
        target: (params) => {
          const type = params.type

          return `/hostmonit/${type}`
        },
      },
    ],
  },
  "hotchina.news": {
    _name: "辛華社",
    ".": [
      {
        title: "首页",
        docs: "https://docs.rsshub.app/routes/new-media#xin-hua-she-shou-ye",
        source: ["/"],
        target: "/hotchina",
      },
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/new-media#xin-hua-she-fen-lei",
        source: ["/archives/category/:id", "/"],
        target: "/hotchina/category/:id?",
      },
      {
        title: "标签",
        docs: "https://docs.rsshub.app/routes/new-media#xin-hua-she-biao-qian",
        source: ["/archives/tag/:id", "/"],
        target: "/hotchina/tag/:id?",
      },
    ],
  },
  "hotukdeals.com": {
    _name: "hotukdeals",
    www: [
      {
        title: "highlights",
        docs: "https://docs.rsshub.app/routes/shopping#hotukdeals",
        source: ["/"],
        target: "/hotukdeals/highlights",
      },
      {
        title: "hot",
        docs: "https://docs.rsshub.app/routes/shopping#hotukdeals",
        source: ["/"],
        target: "/hotukdeals/hot",
      },
      {
        title: "new",
        docs: "https://docs.rsshub.app/routes/shopping#hotukdeals",
        source: ["/"],
        target: "/hotukdeals/new",
      },
      {
        title: "discussed",
        docs: "https://docs.rsshub.app/routes/shopping#hotukdeals",
        source: ["/"],
        target: "/hotukdeals/discussed",
      },
      {
        title: "hottest",
        docs: "https://docs.rsshub.app/routes/shopping#hotukdeals",
        source: ["/"],
        target: "/hotukdeals/hottest",
      },
    ],
  },
  "houxu.app": {
    _name: "后续",
    ".": [
      {
        title: "热点",
        docs: "https://docs.rsshub.app/routes/new-media#hou-xu-re-dian",
        source: ["/"],
        target: "/houxu",
      },
      {
        title: "跟踪",
        docs: "https://docs.rsshub.app/routes/new-media#hou-xu-gen-zong",
        source: ["/memory", "/"],
        target: "/houxu/memory",
      },
      {
        title: "专栏",
        docs: "https://docs.rsshub.app/routes/new-media#hou-xu-zhuan-lan",
        source: ["/events", "/"],
        target: "/houxu/events",
      },
      {
        title: "Live",
        docs: "https://docs.rsshub.app/routes/new-media#hou-xu-live",
        source: ["/lives/:id", "/"],
        target: "/houxu/lives/:id",
      },
    ],
  },
  "hrbeu.edu.cn": {
    _name: "哈尔滨工程大学",
    yjsy: [
      {
        title: "研究生院 - 通知公告",
        docs: "https://docs.rsshub.app/routes/university#ha-er-bin-gong-cheng-da-xue",
        source: "/*",
        target: "/heu/yjsy/announcement",
      },
      {
        title: "研究生院 - 新闻动态",
        docs: "https://docs.rsshub.app/routes/university#ha-er-bin-gong-cheng-da-xue",
        source: "/*",
        target: "/heu/yjsy/news",
      },
      {
        title: "研究生院 - 国家公派项目",
        docs: "https://docs.rsshub.app/routes/university#ha-er-bin-gong-cheng-da-xue",
        source: "/*",
        target: "/heu/yjsy/gjgp",
      },
      {
        title: "研究生院 - 国际合作与交流项目",
        docs: "https://docs.rsshub.app/routes/university#ha-er-bin-gong-cheng-da-xue",
        source: "/*",
        target: "/heu/yjsy/gjhz",
      },
    ],
    job: [
      {
        title: "就业服务平台 - 通知公告",
        docs: "https://docs.rsshub.app/routes/university#ha-er-bin-gong-cheng-da-xue",
        source: "/*",
        target: "/heu/job/tzgg",
      },
    ],
    uae: [
      {
        title: "水声学院 - 新闻动态",
        docs: "https://docs.rsshub.app/routes/university#ha-er-bin-gong-cheng-da-xue",
        source: "/*",
        target: "/heu/shuisheng/xwdt",
      },
      {
        title: "研究生院 - 通知公告",
        docs: "https://docs.rsshub.app/routes/university#ha-er-bin-gong-cheng-da-xue",
        source: "/*",
        target: "/heu/shuisheng/tzgg",
      },
    ],
  },
  "hrbust.edu.cn": {
    _name: "哈尔滨理工大学",
    jwzx: [
      {
        title: "教务处",
        docs: "https://docs.rsshub.app/routes/university#ha-er-bin-li-gong-da-xue",
        source: "/homepage/*",
        target: (params, url) =>
          `/hrbust/jwzx/${new URL(url).searchParams.get("columnId")}`,
      },
    ],
  },
  "huangz.me": {
    _name: "黄健宏博客",
    blog: [
      {
        title: "文章",
        docs: "https://docs.rsshub.app/routes/blog#huang-jian-hong-bo-ke",
        source: ["/*.html"],
        target: "/huangz",
      },
    ],
  },
  "huanqiu.com": {
    _name: "环球网",
    ".": [
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/traditional-media#huan-qiu",
        source: "/",
        target: "/news/huanqiu/:category?",
      },
    ],
  },
  "huggingface.co": {
    _name: "Hugging Face",
    ".": [
      {
        title: "Daily Papers",
        docs: "https://docs.rsshub.app/routes/programming#huggingface",
        source: ["/papers", "/"],
        target: "/huggingface/daily-papers",
      },
    ],
  },
  "hunanpea.com": {
    _name: "湖南人事考试网",
    rsks: [
      {
        title: "公告",
        docs: "https://docs.rsshub.app/routes/study#hu-nan-ren-shi-kao-shi-wang",
        source: ["/Category/:guid/ArticlesByCategory.do"],
        target: "/hunanpea/rsks/:guid",
      },
    ],
  },
  "hunau.edu.cn": {
    _name: "湖南农业大学",
    gfxy: [
      {
        title: "公共管理与法学学院",
        docs: "https://docs.rsshub.app/routes/university#hu-nan-nong-ye-da-xue",
        source: ["/", "tzgg", "/:category"],
        target: "/:category",
      },
    ],
    ied: [
      {
        title: "国际交流与合作处",
        docs: "https://docs.rsshub.app/routes/university#hu-nan-nong-ye-da-xue",
        source: ["/", "/xwzx/ggtz", "/:type/:category"],
        target: "/:type/:category",
      },
    ],
    jwc: [
      {
        title: "教务处",
        docs: "https://docs.rsshub.app/routes/university#hu-nan-nong-ye-da-xue",
        source: ["/", "tzgg", "/:category"],
        target: "/:category",
      },
    ],
    xky: [
      {
        title: "信息与智能科学技术学院",
        docs: "https://docs.rsshub.app/routes/university#hu-nan-nong-ye-da-xue",
        source: ["/", "tzgg_8472", "/:category"],
        target: "/:category",
      },
    ],
  },
  "huoxian.cn": {
    _name: "火线",
    zone: [
      {
        title: "Zone",
        docs: "https://docs.rsshub.app/routes/bbs#huo-xian",
      },
    ],
  },
  "hupu.com": {
    _name: "虎扑",
    "": [
      {
        title: "首页",
        docs: "https://docs.rsshub.app/routes/bbs#hu-pu-shou-ye",
        source: ["/:category", "/"],
        target: "/hupu/:category",
      },
    ],
    bbs: [
      {
        title: "热帖",
        docs: "https://docs.rsshub.app/routes/bbs#hu-pu-re-tie",
        source: ["/:id"],
        target: "/hupu/all/:id",
      },
    ],
    m: [
      {
        title: "首页",
        docs: "https://docs.rsshub.app/routes/bbs#hu-pu-shou-ye",
        source: ["/:category", "/"],
        target: "/hupu/:category",
      },
      {
        title: "社区",
        docs: "https://docs.rsshub.app/routes/bbs#hu-pu-she-qu",
        source: ["/bbs/:id", "/"],
        target: "/hupu/bbs/:id/:order",
      },
    ],
  },
  "hust.edu.cn": {
    _name: "华中科技大学",
    aia: [
      {
        title: "人工智能和自动化学院新闻",
        docs: "https://docs.rsshub.app/routes/university#hua-zhong-ke-ji-da-xue",
        source: ["/xyxw.htm", "/"],
        target: "/hust/aia/news",
      },
      {
        title: "人工智能和自动化学院通知",
        docs: "https://docs.rsshub.app/routes/university#hua-zhong-ke-ji-da-xue",
        source: ["/tzgg/:type", "/tzgg.htm", "/"],
        target: (params) =>
          `/hust/aia/notice${params.type ? `/${params.type}` : ""}`,
      },
    ],
    gszs: [
      {
        title: "研究生院通知公告",
        docs: "https://docs.rsshub.app/routes/university#hua-zhong-ke-ji-da-xue",
        source: ["/zsxx/ggtz.htm", "/"],
        target: "/hust/yjs",
      },
    ],
  },
  "huxiu.com": {
    _name: "虎嗅",
    ".": [
      {
        title: "资讯",
        docs: "https://docs.rsshub.app/routes/new-media#hu-xiu-zi-xun",
        source: ["/article"],
        target: "/huxiu/article",
      },
      {
        title: "频道",
        docs: "https://docs.rsshub.app/routes/new-media#hu-xiu-pin-dao",
        source: ["/channel"],
        target: (params) =>
          `/huxiu/channel/${params.id.replace(/\.html$/, "")}`,
      },
      {
        title: "24小时",
        docs: "https://docs.rsshub.app/routes/new-media#hu-xiu-24-xiao-shi",
        source: ["/moment"],
        target: "/huxiu/moment",
      },
      {
        title: "标签",
        docs: "https://docs.rsshub.app/routes/new-media#hu-xiu-biao-qian",
        source: ["/tags/:id"],
        target: (params) => `/huxiu/tag/${params.id.replace(/\.html$/, "")}`,
      },
      {
        title: "搜索",
        docs: "https://docs.rsshub.app/routes/new-media#hu-xiu-sou-suo",
        source: ["/"],
        target: "/huxiu/search/:keyword",
      },
      {
        title: "作者",
        docs: "https://docs.rsshub.app/routes/new-media#hu-xiu-zuo-zhe",
        source: ["/member/:id/:type"],
        target: (params) =>
          `/huxiu/member/${params.id}/${params.type.replace(/\.html$/, "")}`,
      },
      {
        title: "文集",
        docs: "https://docs.rsshub.app/routes/new-media#hu-xiu-wen-ji",
        source: ["/collection/:id"],
        target: (params) =>
          `/huxiu/collection/${params.id.replace(/\.html$/, "")}`,
      },
      {
        title: "简报",
        docs: "https://docs.rsshub.app/routes/new-media#hu-xiu-jian-bao",
        source: ["/briefColumn/:id", "/"],
        target: (params) =>
          `/huxiu/briefcolumn/${params.id.replace(/\.html$/, "")}`,
      },
    ],
  },
  "hyqss.cn": {
    _name: "衡阳全搜索",
    ".": [
      {
        title: "衡阳日报",
        docs: "https://docs.rsshub.app/routes/journal#heng-yang-quan-sou-suo-heng-yang-ri-bao",
        source: ["/"],
        target: "/hnrb/hyrb/:id?",
      },
      {
        title: "衡阳晚报",
        docs: "https://docs.rsshub.app/routes/journal#heng-yang-quan-sou-suo-heng-yang-wan-bao",
        source: ["/"],
        target: "/hnrb/hywb/:id?",
      },
    ],
    epaper: [
      {
        title: "衡阳日报",
        docs: "https://docs.rsshub.app/routes/journal#heng-yang-quan-sou-suo-heng-yang-ri-bao",
        source: ["/"],
        target: "/hnrb/hyrb/:id?",
      },
      {
        title: "衡阳晚报",
        docs: "https://docs.rsshub.app/routes/journal#heng-yang-quan-sou-suo-heng-yang-wan-bao",
        source: ["/"],
        target: "/hnrb/hywb/:id?",
      },
    ],
  },
  "i-cable.com": {
    _name: "有線寬頻 i-CABLE",
    ".": [
      {
        title: "有線新聞 | Cable News",
        docs: "https://docs.rsshub.app/routes/traditional-media#you-xian-kuan-pin-i-cable",
        source: ["/category/*path", "/"],
        target: (params) =>
          `/i-cable${params.path ? decodeURIComponent(params.path.slice(params.path.lastIndexOf("/"))) : ""}`,
      },
    ],
  },
  "ianspriggs.com": {
    _name: "Ian Spriggs",
    ".": [
      {
        title: "Category",
        docs: "https://docs.rsshub.app/routes/blog#ian-spriggs-category",
        source: ["/:category"],
        target: (params) => {
          const category = params.category

          return `/ianspriggs${category ? `/${category}` : ""}`
        },
      },
    ],
  },
  "ibc.co.jp": {
    _name: "IBC 岩手放送",
    ".": [
      {
        title: "イヤーマイッタマイッタ",
        docs: "https://docs.rsshub.app/routes/multimedia#ibc-yan-shou-fang-song",
        source: ["/radio/maitta/audio", "/"],
        target: "/ibc/maitta",
      },
      {
        title: "ラジオ",
        docs: "https://docs.rsshub.app/routes/multimedia#ibc-yan-shou-fang-song",
        source: ["/radio/:id/audio", "/"],
        target: "/ibc/radio/:id?",
      },
    ],
  },
  "icac.org.hk": {
    _name: "香港廉政公署",
    ".": [
      {
        title: "新闻公布",
        docs: "https://docs.rsshub.app/routes/government#xiang-gang-lian-zheng-gong-shu",
        source: ["/:lang/press/index.html"],
        target: "/icac/news/:lang",
      },
    ],
  },
  "icbc.com.cn": {
    _name: "中国工商银行",
    ".": [
      {
        title: "外汇牌价",
        docs: "https://docs.rsshub.app/routes/other#zhong-guo-gong-shang-yin-hang",
        source: ["/column/1438058341489590354.html"],
        target: "/icbc/whpj",
      },
    ],
  },
  "idolypride.jp": {
    _name: "偶像荣耀",
    ".": [
      {
        title: "新闻",
        docs: "https://docs.rsshub.app/routes/anime#ou-xiang-rong-yao",
        source: "/news",
        target: "/idolypride/news",
      },
    ],
  },
  "ieee.org": {
    _name: "IEEE",
    www: [
      {
        title: "Journal",
        docs: "https://docs.rsshub.app/routes/journal#ieee-xplore",
        source: "/*",
        target: (params, url) =>
          `/ieee/journal/${new URL(url).searchParams.get("punumber")}`,
      },
      {
        title: "Recent",
        docs: "https://docs.rsshub.app/routes/journal#ieee-xplore",
        source: "/*",
        target: (params, url) =>
          `/ieee/journal/${new URL(url).searchParams.get("punumber")}/recent`,
      },
      {
        title: "Early Access Journal",
        docs: "https://docs.rsshub.app/routes/journal#ieee-xplore",
        source: "/*",
        target: (params, url) =>
          `/ieee/journal/${new URL(url).searchParams.get("isnumber")}/earlyaccess`,
      },
    ],
  },
  "ieee-security.org": {
    _name: "IEEE Computer Society",
    ".": [
      {
        title: "IEEE Symposium on Security and Privacy",
        docs: "https://docs.rsshub.app/routes/journal#ieee-computer-society",
        source: ["/TC/SP-Index.html", "/"],
        target: "/ieee-security/security-privacy",
      },
    ],
  },
  "neea.cn": {
    _name: "中国教育考试网",
    jlpt: [
      {
        title: "教育部考试中心日本语能力测试重要通知",
        docs: "https://docs.rsshub.app/routes/study#jiao-yu-bu-kao-shi-zhong-xin-ri-ben-yu-neng-li-ce-shi-zhong-yao-tong-zhi",
        source: ["/"],
        target: "/neea/jlpt",
      },
    ],
  },
  "ifeng.com": {
    _name: "凤凰网",
    feng: [
      {
        title: "大风号",
        docs: "https://docs.rsshub.app/routes/new-media#feng-huang-wang",
        source: ["/author/:id"],
        target: "/ifeng/feng/:id/doc",
      },
    ],
    news: [
      {
        title: "资讯",
        docs: "https://docs.rsshub.app/routes/new-media#feng-huang-wang-zi-xun",
        target: (params, url) =>
          `/ifeng/news${new URL(url).toString().match(/ifeng\.com(.*?)$/)[1]}`,
      },
    ],
    ishare: [
      {
        title: "大风号",
        docs: "https://docs.rsshub.app/routes/new-media#feng-huang-wang",
        source: ["/mediaShare/home/:id/media"],
        target: "/ifeng/feng/:id/doc",
      },
    ],
  },
  "ifi-audio.com": {
    _name: "IFI audio",
    ".": [
      {
        title: "Download Hub",
        docs: "https://docs.rsshub.app/routes/program-update#ifi-audio",
      },
    ],
  },
  "iguoguo.net": {
    _name: "爱果果",
    ".": [
      {
        title: "最新H5",
        docs: "https://docs.rsshub.app/routes/design#ai-guo-guo-h5",
      },
    ],
  },
  "iiilab.com": {
    _name: "人人都是自媒体",
    www: [
      {
        title: "发现",
        docs: "https://docs.rsshub.app/routes/new-media#ren-ren-dou-shi-zi-mei-ti",
        source: "/",
        target: "/iiilab",
      },
    ],
  },
  "ikea.com": {
    _name: "IKEA 宜家",
    ".": [
      {
        title: "英国 - 商品上新",
        docs: "https://docs.rsshub.app/routes/shopping#ikea-yi-jia",
        source: ["/gb/en/new/new-products/", "/"],
        target: "/ikea/gb/new",
      },
      {
        title: "英国 - 促销",
        docs: "https://docs.rsshub.app/routes/shopping#ikea-yi-jia",
        source: ["/gb/en/offers", "/"],
        target: "/ikea/gb/offer",
      },
    ],
  },
  "ikea.cn": {
    _name: "IKEA 宜家",
    ".": [
      {
        title: "中国 - 当季新品推荐",
        docs: "https://docs.rsshub.app/routes/shopping#ikea-yi-jia",
        source: ["/cn/zh/new/", "/"],
        target: "/ikea/cn/new",
      },
      {
        title: "中国 - 低价优选",
        docs: "https://docs.rsshub.app/routes/shopping#ikea-yi-jia",
        source: [
          "/cn/zh/campaigns/wo3-men2-de-chao1-zhi2-di1-jia4-pub8b08af40",
          "/",
        ],
        target: "/ikea/cn/low_price",
      },
      {
        title: "中国 - 会员特惠",
        docs: "https://docs.rsshub.app/routes/shopping#ikea-yi-jia",
        source: ["/cn/zh/offers/family-offers", "/"],
        target: "/ikea/cn/family_offers",
      },
    ],
  },
  "imagemagick.org": {
    _name: "Changelog",
    ".": [
      {
        title: "ChangeLog",
        docs: "https://docs.rsshub.app/routes/program-update#imagemagick-changelog",
        source: ["/script/download.php", "/script", "/"],
        target: "/imagemagick/changelog",
      },
    ],
  },
  "imiker.com": {
    _name: "米课",
    ".": [
      {
        title: "米课圈精华",
        docs: "https://docs.rsshub.app/routes/new-media#mi-ke-mi-ke-quan-jing-hua",
        source: ["/explore/find"],
        target: "/imiker/ask/jinghua",
      },
    ],
  },
  "independent.co.uk": {
    _name: "PS5 stock UK - The Independent",
    www: [
      {
        title: "News",
        docs: "https://docs.rsshub.app/routes/shopping#the-independent",
        source: [
          "/extras/indybest/gadgets-tech/video-games-consoles/ps5-stock-uk-restock-live-today-b1938965.html",
        ],
        target: "/ps5-stock-uk",
      },
    ],
  },
  "indiansinkuwait.com": {
    _name: "Indians in Kuwait",
    ".": [
      {
        title: "News",
        docs: "https://docs.rsshub.app/routes/en/new-media#indians-in-kuwait",
        source: ["/latest-news", "/"],
        target: "/indiansinkuwait/latest",
      },
    ],
  },
  "inewsweek.cn": {
    _name: "中国新闻周刊",
    ".": [
      {
        title: "栏目",
        docs: "https://docs.rsshub.app/routes/traditional-media#zhong-guo-xin-wen-zhou-kan",
        source: ["/:channel", "/"],
        target: "/inewsweek/:channel",
      },
    ],
  },
  "infoq.cn": {
    _name: "InfoQ 中文",
    ".": [
      {
        title: "推荐",
        docs: "https://docs.rsshub.app/routes/new-media#infoq-zhong-wen",
        source: ["/"],
        target: "/infoq/recommend",
      },
      {
        title: "话题",
        docs: "https://docs.rsshub.app/routes/new-media#infoq-zhong-wen",
        source: ["/topic/:id"],
        target: "/infoq/topic/:id",
      },
    ],
  },
  "informs.org": {
    _name: "INFORMS",
    pubsonline: [
      {
        title: "Decision Analysis",
        docs: "https://docs.rsshub.app/routes/journal#ieee-xplore",
        source: ["/journal/deca", "/toc/deca/0/0"],
        target: "/informs/deca",
      },
      {
        title: "Marketing Science",
        docs: "https://docs.rsshub.app/routes/journal#ieee-xplore",
        source: ["/journal/mksc", "/toc/mksc/0/0"],
        target: "/informs/mksc",
      },
      {
        title: "Information Systems Research",
        docs: "https://docs.rsshub.app/routes/journal#ieee-xplore",
        source: ["/journal/isrc", "/toc/isrc/0/0"],
        target: "/informs/isrc",
      },
      {
        title: "Mathematics of Operations Research",
        docs: "https://docs.rsshub.app/routes/journal#ieee-xplore",
        source: ["/journal/moor", "/toc/moor/0/0"],
        target: "/informs/moor",
      },
      {
        title: "INFORMS Journal on Applied Analytics",
        docs: "https://docs.rsshub.app/routes/journal#ieee-xplore",
        source: ["/journal/inte", "/toc/inte/0/0"],
        target: "/informs/inte",
      },
      {
        title: "Operations Research",
        docs: "https://docs.rsshub.app/routes/journal#ieee-xplore",
        source: ["/journal/opre", "/toc/opre/0/0"],
        target: "/informs/opre",
      },
      {
        title: "INFORMS Journal on Computing",
        docs: "https://docs.rsshub.app/routes/journal#ieee-xplore",
        source: ["/journal/ijoc", "/toc/ijoc/0/0"],
        target: "/informs/ijoc",
      },
      {
        title: "Organization Science",
        docs: "https://docs.rsshub.app/routes/journal#ieee-xplore",
        source: ["/journal/orsc", "/toc/orsc/0/0"],
        target: "/informs/orsc",
      },
      {
        title: "INFORMS Journal on Data Science",
        docs: "https://docs.rsshub.app/routes/journal#ieee-xplore",
        source: ["/journal/ijds", "/toc/ijds/0/0"],
        target: "/informs/ijds",
      },
      {
        title: "Service Science",
        docs: "https://docs.rsshub.app/routes/journal#ieee-xplore",
        source: ["/journal/serv", "/toc/serv/0/0"],
        target: "/informs/serv",
      },
      {
        title: "INFORMS Journal on Optimization",
        docs: "https://docs.rsshub.app/routes/journal#ieee-xplore",
        source: ["/journal/ijoo", "/toc/ijoo/0/0"],
        target: "/informs/ijoo",
      },
      {
        title: "Stochastic Systems",
        docs: "https://docs.rsshub.app/routes/journal#ieee-xplore",
        source: ["/journal/stsy", "/toc/stsy/0/0"],
        target: "/informs/stsy",
      },
      {
        title: "INFORMS Transactions on Education",
        docs: "https://docs.rsshub.app/routes/journal#ieee-xplore",
        source: ["/journal/ited", "/toc/ited/0/0"],
        target: "/informs/ited",
      },
      {
        title: "Strategy Science",
        docs: "https://docs.rsshub.app/routes/journal#ieee-xplore",
        source: ["/journal/stsc", "/toc/stsc/0/0"],
        target: "/informs/stsc",
      },
      {
        title: "Management Science",
        docs: "https://docs.rsshub.app/routes/journal#ieee-xplore",
        source: ["/journal/mnsc", "/toc/mnsc/0/0"],
        target: "/informs/mnsc",
      },
      {
        title: "Transportation Science",
        docs: "https://docs.rsshub.app/routes/journal#ieee-xplore",
        source: ["/journal/trsc", "/toc/trsc/0/0"],
        target: "/informs/trsc",
      },
      {
        title: "Manufacturing & Service Operations Management",
        docs: "https://docs.rsshub.app/routes/journal#ieee-xplore",
        source: ["/journal/msom", "/toc/msom/0/0"],
        target: "/informs/msom",
      },
    ],
  },
  "inoreader.com": {
    _name: "Inoreader",
    ".": [
      {
        title: "HTML Clip",
        docs: "https://docs.rsshub.app/routes/reading#inoreader",
        source: ["/stream/user/:user/tag/:tag/*"],
        target: (params, url) => {
          const origin = new URL(url)
          const limit = origin.searchParams.get("n")
          return (
            `/inoreader/html_clip/${params.user}/${params.tag}` +
            (limit ? `?limit=${limit}` : "")
          )
        },
      },
      {
        title: "RSS",
        docs: "https://docs.rsshub.app/routes/reading#inoreader",
        source: ["/stream/user/:user/tag/:tag"],
        target: (params) => `/inoreader/rss/${params.user}/${params.tag}`,
      },
    ],
  },
  "instagram.com": {
    _name: "Instagram",
    www: [
      {
        title: "用户",
        docs: "https://docs.rsshub.app/routes/social-media#instagram",
        source: ["/:id"],
        target: "/instagram/user/:id",
      },
      {
        title: "标签",
        docs: "https://docs.rsshub.app/routes/social-media#instagram",
        source: ["/explore/tags/:key"],
        target: "/instagram/tags/:key",
      },
    ],
  },
  "instructables.com": {
    _name: "Instructables",
    ".": [
      {
        title: "All Projects - Instructables",
        docs: "https://docs.rsshub.app/routes/other#instructables",
        source: ["/projects"],
        target: "/instructables/projects",
      },
      {
        title: "Projects - Instructables",
        docs: "https://docs.rsshub.app/routes/other#instructables",
        source: ["/:category/projects"],
        target: (params) => `/instructables/projects/${params.category}`,
      },
    ],
  },
  "iqilu.com": {
    _name: "齐鲁网",
    v: [
      {
        title: "电视节目",
        docs: "https://docs.rsshub.app/routes/traditional-media#qi-lu-wang-dian-shi-jie-mu",
        source: ["/:category*"],
        target: (params) => {
          const category = params.category

          return `/iqilu/v${category ? `/${category}` : ""}`
        },
      },
      {
        title: "山东新闻联播",
        docs: "https://docs.rsshub.app/routes/traditional-media#qi-lu-wang-dian-shi-jie-mu",
        source: ["/sdws/sdxwlb"],
        target: "/iqilu/v/sdws/sdxwlb",
      },
      {
        title: "闪电大视野",
        docs: "https://docs.rsshub.app/routes/traditional-media#qi-lu-wang-dian-shi-jie-mu",
        source: ["/ggpd/sddsy"],
        target: "/iqilu/v/ggpd/sddsy",
      },
      {
        title: "山东三农新闻联播",
        docs: "https://docs.rsshub.app/routes/traditional-media#qi-lu-wang-dian-shi-jie-mu",
        source: ["/nkpd/snxw"],
        target: "/iqilu/v/nkpd/snxw",
      },
      {
        title: "每日新闻",
        docs: "https://docs.rsshub.app/routes/traditional-media#qi-lu-wang-dian-shi-jie-mu",
        source: ["/qlpd/mrxw"],
        target: "/iqilu/v/qlpd/mrxw",
      },
      {
        title: "新闻午班车",
        docs: "https://docs.rsshub.app/routes/traditional-media#qi-lu-wang-dian-shi-jie-mu",
        source: ["/ggpd/xwwbc"],
        target: "/iqilu/v/ggpd/xwwbc",
      },
      {
        title: "戏宇宙",
        docs: "https://docs.rsshub.app/routes/traditional-media#qi-lu-wang-dian-shi-jie-mu",
        source: ["/sdws/xyz/"],
        target: "/iqilu/v/sdws/xyz/",
      },
      {
        title: "中国礼 中国乐",
        docs: "https://docs.rsshub.app/routes/traditional-media#qi-lu-wang-dian-shi-jie-mu",
        source: ["/qlpd/zglzgy"],
        target: "/iqilu/v/qlpd/zglzgy",
      },
      {
        title: "超级语文课",
        docs: "https://docs.rsshub.app/routes/traditional-media#qi-lu-wang-dian-shi-jie-mu",
        source: ["/sdws/cjywk"],
        target: "/iqilu/v/sdws/cjywk",
      },
      {
        title: "文物里的山东",
        docs: "https://docs.rsshub.app/routes/traditional-media#qi-lu-wang-dian-shi-jie-mu",
        source: ["/yspd/wwldsd"],
        target: "/iqilu/v/yspd/wwldsd",
      },
      {
        title: "拉呱",
        docs: "https://docs.rsshub.app/routes/traditional-media#qi-lu-wang-dian-shi-jie-mu",
        source: ["/qlpd/l0"],
        target: "/iqilu/v/qlpd/l0",
      },
      {
        title: "生活帮",
        docs: "https://docs.rsshub.app/routes/traditional-media#qi-lu-wang-dian-shi-jie-mu",
        source: ["/shpd/shb"],
        target: "/iqilu/v/shpd/shb",
      },
      {
        title: "快乐大赢家",
        docs: "https://docs.rsshub.app/routes/traditional-media#qi-lu-wang-dian-shi-jie-mu",
        source: ["/zypd/kldyj"],
        target: "/iqilu/v/zypd/kldyj",
      },
      {
        title: "乡村季风",
        docs: "https://docs.rsshub.app/routes/traditional-media#qi-lu-wang-dian-shi-jie-mu",
        source: ["/nkpd/xcjf"],
        target: "/iqilu/v/nkpd/xcjf",
      },
      {
        title: "健康是1",
        docs: "https://docs.rsshub.app/routes/traditional-media#qi-lu-wang-dian-shi-jie-mu",
        source: ["/ggpd/jks1"],
        target: "/iqilu/v/ggpd/jks1",
      },
      {
        title: "此时此刻",
        docs: "https://docs.rsshub.app/routes/traditional-media#qi-lu-wang-dian-shi-jie-mu",
        source: ["/sdws/cishicike"],
        target: "/iqilu/v/sdws/cishicike",
      },
    ],
  },
  "iq.com": {
    _name: "爱奇艺",
    ".": [
      {
        title: "剧集",
        docs: "https://docs.rsshub.app/routes/multimedia#ai-qi-yi",
        source: ["/album/:id"],
        target: "/iqiyi/:category/:id",
      },
    ],
  },
  "iqiyi.com": {
    _name: "爱奇艺",
    ".": [
      {
        title: "用户视频",
        docs: "https://docs.rsshub.app/routes/multimedia#ai-qi-yi",
        source: ["/u/:uid/*"],
        target: "/iqiyi/user/video/:uid",
      },
    ],
  },
  "iqnew.com": {
    _name: "爱 Q 生活网",
    ".": [
      {
        title: "最近更新",
        docs: "https://docs.rsshub.app/routes/others#ai-q-sheng-huo-wang",
        source: ["/post/new_100/", "/"],
        target: "/iqnew/latest",
      },
    ],
  },
  "iresearch.com.cn": {
    _name: "艾瑞",
    www: [
      {
        title: "研究报告",
        docs: "https://docs.rsshub.app/routes/other#ai-rui-chan-ye-yan-jiu-bao-gao",
        source: ["/report.shtml"],
        target: "/iresearch/report",
      },
      {
        title: "周度市场观察",
        docs: "https://docs.rsshub.app/routes/other#ai-rui-zhou-du-shi-chang-guan-cha",
        source: ["/report.shtml"],
        target: (_, url) =>
          new URL(url).searchParams.get("type") === "3"
            ? "/iresearch/weekly"
            : null,
      },
    ],
  },
  "islander.cc": {
    _name: "島民衛星 Islander",
    ".": [
      {
        title: "事件分析",
        docs: "https://docs.rsshub.app/routes/new-media#dao-min-wei-xing-islander",
        source: ["/"],
        target: "/islander/search",
      },
      {
        title: "單日焦點",
        docs: "https://docs.rsshub.app/routes/new-media#dao-min-wei-xing-islander",
        source: ["/top30event", "/"],
        target: "/islander/top30event",
      },
    ],
  },
  "issuehunt.io": {
    _name: "Issue Hunt",
    ".": [
      {
        title: "项目悬赏",
        docs: "https://docs.rsshub.app/routes/programming#issue-hunt-xiang-mu-xuan-shang",
        source: "/r/:username/:repo",
        target: ({ username, repo }) => `/issuehunt/funded/${username}/${repo}`,
      },
    ],
  },
  "itch.io": {
    _name: "itch.io",
    ".": [
      {
        title: "Browse",
        docs: "https://docs.rsshub.app/routes/game#itch-io-browse",
        source: ["/"],
        target: (params, url) =>
          `/itch${new URL(url).toString().split("itch.io").pop()}`,
      },
      {
        title: "Developer Logs",
        docs: "https://docs.rsshub.app/routes/game#itch-io-developer-logs",
        source: ["/"],
        target: (params, url) => {
          const matches = new URL(url)
            .toString()
            .match(/\/\/(.*?)\.itch\.io\/(.*?)\/devlog/)
          return `/itch/devlog/${matches[1]}/${matches[2]}`
        },
      },
      {
        title: "Posts",
        docs: "https://docs.rsshub.app/routes/game#itch-io-posts",
        source: ["/t/:topic/:id"],
        target: "/itch/posts/:topic/:id",
      },
    ],
  },
  "ithome.com": {
    _name: "IT 之家",
    ".": [
      {
        title: "标签",
        docs: "https://docs.rsshub.app/routes/new-media#it-zhi-jia-zhuan-ti",
        source: ["/tag/:name"],
        target: "/ithome/tag/:name",
      },
      {
        title: "专题",
        docs: "https://docs.rsshub.app/routes/new-media#it-zhi-jia-zhuan-ti",
        source: ["/zt/:id"],
        target: "/ithome/zt/:id",
      },
      {
        title: "24 小时阅读榜",
        docs: "https://docs.rsshub.app/routes/new-media#it-zhi-jia-re-bang",
        source: ["/*"],
        target: "/ithome/ranking/24h",
      },
      {
        title: "7 天最热",
        docs: "https://docs.rsshub.app/routes/new-media#it-zhi-jia-re-bang",
        source: ["/*"],
        target: "/ithome/ranking/7days",
      },
      {
        title: "月榜",
        docs: "https://docs.rsshub.app/routes/new-media#it-zhi-jia-re-bang",
        source: ["/*"],
        target: "/ithome/ranking/monthly",
      },
    ],
    it: [
      {
        title: "IT 资讯",
        docs: "https://docs.rsshub.app/routes/new-media#it-zhi-jia-fen-lei-zi-xun",
        source: "/",
        target: "/ithome/it",
      },
    ],
    soft: [
      {
        title: "软件之家",
        docs: "https://docs.rsshub.app/routes/new-media#it-zhi-jia-fen-lei-zi-xun",
        source: "/",
        target: "/ithome/soft",
      },
    ],
    win10: [
      {
        title: "win10 之家",
        docs: "https://docs.rsshub.app/routes/new-media#it-zhi-jia-fen-lei-zi-xun",
        source: "/",
        target: "/ithome/win10",
      },
    ],
    win11: [
      {
        title: "win11 之家",
        docs: "https://docs.rsshub.app/routes/new-media#it-zhi-jia-fen-lei-zi-xun",
        source: "/",
        target: "/ithome/win11",
      },
    ],
    iphone: [
      {
        title: "iphone 之家",
        docs: "https://docs.rsshub.app/routes/new-media#it-zhi-jia-fen-lei-zi-xun",
        source: "/",
        target: "/ithome/iphone",
      },
    ],
    ipad: [
      {
        title: "ipad 之家",
        docs: "https://docs.rsshub.app/routes/new-media#it-zhi-jia-fen-lei-zi-xun",
        source: "/",
        target: "/ithome/ipad",
      },
    ],
    android: [
      {
        title: "android 之家",
        docs: "https://docs.rsshub.app/routes/new-media#it-zhi-jia-fen-lei-zi-xun",
        source: "/",
        target: "/ithome/android",
      },
    ],
    digi: [
      {
        title: "数码之家",
        docs: "https://docs.rsshub.app/routes/new-media#it-zhi-jia-fen-lei-zi-xun",
        source: "/",
        target: "/ithome/digi",
      },
    ],
    next: [
      {
        title: "智能时代",
        docs: "https://docs.rsshub.app/routes/new-media#it-zhi-jia-fen-lei-zi-xun",
        source: "/",
        target: "/ithome/next",
      },
    ],
  },
  "ithome.com.tw": {
    _name: "iThome",
    www: [
      {
        title: "Feeds",
        docs: "https://docs.rsshub.app/routes/new-media#ithome-tai-wan",
        source: ["/:category", "/:category/feeds"],
        target: "/ithome/tw/feeds/:category",
      },
    ],
  },
  "iwara.tv": {
    _name: "iwara",
    ecchi: [
      {
        title: "用户视频",
        docs: "https://docs.rsshub.app/routes/anime#iwara",
        source: "/users/:username",
        target: "/iwara/users/:username?/video",
      },
      {
        title: "用户图片",
        docs: "https://docs.rsshub.app/routes/anime#iwara",
        source: "/users/:username",
        target: "/iwara/users/:username?/image",
      },
      {
        title: "用户订阅列表",
        docs: "https://docs.rsshub.app/routes/anime#iwara",
        source: "/",
        target: "/iwara/subscriptions",
      },
    ],
  },
  "ixigua.com": {
    _name: "西瓜视频",
    ".": [
      {
        title: "用户视频投稿",
        docs: "https://docs.rsshub.app/routes/multimedia#xi-gua-shi-pin",
        source: "/home/:uid",
        target: "/ixigua/user/video/:uid",
      },
    ],
  },
  "jandan.net": {
    _name: "煎蛋",
    ".": [
      {
        title: "首页/板块/热榜",
        docs: "https://docs.rsshub.app/routes/picture#jian-dan",
        source: ["/:category", "/"],
        target: "/jandan/:category?",
      },
    ],
    i: [
      {
        title: "首页/板块/热榜",
        docs: "https://docs.rsshub.app/routes/picture#jian-dan",
        source: ["/:category", "/"],
        target: "/jandan/:category?",
      },
    ],
  },
  "japanpost.jp": {
    _name: "日本郵便",
    "trackings.post": [
      {
        title: "郵便・荷物の追跡",
        docs: "https://docs.rsshub.app/routes/other#japanpost-ri-ben-you-bian",
        source: "/services/srv/search/direct",
        target: (params, url) => {
          const reqCode = new URL(url).searchParams
            .get("reqCodeNo1")
            .replace(/[^0-9a-zA-Z]/g, "")
            .toUpperCase()
          const locale = new URL(url).searchParams.get("locale").toLowerCase()
          if (
            (reqCode.search(/^(?:\d{11,12}|[A-Z]{2}\d{9}[A-Z]{2})$/) === 0 &&
              locale === "ja") ||
            locale === "en"
          ) {
            return `/japanpost/track/${reqCode}/${locale}`
          }
        },
      },
    ],
  },
  "javbus.com": {
    _name: "JavBus",
    www: [
      {
        title: "有码 - 首页",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/",
        target: "/javbus",
      },
      {
        title: "有码 - 分类",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/genre/:id",
        target: "/javbus/genre/:id",
      },
      {
        title: "有码 - 演员",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/star/:id",
        target: "/javbus/star/:id",
      },
      {
        title: "有码 - 系列",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/series/:id",
        target: "/javbus/series/:id",
      },
      {
        title: "有码 - 制作商",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/studio/:id",
        target: "/javbus/studio/:id",
      },
      {
        title: "有码 - 发行商",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/label/:id",
        target: "/javbus/label/:id",
      },
      {
        title: "有码 - 导演",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/director/:id",
        target: "/javbus/director/:id",
      },
      {
        title: "有码 - 搜索",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/search/:keyword",
        target: "/javbus/search/:keyword",
      },
      {
        title: "无码 - 首页",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored",
        target: "/javbus/uncensored",
      },
      {
        title: "无码 - 分类",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored/genre/:id",
        target: "/javbus/uncensored/genre/:id",
      },
      {
        title: "无码 - 演员",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored/star/:id",
        target: "/javbus/uncensored/star/:id",
      },
      {
        title: "无码 - 系列",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored/series/:id",
        target: "/javbus/uncensored/series/:id",
      },
      {
        title: "无码 - 制作商",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored/studio/:id",
        target: "/javbus/uncensored/studio/:id",
      },
      {
        title: "无码 - 搜索",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored/search/:keyword",
        target: "/javbus/uncensored/search/:keyword",
      },
    ],
  },
  "javsee.club": {
    _name: "JavBus",
    www: [
      {
        title: "有码 - 首页",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/",
        target: "/javbus",
      },
      {
        title: "有码 - 分类",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/genre/:id",
        target: "/javbus/genre/:id",
      },
      {
        title: "有码 - 演员",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/star/:id",
        target: "/javbus/star/:id",
      },
      {
        title: "有码 - 系列",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/series/:id",
        target: "/javbus/series/:id",
      },
      {
        title: "有码 - 制作商",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/studio/:id",
        target: "/javbus/studio/:id",
      },
      {
        title: "有码 - 发行商",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/label/:id",
        target: "/javbus/label/:id",
      },
      {
        title: "有码 - 导演",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/director/:id",
        target: "/javbus/director/:id",
      },
      {
        title: "有码 - 搜索",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/search/:keyword",
        target: "/javbus/search/:keyword",
      },
      {
        title: "无码 - 首页",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored",
        target: "/javbus/uncensored",
      },
      {
        title: "无码 - 分类",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored/genre/:id",
        target: "/javbus/uncensored/genre/:id",
      },
      {
        title: "无码 - 演员",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored/star/:id",
        target: "/javbus/uncensored/star/:id",
      },
      {
        title: "无码 - 系列",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored/series/:id",
        target: "/javbus/uncensored/series/:id",
      },
      {
        title: "无码 - 制作商",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored/studio/:id",
        target: "/javbus/uncensored/studio/:id",
      },
      {
        title: "无码 - 搜索",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored/search/:keyword",
        target: "/javbus/uncensored/search/:keyword",
      },
    ],
  },
  "javsee.icu": {
    _name: "JavBus",
    www: [
      {
        title: "有码 - 首页",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/",
        target: "/javbus",
      },
      {
        title: "有码 - 分类",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/genre/:id",
        target: "/javbus/genre/:id",
      },
      {
        title: "有码 - 演员",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/star/:id",
        target: "/javbus/star/:id",
      },
      {
        title: "有码 - 系列",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/series/:id",
        target: "/javbus/series/:id",
      },
      {
        title: "有码 - 制作商",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/studio/:id",
        target: "/javbus/studio/:id",
      },
      {
        title: "有码 - 发行商",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/label/:id",
        target: "/javbus/label/:id",
      },
      {
        title: "有码 - 导演",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/director/:id",
        target: "/javbus/director/:id",
      },
      {
        title: "有码 - 搜索",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/search/:keyword",
        target: "/javbus/search/:keyword",
      },
      {
        title: "无码 - 首页",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored",
        target: "/javbus/uncensored",
      },
      {
        title: "无码 - 分类",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored/genre/:id",
        target: "/javbus/uncensored/genre/:id",
      },
      {
        title: "无码 - 演员",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored/star/:id",
        target: "/javbus/uncensored/star/:id",
      },
      {
        title: "无码 - 系列",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored/series/:id",
        target: "/javbus/uncensored/series/:id",
      },
      {
        title: "无码 - 制作商",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored/studio/:id",
        target: "/javbus/uncensored/studio/:id",
      },
      {
        title: "无码 - 搜索",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored/search/:keyword",
        target: "/javbus/uncensored/search/:keyword",
      },
    ],
  },
  "javsee.work": {
    _name: "JavBus",
    www: [
      {
        title: "有码 - 首页",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/",
        target: "/javbus",
      },
      {
        title: "有码 - 分类",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/genre/:id",
        target: "/javbus/genre/:id",
      },
      {
        title: "有码 - 演员",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/star/:id",
        target: "/javbus/star/:id",
      },
      {
        title: "有码 - 系列",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/series/:id",
        target: "/javbus/series/:id",
      },
      {
        title: "有码 - 制作商",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/studio/:id",
        target: "/javbus/studio/:id",
      },
      {
        title: "有码 - 发行商",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/label/:id",
        target: "/javbus/label/:id",
      },
      {
        title: "有码 - 导演",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/director/:id",
        target: "/javbus/director/:id",
      },
      {
        title: "有码 - 搜索",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/search/:keyword",
        target: "/javbus/search/:keyword",
      },
      {
        title: "无码 - 首页",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored",
        target: "/javbus/uncensored",
      },
      {
        title: "无码 - 分类",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored/genre/:id",
        target: "/javbus/uncensored/genre/:id",
      },
      {
        title: "无码 - 演员",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored/star/:id",
        target: "/javbus/uncensored/star/:id",
      },
      {
        title: "无码 - 系列",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored/series/:id",
        target: "/javbus/uncensored/series/:id",
      },
      {
        title: "无码 - 制作商",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored/studio/:id",
        target: "/javbus/uncensored/studio/:id",
      },
      {
        title: "无码 - 搜索",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored/search/:keyword",
        target: "/javbus/uncensored/search/:keyword",
      },
    ],
  },
  "seejav.bar": {
    _name: "JavBus",
    www: [
      {
        title: "有码 - 首页",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/",
        target: "/javbus",
      },
      {
        title: "有码 - 分类",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/genre/:id",
        target: "/javbus/genre/:id",
      },
      {
        title: "有码 - 演员",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/star/:id",
        target: "/javbus/star/:id",
      },
      {
        title: "有码 - 系列",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/series/:id",
        target: "/javbus/series/:id",
      },
      {
        title: "有码 - 制作商",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/studio/:id",
        target: "/javbus/studio/:id",
      },
      {
        title: "有码 - 发行商",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/label/:id",
        target: "/javbus/label/:id",
      },
      {
        title: "有码 - 导演",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/director/:id",
        target: "/javbus/director/:id",
      },
      {
        title: "有码 - 搜索",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/search/:keyword",
        target: "/javbus/search/:keyword",
      },
      {
        title: "无码 - 首页",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored",
        target: "/javbus/uncensored",
      },
      {
        title: "无码 - 分类",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored/genre/:id",
        target: "/javbus/uncensored/genre/:id",
      },
      {
        title: "无码 - 演员",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored/star/:id",
        target: "/javbus/uncensored/star/:id",
      },
      {
        title: "无码 - 系列",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored/series/:id",
        target: "/javbus/uncensored/series/:id",
      },
      {
        title: "无码 - 制作商",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored/studio/:id",
        target: "/javbus/uncensored/studio/:id",
      },
      {
        title: "无码 - 搜索",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored/search/:keyword",
        target: "/javbus/uncensored/search/:keyword",
      },
    ],
  },
  "seejav.bid": {
    _name: "JavBus",
    www: [
      {
        title: "有码 - 首页",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/",
        target: "/javbus",
      },
      {
        title: "有码 - 分类",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/genre/:id",
        target: "/javbus/genre/:id",
      },
      {
        title: "有码 - 演员",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/star/:id",
        target: "/javbus/star/:id",
      },
      {
        title: "有码 - 系列",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/series/:id",
        target: "/javbus/series/:id",
      },
      {
        title: "有码 - 制作商",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/studio/:id",
        target: "/javbus/studio/:id",
      },
      {
        title: "有码 - 发行商",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/label/:id",
        target: "/javbus/label/:id",
      },
      {
        title: "有码 - 导演",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/director/:id",
        target: "/javbus/director/:id",
      },
      {
        title: "有码 - 搜索",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/search/:keyword",
        target: "/javbus/search/:keyword",
      },
      {
        title: "无码 - 首页",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored",
        target: "/javbus/uncensored",
      },
      {
        title: "无码 - 分类",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored/genre/:id",
        target: "/javbus/uncensored/genre/:id",
      },
      {
        title: "无码 - 演员",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored/star/:id",
        target: "/javbus/uncensored/star/:id",
      },
      {
        title: "无码 - 系列",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored/series/:id",
        target: "/javbus/uncensored/series/:id",
      },
      {
        title: "无码 - 制作商",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored/studio/:id",
        target: "/javbus/uncensored/studio/:id",
      },
      {
        title: "无码 - 搜索",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored/search/:keyword",
        target: "/javbus/uncensored/search/:keyword",
      },
    ],
  },
  "seejav.blog": {
    _name: "JavBus",
    www: [
      {
        title: "有码 - 首页",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/",
        target: "/javbus",
      },
      {
        title: "有码 - 分类",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/genre/:id",
        target: "/javbus/genre/:id",
      },
      {
        title: "有码 - 演员",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/star/:id",
        target: "/javbus/star/:id",
      },
      {
        title: "有码 - 系列",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/series/:id",
        target: "/javbus/series/:id",
      },
      {
        title: "有码 - 制作商",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/studio/:id",
        target: "/javbus/studio/:id",
      },
      {
        title: "有码 - 发行商",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/label/:id",
        target: "/javbus/label/:id",
      },
      {
        title: "有码 - 导演",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/director/:id",
        target: "/javbus/director/:id",
      },
      {
        title: "有码 - 搜索",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/search/:keyword",
        target: "/javbus/search/:keyword",
      },
      {
        title: "无码 - 首页",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored",
        target: "/javbus/uncensored",
      },
      {
        title: "无码 - 分类",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored/genre/:id",
        target: "/javbus/uncensored/genre/:id",
      },
      {
        title: "无码 - 演员",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored/star/:id",
        target: "/javbus/uncensored/star/:id",
      },
      {
        title: "无码 - 系列",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored/series/:id",
        target: "/javbus/uncensored/series/:id",
      },
      {
        title: "无码 - 制作商",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored/studio/:id",
        target: "/javbus/uncensored/studio/:id",
      },
      {
        title: "无码 - 搜索",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored/search/:keyword",
        target: "/javbus/uncensored/search/:keyword",
      },
    ],
  },
  "seejav.cloud": {
    _name: "JavBus",
    www: [
      {
        title: "有码 - 首页",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/",
        target: "/javbus",
      },
      {
        title: "有码 - 分类",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/genre/:id",
        target: "/javbus/genre/:id",
      },
      {
        title: "有码 - 演员",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/star/:id",
        target: "/javbus/star/:id",
      },
      {
        title: "有码 - 系列",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/series/:id",
        target: "/javbus/series/:id",
      },
      {
        title: "有码 - 制作商",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/studio/:id",
        target: "/javbus/studio/:id",
      },
      {
        title: "有码 - 发行商",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/label/:id",
        target: "/javbus/label/:id",
      },
      {
        title: "有码 - 导演",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/director/:id",
        target: "/javbus/director/:id",
      },
      {
        title: "有码 - 搜索",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/search/:keyword",
        target: "/javbus/search/:keyword",
      },
      {
        title: "无码 - 首页",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored",
        target: "/javbus/uncensored",
      },
      {
        title: "无码 - 分类",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored/genre/:id",
        target: "/javbus/uncensored/genre/:id",
      },
      {
        title: "无码 - 演员",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored/star/:id",
        target: "/javbus/uncensored/star/:id",
      },
      {
        title: "无码 - 系列",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored/series/:id",
        target: "/javbus/uncensored/series/:id",
      },
      {
        title: "无码 - 制作商",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored/studio/:id",
        target: "/javbus/uncensored/studio/:id",
      },
      {
        title: "无码 - 搜索",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored/search/:keyword",
        target: "/javbus/uncensored/search/:keyword",
      },
    ],
  },
  "seejav.club": {
    _name: "JavBus",
    www: [
      {
        title: "有码 - 首页",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/",
        target: "/javbus",
      },
      {
        title: "有码 - 分类",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/genre/:id",
        target: "/javbus/genre/:id",
      },
      {
        title: "有码 - 演员",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/star/:id",
        target: "/javbus/star/:id",
      },
      {
        title: "有码 - 系列",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/series/:id",
        target: "/javbus/series/:id",
      },
      {
        title: "有码 - 制作商",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/studio/:id",
        target: "/javbus/studio/:id",
      },
      {
        title: "有码 - 发行商",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/label/:id",
        target: "/javbus/label/:id",
      },
      {
        title: "有码 - 导演",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/director/:id",
        target: "/javbus/director/:id",
      },
      {
        title: "有码 - 搜索",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/search/:keyword",
        target: "/javbus/search/:keyword",
      },
      {
        title: "无码 - 首页",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored",
        target: "/javbus/uncensored",
      },
      {
        title: "无码 - 分类",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored/genre/:id",
        target: "/javbus/uncensored/genre/:id",
      },
      {
        title: "无码 - 演员",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored/star/:id",
        target: "/javbus/uncensored/star/:id",
      },
      {
        title: "无码 - 系列",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored/series/:id",
        target: "/javbus/uncensored/series/:id",
      },
      {
        title: "无码 - 制作商",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored/studio/:id",
        target: "/javbus/uncensored/studio/:id",
      },
      {
        title: "无码 - 搜索",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored/search/:keyword",
        target: "/javbus/uncensored/search/:keyword",
      },
    ],
  },
  "seejav.men": {
    _name: "JavBus",
    www: [
      {
        title: "有码 - 首页",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/",
        target: "/javbus",
      },
      {
        title: "有码 - 分类",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/genre/:id",
        target: "/javbus/genre/:id",
      },
      {
        title: "有码 - 演员",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/star/:id",
        target: "/javbus/star/:id",
      },
      {
        title: "有码 - 系列",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/series/:id",
        target: "/javbus/series/:id",
      },
      {
        title: "有码 - 制作商",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/studio/:id",
        target: "/javbus/studio/:id",
      },
      {
        title: "有码 - 发行商",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/label/:id",
        target: "/javbus/label/:id",
      },
      {
        title: "有码 - 导演",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/director/:id",
        target: "/javbus/director/:id",
      },
      {
        title: "有码 - 搜索",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/search/:keyword",
        target: "/javbus/search/:keyword",
      },
      {
        title: "无码 - 首页",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored",
        target: "/javbus/uncensored",
      },
      {
        title: "无码 - 分类",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored/genre/:id",
        target: "/javbus/uncensored/genre/:id",
      },
      {
        title: "无码 - 演员",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored/star/:id",
        target: "/javbus/uncensored/star/:id",
      },
      {
        title: "无码 - 系列",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored/series/:id",
        target: "/javbus/uncensored/series/:id",
      },
      {
        title: "无码 - 制作商",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored/studio/:id",
        target: "/javbus/uncensored/studio/:id",
      },
      {
        title: "无码 - 搜索",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored/search/:keyword",
        target: "/javbus/uncensored/search/:keyword",
      },
    ],
  },
  "seejav.pw": {
    _name: "JavBus",
    www: [
      {
        title: "有码 - 首页",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/",
        target: "/javbus",
      },
      {
        title: "有码 - 分类",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/genre/:id",
        target: "/javbus/genre/:id",
      },
      {
        title: "有码 - 演员",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/star/:id",
        target: "/javbus/star/:id",
      },
      {
        title: "有码 - 系列",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/series/:id",
        target: "/javbus/series/:id",
      },
      {
        title: "有码 - 制作商",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/studio/:id",
        target: "/javbus/studio/:id",
      },
      {
        title: "有码 - 发行商",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/label/:id",
        target: "/javbus/label/:id",
      },
      {
        title: "有码 - 导演",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/director/:id",
        target: "/javbus/director/:id",
      },
      {
        title: "有码 - 搜索",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/search/:keyword",
        target: "/javbus/search/:keyword",
      },
      {
        title: "无码 - 首页",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored",
        target: "/javbus/uncensored",
      },
      {
        title: "无码 - 分类",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored/genre/:id",
        target: "/javbus/uncensored/genre/:id",
      },
      {
        title: "无码 - 演员",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored/star/:id",
        target: "/javbus/uncensored/star/:id",
      },
      {
        title: "无码 - 系列",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored/series/:id",
        target: "/javbus/uncensored/series/:id",
      },
      {
        title: "无码 - 制作商",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored/studio/:id",
        target: "/javbus/uncensored/studio/:id",
      },
      {
        title: "无码 - 搜索",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/uncensored/search/:keyword",
        target: "/javbus/uncensored/search/:keyword",
      },
    ],
  },
  "javbus.one": {
    _name: "JavBus",
    www: [
      {
        title: "欧美 - 首页",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/",
        target: "/javbus/western",
      },
      {
        title: "欧美 - 分类",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/genre/:id",
        target: "/javbus/western/genre/:id",
      },
      {
        title: "欧美 - 演员",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/star/:id",
        target: "/javbus/western/star/:id",
      },
      {
        title: "欧美 - 系列",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/series/:id",
        target: "/javbus/western/series/:id",
      },
      {
        title: "欧美 - 制作商",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/studio/:id",
        target: "/javbus/western/studio/:id",
      },
      {
        title: "欧美 - 搜索",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/search/:keyword",
        target: "/javbus/western/search/:keyword",
      },
    ],
  },
  "javbus.org": {
    _name: "JavBus",
    www: [
      {
        title: "欧美 - 首页",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/",
        target: "/javbus/western",
      },
      {
        title: "欧美 - 分类",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/genre/:id",
        target: "/javbus/western/genre/:id",
      },
      {
        title: "欧美 - 演员",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/star/:id",
        target: "/javbus/western/star/:id",
      },
      {
        title: "欧美 - 系列",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/series/:id",
        target: "/javbus/western/series/:id",
      },
      {
        title: "欧美 - 制作商",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/studio/:id",
        target: "/javbus/western/studio/:id",
      },
      {
        title: "欧美 - 搜索",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/search/:keyword",
        target: "/javbus/western/search/:keyword",
      },
    ],
  },
  "javbus.red": {
    _name: "JavBus",
    www: [
      {
        title: "欧美 - 首页",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/",
        target: "/javbus/western",
      },
      {
        title: "欧美 - 分类",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/genre/:id",
        target: "/javbus/western/genre/:id",
      },
      {
        title: "欧美 - 演员",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/star/:id",
        target: "/javbus/western/star/:id",
      },
      {
        title: "欧美 - 系列",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/series/:id",
        target: "/javbus/western/series/:id",
      },
      {
        title: "欧美 - 制作商",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/studio/:id",
        target: "/javbus/western/studio/:id",
      },
      {
        title: "欧美 - 搜索",
        docs: "https://docs.rsshub.app/routes/multimedia#javbus",
        source: "/search/:keyword",
        target: "/javbus/western/search/:keyword",
      },
    ],
  },
  "javdb.com": {
    _name: "JavDB",
    ".": [
      {
        title: "主页",
        docs: "https://docs.rsshub.app/routes/multimedia#javdb-zhu-ye",
        source: ["/"],
        target: "/javdb",
      },
      {
        title: "分類",
        docs: "https://docs.rsshub.app/routes/multimedia#javdb-fen-lei",
        source: ["/tags/:category", "/"],
        target: (params, url) =>
          `/javdb/tags/:category/${new URL(url).searchParams.toString()}`,
      },
      {
        title: "排行榜",
        docs: "https://docs.rsshub.app/routes/multimedia#javdb-pai-hang-bang",
        source: ["/rankings/:category", "/"],
        target: (params, url) =>
          `/javdb/rankings/:category/${new URL(url).searchParams.get("period") ?? ""}`,
      },
      {
        title: "搜索",
        docs: "https://docs.rsshub.app/routes/multimedia#javdb-sou-suo",
        source: ["/search", "/"],
        target: (params, url) =>
          `/javdb/search/${new URL(url).searchParams.toString()}`,
      },
      {
        title: "演員",
        docs: "https://docs.rsshub.app/routes/multimedia#javdb-yan-yuan",
        source: ["/actors/:id", "/"],
        target: (params, url) =>
          `/javdb/actors/:id/${new URL(url).searchParams.toString()}`,
      },
      {
        title: "系列",
        docs: "https://docs.rsshub.app/routes/multimedia#javdb-xi-lie",
        source: ["/series/:id", "/"],
        target: (params, url) =>
          `/javdb/series/:id/${new URL(url).searchParams.toString()}`,
      },
      {
        title: "片商",
        docs: "https://docs.rsshub.app/routes/multimedia#javdb-pian-shang",
        source: ["/makers/:id", "/"],
        target: (params, url) =>
          `/javdb/makers/:id/${new URL(url).searchParams.toString()}`,
      },
      {
        title: "清单",
        docs: "https://docs.rsshub.app/routes/multimedia#javdb-qing-dan",
        source: ["/lists/:id/", "/"],
        target: (params, url) =>
          `/javdb/lists/:id/${new URL(url).searchParams.toString()}`,
      },
    ],
  },
  "javlibrary.com": {
    _name: "JAVLibrary",
    ".": [
      {
        title: "最近讨论的影片",
        docs: "https://docs.rsshub.app/routes/multimedia#zui-jin-tao-lun-de-ying-pian",
        source: ["/:language", "/"],
        target: (params) => `/javlibrary/update/${params.language}`,
      },
      {
        title: "新发行的影片",
        docs: "https://docs.rsshub.app/routes/multimedia#xin-fa-xing-de-ying-pian",
        source: ["/:language", "/"],
        target: (params, url) =>
          `/javlibrary/newrelease/${params.language}/${new URL(url).searchParams.get("mode")}`,
      },
      {
        title: "最新加入的影片",
        docs: "https://docs.rsshub.app/routes/multimedia#zui-xin-jia-ru-de-ying-pian",
        source: ["/:language", "/"],
        target: (params) => `/javlibrary/update/${params.language}`,
      },
      {
        title: "最想要的影片",
        docs: "https://docs.rsshub.app/routes/multimedia#zui-xiang-yao-de-ying-pian",
        source: ["/:language", "/"],
        target: (params, url) =>
          `/javlibrary/mostwanted/${params.language}/${new URL(url).searchParams.get("mode")}`,
      },
      {
        title: "评价最高的影片",
        docs: "https://docs.rsshub.app/routes/multimedia#ping-jia-zui-gao-de-ying-pian",
        source: ["/:language", "/"],
        target: (params, url) =>
          `/javlibrary/bestrated/${params.language}/${new URL(url).searchParams.get("mode")}`,
      },
      {
        title: "最佳评论",
        docs: "https://docs.rsshub.app/routes/multimedia#zui-jia-ping-lun",
        source: ["/:language", "/"],
        target: (params, url) =>
          `/javlibrary/bestreviews/${params.language}/${new URL(url).searchParams.get("mode")}`,
      },
      {
        title: "影片依分类",
        docs: "https://docs.rsshub.app/routes/multimedia#ying-pian-yi-fen-lei",
        source: ["/:language", "/"],
        target: (params, url) =>
          `/javlibrary/genre/${new URL(url).searchParams.get("g")}/${params.language}/${new URL(url).searchParams.get("mode")}`,
      },
      {
        title: "影片按演员",
        docs: "https://docs.rsshub.app/routes/multimedia#ying-pian-an-yan-yuan",
        source: ["/:language", "/"],
        target: (params, url) =>
          `/javlibrary/star/${new URL(url).searchParams.get("s")}/${params.language}/${new URL(url).searchParams.get("mode")}`,
      },
      {
        title: "用户发表的文章",
        docs: "https://docs.rsshub.app/routes/multimedia#yong-hu-fa-biao-de-wen-zhang",
        source: ["/:language", "/"],
        target: (params, url) =>
          `/javlibrary/userposts/${new URL(url).searchParams.get("u")}/${params.language}`,
      },
      {
        title: "用户想要的影片",
        docs: "https://docs.rsshub.app/routes/multimedia#yong-hu-xiang-yao-de-ying-pian",
        source: ["/:language", "/"],
        target: (params, url) =>
          `/javlibrary/userwanted/${new URL(url).searchParams.get("u")}/${params.language}`,
      },
      {
        title: "用户看过的影片",
        docs: "https://docs.rsshub.app/routes/multimedia#yong-hu-kan-guo-de-ying-pian",
        source: ["/:language", "/"],
        target: (params, url) =>
          `/javlibrary/userwatched/${new URL(url).searchParams.get("u")}/${params.language}`,
      },
      {
        title: "用户拥有的影片",
        docs: "https://docs.rsshub.app/routes/multimedia#yong-hu-yong-you-de-ying-pian",
        source: ["/:language", "/"],
        target: (params, url) =>
          `/javlibrary/userowned/${new URL(url).searchParams.get("u")}/${params.language}`,
      },
    ],
  },
  "jd.com": {
    _name: "京东",
    item: [
      {
        title: "商品价格",
        docs: "https://docs.rsshub.app/routes/shopping#jing-dong-shang-pin-jia-ge",
        source: ["/"],
        target: (params, url) =>
          `/jd/price/${new URL(url).hash.match(/\/(\d+)\.html/)[1]}`,
      },
    ],
  },
  "thejewishmuseum.org": {
    _name: "Jewish Museum",
    ".": [
      {
        title: "Exhibitions",
        docs: "https://docs.rsshub.app/routes/en/travel#the-jewish-museum",
      },
    ],
  },
  "jiaoliudao.com": {
    _name: "交流岛资源网",
    ".": [
      {
        title: "最新文章",
        docs: "https://docs.rsshub.app/routes/blog#jiao-liu-dao-zi-yuan-wang",
        source: ["/"],
        target: "/jiaoliudao",
      },
    ],
  },
  "jiemian.com": {
    _name: "界面新闻",
    ".": [
      {
        title: "快报",
        docs: "https://docs.rsshub.app/routes/traditional-media#jie-mian-xin-wen-kuai-bao",
        source: ["/list/:id", "/"],
        target: "/jiemian",
      },
      {
        title: "栏目",
        docs: "https://docs.rsshub.app/routes/traditional-media#jie-mian-xin-wen-lan-mu",
        source: ["/list/:id", "/"],
        target: "/jiemian/list/:id",
      },
    ],
  },
  "okjike.com": {
    _name: "即刻",
    m: [
      {
        title: "用户动态",
        docs: "https://docs.rsshub.app/routes/social-media#ji-ke",
        source: "/users/:uid",
        target: "/jike/user/:uid",
      },
      {
        title: "用户动态",
        docs: "https://docs.rsshub.app/routes/social-media#ji-ke",
        source: "/reposts/:repostId",
        target: (params, url, document) => {
          const uid = document
            .querySelector(".avatar")
            .getAttribute("href")
            .replace("/users/", "")
          return uid ? `/jike/user/${uid}` : ""
        },
      },
      {
        title: "圈子",
        docs: "https://docs.rsshub.app/routes/social-media#ji-ke",
        source: "/topics/:id",
        target: "/jike/topic/:id",
      },
      {
        title: "圈子 - 纯文字",
        docs: "https://docs.rsshub.app/routes/social-media#ji-ke",
        source: "/topics/:id",
        target: "/jike/topic/text/:id",
      },
    ],
    web: [
      {
        title: "用户动态",
        docs: "https://docs.rsshub.app/routes/social-media#ji-ke",
        source: "/u/:uid",
        target: "/jike/user/:uid",
      },
      {
        title: "圈子",
        docs: "https://docs.rsshub.app/routes/social-media#ji-ke",
        source: "/topic/:id",
        target: "/jike/topic/:id",
      },
      {
        title: "圈子 - 纯文字",
        docs: "https://docs.rsshub.app/routes/social-media#ji-ke",
        source: "/topic/:id",
        target: "/jike/topic/text/:id",
      },
    ],
  },
  "jin10.com": {
    _name: "金十数据",
    ".": [
      {
        title: "市场快讯",
        docs: "https://docs.rsshub.app/routes/finance#jin-shi-shu-ju",
        source: ["/"],
        target: "/jin10",
      },
    ],
    xnews: [
      {
        title: "主题文章",
        docs: "https://docs.rsshub.app/routes/finance#jin-shi-shu-ju",
        source: ["/topic/:id"],
        target: "/jin10/topic/:id",
      },
    ],
  },
  "jisilu.cn": {
    _name: "集思录",
    ".": [
      {
        title: "广场",
        docs: "https://docs.rsshub.app/routes/bbs#ji-si-lu-guang-chang",
        source: ["/home/explore", "/explore", "/"],
        target: "/jisilu/:category?/:sort?/:day?",
      },
      {
        title: "用户回复",
        docs: "https://docs.rsshub.app/routes/bbs#ji-si-lu-yong-hu-hui-fu",
        source: ["/people/:user"],
        target: "/jisilu/reply/:user",
      },
      {
        title: "用户主题",
        docs: "https://docs.rsshub.app/routes/bbs#ji-si-lu-yong-hu-zhu-ti",
        source: ["/people/:user"],
        target: "/jisilu/topic/:user",
      },
    ],
  },
  "jornada.com.mx": {
    _name: "La Jornada",
    ".": [
      {
        title: "News",
        docs: "https://docs.rsshub.app/routes/traditional-media#jornada",
        source: ["/category/:category", "/"],
        target: (params) =>
          params.category
            ? `/jornada/today/${params.category.replacce(".html", "")}`
            : `/jornada/today`,
      },
    ],
  },
  "jou.edu.cn": {
    _name: "江苏海洋大学",
    www: [
      {
        title: "通知公告",
        docs: "https://docs.rsshub.app/routes/university#jiang-su-hai-yang-da-xue-guan-wang-tong-zhi-gong-gao",
        source: ["/index/tzgg.htm", "/"],
        target: "/jou/tzgg",
      },
    ],
    yz: [
      {
        title: "研招通知公告",
        docs: "https://docs.rsshub.app/routes/university#jiang-su-hai-yang-da-xue-yan-zhao-wang-tong-zhi-gong-gao",
        source: ["/index/zxgg.htm", "/"],
        target: "/jou/yztzgg",
      },
    ],
  },
  "jseea.cn": {
    _name: "江苏省教育考试院",
    ".": [
      {
        title: "新闻中心",
        docs: "https://docs.rsshub.app/routes/government#jiang-su-sheng-ren-min-zheng-fu",
        source: ["/webfile/news/:type"],
        target: "/jseea/news/:type",
      },
    ],
  },
  "juejin.cn": {
    _name: "掘金",
    ".": [
      {
        title: "标签",
        docs: "https://docs.rsshub.app/routes/programming#jue-jin-biao-qian",
        source: "/tag/:tag",
        target: "/juejin/tag/:tag",
      },
      {
        title: "小册",
        docs: "https://docs.rsshub.app/routes/programming#jue-jin-xiao-ce",
        source: "/books",
        target: "/juejin/books",
      },
      {
        title: "沸点",
        docs: "https://docs.rsshub.app/routes/programming#jue-jin-fei-dian",
        source: ["/pins/:type", "/pins/topic/:type"],
        target: (params) =>
          params.type !== "recommended" ? "/juejin/pins/:type" : "/juejin/pins",
      },
      {
        title: "用户专栏",
        docs: "https://docs.rsshub.app/routes/programming#jue-jin-zhuan-lan",
        source: ["/user/:id", "/user/:id/posts"],
        target: "/juejin/posts/:id",
      },
      {
        title: "收藏集",
        docs: "https://docs.rsshub.app/routes/programming#jue-jin-shou-cang-ji",
        source: ["/user/:id", "/user/:id/collections"],
        target: "/juejin/collections/:id",
      },
      {
        title: "单个收藏夹",
        docs: "https://docs.rsshub.app/routes/programming#jue-jin-dan-ge-shou-cang-jia",
        source: "/collection/:collectionId",
        target: "/juejin/collection/:collectionId",
      },
      {
        title: "分享",
        docs: "https://docs.rsshub.app/routes/programming#jue-jin",
        source: ["/user/:userId", "/user/:userId/shares"],
        target: "/juejin/shares/:userId",
      },
      {
        title: "专栏",
        docs: "https://docs.rsshub.app/routes/programming#jue-jin",
        source: "/column/:id",
        target: "/juejin/column/:id",
      },
      {
        title: "资讯",
        docs: "https://docs.rsshub.app/routes/programming#jue-jin",
        source: ["/user/:id", "/user/:id/news"],
        target: "/juejin/news/:userId",
      },
    ],
  },
  "jumpvg.com": {
    _name: "jump app",
    switch: [
      {
        title: "折扣清单",
        docs: "https://docs.rsshub.app/routes/game#jump",
        source: ["/"],
        target: "/jump/discount/switch",
      },
    ],
  },
  "kakuyomu.jp": {
    _name: "kakuyomu",
    ".": [
      {
        title: "章节更新",
        docs: "https://docs.rsshub.app/routes/reading#kakuyomu-zhang-jie-geng-xin",
        source: ["/works/:id"],
        target: "/kakuyomu/episode/:id",
      },
    ],
  },
  "kamen-rider-official.com": {
    _name: "仮面ライダ",
    ".": [
      {
        title: "最新情報",
        docs: "https://docs.rsshub.app/routes/new-media#fan-mian-%E3%83%A9%E3%82%A4%E3%83%80-zui-xin-qing-bao",
        source: ["/news_articles"],
        target: (params, url) => {
          url = new URL(url)
          const category = url.searchParams.get("category")

          return `/kamen-rider-official/news${category ? `/${category}` : ""}`
        },
      },
    ],
  },
  "kantarworldpanel.com": {
    _name: "Kantar Worldpanel",
    ".": [
      {
        title: "News Centre China Eng - News",
        docs: "https://docs.rsshub.app/routes/new-media#kanta-worldpanel-news-centre",
        source: ["/cn-en/news"],
        target: "/kantarworldpanel/cn-en/news",
      },
      {
        title: "News Centre China Eng - Retail Snapshot",
        docs: "https://docs.rsshub.app/routes/new-media#kanta-worldpanel-news-centre",
        source: ["/cn-en/publications"],
        target: "/kantarworldpanel/cn-en/publications",
      },
      {
        title: "News Centre China Eng - Publications",
        docs: "https://docs.rsshub.app/routes/new-media#kanta-worldpanel-news-centre",
        source: ["/cn-en/publications/Reports"],
        target: "/kantarworldpanel/cn-en/publications/Reports",
      },
      {
        title: "News Centre China Eng - In the media",
        docs: "https://docs.rsshub.app/routes/new-media#kanta-worldpanel-news-centre",
        source: ["/cn-en/In-the-media"],
        target: "/kantarworldpanel/cn-en/In-the-media",
      },
      {
        title: "News Centre China 中文 - 新闻发布",
        docs: "https://docs.rsshub.app/routes/new-media#kanta-worldpanel-news-centre",
        source: ["/cn/news"],
        target: "/kantarworldpanel/cn/news",
      },
      {
        title: "News Centre China 中文 - 零售市场快报",
        docs: "https://docs.rsshub.app/routes/new-media#kanta-worldpanel-news-centre",
        source: ["/cn/publications"],
        target: "/kantarworldpanel/cn/publications",
      },
      {
        title: "News Centre China 中文 - 市场报告",
        docs: "https://docs.rsshub.app/routes/new-media#kanta-worldpanel-news-centre",
        source: ["/cn/publications/China-Insights"],
        target: "/kantarworldpanel/cn/publications/China-Insights",
      },
      {
        title: "News Centre China 中文 - 媒体报道",
        docs: "https://docs.rsshub.app/routes/new-media#kanta-worldpanel-news-centre",
        source: ["/cn/press-releases"],
        target: "/kantarworldpanel/cn/press-releases",
      },
      {
        title: "News Centre Indonesia - News",
        docs: "https://docs.rsshub.app/routes/new-media#kanta-worldpanel-news-centre",
        source: ["/id/News"],
        target: "/kantarworldpanel/id/News",
      },
      {
        title: "News Centre Indonesia - Kantar Scoop",
        docs: "https://docs.rsshub.app/routes/new-media#kanta-worldpanel-news-centre",
        source: ["/id/News/Kantar-Worldpanel-Series"],
        target: "/kantarworldpanel/id/News/Kantar-Worldpanel-Series",
      },
      {
        title: "News Centre Indonesia - Video Series",
        docs: "https://docs.rsshub.app/routes/new-media#kanta-worldpanel-news-centre",
        source: ["/id/News/video-series"],
        target: "/kantarworldpanel/id/News/video-series",
      },
      {
        title: "News Centre Indonesia - Podcast",
        docs: "https://docs.rsshub.app/routes/new-media#kanta-worldpanel-news-centre",
        source: ["/id/News/podcast"],
        target: "/kantarworldpanel/id/News/podcast",
      },
      {
        title: "News Centre Indonesia - Ready, Steady, Shop!",
        docs: "https://docs.rsshub.app/routes/new-media#kanta-worldpanel-news-centre",
        source: ["/id/News/asia-shopper-series"],
        target: "/kantarworldpanel/id/News/asia-shopper-series",
      },
      {
        title: "News Centre Indonesia - Asia Pulse",
        docs: "https://docs.rsshub.app/routes/new-media#kanta-worldpanel-news-centre",
        source: ["/id/News/Asia-Pulse"],
        target: "/kantarworldpanel/id/News/Asia-Pulse",
      },
      {
        title: "News Centre Korea - News",
        docs: "https://docs.rsshub.app/routes/new-media#kanta-worldpanel-news-centre",
        source: ["/kr/news"],
        target: "/kantarworldpanel/kr/news",
      },
      {
        title: "News Centre Korea - Insight Reports",
        docs: "https://docs.rsshub.app/routes/new-media#kanta-worldpanel-news-centre",
        source: ["/kr/publications"],
        target: "/kantarworldpanel/kr/publications",
      },
      {
        title: "News Centre Korea - In the Media",
        docs: "https://docs.rsshub.app/routes/new-media#kanta-worldpanel-news-centre",
        source: ["/kr/press-releases"],
        target: "/kantarworldpanel/kr/press-releases",
      },
      {
        title: "News Centre Malaysia - News",
        docs: "https://docs.rsshub.app/routes/new-media#kanta-worldpanel-news-centre",
        source: ["/my/news"],
        target: "/kantarworldpanel/my/news",
      },
      {
        title: "News Centre Philippines - Latest Insights",
        docs: "https://docs.rsshub.app/routes/new-media#kanta-worldpanel-news-centre",
        source: ["/ph/Latest-Insights"],
        target: "/kantarworldpanel/ph/Latest-Insights",
      },
      {
        title: "News Centre Philippines - In the Media",
        docs: "https://docs.rsshub.app/routes/new-media#kanta-worldpanel-news-centre",
        source: ["/ph/In-the-Media"],
        target: "/kantarworldpanel/ph/In-the-Media",
      },
      {
        title: "News Centre Philippines - Events",
        docs: "https://docs.rsshub.app/routes/new-media#kanta-worldpanel-news-centre",
        source: ["/ph/events"],
        target: "/kantarworldpanel/ph/events",
      },
      {
        title: "News Centre Taiwan - 聚焦台灣",
        docs: "https://docs.rsshub.app/routes/new-media#kanta-worldpanel-news-centre",
        source: ["/ph/news/spotlight-on-taiwan"],
        target: "/kantarworldpanel/tw/news/spotlight-on-taiwan",
      },
      {
        title: "News Centre Taiwan - WOW SPOT",
        docs: "https://docs.rsshub.app/routes/new-media#kanta-worldpanel-news-centre",
        source: ["/tw/news/wowspot"],
        target: "/kantarworldpanel/tw/news/wowspot",
      },
      {
        title: "News Centre Taiwan - 市場報告",
        docs: "https://docs.rsshub.app/routes/new-media#kanta-worldpanel-news-centre",
        source: ["/tw/publications"],
        target: "/kantarworldpanel/tw/publications",
      },
      {
        title: "News Centre Taiwan - 媒體報導",
        docs: "https://docs.rsshub.app/routes/new-media#kanta-worldpanel-news-centre",
        source: ["/tw/press-releases"],
        target: "/kantarworldpanel/tw/press-releases",
      },
      {
        title: "News Centre Taiwan - 活動",
        docs: "https://docs.rsshub.app/routes/new-media#kanta-worldpanel-news-centre",
        source: ["/tw/events"],
        target: "/kantarworldpanel/tw/events",
      },
      {
        title: "News Centre Thailand - News",
        docs: "https://docs.rsshub.app/routes/new-media#kanta-worldpanel-news-centre",
        source: ["/th/news"],
        target: "/kantarworldpanel/th/news",
      },
      {
        title: "News Centre Vietnam - Insights",
        docs: "https://docs.rsshub.app/routes/new-media#kanta-worldpanel-news-centre",
        source: ["/vn/news"],
        target: "/kantarworldpanel/vn/news",
      },
      {
        title: "News Centre Vietnam - FMCG Monitor",
        docs: "https://docs.rsshub.app/routes/new-media#kanta-worldpanel-news-centre",
        source: ["/vn/news/FMCG-Monitor"],
        target: "/kantarworldpanel/vn/news/FMCG-Monitor",
      },
      {
        title: "News Centre Vietnam - Ready, Steady, Shop!",
        docs: "https://docs.rsshub.app/routes/new-media#kanta-worldpanel-news-centre",
        source: ["/vn/news/ready-steady-shop"],
        target: "/kantarworldpanel/vn/news/ready-steady-shop",
      },
      {
        title: "News Centre Vietnam - Asia Pulse",
        docs: "https://docs.rsshub.app/routes/new-media#kanta-worldpanel-news-centre",
        source: ["/vn/news/asia-pulse"],
        target: "/kantarworldpanel/vn/news/asia-pulse",
      },
      {
        title: "News Centre Vietnam - IN THE MEDIA",
        docs: "https://docs.rsshub.app/routes/new-media#kanta-worldpanel-news-centre",
        source: ["/vn/In-the-media"],
        target: "/kantarworldpanel/vn/In-the-media",
      },
    ],
  },
  "kbs.co.kr": {
    _name: "KBS",
    world: [
      {
        title: "News",
        docs: "https://docs.rsshub.app/routes/new-media#kbs",
        source: "/",
        target: "/kbs/news",
      },
      {
        title: "Today",
        docs: "https://docs.rsshub.app/routes/new-media#kbs",
        source: "/",
        target: "/kbs/today",
      },
    ],
  },
  "kcna.kp": {
    _name: "朝鲜中央通讯社",
    www: [
      {
        title: "朝鲜劳动党总书记金正恩同志革命活动新闻",
        docs: "https://docs.rsshub.app/routes/traditional-media#chao-xian-zhong-yang-tong-xun-she",
        source:
          "/:lang/category/articles/q/54c0ca4ca013a92cc9cf95bd4004c61a.kcmsf",
        target: "/kcna/:lang/54c0ca4ca013a92cc9cf95bd4004c61a",
      },
      {
        title: "最新新闻",
        docs: "https://docs.rsshub.app/routes/traditional-media#chao-xian-zhong-yang-tong-xun-she",
        source: [
          "/:lang",
          "/:lang/category/articles/q/1ee9bdb7186944f765208f34ecfb5407.kcmsf",
          "/:lang/category/articles.kcmsf",
        ],
        target: "/kcna/:lang",
      },
      {
        title: "主要新闻",
        docs: "https://docs.rsshub.app/routes/traditional-media#chao-xian-zhong-yang-tong-xun-she",
        source:
          "/:lang/category/articles/q/5394b80bdae203fadef02522cfb578c0.kcmsf",
        target: "/kcna/:lang/5394b80bdae203fadef02522cfb578c0",
      },
      {
        title: "国内新闻",
        docs: "https://docs.rsshub.app/routes/traditional-media#chao-xian-zhong-yang-tong-xun-she",
        source:
          "/:lang/category/articles/q/b2b3bcc1b0a4406ab0c36e45d5db58db.kcmsf",
        target: "/kcna/:lang/b2b3bcc1b0a4406ab0c36e45d5db58db",
      },
      {
        title: "文件",
        docs: "https://docs.rsshub.app/routes/traditional-media#chao-xian-zhong-yang-tong-xun-she",
        source:
          "/:lang/category/articles/q/a8754921399857ebdbb97a98a1e741f5.kcmsf",
        target: "/kcna/:lang/a8754921399857ebdbb97a98a1e741f5",
      },
      {
        title: "国际新闻",
        docs: "https://docs.rsshub.app/routes/traditional-media#chao-xian-zhong-yang-tong-xun-she",
        source:
          "/:lang/category/articles/q/593143484cf15d48ce85c26139582395.kcmsf",
        target: "/kcna/:lang/593143484cf15d48ce85c26139582395",
      },
      {
        title: "社会－生活",
        docs: "https://docs.rsshub.app/routes/traditional-media#chao-xian-zhong-yang-tong-xun-she",
        source:
          "/:lang/category/articles/q/93102e5a735d03979bc58a3a7aefb75a.kcmsf",
        target: "/kcna/:lang/93102e5a735d03979bc58a3a7aefb75a",
      },
      {
        title: "对外关系",
        docs: "https://docs.rsshub.app/routes/traditional-media#chao-xian-zhong-yang-tong-xun-she",
        source:
          "/:lang/category/articles/q/0f98b4623a3ef82aeea78df45c423fd0.kcmsf",
        target: "/kcna/:lang/0f98b4623a3ef82aeea78df45c423fd0",
      },
      {
        title: "时事解说",
        docs: "https://docs.rsshub.app/routes/traditional-media#chao-xian-zhong-yang-tong-xun-she",
        source:
          "/:lang/category/articles/q/12c03a49f7dbe829bceea8ac77088c21.kcmsf",
        target: "/kcna/:lang/12c03a49f7dbe829bceea8ac77088c21",
      },
    ],
  },
  "research.ke.com": {
    _name: "贝壳研究院 - 房地产行业研究报告",
    www: [
      {
        title: "研究成果",
        docs: "https://docs.rsshub.app/routes/other#bei-ke-yan-jiu-yuan",
        source: ["/researchResults"],
        target: "/researchResults",
      },
    ],
  },
  "gotokeep.com": {
    _name: "Keep",
    ".": [
      {
        title: "用户运动日记",
        docs: "https://docs.rsshub.app/routes/social-media#keep",
        source: "/users/:id",
        target: "/keep/user/:id",
      },
    ],
  },
  "kemono.su": {
    _name: "Kemono",
    ".": [
      {
        title: "Posts",
        docs: "https://docs.rsshub.app/routes/anime#kemono-posts",
        source: ["/:source/user/:id", "/"],
        target: "/kemono/:source?/:id?",
      },
    ],
  },
  "kepu.net.cn": {
    _name: "中国科普博览",
    live: [
      {
        title: "直播回看",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-ke-pu-bo-lan-zhi-bo-hui-kan",
        source: ["/replay/index"],
        target: "/kepu/live",
      },
    ],
  },
  "keylol.com": {
    _name: "其乐",
    ".": [
      {
        title: "论坛",
        docs: "https://docs.rsshub.app/routes/game#qi-le-lun-tan",
        source: ["/:category", "/"],
        target: (params, url) => {
          url = new URL(url)
          const path = url.href
            .match(/keylol\.com\/(forum.php\?.*|f\d+-\d+)?/)
            .replace(/forum.php\?/, "")[1]

          return `/keylol${path ? `/${path}` : ""}`
        },
      },
    ],
  },
  "kimlaw.or.kr": {
    _name: "韓國海事法學會",
    ".": [
      {
        title: "学术论文",
        docs: "https://docs.rsshub.app/routes/study#han-guo-hai-shi-fa-xue-hui",
        source: ["/67", "/"],
        target: "/kimlaw/thesis",
      },
    ],
  },
  "knowmedia.tw": {
    _name: "识媒体",
    ".": [
      {
        title: "近期更新",
        docs: "https://docs.rsshub.app/routes/game#jump",
        source: ["/", "/topics/近期更新"],
        target: "/knowmedia/jqgx",
      },
      {
        title: "精选专栏",
        docs: "https://docs.rsshub.app/routes/game#jump",
        source: ["/", "/topics/精選專欄"],
        target: "/knowmedia/jxzl",
      },
      {
        title: "活动讯息",
        docs: "https://docs.rsshub.app/routes/game#jump",
        source: ["/", "/topics/活動訊息"],
        target: "/knowmedia/hdxx",
      },
      {
        title: "影音专区",
        docs: "https://docs.rsshub.app/routes/game#jump",
        source: ["/", "/topics/影音專區"],
        target: "/knowmedia/yyzq",
      },
    ],
  },
  "kuaidi100.com": {
    _name: "快递 100",
    ".": [
      {
        title: "快递订单追踪",
        docs: "https://docs.rsshub.app/routes/other#kuai-di-100",
        source: "/",
        target: (params, url, document) => {
          const postid = document && document.querySelector("#postid").value
          const com =
            document &&
            document.querySelector("#selectComBtn").childNodes[1].attributes[1]
              .value
          if (com && com !== "default" && postid) {
            return `/kuaidi100/track/${com}/${postid}`
          }
        },
      },
      {
        title: "支持的快递公司列表",
        docs: "https://docs.rsshub.app/routes/other#kuai-di-100",
        source: "/",
        target: "/kuaidi100/company",
      },
    ],
  },
  "kunchengblog.com": {
    _name: "Kun Cheng",
    ".": [
      {
        title: "Essay",
        docs: "https://docs.rsshub.app/routes/blog#kun-cheng-essay",
        source: ["/essay"],
        target: "/kunchengblog/essay",
      },
    ],
  },
  "kuwaitlocal.com": {
    _name: "Kuwait Local",
    ".": [
      {
        title: "Latest News",
        docs: "https://docs.rsshub.app/routes/en/new-media#kuwait-local",
        source: ["/news/latest", "/news", "/"],
        target: "/kuwaitlocal",
      },
      {
        title: "Categorised News",
        docs: "https://docs.rsshub.app/routes/en/new-media#kuwait-local",
        source: ["/news/categories/:category"],
        target: "/kuwaitlocal/:category",
      },
    ],
  },
  "kyodonews.net": {
    _name: "共同网",
    china: [
      {
        title: "最新报道",
        docs: "https://docs.rsshub.app/routes/traditional-media#gong-tong-wang-zui-xin-bao-dao",
        source: "/",
        target: "/kyodonews/china",
      },
      {
        title: "关键词",
        docs: "https://docs.rsshub.app/routes/traditional-media#gong-tong-wang-zui-xin-bao-dao",
        source: "/news/:keyword",
        target: "/kyodonews/china/:keyword?",
      },
    ],
    tchina: [
      {
        title: "最新報道",
        docs: "https://docs.rsshub.app/routes/traditional-media#gong-tong-wang-zui-xin-bao-dao",
        source: "/",
        target: "/kyodonews/tchina",
      },
      {
        title: "關鍵詞",
        docs: "https://docs.rsshub.app/routes/traditional-media#gong-tong-wang-zui-xin-bao-dao",
        source: "/news/:keyword",
        target: "/kyodonews/tchina/:keyword?",
      },
    ],
  },
  "lang.live": {
    _name: "浪 Play 直播",
    ".": [
      {
        title: "直播间开播",
        docs: "https://docs.rsshub.app/routes/live#lang-play-yuan-zhi-bo",
        source: ["/room/:id"],
        target: "/lang/live/room/:id",
      },
    ],
  },
  "lanqiao.cn": {
    _name: "蓝桥云课",
    ".": [
      {
        title: "作者发布的课程",
        docs: "https://docs.rsshub.app/routes/programming#lan-qiao-yun-ke-zuo-zhe-fa-bu-de-ke-cheng",
        source: ["/users/:uid"],
        target: "/lanqiao/author/:uid",
      },
      {
        title: "全站发布的课程",
        docs: "https://docs.rsshub.app/routes/programming#lan-qiao-yun-ke-quan-zhan-fa-bu-de-ke-cheng",
        source: ["/courses/"],
        target: "/lanqiao/courses/all",
      },
      {
        title: "技术社区",
        docs: "https://docs.rsshub.app/routes/programming#lan-qiao-yun-ke-ji-shu-she-qu",
        source: ["/questions/", "/questions/topics/:id"],
        target: "/lanqiao/questions/:id",
      },
    ],
  },
  "laohu8.com": {
    _name: "老虎社区",
    ".": [
      {
        title: "个人主页",
        docs: "https://docs.rsshub.app/routes/finance#lao-hu-she-qu",
        source: "/personal/:id",
        target: "/laohu8/personal/:id",
      },
    ],
  },
  "latepost.com": {
    _name: "晚点 Latepost",
    ".": [
      {
        title: "报道",
        docs: "https://docs.rsshub.app/routes/new-media#wan-dian-latepost-bao-dao",
        source: "*",
        target: (params, url) => {
          url = new URL(url)
          const proma = url.searchParams.get("proma")

          return `/latepost${proma ? `/${proma}` : ""}`
        },
      },
    ],
  },
  "lativ.com.tw": {
    _name: "lativ",
    www: [
      {
        title: "订阅商品价格",
        docs: "https://docs.rsshub.app/routes/shopping#lativ",
        source: "/Detail/:id",
        target: "/lativ/:id",
      },
    ],
  },
  "layer3.xyz": {
    _name: "Layer3",
    ".": [
      {
        title: "Quests",
        docs: "https://docs.rsshub.app/routes/programming#layer3-quests",
        source: ["/quests/new", "/"],
        target: "/layer3/quests",
      },
    ],
  },
  "layoffs.fyi": {
    _name: "Layoffs",
    ".": [
      {
        title: "Data Tracker Feed",
        docs: "https://docs.rsshub.app/routes/en/other#layoffs-fyi",
        source: "/",
        target: "/layoffs",
      },
    ],
  },
  "learnblockchain.cn": {
    _name: "登链社区",
    ".": [
      {
        title: "分类文章",
        docs: "https://docs.rsshub.app/routes/programming#deng-lian-she-qu-wen-zhang",
        source: "/categories/:cid/:sort?",
        target: (params) =>
          `/learnblockchain/posts/${params.cid || "all"}/${params.sort || "featured"}`,
      },
      {
        title: "全部文章",
        docs: "https://docs.rsshub.app/routes/programming#deng-lian-she-qu-wen-zhang",
        source: "*",
        target: () => "/learnblockchain/posts/all/",
      },
    ],
  },
  "learnku.com": {
    _name: "Learn Ku 社区",
    ".": [
      {
        title: "分区",
        docs: "https://docs.rsshub.app/routes/bbs#learnku",
        source: ["/:community"],
        target: "/learnku/:community",
      },
    ],
  },
  "leetcode.com": {
    _name: "LeetCode",
    ".": [
      {
        title: "文章",
        docs: "https://docs.rsshub.app/routes/programming#leetcode",
        source: ["/articles"],
        target: "/leetcode/articles",
      },
      {
        title: "打卡",
        docs: "https://docs.rsshub.app/routes/programming#leetcode",
        source: ["/:user"],
        target: (params) => {
          if (params.user !== "articles") {
            return `/leetcode/submission/us/:user`
          }
        },
      },
      {
        title: "每日一题",
        docs: "https://docs.rsshub.app/routes/programming#leetcode",
        source: ["/"],
        target: "/leetcode/dailyquestion/en",
      },
      {
        title: "每日一题题解",
        docs: "https://docs.rsshub.app/routes/programming#leetcode",
        source: ["/"],
        target: "/leetcode/dailyquestion/solution/en",
      },
    ],
  },
  "leetcode.cn": {
    _name: "LeetCode",
    ".": [
      {
        title: "打卡",
        docs: "https://docs.rsshub.app/routes/programming#leetcode",
        source: ["/:user"],
        target: (params) => {
          if (params.user !== "articles") {
            return `/leetcode/submission/cn/:user`
          }
        },
      },
      {
        title: "每日一题",
        docs: "https://docs.rsshub.app/routes/programming#leetcode",
        source: ["/"],
        target: "/leetcode/dailyquestion/cn",
      },
      {
        title: "每日一题题解",
        docs: "https://docs.rsshub.app/routes/programming#leetcode",
        source: ["/"],
        target: "/leetcode/dailyquestion/solution/cn",
      },
    ],
  },
  "leiphone.com": {
    _name: "雷峰网",
    ".": [
      {
        title: "最新文章",
        docs: "https://docs.rsshub.app/routes/new-media#lei-feng-wang-zui-xin-wen-zhang",
        source: ["/"],
        target: "/leiphone",
      },
      {
        title: "栏目",
        docs: "https://docs.rsshub.app/routes/new-media#lei-feng-wang-lan-mu",
        source: ["/category/:catename"],
        target: "/leiphone/category/:catname",
      },
      {
        title: "业界资讯",
        docs: "https://docs.rsshub.app/routes/new-media#lei-feng-wang-ye-jie-zi-xun",
        source: ["/"],
        target: "/leiphone/newsflash",
      },
    ],
  },
  "lever.co": {
    _name: "Lever",
    ".": [
      {
        title: "Lever HRIS Job Boards Feed",
        docs: "https://docs.rsshub.app/routes/other#lever",
        source: ["/:domain"],
        target: "/lever/:domain",
      },
    ],
  },
  "iyingdi.com": {
    _name: "旅法师营地",
    www: [
      {
        title: "分区",
        docs: "https://docs.rsshub.app/routes/game#lv-fa-shi-ying-di",
        source: ["/tz/tag/:tagId"],
        target: "/lfsyd/tag/:tagId",
      },
      {
        title: "用户发帖",
        docs: "https://docs.rsshub.app/routes/game#lv-fa-shi-ying-di",
        source: ["/tz/people/:id", "/tz/people/:id/*"],
        target: "/lfsyd/user/:id",
      },
      {
        title: "首页",
        docs: "https://docs.rsshub.app/routes/game#lv-fa-shi-ying-di",
        source: ["/"],
        target: "/lfsyd/home",
      },
      {
        title: "首页（旧版）",
        docs: "https://docs.rsshub.app/routes/game#lv-fa-shi-ying-di",
        source: ["/"],
        target: "/lfsyd/old_home",
      },
    ],
    mob: [
      {
        title: "分区（mob）",
        docs: "https://docs.rsshub.app/routes/game#lv-fa-shi-ying-di",
        source: ["/fine/:tagId"],
        target: "/lfsyd/tag/:tagId",
      },
    ],
  },
  "lianxh.cn": {
    _name: "连享会",
    ".": [
      {
        title: "精彩资讯",
        docs: "https://docs.rsshub.app/routes/programming#lian-xiang-hui-jing-cai-zi-xun",
        source: ["/blogs.html", "/"],
        target: "/lianxh/:category?",
      },
    ],
  },
  "lightNovel.us": {
    _name: "轻之国度",
    ".": [
      {
        title: "文章更新阅读",
        docs: "https://docs.rsshub.app/routes/anime#qing-zhi-guo-du",
        source: "/",
        target: "/lightnovel/:keywords/:security_key",
      },
    ],
  },
  "line.me": {
    _name: "LINE",
    today: [
      {
        title: "Today",
        docs: "https://docs.rsshub.app/routes/new-media#line-today",
        source: ["/"],
        target: "/line/today/:edition?/:tab?",
      },
      {
        title: "Today - 频道",
        docs: "https://docs.rsshub.app/routes/new-media#line-today",
        source: ["/:edition/v2/publisher/:id"],
        target: "/line/today/:edition/publisher/:id",
      },
    ],
  },
  "linkedin.com": {
    _name: "LinkedIn",
    ".": [
      {
        title: "Job Listing",
        docs: "https://docs.rsshub.app/routes/en/other#linkedin-jobs",
        source: "/jobs/search/",
        target: (params, url) => {
          const searchParams = new URL(url).searchParams
          const parseRoute = (searchParam) => {
            if (typeof searchParam !== "string") {
              return "all"
            }
            return searchParam.split(",").join("-")
          }
          return `/linkedin/jobs/${parseRoute(searchParams.get("f_JT"))}/${parseRoute(searchParams.get("f_E"))}/${searchParams.get("keywords") || ""}`
        },
      },
    ],
  },
  "linkedin.cn": {
    _name: "LinkedIn 领英中国",
    ".": [
      {
        title: "Jobs",
        docs: "https://docs.rsshub.app/routes/other#linkedin-ling-ying-zhong-guo",
        source: "/incareer/jobs/search",
        target: (params, url) => {
          const searchParams = new URL(url).searchParams
          return `/linkedin/cn/jobs/${searchParams.get("keywords") || ""}`
        },
      },
    ],
  },
  linkresearcher: {
    _name: "领研",
    ".": [
      {
        title: "论文",
        docs: "https://docs.rsshub.app/routes/study#ling-yan",
        source: ["/theses", "/information", "/careers"],
        target: (_, url) => {
          const pathname = new URL(url).pathname
          const searchParams = new URL(url).searchParams
          return `/linkresearcher/theses/${pathname.replace("/", "")}${searchParams.has("filters.subject") ? `&subject=${searchParams.get("filters.subject")}` : ""}${
            searchParams.has("filters.columns")
              ? `&columns=${searchParams.get("filters.columns")}`
              : ""
          }`
        },
      },
    ],
  },
  "linovelib.com": {
    _name: "哩哔轻小说",
    ".": [
      {
        title: "小说详情",
        docs: "https://docs.rsshub.app/routes/anime#linovelib",
        source: ["/novel/:id"],
        target: "/linovellib/novel/:id",
      },
    ],
  },
  "liquipedia.net": {
    _name: "Liquipedia",
    ".": [
      {
        title: "Counter Strike Match Results",
        docs: "https://docs.rsshub.app/routes/game#liquipedia",
        source: ["/counterstrike/:id/Matches", "/dota2/:id"],
        target: "/liquipedia/counterstrike/matches/:id",
      },
      {
        title: "Dota2 战队最近比赛结果",
        docs: "https://docs.rsshub.app/routes/game#liquipedia",
        source: ["/dota2/:id"],
        target: "/liquipedia/dota2/matches/:id",
      },
    ],
  },
  "literotica.com": {
    _name: "Literotica",
    ".": [
      {
        title: "New Stories",
        docs: "https://docs.rsshub.app/routes/reading#literotica-new-stories",
        source: ["/"],
        target: "/literotica/new",
      },
      {
        title: "Category",
        docs: "https://docs.rsshub.app/routes/reading#literotica-category",
        source: ["/c/:category", "/"],
        target: "/literotica/category/:category",
      },
    ],
  },
  "liulinblog.com": {
    _name: "木木博客",
    ".": [
      {
        title: "频道",
        docs: "https://docs.rsshub.app/routes/new-media#mu-mu-bo-ke",
        source: ["/:channel", "/"],
        target: (params, url) => {
          url = new URL(url)
          const path = url.href.match(/\.com(.*?)/)[1]

          return `/liulinblog${path === "/" ? "" : path}`
        },
      },
      {
        title: "标签",
        docs: "https://docs.rsshub.app/routes/new-media#mu-mu-bo-ke",
        source: ["/tag/:id", "/"],
        target: "/liulinblog/tag/:id",
      },
      {
        title: "专题",
        docs: "https://docs.rsshub.app/routes/new-media#mu-mu-bo-ke",
        source: ["/series/:id", "/"],
        target: "/liulinblog/series/:id",
      },
      {
        title: "搜索",
        docs: "https://docs.rsshub.app/routes/new-media#mu-mu-bo-ke",
        source: ["/search/:keyword", "/"],
        target: "/liulinblog/search/:keyword",
      },
      {
        title: "60秒读懂世界",
        docs: "https://docs.rsshub.app/routes/new-media#mu-mu-bo-ke",
        source: ["/kuaixun", "/"],
        target: "/liulinblog/kuaixun",
      },
      {
        title: "网络营销",
        docs: "https://docs.rsshub.app/routes/new-media#mu-mu-bo-ke",
        source: ["/:channel", "/"],
        target: (params, url) => {
          url = new URL(url)
          const path = url.href.match(/\.com(.*?)/)[1]

          return `/liulinblog${path === "/" ? "" : path}`
        },
      },
    ],
  },
  "lkong.com": {
    _name: "龙空",
    ".": [
      {
        title: "分区",
        docs: "https://docs.rsshub.app/routes/bbs#long-kong-fen-qu",
        source: ["/forum/:id", "/"],
        target: "/lkong/forum/:id?/:digest?",
      },
      {
        title: "帖子",
        docs: "https://docs.rsshub.app/routes/bbs#long-kong-tie-zi",
        source: ["/thread/:id", "/"],
        target: "/lkong/thread/:id",
      },
    ],
  },
  "lofter.com": {
    _name: "Lofter",
    www: [
      {
        title: "话题 (标签)",
        docs: "https://docs.rsshub.app/routes/social-media#lofter",
        source: ["/tag/:name", "/tag/:name/:type"],
        target: (params) => `/lofter/tag/${params.name}/${params.type || ""}`,
      },
      {
        title: "用户",
        docs: "https://docs.rsshub.app/routes/social-media#lofter",
      },
    ],
  },
  "logclub.com": {
    _name: "罗戈网",
    ".": [
      {
        title: "资讯",
        docs: "https://docs.rsshub.app/routes/new-media#luo-ge-wang-zi-xun",
        source: ["/news/:id", "/news"],
        target: (params) => {
          const id = params.id

          return `/logclub/news${id ? `/${id}` : ""}`
        },
      },
      {
        title: "资讯 - 供应链",
        docs: "https://docs.rsshub.app/routes/new-media#luo-ge-wang-zi-xun",
        source: ["/news/10-16"],
        target: "/logclub/news/10-16",
      },
      {
        title: "资讯 - 快递",
        docs: "https://docs.rsshub.app/routes/new-media#luo-ge-wang-zi-xun",
        source: ["/news/11"],
        target: "/logclub/news/11",
      },
      {
        title: "资讯 - 快运/运输",
        docs: "https://docs.rsshub.app/routes/new-media#luo-ge-wang-zi-xun",
        source: ["/news/30"],
        target: "/logclub/news/30",
      },
      {
        title: "资讯 - 仓储/地产",
        docs: "https://docs.rsshub.app/routes/new-media#luo-ge-wang-zi-xun",
        source: ["/news/9"],
        target: "/logclub/news/9",
      },
      {
        title: "资讯 - 物流综合",
        docs: "https://docs.rsshub.app/routes/new-media#luo-ge-wang-zi-xun",
        source: ["/news/32"],
        target: "/logclub/news/32",
      },
      {
        title: "资讯 - 国际与跨境物流",
        docs: "https://docs.rsshub.app/routes/new-media#luo-ge-wang-zi-xun",
        source: ["/news/114"],
        target: "/logclub/news/114",
      },
      {
        title: "资讯 - 科技创新",
        docs: "https://docs.rsshub.app/routes/new-media#luo-ge-wang-zi-xun",
        source: ["/news/107"],
        target: "/logclub/news/107",
      },
      {
        title: "资讯 - 绿色供应链",
        docs: "https://docs.rsshub.app/routes/new-media#luo-ge-wang-zi-xun",
        source: ["/news/213"],
        target: "/logclub/news/213",
      },
      {
        title: "资讯 - 低碳物流",
        docs: "https://docs.rsshub.app/routes/new-media#luo-ge-wang-zi-xun",
        source: ["/news/214"],
        target: "/logclub/news/214",
      },
      {
        title: "资讯 - 碳中和碳达峰",
        docs: "https://docs.rsshub.app/routes/new-media#luo-ge-wang-zi-xun",
        source: ["/news/215"],
        target: "/logclub/news/215",
      },
      {
        title: "招聘",
        docs: "https://docs.rsshub.app/routes/new-media#luo-ge-wang-zhao-pin",
        source: ["/recruit"],
        target: "/logclub/recruit",
      },
      {
        title: "报告",
        docs: "https://docs.rsshub.app/routes/new-media#luo-ge-wang-bao-gao",
        source: ["/lc_report"],
        target: (params, url, document) => {
          const id = document
            ?.querySelector("li.layui-this[id]")
            ?.id?.replace(/_/g, " ")
            .replace(/\b\w/g, (c) => c.toUpperCase())
            .replace(/\s/g, "")

          return `/logclub/lc_report${id ? `/${id}` : ""}`
        },
      },
      {
        title: "报告 - 罗戈研究出品",
        docs: "https://docs.rsshub.app/routes/new-media#luo-ge-wang-bao-gao",
        source: ["/lc_report"],
        target: "/logclub/lc_report/Report",
      },
      {
        title: "报告 - 物流报告",
        docs: "https://docs.rsshub.app/routes/new-media#luo-ge-wang-bao-gao",
        source: ["/lc_report"],
        target: "/logclub/lc_report/IndustryReport",
      },
      {
        title: "报告 - 绿色双碳报告",
        docs: "https://docs.rsshub.app/routes/new-media#luo-ge-wang-bao-gao",
        source: ["/lc_report"],
        target: "/logclub/lc_report/GreenDualCarbonReport",
      },
      {
        title: "招投标",
        docs: "https://docs.rsshub.app/routes/new-media#luo-ge-wang-zhao-tou-biao",
        source: ["/tender"],
        target: "/logclub/tender",
      },
      {
        title: "原创",
        docs: "https://docs.rsshub.app/routes/new-media#luo-ge-wang-zhao-yuan-chuang",
        source: ["/original"],
        target: "/logclub/original",
      },
      {
        title: "大企业",
        docs: "https://docs.rsshub.app/routes/new-media#luo-ge-wang-zhao-da-qi-ye",
        source: ["/company/:id"],
        target: "/logclub/company/:id",
      },
      {
        title: "专家说",
        docs: "https://docs.rsshub.app/routes/new-media#luo-ge-wang-zhao-zhuan-jia-shuo",
        source: ["/columnist/articleList/:id"],
        target: "/logclub/columnist/articleList/:id",
      },
    ],
  },
  "logonews.cn": {
    _name: "LogoNews 标志情报局",
    ".": [
      {
        title: "首页",
        docs: "https://docs.rsshub.app/routes/design#logonews-biao-zhi-qing-bao-ju-shou-ye",
        source: ["/"],
        target: "/logonews",
      },
      {
        title: "文章分类",
        docs: "https://docs.rsshub.app/routes/design#logonews-biao-zhi-qing-bao-ju-wen-zhang-fen-lei",
        source: ["/category/:category/:type?"],
        target: "/logonews/category/:category/:type?",
      },
      {
        title: "文章标签",
        docs: "https://docs.rsshub.app/routes/design#logonews-biao-zhi-qing-bao-ju-wen-zhang-biao-qian",
        source: ["/tag/:tag"],
        target: "/logonews/tag/:tag",
      },
      {
        title: "作品",
        docs: "https://docs.rsshub.app/routes/design#logonews-biao-zhi-qing-bao-ju-zuo-pin",
        source: ["/work"],
        target: "/logonews/work",
      },
      {
        title: "作品分类",
        docs: "https://docs.rsshub.app/routes/design#logonews-biao-zhi-qing-bao-ju-zuo-pin-fen-lei",
        source: ["/work/categorys/:category"],
        target: "/logonews/work/categorys/:category",
      },
      {
        title: "作品标签",
        docs: "https://docs.rsshub.app/routes/design#logonews-biao-zhi-qing-bao-ju-zuo-pin-biao-qian",
        source: ["/work/tags/:tag"],
        target: "/logonews/work/tags/:tag",
      },
    ],
  },
  "garena.tw": {
    _name: "Garena",
    lol: [
      {
        title: "英雄联盟台服新闻",
        docs: "https://docs.rsshub.app/routes/game#ying-xiong-lian-meng-tai-fu-xin-wen",
        source: ["/news/:category", "/news"],
        target: (params) => "/loltw/news/" + (params.category || ""),
      },
    ],
  },
  "lovelive-anime.jp": {
    _name: "Love Live 官网",
    www: [
      {
        title: "最新 NEWS",
        docs: "https://docs.rsshub.app/routes/anime#lovelive-anime-love-live-guan-wang-zui-xin-news",
        source: ["/", "/news"],
        target: "/lovelive-anime/news",
      },
      {
        title: "分类 Topics",
        docs: "https://docs.rsshub.app/routes/anime#lovelive-anime-love-live-guan-wang-fen-lei-topics",
        source: ["/:abbr/topics/", "/:abbr/topics.php"],
        target: (params, url) => {
          const cat = url.match(/\?cat=(.*)/)
          return `/lovelive-anime/topics/${params.abbr}/${null !== cat && cat.length === 2 ? cat[1] : ""}`
        },
      },
      {
        title: "Schedule",
        docs: "https://docs.rsshub.app/routes/anime#lovelive-anime-love-live-guan-wang-schedule",
        source: ["/schedule/"],
        target: (params, url) => {
          const cat = url.match(/\?series=(.*)&category=(.*)/)
          return `/lovelive-anime/schedules/${null !== cat && cat.length >= 2 ? cat[1] : ""}/${null !== cat && cat.length === 3 ? cat[2] : ""}`
        },
      },
    ],
  },
  "lsnu.edu.cn": {
    _name: "乐山师范学院",
    ".": [
      {
        title: "教学部通知公告",
        docs: "https://docs.rsshub.app/routes/university#le-shan-shi-fan-xue-yuan",
        source: ["/"],
        target: "/lsnu/jiaowc/tzgg",
      },
    ],
  },
  "luogu.com.cn": {
    _name: "洛谷",
    ".": [
      {
        title: "日报",
        docs: "https://docs.rsshub.app/routes/programming#luo-gu",
        source: ["/discuss/47327", "/"],
        target: "/luogu/daily",
      },
      {
        title: "比赛列表",
        docs: "https://docs.rsshub.app/routes/programming#luo-gu",
        source: ["/contest/list", "/"],
        target: "/luogu/contest",
      },
      {
        title: "用户动态",
        docs: "https://docs.rsshub.app/routes/programming#luo-gu",
        source: ["/user/:uid"],
        target: "/luogu/user/feed/:uid",
      },
      {
        title: "用户博客",
        docs: "https://docs.rsshub.app/routes/programming#luo-gu",
        source: ["/blog/:name"],
        target: "/luogu/user/blog/:name",
      },
    ],
  },
  "luxiangdong.com": {
    _name: "土猛的员外",
    ".": [
      {
        title: "文章",
        docs: "https://docs.rsshub.app/routes/blog#luxiangdong",
        source: ["/"],
        target: "/luxiangdong/archive",
      },
    ],
  },
  "lvv2.com": {
    _name: "LVV2",
    ".": [
      {
        title: "热门",
        docs: "https://docs.rsshub.app/routes/new-media#lvv2",
        source: ["/sort-hot"],
        target: "/lvv2/news/sort-hot",
      },
      {
        title: "最新",
        docs: "https://docs.rsshub.app/routes/new-media#lvv2",
        source: ["/sort-new"],
        target: "/lvv2/news/sort-new",
      },
      {
        title: "得分",
        docs: "https://docs.rsshub.app/routes/new-media#lvv2",
        source: ["/sort-score", "/sort-score/:sort"],
        target: (params) => {
          if (!params.sort) {
            return "/lvv2/news/sort-score"
          } else {
            return `/lvv2/news/sort-score/${params.sort}`
          }
        },
      },
      {
        title: "24小时榜",
        docs: "https://docs.rsshub.app/routes/new-media#lvv2",
        source: ["/sort-realtime", "/sort-realtime/:sort"],
        target: (params) => {
          if (!params.sort) {
            return "/lvv2/news/sort-realtime"
          } else {
            return `/lvv2/news/sort-realtime/${params.sort}`
          }
        },
      },
      {
        title: "热门 24小时 Top 10",
        docs: "https://docs.rsshub.app/routes/new-media#lvv2",
        source: ["/", "/sort-hot"],
        target: "/lvv2/top/sort-hot",
      },
      {
        title: "最新 24小时 Top 10",
        docs: "https://docs.rsshub.app/routes/new-media#lvv2",
        source: ["/sort-new"],
        target: "/lvv2/top/sort-new",
      },
      {
        title: "得分 24小时 Top 10",
        docs: "https://docs.rsshub.app/routes/new-media#lvv2",
        source: ["/sort-score", "/sort-score/:sort"],
        target: (params) => {
          if (!params.sort) {
            return "/lvv2/top/sort-score"
          } else {
            return `/lvv2/top/sort-score/${params.sort}`
          }
        },
      },
      {
        title: "24小时榜 24小时 Top 10",
        docs: "https://docs.rsshub.app/routes/new-media#lvv2",
        source: ["/sort-realtime", "/sort-realtime/:sort"],
        target: (params) => {
          if (!params.sort) {
            return "/lvv2/top/sort-realtime"
          } else {
            return `/lvv2/top/sort-realtime/${params.sort}`
          }
        },
      },
    ],
  },
  "sonymusic.co.jp": {
    _name: "Sony Music",
    www: [
      {
        title: "LiSA News",
        docs: "https://docs.rsshub.app/routes/en/live#lisa",
        source: ["/artist/lisa/", "/artist/lisa/info/"],
        target: "/lxixsxa/info",
      },
      {
        title: "LiSA Albums",
        docs: "https://docs.rsshub.app/routes/en/live#lisa",
        source: ["/artist/lisa/", "/artist/lisa/discography/"],
        target: "/lxixsxa/disco",
      },
    ],
  },
  "lxixsxa.com": {
    _name: "LiSA Official",
    www: [
      {
        title: "News",
        docs: "https://docs.rsshub.app/routes/en/live#lisa",
        source: ["/", "/info"],
        target: "/lxixsxa/info",
      },
      {
        title: "Albums",
        docs: "https://docs.rsshub.app/routes/en/live#lisa",
        source: ["/", "/discography"],
        target: "/lxixsxa/disco",
      },
    ],
  },
  "macfilos.com": {
    _name: "Macfilos",
    ".": [
      {
        title: "Blog",
        docs: "https://docs.rsshub.app/routes/new-media#macfilos-blog",
        source: ["/blog", "/"],
        target: "/macfilos/blog",
      },
    ],
  },
  "macmenubar.com": {
    _name: "MacMenuBar",
    ".": [
      {
        title: "Recently Added",
        docs: "https://docs.rsshub.app/routes/other#macmenubar",
        source: ["/recently-added", "/:category"],
        target: "/macmenubar/recently/category",
      },
    ],
  },
  "macupdate.com": {
    _name: "MacUpdate",
    ".": [
      {
        title: "更新",
        docs: "https://docs.rsshub.app/routes/program-update#macupdate",
        source: ["/app/mac/:appId/:appSlug"],
        target: "/macupdate/app/:appId/:appSlug?",
      },
    ],
  },
  "magazinelib.com": {
    _name: "magazineLib",
    ".": [
      {
        title: "Latest Magazine",
        docs: "https://docs.rsshub.app/routes/reading#magazinelib",
        source: ["/"],
        target: (_, url) => {
          const query = new URL(url).searchParams.get("s")
          if (query === null) {
            return "/magazinelib/latest-magazine"
          }
          return `/magazinelib/latest-magazine/${query}`
        },
      },
    ],
  },
  "mangadex.org": {
    _name: "MangaDex",
    ".": [
      {
        title: "漫画更新",
        docs: "https://docs.rsshub.app/routes/anime#mangadex",
        source: ["/title/:id/*", "/title/:id"],
        target: "/mangadex/:id",
      },
    ],
  },
  "manhuagui.com": {
    _name: "漫画柜",
    www: [
      {
        title: "漫画柜个人订阅",
        docs: "https://docs.rsshub.app/routes/anime#kan-man-hua",
        source: "/user/book/shelf",
        target: "/manhuagui/subscribe",
      },
      {
        title: "漫画更新",
        docs: "https://docs.rsshub.app/routes/anime#kan-man-hua",
        source: "/comic/:id/",
        target: "/manhuagui/comic/:id",
      },
    ],
    tw: [
      {
        title: "漫画更新",
        docs: "https://docs.rsshub.app/routes/anime#kan-man-hua",
        source: "/comic/:id/",
        target: "/manhuagui/twmanhuagui/comic/:id",
      },
    ],
  },
  "mhgui.com": {
    _name: "漫画柜镜像站",
    www: [
      {
        title: "漫画柜个人订阅",
        docs: "https://docs.rsshub.app/routes/anime#kan-man-hua",
        source: "/user/book/shelf",
        target: "/manhuagui/subscribe",
      },
      {
        title: "漫画更新",
        docs: "https://docs.rsshub.app/routes/anime#kan-man-hua",
        source: "/comic/:id/",
        target: "/manhuagui/comic/:id",
      },
    ],
  },
  "mastodon.social": {
    _name: "Mastodon",
    ".": [
      {
        title: "用户公共时间线",
        docs: "https://docs.rsshub.app/routes/social-media#mastodon",
        source: ["/:acct"],
        target: (params, url) =>
          params.acct.startsWith("@")
            ? `/mastodon/acct/${params.substring(1)}@${new URL(url).host}/statuses`
            : "",
      },
      {
        title: "实例公共时间线（本站）",
        docs: "https://docs.rsshub.app/routes/social-media#mastodon",
        source: ["/"],
        target: (_, url) => `/mastodon/timeline/${new URL(url).host}`,
      },
      {
        title: "实例公共时间线（跨站）",
        docs: "https://docs.rsshub.app/routes/social-media#mastodon",
        source: ["/"],
        target: (_, url) => `/mastodon/remote/${new URL(url).host}`,
      },
      {
        title: "用户公共时间线（备用）",
        docs: "https://docs.rsshub.app/routes/social-media#mastodon",
        source: ["/:acct"],
      },
    ],
  },
  "mcachicago.org": {
    _name: "MCA Chicago",
    ".": [
      {
        title: "Exhibitions",
        docs: "https://docs.rsshub.app/routes/en/travel#museum-of-contemporary-art-chicago",
      },
    ],
  },
  "mckinsey.com.cn": {
    _name: "McKinsey Greater China",
    ".": [
      {
        title: "汽车 | 洞见",
        docs: "https://docs.rsshub.app/routes/finance#mai-ken-xi",
        source: ["/insights/autos", "/insights"],
        target: "/mckinsey/cn/2",
      },
      {
        title: "金融服务 | 洞见",
        docs: "https://docs.rsshub.app/routes/finance#mai-ken-xi",
        source: ["/insights/banking-insurance", "/insights"],
        target: "/mckinsey/cn/3",
      },
      {
        title: "消费者 | 洞见",
        docs: "https://docs.rsshub.app/routes/finance#mai-ken-xi",
        source: ["/insights/consumers", "/insights"],
        target: "/mckinsey/cn/4",
      },
      {
        title: "医药 | 洞见",
        docs: "https://docs.rsshub.app/routes/finance#mai-ken-xi",
        source: ["/insights/healthcare-pharmaceuticals", "/insights"],
        target: "/mckinsey/cn/5",
      },
      {
        title: "数字化 | 洞见",
        docs: "https://docs.rsshub.app/routes/finance#mai-ken-xi",
        source: ["/insights/business-technology", "/insights"],
        target: "/mckinsey/cn/7",
      },
      {
        title: "制造业 | 洞见",
        docs: "https://docs.rsshub.app/routes/finance#mai-ken-xi",
        source: ["/insights/manufacturing", "/insights"],
        target: "/mckinsey/cn/8",
      },
      {
        title: "私募 | 洞见",
        docs: "https://docs.rsshub.app/routes/finance#mai-ken-xi",
        source: ["/insights/private-equity", "/insights"],
        target: "/mckinsey/cn/9",
      },
      {
        title: "技术，媒体与通信 | 洞见",
        docs: "https://docs.rsshub.app/routes/finance#mai-ken-xi",
        source: ["/insights/technology-media-and-telecom", "/insights"],
        target: "/mckinsey/cn/10",
      },
      {
        title: "城市化与可持续发展 | 洞见",
        docs: "https://docs.rsshub.app/routes/finance#mai-ken-xi",
        source: ["/insights/urbanization-sustainability-insights", "/insights"],
        target: "/mckinsey/cn/12",
      },
      {
        title: "创新 | 洞见",
        docs: "https://docs.rsshub.app/routes/finance#mai-ken-xi",
        source: ["/insights/innovation", "/insights"],
        target: "/mckinsey/cn/13",
      },
      {
        title: "人才与领导力 | 洞见",
        docs: "https://docs.rsshub.app/routes/finance#mai-ken-xi",
        source: ["/insights/talent-leadership", "/insights"],
        target: "/mckinsey/cn/16",
      },
      {
        title: "宏观经济 | 洞见",
        docs: "https://docs.rsshub.app/routes/finance#mai-ken-xi",
        source: ["/insights/macroeconomy", "/insights"],
        target: "/mckinsey/cn/18",
      },
      {
        title: "麦肯锡全球研究院 | 洞见",
        docs: "https://docs.rsshub.app/routes/finance#mai-ken-xi",
        source: ["/insights/mckinsey-global-institute", "/insights"],
        target: "/mckinsey/cn/19",
      },
      {
        title: "洞见 | 洞见",
        docs: "https://docs.rsshub.app/routes/finance#mai-ken-xi",
        source: ["/insights/insights", "/insights"],
        target: "/mckinsey/cn/25",
      },
      {
        title: "麦肯锡季刊 | 洞见",
        docs: "https://docs.rsshub.app/routes/finance#mai-ken-xi",
        source: ["/insights/mckinsey-season-publication", "/insights"],
        target: "/mckinsey/cn/37",
      },
      {
        title: "资本项目和基础设施 | 洞见",
        docs: "https://docs.rsshub.app/routes/finance#mai-ken-xi",
        source: ["/insights/capital-projects-infrastructure", "/insights"],
        target: "/mckinsey/cn/41",
      },
      {
        title: "旅游、运输和物流 | 洞见",
        docs: "https://docs.rsshub.app/routes/finance#mai-ken-xi",
        source: ["/insights/transport-logistics", "/insights"],
        target: "/mckinsey/cn/42",
      },
      {
        title: "全球基础材料 | 洞见",
        docs: "https://docs.rsshub.app/routes/finance#mai-ken-xi",
        source: ["/insights/global-basic-material", "/insights"],
        target: "/mckinsey/cn/45",
      },
    ],
  },
  "mclaren.com": {
    _name: "Mclaren Racing",
    www: [
      {
        title: "Mclaren Racing",
        docs: "https://docs.rsshub.app/routes/new-media#mai-kai-lun-sai-che",
        source: "/racing/articles/",
        target: "/mclaren/en/all",
      },
    ],
    cn: [
      {
        title: "迈凯伦赛车",
        docs: "https://docs.rsshub.app/routes/new-media#mai-kai-lun-sai-che",
        source: "/racing/articles/",
        target: "/mclaren/zh/all",
      },
    ],
    es: [
      {
        title: "Mclaren Racing",
        docs: "https://docs.rsshub.app/routes/new-media#mai-kai-lun-sai-che",
        source: "/racing/articles/",
        target: "/mclaren/es/all",
      },
    ],
  },
  "mdpi.com": {
    _name: "MDPI",
    www: [
      {
        title: "Journal",
        docs: "https://docs.rsshub.app/routes/journal#MDPI",
        source: "/journal/:journal",
        target: "/mdpi/:journal",
      },
    ],
  },
  "medium.com": {
    _name: "Medium",
    ".": [
      {
        title: "个性推荐 - For You",
        docs: "https://docs.rsshub.app/routes/blog#medium-ge-xing-tui-jian-for-you",
      },
      {
        title: "个性推荐 - Following",
        docs: "https://docs.rsshub.app/routes/blog#medium-ge-xing-tui-jian-following",
      },
      {
        title: "个性推荐 - Tag",
        docs: "https://docs.rsshub.app/routes/blog#medium-ge-xing-tui-jian-tag",
      },
      {
        title: "List",
        docs: "https://docs.rsshub.app/routes/blog#medium-list",
      },
    ],
  },
  "medsci.cn": {
    _name: "梅斯医学",
    ".": [
      {
        title: "资讯",
        docs: "https://docs.rsshub.app/routes/new-media#mei-si-yi-xue-zi-xun",
        source: ["/department/details", "/"],
        target: (params) =>
          `/medsci${params.s_id ? `/${params.s_id}${params.t_id ? `/${params.s_id}` : ""}` : ""}`,
      },
    ],
  },
  "meituclub.com": {
    _name: "妹图社",
    ".": [
      {
        title: "最新",
        docs: "https://docs.rsshub.app/routes/picture#mei-tu-she-zui-xin",
        source: ["/"],
        target: "/meituclub/latest",
      },
    ],
  },
  "metacritic.com": {
    _name: "Metacritic",
    ".": [
      {
        title: "Games",
        docs: "https://docs.rsshub.app/routes/new-media#metacritic-games",
        source: ["/browse/game/:params*"],
        target: (params, url) => {
          url = new URL(url)
          const sort = params.params.split(/\//).pop()
          const filter = url.searchParams.toString()

          return `/metacritic/game${sort ? `/${sort}${filter ? `/${filter}` : ""}` : ""}`
        },
      },
      {
        title: "Movies",
        docs: "https://docs.rsshub.app/routes/new-media#metacritic-movies",
        source: ["/browse/movie/:params*"],
        target: (params, url) => {
          url = new URL(url)
          const sort = params.params.split(/\//).pop()
          const filter = url.searchParams.toString()

          return `/metacritic/movie${sort ? `/${sort}${filter ? `/${filter}` : ""}` : ""}`
        },
      },
      {
        title: "TV Shows",
        docs: "https://docs.rsshub.app/routes/new-media#metacritic-tv-shows",
        source: ["/browse/tv/:params*"],
        target: (params, url) => {
          url = new URL(url)
          const sort = params.params.split(/\//).pop()
          const filter = url.searchParams.toString()

          return `/metacritic/tv${sort ? `/${sort}${filter ? `/${filter}` : ""}` : ""}`
        },
      },
    ],
  },
  "meteor.today": {
    _name: "Meteor",
    ".": [
      {
        title: "看板",
        docs: "https://docs.rsshub.app/routes/bbs#meteor",
        source: ["/board/:board", "/board/:board/new"],
        target: "/meteor/board/:board",
      },
      {
        title: "看板列表",
        docs: "https://docs.rsshub.app/routes/bbs#meteor",
        source: ["/"],
        target: "/meteor/boards",
      },
    ],
  },
  "metmuseum.org": {
    _name: "The Metropolitan Museum of Art",
    www: [
      {
        title: "Exhibitions",
        docs: "https://docs.rsshub.app/routes/en/travel#the-metropolitan-museum-of-art",
      },
    ],
  },
  "hoyoverse.com": {
    _name: "米哈游",
    genshin: [
      {
        title: "原神 - 新闻",
        docs: "https://docs.rsshub.app/routes/game##mi-ha-you",
        source: "/:location/news",
        target: "/mihoyo/ys/:location",
      },
    ],
    hsr: [
      {
        title: "崩坏：星穹铁道 - 新闻",
        docs: "https://docs.rsshub.app/routes/game##mi-ha-you",
        source: "/:location/news",
        target: "/mihoyo/sr/:location",
      },
    ],
  },
  "mihoyo.com": {
    _name: "米哈游",
    bbs: [
      {
        title: "米游社 - 同人榜",
        docs: "https://docs.rsshub.app/routes/game#mi-ha-you",
        source: "/:game/imgRanking/:forum_id/:ranking_id/:cate_id",
        target: "/mihoyo/bbs/img-ranking/:game",
      },
      {
        title: "米游社 - 官方公告",
        docs: "https://docs.rsshub.app/routes/game#mi-ha-you",
        source: [
          "/:game/home/28",
          "/:game/home/6",
          "/:game/home/31",
          "/:game/home/33",
          "/:game/home/53",
          "/:game/home/58",
        ],
        target: (params, url) => {
          const GITS_MAP = {
            bh3: 1, // '崩坏三',
            ys: 2, // '原神',
            bh2: 3, // '崩坏二',
            wd: 4, // '未定事件簿',
            sr: 6, // '崩坏：星穹铁道',
            zzz: 8, // '绝区零'
          }
          const { game } = params
          const gids = GITS_MAP[game]
          if (!gids) {
            return ""
          }
          const type = new URL(url).searchParams.get("type") || "1"
          const page_size = "20"
          const last_id = ""
          return `/mihoyo/bbs/official/${gids}/${type}/${page_size}/${last_id}`
        },
      },
    ],
    sr: [
      {
        title: "崩坏：星穹铁道 - 新闻",
        docs: "https://docs.rsshub.app/routes/game##mi-ha-you",
        source: "/news",
        target: "/mihoyo/sr",
      },
    ],
    ys: [
      {
        title: "原神 - 新闻",
        docs: "https://docs.rsshub.app/routes/game##mi-ha-you",
        source: "/:location/news/:category",
        target: "/mihoyo/ys/:location/:category",
      },
    ],
  },
  "mindmeister.com": {
    _name: "MindMeister",
    ".": [
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/study#mindmeister",
        source: [
          "/:language/mind-maps/:category",
          "/:language/:category",
          "/:category",
        ],
        target: (params) =>
          `/mindmeister/${params.category}${params.language ? `/${params.language}` : ""}`,
      },
    ],
  },
  "minecraft.net": {
    _name: "我的世界",
    ".": [
      {
        title: "Java 版游戏更新",
        docs: "https://docs.rsshub.app/routes/game#minecraft",
        source: ["/"],
        target: "/minecraft/version",
      },
    ],
  },
  "mingpao.com": {
    _name: "明报",
    ".": [
      {
        title: "即时新闻",
        docs: "https://docs.rsshub.app/routes/traditional-media#ming-bao",
        source: ["/"],
        target: "/mingpao/ins/:type?",
      },
      {
        title: "每日明报",
        docs: "https://docs.rsshub.app/routes/traditional-media#ming-bao",
        source: ["/"],
        target: "/mingpao/pns/:type?",
      },
    ],
  },
  "mpfinance.com": {
    _name: "明报",
    ".": [
      {
        title: "即时新闻",
        docs: "https://docs.rsshub.app/routes/traditional-media#ming-bao",
        source: ["/"],
        target: "/mingpao/ins/:type?",
      },
      {
        title: "每日明报",
        docs: "https://docs.rsshub.app/routes/traditional-media#ming-bao",
        source: ["/"],
        target: "/mingpao/pns/:type?",
      },
    ],
  },
  "miris.design": {
    _name: "Stratechery by Ben Thompson",
    blog: [
      {
        title: "Articles",
        docs: "https://docs.rsshub.app/routes/en/blog#stratechery-by-ben-thompson",
      },
    ],
  },
  "mirror.xyz": {
    _name: "Mirror",
    ".": [
      {
        title: "User",
        docs: "https://docs.rsshub.app/routes/new-media#mirror-user",
        source: ["/:id", "/"],
        target: (params, url) => {
          const matches = new URL(url)
            .toString()
            .match(/https:\/\/(.*?)\.mirror\.xyz/)
          const id = matches ? matches[1] : params.id
          return `/mirror/${id}`
        },
      },
    ],
  },
  "missav.com": {
    _name: "MissAV.com",
    ".": [
      {
        title: "最近更新",
        docs: "https://docs.rsshub.app/multimedia#missav-com",
        source: ["/dm397/new", "/new", "/"],
        target: "/missav/new",
      },
    ],
  },
  "misskey.io": {
    _name: "Misskey",
    ".": [
      {
        title: "Featured Notes",
        docs: "https://docs.rsshub.app/routes/social-media#misskey",
        source: ["/explore"],
        target: "/misskey/notes/featured/misskey.io",
      },
    ],
  },
  "madost.one": {
    _name: "Misskey",
    ".": [
      {
        title: "Featured Notes",
        docs: "https://docs.rsshub.app/routes/social-media#misskey",
        source: ["/explore"],
        target: "/misskey/notes/featured/madost.one",
      },
    ],
  },
  "mk.nixnet.social": {
    _name: "Misskey",
    ".": [
      {
        title: "Featured Notes",
        docs: "https://docs.rsshub.app/routes/social-media#misskey",
        source: ["/explore"],
        target: "/misskey/notes/featured/mk.nixnet.social",
      },
    ],
  },
  "mittrchina.com": {
    _name: "麻省理工科技评论",
    ".": [
      {
        title: "首页",
        docs: "https://docs.rsshub.app/routes/new-media#ma-sheng-li-gong-ke-ji-ping-lun",
        source: ["/", "/news"],
        target: "/mittrchina/index",
      },
      {
        title: "快讯",
        docs: "https://docs.rsshub.app/routes/new-media#ma-sheng-li-gong-ke-ji-ping-lun",
        source: ["/", "/breaking"],
        target: "/mittrchina/breaking",
      },
      {
        title: "本周热文",
        docs: "https://docs.rsshub.app/routes/new-media#ma-sheng-li-gong-ke-ji-ping-lun",
        source: ["/"],
        target: "/mittrchina/hot",
      },
      {
        title: "视频",
        docs: "https://docs.rsshub.app/routes/new-media#ma-sheng-li-gong-ke-ji-ping-lun",
        source: ["/", "/video"],
        target: "/mittrchina/video",
      },
    ],
  },
  "mixcloud.com": {
    _name: "Mixcloud",
    www: [
      {
        title: "User",
        docs: "https://docs.rsshub.app/routes/multimedia#mixcloud",
        source: ["/:username/:type?"],
        target: (params) => {
          if (params.username !== undefined) {
            if (
              ["stream", "uploads", "favorites", "listens"].includes(
                params.type,
              )
            ) {
              return `/mixcloud/${params.username}/${params.type}`
            } else if (params.type === undefined) {
              return `/mixcloud/${params.username}/uploads`
            }
          }
        },
      },
    ],
    ".": [
      {
        title: "User",
        docs: "https://docs.rsshub.app/routes/multimedia#mixcloud",
        source: ["/:username/:type?"],
        target: (params) => {
          if (params.username !== undefined) {
            if (
              ["stream", "uploads", "favorites", "listens"].includes(
                params.type,
              )
            ) {
              return `/mixcloud/${params.username}/${params.type}`
            } else if (params.type === undefined) {
              return `/mixcloud/${params.username}/uploads`
            }
          }
        },
      },
    ],
  },
  "mobilism.org": {
    _name: "Mobilism",
    ".": [
      {
        title: "论坛",
        docs: "https://docs.rsshub.app/routes/bbs#mobilism",
        source: "/",
      },
      {
        title: "门户",
        docs: "https://docs.rsshub.app/routes/bbs#mobilism",
        source: "/portal.php",
        target: (_params, url) =>
          `/mobilism/portal/${new URL(url).searchParams.get("block")}`,
      },
      {
        title: "电子书",
        docs: "https://docs.rsshub.app/routes/reading#mobilism",
        source: "/",
      },
    ],
  },
  "modb.pro": {
    _name: "墨天轮",
    ".": [
      {
        title: "合辑",
        docs: "https://docs.rsshub.app/routes/programming#mo-tian-lun",
        source: ["/", "/topic/:id"],
        target: (params) => `/modb/topic/${params.id}`,
      },
    ],
  },
  "modelscope.cn": {
    _name: "ModelScope 魔搭社区",
    ".": [
      {
        title: "数据集",
        docs: "https://docs.rsshub.app/routes/programming#modelscope-mo-da-she-qu",
        source: ["/datasets"],
        target: "/modelscope/datasets",
      },
      {
        title: "模型库",
        docs: "https://docs.rsshub.app/routes/programming#modelscope-mo-da-she-qu",
        source: ["/models"],
        target: "/modelscope/models",
      },
      {
        title: "创空间",
        docs: "https://docs.rsshub.app/routes/programming#modelscope-mo-da-she-qu",
        source: ["/studios"],
        target: "/modelscope/studios",
      },
    ],
    community: [
      {
        title: "DevPress 官方社区",
        docs: "https://docs.rsshub.app/routes/programming#modelscope-mo-da-she-qu",
        source: ["/"],
        target: "/modelscope/community",
      },
    ],
  },
  "mohw.gov.tw": {
    _name: "台灣衛生福利部",
    ".": [
      {
        title: "即時新聞澄清",
        docs: "https://docs.rsshub.app/routes/government#tai-wan-wei-sheng-fu-li-bu-ji-shi-xin-wen-cheng-qing",
        source: ["/"],
        target: "/mohw/clarification",
      },
    ],
  },
  "mox.moe": {
    _name: "Mox.moe",
    ".": [
      {
        title: "首頁",
        docs: "https://docs.rsshub.app/routes/anime#mox-moe-shou-ye",
        source: ["/l/:category", "/"],
        target: "/mox/:category?",
      },
    ],
  },
  "mpaypass.com.cn": {
    _name: "移动支付网",
    ".": [
      {
        title: "新闻",
        docs: "https://docs.rsshub.app/routes/new-media#yi-dong-zhi-fu-wang",
        source: "/",
        target: "/mpaypass/news",
      },
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/new-media#yi-dong-zhi-fu-wang",
        source: ["/:type", "/"],
        target: (params) =>
          `/mpaypass/main/${params.type.replace(".html", "")}`,
      },
    ],
  },
  "mrdx.cn": {
    _name: "新华每日电讯",
    ".": [
      {
        title: "今日",
        docs: "https://docs.rsshub.app/routes/traditional-media#xin-hua-mei-ri-dian-xun",
        source: ["*"],
        target: "/mrdx/today",
      },
    ],
  },
  "mtime.com": {
    _name: "时光网",
    news: [
      {
        title: "时光新闻",
        docs: "https://docs.rsshub.app/routes/multimedia#shi-guang-wang",
        source: "/",
        target: "/mtime/news",
      },
    ],
  },
  "mwm.net.cn": {
    _name: "管理世界",
    ".": [
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/journal#guan-li-shi-jie-fen-lei",
        source: ["/web/:category", "/"],
        target: "/mvm/:category?",
      },
    ],
  },
  "mydrivers.com": {
    _name: "快科技",
    m: [
      {
        title: "最新",
        docs: "https://docs.rsshub.app/routes/new-media#kuai-ke-ji-zui-xin",
        source: ["/"],
        target: "/mydrivers/new",
      },
      {
        title: "热门",
        docs: "https://docs.rsshub.app/routes/new-media#kuai-ke-ji-re-men",
        source: ["/"],
        target: "/mydrivers/hot",
      },
      {
        title: "发布会",
        docs: "https://docs.rsshub.app/routes/new-media#kuai-ke-ji-fa-bu-hui",
        source: ["/"],
        target: "/mydrivers/zhibo",
      },
      {
        title: "排行",
        docs: "https://docs.rsshub.app/routes/new-media#kuai-ke-ji-pai-hang",
        source: ["/newsclass.aspx"],
        target: "/mydrivers/rank",
      },
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/new-media#kuai-ke-ji-fen-lei",
        source: ["/newsclass.aspx"],
        target: (params, url) => {
          url = new URL(url)

          const theParam = [...url.searchParams.entries()]
            .filter(([key, value]) => key && value !== "")
            .map(([key, value]) => `${key}/${value}`)
            .pop()

          return `/mydrivers/${theParam}`
        },
      },
      {
        title: "板块 - 电脑",
        docs: "https://docs.rsshub.app/routes/new-media#kuai-ke-ji-fen-lei",
        source: ["/newsclass.aspx"],
        target: "/mydrivers/bcid/801",
      },
      {
        title: "板块 - 手机",
        docs: "https://docs.rsshub.app/routes/new-media#kuai-ke-ji-fen-lei",
        source: ["/newsclass.aspx"],
        target: "/mydrivers/bcid/802",
      },
      {
        title: "板块 - 汽车",
        docs: "https://docs.rsshub.app/routes/new-media#kuai-ke-ji-fen-lei",
        source: ["/newsclass.aspx"],
        target: "/mydrivers/bcid/807",
      },
      {
        title: "板块 - 业界",
        docs: "https://docs.rsshub.app/routes/new-media#kuai-ke-ji-fen-lei",
        source: ["/newsclass.aspx"],
        target: "/mydrivers/bcid/803",
      },
      {
        title: "板块 - 游戏",
        docs: "https://docs.rsshub.app/routes/new-media#kuai-ke-ji-fen-lei",
        source: ["/newsclass.aspx"],
        target: "/mydrivers/bcid/806",
      },
      {
        title: "话题 - 科学",
        docs: "https://docs.rsshub.app/routes/new-media#kuai-ke-ji-fen-lei",
        source: ["/newsclass.aspx"],
        target: "/mydrivers/tid/1000",
      },
      {
        title: "话题 - 排行",
        docs: "https://docs.rsshub.app/routes/new-media#kuai-ke-ji-fen-lei",
        source: ["/newsclass.aspx"],
        target: "/mydrivers/tid/1001",
      },
      {
        title: "话题 - 评测",
        docs: "https://docs.rsshub.app/routes/new-media#kuai-ke-ji-fen-lei",
        source: ["/newsclass.aspx"],
        target: "/mydrivers/tid/1002",
      },
      {
        title: "话题 - 一图",
        docs: "https://docs.rsshub.app/routes/new-media#kuai-ke-ji-fen-lei",
        source: ["/newsclass.aspx"],
        target: "/mydrivers/tid/1003",
      },
      {
        title: "品牌 - 安卓",
        docs: "https://docs.rsshub.app/routes/new-media#kuai-ke-ji-fen-lei",
        source: ["/newsclass.aspx"],
        target: "/mydrivers/icid/121",
      },
      {
        title: "品牌 - 阿里",
        docs: "https://docs.rsshub.app/routes/new-media#kuai-ke-ji-fen-lei",
        source: ["/newsclass.aspx"],
        target: "/mydrivers/icid/270",
      },
      {
        title: "品牌 - 微软",
        docs: "https://docs.rsshub.app/routes/new-media#kuai-ke-ji-fen-lei",
        source: ["/newsclass.aspx"],
        target: "/mydrivers/icid/90",
      },
      {
        title: "品牌 - 百度",
        docs: "https://docs.rsshub.app/routes/new-media#kuai-ke-ji-fen-lei",
        source: ["/newsclass.aspx"],
        target: "/mydrivers/icid/67",
      },
      {
        title: "品牌 - PS5",
        docs: "https://docs.rsshub.app/routes/new-media#kuai-ke-ji-fen-lei",
        source: ["/newsclass.aspx"],
        target: "/mydrivers/icid/6950",
      },
      {
        title: "品牌 - Xbox",
        docs: "https://docs.rsshub.app/routes/new-media#kuai-ke-ji-fen-lei",
        source: ["/newsclass.aspx"],
        target: "/mydrivers/icid/194",
      },
      {
        title: "品牌 - 华为",
        docs: "https://docs.rsshub.app/routes/new-media#kuai-ke-ji-fen-lei",
        source: ["/newsclass.aspx"],
        target: "/mydrivers/icid/136",
      },
      {
        title: "品牌 - 小米",
        docs: "https://docs.rsshub.app/routes/new-media#kuai-ke-ji-fen-lei",
        source: ["/newsclass.aspx"],
        target: "/mydrivers/icid/9355",
      },
      {
        title: "品牌 - VIVO",
        docs: "https://docs.rsshub.app/routes/new-media#kuai-ke-ji-fen-lei",
        source: ["/newsclass.aspx"],
        target: "/mydrivers/icid/288",
      },
      {
        title: "品牌 - 三星",
        docs: "https://docs.rsshub.app/routes/new-media#kuai-ke-ji-fen-lei",
        source: ["/newsclass.aspx"],
        target: "/mydrivers/icid/154",
      },
      {
        title: "品牌 - 魅族",
        docs: "https://docs.rsshub.app/routes/new-media#kuai-ke-ji-fen-lei",
        source: ["/newsclass.aspx"],
        target: "/mydrivers/icid/140",
      },
      {
        title: "品牌 - 一加",
        docs: "https://docs.rsshub.app/routes/new-media#kuai-ke-ji-fen-lei",
        source: ["/newsclass.aspx"],
        target: "/mydrivers/icid/385",
      },
      {
        title: "品牌 - 比亚迪",
        docs: "https://docs.rsshub.app/routes/new-media#kuai-ke-ji-fen-lei",
        source: ["/newsclass.aspx"],
        target: "/mydrivers/icid/770",
      },
      {
        title: "品牌 - 小鹏",
        docs: "https://docs.rsshub.app/routes/new-media#kuai-ke-ji-fen-lei",
        source: ["/newsclass.aspx"],
        target: "/mydrivers/icid/7259",
      },
      {
        title: "品牌 - 蔚来",
        docs: "https://docs.rsshub.app/routes/new-media#kuai-ke-ji-fen-lei",
        source: ["/newsclass.aspx"],
        target: "/mydrivers/icid/7318",
      },
      {
        title: "品牌 - 理想",
        docs: "https://docs.rsshub.app/routes/new-media#kuai-ke-ji-fen-lei",
        source: ["/newsclass.aspx"],
        target: "/mydrivers/icid/12947",
      },
      {
        title: "品牌 - 奔驰",
        docs: "https://docs.rsshub.app/routes/new-media#kuai-ke-ji-fen-lei",
        source: ["/newsclass.aspx"],
        target: "/mydrivers/icid/429",
      },
      {
        title: "品牌 - 宝马",
        docs: "https://docs.rsshub.app/routes/new-media#kuai-ke-ji-fen-lei",
        source: ["/newsclass.aspx"],
        target: "/mydrivers/icid/461",
      },
      {
        title: "品牌 - 大众",
        docs: "https://docs.rsshub.app/routes/new-media#kuai-ke-ji-fen-lei",
        source: ["/newsclass.aspx"],
        target: "/mydrivers/icid/481",
      },
    ],
  },
  "myfigurecollection.net": {
    _name: "MyFigureCollection",
    ".": [
      {
        title: "活動",
        docs: "https://docs.rsshub.app/routes/shopping#MyFigureCollection-huo-dong",
        source: ["/browse/activity", "/"],
        target:
          "/myfigurecollection/activity/:category?/:language?/:latestAdditions?/:latestEdits?/:latestAlerts?/:latestPictures?",
      },
      {
        title: "資料庫",
        docs: "https://docs.rsshub.app/routes/shopping#MyFigureCollection-zi-liao-ku",
        source: ["/browse", "/"],
        target: "/myfigurecollection/:category?/:language?",
      },
      {
        title: "圖片",
        docs: "https://docs.rsshub.app/routes/shopping#MyFigureCollection-tu-pian",
        source: ["/picture/browse/:category", "/"],
        target: (params) => {
          if (
            params.category === "potd" ||
            params.category === "potw" ||
            params.category === "potm"
          ) {
            return "/myfigurecollection/:category?/:language?"
          }
        },
      },
    ],
    de: [
      {
        title: "活動",
        docs: "https://docs.rsshub.app/routes/shopping#MyFigureCollection-huo-dong",
        source: ["/browse/activity", "/"],
        target:
          "/myfigurecollection/activity/:category?/:language?/:latestAdditions?/:latestEdits?/:latestAlerts?/:latestPictures?",
      },
      {
        title: "資料庫",
        docs: "https://docs.rsshub.app/routes/shopping#MyFigureCollection-zi-liao-ku",
        source: ["/browse", "/"],
        target: "/myfigurecollection/:category?/:language?",
      },
      {
        title: "圖片",
        docs: "https://docs.rsshub.app/routes/shopping#MyFigureCollection-tu-pian",
        source: ["/picture/browse/:category", "/"],
        target: (params) => {
          if (
            params.category === "potd" ||
            params.category === "potw" ||
            params.category === "potm"
          ) {
            return "/myfigurecollection/:category?/:language?"
          }
        },
      },
    ],
    es: [
      {
        title: "活動",
        docs: "https://docs.rsshub.app/routes/shopping#MyFigureCollection-huo-dong",
        source: ["/browse/activity", "/"],
        target:
          "/myfigurecollection/activity/:category?/:language?/:latestAdditions?/:latestEdits?/:latestAlerts?/:latestPictures?",
      },
      {
        title: "資料庫",
        docs: "https://docs.rsshub.app/routes/shopping#MyFigureCollection-zi-liao-ku",
        source: ["/browse", "/"],
        target: "/myfigurecollection/:category?/:language?",
      },
      {
        title: "圖片",
        docs: "https://docs.rsshub.app/routes/shopping#MyFigureCollection-tu-pian",
        source: ["/picture/browse/:category", "/"],
        target: (params) => {
          if (
            params.category === "potd" ||
            params.category === "potw" ||
            params.category === "potm"
          ) {
            return "/myfigurecollection/:category?/:language?"
          }
        },
      },
    ],
    fi: [
      {
        title: "活動",
        docs: "https://docs.rsshub.app/routes/shopping#MyFigureCollection-huo-dong",
        source: ["/browse/activity", "/"],
        target:
          "/myfigurecollection/activity/:category?/:language?/:latestAdditions?/:latestEdits?/:latestAlerts?/:latestPictures?",
      },
      {
        title: "資料庫",
        docs: "https://docs.rsshub.app/routes/shopping#MyFigureCollection-zi-liao-ku",
        source: ["/browse", "/"],
        target: "/myfigurecollection/:category?/:language?",
      },
      {
        title: "圖片",
        docs: "https://docs.rsshub.app/routes/shopping#MyFigureCollection-tu-pian",
        source: ["/picture/browse/:category", "/"],
        target: (params) => {
          if (
            params.category === "potd" ||
            params.category === "potw" ||
            params.category === "potm"
          ) {
            return "/myfigurecollection/:category?/:language?"
          }
        },
      },
    ],
    fr: [
      {
        title: "活動",
        docs: "https://docs.rsshub.app/routes/shopping#MyFigureCollection-huo-dong",
        source: ["/browse/activity", "/"],
        target:
          "/myfigurecollection/activity/:category?/:language?/:latestAdditions?/:latestEdits?/:latestAlerts?/:latestPictures?",
      },
      {
        title: "資料庫",
        docs: "https://docs.rsshub.app/routes/shopping#MyFigureCollection-zi-liao-ku",
        source: ["/browse", "/"],
        target: "/myfigurecollection/:category?/:language?",
      },
      {
        title: "圖片",
        docs: "https://docs.rsshub.app/routes/shopping#MyFigureCollection-tu-pian",
        source: ["/picture/browse/:category", "/"],
        target: (params) => {
          if (
            params.category === "potd" ||
            params.category === "potw" ||
            params.category === "potm"
          ) {
            return "/myfigurecollection/:category?/:language?"
          }
        },
      },
    ],
    it: [
      {
        title: "活動",
        docs: "https://docs.rsshub.app/routes/shopping#MyFigureCollection-huo-dong",
        source: ["/browse/activity", "/"],
        target:
          "/myfigurecollection/activity/:category?/:language?/:latestAdditions?/:latestEdits?/:latestAlerts?/:latestPictures?",
      },
      {
        title: "資料庫",
        docs: "https://docs.rsshub.app/routes/shopping#MyFigureCollection-zi-liao-ku",
        source: ["/browse", "/"],
        target: "/myfigurecollection/:category?/:language?",
      },
      {
        title: "圖片",
        docs: "https://docs.rsshub.app/routes/shopping#MyFigureCollection-tu-pian",
        source: ["/picture/browse/:category", "/"],
        target: (params) => {
          if (
            params.category === "potd" ||
            params.category === "potw" ||
            params.category === "potm"
          ) {
            return "/myfigurecollection/:category?/:language?"
          }
        },
      },
    ],
    ja: [
      {
        title: "活動",
        docs: "https://docs.rsshub.app/routes/shopping#MyFigureCollection-huo-dong",
        source: ["/browse/activity", "/"],
        target:
          "/myfigurecollection/activity/:category?/:language?/:latestAdditions?/:latestEdits?/:latestAlerts?/:latestPictures?",
      },
      {
        title: "資料庫",
        docs: "https://docs.rsshub.app/routes/shopping#MyFigureCollection-zi-liao-ku",
        source: ["/browse", "/"],
        target: "/myfigurecollection/:category?/:language?",
      },
      {
        title: "圖片",
        docs: "https://docs.rsshub.app/routes/shopping#MyFigureCollection-tu-pian",
        source: ["/picture/browse/:category", "/"],
        target: (params) => {
          if (
            params.category === "potd" ||
            params.category === "potw" ||
            params.category === "potm"
          ) {
            return "/myfigurecollection/:category?/:language?"
          }
        },
      },
    ],
    nl: [
      {
        title: "活動",
        docs: "https://docs.rsshub.app/routes/shopping#MyFigureCollection-huo-dong",
        source: ["/browse/activity", "/"],
        target:
          "/myfigurecollection/activity/:category?/:language?/:latestAdditions?/:latestEdits?/:latestAlerts?/:latestPictures?",
      },
      {
        title: "資料庫",
        docs: "https://docs.rsshub.app/routes/shopping#MyFigureCollection-zi-liao-ku",
        source: ["/browse", "/"],
        target: "/myfigurecollection/:category?/:language?",
      },
      {
        title: "圖片",
        docs: "https://docs.rsshub.app/routes/shopping#MyFigureCollection-tu-pian",
        source: ["/picture/browse/:category", "/"],
        target: (params) => {
          if (
            params.category === "potd" ||
            params.category === "potw" ||
            params.category === "potm"
          ) {
            return "/myfigurecollection/:category?/:language?"
          }
        },
      },
    ],
    no: [
      {
        title: "活動",
        docs: "https://docs.rsshub.app/routes/shopping#MyFigureCollection-huo-dong",
        source: ["/browse/activity", "/"],
        target:
          "/myfigurecollection/activity/:category?/:language?/:latestAdditions?/:latestEdits?/:latestAlerts?/:latestPictures?",
      },
      {
        title: "資料庫",
        docs: "https://docs.rsshub.app/routes/shopping#MyFigureCollection-zi-liao-ku",
        source: ["/browse", "/"],
        target: "/myfigurecollection/:category?/:language?",
      },
      {
        title: "圖片",
        docs: "https://docs.rsshub.app/routes/shopping#MyFigureCollection-tu-pian",
        source: ["/picture/browse/:category", "/"],
        target: (params) => {
          if (
            params.category === "potd" ||
            params.category === "potw" ||
            params.category === "potm"
          ) {
            return "/myfigurecollection/:category?/:language?"
          }
        },
      },
    ],
    pl: [
      {
        title: "活動",
        docs: "https://docs.rsshub.app/routes/shopping#MyFigureCollection-huo-dong",
        source: ["/browse/activity", "/"],
        target:
          "/myfigurecollection/activity/:category?/:language?/:latestAdditions?/:latestEdits?/:latestAlerts?/:latestPictures?",
      },
      {
        title: "資料庫",
        docs: "https://docs.rsshub.app/routes/shopping#MyFigureCollection-zi-liao-ku",
        source: ["/browse", "/"],
        target: "/myfigurecollection/:category?/:language?",
      },
      {
        title: "圖片",
        docs: "https://docs.rsshub.app/routes/shopping#MyFigureCollection-tu-pian",
        source: ["/picture/browse/:category", "/"],
        target: (params) => {
          if (
            params.category === "potd" ||
            params.category === "potw" ||
            params.category === "potm"
          ) {
            return "/myfigurecollection/:category?/:language?"
          }
        },
      },
    ],
    pt: [
      {
        title: "活動",
        docs: "https://docs.rsshub.app/routes/shopping#MyFigureCollection-huo-dong",
        source: ["/browse/activity", "/"],
        target:
          "/myfigurecollection/activity/:category?/:language?/:latestAdditions?/:latestEdits?/:latestAlerts?/:latestPictures?",
      },
      {
        title: "資料庫",
        docs: "https://docs.rsshub.app/routes/shopping#MyFigureCollection-zi-liao-ku",
        source: ["/browse", "/"],
        target: "/myfigurecollection/:category?/:language?",
      },
      {
        title: "圖片",
        docs: "https://docs.rsshub.app/routes/shopping#MyFigureCollection-tu-pian",
        source: ["/picture/browse/:category", "/"],
        target: (params) => {
          if (
            params.category === "potd" ||
            params.category === "potw" ||
            params.category === "potm"
          ) {
            return "/myfigurecollection/:category?/:language?"
          }
        },
      },
    ],
    ru: [
      {
        title: "活動",
        docs: "https://docs.rsshub.app/routes/shopping#MyFigureCollection-huo-dong",
        source: ["/browse/activity", "/"],
        target:
          "/myfigurecollection/activity/:category?/:language?/:latestAdditions?/:latestEdits?/:latestAlerts?/:latestPictures?",
      },
      {
        title: "資料庫",
        docs: "https://docs.rsshub.app/routes/shopping#MyFigureCollection-zi-liao-ku",
        source: ["/browse", "/"],
        target: "/myfigurecollection/:category?/:language?",
      },
      {
        title: "圖片",
        docs: "https://docs.rsshub.app/routes/shopping#MyFigureCollection-tu-pian",
        source: ["/picture/browse/:category", "/"],
        target: (params) => {
          if (
            params.category === "potd" ||
            params.category === "potw" ||
            params.category === "potm"
          ) {
            return "/myfigurecollection/:category?/:language?"
          }
        },
      },
    ],
    sv: [
      {
        title: "活動",
        docs: "https://docs.rsshub.app/routes/shopping#MyFigureCollection-huo-dong",
        source: ["/browse/activity", "/"],
        target:
          "/myfigurecollection/activity/:category?/:language?/:latestAdditions?/:latestEdits?/:latestAlerts?/:latestPictures?",
      },
      {
        title: "資料庫",
        docs: "https://docs.rsshub.app/routes/shopping#MyFigureCollection-zi-liao-ku",
        source: ["/browse", "/"],
        target: "/myfigurecollection/:category?/:language?",
      },
      {
        title: "圖片",
        docs: "https://docs.rsshub.app/routes/shopping#MyFigureCollection-tu-pian",
        source: ["/picture/browse/:category", "/"],
        target: (params) => {
          if (
            params.category === "potd" ||
            params.category === "potw" ||
            params.category === "potm"
          ) {
            return "/myfigurecollection/:category?/:language?"
          }
        },
      },
    ],
    zh: [
      {
        title: "活動",
        docs: "https://docs.rsshub.app/routes/shopping#MyFigureCollection-huo-dong",
        source: ["/browse/activity", "/"],
        target:
          "/myfigurecollection/activity/:category?/:language?/:latestAdditions?/:latestEdits?/:latestAlerts?/:latestPictures?",
      },
      {
        title: "資料庫",
        docs: "https://docs.rsshub.app/routes/shopping#MyFigureCollection-zi-liao-ku",
        source: ["/browse", "/"],
        target: "/myfigurecollection/:category?/:language?",
      },
      {
        title: "圖片",
        docs: "https://docs.rsshub.app/routes/shopping#MyFigureCollection-tu-pian",
        source: ["/picture/browse/:category", "/"],
        target: (params) => {
          if (
            params.category === "potd" ||
            params.category === "potw" ||
            params.category === "potm"
          ) {
            return "/myfigurecollection/:category?/:language?"
          }
        },
      },
    ],
  },
  "mygopen.com": {
    _name: "MyGoPen",
    ".": [
      {
        title: "分類",
        docs: "https://docs.rsshub.app/routes/new-media#mygopen-fen-lei",
        source: ["/search/label/:label", "/"],
        target: "/mygopen/:label?",
      },
    ],
  },
  "mymusicsheet.com": {
    _name: "MyMusicSheet",
    ".": [
      {
        title: "User Sheets",
        docs: "https://docs.rsshub.app/routes/shopping#mymusicsheet-user-sheets",
        source: [":username/*", "/:username"],
        target: "/mymusicsheet/user/sheets/:username",
      },
    ],
  },
  "mysql.com": {
    _name: "MySQL",
    dev: [
      {
        title: "Release Notes",
        docs: "https://docs.rsshub.app/routes/programming#mysql-release-notes",
        source: ["/"],
        target: (params, url) =>
          `/mysql/release/${new URL(url).toString().match(/\/mysql\/(.*?)\//)[1]}`,
      },
    ],
  },
  "nasa.gov": {
    _name: "NASA 每日天文图片",
    apod: [
      {
        title: "NASA",
        docs: "https://docs.rsshub.app/routes/picture#nasa-mei-ri-tian-wen-tu-pian",
        target: "/nasa/apod",
      },
      {
        title: "台湾成功大学镜像",
        docs: "https://docs.rsshub.app/routes/picture#nasa-mei-ri-tian-wen-tu-pian",
        target: "/nasa/apod-ncku",
      },
      {
        title: "NASA 中文",
        docs: "https://docs.rsshub.app/routes/picture#nasa-mei-ri-tian-wen-tu-pian",
        target: "/nasa/apod-cn",
      },
    ],
  },
  "nationalgeographic.com": {
    _name: "National Geographic",
    www: [
      {
        title: "Latest Stories",
        docs: "https://docs.rsshub.app/routes/traditional-media#hua-shi-xin-wen",
        source: "/pages/topic/latest-stories",
        target: "/nationalgeographic/latest-stories",
      },
    ],
  },
  "natgeomedia.com": {
    _name: "国家地理",
    ".": [
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/travel#guo-jia-di-li",
        source: ["/:cat/:type", "/"],
        target: "/natgeo/:cat/:type",
      },
    ],
  },
  "nature.com": {
    _name: "Nature",
    ".": [
      {
        title: "最新成果",
        docs: "https://docs.rsshub.app/routes/journal#nature-xi-lie",
        source: ["/:journal/research-articles", "/:journal", "/"],
        target: "/nature/research/:journal",
      },
      {
        title: "新闻及评论",
        docs: "https://docs.rsshub.app/routes/journal#nature-xi-lie",
        source: ["/:journal/news-and-comment", "/:journal", "/"],
        target: "/nature/news-and-comment/:journal",
      },
      {
        title: "封面故事",
        docs: "https://docs.rsshub.app/routes/journal#nature-xi-lie",
        source: ["/"],
        target: "/nature/cover",
      },
      {
        title: "主刊 - 新闻动态",
        docs: "https://docs.rsshub.app/routes/journal#nature-xi-lie",
        source: ["/latest-news", "/news", "/"],
        target: "/nature/news",
      },
      {
        title: "精彩研究",
        docs: "https://docs.rsshub.app/routes/journal#nature-xi-lie",
        source: ["/:journal/articles", "/:journal", "/"],
        target: "/nature/highlight/:journal",
      },
    ],
  },
  "nautil.us": {
    _name: "Nautilus",
    ".": [
      {
        title: "Topics",
        docs: "https://docs.rsshub.app/routes/en/new-media#nautilus",
        source: ["/topics/:tid"],
        target: "/nautil/topic/:tid",
      },
    ],
  },
  "nbd.com.cn": {
    _name: "每经网",
    ".": [
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/finance#mei-jing-wang",
        source: ["/", "/columns/:id?"],
        target: "/nbd/:id?",
      },
      {
        title: "重磅原创",
        docs: "https://docs.rsshub.app/routes/finance#mei-jing-wang",
        source: ["/", "/columns/332"],
        target: "/nbd/daily",
      },
    ],
  },
  "nber.org": {
    _name: "National Bureau of Economic Research",
    ".": [
      {
        title: "New working paper",
        docs: "https://docs.rsshub.app/routes/en/journal#national-bureau-of-economic-research",
        source: ["/papers"],
        target: "/nber/news",
      },
      {
        title: "All working paper",
        docs: "https://docs.rsshub.app/routes/en/journal#national-bureau-of-economic-research",
        source: ["/papers"],
        target: "/nber/papers",
      },
    ],
  },
  "ncepu.edu.cn": {
    _name: "华北电力大学研究生院",
    yjsy: [
      {
        title: "通知公告",
        docs: "https://docs.rsshub.app/routes/university#hua-bei-dian-li-da-xue",
        source: ["/tzgg/index.htm", "/"],
        target: "/ncepu/master/tzgg",
      },
      {
        title: "硕士招生信息",
        docs: "https://docs.rsshub.app/routes/university#hua-bei-dian-li-da-xue",
        source: ["/zsxx/sszsxx/index.htm", "/"],
        target: "/ncepu/master/zsxx",
      },
      {
        title: "研究生培养信息",
        docs: "https://docs.rsshub.app/routes/university#hua-bei-dian-li-da-xue",
        source: ["/pyxx/pyxx/index.htm", "/"],
        target: "/ncepu/master/pyxx",
      },
    ],
  },
  "ncu.edu.cn": {
    _name: "南昌大学",
    jwc: [
      {
        title: "教务通知",
        docs: "https://docs.rsshub.app/routes/university#nan-chang-da-xue",
        source: ["/", "/jwtz/index.htm"],
        target: "/ncu/jwc",
      },
    ],
  },
  "ncwu.edu.cn": {
    _name: "华北水利水电大学",
    ".": [
      {
        title: "学校通知",
        docs: "https://docs.rsshub.app/routes/university#hua-bei-shui-li-shui-dian-da-xue",
        source: "/xxtz.htm",
        target: "/ncwu/notice",
      },
    ],
  },
  "ndss-symposium.org": {
    _name: "Network and Distributed System Security (NDSS) Symposium",
    ".": [
      {
        title: "Accepted papers",
        docs: "https://docs.rsshub.app/routes/journal#network-and-distributed-system-security-ndss-symposium",
        source: ["/"],
        target: "/ndss-symposium/ndss",
      },
    ],
  },
  "neatdownloadmanager.com": {
    _name: "Neat Download Manager",
    ".": [
      {
        title: "Download",
        docs: "https://docs.rsshub.app/routes/program-update#neat-download-manager-download",
        source: ["/index.php", "/"],
        target: "/neatdownloadmanager/download/:os?",
      },
    ],
  },
  "nenu.edu.cn": {
    _name: "东北师范大学",
    sohac: [
      {
        title: "历史文化学院",
        docs: "https://docs.rsshub.app/routes/university#dong-bei-shi-fan-da-xue-li-shi-wen-hua-xue-yuan",
        source: ["/index/xyxx.htm", "/index/tzgg.htm", "/"],
        target: (params, url) =>
          `/nenu/sohac${new URL(url).href.match(/\.edu\.cn(.*?)\.htm/)[1]}`,
      },
    ],
    yjsy: [
      {
        title: "研究生院",
        docs: "https://docs.rsshub.app/routes/university#dong-bei-shi-fan-da-xue-yan-jiu-sheng-yuan",
        source: ["/tzgg.htm", "/"],
        target: (params, url) =>
          `/nenu/yjsy${new URL(url).href.match(/\.edu\.cn(.*?)\.htm/)[1]}`,
      },
    ],
  },
  "netflav.com": {
    _name: "Netflav",
    ".": [
      {
        title: "Index",
        docs: "https://docs.rsshub.app/multimedia#netflav",
        source: ["/"],
        target: "/netflav",
      },
    ],
  },
  "neu.edu.cn": {
    _name: "东北大学",
    neunews: [
      {
        title: "新闻网",
        docs: "https://docs.rsshub.app/routes/university#dong-bei-da-xue",
        source: ["/:type/list.htm"],
        target: "/neu/news/:type",
      },
    ],
    "www.bmie": [
      {
        title: "学院新闻 - 医学与生物信息工程学院",
        docs: "https://docs.rsshub.app/routes/university#dong-bei-da-xue",
        source: ["/"],
        target: "/neu/bmie/news",
      },
    ],
  },
  "newmuseum.org": {
    _name: "New Museum",
    www: [
      {
        title: "Exhibitions",
        docs: "https://docs.rsshub.app/routes/en/travel#new-museum",
      },
    ],
  },
  "newrank.cn": {
    _name: "新榜",
    ".": [
      {
        title: "微信公众号",
        docs: "https://docs.rsshub.app/routes/social-media#xin-bang",
      },
      {
        title: "抖音短视频",
        docs: "https://docs.rsshub.app/routes/social-media#xin-bang",
      },
    ],
  },
  "news.cn": {
    _name: "新华网",
    ".": [
      {
        title: "新华社新闻",
        docs: "https://docs.rsshub.app/routes/new-media#xin-hua-wang-xin-hua-she-xin-wen",
        source: ["/"],
        target: "/news/whxw",
      },
    ],
  },
  "newsmarket.com.tw": {
    _name: "上下游News&amp;Market",
    ".": [
      {
        title: "分類",
        docs: "https://docs.rsshub.app/routes/new-media#shang-xia-you-news-market",
        source: ["/blog/category/:category", "/"],
        target: "/newsmarket/:category?",
      },
    ],
  },
  "newzmz.com": {
    _name: "NEW 字幕组",
    ".": [
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/multimedia#new-zi-mu-zu",
        source: ["/"],
        target: "/newzmz",
      },
      {
        title: "指定剧集",
        docs: "https://docs.rsshub.app/routes/multimedia#new-zi-mu-zu",
        source: ["/view/:id"],
        target: (params) => `/newzmz/${params.id.replace(".html", "")}`,
      },
    ],
  },
  "nextapple.com": {
    _name: "壹蘋新聞網",
    tw: [
      {
        title: "最新新聞",
        docs: "https://docs.rsshub.app/routes/new-media#yi-ping-xin-wen-wang",
        source: ["/", "/realtime/:category"],
        target: "/nextapple/realtime/:category?",
      },
    ],
  },
  "nga.cn": {
    _name: "NGA",
    bbs: [
      {
        title: "分区帖子",
        docs: "https://docs.rsshub.app/routes/bbs#nga-fen-qu-tie-zi",
        source: "/thread.php",
        target: (params, url) =>
          new URL(url).searchParams.get("fid") &&
          `/nga/forum/${new URL(url).searchParams.get("fid")}`,
      },
      {
        title: "帖子",
        docs: "https://docs.rsshub.app/routes/bbs#nga-tie-zi",
        source: "/read.php",
        target: (params, url) =>
          new URL(url).searchParams.get("tid") &&
          `/nga/post/${new URL(url).searchParams.get("tid")}`,
      },
      {
        title: "帖子 - 只看作者",
        docs: "https://docs.rsshub.app/routes/bbs#nga-tie-zi",
        source: "/read.php",
        target: (params, url, document) => {
          const tid = new URL(url).searchParams.get("tid")
          const authorId = document.documentElement.innerHTML.match(
            /commonui\.userInfo\.setAll\(\s{3}{"(\d+)"/,
          )[1]
          return `/nga/post/${tid}/${authorId}`
        },
      },
    ],
  },
  "178.com": {
    _name: "NGA",
    nga: [
      {
        title: "分区帖子",
        docs: "https://docs.rsshub.app/routes/bbs#nga-fen-qu-tie-zi",
        source: "/thread.php",
        target: (params, url) =>
          new URL(url).searchParams.get("fid") &&
          `/nga/forum/${new URL(url).searchParams.get("fid")}`,
      },
      {
        title: "帖子",
        docs: "https://docs.rsshub.app/routes/bbs#nga-tie-zi",
        source: "/read.php",
        target: (params, url) =>
          new URL(url).searchParams.get("tid") &&
          `/nga/post/${new URL(url).searchParams.get("tid")}`,
      },
      {
        title: "帖子 - 只看作者",
        docs: "https://docs.rsshub.app/routes/bbs#nga-tie-zi",
        source: "/read.php",
        target: (params, url, document) => {
          const tid = new URL(url).searchParams.get("tid")
          const authorId = document.documentElement.innerHTML.match(
            /commonui\.userInfo\.setAll\(\s{3}{"(\d+)"/,
          )[1]
          return `/nga/post/${tid}/${authorId}`
        },
      },
    ],
  },
  "ngabbs.com": {
    _name: "NGA",
    ".": [
      {
        title: "分区帖子",
        docs: "https://docs.rsshub.app/routes/bbs#nga-fen-qu-tie-zi",
        source: "/thread.php",
        target: (params, url) =>
          new URL(url).searchParams.get("fid") &&
          `/nga/forum/${new URL(url).searchParams.get("fid")}`,
      },
      {
        title: "帖子",
        docs: "https://docs.rsshub.app/routes/bbs#nga-tie-zi",
        source: "/read.php",
        target: (params, url) =>
          new URL(url).searchParams.get("tid") &&
          `/nga/post/${new URL(url).searchParams.get("tid")}`,
      },
      {
        title: "帖子 - 只看作者",
        docs: "https://docs.rsshub.app/routes/bbs#nga-tie-zi",
        source: "/read.php",
        target: (params, url, document) => {
          const tid = new URL(url).searchParams.get("tid")
          const authorId = document.documentElement.innerHTML.match(
            /commonui\.userInfo\.setAll\(\s{3}{"(\d+)"/,
          )[1]
          return `/nga/post/${tid}/${authorId}`
        },
      },
    ],
  },
  "ngocn2.org": {
    _name: "NGOCN",
    ".": [
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/new-media#ngocn2-fen-lei",
        source: ["/"],
        target: "/ngocn2/:category?",
      },
    ],
  },
  "nhentai.net": {
    _name: "nhentai",
    ".": [
      {
        title: "分类筛选",
        docs: "https://docs.rsshub.app/routes/anime#nhentai",
        source: ["/:key/:keyword"],
        target: "/nhentai/:key/:keyword",
      },
      {
        title: "高级搜索",
        docs: "https://docs.rsshub.app/routes/anime#nhentai",
        source: ["/search"],
        target: (_, url) =>
          `/nhentai/search/${new URL(url).searchParams.get("q")}`,
      },
    ],
  },
  "nhk.or.jp": {
    _name: "NHK",
    www3: [
      {
        title: "News Web Easy",
        docs: "https://docs.rsshub.app/routes/traditional-media#nhk",
        source: ["/news/easy/", "/"],
        target: "/nhk/news_web_easy",
      },
      {
        title: "WORLD-JAPAN - 新闻提要",
        docs: "https://docs.rsshub.app/routes/traditional-media#nhk",
        source: ["/nhkworld/:lang/news/list/", "/nhkworld/:lang/news/"],
        target: "/nhk/news/:lang",
      },
    ],
  },
  "niaogebiji.com": {
    _name: "鸟哥笔记",
    ".": [
      {
        title: "首页",
        docs: "https://docs.rsshub.app/routes/new-media#niao-ge-bi-ji",
        source: ["/"],
        target: "/niaogebiji",
      },
      {
        title: "今日事",
        docs: "https://docs.rsshub.app/routes/new-media#niao-ge-bi-ji",
        source: ["/", "/bulletin"],
        target: "/niaogebiji",
      },
      {
        title: "分类目录",
        docs: "https://docs.rsshub.app/routes/new-media#niao-ge-bi-ji",
        source: ["/cat/:cat"],
        target: "/niaogebiji/cat/:cat",
      },
    ],
  },
  "nifd.cn": {
    _name: "国家金融与发展实验室",
    www: [
      {
        title: "周报",
        docs: "https://docs.rsshub.app/routes/finance#guo-jia-jin-rong-yu-fa-zhan-shi-yan-shi-yan-jiu",
        source: ["/Research"],
        target: (_, url) => {
          const categoryGuid = new URL(url).searchParams.get("categoryGuid")
          if (categoryGuid === "7a6a826d-b525-42aa-b550-4236e524227f") {
            return `/nifd/research/${categoryGuid}`
          }
        },
      },
      {
        title: "双周刊",
        docs: "https://docs.rsshub.app/routes/finance#guo-jia-jin-rong-yu-fa-zhan-shi-yan-shi-yan-jiu",
        source: ["/Research"],
        target: (_, url) => {
          const categoryGuid = new URL(url).searchParams.get("categoryGuid")
          if (categoryGuid === "128d602c-7041-4546-beff-83e605f8a370") {
            return `/nifd/research/${categoryGuid}`
          }
        },
      },
      {
        title: "月报",
        docs: "https://docs.rsshub.app/routes/finance#guo-jia-jin-rong-yu-fa-zhan-shi-yan-shi-yan-jiu",
        source: ["/Research"],
        target: (_, url) => {
          const categoryGuid = new URL(url).searchParams.get("categoryGuid")
          if (categoryGuid === "0712e220-fa3b-44d4-9226-bc3d57944e19") {
            return `/nifd/research/${categoryGuid}`
          }
        },
      },
      {
        title: "季报",
        docs: "https://docs.rsshub.app/routes/finance#guo-jia-jin-rong-yu-fa-zhan-shi-yan-shi-yan-jiu",
        source: ["/Research"],
        target: (_, url) => {
          const categoryGuid = new URL(url).searchParams.get("categoryGuid")
          if (categoryGuid === "b66aa691-87ee-4bfe-ac6b-2460386166ee") {
            return `/nifd/research/${categoryGuid}`
          }
        },
      },
      {
        title: "年报",
        docs: "https://docs.rsshub.app/routes/finance#guo-jia-jin-rong-yu-fa-zhan-shi-yan-shi-yan-jiu",
        source: ["/Research"],
        target: (_, url) => {
          const categoryGuid = new URL(url).searchParams.get("categoryGuid")
          if (categoryGuid === "c714853a-f09e-4510-8835-30a448fff7e3") {
            return `/nifd/research/${categoryGuid}`
          }
        },
      },
      {
        title: "课题报告",
        docs: "https://docs.rsshub.app/routes/finance#guo-jia-jin-rong-yu-fa-zhan-shi-yan-shi-yan-jiu",
        source: ["/Research"],
        target: (_, url) => {
          const categoryGuid = new URL(url).searchParams.get("categoryGuid")
          if (categoryGuid === "17d0b29b-7912-498a-b9c3-d30508220158") {
            return `/nifd/research/${categoryGuid}`
          }
        },
      },
      {
        title: "学术论文",
        docs: "https://docs.rsshub.app/routes/finance#guo-jia-jin-rong-yu-fa-zhan-shi-yan-shi-yan-jiu",
        source: ["/Research"],
        target: (_, url) => {
          const categoryGuid = new URL(url).searchParams.get("categoryGuid")
          if (categoryGuid === "e6a6d3a5-4bda-4739-9765-e4e41c900bcc") {
            return `/nifd/research/${categoryGuid}`
          }
        },
      },
      {
        title: "工作论文",
        docs: "https://docs.rsshub.app/routes/finance#guo-jia-jin-rong-yu-fa-zhan-shi-yan-shi-yan-jiu",
        source: ["/Research"],
        target: (_, url) => {
          const categoryGuid = new URL(url).searchParams.get("categoryGuid")
          if (categoryGuid === "3d23ba0e-4f46-44c2-9d21-6b38df4cdd70") {
            return `/nifd/research/${categoryGuid}`
          }
        },
      },
      {
        title: "研究评论",
        docs: "https://docs.rsshub.app/routes/finance#guo-jia-jin-rong-yu-fa-zhan-shi-yan-shi-yan-jiu",
        source: ["/Research"],
        target: (_, url) => {
          const categoryGuid = new URL(url).searchParams.get("categoryGuid")
          if (categoryGuid === "3333d2af-91d6-429b-be83-28b92f31b6d7") {
            return `/nifd/research/${categoryGuid}`
          }
        },
      },
      {
        title: "其他报告",
        docs: "https://docs.rsshub.app/routes/finance#guo-jia-jin-rong-yu-fa-zhan-shi-yan-shi-yan-jiu",
        source: ["/Research"],
        target: (_, url) => {
          const categoryGuid = new URL(url).searchParams.get("categoryGuid")
          if (categoryGuid === "6363bdc7-3e1b-4771-a904-6162cd3a3143") {
            return `/nifd/research/${categoryGuid}`
          }
        },
      },
    ],
  },
  "nikkei.com": {
    _name: "日本经济新闻",
    asia: [
      {
        title: "Latest News",
        docs: "https://docs.rsshub.app/routes/traditional-media#ri-ben-jing-ji-xin-wen",
        source: "/",
        target: "/nikkei/asia",
      },
    ],
    cn: [
      {
        title: "中文版新闻",
        docs: "https://docs.rsshub.app/routes/traditional-media#ri-ben-jing-ji-xin-wen-zhong-wen-ban-xin-wen",
        source: ["/:category/:type", "/:category", "/"],
        target: (params) => {
          if (params.category && params.type) {
            return `/nikkei/cn/cn/${params.category}/${params.type.replace(".html", "")}`
          } else if (params.category && !params.type) {
            return `/nikkei/cn/cn/${params.category.replace(".html", "")}`
          } else {
            return `/nikkei/cn/cn`
          }
        },
      },
    ],
    www: [
      {
        title: "ホームページ",
        docs: "https://docs.rsshub.app/routes/traditional-media#ri-ben-jing-ji-xin-wen",
        source: "/",
        target: "/nikkei/index",
      },
      {
        title: "新聞",
        docs: "https://docs.rsshub.app/routes/traditional-media#ri-ben-jing-ji-xin-wen",
        source: ["/:category/archive", "/:category"],
        target: "/nikkei/:category",
      },
    ],
    "zh.cn": [
      {
        title: "中文版新聞",
        docs: "https://docs.rsshub.app/routes/traditional-media#ri-ben-jing-ji-xin-wen-zhong-wen-ban-xin-wen",
        source: ["/:category/:type", "/:category", "/"],
        target: (params) => {
          if (params.category && params.type) {
            return `/nikkei/cn/zh/${params.category}/${params.type.replace(".html", "")}`
          } else if (params.category && !params.type) {
            return `/nikkei/cn/zh/${params.category.replace(".html", "")}`
          } else {
            return `/nikkei/cn/zh`
          }
        },
      },
    ],
  },
  "nintendo.com": {
    _name: "Nintendo",
    ".": [
      {
        title: "直面会",
        docs: "https://docs.rsshub.app/routes/game#nintendo",
        source: ["/nintendo-direct/archive", "/"],
        target: "/nintendo/direct",
      },
      {
        title: "eShop 新发售游戏",
        docs: "https://docs.rsshub.app/routes/game#nintendo",
        source: ["/store/games", "/"],
        target: "/nintendo/eshop/us",
      },
    ],
  },
  "nintendo.com.hk": {
    _name: "Nintendo",
    ".": [
      {
        title: "eShop 新发售游戏",
        docs: "https://docs.rsshub.app/routes/game#nintendo",
        source: ["/software/switch", "/"],
        target: "/nintendo/eshop/hk",
      },
      {
        title: "首页资讯（香港）",
        docs: "https://docs.rsshub.app/routes/game#nintendo",
        source: ["/topics", "/"],
        target: "/nintendo/news",
      },
    ],
  },
  "nintendo.co.jp": {
    _name: "Nintendo",
    ".": [
      {
        title: "eShop 新发售游戏",
        docs: "https://docs.rsshub.app/routes/game#nintendo",
        source: ["/software/switch/index.html", "/"],
        target: "/nintendo/eshop/jp",
      },
      {
        title: "Switch 本体更新情报（日本）",
        docs: "https://docs.rsshub.app/routes/game#nintendo",
        source: ["/support/switch/system_update/index.html", "/"],
        target: "/nintendo/system-update",
      },
    ],
  },
  "nintendoswitch.com.cn": {
    _name: "Nintendo",
    ".": [
      {
        title: "eShop 新发售游戏",
        docs: "https://docs.rsshub.app/routes/game#nintendo",
        source: ["/software", "/"],
        target: "/nintendo/eshop/cn",
      },
      {
        title: "首页资讯（中国）",
        docs: "https://docs.rsshub.app/routes/game#nintendo",
        source: ["/"],
        target: "/nintendo/news/china",
      },
    ],
  },
  "nippon.com": {
    _name: "走进日本",
    www: [
      {
        title: "政治外交",
        docs: "https://docs.rsshub.app/routes/travel#zou-jin-ri-ben",
        source: ["/nippon/:category?", "/cn"],
        target: "/nippon/:category?",
      },
    ],
  },
  "njglyy.com": {
    _name: "南京鼓楼医院",
    ".": [
      {
        title: "员工版教育培训",
        docs: "https://docs.rsshub.app/routes/university#nan-jing-gu-lou-yi-yuan-yuan-gong-ban-jiao-yu-pei-xun",
        source: ["/ygb/jypx/jypx.aspx", "/"],
        target: "/njglyy/ygbjypx",
      },
    ],
  },
  "njit.edu.cn": {
    _name: "南京工程学院",
    jwc: [
      {
        title: "南京工程学院教务处",
        docs: "https://docs.rsshub.app/routes/university#nan-jing-gong-cheng-xue-yuan-nan-jing-gong-cheng-xue-yuan-jiao-wu-chu",
        source: "/index/:type",
        target: (params) => `/njit/jwc/${params.type.replace(".htm", "")}`,
      },
    ],
    www: [
      {
        title: "南京工程学院通知公告",
        docs: "https://docs.rsshub.app/routes/university#nan-jing-gong-cheng-xue-yuan-nan-jing-gong-cheng-xue-yuan-tong-zhi-gong-gao",
        source: "/",
        target: "/njit/tzgg",
      },
    ],
  },
  "njnu.edu.cn": {
    _name: "南京师范大学",
    ceai: [
      {
        title: "计算机与电子信息学院-人工智能学院",
        docs: "https://docs.rsshub.app/routes/university#nan-jing-shi-fan-da-xue",
        source: "/",
        target: "/njnu/ceai/xygg",
      },
    ],
    jwc: [
      {
        title: "教务通知",
        docs: "https://docs.rsshub.app/routes/university#nan-jing-shi-fan-da-xue",
        source: "/",
        target: "/njnu/jwc/xwdt",
      },
    ],
  },
  "nju.edu.cn": {
    _name: "南京大学",
    admission: [
      {
        title: "本科迎新",
        docs: "https://docs.rsshub.app/routes/university#nan-jing-da-xue-ben-ke-ying-xin",
        source: ["/tzgg/index.html", "/tzgg", "/"],
        target: "/nju/admission",
      },
    ],
    dafls: [
      {
        title: "大学外语部",
        docs: "https://docs.rsshub.app/routes/university#nan-jing-da-xue-da-xue-wai-yu-bu",
        source: ["/13167/list.html", "/"],
        target: "/nju/dafls",
      },
    ],
    elite: [
      {
        title: "本科生交换生系统",
        docs: "https://docs.rsshub.app/routes/university#nan-jing-da-xue-ben-ke-sheng-yuan-jiao-huan-sheng-xi-tong",
        source: ["/exchangesystem/index/more", "/exchangesystem", "/"],
        target: (_, url) =>
          `/nju/exchangesys/${new URL(url).searchParams.get("type") === "xw" ? "news" : "proj"}`,
      },
    ],
    grawww: [
      {
        title: "研究生院",
        docs: "https://docs.rsshub.app/routes/university#nan-jing-da-xue-yan-jiu-sheng-yuan",
        source: ["/main.htm", "/"],
        target: "/nju/gra",
      },
    ],
    hospital: [
      {
        title: "校医院",
        docs: "https://docs.rsshub.app/routes/university#nan-jing-da-xue-xiao-yi-yuan",
        source: ["/ggtz/index.html"],
        target: "/nju/hospital",
      },
    ],
    itsc: [
      {
        title: "ITSC信息中心",
        docs: "https://docs.rsshub.app/routes/university#nan-jing-da-xue-itsc-xin-xi-zhong-xin",
        source: ["/tzgg/list.htm"],
        target: "/nju/itsc",
      },
    ],
    jjc: [
      {
        title: "基建处",
        docs: "https://docs.rsshub.app/routes/university#nan-jing-da-xue-ji-jian-chu",
        source: ["/main.htm", "/"],
        target: "/nju/jjc",
      },
    ],
    jw: [
      {
        title: "本科生院",
        docs: "https://docs.rsshub.app/routes/university#nan-jing-da-xue-ben-ke-sheng-yuan",
        source: ["/:type/list.htm"],
        target: "/nju/jw/:type",
      },
    ],
    rczp: [
      {
        title: "人才招聘网",
        docs: "https://docs.rsshub.app/routes/university#nan-jing-da-xue-ren-cai-zhao-pin-wang",
        source: ["/sylm/:type/index.html"],
        target: "/nju/rczp/:type",
      },
    ],
    scit: [
      {
        title: "科学技术处",
        docs: "https://docs.rsshub.app/routes/university#nan-jing-da-xue-ke-xue-ji-shu-chu",
        source: ["/:type/list.htm"],
        target: (params) =>
          `/nju/scit/${params.type === "11003" ? "kydt" : "tzgg"}`,
      },
    ],
    webplus: [
      {
        title: "后勤集团",
        docs: "https://docs.rsshub.app/routes/university#nan-jing-da-xue-hou-qin-ji-tuan",
        source: ["/_s25/main.psp"],
        target: "/nju/hqjt",
      },
    ],
    zbb: [
      {
        title: "招标办公室",
        docs: "https://docs.rsshub.app/routes/university#nan-jing-da-xue-zhao-biao-ban-gong-shi",
        source: ["/:type/index.chtml"],
        target: (params) => {
          let type
          switch (params.type) {
            case "cgxxhw":
            default:
              type = "cgxx"
              break
            case "cjgshw":
              type = "cjgs"
              break
            case "zfcgyxgk":
              type = params.type
              break
          }
          return `/nju/zbb/${type}`
        },
      },
    ],
    zcc: [
      {
        title: "资产管理处",
        docs: "https://docs.rsshub.app/routes/university#nan-jing-da-xue-zi-chan-guan-li-chu",
        source: ["/tzgg/gyfytdglk/index.html", "/tzgg/index.html", "/"],
        target: "/nju/zcc",
      },
    ],
  },
  "njucm.edu.cn": {
    _name: "南京中医药大学",
    lib: [
      {
        title: "研究生院博士招生",
        docs: "https://docs.rsshub.app/routes/university#nan-jing-zhong-yi-yao-da-xue-yan-jiu-sheng-yuan-bo-shi-zhao-sheng",
        source: ["/2899/list.htm", "/"],
        target: "/njucm/grabszs",
      },
    ],
  },
  "njupt.edu.cn": {
    _name: "南京邮电大学",
    jwc: [
      {
        title: "教务处通知与新闻",
        docs: "https://docs.rsshub.app/routes/university#nan-jing-you-dian-da-xue",
        source: "/*/list.htm",
        target: (_params, url) => {
          url = new URL(url)
          if (url.pathname.indexOf("/1594") !== -1) {
            return "/njupt/notice"
          } else if (url.pathname.indexOf("/1596") !== -1) {
            return "/njupt/news"
          }
        },
      },
    ],
  },
  "njust.edu.cn": {
    _name: "南京理工大学",
    jwc: [
      {
        title: "教务处",
        docs: "https://docs.rsshub.app/routes/university#nan-jing-li-gong-da-xue",
        source: ["/:type/list.htm"],
        target: (params) => {
          let type = ""
          switch (params.type) {
            case "1216":
              type = "jstz"
              break
            case "1217":
              type = "xstz"
              break
            case "1218":
              type = "xw"
              break
            case "1219":
              type = "xydt"
              break
            default:
              return
          }
          return `/njust/jwc/${type}`
        },
      },
    ],
    cwc: [
      {
        title: "财务处",
        docs: "https://docs.rsshub.app/routes/university#nan-jing-li-gong-da-xue",
        source: ["/:type/list.htm"],
        target: (params) => {
          let type = ""
          switch (params.type) {
            case "12432":
              type = "tzgg"
              break
            case "1382":
              type = "bslc"
              break
            default:
              return
          }
          return `/njust/cwc/${type}`
        },
      },
    ],
    gs: [
      {
        title: "研究生院",
        docs: "https://docs.rsshub.app/routes/university#nan-jing-li-gong-da-xue",
        source: ["/:type/list.htm"],
        target: "/njust/gs/:type",
      },
    ],
    eoe: [
      {
        title: "电光学院",
        docs: "https://docs.rsshub.app/routes/university#nan-jing-li-gong-da-xue",
        source: ["/:type/list.htm"],
        target: (params) => {
          let type = ""
          switch (params.type) {
            case "1920":
              type = "tzgg"
              break
            case "1919":
              type = "xwdt"
              break
            default:
              return
          }
          return `/njust/eoe/${type}`
        },
      },
    ],
    dgxg: [
      {
        title: "电光学院研学网/年级网站",
        docs: "https://docs.rsshub.app/routes/university#nan-jing-li-gong-da-xue",
        source: ["/:type/list.htm", "/:grade/:type/list.htm"],
        target: (params) => {
          if (!params.grade) {
            let type = ""
            switch (params.type) {
              case "6509":
                type = "gstz"
                break
              case "6511":
                type = "xswh"
                break
              case "6510":
                type = "jyzd"
                break
              default:
                return
            }
            return `/njust/dgxg/${type}`
          } else {
            return `/njust/eo/${params.grade}/${params.type}`
          }
        },
      },
    ],
  },
  "njxzc.edu.cn": {
    _name: "南京晓庄学院",
    lib: [
      {
        title: "图书馆通知公告",
        docs: "https://docs.rsshub.app/routes/university#nan-jing-xiao-zhuang-xue-yuan-tu-shu-guan-tong-zhi-gong-gao",
        source: ["/pxyhd/list.htm", "/"],
        target: "/njxzc/libtzgg",
      },
    ],
    www: [
      {
        title: "通知公告",
        docs: "https://docs.rsshub.app/routes/university#nan-jing-xiao-zhuang-xue-yuan-guan-wang-tong-zhi-gong-gao",
        source: ["/89/list.htm", "/"],
        target: "/njxzc/tzgg",
      },
    ],
  },
  "nltimes.nl": {
    _name: "NL Times",
    ".": [
      {
        title: "News",
        docs: "https://docs.rsshub.app/routes/new-media#nl-times",
        source: "/categories/:category",
        target: "/nltimes/news/:category",
      },
      {
        title: "News",
        docs: "https://docs.rsshub.app/routes/new-media#nl-times",
        source: "/top-stories",
        target: "/nltimes/news/top-stories",
      },
    ],
  },
  "nmbxd1.com": {
    _name: "X岛匿名版",
    www: [
      {
        title: "串",
        docs: "https://docs.rsshub.app/routes/bbs#x-dao-ni-ming-ban",
        source: ["/Forum/timeline/id/:id", "/f/:id"],
        target: "/nmbxd1/:id",
      },
    ],
  },
  "nmtv.cn": {
    _name: "内蒙古广播电视台",
    ".": [
      {
        title: "点播",
        docs: "https://docs.rsshub.app/routes/traditional-media#nei-meng-gu-guang-bo-dian-shi-tai-dian-bo",
        source: ["/"],
        target: (params, url) => `/nmtv/column/${url.split(/\/folder/).pop()}`,
      },
    ],
  },
  "nodejs.org": {
    _name: "Node.js",
    ".": [
      {
        title: "News",
        docs: "https://docs.rsshub.app/routes/programming#nodejs-news",
        source: ["/:language/blog", "/"],
        target: "/nodejs/blog/:language?",
      },
    ],
  },
  "nogizaka46.com": {
    _name: "乃木坂46",
    news: [
      {
        title: "新闻",
        docs: "https://docs.rsshub.app/routes/new-media#ban-dao-xi-lie-guan-wang-zi-xun-nai-mu-ban-46-xin-wen",
        source: ["/s/n46/news/list"],
        target: "/nogizaka46/news",
      },
    ],
    blog: [
      {
        title: "博客",
        docs: "https://docs.rsshub.app/routes/new-media#ban-dao-xi-lie-guan-wang-zi-xun-nai-mu-ban-46-bo-ke",
        source: ["/s/n46/diary/MEMBER"],
        target: "/nogizaka46/blog",
      },
    ],
  },
  "notateslaapp.com": {
    _name: "Not a Tesla App",
    ".": [
      {
        title: "特斯拉系统更新",
        docs: "https://docs.rsshub.app/routes/program-update#not-a-tesla-app",
        source: ["/software-updates/history", "/software-updates", "/"],
        target: "/notateslaapp/ota",
      },
    ],
  },
  "notefolio.net": {
    _name: "Notefolio",
    ".": [
      {
        title: "Search",
        docs: "https://docs.rsshub.app/routes/design#notefolio",
        source: ["/search"],
        target: "/notefolio/search/:category?/:order?/:time?/:query?",
      },
    ],
  },
  "notion.so": {
    _name: "Notion",
    ".": [
      {
        title: "Database",
        docs: "https://docs.rsshub.app/routes/other#notion",
        source: ["/:id"],
        target: "/notion/database/:id",
      },
    ],
  },
  "news.now.com": {
    _name: "Now 新聞",
    ".": [
      {
        title: "新聞",
        docs: "https://docs.rsshub.app/routes/traditional-media#now-xin-wen",
        source: ["/"],
        target: "/now/news/:category?/:id?",
      },
    ],
  },
  "nowcoder.com": {
    _name: "牛客网",
    ".": [
      {
        title: "面经",
        docs: "https://docs.rsshub.app/routes/bbs#niu-ke-wang-mian-jing",
        source: ["/"],
        target: "/nowcoder/experience",
      },
      {
        title: "讨论区",
        docs: "https://docs.rsshub.app/routes/bbs#niu-ke-wang",
        source: ["/discuss"],
        target: (_params, url) => {
          const href = new URL(url)
          return `/nowcoder/${href.searchParams.get("type")}/${href.searchParams.get("order")}`
        },
      },
      {
        title: "实习广场 & 社招广场",
        docs: "https://docs.rsshub.app/routes/bbs#niu-ke-wang",
        source: ["/"],
        target: "/nowcoder/jobcenter",
      },
      {
        title: "校招日程",
        docs: "https://docs.rsshub.app/routes/bbs#niu-ke-wang",
        source: ["/"],
        target: "/nowcoder/schedule",
      },
      {
        title: "求职推荐",
        docs: "https://docs.rsshub.app/routes/bbs#niu-ke-wang",
        source: ["/"],
        target: "/nowcoder/recommend",
      },
    ],
  },
  "npmjs.com": {
    _name: "npm",
    ".": [
      {
        title: "包",
        docs: "https://docs.rsshub.app/routes/program-update#npm",
        source: ["/package/:name"],
        target: "/npm/package/:name",
      },
    ],
  },
  "npr.org": {
    _name: "National Public Radio",
    ".": [
      {
        title: "News",
        docs: "https://docs.rsshub.app/routes/traditional-media#npr",
      },
    ],
  },
  "ntdtv.com": {
    _name: "新唐人电视台",
    www: [
      {
        title: "频道",
        docs: "https://docs.rsshub.app/routes/traditional-media#xin-tang-ren-dian-shi-tai",
        source: "/:language/:id",
        target: "/ntdtv/:language/:id",
      },
    ],
  },
  "nua.edu.cn": {
    _name: "南京艺术学院",
    index: [
      {
        title: "官网信息",
        docs: "https://docs.rsshub.app/routes/university#nan-jing-yi-shu-xue-yuan",
        source: ["/:type/list.htm"],
        target: "/nua/index/:type",
      },
    ],
    sxw: [
      {
        title: "双馨网",
        docs: "https://docs.rsshub.app/routes/university#nan-jing-yi-shu-xue-yuan",
        source: ["/:type/list.htm"],
        target: "/nua/sxw/:type",
      },
    ],
    dc: [
      {
        title: "设计学院",
        docs: "https://docs.rsshub.app/routes/university#nan-jing-yi-shu-xue-yuan",
        source: ["/:type/list.htm"],
        target: "/nua/dc/:type",
      },
    ],
    grad: [
      {
        title: "研究生处",
        docs: "https://docs.rsshub.app/routes/university#nan-jing-yi-shu-xue-yuan",
        source: ["/:type/list.htm"],
        target: "/nua/gra/:type",
      },
    ],
    lib: [
      {
        title: "图书馆",
        docs: "https://docs.rsshub.app/routes/university#nan-jing-yi-shu-xue-yuan",
        source: ["/:type/list.htm"],
        target: "/nua/lib/:type",
      },
    ],
  },
  "nuaa.edu.cn": {
    _name: "南京航空航天大学",
    aao: [
      {
        title: "教务处",
        docs: "https://docs.rsshub.app/routes/university#nan-jing-hang-kong-hang-tian-da-xue",
      },
    ],
    cae: [
      {
        title: "自动化学院",
        docs: "https://docs.rsshub.app/routes/university#nan-jing-hang-kong-hang-tian-da-xue",
      },
    ],
    cs: [
      {
        title: "计算机科学与技术学院",
        docs: "https://docs.rsshub.app/routes/university#nan-jing-hang-kong-hang-tian-da-xue",
      },
    ],
    "www.graduate": [
      {
        title: "研究生院",
        docs: "https://docs.rsshub.app/routes/university#nan-jing-hang-kong-hang-tian-da-xue",
      },
    ],
  },
  "nuist.edu.cn": {
    _name: "南京信息工程大学",
    bulletin: [
      {
        title: "信息公告栏",
        docs: "https://docs.rsshub.app/routes/university#nan-jing-xin-xi-gong-cheng-da-xue",
        source: ["/:category/list.htm"],
        target: "/nuist/bulletin/:category",
      },
    ],
    cas: [
      {
        title: "大气科学学院",
        docs: "https://docs.rsshub.app/routes/university#nan-jing-xin-xi-gong-cheng-da-xue",
        source: ["/index/:category"],
        target: (params) => `/nuist/cas/${params.category.replace(".htm", "")}`,
      },
    ],
    jwc: [
      {
        title: "教务处",
        docs: "https://docs.rsshub.app/routes/university#nan-jing-xin-xi-gong-cheng-da-xue",
        source: ["/index/:category", "/xxtz/:category"],
        target: (params) => `/nuist/jwc/${params.category.replace(".htm", "")}`,
      },
    ],
    lib: [
      {
        title: "图书馆",
        docs: "https://docs.rsshub.app/routes/university#nan-jing-xin-xi-gong-cheng-da-xue",
        source: ["/", "/index/tzgg.htm"],
        target: "/nuist/lib",
      },
    ],
    scs: [
      {
        title: "计软院",
        docs: "https://docs.rsshub.app/routes/university#nan-jing-xin-xi-gong-cheng-da-xue",
        source: ["/:category/list.htm"],
        target: "/nuist/scs/:category",
      },
    ],
    sese: [
      {
        title: "环科院",
        docs: "https://docs.rsshub.app/routes/university#nan-jing-xin-xi-gong-cheng-da-xue",
        source: ["/:category"],
        target: (params) =>
          `/nuist/sese/${params.category.replace(".htm", "")}`,
      },
    ],
    xgc: [
      {
        title: "学生工作处",
        docs: "https://docs.rsshub.app/routes/university#nan-jing-xin-xi-gong-cheng-da-xue",
        source: ["/", "/419/list.htm"],
        target: "/nuist/xgc",
      },
    ],
    yjs: [
      {
        title: "研究生院学科建设处",
        docs: "https://docs.rsshub.app/routes/university#nan-jing-xin-xi-gong-cheng-da-xue",
        source: ["/"],
        target: "/nuist/jwc/:path+",
      },
    ],
  },
  "nwafu.edu.cn": {
    _name: "西北农林科技大学",
    ".": [
      {
        title: "校园要闻",
        docs: "https://docs.rsshub.app/routes/university#xi-bei-nong-lin-ke-ji-da-xue-xiao-yuan-yao-wen",
        source: ["/tzgg.htm", "/"],
        target: "/nwafu/jiaowu",
      },
    ],
  },
  "nyaa.si": {
    _name: "nyaa",
    ".": [
      {
        title: "nyaa 的搜索结果、指定用户、指定用户的搜索结果",
        docs: "https://docs.rsshub.app/routes/multimedia#nyaa",
        source: ["/", "/user/:username"],
        target: (params, url) => {
          url = new URL(url)
          const username = params.username
          const query = url.searchParams.get("q")

          let currentURL = "/nyaa"
          if (username !== undefined) {
            currentURL = `${currentURL}/user/${username}`
          }
          if (query !== null) {
            currentURL = `${currentURL}/search/${query}`
          }
          return currentURL
        },
      },
    ],
    sukebei: [
      {
        title: "sukebei 的搜索结果、指定用户、指定用户的搜索结果",
        docs: "https://docs.rsshub.app/routes/multimedia#nyaa",
        source: ["/", "/user/:username"],
        target: (params, url) => {
          url = new URL(url)
          const username = params.username
          const query = url.searchParams.get("q")

          let currentURL = "/nyaa/sukebei"
          if (username !== undefined) {
            currentURL = `${currentURL}/user/${username}`
          }
          if (query !== null) {
            currentURL = `${currentURL}/search/${query}`
          }
          return currentURL
        },
      },
    ],
  },
  "nytimes.com": {
    _name: "纽约时报",
    ".": [
      {
        title: "新闻简报",
        docs: "https://docs.rsshub.app/routes/traditional-media#niu-yue-shi-bao",
        source: "/zh-hans/series/daily-briefing-chinese",
        target: "/nytimes/daily_briefing_chinese",
      },
      {
        title: "畅销书排行榜",
        docs: "https://docs.rsshub.app/routes/traditional-media#niu-yue-shi-bao",
        source: ["/books/best-sellers/:category", "/books/best-sellers/"],
        target: "/nytimes/book/:category",
      },
      {
        title: "作者新闻",
        docs: "https://docs.rsshub.app/routes/traditional-media#niu-yue-shi-bao",
        source: "/by/:byline",
        target: "/nytimes/author/:byline",
      },
      {
        title: "新闻",
        docs: "https://docs.rsshub.app/routes/traditional-media#niu-yue-shi-bao",
        source: "/",
        target: "/nytimes",
      },
    ],
  },
  "oceanengine.com": {
    _name: "巨量算数",
    trendinsight: [
      {
        title: "抖音/头条指数波峰",
        docs: "https://docs.rsshub.app/routes/other#ju-liang-suan-shu-suan-shu-zhi-shu",
        source: ["/arithmetic-index/analysis"],
        target: (params, url) =>
          `/oceanengine/index/${new URL(url).searchParams.get("keyword")}`,
      },
    ],
  },
  "odaily.news": {
    _name: "Odaily 星球日报",
    ".": [
      {
        title: "快讯",
        docs: "https://docs.rsshub.app/routes/new-media#odaily-xing-qiu-ri-bao-kuai-xun",
        source: ["/newsflash", "/"],
        target: "/odaily/newsflash",
      },
      {
        title: "搜索快讯",
        docs: "https://docs.rsshub.app/routes/new-media#odaily-xing-qiu-ri-bao-sou-suo-kuai-xun",
        source: ["/search/:keyword"],
        target: "/odaily/search/news/:keyword",
      },
      {
        title: "文章",
        docs: "https://docs.rsshub.app/routes/new-media#odaily-xing-qiu-ri-bao-wen-zhang",
        source: ["/"],
        target: "/odaily/:id?",
      },
      {
        title: "用户文章",
        docs: "https://docs.rsshub.app/routes/new-media#odaily-xing-qiu-ri-bao-yong-hu-wen-zhang",
        source: ["/user/:id", "/"],
        target: "/odaily/user/:id",
      },
      {
        title: "活动",
        docs: "https://docs.rsshub.app/routes/new-media#odaily-xing-qiu-ri-bao-huo-dong",
        source: ["/activityPage", "/"],
        target: "/odaily/activity",
      },
    ],
  },
  "0daily.com": {
    _name: "Odaily 星球日报",
    ".": [
      {
        title: "快讯",
        docs: "https://docs.rsshub.app/routes/new-media#odaily-xing-qiu-ri-bao-kuai-xun",
        source: ["/newsflash", "/"],
        target: "/odaily/newsflash",
      },
      {
        title: "搜索快讯",
        docs: "https://docs.rsshub.app/routes/new-media#odaily-xing-qiu-ri-bao-sou-suo-kuai-xun",
        source: ["/search/:keyword"],
        target: "/odaily/search/news/:keyword",
      },
      {
        title: "文章",
        docs: "https://docs.rsshub.app/routes/new-media#odaily-xing-qiu-ri-bao-wen-zhang",
        source: ["/"],
        target: "/odaily/:id?",
      },
      {
        title: "用户文章",
        docs: "https://docs.rsshub.app/routes/new-media#odaily-xing-qiu-ri-bao-yong-hu-wen-zhang",
        source: ["/user/:id", "/"],
        target: "/odaily/user/:id",
      },
      {
        title: "活动",
        docs: "https://docs.rsshub.app/routes/new-media#odaily-xing-qiu-ri-bao-huo-dong",
        source: ["/activityPage", "/"],
        target: "/odaily/activity",
      },
    ],
  },
  "oeeee.com": {
    _name: "奥一网",
    ".": [
      {
        title: "新闻",
        docs: "https://docs.rsshub.app/routes/traditional-media#nan-fang-du-shi-bao",
        source: ["/"],
      },
    ],
  },
  "oilchem.net": {
    _name: "隆众资讯",
    ".": [
      {
        title: "资讯",
        docs: "https://docs.rsshub.app/routes/new-media#long-zhong-zi-xun",
      },
    ],
  },
  "on.cc": {
    _name: "东网",
    hk: [
      {
        title: "港澳",
        docs: "https://docs.rsshub.app/routes/traditional-media#dong-wang",
        source: ["/hk/news/index.html", "/hk/news/index_cn.html"],
        target: "/oncc/zh-hans/news",
      },
      {
        title: "两岸",
        docs: "https://docs.rsshub.app/routes/traditional-media#dong-wang",
        source: ["/hk/cnnews/index.html", "/hk/cnnews/index_cn.html"],
        target: "/oncc/zh-hans/cnnews",
      },
      {
        title: "国际",
        docs: "https://docs.rsshub.app/routes/traditional-media#dong-wang",
        source: ["/hk/intnews/index.html", "/hk/intnews/index_cn.html"],
        target: "/oncc/zh-hans/intnews",
      },
      {
        title: "评论",
        docs: "https://docs.rsshub.app/routes/traditional-media#dong-wang",
        source: ["/hk/commentary/index.html", "/hk/commentary/index_cn.html"],
        target: "/oncc/zh-hans/commentary",
      },
      {
        title: "产经",
        docs: "https://docs.rsshub.app/routes/traditional-media#dong-wang",
        source: ["/hk/finance/index.html", "/hk/finance/index_cn.html"],
        target: "/oncc/zh-hans/finance",
      },
    ],
    money18: [
      {
        title: "產經",
        docs: "https://docs.rsshub.app/routes/traditional-media#dong-wang",
        source: ["/finnews/news_breaking.html"],
        target: (params, url) =>
          `/oncc/money18/${new URL(url).searchParams.get("section")}`,
      },
    ],
  },
  "oo-software.com": {
    _name: "O&O Software",
    ".": [
      {
        title: "Changelog",
        docs: "https://docs.rsshub.app/routes/program-update#oo-software-changelog",
        source: ["/en/changelog"],
        target: (params, url) =>
          `/oo-software/changelog/${url.match(/\/en\/(.*?)\/changelog/)[1]}`,
      },
    ],
  },
  "openai.com": {
    _name: "OpenAI",
    ".": [
      {
        title: "Blog",
        docs: "https://docs.rsshub.app/routes/en/new-media#openai",
        source: "/blog",
        target: (_, url) => {
          const topics = new URL(url).searchParams.get("topics")
          if (topics) {
            return `/openai/blog/${topics}`
          }
          return "/openai/blog"
        },
      },
    ],
    chat: [
      {
        title: "ChatGPT - Release Notes",
        docs: "https://docs.rsshub.app/routes/en/new-media#openai",
        source: "/chat",
        target: () => "/openai/chatgpt/release-notes",
      },
    ],
    research: [
      {
        title: "Research",
        docs: "https://docs.rsshub.app/routes/en/new-media#openai",
        source: "/research",
        target: () => "/openai/research",
      },
    ],
  },
  "openwrt.org": {
    _name: "Openwrt",
    ".": [
      {
        title: "Model Releases",
        docs: "https://docs.rsshub.app/routes/program-update#openwrt",
        source: "/toh/:band/:model",
        target: "/openwrt/releases/:model",
      },
    ],
  },
  "orcid.org": {
    _name: "ORCID",
    ".": [
      {
        title: "作品列表",
        docs: "https://docs.rsshub.app/routes/study#orcid",
        source: ["/:id", "/"],
        target: "/ocrid/:id",
      },
    ],
  },
  "oreno3d.com": {
    _name: "俺の3Dエロ動画",
    ".": [
      {
        title: "关键词搜索",
        docs: "https://docs.rsshub.app/routes/anime#an-の3dエロ-dong-hua-oreno3d-guan-jian-ci-sou-suo",
        source: ["/search"],
        target: (_params, url) => {
          const searchParams = new URL(url).searchParams
          return `/oreno3d/search/${searchParams.get("keyword")}${searchParams.has("sort") ? "/" + searchParams.get("sort") : ""}`
        },
      },
      {
        title: "角色搜索",
        docs: "https://docs.rsshub.app/routes/anime#an-の3dエロ-dong-hua-oreno3d-jiao-se-sou-suo",
        source: ["/characters/:characterid"],
        target: (params, url) => {
          const searchParams = new URL(url).searchParams
          return `/oreno3d/characters/${params.characterid}${searchParams.has("sort") ? "/" + searchParams.get("sort") : ""}`
        },
      },
      {
        title: "作者搜索",
        docs: "https://docs.rsshub.app/routes/anime#an-の3dエロ-dong-hua-oreno3d-zuo-zhe-sou-suo",
        source: ["/authors/:authorid"],
        target: (params, url) => {
          const searchParams = new URL(url).searchParams
          return `/oreno3d/authors/${params.authorid}${searchParams.has("sort") ? "/" + searchParams.get("sort") : ""}`
        },
      },
      {
        title: "标签搜索",
        docs: "https://docs.rsshub.app/routes/anime#an-の3dエロ-dong-hua-oreno3d-biao-qian-sou-suo",
        source: ["/tags/:tagid"],
        target: (params, url) => {
          const searchParams = new URL(url).searchParams
          return `/oreno3d/tags/${params.tagid}${searchParams.has("sort") ? "/" + searchParams.get("sort") : ""}`
        },
      },
      {
        title: "原作搜索",
        docs: "https://docs.rsshub.app/routes/anime#an-の3dエロ-dong-hua-oreno3d-yuan-zuo-sou-suo",
        source: ["/origins/:originid"],
        target: (params, url) => {
          const searchParams = new URL(url).searchParams
          return `/oreno3d/origins/${params.originid}${searchParams.has("sort") ? "/" + searchParams.get("sort") : ""}`
        },
      },
    ],
  },
  "oschina.net": {
    _name: "开源中国",
    ".": [
      {
        title: "资讯",
        docs: "https://docs.rsshub.app/routes/programming#kai-yuan-zhong-guo",
        source: ["/news/:category"],
        target: "/oschina/news/:category",
      },
      {
        title: "问答主题",
        docs: "https://docs.rsshub.app/routes/programming#kai-yuan-zhong-guo",
        source: ["/question/topic/:topic"],
        target: "/oschina/topic/:topic",
      },
    ],
    my: [
      {
        title: "用户博客",
        docs: "https://docs.rsshub.app/routes/programming#kai-yuan-zhong-guo",
        source: ["/:id"],
        target: "/oschina/user/:id",
      },
      {
        title: "数字型账号用户博客",
        docs: "https://docs.rsshub.app/routes/programming#kai-yuan-zhong-guo",
        source: ["/u/:uid"],
        target: "/oschina/u/:uid",
      },
    ],
  },
  "oshwhub.com": {
    _name: "立创开源硬件平台",
    ".": [
      {
        title: "开源广场",
        docs: "https://docs.rsshub.app/routes/other#li-chuang-kai-yuan-ying-jian-ping-tai",
        source: ["/explore"],
        target: (_, url) => {
          const sortType = new URL(url).searchParams.get("projectSort")
          return sortType ? `/oshwhub/${sortType}` : ""
        },
      },
    ],
  },
  "ppy.sh": {
    _name: "osu!",
    osu: [
      {
        title: "Beatmap Pack",
        docs: "https://docs.rsshub.app/routes/game#osu-beatmap-packs",
        source: "/beatmaps/packs",
        target: (params, url) =>
          `https://osu.ppy.sh/beatmaps/packs?type=${new URL(url).searchParams.get("type") ?? "standard"}`,
      },
    ],
  },
  "ouc.edu.cn": {
    _name: "中国海洋大学",
    it: [
      {
        title: "信息科学与工程学院",
        docs: "https://docs.rsshub.app/routes/university#zhong-guo-hai-yang-da-xue",
        source: ["/"],
        target: "/ouc/it",
      },
      {
        title: "信息科学与工程学院研究生招生通知公告",
        docs: "https://docs.rsshub.app/routes/university#zhong-guo-hai-yang-da-xue",
        source: ["/_s381/16619/list.psp", "/16619/list.htm", "/"],
        target: "/ouc/it/postgraduate",
      },
      {
        title: "信息科学与工程学部团学工作",
        docs: "https://docs.rsshub.app/routes/university#zhong-guo-hai-yang-da-xue-xin-xi-ke-xue-yu-gong-cheng-xue-yuan-tuan-xue-gong-zuo",
        source: ["/tx/:id/list.htm"],
        target: "/ouc/it/tx/:id",
      },
    ],
    jwc: [
      {
        title: "教务处",
        docs: "https://docs.rsshub.app/routes/university#zhong-guo-hai-yang-da-xue",
        source: ["/", "/6517/list.htm"],
        target: "/ouc/jwc",
      },
    ],
    jwgl: [
      {
        title: "选课信息教务通知",
        docs: "https://docs.rsshub.app/routes/university#zhong-guo-hai-yang-da-xue",
        source: ["/cas/login.action", "/public/SchoolNotice.jsp"],
        target: "/ouc/jwgl",
      },
    ],
    yz: [
      {
        title: "研究生院",
        docs: "https://docs.rsshub.app/routes/university#zhong-guo-hai-yang-da-xue",
        source: ["/5926/list.htm"],
        target: "/ouc/yjs",
      },
    ],
  },
  "oup.com": {
    _name: "Oxford University Press",
    academic: [
      {
        title: "期刊",
        docs: "https://docs.rsshub.app/routes/journal#oxford-university-press",
        source: ["/", "/:name/issue"],
        target: "/oup/journals/:name",
      },
    ],
  },
  "outage.report": {
    _name: "Outage.Report",
    ".": [
      {
        title: "Report",
        docs: "https://docs.rsshub.app/routes/forecast#outage-report",
        source: ["/"],
        target: (params, url) =>
          `/outagereport/${new URL(url).toString().split("/").pop()}`,
      },
    ],
  },
  "panewslab.com": {
    _name: "PANews",
    ".": [
      {
        title: "深度",
        docs: "https://docs.rsshub.app/routes/new-media#panews-shen-du",
        source: "/",
        target: "/panewslab/:category?",
      },
      {
        title: "快讯",
        docs: "https://docs.rsshub.app/routes/new-media#panews-kuai-xun",
        source: "/",
        target: "/panewslab/news",
      },
      {
        title: "专栏",
        docs: "https://docs.rsshub.app/routes/new-media#panews-zhuan-lan",
        source: "/",
        target: "/panewslab/author/:id",
      },
      {
        title: "专题",
        docs: "https://docs.rsshub.app/routes/new-media#panews-zhuan-ti",
        source: "/",
        target: "/panewslab/topic/:id",
      },
    ],
  },
  "paradigm.xyz": {
    _name: "Paradigm",
    ".": [
      {
        title: "Writing",
        docs: "https://docs.rsshub.app/routes/finance#paradigm",
        source: ["/writing"],
        target: "/paradigm/writing",
      },
    ],
  },
  "patagonia.com": {
    _name: "Patagonia",
    ".": [
      {
        title: "New Arrivals",
        docs: "https://docs.rsshub.app/routes/shopping#patagonia",
        source: ["/shop/*new-arrivals"],
        target: (_, url) => {
          const param = new URL(url).pathname
            .split("/")
            .pop()
            .replace("-new-arrivals", "")
          if (param === "new-arrivals") {
            return ""
          }
          if (param === "kids-baby") {
            return "/patagonia/new-arrivals/kids"
          } else {
            return `/patagonia/new-arrivals/${param}`
          }
        },
      },
    ],
  },
  "paulgraham.com": {
    _name: "Paul Graham",
    ".": [
      {
        title: "Essays",
        docs: "https://docs.rsshub.app/routes/blog#paulgraham-essays",
        source: ["/articles.html"],
        target: "/paulgraham/articles",
      },
    ],
  },
  "penguinrandomhouse.com": {
    _name: "Penguin Random House",
    ".": [
      {
        title: "Penguin Random House Book Lists",
        docs: "https://docs.rsshub.app/routes/reading#penguin-random-house",
        source: ["/the-read-down"],
        target: "/penguin-random-house/the-read-down",
      },
      {
        title: "Penguin Random House Articles",
        docs: "https://docs.rsshub.app/routes/reading#penguin-random-house",
        source: ["/articles"],
        target: "/penguin-random-house/articles",
      },
    ],
  },
  "people.com.cn": {
    _name: "人民网",
    ".": [
      {
        title: "通用",
        docs: "https://docs.rsshub.app/routes/traditional-media#ren-min-wang-tong-yong",
        source: "/",
        target: "/people/:site?/:category?",
      },
    ],
    liuyan: [
      {
        title: "领导留言板",
        docs: "https://docs.rsshub.app/routes/traditional-media#ren-min-wang-ling-dao-liu-yan-ban",
        source: "/",
        target: "/people/liuyan/:id/:state?",
      },
    ],
  },
  "peopo.org": {
    _name: "PeoPo 公民新聞",
    ".": [
      {
        title: "新聞分類",
        docs: "https://docs.rsshub.app/routes/new-media#peopo-gong-min-xin-wen",
        source: "/topic/:topicId",
        target: "/peopo/topic/:topicId",
      },
    ],
  },
  "phoronix.com": {
    _name: "Phoronix",
    ".": [
      {
        title: "News & Reviews",
        docs: "https://docs.rsshub.app/routes/new-media#phoronix",
        source: ["/:category?/:topic?"],
        target: "/phoronix/:category?/:topic?",
      },
    ],
  },
  "pianyuan.org": {
    _name: "片源网",
    ".": [
      {
        title: "电影和剧集",
        docs: "https://docs.rsshub.app/routes/multimedia#pian-yuan",
        source: "/",
        target: "/pianyuan/index",
      },
    ],
  },
  "picnob.com": {
    _name: "Picnob",
    ".": [
      {
        title: "User profile",
        docs: "https://docs.rsshub.app/routes/en/social-media#picnob",
        source: ["/profile/:id/*"],
        target: "/picnob/user/:id",
      },
    ],
  },
  "picuki.com": {
    _name: "Picuki",
    www: [
      {
        title: "用户",
        docs: "https://docs.rsshub.app/routes/social-media#picuki-yong-hu",
        source: "/profile/:id",
        target: "/picuki/profile/:id",
      },
    ],
  },
  "pikabu.ru": {
    _name: "Pikabu",
    ".": [
      {
        title: "Community",
        docs: "https://docs.rsshub.app/routes/en/bbs#pikabu",
        source: ["/community/:name"],
        target: "/pikabu/community/:name",
      },
      {
        title: "Tag",
        docs: "https://docs.rsshub.app/routes/en/bbs#pikabu",
        source: ["/tag/:name"],
        target: "/pikabu/tag/:name",
      },
      {
        title: "User",
        docs: "https://docs.rsshub.app/routes/en/bbs#pikabu",
        source: ["/:name"],
        target: "/pikabu/user/:name",
      },
    ],
  },
  "pincong.rocks": {
    _name: "品葱",
    ".": [
      {
        title: "发现",
        docs: "https://docs.rsshub.app/routes/bbs#pin-cong",
        source: "/",
        target: (_params, url) => {
          const sortMap = {
            "sort_type-new": "new",
            "recommend-1": "recommend",
            "sort_type-hot__day2": "hot",
          }
          const path = new URL(url).pathname
          const category = (
            /__category/.test(path) ? path.split("__")[1] : path
          ).replace("category-", "")
          const sort =
            sortMap[
              /__category/.test(path) ? path.split("__")[0] : "recommend-1"
            ]
          return `/pincong/category/${category}/${sort}`
        },
      },
      {
        title: "精选",
        docs: "https://docs.rsshub.app/routes/bbs#pin-cong",
        source: ["/hot/:category"],
        target: (params) =>
          `/pincong/hot${params.category ? `/${params.category.replace("category-", "")}` : ""}`,
      },
      {
        title: "话题",
        docs: "https://docs.rsshub.app/routes/bbs#pin-cong",
        source: "/topic/:topic",
        target: "/pincong/topic/:topic",
      },
    ],
  },
  "pingwest.com": {
    _name: "品玩",
    ".": [
      {
        title: "实时要闻",
        docs: "https://docs.rsshub.app/routes/new-media#ping-wan",
        source: ["/status", "/"],
        target: "/pingwest/status",
      },
      {
        title: "话题动态",
        docs: "https://docs.rsshub.app/routes/new-media#ping-wan",
        source: ["/tag/:tag", "/"],
        target: "/pingwest/tag/:tag/1/fulltext",
      },
      {
        title: "用户",
        docs: "https://docs.rsshub.app/routes/new-media#ping-wan",
        source: ["/user/:uid/:type", "/"],
        target: "/pingwest/user/:uid/:type",
      },
    ],
  },
  "pixabay.com": {
    _name: "Pixabay",
    ".": [
      {
        title: "Search",
        docs: "https://docs.rsshub.app/routes/en/picture#pixabay",
        source: ["/:searchType/search/:q"],
        target: "/pixabay/search/:q",
      },
    ],
  },
  "pixiv.net": {
    _name: "Pixiv",
    www: [
      {
        title: "用户收藏",
        docs: "https://docs.rsshub.app/routes/social-media#pixiv",
        source: "/users/:id/bookmarks/artworks",
        target: "/pixiv/user/bookmarks/:id",
      },
      {
        title: "用户动态",
        docs: "https://docs.rsshub.app/routes/social-media#pixiv",
        source: "/users/:id",
        target: "/pixiv/user/:id",
      },
      {
        title: "用户小说",
        docs: "https://docs.rsshub.app/routes/social-media#pixiv",
        source: "/users/:id/novels",
        target: "/pixiv/user/novels/:id",
      },
      {
        title: "排行榜",
        docs: "https://docs.rsshub.app/routes/social-media#pixiv",
        source: "/ranking.php",
        target: (params, url) =>
          `/pixiv/ranking/${new URL(url).searchParams.get("mode") || "daily"}`,
      },
      {
        title: "关键词",
        docs: "https://docs.rsshub.app/routes/social-media#pixiv",
        source: ["/tags/:keyword", "/tags/:keyword/:type?"],
        target: (params, url) =>
          `/pixiv/search/:keyword/${new URL(url).searchParams.get("order")}/${new URL(url).searchParams.get("mode")}`,
      },
      {
        title: "关注的新作品",
        docs: "https://docs.rsshub.app/routes/social-media#pixiv",
        source: "/bookmark_new_illust.php",
        target: "/pixiv/user/illustfollows",
      },
    ],
  },
  "piyao.org.cn": {
    _name: "中国互联网联合辟谣平台",
    ".": [
      {
        title: "今日辟谣",
        docs: "https://docs.rsshub.app/routes/other#zhong-guo-hu-lian-wang-lian-he-pi-yao-ping-tai",
        source: ["/jrpy/index.htm"],
        target: "/piyao/jrpy",
      },
    ],
  },
  "pku.edu.cn": {
    _name: "北京大学",
    admission: [
      {
        title: "硕士招生",
        docs: "https://docs.rsshub.app/routes/university#bei-jing-da-xue",
        source: ["/zsxx/sszs/index.htm", "/"],
        target: "/pku/admission/sszs",
      },
    ],
    bbs: [
      {
        title: "北大未名 BBS 全站十大",
        docs: "https://docs.rsshub.app/routes/university#bei-jing-da-xue",
        source: ["/v2/hot-topic.php", "/"],
        target: "/pku/bbs/hot",
      },
    ],
    bio: [
      {
        title: "生命科学学院近期讲座",
        docs: "https://docs.rsshub.app/routes/university#bei-jing-da-xue",
        source: ["/homes/Index/news_jz/7/7.html", "/"],
        target: "/pku/cls/lecture",
      },
      {
        title: "生命科学学院通知公告",
        docs: "https://docs.rsshub.app/routes/university#bei-jing-da-xue",
        source: ["/homes/Index/news/21/21.html", "/"],
        target: "/pku/cls/announcement",
      },
    ],
    eecs: [
      {
        title: "信科公告通知",
        docs: "https://docs.rsshub.app/routes/university#bei-jing-da-xue",
        source: ["/xygk1/ggtz/:type", "/xygk1/ggtz.htm", "/"],
        target: (params) => {
          let type = params.type
          switch (type) {
            case "qb.htm":
              type = 0
              break
            case "xytz.htm":
              type = 1
              break
            case "rstz.htm":
              type = 2
              break
            case "jwtz.htm":
              type = 6
              break
            case "xgtz.htm":
              type = 8
              break
            case "kytz.htm":
              type = 7
              break
            case "cwtz.htm":
              type = 5
              break
            case "ghtz.htm":
              type = 3
              break
            case "yytz.htm":
              type = 4
              break
            default:
              type = 0
              break
          }
          return `/pku/eecs/${type}`
        },
      },
    ],
    hr: [
      {
        title: "人事处",
        docs: "https://docs.rsshub.app/routes/university#bei-jing-da-xue-ren-shi-chu",
        source: ["/"],
        target: "/pku/hr/:category?",
      },
    ],
    nsd: [
      {
        title: "观点 - 北京大学国家发展研究院",
        docs: "https://docs.rsshub.app/routes/university#bei-jing-da-xue",
        source: ["/"],
        target: "/pku/nsd/gd",
      },
    ],
    "www.rccp": [
      {
        title: "每周一推 - 中国政治学研究中心",
        docs: "https://docs.rsshub.app/routes/university#bei-jing-da-xue-ren-shi-chu",
        source: ["/"],
        target: "/pku/rccp/mzyt",
      },
    ],
    scc: [
      {
        title: "学生就业指导服务中心",
        docs: "https://docs.rsshub.app/routes/university#bei-jing-da-xue-ren-shi-chu",
        source: ["/*path"],
        target: (params) => {
          let type
          switch (params.path) {
            case "home!newsHome.action?category=12":
              type = "xwrd"
              break
            case "home!newsHome.action?category=13":
              type = "tzgg"
              break
            case "home!recruit.action?category=1&jobType=110001":
              type = "zpxx"
              break
            case "home!recruitList.action?category=1&jobType=110002":
              type = "gfjgxx"
              break
            case "home!recruitList.action?category=2":
              type = "sxxx"
              break
            case "home!newsHome.action?category=11":
              type = "cyxx"
              break
            default:
              type = "zpxx"
              break
          }
          return `/pku/scc/recruit/${type}`
        },
      },
    ],
    ss: [
      {
        title: "软微-通知公告",
        docs: "https://docs.rsshub.app/routes/university#bei-jing-da-xue",
        source: ["/index.php/newscenter/notice", "/"],
        target: "/pku/ss/notice",
      },
      {
        title: "软微-招生通知",
        docs: "https://docs.rsshub.app/routes/university#bei-jing-da-xue",
        source: ["/admission/admnotice", "/"],
        target: "/pku/ss/admission",
      },
      {
        title: "软微-硕士统考招生",
        docs: "https://docs.rsshub.app/routes/university#bei-jing-da-xue",
        source: ["/admission/admbrochure/admission01", "/"],
        target: "/pku/ss/pgadmin",
      },
    ],
  },
  "playno1.com": {
    _name: "PLAYNO.1玩樂達人",
    stno1: [
      {
        title: "情趣",
        docs: "https://docs.rsshub.app/routes/bbs#playno-1-wan-le-da-ren",
        source: ["/stno1/:catid/"],
        target: "/playno1/st/:catid",
      },
    ],
    www: [
      {
        title: "AV",
        docs: "https://docs.rsshub.app/routes/bbs#playno-1-wan-le-da-ren",
        source: ["/portal.php"],
        target: (_params, url) =>
          `/playno1/av/${new URL(url).searchParams.get("catid")}`,
      },
    ],
  },
  "plurk.com": {
    _name: "Plurk",
    ".": [
      {
        title: "話題",
        docs: "https://docs.rsshub.app/routes/social-media#plurk",
        source: ["/topic/:topic"],
        target: "/plurk/topic/:topic",
      },
      {
        title: "話題排行榜",
        docs: "https://docs.rsshub.app/routes/social-media#plurk",
        source: ["/top"],
        target: (_, url) => {
          const hash = new URL(url).hash
          return `/plurk/top/${hash ? hash.slice(1) : "topReplurks"}`
        },
      },
      {
        title: "偷偷說",
        docs: "https://docs.rsshub.app/routes/social-media#plurk",
        source: ["/anonymous"],
        target: "/plurk/anonymous",
      },
      {
        title: "搜尋",
        docs: "https://docs.rsshub.app/routes/social-media#plurk",
        source: ["/search"],
        target: (_, url) =>
          `/plurk/search/${new URL(url).searchParams.get("q")}`,
      },
      {
        title: "最近分享",
        docs: "https://docs.rsshub.app/routes/social-media#plurk",
        source: ["/hotlinks"],
        target: "/plurk/hotlinks",
      },
      {
        title: "噗浪消息",
        docs: "https://docs.rsshub.app/routes/social-media#plurk",
        source: ["/news"],
        target: "/plurk/news",
      },
      {
        title: "用戶",
        docs: "https://docs.rsshub.app/routes/social-media#plurk",
        source: ["/:user"],
        target: (params) => {
          if (
            params.user !== "portal" &&
            params.user !== "top" &&
            params.user !== "anonymous" &&
            params.user !== "search" &&
            params.user !== "hotlinks" &&
            params.user !== "news"
          ) {
            return `/plurk/user/${params.user}`
          }
        },
      },
    ],
  },
  "pmthinking.com": {
    _name: "产品沉思录",
    ".": [
      {
        title: "首页",
        docs: "https://docs.rsshub.app/routes/new-media#chan-pin-chen-si-lu-shou-ye",
        source: ["/"],
        target: "/pmthinking",
      },
    ],
  },
  "pnas.org": {
    _name: "Proceedings of the National Academy of Sciences",
    ".": [
      {
        title: "期刊",
        docs: "https://docs.rsshub.app/routes/journal#proceedings-of-the-national-academy-of-sciences",
        source: ["/*topicPath"],
        target: "/pnas/:topicPath",
      },
    ],
  },
  "polkadot.network": {
    _name: "Polkadot",
    ".": [
      {
        title: "Blog",
        docs: "https://docs.rsshub.app/routes/blog#polkadot",
        source: ["/", "/blog/", "/blog/*"],
        target: "/polkadot/blog",
      },
    ],
  },
  "polkaworld.org": {
    _name: "PolkaWorld",
    www: [
      {
        title: "最新资讯",
        docs: "https://docs.rsshub.app/routes/blog#polkaworld",
        source: ["/", "/articles/:name"],
        target: "/polkaworld/newest",
      },
    ],
  },
  "pornhub.com": {
    _name: "PornHub",
    ".": [
      {
        title: "Category",
        docs: "https://docs.rsshub.app/routes/multimedia#pornhub",
        source: ["/categories/:caty", "/video"],
        target: (params, url) => {
          if (params.caty) {
            return `/pornhub/category/${params.caty}`
          }
          return `/pornhub/category/${new URL(url).searchParams.get("c")}`
        },
      },
      {
        title: "Keyword Search",
        docs: "https://docs.rsshub.app/routes/multimedia#pornhub",
        source: ["/video/search"],
        target: (_, url) =>
          `/pornhub/category/${new URL(url).searchParams.get("search")}`,
      },
      {
        title: "Users",
        docs: "https://docs.rsshub.app/routes/multimedia#pornhub",
        source: ["/users/:username/*"],
        target: "/pornhub/users/:username",
      },
      {
        title: "Verified amateur / Model",
        docs: "https://docs.rsshub.app/routes/multimedia#pornhub",
        source: ["/model/:username/*"],
        target: "/pornhub/model/:username",
      },
      {
        title: "Verified model / Pornstar",
        docs: "https://docs.rsshub.app/routes/multimedia#pornhub",
        source: ["/pornstar/:username/*"],
        target: "/pornhub/pornstar/:username",
      },
      {
        title: "Video List",
        docs: "https://docs.rsshub.app/routes/multimedia#pornhub",
      },
    ],
  },
  "postman.com": {
    _name: "Postman",
    ".": [
      {
        title: "Release Notes",
        docs: "https://docs.rsshub.app/routes/program-update#postman-release-notes",
        source: ["/downloads/release-notes", "/"],
        target: "/postman/release-notes",
      },
    ],
  },
  "prestige-av.com": {
    _name: "Prestige 蚊香社",
    ".": [
      {
        title: "系列作品",
        docs: "https://docs.rsshub.app/routes/multimedia#prestige-wen-xiang-she",
        source: ["/goods/goods_list.php"],
        target: (_params, url) => {
          const link = new URL(url)
          if (link.searchParams.get("mode") === "series") {
            return link.searchParams.has("sort")
              ? `/prestige-av/series/${link.searchParams.get("mid")}/${link.searchParams.get("sort")}`
              : `/prestige-av/series/${link.searchParams.get("mid")}`
          }
        },
      },
    ],
  },
  "producthunt.com": {
    _name: "Product Hunt",
    www: [
      {
        title: "Today Popular",
        docs: "https://docs.rsshub.app/routes/other#product-hunt",
        source: ["/"],
        target: "/producthunt/today",
      },
    ],
  },
  "pts.org.tw": {
    _name: "公視新聞網 PNN",
    news: [
      {
        title: "即時新聞",
        docs: "https://docs.rsshub.app/routes/traditional-media#gong-shi-xin-wen-wang-ji-shi-xin-wen",
        source: ["/dailynews", "/"],
        target: "/pts/dailynews",
      },
      {
        title: "專題策展",
        docs: "https://docs.rsshub.app/routes/traditional-media#gong-shi-xin-wen-wang-zhuan-ti-ce-zhan",
        source: ["/curations", "/"],
        target: "/pts/curations",
      },
      {
        title: "整理報導",
        docs: "https://docs.rsshub.app/routes/traditional-media#gong-shi-xin-wen-wang-zheng-li-bao-dao",
        source: ["/live/:id", "/"],
        target: "/pts/live/:id",
      },
      {
        title: "觀點",
        docs: "https://docs.rsshub.app/routes/traditional-media#gong-shi-xin-wen-wang-guan-dian",
        source: ["/opinion", "/"],
        target: "/pts/opinion",
      },
      {
        title: "數位敘事",
        docs: "https://docs.rsshub.app/routes/traditional-media#gong-shi-xin-wen-wang-shu-wei-xu-shi",
        source: ["/projects", "/"],
        target: "/pts/projects",
      },
      {
        title: "深度報導",
        docs: "https://docs.rsshub.app/routes/traditional-media#gong-shi-xin-wen-wang-shen-du-bao-dao",
        source: ["/report", "/"],
        target: "/pts/report",
      },
      {
        title: "分類",
        docs: "https://docs.rsshub.app/routes/traditional-media#gong-shi-xin-wen-wang-fen-lei",
        source: ["/category/:id", "/"],
        target: "/pts/category/:id",
      },
      {
        title: "標籤",
        docs: "https://docs.rsshub.app/routes/traditional-media#gong-shi-xin-wen-wang-biao-qian",
        source: ["/tag/:id", "/"],
        target: "/pts/tag/:id",
      },
    ],
  },
  "pubmed.ncbi.nlm.nih.gov": {
    _name: "PubMed",
    ".": [
      {
        title: "Trending articles",
        docs: "https://docs.rsshub.app/routes/journal#pubmed-trending-articles",
        source: ["/trending", "/"],
        target: (params, url) =>
          `/pubmed/trending/${new URL(url).searchParams.getAll("filter").join(",")}`,
      },
    ],
  },
  "pumc.edu.cn": {
    _name: "北京协和医学院",
    mdadmission: [
      {
        title: "“4+4”试点班招生网通知公告",
        docs: "https://docs.rsshub.app/routes/university#bei-jing-xie-he-yi-xue-yuan",
        source: ["/mdweb/site", "/"],
        target: "/pumc/mdadmission",
      },
    ],
  },
  "chiark.greenend.org.uk": {
    _name: "PuTTY",
    www: [
      {
        title: "Change Log",
        docs: "https://docs.rsshub.app/routes/program-update#putty-change-log",
        source: ["/~sgtatham/putty/changes.html", "/"],
        target: "/putty/changes",
      },
    ],
  },
  "qbitai.com": {
    _name: "量子位",
    ".": [
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/new-media#liang-zi-wei",
        source: ["/category/:category"],
        target: "/qbitai/category/:category",
      },
      {
        title: "标签",
        docs: "https://docs.rsshub.app/routes/new-media#liang-zi-wei",
        source: ["/tag/:tag"],
        target: "/qbitai/tag/:tag",
      },
    ],
  },
  "qbittorrent.org": {
    _name: "qBittorrent",
    ".": [
      {
        title: "News",
        docs: "https://docs.rsshub.app/routes/program-update#qbittorrent",
        source: ["/news.php", "/"],
        target: "/qbittorrent/news",
      },
    ],
  },
  "qdaily.com": {
    _name: "好奇心日报",
    ".": [
      {
        title: "标签",
        docs: "https://docs.rsshub.app/routes/new-media#hao-qi-xin-ri-bao",
        source: ["/tags/:id"],
        target: (params) => `/qdaily/tag/${params.id.replace(".html", "")}`,
      },
      {
        title: "栏目",
        docs: "https://docs.rsshub.app/routes/new-media#hao-qi-xin-ri-bao",
        source: ["/special_columns/:id"],
        target: (params) => `/qdaily/column/${params.id.replace(".html", "")}`,
      },
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/new-media#hao-qi-xin-ri-bao",
        source: ["/categories/:id"],
        target: (params) =>
          `/qdaily/category/${params.id.replace(".html", "")}`,
      },
    ],
  },
  "qdu.edu.cn": {
    _name: "青岛大学",
    jwc: [
      {
        title: "教务处通知",
        docs: "https://docs.rsshub.app/routes/university#qing-dao-da-xue",
        source: ["/jwtz.htm", "/"],
        target: "/qdu/jwc",
      },
    ],
  },
  "qianp.com": {
    _name: "千篇网",
    ".": [
      {
        title: "知识库／资讯",
        docs: "https://docs.rsshub.app/routes/new-media#qian-pian-wang",
        source: ["/*path"],
        target: (params) =>
          !params.path.endsWith(".html") ? `/qianp/news/${params.path}` : null,
      },
    ],
  },
  "qianzhan.com": {
    _name: "前瞻网",
    ".": [
      {
        title: "文章列表",
        docs: "https://docs.rsshub.app/routes/finance#qian-zhan-wang",
        source: ["/analyst", "/analyst/list/:html"],
        target: (params) => {
          if (params.html) {
            const type = params.html.match(/\d+/)[0]
            return "/qianzhan/analyst/column/" + type
          } else {
            return "/qianzhan/analyst/column/all"
          }
        },
      },
      {
        title: "排行榜",
        docs: "https://docs.rsshub.app/routes/finance#qian-zhan-wang",
        source: ["/analyst", "/"],
        target: "/qianzhan/analyst/rank",
      },
    ],
  },
  "qidian.com": {
    _name: "起点",
    book: [
      {
        title: "章节",
        docs: "https://docs.rsshub.app/routes/reading#qi-dian",
        source: "/info/:id",
        target: "/qidian/chapter/:id",
      },
      {
        title: "讨论区",
        docs: "https://docs.rsshub.app/routes/reading#qi-dian",
        source: "/info/:id",
        target: "/qidian/forum/:id",
      },
    ],
    my: [
      {
        title: "作者",
        docs: "https://docs.rsshub.app/routes/reading#qi-dian",
        source: "/author/:id",
        target: "/qidian/author/:id",
      },
    ],
    www: [
      {
        title: "限免",
        docs: "https://docs.rsshub.app/routes/reading#qi-dian",
        source: "/free",
        target: "/qidian/free",
      },
      {
        title: "女生限免",
        docs: "https://docs.rsshub.app/routes/reading#qi-dian",
        source: "/mm/free",
        target: "/qidian/free/mm",
      },
    ],
  },
  "qidiantu.com": {
    _name: "起点图",
    ".": [
      {
        title: "首订",
        docs: "https://docs.rsshub.app/routes/reading#qi-dian-tu-shou-ding",
        source: ["/shouding", "/"],
        target: "/qidiantu/shouding",
      },
      {
        title: "榜单",
        docs: "https://docs.rsshub.app/routes/reading#qi-dian-tu-bang-dan",
        source: ["/bang/:category/:type", "/"],
        target: "/qidiantu/:category?/:type?/:is_history?",
      },
    ],
  },
  "qingting.fm": {
    _name: "蜻蜓 FM",
    ".": [
      {
        title: "专辑",
        docs: "https://docs.rsshub.app/routes/multimedia#qing-ting-fm",
        source: "/channels/:id",
        target: "/qingting/channels/:id",
      },
      {
        title: "播客",
        docs: "https://docs.rsshub.app/routes/multimedia#qing-ting-fm",
        source: "/channels/:id",
        target: "/qingting/podcast/:id",
      },
    ],
  },
  "qipamaijia.com": {
    _name: "奇葩买家秀",
    ".": [
      {
        title: "频道",
        docs: "https://docs.rsshub.app/routes/reading#qi-dian-tu-shou-ding",
        source: ["/", "/:cate"],
        target: "/qipamaijia/:cate",
      },
    ],
  },
  "qiyoujiage.com": {
    _name: "汽油价格网",
    ".": [
      {
        title: "今日油价查询",
        docs: "https://docs.rsshub.app/routes/other#qi-you-jia-ge-wang",
        source: ["/*"],
        target: (_, url) =>
          `/qiyoujiage${new URL(url).pathname.replace(".shtml", "")}`,
      },
    ],
  },
  "qlu.edu.cn": {
    _name: "齐鲁工业大学",
    ".": [
      {
        title: "通知公告",
        docs: "https://docs.rsshub.app/routes/university#qi-lu-gong-ye-da-xue",
        source: ["/tzggsh/list1.htm"],
        target: "/qlu/notice",
      },
    ],
  },
  "qm120.com": {
    _name: "全民健康网",
    ".": [
      {
        title: "新闻",
        docs: "https://docs.rsshub.app/routes/new-media#quan-min-jian-kang-wang-xin-wen",
        source: ["/"],
        target: "/qm120/news/:category?",
      },
    ],
  },
  "qoo-app.com": {
    _name: "QooApp",
    apps: [
      {
        title: "遊戲庫 - 評論",
        docs: "https://docs.rsshub.app/routes/anime#qooapp",
        source: ["/:lang/app-comment/:id", "/app-comment/:id", "/app/:id"],
        target: (params) =>
          `/qoo-app/apps${params.lang ? `/${params.lang}` : ""}/comment/:id`,
      },
      {
        title: "遊戲庫 - 情報",
        docs: "https://docs.rsshub.app/routes/anime#qooapp",
        source: ["/:lang/app-post/:id", "/app-post/:id", "/app/:id"],
        target: (params) =>
          `/qoo-app/apps${params.lang ? `/${params.lang}` : ""}/post/:id`,
      },
      {
        title: "遊戲庫 - 筆記",
        docs: "https://docs.rsshub.app/routes/anime#qooapp",
        source: ["/:lang/app-note/:id", "/app-note/:id", "/app/:id"],
        target: (params) =>
          `/qoo-app/apps${params.lang ? `/${params.lang}` : ""}/note/:id`,
      },
      {
        title: "遊戲庫 - 曬卡",
        docs: "https://docs.rsshub.app/routes/anime#qooapp",
        source: ["/:lang/app-card/:id", "/app-card/:id", "/app/:id"],
        target: (params) =>
          `/qoo-app/apps${params.lang ? `/${params.lang}` : ""}/card/:id`,
      },
    ],
    news: [
      {
        title: "資訊",
        docs: "https://docs.rsshub.app/routes/anime#qooapp",
        source: ["/:lang", "/"],
        target: (params) =>
          `/qoo-app/news${params.lang ? `/${params.lang}` : ""}`,
      },
    ],
    notes: [
      {
        title: "筆記留言",
        docs: "https://docs.rsshub.app/routes/anime#qooapp",
        source: ["/:lang/note/:id", "/note/:id"],
        target: (params) =>
          `/qoo-app/notes${params.lang ? `/${params.lang}` : ""}/note/:id`,
      },
      {
        title: "熱門話題",
        docs: "https://docs.rsshub.app/routes/anime#qooapp",
        source: ["/:lang/topic/:topic", "/topic/:topic"],
        target: (params) =>
          `/qoo-app/notes${params.lang ? `/${params.lang}` : ""}/topic/:topic`,
      },
      {
        title: "用户筆記",
        docs: "https://docs.rsshub.app/routes/anime#qooapp",
        source: ["/:lang/user/:uid", "/user/:uid"],
        target: (params) =>
          `/qoo-app/notes${params.lang ? `/${params.lang}` : ""}/user/:uid`,
      },
    ],
    user: [
      {
        title: "遊戲評論",
        docs: "https://docs.rsshub.app/routes/anime#qooapp",
        source: ["/:lang/:uid", "/:uid"],
        target: (params) =>
          `/qoo-app/user${params.lang ? `/${params.lang}` : ""}/appComment/:uid`,
      },
      {
        title: "用户筆記",
        docs: "https://docs.rsshub.app/routes/anime#qooapp",
        source: ["/:lang/:uid", "/:uid"],
        target: (params) =>
          `/qoo-app/notes${params.lang ? `/${params.lang}` : ""}/user/:uid`,
      },
    ],
  },
  "qq.com": {
    _name: "腾讯",
    egame: [
      {
        title: "企鹅电竞直播间",
        docs: "https://docs.rsshub.app/routes/live#qi-e-dian-jing-zhi-bo-jian-kai-bo",
        source: "/:id",
        target: (params) => {
          if (params.id.match(/^\d+$/)) {
            return "/egameqq/room/:id"
          }
        },
      },
    ],
    "mp.weixin": [
      {
        title: "微信公众号栏目",
        docs: "https://docs.rsshub.app/routes/new-media#gong-zhong-hao-lan-mu-fei-tui-song-li-shi-xiao-xi",
        source: "/mp/homepage",
        target: (params, url) =>
          `/wechat/mp/homepage/${new URL(url).searchParams.get("__biz")}/${new URL(url).searchParams.get("hid")}/${new URL(url).searchParams.get("cid") ? new URL(url).searchParams.get("cid") : ""}`,
      },
      {
        title: "微信公众号话题",
        docs: "https://docs.rsshub.app/routes/new-media#wei-xin-gong-zhong-hao-wen-zhang-hua-ti-tag",
        source: "/mp/appmsgalbum",
        target: (params, url) =>
          `/wechat/mp/msgalbum/${new URL(url).searchParams.get("__biz")}/${new URL(url).searchParams.get("album_id")}`,
      },
    ],
    new: [
      {
        title: "腾讯企鹅号 - 更新",
        docs: "https://docs.rsshub.app/routes/new-media#teng-xun-qi-e-hao-geng-xin",
        source: ["/omn/author/:mid"],
        target: "/tencent/news/author/:mid",
      },
      {
        title: "腾讯新闻 - 新型冠状病毒肺炎疫情实时追踪",
        docs: "https://docs.rsshub.app/routes/other#xin-guan-fei-yan-yi-qing-xin-wen-dong-tai",
        source: ["/zt2020/page/feiyan.htm"],
        target: "/tencent/news/coronavirus/total",
      },
    ],
    pvp: [
      {
        title: "王者荣耀 - 新闻中心",
        docs: "https://docs.rsshub.app/routes/game#wang-zhe-rong-yao",
        source: ["/web201706/*", "/"],
        target: "/tencent/pvp/newsindex/all",
      },
    ],
    v: [
      {
        title: "视频 - 播放列表",
        docs: "https://docs.rsshub.app/routes/multimedia#teng-xun-shi-pin",
        source: "/x/cover/:id",
        target: (params) => {
          const id = params.id.match("(.*).html")[1]
          return id ? `/tencentvideo/playlist/${id}` : ""
        },
      },
      {
        title: "视频 - 播放列表",
        docs: "https://docs.rsshub.app/routes/multimedia#teng-xun-shi-pin",
        source: "/x/cover/:id/:detail",
        target: "/tencentvideo/playlist/:id",
      },
    ],
    "wiki.connect": [
      {
        title: "QQ 互联 SDK 更新日志",
        docs: "https://docs.rsshub.app/routes/program-update#qq-hu-lian-sdk",
        source: "/",
        target: (_params, url) =>
          `/tencent/qq/sdk/changelog/${new URL(url).pathname === "/ios_sdk历史变更" ? "iOS" : "Android"}`,
      },
    ],
  },
  "qq88.info": {
    _name: "秋爸日字",
    ".": [
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/multimedia#qiu-ba-ri-zi",
        source: "/",
        target: (_params, url) =>
          new URL(url).searchParams.get("cat")
            ? `/qq88/${new URL(url).searchParams.get("cat")}`
            : "/qq88",
      },
    ],
  },
  "qqorw.cn": {
    _name: "早报网",
    ".": [
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/new-media#zao-bao-wang-fen-lei",
        source: ["/:category", "/"],
        target: "/qqorw/:category?",
      },
    ],
  },
  "getquicker.net": {
    _name: "Quicker",
    ".": [
      {
        title: "动作分享",
        docs: "https://docs.rsshub.app/routes/programming#quicker-dong-zuo-fen-xiang",
        source: ["/Share/:category", "/"],
        target: "/quicker/share/:category?",
      },
      {
        title: "讨论区",
        docs: "https://docs.rsshub.app/routes/programming#quicker-tao-lun-qu",
        source: ["/QA", "/"],
        target: (params, url) =>
          `/quicker/qa/${new URL(url).searchParams.get("category") ?? ""}/${new URL(url).searchParams.get("state") ?? ""}`,
      },
      {
        title: "用户动作更新",
        docs: "https://docs.rsshub.app/routes/programming#quicker-yong-hu-dong-zuo-geng-xin",
        source: ["/QA", "/"],
        target: (params, url) =>
          `/quicker/qa/${new URL(url).searchParams.get("category") ?? ""}/${new URL(url).searchParams.get("state") ?? ""}`,
      },
      {
        title: "版本更新",
        docs: "https://docs.rsshub.app/routes/programming#quicker-ban-ben-geng-xin",
        source: ["/Help/Versions", "/"],
        target: "/quicker/versions",
      },
    ],
  },
  "qweather.com": {
    _name: "和风天气",
    ".": [
      {
        title: "近三天天气",
        docs: "https://docs.rsshub.app/routes/forecast#he-feng-tian-qi",
      },
      {
        title: "实时天气",
        docs: "https://docs.rsshub.app/routes/forecast#he-feng-tian-qi",
      },
    ],
  },
  "radio.cn": {
    _name: "云听",
    ".": [
      {
        title: "专辑",
        docs: "https://docs.rsshub.app/routes/multimedia#yun-ting-zhuan-ji",
        source: ["/pc-portal/sanji/detail.html", "/share/albumDetail", "/"],
        target: (params, url) =>
          `/radio/album/${new URL(url).searchParams.get("columnId")}`,
      },
      {
        title: "节目",
        docs: "https://docs.rsshub.app/routes/multimedia#yun-ting-jie-mu",
        source: ["/pc-portal/sanji/detail.html", "/share/albumDetail", "/"],
        target: (params, url) =>
          `/radio/${new URL(url).searchParams.get("columnId")}`,
      },
      {
        title: "直播",
        docs: "https://docs.rsshub.app/routes/multimedia#yun-ting-zhi-bo",
        source: ["/pc-portal/sanji/zhibo_2.html", "/"],
        target: (params, url) =>
          `/radio/zhibo/${new URL(url).searchParams.get("name")}`,
      },
    ],
  },
  "ici.radio-canada.ca": {
    _name: "Radio Canada",
    ".": [
      {
        title: "Latest News",
        docs: "https://docs.rsshub.app/routes/new-media#jia-na-da-guo-ji-guang-bo-dian-tai-zui-xin-xiao-xi",
        source: ["/rci/:lang", "/"],
        target: "/radio-canada/latest/:language?",
      },
    ],
  },
  "radiofrance.fr": {
    _name: "Radio France",
    www: [
      {
        title: "Géopolitique",
        docs: "https://docs.rsshub.app/routes/traditional-media#fa-guo-guang-bo-dian-tai",
        source: ["/franceinter/podcasts/geopolitique", "/"],
        target: "/radiofrance/geopolitique",
      },
    ],
  },
  "rarehistoricalphotos.com": {
    _name: "Rare Historical Photos",
    ".": [
      {
        title: "Home",
        docs: "https://docs.rsshub.app/routes/en/picture#rare-historical-photos",
        source: ["/"],
        target: "/rarehistoricalphotos",
      },
    ],
  },
  "rattibha.com": {
    _name: "رتبها - Rattibha",
    ".": [
      {
        title: "User Threads",
        docs: "https://docs.rsshub.app/routes/en/social-media#rattibha",
        source: ["/:user"],
        target: "/rattibha/user/:user",
      },
    ],
  },
  "rawkuma.com": {
    _name: "Rawkuma",
    ".": [
      {
        title: "Manga",
        docs: "https://docs.rsshub.app/routes/anime#rawkuma-manga",
        source: ["/manga/:id", "/"],
        target: "/rawkuma/manga/:id",
      },
    ],
  },
  "readhub.cn": {
    _name: "Readhub",
    ".": [
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/new-media#readhub-fen-lei",
        source: ["/", "/:category"],
        target: (params) => {
          const category = params.category

          return `/readhub${category ? `/${category}` : ""}`
        },
      },
    ],
  },
  "remnote.com": {
    _name: "RemNote",
    ".": [
      {
        title: "Changelog",
        docs: "https://docs.rsshub.app/routes/program-update#remnote",
        source: ["/changelog", "/"],
        target: "/remnote/changelog",
      },
    ],
  },
  "researchgate.net": {
    _name: "ResearchGate",
    ".": [
      {
        title: "Publications",
        docs: "https://docs.rsshub.app/routes/study#researchgate",
        source: ["/profile/:username"],
        target: "/researchgate/publications/:username",
      },
    ],
  },
  "reuters.com": {
    _name: "路透社",
    ".": [
      {
        title: "分类/话题/作者",
        docs: "https://docs.rsshub.app/routes/traditional-media#lu-tou-she",
        source: ["/:category/:topic?", "/"],
        target: "/reuters/:category/:topic?",
      },
      {
        title: "深度调查栏目",
        docs: "https://docs.rsshub.app/routes/traditional-media#lu-tou-she",
        source: ["/investigates"],
        target: "/reuters/inverstigates",
      },
    ],
  },
  "rfa.org": {
    _name: "自由亚洲电台",
    ".": [
      {
        title: "新闻",
        docs: "https://docs.rsshub.app/routes/traditional-media#zi-you-ya-zhou-dian-tai",
        source: "/:language/:channel/:subChannel",
        target: "/rfa/:language/:channel/:subChannel",
      },
    ],
  },
  "rfi.fr": {
    _name: "Radio France Internationale",
    ".": [
      {
        title: "Generic News",
        docs: "https://docs.rsshub.app/routes/traditional-media##radio-france-internationale-fa-guo-guo-ji-guang-bo-dian-tai",
        source: ["/*path"],
        target: "/rfi/:path",
      },
    ],
  },
  "right.com.cn": {
    _name: "恩山无线论坛",
    ".": [
      {
        title: "板块",
        docs: "https://docs.rsshub.app/routes/bbs#en-shan-wu-xian-lun-tan",
        source: ["/forum", "/"],
        target: (params, url) =>
          `/right/forum/${new URL(url).href.match(/\/forum-(\d+)-\d+.html/)[1]}`,
      },
    ],
  },
  "rodong.rep.kp": {
    _name: "劳动新闻",
    ".": [
      {
        title: "新闻",
        docs: "https://docs.rsshub.app/routes/traditional-media#lao-dong-xin-wen",
        source: [
          "/cn/index.php",
          "/en/index.php",
          "/ko/index.php",
          "/cn",
          "/en",
          "/ko",
        ],
        target: "/rodong/news",
      },
    ],
  },
  "routledge.com": {
    _name: "Routledge",
    ".": [
      {
        title: "Book Series",
        docs: "https://docs.rsshub.app/routes/journals#routledge",
        source: ["/:bookName/book-series/:bookId"],
        target: "/routledge/:bookName/book-series/:bookId",
      },
    ],
  },
  "rsc.org": {
    _name: "The Royal Society of Chemistry",
    pubs: [
      {
        title: "Journal",
        docs: "https://docs.rsshub.app/routes/journal#royal-society-of-chemistry",
        source: [
          "/en/journals/journalissues/:id",
          "/en/content/articlelanding",
          "/en/content/articlehtml",
        ],
        target: (params, url) => {
          url = new URL(url)
          const matches = url.href.match(
            /(?:journals\/journalissues\/|content\/articlelanding\/\d+\/|content\/articlehtml\/\d+\/)(\w+)/,
          )

          if (matches) {
            const id = matches[1]
            return `/rsc/journal/${id}`
          }

          return "/rsc/journal/:id"
        },
      },
    ],
  },
  "rsshub.app": {
    _name: "RSSHub",
    docs: [
      {
        title: "有新路由啦",
        docs: "https://docs.rsshub.app/routes/program-update#rsshub",
        source: ["/*"],
        target: "/rsshub/routes",
      },
      {
        title: "有新赞助商啦",
        docs: "https://docs.rsshub.app/routes/program-update#rsshub",
        source: ["/*"],
        target: "/rsshub/sponsors",
      },
    ],
  },
  "ruancan.com": {
    _name: "软餐",
    ".": [
      {
        title: "首页",
        docs: "https://docs.rsshub.app/routes/new-media#ruan-can-shou-ye",
        source: ["/"],
        target: "/ruancan",
      },
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/new-media#ruan-can-fen-lei",
        source: ["/cat/:category", "/"],
        target: "/ruancan/category/:category",
      },
      {
        title: "搜索",
        docs: "https://docs.rsshub.app/routes/new-media#ruan-can-sou-suo",
        source: ["/"],
        target: (params, url) =>
          `/ruancan/search/${new URL(url).searchParams.get("s")}`,
      },
      {
        title: "用户文章",
        docs: "https://docs.rsshub.app/routes/new-media#ruan-can-yong-hu-wen-zhang",
        source: ["/i/:id", "/"],
        target: "/ruancan/user/:id",
      },
    ],
  },
  "ruc.edu.cn": {
    _name: "中国人民大学",
    hr: [
      {
        title: "人事处",
        docs: "https://docs.rsshub.app/routes/university#zhong-guo-ren-min-da-xue-ren-shi-chu",
        source: ["/"],
        target: "/ruc/hr/:category?",
      },
    ],
  },
  "runtrail.cn": {
    _name: "跑野大爆炸",
    ".": [
      {
        title: "最新文章",
        docs: "https://docs.rsshub.app/routes/new-media#pao-ye",
        source: ["/"],
        target: "/runtrail",
      },
    ],
  },
  "rustcc.cn": {
    _name: "Rust语言中文社区",
    ".": [
      {
        title: "招聘",
        docs: "https://docs.rsshub.app/routes/programming#rust-yu-yan-zhong-wen-she-qu",
        source: ["/"],
        target: "/rustcc/jobs",
      },
    ],
  },
  "sakurazaka46.com": {
    _name: "櫻坂46",
    ".": [
      {
        title: "公式ブログ",
        docs: "https://docs.rsshub.app/routes/new-media#ban-dao-xi-lie-guan-wang-zi-xun-ying-ban-46-bo-ke",
        source: ["/s/s46/diary/blog/list", "/"],
        target: (params, url) =>
          `/sakurazaka46/blog/${new URL(url).searchParams.get("ct")}`,
      },
      {
        title: "ニュース",
        docs: "https://docs.rsshub.app/routes/new-media#ban-dao-xi-lie-guan-wang-zi-xun-ying-ban-46-xin-wen",
        source: ["/s/s46/news/list", "/"],
        target: "/sakurazaka46/news",
      },
    ],
  },
  "samsung.com": {
    _name: "Samsung",
    research: [
      {
        title: "Research Blog",
        docs: "https://docs.rsshub.app/routes/new-media#samsung-research-blog",
        source: ["/blog", "/"],
        target: "/samsung/research/blog",
      },
    ],
  },
  "saraba1st.com": {
    _name: "Saraba1st",
    bbs: [
      {
        title: "论坛",
        docs: "https://docs.rsshub.app/routes/bbs#saraba1st",
        source: "/2b/:id",
        target: (params) => {
          let id = params.id
          // For Digest
          if (id.match("forum") !== null) {
            id = id.substring(0, id.length - 5)
            return `/saraba1st/digest/${id}`
          }
          // For Thread
          else if (id.match("thread") !== null) {
            id = params.id.includes("thread") ? params.id.split("-")[1] : ""
            return id ? `/saraba1st/thread/${id}` : ""
          }
        },
      },
    ],
  },
  "sass.org.cn": {
    _name: "上海社会科学院",
    gs: [
      {
        title: "研究生院",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-she-hui-ke-xue-yuan-yan-jiu-sheng-yuan",
        source: ["/:type/list.htm"],
        target: "/sass/gs/:type",
      },
    ],
  },
  "scau.edu.cn": {
    _name: "华南农业大学",
    yzb: [
      {
        title: "华农研讯",
        docs: "https://docs.rsshub.app/routes/university#hua-nan-nong-ye-da-xue",
        source: ["/2136/list1.htm", "/"],
        target: "/scau/yzb",
      },
    ],
    yjsy: [
      {
        title: "研究生院通知",
        docs: "https://docs.rsshub.app/routes/university#hua-nan-nong-ye-da-xue",
        source: ["/208/list.htm", "/"],
        target: "/scau/yjsy",
      },
    ],
  },
  "science.org": {
    _name: "Science Magazine",
    ".": [
      {
        title: "本期刊物",
        docs: "https://docs.rsshub.app/routes/journal#science-xi-lie",
        source: ["/journal/:journal", "/toc/:journal/current"],
        target: "/science/current/:journal",
      },
      {
        title: "封面故事",
        docs: "https://docs.rsshub.app/routes/journal#science-xi-lie",
        source: ["/"],
        target: "/science/cover",
      },
      {
        title: "在线发表",
        docs: "https://docs.rsshub.app/routes/journal#science-xi-lie",
        source: ["/journal/:journal", "/toc/:journal/0/0"],
        target: "/science/early/:journal",
      },
      {
        title: "博客",
        docs: "https://docs.rsshub.app/routes/journal#science-xi-lie",
        source: ["/blogs/:name"],
        target: "/science/blogs/:name",
      },
    ],
  },
  "sciencenet.cn": {
    _name: "科学网",
    blog: [
      {
        title: "精选博客",
        docs: "https://docs.rsshub.app/routes/new-media#ke-xue-wang-jing-xuan-bo-ke",
        source: ["/blog.php", "/"],
        target: (params, url) =>
          `/sciencenet/blog/${new URL(url).searchParams.get("mod")}/${new URL(url).searchParams.get("op")}/${new URL(url).searchParams.get("ord")}`,
      },
      {
        title: "用户博客",
        docs: "https://docs.rsshub.app/routes/new-media#ke-xue-wang-jing-xuan-bo-ke",
        source: ["/u/:id", "/"],
        target: "/sciencenet/user/:id",
      },
    ],
  },
  "scmp.com": {
    _name: "South China Morning Post",
    ".": [
      {
        title: "News",
        docs: "https://docs.rsshub.app/routes/en/traditional-media#south-china-morning-post",
        source: ["/rss/:category_id/feed"],
        target: "/scmp/:category_id",
      },
    ],
  },
  "scnu.edu.cn": {
    _name: "华南师范大学",
    cs: [
      {
        title: "计算机学院竞赛通知",
        docs: "https://docs.rsshub.app/routes/university#hua-nan-shi-fan-da-xue",
        source: ["/xueshenggongzuo/chengchangfazhan/kejichuangxin/", "/"],
        target: "/scnu/cs/match",
      },
    ],
    jw: [
      {
        title: "教务处通知",
        docs: "https://docs.rsshub.app/routes/university#hua-nan-shi-fan-da-xue",
        source: ["/ann/index.html", "/"],
        target: "/scnu/jw",
      },
    ],
    lib: [
      {
        title: "图书馆通知",
        docs: "https://docs.rsshub.app/routes/university#hua-nan-shi-fan-da-xue",
        source: ["/news/zuixingonggao", "/"],
        target: "/scnu/library",
      },
    ],
    physics: [
      {
        title: "物理与电信工程学院通知",
        docs: "https://docs.rsshub.app/routes/university#hua-nan-shi-fan-da-xue",
        source: ["/NEWS/Notices/"],
        target: "/scnu/physics-school-announcements",
      },
      {
        title: "物理与电信工程学院新闻动态",
        docs: "https://docs.rsshub.app/routes/university#hua-nan-shi-fan-da-xue",
        source: ["/NEWS/News/"],
        target: "/scnu/physics-school-news",
      },
      {
        title: "物理与电信工程学院科学研究动态",
        docs: "https://docs.rsshub.app/routes/university#hua-nan-shi-fan-da-xue",
        source: ["/RESEARCH/"],
        target: "/scnu/physics-school-research-news",
      },
    ],
    ss: [
      {
        title: "软件学院通知公告",
        docs: "https://docs.rsshub.app/routes/university#hua-nan-shi-fan-da-xue",
        source: ["/tongzhigonggao", "/"],
        target: "/scnu/ss",
      },
    ],
    yz: [
      {
        title: "研究生院通知公告",
        docs: "https://docs.rsshub.app/routes/university#hua-nan-shi-fan-da-xue",
        source: ["/tongzhigonggao/ssgg", "/"],
        target: "/scnu/yjs",
      },
    ],
  },
  "sctv.com": {
    _name: "四川广播电视台",
    ".": [
      {
        title: "电视回放",
        docs: "https://docs.rsshub.app/routes/traditional-media#si-chuan-guang-bo-dian-shi-tai-dian-shi-hui-fang",
        source: ["/column/list", "/column/detail", "/"],
        target: (params, url) =>
          `/sctv/programme/${new URL(url).searchParams.get("programmeId")}`,
      },
    ],
  },
  "scut.edu.cn": {
    _name: "华南理工大学",
    jw: [
      {
        title: "教务处通知公告",
        docs: "https://docs.rsshub.app/routes/university#hua-nan-li-gong-da-xue",
      },
      {
        title: "教务处学院通知",
        docs: "https://docs.rsshub.app/routes/university#hua-nan-li-gong-da-xue",
      },
      {
        title: "教务处新闻动态",
        docs: "https://docs.rsshub.app/routes/university#hua-nan-li-gong-da-xue",
      },
    ],
    www2: [
      {
        title: "电子与信息学院 - 新闻速递",
        docs: "https://docs.rsshub.app/routes/university#hua-nan-li-gong-da-xue",
        source: ["/ee/16285/list.htm"],
        target: "/scut/seie/news_center",
      },
      {
        title: "机械与汽车工程学院 - 通知公告",
        docs: "https://docs.rsshub.app/routes/university#hua-nan-li-gong-da-xue",
        source: ["/smae/:category/list.htm"],
        target: (params) => {
          let tid
          switch (params.category) {
            case "20616":
              tid = "gwxx"
              break
            case "20617":
              tid = "djgz"
              break
            case "20622":
              tid = "rsgz"
              break
            case "xsgz":
              tid = "xsgz"
              break
            case "20618":
              tid = "kysys"
              break
            case "20619":
              tid = "bksjw"
              break
            case "20620":
              tid = "yjsjw"
              break
            default:
              return false
          }
          return `/scut/smae/${tid}`
        },
      },
      {
        title: "研究生院通知公告",
        docs: "https://docs.rsshub.app/routes/university#hua-nan-li-gong-da-xue",
        source: ["/graduate/14562/list.htm"],
        target: "/scut/yjs",
      },
    ],
  },
  "scvtc.edu.cn": {
    _name: "四川职业技术学院",
    ".": [
      {
        title: "学院公告",
        docs: "https://docs.rsshub.app/routes/university#si-chuan-zhi-ye-ji-shu-xue-yuan",
        source: ["/ggfw1/xygg.htm", "/"],
        target: "/scvtc/xygg",
      },
    ],
  },
  "sdu.edu.cn": {
    _name: "山东大学",
    "xinwen.wh": [
      {
        title: "(威海)新闻网|校园要闻",
        docs: "https://docs.rsshub.app/university#shan-dong-da-xue-wei-hai",
        source: ["/*path", "/"],
        target: "/sdu/wh/news/xyyw",
      },
      {
        title: "(威海)新闻网|学生动态",
        docs: "https://docs.rsshub.app/university#shan-dong-da-xue-wei-hai",
        source: ["/*path", "/"],
        target: "/sdu/wh/news/xsdt",
      },
      {
        title: "(威海)新闻网|综合新闻",
        docs: "https://docs.rsshub.app/university#shan-dong-da-xue-wei-hai",
        source: ["/*path", "/"],
        target: "/sdu/wh/news/zhxw",
      },
      {
        title: "(威海)新闻网|山大视点",
        docs: "https://docs.rsshub.app/university#shan-dong-da-xue-wei-hai",
        source: ["/*path", "/"],
        target: "/sdu/wh/news/sdsd",
      },
      {
        title: "(威海)新闻网|菁菁校园",
        docs: "https://docs.rsshub.app/university#shan-dong-da-xue-wei-hai",
        source: ["/*path", "/"],
        target: "/sdu/wh/news/jjxy",
      },
      {
        title: "(威海)新闻网|校园简讯",
        docs: "https://docs.rsshub.app/university#shan-dong-da-xue-wei-hai",
        source: ["/*path", "/"],
        target: "/sdu/wh/news/xyjx",
      },
      {
        title: "(威海)新闻网|玛珈之窗",
        docs: "https://docs.rsshub.app/university#shan-dong-da-xue-wei-hai",
        source: ["/*path", "/"],
        target: "/sdu/wh/news/mjzc",
      },
      {
        title: "(威海)新闻网|热点专题",
        docs: "https://docs.rsshub.app/university#shan-dong-da-xue-wei-hai",
        source: ["/*path", "/"],
        target: "/sdu/wh/news/rdzt",
      },
      {
        title: "(威海)新闻网|媒体视角",
        docs: "https://docs.rsshub.app/university#shan-dong-da-xue-wei-hai",
        source: ["/*path", "/"],
        target: "/sdu/wh/news/mtsj",
      },
      {
        title: "(威海)新闻网|高教视野",
        docs: "https://docs.rsshub.app/university#shan-dong-da-xue-wei-hai",
        source: ["/*path", "/"],
        target: "/sdu/wh/news/gjsy",
      },
      {
        title: "(威海)新闻网|理论学习",
        docs: "https://docs.rsshub.app/university#shan-dong-da-xue-wei-hai",
        source: ["/*path", "/"],
        target: "/sdu/wh/news/llxx",
      },
    ],
    "jwc.wh": [
      {
        title: "(威海)教务处|规章制度",
        docs: "https://docs.rsshub.app/university#shan-dong-da-xue-wei-hai",
        source: ["/*path", "/"],
        target: "/sdu/wh/jwc/gzzd",
      },
      {
        title: "(威海)教务处|专业建设",
        docs: "https://docs.rsshub.app/university#shan-dong-da-xue-wei-hai",
        source: ["/*path", "/"],
        target: "/sdu/wh/jwc/zyjs",
      },
      {
        title: "(威海)教务处|实践教学",
        docs: "https://docs.rsshub.app/university#shan-dong-da-xue-wei-hai",
        source: ["/*path", "/"],
        target: "/sdu/wh/jwc/sjjx",
      },
      {
        title: "(威海)教务处|支部风采",
        docs: "https://docs.rsshub.app/university#shan-dong-da-xue-wei-hai",
        source: ["/*path", "/"],
        target: "/sdu/wh/jwc/zbfc",
      },
      {
        title: "(威海)教务处|服务指南",
        docs: "https://docs.rsshub.app/university#shan-dong-da-xue-wei-hai",
        source: ["/*path", "/"],
        target: "/sdu/wh/jwc/fwzn",
      },
      {
        title: "(威海)教务处|教务要闻",
        docs: "https://docs.rsshub.app/university#shan-dong-da-xue-wei-hai",
        source: ["/*path", "/"],
        target: "/sdu/wh/jwc/jwyw",
      },
      {
        title: "(威海)教务处|工作通知",
        docs: "https://docs.rsshub.app/university#shan-dong-da-xue-wei-hai",
        source: ["/*path", "/"],
        target: "/sdu/wh/jwc/gztz",
      },
      {
        title: "(威海)教务处|教务简报",
        docs: "https://docs.rsshub.app/university#shan-dong-da-xue-wei-hai",
        source: ["/*path", "/"],
        target: "/sdu/wh/jwc/jwjb",
      },
      {
        title: "(威海)教务处|常用下载",
        docs: "https://docs.rsshub.app/university#shan-dong-da-xue-wei-hai",
        source: ["/*path", "/"],
        target: "/sdu/wh/jwc/cyxz",
      },
    ],
    "www.cmse": [
      {
        title: "材料科学与工程学院通知",
        docs: "https://docs.rsshub.app/routes/university#shan-dong-da-xue",
        source: ["/*path", "/"],
        target: (params) => {
          let type
          switch (params.path) {
            case "zxzx/tzgg.htm":
              type = "0"
              break
            case "zxzx/xyxw.htm":
              type = "1"
              break
            case "zxzx/bksjy.htm":
              type = "2"
              break
            case "zxzx/yjsjy.htm":
              type = "3"
              break
            case "zxzx/xsdt.htm":
              type = "4"
              break
            default:
              type = "0"
              break
          }
          return `/sdu/cmse/${type}`
        },
      },
    ],
    "www.cs": [
      {
        title: "计算机科学与技术学院通知",
        docs: "https://docs.rsshub.app/routes/university#shan-dong-da-xue",
        source: ["/*path", "/"],
        target: (params) => {
          let type
          switch (params.path) {
            case "xygg.htm":
              type = "0"
              break
            case "xsbg.htm":
              type = "1"
              break
            case "kjjx.htm":
              type = "2"
              break
            default:
              type = "0"
              break
          }
          return `/sdu/cs/${type}`
        },
      },
    ],
    "www.epe": [
      {
        title: "能源与动力工程学院通知",
        docs: "https://docs.rsshub.app/routes/university#shan-dong-da-xue",
        source: ["/*path", "/"],
        target: (params) => {
          let type
          switch (params.path) {
            case "zxzx/xydt.htm":
              type = "0"
              break
            case "zxzx/tzgg.htm":
              type = "1"
              break
            case "zxzx/xslt.htm":
              type = "2"
              break
            default:
              type = "0"
              break
          }
          return `/sdu/epe/${type}`
        },
      },
    ],
    "www.mech": [
      {
        title: "机械工程学院通知",
        docs: "https://docs.rsshub.app/routes/university#shan-dong-da-xue",
        source: ["/*path", "/"],
        target: (params) => {
          let type
          switch (params.path) {
            case "xwdt/tzgg.htm":
              type = "0"
              break
            case "xwdt/ysxw.htm":
              type = "1"
              break
            case "xwdt/jxxx.htm":
              type = "2"
              break
            case "xwdt/xsdt.htm":
              type = "3"
              break
            case "xwdt/xyjb.htm":
              type = "4"
              break
            default:
              type = "0"
              break
          }
          return `/sdu/mech/${type}`
        },
      },
    ],
    "www.sc": [
      {
        title: "软件学院通知",
        docs: "https://docs.rsshub.app/routes/university#shan-dong-da-xue",
        source: ["/*path", "/"],
        target: (params) => {
          let type
          switch (params.path) {
            case "tzgg.htm":
              type = "0"
              break
            case "kxyj/xsyg.htm":
              type = "1"
              break
            case "rcpy/bkjy.htm":
              type = "2"
              break
            case "rcpy/yjsjy.htm":
              type = "3"
              break
            default:
              type = "0"
              break
          }
          return `/sdu/sc/${type}`
        },
      },
    ],
  },
  "sdust.edu.cn": {
    _name: "山东科技大学",
    ".": [
      {
        title: "研究生招生网",
        docs: "https://docs.rsshub.app/routes/university#shan-dong-ke-ji-da-xue-yan-jiu-sheng-zhao-sheng-wang",
        source: ["/zhaosheng", "/"],
        target: (params, url) =>
          `/sdust/yjsy/zhaosheng/${new URL(url).href.match(/zhaosheng\/(.*)\.htm/)[1]}`,
      },
    ],
  },
  "sdzk.cn": {
    _name: "山东省教育招生考试院",
    ".": [
      {
        title: "新闻",
        docs: "https://docs.rsshub.app/routes/study#shan-dong-sheng-jiao-yu-zhao-sheng-kao-shi-yuan-xin-wen",
        source: ["/NewsList.aspx", "/"],
        target: (params, url) => {
          const bcid = new URL(url).searchParams.get("BCID")
          const cid = new URL(url).searchParams.get("CID")
          return `/sdzk${bcid ? `/${bcid}${cid ? `/${cid}` : ""}` : ""}`
        },
      },
    ],
  },
  "sec.today": {
    _name: "每日安全",
    ".": [
      {
        title: "动态",
        docs: "https://docs.rsshub.app/",
        source: ["/pulses", "/"],
        target:
          '/rsshub/transform/html/https%3A%2F%2Fsec.today%2Fpulses%2F/item=div[class="card-body"]',
      },
    ],
  },
  "sec-in.com": {
    _name: "SecIN信息安全技术社区",
    ".": [
      {
        title: "最新文章",
        docs: "https://docs.rsshub.app/routes/bbs#secin-xin-xi-an-quan-ji-shu-she-qu",
      },
    ],
  },
  "sec-wiki.com": {
    _name: "SecWiki-安全维基",
    www: [
      {
        title: "最新周刊",
        docs: "https://docs.rsshub.app/routes/other#secwiki-an-quan-wei-ji",
      },
    ],
  },
  "secrss.com": {
    _name: "安全内参",
    ".": [
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/programming#an-quan-nei-can",
        source: ["/articles", "/"],
        target: (_, url) =>
          `/secrss/category${new URL(url).searchParams.has("tag") ? `/${new URL(url).searchParams.get("tag")}` : ""}`,
      },
      {
        title: "作者",
        docs: "https://docs.rsshub.app/routes/programming#an-quan-nei-can",
        source: ["/articles", "/"],
        target: (_, url) =>
          `/secrss/author${new URL(url).searchParams.get("author")}`,
      },
    ],
  },
  "seekingalpha.com": {
    _name: "Seeking Alpha",
    ".": [
      {
        title: "Summary",
        docs: "https://docs.rsshub.app/routes/en/finance#seeking-alpha",
        source: [
          "/symbol/:symbol/:category",
          "/symbol/:symbol/earnings/:category",
        ],
        target: "/seekingalpha/:symbol/:category",
      },
    ],
  },
  "segmentfault.com": {
    _name: "SegmentFault",
    ".": [
      {
        title: "频道",
        docs: "https://docs.rsshub.app/routes/programming#segmentfault",
        source: ["/channel/:name"],
        target: "/segmentfault/channel/:name",
      },
      {
        title: "用户",
        docs: "https://docs.rsshub.app/routes/programming#segmentfault",
        source: ["/u/:name"],
        target: "/segmentfault/user/:name",
      },
      {
        title: "博客",
        docs: "https://docs.rsshub.app/routes/programming#segmentfault",
        source: ["/t/:tag/blogs"],
        target: "/segmentfault/blogs/:tag",
      },
    ],
  },
  "sehuatang.net": {
    _name: "色花堂",
    ".": [
      {
        title: "分区帖子",
        docs: "https://docs.rsshub.app/routes/multimedia#se-hua-tang-fen-qu-tie-zi",
        source: ["/:category", "/"],
        target: (params, url) => {
          const theUrl = new URL(url)
          const matches = theUrl.href.match(/forum-(\d)+-\d+/)
          const fid =
            theUrl.searchParams.get("fid") || (matches ? matches[1] : "")
          const tid = theUrl.searchParams.get("typeid")
          return `/sehuatang${fid ? `/${fid}` : ""}${tid ? `/${tid}` : ""}`
        },
      },
    ],
  },
  "sensortower.com": {
    _name: "Sensor Tower",
    ".": [
      {
        title: "Blog",
        docs: "https://docs.rsshub.app/routes/new-media#sensor-tower-blog",
        source: ["/blog", "/zh-CN/blog", "/ja/blog", "/ko/blog", "/"],
        target: "/sensortower/blog",
      },
    ],
  },
  "setn.com": {
    _name: "三立新聞網",
    ".": [
      {
        title: "新聞",
        docs: "https://docs.rsshub.app/routes/traditional-media#san-li-xin-wen-wang-xin-wen",
        source: ["/ViewAll.aspx", "/"],
        target: "/setn",
      },
    ],
    star: [
      {
        title: "娛樂新聞",
        docs: "https://docs.rsshub.app/routes/traditional-media#san-li-xin-wen-wang-xin-wen",
        source: ["/viewall", "/"],
        target: "/setn/娛樂",
      },
    ],
    health: [
      {
        title: "健康新聞",
        docs: "https://docs.rsshub.app/routes/traditional-media#san-li-xin-wen-wang-xin-wen",
        source: ["/viewall", "/"],
        target: "/setn/健康",
      },
    ],
    travel: [
      {
        title: "旅遊新聞",
        docs: "https://docs.rsshub.app/routes/traditional-media#san-li-xin-wen-wang-xin-wen",
        source: ["/viewall", "/"],
        target: "/setn/旅遊",
      },
    ],
    fuhouse: [
      {
        title: "富房網新聞",
        docs: "https://docs.rsshub.app/routes/traditional-media#san-li-xin-wen-wang-xin-wen",
        source: ["/viewall", "/"],
        target: "/setn/富房網",
      },
    ],
    watch: [
      {
        title: "女孩新聞",
        docs: "https://docs.rsshub.app/routes/traditional-media#san-li-xin-wen-wang-xin-wen",
        source: ["/viewall", "/"],
        target: "/setn/女孩",
      },
    ],
  },
  "seu.edu.cn": {
    _name: "东南大学",
    cse: [
      {
        title: "计算机技术与工程学院",
        docs: "https://docs.rsshub.app/routes/university#dong-nan-da-xue",
        source: ["/:type/list.htm", "/"],
        target: "/seu/cse/:type?",
      },
    ],
    radio: [
      {
        title: "信息科学与工程学院学术活动",
        docs: "https://docs.rsshub.app/routes/university#dong-nan-da-xue",
        source: ["/_s29/15986/list.psp", "/"],
        target: "/seu/radio/academic",
      },
    ],
    seugs: [
      {
        title: "研究生院全部公告",
        docs: "https://docs.rsshub.app/routes/university#dong-nan-da-xue-yan-jiu-sheng-yuan-quan-bu-gong-gao",
        source: ["/26671/list.htm", "/"],
        target: "/seu/yjs",
      },
    ],
    yzb: [
      {
        title: "研究生招生网通知公告",
        docs: "https://docs.rsshub.app/routes/university#dong-nan-da-xue",
        source: ["/:type/list.htm"],
        target: "/seu/yzb/:type",
      },
    ],
  },
  "shcstheatre.com": {
    _name: "上海文化广场",
    www: [
      {
        title: "节目列表",
        docs: "https://docs.rsshub.app/routes/shopping#shang-hai-wen-hua-guang-chang-jie-mu-lie-biao",
        source: ["/Program/programList.aspx"],
        target: "/shcstheatre/programs",
      },
    ],
  },
  "shiep.edu.cn": {
    _name: "上海电力大学",
    bwc: [
      {
        title: "武装部保卫处",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:id/list.htm"],
        target: "/shiep/bwc/:id",
      },
    ],
    career: [
      {
        title: "本科就业信息网",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/news/index/tag/:id"],
        target: "/shiep/career/:id",
      },
    ],
    cyb: [
      {
        title: "资产经营公司/产业办",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:id/list.htm"],
        target: "/shiep/cyb/:id",
      },
    ],
    dangban: [
      {
        title: "党委办公室",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:id/list.htm"],
        target: "/shiep/dangban/:id",
      },
    ],
    djfwzxdcs: [
      {
        title: "党建服务中心/党建督查室",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:id/list.htm"],
        target: "/shiep/djfwzxdcs/:id",
      },
    ],
    dqxy: [
      {
        title: "电气工程学院",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:id/list.htm"],
        target: "/shiep/dqxy/:id",
      },
    ],
    dwllc: [
      {
        title: "对外联络处",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:id/list.htm"],
        target: "/shiep/dwllc/:id",
      },
    ],
    dxxy: [
      {
        title: "电子与信息工程学院",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:id/list.htm"],
        target: "/shiep/dxxy/:id",
      },
    ],
    energy: [
      {
        title: "能源与机械工程学院",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:id/list.htm"],
        target: "/shiep/energy/:id",
      },
    ],
    "energy-saving": [
      {
        title: "上海热交换系统节能工程技术研究中心",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:id/list.htm"],
        target: "/shiep/energy-saving/:id",
      },
    ],
    english: [
      {
        title: "Shanghai University of Electric Power",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:id/list.htm"],
        target: "/shiep/english/:id",
      },
    ],
    fao: [
      {
        title: "国际交流与合作处（港澳台办公室）",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:id/list.htm"],
        target: "/shiep/fao/:id",
      },
    ],
    fgw: [
      {
        title: "妇工委",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:id/list.htm"],
        target: "/shiep/fgw/:id",
      },
    ],
    fzghc: [
      {
        title: "发展规划处",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:id/list.htm"],
        target: "/shiep/fzghc/:id",
      },
    ],
    gec: [
      {
        title: "上海新能源人才技术教育交流中心",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:id/list.htm"],
        target: "/shiep/gec/:id",
      },
    ],
    gonghui: [
      {
        title: "工会",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:id/list.htm"],
        target: "/shiep/gonghui/:id",
      },
    ],
    "green-energy": [
      {
        title: "上海绿色能源并网技术研究中心",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:id/list.htm"],
        target: "/shiep/green-energy/:id",
      },
    ],
    hhsyzx: [
      {
        title: "能源化学实验教学中心",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:id/list.htm"],
        target: "/shiep/hhsyzx/:id",
      },
    ],
    hhxy: [
      {
        title: "环境与化学工程学院",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:id/list.htm"],
        target: "/shiep/hhxy/:id",
      },
    ],
    hqglc: [
      {
        title: "后勤管理处（后勤服务中心）",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:id/list.htm"],
        target: "/shiep/hqglc/:id",
      },
    ],
    ieetc: [
      {
        title: "创新创业工程训练中心",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:id/list.htm"],
        target: "/shiep/ieetc/:id",
      },
    ],
    jgdw: [
      {
        title: "机关党委",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:id/list.htm"],
        target: "/shiep/jgdw/:id",
      },
    ],
    jgxy: [
      {
        title: "经济与管理学院",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:id/list.htm"],
        target: "/shiep/jgxy/:id",
      },
    ],
    jijian: [
      {
        title: "纪委（监察专员办公室）",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:id/list.htm"],
        target: "/shiep/jijian/:id",
      },
    ],
    jjc: [
      {
        title: "基建处",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:id/list.htm"],
        target: "/shiep/jjc/:id",
      },
    ],
    jjxy: [
      {
        title: "继续教育学院（国际教育学院）",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:id/list.htm"],
        target: "/shiep/jjxy/:id",
      },
    ],
    jsjxfzzx: [
      {
        title: "教师教学发展中心",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:id/list.htm"],
        target: "/shiep/jsjxfzzx/:id",
      },
    ],
    jsjxy: [
      {
        title: "计算机科学与技术学院",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:id/list.htm"],
        target: "/shiep/jsjxy/:id",
      },
    ],
    jszyzx: [
      {
        title: "技术转移中心",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:id/list.htm"],
        target: "/shiep/jszyzx/:id",
      },
    ],
    jwc: [
      {
        title: "教务处",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:id/list.htm"],
        target: "/shiep/jwc/:id",
      },
    ],
    jxfz: [
      {
        title: "电力装备设计与制造虚拟仿真中心",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:id/list.htm"],
        target: "/shiep/jxfz/:id",
      },
    ],
    kczx: [
      {
        title: "能源电力科创中心",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:id/list.htm"],
        target: "/shiep/kczx/:id",
      },
    ],
    kyc: [
      {
        title: "科研处/融合办",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:id/list.htm"],
        target: "/shiep/kyc/:id",
      },
    ],
    lgxq: [
      {
        title: "临港新校区建设综合办公室",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:id/list.htm"],
        target: "/shiep/lgxq/:id",
      },
    ],
    library: [
      {
        title: "图书馆",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:id/list.htm"],
        target: "/shiep/library/:id",
      },
    ],
    metc: [
      {
        title: "现代教育技术中心/信息办",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:id/list.htm"],
        target: "/shiep/metc/:id",
      },
    ],
    mpep: [
      {
        title: "上海市电力材料防护与新材料重点实验室",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:id/list.htm"],
        target: "/shiep/mpep/:id",
      },
    ],
    news: [
      {
        title: "新闻网",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:id/list.htm"],
        target: "/shiep/news/:id",
      },
    ],
    nydlzk: [
      {
        title: "能源电力智库",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:id/list.htm"],
        target: "/shiep/nydlzk/:id",
      },
    ],
    office: [
      {
        title: "校长办公室（档案馆）",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:id/list.htm"],
        target: "/shiep/office/:id",
      },
    ],
    rpstec: [
      {
        title: "国家新能源电力系统实验教学示范中心",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:id/list.htm"],
        target: "/shiep/rpstec/:id",
      },
    ],
    rsc: [
      {
        title: "党委教师工作部/人事处",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:id/list.htm"],
        target: "/shiep/rsc/:id",
      },
    ],
    rwysxy: [
      {
        title: "人文艺术学院",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:id/list.htm"],
        target: "/shiep/rwysxy/:id",
      },
    ],
    sjc: [
      {
        title: "审计处",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:id/list.htm"],
        target: "/shiep/sjc/:id",
      },
    ],
    skb: [
      {
        title: "马克思主义学院",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:id/list.htm"],
        target: "/shiep/skb/:id",
      },
    ],
    slxy: [
      {
        title: "数理学院",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:id/list.htm"],
        target: "/shiep/slxy/:id",
      },
    ],
    spgc: [
      {
        title: "智能发电实验教学中心",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:id/list.htm"],
        target: "/shiep/spgc/:id",
      },
    ],
    sysyzcglc: [
      {
        title: "实验室与资产管理处",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:id/list.htm"],
        target: "/shiep/sysyzcglc/:id",
      },
    ],
    tgb: [
      {
        title: "离退休党委/退管办",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:id/list.htm"],
        target: "/shiep/tgb/:id",
      },
    ],
    tw: [
      {
        title: "团委",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:id/list.htm"],
        target: "/shiep/tw/:id",
      },
    ],
    tyb: [
      {
        title: "体育学院",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:id/list.htm"],
        target: "/shiep/tyb/:id",
      },
    ],
    tzb: [
      {
        title: "统战部",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:id/list.htm"],
        target: "/shiep/tzb/:id",
      },
    ],
    wenming: [
      {
        title: "文明办",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:id/list.htm"],
        target: "/shiep/wenming/:id",
      },
    ],
    wgyxy: [
      {
        title: "外国语学院",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:id/list.htm"],
        target: "/shiep/wgyxy/:id",
      },
    ],
    xcb: [
      {
        title: "宣传部（文明办、融媒体中心）",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:id/list.htm"],
        target: "/shiep/xcb/:id",
      },
    ],
    xsc: [
      {
        title: "学生处",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:id/list.htm"],
        target: "/shiep/xsc/:id",
      },
    ],
    xunchaban: [
      {
        title: "巡查办",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:id/list.htm"],
        target: "/shiep/xunchaban/:id",
      },
    ],
    xxgk: [
      {
        title: "信息公开网",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:id/list.htm"],
        target: "/shiep/xxgk/:id",
      },
    ],
    yjsc: [
      {
        title: "研究生院/研工部",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:id/list.htm"],
        target: "/shiep/yjsc/:id",
      },
    ],
    zdhxy: [
      {
        title: "自动化工程学院",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:id/list.htm"],
        target: "/shiep/zdhxy/:id",
      },
    ],
    ztjy: [
      {
        title: "学习路上",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:id/list.htm"],
        target: "/shiep/ztjy/:id",
      },
    ],
    zs: [
      {
        title: "本科招生网",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:id/list.htm"],
        target: "/shiep/zs/:id",
      },
    ],
    zzb: [
      {
        title: "组织部（老干部处、党校）",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:id/list.htm"],
        target: "/shiep/zzb/:id",
      },
    ],
  },
  "shmeea.edu.cn": {
    _name: "上海市教育考试院",
    www: [
      {
        title: "消息速递",
        docs: "https://docs.rsshub.app/routes/other#shang-hai-shi-jiao-yu-kao-shi-yuan",
        source: ["/"],
        target: "/shmeea",
      },
      {
        title: "自学考试通知公告",
        docs: "https://docs.rsshub.app/routes/other#shang-hai-shi-jiao-yu-kao-shi-yuan",
        source: ["/page/04000/index.html", "/"],
        target: "/shmeea/self-study",
      },
    ],
  },
  "shmtu.edu.cn": {
    _name: "上海海事大学",
    jwc: [
      {
        title: "教务信息",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:type"],
        target: "/shmtu/jwc/:type",
      },
    ],
    portal: [
      {
        title: "数字平台",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:type"],
        target: "/shmtu/portal/:type",
      },
    ],
    www: [
      {
        title: "官网信息",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-dian-li-da-xue",
        source: ["/:type"],
        target: "/shmtu/www/:type",
      },
    ],
  },
  "shopback.com.tw": {
    _name: "ShopBack",
    ".": [
      {
        title: "Store",
        docs: "https://docs.rsshub.app/routes/shopping#shopback-store",
        source: ["/:category", "/"],
        target: "/shopback/:store",
      },
    ],
  },
  "shoppingdesign.com.tw": {
    _name: "Shopping Design",
    www: [
      {
        title: "文章列表",
        docs: "https://docs.rsshub.app/routes/design#shopping-design",
        source: "/post",
        target: "/shoppingdesign/posts",
      },
    ],
  },
  "showstart.com": {
    _name: "秀动网",
    www: [
      {
        title: "演出更新",
        docs: "https://docs.rsshub.app/routes/shopping#xiu-dong-wang-yan-chu-geng-xin",
        source: ["/event/list"],
        target: (_, url) => {
          const search = new URL(url).searchParams
          const cityCode = search.get("cityCode") || 0
          const showStyle = search.get("showStyle") || 0
          return `/showstart/event/${cityCode}/${showStyle}`
        },
      },
      {
        title: "演出搜索",
        docs: "https://docs.rsshub.app/routes/shopping#xiu-dong-wang-yan-chu-sou-suo",
        source: ["/event/list"],
        target: (_, url) => {
          const search = new URL(url).searchParams
          const keyword = search.get("keyword") || ""
          return `/showstart/search/event/${keyword}`
        },
      },
      {
        title: "音乐人 - 演出更新",
        docs: "https://docs.rsshub.app/routes/shopping#yin-yue-ren-yan-chu-geng-xin",
        source: ["/artist/:id"],
        target: "/showstart/artist/:id",
      },
      {
        title: "厂牌 - 演出更新",
        docs: "https://docs.rsshub.app/routes/shopping#chang-pai-yan-chu-geng-xin",
        source: ["/host/:id"],
        target: "/showstart/brand/:id",
      },
    ],
  },
  "shu.edu.cn": {
    _name: "上海大学",
    jwb: [
      {
        title: "教务处通知公告",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-da-xue",
        source: ["/index/:type"],
        target: "/shu/jwb/:type",
      },
    ],
    www: [
      {
        title: "官网信息",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-da-xue",
        source: ["/:type"],
        target: "/shu/:type",
      },
    ],
  },
  "shuiguopai.com": {
    _name: "水果派",
    ".": [
      {
        title: "首页",
        docs: "https://docs.rsshub.app/routes/new-media#shui-guo-pai-shou-ye",
        source: ["/"],
        target: "/shuiguopai",
      },
    ],
  },
  "sicau.edu.cn": {
    _name: "",
    dky: [
      {
        title: "招生就业",
        docs: "https://docs.rsshub.app/routes/university#si-chuan-nong-ye-da-xue-zhao-sheng-jiu-ye",
        source: ["/"],
        target: "/sicau/zsjy/:category?",
      },
      {
        title: "动物科技学院",
        docs: "https://docs.rsshub.app/routes/university#si-chuan-nong-ye-da-xue",
        source: ["/"],
        target: "/sicau/dky/:category?",
      },
    ],
    yan: [
      {
        title: "研究生院",
        docs: "https://docs.rsshub.app/routes/university#si-chuan-nong-ye-da-xue",
        source: ["/"],
        target: "/sicau/yan/:category?",
      },
    ],
  },
  "sigsac.org": {
    _name: "ACM Special Interest Group on Security Audit and Control",
    ".": [
      {
        title: "ACM Conference on Computer and Communications Security",
        docs: "https://docs.rsshub.app/routes/journal#acm-special-interest-group-on-security-audit-and-control",
        source: ["/ccs.html", "/"],
        target: "/sigsac/ccs",
      },
    ],
  },
  "blog.simpleinfo.cc": {
    _name: "簡訊設計",
    ".": [
      {
        title: "志祺七七",
        docs: "https://docs.rsshub.app/routes/new-media#jian-xun-she-ji",
        source: "/shasha77",
        target: (_, url) =>
          `/simpleinfo/${new URL(url).searchParams.get("category")}`,
      },
      {
        title: "夥伴聊聊 / 專案作品",
        docs: "https://docs.rsshub.app/routes/new-media#jian-xun-she-ji",
        source: "/blog/:category",
        target: "/simpleinfo/:category",
      },
    ],
  },
  "sina.com.cn": {
    _name: "新浪",
    finance: [
      {
        title: "财经 - 国內",
        docs: "https://docs.rsshub.app/routes/new-media#xin-lang",
        source: ["/china", "/"],
        target: "/sina/finance/china",
      },
      {
        title: "美股",
        docs: "https://docs.rsshub.app/routes/new-media#xin-lang",
        source: ["/stock/usstock", "/"],
        target: "/sina/finance/stock/usstock",
      },
    ],
    news: [
      {
        title: "滚动新闻",
        docs: "https://docs.rsshub.app/routes/new-media#xin-lang",
        source: ["/roll"],
        target: (_, url) =>
          `/sina/rollnews/${new URL(url).hash.match(/lid=(\d+)/)[1]}`,
      },
    ],
    sports: [
      {
        title: "体育 - 综合",
        docs: "https://docs.rsshub.app/routes/new-media#xin-lang",
        source: ["/others/:type", "/:type"],
        target: (params) => `/sina/sports/${params.type}`,
      },
    ],
    tech: [
      {
        title: "专栏 - 创事记",
        docs: "https://docs.rsshub.app/routes/new-media#xin-lang",
        source: ["/chuangshiji", "/"],
        target: "/sina/csj",
      },
      {
        title: "科技 - 科学探索",
        docs: "https://docs.rsshub.app/routes/new-media#xin-lang",
        source: ["/discovery", "/"],
        target: "/sina/discovery/zx",
      },
    ],
  },
  "sinchew.com.my": {
    _name: "星洲网",
    ".": [
      {
        title: "首页",
        docs: "https://docs.rsshub.app/routes/traditional-media#xing-zhou-wang-shou-ye",
        source: ["/"],
        target: "/sinchew",
      },
      {
        title: "最新",
        docs: "https://docs.rsshub.app/routes/traditional-media#xing-zhou-wang-zui-xin",
        source: ["/latest", "/"],
        target: "/sinchew/latest",
      },
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/traditional-media#xing-zhou-wang-fen-lei",
        source: ["/category/:category", "/"],
        target: (params, url) =>
          `/sinchew/category/${new URL(url).toString().match(/\/category\/(.*)$/)[1]}`,
      },
    ],
  },
  "sis001.com": {
    _name: "第一会所",
    ".": [
      {
        title: "子版块",
        docs: "https://docs.rsshub.app/routes/bbs#di-yi-hui-suo",
        source: ["/forum/:id"],
        target: (params) =>
          `/sis001/forum/${params.id.replace("forum-", "").replace("-1.html", "")}`,
      },
    ],
  },
  "sjtu.edu.cn": {
    _name: "上海交通大学",
    "bjwb.seiee": [
      {
        title: "电子信息与电气工程学院",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-jiao-tong-da-xue",
        source: ["/seiee/list/:type", "/bkjwb/list/:type", "/xsb/list/:type"],
        target: (params) => {
          let type = ""
          switch (params.type) {
            // /sjtu/seiee/academic
            case "683-1-20.htm":
              type = "academic"
              break
            // /sjtu/seiee/bjwb/:type
            case "1503-1-20.htm":
              type = "bjwb/academic"
              break
            case "1505-1-20.htm":
              type = "bjwb/academic"
              break
            case "1506-1-20.htm":
              type = "bjwb/postgraduate"
              break
            case "1507-1-20.htm":
              type = "bjwb/abroad"
              break
            case "2281-1-20.htm":
              type = "bjwb/international"
              break
            // /sjtu/seiee/xsb/:type?
            case "2938-1-20.htm":
              type = "xsb/news"
              break
            case "611-1-20.htm":
              type = "xsb/scholarship"
              break
            case "2676-1-20.htm":
              type = "xsb/activity"
              break
            case "1981-1-20.htm":
              type = "xsb/lecture"
              break
            case "705-1-20.htm":
              type = "xsb/all"
              break
            case "1001-1-20.htm":
              type = "xsb/financialAid"
              break
            case "3016-1-20.htm":
              type = "xsb/zhcp"
              break
            default:
              return null
          }
          return `/sjtu/seiee/${type}`
        },
      },
    ],
    gs: [
      {
        title: "研究生通知公告",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-jiao-tong-da-xue-yan-jiu-sheng-tong-zhi-gong-gao",
        source: ["/announcement/:type"],
        target: "/sjtu/gs/:type",
      },
    ],
    jwc: [
      {
        title: "教务处通知公告",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-jiao-tong-da-xue",
        source: ["/xwtg/:type"],
        target: (params) => {
          let type = ""
          switch (params.type) {
            case "xwzx.htm":
              type = "news"
              break
            case "tztg.htm":
            case "":
              type = "notice"
              break
            case "jxyx.htm":
              type = "operation"
              break
            case "zcxw.htm":
              type = "affairs"
              break
            case "yjb.htm":
              type = "yjb"
              break
            case "jgb.htm":
              type = "jgb"
              break
            case "zhb.htm":
              type = "zhb"
              break
            case "yywz.htm":
              type = "language"
              break
            case "ghyzb.htm":
              type = "party"
              break
            case "tsjy.htm":
              type = "ge"
              break
            default:
              type = "notice"
              break
          }
          return `/sjtu/jwc/${type}`
        },
      },
    ],
    tongqu: [
      {
        title: "同去网最新活动",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-jiao-tong-da-xue",
      },
    ],
    yzb: [
      {
        title: "研究生招生网招考信息",
        docs: "https://docs.rsshub.app/routes/university#shang-hai-jiao-tong-da-xue",
        source: ["/index/zkxx/:type"],
        target: (params) => `/sjtu/yzb/zkxx/${params.type.replace(".htm", "")}`,
      },
    ],
  },
  "skysports.com": {
    _name: "Sky Sports",
    ".": [
      {
        title: "News",
        docs: "https://docs.rsshub.app/routes/new-media#sky-sports-news",
        source: ["/"],
        target: (params, url) =>
          `/skysports/news/${new URL(url).toString().match(/\/(.*)-news$/)[1]}`,
      },
    ],
  },
  "slowmist.com": {
    _name: "慢雾科技 SLOWMIST",
    ".": [
      {
        title: "动态",
        docs: "https://docs.rsshub.app/routes/new-media#man-wu-ke-ji",
        source: ["/zh/news.html"],
        target: "/slowmist/:type?",
      },
    ],
  },
  "smashingmagazine.com": {
    _name: "Smashing Magazine",
    ".": [
      {
        title: "Articles",
        docs: "https://docs.rsshub.app/routes/en/programming#a-list-apart",
        source: ["/articles/"],
        target: "/smashingmagazine",
      },
      {
        title: "Category",
        docs: "https://docs.rsshub.app/routes/en/programming#a-list-apart",
        source: ["/category/:category"],
        target: "/smashingmagazine/:category",
      },
    ],
  },
  "smzdm.com": {
    _name: "什么值得买",
    post: [
      {
        title: "好文",
        docs: "https://docs.rsshub.app/routes/shopping#shen-me-zhi-de-mai",
        source: "/:day",
        target: (params) => `/smzdm/haowen/${params.day.replace("hot_", "")}`,
      },
      {
        title: "好文分类",
        docs: "https://docs.rsshub.app/routes/shopping#shen-me-zhi-de-mai",
        source: ["/fenlei/:name"],
        target: "/smzdm/haowen/fenlei/:name",
      },
    ],
    search: [
      {
        title: "关键词",
        docs: "https://docs.rsshub.app/routes/shopping#shen-me-zhi-de-mai",
        source: "/",
        target: (_, url) =>
          `/smzdm/keyword/${new URL(url).searchParams.get("s")}`,
      },
    ],
    www: [
      {
        title: "排行榜",
        docs: "https://docs.rsshub.app/routes/shopping#shen-me-zhi-de-mai",
        source: "/top",
      },
    ],
    zhiyou: [
      {
        title: "用户文章",
        docs: "https://docs.rsshub.app/routes/shopping#shen-me-zhi-de-mai",
        source: "/member/:uid/article",
        target: "/smzdm/article/:uid",
      },
      {
        title: "用户爆料",
        docs: "https://docs.rsshub.app/routes/shopping#shen-me-zhi-de-mai",
        source: "/member/:uid/baoliao",
        target: "/smzdm/baoliao/:uid",
      },
    ],
  },
  "snowpeak.com": {
    _name: "Snow Peak",
    ".": [
      {
        title: "New Arrivals(USA)",
        docs: "https://docs.rsshub.app/routes/shopping#snow-peak",
        source: ["/collections/new-arrivals", "/"],
        target: "/snowpeak/us/new-arrivals",
      },
    ],
  },
  "sobooks.net": {
    _name: "SoBooks",
    ".": [
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/reading#sobooks",
        source: ["/:category"],
        target: "/sobooks/:category",
      },
      {
        title: "标签",
        docs: "https://docs.rsshub.app/routes/reading#sobooks",
        source: ["/books/tag/:tag"],
        target: "/sobooks/tag/:tag",
      },
      {
        title: "归档",
        docs: "https://docs.rsshub.app/routes/reading#sobooks",
        source: ["/books/date/*date"],
        target: (params) => `/sobooks/date/${params.date.repalce("/", "-")}`,
      },
    ],
  },
  "sohu.com": {
    _name: "搜狐",
    ".": [
      {
        title: "搜狐号",
        docs: "https://docs.rsshub.app/routes/new-media#sou-hu-hao",
        source: ["/a/:id"],
        target: (params) => `/sohu/mp/${params.id.split("_")[1]}`,
      },
    ],
  },
  "solidot.org": {
    _name: "Solidot",
    www: [
      {
        title: "最新消息",
        docs: "https://docs.rsshub.app/routes/traditional-media#solidot",
        source: ["/"],
        target: "/solidot/www",
      },
    ],
    linux: [
      {
        title: "最新消息",
        docs: "https://docs.rsshub.app/routes/traditional-media#solidot",
        source: ["/"],
        target: "/solidot/linux",
      },
    ],
    science: [
      {
        title: "最新消息",
        docs: "https://docs.rsshub.app/routes/traditional-media#solidot",
        source: ["/"],
        target: "/solidot/science",
      },
    ],
    technology: [
      {
        title: "最新消息",
        docs: "https://docs.rsshub.app/routes/traditional-media#solidot",
        source: ["/"],
        target: "/solidot/technology",
      },
    ],
    mobile: [
      {
        title: "最新消息",
        docs: "https://docs.rsshub.app/routes/traditional-media#solidot",
        source: ["/"],
        target: "/solidot/mobile",
      },
    ],
    apple: [
      {
        title: "最新消息",
        docs: "https://docs.rsshub.app/routes/traditional-media#solidot",
        source: ["/"],
        target: "/solidot/apple",
      },
    ],
    hardware: [
      {
        title: "最新消息",
        docs: "https://docs.rsshub.app/routes/traditional-media#solidot",
        source: ["/"],
        target: "/solidot/hardware",
      },
    ],
    software: [
      {
        title: "最新消息",
        docs: "https://docs.rsshub.app/routes/traditional-media#solidot",
        source: ["/"],
        target: "/solidot/software",
      },
    ],
    security: [
      {
        title: "最新消息",
        docs: "https://docs.rsshub.app/routes/traditional-media#solidot",
        source: ["/"],
        target: "/solidot/security",
      },
    ],
    games: [
      {
        title: "最新消息",
        docs: "https://docs.rsshub.app/routes/traditional-media#solidot",
        source: ["/"],
        target: "/solidot/games",
      },
    ],
    books: [
      {
        title: "最新消息",
        docs: "https://docs.rsshub.app/routes/traditional-media#solidot",
        source: ["/"],
        target: "/solidot/books",
      },
    ],
    idle: [
      {
        title: "最新消息",
        docs: "https://docs.rsshub.app/routes/traditional-media#solidot",
        source: ["/"],
        target: "/solidot/idle",
      },
    ],
    cloud: [
      {
        title: "最新消息",
        docs: "https://docs.rsshub.app/routes/traditional-media#solidot",
        source: ["/"],
        target: "/solidot/cloud",
      },
    ],
    story: [
      {
        title: "最新消息",
        docs: "https://docs.rsshub.app/routes/traditional-media#solidot",
        source: ["/"],
        target: "/solidot/story",
      },
    ],
  },
  "sony.com": {
    _name: "Sony",
    ".": [
      {
        title: "Software Downloads",
        docs: "https://docs.rsshub.app/routes/program-update#sony",
        source: ["/electronics/support/:productType/:productId/downloads"],
        target: "/sony/downloads/:productType/:productId",
      },
    ],
  },
  "soundofhope.org": {
    _name: "希望之声",
    ".": [
      {
        title: "频道",
        docs: "https://docs.rsshub.app/routes/traditional-media#xi-wang-zhi-sheng",
        source: ["/:channel/:id"],
        target: "/soundofhope/:channel/:id",
      },
    ],
  },
  "sourceforge.net": {
    _name: "SourceForge",
    www: [
      {
        title: "Software",
        docs: "https://docs.rsshub.app/routes/program-update#sourceforge",
        source: "/directory",
      },
    ],
  },
  "nfapp.southcn.com": {
    _name: "南方网",
    ".": [
      {
        title: "南方+",
        docs: "https://docs.rsshub.app/routes/traditional-media#nan-fang-wang",
        source: ["/"],
      },
    ],
  },
  "spotify.com": {
    _name: "Spotify",
    open: [
      {
        title: "歌手专辑",
        docs: "https://docs.rsshub.app/routes/multimedia#spotify",
        source: ["/artist/:id"],
        target: "/spotify/artist/:id",
      },
      {
        title: "播放列表",
        docs: "https://docs.rsshub.app/routes/multimedia#spotify",
        source: ["/playlist/:id"],
        target: "/spotify/playlist/:id",
      },
      {
        title: "用户 Saved Tracks",
        docs: "https://docs.rsshub.app/routes/multimedia#spotify",
        source: ["/collection/tracks"],
        target: "/spotify/saved",
      },
      {
        title: "节目",
        docs: "https://docs.rsshub.app/routes/multimedia#spotify",
        source: ["/show/:id"],
        target: "/spotify/show/:id",
      },
      {
        title: "用户 Top Artists",
        docs: "https://docs.rsshub.app/routes/multimedia#spotify",
        source: ["/"],
        target: "/spotify/top/artists",
      },
      {
        title: "用户 Top Tracks",
        docs: "https://docs.rsshub.app/routes/multimedia#spotify",
        source: ["/"],
        target: "/spotify/top/tracks",
      },
    ],
  },
  "springer.com": {
    _name: "Springer",
    www: [
      {
        title: "latest",
        docs: "https://docs.rsshub.app/routes/journal#Springer",
        source: "/journal/:journal/*",
        target: "/springer/journal/:journal",
      },
    ],
  },
  "sputniknews.cn": {
    _name: "俄罗斯卫星通讯社",
    ".": [
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/traditional-media#e-luo-si-wei-xing-tong-xun-she-fen-lei",
        source: ["/:category", "/"],
        target: "/sputniknews/:category/:language",
      },
    ],
  },
  "sqmc.edu.cn": {
    _name: "新乡医学院三全学院",
    ".": [
      {
        title: "官网信息",
        docs: "https://docs.rsshub.app/routes/university#xin-xiang-yi-xue-yuan-san-quan-xue-yuan",
        source: ["/:category/list.htm"],
        target: "/sqmc/www/:category?",
      },
    ],
  },
  "sse.com.cn": {
    _name: "上海证券交易所",
    bond: [
      {
        title: "可转换公司债券公告",
        docs: "https://docs.rsshub.app/routes/finance#shang-hai-zheng-quan-jiao-yi-suo",
        source: ["/disclosure/announ/convertible", "/"],
      },
    ],
    kcb: [
      {
        title: "科创板项目动态",
        docs: "https://docs.rsshub.app/routes/finance#shang-hai-zheng-quan-jiao-yi-suo",
        source: ["/home", "/"],
        target: "/sse/renewal",
      },
    ],
    www: [
      {
        title: "监管问询",
        docs: "https://docs.rsshub.app/routes/finance#shang-hai-zheng-quan-jiao-yi-suo",
        source: ["/disclosure/credibility/supervision/inquiries", "/"],
        target: "/sse/inquire",
      },
      {
        title: "上市公司信息最新公告披露",
        docs: "https://docs.rsshub.app/routes/finance#shang-hai-zheng-quan-jiao-yi-suo",
        source: ["/assortment/stock/list/info/announcement/index.shtml", "/"],
      },
      {
        title: "本所业务指南与流程",
        docs: "https://docs.rsshub.app/routes/finance#shang-hai-zheng-quan-jiao-yi-suo",
        source: ["/lawandrules/guide/*slug", "/"],
        target: (params) =>
          `/sse/lawandrules/${params.slug.replace(/\//g, "-")}`,
      },
    ],
  },
  "ssm.gov.mo": {
    _name: "澳门卫生局",
    www: [
      {
        title: "最新消息",
        docs: "https://docs.rsshub.app/routes/government#ao-men-wei-sheng-ju-zui-xin-xiao-xi",
        source: ["/", "/portal"],
        target: "/ssm/news",
      },
    ],
  },
  "sspai.com": {
    _name: "少数派",
    ".": [
      {
        title: "首页",
        docs: "https://docs.rsshub.app/routes/new-media#shao-shu-pai-sspai",
        source: "/index",
        target: "/sspai/index",
      },
      {
        title: "最新上架付费专栏",
        docs: "https://docs.rsshub.app/routes/new-media#shao-shu-pai-sspai",
        source: "/series",
        target: "/sspai/series",
      },
      {
        title: "付费专栏文章更新",
        docs: "https://docs.rsshub.app/routes/new-media#shao-shu-pai-sspai",
        source: ["/series/:id", "/series/:id/list", "/series/:id/metadata"],
        target: "/sspai/series/:id",
      },
      {
        title: "Matrix",
        docs: "https://docs.rsshub.app/routes/new-media#shao-shu-pai-sspai",
        source: "/matrix",
        target: "/sspai/matrix",
      },
      {
        title: "专栏",
        docs: "https://docs.rsshub.app/routes/new-media#shao-shu-pai-sspai",
        source: "/column/:id",
        target: "/sspai/column/:id",
      },
      {
        title: "作者动态",
        docs: "https://docs.rsshub.app/routes/new-media#shao-shu-pai-sspai",
        source: "/u/:id/updates",
        target: "/sspai/activity/:id",
      },
      {
        title: "作者已发布文章",
        docs: "https://docs.rsshub.app/routes/new-media#shao-shu-pai-sspai",
        source: "/u/:id/posts",
        target: "/sspai/author/:id",
      },
      {
        title: "用户收藏",
        docs: "https://docs.rsshub.app/routes/new-media#shao-shu-pai-sspai",
        source: ["/u/:slug/bookmark_posts"],
        target: "/sspai/bookmarks/:slug",
      },
      {
        title: "专题",
        docs: "https://docs.rsshub.app/routes/new-media#shao-shu-pai-sspai",
        source: "/topics",
        target: "/sspai/topics",
      },
      {
        title: "专题内文章更新",
        docs: "https://docs.rsshub.app/routes/new-media#shao-shu-pai-sspai",
        source: "/topic/:id",
        target: "/sspai/topic/:id",
      },
      {
        title: "标签订阅",
        docs: "https://docs.rsshub.app/routes/new-media#shao-shu-pai-sspai",
        source: "/tag/:keyword",
        target: "/sspai/tag/:keyword",
      },
    ],
    shortcuts: [
      {
        title: "Shortcuts Gallery",
        docs: "https://docs.rsshub.app/routes/new-media#shao-shu-pai-sspai",
        source: ["/*"],
        target: "/sspai/shortcuts",
      },
    ],
  },
  "startuplatte.com": {
    _name: "創新拿鐵",
    ".": [
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/new-media#chuang-xin-na-tie-fen-lei",
        source: ["/category/:category", "/"],
        target: "/startuplatte/:category?",
      },
    ],
  },
  "stbu.edu.cn": {
    _name: "四川工商学院",
    ".": [
      {
        title: "学院新闻",
        docs: "https://docs.rsshub.app/routes/university#si-chuan-gong-shang-xue-yuan",
        source: ["/html/news/xueyuan", "/"],
        target: "/stbu/xyxw",
      },
    ],
    jsjxy: [
      {
        title: "计算机学院通知公告",
        docs: "https://docs.rsshub.app/routes/university#si-chuan-gong-shang-xue-yuan",
        source: ["/news", "/"],
        target: "/stbu/jsjxy",
      },
    ],
  },
  "stcn.com": {
    _name: "证券时报网",
    ".": [
      {
        title: "栏目",
        docs: "https://docs.rsshub.app/routes/finance#zheng-quan-shi-bao-wang-lan-mu",
        source: ["/"],
        target: (params, url) =>
          `/stcn/${new URL(url).toString().match(/article\/list\/(.*)\.html/)[1]}`,
      },
    ],
  },
  "stdaily.com": {
    _name: "中国科技网",
    digitalpaper: [
      {
        title: "科技日报",
        docs: "https://docs.rsshub.app/routes/traditional-media#zhong-guo-ke-ji-wang",
      },
    ],
  },
  "stheadline.com": {
    _name: "星島日報",
    std: [
      {
        title: "即時",
        docs: "https://docs.rsshub.app/routes/traditional-media#xing-dao-ri-bao",
        source: ["/realtime/*category"],
        target: (params) => `/stdheadline/std/realtime/${params.category}`,
      },
    ],
  },
  "stockedge.com": {
    _name: "Stock Edge",
    web: [
      {
        title: "Daily Updates News",
        docs: "https://docs.rsshub.app/routes/en/finance#stock-edge",
        source: ["/daily-updates/news"],
        target: "/stockedge/daily-updates/news",
      },
    ],
  },
  "storm.mg": {
    _name: "風傳媒",
    ".": [
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/new-media#feng-chuan-mei",
        source: ["/:category/:id"],
        target: "/storm/:category?/:id?",
      },
    ],
  },
  "storyfm.cn": {
    _name: "故事FM",
    ".": [
      {
        title: "首页",
        docs: "https://docs.rsshub.app/routes/multimedia#ge-shi-fm",
        source: ["/"],
        target: "/storyfm/index",
      },
      {
        title: "播客",
        docs: "https://docs.rsshub.app/routes/multimedia#ge-shi-fm",
        source: ["/episodes-list", "/"],
        target: "/storyfm/episodes",
      },
    ],
  },
  "studygolang.com": {
    _name: "Go 语言中文网",
    ".": [
      {
        title: "板块",
        docs: "https://docs.rsshub.app/routes/programming#go-yu-yan-zhong-wen-wang",
        source: ["/go/:id", "/"],
        target: "/studygolang/go/:id?",
      },
      {
        title: "招聘",
        docs: "https://docs.rsshub.app/routes/programming#go-yu-yan-zhong-wen-wang",
        source: ["/go/jobs", "/"],
        target: "/studygolang/go/jobs",
      },
      {
        title: "周刊",
        docs: "https://docs.rsshub.app/routes/programming#go-yu-yan-zhong-wen-wang",
        source: ["/go/weekly", "/"],
        target: "/studygolang/go/weekly",
      },
    ],
  },
  "subhd.tv": {
    _name: "Sub HD",
    ".": [
      {
        title: "字幕",
        docs: "https://docs.rsshub.app/routes/multimedia#subhd-zi-mu",
        source: ["/sub/:category", "/"],
        target: "/subhd/sub/:category?",
      },
      {
        title: "字幕组",
        docs: "https://docs.rsshub.app/routes/multimedia#subhd-zi-mu-zu",
        source: ["/zu/:category", "/"],
        target: "/subhd/zu/:category?",
      },
    ],
  },
  "supchina.com": {
    _name: "SupChina",
    ".": [
      {
        title: "Feed",
        docs: "https://docs.rsshub.app/routes/new-media#supchina-feed",
        source: ["/feed", "/"],
        target: "/supchina",
      },
      {
        title: "Podcasts",
        docs: "https://docs.rsshub.app/routes/new-media#supchina-podcasts",
        source: ["/podcasts", "/"],
        target: "/supchina/podcasts",
      },
    ],
  },
  "surfshark.com": {
    _name: "Surfshark",
    ".": [
      {
        title: "Blog",
        docs: "https://docs.rsshub.app/routes/blog#surfshark-blog",
        source: ["/blog/blog/:category*"],
        target: (params, url) => {
          url = new URL(url)
          const path = params.category ?? url.href.match(/\/blog\/(.*?)/)[1]

          return `/surfshark/blog${path ? `/${path}` : ""}`
        },
      },
      {
        title: "Blog - Cybersecurity",
        docs: "https://docs.rsshub.app/routes/blog#surfshark-blog",
        source: ["/blog/cybersecurity"],
        target: "/surfshark/blog/cybersecurity",
      },
      {
        title: "Blog - All things VPN",
        docs: "https://docs.rsshub.app/routes/blog#surfshark-blog",
        source: ["/blog/all-things-vpn"],
        target: "/surfshark/blog/all-things-vpn",
      },
      {
        title: "Blog - Internet censorship",
        docs: "https://docs.rsshub.app/routes/blog#surfshark-blog",
        source: ["/blog/internet-censorship"],
        target: "/surfshark/blog/internet-censorship",
      },
      {
        title: "Blog - Entertainment",
        docs: "https://docs.rsshub.app/routes/blog#surfshark-blog",
        source: ["/blog/entertainment"],
        target: "/surfshark/blog/entertainment",
      },
      {
        title: "Blog - News",
        docs: "https://docs.rsshub.app/routes/blog#surfshark-blog",
        source: ["/blog/news"],
        target: "/surfshark/blog/news",
      },
      {
        title: "Blog - Internet Security",
        docs: "https://docs.rsshub.app/routes/blog#surfshark-blog",
        source: [
          "/blog/cybersecurity/internet-security",
          "/blog/cybersecurity",
        ],
        target: "/surfshark/blog/cybersecurity/internet-security",
      },
      {
        title: "Blog - Mobile Security",
        docs: "https://docs.rsshub.app/routes/blog#surfshark-blog",
        source: ["/blog/cybersecurity/mobile-security", "/blog/cybersecurity"],
        target: "/surfshark/blog/cybersecurity/mobile-security",
      },
      {
        title: "Blog - Identity Protection",
        docs: "https://docs.rsshub.app/routes/blog#surfshark-blog",
        source: [
          "/blog/cybersecurity/identity-protection",
          "/blog/cybersecurity",
        ],
        target: "/surfshark/blog/cybersecurity/identity-protection",
      },
      {
        title: "Blog - Phishing",
        docs: "https://docs.rsshub.app/routes/blog#surfshark-blog",
        source: ["/blog/cybersecurity/phishing", "/blog/cybersecurity"],
        target: "/surfshark/blog/cybersecurity/phishing",
      },
      {
        title: "Blog - Must-knows",
        docs: "https://docs.rsshub.app/routes/blog#surfshark-blog",
        source: ["/blog/all-things-vpn/must-knows", "/blog/all-things-vpn"],
        target: "/surfshark/blog/all-things-vpn/must-knows",
      },
      {
        title: "Blog - Technology",
        docs: "https://docs.rsshub.app/routes/blog#surfshark-blog",
        source: ["/blog/all-things-vpn/technology", "/blog/all-things-vpn"],
        target: "/surfshark/blog/all-things-vpn/technology",
      },
      {
        title: "Blog - Tips & Advice",
        docs: "https://docs.rsshub.app/routes/blog#surfshark-blog",
        source: [
          "/blog/all-things-vpn/tips-and-advice",
          "/blog/all-things-vpn",
        ],
        target: "/surfshark/blog/all-things-vpn/tips-and-advice",
      },
    ],
  },
  "sustech.edu.cn": {
    _name: "南方科技大学",
    biddingoffice: [
      {
        title: "采购与招标管理部",
        docs: "https://docs.rsshub.app/routes/university#nan-fang-ke-ji-da-xue",
        source: ["/"],
        target: "/sustech/bidding",
      },
    ],
    gs: [
      {
        title: "研究生网通知公告",
        docs: "https://docs.rsshub.app/routes/university#nan-fang-ke-ji-da-xue",
        source: ["/"],
        target: "/sustech/yjs",
      },
    ],
    newshub: [
      {
        title: "新闻网（中文）",
        docs: "https://docs.rsshub.app/routes/university#nan-fang-ke-ji-da-xue",
        source: ["/news"],
        target: "/sustech/newshub-zh",
      },
    ],
  },
  "swissinfo.ch": {
    _name: "swissinfo",
    ".": [
      {
        title: "Category",
        docs: "https://docs.rsshub.app/routes/new-media#swissinfo-category",
        source: ["/:language/:category", "/"],
        target: "/swissinfo/:language?/:category?",
      },
    ],
  },
  "swjtu.edu.cn": {
    _name: "西南交通大学",
    ctt: [
      {
        title: "交通运输与物流学院 - 研究生通知",
        docs: "https://docs.rsshub.app/routes/university#xi-nan-jiao-tong-da-xue",
        source: ["/yethan/WebIndexAction", "/"],
        target: (_, url) =>
          new URL(url).searchParams.get("setAction") === "newsList" &&
          new URL(url).searchParams.get("bigTypeId") === "0E4BF4D36E232918"
            ? "/swjtu/jtys/yjs"
            : null,
      },
    ],
    jiuye: [
      {
        title: "就业招聘信息",
        docs: "https://docs.rsshub.app/routes/university#xi-nan-jiao-tong-da-xue",
        source: ["/career", "/"],
        target: "/swjtu/jyzpxx",
      },
    ],
    jwc: [
      {
        title: "教务处通知",
        docs: "https://docs.rsshub.app/routes/university#xi-nan-jiao-tong-da-xue",
        source: ["/vatuu/WebAction", "/"],
        target: "/swjtu/jwc",
      },
    ],
    xg: [
      {
        title: "扬华素质网",
        docs: "https://docs.rsshub.app/routes/university#xi-nan-jiao-tong-da-xue",
        source: [
          "/web/Home/PushNewsList",
          "/web/Home/NewsList",
          "/web/Home/ColourfulCollegeNewsList",
          "/web/Publicity/List",
          "/",
        ],
        target: "/swjtu/xg",
      },
    ],
  },
  "swpu.edu.cn": {
    _name: "西南石油大学",
    ".": [
      {
        title: "办公网",
        docs: "https://docs.rsshub.app/routes/university#xi-nan-shi-you-da-xue",
        source: ["/"],
        target: "",
      },
      {
        title: "教务处",
        docs: "https://docs.rsshub.app/routes/university#xi-nan-shi-you-da-xue",
        source: ["/"],
        target: "",
      },
      {
        title: "计算机科学学院",
        docs: "https://docs.rsshub.app/routes/university#xi-nan-shi-you-da-xue",
        source: ["/"],
        target: "",
      },
      {
        title: "电气信息学院",
        docs: "https://docs.rsshub.app/routes/university#xi-nan-shi-you-da-xue",
        source: ["/"],
        target: "",
      },
      {
        title: "信息学院",
        docs: "https://docs.rsshub.app/routes/university#xi-nan-shi-you-da-xue",
        source: ["/"],
        target: "",
      },
      {
        title: "财经学院",
        docs: "https://docs.rsshub.app/routes/university#xi-nan-shi-you-da-xue",
        source: ["/"],
        target: "",
      },
    ],
  },
  "syosetu.com": {
    _name: "syosetu",
    ncode: [
      {
        title: "章节更新",
        docs: "https://docs.rsshub.app/routes/reading#syosetu-zhang-jie-geng-xin",
        source: ["/:id"],
        target: "/syosetu/chapter/:id",
      },
    ],
    novel18: [
      {
        title: "章节更新",
        docs: "https://docs.rsshub.app/routes/reading#syosetu-zhang-jie-geng-xin",
        source: ["/:id"],
        target: "/syosetu/chapter/:id",
      },
    ],
  },
  "sysu.edu.cn": {
    _name: "中山大学",
    cse: [
      {
        title: "计算机学院（软件学院）",
        docs: "https://docs.rsshub.app/routes/universities#zhong-shan-da-xue-ji-suan-ji-xue-yuan",
        source: ["/"],
        target: "/sysu/cse",
      },
    ],
    ygafz: [
      {
        title: "粤港澳发展研究院",
        docs: "https://docs.rsshub.app/routes/universities#zhong-shan-da-xue",
        source: ["/:type?"],
        target: "/sysu/ygafz/:type?",
      },
    ],
  },
  "szse.cn": {
    _name: "深圳证券交易所",
    ".": [
      {
        title: "上市公告 - 可转换债券",
        docs: "https://docs.rsshub.app/routes/finance#shen-zhen-zheng-quan-jiao-yi-suo-shang-shi-gong-gao-ke-zhu-huan-zheng-zhi-quan",
        source: ["/disclosure/notice/company/index.html", "/"],
        target: "/szse/notice",
      },
      {
        title: "问询函件",
        docs: "https://docs.rsshub.app/routes/finance#shen-zhen-zheng-quan-jiao-yi-suo-wen-xun-huan-jian",
        source: ["/disclosure/supervision/inquire/index.html", "/"],
        target: "/szse/inquire",
      },
      {
        title: "最新规则",
        docs: "https://docs.rsshub.app/routes/finance#shen-zhen-zheng-quan-jiao-yi-suo-zui-xin-gui-ze",
        source: ["/lawrules/rule/new", "/"],
        target: "/szse/rule",
      },
    ],
    listing: [
      {
        title: "创业板项目动态",
        docs: "https://docs.rsshub.app/routes/finance#shen-zhen-zheng-quan-jiao-yi-suo-chuang-ye-ban-xiang-mu-dong-tai",
        source: [
          "/projectdynamic/1/index.html",
          "/projectdynamic/2/index.html",
          "/projectdynamic/3/index.html",
          "/",
        ],
        target: "/szse/projectdynamic/:type?/:stage?/:status?",
      },
    ],
  },
  "szu.edu.cn": {
    _name: "深圳大学",
    yz: [
      {
        title: "硕士招生 - 研究生招生网",
        docs: "https://docs.rsshub.app/routes/university#shen-zhen-da-xue",
        source: ["/sszs/gg.htm", "/"],
        target: "/szu/yz/1",
      },
      {
        title: "博士招生 - 研究生招生网",
        docs: "https://docs.rsshub.app/routes/university#shen-zhen-da-xue",
        source: ["/sszs/bszs/gg.htm", "/"],
        target: "/szu/yz/2",
      },
    ],
  },
  "tableau.com": {
    _name: "Tableau",
    public: [
      {
        title: "Viz of the day",
        docs: "https://docs.rsshub.app/routes/study#tableau",
      },
    ],
  },
  "taiwannews.com.tw": {
    _name: "台灣英文新聞",
    ".": [
      {
        title: "最新熱門消息",
        docs: "https://docs.rsshub.app/routes/traditional-media#tai-wan-ying-wen-xin-wen",
        source: "/:lang/index",
        target: "/taiwannews/hot/:lang",
      },
    ],
  },
  "tangshufang.com": {
    _name: "唐书房",
    ".": [
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/new-media#tang-shu-fang-fen-lei",
        source: ["/:category", "/"],
        target: "/tangshufang/:category?",
      },
    ],
  },
  "taobao.com": {
    _name: "淘宝",
    izhongchou: [
      {
        title: "淘宝众筹全部",
        docs: "https://docs.rsshub.app/routes/shopping#tao-bao-zhong-chou-zhong-chou-xiang-mu",
        source: ["/list.htm"],
        target: (params, url) => {
          if (new URLSearchParams(new URL(url).search).get("type") === "") {
            return "/taobao/zhongchou/all"
          }
        },
      },
      {
        title: "淘宝众筹科技",
        docs: "https://docs.rsshub.app/routes/shopping#tao-bao-zhong-chou-zhong-chou-xiang-mu",
        source: ["/list.htm"],
        target: (params, url) => {
          if (
            new URLSearchParams(new URL(url).search).get("type") === "121288001"
          ) {
            return "/taobao/zhongchou/tech"
          }
        },
      },
      {
        title: "淘宝众筹食品",
        docs: "https://docs.rsshub.app/routes/shopping#tao-bao-zhong-chou-zhong-chou-xiang-mu",
        source: ["/list.htm"],
        target: (params, url) => {
          if (
            new URLSearchParams(new URL(url).search).get("type") ===
            "123330001,125672021"
          ) {
            return "/taobao/zhongchou/agriculture"
          }
        },
      },
      {
        title: "淘宝众筹动漫",
        docs: "https://docs.rsshub.app/routes/shopping#tao-bao-zhong-chou-zhong-chou-xiang-mu",
        source: ["/list.htm"],
        target: (params, url) => {
          if (
            new URLSearchParams(new URL(url).search).get("type") === "122018001"
          ) {
            return "/taobao/zhongchou/acg"
          }
        },
      },
      {
        title: "淘宝众筹设计",
        docs: "https://docs.rsshub.app/routes/shopping#tao-bao-zhong-chou-zhong-chou-xiang-mu",
        source: ["/list.htm"],
        target: (params, url) => {
          if (
            new URLSearchParams(new URL(url).search).get("type") ===
            "121292001,126176002,126202001"
          ) {
            return "/taobao/zhongchou/design"
          }
        },
      },
      {
        title: "淘宝众筹公益",
        docs: "https://docs.rsshub.app/routes/shopping#tao-bao-zhong-chou-zhong-chou-xiang-mu",
        source: ["/list.htm"],
        target: (params, url) => {
          if (
            new URLSearchParams(new URL(url).search).get("type") === "121280001"
          ) {
            return "/taobao/zhongchou/love"
          }
        },
      },
      {
        title: "淘宝众筹娱乐",
        docs: "https://docs.rsshub.app/routes/shopping#tao-bao-zhong-chou-zhong-chou-xiang-mu",
        source: ["/list.htm"],
        target: (params, url) => {
          if (
            new URLSearchParams(new URL(url).search).get("type") === "121284001"
          ) {
            return "/taobao/zhongchou/tele"
          }
        },
      },
      {
        title: "淘宝众筹影音",
        docs: "https://docs.rsshub.app/routes/shopping#tao-bao-zhong-chou-zhong-chou-xiang-mu",
        source: ["/list.htm"],
        target: (params, url) => {
          if (
            new URLSearchParams(new URL(url).search).get("type") === "121278001"
          ) {
            return "/taobao/zhongchou/music"
          }
        },
      },
      {
        title: "淘宝众筹书籍",
        docs: "https://docs.rsshub.app/routes/shopping#tao-bao-zhong-chou-zhong-chou-xiang-mu",
        source: ["/list.htm"],
        target: (params, url) => {
          if (
            new URLSearchParams(new URL(url).search).get("type") === "121274002"
          ) {
            return "/taobao/zhongchou/book"
          }
        },
      },
      {
        title: "淘宝众筹游戏",
        docs: "https://docs.rsshub.app/routes/shopping#tao-bao-zhong-chou-zhong-chou-xiang-mu",
        source: ["/list.htm"],
        target: (params, url) => {
          if (
            new URLSearchParams(new URL(url).search).get("type") === "122020001"
          ) {
            return "/taobao/zhongchou/game"
          }
        },
      },
      {
        title: "淘宝众筹其他",
        docs: "https://docs.rsshub.app/routes/shopping#tao-bao-zhong-chou-zhong-chou-xiang-mu",
        source: ["/list.htm"],
        target: (params, url) => {
          if (
            new URLSearchParams(new URL(url).search).get("type") ===
            "125706031,125888001,125886001,123332001"
          ) {
            return "/taobao/zhongchou/other"
          }
        },
      },
    ],
  },
  "taoguba.com.cn": {
    _name: "淘股吧",
    ".": [
      {
        title: "淘股论坛",
        docs: "https://docs.rsshub.app/routes/finance#tao-gu-ba-tao-gu-lun-tan",
        source: ["/:category", "/"],
        target: "/taoguba/:category",
      },
      {
        title: "用户博客",
        docs: "https://docs.rsshub.app/routes/finance#tao-gu-ba-yong-hu-bo-ke",
        source: ["/blog/:id", "/"],
        target: "/taoguba/blog/:id",
      },
    ],
  },
  "taptap.com": {
    _name: "TapTap",
    ".": [
      {
        title: "游戏论坛",
        docs: "https://docs.rsshub.app/routes/game#taptap",
        source: ["/app/:id/topic", "/app/:id"],
        target: "/taptap/topic/:id",
      },
      {
        title: "游戏更新",
        docs: "https://docs.rsshub.app/routes/game#taptap",
        source: ["/app/:id"],
        target: "/taptap/changelog/:id",
      },
      {
        title: "游戏评价",
        docs: "https://docs.rsshub.app/routes/game#taptap",
        source: ["/app/:id/review", "/app/:id"],
        target: "/taptap/review/:id",
      },
    ],
  },
  "taptap.io": {
    _name: "TapTap International",
    ".": [
      {
        title: "Changelog",
        docs: "https://docs.rsshub.app/routes/game#taptap",
        source: ["/app/:id"],
        target: "/taptap/intl/changelog/:id",
      },
      {
        title: "Ratings & Reviews",
        docs: "https://docs.rsshub.app/routes/game#taptap",
        source: ["/app/:id/review", "/app/:id"],
        target: "/taptap/intl/review/:id",
      },
    ],
  },
  "techcrunch.com": {
    _name: "TechCrunch",
    ".": [
      {
        title: "新闻",
        docs: "https://docs.rsshub.app/routes/new-media#techcrunch",
        source: "/",
        target: "/techcrunch/news",
      },
    ],
  },
  "techflowpost.com": {
    _name: "深潮TechFlow",
    ".": [
      {
        title: "首页",
        docs: "https://docs.rsshub.app/routes/new-media#shen-chao-techflow-shou-ye",
        source: ["/"],
        target: "/techflowpost",
      },
      {
        title: "快讯",
        docs: "https://docs.rsshub.app/routes/new-media#shen-chao-techflow-kuai-xun",
        source: ["/express"],
        target: "/techflowpost/express",
      },
    ],
  },
  "techpowerup.com": {
    _name: "TechPowerUp",
    ".": [
      {
        title: "Latest Content",
        docs: "https://docs.rsshub.app/routes/en/new-media#techpowerup",
        source: ["/"],
        target: "/techpowerup",
      },
      {
        title: "Reviews",
        docs: "https://docs.rsshub.app/routes/en/new-media#techpowerup",
        source: ["/review/search", "/review"],
        target: (_, url) =>
          `/techpowerup/review${new URL(url).searchParams.has("q") ? `/${new URL(url).searchParams.get("q")}` : ""}`,
      },
    ],
  },
  "telecompaper.com": {
    _name: "Telecompaper",
    ".": [
      {
        title: "News",
        docs: "https://docs.rsshub.app/routes/journal#telecompaper",
      },
      {
        title: "Search",
        docs: "https://docs.rsshub.app/routes/journal#telecompaper",
      },
    ],
  },
  "t.me": {
    _name: "Telegram",
    ".": [
      {
        title: "频道",
        docs: "https://docs.rsshub.app/routes/social-media#telegram",
        source: "/:username",
        target: (params, url, document) => {
          if (document?.querySelector('a[href^="/s/"]')) {
            return "/telegram/channel/:username"
          }
        },
      },
      {
        title: "频道",
        docs: "https://docs.rsshub.app/routes/social-media#telegram",
        source: "/s/:username",
        target: "/telegram/channel/:username",
      },
    ],
  },
  "telegram.org": {
    _name: "Telegram",
    ".": [
      {
        title: "Telegram Blog",
        docs: "https://docs.rsshub.app/routes/social-media#telegram-telegram-blog",
        source: "/blog",
        target: "/telegram/blog",
      },
    ],
  },
  "tencent.com": {
    _name: "腾讯云",
    ".": [
      {
        title: "云+社区专栏",
        docs: "https://docs.rsshub.app/routes/programming#teng-xun-yun-yun-she-qu-zhuan-lan",
        source: ["/developer/column/:id", "/developer/column/:id/:tag", "/"],
        target: (params, url) =>
          `/tencent/cloud/column/${url.match(/column\/(\d+)/)[1]}${/\/tag-\d+/.test(url) ? `/${url.match(/\/tag-(\d+)/)[1]}` : ""}`,
      },
    ],
  },
  "tesla.cn": {
    _name: "特斯拉中国",
    ".": [
      {
        title: "价格",
        docs: "https://docs.rsshub.app/routes/shopping#te-si-la-zhong-guo-jia-ge",
        source: ["/model3/design", "/"],
        target: "/tesla/price",
      },
    ],
    cx: [
      {
        title: "权益中心",
        docs: "https://docs.rsshub.app/routes/shopping#te-si-la-zhong-guo-quan-yi-zhong-xin",
        source: ["/user-right/list/:category"],
        target: (params) => {
          const category = params.category

          return `/tesla/cx${category ? `/${category}` : ""}`
        },
      },
    ],
  },
  "tfc-taiwan.org.tw": {
    _name: "台灣事實查核中心",
    ".": [
      {
        title: "專題",
        docs: "https://docs.rsshub.app/routes/other#tai-wan-shi-shi-cha-he-zhong-xin",
        source: "/articles/category/:id+",
        target: "/tfc-taiwan/category/:id",
      },
      {
        title: "最新相關資訊",
        docs: "https://docs.rsshub.app/routes/other#tai-wan-shi-shi-cha-he-zhong-xin",
        source: ["/articles/info", "/"],
        target: "/tfc-taiwan/info",
      },
      {
        title: "最新查核報告",
        docs: "https://docs.rsshub.app/routes/other#tai-wan-shi-shi-cha-he-zhong-xin",
        source: ["/articles/report", "/"],
        target: "/tfc-taiwan/report",
      },
      {
        title: "重點專區",
        docs: "https://docs.rsshub.app/routes/other#tai-wan-shi-shi-cha-he-zhong-xin",
        source: "/topic/:id",
        target: "/tfc-taiwan/topic/:id",
      },
    ],
  },
  "theatlantic.com": {
    _name: "The Atlantic",
    www: [
      {
        title: "新闻",
        docs: "https://docs.rsshub.app/routes/traditional-media#the-atlantic",
        source: "/:category",
        target: "/theatlantic/:category",
      },
    ],
  },
  "thecatcity.com": {
    _name: "貓奴日常",
    ".": [
      {
        title: "貓物分享｜流行小物、貓咪用品",
        docs: "https://docs.rsshub.app/routes/new-media#mao-nu-ri-chang",
        source: ["/category/cute-item", "/"],
        target: "/thecatcity/1",
      },
      {
        title: "貓咪新聞｜貓界人氣熱話、貓電影",
        docs: "https://docs.rsshub.app/routes/new-media#mao-nu-ri-chang",
        source: ["/category/funny-news", "/"],
        target: "/thecatcity/2",
      },
      {
        title: "養貓大全｜貓咪飲食與醫療、行為心理、貓測驗與冷知識",
        docs: "https://docs.rsshub.app/routes/new-media#mao-nu-ri-chang",
        source: ["/category/knowledge", "/"],
        target: "/thecatcity/3",
      },
      {
        title: "貓奴景點｜貓咪咖啡廳與餐廳、貓奴旅行景點推薦",
        docs: "https://docs.rsshub.app/routes/new-media#mao-nu-ri-chang",
        source: ["/category/hot-spot", "/"],
        target: "/thecatcity/4",
      },
      {
        title: "新手養貓教學｜養貓準備與花費、日常照顧",
        docs: "https://docs.rsshub.app/routes/new-media#mao-nu-ri-chang",
        source: ["/category/raise-cats", "/"],
        target: "/thecatcity/5",
      },
      {
        title: "CatCity 貓奴日常 | 貓咪日常照顧、新手準備、貓用品、貓咪醫療",
        docs: "https://docs.rsshub.app/routes/new-media#mao-nu-ri-chang",
        source: ["/"],
        target: "/thecatcity",
      },
    ],
  },
  "thecover.cn": {
    _name: "封面新闻",
    ".": [
      {
        title: "频道",
        docs: "https://docs.rsshub.app/routes/new-media#the-cover",
        source: ["/:id", "/"],
        target: (params) =>
          `/thecover/channel/${params.id.replace("channel_", "")}`,
      },
    ],
  },
  "thehindu.com": {
    _name: "The Hindu",
    ".": [
      {
        title: "Topic",
        docs: "https://docs.rsshub.app/routes/en/traditional-media#the-hindu",
        source: ["/topic/:topic"],
        target: "/thehindu/topic/:topic",
      },
    ],
  },
  "theinitium.com": {
    _name: "端传媒",
    ".": [
      {
        title: "专题・栏目",
        docs: "https://docs.rsshub.app/routes/new-media#duan-chuan-mei",
        source: "/channel/:type",
        target: "/theinitium/channel/:type",
      },
      {
        title: "话题・标签",
        docs: "https://docs.rsshub.app/routes/new-media#duan-chuan-mei",
        source: "/tags/:type",
        target: "/theinitions/tags/:type",
      },
      {
        title: "作者",
        docs: "https://docs.rsshub.app/routes/new-media#duan-chuan-mei",
        source: "/author/:type",
        target: "/theinitium/author/:type",
      },
    ],
  },
  "themoviedb.org": {
    _name: "The Movie Database",
    ".": [
      {
        title: "Collection",
        docs: "https://docs.rsshub.app/routes/multimedia#the-movie-database",
        source: ["/collection/:name"],
        target: (params) =>
          `/themoviedb/collection/${params.name.split("-")[0]}`,
      },
      {
        title: "Popular Movies",
        docs: "https://docs.rsshub.app/routes/multimedia#the-movie-database",
        source: ["/movie"],
        target: "/themoviedb/trending/movie/week",
      },
      {
        title: "Popular TV Shows",
        docs: "https://docs.rsshub.app/routes/multimedia#the-movie-database",
        source: ["/tv"],
        target: "/themoviedb/trending/tv/week",
      },
      {
        title: "TV Show Seasons",
        docs: "https://docs.rsshub.app/routes/multimedia#the-movie-database",
        source: ["/tv/:id/seasons", "/tv/:id"],
        target: (params) => `/themoviedb/tv/${params.id.split("-")[0]}/seasons`,
      },
      {
        title: "TV Show Episodes",
        docs: "https://docs.rsshub.app/routes/multimedia#the-movie-database",
        source: ["/tv/:id/season/:seasonNumber"],
        target: (params) =>
          `/themoviedb/tv/${params.id.split("-")[0]}/seasons/${params.seasonNumber}/episodes`,
      },
      {
        title: "TV Shows Airing Today",
        docs: "https://docs.rsshub.app/routes/multimedia#the-movie-database",
        source: ["/tv/airing-today"],
        target: "/themoviedb/tv/airing-today",
      },
      {
        title: "Currently Airing TV Shows",
        docs: "https://docs.rsshub.app/routes/multimedia#the-movie-database",
        source: ["/tv/on-the-air"],
        target: "/themoviedb/tv/on-the-air",
      },
      {
        title: "Top Rated TV Shows",
        docs: "https://docs.rsshub.app/routes/multimedia#the-movie-database",
        source: ["/tv/top-rated"],
        target: "/themoviedb/tv/top-rated",
      },
      {
        title: "Now Playing Movies",
        docs: "https://docs.rsshub.app/routes/multimedia#the-movie-database",
        source: ["/movie/now-playing"],
        target: "/themoviedb/movie/now-playing",
      },
      {
        title: "Upcoming Movies",
        docs: "https://docs.rsshub.app/routes/multimedia#the-movie-database",
        source: ["/movie/upcoming"],
        target: "/themoviedb/movie/upcoming",
      },
      {
        title: "Top Rated Movies",
        docs: "https://docs.rsshub.app/routes/multimedia#the-movie-database",
        source: ["/movie/top-rated"],
        target: "/themoviedb/movie/top-rated",
      },
    ],
  },
  "thenewslens.com": {
    _name: "The News Lens 關鍵評論",
    ".": [
      {
        title: "最新",
        docs: "https://docs.rsshub.app/routes/new-media#the-news-lens-guan-jian-ping-lun",
        source: ["/latest-article/:sort?", "/"],
        target: "/thenewslens/latest-article/:sort?",
      },
      {
        title: "新闻",
        docs: "https://docs.rsshub.app/routes/new-media#the-news-lens-guan-jian-ping-lun",
        source: ["/news/:sort?", "/"],
        target: "/thenewslens/news/:sort?",
      },
      {
        title: "作者",
        docs: "https://docs.rsshub.app/routes/new-media#the-news-lens-guan-jian-ping-lun",
        source: ["/author/:id/:sort?", "/"],
        target: "/thenewslens/author/:id/:sort?",
      },
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/new-media#the-news-lens-guan-jian-ping-lun",
        source: ["/category/:id/:sort?", "/"],
        target: "/thenewslens/category/:id/:sort?",
      },
      {
        title: "标签",
        docs: "https://docs.rsshub.app/routes/new-media#the-news-lens-guan-jian-ping-lun",
        source: ["/tag/:id/:sort?", "/"],
        target: "/thenewslens/tag/:id/:sort?",
      },
      {
        title: "频道",
        docs: "https://docs.rsshub.app/routes/new-media#the-news-lens-guan-jian-ping-lun",
        source: ["/channel/:id/:sort?", "/"],
        target: "/thenewslens/channel/:id/:sort?",
      },
      {
        title: "评论",
        docs: "https://docs.rsshub.app/routes/new-media#the-news-lens-guan-jian-ping-lun",
        source: ["/review/:sort?", "/"],
        target: "/thenewslens/review/:sort?",
      },
      {
        title: "影音",
        docs: "https://docs.rsshub.app/routes/new-media#the-news-lens-guan-jian-ping-lun",
        source: ["/videos/Projects/:sort?", "/"],
        target: "/thenewslens/videos/Projects/:sort?",
      },
    ],
  },
  "thepaper.cn": {
    _name: "澎湃新闻",
    ".": [
      {
        title: "首页头条",
        docs: "https://docs.rsshub.app/routes/traditional-media#peng-pai-xin-wen-shou-ye-tou-tiao",
        source: ["/"],
        target: "/thepaper/featured",
      },
      {
        title: "侧边栏",
        docs: "https://docs.rsshub.app/routes/traditional-media#peng-pai-xin-wen-ce-bian-lan",
        source: ["/"],
        target: "/thepaper/sidebar",
      },
      {
        title: "频道",
        docs: "https://docs.rsshub.app/routes/traditional-media#peng-pai-xin-wen-pin-dao",
        source: ["/"],
        target: (params, url) =>
          `/thepaper/channel/${url.match(/channel_(\d+)/)?.[1]}`,
      },
      {
        title: "栏目",
        docs: "https://docs.rsshub.app/routes/traditional-media#peng-pai-xin-wen-lie-biao",
        source: ["/"],
        target: (params, url) =>
          `/thepaper/list/${url.search(/list_(\d+)/)?.[1]}`,
      },
      {
        title: "澎湃美数组作品集",
        docs: "https://docs.rsshub.app/routes/traditional-media#peng-pai-xin-wen-peng-pai-mei-shu-zuo-pin-ji",
        source: ["/"],
        target: "/thepaper/839studio/:id",
      },
    ],
  },
  "factpaper.cn": {
    _name: "澎湃新闻",
    ".": [
      {
        title: "明查",
        docs: "https://docs.rsshub.app/routes/traditional-media#peng-pai-xin-wen-ming-cha",
        source: ["/"],
        target: "/thepaper/factpaper/:status",
      },
    ],
  },
  "theverge.com": {
    _name: "The Verge",
    ".": [
      {
        title: "The Verge",
        docs: "https://docs.rsshub.app/routes/new-media#the-verge",
        source: ["/:hub", "/"],
        target: "/theverge/:hub?",
      },
    ],
  },
  "thoughtco.com": {
    _name: "ThoughtCo",
    ".": [
      {
        title: "Category",
        docs: "https://docs.rsshub.app/routes/new-media#thoughtco-category",
        source: ["/:category"],
        target: (params) => {
          const category = params.category

          return `/thoughtco${category ? `/${category}` : ""}`
        },
      },
      {
        title: "Science, Tech, Math - Science",
        docs: "https://docs.rsshub.app/routes/new-media#thoughtco-category-science-tech-math",
        source: ["/science-4132464"],
        target: "/thoughtco/science-4132464",
      },
      {
        title: "Science, Tech, Math - Math",
        docs: "https://docs.rsshub.app/routes/new-media#thoughtco-category-science-tech-math",
        source: ["/math-4133545"],
        target: "/thoughtco/math-4133545",
      },
      {
        title: "Science, Tech, Math - Social Sciences",
        docs: "https://docs.rsshub.app/routes/new-media#thoughtco-category-science-tech-math",
        source: ["/social-sciences-4133522"],
        target: "/thoughtco/social-sciences-4133522",
      },
      {
        title: "Science, Tech, Math - Computer Science",
        docs: "https://docs.rsshub.app/routes/new-media#thoughtco-category-science-tech-math",
        source: ["/computer-science-4133486"],
        target: "/thoughtco/computer-science-4133486",
      },
      {
        title: "Science, Tech, Math - Animals & Nature",
        docs: "https://docs.rsshub.app/routes/new-media#thoughtco-category-science-tech-math",
        source: ["/animals-and-nature-4133421"],
        target: "/thoughtco/animals-and-nature-4133421",
      },
      {
        title: "Humanities - History & Culture",
        docs: "https://docs.rsshub.app/routes/new-media#thoughtco-category-humanities",
        source: ["/history-and-culture-4133356"],
        target: "/thoughtco/history-and-culture-4133356",
      },
      {
        title: "Humanities - Visual Arts",
        docs: "https://docs.rsshub.app/routes/new-media#thoughtco-category-humanities",
        source: ["/visual-arts-4132957"],
        target: "/thoughtco/visual-arts-4132957",
      },
      {
        title: "Humanities - Literature",
        docs: "https://docs.rsshub.app/routes/new-media#thoughtco-category-humanities",
        source: ["/literature-4133251"],
        target: "/thoughtco/literature-4133251",
      },
      {
        title: "Humanities - English",
        docs: "https://docs.rsshub.app/routes/new-media#thoughtco-category-humanities",
        source: ["/english-4688281"],
        target: "/thoughtco/english-4688281",
      },
      {
        title: "Humanities - Geography",
        docs: "https://docs.rsshub.app/routes/new-media#thoughtco-category-humanities",
        source: ["/geography-4133035"],
        target: "/thoughtco/geography-4133035",
      },
      {
        title: "Humanities - Philosophy",
        docs: "https://docs.rsshub.app/routes/new-media#thoughtco-category-humanities",
        source: ["/philosophy-4133025"],
        target: "/thoughtco/philosophy-4133025",
      },
      {
        title: "Humanities - Issues",
        docs: "https://docs.rsshub.app/routes/new-media#thoughtco-category-humanities",
        source: ["/issues-4133022"],
        target: "/thoughtco/issues-4133022",
      },
      {
        title: "Languages - English as a Second Language",
        docs: "https://docs.rsshub.app/routes/new-media#thoughtco-category-languages",
        source: ["/esl-4133095"],
        target: "/thoughtco/esl-4133095",
      },
      {
        title: "Languages - Spanish",
        docs: "https://docs.rsshub.app/routes/new-media#thoughtco-category-languages",
        source: ["/spanish-4133085"],
        target: "/thoughtco/spanish-4133085",
      },
      {
        title: "Languages - French",
        docs: "https://docs.rsshub.app/routes/new-media#thoughtco-category-languages",
        source: ["/french-4133079"],
        target: "/thoughtco/french-4133079",
      },
      {
        title: "Languages - German",
        docs: "https://docs.rsshub.app/routes/new-media#thoughtco-category-languages",
        source: ["/german-4133073"],
        target: "/thoughtco/german-4133073",
      },
      {
        title: "Languages - Italian",
        docs: "https://docs.rsshub.app/routes/new-media#thoughtco-category-languages",
        source: ["/italian-4133069"],
        target: "/thoughtco/italian-4133069",
      },
      {
        title: "Languages - Japanese",
        docs: "https://docs.rsshub.app/routes/new-media#thoughtco-category-languages",
        source: ["/japanese-4133062"],
        target: "/thoughtco/japanese-4133062",
      },
      {
        title: "Languages - Mandarin",
        docs: "https://docs.rsshub.app/routes/new-media#thoughtco-category-languages",
        source: ["/mandarin-4133057"],
        target: "/thoughtco/mandarin-4133057",
      },
      {
        title: "Languages - Russian",
        docs: "https://docs.rsshub.app/routes/new-media#thoughtco-category-languages",
        source: ["/russian-4175265"],
        target: "/thoughtco/russian-4175265",
      },
      {
        title: "Resources - For Students & Parents",
        docs: "https://docs.rsshub.app/routes/new-media#thoughtco-category-resources",
        source: ["/for-students-parents-4132588"],
        target: "/thoughtco/for-students-parents-4132588",
      },
      {
        title: "Resources - For Educators",
        docs: "https://docs.rsshub.app/routes/new-media#thoughtco-category-resources",
        source: ["/for-educators-4132509"],
        target: "/thoughtco/for-educators-4132509",
      },
      {
        title: "Resources - For Adult Learners",
        docs: "https://docs.rsshub.app/routes/new-media#thoughtco-category-resources",
        source: ["/for-adult-learners-4132469"],
        target: "/thoughtco/for-adult-learners-4132469",
      },
    ],
  },
  "threads.net": {
    _name: "Threads",
    ".": [
      {
        title: "User timeline",
        docs: "https://docs.rsshub.app/routes/en/social-media#threads",
        source: ["/:user"],
        target: (params) => `/threads/${params.user.substring(1)}`,
      },
    ],
  },
  "thwiki.cc": {
    _name: "THBWiki",
    ".": [
      {
        title: "日历",
        docs: "https://docs.rsshub.app/routes/anime#thbwiki",
        source: ["/", "/日程表"],
        target: "/thwiki/calendar",
      },
    ],
  },
  "tiktok.com": {
    _name: "TikTok",
    ".": [
      {
        title: "User",
        docs: "https://docs.rsshub.app/routes/en/social-media#tiktok",
        source: ["/:user"],
        target: "/tiktok/user/:user",
      },
    ],
  },
  "timednews.com": {
    _name: "时刻新闻",
    ".": [
      {
        title: "新闻",
        docs: "https://docs.rsshub.app/routes/new-media#shi-ke-xin-wen",
        source: ["/topic/:type/:id"],
        target: ({ type, id }) => {
          let name = ""
          if (type === "cat") {
            if (id === "1") {
              name = "all"
            }
          } else if (type === "subcat") {
            switch (id) {
              case "1":
                name = "currentAffairs"
                break
              case "2":
                name = "finance"
                break
              case "3":
                name = "technology"
                break
              case "4":
                name = "social"
                break
              case "5":
                name = "sports"
                break
              case "6":
                name = "international"
                break
              case "7":
                name = "usa"
                break
              case "8":
                name = "cn"
                break
              case "9":
                name = "europe"
                break
              case "14":
                name = "comments"
                break
              default:
                break
            }
          }

          return `/timednews/news/${name}`
        },
      },
    ],
  },
  "dl.gov.cn": {
    _name: "停水通知",
    swj: [
      {
        title: "大连市",
        docs: "https://docs.rsshub.app/routes/forecast#ting-shui-tong-zhi",
        source: ["/col/col4296/index.html", "/"],
        target: "/tingshuitz/dalian",
      },
    ],
  },
  "hzwgc.com": {
    _name: "停水通知",
    www: [
      {
        title: "杭州市",
        docs: "https://docs.rsshub.app/routes/forecast#ting-shui-tong-zhi",
        source: ["/public/stop_the_water", "/"],
        target: "/tingshuitz/hangzhou",
      },
    ],
  },
  "jlwater.com": {
    _name: "停水通知",
    ".": [
      {
        title: "南京市",
        docs: "https://docs.rsshub.app/routes/forecast#ting-shui-tong-zhi",
        source: ["/portal/10000013", "/"],
        target: "/tingshuitz/nanjing",
      },
    ],
  },
  "supplywater.com": {
    _name: "停水通知",
    www: [
      {
        title: "长沙市",
        docs: "https://docs.rsshub.app/routes/forecast#ting-shui-tong-zhi",
        source: ["/*"],
      },
    ],
  },
  "sz-water.com.cn": {
    _name: "停水通知",
    ".": [
      {
        title: "深圳市",
        docs: "https://docs.rsshub.app/routes/forecast#ting-shui-tong-zhi",
        source: ["/*"],
        target: "/tingshuitz/shenzhen",
      },
    ],
  },
  "whwater.com": {
    _name: "停水通知",
    ".": [
      {
        title: "武汉市",
        docs: "https://docs.rsshub.app/routes/forecast#ting-shui-tong-zhi",
        source: ["/IWater.shtml", "/"],
        target: "/tingshuitz/wuhan",
      },
    ],
  },
  "xswater.com": {
    _name: "停水通知",
    www: [
      {
        title: "萧山区",
        docs: "https://docs.rsshub.app/routes/forecast#ting-shui-tong-zhi",
        source: ["/gongshui/channels/227.html", "/"],
        target: "/tingshuitz/xiaoshan",
      },
    ],
  },
  "yjsswjt.com": {
    _name: "停水通知",
    ".": [
      {
        title: "阳江市",
        docs: "https://docs.rsshub.app/routes/forecast#ting-shui-tong-zhi",
        source: ["/zxdt_list.jsp", "/"],
        target: "/tingshuitz/yangjiang",
      },
    ],
  },
  "tingtingfm.com": {
    _name: "听听 FM",
    mobile: [
      {
        title: "节目",
        docs: "https://docs.rsshub.app/routes/multimedia#ting-ting-fm",
        source: ["/v3/program/:programId"],
        target: "/tingtingfm/program/:programId",
      },
    ],
  },
  "tisi.org": {
    _name: "腾讯研究院",
    ".": [
      {
        title: "最近更新",
        docs: "https://docs.rsshub.app/routes/new-media#teng-xun-yan-jiu-yuan",
        source: ["/"],
        target: (_params, url) => {
          if (new URL(url).searchParams.get("page_id") === "11151") {
            return "/tisi/latest"
          }
        },
      },
    ],
  },
  "tju.edu.cn": {
    _name: "天津大学",
    cic: [
      {
        title: "智能与计算学部 - 学部新闻",
        docs: "https://docs.rsshub.app/routes/university#tian-jin-da-xue-zhi-neng-yu-ji-suan-xue-bu",
        source: ["/xwzx/xyxw.htm", "/"],
        target: "/tju/cic/news",
      },
      {
        title: "智能与计算学部 - 通知公告",
        docs: "https://docs.rsshub.app/routes/university#tian-jin-da-xue-zhi-neng-yu-ji-suan-xue-bu",
        source: ["/xwzx/tzgg.htm", "/"],
        target: "/tju/cic/notification",
      },
      {
        title: "智能与计算学部 - 北洋智算论坛",
        docs: "https://docs.rsshub.app/routes/university#tian-jin-da-xue-zhi-neng-yu-ji-suan-xue-bu",
        source: ["/byzslt.htm", "/"],
        target: "/tju/cic/forum",
      },
    ],
    news: [
      {
        title: "新闻网 - 聚焦天大",
        docs: "https://docs.rsshub.app/routes/university#tian-jin-da-xue-xin-wen-wang",
        source: ["/jjtd.htm", "/"],
        target: "/tju/news/focus",
      },
      {
        title: "新闻网 - 综合新闻",
        docs: "https://docs.rsshub.app/routes/university#tian-jin-da-xue-xin-wen-wang",
        source: ["/zhxw.htm", "/"],
        target: "/tju/news/general",
      },
      {
        title: "新闻网 - 校内新闻",
        docs: "https://docs.rsshub.app/routes/university#tian-jin-da-xue-xin-wen-wang",
        source: ["/xnxw1/qb.htm", "/"],
        target: "/tju/news/internal",
      },
      {
        title: "新闻网 - 媒体报道",
        docs: "https://docs.rsshub.app/routes/university#tian-jin-da-xue-xin-wen-wang",
        source: ["/mtbd.htm", "/"],
        target: "/tju/news/media",
      },
      {
        title: "新闻网 - 图说天大",
        docs: "https://docs.rsshub.app/routes/university#tian-jin-da-xue-xin-wen-wang",
        source: ["/tstd.htm", "/"],
        target: "/tju/news/picture",
      },
    ],
    oaa: [
      {
        title: "教务处 - 新闻动态",
        docs: "https://docs.rsshub.app/routes/university#tian-jin-da-xue-jiao-wu-chu",
        source: ["/xwdt.htm", "/"],
        target: "/tju/oaa/news",
      },
      {
        title: "教务处 - 通知公告",
        docs: "https://docs.rsshub.app/routes/university#tian-jin-da-xue-jiao-wu-chu",
        source: ["/tzgg.htm", "/"],
        target: "/tju/oaa/notification",
      },
    ],
    yzb: [
      {
        title: "研究生招生网 - 校级公告",
        docs: "https://docs.rsshub.app/routes/university#tian-jin-da-xue-yan-jiu-sheng-zhao-sheng-wang",
        source: ["/xwzx/zxxx/", "/"],
        target: "/tju/yzb/notice",
      },
      {
        title: "研究生招生网 - 统考硕士",
        docs: "https://docs.rsshub.app/routes/university#tian-jin-da-xue-yan-jiu-sheng-zhao-sheng-wang",
        source: ["/xwzx/tkss_xw/", "/"],
        target: "/tju/yzb/master",
      },
      {
        title: "研究生招生网 - 统考博士",
        docs: "https://docs.rsshub.app/routes/university#tian-jin-da-xue-yan-jiu-sheng-zhao-sheng-wang",
        source: ["/xwzx/tkbs_xw/", "/"],
        target: "/tju/yzb/doctor",
      },
      {
        title: "研究生招生网 - 在职学位",
        docs: "https://docs.rsshub.app/routes/university#tian-jin-da-xue-yan-jiu-sheng-zhao-sheng-wang",
        source: ["/xwzx/zzxw/", "/"],
        target: "/tju/yzb/job",
      },
    ],
  },
  "tokeninsight.com": {
    _name: "TokenInsight",
    ".": [
      {
        title: "博客",
        docs: "https://docs.rsshub.app/routes/new-media#tokeninsight",
        source: ["/:lang/blogs"],
        target: "/tokeninsight/blog/:lang",
      },
      {
        title: "快讯",
        docs: "https://docs.rsshub.app/routes/new-media#tokeninsight",
        source: ["/:lang/latest"],
        target: "/tokeninsight/bulletin/:lang",
      },
      {
        title: "报告",
        docs: "https://docs.rsshub.app/routes/new-media#tokeninsight",
        source: ["/:lang/report"],
        target: "/tokeninsight/report/:lang",
      },
    ],
  },
  "tongji.edu.cn": {
    _name: "同济大学",
    sse: [
      {
        title: "软件学院通知",
        docs: "https://docs.rsshub.app/routes/university#tong-ji-da-xue",
        source: ["/xxzx/xytz/:type", "/xxzx/:type", "/"],
        target: (params) =>
          `/tongji/sse${params.type ? `/${params.type.replace(".htm", "")}` : ""}`,
      },
    ],
    yz: [
      {
        title: "研究生院通知公告",
        docs: "https://docs.rsshub.app/routes/university#tong-ji-da-xue",
        source: ["/zsxw/ggtz.htm", "/"],
        target: "/tongji/yjs",
      },
    ],
  },
  "toodaylab.com": {
    _name: "理想生活实验室",
    ".": [
      {
        title: "滚动",
        docs: "https://docs.rsshub.app/routes/new-media#li-xiang-sheng-huo-shi-yan-shi-gun-dong",
        source: ["/posts"],
        target: "/toodaylab/posts",
      },
      {
        title: "最热",
        docs: "https://docs.rsshub.app/routes/new-media#li-xiang-sheng-huo-shi-yan-shi-zui-re",
        source: ["/posts"],
        target: "/toodaylab/hot",
      },
      {
        title: "专栏",
        docs: "https://docs.rsshub.app/routes/new-media#li-xiang-sheng-huo-shi-yan-shi-zhuan-lan",
        source: ["/column/:id"],
        target: "/toodaylab/column/:id",
      },
      {
        title: "领域",
        docs: "https://docs.rsshub.app/routes/new-media#li-xiang-sheng-huo-shi-yan-shi-ling-yu",
        source: ["/field/:id"],
        target: "/toodaylab/field/:id",
      },
      {
        title: "话题",
        docs: "https://docs.rsshub.app/routes/new-media#li-xiang-sheng-huo-shi-yan-shi-hua-ti",
        source: ["/topic/:id"],
        target: "/toodaylab/topic/:id",
      },
    ],
  },
  "tophub.today": {
    _name: "今日热榜",
    ".": [
      {
        title: "榜单",
        docs: "https://docs.rsshub.app/routes/new-media#jin-ri-re-bang-bang-dan",
        source: ["/n/:id"],
        target: "/tophub/:id",
      },
    ],
  },
  "topys.cn": {
    _name: "TOPYS",
    ".": [
      {
        title: "关键字",
        docs: "https://docs.rsshub.app/routes/new-media#topys-guan-jian-zi",
        source: ["/search/:keyword", "/"],
        target: "/topys/:keyword?",
      },
    ],
  },
  "tradingview.com": {
    _name: "TradingView",
    ".": [
      {
        title: "Blog",
        docs: "https://docs.rsshub.app/routes/program-update#tradingview-blog",
        source: ["/blog/:language", "/"],
        target: "/tradingview/blog",
      },
    ],
  },
  "toutiao.com": {
    _name: "今日头条",
    so: [
      {
        title: "热搜关键词聚合追踪",
        docs: "https://docs.rsshub.app/routes/social-media#re-sou-ju-he",
        source: ["/search"],
        target: (params, url) =>
          `/trending/${new URL(url).searchParams.get("keyword")}`,
      },
    ],
  },
  "weibo.com": {
    _name: "微博",
    ".": [
      {
        title: "博主",
        docs: "https://docs.rsshub.app/routes/social-media#wei-bo",
        source: ["/u/:id", "/:id"],
        target: (params, url, document) => {
          let uid = document?.documentElement.innerHTML.match(
            /\$CONFIG\['oid']='(\d+)'/,
          )?.[1]
          if (!uid && !isNaN(params.id)) {
            uid = params.id
          }
          return uid ? `/weibo/user/${uid}` : ""
        },
      },
      {
        title: "关键词",
        docs: "https://docs.rsshub.app/routes/social-media#wei-bo",
      },
      {
        title: "超话",
        docs: "https://docs.rsshub.app/routes/social-media#wei-bo",
        source: "/p/:id/super_index",
        target: "/weibo/super_index/:id",
      },
    ],
    s: [
      {
        title: "热搜榜",
        docs: "https://docs.rsshub.app/routes/social-media#wei-bo",
        source: "/top/summary",
        target: "/weibo/search/hot/:fulltext?",
      },
    ],
  },
  "zhihu.com": {
    _name: "知乎",
    www: [
      {
        title: "收藏夹",
        docs: "https://docs.rsshub.app/routes/social-media#zhi-hu",
        source: "/collection/:id",
        target: "/zhihu/collection/:id",
      },
      {
        title: "用户动态",
        docs: "https://docs.rsshub.app/routes/social-media#zhi-hu",
        source: "/people/:id",
        target: "/zhihu/people/activities/:id",
      },
      {
        title: "用户回答",
        docs: "https://docs.rsshub.app/routes/social-media#zhi-hu",
        source: "/people/:id/answers",
        target: "/zhihu/people/answers/:id",
      },
      {
        title: "用户想法",
        docs: "https://docs.rsshub.app/routes/social-media#zhi-hu",
        source: "/people/:id/pins",
        target: "/zhihu/people/pins/:id",
      },
      {
        title: "用户文章",
        docs: "https://docs.rsshub.app/routes/social-media#zhi-hu",
        source: "/:usertype/:id/posts",
        target: "/zhihu/posts/:usertype/:id",
      },
      {
        title: "热榜",
        docs: "https://docs.rsshub.app/routes/social-media#zhi-hu",
        source: "/hot",
        target: "/zhihu/hotlist",
      },
      {
        title: "想法热榜",
        docs: "https://docs.rsshub.app/routes/social-media#zhi-hu",
        target: "/zhihu/pin/hotlist",
      },
      {
        title: "问题",
        docs: "https://docs.rsshub.app/routes/social-media#zhi-hu",
        source: "/question/:questionId",
        target: "/zhihu/question/:questionId",
      },
      {
        title: "话题",
        docs: "https://docs.rsshub.app/routes/social-media#zhi-hu",
        source: "/topic/:topicId/:type",
        target: "/zhihu/topic/:topicId",
      },
      {
        title: "新书",
        docs: "https://docs.rsshub.app/routes/social-media#zhi-hu",
        source: "/zhihu/bookstore/newest",
        target: "/zhihu/pin/hotlist",
      },
      {
        title: "想法-24 小时新闻汇总",
        docs: "https://docs.rsshub.app/routes/social-media#zhi-hu",
        source: "/pin/special/972884951192113152",
        target: "/zhihu/pin/daily",
      },
      {
        title: "书店-周刊",
        docs: "https://docs.rsshub.app/routes/social-media#zhi-hu",
        source: "/pub/weekly",
        target: "/zhihu/weekly",
      },
      {
        title: "专栏",
        docs: "https://docs.rsshub.app/routes/social-media#zhi-hu",
        source: "/column/:id",
        target: "/zhihu/zhuanlan/:id",
      },
      {
        title: "xhu - 收藏夹",
        docs: "https://docs.rsshub.app/routes/social-media#zhi-hu",
        source: "/collection/:id",
        target: "/zhihu/xhu/collection/:id",
      },
      {
        title: "xhu - 问题",
        docs: "https://docs.rsshub.app/routes/social-media#zhi-hu",
        source: "/question/:questionId",
        target: "/zhihu/xhu/question/:questionId",
      },
      {
        title: "xhu - 话题",
        docs: "https://docs.rsshub.app/routes/social-media#zhi-hu",
        source: "/topic/:topicId/:type",
        target: "/zhihu/xhu/topic/:topicId",
      },
      {
        title: "xhu - 专栏",
        docs: "https://docs.rsshub.app/routes/social-media#zhi-hu",
        source: "/column/:id",
        target: "/zhihu/xhu/zhuanlan/:id",
      },
    ],
    zhuanlan: [
      {
        title: "专栏",
        docs: "https://docs.rsshub.app/routes/social-media#zhi-hu",
        source: "/:id",
        target: "/zhihu/zhuanlan/:id",
      },
    ],
    daily: [
      {
        title: "日报",
        docs: "https://docs.rsshub.app/routes/social-media#zhi-hu",
        source: "/",
        target: "/zhihu/daily",
      },
      {
        title: "日报",
        docs: "https://docs.rsshub.app/routes/social-media#zhi-hu",
        source: "/*",
        target: "/zhihu/daily",
      },
    ],
  },
  "tribalfootball.com": {
    _name: "Tribal Football",
    ".": [
      {
        title: "Latest News",
        docs: "https://docs.rsshub.app/routes/new-media#tribal-football",
        source: ["/"],
        target: "/tribalfootball",
      },
    ],
  },
  "trow.cc": {
    _name: "The Ring of Wonder",
    ".": [
      {
        title: "首页更新",
        docs: "https://docs.rsshub.app/routes/bbs#the-ring-of-wonder",
        source: ["/"],
        target: "/portal",
      },
    ],
  },
  "tvb.com": {
    _name: "无线新闻",
    ".": [
      {
        title: "新闻",
        docs: "https://docs.rsshub.app/routes/traditional-media#wu-xian-xin-wen-xin-wen",
        source: ["/:language/:category", "/"],
        target: "/tvb/news/:category?/:language?",
      },
    ],
  },
  "twitch.tv": {
    _name: "Twitch",
    www: [
      {
        title: "Live",
        docs: "https://docs.rsshub.app/routes/live#twitch-live",
        source: "/:login",
        target: (params) => {
          if (
            params.login !== "directory" &&
            params.login !== "downloads" &&
            params.login !== "store" &&
            params.login !== "turbo" &&
            params.login !== "search" &&
            params.login !== "subscriptions" &&
            params.login !== "wallet"
          ) {
            return "/twitch/live/:login"
          }
        },
      },
      {
        title: "Channel Video",
        docs: "https://docs.rsshub.app/routes/live#twitch-channel-video",
        source: "/:login/videos",
        target: "/twitch/video/:login",
      },
      {
        title: "Stream Schedule",
        docs: "https://docs.rsshub.app/routes/live#twitch-stream-schedule",
        source: "/:login/schedule",
        target: "/twitch/schedule/:login",
      },
    ],
  },
  "twitter.com": {
    _name: "Twitter",
    ".": [
      {
        title: "用户时间线",
        docs: "https://docs.rsshub.app/routes/social-media#twitter",
        source: "/:id",
        target: (params) => {
          if (
            params.id !== "home" &&
            params.id !== "explore" &&
            params.id !== "notifications" &&
            params.id !== "messages" &&
            params.id !== "explore" &&
            params.id !== "search"
          ) {
            return "/twitter/user/:id"
          }
        },
      },
      {
        title: "用户媒体时间线",
        docs: "https://docs.rsshub.app/routes/social-media#twitter",
        source: "/:id/media",
        target: (params) => {
          if (
            ![
              "home",
              "explore",
              "notifications",
              "messages",
              "explore",
              "search",
            ].includes(params.id)
          ) {
            return "/twitter/media/:id"
          }
        },
      },
      {
        title: "用户关注时间线",
        docs: "https://docs.rsshub.app/routes/social-media#twitter",
        source: "/:id",
        target: (params) => {
          if (
            params.id !== "home" &&
            params.id !== "explore" &&
            params.id !== "notifications" &&
            params.id !== "messages" &&
            params.id !== "explore" &&
            params.id !== "search"
          ) {
            return "/twitter/followings/:id"
          }
        },
      },
      {
        title: "用户喜欢列表",
        docs: "https://docs.rsshub.app/routes/social-media#twitter",
        source: "/:id",
        target: (params) => {
          if (
            params.id !== "home" &&
            params.id !== "explore" &&
            params.id !== "notifications" &&
            params.id !== "messages" &&
            params.id !== "explore" &&
            params.id !== "search"
          ) {
            return "/twitter/likes/:id"
          }
        },
      },
      {
        title: "列表时间线",
        docs: "https://docs.rsshub.app/routes/social-media#twitter",
        source: "/:id/lists/:name",
        target: (params) => {
          if (
            params.id !== "home" &&
            params.id !== "explore" &&
            params.id !== "notifications" &&
            params.id !== "messages" &&
            params.id !== "explore" &&
            params.id !== "search"
          ) {
            return "/twitter/list/:id/:name"
          }
        },
      },
      {
        title: "关键词",
        docs: "https://docs.rsshub.app/routes/social-media#twitter",
        source: "/search",
        target: (params, url) =>
          `/twitter/keyword/${new URL(url).searchParams.get("q")}`,
      },
      {
        title: "推文收集",
        docs: "https://docs.rsshub.app/routes/social-media#twitter",
        source: "/:uid/timelines/:collectionId",
        target: (params) => {
          if (
            params.uid !== "home" &&
            params.uid !== "explore" &&
            params.uid !== "notifications" &&
            params.uid !== "messages" &&
            params.uid !== "explore" &&
            params.uid !== "search"
          ) {
            return "/twitter/collection/:uid/:collectionId"
          }
        },
      },
      {
        title: "推文详情",
        docs: "https://docs.rsshub.app/routes/social-media#twitter",
        source: "/:id/status/:status",
        target: (params) => {
          if (
            params.id !== "home" &&
            params.id !== "explore" &&
            params.id !== "notifications" &&
            params.id !== "messages" &&
            params.id !== "explore" &&
            params.id !== "search"
          ) {
            return "/twitter/tweet/:id/suatus/:status"
          }
        },
      },
    ],
  },
  "twreporter.org": {
    _name: "報導者",
    ".": [
      {
        title: "最新",
        docs: "https://docs.rsshub.app/routes/new-media#bao-dao-zhe",
        source: ["/"],
        target: "/twreporter/newest",
      },
      {
        title: "摄影",
        docs: "https://docs.rsshub.app/routes/new-media#bao-dao-zhe",
        source: ["/photography"],
        target: "/twreporter",
      },
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/new-media#bao-dao-zhe",
        source: ["/categories/:tid"],
        target: "/twreporter/category/:tid",
      },
    ],
  },
  "txrjy.com": {
    _name: "通信人家园",
    ".": [
      {
        title: "论坛 频道",
        docs: "https://docs.rsshub.app/routes/bbs#tong-xin-ren-jia-yuan",
        source: ["/c114-listnewtopic.php"],
        target: (params, url) => {
          const channel = new URL(url).searchParams.get("typeid")

          return `/txrjy/fornumtopic/${channel ? channel : ""}`
        },
      },
    ],
  },
  "tynu.edu.cn": {
    _name: "太原师范学院",
    ".": [
      {
        title: "通知公告",
        docs: "https://docs.rsshub.app/routes/university#tai-yuan-shi-fan-xue-yuan",
        source: ["/index/tzgg.htm", "/index.htm", "/"],
        target: "/tynu",
      },
    ],
  },
  "typora.io": {
    _name: "Typora",
    ".": [
      {
        title: "Dev Release Changelog",
        docs: "https://docs.rsshub.app/routes/program-update#typora",
        source: ["/releases/dev"],
        target: "/typora/changelog/dev",
      },
    ],
    support: [
      {
        title: "Changelog",
        docs: "https://docs.rsshub.app/routes/program-update#typora",
        source: ["/"],
        target: "/typora/changelog",
      },
    ],
  },
  "u3c3.com": {
    _name: "u3c3",
    ".": [
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/multimedia#u3c3-fen-lei",
        source: "/",
        target: (params, url) => {
          const searchParams = new URL(url).searchParams
          const type = searchParams.has("type") ? searchParams.get("type") : ""
          return `/u3c3/${type}`
        },
      },
      {
        title: "关键词搜索",
        docs: "https://docs.rsshub.app/routes/multimedia#u3c3-guan-jian-ci-sou-suo",
        source: "/",
        target: (params, url) => {
          const searchParams = new URL(url).searchParams
          if (searchParams.has("search")) {
            const keyword = searchParams.get("search")
            return `/u3c3/search/${keyword}`
          }
        },
      },
    ],
  },
  "u9a9.com": {
    _name: "U9A9",
    ".": [
      {
        title: "首页",
        docs: "https://docs.rsshub.app/routes/multimedia#u9a9",
        source: ["/"],
        target: "/u9a9",
      },
      {
        title: "搜索",
        docs: "https://docs.rsshub.app/routes/multimedia#u9a9",
        source: ["/"],
        target: (_, url) =>
          `/u9a9/search/${new URL(url).searchParams.get("search")}`,
      },
    ],
  },
  "uber.com": {
    _name: "Uber Blog",
    www: [
      {
        title: "Engineering",
        docs: "https://docs.rsshub.app/routes/blog#you-bu",
        source: ["/blog/pittsburgh/engineering"],
        target: "/uber/blog",
      },
    ],
  },
  "ucas.ac.cn": {
    _name: "中国科学院大学",
    ai: [
      {
        title: "人工智能学院",
        docs: "https://docs.rsshub.app/routes/university#zhong-guo-ke-xue-yuan-da-xue",
        source: ["/index.php/zh-cn/tzgg", "/"],
        target: "/ucas/ai",
      },
    ],
    zhaopin: [
      {
        title: "招聘信息",
        docs: "https://docs.rsshub.app/routes/university#zhong-guo-ke-xue-yuan-da-xue",
        source: ["/gjob/login.do", "/"],
        target: (_, url) => {
          const c = new URL(url).searchParams.get("c")
          let type = ""
          switch (c) {
            case "3":
              type = "jxkyrc"
              break
            case "4":
              type = "glzcrc"
              break
            case "5":
              type = "ktxmpy"
              break
            case "6":
              type = "bsh"
              break
            default:
              break
          }
          return `/ucas/job${type ? `/${type}` : ""}`
        },
      },
    ],
  },
  "journals.uchicago.edu": {
    _name: "The University of Chicago Press: Journals",
    ".": [
      {
        title: "Current Issue",
        docs: "https://docs.rsshub.app/routes/journal#the-university-of-chicago-press-journals",
        source: ["/toc/:journal/current", "/journal/:journal"],
        target: "/uchicago/journals/current/:journal",
      },
    ],
  },
  "udn.com": {
    _name: "聯合新聞網",
    ".": [
      {
        title: "即時新聞",
        docs: "https://docs.rsshub.app/routes/new-media#lian-he-xin-wen-wang-ji-shi-xin-wen",
        source: ["/news/breaknews/1/:id", "/"],
        target: "/udn/news/breakingnews/:id",
      },
    ],
    global: [
      {
        title: "轉角國際 - 首頁",
        docs: "https://docs.rsshub.app/routes/new-media#lian-he-xin-wen-wang-zhuan-jiao-guo-ji-shou-ye",
        source: ["/global_vision/index/:category", "/"],
        target: "/udn/global/:category?",
      },
      {
        title: "轉角國際 - 標籤",
        docs: "https://docs.rsshub.app/routes/new-media#lian-he-xin-wen-wang-zhuan-jiao-guo-ji-biao-qian",
        source: ["/search/tagging/1020/:tag", "/"],
        target: "/udn/global/tag/:tag?",
      },
    ],
  },
  "uestc.edu.cn": {
    _name: "电子科技大学",
    gr: [
      {
        title: "研究生院",
        docs: "https://docs.rsshub.app/routes/university#dian-zi-ke-ji-da-xue",
        source: ["/"],
        target: "/uestc/gr",
      },
    ],
    cqe: [
      {
        title: "大学生文化素质教育中心",
        docs: "https://docs.rsshub.app/routes/university#dian-zi-ke-ji-da-xue",
        source: ["/"],
        target: "/uestc/cqe",
      },
    ],
    jwc: [
      {
        title: "教务处",
        docs: "https://docs.rsshub.app/routes/university#dian-zi-ke-ji-da-xue",
        source: ["/"],
        target: "/uestc/jwc",
      },
    ],
    news: [
      {
        title: "新闻网",
        docs: "https://docs.rsshub.app/routes/university#dian-zi-ke-ji-da-xue",
        source: ["/"],
        target: "/uestc/news",
      },
    ],
    auto: [
      {
        title: "自动化学院",
        docs: "https://docs.rsshub.app/routes/university#dian-zi-ke-ji-da-xue",
        source: ["/"],
        target: "/uestc/auto",
      },
    ],
    scse: [
      {
        title: "计算机学院",
        docs: "https://docs.rsshub.app/routes/university#dian-zi-ke-ji-da-xue",
        source: ["/"],
        target: "/uestc/scse",
      },
    ],
    sice: [
      {
        title: "信通学院",
        docs: "https://docs.rsshub.app/routes/university#dian-zi-ke-ji-da-xue",
        source: ["/"],
        target: "/uestc/sice",
      },
    ],
    sise: [
      {
        title: "信软学院",
        docs: "https://docs.rsshub.app/routes/university#dian-zi-ke-ji-da-xue",
        source: ["/"],
        target: "/uestc/sise",
      },
    ],
  },
  "uibe.edu.cn": {
    _name: "对外经济贸易大学",
    hr: [
      {
        title: "人力资源处",
        docs: "https://docs.rsshub.app/routes/university#dui-wai-jing-ji-mao-yi-da-xue-ren-li-zi-yuan-chu",
        source: ["/:category/:type", "/:category", "/"],
        target: "/uibe/hr/:category?/:type?",
      },
    ],
  },
  "ulapia.com": {
    _name: "乌拉邦 ulapia",
    www: [
      {
        title: "今日晨报",
        docs: "https://docs.rsshub.app/routes/finance#wu-la-bang-pin-dao",
        source: ["/"],
        target: "/ulapia/reports/brokerage_news",
      },
      {
        title: "最新研报",
        docs: "https://docs.rsshub.app/routes/finance#wu-la-bang-zui-xin-yan-bao",
        source: ["/"],
        target: "/ulapia/research/latest",
      },
      {
        title: "个股研报",
        docs: "https://docs.rsshub.app/routes/finance#wu-la-bang-pin-dao",
        source: ["/reports/stock_research"],
        target: "/ulapia/reports/stock_research",
      },
      {
        title: "行业研报",
        docs: "https://docs.rsshub.app/routes/finance#wu-la-bang-pin-dao",
        source: ["/reports/industry_research"],
        target: "/ulapia/reports/industry_research",
      },
      {
        title: "策略研报",
        docs: "https://docs.rsshub.app/routes/finance#wu-la-bang-pin-dao",
        source: ["/reports/strategy_research"],
        target: "/ulapia/reports/strategy_research",
      },
      {
        title: "宏观研报",
        docs: "https://docs.rsshub.app/routes/finance#wu-la-bang-pin-dao",
        source: ["/reports/macro_research"],
        target: "/ulapia/reports/macro_research",
      },
      {
        title: "新股研报",
        docs: "https://docs.rsshub.app/routes/finance#wu-la-bang-pin-dao",
        source: ["/reports/ipo_research"],
        target: "/ulapia/reports/ipo_research",
      },
      {
        title: "券商晨报",
        docs: "https://docs.rsshub.app/routes/finance#wu-la-bang-pin-dao",
        source: ["/reports/brokerage_news"],
        target: "/ulapia/reports/brokerage_news",
      },
    ],
  },
  "uniqlo.com": {
    _name: "Uniqlo",
    www: [
      {
        title: "New Arrivals",
        docs: "https://docs.rsshub.app/routes/shopping#uniqlo",
        source: ["/sg", "/us", "/jp"],
      },
    ],
  },
  "unusualwhales.com": {
    _name: "Unusual Whales",
    ".": [
      {
        title: "News Flow",
        docs: "https://docs.rsshub.app/routes/en/finance#unusual-whales",
        source: ["/news", "/"],
        target: "/unusualwhales/news",
      },
    ],
  },
  "upc.edu.cn": {
    _name: "中国石油大学（华东）",
    computer: [
      {
        title: "计算机科学与技术学院学院新闻",
        docs: "https://docs.rsshub.app/routes/university#zhong-guo-shi-you-da-xue-hua-dong",
        source: ["/6277/list.htm", "/"],
        target: "/upc/jsj/news",
      },
      {
        title: "计算机科学与技术学院学术关注",
        docs: "https://docs.rsshub.app/routes/university#zhong-guo-shi-you-da-xue-hua-dong",
        source: ["/6278/list.htm", "/"],
        target: "/upc/jsj/scholar",
      },
      {
        title: "计算机科学与技术学院学工动态",
        docs: "https://docs.rsshub.app/routes/university#zhong-guo-shi-you-da-xue-hua-dong",
        source: ["/6279/list.htm", "/"],
        target: "/upc/jsj/states",
      },
      {
        title: "计算机科学与技术学院通知公告",
        docs: "https://docs.rsshub.app/routes/university#zhong-guo-shi-you-da-xue-hua-dong",
        source: ["/6280/list.htm", "/"],
        target: "/upc/jsj/notice",
      },
    ],
    news: [
      {
        title: "主页通知公告",
        docs: "https://docs.rsshub.app/routes/university#zhong-guo-shi-you-da-xue-hua-dong",
        source: ["/tzgg.htm", "/"],
        target: "/upc/main/notice",
      },
      {
        title: "主页学术动态",
        docs: "https://docs.rsshub.app/routes/university#zhong-guo-shi-you-da-xue-hua-dong",
        source: ["/xsdt.htm", "/"],
        target: "/upc/main/scholar",
      },
    ],
    "zs.gs": [
      {
        title: "研究生院通知公告",
        docs: "https://docs.rsshub.app/routes/university#zhong-guo-shi-you-da-xue-hua-dong",
        source: ["/sszs/list.htm", "/"],
        target: "/upc/yjs",
      },
    ],
  },
  "uptimerobot.com": {
    _name: "Uptime Robot",
    rss: [
      {
        title: "RSS",
        docs: "https://docs.rsshub.app/routes/forecast#uptime-robot",
        source: ["/:id"],
        target: "/uptimerobot/rss/:id",
      },
    ],
  },
  "uraaka-joshi.com": {
    _name: "裏垢女子まとめ",
    ".": [
      {
        title: "主页",
        docs: "https://docs.rsshub.app/routes/other#li-gou-nu-zi-まとめ",
        source: ["/"],
        target: "/uraaka-joshi",
      },
      {
        title: "用户",
        docs: "https://docs.rsshub.app/routes/other#li-gou-nu-zi-まとめ",
        source: ["/:id"],
        target: "/uraaka-joshi/:id",
      },
    ],
  },
  "urbandictionary.com": {
    _name: "Urban Dictionary",
    ".": [
      {
        title: "Random words",
        docs: "https://docs.rsshub.app/routes/en/other#urban-dictionary",
        source: ["/random.php", "/"],
        target: "/urbandictionary/random",
      },
    ],
  },
  "usenix.org": {
    _name: "USENIX",
    ".": [
      {
        title: "Security Symposia",
        docs: "https://docs.rsshub.app/routes/journal#usenix",
        source: ["/conferences/all", "/conferences", "/"],
        target: "/usenix/usenix-security-sympoium",
      },
    ],
  },
  "usepanda.com": {
    _name: "Panda",
    ".": [
      {
        title: "Feeds",
        docs: "https://docs.rsshub.app/routes/other#panda",
      },
    ],
  },
  "ustb.edu.cn": {
    _name: "北京科技大学",
    gs: [
      {
        title: "研究生院",
        docs: "https://docs.rsshub.app/routes/university#bei-jing-ke-ji-da-xue",
        source: "/:type",
        target: "/ustb/yjsy/news/:type",
      },
    ],
    tj: [
      {
        title: "天津学院",
        docs: "https://docs.rsshub.app/routes/university#bei-jing-ke-ji-da-xue",
        source: ["/*"],
        target: "/ustb/tj/news/all",
      },
    ],
    yzxc: [
      {
        title: "研究生招生信息网",
        docs: "https://docs.rsshub.app/routes/university#bei-jing-ke-ji-da-xue-yan-jiu-sheng-zhao-sheng-xin-xi-wang",
        source: "/",
        target: "/ustb/yzxc/tzgg",
      },
    ],
  },
  "ustc.edu.cn": {
    _name: "中国科学技术大学",
    ".": [
      {
        title: "官网通知公告",
        docs: "https://docs.rsshub.app/routes/university#zhong-guo-ke-xue-ji-shu-da-xue",
        source: "/",
        target: "/ustc/news",
      },
    ],
    "www.teach": [
      {
        title: "教务处通知新闻",
        docs: "https://docs.rsshub.app/routes/university#zhong-guo-ke-xue-ji-shu-da-xue",
        source: "/",
        target: "/ustc/jwc",
      },
    ],
    job: [
      {
        title: "就业信息网",
        docs: "https://docs.rsshub.app/routes/university#zhong-guo-ke-xue-ji-shu-da-xue",
        source: "/",
        target: "/ustc/job",
      },
    ],
    gradschool: [
      {
        title: "研究生院",
        docs: "https://docs.rsshub.app/routes/university#zhong-guo-ke-xue-ji-shu-da-xue",
        source: "/",
        target: "/ustc/gs",
      },
    ],
    sist: [
      {
        title: "信息科学技术学院",
        docs: "https://docs.rsshub.app/routes/university#zhong-guo-ke-xue-ji-shu-da-xue",
        source: "/",
        target: "/ustc/sist",
      },
    ],
    eeis: [
      {
        title: "电子工程与信息科学系",
        docs: "https://docs.rsshub.app/routes/university#zhong-guo-ke-xue-ji-shu-da-xue",
        source: "/",
        target: "/ustc/eeis",
      },
    ],
  },
  "usts.edu.cn": {
    _name: "苏州科技大学",
    jwch: [
      {
        title: "教务动态",
        docs: "https://docs.rsshub.app/routes/university#su-zhou-ke-ji-da-xue",
        source: ["/jwdt.htm"],
        target: "/wsts/jwch/jwdt",
      },
      {
        title: "公告在线",
        docs: "https://docs.rsshub.app/routes/university#su-zhou-ke-ji-da-xue",
        source: ["/ggzx.htm"],
        target: "/wsts/jwch/ggzx",
      },
      {
        title: "选课通知",
        docs: "https://docs.rsshub.app/routes/university#su-zhou-ke-ji-da-xue",
        source: ["/xktz.htm"],
        target: "/wsts/jwch/xktz",
      },
    ],
  },
  "utgd.net": {
    _name: "UNTAG",
    ".": [
      {
        title: "时间线",
        docs: "https://docs.rsshub.app/routes/new-media#untag-shi-jian-xian",
        source: ["/"],
        target: "/utgd/timeline",
      },
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/new-media#untag-fen-lei",
        source: ["/category/s/:category", "/"],
        target: "/utgd/:category",
      },
      {
        title: "专题",
        docs: "https://docs.rsshub.app/routes/new-media#untag-zhuan-ti",
        source: ["/topic", "/"],
        target: "/utgd/topic/:topic",
      },
    ],
  },
  "gixnetwork.org": {
    _name: "University of Washington",
    ".": [
      {
        title: "Global Innovation Exchange News",
        docs: "https://docs.rsshub.app/routes/university#university-of-washington",
        source: ["/news/:category"],
        target: "/uw/gix/news/:category",
      },
    ],
  },
  "v1tx.com": {
    _name: "v1tx",
    ".": [
      {
        title: "最新文章",
        docs: "https://docs.rsshub.app/routes/blog#v1tx",
        source: ["/"],
        target: "/v1tx",
      },
    ],
  },
  "v2ex.com": {
    _name: "V2EX",
    ".": [
      {
        title: "最热 / 最新主题",
        docs: "https://docs.rsshub.app/routes/v2ex",
        source: ["/"],
        target: (_, url) => {
          const { searchParams } = new URL(url)
          if (
            searchParams.get("tab") === "all" ||
            searchParams.get("tab") === "hot"
          ) {
            return `/v2ex/topics/${searchParams.get("tab")?.replace("all", "latest")}`
          }
        },
      },
      {
        title: "帖子",
        docs: "https://docs.rsshub.app/routes/v2ex",
        source: ["/t/:postid"],
        target: "/v2ex/post/:postid",
      },
      {
        title: "标签",
        docs: "https://docs.rsshub.app/routes/v2ex",
        source: ["/"],
        target: (_, url) => {
          const { searchParams } = new URL(url)
          if (
            searchParams.get("tab") &&
            searchParams.get("tab") !== "all" &&
            searchParams.get("tab") !== "hot"
          ) {
            return `/v2ex/tab/${searchParams.get("tab")}`
          }
        },
      },
    ],
  },
  "v2rayshare.com": {
    _name: "V2rayShare",
    ".": [
      {
        title: "免费节点",
        docs: "https://docs.rsshub.app/routes/other#v2rayshare",
        source: ["/"],
        target: "/v2rayshare",
      },
    ],
  },
  "vcb-s.com": {
    _name: "VCB-Studio",
    ".": [
      {
        title: "最新文章",
        docs: "https://docs.rsshub.app/routes/anime#vcb-studio",
        source: ["/"],
        target: "/vcb-s",
      },
      {
        title: "分类文章",
        docs: "https://docs.rsshub.app/routes/anime#vcb-studio",
        source: ["/archives/category/:cate"],
        target: "/vcb-s/category/:cate",
      },
    ],
  },
  "baden-wuerttemberg.de": {
    _name: "Constitutional Court of Baden-Württemberg (Germany)",
    verfgh: [
      {
        title: "Press releases",
        docs: "https://docs.rsshub.app/routes/en/government#constitutional-court-of-baden-wurttemberg-germany",
        source: ["/de/presse-und-service/pressemitteilungen/"],
        target: "/verfghbw/press",
      },
    ],
  },
  "verse.com.tw": {
    _name: "VERSE",
    www: [
      {
        title: "專文",
        docs: "https://docs.rsshub.app/routes/new-media#verse",
        source: "/articles/:category?",
        target: "/verse/articles/:category?",
      },
    ],
  },
  "vimeo.com": {
    _name: "Vimeo",
    ".": [
      {
        title: "User videos",
        docs: "https://docs.rsshub.app/routes/social-media#vimeo-yong-hu-ye-mian",
        source: "/:username/",
        target: (params, url, document) => {
          const uid =
            document &&
            document
              .querySelector("html")
              .innerHTML.match(/app.vimeo.com\/users\/([0-9]+)/)[1]
          return uid ? `/vimeo/user/${uid}` : ""
        },
      },
      {
        title: "User Video Category",
        docs: "https://docs.rsshub.app/routes/social-media#vimeo-yong-hu-ye-mian",
        source: "/",
      },
      {
        title: "Channel",
        docs: "https://docs.rsshub.app/routes/social-media#vimeo-channel",
        source: [
          "/channels/:channel",
          "/channels/:channel/videos",
          "/channels/:channel/videos/:sort/:format",
        ],
        target: "/vimeo/channel/:channel",
      },
      {
        title: "Category",
        docs: "https://docs.rsshub.app/routes/social-media#vimeo-category",
        source: [
          "/categories/:category",
          "/categories/:category/:subcategory",
          "/categories/:category/:subcategory/videos",
        ],
        target: (params) =>
          `/vimeo/category/:category${params.subcategory ? `/` + params.subcategory : ""}`,
      },
    ],
  },
  "vlive.tv": {
    _name: "V LIVE",
    ".": [
      {
        title: "Board",
        docs: "https://docs.rsshub.app/routes/en/live#v-live",
        source: "/channel/:board/board/:board",
        target: "/vlive/channel/:board/board/:board",
      },
    ],
  },
  "vmware.com": {
    _name: "VMware",
    flings: [
      {
        title: "Flings",
        docs: "https://docs.rsshub.app/routes/program-update#vmware-flings",
        source: ["/flings", "/"],
        target: "/vmware/flings",
      },
    ],
  },
  "vocus.cc": {
    _name: "方格子",
    ".": [
      {
        title: "出版專題",
        docs: "https://docs.rsshub.app/routes/social-media#fang-ge-zi",
        source: ["/:id/home", "/:id/introduce"],
        target: "/vocus/publication/:id",
      },
      {
        title: "用户个人文章",
        docs: "https://docs.rsshub.app/routes/social-media#fang-ge-zi",
        source: ["/user/:id"],
        target: (params) => `/vocus/user/${params.id.replace("@", "")}`,
      },
    ],
  },
  "vom.mn": {
    _name: "蒙古之声",
    ".": [
      {
        title: "新闻",
        docs: "https://docs.rsshub.app/routes/traditional-media#meng-gu-zhi-sheng",
        source: ["/:lang", "/"],
        target: "/vom/featured/:lang",
      },
    ],
  },
  "wallhaven.cc": {
    _name: "wallhaven",
    ".": [
      {
        title: "Latest",
        docs: "https://docs.rsshub.app/routes/picture#wallhaven-zhu-zhu-ti",
        source: ["/:category", "/"],
        target: (params) => {
          if (params.category === "latest") {
            return "/wallhaven/latest"
          }
        },
      },
      {
        title: "Hot",
        docs: "https://docs.rsshub.app/routes/picture#wallhaven-zhu-zhu-ti",
        source: ["/:category", "/"],
        target: (params) => {
          if (params.category === "hot") {
            return "/wallhaven/hot"
          }
        },
      },
      {
        title: "TopList",
        docs: "https://docs.rsshub.app/routes/picture#wallhaven-zhu-zhu-ti",
        source: ["/:category", "/"],
        target: (params) => {
          if (params.category === "toplist") {
            return "/wallhaven/toplist"
          }
        },
      },
      {
        title: "Random",
        docs: "https://docs.rsshub.app/routes/picture#wallhaven-zhu-zhu-ti",
        source: ["/:category", "/"],
        target: (params) => {
          if (params.category === "random") {
            return "/wallhaven/random"
          }
        },
      },
      {
        title: "Search",
        docs: "https://docs.rsshub.app/routes/picture#wallhaven-sou-xiao-sou-shao-suo",
        source: ["/"],
        target: "/wallhaven/search/:filter?/:needDetails?",
      },
    ],
  },
  "wallpaperhub.app": {
    _name: "WallpaperHub",
    ".": [
      {
        title: "壁纸",
        docs: "https://docs.rsshub.app/routes/picture#wallpaperhub",
        source: ["/wallpaperhub", "/"],
        target: "/wallpaperhub",
      },
    ],
  },
  "wallstreetcn.com": {
    _name: "华尔街见闻",
    ".": [
      {
        title: "资讯",
        docs: "https://docs.rsshub.app/routes/traditional-media#hua-er-jie-jian-wen-zi-xun",
        source: ["/news/:category", "/"],
        target: "/wallstreetcn/news/:category?",
      },
      {
        title: "实时快讯",
        docs: "https://docs.rsshub.app/routes/traditional-media#hua-er-jie-jian-wen-shi-shi-kuai-xun",
        source: ["/live/:category", "/"],
        target: "/wallstreetcn/live/:category?",
      },
      {
        title: "最热文章",
        docs: "https://docs.rsshub.app/routes/traditional-media#hua-er-jie-jian-wen-zui-re-wen-zhang",
        source: ["/"],
        target: "/wallstreetcn/hot/:period?",
      },
    ],
  },
  "wangqiutiyu.com": {
    _name: "旺球体育",
    ".": [
      {
        title: "直播间开播",
        docs: "https://docs.rsshub.app/routes/live#wang-qiu-ti-yu-zhi-bo-jian-kai-bo",
        source: ["/anchor/:id", "/"],
        target: "/wangqiutiyu/anchor/:id",
      },
    ],
  },
  "wanqu.co": {
    _name: "湾区日报",
    ".": [
      {
        title: "最新推荐",
        docs: "https://docs.rsshub.app/routes/new-media#wan-qu-ri-bao",
        source: ["/"],
        target: "/wanqu/news",
      },
    ],
  },
  "warthunder.com": {
    _name: "War Thunder",
    ".": [
      {
        title: "News",
        docs: "https://docs.rsshub.app/routes/game#war-thunder-ying-wen-news",
        source: ["/en/news", "/"],
        target: "/warthunder/news",
      },
    ],
  },
  "watchout.tw": {
    _name: "沃草",
    ".": [
      {
        title: "文件列表",
        docs: "https://docs.rsshub.app/routes/new-media#wo-cao-wen-jian-lie-biao",
        source: ["/"],
        target: "/watchout",
      },
    ],
  },
  "wdc.com": {
    _name: "",
    support: [
      {
        title: "Western Digital",
        docs: "https://docs.rsshub.app/routes/program-update#western-digital-download",
        source: ["/downloads.aspx", "/"],
        target: (params, url) =>
          `/wdc/download/${new URL(url).searchParams.get("p")}`,
      },
    ],
  },
  "web3caff.com": {
    _name: "web3caff",
    ".": [
      {
        title: "发现",
        docs: "https://docs.rsshub.app/routes/new-media#web3caff-fa-xian",
        source: ["/"],
        target: (params, url) =>
          `/web3caff${new URL(url).toString().match(/\.com(.*)/)[1]}`,
      },
    ],
  },
  "careerengine.us": {
    _name: "微信",
    posts: [
      {
        title: "公众号（CareerEngine 来源）",
        docs: "https://docs.rsshub.app/routes/new-media#wei-xin",
        source: ["/author/*id/posts"],
        target: (params) => `/wechat/ce/${params.id}`,
      },
    ],
  },
  "cimidata.com": {
    _name: "微信",
    ".": [
      {
        title: "公众号（二十次幂来源）",
        docs: "https://docs.rsshub.app/routes/new-media#wei-xin",
        source: ["/a/:id"],
        target: "/wechat/ce/:id",
      },
    ],
  },
  "data258.com": {
    _name: "微信",
    mp: [
      {
        title: "公众号（微阅读来源）",
        docs: "https://docs.rsshub.app/routes/new-media#wei-xin",
        source: ["/", "/article/category/:id"],
        target: "/wechat/data258/:id?",
      },
    ],
  },
  "hamibot.com": {
    _name: "微信",
    feed: [
      {
        title: "公众号（feeddd 来源）",
        docs: "https://docs.rsshub.app/routes/new-media#wei-xin",
        source: ["/"],
      },
    ],
  },
  "mp.weixin.qq.com": {
    _name: "微信",
    ".": [
      {
        title: "公众平台系统公告栏目",
        docs: "https://docs.rsshub.app/routes/new-media#wei-xin",
        source: ["/cgi-bin/announce"],
        target: "/wechat/announce",
      },
    ],
  },
  "privacyhide.com": {
    _name: "微信",
    wechat: [
      {
        title: "公众号（wechat-feeds 来源）",
        docs: "https://docs.rsshub.app/routes/new-media#wei-xin",
      },
    ],
  },
  "sogou.com": {
    _name: "微信",
    weixin: [
      {
        title: "公众号（搜狗来源）",
        docs: "https://docs.rsshub.app/routes/new-media#wei-xin",
        source: ["/weixin"],
        target: (_, url) => {
          const id = new URL(url).searchParams.get("query")
          if (id === null) {
            return false
          }
          return `/wechat/sogou/${id}`
        },
      },
    ],
  },
  "wxnmh.com": {
    _name: "微信",
    ".": [
      {
        title: "公众号（wxnmh.com 来源）",
        docs: "https://docs.rsshub.app/routes/new-media#wei-xin",
        source: ["/:id"],
        target: (params) =>
          `/wechat/wxnmh/${params.id.replace("user-", "").replace(".htm", "")}`,
      },
    ],
  },
  "xlab.app": {
    _name: "微信",
    wechat2rss: [
      {
        title: "公众号（wechat2rss 来源）",
        docs: "https://docs.rsshub.app/routes/new-media#wei-xin",
        source: ["/feed/:id"],
        target: (params) =>
          `/wechat/wechat2rss/${params.id.replace(".xml", "")}`,
      },
    ],
  },
  "weekendhk.com": {
    _name: "新假期周刊",
    ".": [
      {
        title: "最新文章",
        docs: "https://docs.rsshub.app/routes/traditional-media#xin-jia-qi-zhou-kan",
        source: ["/"],
        target: "/weekendhk",
      },
    ],
  },
  "weibo.cn": {
    _name: "微博",
    m: [
      {
        title: "博主",
        docs: "https://docs.rsshub.app/routes/social-media#wei-bo",
        source: ["/u/:uid", "/profile/:uid"],
        target: "/weibo/user/:uid",
      },
    ],
  },
  "wenku8.net": {
    _name: "轻小说文库",
    www: [
      {
        title: "轻小说列表",
        docs: "https://docs.rsshub.app/routes/reading#qing-xiao-shuo-wen-ku-shou-ye-fen-lei",
        source: ["/modules/article/articlelist.php"],
        target: (_, url) => {
          const fullflag = new URL(url).searchParams.get("fullflag")
          if (!fullflag) {
            return "/wenku8/fullflag"
          }
        },
      },
      {
        title: "热门轻小说",
        docs: "https://docs.rsshub.app/routes/reading#qing-xiao-shuo-wen-ku-shou-ye-fen-lei",
        source: ["/modules/article/toplist.php"],
        target: (_, url) => {
          const sort = new URL(url).searchParams.get("sort")
          if (sort === "allvisit") {
            return "/wenku8/allvisit"
          }
        },
      },
      {
        title: "动画化作品",
        docs: "https://docs.rsshub.app/routes/reading#qing-xiao-shuo-wen-ku-shou-ye-fen-lei",
        source: ["/modules/article/toplist.php"],
        target: (_, url) => {
          const sort = new URL(url).searchParams.get("sort")
          if (sort === "anime") {
            return "/wenku8/anime"
          }
        },
      },
      {
        title: "新书一览",
        docs: "https://docs.rsshub.app/routes/reading#qing-xiao-shuo-wen-ku-shou-ye-fen-lei",
        source: ["/modules/article/toplist.php"],
        target: (_, url) => {
          const sort = new URL(url).searchParams.get("sort")
          if (sort === "postdate") {
            return "/wenku8/postdate"
          }
        },
      },
      {
        title: "完结全本",
        docs: "https://docs.rsshub.app/routes/reading#qing-xiao-shuo-wen-ku-shou-ye-fen-lei",
        source: ["/modules/article/articlelist.php"],
        target: (_, url) => {
          const fullflag = new URL(url).searchParams.get("fullflag")
          if (fullflag === "1") {
            return "/wenku8/fullflag"
          }
        },
      },
      {
        title: "今日更新",
        docs: "https://docs.rsshub.app/routes/reading#qing-xiao-shuo-wen-ku-shou-ye-fen-lei",
        source: ["/modules/article/toplist.php"],
        target: (_, url) => {
          const sort = new URL(url).searchParams.get("sort")
          if (sort === "lastupdate") {
            return "/wenku8/lastupdate"
          }
        },
      },
      {
        title: "章节",
        docs: "https://docs.rsshub.app/routes/reading#qing-xiao-shuo-wen-ku-zhang-jie",
        source: ["/book/:id"],
        target: (params) => `/wenku8/chapter/${params.id.split(".")[0]}`,
      },
      {
        title: "最新卷",
        docs: "https://docs.rsshub.app/routes/reading#qing-xiao-shuo-wen-ku-zui-xin-juan",
        source: ["/book/:id"],
        target: (params) => `/wenku8/volume/${params.id.split(".")[0]}`,
      },
    ],
  },
  "wfdf.sport": {
    _name: "WFDF",
    ".": [
      {
        title: "News",
        docs: "https://docs.rsshub.app/routes/other#wfdf",
        source: ["/news/", "/"],
        target: "/wfdf/news",
      },
    ],
  },
  "wfu.edu.cn": {
    _name: "潍坊学院",
    jwc: [
      {
        title: "教务处通知",
        docs: "https://docs.rsshub.app/routes/university#wei-fang-xue-yuan",
        source: "/",
        target: "/wfu/jwc",
      },
    ],
    news: [
      {
        title: "新闻",
        docs: "https://docs.rsshub.app/routes/university#wei-fang-xue-yuan",
        source: "/",
        target: "/wfu/news",
      },
    ],
  },
  "whitehouse.gov": {
    _name: "美国白宫办公厅",
    ".": [
      {
        title: "简报室",
        docs: "https://docs.rsshub.app/routes/government#mei-guo-bai-gong-ban-gong-ting",
        source: ["/briefing-room/:category", "/"],
        target: "/whitehouse/briefing-room/:category",
      },
      {
        title: "科技政策办公室",
        docs: "https://docs.rsshub.app/routes/government#mei-guo-bai-gong-ban-gong-ting",
        source: ["/ostp", "/"],
        target: "/whitehouse/ostp",
      },
    ],
  },
  "who.int": {
    _name: "世界卫生组织 WHO",
    ".": [
      {
        title: "新闻稿",
        docs: "https://docs.rsshub.app/routes/government#shi-jie-wei-sheng-zu-zhi-who",
        source: "/news",
        target: "/who/news",
      },
      {
        title: "媒体中心",
        docs: "https://docs.rsshub.app/routes/government#shi-jie-wei-sheng-zu-zhi-who",
        source: "/news-room/:type",
        target: "/who/news-room/:type",
      },
      {
        title: "总干事的讲话",
        docs: "https://docs.rsshub.app/routes/government#shi-jie-wei-sheng-zu-zhi-who",
        source: "/director-general/speeches",
        target: "/who/speeches",
      },
    ],
  },
  "whoscall.com": {
    _name: "Whoscall",
    ".": [
      {
        title: "最新文章",
        docs: "https://docs.rsshub.app/routes/blog#whoscall-zui-xin-wen-zhang",
        source: ["/zh-hant/blog/articles", "/"],
        target: "/whoscall",
      },
      {
        title: "分類",
        docs: "https://docs.rsshub.app/routes/blog#whoscall-fen-lei",
        source: ["/zh-hant/blog/categories/:category", "/"],
        target: "/whoscall/categories/:category?",
      },
      {
        title: "標籤",
        docs: "https://docs.rsshub.app/routes/blog#whoscall-biao-qian",
        source: ["/zh-hant/blog/tags/:tag", "/"],
        target: "/whoscall/tags/:tag?",
      },
    ],
  },
  "whu.edu.cn": {
    _name: "武汉大学",
    cs: [
      {
        title: "计算机学院公告",
        docs: "https://docs.rsshub.app/routes/university#wu-han-da-xue",
      },
    ],
    gs: [
      {
        title: "研究生院",
        docs: "https://docs.rsshub.app/routes/university#wu-han-da-xue-yan-jiu-sheng-yuan",
        source: ["/index.htm", "/"],
        target: "/whu/gs",
      },
    ],
    hyxt: [
      {
        title: "弘毅学堂 - 新闻动态",
        docs: "https://docs.rsshub.app/routes/university#wu-han-da-xue-hong-yi-xue-tang",
        source: ["/xwdt"],
        target: "/whu/hyxt/xwdt",
      },
      {
        title: "弘毅学堂 - 通知公告",
        docs: "https://docs.rsshub.app/routes/university#wu-han-da-xue-hong-yi-xue-tang",
        source: ["/tzgg"],
        target: "/whu/hyxt/tzgg",
      },
      {
        title: "弘毅学堂 - 学子风采",
        docs: "https://docs.rsshub.app/routes/university#wu-han-da-xue-hong-yi-xue-tang",
        source: ["/xzfc"],
        target: "/whu/hyxt/xzfc",
      },
      {
        title: "弘毅学堂 - 学术论坛",
        docs: "https://docs.rsshub.app/routes/university#wu-han-da-xue-hong-yi-xue-tang",
        source: ["/xslt"],
        target: "/whu/hyxt/xslt",
      },
      {
        title: "弘毅学堂 - 学堂简报",
        docs: "https://docs.rsshub.app/routes/university#wu-han-da-xue-hong-yi-xue-tang",
        source: ["/xtjb"],
        target: "/whu/hyxt/xtjb",
      },
      {
        title: "弘毅学堂 - 人才培养",
        docs: "https://docs.rsshub.app/routes/university#wu-han-da-xue-hong-yi-xue-tang",
        source: ["/rcpy"],
        target: "/whu/hyxt/rcpy",
      },
      {
        title: "弘毅学堂 - 招生工作",
        docs: "https://docs.rsshub.app/routes/university#wu-han-da-xue-hong-yi-xue-tang",
        source: ["/rcpy/zsgz", "/rcpy"],
        target: "/whu/hyxt/rcpy/zsgz",
      },
      {
        title: "弘毅学堂 - 培养方案",
        docs: "https://docs.rsshub.app/routes/university#wu-han-da-xue-hong-yi-xue-tang",
        source: ["/rcpy/pyfa", "/rcpy"],
        target: "/whu/hyxt/rcpy/pyfa",
      },
      {
        title: "弘毅学堂 - 科研训练",
        docs: "https://docs.rsshub.app/routes/university#wu-han-da-xue-hong-yi-xue-tang",
        source: ["/rcpy/kyxl", "/rcpy"],
        target: "/whu/hyxt/rcpy/kyxl",
      },
      {
        title: "弘毅学堂 - 毕业去向",
        docs: "https://docs.rsshub.app/routes/university#wu-han-da-xue-hong-yi-xue-tang",
        source: ["/rcpy/byqx", "/rcpy"],
        target: "/whu/hyxt/rcpy/byqx",
      },
      {
        title: "弘毅学堂 - 学习资源",
        docs: "https://docs.rsshub.app/routes/university#wu-han-da-xue-hong-yi-xue-tang",
        source: ["/rcpy/xxzy", "/rcpy"],
        target: "/whu/hyxt/rcpy/xxzy",
      },
      {
        title: "弘毅学堂 - 学生工作",
        docs: "https://docs.rsshub.app/routes/university#wu-han-da-xue-hong-yi-xue-tang",
        source: ["/xsgz"],
        target: "/whu/hyxt/xsgz",
      },
      {
        title: "弘毅学堂 - 党团建设",
        docs: "https://docs.rsshub.app/routes/university#wu-han-da-xue-hong-yi-xue-tang",
        source: ["/xsgz/dtjs", "/xsgz"],
        target: "/whu/hyxt/xsgz/dtjs",
      },
      {
        title: "弘毅学堂 - 学术交流",
        docs: "https://docs.rsshub.app/routes/university#wu-han-da-xue-hong-yi-xue-tang",
        source: ["/xsgz/xsjl", "/xsgz"],
        target: "/whu/hyxt/xsgz/xsjl",
      },
      {
        title: "弘毅学堂 - 书院生活",
        docs: "https://docs.rsshub.app/routes/university#wu-han-da-xue-hong-yi-xue-tang",
        source: ["/xsgz/sysh", "/xsgz"],
        target: "/whu/hyxt/xsgz/sysh",
      },
      {
        title: "弘毅学堂 - 奖助体系",
        docs: "https://docs.rsshub.app/routes/university#wu-han-da-xue-hong-yi-xue-tang",
        source: ["/xsgz/jztx", "/xsgz"],
        target: "/whu/hyxt/xsgz/jztx",
      },
      {
        title: "弘毅学堂 - 事务服务",
        docs: "https://docs.rsshub.app/routes/university#wu-han-da-xue-hong-yi-xue-tang",
        source: ["/xsgz/swfw", "/xsgz"],
        target: "/whu/hyxt/xsgz/swfw",
      },
      {
        title: "弘毅学堂 - 国际合作",
        docs: "https://docs.rsshub.app/routes/university#wu-han-da-xue-hong-yi-xue-tang",
        source: ["/gjhz"],
        target: "/whu/hyxt/gjhz",
      },
      {
        title: "弘毅学堂 - 国际交流",
        docs: "https://docs.rsshub.app/routes/university#wu-han-da-xue-hong-yi-xue-tang",
        source: ["/gjhz/gjjl", "/gjhz"],
        target: "/whu/hyxt/gjhz/gjjl",
      },
      {
        title: "弘毅学堂 - 交流分享",
        docs: "https://docs.rsshub.app/routes/university#wu-han-da-xue-hong-yi-xue-tang",
        source: ["/gjhz/jlfx", "/gjhz"],
        target: "/whu/hyxt/gjhz/jlfx",
      },
      {
        title: "弘毅学堂 - 校友风采",
        docs: "https://docs.rsshub.app/routes/university#wu-han-da-xue-hong-yi-xue-tang",
        source: ["/xyfc"],
        target: "/whu/hyxt/xyfc",
      },
    ],
    news: [
      {
        title: "新闻网 - 武大资讯",
        docs: "https://docs.rsshub.app/routes/wu-han-da-xue#wu-han-da-xue-xin-wen-wang",
        source: ["/wdzx/wdyw", "/wdzx"],
        target: "/whu/news/wdzx/wdyw",
      },
      {
        title: "新闻网 - 武大要闻",
        docs: "https://docs.rsshub.app/routes/wu-han-da-xue#wu-han-da-xue-xin-wen-wang",
        source: ["/wdzx/wdyw", "/wdzx"],
        target: "/whu/news/wdzx/wdyw",
      },
      {
        title: "新闻网 - 综合新闻",
        docs: "https://docs.rsshub.app/routes/wu-han-da-xue#wu-han-da-xue-xin-wen-wang",
        source: ["/wdzx/zhxw", "/wdzx"],
        target: "/whu/news/wdzx/zhxw",
      },
      {
        title: "新闻网 - 合作交流",
        docs: "https://docs.rsshub.app/routes/wu-han-da-xue#wu-han-da-xue-xin-wen-wang",
        source: ["/wdzx/hzjl", "/wdzx"],
        target: "/whu/news/wdzx/hzjl",
      },
      {
        title: "新闻网 - 一线传真",
        docs: "https://docs.rsshub.app/routes/wu-han-da-xue#wu-han-da-xue-xin-wen-wang",
        source: ["/wdzx/yxcz", "/wdzx"],
        target: "/whu/news/wdzx/yxcz",
      },
      {
        title: "新闻网 - 学术动态",
        docs: "https://docs.rsshub.app/routes/wu-han-da-xue#wu-han-da-xue-xin-wen-wang",
        source: ["/kydt"],
        target: "/whu/news/kydt",
      },
      {
        title: "新闻网 - 校园文化",
        docs: "https://docs.rsshub.app/routes/wu-han-da-xue#wu-han-da-xue-xin-wen-wang",
        source: ["/xywh/bfxy", "/xywh"],
        target: "/whu/news/xywh/bfxy",
      },
      {
        title: "新闻网 - 缤纷校园",
        docs: "https://docs.rsshub.app/routes/wu-han-da-xue#wu-han-da-xue-xin-wen-wang",
        source: ["/xywh/bfxy", "/xywh"],
        target: "/whu/news/xywh/bfxy",
      },
      {
        title: "新闻网 - 校友之声",
        docs: "https://docs.rsshub.app/routes/wu-han-da-xue#wu-han-da-xue-xin-wen-wang",
        source: ["/xywh/xyzs", "/xywh"],
        target: "/whu/news/xywh/xyzs",
      },
      {
        title: "新闻网 - 珞珈副刊",
        docs: "https://docs.rsshub.app/routes/wu-han-da-xue#wu-han-da-xue-xin-wen-wang",
        source: ["/xywh/ljfk", "/xywh"],
        target: "/whu/news/xywh/ljfk",
      },
      {
        title: "新闻网 - 校史钩沉",
        docs: "https://docs.rsshub.app/routes/wu-han-da-xue#wu-han-da-xue-xin-wen-wang",
        source: ["/xywh/xsgc", "/xywh"],
        target: "/whu/news/xywh/xsgc",
      },
      {
        title: "新闻网 - 主题教育",
        docs: "https://docs.rsshub.app/routes/wu-han-da-xue#wu-han-da-xue-xin-wen-wang",
        source: ["/ztbd/ztjy", "/ztbd"],
        target: "/whu/news/ztbd/ztjy",
      },
      {
        title: "新闻网 - 顶天立地建学科",
        docs: "https://docs.rsshub.app/routes/wu-han-da-xue#wu-han-da-xue-xin-wen-wang",
        source: ["/ztbd/dtldjxk", "/ztbd"],
        target: "/whu/news/ztbd/dtldjxk",
      },
      {
        title: "新闻网 - 学习在线",
        docs: "https://docs.rsshub.app/routes/wu-han-da-xue#wu-han-da-xue-xin-wen-wang",
        source: ["/ztbd/xxzx", "/ztbd"],
        target: "/whu/news/ztbd/xxzx",
      },
      {
        title: "新闻网 - 记者调查",
        docs: "https://docs.rsshub.app/routes/wu-han-da-xue#wu-han-da-xue-xin-wen-wang",
        source: ["/ztbd/jzdc", "/ztbd"],
        target: "/whu/news/ztbd/jzdc",
      },
      {
        title: "新闻网 - 校庆征文 我与武大",
        docs: "https://docs.rsshub.app/routes/wu-han-da-xue#wu-han-da-xue-xin-wen-wang",
        source: ["/ztbd/xqzw_wywd", "/ztbd"],
        target: "/whu/news/ztbd/xqzw_wywd",
      },
      {
        title: "新闻网 - 媒体武大",
        docs: "https://docs.rsshub.app/routes/wu-han-da-xue#wu-han-da-xue-xin-wen-wang",
        source: ["/mtwd"],
        target: "/whu/news/mtwd",
      },
      {
        title: "新闻网 - 珞珈人物",
        docs: "https://docs.rsshub.app/routes/wu-han-da-xue#wu-han-da-xue-xin-wen-wang",
        source: ["/ljrw"],
        target: "/whu/news/ljrw",
      },
      {
        title: "新闻网 - 视听空间",
        docs: "https://docs.rsshub.app/routes/wu-han-da-xue#wu-han-da-xue-xin-wen-wang",
        source: ["/stkj/ljyx", "/stkj"],
        target: "/whu/media/stkj/ljyx",
      },
      {
        title: "新闻网 - 珞珈影像",
        docs: "https://docs.rsshub.app/routes/wu-han-da-xue#wu-han-da-xue-xin-wen-wang",
        source: ["/stkj/ljyx", "/stkj"],
        target: "/whu/media/stkj/ljyx",
      },
      {
        title: "新闻网 - 武大视频",
        docs: "https://docs.rsshub.app/routes/wu-han-da-xue#wu-han-da-xue-xin-wen-wang",
        source: ["/stkj/wdsp", "/stkj"],
        target: "/whu/media/stkj/wdsp",
      },
    ],
  },
  "wikinews.org": {
    _name: "维基新闻",
    zh: [
      {
        title: "最新新闻",
        docs: "https://docs.rsshub.app/routes/new-media#wei-ji-xin-wen",
        source: ["/wiki/Special:新闻订阅"],
        target: "/wikinews/latest",
      },
    ],
  },
  "winstall.app": {
    _name: "winstall",
    ".": [
      {
        title: "应用更新",
        docs: "https://docs.rsshub.app/routes/program-update#winstall",
        source: ["/apps/:appId"],
        target: "/winstall/:appId",
      },
    ],
  },
  "wise.com": {
    _name: "Wise",
    ".": [
      {
        title: "昨日汇率变动",
        docs: "https://docs.rsshub.app/routes/other#wise",
      },
    ],
  },
  "antibody-software.com": {
    _name: "WizFile",
    ".": [
      {
        title: "更新日志",
        docs: "https://docs.rsshub.app/routes/new-media#wei-ji-xin-wen",
        source: ["/wizfile/download"],
        target: "/wizfile/updates",
      },
    ],
  },
  "wnacg.org": {
    _name: "紳士漫畫",
    ".": [
      {
        title: "最新",
        docs: "https://docs.rsshub.app/routes/anime#shen-shi-man-hua",
        source: ["/albums.html", "/"],
        target: "/wnacg",
      },
      {
        title: "分类更新",
        docs: "https://docs.rsshub.app/routes/anime#shen-shi-man-hua",
        source: ["/*"],
        target: (_, url) =>
          `/wnacg/category/${new URL(url).pathname.match(/albums-index-cate-(\d+)\.html$/)[1]}`,
      },
      {
        title: "標籤更新",
        docs: "https://docs.rsshub.app/routes/anime#shen-shi-man-hua",
        source: ["/*"],
        target: (_, url) =>
          `/wnacg/tag/${new URL(url).pathname.match(/albums-index-tag-(.+?)\.html$/)[1]}`,
      },
    ],
  },
  "worldjournal.com": {
    _name: "世界新聞網",
    ".": [
      {
        title: "新聞",
        docs: "https://docs.rsshub.app/routes/new-media#shi-jie-xin-wen-wang",
        source: ["/wj/*path"],
        target: "/worldjournal/:path",
      },
    ],
  },
  "woshipm.com": {
    _name: "人人都是产品经理",
    ".": [
      {
        title: "热门文章",
        docs: "https://docs.rsshub.app/routes/new-media#ren-ren-dui-shi-chan-pin-jing-li",
        source: ["/"],
        target: "/woshipm/popular",
      },
      {
        title: "用户收藏",
        docs: "https://docs.rsshub.app/routes/new-media#ren-ren-dui-shi-chan-pin-jing-li",
        source: ["/u/:id"],
        target: "/woshipm/bookmarks/:id",
      },
      {
        title: "用户文章",
        docs: "https://docs.rsshub.app/routes/new-media#ren-ren-dui-shi-chan-pin-jing-li",
        source: ["/u/:id"],
        target: "/woshipm/user_article/:id",
      },
      {
        title: "最新文章",
        docs: "https://docs.rsshub.app/routes/new-media#ren-ren-dui-shi-chan-pin-jing-li",
        source: ["/"],
        target: "/woshipm/latest",
      },
    ],
    wen: [
      {
        title: "天天问",
        docs: "https://docs.rsshub.app/routes/new-media#ren-ren-dui-shi-chan-pin-jing-li",
        source: ["/"],
        target: "/woshipm/wen",
      },
    ],
  },
  "wp-china.com": {
    _name: "中国工人出版社",
    ".": [
      {
        title: "新闻中心",
        docs: "https://docs.rsshub.app/routes/new-media#zhong-guo-gong-ren-chu-ban-she",
        source: ["/"],
        target: "/wp-china/news",
      },
    ],
  },
  "wsj.com": {
    _name: "华尔街日报 The Wall Street Journal (WSJ)",
    cn: [
      {
        title: "新闻",
        docs: "https://docs.rsshub.app/routes/traditional-media#hua-er-jie-ri-bao-the-wall-street-journal-wsj",
        source: "/",
        target: "/wsj/zh-cn",
      },
    ],
    www: [
      {
        title: "新闻",
        docs: "https://docs.rsshub.app/routes/traditional-media#hua-er-jie-ri-bao-the-wall-street-journal-wsj",
        source: "/",
        target: "/wsj/en-us",
      },
    ],
  },
  "wsyu.edu.cn": {
    _name: "新闻中心",
    www: [
      {
        title: "学校要闻",
        docs: "https://docs.rsshub.app/routes/other#wu-chang-shou-yi-xue-yuan",
        source: "/*",
        target: "/wsyu/news/xxyw",
      },
      {
        title: "综合新闻",
        docs: "https://docs.rsshub.app/routes/other#wu-chang-shou-yi-xue-yuan",
        source: "/*",
        target: "/wsyu/news/zhxw",
      },
      {
        title: "媒体聚焦",
        docs: "https://docs.rsshub.app/routes/other#wu-chang-shou-yi-xue-yuan",
        source: "/*",
        target: "/wsyu/news/mtjj",
      },
    ],
  },
  "wtu.edu.cn": {
    _name: "武汉纺织大学",
    wtu: [
      {
        title: "信息门户公告",
        docs: "https://docs.rsshub.app/routes/university#wu-han-fang-zhi-da-xue",
      },
    ],
  },
  "wxkol.com": {
    _name: "微小领",
    ".": [
      {
        title: "微信公众号",
        docs: "https://docs.rsshub.app/routes/new-media#wei-xiao-ling",
        source: ["/show/:id"],
        target: (params) => `/wxkol/show/${params.id.replace(".html", "")}`,
      },
    ],
  },
  "wyzxwk.com": {
    _name: "乌有之乡",
    ".": [
      {
        title: "栏目",
        docs: "https://docs.rsshub.app/routes/new-media#wu-you-zhi-xiang-lan-mu",
        source: ["/Article/:id", "/"],
        target: "/wyzxwk/article/:id?",
      },
    ],
  },
  "wzu.edu.cn": {
    _name: "温州大学",
    ".": [
      {
        title: "温州大学 - 主站新闻",
        docs: "https://docs.rsshub.app/routes/university#wen-zhou-da-xue",
      },
    ],
  },
  "x-mol.com": {
    _name: "X-MOL",
    ".": [
      {
        title: "News",
        docs: "https://docs.rsshub.app/study#x-mol",
        source: ["/news/:area/tag/:tag"],
        target: "/x-mol/news/:tag",
      },
      {
        title: "News Index",
        docs: "https://docs.rsshub.app/study#x-mol",
        source: ["/news/index"],
        target: "/x-mol/news",
      },
      {
        title: "Journal",
        docs: "https://docs.rsshub.app/journal#x-mol",
        source: ["/paper/:area/tag/:type/journal/:magazine"],
        target: "/x-mol/paper/geo/:type/:magazine",
      },
    ],
  },
  "x6d.com": {
    _name: "小刀娱乐网",
    xd: [
      {
        title: "最新",
        docs: "https://docs.rsshub.app/routes/new-media#xiao-dao-yu-le-wang",
        source: ["/html/:id"],
        target: (params) => `/x6d/${params.id.replace(".html", "")}`,
      },
    ],
  },
  "xaufe.edu.cn": {
    _name: "西安财经大学",
    jiaowu: [
      {
        title: "教务处",
        docs: "https://docs.rsshub.app/routes/university#xi-an-cai-jing-da-xue",
      },
    ],
  },
  "xaut.edu.cn": {
    _name: "西安理工大学",
    index: [
      {
        title: "学校官网",
        docs: "https://docs.rsshub.app/routes/university#xi-an-li-gong-da-xue",
      },
    ],
    jwc: [
      {
        title: "教务处",
        docs: "https://docs.rsshub.app/routes/university#xi-an-li-gong-da-xue",
      },
    ],
    rsc: [
      {
        title: "人事处",
        docs: "https://docs.rsshub.app/routes/university#xi-an-li-gong-da-xue",
      },
    ],
  },
  "xboxfan.com": {
    _name: "盒心光环",
    ".": [
      {
        title: "资讯",
        docs: "https://docs.rsshub.app/routes/game#he-xin-guang-huan",
        source: "/",
        target: "/xboxfan/news",
      },
    ],
  },
  "xiaohongshu.com": {
    _name: "小红书",
    ".": [
      {
        title: "用户笔记",
        docs: "https://docs.rsshub.app/routes/social-media#xiao-hong-shu",
        source: "/user/profile/:user_id",
        target: "/xiaohongshu/user/:user_id/notes",
      },
      {
        title: "用户收藏",
        docs: "https://docs.rsshub.app/routes/social-media#xiao-hong-shu",
        source: "/user/profile/:user_id",
        target: "/xiaohongshu/user/:user_id/collect",
      },
      {
        title: "专辑",
        docs: "https://docs.rsshub.app/routes/social-media#xiao-hong-shu",
        source: "/board/:board_id",
        target: "/xiaohongshu/board/:board_id",
      },
    ],
  },
  "xiaomiyoupin.com": {
    _name: "小米有品",
    ".": [
      {
        title: "小米有品众筹",
        docs: "https://docs.rsshub.app/routes/shopping#xiao-mi-you-pin-xiao-mi-you-pin-zhong-chou",
        source: ["/"],
        target: "/xiaomiyoupin/crowdfunding",
      },
      {
        title: "小米有品每日上新",
        docs: "https://docs.rsshub.app/routes/shopping#xiao-mi-you-pin-xiao-mi-you-pin-mei-ri-shang-xin",
        source: ["/"],
        target: "/xiaomiyoupin/latest",
      },
    ],
  },
  "xiaote.com": {
    _name: "小特社区",
    ".": [
      {
        title: "首页帖子",
        docs: "https://docs.rsshub.app/routes/bbs#xiao-te-she-qu",
        source: ["/"],
        target: "/xiaote/news",
      },
    ],
  },
  "xiaoyuzhoufm.com": {
    _name: "小宇宙",
    ".": [
      {
        title: "发现",
        docs: "https://docs.rsshub.app/routes/multimedia#xiao-yu-zhou",
        source: ["/"],
        target: "/xiaoyuzhou",
      },
      {
        title: "播客",
        docs: "https://docs.rsshub.app/routes/multimedia#xiao-yu-zhou",
        source: ["/podcast/:id"],
        target: "/xiaoyuzhou/podcast/:id",
      },
    ],
  },
  "xiaozhuanlan.com": {
    _name: "小专栏",
    ".": [
      {
        title: "专栏",
        docs: "https://docs.rsshub.app/routes/new-media#xiao-zhuan-lan",
        source: "/:id",
        target: "/xiaozhuanlan/column/:id",
      },
    ],
  },
  "xidian.edu.cn": {
    _name: "西安电子科技大学",
    jwc: [
      {
        title: "教务处",
        docs: "https://docs.rsshub.app/routes/university#xi-an-dian-zi-ke-ji-da-xue",
        source: ["/:category"],
        target: (params) =>
          `/xidian/jwc${params.category ? `/${params.category}` : ""}`,
      },
    ],
  },
  "ximalaya.com": {
    _name: "喜马拉雅",
    ".": [
      {
        title: "专辑",
        docs: "https://docs.rsshub.app/routes/multimedia#xi-ma-la-ya",
        source: "/:type/:id",
        target: (params) => {
          if (parseInt(params.id) + "" === params.id) {
            return "/ximalaya/:type/:id"
          }
        },
      },
    ],
  },
  "xinpianchang.com": {
    _name: "新片场",
    ".": [
      {
        title: "发现",
        docs: "https://docs.rsshub.app/routes/new-media#xin-pian-chang-fa-xian",
        source: ["/discover/:params"],
        target: (params, url) => {
          url = new URL(url)
          const path =
            params.params ?? url.href.match(/discover\/(article.*?)/)[1]

          return `/xinpianchang/discover${path ? `/${path}` : ""}`
        },
      },
      {
        title: "排行榜",
        docs: "https://docs.rsshub.app/routes/new-media#xin-pian-chang-pai-hang-bang",
        source: ["/rank/:params"],
        target: (params, url) => {
          const path =
            params.params.match(/article-(\w+)-\d+-\d+/)[1] ??
            url.href.match(/rank\/article-(\w+)-\d+-\d+/)[1]

          return `/xinpianchang/rank${path ? `/${path}` : ""}`
        },
      },
    ],
  },
  "xjtu.edu.cn": {
    _name: "西安交通大学",
    "2yuan": [
      {
        title: "第二附属医院新闻",
        docs: "https://docs.rsshub.app/routes/university#xi-an-jiao-tong-da-xue-di-er-fu-shu-yi-yuan-xin-wen",
        source: ["/"],
        target: (params, url) =>
          `/xjtu/2yuan/news/${new URL(url).toString().match(/\/Columns\/(\d+)\//)[1]}`,
      },
    ],
    dean: [
      {
        title: "教务处",
        docs: "https://docs.rsshub.app/routes/university#xi-an-jiao-tong-da-xue-jiao-wu-chu",
        source: ["/"],
        target: "/xjtu/dean/:subpath+",
      },
    ],
    ee: [
      {
        title: "电气学院",
        docs: "https://docs.rsshub.app/routes/university#xi-an-jiao-tong-da-xue-dian-qi-xue-yuan",
        source: ["/"],
        target: "/xjtu/ee/:id?",
      },
    ],
    gs: [
      {
        title: "研究生院通知公告",
        docs: "https://docs.rsshub.app/routes/university#xi-an-jiao-tong-da-xue-yan-jiu-sheng-xue-yuan-tong-zhi-gong-gao",
        source: ["/"],
        target: "/xjtu/gs/tzgg",
      },
    ],
    international: [
      {
        title: "国际处通知",
        docs: "https://docs.rsshub.app/routes/university#xi-an-jiao-tong-da-xue-guo-ji-chu-tong-zhi",
        source: ["/"],
        target: "/xjtu/international/:subpath+",
      },
    ],
    std: [
      {
        title: "科技在线",
        docs: "https://docs.rsshub.app/routes/university#xi-an-jiao-tong-da-xue-ke-ji-zai-xian",
        source: ["/tzgg/:category", "/"],
        target: (params, url) =>
          `/xjtu/std/${new URL(url).toString().match(/\/(\w+)\.htm/)[1]}`,
      },
    ],
    "www.dyyy": [
      {
        title: "第一附属医院新闻",
        docs: "https://docs.rsshub.app/routes/university#xi-an-jiao-tong-da-xue",
        source: ["/*"],
        target: (_, url) =>
          `/xjtu/dyyy${new URL(url).pathname.replace(".htm", "")}`,
      },
    ],
  },
  "xkb.com.cn": {
    _name: "新快报",
    ".": [
      {
        title: "新闻",
        docs: "https://docs.rsshub.app/routes/traditional-media#xin-kuai-bao",
        source: ["/"],
        target: (_, url) => `/xkb/${new URL(url).hash.match(/\?id=(\d+)/)[1]}`,
      },
    ],
  },
  "xmanhua.com": {
    _name: "X 漫画",
    ".": [
      {
        title: "最新动态",
        docs: "https://docs.rsshub.app/routes/anime#x-man-hua",
        source: ["/:uid"],
        target: "/xmanhua/:uid",
      },
    ],
  },
  "xmnn.cn": {
    _name: "厦门网",
    epaper: [
      {
        title: "数字媒体",
        docs: "https://docs.rsshub.app/routes/traditional-media#xia-men-wang-shu-zi-mei-ti",
        source: ["/:id"],
        target: "/xmnn/epaper/:id",
      },
    ],
    news: [
      {
        title: "新闻",
        docs: "https://docs.rsshub.app/routes/traditional-media#xia-men-wang-xin-wen",
        source: ["/:category*"],
        target: (params) => {
          const category = params.category

          return `/xmnn/news/${category ? `/${category}` : ""}`
        },
      },
      {
        title: "厦门新闻发布",
        docs: "https://docs.rsshub.app/routes/traditional-media#xia-men-wang-xin-wen",
        source: ["/xmxwfb"],
        target: "/xmnn/news/xmxwfb",
      },
      {
        title: "厦门新闻",
        docs: "https://docs.rsshub.app/routes/traditional-media#xia-men-wang-xin-wen",
        source: ["/xmxw"],
        target: "/xmnn/news/xmxw",
      },
      {
        title: "本网快报",
        docs: "https://docs.rsshub.app/routes/traditional-media#xia-men-wang-xin-wen",
        source: ["/bwkb"],
        target: "/xmnn/news/bwkb",
      },
      {
        title: "厦门网眼",
        docs: "https://docs.rsshub.app/routes/traditional-media#xia-men-wang-xin-wen",
        source: ["/xmwy"],
        target: "/xmnn/news/xmwy",
      },
      {
        title: "福建新闻",
        docs: "https://docs.rsshub.app/routes/traditional-media#xia-men-wang-xin-wen",
        source: ["/fjxw"],
        target: "/xmnn/news/fjxw",
      },
      {
        title: "国内新闻",
        docs: "https://docs.rsshub.app/routes/traditional-media#xia-men-wang-xin-wen",
        source: ["/gnxw"],
        target: "/xmnn/news/gnxw",
      },
      {
        title: "国际新闻",
        docs: "https://docs.rsshub.app/routes/traditional-media#xia-men-wang-xin-wen",
        source: ["/gjxw"],
        target: "/xmnn/news/gjxw",
      },
      {
        title: "台海新闻",
        docs: "https://docs.rsshub.app/routes/traditional-media#xia-men-wang-xin-wen",
        source: ["/thxw"],
        target: "/xmnn/news/thxw",
      },
      {
        title: "社会新闻",
        docs: "https://docs.rsshub.app/routes/traditional-media#xia-men-wang-xin-wen",
        source: ["/shxw"],
        target: "/xmnn/news/shxw",
      },
    ],
  },
  "xmut.edu.cn": {
    _name: "厦门理工学院",
    jwc: [
      {
        title: "教务处",
        docs: "https://docs.rsshub.app/routes/university#xia-men-li-gong-da-xue",
        source: ["/:category"],
        target: (params) =>
          `/xmut/jwc${params.category ? `/${params.category}` : ""}`,
      },
    ],
  },
  "xsijishe.com": {
    _name: "司机社",
    ".": [
      {
        title: "论坛",
        docs: "https://docs.rsshub.app/routes/bbs#si-ji-she",
        source: ["/*"],
        target: (_, url) => {
          const re = /forum-(\d+)-/
          const res = re.exec(url)
          if (res) {
            return `/xsijishe/forum/${res[1]}`
          }
        },
      },
      {
        title: "周排行榜",
        docs: "https://docs.rsshub.app/routes/bbs#si-ji-she",
        source: ["/*"],
        target: "/xsijishe/rank/weekly",
      },
      {
        title: "月排行榜",
        docs: "https://docs.rsshub.app/routes/bbs#si-ji-she",
        source: ["/*"],
        target: "/xsijishe/rank/monthly",
      },
    ],
  },
  "danjuanapp.com": {
    _name: "雪球",
    ".": [
      {
        title: "蛋卷基金净值更新",
        docs: "https://docs.rsshub.app/routes/finance#xue-qiu",
        source: ["/funding/:id"],
        target: "/xueqiu/funding/:id",
      },
    ],
  },
  "xueqiu.com": {
    _name: "雪球",
    ".": [
      {
        title: "今日话题",
        docs: "https://docs.rsshub.app/routes/finance#xue-qiu",
        source: ["/today"],
        target: "/xueqiu/today",
      },
      {
        title: "用户动态",
        docs: "https://docs.rsshub.app/routes/finance#xue-qiu",
        source: ["/u/:id"],
        target: "/xueqiu/user/:id",
      },
      {
        title: "用户收藏动态",
        docs: "https://docs.rsshub.app/routes/finance#xue-qiu",
        source: ["/u/:id"],
        target: "/xueqiu/favorite/:id",
      },
      {
        title: "用户自选动态",
        docs: "https://docs.rsshub.app/routes/finance#xue-qiu",
        source: ["/u/:id"],
        target: "/xueqiu/user_stock/:id",
      },
      {
        title: "用户专栏",
        docs: "https://docs.rsshub.app/routes/finance#xue-qiu",
        source: ["/:id/column"],
        target: "/xueqiu/column/:id",
      },
      {
        title: "组合最新调仓信息",
        docs: "https://docs.rsshub.app/routes/finance#xue-qiu",
        source: ["/P/:id", "/p/:id"],
        target: "/xueqiu/snb/:id",
      },
      {
        title: "股票信息",
        docs: "https://docs.rsshub.app/routes/finance#xue-qiu",
        source: ["/S/:id", "/s/:id"],
        target: "/xueqiu/stock_info/:id",
      },
      {
        title: "股票评论",
        docs: "https://docs.rsshub.app/routes/finance#xue-qiu",
        source: ["/S/:id"],
        target: "/xueqiu/stock_comments/:id",
      },
      {
        title: "热帖",
        docs: "https://docs.rsshub.app/routes/finance#xue-qiu",
        source: ["/"],
        target: "/xueqiu/hots",
      },
    ],
  },
  "xunhupay.com": {
    _name: "虎皮椒",
    www: [
      {
        title: "博客",
        docs: "https://docs.rsshub.app/routes/blog#hu-pi-jiao",
        source: ["/blog"],
        target: "/xunhupay/blog",
      },
    ],
  },
  "xwlb.com.cn": {
    _name: "羊城晚报金羊网",
    ".": [
      {
        title: "新闻",
        docs: "https://docs.rsshub.app/routes/traditional-media#yang-cheng-wan-bao-jin-yang-wang",
        source: ["/"],
      },
    ],
  },
  "xys.org": {
    _name: "新语丝",
    ".": [
      {
        title: "新到资料",
        docs: "https://docs.rsshub.app/routes/blog#xin-yu-si",
        source: ["/", "/new.html"],
        target: "/xys/new",
      },
    ],
  },
  "xyzrank.com": {
    _name: "中文播客榜",
    ".": [
      {
        title: "热门节目",
        docs: "https://docs.rsshub.app/routes/multimedia#zhong-wen-bo-ke-bang-re-men-jie-mu",
        source: ["/"],
        target: "/xyzrank",
      },
      {
        title: "热门播客",
        docs: "https://docs.rsshub.app/routes/multimedia#zhong-wen-bo-ke-bang-re-men-bo-ke",
        source: ["/"],
        target: (_, url) =>
          new URL(url).hash === "#/hot-podcasts"
            ? "/xyzrank/hot-podcasts"
            : null,
      },
      {
        title: "新锐节目",
        docs: "https://docs.rsshub.app/routes/multimedia#zhong-wen-bo-ke-bang-xin-rui-jie-mu",
        source: ["/"],
        target: (_, url) =>
          new URL(url).hash === "#/hot-episodes-new"
            ? "/xyzrank/hot-episodes-new"
            : null,
      },
      {
        title: "新锐播客",
        docs: "https://docs.rsshub.app/routes/multimedia#zhong-wen-bo-ke-bang-xin-rui-bo-ke",
        source: ["/"],
        target: (_, url) =>
          new URL(url).hash === "#/new-podcasts"
            ? "/xyzrank/new-podcasts"
            : null,
      },
    ],
  },
  "yahoo.com": {
    _name: "Yahoo",
    "hk.news": [
      {
        title: "分類新聞",
        docs: "https://docs.rsshub.app/routes/new-media#yahoo",
        source: ["/:category/archive", "/archive"],
        target: "/yahoo/news/hk/:category?",
      },
      {
        title: "新聞來源",
        docs: "https://docs.rsshub.app/routes/new-media#yahoo",
        source: ["/:providerId/archive", "/archive"],
        target: "/yahoo/news/hk/:providerId",
      },
    ],
    "tw.news": [
      {
        title: "分類新聞",
        docs: "https://docs.rsshub.app/routes/new-media#yahoo",
        source: ["/:category/archive", "/archive"],
        target: "/yahoo/news/tw/:category?",
      },
      {
        title: "新聞來源",
        docs: "https://docs.rsshub.app/routes/new-media#yahoo",
        source: ["/:providerId/archive", "/archive"],
        target: "/yahoo/news/tw/:providerId",
      },
    ],
    ".": [
      {
        title: "新闻",
        docs: "https://docs.rsshub.app/routes/new-media#yahoo",
        source: ["/"],
        target: "/yahoo/news/:region/:category?",
      },
    ],
  },
  "yangtzeu.edu.cn": {
    _name: "长江大学",
    ".": [
      {
        title: "动物科学学院",
        docs: "https://docs.rsshub.app/routes/universities#chang-jiang-da-xue-dong-wu-ke-xue-xue-yuan",
        source: ["/:category", "/"],
        target: (params, url) => {
          url = new URL(url)
          const path = /\.edu\.cn(.*?)\.htm/.test(url.href)
            ? url.href.match(/\.edu\.cn(.*?)\.htm/)[1]
            : ""

          return `/yangtzeu/dongke${path}`
        },
      },
    ],
  },
  "yaohuo.me": {
    _name: "妖火",
    ".": [
      {
        title: "首页",
        docs: "https://docs.rsshub.app/routes/new-media#yao-huo-shou-ye",
        source: ["/"],
        target: "/yaohuo",
      },
    ],
  },
  "yicai.com": {
    _name: "第一财经",
    ".": [
      {
        title: "最新",
        docs: "https://docs.rsshub.app/routes/traditional-media#di-yi-cai-jing-zui-xin",
        source: ["/"],
        target: "/yicai/latest",
      },
      {
        title: "头条",
        docs: "https://docs.rsshub.app/routes/traditional-media#di-yi-cai-jing-tou-tiao",
        source: ["/"],
        target: "/yicai/headline",
      },
      {
        title: "VIP 频道",
        docs: "https://docs.rsshub.app/routes/traditional-media#di-yi-cai-jing-vip-pin-dao",
        source: ["/vip/product/:id", "/"],
        target: "/yicai/vip/:id",
      },
      {
        title: "新闻",
        docs: "https://docs.rsshub.app/routes/traditional-media#di-yi-cai-jing-xin-wen",
        source: ["/news/:id", "/news"],
        target: "/yicai/news/:id",
      },
      {
        title: "关注",
        docs: "https://docs.rsshub.app/routes/traditional-media#di-yi-cai-jing-guan-zhu",
        source: ["/feed/:id", "/feed"],
        target: "/yicai/feed/:id",
      },
      {
        title: "视听",
        docs: "https://docs.rsshub.app/routes/traditional-media#di-yi-cai-jing-shi-ting",
        source: ["/video/:id", "/video"],
        target: "/yicai/video/:id",
      },
      {
        title: "正在",
        docs: "https://docs.rsshub.app/routes/traditional-media#di-yi-cai-jing-zheng-zai",
        source: ["/brief"],
        target: "/yicai/brief",
      },
      {
        title: "一财号",
        docs: "https://docs.rsshub.app/routes/traditional-media#di-yi-cai-jing-yi-cai-hao",
        source: ["/author/:id", "/author"],
        target: "/yicai/author/:id",
      },
    ],
  },
  "ymgal.games": {
    _name: "月幕 Galgame",
    ".": [
      {
        title: "全部文章",
        docs: "https://docs.rsshub.app/routes/anime#yue-mu-galgame",
        source: ["/co/article"],
        target: "/ymgal/article/all",
      },
      {
        title: "资讯",
        docs: "https://docs.rsshub.app/routes/anime#yue-mu-galgame",
        source: ["/co/article"],
        target: "/ymgal/article/news",
      },
      {
        title: "专栏",
        docs: "https://docs.rsshub.app/routes/anime#yue-mu-galgame",
        source: ["/co/article"],
        target: "/ymgal/article/column",
      },
      {
        title: "本月新作",
        docs: "https://docs.rsshub.app/routes/anime#yue-mu-galgame",
        source: ["/"],
        target: "/ymgal/game/release",
      },
    ],
  },
  "yoasobi-music.jp": {
    _name: "Yoasobi Official",
    www: [
      {
        title: "News",
        docs: "https://docs.rsshub.app/routes/en/live#yoasobi",
        source: ["/", "/:category"],
        target: "/yoasobi-music/info/:category",
      },
      {
        title: "Biography",
        docs: "https://docs.rsshub.app/routes/en/live#yoasobi",
        source: ["/", "/:category"],
        target: "/yoasobi-music/info/:category",
      },
      {
        title: "Live",
        docs: "https://docs.rsshub.app/routes/en/live#yoasobi",
        source: ["/", "/live"],
        target: "/yoasobi-music/live",
      },
      {
        title: "Media",
        docs: "https://docs.rsshub.app/routes/en/live#yoasobi",
        source: ["/", "/media"],
        target: "/yoasobi-music/media",
      },
    ],
  },
  "yomiuri.co.jp": {
    _name: "読売新聞",
    www: [
      {
        title: "新聞",
        docs: "https://docs.rsshub.app/routes/traditional-media#du-mai-xin-wen",
        source: ["/:category?"],
        target: "/yomiuri/:category?",
      },
    ],
  },
  "yomujp.com": {
    _name: "日本語多読道場",
    ".": [
      {
        title: "等级",
        docs: "https://docs.rsshub.app/zh/routes/reading#ri-ben-yu-duo-du-dao-chang-deng-ji",
        source: ["/", "/:level"],
        target: "/yomujp/:level",
      },
    ],
  },
  "youku.com": {
    _name: "优酷",
    i: [
      {
        title: "订阅作者",
        docs: "https://docs.rsshub.app/routes/multimedia#you-ku",
        source: ["/i/:id"],
        target: "/youku/channel/:id",
      },
    ],
  },
  "youtube.com": {
    _name: "YouTube",
    charts: [
      {
        title: "音乐排行榜",
        docs: "https://docs.rsshub.app/routes/social-media#youtube",
        source: [
          "/charts/:category/:country/*",
          "/charts/:category/:country",
          "/charts/:category",
        ],
        target: (params) =>
          `/youtube/charts/${params.category}${params.country ? params.country : ""}`,
      },
    ],
    www: [
      {
        title: "用户",
        docs: "https://docs.rsshub.app/routes/social-media#youtube",
        source: "/user/:username",
        target: "/youtube/user/:username",
      },
      {
        title: "用户",
        docs: "https://docs.rsshub.app/routes/social-media#youtube",
        source: "/:handle",
        target: (params) =>
          params.handle.startsWith("@") ? `/youtube/user/${params.handle}` : "",
      },
      {
        title: "频道",
        docs: "https://docs.rsshub.app/routes/social-media#youtube",
        source: "/channel/:id",
        target: "/youtube/channel/:id",
      },
      {
        title: "自定义网址",
        docs: "https://docs.rsshub.app/routes/social-media#youtube",
        source: "/c/:id",
        target: "/youtube/c/:id",
      },
      {
        title: "社群",
        docs: "https://docs.rsshub.app/routes/social-media#youtube",
        source: [
          "/channel/:handle/community",
          "/channel/:handle",
          "/:handle/community",
          "/:handle/featured",
          "/:handle",
        ],
        target: (params) =>
          params.handle.startsWith("@") || params.handle.startsWith("UC")
            ? `/youtube/community/${params.handle}`
            : "",
      },
      {
        title: "播放列表",
        docs: "https://docs.rsshub.app/routes/social-media#youtube",
        source: "/playlist",
        target: (params, url) =>
          `/youtube/playlist/${new URL(url).searchParams.get("list")}`,
      },
      {
        title: "订阅列表",
        docs: "https://docs.rsshub.app/routes/social-media#youtube",
        source: ["/feed/subscriptions", "/feed/channels"],
        target: "/youtube/subscriptions",
      },
      {
        title: "Live",
        docs: "https://docs.rsshub.app/routes/live#youtube-live",
        source: "/:handle",
        target: (params) =>
          params.handle.startsWith("@") ? `/youtube/live/${params.handle}` : "",
      },
    ],
  },
  "youzhiyouxing.cn": {
    _name: "有知有行",
    ".": [
      {
        title: "有知 - 全部",
        docs: "https://docs.rsshub.app/routes/finance#you-you-wei-zhi-zhi-you-you-wei-xing-hang-xing-hang-heng-you-you-wei-zhi-zhi-wen-zhang-zhang",
        source: ["/materials"],
        target: "/youzhiyouxing/materials",
      },
      {
        title: "有知 - 知行小酒馆",
        docs: "https://docs.rsshub.app/routes/finance#you-you-wei-zhi-zhi-you-you-wei-xing-hang-xing-hang-heng-you-you-wei-zhi-zhi-wen-zhang-zhang",
        source: ["/materials"],
        target: (_params, url) => {
          if (new URL(url).searchParams.get("column_id") === "4") {
            return "/youzhiyouxing/materials/4"
          }
        },
      },
      {
        title: "有知 - 知行黑板报",
        docs: "https://docs.rsshub.app/routes/finance#you-you-wei-zhi-zhi-you-you-wei-xing-hang-xing-hang-heng-you-you-wei-zhi-zhi-wen-zhang-zhang",
        source: ["/materials"],
        target: (_params, url) => {
          if (new URL(url).searchParams.get("column_id") === "2") {
            return "/youzhiyouxing/materials/2"
          }
        },
      },
      {
        title: "有知 - 无人知晓",
        docs: "https://docs.rsshub.app/routes/finance#you-you-wei-zhi-zhi-you-you-wei-xing-hang-xing-hang-heng-you-you-wei-zhi-zhi-wen-zhang-zhang",
        source: ["/materials"],
        target: (_params, url) => {
          if (new URL(url).searchParams.get("column_id") === "10") {
            return "/youzhiyouxing/materials/10"
          }
        },
      },
      {
        title: "有知 - 孟岩专栏",
        docs: "https://docs.rsshub.app/routes/finance#you-you-wei-zhi-zhi-you-you-wei-xing-hang-xing-hang-heng-you-you-wei-zhi-zhi-wen-zhang-zhang",
        source: ["/materials"],
        target: (_params, url) => {
          if (new URL(url).searchParams.get("column_id") === "1") {
            return "/youzhiyouxing/materials/1"
          }
        },
      },
      {
        title: "有知 - 知行读书会",
        docs: "https://docs.rsshub.app/routes/finance#you-you-wei-zhi-zhi-you-you-wei-xing-hang-xing-hang-heng-you-you-wei-zhi-zhi-wen-zhang-zhang",
        source: ["/materials"],
        target: (_params, url) => {
          if (new URL(url).searchParams.get("column_id") === "3") {
            return "/youzhiyouxing/materials/3"
          }
        },
      },
      {
        title: "有知 - 你好，同路人",
        docs: "https://docs.rsshub.app/routes/finance#you-you-wei-zhi-zhi-you-you-wei-xing-hang-xing-hang-heng-you-you-wei-zhi-zhi-wen-zhang-zhang",
        source: ["/materials"],
        target: (_params, url) => {
          if (new URL(url).searchParams.get("column_id") === "11") {
            return "/youzhiyouxing/materials/11"
          }
        },
      },
    ],
  },
  "yunspe.com": {
    _name: "云奇网",
    ".": [
      {
        title: "微语简报",
        docs: "https://docs.rsshub.app/routes/new-media#wei-yu-jian-bao",
        source: ["/newsflashes/微语简报", "/newsflashes", "/"],
        target: "/yunspe/newsflashes",
      },
    ],
  },
  "yuque.com": {
    _name: "语雀",
    ".": [
      {
        title: "知识库",
        docs: "https://docs.rsshub.app/routes/study#yu-que",
        source: [":name/:book"],
        target: "/yuque/:name/:book",
      },
    ],
  },
  "yxdown.com": {
    _name: "游讯网",
    ".": [
      {
        title: "资讯",
        docs: "https://docs.rsshub.app/routes/game#you-xun-wang",
        source: ["/news/:category", "/news"],
        target: (params) =>
          `/yxdown/news${params.category ? `/${params.category}` : ""}`,
      },
      {
        title: "精彩推荐",
        docs: "https://docs.rsshub.app/routes/game#you-xun-wang",
        source: ["/"],
        target: "/yxdown/recommend",
      },
    ],
  },
  "yxdzqb.com": {
    _name: "游戏打折情报",
    ".": [
      {
        title: "游戏折扣",
        docs: "https://docs.rsshub.app/routes/game#you-xi-da-zhe-qing-bao-you-xi-zhe-kou",
        source: "/",
        target: "/yxdzqb/:type",
      },
    ],
  },
  "yxrb.net": {
    _name: "游戏日报",
    news: [
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/game#you-xi-ri-bao",
        source: ["/:category", "/"],
        target: "/yxrb/:category",
      },
    ],
  },
  "yysub.net": {
    _name: "人人影视",
    ".": [
      {
        title: "影视资讯",
        docs: "https://docs.rsshub.app/routes/multimedia#ren-ren-ying-shi",
        source: "/article",
        target: (_params, url) =>
          `/yyets/article${new URL(url).searchParams.has("type") ? "/" + new URL(url).searchParams.get("type") : ""}`,
      },
      {
        title: "今日播出",
        docs: "https://docs.rsshub.app/routes/multimedia#ren-ren-ying-shi",
        source: ["/tv/schedule", "/"],
        target: "/yyets/today",
      },
    ],
  },
  "yystv.cn": {
    _name: "游研社",
    ".": [
      {
        title: "推游",
        docs: "https://docs.rsshub.app/routes/game#you-yan-she",
        source: "/b/recommend",
        target: "/yystv/category/recommend",
      },
      {
        title: "游戏史",
        docs: "https://docs.rsshub.app/routes/game#you-yan-she",
        source: "/b/history",
        target: "/yystv/category/history",
      },
      {
        title: "大事件",
        docs: "https://docs.rsshub.app/routes/game#you-yan-she",
        source: "/b/big",
        target: "/yystv/category/big",
      },
      {
        title: "文化",
        docs: "https://docs.rsshub.app/routes/game#you-yan-she",
        source: "/b/culture",
        target: "/yystv/category/culture",
      },
      {
        title: "趣闻",
        docs: "https://docs.rsshub.app/routes/game#you-yan-she",
        source: "/b/news",
        target: "/yystv/category/news",
      },
      {
        title: "经典回顾",
        docs: "https://docs.rsshub.app/routes/game#you-yan-she",
        source: "/b/retro",
        target: "/yystv/category/retro",
      },
      {
        title: "全部文章",
        docs: "https://docs.rsshub.app/routes/game#you-yan-she",
        source: "/docs",
        target: "/yystv/docs",
      },
    ],
  },
  "zagg.com": {
    _name: "New Arrivals",
    ".": [
      {
        title: "Zagg - New Arrivals",
        docs: "https://docs.rsshub.app/routes/shopping#zagg",
        source: ["/en_us/new-arrivals"],
        target: (_, url) => {
          const queryString = url.split("?")[1]
          return `/zagg/new-arrivals/${queryString}`
        },
      },
    ],
  },
  "myzaker.com": {
    _name: "ZAKER",
    ".": [
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/new-media#zaker",
        source: ["/:type/:id"],
        target: "/zaker/:type/:id",
      },
      {
        title: "精读",
        docs: "https://docs.rsshub.app/routes/new-media#zaker",
        source: ["/"],
        target: "/zaker/focusread",
      },
    ],
  },
  "zaobao.com": {
    _name: "联合早报",
    www: [
      {
        title: "新闻-新加坡",
        docs: "https://docs.rsshub.app/routes/traditional-media#lian-he-zao-bao-xin-wen",
        source: ["/", "/news", "/news/singapore"],
        target: "/zaobao/znews/singapore",
      },
      {
        title: "新闻-中国",
        docs: "https://docs.rsshub.app/routes/traditional-media#lian-he-zao-bao-xin-wen",
        source: ["/", "/news", "/news/china"],
        target: "/zaobao/znews/china",
      },
      {
        title: "新闻-国际",
        docs: "https://docs.rsshub.app/routes/traditional-media#lian-he-zao-bao-xin-wen",
        source: ["/", "/news", "/news/world"],
        target: "/zaobao/znews/world",
      },
    ],
  },
  "zaobao.com.sg": {
    _name: "联合早报",
    www: [
      {
        title: "新闻-新加坡",
        docs: "https://docs.rsshub.app/routes/traditional-media#lian-he-zao-bao-xin-wen",
        source: ["/", "/news", "/news/singapore"],
        target: "/zaobao/znews/singapore",
      },
      {
        title: "新闻-中国",
        docs: "https://docs.rsshub.app/routes/traditional-media#lian-he-zao-bao-xin-wen",
        source: ["/", "/news", "/news/china"],
        target: "/zaobao/znews/china",
      },
      {
        title: "新闻-国际",
        docs: "https://docs.rsshub.app/routes/traditional-media#lian-he-zao-bao-xin-wen",
        source: ["/", "/news", "/news/world"],
        target: "/zaobao/znews/world",
      },
    ],
  },
  "zaozao.run": {
    _name: "前端早早聊",
    www: [
      {
        title: "文章",
        docs: "https://docs.rsshub.app/routes/programming#qian-duan-zao-zao-liao",
        source: ["/article/:type"],
        target: "/zaozao/article/:type",
      },
    ],
  },
  "zcmu.edu.cn": {
    _name: "浙江中医药大学",
    jwc: [
      {
        title: "教务处 - 教务管理",
        docs: "https://docs.rsshub.app/routes/university#zhe-jiang-zhong-yi-yao-da-xue",
        source: "/jwgl",
        target: "/zcmu/jwc/0",
      },
      {
        title: "教务处 - 成绩管理",
        docs: "https://docs.rsshub.app/routes/university#zhe-jiang-zhong-yi-yao-da-xue",
        source: "/jwgl/cjgl",
        target: "/zcmu/jwc/1",
      },
      {
        title: "教务处 - 学籍管理",
        docs: "https://docs.rsshub.app/routes/university#zhe-jiang-zhong-yi-yao-da-xue",
        source: "/jwgl/xjgl",
        target: "/zcmu/jwc/2",
      },
      {
        title: "教务处 - 考试管理",
        docs: "https://docs.rsshub.app/routes/university#zhe-jiang-zhong-yi-yao-da-xue",
        source: "/jwgl/ksgl",
        target: "/zcmu/jwc/3",
      },
      {
        title: "教务处 - 选课管理",
        docs: "https://docs.rsshub.app/routes/university#zhe-jiang-zhong-yi-yao-da-xue",
        source: "/jwgl/xkgl",
        target: "/zcmu/jwc/4",
      },
      {
        title: "教务处 - 排课管理",
        docs: "https://docs.rsshub.app/routes/university#zhe-jiang-zhong-yi-yao-da-xue",
        source: "/jwgl/pkgl",
        target: "/zcmu/jwc/5",
      },
    ],
    yxy: [
      {
        title: "药学院 - 通知公告",
        docs: "https://docs.rsshub.app/routes/university#zhe-jiang-zhong-yi-yao-da-xue",
        source: "index/tzgg",
        target: "/zcmu/yxy/0",
      },
      {
        title: "药学院 - 评优评奖",
        docs: "https://docs.rsshub.app/routes/university#zhe-jiang-zhong-yi-yao-da-xue",
        source: "xsgz/pypj",
        target: "/zcmu/yxy/1",
      },
      {
        title: "药学院 - 文明规范",
        docs: "https://docs.rsshub.app/routes/university#zhe-jiang-zhong-yi-yao-da-xue",
        source: "xsgz/wmgf",
        target: "/zcmu/yxy/2",
      },
      {
        title: "药学院 - 创新创业",
        docs: "https://docs.rsshub.app/routes/university#zhe-jiang-zhong-yi-yao-da-xue",
        source: "xsgz/cxcy",
        target: "/zcmu/yxy/3",
      },
      {
        title: "药学院 - 校园文化",
        docs: "https://docs.rsshub.app/routes/university#zhe-jiang-zhong-yi-yao-da-xue",
        source: "xsgz/xywh",
        target: "/zcmu/yxy/4",
      },
      {
        title: "药学院 - 心理驿站",
        docs: "https://docs.rsshub.app/routes/university#zhe-jiang-zhong-yi-yao-da-xue",
        source: "xsgz/xlyz",
        target: "/zcmu/yxy/5",
      },
      {
        title: "药学院 - 日常通知",
        docs: "https://docs.rsshub.app/routes/university#zhe-jiang-zhong-yi-yao-da-xue",
        source: "xsgz/rctz",
        target: "/zcmu/yxy/6",
      },
    ],
  },
  "zcool.com.cn": {
    _name: "站酷",
    www: [
      {
        title: "发现",
        docs: "https://docs.rsshub.app/routes/design#zhan-ku",
        source: ["/discover", "/"],
        target: (params, url) =>
          `/zcool/discover/${new URL(url).toString().split("?").pop()}`,
      },
      {
        title: "发现 - 精选 - 全部推荐",
        docs: "https://docs.rsshub.app/routes/design#zhan-ku",
        source: "/",
        target: "/zcool/discover/all",
      },
      {
        title: "发现 - 精选 - 首页推荐",
        docs: "https://docs.rsshub.app/routes/design#zhan-ku",
        source: "/",
        target: "/zcool/discover/home",
      },
      {
        title: "发现 - 精选 - 编辑精选",
        docs: "https://docs.rsshub.app/routes/design#zhan-ku",
        source: "/",
        target: "/zcool/discover/home",
      },
      {
        title: "发现 - 精选 - 文章 - 编辑精选",
        docs: "https://docs.rsshub.app/routes/design#zhan-ku",
        source: "/",
        target: "/zcool/discover/article",
      },
      {
        title: "作品榜单",
        docs: "https://docs.rsshub.app/routes/design#zhan-ku",
        source: "/",
        target: "/zcool/top/design",
      },
      {
        title: "文章榜单",
        docs: "https://docs.rsshub.app/routes/design#zhan-ku",
        source: "/",
        target: "/zcool/top/article",
      },
      {
        title: "用户作品",
        docs: "https://docs.rsshub.app/routes/design#zhan-ku",
        source: ["/u/:id"],
        target: "/zcool/user/:id",
      },
    ],
  },
  "zhangyoubao.com": {
    _name: "掌游宝",
    mobile: [
      {
        title: "推荐",
        docs: "https://docs.rsshub.app/routes/game#zhang-you-bao-tui-jian",
        source: ["/:category/"],
        target: "/zhangyoubao/:category",
      },
    ],
  },
  "zhibo8.cc": {
    _name: "直播吧",
    ".": [
      {
        title: "录像",
        docs: "https://docs.rsshub.app/routes/multimedia#zhi-bo-ba",
        source: ["/:category/luxiang.htm"],
        target: "/zhibo8/luxiang/:category",
      },
    ],
    bbs: [
      {
        title: "子论坛",
        docs: "https://docs.rsshub.app/routes/bbs#zhi-bo-ba",
        source: ["/"],
        target: (_params, url) =>
          `/zhibo8/forum/${new URL(url).searchParams.get("fid")}`,
      },
      {
        title: "回帖",
        docs: "https://docs.rsshub.app/routes/bbs#zhi-bo-ba",
        source: ["/"],
        target: (_params, url) =>
          `/zhibo8/post/${new URL(url).searchParams.get("tid")}`,
      },
    ],
    news: [
      {
        title: "滚动新闻",
        docs: "https://docs.rsshub.app/routes/bbs#zhi-bo-ba",
        source: ["/:category"],
        target: "/zhibo8/more/:category",
      },
    ],
  },
  "zhitongcaijing.com": {
    _name: "智通财经",
    ".": [
      {
        title: "资讯",
        docs: "https://docs.rsshub.app/routes/finance#zhi-tong-cai-jing-zi-xun",
        source: ["/:category", "/"],
        target: (params, url) => {
          const id = new URL(url).toString().match(/\/(\w+)\.html/)[1]
          const category = new URL(url).searchParams.get("category_key")
          return `/zhitongcaijing/${id}${category ? `/${category}` : ""}`
        },
      },
    ],
  },
  "zhiy.cc": {
    _name: "知园",
    ".": [
      {
        title: "Newsletter",
        docs: "https://docs.rsshub.app/routes/new-media#zhi-yuan",
        source: ["/:author"],
        target: "/zhiy/letters/:author",
      },
      {
        title: "笔记",
        docs: "https://docs.rsshub.app/routes/new-media#zhi-yuan",
        source: ["/:author"],
        target: "/zhiy/posts/:author",
      },
    ],
  },
  "zhubai.love": {
    _name: "竹白",
    ".": [
      {
        title: "文章",
        docs: "https://docs.rsshub.app/routes/blog#zhu-bai",
        source: ["/"],
      },
    ],
    analy: [
      {
        title: "上周热门 TOP 20",
        docs: "https://docs.rsshub.app/routes/blog#zhu-bai",
        source: ["/"],
        target: "/zhubai/top20",
      },
    ],
  },
  "zimuxia.cn": {
    _name: "FIX 字幕侠",
    ".": [
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/multimedia#fix-zi-mu-xia",
        source: ["/我们的作品"],
        target: (params, url) =>
          `/zimuxia/${new URL(url).searchParams.get("cat")}`,
      },
      {
        title: "剧集",
        docs: "https://docs.rsshub.app/routes/multimedia#fix-zi-mu-xia",
        source: ["/portfolio/:id"],
        target: "/zimuxia/portfolio/:id",
      },
    ],
  },
  "zjgtjy.cn": {
    _name: "浙江省土地使用权网上交易系统",
    ".": [
      {
        title: "全部更新",
        docs: "https://docs.rsshub.app/routes/government",
        source: "/",
        target: "/zjgtjy/all",
      },
      {
        title: "挂牌公告",
        docs: "https://docs.rsshub.app/routes/government",
        source: "/",
        target: "/zjgtjy/gpgg",
      },
      {
        title: "拍卖公告",
        docs: "https://docs.rsshub.app/routes/government",
        source: "/",
        target: "/zjgtjy/pmgg",
      },
      {
        title: "补充公告",
        docs: "https://docs.rsshub.app/routes/government",
        source: "/",
        target: "/zjgtjy/bcgg",
      },
    ],
  },
  "zjol.com.cn": {
    _name: "浙江在线",
    ".": [
      {
        title: "浙报集团系列报刊",
        docs: "https://docs.rsshub.app/routes/traditional-media#zhe-jiang-zai-xian-zhe-bao-ji-tuan-xi-lie-bao-kan",
        source: ["/"],
        target: (params, url) =>
          `/zjol/paper/${new URL(url).toString().match(/\/\/(.*?)\.zjol/)[1]}`,
      },
    ],
    zjrb: [
      {
        title: "浙江日报",
        docs: "https://docs.rsshub.app/routes/traditional-media#zhe-jiang-zai-xian-zhe-bao-ji-tuan-xi-lie-bao-kan",
        source: ["/"],
        target: "/zjol/paper/zjrb",
      },
    ],
    qjwb: [
      {
        title: "钱江晚报",
        docs: "https://docs.rsshub.app/routes/traditional-media#zhe-jiang-zai-xian-zhe-bao-ji-tuan-xi-lie-bao-kan",
        source: ["/"],
        target: "/zjol/paper/qjwb",
      },
    ],
    msb: [
      {
        title: "美术报",
        docs: "https://docs.rsshub.app/routes/traditional-media#zhe-jiang-zai-xian-zhe-bao-ji-tuan-xi-lie-bao-kan",
        source: ["/"],
        target: "/zjol/paper/msb",
      },
    ],
    zjlnb: [
      {
        title: "浙江老年报",
        docs: "https://docs.rsshub.app/routes/traditional-media#zhe-jiang-zai-xian-zhe-bao-ji-tuan-xi-lie-bao-kan",
        source: ["/"],
        target: "/zjol/paper/zjlnb",
      },
    ],
    zjfzb: [
      {
        title: "浙江法制报",
        docs: "https://docs.rsshub.app/routes/traditional-media#zhe-jiang-zai-xian-zhe-bao-ji-tuan-xi-lie-bao-kan",
        source: ["/"],
        target: "/zjol/paper/zjfzb",
      },
    ],
    jnyb: [
      {
        title: "江南游报",
        docs: "https://docs.rsshub.app/routes/traditional-media#zhe-jiang-zai-xian-zhe-bao-ji-tuan-xi-lie-bao-kan",
        source: ["/"],
        target: "/zjol/paper/jnyb",
      },
    ],
  },
  "zju.edu.cn": {
    _name: "浙江大学",
    physics: [
      {
        title: "物理学院",
        docs: "https://docs.rsshub.app/routes/university#zhe-jiang-da-xue",
        source: ["/*path"],
        target: (params) => {
          let type
          switch (params.path) {
            case "39060/list.htm":
              type = "1"
              break
            case "39070/list.htm":
              type = "2"
              break
            case "39079/list.htm":
              type = "3"
              break
            default:
              type = "1"
              break
          }
          return `/zju/physics/${type}`
        },
      },
    ],
    www: [
      {
        title: "普通栏目",
        docs: "https://docs.rsshub.app/routes/university#zhe-jiang-da-xue",
        source: ["/*path"],
        target: (params) => `/zju/list/${params.path.replace("/list.htm", "")}`,
      },
    ],
    "www.career": [
      {
        title: "就业服务平台",
        docs: "https://docs.rsshub.app/routes/university#zhe-jiang-da-xue",
        source: ["/"],
        target: "/zju/career/1",
      },
    ],
    "www.cst": [
      {
        title: "软件学院 - 全部通知",
        docs: "https://docs.rsshub.app/routes/university#zhe-jiang-da-xue",
        source: ["/*"],
        target: "/zju/cst/0",
      },
      {
        title: "软件学院 - 招生信息",
        docs: "https://docs.rsshub.app/routes/university#zhe-jiang-da-xue",
        source: "/32178/list.htm",
        target: "/zju/cst/1",
      },
      {
        title: "软件学院 - 教务管理",
        docs: "https://docs.rsshub.app/routes/university#zhe-jiang-da-xue",
        source: "/36216/list.htm",
        target: "/zju/cst/2",
      },
      {
        title: "软件学院 - 论文管理",
        docs: "https://docs.rsshub.app/routes/university#zhe-jiang-da-xue",
        source: "/36217/list.htm",
        target: "/zju/cst/3",
      },
      {
        title: "软件学院 - 思政工作",
        docs: "https://docs.rsshub.app/routes/university#zhe-jiang-da-xue",
        source: "/36192/list.htm",
        target: "/zju/cst/4",
      },
      {
        title: "软件学院 - 评奖评优",
        docs: "https://docs.rsshub.app/routes/university#zhe-jiang-da-xue",
        source: "/36228/list.htm",
        target: "/zju/cst/5",
      },
      {
        title: "软件学院 - 实习就业",
        docs: "https://docs.rsshub.app/routes/university#zhe-jiang-da-xue",
        source: "/36193/list.htm",
        target: "/zju/cst/6",
      },
      {
        title: "软件学院 - 国际实习",
        docs: "https://docs.rsshub.app/routes/university#zhe-jiang-da-xue",
        source: "/36235/list.htm",
        target: "/zju/cst/7",
      },
      {
        title: "软件学院 - 国内合作科研",
        docs: "https://docs.rsshub.app/routes/university#zhe-jiang-da-xue",
        source: "/36194/list.htm",
        target: "/zju/cst/8",
      },
      {
        title: "软件学院 - 国际合作科研",
        docs: "https://docs.rsshub.app/routes/university#zhe-jiang-da-xue",
        source: "/36246/list.htm",
        target: "/zju/cst/9",
      },
    ],
    "www.grs": [
      {
        title: "研究生院",
        docs: "https://docs.rsshub.app/routes/university#zhe-jiang-da-xue",
        source: ["/*path", "/"],
        target: (params) => {
          let type
          switch (params.path) {
            case "qbgg/list.htm":
              type = 1
              break
            case "jxgl/list.htm":
              type = 2
              break
            case "glzz/list.htm":
              type = 3
              break
            case "xkjs/list.htm":
              type = 4
              break
            case "hwjl/list.htm":
              type = 5
              break
            default:
              type = 1
              break
          }
          return `/zju/grs/${type}`
        },
      },
    ],
  },
  "zjuvag.org": {
    _name: "浙江大学可视分析小组",
    ".": [
      {
        title: "博客",
        docs: "https://docs.rsshub.app/routes/blog#zhe-jiang-da-xue-ke-shi-fen-xi-xiao-zu",
      },
    ],
  },
  "zodgame.xyz": {
    _name: "zodgame",
    ".": [
      {
        title: "论坛版块",
        docs: "https://docs.rsshub.app/routes/bbs#zodgame",
        source: "/forum.php",
        target: (params, url) => {
          const fid = new URL(url).searchParams.get("fid")
          if (fid) {
            return `/zodgame/forum/${fid}`
          }
        },
      },
    ],
  },
  "zoo.team": {
    _name: "政采云前端技术团队",
    weekly: [
      {
        title: "小报",
        docs: "https://docs.rsshub.app/routes/blog#zheng-cai-yun-qian-duan-ji-shu-tuan-dui",
        source: "/",
        target: "/zooTeam/weekly",
      },
    ],
    www: [
      {
        title: "博客",
        docs: "https://docs.rsshub.app/routes/blog#zheng-cai-yun-qian-duan-ji-shu-tuan-dui",
        source: "/",
        target: "/zooTeam/blog",
      },
    ],
  },
  "zotero.org": {
    _name: "Zotero",
    ".": [
      {
        title: "Version History",
        docs: "https://docs.rsshub.app/routes/program-update#zotero",
        source: ["/", "/support/changelog"],
        target: "/zotero/versions",
      },
    ],
  },
  "zuel.edu.cn": {
    _name: "中南财经政法大学",
    wap: [
      {
        title: "通知公告",
        docs: "https://docs.rsshub.app/routes/univeristy#zhong-nan-cai-jing-zheng-fa-da-xue-tong-zhi-gong-gao",
        source: ["/", "/notice/list.htm"],
        target: "/zuel/notice",
      },
    ],
  },
  "zuvio.com.tw": {
    _name: "Zuvio",
    irs: [
      {
        title: "校園話題",
        docs: "https://docs.rsshub.app/routes/bbs#zuvio",
        source: [
          "/student5/chickenM/articles/:board",
          "/student5/chickenM/articles",
        ],
        target: (params) =>
          `/zuvio/student5${params.board ? `/${params.board}` : ""}`,
      },
    ],
  },
  "zuzhirenshi.com": {
    _name: "组织人事报",
    ".": [
      {
        title: "日报",
        docs: "https://docs.rsshub.app/routes/traditional-media#zu-zhi-ren-shi-bao",
        source: ["/dianzibao/*"],
        target: "/zuzhirenshi",
      },
    ],
  },
  "zyshow.net": {
    _name: "综艺秀",
    ".": [
      {
        title: "综艺",
        docs: "https://docs.rsshub.app/routes/multimedia#zong-yi-xiu-zong-yi",
        source: ["/:region/:id", "/:id", "/"],
        target: (params, url) =>
          `/zyshow/${new URL(url)
            .toString()
            .split(/zyshow\.net/)
            .pop()}`,
      },
    ],
  },
  "zyw.asia": {
    _name: "zyw",
    hot: [
      {
        title: "今日热榜",
        docs: "https://docs.rsshub.app/routes/new-media#zyw-jin-ri-re-bang",
        source: ["/"],
        target: (params, url) => {
          const matches = new URL(url).href.match(/type=(\w+)/)
          return `/zyw/hot${matches ? `/${matches[1]}` : ""}`
        },
      },
    ],
  },
  "algocasts.io": {
    _name: "AlgoCasts",
    ".": [
      {
        title: "视频更新",
        docs: "https://docs.rsshub.app/routes/programming#algocasts",
        source: "/episodes",
        target: "/algocasts",
      },
    ],
  },
  "soulapp.cn": {
    _name: "Soul",
    ".": [
      {
        title: "瞬间更新",
        docs: "https://docs.rsshub.app/routes/social-media#soul",
      },
    ],
  },
  "anime1.me": {
    _name: "Anime1",
    ".": [
      {
        title: "動畫",
        docs: "https://docs.rsshub.app/routes/anime#anime1",
        source: "/category/:time/:name",
        target: "/anime1/anime/:time/:name",
      },
      {
        title: "搜尋",
        docs: "https://docs.rsshub.app/routes/anime#anime1",
        source: "/",
        target: (params, url) => {
          const keyword = new URL(url).searchParams.get("s")
          return keyword ? `/anime1/search/${keyword}` : ""
        },
      },
    ],
  },
  "swufe.edu.cn": {
    _name: "西南财经大学",
    it: [
      {
        title: "经济信息工程学院 - 通知公告",
        docs: "https://docs.rsshub.app/routes/university#xi-nan-cai-jing-da-xue",
        source: "/index/tzgg.htm",
        target: "/swufe/seie/tzgg",
      },
      {
        title: "经济信息工程学院 - 学院新闻",
        docs: "https://docs.rsshub.app/routes/university#xi-nan-cai-jing-da-xue",
        source: "/index/xyxw.htm",
        target: "/swufe/seie/xyxw",
      },
    ],
  },
  "ishuhui.com": {
    _name: "鼠绘漫画",
    www: [
      {
        title: "鼠绘漫画",
        docs: "https://docs.rsshub.app/routes/anime#shu-hui-man-hua",
        source: "/comics/anime/:id",
        target: "/shuhui/comics/:id",
      },
    ],
  },
  "www.chicagotribune.com": {
    _name: "Chicago Tribune",
    www: [
      {
        title: "Chicago Tribune",
        docs: "https://docs.rsshub.app/routes/traditional_media#chicago-tribune",
        source: "/",
      },
    ],
  },
  "haimaoba.com": {
    _name: "海猫吧",
    www: [
      {
        title: "漫画更新",
        docs: "https://docs.rsshub.app/routes/anime#hai-mao-ba",
        source: "/catalog/:id",
        target: "/haimaoba/:id",
      },
    ],
  },
  "pgyer.com": {
    _name: "蒲公英应用分发",
    www: [
      {
        title: "app更新",
        docs: "https://docs.rsshub.app/routes/program-update#pu-gong-ying-ying-yong-fen-fa",
        source: "/:app",
        target: "/pgyer/:app",
      },
    ],
  },
  "wineyun.com": {
    _name: "酒云网",
    www: [
      {
        title: "最新商品",
        docs: "https://docs.rsshub.app/routes/other#jiu-yun-wang",
        source: ["/:category"],
        target: "/wineyun/:category",
      },
    ],
  },
  "playstation.com": {
    _name: "PlayStation",
    store: [
      {
        title: "游戏列表",
        docs: "https://docs.rsshub.app/routes/game#playstation",
        source: "/zh-hans-hk/grid/:id/:page",
        target: "/ps/list/:id",
      },
      {
        title: "折扣|价格",
        docs: "https://docs.rsshub.app/routes/game#playstation",
        source: ["/:lang/product/:gridName"],
        target: "/ps/:lang/product/:gridName",
      },
    ],
    www: [
      {
        title: "用户奖杯",
        docs: "https://docs.rsshub.app/routes/game#playstation",
      },
      {
        title: "系统更新纪录",
        docs: "https://docs.rsshub.app/routes/game#playstation",
      },
    ],
  },
  "monsterhunter.com": {
    _name: "怪物猎人世界",
    www: [
      {
        title: "更新情报",
        docs: "https://docs.rsshub.app/routes/game#guai-wu-lie-ren-shi-jie",
        source: ["", "/*tpath"],
        target: "/mhw/update",
      },
      {
        title: "最新消息",
        docs: "https://docs.rsshub.app/routes/game#guai-wu-lie-ren-shi-jie",
        source: ["", "/*tpath"],
        target: "/mhw/news",
      },
    ],
  },
  "vgtime.com": {
    _name: "游戏时光",
    www: [
      {
        title: "新闻",
        docs: "https://docs.rsshub.app/routes/game#you-xi-shi-guang",
        source: "/topic/index.jhtml",
        target: "/vgtime/news",
      },
      {
        title: "游戏发售表",
        docs: "https://docs.rsshub.app/routes/game#you-xi-shi-guang",
        source: "/game/release.jhtml",
        target: "/vgtime/release",
      },
      {
        title: "关键词资讯",
        docs: "https://docs.rsshub.app/routes/game#you-xi-shi-guang",
        source: "/search/list.jhtml",
        target: (params, url) =>
          `/vgtime/keyword/${new URL(url).searchParams.get("keyword")}`,
      },
    ],
  },
  "bing.com": {
    _name: "Bing",
    www: [
      {
        title: "每日壁纸",
        docs: "https://docs.rsshub.app/routes/picture#bing-bi-zhi",
        source: "",
        target: "/bing",
      },
    ],
  },
  "wegene.com": {
    _name: "WeGene",
    www: [
      {
        title: "最近更新",
        docs: "https://docs.rsshub.app/routes/other#wegene",
        source: "",
        target: "/wegene/newest",
      },
      {
        title: "栏目",
        docs: "https://docs.rsshub.app/routes/other#wegene",
        source: "/crowdsourcing",
        target: "/wegene/column/all/all",
      },
    ],
  },
  "3ycy.com": {
    _name: "三界异次元",
    www: [
      {
        title: "最近更新",
        docs: "https://docs.rsshub.app/routes/anime#san-jie-yi-ci-yuan",
        source: "/",
        target: "/3ycy/home",
      },
    ],
  },
  "emi-nitta.net": {
    _name: "Emi Nitta",
    ".": [
      {
        title: "最近更新",
        docs: "https://docs.rsshub.app/routes/other#xin-tian-hui-hai-guan-fang-wang-zhan",
        source: "/updates",
        target: "/emi-nitta/updates",
      },
      {
        title: "新闻",
        docs: "https://docs.rsshub.app/routes/other#xin-tian-hui-hai-guan-fang-wang-zhan",
        source: "/contents/news",
        target: "/emi-nitta/news",
      },
    ],
  },
  "alter-shanghai.cn": {
    _name: "Alter",
    ".": [
      {
        title: "新闻",
        docs: "https://docs.rsshub.app/routes/shopping#alter-zhong-guo",
        source: "/cn/news.html",
        target: "/alter-cn/news",
      },
    ],
  },
  "itslide.com": {
    _name: "ITSlide",
    www: [
      {
        title: "最新",
        docs: "https://docs.rsshub.app/routes/programming#itslide",
        source: "/*",
        target: "/itslide/new",
      },
    ],
  },
  "leboncoin.fr": {
    _name: "leboncoin",
    www: [
      {
        title: "ads",
        docs: "https://docs.rsshub.app/routes/shopping#leboncoin",
        source: "/recherche",
        target: (params, url) => "/leboncoin/ad/" + url.split("?")[1],
      },
    ],
  },
  "yuancheng.work": {
    _name: "远程.work",
    ".": [
      {
        title: "招聘信息",
        docs: "https://docs.rsshub.app/routes/other#yuan-cheng-work",
        source: "/:caty",
        target: (params, url) => {
          if (!url) {
            return "/remote-work"
          }
          return "/remote-work/" + /\w+-(\w+)-\w+/.exec(url)[1]
        },
      },
    ],
  },
  "chinatimes.com": {
    _name: "中時電子報",
    www: [
      {
        title: "新聞",
        docs: "https://docs.rsshub.app/routes/traditional-media#zhong-shi-dian-zi-bao",
        source: "/:caty",
        target: (params) => "/chinatimes/" + params.caty,
      },
    ],
  },
  "govopendata.com": {
    _name: "新闻联播文字版",
    cn: [
      {
        title: "新闻联播文字版",
        docs: "https://docs.rsshub.app/routes/traditional-media#xin-wen-lian-bo-wen-zi-ban",
        source: "/xinwenlianbo",
        target: "/xinwenlianbo/index",
      },
    ],
  },
  "steampowered.com": {
    _name: "Steam",
    store: [
      {
        title: "search",
        docs: "https://docs.rsshub.app/routes/game#steam",
        source: "/search/",
        target: (params, url) => `/steam/search/${new URL(url).searchParams}`,
      },
    ],
  },
  "xiaomi.cn": {
    _name: "小米社区",
    www: [
      {
        title: "圈子",
        docs: "https://docs.rsshub.app/routes/bbs#xiao-mi-she-qu",
        source: "/board/:boardId",
        target: "/mi/bbs/board/:boardId",
      },
    ],
  },
  "suzhou.gov.cn": {
    _name: "苏州市政府",
    www: [
      {
        title: "政府新闻",
        docs: "https://docs.rsshub.app/routes/government#su-zhou-shi-ren-min-zheng-fu",
        source: "/szsrmzf/:uid/nav_list.shtml",
        target: "/gov/suzhou/news/:uid",
      },
    ],
  },
  "mqube.net": {
    _name: "MQube",
    www: [
      {
        title: "全站最近更新",
        docs: "https://docs.rsshub.app/routes/multimedia#mqube",
        source: "/",
        target: "/mqube/latest",
      },
      {
        title: "全站每日排行",
        docs: "https://docs.rsshub.app/routes/multimedia#mqube",
        source: "/",
        target: "/mqube/top",
      },
      {
        title: "个人最近更新",
        docs: "https://docs.rsshub.app/routes/multimedia#mqube",
        source: "/user/:user",
        target: "/mqube/user/:user",
      },
      {
        title: "标签最近更新",
        docs: "https://docs.rsshub.app/routes/multimedia#mqube",
        source: "/search/tag/:tag",
        target: "/mqube/tag/:tag",
      },
    ],
  },
  "last.fm": {
    _name: "Last.fm",
    www: [
      {
        title: "用户播放记录",
        docs: "https://docs.rsshub.app/routes/multimedia#last-fm",
        source: ["/user/:user", "/user/:user/*"],
        target: "/lastfm/recent/:user",
      },
      {
        title: "用户 Love 记录",
        docs: "https://docs.rsshub.app/routes/multimedia#last-fm",
        source: ["/user/:user", "/user/:user/*"],
        target: "/lastfm/loved/:user",
      },
      {
        title: "站内 Top 榜单",
        docs: "https://docs.rsshub.app/routes/multimedia#last-fm",
        source: "/charts",
        target: "/lastfm/top",
      },
    ],
  },
  "ddrk.me": {
    _name: "低端影视",
    www: [
      {
        title: "首页",
        docs: "https://docs.rsshub.app/routes/multimedia#di-duan-ying-shi",
        source: "/",
        target: "/ddrk/index",
      },
      {
        title: "标签",
        docs: "https://docs.rsshub.app/routes/multimedia#di-duan-ying-shi",
        source: "/tag/:tag",
        target: "/ddrk/tag/:tag",
      },
      {
        title: "分类",
        docs: "https://docs.rsshub.app/routes/multimedia#di-duan-ying-shi",
        source: ["/category/:category", "/category/:uplevel/:category"],
        target: "/ddrk/category/:category",
      },
      {
        title: "影视剧集更新",
        docs: "https://docs.rsshub.app/routes/multimedia#di-duan-ying-shi",
        source: ["/:name", "/:name/:season"],
        target: (params) => {
          if (
            params.name !== "category" &&
            params.name !== "tag" &&
            params.name !== "ddrklogin" &&
            params.name !== "about" &&
            params.name !== "deleted"
          ) {
            return `/ddrk/update/${params.name}${params.season ? "/" + params.season : ""}`
          }
        },
      },
    ],
  },
  "hackerone.com": {
    _name: "HackerOne",
    ".": [
      {
        title: "HackerOne Hacker Activity",
        docs: "https://docs.rsshub.app/routes/other#hackerone-hacker-activity",
        source: "/hacktivity",
        target: "/hackerone/hacktivity",
      },
    ],
  },
  "cowlevel.net": {
    _name: "奶牛关",
    ".": [
      {
        title: "元素文章",
        docs: "https://docs.rsshub.app/routes/game#nai-niu-guan",
        source: ["/element/:id", "/element/:id/article"],
        target: "/cowlevel/element/:id",
      },
    ],
  },
  "ynu.edu.cn": {
    _name: "云南大学",
    home: [
      {
        title: "官网消息通告",
        docs: "https://docs.rsshub.app/routes/university#yun-nan-da-xue",
        source: "/tzgg.htm",
        target: "/ynu/home",
      },
    ],
    jwc: [
      {
        title: "教务处教务科通知",
        docs: "https://docs.rsshub.app/routes/university#yun-nan-da-xue",
        source: "/*",
        target: "/jwc/1",
      },
      {
        title: "教务处学籍科通知",
        docs: "https://docs.rsshub.app/routes/university#yun-nan-da-xue",
        source: "/*",
        target: "/jwc/2",
      },
      {
        title: "教务处教学研究科通知",
        docs: "https://docs.rsshub.app/routes/university#yun-nan-da-xue",
        source: "/*",
        target: "/jwc/3",
      },
      {
        title: "教务处实践科学科通知",
        docs: "https://docs.rsshub.app/routes/university#yun-nan-da-xue",
        source: "/*",
        target: "/jwc/4",
      },
    ],
    grs: [
      {
        title: "研究生院通知",
        docs: "https://docs.rsshub.app/routes/university#yun-nan-da-xue",
        source: "/*",
        target: "",
      },
    ],
  },
  "gongxue.cn": {
    _name: "工学网",
    ".": [
      {
        title: "要闻",
        docs: "https://docs.rsshub.app/routes/university#ha-er-bin-gong-cheng-da-xue",
        source: "/*",
        target: "/heu/gongxue/yw",
      },
      {
        title: "时讯",
        docs: "https://docs.rsshub.app/routes/university#ha-er-bin-gong-cheng-da-xue",
        source: "/*",
        target: "/heu/gongxue/sx",
      },
    ],
  },
  "matters.news": {
    _name: "Matters",
    ".": [
      {
        title: "最新排序",
        docs: "https://docs.rsshub.app/routes/new-media#matters",
        source: "",
        target: "/matters/latest",
      },
      {
        title: "标签",
        docs: "https://docs.rsshub.app/routes/new-media#matters",
        source: "/tags/:tid",
        target: "/matters/tags/:tid",
      },
      {
        title: "作者",
        docs: "https://docs.rsshub.app/routes/new-media#matters",
        source: ["/:id", "/:id/comments"],
        target: (params) => {
          const uid = params.id.replace("@", "")
          return uid ? `/matters/author/${uid}` : ""
        },
      },
    ],
  },
  "zhaishuyuan.com": {
    _name: "斋书苑",
    ".": [
      {
        title: "最新章节",
        docs: "https://docs.rsshub.app/routes/reading#zhai-shu-yuan",
        source: ["/book/:id", "/read/:id"],
        target: "/novel/zhaishuyuan/:id",
      },
    ],
  },
  "hbut.edu.cn": {
    _name: "湖北工业大学",
    www: [
      {
        title: "新闻中心",
        docs: "http://docs.rsshub.app/university#hu-bei-gong-ye-da-xue",
        source: "/xwzx/:name",
        target: (params) => {
          const type = params.name.replace(".htm", "")
          return type ? `/hbut/news/${type}` : "/hbut/news/tzgg"
        },
      },
    ],
    jsjxy: [
      {
        title: "新闻动态",
        docs: "http://docs.rsshub.app/routes/university#hu-bei-gong-ye-da-xue",
        source: "/index/xwdt.htm",
        target: "/hbut/cs/xwdt",
      },
      {
        title: "通知公告",
        docs: "http://docs.rsshub.app/routes/university#hu-bei-gong-ye-da-xue",
        source: "/index/tzgg.htm",
        target: "/hbut/cs/tzgg",
      },
      {
        title: "教学信息",
        docs: "http://docs.rsshub.app/routes/university#hu-bei-gong-ye-da-xue",
        source: "/jxxx.htm",
        target: "/hbut/cs/jxxx",
      },
      {
        title: "科研动态",
        docs: "http://docs.rsshub.app/routes/university#hu-bei-gong-ye-da-xue",
        source: "/kxyj/kydt.htm",
        target: "/hbut/cs/kydt",
      },
      {
        title: "党建活动",
        docs: "http://docs.rsshub.app/routes/university#hu-bei-gong-ye-da-xue",
        source: "/djhd/djhd.htm",
        target: "/hbut/cs/djhd",
      },
    ],
  },
  "zhuixinfan.com": {
    _name: "追新番日剧站",
    ".": [
      {
        title: "更新列表",
        docs: "https://docs.rsshub.app/routes/multimedia#zhui-xin-fan-ri-ju-zhan",
        source: ["/main.php"],
        target: "/zhuixinfan/list",
      },
    ],
  },
  "etoland.co.kr": {
    _name: "eTOLAND",
    ".": [
      {
        title: "主题贴",
        docs: "https://docs.rsshub.app/routes/bbs#etoland",
        source: ["/bbs/board.php", "/plugin/mobile/board.php"],
        target: (params, url) =>
          `/etoland/${new URL(url).searchParams.get("bo_table")}`,
      },
    ],
  },
  "onejav.com": {
    _name: "OneJAV BT",
    ".": [
      {
        title: "今日种子",
        docs: "https://docs.rsshub.app/routes/multimedia#onejav",
        source: "/",
        target: (params, url, document) => {
          const today = document
            .querySelector("div.card.mb-1.card-overview")
            .getAttribute("data-date")
            .replace(/-/g, "")
          return `/onejav/day/${today}`
        },
      },
      {
        title: "今日演员",
        docs: "https://docs.rsshub.app/routes/multimedia#onejav",
        source: "/",
        target: (params, url, document) => {
          const star = document
            .querySelector("div.card-content > div > a")
            .getAttribute("href")
          return `/onejav${star}`
        },
      },
      {
        title: "页面种子",
        docs: "https://docs.rsshub.app/routes/multimedia#onejav",
        source: ["/:type", "/:type/:key", "/:type/:key/:morekey"],
        target: (params, url, document) => {
          const itype =
            params.morekey === undefined
              ? params.type
              : params.type === "tag"
                ? "tag"
                : "day"
          let ikey = `${itype === "day" ? params.type : ""}${params.key || ""}${itype === "tag" && params.morekey !== undefined ? "%2F" : ""}${params.morekey || ""}`
          if (ikey === "" && itype === "tag") {
            ikey = document
              .querySelector("div.thumbnail.is-inline > a")
              .getAttribute("href")
              .replace("/tag/", "")
              .replace("/", "%2F")
          } else if (ikey === "" && itype === "actress") {
            ikey = document
              .querySelector("div.card > a")
              .getAttribute("href")
              .replace("/actress/", "")
          }
          return `/onejav/${itype}/${ikey}`
        },
      },
    ],
  },
  "sexinsex.net": {
    _name: "sexinsex",
    ".": [
      {
        title: "分区帖子",
        docs: "https://docs.rsshub.app/routes/multimedia#sexinsex",
        source: "/bbs/:path",
        target: (params, url) => {
          let pid, typeid
          const static_matched = params.path.match(/forum-(\d+)-\d+.html/)
          if (static_matched) {
            pid = static_matched[1]
          } else if (params.path === "forumdisplay.php") {
            pid = new URL(url).searchParams.get("fid")
            typeid = new URL(url).searchParams.get("typeid")
          } else {
            return false
          }
          return `/sexinsex/${pid}/${typeid ? typeid : ""}`
        },
      },
    ],
  },
  "t66y.com": {
    _name: "草榴社区",
    www: [
      {
        title: "分区帖子",
        docs: "https://docs.rsshub.app/routes/multimedia#cao-liu-she-qu",
        source: "/thread0806.php",
        target: (params, url) => {
          const id = new URL(url).searchParams.get("fid")
          const type = new URL(url).searchParams.get("type")
          return `/t66y/${id}/${type ? type : ""}`
        },
      },
    ],
  },
  "umass.edu": {
    _name: "UMASS Amherst",
    ece: [
      {
        title: "ECE News",
        docs: "http://docs.rsshub.app/routes/university#umass-amherst",
        source: "/news",
        target: "/umass/amherst/ecenews",
      },
      {
        title: "ECE Seminar",
        docs: "http://docs.rsshub.app/routes/university#umass-amherst",
        source: "/seminars",
        target: "/umass/amherst/eceseminar",
      },
    ],
    "www.cics": [
      {
        title: "CICS News",
        docs: "http://docs.rsshub.app/routes/university#umass-amherst",
        source: "/news",
        target: "/umass/amherst/csnews",
      },
    ],
    www: [
      {
        title: "IPO Events",
        docs: "http://docs.rsshub.app/routes/university#umass-amherst",
        source: "/ipo/iss/events",
        target: "/umass/amherst/ipoevents",
      },
      {
        title: "IPO Featured Stories",
        docs: "http://docs.rsshub.app/routes/university#umass-amherst",
        source: "/ipo/iss/featured-stories",
        target: "/umass/amherst/ipostories",
      },
    ],
  },
  "bjeea.com": {
    _name: "北京考试院",
    www: [
      {
        title: "首页 / 通知公告",
        docs: "https://docs.rsshub.app/routes/government#bei-jing-jiao-yu-kao-shi-yuan",
        source: ["/html/bjeeagg"],
        target: "/gov/beijing/bjeea/bjeeagg",
      },
      {
        title: "首页 / 招考政策",
        docs: "https://docs.rsshub.app/routes/government#bei-jing-jiao-yu-kao-shi-yuan",
        source: ["/html/zkzc"],
        target: "/gov/beijing/bjeea/zkzc",
      },
      {
        title: "首页 / 自考快递",
        docs: "https://docs.rsshub.app/routes/government#bei-jing-jiao-yu-kao-shi-yuan",
        source: ["/html/zkkd"],
        target: "/gov/beijing/bjeea/zkkd",
      },
    ],
  },
  "popiapp.cn": {
    _name: "Popi 提问箱",
    www: [
      {
        title: "提问箱新回答",
        docs: "https://docs.rsshub.app/routes/social-media#popi-ti-wen-xiang",
        source: "/:id",
        target: (params) => {
          if (params.id) {
            return "/popiask/:id"
          }
        },
      },
    ],
  },
  "nppa.gov.cn": {
    _name: "国家新闻出版署",
    www: [
      {
        title: "栏目",
        docs: "https://docs.rsshub.app/routes/government#guo-jia-xin-wen-chu-ban-shu",
        source: "/nppa/channels/:channel",
        target: (params, url) =>
          `/gov/nppa/${/nppa\/channels\/(\d+)\.shtml/.exec(url)[1]}`,
      },
      {
        title: "内容",
        docs: "https://docs.rsshub.app/routes/government#guo-jia-xin-wen-chu-ban-shu",
        source: "/nppa/contents/:channel/:content",
        target: (params, url) =>
          `/gov/nppa/${/nppa\/contents\/(\d+\/\d+)\.shtml/.exec(url)[1]}`,
      },
    ],
  },
  "jjmhw.cc": {
    _name: "漫小肆",
    www: [
      {
        title: "漫画更新",
        docs: "https://docs.rsshub.app/routes/anime#man-xiao-si",
        source: "/book/:id",
        target: "/manxiaosi/book/:id",
      },
    ],
  },
  "wenxuecity.com": {
    _name: "文学城",
    blog: [
      {
        title: "博客",
        docs: "https://docs.rsshub.app/routes/bbs#wen-xue-cheng-bo-ke",
        source: "/myblog/:id",
        target: "/wenxuecity/blog/:id",
      },
      {
        title: "博客",
        docs: "https://docs.rsshub.app/routes/bbs#wen-xue-cheng-bo-ke",
        source: "/myoverview/:id",
        target: "/wenxuecity/blog/:id",
      },
    ],
    bbs: [
      {
        title: "最新主题",
        docs: "https://docs.rsshub.app/routes/bbs#wen-xue-cheng-zui-xin-zhu-ti",
        source: "/:cat",
        target: "/wenxuecity/bbs/:cat",
      },
      {
        title: "最新主题 - 精华区",
        docs: "https://docs.rsshub.app/routes/bbs#wen-xue-cheng-zui-xin-zhu-ti",
        source: "/:cat",
        target: "/wenxuecity/bbs/:cat/1",
      },
      {
        title: "最热主题",
        docs: "https://docs.rsshub.app/routes/bbs#wen-xue-cheng-zui-re-zhu-ti",
        source: "/?cid=*",
        target: (params, url, document) => {
          const cid =
            document && new URL(document.location).searchParams.get("cid")
          return `/wenxuecity/hot/${cid}`
        },
      },
    ],
  },
  "buaq.net": {
    _name: "不安全资讯",
    ".": [
      {
        title: "不安全资讯",
        docs: "http://docs.rsshub.app/routes/new-media#bu-an-quan",
        source: "/",
        target: "/buaq",
      },
    ],
  },
  "jian-ning.com": {
    _name: "建宁闲谈",
    ".": [
      {
        title: "文章",
        docs: "https://docs.rsshub.app/routes/blog#jian-ning-xian-tan",
        source: "/*",
        target: "/blogs/jianning",
      },
    ],
  },
  "matataki.io": {
    _name: "matataki",
    www: [
      {
        title: "最热作品",
        docs: "https://docs.rsshub.app/routes/new-media#matataki",
        source: "/article/",
        target: "/matataki/posts/hot",
      },
      {
        title: "最新作品",
        docs: "https://docs.rsshub.app/routes/new-media#matataki",
        source: "/article/latest",
        target: "/matataki/posts/latest",
      },
      {
        title: "作者创作",
        docs: "https://docs.rsshub.app/routes/new-media#matataki",
        source: "/user/:uid",
        target: (params) => `/matataki/users/${params.uid}/posts`,
      },
      {
        title: "Fan票关联作品",
        docs: "https://docs.rsshub.app/routes/new-media#matataki",
        source: ["/token/:tokenId", "/token/:tokenId/circle"],
        target: (params) => `/matataki/tokens/${params.tokenId}/posts`,
      },
      {
        title: "标签关联作品",
        docs: "https://docs.rsshub.app/routes/new-media#matataki",
        source: ["/tag/:tagId"],
        target: (params, url) => {
          const tagName = new URL(url).searchParams.get("name")
          return `/matataki/tags/${params.tagId}/${tagName}/posts`
        },
      },
      {
        title: "收藏夹",
        docs: "https://docs.rsshub.app/routes/new-media#matataki",
        source: "/user/:uid/favlist/:fid",
        target: (params) =>
          `/matataki/users/${params.uid}/favorites/${params.fid}/posts`,
      },
    ],
  },
  "huya.com": {
    _name: "虎牙直播",
    ".": [
      {
        title: "直播间开播",
        docs: "https://docs.rsshub.app/routes/live#hu-ya-zhi-bo-zhi-bo-jian-kai-bo",
        source: "/:id",
        target: "/huya/live/:id",
      },
    ],
  },
  "craigslist.org": {
    _name: "Craigslist",
    ".": [
      {
        title: "商品搜索列表",
        docs: "https://docs.rsshub.app/routes/shopping#craigslist",
      },
    ],
  },
  "scboy.com": {
    _name: "scboy 论坛",
    www: [
      {
        title: "帖子",
        docs: "https://docs.rsshub.app/routes/bbs#scboy",
        source: "",
        target: (params, url) => {
          const id = url.includes("thread")
            ? url.split("-")[1].split(".")[0]
            : ""
          return id ? `/scboy/thread/${id}` : ""
        },
      },
    ],
  },
  "cqut.edu.cn": {
    _name: "重庆理工大学",
    tz: [
      {
        title: "通知",
        docs: "https://docs.rsshub.app/routes/university#chong-qing-li-gong-da-xue",
        source: "/*",
      },
    ],
    lib: [
      {
        title: "图书馆通知",
        docs: "https://docs.rsshub.app/routes/university#chong-qing-li-gong-da-xue",
        source: "/*",
      },
    ],
  },
  "trakt.tv": {
    _name: "Trakt.tv",
    ".": [
      {
        title: "用户收藏",
        docs: "https://docs.rsshub.app/routes/multimedia#trakt-tv-yong-hu-shou-cang",
        source: [
          "/users/:username/collection/:type/added",
          "/users/:username/collection",
        ],
        target: (params) =>
          `/trakt/collection/${params.username}/${params.type || "all"}`,
      },
    ],
  },
  "furaffinity.net": {
    _name: "Fur Affinity",
    www: [
      {
        title: "主页",
        docs: "https://docs.rsshub.app/routes/social-media#fur-affinity",
        source: "/",
        target: "/furaffinity/home",
      },
      {
        title: "浏览",
        docs: "https://docs.rsshub.app/routes/social-media#fur-affinity",
        source: "/browse/",
        target: "/furaffinity/browse",
      },
      {
        title: "站点状态",
        docs: "https://docs.rsshub.app/routes/social-media#fur-affinity",
        source: "/",
        target: "/furaffinity/status",
      },
      {
        title: "搜索",
        docs: "https://docs.rsshub.app/routes/social-media#fur-affinity",
        source: "/search/",
        target: (params, url) => {
          const keyword = new URL(url).searchParams.get("q")
          if (keyword) {
            return `/furaffinity/search/${keyword}`
          }
        },
      },
      {
        title: "用户主页简介",
        docs: "https://docs.rsshub.app/routes/social-media#fur-affinity",
        source: "/user/:username/",
        target: "/furaffinity/user/:username",
      },
      {
        title: "用户关注列表",
        docs: "https://docs.rsshub.app/routes/social-media#fur-affinity",
        source: "/watchlist/by/:username/",
        target: "/furaffinity/watching/:username",
      },
      {
        title: "用户被关注列表",
        docs: "https://docs.rsshub.app/routes/social-media#fur-affinity",
        source: "/watchlist/to/:username/",
        target: "/furaffinity/watchers/:username",
      },
      {
        title: "用户接受委托信息",
        docs: "https://docs.rsshub.app/routes/social-media#fur-affinity",
        source: "/commissions/:username/",
        target: "/furaffinity/commissions/:username",
      },
      {
        title: "用户的 Shouts 留言",
        docs: "https://docs.rsshub.app/routes/social-media#fur-affinity",
        source: "/user/:username/",
        target: "/furaffinity/shouts/:username",
      },
      {
        title: "用户的日记",
        docs: "https://docs.rsshub.app/routes/social-media#fur-affinity",
        source: "/journals/:username/",
        target: "/furaffinity/journals/:username",
      },
      {
        title: "用户的创作画廊",
        docs: "https://docs.rsshub.app/routes/social-media#fur-affinity",
        source: "/gallery/:username/",
        target: "/furaffinity/gallery/:username",
      },
      {
        title: "用户非正式作品",
        docs: "https://docs.rsshub.app/routes/social-media#fur-affinity",
        source: "/scraps/:username/",
        target: "/furaffinity/scraps/:username",
      },
      {
        title: "用户的喜爱列表",
        docs: "https://docs.rsshub.app/routes/social-media#fur-affinity",
        source: "/favorites/:username/",
        target: "/furaffinity/favorites/:username",
      },
      {
        title: "作品评论区",
        docs: "https://docs.rsshub.app/routes/social-media#fur-affinity",
        source: "/view/:id/",
        target: "/furaffinity/submission_comments/:id",
      },
      {
        title: "日记评论区",
        docs: "https://docs.rsshub.app/routes/social-media#fur-affinity",
        source: "/journal/:id/",
        target: "/furaffinity/journal_comments/:id",
      },
    ],
  },
  "macwk.com": {
    _name: "MacWk",
    ".": [
      {
        title: "应用更新",
        docs: "https://docs.rsshub.app/routes/program-update#macwk",
        source: "/soft/:name",
        target: "/macwk/soft/:name",
      },
    ],
  },
}
