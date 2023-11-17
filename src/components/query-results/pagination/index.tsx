import { Dispatch, SetStateAction } from "react"
import style from "./index.module.css"

interface IPropPagination {
	onPageChange: Dispatch<SetStateAction<number>>,
	currentPage: number
}
export default function Pagination(
	{ onPageChange,
		currentPage }: IPropPagination) {
	return (
		<>
			<div className={style.paginator}>
				{currentPage > 1 && (
					<button onClick={() => onPageChange(1)}>
						1
					</button>
				)
				}

				{
					currentPage !== 1 && (
						<button onClick={() => onPageChange(currentPage - 1)}> 	&#171; </button>
					)
				}
				<p>{currentPage} </p>
				<button onClick={() => onPageChange(currentPage + 1)}> &#187; </button>
				<input type="number" placeholder="Страница" value={currentPage} onChange={(e) => onPageChange(Number(e.target.value))}/>
			</div>
		</>
	)
}
