
document.addEventListener("DOMContentLoaded", () => {   

   const inputTags = document.querySelectorAll('input')

   const changeInputValues = (e) => {  
    let units = event.target.dataset.unit || "";
    document.documentElement.style.setProperty(`--${event.target.name}`, `${event.target.value}${units}`)
  }
   
  inputTags.forEach(input => input.addEventListener("change", changeInputValues))  
  inputTags.forEach(input => input.addEventListener("mousemove", changeInputValues))

})