import React from 'react';
import style from './Paginator.module.scss'


type PropsType = {
    pageSize: number
    totalCount: number
    currentPage: number
    onClickPageChange: (p: number) => void
}


export const Paginator = (props: PropsType) => {

    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages: Array<number> = [];
    for (let i: number = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div className={style.paginatorContainer}>
        {pages.map(p => {
            return <span key={p}
                         className={props.currentPage === p ? style.selectedPage : style.nonSelectedPage}
                         onClick={(e) => {
                             props.onClickPageChange(p)
                         }}>
                            {p}
                        </span>
        })}
    </div>

}
