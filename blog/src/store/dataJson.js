import { observable, action, toJS } from 'mobx';

export default class dataJson {
    @observable version = 0.01
    @observable json = {
        data: {
            children: [],
            version: this.version
        }
    }

    @observable img = {
        type: 'img',
        alt: '',
        id: '',
        width: '',
        height: '',
        src: 'https://img.alicdn.com/imgextra/i1/1928865133/O1CN01oin9A41nmxWMSskfG_!!1928865133.jpg',
        x: '',
        y: '',
        borderRadius: 0
    }

    @observable video = {
        type: 'video',
        id: '',
        width: '',
        height: '',
        src: '',
        x: '',
        y: '',
        speed: 0, // 倍速
        autoPlay: true,
        loop: true,
        backGroundColor: 'rgba(0,0,0,0)',
        poster: '', // 封面图
        controls: false, // 是否隐藏控制按钮、mini控制条
        muted: false // 是否静默播放
    }

    @observable swiper = {
        type: 'swiper',
        id: '',
        width: '',
        height: '',
        switchMode: '', // 切换方式(c3动画)
        speed: 300, // 切换速度，即slider自动滑动开始到结束的时间（单位ms），也是触摸滑动时释放至贴合的时间。
        parallax: false, // 视差效果
        autoHeight: false, // 自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化。
        uniqueNavElements: true, // 默认为true时，仅本swiper的container内的分页器有效，设置为false后，container以外的分页器也生效了。
        watchOverflow: false, // 当没有足够的slide切换时，例如只有1个slide，swiper会失效且隐藏导航等。默认不开启这个功能。loop模式无效，因为会复制slide。
        preloadImages: true, // 默认为true，Swiper会强制加载所有图片后才初始化。
        zoom: true, // 开启焦距功能：双击slide会放大/缩小，并且在手机端可双指触摸缩放。可设置缩放选项或设为true使用默认值。
        children: [
            { children: [{}, {}], hot: [{}] } // 如果没热区，则hotlength为0，或者没有hot这个字段
        ]
    }

    @observable tabs = {
        type: 'tabs',
        id: '',
        currIndex: 0, // 默认选中
        tabSwitchMode: '', // 切换栏切换方式(c3动画)
        paneSwitchMode: '', // tabPane切换方式(c3动画)
        children: [
            {
                type: 'tab',
                width: 50,
                height: 50,
                background: '#000',
                activeBackground: '#007aff',
                borderRadius: '50%',
                img: '',
                activeImg: '',
                children: [
                    { children: [{}, {}], hot: [{}] } // 如果没热区，则hotlength为0，或者没有hot这个字段
                ]
            },
            {
                type: 'tab',
                width: 50,
                height: 50,
                background: '#000',
                activeBackground: '#007aff',
                borderRadius: '50%',
                img: '',
                activeImg: '',
                children: [
                    // image, video
                ]
            },
        ]
    }

    @observable hotSpace = {
        type: 'hotSpace',
        id: '',
        children: [
            {
                width: '',
                height: '',
                x: '',
                y: '',
                link: ''
            }
        ]
    }

    // 想加热区就得用box包裹
    @observable box = {
        type: 'box',
        id: 0,
        style: {

        },
        children: [
            // img , video
        ],
        hot: [
            // hotSpace
        ]
    }

    @action setAttr = (component, key, value) => {
        console.log(component, key, value)
        switch (component) {
            case 'img':
                this.img[key] = value
                return;
            case 'video':
                this.video[key] = value
                return
            case 'swiper':
                this.swiper[key] = value
                return
            case 'tabs':
                this.tabs[key] = value
                return
            case 'hotSpace':
                this.hotSpace[key] = value
                return
        }
    }

    @action addComponentToJson = (component, id) => {
        let businessId = toJS(id)
        component.id = businessId
        this.json.data.children.push(component)
    }
}