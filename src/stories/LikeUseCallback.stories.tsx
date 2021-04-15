import React, {useCallback, useMemo, useState} from 'react';

export default {
    title: 'Like useCallback',
};

const NewMessageCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

type BooksSecretPropsType = {
    books: string[]
    addBook: () => void
}
const BooksSecret = (props: BooksSecretPropsType) => {
    console.log('BooksSecret')
    return <div>
        <button onClick={props.addBook}>add book</button>
        {
        props.books.map((book, i) => <div key={i}>{book}</div>)
    }</div>
}
const Books = React.memo(BooksSecret)

export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React','JS','CSS'])

    const newArray = useMemo(() => {
        const newArray = books.filter(book => book.toLowerCase().indexOf('a') > -1)
        return newArray
    }, [books])

    const memoizedAddBook = useMemo(() => {
        return () => {
            const newBooks = [...books, 'Angular' + new Date().getTime()]
            setBooks(newBooks)
        }
    }, [books])

    const memoizedAddBook2 = useCallback(() => {
            const newBooks = [...books, 'Angular' + new Date().getTime()]
            setBooks(newBooks)
    }, [books])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <NewMessageCounter count={counter} />
        <Books books={newArray} addBook={memoizedAddBook2}/>
    </>
}