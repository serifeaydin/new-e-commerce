// components/AddressModal.js
import React from 'react';

const AddressModal = ({ isOpen, onClose, onSave, onDelete, address }) => {
    if (!isOpen) return null;
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const newAddress = {
        id: address ? address.id : Date.now(),
        title: event.target.title.value,
        details: event.target.details.value,
      };
      onSave(newAddress);
      onClose();
    };
  
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg w-full max-w-md">
          <h2 className="text-lg font-semibold mb-4">
            {address ? 'Adres Güncelle' : 'Yeni Adres Ekle'}
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium">Başlık</label>
              <input
                type="text"
                name="title"
                defaultValue={address?.title || ''}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Adres Detayları</label>
              <textarea
                name="details"
                defaultValue={address?.details || ''}
                className="w-full p-2 border rounded"
                required
              ></textarea>
            </div>
            <div className="flex justify-end gap-2">
             
              <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">
                İptal
              </button>
              <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
                Kaydet
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  

export default AddressModal;
