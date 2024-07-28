export default function editRow(index, userData, setFormData) {
    const editData = { ...userData[index], index };
    setFormData(editData);
  }
  