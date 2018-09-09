/**
 * 所有组件的基类
 */

import Base from './Base'
import api from '../api'
import constants from '../common/constants'

export default class Page extends Base {
    protected readonly constants = constants
    // backend api
    protected readonly api = api

}
