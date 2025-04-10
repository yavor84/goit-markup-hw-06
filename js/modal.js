(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    body: document.body,
  };

  function handleEscKeyPress(event) {
    if (event.key === 'Escape' && refs.modal.classList.contains('is-open')) {
      toggleModal();
    }
  }

  function toggleModal() {
    const isModalOpen = refs.modal.classList.toggle('is-open');
    refs.body.classList.toggle('no-scroll');

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscKeyPress);
    } else {
      document.removeEventListener('keydown', handleEscKeyPress);
    }
  }

  refs.modal.addEventListener('click', event => {
    if (event.target === refs.modal) {
      toggleModal();
    }
  });

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
})();
