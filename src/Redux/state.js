const store = {
    // State
    _state: {
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

            newMessageText: '',
        },

        profilePage: {
            posts: [
                {
                    id: "0",
                    text: "Hello everyone. Who can help me with Javascript?",
                    date: "3/23/2021, 11:09:27 PM",
                },

                {
                    id: "1",
                    text: "React is simpler than Vue!!",
                    date: "3/23/2021, 11:09:27 PM",
                },
                {
                    id: "2",
                    text: "React is cool but, Vue is AMAZING",
                    date: "3/23/2021, 11:09:27 PM",
                },
            ],
            newPostText: "",
        },
    },

    getState() {
        return this._state;
    },

    // Actions
    _actions: {
        // Profile page
        addPost() {
            this._state.profilePage.posts.push({
                id: this._state.profilePage.posts.length, //AutoIncrement ID
                text: this._state.profilePage.newPostText,
                date: new Date().toLocaleString(),
            });
            this._callSubscriber(this.getState());
        },

        updateNewPostText(args) {
            this._state.profilePage.newMessageText = args.val;
            this._callSubscriber(this.getState());
        },

        // Dialogs page
        addMessage() {
            this._state.dialogPage.messages.push({
                id: this._state.dialogPage.messages.length, //AutoIncrement ID
                text: this._state.dialogPage.newMessageText,
                date: new Date().toLocaleString(),
            });
            this._callSubscriber(this.getState());
        },

        updateNewMessageText(args) {
            this._state.dialogPage.newMessageText = args.val;
            this._callSubscriber(this.getState());
        },
    },

    // Action dispatcher //action ~= {type: 'addPost' , args: ['aaa', 12]}
    dispatch(action) {
        let func = this._actions[action.type];
        func.bind(this)(action.args);
    },


    // Another Methods
    _callSubscriber() {
        console.log("State Changed");
    },

    setSubscriber(observer) {
        this._callSubscriber = observer;
    },
};
window.store = store;
export default store;
