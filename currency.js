let open=0;
function add_values(){
    if(open===0){
    open=1;
    html=`<div class="disp"><input id="values" type="number" placeholder="ENTER THE AMOUNT"><button class="sub" onclick="convert();">CONVERT</button><div class="result"></div></div>`
    document.querySelector('.input').innerHTML=html;
    }
    else{
        open=0;
        html=``;
        document.querySelector('.input').innerHTML=html;
    }
    
}
function convert(){
    let select1=document.querySelector("#curr1").selectedIndex;
    let curr1=document.querySelector("#curr1")[select1].value;
    let select2=document.querySelector("#curr2").selectedIndex;
    let curr2=document.querySelector("#curr2")[select2].value;
    let value=document.querySelector('#values').value;
    if(value>0){
    if(curr1==="INR"){
        if(curr2==="USD"){
        result=(0.012*value).toFixed(2);
        html=`<h2>RESULT:${value} INR = ${result} USD</h2>`;
        document.querySelector('.result').innerHTML=html; 
        }  
        else if(curr2==="YEN"){
            result=(1.89*value).toFixed(2);
            html=`<h2>RESULT:${value} INR = ${result} YEN</h2>`;
            document.querySelector('.result').innerHTML=html; 
        }
        else if(curr2==="DINARS"){
            result=(0.0037*value).toFixed(2);
            html=`<h2>RESULT:${value} INR = ${result} DINAR</h2>`;
            document.querySelector('.result').innerHTML=html; 
        }
        else if(curr2==="POUNDS"){
            result=(0.0094*value).toFixed(2);
            html=`<h2>RESULT:${value} INR = ${result} POUNDS</h2>`;
            document.querySelector('.result').innerHTML=html; 
        }
        else{
            html=`<h2>YOU REALLY WANT ME TO CONVERT INR TO INR <b>ERROR 404 </b></h2>`;
            document.querySelector('.result').innerHTML=html;
        }
    }
    if(curr1==="USD"){
        if(curr2==="INR"){
        result=83.13*value;
        html=`<h2>RESULT:${value} USD = ${result} INR</h2>`;
        document.querySelector('.result').innerHTML=html; 
        }  
        else if(curr2==="YEN"){
            result=156.80*value;
            html=`<h2>RESULT:${value} USD = ${result} YEN</h2>`;
            document.querySelector('.result').innerHTML=html; 
        }
        else if(curr2==="DINARS"){
            result=0.31*value;
            html=`<h2>RESULT:${value} USD = ${result} DINAR</h2>`;
            document.querySelector('.result').innerHTML=html; 
        }
        else if(curr2==="POUNDS"){
            result=0.78*value;
            html=`<h2>RESULT:${value} USD = ${result} POUNDS</h2>`;
            document.querySelector('.result').innerHTML=html; 
        }
        else{
            html=`<h2>YOU REALLY WANT ME TO CONVERT USD TO USD <b>ERROR 404 </b></h2>`;
            document.querySelector('.result').innerHTML=html;
        }
    }
    if(curr1==="YEN"){
        if(curr2==="INR"){
        result=0.53*value;
        html=`<h2>RESULT:${value} YEN = ${result} INR</h2>`;
        document.querySelector('.result').innerHTML=html; 
        }  
        else if(curr2==="USD"){
            result=0.0064*value;
            html=`<h2>RESULT:${value} YEN = ${result} USD</h2>`;
            document.querySelector('.result').innerHTML=html; 
        }
        else if(curr2==="DINARS"){
            result=0.002*value;
            html=`<h2>RESULT:${value} YEN = ${result} DINAR</h2>`;
            document.querySelector('.result').innerHTML=html; 
        }
        else if(curr2==="POUNDS"){
            result=0.0050*value;
            html=`<h2>RESULT:${value} YEN = ${result} POUNDS</h2>`;
            document.querySelector('.result').innerHTML=html; 
        }
        else{
            html=`<h2>YOU REALLY WANT ME TO CONVERT YEN TO YEN <b>ERROR 404 </b></h2>`;
            document.querySelector('.result').innerHTML=html;
        }
    }
    if(curr1==="DINARS"){
        if(curr2==="INR"){
        result=270.87*value;
        html=`<h2>RESULT:${value} DINAR = ${result} INR</h2>`;
        document.querySelector('.result').innerHTML=html; 
        }  
        else if(curr2==="USD"){
            result=3.26*value;
            html=`<h2>RESULT:${value} DINAR = ${result} USD</h2>`;
            document.querySelector('.result').innerHTML=html; 
        }
        else if(curr2==="YEN"){
            result=510.89*value;
            html=`<h2>RESULT:${value} DINAR = ${result} YEN</h2>`;
            document.querySelector('.result').innerHTML=html; 
        }
        else if(curr2==="POUNDS"){
            result=2.55*value;
            html=`<h2>RESULT:${value} DINAR = ${result} POUNDS</h2>`;
            document.querySelector('.result').innerHTML=html; 
        }
        else{
            html=`<h2>YOU REALLY WANT ME TO CONVERT DINAR TO DINAR <b>ERROR 404 </b></h2>`;
            document.querySelector('.result').innerHTML=html;
        }
    }
    if(curr1==="POUNDS"){
        if(curr2==="INR"){
        result=106.13*value;
        html=`<h2>RESULT:${value} POUNDS = ${result} INR</h2>`;
        document.querySelector('.result').innerHTML=html; 
        }  
        else if(curr2==="USD"){
            result=1.28*value;
            html=`<h2>RESULT:${value} POUNDS = ${result} USD</h2>`;
            document.querySelector('.result').innerHTML=html; 
        }
        else if(curr2==="YEN"){
            result=(200.21*value).toFixed(2);
            html=`<h2>RESULT:${value} POUNDS = ${result} YEN</h2>`;
            document.querySelector('.result').innerHTML=html; 
        }
        else if(curr2==="DINARS"){
            result=0.39*value;
            html=`<h2>RESULT:${value} POUNDS = ${result} DINAR</h2>`;
            document.querySelector('.result').innerHTML=html; 
        }
        else{
            html=`<h2>YOU REALLY WANT ME TO CONVERT POUNDS TO POUNDS <b>ERROR 404 </b></h2>`;
            document.querySelector('.result').innerHTML=html;
        }
    }
}
else{
    html=`<h2><b>CANT CONVERT NEGATIVE VALUE IT DOESEN'T MAKE ANY SENSE </b></h2>`;
            document.querySelector('.result').innerHTML=html;
}
}













