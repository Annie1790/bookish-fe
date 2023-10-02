import { useState, useEffect } from "react";

import ListAllBook from "./Components/ListAllBook";
import ListAllMember from "./Components/ListAllMember";

const App = () => {

  const API_SERVER_PREFIX = "http://127.0.0.1:8080";
  const [bookList, setBookList] = useState([]);
  const [displayBookList, setDisplayBookList] = useState(false);

  const [memberList, setMemberList] = useState([]);
  const [displayMemberList, setDisplayMemberList] = useState(false);

  const addNewBook = async () => {
    let title = window.prompt("Enter new book title:")
    try {
      const response = await fetch(`${API_SERVER_PREFIX}/books/new-book`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ "title": title })
      })
      if (response.ok) {
        window.alert(`${title} added!`)
        window.location.reload()
      }
    }
    catch (error) {
      console.error(error)
    }
  };

  const getAllBooks = async () => {
    try {
      const response = await fetch(`${API_SERVER_PREFIX}/books/all`, {
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

  const getOneBookById = async () => {
    let number = window.prompt("Enter book id:")
    if (number !== null) {
      try {
        const response = await fetch(`${API_SERVER_PREFIX}/books/get-book-id/${number}`, {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-type": "application/json"
          },
        })
        if (response.ok) {
          setBookList([await response.json()])
        }
      } catch (error) {
        console.error(error)
      }
    }
  }

  const deleteBookById = async () => {
    let number = window.prompt("Enter book id:")
    if (number !== null) {
      try {
        const response = await fetch(`${API_SERVER_PREFIX}/books/delete/${number}`, {
          method: "DELETE",
          mode: "cors",
          headers: {
            "Content-type": "application/json"
          }
        })
        if (response.ok) {
          window.alert(`Book deleted!`)
          window.location.reload()
        }
      } catch (error) {
        console.error(error)
      }
    }
  }

  const updateBookTitle = async (object) => {
    try {
      await fetch(`${API_SERVER_PREFIX}/books/update`, {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(object)
      })
    } catch (error) {
      console.error(error)
    }
  }

  const getAllMember = async () => {
    try {
      let response = await fetch(`${API_SERVER_PREFIX}/member/all`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-type": "application/json"
        }
      })
      if (response.ok) {
        setMemberList([await response.json()])
      }
    } catch (error) {
      console.error(error)
    }
  }

  const updateMember = async (object) => {
    try {
      await fetch(`${API_SERVER_PREFIX}/member/update`, {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(object)
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="p-10 grid grid-cols-2 grid-rows-1">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Bookish App</h1>
      <main className="col-start-1 grid grid-cols-2">
        <div className="col-start-1">
          <div className="flex flex-col justify-start gap-5 max-w-fit px-4">
            <h1 className="mb-4 text-xl leading-none tracking-tight text-gray-900 md:text-5xl lg:text-2xl dark:text-white">Books</h1>
            <button className="p-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => {setDisplayMemberList(false); getAllBooks(); setDisplayBookList(true) }}>Get All Books</button>
            <button className="p-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => {setDisplayMemberList(false); getOneBookById(); setDisplayBookList(true) }}>Get One Book</button>
            <button className="p-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => {setDisplayMemberList(false); addNewBook() }}>Add new Book</button>
            <button className="p-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => {setDisplayMemberList(false); deleteBookById() }}>Delete One Book</button>
          </div>
        </div>
        <div className="flex flex-col justify-start gap-5 max-w-fit px-4">
          <h1 className="mb-4 text-xl leading-none tracking-tight text-gray-900 md:text-5xl lg:text-2xl dark:text-white">Reader</h1>
          <button className="p-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => {setDisplayBookList(false); getAllMember(); setDisplayMemberList(true)}} >List members</button>
          <button className="p-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" >Add member</button>
          <button className="p-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" >Checkout Book</button>
          <button className="p-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" >Checkin Book</button>
        </div>
      </main>
      <aside className="col-start-2">
        <ListAllBook books={bookList} display={displayBookList} update={updateBookTitle} />
        <ListAllMember member={memberList} display={displayMemberList} update={updateMember}/>
      </aside>
    </div>
  )
}

export default App;
