const state = {
    dialogPage: {
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
    },

    profilePage: {
        posts: [
            {
                id: "0",
                text: "Hello everyone. Who can help me with Javascript?",
            },
            { id: "1", text: "React is simpler than Vue!!" },
            { id: "2", text: "React is cool but, Vue is AMAZING" },
        ],
    },
};

export default state;
