class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state *= 1.5
  }

  get state() {
    return this._state;
  }

  set state(number) {
    if (number < 0) {
      this._state = 0
    }
    if (number > 100) {
      this._state = 100
    } else {
      this._state = number;
    }
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "book";
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount)
    this.type = "novel"
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount)
    this.type = "fantastic"
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount)
    this.type = "detective"
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book)
    }
  }

  findBookBy(type, value) {
    let findBook = this.books.find((element) => element[type] === value);

    return findBook ?? null
  }

  giveBookByName(bookName) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name === bookName) {
        return this.books.splice(i, 1)[0]
      }
    }

    return null;
  }
}

class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }
  
  addMark(marks, subject) {
    if (marks < 2 || marks > 5) {
      return
    }

    if (!this.marks.hasOwnProperty(subject)) {
      this.marks[subject] = [];
    }

    this.marks[subject].push(marks);
  }

  getAverageBySubject(subject) {
    if (this.marks.hasOwnProperty(subject)) {
      return this.marks[subject].reduce((accum, number) => accum + number / this.marks[subject].length, 0)
    }
  
    return 0
  }

  getAverage() {
    if (!Object.keys(this.marks).length) {
      return 0
    }
    return (Object.keys(this.marks).reduce((accum, el) => this.getAverageBySubject(el) + accum, 0)) / Object.keys(this.marks).length
  }
}