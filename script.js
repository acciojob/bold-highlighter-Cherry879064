    const boldWords=document.querySelectorAll("strong")

    function highlight(){
        boldWords.forEach((word)=>{
            word.style.color="green"
        })
    }
    function return_normal(){
        boldWords.forEach((word)=>{
            word.style.color="black"
        })
    }
