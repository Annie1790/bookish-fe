import Book from "./Book";

const ListAllBook = ({ books, display, update }) => {

    return (
        display ? (
            <table className="table-auto border rounded shadow">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Available</th>
                    </tr>
                </thead>
                {
                    books ? (
                        books.map((book) => {
                            return <Book key={book.id} book={book}  update={update}/>
                        })
                    ) : (<div></div>)
                }
            </table>
        ) : (<></>)
    )
}

export default ListAllBook;