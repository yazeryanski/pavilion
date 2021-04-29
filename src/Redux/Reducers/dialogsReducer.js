const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const initialState = {
    dialogs: [
        { id: "1", name: "Suren Sahakyan" },
        { id: "2", name: "Hunan Avetisyan" },
        { id: "3", name: "Lendrush Sargsyan" },
        { id: "4", name: "Balabek Kirakosyan" },
        { id: "5", name: "Serj Seyranyan" },
    ],

    messages: [
        {
            id: "1",
            text: "Hello, How are you",
            date: "22/05/2021 15:25",
            who: "me",
        },
        {
            id: "2",
            text: "Hi, I'm fine. And how are you?",
            date: "22/05/2021 15:25",
            who: "notme",
        },
        {
            id: "3",
            text: "I'm too, thx",
            date: "22/05/2021 15:25",
            who: "me",
        },
    ],

    newMessageText: "",
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            state.messages.push({
                id: state.messages.length, //AutoIncrement ID
                text: state.newMessageText,
                date: new Date().toLocaleString(),
                who: 'me'
            });
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.val;
            return state;
        default:
            return state;
    }
};

export default dialogsReducer;
