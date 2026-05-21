/* Создать файл Modal.js и в нем создать  класс для модального окна под названием Modal. Он будет принимать 1 параметр через конструктор - айди модального окна. Внутри класса будут методы:
I. Для открытия модального окна.
II. Для закрытия модального окна.
III. Для проверки, открыто ли сейчас модальное окно.
IV. Метод, который слушает кнопку (крестик) для закрытия модалки и закрывает модалку (реализовать через eventListener) и вызывать в конструкторе
*/

export class Modal {
  constructor(modalId) {
    this.modalElement = document.getElementById(modalId);
    this.modalShowed = 'modal-showed';

    if (this.modalElement) {
      this.closeBtn = this.modalElement.querySelector('.modal-close');
      if (this.closeBtn) {
        this.initCloseButton();
      }
    }
  }

  open() {
    this.modalElement.classList.add(this.modalShowed);
  }

  close() {
    this.modalElement.classList.remove(this.modalShowed);
  }

  isOpen() {
    return this.modalElement.classList.contains(this.modalShowed);
  }

  initCloseButton() {
    this.closeBtn.addEventListener('click', () => {
      this.close();
    });
  }
}             


