(function(){
 
    "use strict";


    let convertType = "miles";
    const heading = document.querySelector('h1');
    const info = document.querySelector('p');
    const answerDiv =document.getElementById('answer');
    const form = document.getElementById('convert');

    document.addEventListener('keydown', function(evt)
    {
        var key = evt.code;
        // alert(key);
        if (key === "KeyK")

        {
            convertType = "kilometers"
            heading.innerHTML = "Kilometers to Miles Converter";
            info.innerHTML = "Type in a number of kilometers and click the button to convert the distance to miles.";

        }
        else if (key === "KeyM")
        {	
            convertType = "miles";
            heading.innerHTML = "Miles to Kilometers Converter";
            info.innerHTML = "Type in a number of miles and click the button to convert the distance to kilometers.";
        }
    });

    form.addEventListener('submit', function(evt)
    {
        evt.preventDefault();

        const distance = parseFloat(document.getElementById('distance').value);

        if (distance)
        {
            // covert M to K 1.609344 
            // convert K t0 M 0.631371192
            if ( convertType == "miles")
            {
                const conversion = (distance * 1.609344).toFixed(3);
                answer.innerHTML = `<h2> ${distance} miles converts to ${conversion} kilometers. </h2>`;
            }

            else
            {
                const conversion = (distance * 0.631371192).toFixed(3);
                answer.innerHTML = `<h2> ${distance} kilometer converts to ${conversion} miles. </h2>`;
            }
        }

        else
        {
            answerDiv.innerHTML = "<h2>Please Provide a Number!</h2>";
        }
    });

})();