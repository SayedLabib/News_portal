
console.log('connected');

const newsHeader = document.getElementById('News_Header');


const p_tags = newsHeader.querySelectorAll('p');

for(const p of p_tags )
    {
        p.classList.add
        ('border-b-2', 
        'border-transparent',
        'hover:border-b-2',
        'hover:border-b-[#5D5FEF]',
        'transition',
        'duration-200',
        'cursor-pointer');
    }


    const dropButton = document.getElementById('drop-button');
    const dropMenu = document.getElementById('drop-menu');

    dropButton.addEventListener('click', () => {

        dropMenu.classList.toggle('hidden');
    });