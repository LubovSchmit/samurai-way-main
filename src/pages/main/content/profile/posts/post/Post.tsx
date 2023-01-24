import style from './Post.module.scss';
import {Ava} from '../../avaPersonalData/ava/Ava';


type PostType = {
   /* id: number*/
    message: string
}


export const Post = (props: PostType) => {
    return (
        <div className={style.postContainer}>

            <div className={style.avaPost}>
                <Ava/>
            </div>

            <div className={style.text}>
                {props.message}
            </div>

        </div>
    )
};
