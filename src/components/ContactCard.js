import React from 'react';
import profPic from '../Assets/profPic.jpg';
import chat from '../Assets/chat.png';
import phone from '../Assets/phone.png';

export default function ContactCard(props) {
    return (
        <div className='contactCard'>
            <img className='profilePic' src={profPic}/>
            <h2>{props.firstName} {props.lastName}</h2>
            <p>{props.jobTitle}</p>
            <p>{props.region}</p>
            <div className='contactButtonsCont'>
                <a href={props.phoneNumber} className='contactButton'>
                    <img className='icon' src={phone}/>
                    <h2>Call</h2>
                </a>
                <a href={props.emailAddress} className='contactButton'>
                    <img className='icon' src={chat}/>
                    <h2>Chat</h2>
                </a>
            </div>
        </div>
    )
}
