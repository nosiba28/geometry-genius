let serial =0;

// Get all Data---common function

function getDataById(areaName, para1, para2){
    const areaTitle = document.getElementById(areaName).innerText;
    const p1 = document.getElementById(para1).value;
    
    const p2 = document.getElementById(para2).value;


    const area ={
        areaTitle: areaTitle,
        p1: p1,
        p2: p2,
    }
    
    return area;

}

// Show Data:-->common function

function display(areaTitle, totalArea){
    const container = document.getElementById('table-container');
    const tr = document.createElement("tr");
    tr.innerHTML = `
     <td>${serial}</td>
     <td>${areaTitle}</td>
     <td>${totalArea} cm<sup>2</sup> </td>
     <td> <button id="btn-converter" type="button" class="btn btn-primary">Convert to m <sup>2</sup></button> </td>
     
    `;
    container.appendChild(tr);
}
// Clear field value:

function clearFieldValue(field1, field2){
    document.getElementById(field1).value ='';
    document.getElementById(field2).value ='';
}

// Triangle card
document.getElementById("btn-triangle-calculate").addEventListener('click', function(e){
    serial += 1;
// Fetch the data:
    const area = getDataById("triangle-name", "base-field", "height-field");


    const triangleArea = (0.5 * parseInt(area.p1) * parseInt(area.p2)).toFixed(2);

    clearFieldValue("base-field", "height-field");
// error detecting
    if(isNaN(triangleArea)){
        serial -=1;
        return alert("Invalid Input Please try again");
        
    }
//  call the display function for showing data::

   display(area.areaTitle,triangleArea);
    
   

});



// Rectangle
// using event object::
document.getElementById('btn-rectangle-calculate').addEventListener('click', function(e){
    serial +=1;
    const rectangleTitle =e.target.parentNode.children[0].innerText;
    const widthField =e.target.parentNode.children[2].children[0].value;
    const lengthField =e.target.parentNode.children[2].children[1].value;
    
    const rectangleArea = parseInt(widthField) * parseInt(lengthField);
    clearFieldValue("width-field", "length-field");

    // error detecting
    if(isNaN(rectangleArea)){
        serial -=1; 
        return alert("Invalid Input Please try again");
        
    }
     
    display(rectangleTitle, rectangleArea);
    
   
}) 

// Parallelogram

document.getElementById("btn-parallelogram-calculate").addEventListener('click', function(e){
    serial += 1;
//    fetch the data
    const area = getDataById("parallelogram-name", "base-para-field", "height-para-field");

    const parallelogramArea = parseInt(area.p1) * parseInt(area.p2);

    clearFieldValue("base-para-field", "height-para-field");

    // error detecting
    if(isNaN(parallelogramArea)){
        serial -=1;
        return alert("Invalid Input Please try again");
        
    }
//  call the display function for showing data::

    display(area.areaTitle,parallelogramArea);


});

// Rhombus

document.getElementById("btn-rhombus-calculate").addEventListener('click', function(e){
    serial += 1;
    const rhombusTitle = document.getElementById('rhombus-name').innerText;
   
    const d1Field = document.getElementById('d1-field').innerText;

    const d2Field = document.getElementById('d2-field').innerText;

    const rhombusArea = (0.5 * parseInt(d1Field) * parseInt(d2Field)).toFixed(2);
    clearFieldValue("d1-field","d2-field");
    
    
    // error detecting
    if(isNaN(rhombusArea)){
        serial -=1;
        return alert("Invalid Input Please try again");
        
    }
//  call the display function for showing data::

    display(rhombusTitle, rhombusArea);

});

// Pentagon

document.getElementById("btn-pentagon-calculate").addEventListener('click', function(e){
    serial += 1;
    const pentagonTitle = document.getElementById('pentagon-name').innerText;
    
    const pField = document.getElementById('p-field').innerText;

    const bField = document.getElementById('b-field').innerText;

    const pentagonArea = (0.5 * parseInt(pField) * parseInt(bField)).toFixed(2);
    clearFieldValue("p-field", "b-field");

    // error detecting
    if(isNaN(pentagonArea)){
        serial -=1;
        return alert("Invalid Input Please try again");
        
    }
    
//  call the display function for showing data::

    display(pentagonTitle, pentagonArea );

});

// Ellipse

document.getElementById("btn-ellipse-calculate").addEventListener('click', function(e){
   
    serial += 1;
    const ellipseTitle = document.getElementById('ellipse-name').innerText;
    const aeField = document.getElementById('ae-field').value;

    const beField = document.getElementById('be-field').value;
    

    const ellipseArea = (Math.PI * parseInt(aeField) * parseInt(beField)).toFixed(2);
    clearFieldValue("ae-field", "be-field");
    // error detecting
    if(isNaN(ellipseArea)){
        serial -=1;
        return alert("Invalid Input Please try again");
        
    }
//  call the display function for showing data::

    display(ellipseTitle, ellipseArea);

});