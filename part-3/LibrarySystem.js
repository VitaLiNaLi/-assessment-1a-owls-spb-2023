/**
 * Сеть библиотек - в ней состоит множество разных библиотек
 */
class LibrarySystem {
  constructor(options = {}) {
    this.name = options.name;
    this.libraries = options.libraries || [];
  }

  /**
   * Возвращает все книги, компакт-диски, фильмы и игры из всех библиотек сети
   */
  get items() {
    // существует метод Array.flatMap() как альтернатива, но он пока экспериментальный
    return this.libraries.reduce((acc, x) => acc.concat(x.items), []);
  }

  availableItems() {
    return this.items.filter((item) => item.isAvailable() && !item.isDamaged());
  }

  unavailableItems() {
    return this.items.filter((item) => !this.availableItems().includes(item));
  }
}

module.exports = { LibrarySystem };
