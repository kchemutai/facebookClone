import { Avatar } from '@material-ui/core'
import { green } from '@material-ui/core/colors'
import { DragHandle, InsertEmoticon, PhotoLibrary, Videocam } from '@material-ui/icons'
import React, { useState } from 'react'
import './MessageSender.css'
import { useStateValue } from './StateProvider'
import db from './firebase'
import firebase from 'firebase'

function MessageSender() {
    const [{ user }, dispatch] = useStateValue()
    const [input, setInput] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl
        })
        // clear the fields when the form is submitted
        setInput('')
        setImageUrl('')
    }
    return (
        <div className='messageSender'>
            <div className='messageSender__top'>
                <Avatar src={user.photoURL} />
                <form>
                    <input
                        placeholder={`Whats on your mind ${user.displayName}?`}
                        className="messageSender__input"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <input
                        placeholder="Image url? (Optional)"
                        className="messageSender__img"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                    />
                    <button type="submit" onClick={handleSubmit} className='messageSender_submitBtn'>Hidden Submit</button>
                </form>
            </div>
            <div className='messageSender__bottom'>
                <div className="MessageSender__option">
                    <Videocam style={{ color: "red" }} />
                    <h3>Live Video</h3>
                </div>
                <div className="MessageSender__option">
                    <PhotoLibrary style={{ color: "green" }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="MessageSender__option">
                    <InsertEmoticon style={{ color: "orange" }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
