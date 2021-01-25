function findAuthorById(authors, id) {
  for (let i = 0; i < authors.length; i++) {
    const author = authors[i];
    if (author.id === id) {
      return author;
    }
  }
}

function findBookById(books, id) {
  for (let i = 0; i < books.length; i++) {
    let book = books[i];
    if (book.id === id) {
      return book;
    }
  }
}

function partitionBooksByBorrowedStatus(books) {
  let arr1 = books.filter((book) => book.borrows[0].returned === false);
  let arr2 = books.filter((book) => book.borrows[0].returned !== false);
  return [arr1, arr2];
}

function getBorrowersForBook(book, accounts) {
  let result = book.borrows.map((borrower) => {
    let result = accounts.find((account) => borrower.id === account.id);
    result.returned = borrower.returned;

    return result;
  });
  console.log(result);
  return result.filter(
    (borrower, holder) =>
      result.findIndex((item) => item.id === borrower.id) === holder
  );
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
