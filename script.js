window.onload = function(){
    var select = document.getElementById("years");
    for(var i=1; i<=100; i++){
        var option = document.createElement("option");
        select.options.add(option);
        option.text = i;
        option.value = i;
    }
}




function compute()
{
    var form = document.getElementById("form1")

    for (i = 0; i < form.childElementCount; i++){
        if (form.children[i].tagName == ("P")){
            form.removeChild(form.children[i]);
        }
    }

    var amount = document.getElementById("amount").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    
    if (amount == "" || rate == "" || years == ""){
        alert("Please fill out all the fields.");
        return false;
    }

    var result = parseInt(amount)*((1+(parseFloat(rate)/100))**parseInt(years));
    var actualDate = new Date();
    var futureDate = parseInt(actualDate.getFullYear()) + parseInt(years);

    
    var text = new String("If you deposit " + amount + "," +
    " at a interest rate of " + rate + "%." + 
    " You will receive an ammount of " + result.toFixed(1) + "," +
    " in the year " + futureDate + ".");
    
    var paragraph = document.createElement("p");
    var node = document.createTextNode(text);
    paragraph.appendChild(node);
    form.appendChild(paragraph);

    return true;
}



function computePercentage(){

        var slider = document.getElementById("div_slider");


        if(document.getElementById("dynamic_label") != null){
            slider.removeChild(slider.children[2]);
        }

        var label = document.createElement("label");
        label.setAttribute("for", "rate")
        label.setAttribute("id", "dynamic_label")
        var percentage = new String(document.getElementById("rate").value + "%");
        var node = document.createTextNode(percentage);
        label.appendChild(node);
        slider.appendChild(label);


        
}



        