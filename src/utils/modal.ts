export const toggleModal = (id: string) => {
  const element = document.getElementById(id) as HTMLDialogElement | null;

  if (element) {
    if (element.open) {
      element.close();
    } else {
      element.showModal();
    }
  }
};
