import style from './Post.module.scss';
import {Ava} from '../../profile/avaPersonalData/ava/Ava';





type PropsType = {
    id: string
    message: string
    likesCount: number
}

export const Post = (props: PropsType) => {
    return (
        <div className={style.postContainer}>

            <div className={style.avaPost}>
                <Ava/>
            </div>

            <div className={style.text}>
                {props.message}
            </div>

            <div className={style.likesContainer}>
                <div className={style.likeImg}></div>
                <div className={style.likesCount}>{props.likesCount}</div>
            </div>

        </div>
    )
};
