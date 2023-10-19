import React from 'react';
import style from './Contact.module.scss';

type PropsType = {
    contactTitle: string
    contactValue: string | null
}

const Contact = (props: PropsType) => {
    return (
        <div className={style.contactContainer}>
            <b>{props.contactTitle}</b>: {props.contactValue}
        </div>
    );
};

export default Contact;


/*

<div>{props.profile.contacts.vk}</div>
<div>{props.profile.contacts.facebook}</div>
<div>{props.profile.contacts.github}</div>
<div>{props.profile.contacts.instagram}</div>
<div>{props.profile.contacts.youtube}</div>
<div>{props.profile.contacts.twitter}</div>
<div>{props.profile.contacts.mainLink}</div>*/
