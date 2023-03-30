import React from 'react';
import { toast } from 'react-toastify';

const Button = ({ children }) => {
    const notify = () => {
        toast("You Are Write !!!")
        toast("Task Complete !!!")

    };
    return (
        <>
            <button onClick={notify} className="btn btn-outline btn-success">{children}</button>
        </>
    );
};

export default Button;