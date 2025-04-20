const storedData = () => {
    const getStoredData = localStorage.getItem('markAsRead');
    if (getStoredData) {
        const convertedData = JSON.parse(getStoredData);
        return convertedData;
    } else {
        return [];
    }
}

const setLocalData = (id) => {
    const storedWishListData = storedData();
    if (storedWishListData.includes(id)) {
        alert('already marked book as read')
    } else {
        storedWishListData.push(id);
        const data = JSON.stringify(storedWishListData);
        localStorage.setItem('markAsRead', data);
    }
}

export { setLocalData, storedData };