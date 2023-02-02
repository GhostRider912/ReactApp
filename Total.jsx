export default function Total(promp){

    return(
        <>
            <div className="totalprice"><span className="totalspan">Total-<span className="totalamount">{promp.total}/-</span></span></div>
            <div className="end">.</div>
        </>
    )
}