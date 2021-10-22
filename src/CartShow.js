import React from "react"


function MainCart(props) {
    return (
        <>
            <div className="cards">
        <div className="card">
        <img className="card__img "  src={props.imgscr} alt={props.alt} />
        <div className="card__info">
            <span className="card__category" >{props.title}</span>
            <h3 className="card__title">{props.pera}</h3>
            <a href={props.link} target="_blank" >
                <button>{props.button}</button>
            </a> 
        </div>
        </div>
        </div>
        </>
    )
}

const ShowCart = () => {
   return  (
       <>
            <MainCart
                imgscr = "https://picsum.photos/200/300"
                title = "The favourite nextflix"
                link = "https://www.youtube.com/"             
                button = "Lare"
                pera ="Lorem Ipsum Dalor" 
                alt = "pakistan"

                />  
                <MainCart
                   imgscr = "https://picsum.photos/200/300"
                  title = "The one man is very important"
                  link ="https://www.youtube.com/"
                  button = "Watch this"
                  pera ="The man is "
                  alt = "india" 
                />    
                <MainCart
                    imgscr  = "https://picsum.photos/200/200"
                   title= "legent Usely under high"
                   link ="https://www.youtube.com/"
                    button ="Watch agan"
                    pera ="Lorem Ipsum Dalor"
                    alt = "Africa"
                />     
                <MainCart
                     imgscr = "https://picsum.photos/200/200"
                     title="My Love is One side"
                     link="https://www.youtube.com/"
                     button="Watch Worihz"
                     pera="Lorem Ipsum Dalor is danger been by loyalliti"  
                     alt = "Newzaeland"

                />

                <MainCart
                       imgscr = "https://picsum.photos/200/200"
                       title="Your secrifize in not be able"
                       link="https://www.youtube.com/"
                       button="Check Rules"
                        pera="Some work hard you make money" 
                        alt = "paris"

                />
       </>
   )
}

export default  ShowCart;