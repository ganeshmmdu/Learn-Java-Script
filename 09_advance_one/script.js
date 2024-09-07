document.getElementById('fetchImageBtn').addEventListener('click', function() {
    // Fetch random image from the picsum API
    const imageUrl = `https://picsum.photos/300/300?random=${Math.random()}`;
    
    // Set the fetched image in the card
    document.getElementById('randomImage').src = imageUrl;
});
