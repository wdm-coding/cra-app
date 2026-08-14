const list = [
  {
    "name": "农、林、牧、渔业",
    "industryId": "A",
    "levelType": 0,
    "children": [
      {
        "name": "农业",
        "industryId": "01",
        "parentId": "A",
        "levelType": 1,
        "children": [
          {
            "name": "谷物种植",
            "industryId": "011",
            "parentId": "01",
            "levelType": 2,
            "children": [
              {
                "name": "稻谷种植",
                "industryId": "0111",
                "parentId": "011",
                "levelType": 3,
                "children": []
              },
              {
                "name": "小麦种植",
                "industryId": "0112",
                "parentId": "011",
                "levelType": 3,
                "children": []
              },
              {
                "name": "玉米种植",
                "industryId": "0113",
                "parentId": "011",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他谷物种植",
                "industryId": "0119",
                "parentId": "011",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "豆类、油料和薯类种植",
            "industryId": "012",
            "parentId": "01",
            "levelType": 2,
            "children": [
              {
                "name": "豆类种植",
                "industryId": "0121",
                "parentId": "012",
                "levelType": 3,
                "children": []
              },
              {
                "name": "油料种植",
                "industryId": "0122",
                "parentId": "012",
                "levelType": 3,
                "children": []
              },
              {
                "name": "薯类种植",
                "industryId": "0123",
                "parentId": "012",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "棉、麻、糖、烟草种植",
            "industryId": "013",
            "parentId": "01",
            "levelType": 2,
            "children": [
              {
                "name": "棉花种植",
                "industryId": "0131",
                "parentId": "013",
                "levelType": 3,
                "children": []
              },
              {
                "name": "麻类种植",
                "industryId": "0132",
                "parentId": "013",
                "levelType": 3,
                "children": []
              },
              {
                "name": "糖料种植",
                "industryId": "0133",
                "parentId": "013",
                "levelType": 3,
                "children": []
              },
              {
                "name": "烟草种植",
                "industryId": "0134",
                "parentId": "013",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "蔬菜、食用菌及园艺作物种植",
            "industryId": "014",
            "parentId": "01",
            "levelType": 2,
            "children": [
              {
                "name": "蔬菜种植",
                "industryId": "0141",
                "parentId": "014",
                "levelType": 3,
                "children": []
              },
              {
                "name": "食用菌种植",
                "industryId": "0142",
                "parentId": "014",
                "levelType": 3,
                "children": []
              },
              {
                "name": "花卉种植",
                "industryId": "0143",
                "parentId": "014",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他园艺作物种植",
                "industryId": "0149",
                "parentId": "014",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "水果种植",
            "industryId": "015",
            "parentId": "01",
            "levelType": 2,
            "children": [
              {
                "name": "仁果类和核果类水果种植",
                "industryId": "0151",
                "parentId": "015",
                "levelType": 3,
                "children": []
              },
              {
                "name": "葡萄种植",
                "industryId": "0152",
                "parentId": "015",
                "levelType": 3,
                "children": []
              },
              {
                "name": "柑橘类种植",
                "industryId": "0153",
                "parentId": "015",
                "levelType": 3,
                "children": []
              },
              {
                "name": "香蕉等亚热带水果种植",
                "industryId": "0154",
                "parentId": "015",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他水果种植",
                "industryId": "0159",
                "parentId": "015",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "坚果、含油果、香料和饮料作物种植",
            "industryId": "016",
            "parentId": "01",
            "levelType": 2,
            "children": [
              {
                "name": "坚果种植",
                "industryId": "0161",
                "parentId": "016",
                "levelType": 3,
                "children": []
              },
              {
                "name": "含油果种植",
                "industryId": "0162",
                "parentId": "016",
                "levelType": 3,
                "children": []
              },
              {
                "name": "香料作物种植",
                "industryId": "0163",
                "parentId": "016",
                "levelType": 3,
                "children": []
              },
              {
                "name": "茶叶种植",
                "industryId": "0164",
                "parentId": "016",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他饮料作物种植",
                "industryId": "0169",
                "parentId": "016",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "中药材种植",
            "industryId": "017",
            "parentId": "01",
            "levelType": 2,
            "children": [
              {
                "name": "中草药种植",
                "industryId": "0171",
                "parentId": "017",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他中药材种植",
                "industryId": "0179",
                "parentId": "017",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "草种植及割草",
            "industryId": "018",
            "parentId": "01",
            "levelType": 2,
            "children": [
              {
                "name": "草种植",
                "industryId": "0181",
                "parentId": "018",
                "levelType": 3,
                "children": []
              },
              {
                "name": "天然草原割草",
                "industryId": "0182",
                "parentId": "018",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "其他农业",
            "industryId": "019",
            "parentId": "01",
            "levelType": 2,
            "children": [
              {
                "name": "其他农业",
                "industryId": "0190",
                "parentId": "019",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "林业",
        "industryId": "02",
        "parentId": "A",
        "levelType": 1,
        "children": [
          {
            "name": "林木育种和育苗",
            "industryId": "021",
            "parentId": "02",
            "levelType": 2,
            "children": [
              {
                "name": "林木育种",
                "industryId": "0211",
                "parentId": "021",
                "levelType": 3,
                "children": []
              },
              {
                "name": "林木育苗",
                "industryId": "0212",
                "parentId": "021",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "造林和更新",
            "industryId": "022",
            "parentId": "02",
            "levelType": 2,
            "children": [
              {
                "name": "造林和更新",
                "industryId": "0220",
                "parentId": "022",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "森林经营、管护和改培",
            "industryId": "023",
            "parentId": "02",
            "levelType": 2,
            "children": [
              {
                "name": "森林经营和管护",
                "industryId": "0231",
                "parentId": "023",
                "levelType": 3,
                "children": []
              },
              {
                "name": "森林改培",
                "industryId": "0232",
                "parentId": "023",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "木材和竹材采运",
            "industryId": "024",
            "parentId": "02",
            "levelType": 2,
            "children": [
              {
                "name": "木材采运",
                "industryId": "0241",
                "parentId": "024",
                "levelType": 3,
                "children": []
              },
              {
                "name": "竹材采运",
                "industryId": "0242",
                "parentId": "024",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "林产品采集",
            "industryId": "025",
            "parentId": "02",
            "levelType": 2,
            "children": [
              {
                "name": "木竹材林产品采集",
                "industryId": "0251",
                "parentId": "025",
                "levelType": 3,
                "children": []
              },
              {
                "name": "非木竹材林产品采集",
                "industryId": "0252",
                "parentId": "025",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "畜牧业",
        "industryId": "03",
        "parentId": "A",
        "levelType": 1,
        "children": [
          {
            "name": "牲畜饲养",
            "industryId": "031",
            "parentId": "03",
            "levelType": 2,
            "children": [
              {
                "name": "牛的饲养",
                "industryId": "0311",
                "parentId": "031",
                "levelType": 3,
                "children": []
              },
              {
                "name": "马的饲养",
                "industryId": "0312",
                "parentId": "031",
                "levelType": 3,
                "children": []
              },
              {
                "name": "猪的饲养",
                "industryId": "0313",
                "parentId": "031",
                "levelType": 3,
                "children": []
              },
              {
                "name": "羊的饲养",
                "industryId": "0314",
                "parentId": "031",
                "levelType": 3,
                "children": []
              },
              {
                "name": "骆驼饲养",
                "industryId": "0315",
                "parentId": "031",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他牲畜饲养",
                "industryId": "0319",
                "parentId": "031",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "家禽饲养",
            "industryId": "032",
            "parentId": "03",
            "levelType": 2,
            "children": [
              {
                "name": "鸡的饲养",
                "industryId": "0321",
                "parentId": "032",
                "levelType": 3,
                "children": []
              },
              {
                "name": "鸭的饲养",
                "industryId": "0322",
                "parentId": "032",
                "levelType": 3,
                "children": []
              },
              {
                "name": "鹅的饲养",
                "industryId": "0323",
                "parentId": "032",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他家禽饲养",
                "industryId": "0329",
                "parentId": "032",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "狩猎和捕捉动物",
            "industryId": "033",
            "parentId": "03",
            "levelType": 2,
            "children": [
              {
                "name": "狩猎和捕捉动物",
                "industryId": "0330",
                "parentId": "033",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "其他畜牧业",
            "industryId": "039",
            "parentId": "03",
            "levelType": 2,
            "children": [
              {
                "name": "兔的饲养",
                "industryId": "0391",
                "parentId": "039",
                "levelType": 3,
                "children": []
              },
              {
                "name": "蜜蜂饲养",
                "industryId": "0392",
                "parentId": "039",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他未列明畜牧业",
                "industryId": "0399",
                "parentId": "039",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "渔业",
        "industryId": "04",
        "parentId": "A",
        "levelType": 1,
        "children": [
          {
            "name": "水产养殖",
            "industryId": "041",
            "parentId": "04",
            "levelType": 2,
            "children": [
              {
                "name": "海水养殖",
                "industryId": "0411",
                "parentId": "041",
                "levelType": 3,
                "children": []
              },
              {
                "name": "内陆养殖",
                "industryId": "0412",
                "parentId": "041",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "水产捕捞",
            "industryId": "042",
            "parentId": "04",
            "levelType": 2,
            "children": [
              {
                "name": "海水捕捞",
                "industryId": "0421",
                "parentId": "042",
                "levelType": 3,
                "children": []
              },
              {
                "name": "内陆捕捞",
                "industryId": "0422",
                "parentId": "042",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "农、林、牧、渔专业及辅助性活动",
        "industryId": "05",
        "parentId": "A",
        "levelType": 1,
        "children": [
          {
            "name": "农业专业及辅助性活动",
            "industryId": "051",
            "parentId": "05",
            "levelType": 2,
            "children": [
              {
                "name": "种子种苗培育活动",
                "industryId": "0511",
                "parentId": "051",
                "levelType": 3,
                "children": []
              },
              {
                "name": "农业机械活动",
                "industryId": "0512",
                "parentId": "051",
                "levelType": 3,
                "children": []
              },
              {
                "name": "灌溉活动",
                "industryId": "0513",
                "parentId": "051",
                "levelType": 3,
                "children": []
              },
              {
                "name": "农产品初加工活动",
                "industryId": "0514",
                "parentId": "051",
                "levelType": 3,
                "children": []
              },
              {
                "name": "农作物病虫害防治活动",
                "industryId": "0515",
                "parentId": "051",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他农业专业及辅助性活动",
                "industryId": "0519",
                "parentId": "051",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "林业专业及辅助性活动",
            "industryId": "052",
            "parentId": "05",
            "levelType": 2,
            "children": [
              {
                "name": "林业有害生物防治活动",
                "industryId": "0521",
                "parentId": "052",
                "levelType": 3,
                "children": []
              },
              {
                "name": "森林防火活动",
                "industryId": "0522",
                "parentId": "052",
                "levelType": 3,
                "children": []
              },
              {
                "name": "林产品初级加工活动",
                "industryId": "0523",
                "parentId": "052",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他林业专业及辅助性活动",
                "industryId": "0529",
                "parentId": "052",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "畜牧专业及辅助性活动",
            "industryId": "053",
            "parentId": "05",
            "levelType": 2,
            "children": [
              {
                "name": "畜牧良种繁殖活动",
                "industryId": "0531",
                "parentId": "053",
                "levelType": 3,
                "children": []
              },
              {
                "name": "畜禽粪污处理活动",
                "industryId": "0532",
                "parentId": "053",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他畜牧专业及辅助性活动",
                "industryId": "0539",
                "parentId": "053",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "渔业专业及辅助性活动",
            "industryId": "054",
            "parentId": "05",
            "levelType": 2,
            "children": [
              {
                "name": "鱼苗及鱼种场活动",
                "industryId": "0541",
                "parentId": "054",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他渔业专业及辅助性活动",
                "industryId": "0549",
                "parentId": "054",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "采矿业",
    "industryId": "B",
    "levelType": 0,
    "children": [
      {
        "name": "煤炭开采和洗选业",
        "industryId": "06",
        "parentId": "B",
        "levelType": 1,
        "children": [
          {
            "name": "烟煤和无烟煤开采洗选",
            "industryId": "061",
            "parentId": "06",
            "levelType": 2,
            "children": [
              {
                "name": "烟煤和无烟煤开采洗选",
                "industryId": "0610",
                "parentId": "061",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "褐煤开采洗选",
            "industryId": "062",
            "parentId": "06",
            "levelType": 2,
            "children": [
              {
                "name": "褐煤开采洗选",
                "industryId": "0620",
                "parentId": "062",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "其他煤炭采选",
            "industryId": "069",
            "parentId": "06",
            "levelType": 2,
            "children": [
              {
                "name": "其他煤炭采选",
                "industryId": "0690",
                "parentId": "069",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "石油和天然气开采业",
        "industryId": "07",
        "parentId": "B",
        "levelType": 1,
        "children": [
          {
            "name": "石油开采",
            "industryId": "071",
            "parentId": "07",
            "levelType": 2,
            "children": [
              {
                "name": "陆地石油开采",
                "industryId": "0711",
                "parentId": "071",
                "levelType": 3,
                "children": []
              },
              {
                "name": "海洋石油开采",
                "industryId": "0712",
                "parentId": "071",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "天然气开采",
            "industryId": "072",
            "parentId": "07",
            "levelType": 2,
            "children": [
              {
                "name": "陆地天然气开采",
                "industryId": "0721",
                "parentId": "072",
                "levelType": 3,
                "children": []
              },
              {
                "name": "海洋天然气及可燃冰开采",
                "industryId": "0722",
                "parentId": "072",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "黑色金属矿采选业",
        "industryId": "08",
        "parentId": "B",
        "levelType": 1,
        "children": [
          {
            "name": "铁矿采选",
            "industryId": "081",
            "parentId": "08",
            "levelType": 2,
            "children": [
              {
                "name": "铁矿采选",
                "industryId": "0810",
                "parentId": "081",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "锰矿、铬矿采选",
            "industryId": "082",
            "parentId": "08",
            "levelType": 2,
            "children": [
              {
                "name": "锰矿、铬矿采选",
                "industryId": "0820",
                "parentId": "082",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "其他黑色金属矿采选",
            "industryId": "089",
            "parentId": "08",
            "levelType": 2,
            "children": [
              {
                "name": "其他黑色金属矿采选",
                "industryId": "0890",
                "parentId": "089",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "有色金属矿采选业",
        "industryId": "09",
        "parentId": "B",
        "levelType": 1,
        "children": [
          {
            "name": "常用有色金属矿采选",
            "industryId": "091",
            "parentId": "09",
            "levelType": 2,
            "children": [
              {
                "name": "铜矿采选",
                "industryId": "0911",
                "parentId": "091",
                "levelType": 3,
                "children": []
              },
              {
                "name": "铅锌矿采选",
                "industryId": "0912",
                "parentId": "091",
                "levelType": 3,
                "children": []
              },
              {
                "name": "镍钴矿采选",
                "industryId": "0913",
                "parentId": "091",
                "levelType": 3,
                "children": []
              },
              {
                "name": "锡矿采选",
                "industryId": "0914",
                "parentId": "091",
                "levelType": 3,
                "children": []
              },
              {
                "name": "锑矿采选",
                "industryId": "0915",
                "parentId": "091",
                "levelType": 3,
                "children": []
              },
              {
                "name": "铝矿采选",
                "industryId": "0916",
                "parentId": "091",
                "levelType": 3,
                "children": []
              },
              {
                "name": "镁矿采选",
                "industryId": "0917",
                "parentId": "091",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他常用有色金属矿采选",
                "industryId": "0919",
                "parentId": "091",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "贵金属矿采选",
            "industryId": "092",
            "parentId": "09",
            "levelType": 2,
            "children": [
              {
                "name": "金矿采选",
                "industryId": "0921",
                "parentId": "092",
                "levelType": 3,
                "children": []
              },
              {
                "name": "银矿采选",
                "industryId": "0922",
                "parentId": "092",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他贵金属矿采选",
                "industryId": "0929",
                "parentId": "092",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "稀有稀土金属矿采选",
            "industryId": "093",
            "parentId": "09",
            "levelType": 2,
            "children": [
              {
                "name": "钨钼矿采选",
                "industryId": "0931",
                "parentId": "093",
                "levelType": 3,
                "children": []
              },
              {
                "name": "稀土金属矿采选",
                "industryId": "0932",
                "parentId": "093",
                "levelType": 3,
                "children": []
              },
              {
                "name": "放射性金属矿采选",
                "industryId": "0933",
                "parentId": "093",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他稀有金属矿采选",
                "industryId": "0939",
                "parentId": "093",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "非金属矿采选业",
        "industryId": "10",
        "parentId": "B",
        "levelType": 1,
        "children": [
          {
            "name": "土砂石开采",
            "industryId": "101",
            "parentId": "10",
            "levelType": 2,
            "children": [
              {
                "name": "石灰石、石膏开采",
                "industryId": "1011",
                "parentId": "101",
                "levelType": 3,
                "children": []
              },
              {
                "name": "建筑装饰用石开采",
                "industryId": "1012",
                "parentId": "101",
                "levelType": 3,
                "children": []
              },
              {
                "name": "耐火土石开采",
                "industryId": "1013",
                "parentId": "101",
                "levelType": 3,
                "children": []
              },
              {
                "name": "粘土及其他土砂石开采",
                "industryId": "1019",
                "parentId": "101",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "化学矿开采",
            "industryId": "102",
            "parentId": "10",
            "levelType": 2,
            "children": [
              {
                "name": "化学矿开采",
                "industryId": "1020",
                "parentId": "102",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "采盐",
            "industryId": "103",
            "parentId": "10",
            "levelType": 2,
            "children": [
              {
                "name": "采盐",
                "industryId": "1030",
                "parentId": "103",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "石棉及其他非金属矿采选",
            "industryId": "109",
            "parentId": "10",
            "levelType": 2,
            "children": [
              {
                "name": "石棉、云母矿采选",
                "industryId": "1091",
                "parentId": "109",
                "levelType": 3,
                "children": []
              },
              {
                "name": "石墨、滑石采选",
                "industryId": "1092",
                "parentId": "109",
                "levelType": 3,
                "children": []
              },
              {
                "name": "宝石、玉石采选",
                "industryId": "1093",
                "parentId": "109",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他未列明非金属矿采选",
                "industryId": "1099",
                "parentId": "109",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "开采专业及辅助性活动",
        "industryId": "11",
        "parentId": "B",
        "levelType": 1,
        "children": [
          {
            "name": "煤炭开采和洗选专业及辅助性活动",
            "industryId": "111",
            "parentId": "11",
            "levelType": 2,
            "children": [
              {
                "name": "煤炭开采和洗选专业及辅助性活动",
                "industryId": "1110",
                "parentId": "111",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "石油和天然气开采专业及辅助性活动",
            "industryId": "112",
            "parentId": "11",
            "levelType": 2,
            "children": [
              {
                "name": "石油和天然气开采专业及辅助性活动",
                "industryId": "1120",
                "parentId": "112",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "其他开采专业及辅助性活动",
            "industryId": "119",
            "parentId": "11",
            "levelType": 2,
            "children": [
              {
                "name": "其他开采专业及辅助性活动",
                "industryId": "1190",
                "parentId": "119",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "其他采矿业",
        "industryId": "12",
        "parentId": "B",
        "levelType": 1,
        "children": [
          {
            "name": "其他采矿业",
            "industryId": "120",
            "parentId": "12",
            "levelType": 2,
            "children": [
              {
                "name": "其他采矿业",
                "industryId": "1200",
                "parentId": "120",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "制造业",
    "industryId": "C",
    "levelType": 0,
    "children": [
      {
        "name": "农副食品加工业",
        "industryId": "13",
        "parentId": "C",
        "levelType": 1,
        "children": [
          {
            "name": "谷物磨制",
            "industryId": "131",
            "parentId": "13",
            "levelType": 2,
            "children": [
              {
                "name": "稻谷加工",
                "industryId": "1311",
                "parentId": "131",
                "levelType": 3,
                "children": []
              },
              {
                "name": "小麦加工",
                "industryId": "1312",
                "parentId": "131",
                "levelType": 3,
                "children": []
              },
              {
                "name": "玉米加工",
                "industryId": "1313",
                "parentId": "131",
                "levelType": 3,
                "children": []
              },
              {
                "name": "杂粮加工",
                "industryId": "1314",
                "parentId": "131",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他谷物磨制",
                "industryId": "1319",
                "parentId": "131",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "饲料加工",
            "industryId": "132",
            "parentId": "13",
            "levelType": 2,
            "children": [
              {
                "name": "宠物饲料加工",
                "industryId": "1321",
                "parentId": "132",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他饲料加工",
                "industryId": "1329",
                "parentId": "132",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "植物油加工",
            "industryId": "133",
            "parentId": "13",
            "levelType": 2,
            "children": [
              {
                "name": "食用植物油加工",
                "industryId": "1331",
                "parentId": "133",
                "levelType": 3,
                "children": []
              },
              {
                "name": "非食用植物油加工",
                "industryId": "1332",
                "parentId": "133",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "制糖业",
            "industryId": "134",
            "parentId": "13",
            "levelType": 2,
            "children": [
              {
                "name": "制糖业",
                "industryId": "1340",
                "parentId": "134",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "屠宰及肉类加工",
            "industryId": "135",
            "parentId": "13",
            "levelType": 2,
            "children": [
              {
                "name": "牲畜屠宰",
                "industryId": "1351",
                "parentId": "135",
                "levelType": 3,
                "children": []
              },
              {
                "name": "禽类屠宰",
                "industryId": "1352",
                "parentId": "135",
                "levelType": 3,
                "children": []
              },
              {
                "name": "肉制品及副产品加工",
                "industryId": "1353",
                "parentId": "135",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "水产品加工",
            "industryId": "136",
            "parentId": "13",
            "levelType": 2,
            "children": [
              {
                "name": "水产品冷冻加工",
                "industryId": "1361",
                "parentId": "136",
                "levelType": 3,
                "children": []
              },
              {
                "name": "鱼糜制品及水产品干腌制加工",
                "industryId": "1362",
                "parentId": "136",
                "levelType": 3,
                "children": []
              },
              {
                "name": "鱼油提取及制品制造",
                "industryId": "1363",
                "parentId": "136",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他水产品加工",
                "industryId": "1369",
                "parentId": "136",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "蔬菜、菌类、水果和坚果加工",
            "industryId": "137",
            "parentId": "13",
            "levelType": 2,
            "children": [
              {
                "name": "蔬菜加工",
                "industryId": "1371",
                "parentId": "137",
                "levelType": 3,
                "children": []
              },
              {
                "name": "食用菌加工",
                "industryId": "1372",
                "parentId": "137",
                "levelType": 3,
                "children": []
              },
              {
                "name": "水果和坚果加工",
                "industryId": "1373",
                "parentId": "137",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "其他农副食品加工",
            "industryId": "139",
            "parentId": "13",
            "levelType": 2,
            "children": [
              {
                "name": "淀粉及淀粉制品制造",
                "industryId": "1391",
                "parentId": "139",
                "levelType": 3,
                "children": []
              },
              {
                "name": "豆制品制造",
                "industryId": "1392",
                "parentId": "139",
                "levelType": 3,
                "children": []
              },
              {
                "name": "蛋品加工",
                "industryId": "1393",
                "parentId": "139",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他未列明农副食品加工",
                "industryId": "1399",
                "parentId": "139",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "食品制造业",
        "industryId": "14",
        "parentId": "C",
        "levelType": 1,
        "children": [
          {
            "name": "焙烤食品制造",
            "industryId": "141",
            "parentId": "14",
            "levelType": 2,
            "children": [
              {
                "name": "糕点、面包制造",
                "industryId": "1411",
                "parentId": "141",
                "levelType": 3,
                "children": []
              },
              {
                "name": "饼干及其他焙烤食品制造",
                "industryId": "1419",
                "parentId": "141",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "糖果、巧克力及蜜饯制造",
            "industryId": "142",
            "parentId": "14",
            "levelType": 2,
            "children": [
              {
                "name": "糖果、巧克力制造",
                "industryId": "1421",
                "parentId": "142",
                "levelType": 3,
                "children": []
              },
              {
                "name": "蜜饯制作",
                "industryId": "1422",
                "parentId": "142",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "方便食品制造",
            "industryId": "143",
            "parentId": "14",
            "levelType": 2,
            "children": [
              {
                "name": "米、面制品制造",
                "industryId": "1431",
                "parentId": "143",
                "levelType": 3,
                "children": []
              },
              {
                "name": "速冻食品制造",
                "industryId": "1432",
                "parentId": "143",
                "levelType": 3,
                "children": []
              },
              {
                "name": "方便面制造",
                "industryId": "1433",
                "parentId": "143",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他方便食品制造",
                "industryId": "1439",
                "parentId": "143",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "乳制品制造",
            "industryId": "144",
            "parentId": "14",
            "levelType": 2,
            "children": [
              {
                "name": "液体乳制造",
                "industryId": "1441",
                "parentId": "144",
                "levelType": 3,
                "children": []
              },
              {
                "name": "乳粉制造",
                "industryId": "1442",
                "parentId": "144",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他乳制品制造",
                "industryId": "1449",
                "parentId": "144",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "罐头食品制造",
            "industryId": "145",
            "parentId": "14",
            "levelType": 2,
            "children": [
              {
                "name": "肉、禽类罐头制造",
                "industryId": "1451",
                "parentId": "145",
                "levelType": 3,
                "children": []
              },
              {
                "name": "水产品罐头制造",
                "industryId": "1452",
                "parentId": "145",
                "levelType": 3,
                "children": []
              },
              {
                "name": "蔬菜、水果罐头制造",
                "industryId": "1453",
                "parentId": "145",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他罐头食品制造",
                "industryId": "1459",
                "parentId": "145",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "调味品、发酵制品制造",
            "industryId": "146",
            "parentId": "14",
            "levelType": 2,
            "children": [
              {
                "name": "味精制造",
                "industryId": "1461",
                "parentId": "146",
                "levelType": 3,
                "children": []
              },
              {
                "name": "酱油、食醋及类似制品制造",
                "industryId": "1462",
                "parentId": "146",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他调味品、发酵制品制造",
                "industryId": "1469",
                "parentId": "146",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "其他食品制造",
            "industryId": "149",
            "parentId": "14",
            "levelType": 2,
            "children": [
              {
                "name": "营养食品制造",
                "industryId": "1491",
                "parentId": "149",
                "levelType": 3,
                "children": []
              },
              {
                "name": "保健食品制造",
                "industryId": "1492",
                "parentId": "149",
                "levelType": 3,
                "children": []
              },
              {
                "name": "冷冻饮品及食用冰制造",
                "industryId": "1493",
                "parentId": "149",
                "levelType": 3,
                "children": []
              },
              {
                "name": "盐加工",
                "industryId": "1494",
                "parentId": "149",
                "levelType": 3,
                "children": []
              },
              {
                "name": "食品及饲料添加剂制造",
                "industryId": "1495",
                "parentId": "149",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他未列明食品制造",
                "industryId": "1499",
                "parentId": "149",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "酒、饮料和精制茶制造业",
        "industryId": "15",
        "parentId": "C",
        "levelType": 1,
        "children": [
          {
            "name": "酒的制造",
            "industryId": "151",
            "parentId": "15",
            "levelType": 2,
            "children": [
              {
                "name": "酒精制造",
                "industryId": "1511",
                "parentId": "151",
                "levelType": 3,
                "children": []
              },
              {
                "name": "白酒制造",
                "industryId": "1512",
                "parentId": "151",
                "levelType": 3,
                "children": []
              },
              {
                "name": "啤酒制造",
                "industryId": "1513",
                "parentId": "151",
                "levelType": 3,
                "children": []
              },
              {
                "name": "黄酒制造",
                "industryId": "1514",
                "parentId": "151",
                "levelType": 3,
                "children": []
              },
              {
                "name": "葡萄酒制造",
                "industryId": "1515",
                "parentId": "151",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他酒制造",
                "industryId": "1519",
                "parentId": "151",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "饮料制造",
            "industryId": "152",
            "parentId": "15",
            "levelType": 2,
            "children": [
              {
                "name": "碳酸饮料制造",
                "industryId": "1521",
                "parentId": "152",
                "levelType": 3,
                "children": []
              },
              {
                "name": "瓶（罐）装饮用水制造",
                "industryId": "1522",
                "parentId": "152",
                "levelType": 3,
                "children": []
              },
              {
                "name": "果菜汁及果菜汁饮料制造",
                "industryId": "1523",
                "parentId": "152",
                "levelType": 3,
                "children": []
              },
              {
                "name": "含乳饮料和植物蛋白饮料制造",
                "industryId": "1524",
                "parentId": "152",
                "levelType": 3,
                "children": []
              },
              {
                "name": "固体饮料制造",
                "industryId": "1525",
                "parentId": "152",
                "levelType": 3,
                "children": []
              },
              {
                "name": "茶饮料及其他饮料制造",
                "industryId": "1529",
                "parentId": "152",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "精制茶加工",
            "industryId": "153",
            "parentId": "15",
            "levelType": 2,
            "children": [
              {
                "name": "精制茶加工",
                "industryId": "1530",
                "parentId": "153",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "烟草制品业",
        "industryId": "16",
        "parentId": "C",
        "levelType": 1,
        "children": [
          {
            "name": "烟叶复烤",
            "industryId": "161",
            "parentId": "16",
            "levelType": 2,
            "children": [
              {
                "name": "烟叶复烤",
                "industryId": "1610",
                "parentId": "161",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "卷烟制造",
            "industryId": "162",
            "parentId": "16",
            "levelType": 2,
            "children": [
              {
                "name": "卷烟制造",
                "industryId": "1620",
                "parentId": "162",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "其他烟草制品制造",
            "industryId": "169",
            "parentId": "16",
            "levelType": 2,
            "children": [
              {
                "name": "其他烟草制品制造",
                "industryId": "1690",
                "parentId": "169",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "纺织业",
        "industryId": "17",
        "parentId": "C",
        "levelType": 1,
        "children": [
          {
            "name": "棉纺织及印染精加工",
            "industryId": "171",
            "parentId": "17",
            "levelType": 2,
            "children": [
              {
                "name": "棉纺纱加工",
                "industryId": "1711",
                "parentId": "171",
                "levelType": 3,
                "children": []
              },
              {
                "name": "棉织造加工",
                "industryId": "1712",
                "parentId": "171",
                "levelType": 3,
                "children": []
              },
              {
                "name": "棉印染精加工",
                "industryId": "1713",
                "parentId": "171",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "毛纺织及染整精加工",
            "industryId": "172",
            "parentId": "17",
            "levelType": 2,
            "children": [
              {
                "name": "毛条和毛纱线加工",
                "industryId": "1721",
                "parentId": "172",
                "levelType": 3,
                "children": []
              },
              {
                "name": "毛织造加工",
                "industryId": "1722",
                "parentId": "172",
                "levelType": 3,
                "children": []
              },
              {
                "name": "毛染整精加工",
                "industryId": "1723",
                "parentId": "172",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "麻纺织及染整精加工",
            "industryId": "173",
            "parentId": "17",
            "levelType": 2,
            "children": [
              {
                "name": "麻纤维纺前加工和纺纱",
                "industryId": "1731",
                "parentId": "173",
                "levelType": 3,
                "children": []
              },
              {
                "name": "麻织造加工",
                "industryId": "1732",
                "parentId": "173",
                "levelType": 3,
                "children": []
              },
              {
                "name": "麻染整精加工",
                "industryId": "1733",
                "parentId": "173",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "丝绢纺织及印染精加工",
            "industryId": "174",
            "parentId": "17",
            "levelType": 2,
            "children": [
              {
                "name": "缫丝加工",
                "industryId": "1741",
                "parentId": "174",
                "levelType": 3,
                "children": []
              },
              {
                "name": "绢纺和丝织加工",
                "industryId": "1742",
                "parentId": "174",
                "levelType": 3,
                "children": []
              },
              {
                "name": "丝印染精加工",
                "industryId": "1743",
                "parentId": "174",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "化纤织造及印染精加工",
            "industryId": "175",
            "parentId": "17",
            "levelType": 2,
            "children": [
              {
                "name": "化纤织造加工",
                "industryId": "1751",
                "parentId": "175",
                "levelType": 3,
                "children": []
              },
              {
                "name": "化纤织物染整精加工",
                "industryId": "1752",
                "parentId": "175",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "针织或钩针编织物及其制品制造",
            "industryId": "176",
            "parentId": "17",
            "levelType": 2,
            "children": [
              {
                "name": "针织或钩针编织物织造",
                "industryId": "1761",
                "parentId": "176",
                "levelType": 3,
                "children": []
              },
              {
                "name": "针织或钩针编织物印染精加工",
                "industryId": "1762",
                "parentId": "176",
                "levelType": 3,
                "children": []
              },
              {
                "name": "针织或钩针编织品制造",
                "industryId": "1763",
                "parentId": "176",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "家用纺织制成品制造",
            "industryId": "177",
            "parentId": "17",
            "levelType": 2,
            "children": [
              {
                "name": "床上用品制造",
                "industryId": "1771",
                "parentId": "177",
                "levelType": 3,
                "children": []
              },
              {
                "name": "毛巾类制品制造",
                "industryId": "1772",
                "parentId": "177",
                "levelType": 3,
                "children": []
              },
              {
                "name": "窗帘、布艺类产品制造",
                "industryId": "1773",
                "parentId": "177",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他家用纺织制成品制造",
                "industryId": "1779",
                "parentId": "177",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "产业用纺织制成品制造",
            "industryId": "178",
            "parentId": "17",
            "levelType": 2,
            "children": [
              {
                "name": "非织造布制造",
                "industryId": "1781",
                "parentId": "178",
                "levelType": 3,
                "children": []
              },
              {
                "name": "绳、索、缆制造",
                "industryId": "1782",
                "parentId": "178",
                "levelType": 3,
                "children": []
              },
              {
                "name": "纺织带和帘子布制造",
                "industryId": "1783",
                "parentId": "178",
                "levelType": 3,
                "children": []
              },
              {
                "name": "篷、帆布制造",
                "industryId": "1784",
                "parentId": "178",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他产业用纺织制成品制造",
                "industryId": "1789",
                "parentId": "178",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "纺织服装、服饰业",
        "industryId": "18",
        "parentId": "C",
        "levelType": 1,
        "children": [
          {
            "name": "机织服装制造",
            "industryId": "181",
            "parentId": "18",
            "levelType": 2,
            "children": [
              {
                "name": "运动机织服装制造",
                "industryId": "1811",
                "parentId": "181",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他机织服装制造",
                "industryId": "1819",
                "parentId": "181",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "针织或钩针编织服装制造",
            "industryId": "182",
            "parentId": "18",
            "levelType": 2,
            "children": [
              {
                "name": "运动休闲针织服装制造",
                "industryId": "1821",
                "parentId": "182",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他针织或钩针编织服装制造",
                "industryId": "1829",
                "parentId": "182",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "服饰制造",
            "industryId": "183",
            "parentId": "18",
            "levelType": 2,
            "children": [
              {
                "name": "服饰制造",
                "industryId": "1830",
                "parentId": "183",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "皮革、毛皮、羽毛及其制品和制鞋业",
        "industryId": "19",
        "parentId": "C",
        "levelType": 1,
        "children": [
          {
            "name": "皮革鞣制加工",
            "industryId": "191",
            "parentId": "19",
            "levelType": 2,
            "children": [
              {
                "name": "皮革鞣制加工",
                "industryId": "1910",
                "parentId": "191",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "皮革制品制造",
            "industryId": "192",
            "parentId": "19",
            "levelType": 2,
            "children": [
              {
                "name": "皮革服装制造",
                "industryId": "1921",
                "parentId": "192",
                "levelType": 3,
                "children": []
              },
              {
                "name": "皮箱、包(袋)制造",
                "industryId": "1922",
                "parentId": "192",
                "levelType": 3,
                "children": []
              },
              {
                "name": "皮手套及皮装饰制品制造",
                "industryId": "1923",
                "parentId": "192",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他皮革制品制造",
                "industryId": "1929",
                "parentId": "192",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "毛皮鞣制及制品加工",
            "industryId": "193",
            "parentId": "19",
            "levelType": 2,
            "children": [
              {
                "name": "毛皮鞣制加工",
                "industryId": "1931",
                "parentId": "193",
                "levelType": 3,
                "children": []
              },
              {
                "name": "毛皮服装加工",
                "industryId": "1932",
                "parentId": "193",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他毛皮制品加工",
                "industryId": "1939",
                "parentId": "193",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "羽毛（绒）加工及制品制造",
            "industryId": "194",
            "parentId": "19",
            "levelType": 2,
            "children": [
              {
                "name": "羽毛(绒)加工",
                "industryId": "1941",
                "parentId": "194",
                "levelType": 3,
                "children": []
              },
              {
                "name": "羽毛(绒)制品加工",
                "industryId": "1942",
                "parentId": "194",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "制鞋业",
            "industryId": "195",
            "parentId": "19",
            "levelType": 2,
            "children": [
              {
                "name": "纺织面料鞋制造",
                "industryId": "1951",
                "parentId": "195",
                "levelType": 3,
                "children": []
              },
              {
                "name": "皮鞋制造",
                "industryId": "1952",
                "parentId": "195",
                "levelType": 3,
                "children": []
              },
              {
                "name": "塑料鞋制造",
                "industryId": "1953",
                "parentId": "195",
                "levelType": 3,
                "children": []
              },
              {
                "name": "橡胶鞋制造",
                "industryId": "1954",
                "parentId": "195",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他制鞋业",
                "industryId": "1959",
                "parentId": "195",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "木材加工和木、竹、藤、棕、草制品业",
        "industryId": "20",
        "parentId": "C",
        "levelType": 1,
        "children": [
          {
            "name": "木材加工",
            "industryId": "201",
            "parentId": "20",
            "levelType": 2,
            "children": [
              {
                "name": "锯材加工",
                "industryId": "2011",
                "parentId": "201",
                "levelType": 3,
                "children": []
              },
              {
                "name": "木片加工",
                "industryId": "2012",
                "parentId": "201",
                "levelType": 3,
                "children": []
              },
              {
                "name": "单板加工",
                "industryId": "2013",
                "parentId": "201",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他木材加工",
                "industryId": "2019",
                "parentId": "201",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "人造板制造",
            "industryId": "202",
            "parentId": "20",
            "levelType": 2,
            "children": [
              {
                "name": "胶合板制造",
                "industryId": "2021",
                "parentId": "202",
                "levelType": 3,
                "children": []
              },
              {
                "name": "纤维板制造",
                "industryId": "2022",
                "parentId": "202",
                "levelType": 3,
                "children": []
              },
              {
                "name": "刨花板制造",
                "industryId": "2023",
                "parentId": "202",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他人造板制造",
                "industryId": "2029",
                "parentId": "202",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "木质制品制造",
            "industryId": "203",
            "parentId": "20",
            "levelType": 2,
            "children": [
              {
                "name": "建筑用木料及木材组件加工",
                "industryId": "2031",
                "parentId": "203",
                "levelType": 3,
                "children": []
              },
              {
                "name": "木门窗制造",
                "industryId": "2032",
                "parentId": "203",
                "levelType": 3,
                "children": []
              },
              {
                "name": "木楼梯制造",
                "industryId": "2033",
                "parentId": "203",
                "levelType": 3,
                "children": []
              },
              {
                "name": "木地板制造",
                "industryId": "2034",
                "parentId": "203",
                "levelType": 3,
                "children": []
              },
              {
                "name": "木制容器制造",
                "industryId": "2035",
                "parentId": "203",
                "levelType": 3,
                "children": []
              },
              {
                "name": "软木制品及其他木制品制造",
                "industryId": "2039",
                "parentId": "203",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "竹、藤、棕、草等制品制造",
            "industryId": "204",
            "parentId": "20",
            "levelType": 2,
            "children": [
              {
                "name": "竹制品制造",
                "industryId": "2041",
                "parentId": "204",
                "levelType": 3,
                "children": []
              },
              {
                "name": "藤制品制造",
                "industryId": "2042",
                "parentId": "204",
                "levelType": 3,
                "children": []
              },
              {
                "name": "棕制品制造",
                "industryId": "2043",
                "parentId": "204",
                "levelType": 3,
                "children": []
              },
              {
                "name": "草及其他制品制造",
                "industryId": "2049",
                "parentId": "204",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "家具制造业",
        "industryId": "21",
        "parentId": "C",
        "levelType": 1,
        "children": [
          {
            "name": "木质家具制造",
            "industryId": "211",
            "parentId": "21",
            "levelType": 2,
            "children": [
              {
                "name": "木质家具制造",
                "industryId": "2110",
                "parentId": "211",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "竹、藤家具制造",
            "industryId": "212",
            "parentId": "21",
            "levelType": 2,
            "children": [
              {
                "name": "竹、藤家具制造",
                "industryId": "2120",
                "parentId": "212",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "金属家具制造",
            "industryId": "213",
            "parentId": "21",
            "levelType": 2,
            "children": [
              {
                "name": "金属家具制造",
                "industryId": "2130",
                "parentId": "213",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "塑料家具制造",
            "industryId": "214",
            "parentId": "21",
            "levelType": 2,
            "children": [
              {
                "name": "塑料家具制造",
                "industryId": "2140",
                "parentId": "214",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "其他家具制造",
            "industryId": "219",
            "parentId": "21",
            "levelType": 2,
            "children": [
              {
                "name": "其他家具制造",
                "industryId": "2190",
                "parentId": "219",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "造纸和纸制品业",
        "industryId": "22",
        "parentId": "C",
        "levelType": 1,
        "children": [
          {
            "name": "纸浆制造",
            "industryId": "221",
            "parentId": "22",
            "levelType": 2,
            "children": [
              {
                "name": "木竹浆制造",
                "industryId": "2211",
                "parentId": "221",
                "levelType": 3,
                "children": []
              },
              {
                "name": "非木竹浆制造",
                "industryId": "2212",
                "parentId": "221",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "造纸",
            "industryId": "222",
            "parentId": "22",
            "levelType": 2,
            "children": [
              {
                "name": "机制纸及纸板制造",
                "industryId": "2221",
                "parentId": "222",
                "levelType": 3,
                "children": []
              },
              {
                "name": "手工纸制造",
                "industryId": "2222",
                "parentId": "222",
                "levelType": 3,
                "children": []
              },
              {
                "name": "加工纸制造",
                "industryId": "2223",
                "parentId": "222",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "纸制品制造",
            "industryId": "223",
            "parentId": "22",
            "levelType": 2,
            "children": [
              {
                "name": "纸和纸板容器制造",
                "industryId": "2231",
                "parentId": "223",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他纸制品制造",
                "industryId": "2239",
                "parentId": "223",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "印刷和记录媒介复制业",
        "industryId": "23",
        "parentId": "C",
        "levelType": 1,
        "children": [
          {
            "name": "印刷",
            "industryId": "231",
            "parentId": "23",
            "levelType": 2,
            "children": [
              {
                "name": "书、报刊印刷",
                "industryId": "2311",
                "parentId": "231",
                "levelType": 3,
                "children": []
              },
              {
                "name": "本册印制",
                "industryId": "2312",
                "parentId": "231",
                "levelType": 3,
                "children": []
              },
              {
                "name": "包装装潢及其他印刷",
                "industryId": "2319",
                "parentId": "231",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "装订及印刷相关服务",
            "industryId": "232",
            "parentId": "23",
            "levelType": 2,
            "children": [
              {
                "name": "装订及印刷相关服务",
                "industryId": "2320",
                "parentId": "232",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "记录媒介复制",
            "industryId": "233",
            "parentId": "23",
            "levelType": 2,
            "children": [
              {
                "name": "记录媒介复制",
                "industryId": "2330",
                "parentId": "233",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "文教、工美、体育和娱乐用品制造业",
        "industryId": "24",
        "parentId": "C",
        "levelType": 1,
        "children": [
          {
            "name": "文教办公用品制造",
            "industryId": "241",
            "parentId": "24",
            "levelType": 2,
            "children": [
              {
                "name": "文具制造",
                "industryId": "2411",
                "parentId": "241",
                "levelType": 3,
                "children": []
              },
              {
                "name": "笔的制造",
                "industryId": "2412",
                "parentId": "241",
                "levelType": 3,
                "children": []
              },
              {
                "name": "教学用模型及教具制造",
                "industryId": "2413",
                "parentId": "241",
                "levelType": 3,
                "children": []
              },
              {
                "name": "墨水、墨汁制造",
                "industryId": "2414",
                "parentId": "241",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他文教办公用品制造",
                "industryId": "2419",
                "parentId": "241",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "乐器制造",
            "industryId": "242",
            "parentId": "24",
            "levelType": 2,
            "children": [
              {
                "name": "中乐器制造",
                "industryId": "2421",
                "parentId": "242",
                "levelType": 3,
                "children": []
              },
              {
                "name": "西乐器制造",
                "industryId": "2422",
                "parentId": "242",
                "levelType": 3,
                "children": []
              },
              {
                "name": "电子乐器制造",
                "industryId": "2423",
                "parentId": "242",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他乐器及零件制造",
                "industryId": "2429",
                "parentId": "242",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "工艺美术及礼仪用品制造",
            "industryId": "243",
            "parentId": "24",
            "levelType": 2,
            "children": [
              {
                "name": "雕塑工艺品制造",
                "industryId": "2431",
                "parentId": "243",
                "levelType": 3,
                "children": []
              },
              {
                "name": "金属工艺品制造",
                "industryId": "2432",
                "parentId": "243",
                "levelType": 3,
                "children": []
              },
              {
                "name": "漆器工艺品制造",
                "industryId": "2433",
                "parentId": "243",
                "levelType": 3,
                "children": []
              },
              {
                "name": "花画工艺品制造",
                "industryId": "2434",
                "parentId": "243",
                "levelType": 3,
                "children": []
              },
              {
                "name": "天然植物纤维编织工艺品制造",
                "industryId": "2435",
                "parentId": "243",
                "levelType": 3,
                "children": []
              },
              {
                "name": "抽纱刺绣工艺品制造",
                "industryId": "2436",
                "parentId": "243",
                "levelType": 3,
                "children": []
              },
              {
                "name": "地毯、挂毯制造",
                "industryId": "2437",
                "parentId": "243",
                "levelType": 3,
                "children": []
              },
              {
                "name": "珠宝首饰及有关物品制造",
                "industryId": "2438",
                "parentId": "243",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他工艺美术及礼仪用品制造",
                "industryId": "2439",
                "parentId": "243",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "体育用品制造",
            "industryId": "244",
            "parentId": "24",
            "levelType": 2,
            "children": [
              {
                "name": "球类制造",
                "industryId": "2441",
                "parentId": "244",
                "levelType": 3,
                "children": []
              },
              {
                "name": "专项运动器材及配件制造",
                "industryId": "2442",
                "parentId": "244",
                "levelType": 3,
                "children": []
              },
              {
                "name": "健身器材制造",
                "industryId": "2443",
                "parentId": "244",
                "levelType": 3,
                "children": []
              },
              {
                "name": "运动防护用具制造",
                "industryId": "2444",
                "parentId": "244",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他体育用品制造",
                "industryId": "2449",
                "parentId": "244",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "玩具制造",
            "industryId": "245",
            "parentId": "24",
            "levelType": 2,
            "children": [
              {
                "name": "电玩具制造",
                "industryId": "2451",
                "parentId": "245",
                "levelType": 3,
                "children": []
              },
              {
                "name": "塑胶玩具制造",
                "industryId": "2452",
                "parentId": "245",
                "levelType": 3,
                "children": []
              },
              {
                "name": "金属玩具制造",
                "industryId": "2453",
                "parentId": "245",
                "levelType": 3,
                "children": []
              },
              {
                "name": "弹射玩具制造",
                "industryId": "2454",
                "parentId": "245",
                "levelType": 3,
                "children": []
              },
              {
                "name": "娃娃玩具制造",
                "industryId": "2455",
                "parentId": "245",
                "levelType": 3,
                "children": []
              },
              {
                "name": "儿童乘骑玩耍的童车类产品制造",
                "industryId": "2456",
                "parentId": "245",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他玩具制造",
                "industryId": "2459",
                "parentId": "245",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "游艺器材及娱乐用品制造",
            "industryId": "246",
            "parentId": "24",
            "levelType": 2,
            "children": [
              {
                "name": "露天游乐场所游乐设备制造",
                "industryId": "2461",
                "parentId": "246",
                "levelType": 3,
                "children": []
              },
              {
                "name": "游艺用品及室内游艺器材制造",
                "industryId": "2462",
                "parentId": "246",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他娱乐用品制造",
                "industryId": "2469",
                "parentId": "246",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "石油、煤炭及其他燃料加工业",
        "industryId": "25",
        "parentId": "C",
        "levelType": 1,
        "children": [
          {
            "name": "精炼石油产品制造",
            "industryId": "251",
            "parentId": "25",
            "levelType": 2,
            "children": [
              {
                "name": "原油加工及石油制品制造",
                "industryId": "2511",
                "parentId": "251",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他原油制造",
                "industryId": "2519",
                "parentId": "251",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "煤炭加工",
            "industryId": "252",
            "parentId": "25",
            "levelType": 2,
            "children": [
              {
                "name": "炼焦",
                "industryId": "2521",
                "parentId": "252",
                "levelType": 3,
                "children": []
              },
              {
                "name": "煤制合成气生产",
                "industryId": "2522",
                "parentId": "252",
                "levelType": 3,
                "children": []
              },
              {
                "name": "煤制液体燃料生产",
                "industryId": "2523",
                "parentId": "252",
                "levelType": 3,
                "children": []
              },
              {
                "name": "煤制品制造",
                "industryId": "2524",
                "parentId": "252",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他煤炭加工",
                "industryId": "2529",
                "parentId": "252",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "核燃料加工",
            "industryId": "253",
            "parentId": "25",
            "levelType": 2,
            "children": [
              {
                "name": "核燃料加工",
                "industryId": "2530",
                "parentId": "253",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "生物质燃料加工",
            "industryId": "254",
            "parentId": "25",
            "levelType": 2,
            "children": [
              {
                "name": "生物质液体燃料生产",
                "industryId": "2541",
                "parentId": "254",
                "levelType": 3,
                "children": []
              },
              {
                "name": "生物质致密成型燃料加工",
                "industryId": "2542",
                "parentId": "254",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "化学原料和化学制品制造业",
        "industryId": "26",
        "parentId": "C",
        "levelType": 1,
        "children": [
          {
            "name": "基础化学原料制造",
            "industryId": "261",
            "parentId": "26",
            "levelType": 2,
            "children": [
              {
                "name": "无机酸制造",
                "industryId": "2611",
                "parentId": "261",
                "levelType": 3,
                "children": []
              },
              {
                "name": "无机碱制造",
                "industryId": "2612",
                "parentId": "261",
                "levelType": 3,
                "children": []
              },
              {
                "name": "无机盐制造",
                "industryId": "2613",
                "parentId": "261",
                "levelType": 3,
                "children": []
              },
              {
                "name": "有机化学原料制造",
                "industryId": "2614",
                "parentId": "261",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他基础化学原料制造",
                "industryId": "2619",
                "parentId": "261",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "肥料制造",
            "industryId": "262",
            "parentId": "26",
            "levelType": 2,
            "children": [
              {
                "name": "氮肥制造",
                "industryId": "2621",
                "parentId": "262",
                "levelType": 3,
                "children": []
              },
              {
                "name": "磷肥制造",
                "industryId": "2622",
                "parentId": "262",
                "levelType": 3,
                "children": []
              },
              {
                "name": "钾肥制造",
                "industryId": "2623",
                "parentId": "262",
                "levelType": 3,
                "children": []
              },
              {
                "name": "复混肥料制造",
                "industryId": "2624",
                "parentId": "262",
                "levelType": 3,
                "children": []
              },
              {
                "name": "有机肥料及微生物肥料制造",
                "industryId": "2625",
                "parentId": "262",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他肥料制造",
                "industryId": "2629",
                "parentId": "262",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "农药制造",
            "industryId": "263",
            "parentId": "26",
            "levelType": 2,
            "children": [
              {
                "name": "化学农药制造",
                "industryId": "2631",
                "parentId": "263",
                "levelType": 3,
                "children": []
              },
              {
                "name": "生物化学农药及微生物农药制造",
                "industryId": "2632",
                "parentId": "263",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "涂料、油墨、颜料及类似产品制造",
            "industryId": "264",
            "parentId": "26",
            "levelType": 2,
            "children": [
              {
                "name": "涂料制造",
                "industryId": "2641",
                "parentId": "264",
                "levelType": 3,
                "children": []
              },
              {
                "name": "油墨及类似产品制造",
                "industryId": "2642",
                "parentId": "264",
                "levelType": 3,
                "children": []
              },
              {
                "name": "工业颜料制造",
                "industryId": "2643",
                "parentId": "264",
                "levelType": 3,
                "children": []
              },
              {
                "name": "工艺美术颜料制造",
                "industryId": "2644",
                "parentId": "264",
                "levelType": 3,
                "children": []
              },
              {
                "name": "染料制造",
                "industryId": "2645",
                "parentId": "264",
                "levelType": 3,
                "children": []
              },
              {
                "name": "密封用填料及类似品制造",
                "industryId": "2646",
                "parentId": "264",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "合成材料制造",
            "industryId": "265",
            "parentId": "26",
            "levelType": 2,
            "children": [
              {
                "name": "初级形态塑料及合成树脂制造",
                "industryId": "2651",
                "parentId": "265",
                "levelType": 3,
                "children": []
              },
              {
                "name": "合成橡胶制造",
                "industryId": "2652",
                "parentId": "265",
                "levelType": 3,
                "children": []
              },
              {
                "name": "合成纤维单(聚合)体制造",
                "industryId": "2653",
                "parentId": "265",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他合成材料制造",
                "industryId": "2659",
                "parentId": "265",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "专用化学产品制造",
            "industryId": "266",
            "parentId": "26",
            "levelType": 2,
            "children": [
              {
                "name": "化学试剂和助剂制造",
                "industryId": "2661",
                "parentId": "266",
                "levelType": 3,
                "children": []
              },
              {
                "name": "专项化学用品制造",
                "industryId": "2662",
                "parentId": "266",
                "levelType": 3,
                "children": []
              },
              {
                "name": "林产化学产品制造",
                "industryId": "2663",
                "parentId": "266",
                "levelType": 3,
                "children": []
              },
              {
                "name": "文化用信息化学品制造",
                "industryId": "2664",
                "parentId": "266",
                "levelType": 3,
                "children": []
              },
              {
                "name": "医学生产用信息化学品制造",
                "industryId": "2665",
                "parentId": "266",
                "levelType": 3,
                "children": []
              },
              {
                "name": "环境污染处理专用药剂材料制造",
                "industryId": "2666",
                "parentId": "266",
                "levelType": 3,
                "children": []
              },
              {
                "name": "动物胶制造",
                "industryId": "2667",
                "parentId": "266",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他专用化学产品制造",
                "industryId": "2669",
                "parentId": "266",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "炸药、火工及焰火产品制造",
            "industryId": "267",
            "parentId": "26",
            "levelType": 2,
            "children": [
              {
                "name": "炸药及火工产品制造",
                "industryId": "2671",
                "parentId": "267",
                "levelType": 3,
                "children": []
              },
              {
                "name": "焰火、鞭炮产品制造",
                "industryId": "2672",
                "parentId": "267",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "日用化学产品制造",
            "industryId": "268",
            "parentId": "26",
            "levelType": 2,
            "children": [
              {
                "name": "肥皂及洗涤剂制造",
                "industryId": "2681",
                "parentId": "268",
                "levelType": 3,
                "children": []
              },
              {
                "name": "化妆品制造",
                "industryId": "2682",
                "parentId": "268",
                "levelType": 3,
                "children": []
              },
              {
                "name": "口腔清洁用品制造",
                "industryId": "2683",
                "parentId": "268",
                "levelType": 3,
                "children": []
              },
              {
                "name": "香料、香精制造",
                "industryId": "2684",
                "parentId": "268",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他日用化学产品制造",
                "industryId": "2689",
                "parentId": "268",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "医药制造业",
        "industryId": "27",
        "parentId": "C",
        "levelType": 1,
        "children": [
          {
            "name": "化学药品原料药制造",
            "industryId": "271",
            "parentId": "27",
            "levelType": 2,
            "children": [
              {
                "name": "化学药品原料药制造",
                "industryId": "2710",
                "parentId": "271",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "化学药品制剂制造",
            "industryId": "272",
            "parentId": "27",
            "levelType": 2,
            "children": [
              {
                "name": "化学药品制剂制造",
                "industryId": "2720",
                "parentId": "272",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "中药饮片加工",
            "industryId": "273",
            "parentId": "27",
            "levelType": 2,
            "children": [
              {
                "name": "中药饮片加工",
                "industryId": "2730",
                "parentId": "273",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "中成药生产",
            "industryId": "274",
            "parentId": "27",
            "levelType": 2,
            "children": [
              {
                "name": "中成药生产",
                "industryId": "2740",
                "parentId": "274",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "兽用药品制造",
            "industryId": "275",
            "parentId": "27",
            "levelType": 2,
            "children": [
              {
                "name": "兽用药品制造",
                "industryId": "2750",
                "parentId": "275",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "生物药品制品制造",
            "industryId": "276",
            "parentId": "27",
            "levelType": 2,
            "children": [
              {
                "name": "生物药品制造",
                "industryId": "2761",
                "parentId": "276",
                "levelType": 3,
                "children": []
              },
              {
                "name": "基因工程药物和疫苗制造",
                "industryId": "2762",
                "parentId": "276",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "卫生材料及医药用品制造",
            "industryId": "277",
            "parentId": "27",
            "levelType": 2,
            "children": [
              {
                "name": "卫生材料及医药用品制造",
                "industryId": "2770",
                "parentId": "277",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "药用辅料及包装材料制造",
            "industryId": "278",
            "parentId": "27",
            "levelType": 2,
            "children": [
              {
                "name": "药用辅料及包装材料制造",
                "industryId": "2780",
                "parentId": "278",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "化学纤维制造业",
        "industryId": "28",
        "parentId": "C",
        "levelType": 1,
        "children": [
          {
            "name": "纤维素纤维原料及纤维制造",
            "industryId": "281",
            "parentId": "28",
            "levelType": 2,
            "children": [
              {
                "name": "化纤浆粕制造",
                "industryId": "2811",
                "parentId": "281",
                "levelType": 3,
                "children": []
              },
              {
                "name": "人造纤维（纤维素纤维）制造",
                "industryId": "2812",
                "parentId": "281",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "合成纤维制造",
            "industryId": "282",
            "parentId": "28",
            "levelType": 2,
            "children": [
              {
                "name": "锦纶纤维制造",
                "industryId": "2821",
                "parentId": "282",
                "levelType": 3,
                "children": []
              },
              {
                "name": "涤纶纤维制造",
                "industryId": "2822",
                "parentId": "282",
                "levelType": 3,
                "children": []
              },
              {
                "name": "腈纶纤维制造",
                "industryId": "2823",
                "parentId": "282",
                "levelType": 3,
                "children": []
              },
              {
                "name": "维纶纤维制造",
                "industryId": "2824",
                "parentId": "282",
                "levelType": 3,
                "children": []
              },
              {
                "name": "丙纶纤维制造",
                "industryId": "2825",
                "parentId": "282",
                "levelType": 3,
                "children": []
              },
              {
                "name": "氨纶纤维制造",
                "industryId": "2826",
                "parentId": "282",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他合成纤维制造",
                "industryId": "2829",
                "parentId": "282",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "生物基材料制造",
            "industryId": "283",
            "parentId": "28",
            "levelType": 2,
            "children": [
              {
                "name": "生物基化学纤维制造",
                "industryId": "2831",
                "parentId": "283",
                "levelType": 3,
                "children": []
              },
              {
                "name": "生物基、淀粉基新材料制造",
                "industryId": "2832",
                "parentId": "283",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "橡胶和塑料制品业",
        "industryId": "29",
        "parentId": "C",
        "levelType": 1,
        "children": [
          {
            "name": "橡胶制品业",
            "industryId": "291",
            "parentId": "29",
            "levelType": 2,
            "children": [
              {
                "name": "轮胎制造",
                "industryId": "2911",
                "parentId": "291",
                "levelType": 3,
                "children": []
              },
              {
                "name": "橡胶板、管、带制造",
                "industryId": "2912",
                "parentId": "291",
                "levelType": 3,
                "children": []
              },
              {
                "name": "橡胶零件制造",
                "industryId": "2913",
                "parentId": "291",
                "levelType": 3,
                "children": []
              },
              {
                "name": "再生橡胶制造",
                "industryId": "2914",
                "parentId": "291",
                "levelType": 3,
                "children": []
              },
              {
                "name": "日用及医用橡胶制品制造",
                "industryId": "2915",
                "parentId": "291",
                "levelType": 3,
                "children": []
              },
              {
                "name": "运动场地用塑胶制造",
                "industryId": "2916",
                "parentId": "291",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他橡胶制品制造",
                "industryId": "2919",
                "parentId": "291",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "塑料制品业",
            "industryId": "292",
            "parentId": "29",
            "levelType": 2,
            "children": [
              {
                "name": "塑料薄膜制造",
                "industryId": "2921",
                "parentId": "292",
                "levelType": 3,
                "children": []
              },
              {
                "name": "塑料板、管、型材制造",
                "industryId": "2922",
                "parentId": "292",
                "levelType": 3,
                "children": []
              },
              {
                "name": "塑料丝、绳及编织品制造",
                "industryId": "2923",
                "parentId": "292",
                "levelType": 3,
                "children": []
              },
              {
                "name": "泡沫塑料制造",
                "industryId": "2924",
                "parentId": "292",
                "levelType": 3,
                "children": []
              },
              {
                "name": "塑料人造革、合成革制造",
                "industryId": "2925",
                "parentId": "292",
                "levelType": 3,
                "children": []
              },
              {
                "name": "塑料包装箱及容器制造",
                "industryId": "2926",
                "parentId": "292",
                "levelType": 3,
                "children": []
              },
              {
                "name": "日用塑料制品制造",
                "industryId": "2927",
                "parentId": "292",
                "levelType": 3,
                "children": []
              },
              {
                "name": "人造草坪制造",
                "industryId": "2928",
                "parentId": "292",
                "levelType": 3,
                "children": []
              },
              {
                "name": "塑料零件及其他塑料制品制造",
                "industryId": "2929",
                "parentId": "292",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "非金属矿物制品业",
        "industryId": "30",
        "parentId": "C",
        "levelType": 1,
        "children": [
          {
            "name": "水泥、石灰和石膏制造",
            "industryId": "301",
            "parentId": "30",
            "levelType": 2,
            "children": [
              {
                "name": "水泥制造",
                "industryId": "3011",
                "parentId": "301",
                "levelType": 3,
                "children": []
              },
              {
                "name": "石灰和石膏制造",
                "industryId": "3012",
                "parentId": "301",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "石膏、水泥制品及类似制品制造",
            "industryId": "302",
            "parentId": "30",
            "levelType": 2,
            "children": [
              {
                "name": "水泥制品制造",
                "industryId": "3021",
                "parentId": "302",
                "levelType": 3,
                "children": []
              },
              {
                "name": "砼结构构件制造",
                "industryId": "3022",
                "parentId": "302",
                "levelType": 3,
                "children": []
              },
              {
                "name": "石棉水泥制品制造",
                "industryId": "3023",
                "parentId": "302",
                "levelType": 3,
                "children": []
              },
              {
                "name": "轻质建筑材料制造",
                "industryId": "3024",
                "parentId": "302",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他水泥类似制品制造",
                "industryId": "3029",
                "parentId": "302",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "砖瓦、石材等建筑材料制造",
            "industryId": "303",
            "parentId": "30",
            "levelType": 2,
            "children": [
              {
                "name": "粘土砖瓦及建筑砌块制造",
                "industryId": "3031",
                "parentId": "303",
                "levelType": 3,
                "children": []
              },
              {
                "name": "建筑用石加工",
                "industryId": "3032",
                "parentId": "303",
                "levelType": 3,
                "children": []
              },
              {
                "name": "防水建筑材料制造",
                "industryId": "3033",
                "parentId": "303",
                "levelType": 3,
                "children": []
              },
              {
                "name": "隔热和隔音材料制造",
                "industryId": "3034",
                "parentId": "303",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他建筑材料制造",
                "industryId": "3039",
                "parentId": "303",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "玻璃制造",
            "industryId": "304",
            "parentId": "30",
            "levelType": 2,
            "children": [
              {
                "name": "平板玻璃制造",
                "industryId": "3041",
                "parentId": "304",
                "levelType": 3,
                "children": []
              },
              {
                "name": "特种玻璃制造",
                "industryId": "3042",
                "parentId": "304",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他玻璃制造",
                "industryId": "3049",
                "parentId": "304",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "玻璃制品制造",
            "industryId": "305",
            "parentId": "30",
            "levelType": 2,
            "children": [
              {
                "name": "技术玻璃制品制造",
                "industryId": "3051",
                "parentId": "305",
                "levelType": 3,
                "children": []
              },
              {
                "name": "光学玻璃制造",
                "industryId": "3052",
                "parentId": "305",
                "levelType": 3,
                "children": []
              },
              {
                "name": "玻璃仪器制造",
                "industryId": "3053",
                "parentId": "305",
                "levelType": 3,
                "children": []
              },
              {
                "name": "日用玻璃制品制造",
                "industryId": "3054",
                "parentId": "305",
                "levelType": 3,
                "children": []
              },
              {
                "name": "玻璃包装容器制造",
                "industryId": "3055",
                "parentId": "305",
                "levelType": 3,
                "children": []
              },
              {
                "name": "玻璃保温容器制造",
                "industryId": "3056",
                "parentId": "305",
                "levelType": 3,
                "children": []
              },
              {
                "name": "制镜及类似品加工",
                "industryId": "3057",
                "parentId": "305",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他玻璃制品制造",
                "industryId": "3059",
                "parentId": "305",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "玻璃纤维和玻璃纤维增强塑料制品制造",
            "industryId": "306",
            "parentId": "30",
            "levelType": 2,
            "children": [
              {
                "name": "玻璃纤维及制品制造",
                "industryId": "3061",
                "parentId": "306",
                "levelType": 3,
                "children": []
              },
              {
                "name": "玻璃纤维增强塑料制品制造",
                "industryId": "3062",
                "parentId": "306",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "陶瓷制品制造",
            "industryId": "307",
            "parentId": "30",
            "levelType": 2,
            "children": [
              {
                "name": "建筑陶瓷制品制造",
                "industryId": "3071",
                "parentId": "307",
                "levelType": 3,
                "children": []
              },
              {
                "name": "卫生陶瓷制品制造",
                "industryId": "3072",
                "parentId": "307",
                "levelType": 3,
                "children": []
              },
              {
                "name": "特种陶瓷制品制造",
                "industryId": "3073",
                "parentId": "307",
                "levelType": 3,
                "children": []
              },
              {
                "name": "日用陶瓷制品制造",
                "industryId": "3074",
                "parentId": "307",
                "levelType": 3,
                "children": []
              },
              {
                "name": "陈设艺术陶瓷制造",
                "industryId": "3075",
                "parentId": "307",
                "levelType": 3,
                "children": []
              },
              {
                "name": "园艺陶瓷制造",
                "industryId": "3076",
                "parentId": "307",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他陶瓷制品制造",
                "industryId": "3079",
                "parentId": "307",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "耐火材料制品制造",
            "industryId": "308",
            "parentId": "30",
            "levelType": 2,
            "children": [
              {
                "name": "石棉制品制造",
                "industryId": "3081",
                "parentId": "308",
                "levelType": 3,
                "children": []
              },
              {
                "name": "云母制品制造",
                "industryId": "3082",
                "parentId": "308",
                "levelType": 3,
                "children": []
              },
              {
                "name": "耐火陶瓷制品及其他耐火材料制造",
                "industryId": "3089",
                "parentId": "308",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "石墨及其他非金属矿物制品制造",
            "industryId": "309",
            "parentId": "30",
            "levelType": 2,
            "children": [
              {
                "name": "石墨及碳素制品制造",
                "industryId": "3091",
                "parentId": "309",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他非金属矿物制品制造",
                "industryId": "3099",
                "parentId": "309",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "黑色金属冶炼和压延加工业",
        "industryId": "31",
        "parentId": "C",
        "levelType": 1,
        "children": [
          {
            "name": "炼铁",
            "industryId": "311",
            "parentId": "31",
            "levelType": 2,
            "children": [
              {
                "name": "炼铁",
                "industryId": "3110",
                "parentId": "311",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "炼钢",
            "industryId": "312",
            "parentId": "31",
            "levelType": 2,
            "children": [
              {
                "name": "炼钢",
                "industryId": "3120",
                "parentId": "312",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "钢压延加工",
            "industryId": "313",
            "parentId": "31",
            "levelType": 2,
            "children": [
              {
                "name": "钢压延加工",
                "industryId": "3130",
                "parentId": "313",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "铁合金冶炼",
            "industryId": "314",
            "parentId": "31",
            "levelType": 2,
            "children": [
              {
                "name": "铁合金冶炼",
                "industryId": "3140",
                "parentId": "314",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "有色金属冶炼和压延加工业",
        "industryId": "32",
        "parentId": "C",
        "levelType": 1,
        "children": [
          {
            "name": "常用有色金属冶炼",
            "industryId": "321",
            "parentId": "32",
            "levelType": 2,
            "children": [
              {
                "name": "铜冶炼",
                "industryId": "3211",
                "parentId": "321",
                "levelType": 3,
                "children": []
              },
              {
                "name": "铅锌冶炼",
                "industryId": "3212",
                "parentId": "321",
                "levelType": 3,
                "children": []
              },
              {
                "name": "镍钴冶炼",
                "industryId": "3213",
                "parentId": "321",
                "levelType": 3,
                "children": []
              },
              {
                "name": "锡冶炼",
                "industryId": "3214",
                "parentId": "321",
                "levelType": 3,
                "children": []
              },
              {
                "name": "锑冶炼",
                "industryId": "3215",
                "parentId": "321",
                "levelType": 3,
                "children": []
              },
              {
                "name": "铝冶炼",
                "industryId": "3216",
                "parentId": "321",
                "levelType": 3,
                "children": []
              },
              {
                "name": "镁冶炼",
                "industryId": "3217",
                "parentId": "321",
                "levelType": 3,
                "children": []
              },
              {
                "name": "硅冶炼",
                "industryId": "3218",
                "parentId": "321",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他常用有色金属冶炼",
                "industryId": "3219",
                "parentId": "321",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "贵金属冶炼",
            "industryId": "322",
            "parentId": "32",
            "levelType": 2,
            "children": [
              {
                "name": "金冶炼",
                "industryId": "3221",
                "parentId": "322",
                "levelType": 3,
                "children": []
              },
              {
                "name": "银冶炼",
                "industryId": "3222",
                "parentId": "322",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他贵金属冶炼",
                "industryId": "3229",
                "parentId": "322",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "稀有稀土金属冶炼",
            "industryId": "323",
            "parentId": "32",
            "levelType": 2,
            "children": [
              {
                "name": "钨钼冶炼",
                "industryId": "3231",
                "parentId": "323",
                "levelType": 3,
                "children": []
              },
              {
                "name": "稀土金属冶炼",
                "industryId": "3232",
                "parentId": "323",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他稀有金属冶炼",
                "industryId": "3239",
                "parentId": "323",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "有色金属合金制造",
            "industryId": "324",
            "parentId": "32",
            "levelType": 2,
            "children": [
              {
                "name": "有色金属合金制造",
                "industryId": "3240",
                "parentId": "324",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "有色金属压延加工",
            "industryId": "325",
            "parentId": "32",
            "levelType": 2,
            "children": [
              {
                "name": "铜压延加工",
                "industryId": "3251",
                "parentId": "325",
                "levelType": 3,
                "children": []
              },
              {
                "name": "铝压延加工",
                "industryId": "3252",
                "parentId": "325",
                "levelType": 3,
                "children": []
              },
              {
                "name": "贵金属压延加工",
                "industryId": "3253",
                "parentId": "325",
                "levelType": 3,
                "children": []
              },
              {
                "name": "稀有稀土金属压延加工",
                "industryId": "3254",
                "parentId": "325",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他有色金属压延加工",
                "industryId": "3259",
                "parentId": "325",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "金属制品业",
        "industryId": "33",
        "parentId": "C",
        "levelType": 1,
        "children": [
          {
            "name": "结构性金属制品制造",
            "industryId": "331",
            "parentId": "33",
            "levelType": 2,
            "children": [
              {
                "name": "金属结构制造",
                "industryId": "3311",
                "parentId": "331",
                "levelType": 3,
                "children": []
              },
              {
                "name": "金属门窗制造",
                "industryId": "3312",
                "parentId": "331",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "金属工具制造",
            "industryId": "332",
            "parentId": "33",
            "levelType": 2,
            "children": [
              {
                "name": "切削工具制造",
                "industryId": "3321",
                "parentId": "332",
                "levelType": 3,
                "children": []
              },
              {
                "name": "手工具制造",
                "industryId": "3322",
                "parentId": "332",
                "levelType": 3,
                "children": []
              },
              {
                "name": "农用及园林用金属工具制造",
                "industryId": "3323",
                "parentId": "332",
                "levelType": 3,
                "children": []
              },
              {
                "name": "刀剪及类似日用金属工具制造",
                "industryId": "3324",
                "parentId": "332",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他金属工具制造",
                "industryId": "3329",
                "parentId": "332",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "集装箱及金属包装容器制造",
            "industryId": "333",
            "parentId": "33",
            "levelType": 2,
            "children": [
              {
                "name": "集装箱制造",
                "industryId": "3331",
                "parentId": "333",
                "levelType": 3,
                "children": []
              },
              {
                "name": "金属压力容器制造",
                "industryId": "3332",
                "parentId": "333",
                "levelType": 3,
                "children": []
              },
              {
                "name": "金属包装容器及材料制造",
                "industryId": "3333",
                "parentId": "333",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "金属丝绳及其制品制造",
            "industryId": "334",
            "parentId": "33",
            "levelType": 2,
            "children": [
              {
                "name": "金属丝绳及其制品制造",
                "industryId": "3340",
                "parentId": "334",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "建筑、安全用金属制品制造",
            "industryId": "335",
            "parentId": "33",
            "levelType": 2,
            "children": [
              {
                "name": "建筑、家具用金属配件制造",
                "industryId": "3351",
                "parentId": "335",
                "levelType": 3,
                "children": []
              },
              {
                "name": "建筑装饰及水暖管道零件制造",
                "industryId": "3352",
                "parentId": "335",
                "levelType": 3,
                "children": []
              },
              {
                "name": "安全、消防用金属制品制造",
                "industryId": "3353",
                "parentId": "335",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他建筑、安全用金属制品制造",
                "industryId": "3359",
                "parentId": "335",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "金属表面处理及热处理加工",
            "industryId": "336",
            "parentId": "33",
            "levelType": 2,
            "children": [
              {
                "name": "金属表面处理及热处理加工",
                "industryId": "3360",
                "parentId": "336",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "搪瓷制品制造",
            "industryId": "337",
            "parentId": "33",
            "levelType": 2,
            "children": [
              {
                "name": "生产专用搪瓷制品制造",
                "industryId": "3371",
                "parentId": "337",
                "levelType": 3,
                "children": []
              },
              {
                "name": "建筑装饰搪瓷制品制造",
                "industryId": "3372",
                "parentId": "337",
                "levelType": 3,
                "children": []
              },
              {
                "name": "搪瓷卫生洁具制造",
                "industryId": "3373",
                "parentId": "337",
                "levelType": 3,
                "children": []
              },
              {
                "name": "搪瓷日用品及其他搪瓷制品制造",
                "industryId": "3379",
                "parentId": "337",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "金属制日用品制造",
            "industryId": "338",
            "parentId": "33",
            "levelType": 2,
            "children": [
              {
                "name": "金属制厨房用器具制造",
                "industryId": "3381",
                "parentId": "338",
                "levelType": 3,
                "children": []
              },
              {
                "name": "金属制餐具和器皿制造",
                "industryId": "3382",
                "parentId": "338",
                "levelType": 3,
                "children": []
              },
              {
                "name": "金属制卫生器具制造",
                "industryId": "3383",
                "parentId": "338",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他金属制日用品制造",
                "industryId": "3389",
                "parentId": "338",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "铸造及其他金属制品制造",
            "industryId": "339",
            "parentId": "33",
            "levelType": 2,
            "children": [
              {
                "name": "黑色金属铸造",
                "industryId": "3391",
                "parentId": "339",
                "levelType": 3,
                "children": []
              },
              {
                "name": "有色金属铸造",
                "industryId": "3392",
                "parentId": "339",
                "levelType": 3,
                "children": []
              },
              {
                "name": "锻件及粉末冶金制品制造",
                "industryId": "3393",
                "parentId": "339",
                "levelType": 3,
                "children": []
              },
              {
                "name": "交通及公共管理用金属标牌制造",
                "industryId": "3394",
                "parentId": "339",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他未列明金属制品制造",
                "industryId": "3399",
                "parentId": "339",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "通用设备制造业",
        "industryId": "34",
        "parentId": "C",
        "levelType": 1,
        "children": [
          {
            "name": "锅炉及原动设备制造",
            "industryId": "341",
            "parentId": "34",
            "levelType": 2,
            "children": [
              {
                "name": "锅炉及辅助设备制造",
                "industryId": "3411",
                "parentId": "341",
                "levelType": 3,
                "children": []
              },
              {
                "name": "内燃机及配件制造",
                "industryId": "3412",
                "parentId": "341",
                "levelType": 3,
                "children": []
              },
              {
                "name": "汽轮机及辅机制造",
                "industryId": "3413",
                "parentId": "341",
                "levelType": 3,
                "children": []
              },
              {
                "name": "水轮机及辅机制造",
                "industryId": "3414",
                "parentId": "341",
                "levelType": 3,
                "children": []
              },
              {
                "name": "风能原动设备制造",
                "industryId": "3415",
                "parentId": "341",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他原动设备制造",
                "industryId": "3419",
                "parentId": "341",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "金属加工机械制造",
            "industryId": "342",
            "parentId": "34",
            "levelType": 2,
            "children": [
              {
                "name": "金属切削机床制造",
                "industryId": "3421",
                "parentId": "342",
                "levelType": 3,
                "children": []
              },
              {
                "name": "金属成形机床制造",
                "industryId": "3422",
                "parentId": "342",
                "levelType": 3,
                "children": []
              },
              {
                "name": "铸造机械制造",
                "industryId": "3423",
                "parentId": "342",
                "levelType": 3,
                "children": []
              },
              {
                "name": "金属切割及焊接设备制造",
                "industryId": "3424",
                "parentId": "342",
                "levelType": 3,
                "children": []
              },
              {
                "name": "机床功能部件及附件制造",
                "industryId": "3425",
                "parentId": "342",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他金属加工机械制造",
                "industryId": "3429",
                "parentId": "342",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "物料搬运设备制造",
            "industryId": "343",
            "parentId": "34",
            "levelType": 2,
            "children": [
              {
                "name": "轻小型起重设备制造",
                "industryId": "3431",
                "parentId": "343",
                "levelType": 3,
                "children": []
              },
              {
                "name": "生产专用起重机制造",
                "industryId": "3432",
                "parentId": "343",
                "levelType": 3,
                "children": []
              },
              {
                "name": "生产专用车辆制造",
                "industryId": "3433",
                "parentId": "343",
                "levelType": 3,
                "children": []
              },
              {
                "name": "连续搬运设备制造",
                "industryId": "3434",
                "parentId": "343",
                "levelType": 3,
                "children": []
              },
              {
                "name": "电梯、自动扶梯及升降机制造",
                "industryId": "3435",
                "parentId": "343",
                "levelType": 3,
                "children": []
              },
              {
                "name": "客运索道制造",
                "industryId": "3436",
                "parentId": "343",
                "levelType": 3,
                "children": []
              },
              {
                "name": "机械式停车设备制造",
                "industryId": "3437",
                "parentId": "343",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他物料搬运设备制造",
                "industryId": "3439",
                "parentId": "343",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "泵、阀门、压缩机及类似机械制造",
            "industryId": "344",
            "parentId": "34",
            "levelType": 2,
            "children": [
              {
                "name": "泵及真空设备制造",
                "industryId": "3441",
                "parentId": "344",
                "levelType": 3,
                "children": []
              },
              {
                "name": "气体压缩机械制造",
                "industryId": "3442",
                "parentId": "344",
                "levelType": 3,
                "children": []
              },
              {
                "name": "阀门和旋塞制造",
                "industryId": "3443",
                "parentId": "344",
                "levelType": 3,
                "children": []
              },
              {
                "name": "液压动力机械及元件制造",
                "industryId": "3444",
                "parentId": "344",
                "levelType": 3,
                "children": []
              },
              {
                "name": "液力动力机械及元件制造",
                "industryId": "3445",
                "parentId": "344",
                "levelType": 3,
                "children": []
              },
              {
                "name": "气压动力机械及元件制造",
                "industryId": "3446",
                "parentId": "344",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "轴承、齿轮和传动部件制造",
            "industryId": "345",
            "parentId": "34",
            "levelType": 2,
            "children": [
              {
                "name": "滚动轴承制造",
                "industryId": "3451",
                "parentId": "345",
                "levelType": 3,
                "children": []
              },
              {
                "name": "滑动轴承制造",
                "industryId": "3452",
                "parentId": "345",
                "levelType": 3,
                "children": []
              },
              {
                "name": "齿轮及齿轮减、变速箱制造",
                "industryId": "3453",
                "parentId": "345",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他传动部件制造",
                "industryId": "3459",
                "parentId": "345",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "烘炉、风机、包装等设备制造",
            "industryId": "346",
            "parentId": "34",
            "levelType": 2,
            "children": [
              {
                "name": "烘炉、熔炉及电炉制造",
                "industryId": "3461",
                "parentId": "346",
                "levelType": 3,
                "children": []
              },
              {
                "name": "风机、风扇制造",
                "industryId": "3462",
                "parentId": "346",
                "levelType": 3,
                "children": []
              },
              {
                "name": "气体、液体分离及纯净设备制造",
                "industryId": "3463",
                "parentId": "346",
                "levelType": 3,
                "children": []
              },
              {
                "name": "制冷、空调设备制造",
                "industryId": "3464",
                "parentId": "346",
                "levelType": 3,
                "children": []
              },
              {
                "name": "风动和电动工具制造",
                "industryId": "3465",
                "parentId": "346",
                "levelType": 3,
                "children": []
              },
              {
                "name": "喷枪及类似器具制造",
                "industryId": "3466",
                "parentId": "346",
                "levelType": 3,
                "children": []
              },
              {
                "name": "包装专用设备制造",
                "industryId": "3467",
                "parentId": "346",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "文化、办公用机械制造",
            "industryId": "347",
            "parentId": "34",
            "levelType": 2,
            "children": [
              {
                "name": "电影机械制造",
                "industryId": "3471",
                "parentId": "347",
                "levelType": 3,
                "children": []
              },
              {
                "name": "幻灯及投影设备制造",
                "industryId": "3472",
                "parentId": "347",
                "levelType": 3,
                "children": []
              },
              {
                "name": "照相机及器材制造",
                "industryId": "3473",
                "parentId": "347",
                "levelType": 3,
                "children": []
              },
              {
                "name": "复印和胶印设备制造",
                "industryId": "3474",
                "parentId": "347",
                "levelType": 3,
                "children": []
              },
              {
                "name": "计算器及货币专用设备制造",
                "industryId": "3475",
                "parentId": "347",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他文化、办公用机械制造",
                "industryId": "3479",
                "parentId": "347",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "通用零部件制造",
            "industryId": "348",
            "parentId": "34",
            "levelType": 2,
            "children": [
              {
                "name": "金属密封件制造",
                "industryId": "3481",
                "parentId": "348",
                "levelType": 3,
                "children": []
              },
              {
                "name": "紧固件制造",
                "industryId": "3482",
                "parentId": "348",
                "levelType": 3,
                "children": []
              },
              {
                "name": "弹簧制造",
                "industryId": "3483",
                "parentId": "348",
                "levelType": 3,
                "children": []
              },
              {
                "name": "机械零部件加工",
                "industryId": "3484",
                "parentId": "348",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他通用零部件制造",
                "industryId": "3489",
                "parentId": "348",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "其他通用设备制造业",
            "industryId": "349",
            "parentId": "34",
            "levelType": 2,
            "children": [
              {
                "name": "工业机器人制造",
                "industryId": "3491",
                "parentId": "349",
                "levelType": 3,
                "children": []
              },
              {
                "name": "特殊作业机器人制造",
                "industryId": "3492",
                "parentId": "349",
                "levelType": 3,
                "children": []
              },
              {
                "name": "增材制造装备制造",
                "industryId": "3493",
                "parentId": "349",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他未列明通用设备制造业",
                "industryId": "3499",
                "parentId": "349",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "专用设备制造业",
        "industryId": "35",
        "parentId": "C",
        "levelType": 1,
        "children": [
          {
            "name": "采矿、冶金、建筑专用设备制造",
            "industryId": "351",
            "parentId": "35",
            "levelType": 2,
            "children": [
              {
                "name": "矿山机械制造",
                "industryId": "3511",
                "parentId": "351",
                "levelType": 3,
                "children": []
              },
              {
                "name": "石油钻采专用设备制造",
                "industryId": "3512",
                "parentId": "351",
                "levelType": 3,
                "children": []
              },
              {
                "name": "深海石油钻探设备制造",
                "industryId": "3513",
                "parentId": "351",
                "levelType": 3,
                "children": []
              },
              {
                "name": "建筑工程用机械制造",
                "industryId": "3514",
                "parentId": "351",
                "levelType": 3,
                "children": []
              },
              {
                "name": "建筑材料生产专用机械制造",
                "industryId": "3515",
                "parentId": "351",
                "levelType": 3,
                "children": []
              },
              {
                "name": "冶金专用设备制造",
                "industryId": "3516",
                "parentId": "351",
                "levelType": 3,
                "children": []
              },
              {
                "name": "隧道施工专用机械制造",
                "industryId": "3517",
                "parentId": "351",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "化工、木材、非金属加工专用设备制造",
            "industryId": "352",
            "parentId": "35",
            "levelType": 2,
            "children": [
              {
                "name": "炼油、化工生产专用设备制造",
                "industryId": "3521",
                "parentId": "352",
                "levelType": 3,
                "children": []
              },
              {
                "name": "橡胶加工专用设备制造",
                "industryId": "3522",
                "parentId": "352",
                "levelType": 3,
                "children": []
              },
              {
                "name": "塑料加工专用设备制造",
                "industryId": "3523",
                "parentId": "352",
                "levelType": 3,
                "children": []
              },
              {
                "name": "木竹材加工机械制造",
                "industryId": "3524",
                "parentId": "352",
                "levelType": 3,
                "children": []
              },
              {
                "name": "模具制造",
                "industryId": "3525",
                "parentId": "352",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他非金属加工专用设备制造",
                "industryId": "3529",
                "parentId": "352",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "食品、饮料、烟草及饲料生产专用设备制造",
            "industryId": "353",
            "parentId": "35",
            "levelType": 2,
            "children": [
              {
                "name": "食品、酒、饮料及茶生产专用设备制造",
                "industryId": "3531",
                "parentId": "353",
                "levelType": 3,
                "children": []
              },
              {
                "name": "农副食品加工专用设备制造",
                "industryId": "3532",
                "parentId": "353",
                "levelType": 3,
                "children": []
              },
              {
                "name": "烟草生产专用设备制造",
                "industryId": "3533",
                "parentId": "353",
                "levelType": 3,
                "children": []
              },
              {
                "name": "饲料生产专用设备制造",
                "industryId": "3534",
                "parentId": "353",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "印刷、制药、日化及日用品生产专用设备制造",
            "industryId": "354",
            "parentId": "35",
            "levelType": 2,
            "children": [
              {
                "name": "制浆和造纸专用设备制造",
                "industryId": "3541",
                "parentId": "354",
                "levelType": 3,
                "children": []
              },
              {
                "name": "印刷专用设备制造",
                "industryId": "3542",
                "parentId": "354",
                "levelType": 3,
                "children": []
              },
              {
                "name": "日用化工专用设备制造",
                "industryId": "3543",
                "parentId": "354",
                "levelType": 3,
                "children": []
              },
              {
                "name": "制药专用设备制造",
                "industryId": "3544",
                "parentId": "354",
                "levelType": 3,
                "children": []
              },
              {
                "name": "照明器具生产专用设备制造",
                "industryId": "3545",
                "parentId": "354",
                "levelType": 3,
                "children": []
              },
              {
                "name": "玻璃、陶瓷和搪瓷制品生产专用设备制造",
                "industryId": "3546",
                "parentId": "354",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他日用品生产专用设备制造",
                "industryId": "3549",
                "parentId": "354",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "纺织、服装和皮革加工专用设备制造",
            "industryId": "355",
            "parentId": "35",
            "levelType": 2,
            "children": [
              {
                "name": "纺织专用设备制造",
                "industryId": "3551",
                "parentId": "355",
                "levelType": 3,
                "children": []
              },
              {
                "name": "皮革、毛皮及其制品加工专用设备制造",
                "industryId": "3552",
                "parentId": "355",
                "levelType": 3,
                "children": []
              },
              {
                "name": "缝制机械制造",
                "industryId": "3553",
                "parentId": "355",
                "levelType": 3,
                "children": []
              },
              {
                "name": "洗涤机械制造",
                "industryId": "3554",
                "parentId": "355",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "电子和电工机械专用设备制造",
            "industryId": "356",
            "parentId": "35",
            "levelType": 2,
            "children": [
              {
                "name": "电工机械专用设备制造",
                "industryId": "3561",
                "parentId": "356",
                "levelType": 3,
                "children": []
              },
              {
                "name": "半导体器件专用设备制造",
                "industryId": "3562",
                "parentId": "356",
                "levelType": 3,
                "children": []
              },
              {
                "name": "电子元器件与机电组件设备制造",
                "industryId": "3563",
                "parentId": "356",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他电子专用设备制造",
                "industryId": "3569",
                "parentId": "356",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "农、林、牧、渔专用机械制造",
            "industryId": "357",
            "parentId": "35",
            "levelType": 2,
            "children": [
              {
                "name": "拖拉机制造",
                "industryId": "3571",
                "parentId": "357",
                "levelType": 3,
                "children": []
              },
              {
                "name": "机械化农业及园艺机具制造",
                "industryId": "3572",
                "parentId": "357",
                "levelType": 3,
                "children": []
              },
              {
                "name": "营林及木竹采伐机械制造",
                "industryId": "3573",
                "parentId": "357",
                "levelType": 3,
                "children": []
              },
              {
                "name": "畜牧机械制造",
                "industryId": "3574",
                "parentId": "357",
                "levelType": 3,
                "children": []
              },
              {
                "name": "渔业机械制造",
                "industryId": "3575",
                "parentId": "357",
                "levelType": 3,
                "children": []
              },
              {
                "name": "农林牧渔机械配件制造",
                "industryId": "3576",
                "parentId": "357",
                "levelType": 3,
                "children": []
              },
              {
                "name": "棉花加工机械制造",
                "industryId": "3577",
                "parentId": "357",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他农、林、牧、渔业机械制造",
                "industryId": "3579",
                "parentId": "357",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "医疗仪器设备及器械制造",
            "industryId": "358",
            "parentId": "35",
            "levelType": 2,
            "children": [
              {
                "name": "医疗诊断、监护及治疗设备制造",
                "industryId": "3581",
                "parentId": "358",
                "levelType": 3,
                "children": []
              },
              {
                "name": "口腔科用设备及器具制造",
                "industryId": "3582",
                "parentId": "358",
                "levelType": 3,
                "children": []
              },
              {
                "name": "医疗实验室及医用消毒设备和器具制造",
                "industryId": "3583",
                "parentId": "358",
                "levelType": 3,
                "children": []
              },
              {
                "name": "医疗、外科及兽医用器械制造",
                "industryId": "3584",
                "parentId": "358",
                "levelType": 3,
                "children": []
              },
              {
                "name": "机械治疗及病房护理设备制造",
                "industryId": "3585",
                "parentId": "358",
                "levelType": 3,
                "children": []
              },
              {
                "name": "康复辅具制造",
                "industryId": "3586",
                "parentId": "358",
                "levelType": 3,
                "children": []
              },
              {
                "name": "眼镜制造",
                "industryId": "3587",
                "parentId": "358",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他医疗设备及器械制造",
                "industryId": "3589",
                "parentId": "358",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "环保、邮政、社会公共服务及其他专用设备制造",
            "industryId": "359",
            "parentId": "35",
            "levelType": 2,
            "children": [
              {
                "name": "环境保护专用设备制造",
                "industryId": "3591",
                "parentId": "359",
                "levelType": 3,
                "children": []
              },
              {
                "name": "地质勘查专用设备制造",
                "industryId": "3592",
                "parentId": "359",
                "levelType": 3,
                "children": []
              },
              {
                "name": "邮政专用机械及器材制造",
                "industryId": "3593",
                "parentId": "359",
                "levelType": 3,
                "children": []
              },
              {
                "name": "商业、饮食、服务专用设备制造",
                "industryId": "3594",
                "parentId": "359",
                "levelType": 3,
                "children": []
              },
              {
                "name": "社会公共安全设备及器材制造",
                "industryId": "3595",
                "parentId": "359",
                "levelType": 3,
                "children": []
              },
              {
                "name": "交通安全、管制及类似专用设备制造",
                "industryId": "3596",
                "parentId": "359",
                "levelType": 3,
                "children": []
              },
              {
                "name": "水资源专用机械制造",
                "industryId": "3597",
                "parentId": "359",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他专用设备制造",
                "industryId": "3599",
                "parentId": "359",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "汽车制造业",
        "industryId": "36",
        "parentId": "C",
        "levelType": 1,
        "children": [
          {
            "name": "汽车整车制造",
            "industryId": "361",
            "parentId": "36",
            "levelType": 2,
            "children": [
              {
                "name": "汽柴油车整车制造",
                "industryId": "3611",
                "parentId": "361",
                "levelType": 3,
                "children": []
              },
              {
                "name": "新能源车整车制造",
                "industryId": "3612",
                "parentId": "361",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "汽车用发动机制造",
            "industryId": "362",
            "parentId": "36",
            "levelType": 2,
            "children": [
              {
                "name": "汽车用发动机制造",
                "industryId": "3620",
                "parentId": "362",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "改装汽车制造",
            "industryId": "363",
            "parentId": "36",
            "levelType": 2,
            "children": [
              {
                "name": "改装汽车制造",
                "industryId": "3630",
                "parentId": "363",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "低速汽车制造",
            "industryId": "364",
            "parentId": "36",
            "levelType": 2,
            "children": [
              {
                "name": "低速汽车制造",
                "industryId": "3640",
                "parentId": "364",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "电车制造",
            "industryId": "365",
            "parentId": "36",
            "levelType": 2,
            "children": [
              {
                "name": "电车制造",
                "industryId": "3650",
                "parentId": "365",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "汽车车身、挂车制造",
            "industryId": "366",
            "parentId": "36",
            "levelType": 2,
            "children": [
              {
                "name": "汽车车身、挂车制造",
                "industryId": "3660",
                "parentId": "366",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "汽车零部件及配件制造",
            "industryId": "367",
            "parentId": "36",
            "levelType": 2,
            "children": [
              {
                "name": "汽车零部件及配件制造",
                "industryId": "3670",
                "parentId": "367",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "铁路、船舶、航空航天和其他运输设备制造业",
        "industryId": "37",
        "parentId": "C",
        "levelType": 1,
        "children": [
          {
            "name": "铁路运输设备制造",
            "industryId": "371",
            "parentId": "37",
            "levelType": 2,
            "children": [
              {
                "name": "高铁车组制造",
                "industryId": "3711",
                "parentId": "371",
                "levelType": 3,
                "children": []
              },
              {
                "name": "铁路机车车辆制造",
                "industryId": "3712",
                "parentId": "371",
                "levelType": 3,
                "children": []
              },
              {
                "name": "窄轨机车车辆制造",
                "industryId": "3713",
                "parentId": "371",
                "levelType": 3,
                "children": []
              },
              {
                "name": "高铁设备、配件制造",
                "industryId": "3714",
                "parentId": "371",
                "levelType": 3,
                "children": []
              },
              {
                "name": "铁路机车车辆配件制造",
                "industryId": "3715",
                "parentId": "371",
                "levelType": 3,
                "children": []
              },
              {
                "name": "铁路专用设备及器材、配件制造",
                "industryId": "3716",
                "parentId": "371",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他铁路运输设备制造",
                "industryId": "3719",
                "parentId": "371",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "城市轨道交通设备制造",
            "industryId": "372",
            "parentId": "37",
            "levelType": 2,
            "children": [
              {
                "name": "城市轨道交通设备制造",
                "industryId": "3720",
                "parentId": "372",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "船舶及相关装置制造",
            "industryId": "373",
            "parentId": "37",
            "levelType": 2,
            "children": [
              {
                "name": "金属船舶制造",
                "industryId": "3731",
                "parentId": "373",
                "levelType": 3,
                "children": []
              },
              {
                "name": "非金属船舶制造",
                "industryId": "3732",
                "parentId": "373",
                "levelType": 3,
                "children": []
              },
              {
                "name": "娱乐船和运动船制造",
                "industryId": "3733",
                "parentId": "373",
                "levelType": 3,
                "children": []
              },
              {
                "name": "船用配套设备制造",
                "industryId": "3734",
                "parentId": "373",
                "levelType": 3,
                "children": []
              },
              {
                "name": "船舶改装",
                "industryId": "3735",
                "parentId": "373",
                "levelType": 3,
                "children": []
              },
              {
                "name": "船舶拆除",
                "industryId": "3736",
                "parentId": "373",
                "levelType": 3,
                "children": []
              },
              {
                "name": "海洋工程装备制造",
                "industryId": "3737",
                "parentId": "373",
                "levelType": 3,
                "children": []
              },
              {
                "name": "航标器材及其他相关装置制造",
                "industryId": "3739",
                "parentId": "373",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "航空、航天器及设备制造",
            "industryId": "374",
            "parentId": "37",
            "levelType": 2,
            "children": [
              {
                "name": "飞机制造",
                "industryId": "3741",
                "parentId": "374",
                "levelType": 3,
                "children": []
              },
              {
                "name": "航天器及运载火箭制造",
                "industryId": "3742",
                "parentId": "374",
                "levelType": 3,
                "children": []
              },
              {
                "name": "航天相关设备制造",
                "industryId": "3743",
                "parentId": "374",
                "levelType": 3,
                "children": []
              },
              {
                "name": "航空相关设备制造",
                "industryId": "3744",
                "parentId": "374",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他航空航天器制造",
                "industryId": "3749",
                "parentId": "374",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "摩托车制造",
            "industryId": "375",
            "parentId": "37",
            "levelType": 2,
            "children": [
              {
                "name": "摩托车整车制造",
                "industryId": "3751",
                "parentId": "375",
                "levelType": 3,
                "children": []
              },
              {
                "name": "摩托车零部件及配件制造",
                "industryId": "3752",
                "parentId": "375",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "自行车和残疾人座车制造",
            "industryId": "376",
            "parentId": "37",
            "levelType": 2,
            "children": [
              {
                "name": "自行车制造",
                "industryId": "3761",
                "parentId": "376",
                "levelType": 3,
                "children": []
              },
              {
                "name": "残疾人座车制造",
                "industryId": "3762",
                "parentId": "376",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "助动车制造",
            "industryId": "377",
            "parentId": "37",
            "levelType": 2,
            "children": [
              {
                "name": "助动车制造",
                "industryId": "3770",
                "parentId": "377",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "非公路休闲车及零配件制造",
            "industryId": "378",
            "parentId": "37",
            "levelType": 2,
            "children": [
              {
                "name": "非公路休闲车及零配件制造",
                "industryId": "3780",
                "parentId": "378",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "潜水救捞及其他未列明运输设备制造",
            "industryId": "379",
            "parentId": "37",
            "levelType": 2,
            "children": [
              {
                "name": "潜水装备制造",
                "industryId": "3791",
                "parentId": "379",
                "levelType": 3,
                "children": []
              },
              {
                "name": "水下救捞装备制造",
                "industryId": "3792",
                "parentId": "379",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他未列明运输设备制造",
                "industryId": "3799",
                "parentId": "379",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "电气机械和器材制造业",
        "industryId": "38",
        "parentId": "C",
        "levelType": 1,
        "children": [
          {
            "name": "电机制造",
            "industryId": "381",
            "parentId": "38",
            "levelType": 2,
            "children": [
              {
                "name": "发电机及发电机组制造",
                "industryId": "3811",
                "parentId": "381",
                "levelType": 3,
                "children": []
              },
              {
                "name": "电动机制造",
                "industryId": "3812",
                "parentId": "381",
                "levelType": 3,
                "children": []
              },
              {
                "name": "微特电机及组件制造",
                "industryId": "3813",
                "parentId": "381",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他电机制造",
                "industryId": "3819",
                "parentId": "381",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "输配电及控制设备制造",
            "industryId": "382",
            "parentId": "38",
            "levelType": 2,
            "children": [
              {
                "name": "变压器、整流器和电感器制造",
                "industryId": "3821",
                "parentId": "382",
                "levelType": 3,
                "children": []
              },
              {
                "name": "电容器及其配套设备制造",
                "industryId": "3822",
                "parentId": "382",
                "levelType": 3,
                "children": []
              },
              {
                "name": "配电开关控制设备制造",
                "industryId": "3823",
                "parentId": "382",
                "levelType": 3,
                "children": []
              },
              {
                "name": "电力电子元器件制造",
                "industryId": "3824",
                "parentId": "382",
                "levelType": 3,
                "children": []
              },
              {
                "name": "光伏设备及元器件制造",
                "industryId": "3825",
                "parentId": "382",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他输配电及控制设备制造",
                "industryId": "3829",
                "parentId": "382",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "电线、电缆、光缆及电工器材制造",
            "industryId": "383",
            "parentId": "38",
            "levelType": 2,
            "children": [
              {
                "name": "电线、电缆制造",
                "industryId": "3831",
                "parentId": "383",
                "levelType": 3,
                "children": []
              },
              {
                "name": "光纤制造",
                "industryId": "3832",
                "parentId": "383",
                "levelType": 3,
                "children": []
              },
              {
                "name": "光缆制造",
                "industryId": "3833",
                "parentId": "383",
                "levelType": 3,
                "children": []
              },
              {
                "name": "绝缘制品制造",
                "industryId": "3834",
                "parentId": "383",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他电工器材制造",
                "industryId": "3839",
                "parentId": "383",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "电池制造",
            "industryId": "384",
            "parentId": "38",
            "levelType": 2,
            "children": [
              {
                "name": "锂离子电池制造",
                "industryId": "3841",
                "parentId": "384",
                "levelType": 3,
                "children": []
              },
              {
                "name": "镍氢电池制造",
                "industryId": "3842",
                "parentId": "384",
                "levelType": 3,
                "children": []
              },
              {
                "name": "铅蓄电池制造",
                "industryId": "3843",
                "parentId": "384",
                "levelType": 3,
                "children": []
              },
              {
                "name": "锌锰电池制造",
                "industryId": "3844",
                "parentId": "384",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他电池制造",
                "industryId": "3849",
                "parentId": "384",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "家用电力器具制造",
            "industryId": "385",
            "parentId": "38",
            "levelType": 2,
            "children": [
              {
                "name": "家用制冷电器具制造",
                "industryId": "3851",
                "parentId": "385",
                "levelType": 3,
                "children": []
              },
              {
                "name": "家用空气调节器制造",
                "industryId": "3852",
                "parentId": "385",
                "levelType": 3,
                "children": []
              },
              {
                "name": "家用通风电器具制造",
                "industryId": "3853",
                "parentId": "385",
                "levelType": 3,
                "children": []
              },
              {
                "name": "家用厨房电器具制造",
                "industryId": "3854",
                "parentId": "385",
                "levelType": 3,
                "children": []
              },
              {
                "name": "家用清洁卫生电器具制造",
                "industryId": "3855",
                "parentId": "385",
                "levelType": 3,
                "children": []
              },
              {
                "name": "家用美容、保健护理电器具制造",
                "industryId": "3856",
                "parentId": "385",
                "levelType": 3,
                "children": []
              },
              {
                "name": "家用电力器具专用配件制造",
                "industryId": "3857",
                "parentId": "385",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他家用电力器具制造",
                "industryId": "3859",
                "parentId": "385",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "非电力家用器具制造",
            "industryId": "386",
            "parentId": "38",
            "levelType": 2,
            "children": [
              {
                "name": "燃气及类似能源家用器具制造",
                "industryId": "3861",
                "parentId": "386",
                "levelType": 3,
                "children": []
              },
              {
                "name": "太阳能器具制造",
                "industryId": "3862",
                "parentId": "386",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他非电力家用器具制造",
                "industryId": "3869",
                "parentId": "386",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "照明器具制造",
            "industryId": "387",
            "parentId": "38",
            "levelType": 2,
            "children": [
              {
                "name": "电光源制造",
                "industryId": "3871",
                "parentId": "387",
                "levelType": 3,
                "children": []
              },
              {
                "name": "照明灯具制造",
                "industryId": "3872",
                "parentId": "387",
                "levelType": 3,
                "children": []
              },
              {
                "name": "舞台及场地用灯制造",
                "industryId": "3873",
                "parentId": "387",
                "levelType": 3,
                "children": []
              },
              {
                "name": "智能照明器具制造",
                "industryId": "3874",
                "parentId": "387",
                "levelType": 3,
                "children": []
              },
              {
                "name": "灯用电器附件及其他照明器具制造",
                "industryId": "3879",
                "parentId": "387",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "其他电气机械及器材制造",
            "industryId": "389",
            "parentId": "38",
            "levelType": 2,
            "children": [
              {
                "name": "电气信号设备装置制造",
                "industryId": "3891",
                "parentId": "389",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他未列明电气机械及器材制造",
                "industryId": "3899",
                "parentId": "389",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "计算机、通信和其他电子设备制造业",
        "industryId": "39",
        "parentId": "C",
        "levelType": 1,
        "children": [
          {
            "name": "计算机制造",
            "industryId": "391",
            "parentId": "39",
            "levelType": 2,
            "children": [
              {
                "name": "计算机整机制造",
                "industryId": "3911",
                "parentId": "391",
                "levelType": 3,
                "children": []
              },
              {
                "name": "计算机零部件制造",
                "industryId": "3912",
                "parentId": "391",
                "levelType": 3,
                "children": []
              },
              {
                "name": "计算机外围设备制造",
                "industryId": "3913",
                "parentId": "391",
                "levelType": 3,
                "children": []
              },
              {
                "name": "工业控制计算机及系统制造",
                "industryId": "3914",
                "parentId": "391",
                "levelType": 3,
                "children": []
              },
              {
                "name": "信息安全设备制造",
                "industryId": "3915",
                "parentId": "391",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他计算机制造",
                "industryId": "3919",
                "parentId": "391",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "通信设备制造",
            "industryId": "392",
            "parentId": "39",
            "levelType": 2,
            "children": [
              {
                "name": "通信系统设备制造",
                "industryId": "3921",
                "parentId": "392",
                "levelType": 3,
                "children": []
              },
              {
                "name": "通信终端设备制造",
                "industryId": "3922",
                "parentId": "392",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "广播电视设备制造",
            "industryId": "393",
            "parentId": "39",
            "levelType": 2,
            "children": [
              {
                "name": "广播电视节目制作及发射设备制造",
                "industryId": "3931",
                "parentId": "393",
                "levelType": 3,
                "children": []
              },
              {
                "name": "广播电视接收设备制造",
                "industryId": "3932",
                "parentId": "393",
                "levelType": 3,
                "children": []
              },
              {
                "name": "广播电视专用配件制造",
                "industryId": "3933",
                "parentId": "393",
                "levelType": 3,
                "children": []
              },
              {
                "name": "专业音响设备制造",
                "industryId": "3934",
                "parentId": "393",
                "levelType": 3,
                "children": []
              },
              {
                "name": "应用电视设备及其他广播电视设备制造",
                "industryId": "3939",
                "parentId": "393",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "雷达及配套设备制造",
            "industryId": "394",
            "parentId": "39",
            "levelType": 2,
            "children": [
              {
                "name": "雷达及配套设备制造",
                "industryId": "3940",
                "parentId": "394",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "非专业视听设备制造",
            "industryId": "395",
            "parentId": "39",
            "levelType": 2,
            "children": [
              {
                "name": "电视机制造",
                "industryId": "3951",
                "parentId": "395",
                "levelType": 3,
                "children": []
              },
              {
                "name": "音响设备制造",
                "industryId": "3952",
                "parentId": "395",
                "levelType": 3,
                "children": []
              },
              {
                "name": "影视录放设备制造",
                "industryId": "3953",
                "parentId": "395",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "智能消费设备制造",
            "industryId": "396",
            "parentId": "39",
            "levelType": 2,
            "children": [
              {
                "name": "可穿戴智能设备制造",
                "industryId": "3961",
                "parentId": "396",
                "levelType": 3,
                "children": []
              },
              {
                "name": "智能车载设备制造",
                "industryId": "3962",
                "parentId": "396",
                "levelType": 3,
                "children": []
              },
              {
                "name": "智能无人飞行器制造",
                "industryId": "3963",
                "parentId": "396",
                "levelType": 3,
                "children": []
              },
              {
                "name": "服务消费机器人制造",
                "industryId": "3964",
                "parentId": "396",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他智能消费设备制造",
                "industryId": "3969",
                "parentId": "396",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "电子器件制造",
            "industryId": "397",
            "parentId": "39",
            "levelType": 2,
            "children": [
              {
                "name": "电子真空器件制造",
                "industryId": "3971",
                "parentId": "397",
                "levelType": 3,
                "children": []
              },
              {
                "name": "半导体分立器件制造",
                "industryId": "3972",
                "parentId": "397",
                "levelType": 3,
                "children": []
              },
              {
                "name": "集成电路制造",
                "industryId": "3973",
                "parentId": "397",
                "levelType": 3,
                "children": []
              },
              {
                "name": "显示器件制造",
                "industryId": "3974",
                "parentId": "397",
                "levelType": 3,
                "children": []
              },
              {
                "name": "半导体照明器件制造",
                "industryId": "3975",
                "parentId": "397",
                "levelType": 3,
                "children": []
              },
              {
                "name": "光电子器件制造",
                "industryId": "3976",
                "parentId": "397",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他电子器件制造",
                "industryId": "3979",
                "parentId": "397",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "电子元件及电子专用材料制造",
            "industryId": "398",
            "parentId": "39",
            "levelType": 2,
            "children": [
              {
                "name": "电阻电容电感元件制造",
                "industryId": "3981",
                "parentId": "398",
                "levelType": 3,
                "children": []
              },
              {
                "name": "电子电路制造",
                "industryId": "3982",
                "parentId": "398",
                "levelType": 3,
                "children": []
              },
              {
                "name": "敏感元件及传感器制造",
                "industryId": "3983",
                "parentId": "398",
                "levelType": 3,
                "children": []
              },
              {
                "name": "电声器件及零件制造",
                "industryId": "3984",
                "parentId": "398",
                "levelType": 3,
                "children": []
              },
              {
                "name": "电子专用材料制造",
                "industryId": "3985",
                "parentId": "398",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他电子元件制造",
                "industryId": "3989",
                "parentId": "398",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "其他电子设备制造",
            "industryId": "399",
            "parentId": "39",
            "levelType": 2,
            "children": [
              {
                "name": "其他电子设备制造",
                "industryId": "3990",
                "parentId": "399",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "仪器仪表制造业",
        "industryId": "40",
        "parentId": "C",
        "levelType": 1,
        "children": [
          {
            "name": "通用仪器仪表制造",
            "industryId": "401",
            "parentId": "40",
            "levelType": 2,
            "children": [
              {
                "name": "工业自动控制系统装置制造",
                "industryId": "4011",
                "parentId": "401",
                "levelType": 3,
                "children": []
              },
              {
                "name": "电工仪器仪表制造",
                "industryId": "4012",
                "parentId": "401",
                "levelType": 3,
                "children": []
              },
              {
                "name": "绘图、计算及测量仪器制造",
                "industryId": "4013",
                "parentId": "401",
                "levelType": 3,
                "children": []
              },
              {
                "name": "实验分析仪器制造",
                "industryId": "4014",
                "parentId": "401",
                "levelType": 3,
                "children": []
              },
              {
                "name": "试验机制造",
                "industryId": "4015",
                "parentId": "401",
                "levelType": 3,
                "children": []
              },
              {
                "name": "供应用仪器仪表制造",
                "industryId": "4016",
                "parentId": "401",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他通用仪器制造",
                "industryId": "4019",
                "parentId": "401",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "专用仪器仪表制造",
            "industryId": "402",
            "parentId": "40",
            "levelType": 2,
            "children": [
              {
                "name": "环境监测专用仪器仪表制造",
                "industryId": "4021",
                "parentId": "402",
                "levelType": 3,
                "children": []
              },
              {
                "name": "运输设备及生产用计数仪表制造",
                "industryId": "4022",
                "parentId": "402",
                "levelType": 3,
                "children": []
              },
              {
                "name": "导航、测绘、气象及海洋专用仪器制造",
                "industryId": "4023",
                "parentId": "402",
                "levelType": 3,
                "children": []
              },
              {
                "name": "农林牧渔专用仪器仪表制造",
                "industryId": "4024",
                "parentId": "402",
                "levelType": 3,
                "children": []
              },
              {
                "name": "地质勘探和地震专用仪器制造",
                "industryId": "4025",
                "parentId": "402",
                "levelType": 3,
                "children": []
              },
              {
                "name": "教学专用仪器制造",
                "industryId": "4026",
                "parentId": "402",
                "levelType": 3,
                "children": []
              },
              {
                "name": "核子及核辐射测量仪器制造",
                "industryId": "4027",
                "parentId": "402",
                "levelType": 3,
                "children": []
              },
              {
                "name": "电子测量仪器制造",
                "industryId": "4028",
                "parentId": "402",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他专用仪器制造",
                "industryId": "4029",
                "parentId": "402",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "钟表与计时仪器制造",
            "industryId": "403",
            "parentId": "40",
            "levelType": 2,
            "children": [
              {
                "name": "钟表与计时仪器制造",
                "industryId": "4030",
                "parentId": "403",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "光学仪器制造",
            "industryId": "404",
            "parentId": "40",
            "levelType": 2,
            "children": [
              {
                "name": "光学仪器制造",
                "industryId": "4040",
                "parentId": "404",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "衡器制造",
            "industryId": "405",
            "parentId": "40",
            "levelType": 2,
            "children": [
              {
                "name": "衡器制造",
                "industryId": "4050",
                "parentId": "405",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "其他仪器仪表制造业",
            "industryId": "409",
            "parentId": "40",
            "levelType": 2,
            "children": [
              {
                "name": "其他仪器仪表制造业",
                "industryId": "4090",
                "parentId": "409",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "其他制造业",
        "industryId": "41",
        "parentId": "C",
        "levelType": 1,
        "children": [
          {
            "name": "日用杂品制造",
            "industryId": "411",
            "parentId": "41",
            "levelType": 2,
            "children": [
              {
                "name": "鬃毛加工、制刷及清扫工具制造",
                "industryId": "4111",
                "parentId": "411",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他日用杂品制造",
                "industryId": "4119",
                "parentId": "411",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "核辐射加工",
            "industryId": "412",
            "parentId": "41",
            "levelType": 2,
            "children": [
              {
                "name": "核辐射加工",
                "industryId": "4120",
                "parentId": "412",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "其他未列明制造业",
            "industryId": "419",
            "parentId": "41",
            "levelType": 2,
            "children": [
              {
                "name": "其他未列明制造业",
                "industryId": "4190",
                "parentId": "419",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "废弃资源综合利用业",
        "industryId": "42",
        "parentId": "C",
        "levelType": 1,
        "children": [
          {
            "name": "金属废料和碎屑加工处理",
            "industryId": "421",
            "parentId": "42",
            "levelType": 2,
            "children": [
              {
                "name": "金属废料和碎屑加工处理",
                "industryId": "4210",
                "parentId": "421",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "非金属废料和碎屑加工处理",
            "industryId": "422",
            "parentId": "42",
            "levelType": 2,
            "children": [
              {
                "name": "非金属废料和碎屑加工处理",
                "industryId": "4220",
                "parentId": "422",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "金属制品、机械和设备修理业",
        "industryId": "43",
        "parentId": "C",
        "levelType": 1,
        "children": [
          {
            "name": "金属制品修理",
            "industryId": "431",
            "parentId": "43",
            "levelType": 2,
            "children": [
              {
                "name": "金属制品修理",
                "industryId": "4310",
                "parentId": "431",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "通用设备修理",
            "industryId": "432",
            "parentId": "43",
            "levelType": 2,
            "children": [
              {
                "name": "通用设备修理",
                "industryId": "4320",
                "parentId": "432",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "专用设备修理",
            "industryId": "433",
            "parentId": "43",
            "levelType": 2,
            "children": [
              {
                "name": "专用设备修理",
                "industryId": "4330",
                "parentId": "433",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "铁路、船舶、航空航天等运输设备修理",
            "industryId": "434",
            "parentId": "43",
            "levelType": 2,
            "children": [
              {
                "name": "铁路运输设备修理",
                "industryId": "4341",
                "parentId": "434",
                "levelType": 3,
                "children": []
              },
              {
                "name": "船舶修理",
                "industryId": "4342",
                "parentId": "434",
                "levelType": 3,
                "children": []
              },
              {
                "name": "航空航天器修理",
                "industryId": "4343",
                "parentId": "434",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他运输设备修理",
                "industryId": "4349",
                "parentId": "434",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "电气设备修理",
            "industryId": "435",
            "parentId": "43",
            "levelType": 2,
            "children": [
              {
                "name": "电气设备修理",
                "industryId": "4350",
                "parentId": "435",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "仪器仪表修理",
            "industryId": "436",
            "parentId": "43",
            "levelType": 2,
            "children": [
              {
                "name": "仪器仪表修理",
                "industryId": "4360",
                "parentId": "436",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "其他机械和设备修理业",
            "industryId": "439",
            "parentId": "43",
            "levelType": 2,
            "children": [
              {
                "name": "其他机械和设备修理业",
                "industryId": "4390",
                "parentId": "439",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "电力、热力、燃气及水生产和供应业",
    "industryId": "D",
    "levelType": 0,
    "children": [
      {
        "name": "电力、热力生产和供应业",
        "industryId": "44",
        "parentId": "D",
        "levelType": 1,
        "children": [
          {
            "name": "电力生产",
            "industryId": "441",
            "parentId": "44",
            "levelType": 2,
            "children": [
              {
                "name": "火力发电",
                "industryId": "4411",
                "parentId": "441",
                "levelType": 3,
                "children": []
              },
              {
                "name": "热电联产",
                "industryId": "4412",
                "parentId": "441",
                "levelType": 3,
                "children": []
              },
              {
                "name": "水力发电",
                "industryId": "4413",
                "parentId": "441",
                "levelType": 3,
                "children": []
              },
              {
                "name": "核力发电",
                "industryId": "4414",
                "parentId": "441",
                "levelType": 3,
                "children": []
              },
              {
                "name": "风力发电",
                "industryId": "4415",
                "parentId": "441",
                "levelType": 3,
                "children": []
              },
              {
                "name": "太阳能发电",
                "industryId": "4416",
                "parentId": "441",
                "levelType": 3,
                "children": []
              },
              {
                "name": "生物质能发电",
                "industryId": "4417",
                "parentId": "441",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他电力生产",
                "industryId": "4419",
                "parentId": "441",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "电力供应",
            "industryId": "442",
            "parentId": "44",
            "levelType": 2,
            "children": [
              {
                "name": "电力供应",
                "industryId": "4420",
                "parentId": "442",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "热力生产和供应",
            "industryId": "443",
            "parentId": "44",
            "levelType": 2,
            "children": [
              {
                "name": "热力生产和供应",
                "industryId": "4430",
                "parentId": "443",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "燃气生产和供应业",
        "industryId": "45",
        "parentId": "D",
        "levelType": 1,
        "children": [
          {
            "name": "燃气生产和供应业",
            "industryId": "451",
            "parentId": "45",
            "levelType": 2,
            "children": [
              {
                "name": "天然气生产和供应业",
                "industryId": "4511",
                "parentId": "451",
                "levelType": 3,
                "children": []
              },
              {
                "name": "液化石油气生产和供应业",
                "industryId": "4512",
                "parentId": "451",
                "levelType": 3,
                "children": []
              },
              {
                "name": "煤气生产和供应业",
                "industryId": "4513",
                "parentId": "451",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "生物质燃气生产和供应业",
            "industryId": "452",
            "parentId": "45",
            "levelType": 2,
            "children": [
              {
                "name": "生物质燃气生产和供应业",
                "industryId": "4520",
                "parentId": "452",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "水的生产和供应业",
        "industryId": "46",
        "parentId": "D",
        "levelType": 1,
        "children": [
          {
            "name": "自来水生产和供应",
            "industryId": "461",
            "parentId": "46",
            "levelType": 2,
            "children": [
              {
                "name": "自来水生产和供应",
                "industryId": "4610",
                "parentId": "461",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "污水处理及其再生利用",
            "industryId": "462",
            "parentId": "46",
            "levelType": 2,
            "children": [
              {
                "name": "污水处理及其再生利用",
                "industryId": "4620",
                "parentId": "462",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "海水淡化处理",
            "industryId": "463",
            "parentId": "46",
            "levelType": 2,
            "children": [
              {
                "name": "海水淡化处理",
                "industryId": "4630",
                "parentId": "463",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "其他水的处理、利用与分配",
            "industryId": "469",
            "parentId": "46",
            "levelType": 2,
            "children": [
              {
                "name": "其他水的处理、利用与分配",
                "industryId": "4690",
                "parentId": "469",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "建筑业",
    "industryId": "E",
    "levelType": 0,
    "children": [
      {
        "name": "房屋建筑业",
        "industryId": "47",
        "parentId": "E",
        "levelType": 1,
        "children": [
          {
            "name": "住宅房屋建筑",
            "industryId": "471",
            "parentId": "47",
            "levelType": 2,
            "children": [
              {
                "name": "住宅房屋建筑",
                "industryId": "4710",
                "parentId": "471",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "体育场馆建筑",
            "industryId": "472",
            "parentId": "47",
            "levelType": 2,
            "children": [
              {
                "name": "体育场馆建筑",
                "industryId": "4720",
                "parentId": "472",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "其他房屋建筑业",
            "industryId": "479",
            "parentId": "47",
            "levelType": 2,
            "children": [
              {
                "name": "其他房屋建筑业",
                "industryId": "4790",
                "parentId": "479",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "土木工程建筑业",
        "industryId": "48",
        "parentId": "E",
        "levelType": 1,
        "children": [
          {
            "name": "铁路、道路、隧道和桥梁工程建筑",
            "industryId": "481",
            "parentId": "48",
            "levelType": 2,
            "children": [
              {
                "name": "铁路工程建筑",
                "industryId": "4811",
                "parentId": "481",
                "levelType": 3,
                "children": []
              },
              {
                "name": "公路工程建筑",
                "industryId": "4812",
                "parentId": "481",
                "levelType": 3,
                "children": []
              },
              {
                "name": "市政道路工程建筑",
                "industryId": "4813",
                "parentId": "481",
                "levelType": 3,
                "children": []
              },
              {
                "name": "城市轨道交通工程建筑",
                "industryId": "4814",
                "parentId": "481",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他道路、隧道和桥梁工程建筑",
                "industryId": "4819",
                "parentId": "481",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "水利和水运工程建筑",
            "industryId": "482",
            "parentId": "48",
            "levelType": 2,
            "children": [
              {
                "name": "水源及供水设施工程建筑",
                "industryId": "4821",
                "parentId": "482",
                "levelType": 3,
                "children": []
              },
              {
                "name": "河湖治理及防洪设施工程建筑",
                "industryId": "4822",
                "parentId": "482",
                "levelType": 3,
                "children": []
              },
              {
                "name": "港口及航运设施工程建筑",
                "industryId": "4823",
                "parentId": "482",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "海洋工程建筑",
            "industryId": "483",
            "parentId": "48",
            "levelType": 2,
            "children": [
              {
                "name": "海洋油气资源开发利用工程建筑",
                "industryId": "4831",
                "parentId": "483",
                "levelType": 3,
                "children": []
              },
              {
                "name": "海洋能源开发利用工程建筑",
                "industryId": "4832",
                "parentId": "483",
                "levelType": 3,
                "children": []
              },
              {
                "name": "海底隧道工程建筑",
                "industryId": "4833",
                "parentId": "483",
                "levelType": 3,
                "children": []
              },
              {
                "name": "海底设施铺设工程建筑",
                "industryId": "4834",
                "parentId": "483",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他海洋工程建筑",
                "industryId": "4839",
                "parentId": "483",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "工矿工程建筑",
            "industryId": "484",
            "parentId": "48",
            "levelType": 2,
            "children": [
              {
                "name": "工矿工程建筑",
                "industryId": "4840",
                "parentId": "484",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "架线和管道工程建筑",
            "industryId": "485",
            "parentId": "48",
            "levelType": 2,
            "children": [
              {
                "name": "架线及设备工程建筑",
                "industryId": "4851",
                "parentId": "485",
                "levelType": 3,
                "children": []
              },
              {
                "name": "管道工程建筑",
                "industryId": "4852",
                "parentId": "485",
                "levelType": 3,
                "children": []
              },
              {
                "name": "地下综合管廊工程建筑",
                "industryId": "4853",
                "parentId": "485",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "节能环保工程施工",
            "industryId": "486",
            "parentId": "48",
            "levelType": 2,
            "children": [
              {
                "name": "节能工程施工",
                "industryId": "4861",
                "parentId": "486",
                "levelType": 3,
                "children": []
              },
              {
                "name": "环保工程施工",
                "industryId": "4862",
                "parentId": "486",
                "levelType": 3,
                "children": []
              },
              {
                "name": "生态保护工程施工",
                "industryId": "4863",
                "parentId": "486",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "电力工程施工",
            "industryId": "487",
            "parentId": "48",
            "levelType": 2,
            "children": [
              {
                "name": "火力发电工程施工",
                "industryId": "4871",
                "parentId": "487",
                "levelType": 3,
                "children": []
              },
              {
                "name": "水力发电工程施工",
                "industryId": "4872",
                "parentId": "487",
                "levelType": 3,
                "children": []
              },
              {
                "name": "核电工程施工",
                "industryId": "4873",
                "parentId": "487",
                "levelType": 3,
                "children": []
              },
              {
                "name": "风能发电工程施工",
                "industryId": "4874",
                "parentId": "487",
                "levelType": 3,
                "children": []
              },
              {
                "name": "太阳能发电工程施工",
                "industryId": "4875",
                "parentId": "487",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他电力工程施工",
                "industryId": "4879",
                "parentId": "487",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "其他土木工程建筑",
            "industryId": "489",
            "parentId": "48",
            "levelType": 2,
            "children": [
              {
                "name": "园林绿化工程施工",
                "industryId": "4891",
                "parentId": "489",
                "levelType": 3,
                "children": []
              },
              {
                "name": "体育场地设施工程施工",
                "industryId": "4892",
                "parentId": "489",
                "levelType": 3,
                "children": []
              },
              {
                "name": "游乐设施工程施工",
                "industryId": "4893",
                "parentId": "489",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他土木工程建筑施工",
                "industryId": "4899",
                "parentId": "489",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "建筑安装业",
        "industryId": "49",
        "parentId": "E",
        "levelType": 1,
        "children": [
          {
            "name": "电气安装",
            "industryId": "491",
            "parentId": "49",
            "levelType": 2,
            "children": [
              {
                "name": "电气安装",
                "industryId": "4910",
                "parentId": "491",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "管道和设备安装",
            "industryId": "492",
            "parentId": "49",
            "levelType": 2,
            "children": [
              {
                "name": "管道和设备安装",
                "industryId": "4920",
                "parentId": "492",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "其他建筑安装业",
            "industryId": "499",
            "parentId": "49",
            "levelType": 2,
            "children": [
              {
                "name": "体育场地设施安装",
                "industryId": "4991",
                "parentId": "499",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他建筑安装",
                "industryId": "4999",
                "parentId": "499",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "建筑装饰、装修和其他建筑业",
        "industryId": "50",
        "parentId": "E",
        "levelType": 1,
        "children": [
          {
            "name": "建筑装饰和装修业",
            "industryId": "501",
            "parentId": "50",
            "levelType": 2,
            "children": [
              {
                "name": "公共建筑装饰和装修",
                "industryId": "5011",
                "parentId": "501",
                "levelType": 3,
                "children": []
              },
              {
                "name": "住宅装饰和装修",
                "industryId": "5012",
                "parentId": "501",
                "levelType": 3,
                "children": []
              },
              {
                "name": "建筑幕墙装饰和装修",
                "industryId": "5013",
                "parentId": "501",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "建筑物拆除和场地准备活动",
            "industryId": "502",
            "parentId": "50",
            "levelType": 2,
            "children": [
              {
                "name": "建筑物拆除活动",
                "industryId": "5021",
                "parentId": "502",
                "levelType": 3,
                "children": []
              },
              {
                "name": "场地准备活动",
                "industryId": "5022",
                "parentId": "502",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "提供施工设备服务",
            "industryId": "503",
            "parentId": "50",
            "levelType": 2,
            "children": [
              {
                "name": "提供施工设备服务",
                "industryId": "5030",
                "parentId": "503",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "其他未列明建筑业",
            "industryId": "509",
            "parentId": "50",
            "levelType": 2,
            "children": [
              {
                "name": "其他未列明建筑业",
                "industryId": "5090",
                "parentId": "509",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "批发和零售业",
    "industryId": "F",
    "levelType": 0,
    "children": [
      {
        "name": "批发业",
        "industryId": "51",
        "parentId": "F",
        "levelType": 1,
        "children": [
          {
            "name": "农、林、牧、渔产品批发",
            "industryId": "511",
            "parentId": "51",
            "levelType": 2,
            "children": [
              {
                "name": "谷物、豆及薯类批发",
                "industryId": "5111",
                "parentId": "511",
                "levelType": 3,
                "children": []
              },
              {
                "name": "种子批发",
                "industryId": "5112",
                "parentId": "511",
                "levelType": 3,
                "children": []
              },
              {
                "name": "畜牧渔业饲料批发",
                "industryId": "5113",
                "parentId": "511",
                "levelType": 3,
                "children": []
              },
              {
                "name": "棉、麻批发",
                "industryId": "5114",
                "parentId": "511",
                "levelType": 3,
                "children": []
              },
              {
                "name": "林业产品批发",
                "industryId": "5115",
                "parentId": "511",
                "levelType": 3,
                "children": []
              },
              {
                "name": "牲畜批发",
                "industryId": "5116",
                "parentId": "511",
                "levelType": 3,
                "children": []
              },
              {
                "name": "渔业产品批发",
                "industryId": "5117",
                "parentId": "511",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他农牧产品批发",
                "industryId": "5119",
                "parentId": "511",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "食品、饮料及烟草制品批发",
            "industryId": "512",
            "parentId": "51",
            "levelType": 2,
            "children": [
              {
                "name": "米、面制品及食用油批发",
                "industryId": "5121",
                "parentId": "512",
                "levelType": 3,
                "children": []
              },
              {
                "name": "糕点、糖果及糖批发",
                "industryId": "5122",
                "parentId": "512",
                "levelType": 3,
                "children": []
              },
              {
                "name": "果品、蔬菜批发",
                "industryId": "5123",
                "parentId": "512",
                "levelType": 3,
                "children": []
              },
              {
                "name": "肉、禽、蛋、奶及水产品批发",
                "industryId": "5124",
                "parentId": "512",
                "levelType": 3,
                "children": []
              },
              {
                "name": "盐及调味品批发",
                "industryId": "5125",
                "parentId": "512",
                "levelType": 3,
                "children": []
              },
              {
                "name": "营养和保健品批发",
                "industryId": "5126",
                "parentId": "512",
                "levelType": 3,
                "children": []
              },
              {
                "name": "酒、饮料及茶叶批发",
                "industryId": "5127",
                "parentId": "512",
                "levelType": 3,
                "children": []
              },
              {
                "name": "烟草制品批发",
                "industryId": "5128",
                "parentId": "512",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他食品批发",
                "industryId": "5129",
                "parentId": "512",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "纺织、服装及家庭用品批发",
            "industryId": "513",
            "parentId": "51",
            "levelType": 2,
            "children": [
              {
                "name": "纺织品、针织品及原料批发",
                "industryId": "5131",
                "parentId": "513",
                "levelType": 3,
                "children": []
              },
              {
                "name": "服装批发",
                "industryId": "5132",
                "parentId": "513",
                "levelType": 3,
                "children": []
              },
              {
                "name": "鞋帽批发",
                "industryId": "5133",
                "parentId": "513",
                "levelType": 3,
                "children": []
              },
              {
                "name": "化妆品及卫生用品批发",
                "industryId": "5134",
                "parentId": "513",
                "levelType": 3,
                "children": []
              },
              {
                "name": "厨具卫具及日用杂品批发",
                "industryId": "5135",
                "parentId": "513",
                "levelType": 3,
                "children": []
              },
              {
                "name": "灯具、装饰物品批发",
                "industryId": "5136",
                "parentId": "513",
                "levelType": 3,
                "children": []
              },
              {
                "name": "家用视听设备批发",
                "industryId": "5137",
                "parentId": "513",
                "levelType": 3,
                "children": []
              },
              {
                "name": "日用家电批发",
                "industryId": "5138",
                "parentId": "513",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他家庭用品批发",
                "industryId": "5139",
                "parentId": "513",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "文化、体育用品及器材批发",
            "industryId": "514",
            "parentId": "51",
            "levelType": 2,
            "children": [
              {
                "name": "文具用品批发",
                "industryId": "5141",
                "parentId": "514",
                "levelType": 3,
                "children": []
              },
              {
                "name": "体育用品及器材批发",
                "industryId": "5142",
                "parentId": "514",
                "levelType": 3,
                "children": []
              },
              {
                "name": "图书批发",
                "industryId": "5143",
                "parentId": "514",
                "levelType": 3,
                "children": []
              },
              {
                "name": "报刊批发",
                "industryId": "5144",
                "parentId": "514",
                "levelType": 3,
                "children": []
              },
              {
                "name": "音像制品、电子和数字出版物批发",
                "industryId": "5145",
                "parentId": "514",
                "levelType": 3,
                "children": []
              },
              {
                "name": "首饰、工艺品及收藏品批发",
                "industryId": "5146",
                "parentId": "514",
                "levelType": 3,
                "children": []
              },
              {
                "name": "乐器批发",
                "industryId": "5147",
                "parentId": "514",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他文化用品批发",
                "industryId": "5149",
                "parentId": "514",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "医药及医疗器材批发",
            "industryId": "515",
            "parentId": "51",
            "levelType": 2,
            "children": [
              {
                "name": "西药批发",
                "industryId": "5151",
                "parentId": "515",
                "levelType": 3,
                "children": []
              },
              {
                "name": "中药批发",
                "industryId": "5152",
                "parentId": "515",
                "levelType": 3,
                "children": []
              },
              {
                "name": "动物用药品批发",
                "industryId": "5153",
                "parentId": "515",
                "levelType": 3,
                "children": []
              },
              {
                "name": "医疗用品及器材批发",
                "industryId": "5154",
                "parentId": "515",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "矿产品、建材及化工产品批发",
            "industryId": "516",
            "parentId": "51",
            "levelType": 2,
            "children": [
              {
                "name": "煤炭及制品批发",
                "industryId": "5161",
                "parentId": "516",
                "levelType": 3,
                "children": []
              },
              {
                "name": "石油及制品批发",
                "industryId": "5162",
                "parentId": "516",
                "levelType": 3,
                "children": []
              },
              {
                "name": "非金属矿及制品批发",
                "industryId": "5163",
                "parentId": "516",
                "levelType": 3,
                "children": []
              },
              {
                "name": "金属及金属矿批发",
                "industryId": "5164",
                "parentId": "516",
                "levelType": 3,
                "children": []
              },
              {
                "name": "建材批发",
                "industryId": "5165",
                "parentId": "516",
                "levelType": 3,
                "children": []
              },
              {
                "name": "化肥批发",
                "industryId": "5166",
                "parentId": "516",
                "levelType": 3,
                "children": []
              },
              {
                "name": "农药批发",
                "industryId": "5167",
                "parentId": "516",
                "levelType": 3,
                "children": []
              },
              {
                "name": "农用薄膜批发",
                "industryId": "5168",
                "parentId": "516",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他化工产品批发",
                "industryId": "5169",
                "parentId": "516",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "机械设备、五金产品及电子产品批发",
            "industryId": "517",
            "parentId": "51",
            "levelType": 2,
            "children": [
              {
                "name": "农业机械批发",
                "industryId": "5171",
                "parentId": "517",
                "levelType": 3,
                "children": []
              },
              {
                "name": "汽车及零配件批发",
                "industryId": "5172",
                "parentId": "517",
                "levelType": 3,
                "children": []
              },
              {
                "name": "摩托车及零配件批发",
                "industryId": "5173",
                "parentId": "517",
                "levelType": 3,
                "children": []
              },
              {
                "name": "五金产品批发",
                "industryId": "5174",
                "parentId": "517",
                "levelType": 3,
                "children": []
              },
              {
                "name": "电气设备批发",
                "industryId": "5175",
                "parentId": "517",
                "levelType": 3,
                "children": []
              },
              {
                "name": "计算机、软件及辅助设备批发",
                "industryId": "5176",
                "parentId": "517",
                "levelType": 3,
                "children": []
              },
              {
                "name": "通讯设备批发",
                "industryId": "5177",
                "parentId": "517",
                "levelType": 3,
                "children": []
              },
              {
                "name": "广播影视设备批发",
                "industryId": "5178",
                "parentId": "517",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他机械设备及电子产品批发",
                "industryId": "5179",
                "parentId": "517",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "贸易经纪与代理",
            "industryId": "518",
            "parentId": "51",
            "levelType": 2,
            "children": [
              {
                "name": "贸易代理",
                "industryId": "5181",
                "parentId": "518",
                "levelType": 3,
                "children": []
              },
              {
                "name": "一般物品拍卖",
                "industryId": "5182",
                "parentId": "518",
                "levelType": 3,
                "children": []
              },
              {
                "name": "艺术品、收藏品拍卖",
                "industryId": "5183",
                "parentId": "518",
                "levelType": 3,
                "children": []
              },
              {
                "name": "艺术品代理",
                "industryId": "5184",
                "parentId": "518",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他贸易经纪与代理",
                "industryId": "5189",
                "parentId": "518",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "其他批发业",
            "industryId": "519",
            "parentId": "51",
            "levelType": 2,
            "children": [
              {
                "name": "再生物资回收与批发",
                "industryId": "5191",
                "parentId": "519",
                "levelType": 3,
                "children": []
              },
              {
                "name": "宠物食品用品批发",
                "industryId": "5192",
                "parentId": "519",
                "levelType": 3,
                "children": []
              },
              {
                "name": "互联网批发",
                "industryId": "5193",
                "parentId": "519",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他未列明批发业",
                "industryId": "5199",
                "parentId": "519",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "零售业",
        "industryId": "52",
        "parentId": "F",
        "levelType": 1,
        "children": [
          {
            "name": "综合零售",
            "industryId": "521",
            "parentId": "52",
            "levelType": 2,
            "children": [
              {
                "name": "百货零售",
                "industryId": "5211",
                "parentId": "521",
                "levelType": 3,
                "children": []
              },
              {
                "name": "超级市场零售",
                "industryId": "5212",
                "parentId": "521",
                "levelType": 3,
                "children": []
              },
              {
                "name": "便利店零售",
                "industryId": "5213",
                "parentId": "521",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他综合零售",
                "industryId": "5219",
                "parentId": "521",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "食品、饮料及烟草制品专门零售",
            "industryId": "522",
            "parentId": "52",
            "levelType": 2,
            "children": [
              {
                "name": "粮油零售",
                "industryId": "5221",
                "parentId": "522",
                "levelType": 3,
                "children": []
              },
              {
                "name": "糕点、面包零售",
                "industryId": "5222",
                "parentId": "522",
                "levelType": 3,
                "children": []
              },
              {
                "name": "果品、蔬菜零售",
                "industryId": "5223",
                "parentId": "522",
                "levelType": 3,
                "children": []
              },
              {
                "name": "肉、禽、蛋、奶及水产品零售",
                "industryId": "5224",
                "parentId": "522",
                "levelType": 3,
                "children": []
              },
              {
                "name": "营养和保健品零售",
                "industryId": "5225",
                "parentId": "522",
                "levelType": 3,
                "children": []
              },
              {
                "name": "酒、饮料及茶叶零售",
                "industryId": "5226",
                "parentId": "522",
                "levelType": 3,
                "children": []
              },
              {
                "name": "烟草制品零售",
                "industryId": "5227",
                "parentId": "522",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他食品零售",
                "industryId": "5229",
                "parentId": "522",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "纺织、服装及日用品专门零售",
            "industryId": "523",
            "parentId": "52",
            "levelType": 2,
            "children": [
              {
                "name": "纺织品及针织品零售",
                "industryId": "5231",
                "parentId": "523",
                "levelType": 3,
                "children": []
              },
              {
                "name": "服装零售",
                "industryId": "5232",
                "parentId": "523",
                "levelType": 3,
                "children": []
              },
              {
                "name": "鞋帽零售",
                "industryId": "5233",
                "parentId": "523",
                "levelType": 3,
                "children": []
              },
              {
                "name": "化妆品及卫生用品零售",
                "industryId": "5234",
                "parentId": "523",
                "levelType": 3,
                "children": []
              },
              {
                "name": "厨具卫具及日用杂品零售",
                "industryId": "5235",
                "parentId": "523",
                "levelType": 3,
                "children": []
              },
              {
                "name": "钟表、眼镜零售",
                "industryId": "5236",
                "parentId": "523",
                "levelType": 3,
                "children": []
              },
              {
                "name": "箱包零售",
                "industryId": "5237",
                "parentId": "523",
                "levelType": 3,
                "children": []
              },
              {
                "name": "自行车等代步设备零售",
                "industryId": "5238",
                "parentId": "523",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他日用品零售",
                "industryId": "5239",
                "parentId": "523",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "文化、体育用品及器材专门零售",
            "industryId": "524",
            "parentId": "52",
            "levelType": 2,
            "children": [
              {
                "name": "文具用品零售",
                "industryId": "5241",
                "parentId": "524",
                "levelType": 3,
                "children": []
              },
              {
                "name": "体育用品及器材零售",
                "industryId": "5242",
                "parentId": "524",
                "levelType": 3,
                "children": []
              },
              {
                "name": "图书、报刊零售",
                "industryId": "5243",
                "parentId": "524",
                "levelType": 3,
                "children": []
              },
              {
                "name": "音像制品、电子和数字出版物零售",
                "industryId": "5244",
                "parentId": "524",
                "levelType": 3,
                "children": []
              },
              {
                "name": "珠宝首饰零售",
                "industryId": "5245",
                "parentId": "524",
                "levelType": 3,
                "children": []
              },
              {
                "name": "工艺美术品及收藏品零售",
                "industryId": "5246",
                "parentId": "524",
                "levelType": 3,
                "children": []
              },
              {
                "name": "乐器零售",
                "industryId": "5247",
                "parentId": "524",
                "levelType": 3,
                "children": []
              },
              {
                "name": "照相器材零售",
                "industryId": "5248",
                "parentId": "524",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他文化用品零售",
                "industryId": "5249",
                "parentId": "524",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "医药及医疗器材专门零售",
            "industryId": "525",
            "parentId": "52",
            "levelType": 2,
            "children": [
              {
                "name": "西药零售",
                "industryId": "5251",
                "parentId": "525",
                "levelType": 3,
                "children": []
              },
              {
                "name": "中药零售",
                "industryId": "5252",
                "parentId": "525",
                "levelType": 3,
                "children": []
              },
              {
                "name": "动物用药品零售",
                "industryId": "5253",
                "parentId": "525",
                "levelType": 3,
                "children": []
              },
              {
                "name": "医疗用品及器材零售",
                "industryId": "5254",
                "parentId": "525",
                "levelType": 3,
                "children": []
              },
              {
                "name": "保健辅助治疗器材零售",
                "industryId": "5255",
                "parentId": "525",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "汽车、摩托车、零配件和燃料及其他动力销售",
            "industryId": "526",
            "parentId": "52",
            "levelType": 2,
            "children": [
              {
                "name": "汽车新车零售",
                "industryId": "5261",
                "parentId": "526",
                "levelType": 3,
                "children": []
              },
              {
                "name": "汽车旧车零售",
                "industryId": "5262",
                "parentId": "526",
                "levelType": 3,
                "children": []
              },
              {
                "name": "汽车零配件零售",
                "industryId": "5263",
                "parentId": "526",
                "levelType": 3,
                "children": []
              },
              {
                "name": "摩托车及零配件零售",
                "industryId": "5264",
                "parentId": "526",
                "levelType": 3,
                "children": []
              },
              {
                "name": "机动车燃油零售",
                "industryId": "5265",
                "parentId": "526",
                "levelType": 3,
                "children": []
              },
              {
                "name": "机动车燃气零售",
                "industryId": "5266",
                "parentId": "526",
                "levelType": 3,
                "children": []
              },
              {
                "name": "机动车充电销售",
                "industryId": "5267",
                "parentId": "526",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "家用电器及电子产品专门零售",
            "industryId": "527",
            "parentId": "52",
            "levelType": 2,
            "children": [
              {
                "name": "家用视听设备零售",
                "industryId": "5271",
                "parentId": "527",
                "levelType": 3,
                "children": []
              },
              {
                "name": "日用家电零售",
                "industryId": "5272",
                "parentId": "527",
                "levelType": 3,
                "children": []
              },
              {
                "name": "计算机、软件及辅助设备零售",
                "industryId": "5273",
                "parentId": "527",
                "levelType": 3,
                "children": []
              },
              {
                "name": "通信设备零售",
                "industryId": "5274",
                "parentId": "527",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他电子产品零售",
                "industryId": "5279",
                "parentId": "527",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "五金、家具及室内装饰材料专门零售",
            "industryId": "528",
            "parentId": "52",
            "levelType": 2,
            "children": [
              {
                "name": "五金零售",
                "industryId": "5281",
                "parentId": "528",
                "levelType": 3,
                "children": []
              },
              {
                "name": "灯具零售",
                "industryId": "5282",
                "parentId": "528",
                "levelType": 3,
                "children": []
              },
              {
                "name": "家具零售",
                "industryId": "5283",
                "parentId": "528",
                "levelType": 3,
                "children": []
              },
              {
                "name": "涂料零售",
                "industryId": "5284",
                "parentId": "528",
                "levelType": 3,
                "children": []
              },
              {
                "name": "卫生洁具零售",
                "industryId": "5285",
                "parentId": "528",
                "levelType": 3,
                "children": []
              },
              {
                "name": "木质装饰材料零售",
                "industryId": "5286",
                "parentId": "528",
                "levelType": 3,
                "children": []
              },
              {
                "name": "陶瓷、石材装饰材料零售",
                "industryId": "5287",
                "parentId": "528",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他室内装饰材料零售",
                "industryId": "5289",
                "parentId": "528",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "货摊、无店铺及其他零售业",
            "industryId": "529",
            "parentId": "52",
            "levelType": 2,
            "children": [
              {
                "name": "流动货摊零售",
                "industryId": "5291",
                "parentId": "529",
                "levelType": 3,
                "children": []
              },
              {
                "name": "互联网零售",
                "industryId": "5292",
                "parentId": "529",
                "levelType": 3,
                "children": []
              },
              {
                "name": "邮购及电视、电话零售",
                "industryId": "5293",
                "parentId": "529",
                "levelType": 3,
                "children": []
              },
              {
                "name": "自动售货机零售",
                "industryId": "5294",
                "parentId": "529",
                "levelType": 3,
                "children": []
              },
              {
                "name": "旧货零售",
                "industryId": "5295",
                "parentId": "529",
                "levelType": 3,
                "children": []
              },
              {
                "name": "生活用燃料零售",
                "industryId": "5296",
                "parentId": "529",
                "levelType": 3,
                "children": []
              },
              {
                "name": "宠物食品用品零售",
                "industryId": "5297",
                "parentId": "529",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他未列明零售业",
                "industryId": "5299",
                "parentId": "529",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "交通运输、仓储和邮政业",
    "industryId": "G",
    "levelType": 0,
    "children": [
      {
        "name": "铁路运输业",
        "industryId": "53",
        "parentId": "G",
        "levelType": 1,
        "children": [
          {
            "name": "铁路旅客运输",
            "industryId": "531",
            "parentId": "53",
            "levelType": 2,
            "children": [
              {
                "name": "高速铁路旅客运输",
                "industryId": "5311",
                "parentId": "531",
                "levelType": 3,
                "children": []
              },
              {
                "name": "城际铁路旅客运输",
                "industryId": "5312",
                "parentId": "531",
                "levelType": 3,
                "children": []
              },
              {
                "name": "普通铁路旅客运输",
                "industryId": "5313",
                "parentId": "531",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "铁路货物运输",
            "industryId": "532",
            "parentId": "53",
            "levelType": 2,
            "children": [
              {
                "name": "铁路货物运输",
                "industryId": "5320",
                "parentId": "532",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "铁路运输辅助活动",
            "industryId": "533",
            "parentId": "53",
            "levelType": 2,
            "children": [
              {
                "name": "客运火车站",
                "industryId": "5331",
                "parentId": "533",
                "levelType": 3,
                "children": []
              },
              {
                "name": "货运火车站（场）",
                "industryId": "5332",
                "parentId": "533",
                "levelType": 3,
                "children": []
              },
              {
                "name": "铁路运输维护活动",
                "industryId": "5333",
                "parentId": "533",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他铁路运输辅助活动",
                "industryId": "5339",
                "parentId": "533",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "道路运输业",
        "industryId": "54",
        "parentId": "G",
        "levelType": 1,
        "children": [
          {
            "name": "城市公共交通运输",
            "industryId": "541",
            "parentId": "54",
            "levelType": 2,
            "children": [
              {
                "name": "公共电汽车客运",
                "industryId": "5411",
                "parentId": "541",
                "levelType": 3,
                "children": []
              },
              {
                "name": "城市轨道交通",
                "industryId": "5412",
                "parentId": "541",
                "levelType": 3,
                "children": []
              },
              {
                "name": "出租车客运",
                "industryId": "5413",
                "parentId": "541",
                "levelType": 3,
                "children": []
              },
              {
                "name": "公共自行车服务",
                "industryId": "5414",
                "parentId": "541",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他城市公共交通运输",
                "industryId": "5419",
                "parentId": "541",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "公路旅客运输",
            "industryId": "542",
            "parentId": "54",
            "levelType": 2,
            "children": [
              {
                "name": "长途客运",
                "industryId": "5421",
                "parentId": "542",
                "levelType": 3,
                "children": []
              },
              {
                "name": "旅游客运",
                "industryId": "5422",
                "parentId": "542",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他公路客运",
                "industryId": "5429",
                "parentId": "542",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "道路货物运输",
            "industryId": "543",
            "parentId": "54",
            "levelType": 2,
            "children": [
              {
                "name": "普通货物道路运输",
                "industryId": "5431",
                "parentId": "543",
                "levelType": 3,
                "children": []
              },
              {
                "name": "冷藏车道路运输",
                "industryId": "5432",
                "parentId": "543",
                "levelType": 3,
                "children": []
              },
              {
                "name": "集装箱道路运输",
                "industryId": "5433",
                "parentId": "543",
                "levelType": 3,
                "children": []
              },
              {
                "name": "大型货物道路运输",
                "industryId": "5434",
                "parentId": "543",
                "levelType": 3,
                "children": []
              },
              {
                "name": "危险货物道路运输",
                "industryId": "5435",
                "parentId": "543",
                "levelType": 3,
                "children": []
              },
              {
                "name": "邮件包裹道路运输",
                "industryId": "5436",
                "parentId": "543",
                "levelType": 3,
                "children": []
              },
              {
                "name": "城市配送",
                "industryId": "5437",
                "parentId": "543",
                "levelType": 3,
                "children": []
              },
              {
                "name": "搬家运输",
                "industryId": "5438",
                "parentId": "543",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他道路货物运输",
                "industryId": "5439",
                "parentId": "543",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "道路运输辅助活动",
            "industryId": "544",
            "parentId": "54",
            "levelType": 2,
            "children": [
              {
                "name": "客运汽车站",
                "industryId": "5441",
                "parentId": "544",
                "levelType": 3,
                "children": []
              },
              {
                "name": "货运枢纽（站）",
                "industryId": "5442",
                "parentId": "544",
                "levelType": 3,
                "children": []
              },
              {
                "name": "公路管理与养护",
                "industryId": "5443",
                "parentId": "544",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他道路运输辅助活动",
                "industryId": "5449",
                "parentId": "544",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "水上运输业",
        "industryId": "55",
        "parentId": "G",
        "levelType": 1,
        "children": [
          {
            "name": "水上旅客运输",
            "industryId": "551",
            "parentId": "55",
            "levelType": 2,
            "children": [
              {
                "name": "海上旅客运输",
                "industryId": "5511",
                "parentId": "551",
                "levelType": 3,
                "children": []
              },
              {
                "name": "内河旅客运输",
                "industryId": "5512",
                "parentId": "551",
                "levelType": 3,
                "children": []
              },
              {
                "name": "客运轮渡运输",
                "industryId": "5513",
                "parentId": "551",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "水上货物运输",
            "industryId": "552",
            "parentId": "55",
            "levelType": 2,
            "children": [
              {
                "name": "远洋货物运输",
                "industryId": "5521",
                "parentId": "552",
                "levelType": 3,
                "children": []
              },
              {
                "name": "沿海货物运输",
                "industryId": "5522",
                "parentId": "552",
                "levelType": 3,
                "children": []
              },
              {
                "name": "内河货物运输",
                "industryId": "5523",
                "parentId": "552",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "水上运输辅助活动",
            "industryId": "553",
            "parentId": "55",
            "levelType": 2,
            "children": [
              {
                "name": "客运港口",
                "industryId": "5531",
                "parentId": "553",
                "levelType": 3,
                "children": []
              },
              {
                "name": "货运港口",
                "industryId": "5532",
                "parentId": "553",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他水上运输辅助活动",
                "industryId": "5539",
                "parentId": "553",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "航空运输业",
        "industryId": "56",
        "parentId": "G",
        "levelType": 1,
        "children": [
          {
            "name": "航空客货运输",
            "industryId": "561",
            "parentId": "56",
            "levelType": 2,
            "children": [
              {
                "name": "航空旅客运输",
                "industryId": "5611",
                "parentId": "561",
                "levelType": 3,
                "children": []
              },
              {
                "name": "航空货物运输",
                "industryId": "5612",
                "parentId": "561",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "通用航空服务",
            "industryId": "562",
            "parentId": "56",
            "levelType": 2,
            "children": [
              {
                "name": "通用航空生产服务",
                "industryId": "5621",
                "parentId": "562",
                "levelType": 3,
                "children": []
              },
              {
                "name": "观光游览航空服务",
                "industryId": "5622",
                "parentId": "562",
                "levelType": 3,
                "children": []
              },
              {
                "name": "体育航空运动服务",
                "industryId": "5623",
                "parentId": "562",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他通用航空服务",
                "industryId": "5629",
                "parentId": "562",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "航空运输辅助活动",
            "industryId": "563",
            "parentId": "56",
            "levelType": 2,
            "children": [
              {
                "name": "机场",
                "industryId": "5631",
                "parentId": "563",
                "levelType": 3,
                "children": []
              },
              {
                "name": "空中交通管理",
                "industryId": "5632",
                "parentId": "563",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他航空运输辅助活动",
                "industryId": "5639",
                "parentId": "563",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "管道运输业",
        "industryId": "57",
        "parentId": "G",
        "levelType": 1,
        "children": [
          {
            "name": "海底管道运输",
            "industryId": "571",
            "parentId": "57",
            "levelType": 2,
            "children": [
              {
                "name": "海底管道运输",
                "industryId": "5710",
                "parentId": "571",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "陆地管道运输",
            "industryId": "572",
            "parentId": "57",
            "levelType": 2,
            "children": [
              {
                "name": "陆地管道运输",
                "industryId": "5720",
                "parentId": "572",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "多式联运和运输代理业",
        "industryId": "58",
        "parentId": "G",
        "levelType": 1,
        "children": [
          {
            "name": "多式联运",
            "industryId": "581",
            "parentId": "58",
            "levelType": 2,
            "children": [
              {
                "name": "多式联运",
                "industryId": "5810",
                "parentId": "581",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "运输代理业",
            "industryId": "582",
            "parentId": "58",
            "levelType": 2,
            "children": [
              {
                "name": "货物运输代理",
                "industryId": "5821",
                "parentId": "582",
                "levelType": 3,
                "children": []
              },
              {
                "name": "旅客票务代理",
                "industryId": "5822",
                "parentId": "582",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他运输代理业",
                "industryId": "5829",
                "parentId": "582",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "装卸搬运和仓储业",
        "industryId": "59",
        "parentId": "G",
        "levelType": 1,
        "children": [
          {
            "name": "装卸搬运",
            "industryId": "591",
            "parentId": "59",
            "levelType": 2,
            "children": [
              {
                "name": "装卸搬运",
                "industryId": "5910",
                "parentId": "591",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "通用仓储",
            "industryId": "592",
            "parentId": "59",
            "levelType": 2,
            "children": [
              {
                "name": "通用仓储",
                "industryId": "5920",
                "parentId": "592",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "低温仓储",
            "industryId": "593",
            "parentId": "59",
            "levelType": 2,
            "children": [
              {
                "name": "低温仓储",
                "industryId": "5930",
                "parentId": "593",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "危险品仓储",
            "industryId": "594",
            "parentId": "59",
            "levelType": 2,
            "children": [
              {
                "name": "油气仓储",
                "industryId": "5941",
                "parentId": "594",
                "levelType": 3,
                "children": []
              },
              {
                "name": "危险化学品仓储",
                "industryId": "5942",
                "parentId": "594",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他危险品仓储",
                "industryId": "5949",
                "parentId": "594",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "谷物、棉花等农产品仓储",
            "industryId": "595",
            "parentId": "59",
            "levelType": 2,
            "children": [
              {
                "name": "谷物仓储",
                "industryId": "5951",
                "parentId": "595",
                "levelType": 3,
                "children": []
              },
              {
                "name": "棉花仓储",
                "industryId": "5952",
                "parentId": "595",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他农产品仓储",
                "industryId": "5959",
                "parentId": "595",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "中药材仓储",
            "industryId": "596",
            "parentId": "59",
            "levelType": 2,
            "children": [
              {
                "name": "中药材仓储",
                "industryId": "5960",
                "parentId": "596",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "其他仓储业",
            "industryId": "599",
            "parentId": "59",
            "levelType": 2,
            "children": [
              {
                "name": "其他仓储业",
                "industryId": "5990",
                "parentId": "599",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "邮政业",
        "industryId": "60",
        "parentId": "G",
        "levelType": 1,
        "children": [
          {
            "name": "邮政基本服务",
            "industryId": "601",
            "parentId": "60",
            "levelType": 2,
            "children": [
              {
                "name": "邮政基本服务",
                "industryId": "6010",
                "parentId": "601",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "快递服务",
            "industryId": "602",
            "parentId": "60",
            "levelType": 2,
            "children": [
              {
                "name": "快递服务",
                "industryId": "6020",
                "parentId": "602",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "其他寄递服务",
            "industryId": "609",
            "parentId": "60",
            "levelType": 2,
            "children": [
              {
                "name": "其他寄递服务",
                "industryId": "6090",
                "parentId": "609",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "住宿和餐饮业",
    "industryId": "H",
    "levelType": 0,
    "children": [
      {
        "name": "住宿业",
        "industryId": "61",
        "parentId": "H",
        "levelType": 1,
        "children": [
          {
            "name": "旅游饭店",
            "industryId": "611",
            "parentId": "61",
            "levelType": 2,
            "children": [
              {
                "name": "旅游饭店",
                "industryId": "6110",
                "parentId": "611",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "一般旅馆",
            "industryId": "612",
            "parentId": "61",
            "levelType": 2,
            "children": [
              {
                "name": "经济型连锁酒店",
                "industryId": "6121",
                "parentId": "612",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他一般旅馆",
                "industryId": "6129",
                "parentId": "612",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "民宿服务",
            "industryId": "613",
            "parentId": "61",
            "levelType": 2,
            "children": [
              {
                "name": "民宿服务",
                "industryId": "6130",
                "parentId": "613",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "露营地服务",
            "industryId": "614",
            "parentId": "61",
            "levelType": 2,
            "children": [
              {
                "name": "露营地服务",
                "industryId": "6140",
                "parentId": "614",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "其他住宿业",
            "industryId": "619",
            "parentId": "61",
            "levelType": 2,
            "children": [
              {
                "name": "其他住宿业",
                "industryId": "6190",
                "parentId": "619",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "餐饮业",
        "industryId": "62",
        "parentId": "H",
        "levelType": 1,
        "children": [
          {
            "name": "正餐服务",
            "industryId": "621",
            "parentId": "62",
            "levelType": 2,
            "children": [
              {
                "name": "正餐服务",
                "industryId": "6210",
                "parentId": "621",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "快餐服务",
            "industryId": "622",
            "parentId": "62",
            "levelType": 2,
            "children": [
              {
                "name": "快餐服务",
                "industryId": "6220",
                "parentId": "622",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "饮料及冷饮服务",
            "industryId": "623",
            "parentId": "62",
            "levelType": 2,
            "children": [
              {
                "name": "茶馆服务",
                "industryId": "6231",
                "parentId": "623",
                "levelType": 3,
                "children": []
              },
              {
                "name": "咖啡馆服务",
                "industryId": "6232",
                "parentId": "623",
                "levelType": 3,
                "children": []
              },
              {
                "name": "酒吧服务",
                "industryId": "6233",
                "parentId": "623",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他饮料及冷饮服务",
                "industryId": "6239",
                "parentId": "623",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "餐饮配送及外卖送餐服务",
            "industryId": "624",
            "parentId": "62",
            "levelType": 2,
            "children": [
              {
                "name": "餐饮配送服务",
                "industryId": "6241",
                "parentId": "624",
                "levelType": 3,
                "children": []
              },
              {
                "name": "外卖送餐服务",
                "industryId": "6242",
                "parentId": "624",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "其他餐饮业",
            "industryId": "629",
            "parentId": "62",
            "levelType": 2,
            "children": [
              {
                "name": "小吃服务",
                "industryId": "6291",
                "parentId": "629",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他未列明餐饮业",
                "industryId": "6299",
                "parentId": "629",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "信息传输、软件和信息技术服务业",
    "industryId": "I",
    "levelType": 0,
    "children": [
      {
        "name": "电信、广播电视和卫星传输服务",
        "industryId": "63",
        "parentId": "I",
        "levelType": 1,
        "children": [
          {
            "name": "电信",
            "industryId": "631",
            "parentId": "63",
            "levelType": 2,
            "children": [
              {
                "name": "固定电信服务",
                "industryId": "6311",
                "parentId": "631",
                "levelType": 3,
                "children": []
              },
              {
                "name": "移动电信服务",
                "industryId": "6312",
                "parentId": "631",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他电信服务",
                "industryId": "6319",
                "parentId": "631",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "广播电视传输服务",
            "industryId": "632",
            "parentId": "63",
            "levelType": 2,
            "children": [
              {
                "name": "有线广播电视传输服务",
                "industryId": "6321",
                "parentId": "632",
                "levelType": 3,
                "children": []
              },
              {
                "name": "无线广播电视传输服务",
                "industryId": "6322",
                "parentId": "632",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "卫星传输服务",
            "industryId": "633",
            "parentId": "63",
            "levelType": 2,
            "children": [
              {
                "name": "广播电视卫星传输服务",
                "industryId": "6331",
                "parentId": "633",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他卫星传输服务",
                "industryId": "6339",
                "parentId": "633",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "互联网和相关服务",
        "industryId": "64",
        "parentId": "I",
        "levelType": 1,
        "children": [
          {
            "name": "互联网接入及相关服务",
            "industryId": "641",
            "parentId": "64",
            "levelType": 2,
            "children": [
              {
                "name": "互联网接入及相关服务",
                "industryId": "6410",
                "parentId": "641",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "互联网信息服务",
            "industryId": "642",
            "parentId": "64",
            "levelType": 2,
            "children": [
              {
                "name": "互联网搜索服务",
                "industryId": "6421",
                "parentId": "642",
                "levelType": 3,
                "children": []
              },
              {
                "name": "互联网游戏服务",
                "industryId": "6422",
                "parentId": "642",
                "levelType": 3,
                "children": []
              },
              {
                "name": "互联网其他信息服务",
                "industryId": "6429",
                "parentId": "642",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "互联网平台",
            "industryId": "643",
            "parentId": "64",
            "levelType": 2,
            "children": [
              {
                "name": "互联网生产服务平台",
                "industryId": "6431",
                "parentId": "643",
                "levelType": 3,
                "children": []
              },
              {
                "name": "互联网生活服务平台",
                "industryId": "6432",
                "parentId": "643",
                "levelType": 3,
                "children": []
              },
              {
                "name": "互联网科技创新平台",
                "industryId": "6433",
                "parentId": "643",
                "levelType": 3,
                "children": []
              },
              {
                "name": "互联网公共服务平台",
                "industryId": "6434",
                "parentId": "643",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他互联网平台",
                "industryId": "6439",
                "parentId": "643",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "互联网安全服务",
            "industryId": "644",
            "parentId": "64",
            "levelType": 2,
            "children": [
              {
                "name": "互联网安全服务",
                "industryId": "6440",
                "parentId": "644",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "互联网数据服务",
            "industryId": "645",
            "parentId": "64",
            "levelType": 2,
            "children": [
              {
                "name": "互联网数据服务",
                "industryId": "6450",
                "parentId": "645",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "其他互联网服务",
            "industryId": "649",
            "parentId": "64",
            "levelType": 2,
            "children": [
              {
                "name": "其他互联网服务",
                "industryId": "6490",
                "parentId": "649",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "软件和信息技术服务业",
        "industryId": "65",
        "parentId": "I",
        "levelType": 1,
        "children": [
          {
            "name": "软件开发",
            "industryId": "651",
            "parentId": "65",
            "levelType": 2,
            "children": [
              {
                "name": "基础软件开发",
                "industryId": "6511",
                "parentId": "651",
                "levelType": 3,
                "children": []
              },
              {
                "name": "支撑软件开发",
                "industryId": "6512",
                "parentId": "651",
                "levelType": 3,
                "children": []
              },
              {
                "name": "应用软件开发",
                "industryId": "6513",
                "parentId": "651",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他软件开发",
                "industryId": "6519",
                "parentId": "651",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "集成电路设计",
            "industryId": "652",
            "parentId": "65",
            "levelType": 2,
            "children": [
              {
                "name": "集成电路设计",
                "industryId": "6520",
                "parentId": "652",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "信息系统集成和物联网技术服务",
            "industryId": "653",
            "parentId": "65",
            "levelType": 2,
            "children": [
              {
                "name": "信息系统集成服务",
                "industryId": "6531",
                "parentId": "653",
                "levelType": 3,
                "children": []
              },
              {
                "name": "物联网技术服务",
                "industryId": "6532",
                "parentId": "653",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "运行维护服务",
            "industryId": "654",
            "parentId": "65",
            "levelType": 2,
            "children": [
              {
                "name": "运行维护服务",
                "industryId": "6540",
                "parentId": "654",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "信息处理和存储支持服务",
            "industryId": "655",
            "parentId": "65",
            "levelType": 2,
            "children": [
              {
                "name": "信息处理和存储支持服务",
                "industryId": "6550",
                "parentId": "655",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "信息技术咨询服务",
            "industryId": "656",
            "parentId": "65",
            "levelType": 2,
            "children": [
              {
                "name": "信息技术咨询服务",
                "industryId": "6560",
                "parentId": "656",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "数字内容服务",
            "industryId": "657",
            "parentId": "65",
            "levelType": 2,
            "children": [
              {
                "name": "地理遥感信息服务",
                "industryId": "6571",
                "parentId": "657",
                "levelType": 3,
                "children": []
              },
              {
                "name": "动漫、游戏数字内容服务",
                "industryId": "6572",
                "parentId": "657",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他数字内容服务",
                "industryId": "6579",
                "parentId": "657",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "其他信息技术服务业",
            "industryId": "659",
            "parentId": "65",
            "levelType": 2,
            "children": [
              {
                "name": "呼叫中心",
                "industryId": "6591",
                "parentId": "659",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他未列明信息技术服务业",
                "industryId": "6599",
                "parentId": "659",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "金融业",
    "industryId": "J",
    "levelType": 0,
    "children": [
      {
        "name": "货币金融服务",
        "industryId": "66",
        "parentId": "J",
        "levelType": 1,
        "children": [
          {
            "name": "中央银行服务",
            "industryId": "661",
            "parentId": "66",
            "levelType": 2,
            "children": [
              {
                "name": "中央银行服务",
                "industryId": "6610",
                "parentId": "661",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "货币银行服务",
            "industryId": "662",
            "parentId": "66",
            "levelType": 2,
            "children": [
              {
                "name": "商业银行服务",
                "industryId": "6621",
                "parentId": "662",
                "levelType": 3,
                "children": []
              },
              {
                "name": "政策性银行服务",
                "industryId": "6622",
                "parentId": "662",
                "levelType": 3,
                "children": []
              },
              {
                "name": "信用合作社服务",
                "industryId": "6623",
                "parentId": "662",
                "levelType": 3,
                "children": []
              },
              {
                "name": "农村资金互助社服务",
                "industryId": "6624",
                "parentId": "662",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他货币银行服务",
                "industryId": "6629",
                "parentId": "662",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "非货币银行服务",
            "industryId": "663",
            "parentId": "66",
            "levelType": 2,
            "children": [
              {
                "name": "融资租赁服务",
                "industryId": "6631",
                "parentId": "663",
                "levelType": 3,
                "children": []
              },
              {
                "name": "财务公司服务",
                "industryId": "6632",
                "parentId": "663",
                "levelType": 3,
                "children": []
              },
              {
                "name": "典当",
                "industryId": "6633",
                "parentId": "663",
                "levelType": 3,
                "children": []
              },
              {
                "name": "汽车金融公司服务",
                "industryId": "6634",
                "parentId": "663",
                "levelType": 3,
                "children": []
              },
              {
                "name": "小额贷款公司服务",
                "industryId": "6635",
                "parentId": "663",
                "levelType": 3,
                "children": []
              },
              {
                "name": "消费金融公司服务",
                "industryId": "6636",
                "parentId": "663",
                "levelType": 3,
                "children": []
              },
              {
                "name": "网络借贷服务",
                "industryId": "6637",
                "parentId": "663",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他非货币银行服务",
                "industryId": "6639",
                "parentId": "663",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "银行理财服务",
            "industryId": "664",
            "parentId": "66",
            "levelType": 2,
            "children": [
              {
                "name": "银行理财服务",
                "industryId": "6640",
                "parentId": "664",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "银行监管服务",
            "industryId": "665",
            "parentId": "66",
            "levelType": 2,
            "children": [
              {
                "name": "银行监管服务",
                "industryId": "6650",
                "parentId": "665",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "资本市场服务",
        "industryId": "67",
        "parentId": "J",
        "levelType": 1,
        "children": [
          {
            "name": "证券市场服务",
            "industryId": "671",
            "parentId": "67",
            "levelType": 2,
            "children": [
              {
                "name": "证券市场管理服务",
                "industryId": "6711",
                "parentId": "671",
                "levelType": 3,
                "children": []
              },
              {
                "name": "证券经纪交易服务",
                "industryId": "6712",
                "parentId": "671",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "公开募集证券投资基金",
            "industryId": "672",
            "parentId": "67",
            "levelType": 2,
            "children": [
              {
                "name": "公开募集证券投资基金",
                "industryId": "6720",
                "parentId": "672",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "非公开募集证券投资基金",
            "industryId": "673",
            "parentId": "67",
            "levelType": 2,
            "children": [
              {
                "name": "创业投资基金",
                "industryId": "6731",
                "parentId": "673",
                "levelType": 3,
                "children": []
              },
              {
                "name": "天使投资",
                "industryId": "6732",
                "parentId": "673",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他非公开募集证券投资基金",
                "industryId": "6739",
                "parentId": "673",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "期货市场服务",
            "industryId": "674",
            "parentId": "67",
            "levelType": 2,
            "children": [
              {
                "name": "期货市场管理服务",
                "industryId": "6741",
                "parentId": "674",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他期货市场服务",
                "industryId": "6749",
                "parentId": "674",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "证券期货监管服务",
            "industryId": "675",
            "parentId": "67",
            "levelType": 2,
            "children": [
              {
                "name": "证券期货监管服务",
                "industryId": "6750",
                "parentId": "675",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "资本投资服务",
            "industryId": "676",
            "parentId": "67",
            "levelType": 2,
            "children": [
              {
                "name": "资本投资服务",
                "industryId": "6760",
                "parentId": "676",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "其他资本市场服务",
            "industryId": "679",
            "parentId": "67",
            "levelType": 2,
            "children": [
              {
                "name": "其他资本市场服务",
                "industryId": "6790",
                "parentId": "679",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "保险业",
        "industryId": "68",
        "parentId": "J",
        "levelType": 1,
        "children": [
          {
            "name": "人身保险",
            "industryId": "681",
            "parentId": "68",
            "levelType": 2,
            "children": [
              {
                "name": "人寿保险",
                "industryId": "6811",
                "parentId": "681",
                "levelType": 3,
                "children": []
              },
              {
                "name": "年金保险",
                "industryId": "6812",
                "parentId": "681",
                "levelType": 3,
                "children": []
              },
              {
                "name": "健康保险",
                "industryId": "6813",
                "parentId": "681",
                "levelType": 3,
                "children": []
              },
              {
                "name": "意外伤害保险",
                "industryId": "6814",
                "parentId": "681",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "财产保险",
            "industryId": "682",
            "parentId": "68",
            "levelType": 2,
            "children": [
              {
                "name": "财产保险",
                "industryId": "6820",
                "parentId": "682",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "再保险",
            "industryId": "683",
            "parentId": "68",
            "levelType": 2,
            "children": [
              {
                "name": "再保险",
                "industryId": "6830",
                "parentId": "683",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "商业养老金",
            "industryId": "684",
            "parentId": "68",
            "levelType": 2,
            "children": [
              {
                "name": "商业养老金",
                "industryId": "6840",
                "parentId": "684",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "保险中介服务",
            "industryId": "685",
            "parentId": "68",
            "levelType": 2,
            "children": [
              {
                "name": "保险经纪服务",
                "industryId": "6851",
                "parentId": "685",
                "levelType": 3,
                "children": []
              },
              {
                "name": "保险代理服务",
                "industryId": "6852",
                "parentId": "685",
                "levelType": 3,
                "children": []
              },
              {
                "name": "保险公估服务",
                "industryId": "6853",
                "parentId": "685",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "保险资产管理",
            "industryId": "686",
            "parentId": "68",
            "levelType": 2,
            "children": [
              {
                "name": "保险资产管理",
                "industryId": "6860",
                "parentId": "686",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "保险监管服务",
            "industryId": "687",
            "parentId": "68",
            "levelType": 2,
            "children": [
              {
                "name": "保险监管服务",
                "industryId": "6870",
                "parentId": "687",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "其他保险活动",
            "industryId": "689",
            "parentId": "68",
            "levelType": 2,
            "children": [
              {
                "name": "其他保险活动",
                "industryId": "6890",
                "parentId": "689",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "其他金融业",
        "industryId": "69",
        "parentId": "J",
        "levelType": 1,
        "children": [
          {
            "name": "金融信托与管理服务",
            "industryId": "691",
            "parentId": "69",
            "levelType": 2,
            "children": [
              {
                "name": "信托公司",
                "industryId": "6911",
                "parentId": "691",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他金融信托与管理服务",
                "industryId": "6919",
                "parentId": "691",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "控股公司服务",
            "industryId": "692",
            "parentId": "69",
            "levelType": 2,
            "children": [
              {
                "name": "控股公司服务",
                "industryId": "6920",
                "parentId": "692",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "非金融机构支付服务",
            "industryId": "693",
            "parentId": "69",
            "levelType": 2,
            "children": [
              {
                "name": "非金融机构支付服务",
                "industryId": "6930",
                "parentId": "693",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "金融信息服务",
            "industryId": "694",
            "parentId": "69",
            "levelType": 2,
            "children": [
              {
                "name": "金融信息服务",
                "industryId": "6940",
                "parentId": "694",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "金融资产管理公司",
            "industryId": "695",
            "parentId": "69",
            "levelType": 2,
            "children": [
              {
                "name": "金融资产管理公司",
                "industryId": "6950",
                "parentId": "695",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "其他未列明金融业",
            "industryId": "699",
            "parentId": "69",
            "levelType": 2,
            "children": [
              {
                "name": "货币经纪公司服务",
                "industryId": "6991",
                "parentId": "699",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他未包括金融业",
                "industryId": "6999",
                "parentId": "699",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "房地产业",
    "industryId": "K",
    "levelType": 0,
    "children": [
      {
        "name": "房地产业",
        "industryId": "70",
        "parentId": "K",
        "levelType": 1,
        "children": [
          {
            "name": "房地产开发经营",
            "industryId": "701",
            "parentId": "70",
            "levelType": 2,
            "children": [
              {
                "name": "房地产开发经营",
                "industryId": "7010",
                "parentId": "701",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "物业管理",
            "industryId": "702",
            "parentId": "70",
            "levelType": 2,
            "children": [
              {
                "name": "物业管理",
                "industryId": "7020",
                "parentId": "702",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "房地产中介服务",
            "industryId": "703",
            "parentId": "70",
            "levelType": 2,
            "children": [
              {
                "name": "房地产中介服务",
                "industryId": "7030",
                "parentId": "703",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "房地产租赁经营",
            "industryId": "704",
            "parentId": "70",
            "levelType": 2,
            "children": [
              {
                "name": "房地产租赁经营",
                "industryId": "7040",
                "parentId": "704",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "其他房地产业",
            "industryId": "709",
            "parentId": "70",
            "levelType": 2,
            "children": [
              {
                "name": "其他房地产业",
                "industryId": "7090",
                "parentId": "709",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "租赁和商务服务业",
    "industryId": "L",
    "levelType": 0,
    "children": [
      {
        "name": "租赁业",
        "industryId": "71",
        "parentId": "L",
        "levelType": 1,
        "children": [
          {
            "name": "机械设备经营租赁",
            "industryId": "711",
            "parentId": "71",
            "levelType": 2,
            "children": [
              {
                "name": "汽车租赁",
                "industryId": "7111",
                "parentId": "711",
                "levelType": 3,
                "children": []
              },
              {
                "name": "农业机械经营租赁",
                "industryId": "7112",
                "parentId": "711",
                "levelType": 3,
                "children": []
              },
              {
                "name": "建筑工程机械与设备经营租赁",
                "industryId": "7113",
                "parentId": "711",
                "levelType": 3,
                "children": []
              },
              {
                "name": "计算机及通讯设备经营租赁",
                "industryId": "7114",
                "parentId": "711",
                "levelType": 3,
                "children": []
              },
              {
                "name": "医疗设备经营租赁",
                "industryId": "7115",
                "parentId": "711",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他机械与设备经营租赁",
                "industryId": "7119",
                "parentId": "711",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "文体设备和用品出租",
            "industryId": "712",
            "parentId": "71",
            "levelType": 2,
            "children": [
              {
                "name": "休闲娱乐用品设备出租",
                "industryId": "7121",
                "parentId": "712",
                "levelType": 3,
                "children": []
              },
              {
                "name": "体育用品设备出租",
                "industryId": "7122",
                "parentId": "712",
                "levelType": 3,
                "children": []
              },
              {
                "name": "文化用品设备出租",
                "industryId": "7123",
                "parentId": "712",
                "levelType": 3,
                "children": []
              },
              {
                "name": "图书出租",
                "industryId": "7124",
                "parentId": "712",
                "levelType": 3,
                "children": []
              },
              {
                "name": "音像制品出租",
                "industryId": "7125",
                "parentId": "712",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他文体设备和用品出租",
                "industryId": "7129",
                "parentId": "712",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "日用品出租",
            "industryId": "713",
            "parentId": "71",
            "levelType": 2,
            "children": [
              {
                "name": "日用品出租",
                "industryId": "7130",
                "parentId": "713",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "商务服务业",
        "industryId": "72",
        "parentId": "L",
        "levelType": 1,
        "children": [
          {
            "name": "组织管理服务",
            "industryId": "721",
            "parentId": "72",
            "levelType": 2,
            "children": [
              {
                "name": "企业总部管理",
                "industryId": "7211",
                "parentId": "721",
                "levelType": 3,
                "children": []
              },
              {
                "name": "投资与资产管理",
                "industryId": "7212",
                "parentId": "721",
                "levelType": 3,
                "children": []
              },
              {
                "name": "资源与产权交易服务",
                "industryId": "7213",
                "parentId": "721",
                "levelType": 3,
                "children": []
              },
              {
                "name": "单位后勤管理服务",
                "industryId": "7214",
                "parentId": "721",
                "levelType": 3,
                "children": []
              },
              {
                "name": "农村集体经济组织管理",
                "industryId": "7215",
                "parentId": "721",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他组织管理服务",
                "industryId": "7219",
                "parentId": "721",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "综合管理服务",
            "industryId": "722",
            "parentId": "72",
            "levelType": 2,
            "children": [
              {
                "name": "园区管理服务",
                "industryId": "7221",
                "parentId": "722",
                "levelType": 3,
                "children": []
              },
              {
                "name": "商业综合体管理服务",
                "industryId": "7222",
                "parentId": "722",
                "levelType": 3,
                "children": []
              },
              {
                "name": "市场管理服务",
                "industryId": "7223",
                "parentId": "722",
                "levelType": 3,
                "children": []
              },
              {
                "name": "供应链管理服务",
                "industryId": "7224",
                "parentId": "722",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他综合管理服务",
                "industryId": "7229",
                "parentId": "722",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "法律服务",
            "industryId": "723",
            "parentId": "72",
            "levelType": 2,
            "children": [
              {
                "name": "律师及相关法律服务",
                "industryId": "7231",
                "parentId": "723",
                "levelType": 3,
                "children": []
              },
              {
                "name": "公证服务",
                "industryId": "7232",
                "parentId": "723",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他法律服务",
                "industryId": "7239",
                "parentId": "723",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "咨询与调查",
            "industryId": "724",
            "parentId": "72",
            "levelType": 2,
            "children": [
              {
                "name": "会计、审计及税务服务",
                "industryId": "7241",
                "parentId": "724",
                "levelType": 3,
                "children": []
              },
              {
                "name": "市场调查",
                "industryId": "7242",
                "parentId": "724",
                "levelType": 3,
                "children": []
              },
              {
                "name": "社会经济咨询",
                "industryId": "7243",
                "parentId": "724",
                "levelType": 3,
                "children": []
              },
              {
                "name": "健康咨询",
                "industryId": "7244",
                "parentId": "724",
                "levelType": 3,
                "children": []
              },
              {
                "name": "环保咨询",
                "industryId": "7245",
                "parentId": "724",
                "levelType": 3,
                "children": []
              },
              {
                "name": "体育咨询",
                "industryId": "7246",
                "parentId": "724",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他专业咨询与调查",
                "industryId": "7249",
                "parentId": "724",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "广告业",
            "industryId": "725",
            "parentId": "72",
            "levelType": 2,
            "children": [
              {
                "name": "互联网广告服务",
                "industryId": "7251",
                "parentId": "725",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他广告服务",
                "industryId": "7259",
                "parentId": "725",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "人力资源服务",
            "industryId": "726",
            "parentId": "72",
            "levelType": 2,
            "children": [
              {
                "name": "公共就业服务",
                "industryId": "7261",
                "parentId": "726",
                "levelType": 3,
                "children": []
              },
              {
                "name": "职业中介服务",
                "industryId": "7262",
                "parentId": "726",
                "levelType": 3,
                "children": []
              },
              {
                "name": "劳务派遣服务",
                "industryId": "7263",
                "parentId": "726",
                "levelType": 3,
                "children": []
              },
              {
                "name": "创业指导服务",
                "industryId": "7264",
                "parentId": "726",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他人力资源服务",
                "industryId": "7269",
                "parentId": "726",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "安全保护服务",
            "industryId": "727",
            "parentId": "72",
            "levelType": 2,
            "children": [
              {
                "name": "安全服务",
                "industryId": "7271",
                "parentId": "727",
                "levelType": 3,
                "children": []
              },
              {
                "name": "安全系统监控服务",
                "industryId": "7272",
                "parentId": "727",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他安全保护服务",
                "industryId": "7279",
                "parentId": "727",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "会议、展览及相关服务",
            "industryId": "728",
            "parentId": "72",
            "levelType": 2,
            "children": [
              {
                "name": "科技会展服务",
                "industryId": "7281",
                "parentId": "728",
                "levelType": 3,
                "children": []
              },
              {
                "name": "旅游会展服务",
                "industryId": "7282",
                "parentId": "728",
                "levelType": 3,
                "children": []
              },
              {
                "name": "体育会展服务",
                "industryId": "7283",
                "parentId": "728",
                "levelType": 3,
                "children": []
              },
              {
                "name": "文化会展服务",
                "industryId": "7284",
                "parentId": "728",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他会议、展览及相关服务",
                "industryId": "7289",
                "parentId": "728",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "其他商务服务业",
            "industryId": "729",
            "parentId": "72",
            "levelType": 2,
            "children": [
              {
                "name": "旅行社及相关服务",
                "industryId": "7291",
                "parentId": "729",
                "levelType": 3,
                "children": []
              },
              {
                "name": "包装服务",
                "industryId": "7292",
                "parentId": "729",
                "levelType": 3,
                "children": []
              },
              {
                "name": "办公服务",
                "industryId": "7293",
                "parentId": "729",
                "levelType": 3,
                "children": []
              },
              {
                "name": "翻译服务",
                "industryId": "7294",
                "parentId": "729",
                "levelType": 3,
                "children": []
              },
              {
                "name": "信用服务",
                "industryId": "7295",
                "parentId": "729",
                "levelType": 3,
                "children": []
              },
              {
                "name": "非融资担保服务",
                "industryId": "7296",
                "parentId": "729",
                "levelType": 3,
                "children": []
              },
              {
                "name": "商务代理代办服务",
                "industryId": "7297",
                "parentId": "729",
                "levelType": 3,
                "children": []
              },
              {
                "name": "票务代理服务",
                "industryId": "7298",
                "parentId": "729",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他未列明商务服务业",
                "industryId": "7299",
                "parentId": "729",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "科学研究和技术服务业",
    "industryId": "M",
    "levelType": 0,
    "children": [
      {
        "name": "研究和试验发展",
        "industryId": "73",
        "parentId": "M",
        "levelType": 1,
        "children": [
          {
            "name": "自然科学研究和试验发展",
            "industryId": "731",
            "parentId": "73",
            "levelType": 2,
            "children": [
              {
                "name": "自然科学研究和试验发展",
                "industryId": "7310",
                "parentId": "731",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "工程和技术研究和试验发展",
            "industryId": "732",
            "parentId": "73",
            "levelType": 2,
            "children": [
              {
                "name": "工程和技术研究和试验发展",
                "industryId": "7320",
                "parentId": "732",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "农业科学研究和试验发展",
            "industryId": "733",
            "parentId": "73",
            "levelType": 2,
            "children": [
              {
                "name": "农业科学研究和试验发展",
                "industryId": "7330",
                "parentId": "733",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "医学研究和试验发展",
            "industryId": "734",
            "parentId": "73",
            "levelType": 2,
            "children": [
              {
                "name": "医学研究和试验发展",
                "industryId": "7340",
                "parentId": "734",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "社会人文科学研究",
            "industryId": "735",
            "parentId": "73",
            "levelType": 2,
            "children": [
              {
                "name": "社会人文科学研究",
                "industryId": "7350",
                "parentId": "735",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "专业技术服务业",
        "industryId": "74",
        "parentId": "M",
        "levelType": 1,
        "children": [
          {
            "name": "气象服务",
            "industryId": "741",
            "parentId": "74",
            "levelType": 2,
            "children": [
              {
                "name": "气象服务",
                "industryId": "7410",
                "parentId": "741",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "地震服务",
            "industryId": "742",
            "parentId": "74",
            "levelType": 2,
            "children": [
              {
                "name": "地震服务",
                "industryId": "7420",
                "parentId": "742",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "海洋服务",
            "industryId": "743",
            "parentId": "74",
            "levelType": 2,
            "children": [
              {
                "name": "海洋气象服务",
                "industryId": "7431",
                "parentId": "743",
                "levelType": 3,
                "children": []
              },
              {
                "name": "海洋环境服务",
                "industryId": "7432",
                "parentId": "743",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他海洋服务",
                "industryId": "7439",
                "parentId": "743",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "测绘地理信息服务",
            "industryId": "744",
            "parentId": "74",
            "levelType": 2,
            "children": [
              {
                "name": "遥感测绘服务",
                "industryId": "7441",
                "parentId": "744",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他测绘地理信息服务",
                "industryId": "7449",
                "parentId": "744",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "质检技术服务",
            "industryId": "745",
            "parentId": "74",
            "levelType": 2,
            "children": [
              {
                "name": "检验检疫服务",
                "industryId": "7451",
                "parentId": "745",
                "levelType": 3,
                "children": []
              },
              {
                "name": "检测服务",
                "industryId": "7452",
                "parentId": "745",
                "levelType": 3,
                "children": []
              },
              {
                "name": "计量服务",
                "industryId": "7453",
                "parentId": "745",
                "levelType": 3,
                "children": []
              },
              {
                "name": "标准化服务",
                "industryId": "7454",
                "parentId": "745",
                "levelType": 3,
                "children": []
              },
              {
                "name": "认证认可服务",
                "industryId": "7455",
                "parentId": "745",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他质检技术服务",
                "industryId": "7459",
                "parentId": "745",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "环境与生态监测检测服务",
            "industryId": "746",
            "parentId": "74",
            "levelType": 2,
            "children": [
              {
                "name": "环境保护监测",
                "industryId": "7461",
                "parentId": "746",
                "levelType": 3,
                "children": []
              },
              {
                "name": "生态资源监测",
                "industryId": "7462",
                "parentId": "746",
                "levelType": 3,
                "children": []
              },
              {
                "name": "野生动物疫源疫病防控监测",
                "industryId": "7463",
                "parentId": "746",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "地质勘查",
            "industryId": "747",
            "parentId": "74",
            "levelType": 2,
            "children": [
              {
                "name": "能源矿产地质勘查",
                "industryId": "7471",
                "parentId": "747",
                "levelType": 3,
                "children": []
              },
              {
                "name": "固体矿产地质勘查",
                "industryId": "7472",
                "parentId": "747",
                "levelType": 3,
                "children": []
              },
              {
                "name": "水、二氧化碳等矿产地质勘查",
                "industryId": "7473",
                "parentId": "747",
                "levelType": 3,
                "children": []
              },
              {
                "name": "基础地质勘查",
                "industryId": "7474",
                "parentId": "747",
                "levelType": 3,
                "children": []
              },
              {
                "name": "地质勘查技术服务",
                "industryId": "7475",
                "parentId": "747",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "工程技术与设计服务",
            "industryId": "748",
            "parentId": "74",
            "levelType": 2,
            "children": [
              {
                "name": "工程管理服务",
                "industryId": "7481",
                "parentId": "748",
                "levelType": 3,
                "children": []
              },
              {
                "name": "工程监理服务",
                "industryId": "7482",
                "parentId": "748",
                "levelType": 3,
                "children": []
              },
              {
                "name": "工程勘察活动",
                "industryId": "7483",
                "parentId": "748",
                "levelType": 3,
                "children": []
              },
              {
                "name": "工程设计活动",
                "industryId": "7484",
                "parentId": "748",
                "levelType": 3,
                "children": []
              },
              {
                "name": "规划设计管理",
                "industryId": "7485",
                "parentId": "748",
                "levelType": 3,
                "children": []
              },
              {
                "name": "土地规划服务",
                "industryId": "7486",
                "parentId": "748",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "工业与专业设计及其他专业技术服务",
            "industryId": "749",
            "parentId": "74",
            "levelType": 2,
            "children": [
              {
                "name": "工业设计服务",
                "industryId": "7491",
                "parentId": "749",
                "levelType": 3,
                "children": []
              },
              {
                "name": "专业设计服务",
                "industryId": "7492",
                "parentId": "749",
                "levelType": 3,
                "children": []
              },
              {
                "name": "兽医服务",
                "industryId": "7493",
                "parentId": "749",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他未列明专业技术服务业",
                "industryId": "7499",
                "parentId": "749",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "科技推广和应用服务业",
        "industryId": "75",
        "parentId": "M",
        "levelType": 1,
        "children": [
          {
            "name": "技术推广服务",
            "industryId": "751",
            "parentId": "75",
            "levelType": 2,
            "children": [
              {
                "name": "农林牧渔技术推广服务",
                "industryId": "7511",
                "parentId": "751",
                "levelType": 3,
                "children": []
              },
              {
                "name": "生物技术推广服务",
                "industryId": "7512",
                "parentId": "751",
                "levelType": 3,
                "children": []
              },
              {
                "name": "新材料技术推广服务",
                "industryId": "7513",
                "parentId": "751",
                "levelType": 3,
                "children": []
              },
              {
                "name": "节能技术推广服务",
                "industryId": "7514",
                "parentId": "751",
                "levelType": 3,
                "children": []
              },
              {
                "name": "新能源技术推广服务",
                "industryId": "7515",
                "parentId": "751",
                "levelType": 3,
                "children": []
              },
              {
                "name": "环保技术推广服务",
                "industryId": "7516",
                "parentId": "751",
                "levelType": 3,
                "children": []
              },
              {
                "name": "三维（3D)打印技术推广服务",
                "industryId": "7517",
                "parentId": "751",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他技术推广服务",
                "industryId": "7519",
                "parentId": "751",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "知识产权服务",
            "industryId": "752",
            "parentId": "75",
            "levelType": 2,
            "children": [
              {
                "name": "知识产权服务",
                "industryId": "7520",
                "parentId": "752",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "科技中介服务",
            "industryId": "753",
            "parentId": "75",
            "levelType": 2,
            "children": [
              {
                "name": "科技中介服务",
                "industryId": "7530",
                "parentId": "753",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "创业空间服务",
            "industryId": "754",
            "parentId": "75",
            "levelType": 2,
            "children": [
              {
                "name": "创业空间服务",
                "industryId": "7540",
                "parentId": "754",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "其他科技推广服务业",
            "industryId": "759",
            "parentId": "75",
            "levelType": 2,
            "children": [
              {
                "name": "其他科技推广服务业",
                "industryId": "7590",
                "parentId": "759",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "水利、环境和公共设施管理业",
    "industryId": "N",
    "levelType": 0,
    "children": [
      {
        "name": "水利管理业",
        "industryId": "76",
        "parentId": "N",
        "levelType": 1,
        "children": [
          {
            "name": "防洪除涝设施管理",
            "industryId": "761",
            "parentId": "76",
            "levelType": 2,
            "children": [
              {
                "name": "防洪除涝设施管理",
                "industryId": "7610",
                "parentId": "761",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "水资源管理",
            "industryId": "762",
            "parentId": "76",
            "levelType": 2,
            "children": [
              {
                "name": "水资源管理",
                "industryId": "7620",
                "parentId": "762",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "天然水收集与分配",
            "industryId": "763",
            "parentId": "76",
            "levelType": 2,
            "children": [
              {
                "name": "天然水收集与分配",
                "industryId": "7630",
                "parentId": "763",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "水文服务",
            "industryId": "764",
            "parentId": "76",
            "levelType": 2,
            "children": [
              {
                "name": "水文服务",
                "industryId": "7640",
                "parentId": "764",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "其他水利管理业",
            "industryId": "769",
            "parentId": "76",
            "levelType": 2,
            "children": [
              {
                "name": "其他水利管理业",
                "industryId": "7690",
                "parentId": "769",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "生态保护和环境治理业",
        "industryId": "77",
        "parentId": "N",
        "levelType": 1,
        "children": [
          {
            "name": "生态保护",
            "industryId": "771",
            "parentId": "77",
            "levelType": 2,
            "children": [
              {
                "name": "自然生态系统保护管理",
                "industryId": "7711",
                "parentId": "771",
                "levelType": 3,
                "children": []
              },
              {
                "name": "自然遗迹保护管理",
                "industryId": "7712",
                "parentId": "771",
                "levelType": 3,
                "children": []
              },
              {
                "name": "野生动物保护",
                "industryId": "7713",
                "parentId": "771",
                "levelType": 3,
                "children": []
              },
              {
                "name": "野生植物保护",
                "industryId": "7714",
                "parentId": "771",
                "levelType": 3,
                "children": []
              },
              {
                "name": "动物园、水族馆管理服务",
                "industryId": "7715",
                "parentId": "771",
                "levelType": 3,
                "children": []
              },
              {
                "name": "植物园管理服务",
                "industryId": "7716",
                "parentId": "771",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他自然保护",
                "industryId": "7719",
                "parentId": "771",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "环境治理业",
            "industryId": "772",
            "parentId": "77",
            "levelType": 2,
            "children": [
              {
                "name": "水污染治理",
                "industryId": "7721",
                "parentId": "772",
                "levelType": 3,
                "children": []
              },
              {
                "name": "大气污染治理",
                "industryId": "7722",
                "parentId": "772",
                "levelType": 3,
                "children": []
              },
              {
                "name": "固体废物治理",
                "industryId": "7723",
                "parentId": "772",
                "levelType": 3,
                "children": []
              },
              {
                "name": "危险废物治理",
                "industryId": "7724",
                "parentId": "772",
                "levelType": 3,
                "children": []
              },
              {
                "name": "放射性废物治理",
                "industryId": "7725",
                "parentId": "772",
                "levelType": 3,
                "children": []
              },
              {
                "name": "土壤污染治理与修复服务",
                "industryId": "7726",
                "parentId": "772",
                "levelType": 3,
                "children": []
              },
              {
                "name": "噪声与振动控制服务",
                "industryId": "7727",
                "parentId": "772",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他污染治理",
                "industryId": "7729",
                "parentId": "772",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "公共设施管理业",
        "industryId": "78",
        "parentId": "N",
        "levelType": 1,
        "children": [
          {
            "name": "市政设施管理",
            "industryId": "781",
            "parentId": "78",
            "levelType": 2,
            "children": [
              {
                "name": "市政设施管理",
                "industryId": "7810",
                "parentId": "781",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "环境卫生管理",
            "industryId": "782",
            "parentId": "78",
            "levelType": 2,
            "children": [
              {
                "name": "环境卫生管理",
                "industryId": "7820",
                "parentId": "782",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "城乡市容管理",
            "industryId": "783",
            "parentId": "78",
            "levelType": 2,
            "children": [
              {
                "name": "城乡市容管理",
                "industryId": "7830",
                "parentId": "783",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "绿化管理",
            "industryId": "784",
            "parentId": "78",
            "levelType": 2,
            "children": [
              {
                "name": "绿化管理",
                "industryId": "7840",
                "parentId": "784",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "城市公园管理",
            "industryId": "785",
            "parentId": "78",
            "levelType": 2,
            "children": [
              {
                "name": "城市公园管理",
                "industryId": "7850",
                "parentId": "785",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "游览景区管理",
            "industryId": "786",
            "parentId": "78",
            "levelType": 2,
            "children": [
              {
                "name": "名胜风景区管理",
                "industryId": "7861",
                "parentId": "786",
                "levelType": 3,
                "children": []
              },
              {
                "name": "森林公园管理",
                "industryId": "7862",
                "parentId": "786",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他游览景区管理",
                "industryId": "7869",
                "parentId": "786",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "土地管理业",
        "industryId": "79",
        "parentId": "N",
        "levelType": 1,
        "children": [
          {
            "name": "土地整治服务",
            "industryId": "791",
            "parentId": "79",
            "levelType": 2,
            "children": [
              {
                "name": "土地整治服务",
                "industryId": "7910",
                "parentId": "791",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "土地调查评估服务",
            "industryId": "792",
            "parentId": "79",
            "levelType": 2,
            "children": [
              {
                "name": "土地调查评估服务",
                "industryId": "7920",
                "parentId": "792",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "土地登记服务",
            "industryId": "793",
            "parentId": "79",
            "levelType": 2,
            "children": [
              {
                "name": "土地登记服务",
                "industryId": "7930",
                "parentId": "793",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "土地登记代理服务",
            "industryId": "794",
            "parentId": "79",
            "levelType": 2,
            "children": [
              {
                "name": "土地登记代理服务",
                "industryId": "7940",
                "parentId": "794",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "其他土地管理服务",
            "industryId": "799",
            "parentId": "79",
            "levelType": 2,
            "children": [
              {
                "name": "其他土地管理服务",
                "industryId": "7990",
                "parentId": "799",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "居民服务、修理和其他服务业",
    "industryId": "O",
    "levelType": 0,
    "children": [
      {
        "name": "居民服务业",
        "industryId": "80",
        "parentId": "O",
        "levelType": 1,
        "children": [
          {
            "name": "家庭服务",
            "industryId": "801",
            "parentId": "80",
            "levelType": 2,
            "children": [
              {
                "name": "家庭服务",
                "industryId": "8010",
                "parentId": "801",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "托儿所服务",
            "industryId": "802",
            "parentId": "80",
            "levelType": 2,
            "children": [
              {
                "name": "托儿所服务",
                "industryId": "8020",
                "parentId": "802",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "洗染服务",
            "industryId": "803",
            "parentId": "80",
            "levelType": 2,
            "children": [
              {
                "name": "洗染服务",
                "industryId": "8030",
                "parentId": "803",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "理发及美容服务",
            "industryId": "804",
            "parentId": "80",
            "levelType": 2,
            "children": [
              {
                "name": "理发及美容服务",
                "industryId": "8040",
                "parentId": "804",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "洗浴和保健养生服务",
            "industryId": "805",
            "parentId": "80",
            "levelType": 2,
            "children": [
              {
                "name": "洗浴服务",
                "industryId": "8051",
                "parentId": "805",
                "levelType": 3,
                "children": []
              },
              {
                "name": "足浴服务",
                "industryId": "8052",
                "parentId": "805",
                "levelType": 3,
                "children": []
              },
              {
                "name": "养生保健服务",
                "industryId": "8053",
                "parentId": "805",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "摄影扩印服务",
            "industryId": "806",
            "parentId": "80",
            "levelType": 2,
            "children": [
              {
                "name": "摄影扩印服务",
                "industryId": "8060",
                "parentId": "806",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "婚姻服务",
            "industryId": "807",
            "parentId": "80",
            "levelType": 2,
            "children": [
              {
                "name": "婚姻服务",
                "industryId": "8070",
                "parentId": "807",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "殡葬服务",
            "industryId": "808",
            "parentId": "80",
            "levelType": 2,
            "children": [
              {
                "name": "殡葬服务",
                "industryId": "8080",
                "parentId": "808",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "其他居民服务业",
            "industryId": "809",
            "parentId": "80",
            "levelType": 2,
            "children": [
              {
                "name": "其他居民服务业",
                "industryId": "8090",
                "parentId": "809",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "机动车、电子产品和日用产品修理业",
        "industryId": "81",
        "parentId": "O",
        "levelType": 1,
        "children": [
          {
            "name": "汽车、摩托车等修理与维护",
            "industryId": "811",
            "parentId": "81",
            "levelType": 2,
            "children": [
              {
                "name": "汽车修理与维护",
                "industryId": "8111",
                "parentId": "811",
                "levelType": 3,
                "children": []
              },
              {
                "name": "大型车辆装备修理与维护",
                "industryId": "8112",
                "parentId": "811",
                "levelType": 3,
                "children": []
              },
              {
                "name": "摩托车修理与维护",
                "industryId": "8113",
                "parentId": "811",
                "levelType": 3,
                "children": []
              },
              {
                "name": "助动车等修理与维护",
                "industryId": "8114",
                "parentId": "811",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "计算机和办公设备维修",
            "industryId": "812",
            "parentId": "81",
            "levelType": 2,
            "children": [
              {
                "name": "计算机和辅助设备修理",
                "industryId": "8121",
                "parentId": "812",
                "levelType": 3,
                "children": []
              },
              {
                "name": "通讯设备修理",
                "industryId": "8122",
                "parentId": "812",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他办公设备维修",
                "industryId": "8129",
                "parentId": "812",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "家用电器修理",
            "industryId": "813",
            "parentId": "81",
            "levelType": 2,
            "children": [
              {
                "name": "家用电子产品修理",
                "industryId": "8131",
                "parentId": "813",
                "levelType": 3,
                "children": []
              },
              {
                "name": "日用电器修理",
                "industryId": "8132",
                "parentId": "813",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "其他日用产品修理业",
            "industryId": "819",
            "parentId": "81",
            "levelType": 2,
            "children": [
              {
                "name": "自行车修理",
                "industryId": "8191",
                "parentId": "819",
                "levelType": 3,
                "children": []
              },
              {
                "name": "鞋和皮革修理",
                "industryId": "8192",
                "parentId": "819",
                "levelType": 3,
                "children": []
              },
              {
                "name": "家具和相关物品修理",
                "industryId": "8193",
                "parentId": "819",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他未列明日用产品修理业",
                "industryId": "8199",
                "parentId": "819",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "其他服务业",
        "industryId": "82",
        "parentId": "O",
        "levelType": 1,
        "children": [
          {
            "name": "清洁服务",
            "industryId": "821",
            "parentId": "82",
            "levelType": 2,
            "children": [
              {
                "name": "建筑物清洁服务",
                "industryId": "8211",
                "parentId": "821",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他清洁服务",
                "industryId": "8219",
                "parentId": "821",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "宠物服务",
            "industryId": "822",
            "parentId": "82",
            "levelType": 2,
            "children": [
              {
                "name": "宠物饲养",
                "industryId": "8221",
                "parentId": "822",
                "levelType": 3,
                "children": []
              },
              {
                "name": "宠物医院服务",
                "industryId": "8222",
                "parentId": "822",
                "levelType": 3,
                "children": []
              },
              {
                "name": "宠物美容服务",
                "industryId": "8223",
                "parentId": "822",
                "levelType": 3,
                "children": []
              },
              {
                "name": "宠物寄托收养服务",
                "industryId": "8224",
                "parentId": "822",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他宠物服务",
                "industryId": "8229",
                "parentId": "822",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "其他未列明服务业",
            "industryId": "829",
            "parentId": "82",
            "levelType": 2,
            "children": [
              {
                "name": "其他未列明服务业",
                "industryId": "8290",
                "parentId": "829",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "教育",
    "industryId": "P",
    "levelType": 0,
    "children": [
      {
        "name": "教育",
        "industryId": "83",
        "parentId": "P",
        "levelType": 1,
        "children": [
          {
            "name": "学前教育",
            "industryId": "831",
            "parentId": "83",
            "levelType": 2,
            "children": [
              {
                "name": "学前教育",
                "industryId": "8310",
                "parentId": "831",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "初等教育",
            "industryId": "832",
            "parentId": "83",
            "levelType": 2,
            "children": [
              {
                "name": "普通小学教育",
                "industryId": "8321",
                "parentId": "832",
                "levelType": 3,
                "children": []
              },
              {
                "name": "成人小学教育",
                "industryId": "8322",
                "parentId": "832",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "中等教育",
            "industryId": "833",
            "parentId": "83",
            "levelType": 2,
            "children": [
              {
                "name": "普通初中教育",
                "industryId": "8331",
                "parentId": "833",
                "levelType": 3,
                "children": []
              },
              {
                "name": "职业初中教育",
                "industryId": "8332",
                "parentId": "833",
                "levelType": 3,
                "children": []
              },
              {
                "name": "成人初中教育",
                "industryId": "8333",
                "parentId": "833",
                "levelType": 3,
                "children": []
              },
              {
                "name": "普通高中教育",
                "industryId": "8334",
                "parentId": "833",
                "levelType": 3,
                "children": []
              },
              {
                "name": "成人高中教育",
                "industryId": "8335",
                "parentId": "833",
                "levelType": 3,
                "children": []
              },
              {
                "name": "中等职业学校教育",
                "industryId": "8336",
                "parentId": "833",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "高等教育",
            "industryId": "834",
            "parentId": "83",
            "levelType": 2,
            "children": [
              {
                "name": "普通高等教育",
                "industryId": "8341",
                "parentId": "834",
                "levelType": 3,
                "children": []
              },
              {
                "name": "成人高等教育",
                "industryId": "8342",
                "parentId": "834",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "特殊教育",
            "industryId": "835",
            "parentId": "83",
            "levelType": 2,
            "children": [
              {
                "name": "特殊教育",
                "industryId": "8350",
                "parentId": "835",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "技能培训、教育辅助及其他教育",
            "industryId": "839",
            "parentId": "83",
            "levelType": 2,
            "children": [
              {
                "name": "职业技能培训",
                "industryId": "8391",
                "parentId": "839",
                "levelType": 3,
                "children": []
              },
              {
                "name": "体校及体育培训",
                "industryId": "8392",
                "parentId": "839",
                "levelType": 3,
                "children": []
              },
              {
                "name": "文化艺术培训",
                "industryId": "8393",
                "parentId": "839",
                "levelType": 3,
                "children": []
              },
              {
                "name": "教育辅助服务",
                "industryId": "8394",
                "parentId": "839",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他未列明教育",
                "industryId": "8399",
                "parentId": "839",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "卫生和社会工作",
    "industryId": "Q",
    "levelType": 0,
    "children": [
      {
        "name": "卫生",
        "industryId": "84",
        "parentId": "Q",
        "levelType": 1,
        "children": [
          {
            "name": "医院",
            "industryId": "841",
            "parentId": "84",
            "levelType": 2,
            "children": [
              {
                "name": "综合医院",
                "industryId": "8411",
                "parentId": "841",
                "levelType": 3,
                "children": []
              },
              {
                "name": "中医医院",
                "industryId": "8412",
                "parentId": "841",
                "levelType": 3,
                "children": []
              },
              {
                "name": "中西医结合医院",
                "industryId": "8413",
                "parentId": "841",
                "levelType": 3,
                "children": []
              },
              {
                "name": "民族医院",
                "industryId": "8414",
                "parentId": "841",
                "levelType": 3,
                "children": []
              },
              {
                "name": "专科医院",
                "industryId": "8415",
                "parentId": "841",
                "levelType": 3,
                "children": []
              },
              {
                "name": "疗养院",
                "industryId": "8416",
                "parentId": "841",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "基层医疗卫生服务",
            "industryId": "842",
            "parentId": "84",
            "levelType": 2,
            "children": [
              {
                "name": "社区卫生服务中心（站）",
                "industryId": "8421",
                "parentId": "842",
                "levelType": 3,
                "children": []
              },
              {
                "name": "街道卫生院",
                "industryId": "8422",
                "parentId": "842",
                "levelType": 3,
                "children": []
              },
              {
                "name": "乡镇卫生院",
                "industryId": "8423",
                "parentId": "842",
                "levelType": 3,
                "children": []
              },
              {
                "name": "村卫生室",
                "industryId": "8424",
                "parentId": "842",
                "levelType": 3,
                "children": []
              },
              {
                "name": "门诊部（所）",
                "industryId": "8425",
                "parentId": "842",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "专业公共卫生服务",
            "industryId": "843",
            "parentId": "84",
            "levelType": 2,
            "children": [
              {
                "name": "疾病预防控制中心",
                "industryId": "8431",
                "parentId": "843",
                "levelType": 3,
                "children": []
              },
              {
                "name": "专科疾病防治院（所、站)",
                "industryId": "8432",
                "parentId": "843",
                "levelType": 3,
                "children": []
              },
              {
                "name": "妇幼保健院（所、站）",
                "industryId": "8433",
                "parentId": "843",
                "levelType": 3,
                "children": []
              },
              {
                "name": "急救中心（站）服务",
                "industryId": "8434",
                "parentId": "843",
                "levelType": 3,
                "children": []
              },
              {
                "name": "采供血机构服务",
                "industryId": "8435",
                "parentId": "843",
                "levelType": 3,
                "children": []
              },
              {
                "name": "计划生育技术服务活动",
                "industryId": "8436",
                "parentId": "843",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "其他卫生活动",
            "industryId": "849",
            "parentId": "84",
            "levelType": 2,
            "children": [
              {
                "name": "健康体检服务",
                "industryId": "8491",
                "parentId": "849",
                "levelType": 3,
                "children": []
              },
              {
                "name": "临床检验服务",
                "industryId": "8492",
                "parentId": "849",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他未列明卫生服务",
                "industryId": "8499",
                "parentId": "849",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "社会工作",
        "industryId": "85",
        "parentId": "Q",
        "levelType": 1,
        "children": [
          {
            "name": "提供住宿社会工作",
            "industryId": "851",
            "parentId": "85",
            "levelType": 2,
            "children": [
              {
                "name": "干部休养所",
                "industryId": "8511",
                "parentId": "851",
                "levelType": 3,
                "children": []
              },
              {
                "name": "护理机构服务",
                "industryId": "8512",
                "parentId": "851",
                "levelType": 3,
                "children": []
              },
              {
                "name": "精神康复服务",
                "industryId": "8513",
                "parentId": "851",
                "levelType": 3,
                "children": []
              },
              {
                "name": "老年人、残疾人养护服务",
                "industryId": "8514",
                "parentId": "851",
                "levelType": 3,
                "children": []
              },
              {
                "name": "临终关怀服务",
                "industryId": "8515",
                "parentId": "851",
                "levelType": 3,
                "children": []
              },
              {
                "name": "孤残儿童收养和庇护服务",
                "industryId": "8516",
                "parentId": "851",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他提供住宿社会救助",
                "industryId": "8519",
                "parentId": "851",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "不提供住宿社会工作",
            "industryId": "852",
            "parentId": "85",
            "levelType": 2,
            "children": [
              {
                "name": "社会看护与帮助服务",
                "industryId": "8521",
                "parentId": "852",
                "levelType": 3,
                "children": []
              },
              {
                "name": "康复辅具适配服务",
                "industryId": "8522",
                "parentId": "852",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他不提供住宿社会工作",
                "industryId": "8529",
                "parentId": "852",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "文化、体育和娱乐业",
    "industryId": "R",
    "levelType": 0,
    "children": [
      {
        "name": "新闻和出版业",
        "industryId": "86",
        "parentId": "R",
        "levelType": 1,
        "children": [
          {
            "name": "新闻业",
            "industryId": "861",
            "parentId": "86",
            "levelType": 2,
            "children": [
              {
                "name": "新闻业",
                "industryId": "8610",
                "parentId": "861",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "出版业",
            "industryId": "862",
            "parentId": "86",
            "levelType": 2,
            "children": [
              {
                "name": "图书出版",
                "industryId": "8621",
                "parentId": "862",
                "levelType": 3,
                "children": []
              },
              {
                "name": "报纸出版",
                "industryId": "8622",
                "parentId": "862",
                "levelType": 3,
                "children": []
              },
              {
                "name": "期刊出版",
                "industryId": "8623",
                "parentId": "862",
                "levelType": 3,
                "children": []
              },
              {
                "name": "音像制品出版",
                "industryId": "8624",
                "parentId": "862",
                "levelType": 3,
                "children": []
              },
              {
                "name": "电子出版物出版",
                "industryId": "8625",
                "parentId": "862",
                "levelType": 3,
                "children": []
              },
              {
                "name": "数字出版",
                "industryId": "8626",
                "parentId": "862",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他出版业",
                "industryId": "8629",
                "parentId": "862",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "广播、电视、电影和录音制作业",
        "industryId": "87",
        "parentId": "R",
        "levelType": 1,
        "children": [
          {
            "name": "广播",
            "industryId": "871",
            "parentId": "87",
            "levelType": 2,
            "children": [
              {
                "name": "广播",
                "industryId": "8710",
                "parentId": "871",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "电视",
            "industryId": "872",
            "parentId": "87",
            "levelType": 2,
            "children": [
              {
                "name": "电视",
                "industryId": "8720",
                "parentId": "872",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "影视节目制作",
            "industryId": "873",
            "parentId": "87",
            "levelType": 2,
            "children": [
              {
                "name": "影视节目制作",
                "industryId": "8730",
                "parentId": "873",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "广播电视集成播控",
            "industryId": "874",
            "parentId": "87",
            "levelType": 2,
            "children": [
              {
                "name": "广播电视集成播控",
                "industryId": "8740",
                "parentId": "874",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "电影和广播电视节目发行",
            "industryId": "875",
            "parentId": "87",
            "levelType": 2,
            "children": [
              {
                "name": "电影和广播电视节目发行",
                "industryId": "8750",
                "parentId": "875",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "电影放映",
            "industryId": "876",
            "parentId": "87",
            "levelType": 2,
            "children": [
              {
                "name": "电影放映",
                "industryId": "8760",
                "parentId": "876",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "录音制作",
            "industryId": "877",
            "parentId": "87",
            "levelType": 2,
            "children": [
              {
                "name": "录音制作",
                "industryId": "8770",
                "parentId": "877",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "文化艺术业",
        "industryId": "88",
        "parentId": "R",
        "levelType": 1,
        "children": [
          {
            "name": "文艺创作与表演",
            "industryId": "881",
            "parentId": "88",
            "levelType": 2,
            "children": [
              {
                "name": "文艺创作与表演",
                "industryId": "8810",
                "parentId": "881",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "艺术表演场馆",
            "industryId": "882",
            "parentId": "88",
            "levelType": 2,
            "children": [
              {
                "name": "艺术表演场馆",
                "industryId": "8820",
                "parentId": "882",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "图书馆与档案馆",
            "industryId": "883",
            "parentId": "88",
            "levelType": 2,
            "children": [
              {
                "name": "图书馆",
                "industryId": "8831",
                "parentId": "883",
                "levelType": 3,
                "children": []
              },
              {
                "name": "档案馆",
                "industryId": "8832",
                "parentId": "883",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "文物及非物质文化遗产保护",
            "industryId": "884",
            "parentId": "88",
            "levelType": 2,
            "children": [
              {
                "name": "文物及非物质文化遗产保护",
                "industryId": "8840",
                "parentId": "884",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "博物馆",
            "industryId": "885",
            "parentId": "88",
            "levelType": 2,
            "children": [
              {
                "name": "博物馆",
                "industryId": "8850",
                "parentId": "885",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "烈士陵园、纪念馆",
            "industryId": "886",
            "parentId": "88",
            "levelType": 2,
            "children": [
              {
                "name": "烈士陵园、纪念馆",
                "industryId": "8860",
                "parentId": "886",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "群众文体活动",
            "industryId": "887",
            "parentId": "88",
            "levelType": 2,
            "children": [
              {
                "name": "群众文体活动",
                "industryId": "8870",
                "parentId": "887",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "其他文化艺术业",
            "industryId": "889",
            "parentId": "88",
            "levelType": 2,
            "children": [
              {
                "name": "其他文化艺术业",
                "industryId": "8890",
                "parentId": "889",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "体育",
        "industryId": "89",
        "parentId": "R",
        "levelType": 1,
        "children": [
          {
            "name": "体育组织",
            "industryId": "891",
            "parentId": "89",
            "levelType": 2,
            "children": [
              {
                "name": "体育竞赛组织",
                "industryId": "8911",
                "parentId": "891",
                "levelType": 3,
                "children": []
              },
              {
                "name": "体育保障组织",
                "industryId": "8912",
                "parentId": "891",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他体育组织",
                "industryId": "8919",
                "parentId": "891",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "体育场地设施管理",
            "industryId": "892",
            "parentId": "89",
            "levelType": 2,
            "children": [
              {
                "name": "体育场馆管理",
                "industryId": "8921",
                "parentId": "892",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他体育场地设施管理",
                "industryId": "8929",
                "parentId": "892",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "健身休闲活动",
            "industryId": "893",
            "parentId": "89",
            "levelType": 2,
            "children": [
              {
                "name": "健身休闲活动",
                "industryId": "8930",
                "parentId": "893",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "其他体育",
            "industryId": "899",
            "parentId": "89",
            "levelType": 2,
            "children": [
              {
                "name": "体育中介代理服务",
                "industryId": "8991",
                "parentId": "899",
                "levelType": 3,
                "children": []
              },
              {
                "name": "体育健康服务",
                "industryId": "8992",
                "parentId": "899",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他未列明体育",
                "industryId": "8999",
                "parentId": "899",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "娱乐业",
        "industryId": "90",
        "parentId": "R",
        "levelType": 1,
        "children": [
          {
            "name": "室内娱乐活动",
            "industryId": "901",
            "parentId": "90",
            "levelType": 2,
            "children": [
              {
                "name": "歌舞厅娱乐活动",
                "industryId": "9011",
                "parentId": "901",
                "levelType": 3,
                "children": []
              },
              {
                "name": "电子游艺厅娱乐活动",
                "industryId": "9012",
                "parentId": "901",
                "levelType": 3,
                "children": []
              },
              {
                "name": "网吧活动",
                "industryId": "9013",
                "parentId": "901",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他室内娱乐活动",
                "industryId": "9019",
                "parentId": "901",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "游乐园",
            "industryId": "902",
            "parentId": "90",
            "levelType": 2,
            "children": [
              {
                "name": "游乐园",
                "industryId": "9020",
                "parentId": "902",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "休闲观光活动",
            "industryId": "903",
            "parentId": "90",
            "levelType": 2,
            "children": [
              {
                "name": "休闲观光活动",
                "industryId": "9030",
                "parentId": "903",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "彩票活动",
            "industryId": "904",
            "parentId": "90",
            "levelType": 2,
            "children": [
              {
                "name": "体育彩票服务",
                "industryId": "9041",
                "parentId": "904",
                "levelType": 3,
                "children": []
              },
              {
                "name": "福利彩票服务",
                "industryId": "9042",
                "parentId": "904",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他彩票服务",
                "industryId": "9049",
                "parentId": "904",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "文化体育娱乐活动与经纪代理服务",
            "industryId": "905",
            "parentId": "90",
            "levelType": 2,
            "children": [
              {
                "name": "文化活动服务",
                "industryId": "9051",
                "parentId": "905",
                "levelType": 3,
                "children": []
              },
              {
                "name": "体育表演服务",
                "industryId": "9052",
                "parentId": "905",
                "levelType": 3,
                "children": []
              },
              {
                "name": "文化娱乐经纪人",
                "industryId": "9053",
                "parentId": "905",
                "levelType": 3,
                "children": []
              },
              {
                "name": "体育经纪人",
                "industryId": "9054",
                "parentId": "905",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他文化艺术经纪代理",
                "industryId": "9059",
                "parentId": "905",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "其他娱乐业",
            "industryId": "909",
            "parentId": "90",
            "levelType": 2,
            "children": [
              {
                "name": "其他娱乐业",
                "industryId": "9090",
                "parentId": "909",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "公共管理、社会保障和社会组织",
    "industryId": "S",
    "levelType": 0,
    "children": [
      {
        "name": "中国共产党机关",
        "industryId": "91",
        "parentId": "S",
        "levelType": 1,
        "children": [
          {
            "name": "中国共产党机关",
            "industryId": "910",
            "parentId": "91",
            "levelType": 2,
            "children": [
              {
                "name": "中国共产党机关",
                "industryId": "9100",
                "parentId": "910",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "国家机构",
        "industryId": "92",
        "parentId": "S",
        "levelType": 1,
        "children": [
          {
            "name": "国家权力机构",
            "industryId": "921",
            "parentId": "92",
            "levelType": 2,
            "children": [
              {
                "name": "国家权力机构",
                "industryId": "9210",
                "parentId": "921",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "国家行政机构",
            "industryId": "922",
            "parentId": "92",
            "levelType": 2,
            "children": [
              {
                "name": "综合事务管理机构",
                "industryId": "9221",
                "parentId": "922",
                "levelType": 3,
                "children": []
              },
              {
                "name": "对外事务管理机构",
                "industryId": "9222",
                "parentId": "922",
                "levelType": 3,
                "children": []
              },
              {
                "name": "公共安全管理机构",
                "industryId": "9223",
                "parentId": "922",
                "levelType": 3,
                "children": []
              },
              {
                "name": "社会事务管理机构",
                "industryId": "9224",
                "parentId": "922",
                "levelType": 3,
                "children": []
              },
              {
                "name": "经济事务管理机构",
                "industryId": "9225",
                "parentId": "922",
                "levelType": 3,
                "children": []
              },
              {
                "name": "行政监督检查机构",
                "industryId": "9226",
                "parentId": "922",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "人民法院和人民检察院",
            "industryId": "923",
            "parentId": "92",
            "levelType": 2,
            "children": [
              {
                "name": "人民法院",
                "industryId": "9231",
                "parentId": "923",
                "levelType": 3,
                "children": []
              },
              {
                "name": "人民检察院",
                "industryId": "9232",
                "parentId": "923",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "其他国家机构",
            "industryId": "929",
            "parentId": "92",
            "levelType": 2,
            "children": [
              {
                "name": "消防管理机构",
                "industryId": "9291",
                "parentId": "929",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他未列明国家机构",
                "industryId": "9299",
                "parentId": "929",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "人民政协、民主党派",
        "industryId": "93",
        "parentId": "S",
        "levelType": 1,
        "children": [
          {
            "name": "人民政协",
            "industryId": "931",
            "parentId": "93",
            "levelType": 2,
            "children": [
              {
                "name": "人民政协",
                "industryId": "9310",
                "parentId": "931",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "民主党派",
            "industryId": "932",
            "parentId": "93",
            "levelType": 2,
            "children": [
              {
                "name": "民主党派",
                "industryId": "9320",
                "parentId": "932",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "社会保障",
        "industryId": "94",
        "parentId": "S",
        "levelType": 1,
        "children": [
          {
            "name": "基本保险",
            "industryId": "941",
            "parentId": "94",
            "levelType": 2,
            "children": [
              {
                "name": "基本养老保险",
                "industryId": "9411",
                "parentId": "941",
                "levelType": 3,
                "children": []
              },
              {
                "name": "基本医疗保险",
                "industryId": "9412",
                "parentId": "941",
                "levelType": 3,
                "children": []
              },
              {
                "name": "失业保险",
                "industryId": "9413",
                "parentId": "941",
                "levelType": 3,
                "children": []
              },
              {
                "name": "工伤保险",
                "industryId": "9414",
                "parentId": "941",
                "levelType": 3,
                "children": []
              },
              {
                "name": "生育保险",
                "industryId": "9415",
                "parentId": "941",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他基本保险",
                "industryId": "9419",
                "parentId": "941",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "补充保险",
            "industryId": "942",
            "parentId": "94",
            "levelType": 2,
            "children": [
              {
                "name": "补充保险",
                "industryId": "9420",
                "parentId": "942",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "其他社会保障",
            "industryId": "949",
            "parentId": "94",
            "levelType": 2,
            "children": [
              {
                "name": "其他社会保障",
                "industryId": "9490",
                "parentId": "949",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "群众团体、社会团体和其他成员组织",
        "industryId": "95",
        "parentId": "S",
        "levelType": 1,
        "children": [
          {
            "name": "群众团体",
            "industryId": "951",
            "parentId": "95",
            "levelType": 2,
            "children": [
              {
                "name": "工会",
                "industryId": "9511",
                "parentId": "951",
                "levelType": 3,
                "children": []
              },
              {
                "name": "妇联",
                "industryId": "9512",
                "parentId": "951",
                "levelType": 3,
                "children": []
              },
              {
                "name": "共青团",
                "industryId": "9513",
                "parentId": "951",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他群众团体",
                "industryId": "9519",
                "parentId": "951",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "社会团体",
            "industryId": "952",
            "parentId": "95",
            "levelType": 2,
            "children": [
              {
                "name": "专业性团体",
                "industryId": "9521",
                "parentId": "952",
                "levelType": 3,
                "children": []
              },
              {
                "name": "行业性团体",
                "industryId": "9522",
                "parentId": "952",
                "levelType": 3,
                "children": []
              },
              {
                "name": "其他社会团体",
                "industryId": "9529",
                "parentId": "952",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "基金会",
            "industryId": "953",
            "parentId": "95",
            "levelType": 2,
            "children": [
              {
                "name": "基金会",
                "industryId": "9530",
                "parentId": "953",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "宗教组织",
            "industryId": "954",
            "parentId": "95",
            "levelType": 2,
            "children": [
              {
                "name": "宗教团体服务",
                "industryId": "9541",
                "parentId": "954",
                "levelType": 3,
                "children": []
              },
              {
                "name": "宗教活动场所服务",
                "industryId": "9542",
                "parentId": "954",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      },
      {
        "name": "基层群众自治组织",
        "industryId": "96",
        "parentId": "S",
        "levelType": 1,
        "children": [
          {
            "name": "社区居民自治组织",
            "industryId": "961",
            "parentId": "96",
            "levelType": 2,
            "children": [
              {
                "name": "社区居民自治组织",
                "industryId": "9610",
                "parentId": "961",
                "levelType": 3,
                "children": []
              }
            ]
          },
          {
            "name": "村民自治组织",
            "industryId": "962",
            "parentId": "96",
            "levelType": 2,
            "children": [
              {
                "name": "村民自治组织",
                "industryId": "9620",
                "parentId": "962",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "国际组织",
    "industryId": "T",
    "levelType": 0,
    "children": [
      {
        "name": "国际组织",
        "industryId": "97",
        "parentId": "T",
        "levelType": 1,
        "children": [
          {
            "name": "国际组织",
            "industryId": "970",
            "parentId": "97",
            "levelType": 2,
            "children": [
              {
                "name": "国际组织",
                "industryId": "9700",
                "parentId": "970",
                "levelType": 3,
                "children": []
              }
            ]
          }
        ]
      }
    ]
  }
]

export default list