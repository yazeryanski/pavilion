import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

export default function Profile(props) {
    return (
        <div className={s.profile}>
            <ProfileInfo/>

            <div className={s['profileContent']} >
                <MyPosts posts={props.state.posts}/>
            </div>
        </div>
    );
}
