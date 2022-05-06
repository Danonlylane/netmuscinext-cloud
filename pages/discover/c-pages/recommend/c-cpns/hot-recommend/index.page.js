import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'


import {
    HOT_RECOMMEND_LIMIT
} from "@/common/constants"
import BeiThemeHeaderRCM from '@/components/theme-header-rcm'
import BeiSongsCover from '@/components/songs-cover'

import {
    HotRecommendWrapper,
} from "./style"
import { getHotRecommendAction } from '../../store/actionCreators'

const BeiHotRecommend = memo(() => {
    //redux hooks
    // const dispatch = useDispatch();

    // const { hotRecommends } = useSelector(state => ({
    //     hotRecommends: state.getIn(["recommend", "hotRecommends"])
    // }), shallowEqual)

    // other hooks
    // useEffect(() => {
    //     dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT));
    // }, [dispatch])

    const hotRecommends = [
        {
            "id": 2919512648,
            "type": 0,
            "name": "来得及 考的上 何以惧 你可以",
            "copywriter": "热门推荐",
            "picUrl": "https://p1.music.126.net/IXSPb5jcAA0sC9OMgMmmFg==/109951164297690587.jpg",
            "canDislike": true,
            "trackNumberUpdateTime": 1647492973807,
            "playCount": 1363959,
            "trackCount": 76,
            "highQuality": false,
            "alg": "cityLevel_unknow"
        },
        {
            "id": 6952220954,
            "type": 0,
            "name": "短视频变装神曲【舞曲 卡点 慢摇】",
            "copywriter": "热门推荐",
            "picUrl": "https://p1.music.126.net/8WiQ8y6zgNcpO0IoiBVbzg==/109951166884472394.jpg",
            "canDislike": true,
            "trackNumberUpdateTime": 1651815126203,
            "playCount": 532310,
            "trackCount": 85,
            "highQuality": false,
            "alg": "cityLevel_unknow"
        },
        {
            "id": 7121608360,
            "type": 0,
            "name": "“其实无论怎么选择，都会有遗憾的对吧”",
            "copywriter": "热门推荐",
            "picUrl": "https://p1.music.126.net/iHbKrvHFfHb1y3Osu9EnPQ==/109951166726930602.jpg",
            "canDislike": true,
            "trackNumberUpdateTime": 1639467863030,
            "playCount": 573819,
            "trackCount": 81,
            "highQuality": false,
            "alg": "cityLevel_unknow"
        },
        {
            "id": 2753021827,
            "type": 0,
            "name": "忘不掉的伤（最火劲爆DJ）【持续更新】",
            "copywriter": "热门推荐",
            "picUrl": "https://p1.music.126.net/DJGKQZqtAx2Y4OKaItvnZg==/109951164620137291.jpg",
            "canDislike": true,
            "trackNumberUpdateTime": 1650638623162,
            "playCount": 958237,
            "trackCount": 117,
            "highQuality": false,
            "alg": "cityLevel_unknow"
        },
        {
            "id": 4888621462,
            "type": 0,
            "name": "乾坤未定 你我皆是黑马",
            "copywriter": "热门推荐",
            "picUrl": "https://p1.music.126.net/MCLhEhbWNrPDQhX99wVBHw==/109951165752004803.jpg",
            "canDislike": true,
            "trackNumberUpdateTime": 1651772761751,
            "playCount": 371606,
            "trackCount": 245,
            "highQuality": false,
            "alg": "cityLevel_unknow"
        },
        {
            "id": 7286654413,
            "type": 0,
            "name": "『入耳即醉』BGM加持，作业都不叫事儿~",
            "copywriter": "热门推荐",
            "picUrl": "https://p1.music.126.net/sjyk0uNtgH9-ZCM6djXR5g==/109951167039788611.jpg",
            "canDislike": true,
            "trackNumberUpdateTime": 1646375755461,
            "playCount": 1100951,
            "trackCount": 35,
            "highQuality": false,
            "alg": "cityLevel_unknow"
        },
        {
            "id": 3066203253,
            "type": 0,
            "name": "人越浑浊就越喜欢干净的东西.",
            "copywriter": "热门推荐",
            "picUrl": "https://p1.music.126.net/8hCb7EyGXgXs6aDaMEXAOQ==/109951164974996718.jpg",
            "canDislike": true,
            "trackNumberUpdateTime": 1650612451748,
            "playCount": 1096317,
            "trackCount": 273,
            "highQuality": false,
            "alg": "cityLevel_unknow"
        },
        {
            "id": 7070551117,
            "type": 0,
            "name": "把自己的快乐寄托在自己身上 | 自娱自乐:) ",
            "copywriter": "热门推荐",
            "picUrl": "https://p1.music.126.net/5f_tP7x34ECja_WRFf-rTg==/109951166622925910.jpg",
            "canDislike": true,
            "trackNumberUpdateTime": 1636957386327,
            "playCount": 843404,
            "trackCount": 38,
            "highQuality": false,
            "alg": "cityLevel_unknow"
        },
        {
            "id": 520028010,
            "type": 0,
            "name": "天气好的话，把耳机分给我一半吧",
            "copywriter": "热门推荐",
            "picUrl": "https://p1.music.126.net/kv5h_F6XAHEMQSj14PM7Ug==/109951166723763055.jpg",
            "canDislike": true,
            "trackNumberUpdateTime": 1651767031596,
            "playCount": 851909,
            "trackCount": 237,
            "highQuality": false,
            "alg": "cityLevel_unknow"
        },
        {
            "id": 5444463825,
            "type": 0,
            "name": "今年我们二十七八岁，好像什么都没做",
            "copywriter": "热门推荐",
            "picUrl": "https://p1.music.126.net/B2K5dlWCs_mWFm6ttJ_hdw==/109951165604357408.jpg",
            "canDislike": true,
            "trackNumberUpdateTime": 1651204143088,
            "playCount": 3861883,
            "trackCount": 40,
            "highQuality": false,
            "alg": "cityLevel_unknow"
        },
        {
            "id": 691735889,
            "type": 0,
            "name": "迷人反派 | 我要赢 不择手段",
            "copywriter": "热门推荐",
            "picUrl": "https://p1.music.126.net/wcq9fCbGf504elz1rrlLYA==/109951165993098265.jpg",
            "canDislike": true,
            "trackNumberUpdateTime": 1648998039489,
            "playCount": 552701,
            "trackCount": 126,
            "highQuality": false,
            "alg": "cityLevel_unknow"
        },
        {
            "id": 2770270323,
            "type": 0,
            "name": "好像今晚这个歌单是DJ时刻吧",
            "copywriter": "热门推荐",
            "picUrl": "https://p1.music.126.net/GQkPC35zjYvJj5Q_KWs21Q==/109951165685006345.jpg",
            "canDislike": true,
            "trackNumberUpdateTime": 1651480265126,
            "playCount": 4008874,
            "trackCount": 300,
            "highQuality": false,
            "alg": "cityLevel_unknow"
        },
        {
            "id": 6684024967,
            "type": 0,
            "name": "橘味汽水°旋律中弥漫着柑橘清香",
            "copywriter": "热门推荐",
            "picUrl": "https://p1.music.126.net/AW659KKmMCQRU4rkeCXXcg==/109951165866349694.jpg",
            "canDislike": true,
            "trackNumberUpdateTime": 1637476318216,
            "playCount": 486425,
            "trackCount": 73,
            "highQuality": false,
            "alg": "cityLevel_unknow"
        },
        {
            "id": 5258985986,
            "type": 0,
            "name": "高级的极简主义 寒冷的悲观主义 ｜ 新古典",
            "copywriter": "热门推荐",
            "picUrl": "https://p1.music.126.net/cKDI1r6YkyCgG6GDSXE_Xw==/109951165380673643.jpg",
            "canDislike": true,
            "trackNumberUpdateTime": 1649420446220,
            "playCount": 1223355,
            "trackCount": 71,
            "highQuality": false,
            "alg": "cityLevel_unknow"
        },
        {
            "id": 3196250489,
            "type": 0,
            "name": "DJ顶级骚曲享受❤【环绕】中文",
            "copywriter": "热门推荐",
            "picUrl": "https://p1.music.126.net/o1-XoE8Qfy3zzZ6pjjbh9w==/109951167043527854.jpg",
            "canDislike": true,
            "trackNumberUpdateTime": 1645913369567,
            "playCount": 17684570,
            "trackCount": 55,
            "highQuality": false,
            "alg": "cityLevel_unknow"
        },
        {
            "id": 6758796322,
            "type": 0,
            "name": "大胆做自己，没什么大不了的对吧",
            "copywriter": "热门推荐",
            "picUrl": "https://p1.music.126.net/PTS2kqJULgjuBTng3xemDQ==/109951165979913753.jpg",
            "canDislike": true,
            "trackNumberUpdateTime": 1640855522866,
            "playCount": 2869530,
            "trackCount": 40,
            "highQuality": false,
            "alg": "cityLevel_unknow"
        },
        {
            "id": 3111369145,
            "type": 0,
            "name": "抱歉 我天生很酷 走路带风",
            "copywriter": "热门推荐",
            "picUrl": "https://p1.music.126.net/-mn0qF2gnX9ZQkrSBrxcCw==/109951164544653462.jpg",
            "canDislike": true,
            "trackNumberUpdateTime": 1642379181810,
            "playCount": 2529950,
            "trackCount": 37,
            "highQuality": false,
            "alg": "cityLevel_unknow"
        },
        {
            "id": 6861636349,
            "type": 0,
            "name": "氛围感/高级感视频剪辑背景音乐",
            "copywriter": "热门推荐",
            "picUrl": "https://p1.music.126.net/pN9k1Fb4F-YT05b_-HgGHw==/109951166358819395.jpg",
            "canDislike": true,
            "trackNumberUpdateTime": 1651651699447,
            "playCount": 241179,
            "trackCount": 36,
            "highQuality": false,
            "alg": "cityLevel_unknow"
        },
        {
            "id": 2659242153,
            "type": 0,
            "name": "“原来执着太久的东西本就失去了意义”",
            "copywriter": "热门推荐",
            "picUrl": "https://p1.music.126.net/ObYSKAe5_mAavaFaYEs-Hw==/109951166880851158.jpg",
            "canDislike": true,
            "trackNumberUpdateTime": 1649860056866,
            "playCount": 1034653,
            "trackCount": 99,
            "highQuality": false,
            "alg": "cityLevel_unknow"
        },
        {
            "id": 3225799156,
            "type": 0,
            "name": "不怕新歌有多嗨 就怕老歌带DJ.",
            "copywriter": "热门推荐",
            "picUrl": "https://p1.music.126.net/D8jm7jd7hG3OOslkrNsSHg==/109951165291000726.jpg",
            "canDislike": true,
            "trackNumberUpdateTime": 1650031051575,
            "playCount": 1592776,
            "trackCount": 140,
            "highQuality": false,
            "alg": "cityLevel_unknow"
        },
        {
            "id": 2456564054,
            "type": 0,
            "name": "开场即秒代入感硬到底",
            "copywriter": "热门推荐",
            "picUrl": "https://p1.music.126.net/geEpy0cgI9gHWKN5eXZdZw==/109951166984006471.jpg",
            "canDislike": true,
            "trackNumberUpdateTime": 1648955689462,
            "playCount": 3016752,
            "trackCount": 568,
            "highQuality": false,
            "alg": "cityLevel_unknow"
        },
        {
            "id": 5457811198,
            "type": 0,
            "name": "你一定要站在自己所热爱的世界里 闪闪发亮",
            "copywriter": "热门推荐",
            "picUrl": "https://p1.music.126.net/vYqmpUaplt9Pg9oMoFrJDA==/109951165729660503.jpg",
            "canDislike": true,
            "trackNumberUpdateTime": 1650972481819,
            "playCount": 732516,
            "trackCount": 55,
            "highQuality": false,
            "alg": "cityLevel_unknow"
        },
        {
            "id": 7187326641,
            "type": 0,
            "name": "所以 你能接收到我的信号吗",
            "copywriter": "热门推荐",
            "picUrl": "https://p1.music.126.net/xa49nOdOIQ_GwoxOpZA7KA==/109951166822830945.jpg",
            "canDislike": true,
            "trackNumberUpdateTime": 1648562222372,
            "playCount": 407314,
            "trackCount": 65,
            "highQuality": false,
            "alg": "cityLevel_unknow"
        },
        {
            "id": 7349654423,
            "type": 0,
            "name": "「温柔长夜」今天的天空像一封深蓝色的情书",
            "copywriter": "热门推荐",
            "picUrl": "https://p1.music.126.net/Q3RprXhgYawz-8rexcL12g==/109951167193137491.jpg",
            "canDislike": true,
            "trackNumberUpdateTime": 1648189566916,
            "playCount": 629794,
            "trackCount": 45,
            "highQuality": false,
            "alg": "cityLevel_unknow"
        },
        {
            "id": 2629085158,
            "type": 0,
            "name": "DJ·咚鼓版车载歌曲（不定时更新）",
            "copywriter": "热门推荐",
            "picUrl": "https://p1.music.126.net/iEOcLcH3AI2MlRXEkZegCw==/109951167067379958.jpg",
            "canDislike": true,
            "trackNumberUpdateTime": 1651406750629,
            "playCount": 2378764,
            "trackCount": 147,
            "highQuality": false,
            "alg": "cityLevel_unknow"
        },
        {
            "id": 2951055955,
            "type": 0,
            "name": "阿尔法脑波音乐（激发右脑潜能）增加记忆力",
            "copywriter": "热门推荐",
            "picUrl": "https://p1.music.126.net/8SqCGA612KZn8oAqzBRY9w==/109951165535250520.jpg",
            "canDislike": true,
            "trackNumberUpdateTime": 1566520053911,
            "playCount": 8410976,
            "trackCount": 23,
            "highQuality": false,
            "alg": "cityLevel_unknow"
        },
        {
            "id": 2424030849,
            "type": 0,
            "name": "『中文咚鼓/DJ』忽然想起你 然后笑了笑",
            "copywriter": "热门推荐",
            "picUrl": "https://p1.music.126.net/AaX7LkaQrc--3hxC4TUS6A==/109951167183874178.jpg",
            "canDislike": true,
            "trackNumberUpdateTime": 1651592979398,
            "playCount": 21449462,
            "trackCount": 273,
            "highQuality": false,
            "alg": "cityLevel_unknow"
        },
        {
            "id": 5082520606,
            "type": 0,
            "name": "欢快小调｜寄给你一支乐队活力剂",
            "copywriter": "热门推荐",
            "picUrl": "https://p1.music.126.net/nm-owPclNlidQbuZue6wxQ==/109951167050524111.jpg",
            "canDislike": true,
            "trackNumberUpdateTime": 1651367911412,
            "playCount": 1682720,
            "trackCount": 42,
            "highQuality": false,
            "alg": "cityLevel_unknow"
        }
    ];

    return (
        <HotRecommendWrapper>
            <BeiThemeHeaderRCM title="热门推荐" keywords={["华语", "流行", "民谣", "摇滚", "电子"]} />
            <div className='recommend-list'>
                {
                    hotRecommends.slice(0, 8).map((item, index) => {
                        return (
                            <BeiSongsCover key={item.id} info={item}>
                                {item}
                            </BeiSongsCover>

                        )
                    })
                }
            </div>
        </HotRecommendWrapper>
    )
})

export default BeiHotRecommend