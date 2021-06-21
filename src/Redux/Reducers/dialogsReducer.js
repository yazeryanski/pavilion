const ADD_MESSAGE = "ADD-MESSAGE";

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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [
                    ...state.messages,
                    {
                        id: state.messages.length, //AutoIncrement ID
                        text: action.newMessageBody,
                        date: new Date().toLocaleString(),
                        who: "me",
                    },
                ],
            };
        default:
            return state;
    }
};

export default dialogsReducer;
