import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Rating} from "./Rating";

export default {
    title: 'Rating stories',
    component: Rating,
};

export const EmptyStars = () => <Rating value={0} setValue={x=>x} />
export const Rating1 = () => <Rating value={1} setValue={x=>x} />
export const Rating2 = () => <Rating value={2} setValue={x=>x} />
export const Rating3 = () => <Rating value={3} setValue={x=>x} />
export const Rating4 = () => <Rating value={4} setValue={x=>x} />
export const Rating5 = () => <Rating value={5} setValue={x=>x} />
export const ChangeRating = () => {
    const [rating, setRating] = useState(3)
    return <Rating value={rating} setValue={setRating} />
}