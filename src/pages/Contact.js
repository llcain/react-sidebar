const Contact = () => {
    return (
        <div>
            <h1>Contact Us page</h1>
            <form action="post">
                <label for="fname">First Name:</label><br/>
                <input type="text" id="fname" name="fname"/><br/>
                <label for="lname">Last Name:</label><br/>
                <input type="text" id="lname" name="lname"/><br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
     );
}
 
export default Contact;