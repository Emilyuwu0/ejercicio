import React from 'react'
import BackgroundImage from 'gatsby-background-image'


export default function BackgroundSection({
    img,
    styleClass,
     tittle,
      children
    }){
    return( <BackgroundImage className={styleClass}
       fluid={img}>
           <h1 className="tittle text-white text-uppercase text-center display-4 font-weight-bold">
               {tittle}
                </h1>
                {children}
       </BackgroundImage> 
   );    
}

BackgroundSection.defaultProps={
    tittle:"default tittle",
    styleClass: "default-background"
}
