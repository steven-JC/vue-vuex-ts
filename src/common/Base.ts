/**
 * 所有组件的基类
 */
import Vue from 'vue'
import util from '../common/util'

export default class Base extends Vue {
    protected readonly util = util
}
