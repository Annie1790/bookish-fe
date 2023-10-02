import { useState } from "react";

const Book = ({ book, update }) => {
    const [showInputField, setShowInputField] = useState(false);
    const [newTitle, setNewTitle] = useState(book.title);

    return (
        <tbody className="text-slate-600 px-4" key={book.id}>
            <tr>
                <td>{book.id}</td>
                {
                    showInputField
                        ? (<input
                            type="text"
                            autoFocus
                            onChange={(e) => setNewTitle(e.target.value)}
                            onBlur={() => { setShowInputField(false); update({ "id": book.id, "title": newTitle }); window.location.reload() }}></input>)
                        : (<td
                            onDoubleClick={() => setShowInputField(true)}
                            className="px-6"
                            title="double click to change title">{book.title}</td>)
                }
                <td>{book.qty}</td>
            </tr>
        </tbody>
    )
}

export default Book;