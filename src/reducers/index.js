import { combineReducers } from 'redux';
import utils from './utils';
import wallet from './wallet';
import walletUI from './walletUI';
import account from './account';
import accountUI from './accountUI';

export default combineReducers({
    utils,
    wallet,
    walletUI,
    account,
    accountUI
});
