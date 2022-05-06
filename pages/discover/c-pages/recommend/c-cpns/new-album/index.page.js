import React, { memo, useEffect, useRef } from 'react'

import BeiThemeHeaderRCM from '@/components/theme-header-rcm'
import { getNewAlbumAction } from '../../store/actionCreators'
import { AlbumWrapper } from './style'
import { Carousel } from 'antd'


import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import BeiAlbumCover from '@/components/album-cover'

const BeiNewAlbum = memo(() => {

    //redux hooks
    // const { newAlbums } = useSelector((state) => ({
    //     newAlbums: state.getIn(["recommend", "newAlbums"])
    // }), shallowEqual)
    // const dispatch = useDispatch();

    // other hooks
    const pageRef = useRef();
    // useEffect(() => {
    //     dispatch(getNewAlbumAction(10));
    // }, [dispatch])

    const newAlbums = [
        {
            "name": "This Love (Taylor's Version)",
            "id": 144549544,
            "type": "Single",
            "size": 2,
            "picId": 109951167382398850,
            "blurPicUrl": "http://p3.music.126.net/ZDpkDXqMkl4Qg7Y6pohZVA==/109951167382398848.jpg",
            "companyId": 0,
            "pic": 109951167382398850,
            "picUrl": "http://p3.music.126.net/ZDpkDXqMkl4Qg7Y6pohZVA==/109951167382398848.jpg",
            "publishTime": 1651766400000,
            "description": "",
            "tags": "",
            "company": "Taylor Swift",
            "briefDesc": "",
            "artist": {
                "name": "Taylor Swift",
                "id": 44266,
                "picId": 109951166137639090,
                "img1v1Id": 18686200114669624,
                "briefDesc": "",
                "picUrl": "http://p3.music.126.net/5q1QjQRB2XriYuzKihyAGw==/109951166137639093.jpg",
                "img1v1Url": "http://p3.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg",
                "albumSize": 109,
                "alias": [],
                "trans": "泰勒·斯威夫特",
                "musicSize": 1585,
                "topicPerson": 0,
                "picId_str": "109951166137639093",
                "transNames": [
                    "泰勒·斯威夫特"
                ],
                "img1v1Id_str": "18686200114669622"
            },
            "songs": null,
            "alias": [],
            "status": 1,
            "copyrightId": 7003,
            "commentThreadId": "R_AL_3_144549544",
            "artists": [
                {
                    "name": "Taylor Swift",
                    "id": 44266,
                    "picId": 0,
                    "img1v1Id": 18686200114669624,
                    "briefDesc": "",
                    "picUrl": "http://p3.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                    "img1v1Url": "http://p3.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg",
                    "albumSize": 0,
                    "alias": [],
                    "trans": "",
                    "musicSize": 0,
                    "topicPerson": 0,
                    "img1v1Id_str": "18686200114669622"
                }
            ],
            "paid": false,
            "onSale": false,
            "picId_str": "109951167382398848"
        },
        {
            "name": "Western Wind",
            "id": 144548574,
            "type": "Single",
            "size": 1,
            "picId": 109951167382391440,
            "blurPicUrl": "http://p3.music.126.net/0VtXs4FgJ-9Dq8f0uO2EUw==/109951167382391433.jpg",
            "companyId": 0,
            "pic": 109951167382391440,
            "picUrl": "http://p3.music.126.net/0VtXs4FgJ-9Dq8f0uO2EUw==/109951167382391433.jpg",
            "publishTime": 1651766400000,
            "description": "",
            "tags": "",
            "company": "Silent Records IGA",
            "briefDesc": "",
            "artist": {
                "name": "Carly Rae Jepsen",
                "id": 50934,
                "picId": 109951167382870340,
                "img1v1Id": 18686200114669624,
                "briefDesc": "",
                "picUrl": "http://p4.music.126.net/NBWqFVKMhNvv1k-pWn_umA==/109951167382870339.jpg",
                "img1v1Url": "http://p4.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg",
                "albumSize": 47,
                "alias": [],
                "trans": "卡莉·蕾·吉普森",
                "musicSize": 821,
                "topicPerson": 0,
                "picId_str": "109951167382870339",
                "transNames": [
                    "卡莉·蕾·吉普森"
                ],
                "img1v1Id_str": "18686200114669622"
            },
            "songs": null,
            "alias": [],
            "status": 0,
            "copyrightId": 7003,
            "commentThreadId": "R_AL_3_144548574",
            "artists": [
                {
                    "name": "Carly Rae Jepsen",
                    "id": 50934,
                    "picId": 0,
                    "img1v1Id": 18686200114669624,
                    "briefDesc": "",
                    "picUrl": "http://p4.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                    "img1v1Url": "http://p4.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg",
                    "albumSize": 0,
                    "alias": [],
                    "trans": "",
                    "musicSize": 0,
                    "topicPerson": 0,
                    "img1v1Id_str": "18686200114669622"
                }
            ],
            "paid": false,
            "onSale": false,
            "picId_str": "109951167382391433"
        },
        {
            "name": "I",
            "id": 143628994,
            "type": "专辑",
            "size": 13,
            "picId": 109951167308225420,
            "blurPicUrl": "http://p3.music.126.net/0CyWLv9zMfz-DwhgJIzs1A==/109951167308225426.jpg",
            "companyId": 0,
            "pic": 109951167308225420,
            "picUrl": "http://p4.music.126.net/0CyWLv9zMfz-DwhgJIzs1A==/109951167308225426.jpg",
            "publishTime": 1651593600000,
            "description": "",
            "tags": "",
            "company": "索尼音乐",
            "briefDesc": "",
            "artist": {
                "name": "中島美嘉",
                "id": 160729,
                "picId": 109951166734352030,
                "img1v1Id": 18686200114669624,
                "briefDesc": "",
                "picUrl": "http://p4.music.126.net/UvpElHcvMWmb9TvoI6zTFg==/109951166734352030.jpg",
                "img1v1Url": "http://p4.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg",
                "albumSize": 104,
                "alias": [
                    "Mika Nakashima"
                ],
                "trans": "中岛美嘉",
                "musicSize": 736,
                "topicPerson": 0,
                "picId_str": "109951166734352030",
                "transNames": [
                    "中岛美嘉"
                ],
                "img1v1Id_str": "18686200114669622"
            },
            "songs": null,
            "alias": [],
            "status": 1,
            "copyrightId": 2706476,
            "commentThreadId": "R_AL_3_143628994",
            "artists": [
                {
                    "name": "中島美嘉",
                    "id": 160729,
                    "picId": 0,
                    "img1v1Id": 18686200114669624,
                    "briefDesc": "",
                    "picUrl": "http://p3.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                    "img1v1Url": "http://p4.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg",
                    "albumSize": 0,
                    "alias": [],
                    "trans": "",
                    "musicSize": 0,
                    "topicPerson": 0,
                    "img1v1Id_str": "18686200114669622"
                }
            ],
            "paid": false,
            "onSale": false,
            "picId_str": "109951167308225426"
        },
        {
            "name": "Honest",
            "id": 144185625,
            "type": "Single",
            "size": 1,
            "picId": 109951167353603340,
            "blurPicUrl": "http://p4.music.126.net/nV4-lqVtG5M3NJBXggXgdw==/109951167353603340.jpg",
            "companyId": 0,
            "pic": 109951167353603340,
            "picUrl": "http://p4.music.126.net/nV4-lqVtG5M3NJBXggXgdw==/109951167353603340.jpg",
            "publishTime": 1651161600000,
            "description": "",
            "tags": "",
            "company": "Justin Bieber 2021 PS/ Def Jam",
            "briefDesc": "",
            "artist": {
                "name": "Justin Bieber",
                "id": 35531,
                "picId": 109951166316759380,
                "img1v1Id": 18686200114669624,
                "briefDesc": "",
                "picUrl": "http://p3.music.126.net/rQnFyWZt9yhg9MON2lH2UQ==/109951166316759373.jpg",
                "img1v1Url": "http://p3.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg",
                "albumSize": 89,
                "alias": [],
                "trans": "贾斯汀·比伯",
                "musicSize": 4548,
                "topicPerson": 0,
                "picId_str": "109951166316759373",
                "transNames": [
                    "贾斯汀·比伯"
                ],
                "img1v1Id_str": "18686200114669622"
            },
            "songs": null,
            "alias": [],
            "status": 1,
            "copyrightId": 7003,
            "commentThreadId": "R_AL_3_144185625",
            "artists": [
                {
                    "name": "Justin Bieber",
                    "id": 35531,
                    "picId": 0,
                    "img1v1Id": 18686200114669624,
                    "briefDesc": "",
                    "picUrl": "http://p3.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                    "img1v1Url": "http://p3.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg",
                    "albumSize": 0,
                    "alias": [],
                    "trans": "",
                    "musicSize": 0,
                    "topicPerson": 0,
                    "img1v1Id_str": "18686200114669622"
                },
                {
                    "name": "Don Toliver",
                    "id": 14253161,
                    "picId": 0,
                    "img1v1Id": 18686200114669624,
                    "briefDesc": "",
                    "picUrl": "http://p4.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                    "img1v1Url": "http://p4.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg",
                    "albumSize": 0,
                    "alias": [],
                    "trans": "",
                    "musicSize": 0,
                    "topicPerson": 0,
                    "img1v1Id_str": "18686200114669622"
                }
            ],
            "paid": false,
            "onSale": false,
            "picId_str": "109951167353603340"
        },
        {
            "name": "我不要熄灭在风中",
            "id": 143919628,
            "type": "Single",
            "size": 1,
            "picId": 109951167334588130,
            "blurPicUrl": "http://p3.music.126.net/lnmOMe3tjWN1GOJ9HhIYSA==/109951167334588124.jpg",
            "companyId": 0,
            "pic": 109951167334588130,
            "picUrl": "http://p3.music.126.net/lnmOMe3tjWN1GOJ9HhIYSA==/109951167334588124.jpg",
            "publishTime": 1650988800000,
            "description": "",
            "tags": "",
            "company": "纽酷文化科技（海南）有限公司",
            "briefDesc": "",
            "artist": {
                "name": "新裤子",
                "id": 13282,
                "picId": 109951167028936100,
                "img1v1Id": 18686200114669624,
                "briefDesc": "",
                "picUrl": "http://p4.music.126.net/NHuKz-uypAAbd5AAzGsfrQ==/109951167028936100.jpg",
                "img1v1Url": "http://p3.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg",
                "albumSize": 24,
                "alias": [],
                "trans": "",
                "musicSize": 151,
                "topicPerson": 0,
                "picId_str": "109951167028936100",
                "img1v1Id_str": "18686200114669622"
            },
            "songs": null,
            "alias": [
                "《风起陇西》片尾曲"
            ],
            "status": 0,
            "copyrightId": 2710697,
            "commentThreadId": "R_AL_3_143919628",
            "artists": [
                {
                    "name": "新裤子",
                    "id": 13282,
                    "picId": 0,
                    "img1v1Id": 18686200114669624,
                    "briefDesc": "",
                    "picUrl": "http://p4.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                    "img1v1Url": "http://p4.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg",
                    "albumSize": 0,
                    "alias": [],
                    "trans": "",
                    "musicSize": 0,
                    "topicPerson": 0,
                    "img1v1Id_str": "18686200114669622"
                }
            ],
            "paid": false,
            "onSale": false,
            "picId_str": "109951167334588124"
        },
        {
            "name": "MY",
            "id": 144008679,
            "type": "EP",
            "size": 6,
            "picId": 109951167346468980,
            "blurPicUrl": "http://p3.music.126.net/eTM3B9CX8fEvBm7LprSkyA==/109951167346468978.jpg",
            "companyId": 0,
            "pic": 109951167346468980,
            "picUrl": "http://p4.music.126.net/eTM3B9CX8fEvBm7LprSkyA==/109951167346468978.jpg",
            "publishTime": 1650988800000,
            "description": "",
            "tags": "",
            "company": "Cube Entertainment",
            "briefDesc": "",
            "artist": {
                "name": "曺薇娟",
                "id": 15249075,
                "picId": 109951167316044860,
                "img1v1Id": 18686200114669624,
                "briefDesc": "",
                "picUrl": "http://p4.music.126.net/7ST8NTD3dLEeujItE3i_gg==/109951167316044861.jpg",
                "img1v1Url": "http://p4.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg",
                "albumSize": 6,
                "alias": [
                    "Miyeon of (G)I-DLE"
                ],
                "trans": "조미연",
                "musicSize": 51,
                "topicPerson": 0,
                "picId_str": "109951167316044861",
                "transNames": [
                    "조미연"
                ],
                "img1v1Id_str": "18686200114669622"
            },
            "songs": null,
            "alias": [],
            "status": 1,
            "copyrightId": 1415873,
            "commentThreadId": "R_AL_3_144008679",
            "artists": [
                {
                    "name": "曺薇娟",
                    "id": 15249075,
                    "picId": 0,
                    "img1v1Id": 18686200114669624,
                    "briefDesc": "",
                    "picUrl": "http://p3.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                    "img1v1Url": "http://p3.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg",
                    "albumSize": 0,
                    "alias": [],
                    "trans": "",
                    "musicSize": 0,
                    "topicPerson": 0,
                    "img1v1Id_str": "18686200114669622"
                }
            ],
            "paid": false,
            "onSale": false,
            "picId_str": "109951167346468978"
        },
        {
            "name": "请问美好时代怎么去?",
            "id": 143474562,
            "type": "专辑",
            "size": 7,
            "picId": 109951167289607760,
            "blurPicUrl": "http://p4.music.126.net/22_Wyn0mCMsY0XVoq4yfFA==/109951167289607759.jpg",
            "companyId": 0,
            "pic": 109951167289607760,
            "picUrl": "http://p4.music.126.net/22_Wyn0mCMsY0XVoq4yfFA==/109951167289607759.jpg",
            "publishTime": 1650556800000,
            "description": "",
            "tags": "",
            "company": "",
            "briefDesc": "",
            "artist": {
                "name": "陈鸿宇",
                "id": 1058228,
                "picId": 109951164488639980,
                "img1v1Id": 18686200114669624,
                "briefDesc": "",
                "picUrl": "http://p3.music.126.net/HQXDPPEJyy-wEItLuho3ww==/109951164488639978.jpg",
                "img1v1Url": "http://p4.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg",
                "albumSize": 17,
                "alias": [],
                "trans": "",
                "musicSize": 97,
                "topicPerson": 0,
                "picId_str": "109951164488639978",
                "img1v1Id_str": "18686200114669622"
            },
            "songs": null,
            "alias": [],
            "status": 0,
            "copyrightId": -1,
            "commentThreadId": "R_AL_3_143474562",
            "artists": [
                {
                    "name": "陈鸿宇",
                    "id": 1058228,
                    "picId": 0,
                    "img1v1Id": 18686200114669624,
                    "briefDesc": "",
                    "picUrl": "http://p4.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                    "img1v1Url": "http://p3.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg",
                    "albumSize": 0,
                    "alias": [],
                    "trans": "",
                    "musicSize": 0,
                    "topicPerson": 0,
                    "img1v1Id_str": "18686200114669622"
                }
            ],
            "paid": false,
            "onSale": false,
            "picId_str": "109951167289607759"
        },
        {
            "name": "云还在唱歌",
            "id": 143769285,
            "type": "Single",
            "size": 2,
            "picId": 109951167322582300,
            "blurPicUrl": "http://p4.music.126.net/CtZG5qxH9LPgGV_PThqSBg==/109951167322582296.jpg",
            "companyId": 0,
            "pic": 109951167322582300,
            "picUrl": "http://p4.music.126.net/CtZG5qxH9LPgGV_PThqSBg==/109951167322582296.jpg",
            "publishTime": 1650643200000,
            "description": "",
            "tags": "",
            "company": "网易·云上",
            "briefDesc": "",
            "artist": {
                "name": "张杰",
                "id": 6472,
                "picId": 109951166308996370,
                "img1v1Id": 18686200114669624,
                "briefDesc": "",
                "picUrl": "http://p3.music.126.net/nYcbvtFppDltDtt3XhQZDg==/109951166308996364.jpg",
                "img1v1Url": "http://p4.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg",
                "albumSize": 92,
                "alias": [
                    "Jason Zhang"
                ],
                "trans": "",
                "musicSize": 465,
                "topicPerson": 0,
                "picId_str": "109951166308996364",
                "img1v1Id_str": "18686200114669622"
            },
            "songs": null,
            "alias": [],
            "status": 0,
            "copyrightId": -1,
            "commentThreadId": "R_AL_3_143769285",
            "artists": [
                {
                    "name": "张杰",
                    "id": 6472,
                    "picId": 0,
                    "img1v1Id": 18686200114669624,
                    "briefDesc": "",
                    "picUrl": "http://p3.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                    "img1v1Url": "http://p3.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg",
                    "albumSize": 0,
                    "alias": [],
                    "trans": "",
                    "musicSize": 0,
                    "topicPerson": 0,
                    "img1v1Id_str": "18686200114669622"
                }
            ],
            "paid": false,
            "onSale": false,
            "picId_str": "109951167322582296"
        },
        {
            "name": "Nonfiction",
            "id": 143710492,
            "type": "Single",
            "size": 1,
            "picId": 109951167316379900,
            "blurPicUrl": "http://p4.music.126.net/q9MHVax9W-UCpjyuIDp7Qw==/109951167316379898.jpg",
            "companyId": 0,
            "pic": 109951167316379900,
            "picUrl": "http://p3.music.126.net/q9MHVax9W-UCpjyuIDp7Qw==/109951167316379898.jpg",
            "publishTime": 1650556800000,
            "description": "",
            "tags": "",
            "company": "(P)2022 AVEX ENTERTAINMENT INC.",
            "briefDesc": "",
            "artist": {
                "name": "浜崎あゆみ",
                "id": 16405,
                "picId": 109951167294052080,
                "img1v1Id": 18686200114669624,
                "briefDesc": "",
                "picUrl": "http://p3.music.126.net/4afnzxxYL4-ZkQWBfpJFZw==/109951167294052078.jpg",
                "img1v1Url": "http://p4.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg",
                "albumSize": 194,
                "alias": [
                    "Ayumi Hamasaki"
                ],
                "trans": "滨崎 步",
                "musicSize": 2041,
                "topicPerson": 0,
                "picId_str": "109951167294052078",
                "transNames": [
                    "滨崎 步"
                ],
                "img1v1Id_str": "18686200114669622"
            },
            "songs": null,
            "alias": [],
            "status": 1,
            "copyrightId": 457010,
            "commentThreadId": "R_AL_3_143710492",
            "artists": [
                {
                    "name": "浜崎あゆみ",
                    "id": 16405,
                    "picId": 0,
                    "img1v1Id": 18686200114669624,
                    "briefDesc": "",
                    "picUrl": "http://p3.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                    "img1v1Url": "http://p4.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg",
                    "albumSize": 0,
                    "alias": [],
                    "trans": "",
                    "musicSize": 0,
                    "topicPerson": 0,
                    "img1v1Id_str": "18686200114669622"
                }
            ],
            "paid": false,
            "onSale": false,
            "picId_str": "109951167316379898"
        },
        {
            "name": "望江公子：踏青",
            "id": 143632690,
            "type": "EP",
            "size": 6,
            "picId": 109951167309010860,
            "blurPicUrl": "http://p3.music.126.net/OTsolqhjbzAW_KJpkAzgvA==/109951167309010859.jpg",
            "companyId": 0,
            "pic": 109951167309010860,
            "picUrl": "http://p4.music.126.net/OTsolqhjbzAW_KJpkAzgvA==/109951167309010859.jpg",
            "publishTime": 1650384000000,
            "description": "",
            "tags": "",
            "company": "第四音乐",
            "briefDesc": "",
            "artist": {
                "name": "施鑫文月",
                "id": 12565467,
                "picId": 109951165867079730,
                "img1v1Id": 18686200114669624,
                "briefDesc": "",
                "picUrl": "http://p4.music.126.net/KXqWDQN1TRkM35J8FvwYNA==/109951165867079734.jpg",
                "img1v1Url": "http://p4.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg",
                "albumSize": 7,
                "alias": [],
                "trans": "",
                "musicSize": 33,
                "topicPerson": 0,
                "picId_str": "109951165867079734",
                "img1v1Id_str": "18686200114669622"
            },
            "songs": null,
            "alias": [],
            "status": 0,
            "copyrightId": 2710611,
            "commentThreadId": "R_AL_3_143632690",
            "artists": [
                {
                    "name": "施鑫文月",
                    "id": 12565467,
                    "picId": 0,
                    "img1v1Id": 18686200114669624,
                    "briefDesc": "",
                    "picUrl": "http://p3.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                    "img1v1Url": "http://p4.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg",
                    "albumSize": 0,
                    "alias": [],
                    "trans": "",
                    "musicSize": 0,
                    "topicPerson": 0,
                    "img1v1Id_str": "18686200114669622"
                }
            ],
            "paid": false,
            "onSale": false,
            "picId_str": "109951167309010859"
        },
        {
            "name": "Head In The Clouds Forever",
            "id": 143477758,
            "type": "Single",
            "size": 3,
            "picId": 109951167289853820,
            "blurPicUrl": "http://p3.music.126.net/TY6Ix4bt3bkDIACXUU6s3A==/109951167289853830.jpg",
            "companyId": 0,
            "pic": 109951167289853820,
            "picUrl": "http://p4.music.126.net/TY6Ix4bt3bkDIACXUU6s3A==/109951167289853830.jpg",
            "publishTime": 1650124800000,
            "description": "",
            "tags": "",
            "company": "StreetVoice/88rising Records LLC",
            "briefDesc": "",
            "artist": {
                "name": "88rising",
                "id": 15022053,
                "picId": 109951164445634640,
                "img1v1Id": 18686200114669624,
                "briefDesc": "",
                "picUrl": "http://p4.music.126.net/bj_rmuuX2T_3CWtYeWo_5A==/109951164445634644.jpg",
                "img1v1Url": "http://p3.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg",
                "albumSize": 28,
                "alias": [],
                "trans": "",
                "musicSize": 61,
                "topicPerson": 0,
                "picId_str": "109951164445634644",
                "img1v1Id_str": "18686200114669622"
            },
            "songs": null,
            "alias": [],
            "status": 1,
            "copyrightId": 2706458,
            "commentThreadId": "R_AL_3_143477758",
            "artists": [
                {
                    "name": "88rising",
                    "id": 15022053,
                    "picId": 0,
                    "img1v1Id": 18686200114669624,
                    "briefDesc": "",
                    "picUrl": "http://p4.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                    "img1v1Url": "http://p3.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg",
                    "albumSize": 0,
                    "alias": [],
                    "trans": "",
                    "musicSize": 0,
                    "topicPerson": 0,
                    "img1v1Id_str": "18686200114669622"
                }
            ],
            "paid": false,
            "onSale": false,
            "picId_str": "109951167289853830"
        },
        {
            "name": "Humble Swag",
            "id": 141979381,
            "type": "专辑",
            "size": 16,
            "picId": 109951167161179790,
            "blurPicUrl": "http://p3.music.126.net/6yw3dbF4_e4kFmd9aKTN6A==/109951167161179789.jpg",
            "companyId": 0,
            "pic": 109951167161179790,
            "picUrl": "http://p3.music.126.net/6yw3dbF4_e4kFmd9aKTN6A==/109951167161179789.jpg",
            "publishTime": 1649779200000,
            "description": "",
            "tags": "",
            "company": "StreetVoice/A Few Good Kids Records",
            "briefDesc": "",
            "artist": {
                "name": "马思唯",
                "id": 1132392,
                "picId": 109951165663083710,
                "img1v1Id": 18686200114669624,
                "briefDesc": "",
                "picUrl": "http://p3.music.126.net/febcTfRaSHEHUIb0V45aPw==/109951165663083705.jpg",
                "img1v1Url": "http://p3.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg",
                "albumSize": 27,
                "alias": [
                    "Masiwei"
                ],
                "trans": "",
                "musicSize": 144,
                "topicPerson": 0,
                "picId_str": "109951165663083705",
                "img1v1Id_str": "18686200114669622"
            },
            "songs": null,
            "alias": [],
            "status": 1,
            "copyrightId": 1400821,
            "commentThreadId": "R_AL_3_141979381",
            "artists": [
                {
                    "name": "马思唯",
                    "id": 1132392,
                    "picId": 0,
                    "img1v1Id": 18686200114669624,
                    "briefDesc": "",
                    "picUrl": "http://p4.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
                    "img1v1Url": "http://p4.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg",
                    "albumSize": 0,
                    "alias": [],
                    "trans": "",
                    "musicSize": 0,
                    "topicPerson": 0,
                    "img1v1Id_str": "18686200114669622"
                }
            ],
            "paid": false,
            "onSale": false,
            "picId_str": "109951167161179789"
        }
    ]

    return (
        <AlbumWrapper>
            <BeiThemeHeaderRCM title="新碟上架" />
            <div className="content">
                <button className="arrow arrow-left sprite_02"
                    onClick={e => pageRef.current.prev()}></button>
                <div className="album">
                    <Carousel dots={false} ref={pageRef}>
                        {
                            [0, 1].map((item) => {
                                return (
                                    <div className="page" key={item}>
                                        {
                                            newAlbums.slice(item * 5, (item + 1) * 5).map(iten => {
                                                return <BeiAlbumCover
                                                    key={iten.id}
                                                    info={iten}
                                                    size={100}
                                                    width={118}
                                                    bgp="-570px "
                                                >{iten.name}</BeiAlbumCover>

                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </div>
                <button className="arrow arrow-right sprite_02"
                    onClick={e => pageRef.current.next()}></button>
            </div>
        </AlbumWrapper>
    )
})

export default BeiNewAlbum