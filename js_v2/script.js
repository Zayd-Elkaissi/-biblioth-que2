var title = document.getElementById('th1');
var auteur = document.getElementById('th2');
var price = document.getElementById('th3');
var pdate = document.getElementById('date');
var language = document.getElementById('langue');
var getSelectedByValue = document.querySelectorAll('input[name="Roman"]');
var email = document.getElementById("mail");


class Ouvrage{
    constructor(title, nameauthor, price,author_email, date,language, type, ){

             this.title = title;
             this.auteur = nameauthor;
             this.price = price
             this.email = author_email;
             this.pdate = date;
             this.language =language;
             this.getSelectedByValue = type;
             
            }
            DétailOuvrage(){return this.title + this.auteur + this.price + this.email + this.pdate + this.language + this.getSelectedByValue}
        }
        
        var myTable = document.getElementById("table");
        var law = [];
        function putin(){
            let selectedValue;
            for (const rb of getSelectedByValue) {
                if (rb.checked) {
                    selectedValue = rb.value;
                    break;
                }
            }
            var p = new Ouvrage(title.value,auteur.value ,price.value,email.value,pdate.value,language.value, selectedValue,);
            
            console.log(p);
    law.push(p);
    
    
    
    
    for(let a= 0; a < law.length; a++){
        var tr = document.createElement('tr');
        tr.innerHTML= `<td>${p.title}</td>
        <td>${p.auteur}</td>
        <td>${p.price}</td>
        <td>${p.email}</td>
        <td>${p.pdate}</td>
        <td>${p.language}</td>
        <td>${p.getSelectedByValue }</td>`
        
        myTable.appendChild(tr);
    }
}

function PrintDiv(id) {
    var data=document.getElementById(id).innerHTML;
    var myWindow = window.open('', 'my div', 'height=400,width=600');
    myWindow.document.write('<html><head><title>my div</title>');
    /optional stylesheet/ 
    myWindow.document.write('</head><body  id="myprint" >');
    myWindow.document.write(data);
    myWindow.document.write('</body></html>');
    myWindow.print();
    

}



















































































































