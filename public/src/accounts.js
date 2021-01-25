function findAccountById(accounts, id) {
  for (let i = 0; i < accounts.length; i++) {
    const account = accounts[i];
    if (account.id === id) {
      return account;
    }
  }
}

function sortAccountsByLastName(accounts) {
  accounts.sort((accountA, accountB) =>
    accountA.name.last < accountB.name.last ? -1 : 1
  );
  return accounts;
}

const numberOfBorrows = (account, books) => {
  let count = 0;
  books.forEach((aBook) =>
    aBook.borrows.forEach((anEntry) => {
      if (anEntry.id === account.id) {
        count++;
      }
    })
  );
  return count;
};

function getBooksPossessedByAccount(account, books, authors) {
  return books
    .filter((book) =>
      book.borrows.some(
        (acc) => acc.id === account.id && acc.returned === false
      )
    )
    .map((book) => {
      let author = authors.find((author) => author.id === book.authorId);
      book.author = author;
      return book;
    });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
