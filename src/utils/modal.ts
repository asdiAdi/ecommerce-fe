export const toggleModal = (id: string) => {
  const element = document.getElementById(id) as HTMLDialogElement | null;

  if (element) {
    element.showModal();
  }
};
