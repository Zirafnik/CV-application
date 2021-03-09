function Text(props) {
    const {firstName, lastName, email, phone} = props.state;

    return (
        <div>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Phone Number: {phone}</p>
        </div>
    );
}

export default Text;