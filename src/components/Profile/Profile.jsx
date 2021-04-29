import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

export default function Profile(props) {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <div className={s['profileContent']} >
                <MyPosts 
                    newPostText={props.state.newPostText}
                    posts={props.state.posts}
                    dispatch={props.dispatch}
                />
            </div>
        </div>
    );
}
