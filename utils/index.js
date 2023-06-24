export const checkImageURL = (url) => {
    if (!url) return false
    else {
        const pattern = RegExp('^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$', 'i');
        return pattern.test(url);
    }
};