const ListAllBook = ({ books, display }) => {

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
                            return (
                                <tbody className="text-slate-600 px-4" key={book.id}>
                                    <tr>
                                        <td>{book.id}</td>
                                        <td className="px-6">{book.title}</td>
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