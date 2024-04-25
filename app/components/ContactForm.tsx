import React from 'react'

const ContactForm = () => {
    const passData = (event: any) => {
        event.preventdefault();
        const contactData = {
            email: event.target.name.value,
            company: event.target.name.value,

        }

    }
    return (<>
        <div>Contact Us</div>
        <form>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="company">Company name</label>
            <input type="text" name="company" id="company" />
            <label htmlFor="name">Conact name</label>
            <input type="text" name="yourname" id="name" />
            <label htmlFor="message">Tell us about your project</label>
            <input type="text" name="message" id="massage" maxLength={200} />
            <button type='submit'>Send</button>
        </form>
    </>
    )
}

export default ContactForm;