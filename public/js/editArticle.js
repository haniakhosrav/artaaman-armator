let isOpen = false;

const openEditForm = (btn) => {
    const id = btn.getAttribute('name');
    const style = document.getElementById(id).style;

    isOpen = !isOpen;
    if(isOpen) style.display = 'inline-block';
    else style.display = 'none';
}
