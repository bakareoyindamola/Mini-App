const bookList = document.querySelector("#book-list ul");

// Delete Books
bookList.addEventListener('click',  (e) => {
    if(e.target.className === "delete") {
        const li = e.target.parentNode;
        bookList.removeChild(li);
    }
});

// Add Books
const addBook = document.forms['add-book'];

addBook.addEventListener('submit', (e) => {
    e.preventDefault();
    const bookName = addBook.querySelector('input').value;
    const li = document.createElement('li');
    const name = document.createElement('span');
    const deleteBtn = document.createElement('span');

    name.textContent = bookName;
    deleteBtn.textContent = "Remove";

    name.classList.add('name');
    deleteBtn.classList.add('delete');

    li.appendChild(name);
    li.appendChild(deleteBtn);
    bookList.appendChild(li);
});

// Hide Books
const hideBook = document.querySelector('#hide');
hideBook.addEventListener('change', (e) => {
    if(hideBook.checked) {
        bookList.style.display = "none";
    } else {
        bookList.style.display = "block";
    }
});

// Filter Books
const searchBook = document.forms['search-books'].querySelector('input');
searchBook.addEventListener('keyup', (e) => {
    const searchName = searchBook.value.toLowerCase();
    const bookName = document.querySelector('#book-list name');
    const li = document.querySelectorAll('#book-list li');
    li.forEach( (book) => {
        const title = book.firstElementChild.textContent;
        if( title.toLowerCase().indexOf( searchName ) > -1 ) {
            book.style.display = "flex";
        } else {
            book.style.display = "none";
        }
    });
})