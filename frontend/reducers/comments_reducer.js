import { RECEIVE_POSTS, RECEIVE_POST, REMOVE_POST } from '../actions/post_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER } from '../actions/user_actions';

import { RECEIVE_COMMENT, REMOVE_COMMENT, RECEIVE_COMMENTS } from '../actions/comment_actions';



import merge from 'lodash/merge';

const postsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = merge({}, state);
    switch (action.type) {
        case RECEIVE_COMMENTS:
            return merge({}, action.comments);
        case RECEIVE_COMMENT:
            if (newState[action.comment.postId].comments) {
                newState[action.comment.postId].comments[action.comment.id] = action.comment;
            } else if (newState[action.comment.postId]) {
                newState[action.comment.postId].comments = {};
                newState[action.comment.postId].comments[action.comment.id] = action.comment;
            }
            return newState;
        case REMOVE_COMMENT:
            delete newState[action.comment.postId].comments[action.comment.id];
            return newState;
        default:
            return state;
    }
};

export default postsReducer;