import { toast } from 'react-toastify';

export default function deleteData(index, userData, setUserData) {
  const updatedData = userData.filter((_, i) => i !== index);
  setUserData(updatedData);
  toast.success('Data deleted successfully.');
}
