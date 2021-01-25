function totalBooksCount(books) {
  return books.length;
}

function totalAccountsCount(accounts) {
  return accounts.length;
}

function booksBorrowedCount(books) {
  let count = 0;
  books.forEach((aBook) =>
    aBook.borrows.forEach((anEntry) => {
      if (anEntry.returned === false) {
        count++;
      }
    })
  );
  return count;
}

function getMostCommonGenres(books) {
  const genre = books.map((book) => book.genre);
  let array = [];
  let count = {};
  genre.forEach(function (i) {
    count[i] = (count[i] || 0) + 1;
  });
  for (let key in count) {
    array.push({
      name: key,
      count: count[key],
    });
  }
  array.sort((a, b) => (a.count < b.count ? 1 : -1));
  return array.slice(0, 5);
}

// function getMostPopularBooks(books) {
//   const borrowCounts = books.map((book) => {
//     return { name: book.title, count: book.borrows.length };
//   });
//   borrowCounts.sort((a, b) => (a.count < b.count ? 1 : -1));
//   return borrowCounts.slice(0, 5);
// }

function getMostPopularBooks(books) {
  return books
    .map((book) => {
      return { name: book.title, count: book.borrows.length };
    })
    .sort((a, b) => (a.count < b.count ? 1 : -1))
    .slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  let returnArr = [];
  authors.forEach((author) => {
    let returnAuthor = {
      name: `${author.name.first} ${author.name.last}`,
      count: 0,
    };
    books.forEach((book) => {
      if (book.authorId === author.id) {
        returnAuthor.count += book.borrows.length;
      }
    });
    returnArr.push(returnAuthor);
  });
  return returnArr.sort((a, b) => b.count - a.count).slice(0, 5);
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
