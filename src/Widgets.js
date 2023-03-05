import React from 'react';
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info"
import { FiberManualRecord } from '@material-ui/icons';
function Widgets() {

    const newsArticle = (heading,subtitle) => (
        <div className='widgets__article'>
         
         <div className='widgets__articleLeft'>
         <FiberManualRecord/>
         </div>
           
         <div className='widgerts__articleRight'>
             <h4>{heading}</h4>
             <p>{subtitle}</p>
           </div>
        
        </div>
    )
  return (
    <div className='widgets'>
       <div className='widgets__header'>
        <h2>LinkedIn News</h2>
        <InfoIcon />
        

        </div>  

    {newsArticle("Chatgpt is banned in india","Top news - 999 readers")}
    {newsArticle("A message to Russia, China via Quad","Top news - 999 readers")}
    {newsArticle("A bribe of Rs 40 lakh and a recovery of Rs 6 crore","Top news - 999 readers")}
    {newsArticle("After snapping ties, BJP’s back to Conrad","Top news - 999 readers")}
    {newsArticle("Facebook Parent Meta to Modify Cross-Check Feature for VIP Posts","Meta declined to publicly label which accounts get preferred treatment when it comes to content filtering decisions.")}
    {newsArticle("Chatgpt is banned in india","Top news - 999 readers")}

    </div>
  )
}

export default Widgets
