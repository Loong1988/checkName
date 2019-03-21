<template>
    <el-select
        :size="size"
        @change="updateValue($event)"
        :placeholder="placeholder"
        :value="value"
        v-model="selector">
        <el-option label="全部" value=""></el-option>
        <el-option v-for="item in options"
                   :label="item"
                   :value="item"
                   :key="item">
        </el-option>
    </el-select>
</template>

<script>
const tags = {
    "article": {
        "9": {
            "tags": ["汽车资讯", "用车百科", "交通安全", "驾考知识", "汽车轶事"]
        },
        "4": {
            "tags": ["名人励志", "励志哲理", "人生感悟"]
        },
        "14": {
            "tags": ["穿搭发型", "时尚明星", "美容美妆"]
        },
        "7": {
            "tags": ["电商资讯", "科学电子", "未来发展"]
        },
        "18": {
            "tags": ["星座盘点", "星座测试"]
        },
        "5": {
            "tags": ["饮食保健", "运动生活", "两性健康"]
        },
        "3": {
            "tags": ["异闻传说", "历史解惑", "未解之谜", "科学探索", "奇闻怪事"]
        },
        "17": {
            "tags": ["孕妈相关", "幼儿教育", "育儿故事", "健康安全"]
        },
        "8": {
            "tags": ["生活窍门", "知识科普", "家居创意"]
        },
        "16": {
            "tags": ["国内游", "境外游", "自驾游", "旅游攻略"]
        },
        "12": {
            "tags": ["家常菜谱", "美食健康", "零食甜品", "美食文化"]
        },
        "10": {
            "tags": ["国内国外", "金融股票", "商业资讯", "民生房产", "保险理财"]
        },
        "11": {
            "tags": ["家庭琐事", "两性矛盾", "情感故事"]
        },
        "6": {
            "tags": ["影视剧情", "综艺节目", "明星八卦", "花边新闻", "明星盘点"]
        },
        "13": {
            "tags": ["篮球", "足球", "体育综合"]
        },
        "2": {
            "tags": ["尴尬瞬间", "美女萌宠", "奇闻奇事", "惊悚经历"]
        },
        "15": {
            "tags": ["兵器武器", "军史文化", "中国军情", "环球军情"]
        }
    },
    "video": {
        "2": {
            "tags": ["原创搞笑", "恶搞囧事", "萌宠萌宝", "相声小品", "奇闻异事"]
        },
        "6": {
            "tags": ["八卦热点", "电视剧频道", "音乐频道", "电影频道", "时尚美妆"]
        },
        "19": {
            "tags": ["游戏频道", "动漫频道"]
        },
        "7": {
            "tags": ["手机频道", "汽车频道", "科技频道"]
        },
        "1": {
            "tags": ["时事热点", "民生新闻", "花边新闻"]
        }
    }
}


export default {
    props: {
        type: {},
        category: {},
        placeholder: {},
        value: {},
        size: {
            type: String,
            default: 'small'
        }
    },
    data() {
        return {
            selector: ''
        }
    },
    mounted () {
        this.selector = this.value;
    },
    computed: {
        options () {
            let { type, category } = this;
            let obj = tags[type][category];
            this.selector = "";
            if (obj && obj.tags) {
                return obj.tags
            }
            return [];
        }
    },
    methods: {
        updateValue (value) {
            this.$emit('input', value);
            this.$emit('change', value);
        }
    }
}
</script>
