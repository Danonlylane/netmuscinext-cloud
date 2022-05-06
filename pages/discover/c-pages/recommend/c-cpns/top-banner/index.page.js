import React, { memo, useCallback, useEffect, useRef, useState } from 'react'


import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getTopBannerAction } from '../../store/actionCreators';

import Image from 'next/image'
import downloadImg from '@/assets/img/downloadTmp.png'

import { Carousel } from 'antd';
import {
    BannerWrapper,
    BannerLeft,
    BannerRight,
    BannerControl
} from './style'

const BeiTopBanner = memo(() => {
    //state
    const [currentIndex, setCurrentIndex] = useState(0);

    // 组件和redux关联：获取数据和进行操作
    // const { topBanners } = useSelector(state => ({
    //     // topBanners: state.get("recommend").get("topBanners")
    //     topBanners: state.getIn(["recommend", "topBanners"])
    // }), shallowEqual)
    // const dispatch = useDispatch();

    // 其他hooks
    const bannerRef = useRef();

    const topBanners = [
        {
            "imageUrl": "http://p1.music.126.net/Xj_ug7bHRLDMMnmH37GCMw==/109951167382728254.jpg",
            "targetId": 144549544,
            "adid": null,
            "targetType": 10,
            "titleColor": "red",
            "typeTitle": "新碟首发",
            "url": null,
            "exclusive": false,
            "monitorImpress": null,
            "monitorClick": null,
            "monitorType": null,
            "monitorImpressList": null,
            "monitorClickList": null,
            "monitorBlackList": null,
            "extMonitor": null,
            "extMonitorInfo": null,
            "adSource": null,
            "adLocation": null,
            "adDispatchJson": null,
            "encodeId": "144549544",
            "program": null,
            "event": null,
            "video": null,
            "song": null,
            "scm": "1.music-homepage.homepage_banner_force.banner.4281158.1066600393.null"
        },
        {
            "imageUrl": "http://p1.music.126.net/xVr29JDGIoeKbWAWqXI6UQ==/109951167380227445.jpg",
            "targetId": 0,
            "adid": null,
            "targetType": 3000,
            "titleColor": "blue",
            "typeTitle": "数字单曲",
            "url": "https://music.163.com/store/newalbum/detail?id=144154131",
            "exclusive": false,
            "monitorImpress": null,
            "monitorClick": null,
            "monitorType": null,
            "monitorImpressList": null,
            "monitorClickList": null,
            "monitorBlackList": null,
            "extMonitor": null,
            "extMonitorInfo": null,
            "adSource": null,
            "adLocation": null,
            "adDispatchJson": null,
            "encodeId": "0",
            "program": null,
            "event": null,
            "video": null,
            "song": null,
            "scm": "1.music-homepage.homepage_banner_force.banner.4250230.1066665892.null"
        },
        {
            "imageUrl": "http://p1.music.126.net/vhWuXm_PQc8yLH9LNmR-9g==/109951167380344017.jpg",
            "targetId": 1944632845,
            "adid": null,
            "targetType": 1,
            "titleColor": "red",
            "typeTitle": "新歌首发",
            "url": null,
            "exclusive": false,
            "monitorImpress": null,
            "monitorClick": null,
            "monitorType": null,
            "monitorImpressList": null,
            "monitorClickList": null,
            "monitorBlackList": null,
            "extMonitor": null,
            "extMonitorInfo": null,
            "adSource": null,
            "adLocation": null,
            "adDispatchJson": null,
            "encodeId": "1944632845",
            "program": null,
            "event": null,
            "video": null,
            "song": null,
            "scm": "1.music-homepage.homepage_banner_force.banner.4250232.1066579435.null"
        },
        {
            "imageUrl": "http://p1.music.126.net/skUr67StJYMYotVun7ygsQ==/109951167380373747.jpg",
            "targetId": 1943910424,
            "adid": null,
            "targetType": 1,
            "titleColor": "red",
            "typeTitle": "新歌首发",
            "url": null,
            "exclusive": false,
            "monitorImpress": null,
            "monitorClick": null,
            "monitorType": null,
            "monitorImpressList": null,
            "monitorClickList": null,
            "monitorBlackList": null,
            "extMonitor": null,
            "extMonitorInfo": null,
            "adSource": null,
            "adLocation": null,
            "adDispatchJson": null,
            "encodeId": "1943910424",
            "program": null,
            "event": null,
            "video": null,
            "song": null,
            "scm": "1.music-homepage.homepage_banner_force.banner.4250233.1066571689.null"
        },
        {
            "imageUrl": "http://p1.music.126.net/0MF-NNSFtf0ydX55KKUjng==/109951167380373992.jpg",
            "targetId": 1944016849,
            "adid": null,
            "targetType": 1,
            "titleColor": "red",
            "typeTitle": "新歌首发",
            "url": null,
            "exclusive": false,
            "monitorImpress": null,
            "monitorClick": null,
            "monitorType": null,
            "monitorImpressList": null,
            "monitorClickList": null,
            "monitorBlackList": null,
            "extMonitor": null,
            "extMonitorInfo": null,
            "adSource": null,
            "adLocation": null,
            "adDispatchJson": null,
            "encodeId": "1944016849",
            "program": null,
            "event": null,
            "video": null,
            "song": null,
            "scm": "1.music-homepage.homepage_banner_force.banner.4250234.1066600646.null"
        },
        {
            "imageUrl": "http://p1.music.126.net/ZtZlLLK6Wc2wsPnK4aQr8w==/109951167380392341.jpg",
            "targetId": 1941118541,
            "adid": null,
            "targetType": 1,
            "titleColor": "red",
            "typeTitle": "新歌首发",
            "url": null,
            "exclusive": false,
            "monitorImpress": null,
            "monitorClick": null,
            "monitorType": null,
            "monitorImpressList": null,
            "monitorClickList": null,
            "monitorBlackList": null,
            "extMonitor": null,
            "extMonitorInfo": null,
            "adSource": null,
            "adLocation": null,
            "adDispatchJson": null,
            "encodeId": "1941118541",
            "program": null,
            "event": null,
            "video": null,
            "song": null,
            "scm": "1.music-homepage.homepage_banner_force.banner.4250235.1066689828.null"
        },
        {
            "imageUrl": "http://p1.music.126.net/4_LJLZwUu_8dYSyX9cAzew==/109951167382391321.jpg",
            "targetId": 144513438,
            "adid": null,
            "targetType": 10,
            "titleColor": "red",
            "typeTitle": "新碟首发",
            "url": null,
            "exclusive": false,
            "monitorImpress": null,
            "monitorClick": null,
            "monitorType": null,
            "monitorImpressList": null,
            "monitorClickList": null,
            "monitorBlackList": null,
            "extMonitor": null,
            "extMonitorInfo": null,
            "adSource": null,
            "adLocation": null,
            "adDispatchJson": null,
            "encodeId": "144513438",
            "program": null,
            "event": null,
            "video": null,
            "song": null,
            "scm": "1.music-homepage.homepage_banner_force.banner.4288211.1066636199.null"
        },
        {
            "imageUrl": "http://p1.music.126.net/igdgZ_KUQRycuXI5M-fQtA==/109951167382606055.jpg",
            "targetId": 1944897542,
            "adid": null,
            "targetType": 1,
            "titleColor": "red",
            "typeTitle": "新歌首发",
            "url": null,
            "exclusive": false,
            "monitorImpress": null,
            "monitorClick": null,
            "monitorType": null,
            "monitorImpressList": null,
            "monitorClickList": null,
            "monitorBlackList": null,
            "extMonitor": null,
            "extMonitorInfo": null,
            "adSource": null,
            "adLocation": null,
            "adDispatchJson": null,
            "encodeId": "1944897542",
            "program": null,
            "event": null,
            "video": null,
            "song": null,
            "scm": "1.music-homepage.homepage_banner_force.banner.4273112.1066659974.null"
        },
        {
            "imageUrl": "http://p1.music.126.net/-Bvqq8mXzAYJR7YkuLuuFg==/109951167380798117.jpg",
            "targetId": 1944668203,
            "adid": null,
            "targetType": 1,
            "titleColor": "red",
            "typeTitle": "新歌首发",
            "url": null,
            "exclusive": false,
            "monitorImpress": null,
            "monitorClick": null,
            "monitorType": null,
            "monitorImpressList": null,
            "monitorClickList": null,
            "monitorBlackList": null,
            "extMonitor": null,
            "extMonitorInfo": null,
            "adSource": null,
            "adLocation": null,
            "adDispatchJson": null,
            "encodeId": "1944668203",
            "program": null,
            "event": null,
            "video": null,
            "song": null,
            "scm": "1.music-homepage.homepage_banner_force.banner.4283169.1066602599.null"
        }
    ]

    // useEffect(() => {
    //     dispatch(getTopBannerAction());
    // }, [dispatch])

    const bannerChange = useCallback((from, to) => {
        // console.log(to);
        setCurrentIndex(to);
    }, []);

    // 其他业务逻辑
    const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl + "?imageView&blur=40x20")

    return (
        <BannerWrapper bgImage={bgImage}>
            <div className="banner wrap-v2">
                <BannerLeft>
                    <Carousel effect="fade" autoplay="true" ref={bannerRef} beforeChange={bannerChange}>
                        {
                            topBanners.map((item, index) => {
                                return (
                                    <div className="banner-item" key={item.imageUrl}>
                                        <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </BannerLeft>
                <BannerRight>
                    <Image src={downloadImg} />
                </BannerRight>
                <BannerControl>
                    <button className="btn left" onClick={e => bannerRef.current.prev()}></button>
                    <button className="btn right" onClick={e => bannerRef.current.next()}></button>
                </BannerControl>
            </div>

        </BannerWrapper>
    )
})

export default BeiTopBanner