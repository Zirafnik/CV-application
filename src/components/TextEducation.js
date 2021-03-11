function TextEducation(props) {
    const {institution, qualification, from, to} = props.state;

    return (
        <div>
            <p>Institution: {institution}</p>
            <p>Qualification: {qualification}</p>
            <p>From: {from}</p>
            <p>To: {to}</p>
        </div>
    );
}

export default TextEducation;