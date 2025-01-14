import {FC} from "react";
import {useSearchParams} from "react-router-dom";

export const Pagination: FC = () => {
    const [searchParams, setSearchParams] = useSearchParams({ page: '1', limit: '10'});

    const currPage = searchParams.get('page') || '1';
    const usersPerPage = searchParams.get('limit') || '10';
    const prewPage = +currPage > 1 ? (+currPage - 1) : +currPage;
    const nextPage = 208 > +currPage * +usersPerPage ? (+currPage + 1) : +currPage;

    return (
        <div className='p-3 ml-5'>
            <h3 className='text-2xl mb-2'>Page: {currPage}</h3>
            <label htmlFor='perPage'>
                Users per page:__
                <input
                    min='1'
                    max='100'
                    className='border-2 border-black' 
                    type="number" 
                    id='perPage'
                    value={usersPerPage}
                    onChange={(event) => setSearchParams({ page: currPage, limit: event.target.value })}
                />
            </label>

            <div className='mt-4'>
                <button
                    className='px-2 border-amber-500 border-2 mr-5 bg-amber-100'
                    onClick={() => setSearchParams({ page: prewPage.toString(), limit: usersPerPage })}
                >
                    Prew {usersPerPage}
                </button>

                <button
                    className='px-2 border-amber-500 border-2 mr-5 bg-amber-100'
                    onClick={() => setSearchParams({ page: nextPage.toString(), limit: usersPerPage })}
                >
                    Next {usersPerPage}
                </button>
            </div>
        </div>
    );
};