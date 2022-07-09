import React, { useState } from "react";
import { RateTypes } from "./rate_types";
import { FillStar, OutlineStar, RateContainer } from "../styles/rate.style";

const Rate: React.FC<RateTypes> = ({starStyle, ...props}: RateTypes) => {
    

    const [rating, setRating] = useState(props.defaultRate? props.defaultRate : 0);
    const [hover, setHover] = useState(0);
    const handleButtonClick = (index: number) => {
      props.editable && setRating(index);
    }

    const handleOnMouseEnter = (index: number) => {
      props.editable && setHover(index);
    }

    const handleOnMouseLeave = (rating: number) => {
      props.editable && setHover(rating);
    }
    
    return(
        <RateContainer>
        {[...Array(5)].map((star, index: number) => {
          index += 1;
          return (
            <div
              key={index}
              onClick={() => handleButtonClick(index)}
              onMouseEnter={() => handleOnMouseEnter(index)}
              onMouseLeave={() => handleOnMouseLeave(rating)}
            >
              {index <= (rating || hover)? <FillStar {...props}/> : 
              (starStyle == 'filled' ? <FillStar {...props} color={'rgb(225, 225, 225)'}/> : <OutlineStar {...props}/>)}
            </div>
          );
        })}
      </RateContainer>
    )
}

Rate.defaultProps = {
  editable: true,
}

export default Rate;