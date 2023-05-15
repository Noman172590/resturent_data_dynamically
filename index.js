const logDataFish=(fish)=>{
      const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${fish}`
      
        fetch(url)
        .then(res=>res.json())
        .then(data=>displayloadmeal(data.meals))


}

const displayloadmeal=meal=>{

               
                const mealMainData=document.getElementById('mealMainData');

                mealMainData.innerHTML=''
                meal.forEach(eachMeal=>{

                        

                        const mealAddingDiv=document.createElement('div')
                        mealAddingDiv.classList.add('col')
                        mealAddingDiv.innerHTML=`<div class="col">
                        <div class="card">
                          <img src="${eachMeal.strMealThumb
                          }" class="card-img-top" alt="...">
                          <div class="card-body">
                            <h5 class="card-title">${eachMeal.strMeal}</h5>
                            <p class="card-text">${eachMeal.strCategory}</p>

                            <button onclick="MealBtn(${eachMeal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#MealDeletails">
                             MealDetalies
                                </button>
                          </div>
                        </div>
                      </div>`

                mealMainData.appendChild(mealAddingDiv)

                })

}


const btnsearch=()=>{

        const inputFeild=document.getElementById('inputFeild').value;
        logDataFish(inputFeild)
}


const MealBtn=(Mealdata)=>{

          const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${Mealdata}`
            fetch(url)
            .then(res=>res.json())
            .then(data=>displayMealIndex(data.meals[0]))
            
  const displayMealIndex=(MealInformation)=>{

      console.log(MealInformation)

    const MealModalLabel=document.getElementById('MealModalLabel')
    MealModalLabel.innerText=MealInformation.strMeal;
    const Image_setup=document.getElementById('Image_setup')
    Image_setup.innerHTML=` <img src="${MealInformation.strMealThumb
    }" class="card-img-top" alt="...">
    `
    const Image_setup1=document.getElementById('Image_setup1')
    Image_setup1.innerHTML=` <p>${MealInformation.strArea
    }</p>
    `

    

  }
  
  

 
}


logDataFish('fish');