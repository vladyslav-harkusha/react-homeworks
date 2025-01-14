import {FC} from "react";

type Props = {
    page: number;
    usersPerPage: number;
    usersPerPageHandler: (newValue: number) => void;
    pageHandler: (newPage: number) => void;
}
export const Pagination: FC<Props> = ({ page, usersPerPage, usersPerPageHandler, pageHandler }) => {
    const prewPage = page > 1 ? (page - 1) : page;
    const nextPage = 208 > page * usersPerPage ? (page + 1) : page;

    return (
        <div className='p-3 ml-5'>
            <h3 className='text-2xl mb-2'>Page: {page}</h3>
            <label htmlFor='perPage'>
                Users per page:__
                <input
                    min='1'
                    max='100'
                    className='border-2 border-black' 
                    type="number" 
                    id='perPage'
                    value={usersPerPage}
                    onChange={(event) => usersPerPageHandler(+event.target.value)}
                />
            </label>

            <div className='mt-4'>
                <button
                    className='px-2 border-amber-500 border-2 mr-5 bg-amber-100'
                    onClick={() => pageHandler(prewPage)}
                >
                    Prew {usersPerPage}
                </button>

                <button
                    className='px-2 border-amber-500 border-2 mr-5 bg-amber-100'
                    onClick={() => pageHandler(nextPage)}
                >
                    Next {usersPerPage}
                </button>
            </div>
        </div>
    );
};