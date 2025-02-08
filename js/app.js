

const loadCategory = async() =>
    {
        const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
        const data = await res.json();
        // console.log(data);   

    
        
        const newsHeader = document.getElementById('News_Header');
        
        data.data.news_category.forEach((item)=>{
           
            // console.log(item);
            
            const pTags = document.createElement('p');

         
                    pTags.innerText = `${item.category_name}`;

                    pTags.classList.add
                    ('border-b-2', 
                    'border-transparent',
                    'hover:border-b-2',
                    'hover:border-b-[#5D5FEF]',
                    'transition',
                    'duration-200',
                    'cursor-pointer');
             
            
           newsHeader.appendChild(pTags);

        });
    }

loadCategory();



// News Header adding CSS properties






    const dropButton = document.getElementById('drop-button');
    const dropMenu = document.getElementById('drop-menu');

    dropButton.addEventListener('click', () => {

        dropMenu.classList.toggle('hidden');
    });