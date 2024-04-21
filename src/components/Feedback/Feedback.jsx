import { useState } from "react";
import Button from "../Button/Button";
import "./styles.css"

const FeedBack = () => {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

    return (
        <div className="dis-likes-container">
            <Button type='button' onButtonClick={() => setLikes(prevCount => prevCount + 1)} name='Like' />
            <p>{likes}</p>
            <Button type='button' onButtonClick={() => setDislikes(prevCount => prevCount + 1)} name='Dislike' />
            <p>{dislikes}</p>
            <Button type='button' onButtonClick={() => {setLikes(0); setDislikes(0);}} name='Reset' />
        </div>
    )
}

export default FeedBack;