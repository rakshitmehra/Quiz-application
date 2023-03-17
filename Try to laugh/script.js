const funnyContent = [
    { type: 'video', url: 'https://www.youtube.com/embed/9oeIziu-dyo' },
    { type: 'video', url: 'https://www.youtube.com/embed/J---aiyznGQ' },
    { type: 'image', url: 'https://i.imgur.com/5Q5yLar.jpg' },
    { type: 'image', url: 'https://i.imgur.com/L5Z5zGl.jpg' },
    { type: 'video', url: 'https://www.youtube.com/embed/1hKSYgOGtos' },
    { type: 'image', url: 'https://i.imgur.com/mBjqAt9.jpg' },
    { type: 'video', url: 'https://www.youtube.com/embed/yJxCdh1Ps48' },
    { type: 'image', url: 'https://i.imgur.com/OpTpG0V.jpg' },
    { type: 'video', url: 'https://www.youtube.com/embed/3GRSbr0EYYU' },
    { type: 'image', url: 'https://i.imgur.com/RosSxwS.jpg' }
  ];
const contentContainer = document.getElementById('content');
let a = document.getElementById('but')
a.onclick=funnyContent.forEach(item => {
    const content = document.createElement('div');
    content.classList.add('content');
  
    if (item.type === 'video') {
      const iframe = document.createElement('iframe');
      iframe.src = item.url;
      iframe.width = 560;
      iframe.height = 315;
      iframe.allowfullscreen = true;
      content.appendChild(iframe);
    } else if (item.type === 'image') {
      const img = document.createElement('img');
      img.src = item.url;
      content.appendChild(img);
    }
  
    contentContainer.appendChild(content);
  });
    