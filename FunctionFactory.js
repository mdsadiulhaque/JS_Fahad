//Factory Function
    function createCircle(radius){
        return{
         radius,

         draw ()  {
                console.log('draw');
            }
            };
    }
    const circle=createCircle(1);
    console.log(circle);

    const circle2=createCircle(2);
    console.log(circle2);
    

     