// Change container in protfolio container
function showContent(type) {
    const contentDiv = document.getElementById('contain');
  
    if (type === 'development') {
      contentDiv.innerText = 'Development Content';
    } else if (type === 'creative') {
      contentDiv.innerText = 'Creative Content';
    } else if (type === 'youtube') {
      contentDiv.innerText = 'YouTube Content';
    }
  }