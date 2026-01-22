import React, {useState} from "react";

function Form(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUserName] = useState("");

    return(
        <div>
            <div>
                <form>
                    <label>
                        Name:
                    </label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                    <br />
                    <label>
                        Email:
                    </label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <br />
                    <label>
                        Username:
                    </label>
                    <input type="text" value={username} onChange={(e) => setUserName(e.target.value)}/>
                    <br />
                    <button type="submit">Submit</button>
                    <br />
                </form>
            </div>

            <div>
                <h2>Name: {name}</h2>
                <h2>Email: {email}</h2>
                <h2>Username: {username}</h2>
            </div>
        </div>
    );

}

export default Form;