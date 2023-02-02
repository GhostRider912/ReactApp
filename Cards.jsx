    import { useState } from "react"

    export default function Cards(promp){

        // console.log(promp.data.name)
        let [count,setCount]=useState(1)
        let [add,setAdd]=useState(false)
        function countmm(){
            if(count>0)
            setCount(count-1)
            if(count===1){
            setCount(1)
            setAdd(false)
            promp.setTc(promp.tc-1)
            }
            promp.setTotal(promp.total-promp.data.price)
        }
        function countpp(){
            setCount(count+1)
            promp.setTotal(promp.total+promp.data.price)
        }
        function addclicked(){
            setAdd(true);
            promp.setTc(promp.tc+1)
            promp.setTotal(promp.total+promp.data.price)
        }
        function removeclicked(){
            setAdd(false)
            promp.setTotal(promp.total-(promp.data.price*count))
            setCount(1)
            promp.setTc(promp.tc-1)
        }
        return(
            <>
                <div className="card">
                <div className="card-wrapper">
                    <div className="mobile-img">
                            <img className="imag" src={promp.data.img} />
                    </div>
                    <center>
                        <h3><span className="mtitle">{promp.data.name}</span></h3>
                        </center>
                    </div> 
                    <div className="mobdata">
                        <p><u>Name</u> :<span className="mname">{promp.data.name}</span> </p>
                        <p><u>Price</u> : <span className="mprice">{promp.data.price}/-</span></p>
                        {add &&<div className="quantity">
                            <button className="count-btn" onClick={countmm}>-</button>
                            {count}
                            <button className="count-btn" onClick={countpp}>+</button>
                        </div>}
                        {!add &&<button onClick={addclicked} className="addcart">Add</button>}
                        {add &&<button onClick={removeclicked} style={{backgroundColor:"red"}} className="addcart">Remove</button>}
                    </div>
                </div>
            </>
        )
    }