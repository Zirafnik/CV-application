function TextGeneral(props) {
    const {firstName, lastName, email, phone} = props.state;

    return (
        <div className='text'>
            <p><span className='bold'>First Name: </span>{firstName}</p>
            <p><span className='bold'>Last Name: </span>{lastName}</p>
            <p><span className='bold'>Email: </span>{email}</p>
            <p><span className='bold'>Phone Number: </span>{phone}</p>
        </div>
    );
}

export default TextGeneral;