const storedWishData = () => {
    const getStoredData = localStorage.getItem('wishlist');
    if (getStoredData) {
        const convertedData = JSON.parse(getStoredData);
        return convertedData;
    } else {
        return [];
    }
}

const setLocalWishData = (id) => {
    const storedWishListData = storedWishData();
    if (storedWishListData.includes(id)) {
        alert('already marked book as read')
    } else {
        storedWishListData.push(id);
        const data = JSON.stringify(storedWishListData);
        localStorage.setItem('wishlist', data);
    }
}

export { setLocalWishData, storedWishData };