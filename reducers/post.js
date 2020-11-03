export const initialState = {
    mainPosts : [{
        id : 1,
        User : {
            id : 1,
            nickname : '제로초',
        },
        content : '첫번째 게시글 #해시태그 #익스프레스',
        Images : [{
            src : 'https://opgg-static.akamaized.net/images/lol/champion/Heimerdinger.png?image=q_auto,w_45&v=1603864069'
        },{
            src : 'https://opgg-static.akamaized.net/images/lol/champion/Heimerdinger.png?image=q_auto,w_45&v=1603864069'
        },{
            src : 'https://opgg-static.akamaized.net/images/lol/champion/Heimerdinger.png?image=q_auto,w_45&v=1603864069'
        }],
        Comments : [{
            User : {
                nickname : 'nero',
            },
            content : '얼른 사고싶어요~'
        }],
    }],
    imagePaths:[],
    postAdded : false
}

const ADD_POST = 'ADD_POST';
export const addPost = {
    type : ADD_POST
};

const dummyPost = {
    id : 2,
    content : '더미데이터입니다.',
    User : {
        id : 1, 
        nickname : '제로초'
    },
    Images : [],
    Comments : [],
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST : 
            return {
                ...state,
                mainPost : [dummyPost, ...state.mainPosts],
                postAdded : true,
            };
        default : 
            return state;
    }
};

export default reducer;