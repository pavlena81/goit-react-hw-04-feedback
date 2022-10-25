// import PropTypes from 'prop-types';

import React, { useState } from "react";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { Sections } from 'components/Sections/Sections';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';



 export  const Counter =()=> {
     const[good, setGood] = useState(0);
       const[neutral, setNeutral] = useState(0);
        const[bad, setBad] = useState(0);
     
   
   
   const onHandleFeedback = option  => {
     
     switch (option) {
       case 'good':
         setGood(prevState => prevState + 1);
         break; 
       
       case 'neutral':
         setNeutral(prevState => prevState + 1);
         break; 
       
       case 'bad':
         setBad(prevState => prevState + 1);
         break; 
       
       default:         
         return;
    }
    
   }
  
  
  const onTotalFeedback = () => good + neutral + bad;

  const onPositiveFeedback = () => {
     let positiveFeedback = 0;
     
     const totalFeedback = onTotalFeedback();

     if (totalFeedback > 0) {
       positiveFeedback = Math.round((good * 100) / totalFeedback) ;
     }
     return `${positiveFeedback}%`;
   }

   const options = ['good', 'neutral', 'bad'];
    
     return (
     <div>       
        
       <Sections title={'Please leave feedback'} >

         <FeedbackOptions
            options={options}             
            onHandleFeedback={onHandleFeedback}
         />
       </Sections> 
       <Sections title={'Statistics'}>
             {onTotalFeedback() ? (
         <Statistics
           Good={setGood}
           Neutral={setNeutral}
           Bad={setBad}
           Total={onTotalFeedback()}
           positivePercentage={onPositiveFeedback()}  
         />            
             ) : (
              Notify.info('There is no feedback'))      
           }             
                 
       </Sections>
     </div>
     );
   }
 


