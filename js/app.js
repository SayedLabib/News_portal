

const loadCategory = async() =>
    {
        const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
        const data = await res.json();
        // console.log(data);   

    
        
        const newsHeader = document.getElementById('News_Header');
        const newsContainer = document.getElementById('news-container');
        
        data.data.news_category.forEach((item)=>{
           
            // console.log(item);
            
            const pTags = document.createElement('p');

            // News Header adding CSS properties

            pTags.innerText = `${item.category_name}`;

            pTags.classList.add
             ('border-b-2', 
             'border-transparent',
             'hover:border-b-2',
             'hover:border-b-[#5D5FEF]',
             'transition',
             'duration-200',
             'cursor-pointer');
             
            
        
        pTags.addEventListener('click',()=>{

        const newsContainer = document.getElementById('news-container');

         newsContainer.scrollIntoView({

              behavior: "smooth",
              block: "start",
         })
        
         loadNews(item.category_id);
                
        });



           const aTags = document.createElement('a');
           aTags.innerText = `${item.category_name}`;
           aTags.classList.add(
               'block',
               'px-4',
               'py-2',
               'text-gray-700',
               'hover:bg-gray-100',
           );

        aTags.addEventListener('click', ()=>{

            const newsContainer = document.getElementById('news-container');

            newsContainer.scrollIntoView({
   
                 behavior: "smooth",
                 block: "start",
            })

            loadNews(item.category_id);
        })
          
           
        dropMenu.appendChild(aTags);  
        newsHeader.appendChild(pTags);

          



        });
    }


const loadNews = async(category_id ='01') =>
    {
        
        document.getElementById('Spinner').classList.remove('hidden');

        const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`);
        const data = await res.json();

        console.log(data.data);

         
        const newsContainer = document.getElementById('news-container');
        
        newsContainer.innerHTML = ' ';

        const notAvailable = document.getElementById('Not-available');

        if(data.data.length === 0)
            {
               notAvailable.classList.remove('hidden');
               document.getElementById("Spinner").classList.add("hidden");
            }
        else
        {
             notAvailable.classList.add('hidden');
             
        }    

        data.data.forEach((item) => {

        //   console.log(item);
        document.getElementById('Spinner').classList.add('hidden');

         const div = document.createElement('div');  
         
         div.innerHTML = 
         `
            <div class=" mt-4 card card-side bg-base-100 shadow-2xl container flex flex-col lg:flex-row lg:h-[300px] mx-auto">

            
            <img class="mt-4 rounded-md mx-2 lg:mx-0 lg:ml-5 h-[260px]"
            src="${item?.thumbnail_url}"
            alt="Movie" />    
   
            <div class="card-body">
            
            
            <div class="flex jsutify-evenly ">
               <h2 class="card-title">${item?.title?.slice(0,60)}...</h2>
            
               <p class="font-medium font-poppins text-[16px] ml-8 lg:ml-[480px]">${item?.rating?.badge}<span class="ml-4" id=""><sup>${item.rating.number}</sup></span></p>
            
            </div>
            
            
            <div class="mt-5">
               <p class="font-roboto font-normal text-[#949494] text-[14px] ">${item?.details?.slice(0,300)}..........</p>
         
             
   
            </div>
   
            <div class="mt-10 grid grid-cols-2 gap-x-10 lg:flex lg:flex-row lg:justify-between items-center ">
              
                 <div class="flex justify-around items-center gap-2">
                     <img class="w-10 h-10 rounded-full" src="${item?.author?.img}" alt="">
                     
                    <div class="grid grid-cols-1 text-[14px] text-[#949494] font-normal">
                     <p>${item?.author?.name}</p>
                     <p>${item?.author?.published_date}</p>
                    </div>
   
                 </div>
                 
                 <div class="text-[14px] text-[#949494] font-normal flex justify-around items-center gap-2 ml-8 lg:ml-0 ">
                  
                  <img class="ml-6 lg:ml-0" src="images/icons8-eye-48.png" alt="">
                  <p class="ml-2 lg:ml-0">${item?.total_view}</p>
                 </div>
                 
   
                 <div class="rating mt-5 lg:mt-0">
                  <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                  <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" checked="checked" />
                  <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                  <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                  <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                </div>
   
            <div class="card-actions mt-5 lg:mt-0 justify-end">
            
                <button class="btn bg-white border-none shadow-none"><img src="images/Group.png" alt=""></button>
            </div>
   
            </div>
            
          

   
         </div> 
          
         </div>  
         
         
         
         `
         newsContainer.appendChild(div);  
        
        })
        
        // Hide loading Spinner

        // loadingSpinner(false);
    };


const searchButton = () => {

     const searchFiled = document.getElementById('search-field').value;
    
      
     if(searchFiled)
        {
           loadNews(searchFiled);
        }
     else
     {
        alert('Please enter a valid category id');
     }

    }


// const loadingSpinner = (isLoading) => 
//     {
//         const spinner = document.getElementById('Spinner');

//         if(isLoading)
//             {
//                  spinner.classList.remove('hidden');
//             }
//         else
//         {
//             spinner.classList.add('hidden');
//         }    
//     };
  
//       const spinner = document.getElementById('Spinner');
    
//       if(isLoading) 
//         {
//            spinner.classList.remove('hidden');
//         }
//       else
//       {
//          spinner.classList.add('hidden');
//       }    
// };

loadCategory();

loadNews();




const dropButton = document.getElementById('drop-button');
const dropMenu = document.getElementById('drop-menu');

dropButton.addEventListener('click', () => {

    dropMenu.classList.toggle('hidden');
});

document.addEventListener('click', (event) => {
       
if(!dropMenu.contains(event.target) && !dropButton.contains(event.target))
    {
        dropMenu.classList.add('hidden');
    }

});
