function TextEducation(props) {
    const {company, position, from, to, description} = props.state;

    return (
        <div>
            <p>Company: {company}</p>
            <p>Position: {position}</p>
            <p>From: {from}</p>
            <p>To: {to}</p>
            <p className='italic'>{description}</p>
        </div>
    );
}

export default TextEducation;