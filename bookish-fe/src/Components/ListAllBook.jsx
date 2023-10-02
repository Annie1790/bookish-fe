import { useState } from "react";

const ListAllBook = ({ books, display, update }) => {

    return (
        display ? (
            <table className="table-auto border rounded shadow">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                    </tr>
                </thead>
                {
                    books ? (
                        books.map((book) => {
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
                                                     onBlur={() => {setShowInputField(false); update({"id": book.id, "title": newTitle})}}></input>)
                                                : (<td
                                                     onDoubleClick={() => setShowInputField(true)} 
                                                     className="px-6" 
                                                     title="double click to change title">{book.title}</td>)
                                        }
                                    </tr>
                                </tbody>
                            )
                        })
                    ) : (<div></div>)
                }
            </table>
        ) : (<></>)
    )
}

export default ListAllBook;