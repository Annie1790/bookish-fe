import { useState, useEffect } from "react";

const App = () => {

  const API_SERVER_PREFIX = "http://127.0.0.1:8080";
  const [bookList, setBookList] = useState([]);
  const [isBookListVisible, setIsBookListVisible] = useState(false);

  useEffect(() => {
    getAllBooks()
  }, [])

  const sendNewTag = async (newBook) => {
    try {
      await fetch(`${API_SERVER_PREFIX}/new-book`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(newBook)
      })
    }
    catch (error) {
      console.error(error)
    }
  };

  const getAllBooks = async () => {
    try {
      const response = await fetch(`${API_SERVER_PREFIX}/books`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-type": "application/json"
        },
      })
      if (response.ok) {
        setBookList(await response.json())
      }
    }
    catch (error) {
      console.error(error)
    }
  };

  return (
    <div className="p-10 grid grid-cols-2 grid-rows-1">
      <main className="col-span-1">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Bookish App</h1>
        <div>
          <button className="p-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => { setIsBookListVisible(true) }}>Get All Books</button>
        </div>
      </main>
      <aside className="col-start-2">
        <div>
          {
            isBookListVisible ? (
              bookList.map((book) => {
                return (<div className="text-slate-600 px-4" key={book.id}>
                  <p>{book.id}</p>
                  <p>{book.title}</p>
                </div>)
              })
            ) : (<div></div>)
          }
        </div>
      </aside>
    </div>
  )
}

export default App;
