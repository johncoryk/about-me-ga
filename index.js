const toolsBtn = document.getElementById('tools-btn');
const toolsDiv = document.querySelector('.tools');
const closeTools = document.querySelector('.close-tools');

toolsBtn.addEventListener('click', () => toolsDiv.classList.toggle('show'));

closeTools.addEventListener('click', () => toolsDiv.classList.toggle('show'));
