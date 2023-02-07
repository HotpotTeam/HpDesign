<template>
    <div class="xxx_select" :style="styleVar" >
        <div class="divSelect" :class="{ 'drop_down': isListShow }" ref="divSelect" >
            <div class="divSelectinput" @click="dropDownSelect">
                <!-- 选中后的内容 -->
                <div class="selectinfos" :title="label" :class="{ 'no_select': label == '请选择' }"> {{ label }} </div>
                <!-- 三角形图标 -->
                <!-- <i class="imgthree fa fa-caret-up" :class="{ 'is-reverse': isListShow }"></i> -->
            </div>
        </div>
        <!-- 下拉框列表 -->
        <transition name="drop-down" >
            <div class="Selectlist" v-show="isListShow" ref="dropDown">
                <div class="select_triangle"></div>
                <ul class="xxx_option_list">
                    <slot name="xxx_option"></slot>
                </ul>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name:'xxx_select',
    components: {},
    props: {
        placeholder: {
            type: String,
            default: '请选择'
        },
        width: {
            type: Number,
            default: 180
        },
        height: {
            type: Number,
            default: 40
        },
    },
    data() {
        return {
            label: '',
            isListShow: false,
            optionid: ''
        };
    },
    created() {
        this.label = this.placeholder;
    },
    mounted() {
        let _this = this;
        document.addEventListener("click", function( e ){
            if(_this.$refs.divSelect) {
                if ( !!_this.$refs.divSelect.contains(e.target) || !!_this.$refs.dropDown.contains(e.target) ) 
                    return;
                else
                    _this.isListShow = false;
            }   
        })
    },
    computed: {
        styleVar() {
            return {
                '--select-height': this.height + 'px',
                '--select-width': this.width + 'px'
            }
        }
    },
    methods: {
        dropDownSelect() {
            this.isListShow = !this.isListShow;
        },
    },
};
</script>
<style scoped>
    .xxx_select {
        border: 1px solid #E6E6E6;
        border-radius: 5px;
        height: var(--select-height);
        width: var(--select-width);
        line-height: var(--select-height);
    }
    .divSelect {
        width: 100%;
        height: 100%;
        border-radius: 5px;
    }
    .drop_down {
        box-shadow: 0px 0px 6px #709DF7;
    }
    .divSelectinput {
        width: calc(100% - 20px);
        height: 100%;
        margin: 0 5px 0 15px;
        display: flex;
    }
    .selectinfos {
        width: 87.5%;
        cursor: pointer;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .no_select {
        color: #D3DCE6;
    }
    .imgthree {
        width: 12.5%;
        line-height: var(--select-height);
        text-align: center;
        transform: rotate(180deg);
        transition: all 0.3s;
    }
    .imgthree:before {
        cursor: pointer;
        color: #D3DCE6;
    }
    .imgthree.is-reverse {
        transform: rotate(0deg);
    }

    .Selectlist {
        margin-top: 10px;
        z-index: 800;
        position: relative;
        background-color: #fff;
    }
    .xxx_option_list {
        border-radius:5px;
        border:1px solid #E4E7ED;
        width: 100%; 
        padding: 3px 0px;
        box-shadow: 0px 0px 6px #709DF7;
        background-color: #fff;
        margin: 0;
    }
    .select_triangle {
        width: 14px;
        height: 7px;
        position: relative;
        left: 15px;
    }
    .select_triangle::before {
        position: absolute;
        content: "";
        left: 0px;
        width: 0;
        height: 0;
        border-top: 0px solid transparent;
        border-left: 9px solid transparent;
        border-right: 9px solid transparent;
        border-bottom: 8px solid #EBEEF5;
    }
    .select_triangle::after {
        position: absolute;
        left: 2px;
        top: 2px;
        content: "";
        width: 0;
        height: 0;
        border-top: 0px solid transparent;
        border-left: 7px solid transparent;
        border-right: 7px solid transparent;
        border-bottom: 8px solid #fff;  
    }
    .drop-down-enter {
        opacity: 0;
        transform:translate(0px, -80px) scaleY(0.2);
    }
    .drop-down-leave-to {
        opacity: 0;
        transform:translate(0px, -80px) scaleY(0.2);
    }
    .drop-down-enter-active {
        transition: all 0.5s ease-in;
    }
    .drop-down-leave-active {
        transition: all 0.5s ease;
    }
</style>
