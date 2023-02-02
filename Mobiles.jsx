import Cards from "./Cards"
export default function Mobiles(promp){
    let mob=[
        {name:'Redmi note 10',price:10000,img:'img1.jpg'},
        {name:'Redmi note 11',price:12000,img:'img2.png'},
        {name:'Redmi note 9',price:15000,img:'img3.png'},
        {name:'Redmi Zoo',price:11000,img:'img4.jpg'}
    ]
    let c=[]
    for(let i of mob){
        c.push(<Cards setTc={promp.setTc} tc={promp.tc} data={i} total={promp.total} setTotal={promp.setTotal} ></Cards>)
    }

    return(
            <div className="card-container">{c}</div>
    )
}
