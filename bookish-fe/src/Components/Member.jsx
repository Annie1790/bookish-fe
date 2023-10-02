import { useState } from "react";

const Member = ({ user, update }) => {
    const [showInputField, setShowInputField] = useState(false);
    const [newName, setNewName] = useState(user.username);

    return (
        <tbody className="text-slate-600 px-4" key={user.id}>
            <tr>
                <td>{user.id}</td>
                {
                    showInputField
                        ? (<input
                            type="text"
                            autoFocus
                            onChange={(e) => setNewName(e.target.value)}
                            onBlur={() => { setShowInputField(false); update({ "id": user.id, "username": newName }); window.location.reload() }}></input>)
                        : (<td
                            onDoubleClick={() => setShowInputField(true)}
                            className="px-6"
                            title="double click to change title">{user.username}</td>)
                }
            </tr>
        </tbody>
    )
}

export default Member;