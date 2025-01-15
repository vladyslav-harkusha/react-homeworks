import {FC} from "react";

export const NewCarForm: FC = () => {
    return (
        <div className='mt-10 ml-10'>
            <h2 className='text-2xl mb-2'>Add new car:</h2>
            <form className='flex flex-col gap-5 p-5 bg-yellow-200 border-2 border-yellow-800 w-max'>
                <label>
                    <p>Add brand:</p>
                    <input type="text" className='border-2 border-black'/>
                </label>

                <label>
                    <p>Add price:</p>
                    <input type="number" className='border-2 border-black'/>
                </label>

                <label>
                    <p>Add year:</p>
                    <input type="text" className='border-2 border-black'/>
                </label>
            </form>
        </div>
    );
};