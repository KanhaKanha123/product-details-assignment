import { FC } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

interface RatingTypes {
    rating: number
}
export const Rating: FC<RatingTypes> = ({ rating }) => {
    return <>
        {[...Array(5)].map((_, i) => (
            <span key={i}>
                {rating > i ? (<AiFillStar color="gold" fontSize="18px" />) : (<AiOutlineStar fontSize="18px" />)}
            </span>
        ))}
    </>
};