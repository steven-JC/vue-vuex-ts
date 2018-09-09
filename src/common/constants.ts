import * as enums from './enum';
import util from './util';

let constants = Object.assign({}, enums);

util.deepFreeze(constants);

export default constants;
