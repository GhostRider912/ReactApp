export default function Headers(promp){
    let total_quantity=promp.tc
    return( <>
       <header>Mobiles
       <div className="carticon" ><div className="total_count">{total_quantity}</div><i class="fa-solid fa-cart-shopping"></i></div>
       </header>
       </>
    )
}