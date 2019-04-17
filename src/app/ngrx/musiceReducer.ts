
import { Action } from '@ngrx/store';
import { musice } from './musiceModel';
import * as musiceAction from './musiceAction';

export function musiceReducer(state: musice, action: Action): any {
    switch (action.type) {
        case musiceAction.PLAY_VIDEO:
            return action;
        case musiceAction.PAUSE_VIDEO:
            return action;
        case musiceAction.PLAY_PRE_VIDEO:
            return action;
        case musiceAction.PLAY_NEXT_VIDEO:
            return action;
        case musiceAction.CLICK_MUSICE:
            return action;
        case musiceAction.CLICK_MUSICE_LIST:
            return action;
        case musiceAction.ADD_MUSICE:
            return action;
        default:
            return state;
    }
}

