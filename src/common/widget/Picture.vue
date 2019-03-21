<template>
    <div class="image-box" v-loading="isLoading">
        <div class="image-tip" v-text="tip"></div>
        <div class="image-show" v-show="isSuccess" :style="{backgroundImage: 'url(' + imageUrl + ')'}">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'pictureCove',
        props: {
            url: {
                type: String
            }
        },
        data: () => {
            return {
                isLoading: true,
                isSuccess: false,
                imageUrl: '',
                tip: ''
            }
        },
        watch: {
            url: function () {
                this.removeImage();
                this.getImage();
            }
        },
        methods: {
            getImage(){
                this.timerHander = 0;
                this.isSuccess = false;
                this.imageUrl = '';
                if(this.url){
//                this.url = 'xxx';
                    let image = new Image();
                    let that = this;
                    this.tip = '图片加载中...'
                    image.onload = function () {
                        that.isSuccess = true;
                        that.isLoading = false;
                        that.tip = '';
                        that.imageUrl = that.url;
//                        that.$el.querySelector('.image-show').appendChild(image);
                        clearTimeout(that.timerHander);
                    }
                    image.onerror = function () {
                        that.isLoading = false;
                        that.tip = '图片加载失败！';
                        clearTimeout(that.timerHander);
                    }
                    that.timerHander = setTimeout( () => {
                        if(that.isLoading){
                            that.isLoading = false;
                            that.tip = '图片加载超时！'
                        }
                    }, 10000);
                    image.src = that.url;
                } else {
                    this.tip = '没有图片地址！'
                }
            },
            removeImage(){
//                this.$el.querySelector('.image-show').innerHTML = '';
                clearTimeout(this.timerHander);
            }

        },
        mounted() {
            this.getImage();
        },
        beforeDestroy(){
            clearTimeout(this.timerHander);
        }
    }
</script>

<style lang="less">
    .image-box {
        display: inline-block;
        position: relative;
        background-color: #eeeeee;
        /*border: 1px solid #333333;*/
        box-shadow: 0 0 2px rgba(0, 0, 0, .2);
        .image-tip {
            position: absolute;
            display: block;
            height: 24px;
            line-height: 24px;
            margin-top: -12px;
            width: 100%;
            text-align: center;
            top: 50%;
            font-size: 12px;
        }

        .image-show {
            position: absolute;

            width: 100%;
            height: 100%;
            background-repeat: no-repeat;
            background-size: cover;

            img {
                height: 100%;
                margin: auto;
                z-index: 1;
                display: block;
            }
        }
    }
</style>
