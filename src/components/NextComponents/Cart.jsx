import React, { useEffect, useState } from 'react';


const Cart = ({ watchTime }) => {

    const [time, setTime] = useState(watchTime)
    const [breakTime, setBreakTime] = useState(0)



    //help you from uneccessary error and help to reduce loading task
    useEffect(() => {
        const previousWatchTime = JSON.parse(localStorage.getItem("watchTime"))
        setTime(previousWatchTime);
        //For breaktime
        const previousBreakTime = JSON.parse(localStorage.getItem("btTime"))
        if (previousBreakTime == null) {
            const newTime = "Nothing found !!!";
            setBreakTime(newTime);

        } else {
            // const previousTime = JSON.parse(localStorage.getItem("btTime"))
            setBreakTime(previousBreakTime);
        }
    }, [watchTime])




    const handleBreakTime = (bt) => {
        // const previousTime = JSON.parse(localStorage.getItem("btTime"))

        localStorage.setItem("btTime", bt)
        setBreakTime(bt)
    }

    return (
        <>
            <div className="mockup-phone border-primary w-72 h-fit">
                <div className="camera"></div>
                <div className="display">
                    <div className="stack">
                        <div className="card shadow-md bg-primary text-primary-content">
                            <div className="card-body">
                                <h1 className='mx-12'>
                                    <svg className='w-12' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
                                    </svg>
                                </h1>
                                <h2 className="card-title ml-2 font-bold">Watch Time</h2>
                                <button className='btn btn-error rounded-full border-2 border-blue-900'>{time}</button>
                            </div>
                        </div>
                        <div className="card shadow bg-primary text-primary-content">
                            <div className="card-body">
                                <h2 className="card-title">Notification 2</h2>
                                <p>You have 3 unread messages. Tap here to see.</p>
                            </div>
                        </div>
                        <div className="card shadow-sm bg-primary text-primary-content">
                            <div className="card-body">
                                <h2 className="card-title">Notification 3</h2>
                                <p>You have 3 unread messages. Tap here to see.</p>


                            </div>

                        </div>
                    </div>
                    <div className="m-4 btn-group grid grid-cols-4">
                        <button onClick={() => handleBreakTime(10)} className="btn btn-outline">10</button>
                        <button onClick={() => handleBreakTime(20)} className="btn btn-outline">20</button>
                        <button onClick={() => handleBreakTime(30)} className="btn btn-outline">30</button>
                        <button onClick={() => handleBreakTime(40)} className="btn btn-outline">40</button>
                    </div>
                    {/* <button className='btn btn-success'>{breakTime}</button> */}
                    <input type="text" value={breakTime} className="input input-bordered input-warning w-48 max-w-xs " />

                    <progress className="progress progress-info w-56" value="40" max="100"></progress>
                    <progress className="progress progress-info w-56" value="70" max="100"></progress>
                    <progress className="progress progress-info w-56" value="100" max="100"></progress>
                    <div className="artboard artboard-demo phone-1">

                    </div>
                </div>
            </div>

        </>
    );
};

export default Cart;