import React, {useState} from 'react';
import style from './Paginator.module.scss'


type PropsType = {
    pageSize: number
    totalCount: number
    currentPage: number
    onClickPageChange: (p: number) => void
    portionSize: number
}


export const Paginator = (props: PropsType) => {

    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages: Array<number> = [];
    for (let i: number = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / props.portionSize)

    let [portionNumber, setPortionNumber] = useState(1)

    let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1
    let rightPortionPageNumber = portionNumber * props.portionSize


    return <div className={style.paginatorContainer}>
        {portionNumber > 1 &&
        <button onClick={() => {
            setPortionNumber(portionNumber - 1)
        }}>PREV</button>
        }


        {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(p => {
                return <span key={p}
                             className={props.currentPage === p ? style.selectedPage : style.nonSelectedPage}
                             onClick={(e) => {
                                 props.onClickPageChange(p)
                             }}>
                            {p}
                        </span>
            })}

        {portionCount > portionNumber &&
        <button onClick={() => {
            setPortionNumber(portionNumber + 1)
        }}>NEXT</button>}

    </div>

}
