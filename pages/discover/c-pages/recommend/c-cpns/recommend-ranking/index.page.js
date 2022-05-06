import React, { memo, useEffect } from 'react'

import BeiThemeHeaderRCM from '@/components/theme-header-rcm'
import { RankingWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getTopListAction } from '../../store/actionCreators'
import BeiTopRanking from '@/components/top-ranking'

const BeiRecommendRanking = memo(() => {
    // const { upRanking, newRanking, originRanking } = useSelector(state => ({
    //     upRanking: state.getIn(["recommend", "upRanking"]),
    //     newRanking: state.getIn(["recommend", "newRanking"]),
    //     originRanking: state.getIn(["recommend", "originRanking"])
    // }), shallowEqual)
    // redux hooks
    const dispatch = useDispatch();

    const upRanking = {
        tracks: [
            {
                "name": "命运",
                "id": 1942146669,
                "pst": 0,
                "t": 0,
                "ar": [
                    {
                        "id": 13145036,
                        "name": "傲七爷",
                        "tns": [],
                        "alias": []
                    }
                ],
                "alia": [],
                "pop": 100,
                "st": 0,
                "rt": "",
                "fee": 8,
                "v": 8,
                "crbt": null,
                "cf": "",
                "al": {
                    "id": 144098278,
                    "name": "命运",
                    "picUrl": "http://p4.music.126.net/gD82RaTf9qck2_FDZZaNeQ==/109951167355028575.jpg",
                    "tns": [
                        "爱可以相知相许"
                    ],
                    "pic_str": "109951167355028575",
                    "pic": 109951167355028580
                },
                "dt": 193235,
                "h": {
                    "br": 320000,
                    "fid": 0,
                    "size": 7732289,
                    "vd": -11133,
                    "sr": 44100
                },
                "m": {
                    "br": 192000,
                    "fid": 0,
                    "size": 4639391,
                    "vd": -8527,
                    "sr": 44100
                },
                "l": {
                    "br": 128000,
                    "fid": 0,
                    "size": 3092942,
                    "vd": -6868,
                    "sr": 44100
                },
                "sq": {
                    "br": 771685,
                    "fid": 0,
                    "size": 18639621,
                    "vd": -11318,
                    "sr": 44100
                },
                "hr": null,
                "a": null,
                "cd": "01",
                "no": 1,
                "rtUrl": null,
                "ftype": 0,
                "rtUrls": [],
                "djId": 0,
                "copyright": 0,
                "s_id": 0,
                "mark": 0,
                "originCoverType": 2,
                "originSongSimpleData": null,
                "tagPicList": null,
                "resourceState": true,
                "version": 8,
                "songJumpInfo": null,
                "entertainmentTags": null,
                "single": 0,
                "noCopyrightRcmd": null,
                "mst": 9,
                "mv": 0,
                "rtype": 0,
                "rurl": null,
                "cp": 0,
                "publishTime": 0,
                "tns": [
                    "正式版"
                ]
            },
            {
                "name": "且听",
                "id": 1944467250,
                "pst": 0,
                "t": 0,
                "ar": [
                    {
                        "id": 12174057,
                        "name": "艾辰",
                        "tns": [],
                        "alias": []
                    },
                    {
                        "id": 12286056,
                        "name": "褚晨茜",
                        "tns": [],
                        "alias": []
                    }
                ],
                "alia": [],
                "pop": 100,
                "st": 0,
                "rt": "",
                "fee": 8,
                "v": 7,
                "crbt": null,
                "cf": "",
                "al": {
                    "id": 144450046,
                    "name": "且听",
                    "picUrl": "http://p3.music.126.net/L-wQP8hlzmcxvgy3rP0PYw==/109951167377396263.jpg",
                    "tns": [],
                    "pic_str": "109951167377396263",
                    "pic": 109951167377396260
                },
                "dt": 202794,
                "h": {
                    "br": 320000,
                    "fid": 0,
                    "size": 8113965,
                    "vd": -47459,
                    "sr": 48000
                },
                "m": {
                    "br": 192000,
                    "fid": 0,
                    "size": 4868397,
                    "vd": -44883,
                    "sr": 48000
                },
                "l": {
                    "br": 128000,
                    "fid": 0,
                    "size": 3245613,
                    "vd": -43288,
                    "sr": 48000
                },
                "sq": {
                    "br": 953169,
                    "fid": 0,
                    "size": 24162214,
                    "vd": -47397,
                    "sr": 48000
                },
                "hr": {
                    "br": 1722539,
                    "fid": 0,
                    "size": 43665218,
                    "vd": -47458,
                    "sr": 48000
                },
                "a": null,
                "cd": "01",
                "no": 1,
                "rtUrl": null,
                "ftype": 0,
                "rtUrls": [],
                "djId": 0,
                "copyright": 0,
                "s_id": 0,
                "mark": 536870912,
                "originCoverType": 0,
                "originSongSimpleData": null,
                "tagPicList": null,
                "resourceState": true,
                "version": 7,
                "songJumpInfo": null,
                "entertainmentTags": null,
                "single": 0,
                "noCopyrightRcmd": null,
                "mst": 9,
                "mv": 0,
                "rtype": 0,
                "rurl": null,
                "cp": 0,
                "publishTime": 0
            },
            {
                "name": "发现美的耳朵 Feat.马思唯，刘越",
                "id": 1942691258,
                "pst": 0,
                "t": 0,
                "ar": [
                    {
                        "id": 12118563,
                        "name": "也是福",
                        "tns": [],
                        "alias": []
                    },
                    {
                        "id": 1132392,
                        "name": "马思唯",
                        "tns": [],
                        "alias": []
                    },
                    {
                        "id": 35495565,
                        "name": "刘越",
                        "tns": [],
                        "alias": []
                    }
                ],
                "alia": [],
                "pop": 100,
                "st": 0,
                "rt": "",
                "fee": 8,
                "v": 7,
                "crbt": null,
                "cf": "",
                "al": {
                    "id": 144496208,
                    "name": "也是蓝",
                    "picUrl": "http://p4.music.126.net/My3JmmKFvqqhcVRKH7El1w==/109951167379866407.jpg",
                    "tns": [],
                    "pic_str": "109951167379866407",
                    "pic": 109951167379866400
                },
                "dt": 151250,
                "h": {
                    "br": 320000,
                    "fid": 0,
                    "size": 6052929,
                    "vd": -32412,
                    "sr": 48000
                },
                "m": {
                    "br": 192000,
                    "fid": 0,
                    "size": 3631809,
                    "vd": -29790,
                    "sr": 48000
                },
                "l": {
                    "br": 128000,
                    "fid": 0,
                    "size": 2421249,
                    "vd": -28065,
                    "sr": 48000
                },
                "sq": {
                    "br": 889671,
                    "fid": 0,
                    "size": 16820349,
                    "vd": -32222,
                    "sr": 48000
                },
                "hr": {
                    "br": 1657924,
                    "fid": 0,
                    "size": 31345138,
                    "vd": -32410,
                    "sr": 48000
                },
                "a": null,
                "cd": "01",
                "no": 7,
                "rtUrl": null,
                "ftype": 0,
                "rtUrls": [],
                "djId": 0,
                "copyright": 0,
                "s_id": 0,
                "mark": 536870912,
                "originCoverType": 0,
                "originSongSimpleData": null,
                "tagPicList": null,
                "resourceState": true,
                "version": 7,
                "songJumpInfo": null,
                "entertainmentTags": null,
                "single": 0,
                "noCopyrightRcmd": null,
                "mst": 9,
                "mv": 14526275,
                "rtype": 0,
                "rurl": null,
                "cp": 0,
                "publishTime": 0
            },
            {
                "name": "收藏",
                "id": 1496828617,
                "pst": 0,
                "t": 0,
                "ar": [
                    {
                        "id": 33426947,
                        "name": "追杀破破",
                        "tns": [],
                        "alias": []
                    }
                ],
                "alia": [],
                "pop": 100,
                "st": 0,
                "rt": "",
                "fee": 8,
                "v": 14,
                "crbt": null,
                "cf": "",
                "al": {
                    "id": 98559053,
                    "name": "收藏",
                    "picUrl": "http://p4.music.126.net/hRHo9O6Tnm5PrL1RgA82gg==/109951165483017231.jpg",
                    "tns": [],
                    "pic_str": "109951165483017231",
                    "pic": 109951165483017230
                },
                "dt": 240698,
                "h": {
                    "br": 320000,
                    "fid": 0,
                    "size": 9630765,
                    "vd": -11747,
                    "sr": 48000
                },
                "m": {
                    "br": 192000,
                    "fid": 0,
                    "size": 5778477,
                    "vd": -9139,
                    "sr": 48000
                },
                "l": {
                    "br": 128000,
                    "fid": 0,
                    "size": 3852333,
                    "vd": -7386,
                    "sr": 48000
                },
                "sq": {
                    "br": 810317,
                    "fid": 0,
                    "size": 24380280,
                    "vd": -11789,
                    "sr": 48000
                },
                "hr": {
                    "br": 1574041,
                    "fid": 0,
                    "size": 47358656,
                    "vd": -11745,
                    "sr": 48000
                },
                "a": null,
                "cd": "01",
                "no": 1,
                "rtUrl": null,
                "ftype": 0,
                "rtUrls": [],
                "djId": 0,
                "copyright": 0,
                "s_id": 0,
                "mark": 536870912,
                "originCoverType": 1,
                "originSongSimpleData": null,
                "tagPicList": null,
                "resourceState": true,
                "version": 14,
                "songJumpInfo": null,
                "entertainmentTags": null,
                "single": 0,
                "noCopyrightRcmd": null,
                "mst": 9,
                "mv": 0,
                "rtype": 0,
                "rurl": null,
                "cp": 0,
                "publishTime": 0
            },
            {
                "name": "爱在夏天",
                "id": 563563366,
                "pst": 0,
                "t": 0,
                "ar": [
                    {
                        "id": 12676697,
                        "name": "告五人",
                        "tns": [],
                        "alias": []
                    }
                ],
                "alia": [],
                "pop": 100,
                "st": 0,
                "rt": null,
                "fee": 8,
                "v": 12,
                "crbt": null,
                "cf": "",
                "al": {
                    "id": 38991204,
                    "name": "爱在夏天",
                    "picUrl": "http://p3.music.126.net/PlRQ5L8bo8FAuoL5T8vWoA==/109951163304680451.jpg",
                    "tns": [],
                    "pic_str": "109951163304680451",
                    "pic": 109951163304680450
                },
                "dt": 380800,
                "h": {
                    "br": 320000,
                    "fid": 0,
                    "size": 15234656,
                    "vd": -49077,
                    "sr": 44100
                },
                "m": {
                    "br": 192000,
                    "fid": 0,
                    "size": 9140811,
                    "vd": -49077,
                    "sr": 44100
                },
                "l": {
                    "br": 128000,
                    "fid": 0,
                    "size": 6093888,
                    "vd": -49077,
                    "sr": 44100
                },
                "sq": {
                    "br": 849388,
                    "fid": 0,
                    "size": 40430903,
                    "vd": -49077,
                    "sr": 48000
                },
                "hr": null,
                "a": null,
                "cd": "1",
                "no": 1,
                "rtUrl": null,
                "ftype": 0,
                "rtUrls": [],
                "djId": 0,
                "copyright": 0,
                "s_id": 0,
                "mark": 8192,
                "originCoverType": 1,
                "originSongSimpleData": null,
                "tagPicList": null,
                "resourceState": true,
                "version": 12,
                "songJumpInfo": null,
                "entertainmentTags": null,
                "single": 0,
                "noCopyrightRcmd": null,
                "mst": 9,
                "mv": 0,
                "rtype": 0,
                "rurl": null,
                "cp": 1400821,
                "publishTime": 1526745600000,
                "tns": [
                    "Summer Romance"
                ]
            },
            {
                "name": "Wellerman",
                "id": 1813960297,
                "pst": 0,
                "t": 0,
                "ar": [
                    {
                        "id": 29453672,
                        "name": "Nathan Evans",
                        "tns": [],
                        "alias": []
                    }
                ],
                "alia": [],
                "pop": 100,
                "st": 0,
                "rt": "",
                "fee": 8,
                "v": 3,
                "crbt": null,
                "cf": "",
                "al": {
                    "id": 121970466,
                    "name": "Wellerman",
                    "picUrl": "http://p3.music.126.net/YmoD1Z42fQ7NzVq5_DlNgg==/109951165648346559.jpg",
                    "tns": [],
                    "pic_str": "109951165648346559",
                    "pic": 109951165648346560
                },
                "dt": 155376,
                "h": {
                    "br": 320000,
                    "fid": 0,
                    "size": 6216142,
                    "vd": -54904,
                    "sr": 44100
                },
                "m": {
                    "br": 192000,
                    "fid": 0,
                    "size": 3729702,
                    "vd": -52312,
                    "sr": 44100
                },
                "l": {
                    "br": 128000,
                    "fid": 0,
                    "size": 2486483,
                    "vd": -50615,
                    "sr": 44100
                },
                "sq": null,
                "hr": null,
                "a": null,
                "cd": "01",
                "no": 1,
                "rtUrl": null,
                "ftype": 0,
                "rtUrls": [],
                "djId": 0,
                "copyright": 1,
                "s_id": 0,
                "mark": 270336,
                "originCoverType": 0,
                "originSongSimpleData": null,
                "tagPicList": null,
                "resourceState": true,
                "version": 3,
                "songJumpInfo": null,
                "entertainmentTags": null,
                "single": 0,
                "noCopyrightRcmd": null,
                "mst": 9,
                "mv": 14280228,
                "rtype": 0,
                "rurl": null,
                "cp": 7003,
                "publishTime": 1611158400000
            },
            {
                "name": "花香",
                "id": 4875987,
                "pst": 0,
                "t": 0,
                "ar": [
                    {
                        "id": 5806,
                        "name": "许绍洋",
                        "tns": [],
                        "alias": []
                    }
                ],
                "alia": [
                    "电视剧《薰衣草》插曲"
                ],
                "pop": 100,
                "st": 0,
                "rt": "600902000003249803",
                "fee": 8,
                "v": 705,
                "crbt": null,
                "cf": "",
                "al": {
                    "id": 489973,
                    "name": "香草恋人馆 电视原声带",
                    "picUrl": "http://p3.music.126.net/wTqk7s7bG2Hmzkjc29mLlw==/109951164298144279.jpg",
                    "tns": [],
                    "pic_str": "109951164298144279",
                    "pic": 109951164298144270
                },
                "dt": 268226,
                "h": {
                    "br": 320000,
                    "fid": 0,
                    "size": 10732190,
                    "vd": -38280,
                    "sr": 44100
                },
                "m": {
                    "br": 192000,
                    "fid": 0,
                    "size": 6439331,
                    "vd": -38280,
                    "sr": 44100
                },
                "l": {
                    "br": 128000,
                    "fid": 0,
                    "size": 4292901,
                    "vd": -38280,
                    "sr": 44100
                },
                "sq": {
                    "br": 968713,
                    "fid": 0,
                    "size": 32479362,
                    "vd": -38280,
                    "sr": 44100
                },
                "hr": null,
                "a": null,
                "cd": "1",
                "no": 7,
                "rtUrl": null,
                "ftype": 0,
                "rtUrls": [],
                "djId": 0,
                "copyright": 2,
                "s_id": 0,
                "mark": 1125899906851328,
                "originCoverType": 1,
                "originSongSimpleData": null,
                "tagPicList": null,
                "resourceState": true,
                "version": 705,
                "songJumpInfo": null,
                "entertainmentTags": null,
                "single": 0,
                "noCopyrightRcmd": null,
                "mst": 9,
                "mv": 10930527,
                "rtype": 0,
                "rurl": null,
                "cp": 684010,
                "publishTime": 1093363200000
            },
            {
                "name": "Y U Gotta B Like That",
                "id": 1421148133,
                "pst": 0,
                "t": 0,
                "ar": [
                    {
                        "id": 33590146,
                        "name": "Audrey MiKa",
                        "tns": [],
                        "alias": []
                    }
                ],
                "alia": [],
                "pop": 100,
                "st": 0,
                "rt": "",
                "fee": 8,
                "v": 4,
                "crbt": null,
                "cf": "",
                "al": {
                    "id": 85494669,
                    "name": "5 A.M.",
                    "picUrl": "http://p3.music.126.net/hxRZdyu3HOM4ltALpXAcnQ==/109951164679866045.jpg",
                    "tns": [],
                    "pic_str": "109951164679866045",
                    "pic": 109951164679866050
                },
                "dt": 154514,
                "h": null,
                "m": {
                    "br": 192000,
                    "fid": 0,
                    "size": 3709013,
                    "vd": -50816,
                    "sr": 44100
                },
                "l": {
                    "br": 128000,
                    "fid": 0,
                    "size": 2472690,
                    "vd": -49125,
                    "sr": 44100
                },
                "sq": null,
                "hr": null,
                "a": null,
                "cd": "01",
                "no": 6,
                "rtUrl": null,
                "ftype": 0,
                "rtUrls": [],
                "djId": 0,
                "copyright": 1,
                "s_id": 0,
                "mark": 270336,
                "originCoverType": 0,
                "originSongSimpleData": null,
                "tagPicList": null,
                "resourceState": true,
                "version": 4,
                "songJumpInfo": null,
                "entertainmentTags": null,
                "single": 0,
                "noCopyrightRcmd": null,
                "mst": 9,
                "mv": 0,
                "rtype": 0,
                "rurl": null,
                "cp": 7001,
                "publishTime": 1581004800000
            },
            {
                "name": "满爱",
                "id": 1935893601,
                "pst": 0,
                "t": 0,
                "ar": [
                    {
                        "id": 12506799,
                        "name": "王珏楠",
                        "tns": [],
                        "alias": []
                    }
                ],
                "alia": [],
                "pop": 100,
                "st": 0,
                "rt": "",
                "fee": 8,
                "v": 9,
                "crbt": null,
                "cf": "",
                "al": {
                    "id": 143127639,
                    "name": "绝对不难",
                    "picUrl": "http://p3.music.126.net/xMrgOYet5cGBHM-Aycycow==/109951167256605004.jpg",
                    "tns": [],
                    "pic_str": "109951167256605004",
                    "pic": 109951167256605010
                },
                "dt": 253800,
                "h": {
                    "br": 320000,
                    "fid": 0,
                    "size": 10153965,
                    "vd": -53328,
                    "sr": 48000
                },
                "m": {
                    "br": 192000,
                    "fid": 0,
                    "size": 6092397,
                    "vd": -50712,
                    "sr": 48000
                },
                "l": {
                    "br": 128000,
                    "fid": 0,
                    "size": 4061613,
                    "vd": -49016,
                    "sr": 48000
                },
                "sq": {
                    "br": 909378,
                    "fid": 0,
                    "size": 28850036,
                    "vd": -53082,
                    "sr": 48000
                },
                "hr": {
                    "br": 1677284,
                    "fid": 0,
                    "size": 53211866,
                    "vd": -53078,
                    "sr": 48000
                },
                "a": null,
                "cd": "01",
                "no": 1,
                "rtUrl": null,
                "ftype": 0,
                "rtUrls": [],
                "djId": 0,
                "copyright": 0,
                "s_id": 0,
                "mark": 536879104,
                "originCoverType": 0,
                "originSongSimpleData": null,
                "tagPicList": null,
                "resourceState": true,
                "version": 9,
                "songJumpInfo": null,
                "entertainmentTags": null,
                "single": 0,
                "noCopyrightRcmd": null,
                "mst": 9,
                "mv": 0,
                "rtype": 0,
                "rurl": null,
                "cp": 2707463,
                "publishTime": 1649347200000
            },
            {
                "name": "SWEET SONG",
                "id": 1942756066,
                "pst": 0,
                "t": 0,
                "ar": [
                    {
                        "id": 12139151,
                        "name": "王瀚哲（中国BOY）",
                        "tns": [],
                        "alias": []
                    }
                ],
                "alia": [],
                "pop": 100,
                "st": 0,
                "rt": "",
                "fee": 8,
                "v": 3,
                "crbt": null,
                "cf": "",
                "al": {
                    "id": 144207043,
                    "name": "SIMPLE",
                    "picUrl": "http://p3.music.126.net/GwsjgW_FYVleI8COD_oGJQ==/109951167368113811.jpg",
                    "tns": [],
                    "pic_str": "109951167368113811",
                    "pic": 109951167368113810
                },
                "dt": 203103,
                "h": {
                    "br": 320002,
                    "fid": 0,
                    "size": 8126445,
                    "vd": -51325,
                    "sr": 48000
                },
                "m": {
                    "br": 192002,
                    "fid": 0,
                    "size": 4875885,
                    "vd": -48728,
                    "sr": 48000
                },
                "l": {
                    "br": 128002,
                    "fid": 0,
                    "size": 3250605,
                    "vd": -47053,
                    "sr": 48000
                },
                "sq": {
                    "br": 885606,
                    "fid": 0,
                    "size": 22483710,
                    "vd": -51403,
                    "sr": 48000
                },
                "hr": {
                    "br": 1654010,
                    "fid": 0,
                    "size": 41991917,
                    "vd": -51322,
                    "sr": 48000
                },
                "a": null,
                "cd": "01",
                "no": 3,
                "rtUrl": null,
                "ftype": 0,
                "rtUrls": [],
                "djId": 0,
                "copyright": 0,
                "s_id": 0,
                "mark": 536870912,
                "originCoverType": 0,
                "originSongSimpleData": null,
                "tagPicList": null,
                "resourceState": true,
                "version": 3,
                "songJumpInfo": null,
                "entertainmentTags": null,
                "single": 0,
                "noCopyrightRcmd": null,
                "mst": 9,
                "mv": 0,
                "rtype": 0,
                "rurl": null,
                "cp": 0,
                "publishTime": 1651680000000
            }
        ],
        coverImgUrl: "https://p1.music.126.net/pcYHpMkdC69VVvWiynNklA==/109951166952713766.jpg"
    }

    const newRanking = {
        tracks: [
            {
                "name": "再次爱上你",
                "id": 1940334604,
                "pst": 0,
                "t": 0,
                "ar": [
                    {
                        "id": 32571955,
                        "name": "WiFi歪歪",
                        "tns": [],
                        "alias": []
                    }
                ],
                "alia": [
                    "Love baby 再次想起你"
                ],
                "pop": 100,
                "st": 0,
                "rt": "",
                "fee": 8,
                "v": 7,
                "crbt": null,
                "cf": "",
                "al": {
                    "id": 143812711,
                    "name": "再次爱上你",
                    "picUrl": "http://p3.music.126.net/PWnGbGh3-xc7ALQlOaB9lQ==/109951167325585406.jpg",
                    "tns": [],
                    "pic_str": "109951167325585406",
                    "pic": 109951167325585400
                },
                "dt": 214000,
                "h": {
                    "br": 320002,
                    "fid": 0,
                    "size": 8562335,
                    "vd": -50503,
                    "sr": 48000
                },
                "m": {
                    "br": 192002,
                    "fid": 0,
                    "size": 5137439,
                    "vd": -47937,
                    "sr": 48000
                },
                "l": {
                    "br": 128002,
                    "fid": 0,
                    "size": 3424991,
                    "vd": -46265,
                    "sr": 48000
                },
                "sq": {
                    "br": 947891,
                    "fid": 0,
                    "size": 25356093,
                    "vd": -50409,
                    "sr": 48000
                },
                "hr": {
                    "br": 1715474,
                    "fid": 0,
                    "size": 45888940,
                    "vd": -50486,
                    "sr": 48000
                },
                "a": null,
                "cd": "01",
                "no": 1,
                "rtUrl": null,
                "ftype": 0,
                "rtUrls": [],
                "djId": 0,
                "copyright": 0,
                "s_id": 0,
                "mark": 536879104,
                "originCoverType": 2,
                "originSongSimpleData": {
                    "songId": 343557,
                    "name": "再次爱上你",
                    "artists": [
                        {
                            "id": 11015,
                            "name": "阿里郎"
                        }
                    ],
                    "albumMeta": {
                        "id": 33877,
                        "name": "再次爱上你"
                    }
                },
                "tagPicList": null,
                "resourceState": true,
                "version": 7,
                "songJumpInfo": null,
                "entertainmentTags": null,
                "single": 0,
                "noCopyrightRcmd": null,
                "mst": 9,
                "cp": 0,
                "mv": 0,
                "rtype": 0,
                "rurl": null,
                "publishTime": 1650643200000,
                "tns": [
                    "温柔版"
                ]
            },
            {
                "name": "耍把戏",
                "id": 1942278883,
                "pst": 0,
                "t": 0,
                "ar": [
                    {
                        "id": 33164701,
                        "name": "阿禹ayy",
                        "tns": [],
                        "alias": []
                    }
                ],
                "alia": [],
                "pop": 100,
                "st": 0,
                "rt": "",
                "fee": 8,
                "v": 4,
                "crbt": null,
                "cf": "",
                "al": {
                    "id": 144133352,
                    "name": "耍把戏",
                    "picUrl": "http://p4.music.126.net/KSqwJ6kRimBcTNsTljVWbg==/109951167349938863.jpg",
                    "tns": [],
                    "pic_str": "109951167349938863",
                    "pic": 109951167349938860
                },
                "dt": 207255,
                "h": {
                    "br": 320000,
                    "fid": 0,
                    "size": 8292354,
                    "vd": -33994,
                    "sr": 44100
                },
                "m": {
                    "br": 192000,
                    "fid": 0,
                    "size": 4975430,
                    "vd": -31421,
                    "sr": 44100
                },
                "l": {
                    "br": 128000,
                    "fid": 0,
                    "size": 3316968,
                    "vd": -29963,
                    "sr": 44100
                },
                "sq": {
                    "br": 876551,
                    "fid": 0,
                    "size": 22708739,
                    "vd": -33744,
                    "sr": 44100
                },
                "hr": null,
                "a": null,
                "cd": "01",
                "no": 1,
                "rtUrl": null,
                "ftype": 0,
                "rtUrls": [],
                "djId": 0,
                "copyright": 0,
                "s_id": 0,
                "mark": 0,
                "originCoverType": 0,
                "originSongSimpleData": null,
                "tagPicList": null,
                "resourceState": true,
                "version": 4,
                "songJumpInfo": null,
                "entertainmentTags": null,
                "single": 0,
                "noCopyrightRcmd": null,
                "mst": 9,
                "cp": 0,
                "mv": 0,
                "rtype": 0,
                "rurl": null,
                "publishTime": 0
            },
            {
                "name": "命运",
                "id": 1942041775,
                "pst": 0,
                "t": 0,
                "ar": [
                    {
                        "id": 35309151,
                        "name": "粉太狼",
                        "tns": [],
                        "alias": []
                    }
                ],
                "alia": [],
                "pop": 100,
                "st": 0,
                "rt": "",
                "fee": 8,
                "v": 13,
                "crbt": null,
                "cf": "",
                "al": {
                    "id": 144086940,
                    "name": "命运",
                    "picUrl": "http://p4.music.126.net/mglql8_Dlg8JQw00nI1S4g==/109951167350673553.jpg",
                    "tns": [],
                    "pic_str": "109951167350673553",
                    "pic": 109951167350673550
                },
                "dt": 212787,
                "h": {
                    "br": 320000,
                    "fid": 0,
                    "size": 8513872,
                    "vd": -50428,
                    "sr": 44100
                },
                "m": {
                    "br": 192000,
                    "fid": 0,
                    "size": 5108341,
                    "vd": -47826,
                    "sr": 44100
                },
                "l": {
                    "br": 128000,
                    "fid": 0,
                    "size": 3405575,
                    "vd": -46161,
                    "sr": 44100
                },
                "sq": {
                    "br": 889184,
                    "fid": 0,
                    "size": 23650945,
                    "vd": -50374,
                    "sr": 44100
                },
                "hr": null,
                "a": null,
                "cd": "01",
                "no": 1,
                "rtUrl": null,
                "ftype": 0,
                "rtUrls": [],
                "djId": 0,
                "copyright": 0,
                "s_id": 0,
                "mark": 0,
                "originCoverType": 2,
                "originSongSimpleData": {
                    "songId": 27591236,
                    "name": "命运",
                    "artists": [
                        {
                            "id": 690001,
                            "name": "家家"
                        }
                    ],
                    "albumMeta": {
                        "id": 2617007,
                        "name": "兰陵王 电视原声带"
                    }
                },
                "tagPicList": null,
                "resourceState": true,
                "version": 13,
                "songJumpInfo": null,
                "entertainmentTags": null,
                "single": 0,
                "noCopyrightRcmd": null,
                "mst": 9,
                "cp": 0,
                "mv": 0,
                "rtype": 0,
                "rurl": null,
                "publishTime": 0,
                "tns": [
                    "抖音完整版"
                ]
            },
            {
                "name": "独到",
                "id": 1940943649,
                "pst": 0,
                "t": 0,
                "ar": [
                    {
                        "id": 33850806,
                        "name": "高睿",
                        "tns": [],
                        "alias": []
                    }
                ],
                "alia": [
                    "《Normal No More》中文版"
                ],
                "pop": 100,
                "st": 0,
                "rt": "",
                "fee": 8,
                "v": 3,
                "crbt": null,
                "cf": "",
                "al": {
                    "id": 143912654,
                    "name": "独到",
                    "picUrl": "http://p3.music.126.net/3as1usXkgFTCArx4Yfpy8w==/109951167333855568.jpg",
                    "tns": [],
                    "pic_str": "109951167333855568",
                    "pic": 109951167333855570
                },
                "dt": 195789,
                "h": {
                    "br": 320000,
                    "fid": 0,
                    "size": 7834689,
                    "vd": -53864,
                    "sr": 44100
                },
                "m": {
                    "br": 192000,
                    "fid": 0,
                    "size": 4700831,
                    "vd": -51258,
                    "sr": 44100
                },
                "l": {
                    "br": 128000,
                    "fid": 0,
                    "size": 3133902,
                    "vd": -49555,
                    "sr": 44100
                },
                "sq": {
                    "br": 917698,
                    "fid": 0,
                    "size": 22459467,
                    "vd": -53921,
                    "sr": 44100
                },
                "hr": null,
                "a": null,
                "cd": "01",
                "no": 1,
                "rtUrl": null,
                "ftype": 0,
                "rtUrls": [],
                "djId": 0,
                "copyright": 0,
                "s_id": 0,
                "mark": 8192,
                "originCoverType": 1,
                "originSongSimpleData": null,
                "tagPicList": null,
                "resourceState": true,
                "version": 3,
                "songJumpInfo": null,
                "entertainmentTags": null,
                "single": 0,
                "noCopyrightRcmd": null,
                "mst": 9,
                "cp": 0,
                "mv": 0,
                "rtype": 0,
                "rurl": null,
                "publishTime": 1651075200000
            },
            {
                "name": "Bet On Me (Organic Version)",
                "id": 1938756186,
                "pst": 0,
                "t": 0,
                "ar": [
                    {
                        "id": 105493,
                        "name": "Walk off the Earth",
                        "tns": [],
                        "alias": []
                    },
                    {
                        "id": 33516005,
                        "name": "D Smoke",
                        "tns": [],
                        "alias": []
                    }
                ],
                "alia": [],
                "pop": 100,
                "st": 0,
                "rt": "",
                "fee": 8,
                "v": 6,
                "crbt": null,
                "cf": "",
                "al": {
                    "id": 143578679,
                    "name": "Bet On Me (feat. D Smoke) (Organic Version)",
                    "picUrl": "http://p4.music.126.net/KxmRsYOXXrJfuUv_0wyPaQ==/109951167301321745.jpg",
                    "tns": [],
                    "pic_str": "109951167301321745",
                    "pic": 109951167301321740
                },
                "dt": 171632,
                "h": {
                    "br": 320000,
                    "fid": 0,
                    "size": 6867885,
                    "vd": -18542,
                    "sr": 48000
                },
                "m": null,
                "l": {
                    "br": 128000,
                    "fid": 0,
                    "size": 2747181,
                    "vd": -14415,
                    "sr": 48000
                },
                "sq": {
                    "br": 918278,
                    "fid": 0,
                    "size": 19700814,
                    "vd": -18679,
                    "sr": 48000
                },
                "hr": {
                    "br": 1686183,
                    "fid": 0,
                    "size": 36175515,
                    "vd": -18530,
                    "sr": 48000
                },
                "a": null,
                "cd": "01",
                "no": 1,
                "rtUrl": null,
                "ftype": 0,
                "rtUrls": [],
                "djId": 0,
                "copyright": 1,
                "s_id": 0,
                "mark": 537141248,
                "originCoverType": 0,
                "originSongSimpleData": null,
                "tagPicList": null,
                "resourceState": true,
                "version": 6,
                "songJumpInfo": null,
                "entertainmentTags": null,
                "single": 0,
                "noCopyrightRcmd": null,
                "mst": 9,
                "cp": 1416336,
                "mv": 0,
                "rtype": 0,
                "rurl": null,
                "publishTime": 1650556800000
            },
            {
                "name": "想到你",
                "id": 1939898238,
                "pst": 0,
                "t": 0,
                "ar": [
                    {
                        "id": 124542,
                        "name": "朴宰范",
                        "tns": [],
                        "alias": []
                    },
                    {
                        "id": 12202125,
                        "name": "pH-1",
                        "tns": [],
                        "alias": []
                    },
                    {
                        "id": 12277473,
                        "name": "李大奔_",
                        "tns": [],
                        "alias": []
                    }
                ],
                "alia": [],
                "pop": 100,
                "st": 0,
                "rt": "",
                "fee": 8,
                "v": 4,
                "crbt": null,
                "cf": "",
                "al": {
                    "id": 143737099,
                    "name": "想到你",
                    "picUrl": "http://p4.music.126.net/EbOikTR7sC5UBFKVLqW5Zg==/109951167319359915.jpg",
                    "tns": [],
                    "pic_str": "109951167319359915",
                    "pic": 109951167319359920
                },
                "dt": 224574,
                "h": {
                    "br": 320000,
                    "fid": 0,
                    "size": 8983031,
                    "vd": -53434,
                    "sr": 44100
                },
                "m": {
                    "br": 192000,
                    "fid": 0,
                    "size": 5389836,
                    "vd": -50873,
                    "sr": 44100
                },
                "l": {
                    "br": 128000,
                    "fid": 0,
                    "size": 3593239,
                    "vd": -49287,
                    "sr": 44100
                },
                "sq": null,
                "hr": null,
                "a": null,
                "cd": "01",
                "no": 1,
                "rtUrl": null,
                "ftype": 0,
                "rtUrls": [],
                "djId": 0,
                "copyright": 1,
                "s_id": 0,
                "mark": 8192,
                "originCoverType": 0,
                "originSongSimpleData": null,
                "tagPicList": null,
                "resourceState": true,
                "version": 4,
                "songJumpInfo": null,
                "entertainmentTags": null,
                "single": 0,
                "noCopyrightRcmd": null,
                "mst": 9,
                "cp": 7001,
                "mv": 14521814,
                "rtype": 0,
                "rurl": null,
                "publishTime": 1651161600000
            },
            {
                "name": "靠近 (Live)",
                "id": 1938019501,
                "pst": 0,
                "t": 0,
                "ar": [
                    {
                        "id": 10473,
                        "name": "袁娅维TIA RAY",
                        "tns": [],
                        "alias": []
                    }
                ],
                "alia": [],
                "pop": 100,
                "st": 0,
                "rt": "",
                "fee": 8,
                "v": 9,
                "crbt": null,
                "cf": "",
                "al": {
                    "id": 143478892,
                    "name": "为歌而赞第二季 第2期",
                    "picUrl": "http://p4.music.126.net/xOMA-0nOKNmweJ-vcfaBMQ==/109951167290093049.jpg",
                    "tns": [],
                    "pic_str": "109951167290093049",
                    "pic": 109951167290093060
                },
                "dt": 258342,
                "h": {
                    "br": 320000,
                    "fid": 0,
                    "size": 10336365,
                    "vd": -31704,
                    "sr": 48000
                },
                "m": {
                    "br": 192000,
                    "fid": 0,
                    "size": 6201837,
                    "vd": -29088,
                    "sr": 48000
                },
                "l": {
                    "br": 128000,
                    "fid": 0,
                    "size": 4134573,
                    "vd": -27344,
                    "sr": 48000
                },
                "sq": {
                    "br": 945781,
                    "fid": 0,
                    "size": 30541978,
                    "vd": -31770,
                    "sr": 48000
                },
                "hr": {
                    "br": 1714880,
                    "fid": 0,
                    "size": 55378356,
                    "vd": -31684,
                    "sr": 48000
                },
                "a": null,
                "cd": "01",
                "no": 1,
                "rtUrl": null,
                "ftype": 0,
                "rtUrls": [],
                "djId": 0,
                "copyright": 0,
                "s_id": 0,
                "mark": 536870912,
                "originCoverType": 0,
                "originSongSimpleData": null,
                "tagPicList": null,
                "resourceState": true,
                "version": 9,
                "songJumpInfo": null,
                "entertainmentTags": null,
                "single": 0,
                "noCopyrightRcmd": null,
                "mst": 9,
                "cp": 2709778,
                "mv": 0,
                "rtype": 0,
                "rurl": null,
                "publishTime": 0
            },
            {
                "name": "Pull Up",
                "id": 1938019211,
                "pst": 0,
                "t": 0,
                "ar": [
                    {
                        "id": 4479,
                        "name": "MC HotDog 热狗",
                        "tns": [],
                        "alias": []
                    },
                    {
                        "id": 1132392,
                        "name": "马思唯",
                        "tns": [],
                        "alias": []
                    },
                    {
                        "id": 27868624,
                        "name": "KnowKnow",
                        "tns": [],
                        "alias": []
                    }
                ],
                "alia": [],
                "pop": 100,
                "st": 0,
                "rt": "",
                "fee": 8,
                "v": 7,
                "crbt": null,
                "cf": "",
                "al": {
                    "id": 143478634,
                    "name": "Pull Up",
                    "picUrl": "http://p3.music.126.net/u9woLAaXnhAWzDLAsO4Ovw==/109951167289900298.jpg",
                    "tns": [],
                    "pic_str": "109951167289900298",
                    "pic": 109951167289900300
                },
                "dt": 222500,
                "h": {
                    "br": 320000,
                    "fid": 0,
                    "size": 8902175,
                    "vd": -47888,
                    "sr": 48000
                },
                "m": null,
                "l": {
                    "br": 128000,
                    "fid": 0,
                    "size": 3560927,
                    "vd": -43643,
                    "sr": 48000
                },
                "sq": {
                    "br": 996360,
                    "fid": 0,
                    "size": 27711268,
                    "vd": -47923,
                    "sr": 48000
                },
                "hr": {
                    "br": 1766978,
                    "fid": 0,
                    "size": 49144080,
                    "vd": -47879,
                    "sr": 48000
                },
                "a": null,
                "cd": "01",
                "no": 1,
                "rtUrl": null,
                "ftype": 0,
                "rtUrls": [],
                "djId": 0,
                "copyright": 0,
                "s_id": 0,
                "mark": 536870912,
                "originCoverType": 0,
                "originSongSimpleData": null,
                "tagPicList": null,
                "resourceState": true,
                "version": 7,
                "songJumpInfo": null,
                "entertainmentTags": null,
                "single": 0,
                "noCopyrightRcmd": null,
                "mst": 9,
                "cp": 0,
                "mv": 0,
                "rtype": 0,
                "rurl": null,
                "publishTime": 0
            },
            {
                "name": "遥远的她",
                "id": 1940770243,
                "pst": 0,
                "t": 0,
                "ar": [
                    {
                        "id": 12138269,
                        "name": "毛不易",
                        "tns": [],
                        "alias": []
                    }
                ],
                "alia": [],
                "pop": 100,
                "st": 0,
                "rt": "",
                "fee": 0,
                "v": 3,
                "crbt": null,
                "cf": "",
                "al": {
                    "id": 143883969,
                    "name": "声生不息 第1期",
                    "picUrl": "http://p4.music.126.net/rk7d6mL3Y5NKQ-2v-bQPZw==/109951167333213984.jpg",
                    "tns": [],
                    "pic_str": "109951167333213984",
                    "pic": 109951167333213980
                },
                "dt": 227573,
                "h": {
                    "br": 320000,
                    "fid": 0,
                    "size": 9105645,
                    "vd": -25280,
                    "sr": 48000
                },
                "m": {
                    "br": 192000,
                    "fid": 0,
                    "size": 5463405,
                    "vd": -22708,
                    "sr": 48000
                },
                "l": {
                    "br": 128000,
                    "fid": 0,
                    "size": 3642285,
                    "vd": -21031,
                    "sr": 48000
                },
                "sq": {
                    "br": 863572,
                    "fid": 0,
                    "size": 24565745,
                    "vd": -25424,
                    "sr": 48000
                },
                "hr": {
                    "br": 1633315,
                    "fid": 0,
                    "size": 46462366,
                    "vd": -25278,
                    "sr": 48000
                },
                "a": null,
                "cd": "01",
                "no": 3,
                "rtUrl": null,
                "ftype": 0,
                "rtUrls": [],
                "djId": 0,
                "copyright": 0,
                "s_id": 0,
                "mark": 536870912,
                "originCoverType": 0,
                "originSongSimpleData": null,
                "tagPicList": null,
                "resourceState": true,
                "version": 3,
                "songJumpInfo": null,
                "entertainmentTags": null,
                "single": 0,
                "noCopyrightRcmd": null,
                "mst": 9,
                "cp": 0,
                "mv": 0,
                "rtype": 0,
                "rurl": null,
                "publishTime": 1650729600000
            },
            {
                "name": "流浪",
                "id": 1936399142,
                "pst": 0,
                "t": 0,
                "ar": [
                    {
                        "id": 12641765,
                        "name": "江辰",
                        "tns": [],
                        "alias": []
                    }
                ],
                "alia": [],
                "pop": 100,
                "st": 0,
                "rt": "",
                "fee": 8,
                "v": 14,
                "crbt": null,
                "cf": "",
                "al": {
                    "id": 143212063,
                    "name": "流浪",
                    "picUrl": "http://p4.music.126.net/oV9Do1qmWX6T-xiZBHVALQ==/109951167264308731.jpg",
                    "tns": [
                        "Stray"
                    ],
                    "pic_str": "109951167264308731",
                    "pic": 109951167264308740
                },
                "dt": 195771,
                "h": {
                    "br": 320000,
                    "fid": 0,
                    "size": 7833644,
                    "vd": -53615,
                    "sr": 44100
                },
                "m": {
                    "br": 192000,
                    "fid": 0,
                    "size": 4700204,
                    "vd": -51011,
                    "sr": 44100
                },
                "l": {
                    "br": 128000,
                    "fid": 0,
                    "size": 3133484,
                    "vd": -49358,
                    "sr": 44100
                },
                "sq": {
                    "br": 895217,
                    "fid": 0,
                    "size": 21907264,
                    "vd": -53702,
                    "sr": 44100
                },
                "hr": null,
                "a": null,
                "cd": "01",
                "no": 0,
                "rtUrl": null,
                "ftype": 0,
                "rtUrls": [],
                "djId": 0,
                "copyright": 0,
                "s_id": 0,
                "mark": 0,
                "originCoverType": 1,
                "originSongSimpleData": null,
                "tagPicList": null,
                "resourceState": true,
                "version": 14,
                "songJumpInfo": null,
                "entertainmentTags": null,
                "single": 0,
                "noCopyrightRcmd": null,
                "mst": 9,
                "cp": 0,
                "mv": 0,
                "rtype": 0,
                "rurl": null,
                "publishTime": 1649433600000,
                "tns": [
                    "Stray"
                ]
            },
        ],
        coverImgUrl: "https://p1.music.126.net/wVmyNS6b_0Nn-y6AX8UbpQ==/109951166952686384.jpg"
    }

    const originRanking = {
        tracks: [
            {
                "name": "双缝干涉",
                "id": 1941579259,
                "pst": 0,
                "t": 0,
                "ar": [
                    {
                        "id": 30796325,
                        "name": "royster lee",
                        "tns": [],
                        "alias": []
                    }
                ],
                "alia": [],
                "pop": 100,
                "st": 0,
                "rt": "",
                "fee": 8,
                "v": 3,
                "crbt": null,
                "cf": "",
                "al": {
                    "id": 144003176,
                    "name": "双缝干涉",
                    "picUrl": "http://p4.music.126.net/tLreo6fkzJehoe1LbvAZow==/109951167341692652.jpg",
                    "tns": [
                        "网易音乐人「35mm音乐映像」特别企划"
                    ],
                    "pic_str": "109951167341692652",
                    "pic": 109951167341692660
                },
                "dt": 165120,
                "h": {
                    "br": 320002,
                    "fid": 0,
                    "size": 6606933,
                    "vd": -12153,
                    "sr": 44100
                },
                "m": {
                    "br": 192002,
                    "fid": 0,
                    "size": 3964177,
                    "vd": -9546,
                    "sr": 44100
                },
                "l": {
                    "br": 128002,
                    "fid": 0,
                    "size": 2642799,
                    "vd": -7901,
                    "sr": 44100
                },
                "sq": {
                    "br": 1446209,
                    "fid": 0,
                    "size": 29849769,
                    "vd": -12146,
                    "sr": 44100
                },
                "hr": null,
                "a": null,
                "cd": "01",
                "no": 0,
                "rtUrl": null,
                "ftype": 0,
                "rtUrls": [],
                "djId": 0,
                "copyright": 0,
                "s_id": 0,
                "mark": 0,
                "originCoverType": 0,
                "originSongSimpleData": null,
                "tagPicList": null,
                "resourceState": true,
                "version": 3,
                "songJumpInfo": null,
                "entertainmentTags": null,
                "single": 0,
                "noCopyrightRcmd": null,
                "mst": 9,
                "cp": 0,
                "mv": 0,
                "rtype": 0,
                "rurl": null,
                "publishTime": 1651334400000,
                "tns": [
                    "网易音乐人「35mm音乐映像」特别企划"
                ]
            },
            {
                "name": "i wish i didn't love you but i do",
                "id": 1942630835,
                "pst": 0,
                "t": 0,
                "ar": [
                    {
                        "id": 12083497,
                        "name": "PO8",
                        "tns": [],
                        "alias": []
                    }
                ],
                "alia": [],
                "pop": 100,
                "st": 0,
                "rt": "",
                "fee": 8,
                "v": 4,
                "crbt": null,
                "cf": "",
                "al": {
                    "id": 143799398,
                    "name": "十万小时·EP02：90后",
                    "picUrl": "http://p3.music.126.net/ayAa9liNxE7lIZkUu8lWnw==/109951167354031052.jpg",
                    "tns": [],
                    "pic_str": "109951167354031052",
                    "pic": 109951167354031060
                },
                "dt": 156800,
                "h": {
                    "br": 320000,
                    "fid": 0,
                    "size": 6274605,
                    "vd": -51838,
                    "sr": 48000
                },
                "m": {
                    "br": 192000,
                    "fid": 0,
                    "size": 3764781,
                    "vd": -49299,
                    "sr": 48000
                },
                "l": {
                    "br": 128000,
                    "fid": 0,
                    "size": 2509869,
                    "vd": -47634,
                    "sr": 48000
                },
                "sq": {
                    "br": 962186,
                    "fid": 0,
                    "size": 18858862,
                    "vd": -51866,
                    "sr": 48000
                },
                "hr": {
                    "br": 1732478,
                    "fid": 0,
                    "size": 33956572,
                    "vd": -51823,
                    "sr": 48000
                },
                "a": null,
                "cd": "01",
                "no": 1,
                "rtUrl": null,
                "ftype": 0,
                "rtUrls": [],
                "djId": 0,
                "copyright": 0,
                "s_id": 0,
                "mark": 536870912,
                "originCoverType": 0,
                "originSongSimpleData": null,
                "tagPicList": null,
                "resourceState": true,
                "version": 4,
                "songJumpInfo": null,
                "entertainmentTags": null,
                "single": 0,
                "noCopyrightRcmd": null,
                "mst": 9,
                "cp": 0,
                "mv": 0,
                "rtype": 0,
                "rurl": null,
                "publishTime": 0
            },
            {
                "name": "真空",
                "id": 1940281894,
                "pst": 0,
                "t": 0,
                "ar": [
                    {
                        "id": 12291562,
                        "name": "Quinn葵因",
                        "tns": [],
                        "alias": []
                    }
                ],
                "alia": [],
                "pop": 100,
                "st": 0,
                "rt": "",
                "fee": 8,
                "v": 3,
                "crbt": null,
                "cf": "",
                "al": {
                    "id": 143799398,
                    "name": "十万小时·EP02：90后",
                    "picUrl": "http://p4.music.126.net/ayAa9liNxE7lIZkUu8lWnw==/109951167354031052.jpg",
                    "tns": [],
                    "pic_str": "109951167354031052",
                    "pic": 109951167354031060
                },
                "dt": 304000,
                "h": {
                    "br": 320001,
                    "fid": 0,
                    "size": 12162656,
                    "vd": -18573,
                    "sr": 44100
                },
                "m": {
                    "br": 192001,
                    "fid": 0,
                    "size": 7297611,
                    "vd": -15948,
                    "sr": 44100
                },
                "l": {
                    "br": 128001,
                    "fid": 0,
                    "size": 4865088,
                    "vd": -14193,
                    "sr": 44100
                },
                "sq": {
                    "br": 1400855,
                    "fid": 0,
                    "size": 53232505,
                    "vd": -18556,
                    "sr": 44100
                },
                "hr": null,
                "a": null,
                "cd": "01",
                "no": 2,
                "rtUrl": null,
                "ftype": 0,
                "rtUrls": [],
                "djId": 0,
                "copyright": 0,
                "s_id": 0,
                "mark": 0,
                "originCoverType": 0,
                "originSongSimpleData": null,
                "tagPicList": null,
                "resourceState": true,
                "version": 3,
                "songJumpInfo": null,
                "entertainmentTags": null,
                "single": 0,
                "noCopyrightRcmd": null,
                "mst": 9,
                "cp": 0,
                "mv": 0,
                "rtype": 0,
                "rurl": null,
                "publishTime": 0
            },
            {
                "name": "发现美的耳朵 Feat.马思唯，刘越",
                "id": 1942691258,
                "pst": 0,
                "t": 0,
                "ar": [
                    {
                        "id": 12118563,
                        "name": "也是福",
                        "tns": [],
                        "alias": []
                    },
                    {
                        "id": 1132392,
                        "name": "马思唯",
                        "tns": [],
                        "alias": []
                    },
                    {
                        "id": 35495565,
                        "name": "刘越",
                        "tns": [],
                        "alias": []
                    }
                ],
                "alia": [],
                "pop": 100,
                "st": 0,
                "rt": "",
                "fee": 8,
                "v": 7,
                "crbt": null,
                "cf": "",
                "al": {
                    "id": 144496208,
                    "name": "也是蓝",
                    "picUrl": "http://p3.music.126.net/My3JmmKFvqqhcVRKH7El1w==/109951167379866407.jpg",
                    "tns": [],
                    "pic_str": "109951167379866407",
                    "pic": 109951167379866400
                },
                "dt": 151250,
                "h": {
                    "br": 320000,
                    "fid": 0,
                    "size": 6052929,
                    "vd": -32412,
                    "sr": 48000
                },
                "m": {
                    "br": 192000,
                    "fid": 0,
                    "size": 3631809,
                    "vd": -29790,
                    "sr": 48000
                },
                "l": {
                    "br": 128000,
                    "fid": 0,
                    "size": 2421249,
                    "vd": -28065,
                    "sr": 48000
                },
                "sq": {
                    "br": 889671,
                    "fid": 0,
                    "size": 16820349,
                    "vd": -32222,
                    "sr": 48000
                },
                "hr": {
                    "br": 1657924,
                    "fid": 0,
                    "size": 31345138,
                    "vd": -32410,
                    "sr": 48000
                },
                "a": null,
                "cd": "01",
                "no": 7,
                "rtUrl": null,
                "ftype": 0,
                "rtUrls": [],
                "djId": 0,
                "copyright": 0,
                "s_id": 0,
                "mark": 536870912,
                "originCoverType": 0,
                "originSongSimpleData": null,
                "tagPicList": null,
                "resourceState": true,
                "version": 7,
                "songJumpInfo": null,
                "entertainmentTags": null,
                "single": 0,
                "noCopyrightRcmd": null,
                "mst": 9,
                "cp": 0,
                "mv": 14526275,
                "rtype": 0,
                "rurl": null,
                "publishTime": 0
            },
            {
                "name": "灰烬",
                "id": 1941258524,
                "pst": 0,
                "t": 0,
                "ar": [
                    {
                        "id": 12641765,
                        "name": "江辰",
                        "tns": [],
                        "alias": []
                    }
                ],
                "alia": [],
                "pop": 100,
                "st": 0,
                "rt": "",
                "fee": 8,
                "v": 5,
                "crbt": null,
                "cf": "",
                "al": {
                    "id": 143943615,
                    "name": "灰烬",
                    "picUrl": "http://p4.music.126.net/ZGvQOuf8rxmID8LkvRgHrQ==/109951167342501605.jpg",
                    "tns": [],
                    "pic_str": "109951167342501605",
                    "pic": 109951167342501600
                },
                "dt": 186880,
                "h": {
                    "br": 320000,
                    "fid": 0,
                    "size": 7477485,
                    "vd": -53361,
                    "sr": 48000
                },
                "m": {
                    "br": 192000,
                    "fid": 0,
                    "size": 4486509,
                    "vd": -50745,
                    "sr": 48000
                },
                "l": {
                    "br": 128000,
                    "fid": 0,
                    "size": 2991021,
                    "vd": -49031,
                    "sr": 48000
                },
                "sq": {
                    "br": 856849,
                    "fid": 0,
                    "size": 20015996,
                    "vd": -53399,
                    "sr": 48000
                },
                "hr": {
                    "br": 1626216,
                    "fid": 0,
                    "size": 37988408,
                    "vd": -53361,
                    "sr": 48000
                },
                "a": null,
                "cd": "01",
                "no": 1,
                "rtUrl": null,
                "ftype": 0,
                "rtUrls": [],
                "djId": 0,
                "copyright": 0,
                "s_id": 0,
                "mark": 536870912,
                "originCoverType": 0,
                "originSongSimpleData": null,
                "tagPicList": null,
                "resourceState": true,
                "version": 5,
                "songJumpInfo": null,
                "entertainmentTags": null,
                "single": 0,
                "noCopyrightRcmd": null,
                "mst": 9,
                "cp": 0,
                "mv": 0,
                "rtype": 0,
                "rurl": null,
                "publishTime": 0
            },
            {
                "name": "一败涂地:MORTAL COIL",
                "id": 1939685249,
                "pst": 0,
                "t": 0,
                "ar": [
                    {
                        "id": 12271141,
                        "name": "ODD陈思键",
                        "tns": [],
                        "alias": []
                    }
                ],
                "alia": [
                    "2021.12.13(02:39)"
                ],
                "pop": 100,
                "st": 0,
                "rt": "",
                "fee": 8,
                "v": 3,
                "crbt": null,
                "cf": "",
                "al": {
                    "id": 143493725,
                    "name": "涂地:FALL FLAT",
                    "picUrl": "http://p3.music.126.net/bANzcEPLXSdWG3Usx1mJIQ==/109951167292448001.jpg",
                    "tns": [],
                    "pic_str": "109951167292448001",
                    "pic": 109951167292448000
                },
                "dt": 320890,
                "h": {
                    "br": 320000,
                    "fid": 0,
                    "size": 12838125,
                    "vd": -49314,
                    "sr": 48000
                },
                "m": {
                    "br": 192000,
                    "fid": 0,
                    "size": 7702893,
                    "vd": -46763,
                    "sr": 48000
                },
                "l": {
                    "br": 128000,
                    "fid": 0,
                    "size": 5135277,
                    "vd": -45110,
                    "sr": 48000
                },
                "sq": {
                    "br": 930591,
                    "fid": 0,
                    "size": 37327280,
                    "vd": -49473,
                    "sr": 48000
                },
                "hr": {
                    "br": 1699580,
                    "fid": 0,
                    "size": 68172468,
                    "vd": -49390,
                    "sr": 48000
                },
                "a": null,
                "cd": "01",
                "no": 9,
                "rtUrl": null,
                "ftype": 0,
                "rtUrls": [],
                "djId": 0,
                "copyright": 0,
                "s_id": 0,
                "mark": 536870912,
                "originCoverType": 0,
                "originSongSimpleData": null,
                "tagPicList": null,
                "resourceState": true,
                "version": 3,
                "songJumpInfo": null,
                "entertainmentTags": null,
                "single": 0,
                "noCopyrightRcmd": null,
                "mst": 9,
                "cp": 0,
                "mv": 0,
                "rtype": 0,
                "rurl": null,
                "publishTime": 1650470400000
            },
            {
                "name": "flow.",
                "id": 1941999038,
                "pst": 0,
                "t": 0,
                "ar": [
                    {
                        "id": 12453329,
                        "name": "功夫胖KungFuPen",
                        "tns": [],
                        "alias": []
                    },
                    {
                        "id": 12059091,
                        "name": "The-Beta",
                        "tns": [],
                        "alias": []
                    }
                ],
                "alia": [],
                "pop": 100,
                "st": 0,
                "rt": "",
                "fee": 0,
                "v": 3,
                "crbt": null,
                "cf": "",
                "al": {
                    "id": 144081250,
                    "name": "flow.",
                    "picUrl": "http://p3.music.126.net/PaK1TBBxrcJFEEtzVJAwhQ==/109951167346519582.jpg",
                    "tns": [],
                    "pic_str": "109951167346519582",
                    "pic": 109951167346519580
                },
                "dt": 208554,
                "h": {
                    "br": 320000,
                    "fid": 0,
                    "size": 8344365,
                    "vd": -39031,
                    "sr": 48000
                },
                "m": {
                    "br": 192000,
                    "fid": 0,
                    "size": 5006637,
                    "vd": -36423,
                    "sr": 48000
                },
                "l": {
                    "br": 128000,
                    "fid": 0,
                    "size": 3337773,
                    "vd": -34686,
                    "sr": 48000
                },
                "sq": {
                    "br": 868256,
                    "fid": 0,
                    "size": 22634811,
                    "vd": -39128,
                    "sr": 48000
                },
                "hr": {
                    "br": 1636668,
                    "fid": 0,
                    "size": 42666760,
                    "vd": -39083,
                    "sr": 48000
                },
                "a": null,
                "cd": "01",
                "no": 1,
                "rtUrl": null,
                "ftype": 0,
                "rtUrls": [],
                "djId": 0,
                "copyright": 0,
                "s_id": 0,
                "mark": 536871040,
                "originCoverType": 0,
                "originSongSimpleData": null,
                "tagPicList": null,
                "resourceState": true,
                "version": 3,
                "songJumpInfo": null,
                "entertainmentTags": null,
                "single": 0,
                "noCopyrightRcmd": null,
                "mst": 9,
                "cp": 0,
                "mv": 0,
                "rtype": 0,
                "rurl": null,
                "publishTime": 0
            },
            {
                "name": "景美",
                "id": 1942630861,
                "pst": 0,
                "t": 0,
                "ar": [
                    {
                        "id": 32176958,
                        "name": "宋柏纬",
                        "tns": [],
                        "alias": []
                    },
                    {
                        "id": 11074,
                        "name": "落日飞车",
                        "tns": [],
                        "alias": []
                    }
                ],
                "alia": [],
                "pop": 100,
                "st": 0,
                "rt": "",
                "fee": 8,
                "v": 3,
                "crbt": null,
                "cf": "",
                "al": {
                    "id": 143799398,
                    "name": "十万小时·EP02：90后",
                    "picUrl": "http://p3.music.126.net/ayAa9liNxE7lIZkUu8lWnw==/109951167354031052.jpg",
                    "tns": [],
                    "pic_str": "109951167354031052",
                    "pic": 109951167354031060
                },
                "dt": 216000,
                "h": {
                    "br": 320002,
                    "fid": 0,
                    "size": 8642049,
                    "vd": -16417,
                    "sr": 48000
                },
                "m": {
                    "br": 192002,
                    "fid": 0,
                    "size": 5185281,
                    "vd": -13778,
                    "sr": 48000
                },
                "l": {
                    "br": 128002,
                    "fid": 0,
                    "size": 3456897,
                    "vd": -12009,
                    "sr": 48000
                },
                "sq": {
                    "br": 806757,
                    "fid": 0,
                    "size": 21782451,
                    "vd": -16512,
                    "sr": 48000
                },
                "hr": {
                    "br": 2877631,
                    "fid": 0,
                    "size": 77696057,
                    "vd": -16433,
                    "sr": 96000
                },
                "a": null,
                "cd": "01",
                "no": 3,
                "rtUrl": null,
                "ftype": 0,
                "rtUrls": [],
                "djId": 0,
                "copyright": 0,
                "s_id": 0,
                "mark": 536870912,
                "originCoverType": 0,
                "originSongSimpleData": null,
                "tagPicList": null,
                "resourceState": true,
                "version": 3,
                "songJumpInfo": null,
                "entertainmentTags": null,
                "single": 0,
                "noCopyrightRcmd": null,
                "mst": 9,
                "cp": 0,
                "mv": 0,
                "rtype": 0,
                "rurl": null,
                "publishTime": 0
            },
            {
                "name": "世界打了个哈欠 我们跟着失眠",
                "id": 1941991030,
                "pst": 0,
                "t": 0,
                "ar": [
                    {
                        "id": 12085562,
                        "name": "买辣椒也用券",
                        "tns": [],
                        "alias": []
                    }
                ],
                "alia": [],
                "pop": 100,
                "st": 0,
                "rt": "",
                "fee": 8,
                "v": 4,
                "crbt": null,
                "cf": "",
                "al": {
                    "id": 144079347,
                    "name": "世界打了个哈欠 我们跟着失眠",
                    "picUrl": "http://p3.music.126.net/nkT2xrF2lHSmBeKsLJro3w==/109951167346369424.jpg",
                    "tns": [],
                    "pic_str": "109951167346369424",
                    "pic": 109951167346369420
                },
                "dt": 279594,
                "h": {
                    "br": 320000,
                    "fid": 0,
                    "size": 11186721,
                    "vd": -37943,
                    "sr": 44100
                },
                "m": {
                    "br": 192000,
                    "fid": 0,
                    "size": 6712050,
                    "vd": -35323,
                    "sr": 44100
                },
                "l": {
                    "br": 128000,
                    "fid": 0,
                    "size": 4474715,
                    "vd": -33562,
                    "sr": 44100
                },
                "sq": {
                    "br": 791440,
                    "fid": 0,
                    "size": 27660291,
                    "vd": -37782,
                    "sr": 44100
                },
                "hr": null,
                "a": null,
                "cd": "01",
                "no": 1,
                "rtUrl": null,
                "ftype": 0,
                "rtUrls": [],
                "djId": 0,
                "copyright": 0,
                "s_id": 0,
                "mark": 0,
                "originCoverType": 0,
                "originSongSimpleData": null,
                "tagPicList": null,
                "resourceState": true,
                "version": 4,
                "songJumpInfo": null,
                "entertainmentTags": null,
                "single": 0,
                "noCopyrightRcmd": null,
                "mst": 9,
                "cp": 0,
                "mv": 0,
                "rtype": 0,
                "rurl": null,
                "publishTime": 0
            },
            {
                "name": "伏特加",
                "id": 1943219387,
                "pst": 0,
                "t": 0,
                "ar": [
                    {
                        "id": 12121264,
                        "name": "Ice Paper",
                        "tns": [],
                        "alias": []
                    }
                ],
                "alia": [],
                "pop": 100,
                "st": 0,
                "rt": "",
                "fee": 8,
                "v": 1,
                "crbt": null,
                "cf": "",
                "al": {
                    "id": 144268064,
                    "name": "伏特加",
                    "picUrl": "http://p4.music.126.net/FV-ia9erptusscK7OXCBcQ==/109951167361570826.jpg",
                    "tns": [],
                    "pic_str": "109951167361570826",
                    "pic": 109951167361570830
                },
                "dt": 332000,
                "h": {
                    "br": 320001,
                    "fid": 0,
                    "size": 13282655,
                    "vd": -44211,
                    "sr": 48000
                },
                "m": {
                    "br": 192001,
                    "fid": 0,
                    "size": 7969631,
                    "vd": -41636,
                    "sr": 48000
                },
                "l": {
                    "br": 128001,
                    "fid": 0,
                    "size": 5313119,
                    "vd": -40055,
                    "sr": 48000
                },
                "sq": {
                    "br": 925356,
                    "fid": 0,
                    "size": 38402306,
                    "vd": -44258,
                    "sr": 48000
                },
                "hr": {
                    "br": 1695355,
                    "fid": 0,
                    "size": 70357264,
                    "vd": -44200,
                    "sr": 48000
                },
                "a": null,
                "cd": "01",
                "no": 1,
                "rtUrl": null,
                "ftype": 0,
                "rtUrls": [],
                "djId": 0,
                "copyright": 1,
                "s_id": 0,
                "mark": 536879104,
                "originCoverType": 0,
                "originSongSimpleData": null,
                "tagPicList": null,
                "resourceState": true,
                "version": 1,
                "songJumpInfo": null,
                "entertainmentTags": null,
                "single": 0,
                "noCopyrightRcmd": null,
                "mst": 9,
                "cp": 22036,
                "mv": 0,
                "rtype": 0,
                "rurl": null,
                "publishTime": 1651334400000
            }
        ],
        coverImgUrl: "https://p1.music.126.net/iFZ_nw2V86IFk90dc50kdQ==/109951166961388699.jpg"
    }

    // console.log('-----');
    // console.log(upRanking);
    // console.log('-----');
    // console.log(newRanking);
    // console.log('-----');
    // console.log(originRanking);



    // other hooks
    // useEffect(() => {
    //     dispatch(getTopListAction(19723756));
    //     dispatch(getTopListAction(3779629));
    //     dispatch(getTopListAction(2884035));
    //     // dispatch(getTopListAction(0));
    //     // dispatch(getTopListAction(2));
    //     // dispatch(getTopListAction(3));
    // }, [dispatch])

    return (
        <RankingWrapper>
            <BeiThemeHeaderRCM title="榜单" />
            <div className="tops">
                <BeiTopRanking info={upRanking} />
                <BeiTopRanking info={newRanking} />
                <BeiTopRanking info={originRanking} />
            </div>
        </RankingWrapper>
    )
})

export default BeiRecommendRanking