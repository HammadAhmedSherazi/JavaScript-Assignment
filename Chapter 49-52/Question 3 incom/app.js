function deleteIt(thisNode){
    thisNode.parentNode.parentNode.remove();

    }
function editIt(thisNode){
    const editItem = (editItem) => {
        let itemTxt = editItem.previousSibling.previousSibling;
        let editField = editItem.previousSibling;
        let saveBtn = editItem.nextSibling;
        let cancelEdit = editItem.nextSibling.nextSibling.nextSibling;
        let deleteBtn = editItem.nextSibling.nextSibling;
    
        editField.value = itemTxt.innerHTML;
    
        editItem.style.display = 'none';
        saveBtn.style.display = 'inline';
        cancelEdit.style.display = 'inline';
        deleteBtn.style.display = 'none';
    
        itemTxt.style.display = 'none';
        editField.style.display = 'inline';
    }
    
}
