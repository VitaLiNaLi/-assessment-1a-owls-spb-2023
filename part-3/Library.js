/**
 * Библиотека (в ней может быть много книг, компакт-дисков, фильмов и игр)
 */
class Library {
  constructor(options = {}) {
    this.name = options.name;
    this.location = options.location;
    this.items = options.items;
    // библиотека может принадлежать какой-то сети библиотек
    this.librarySystem = options.librarySystem;
  }

  addItem(item) {
    return this.items.push(item);
  }

  removeItem(item) {
    const index = this.items.indexOf(item);

    if (index > -1) {
      return this.items.splice(index, 1);
    }
    return [];
  }

  availableItems() {
    return this.items.filter((item) => item.isAvailable() && !item.isDamaged());
  }

  unavailableItems() {
    return this.items.filter((item) => !this.availableItems().includes(item));
  }
}

module.exports = { Library };
