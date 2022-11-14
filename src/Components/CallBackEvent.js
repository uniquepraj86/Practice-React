import React from "react";

function CallBackEvent() {
    const [text, setText] = React.useState("");
    const handleChange = (index) => {
        console.log("Select Index:" + index);
    };

    const userList = [
        {
            id: 1,
            name: "Panali",
            city: "Pune"
        },
        {
            id: 2,
            name: "Praj",
            city: "Mumbai"
        }

    ];

    return (
        <div>
            <h1> CallBack Event Handaling</h1>
            <p>Text is:{text}</p>

            <CheckCallback userList={userList} handleEdit={handleChange} />

        </div>


    );
}

function CheckCallback({ userList, handleEdit }) {
    return (
        <div>
            <ul>
                {userList.map((user, index) => (
                    <div key={index}>
                        <li>{user.id + " |" + user.name + " |" + user.city}</li>
                        <button onClick={() => handleEdit(index)}>Edit</button>
                    </div>
                ))}
            </ul>
        </div>
    );
}
export default CallBackEvent;