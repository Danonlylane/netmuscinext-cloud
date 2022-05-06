import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

// import {
//     getSettleSingers
// } from "../../store/actionCreators";

import {
    getSizeImage
} from "@/utils/format-utils";

import BeiThemeHeaderSmall from '@/components/theme-header-small';

import {
    SetterSongerWrapper
} from "./style";

const BeiSettleSinger = memo(() => {
    // redux
    // const dispatch = useDispatch();
    // const state = useSelector((state) => ({
    //     settleSings: state.getIn(["recommend", "settleSings"])
    // }), shallowEqual);

    // hooks
    // useEffect(() => {
    //     dispatch(getSettleSingers());
    // }, [dispatch])

    const settleSings = [
        {
            "albumSize": 124,
            "alias": [
                "Eason Chan"
            ],
            "briefDesc": "",
            "followed": false,
            "id": 2116,
            "img1v1Id": 109951166115911710,
            "img1v1Id_str": "109951166115911716",
            "img1v1Url": "http://p1.music.126.net/rYYhHXZHwCfizE0N46F37Q==/109951166115911716.jpg",
            "musicSize": 1760,
            "name": "陈奕迅",
            "picId": 109951166115915090,
            "picId_str": "109951166115915081",
            "picUrl": "http://p1.music.126.net/w_vuv9hBWq2hlJxJcmJrjg==/109951166115915081.jpg",
            "topicPerson": 0,
            "trans": ""
        },
        {
            "albumSize": 56,
            "alias": [
                "JJ Lin",
                "Wayne Lim"
            ],
            "briefDesc": "",
            "followed": false,
            "id": 3684,
            "img1v1Id": 109951165911947840,
            "img1v1Id_str": "109951165911947840",
            "img1v1Url": "http://p1.music.126.net/0L5drAV43FLJk6J9dRhfew==/109951165911947840.jpg",
            "musicSize": 529,
            "name": "林俊杰",
            "picId": 109951165911950320,
            "picId_str": "109951165911950321",
            "picUrl": "http://p1.music.126.net/dwbXimgQn1YnJzwSlPDk-A==/109951165911950321.jpg",
            "topicPerson": 0,
            "trans": ""
        },
        {
            "accountId": 70436671,
            "albumSize": 38,
            "alias": [
                "杨浪，youngcaptain"
            ],
            "briefDesc": "",
            "followed": false,
            "id": 1143033,
            "img1v1Id": 109951166470091740,
            "img1v1Id_str": "109951166470091750",
            "img1v1Url": "http://p1.music.126.net/Ieq9StJjPVyRPlmeOanldQ==/109951166470091750.jpg",
            "musicSize": 96,
            "name": "队长",
            "picId": 109951164546544260,
            "picId_str": "109951164546544248",
            "picUrl": "http://p1.music.126.net/CsGY6JmX21cxa-5DZKIqpQ==/109951164546544248.jpg",
            "topicPerson": 0,
            "trans": ""
        },
        {
            "accountId": 97137413,
            "albumSize": 21,
            "alias": [
                "Joker Xue"
            ],
            "briefDesc": "",
            "followed": false,
            "id": 5781,
            "img1v1Id": 109951165034950660,
            "img1v1Id_str": "109951165034950656",
            "img1v1Url": "http://p1.music.126.net/1tSJODTpcbZvNTCdsn4RYA==/109951165034950656.jpg",
            "musicSize": 224,
            "name": "薛之谦",
            "picId": 109951165034938860,
            "picId_str": "109951165034938865",
            "picUrl": "http://p1.music.126.net/LCWqYYKoCEZKuAC3S3lIeg==/109951165034938865.jpg",
            "topicPerson": 0,
            "trans": ""
        },
        {
            "accountId": 1461695826,
            "albumSize": 38,
            "alias": [],
            "briefDesc": "",
            "followed": false,
            "id": 12138269,
            "img1v1Id": 109951166048163330,
            "img1v1Id_str": "109951166048163326",
            "img1v1Url": "http://p1.music.126.net/6dylPpmQsQZaSlDkSoiv9g==/109951166048163326.jpg",
            "musicSize": 244,
            "name": "毛不易",
            "picId": 109951165787072460,
            "picId_str": "109951165787072463",
            "picUrl": "http://p1.music.126.net/W5LXS0-I-P9Wk6lQpS6HGA==/109951165787072463.jpg",
            "topicPerson": 0,
            "trans": ""
        }
    ];

    return (
        <SetterSongerWrapper>
            <BeiThemeHeaderSmall title="入驻歌手" more="查看全部>" />
            <div className="singer-list">
                {
                    settleSings.map((item, index) => {
                        return (
                            <a href="/singer" key={item.id} className="item">
                                <img src={getSizeImage(item.img1v1Url, 62)} alt="" />
                                <div className="info">
                                    <div className="title">{item.alias.join("") || item.name}</div>
                                    <div className="name">{item.name}</div>
                                </div>
                            </a>
                        )
                    })
                }
            </div>
            <div className="apply-for">
                <a href="/abc">申请成为网易音乐人</a>
            </div>
        </SetterSongerWrapper>
    )
})

export default BeiSettleSinger