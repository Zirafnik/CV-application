function TextEducation(props) {
    const {company, position, from, to, description} = props.state;

    return (
        <div className='text'>
            <p><span className='bold'>Company: </span>{company}</p>
            <p><span className='bold'>Position: </span>{position}</p>
            <p><span className='bold'>From: </span>{from}</p>
            <p><span className='bold'>To: </span>{to}</p>
            <p className='italic'>{description}</p>
        </div>
    );
}

export default TextEducation;