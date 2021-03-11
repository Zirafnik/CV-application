function TextEducation(props) {
    const {institution, qualification, from, to} = props.state;

    return (
        <div className='text'>
            <p><span className='bold'>Institution: </span>{institution}</p>
            <p><span className='bold'>Qualification: </span>{qualification}</p>
            <p><span className='bold'>From: </span>{from}</p>
            <p><span className='bold'>To: </span>{to}</p>
        </div>
    );
}

export default TextEducation;