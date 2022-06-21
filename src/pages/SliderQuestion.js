import React from "react";
import Carousel from 'react-material-ui-carousel'
import Question from "../components/Question";



const SliderQuestion = ()=>{


    var items = [
        {
            ques: "1 .Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus",
            option1: "option1",
            option2: "option2",
            option3: "option3",
            option4: "option4",


        },
        {
            ques: "2 Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus",
            option1: "option1",
            option2: "option2",
            option3: "option3",
            option4: "option4",


        },
        {
            ques: "3 Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus",
            option1: "option1",
            option2: "option2",
            option3: "option3",
            option4: "option4",


        },
        {
            ques: "4 Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus",
            option1: "option1",
            option2: "option2",
            option3: "option3",
            option4: "option4",


        },
        {
            ques: "5 Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus",
            option1: "option1",
            option2: "option2",
            option3: "option3",
            option4: "option4",


        },
    ]


    const arraynum = [ 1 , 2 , 3 , 4 , 5 ];

return (


    <Carousel   navButtonsWrapperProps={{   // Move the buttons to the bottom. Unsetting top here to override default style.
        style: {
            bottom: '0',
            top: 'unset'
        }
    }} 
    
    NextIcon='next'             // Change the "inside" of the next button to "next"
    PrevIcon='prev' 
    fullHeightHover={false}
    
    navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
        style: {
            backgroundColor: '#dd33fa',
            borderRadius: "12px",
            height:"40px",
            width:"80px"
            
        }
    }} 
    
    autoPlay={false}
    animation="slide"
    indicators={true}
    navButtonsAlwaysVisible={true}
    cycleNavigation={false}
    IndicatorIcon={arraynum}

    indicatorIconButtonProps={{
        style: {
            padding: '5px',    // 1
            color: 'black'       // 3
        }
    }}

    activeIndicatorIconButtonProps={{
        style: {
            backgroundColor: 'white' // 2
        }
    }}

    indicatorContainerProps={{
        style: {
            marginTop: '20px', // 5
            textAlign: 'center' // 4
        }

    }}
     
    >
            {
                items.map( (item, i) => <Question key={i} item={item} /> )
            }
    </Carousel>

);


}

export default SliderQuestion;