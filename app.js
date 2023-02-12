function maxNumber(a,b) {
    if (a>b) {
    return a;
    } else if(a<b) {
    return b;
    } else {
    return ("a=b")
    }
    }
    a = prompt("enter first number");
    b= prompt("enter second number");
    alert(maxNumber(a,b));


    function reverse(number){
        if(number>0){
        return -number;
        }else{
        return (-number);
        }
        }
        number=prompt("Please,enter the number");
        alert(reverse(number));



function three(number,count) {
    let sum = 0;
    for (i=0; i < count; i++) {
        sum = sum + parseInt(numbe) + 3
    }
    return sum;
    };
    number = prompt("Enter a number");
    count = prompt("How many times do you want to add 3");
    alert(three(+number,+count));


    
        function KmToM(km){
            return km*1000;
          }
          
          function KmToCm(km){
            return km * 100000;
          }
          
          
          function getMetric(metric, km, m, cm){
            let distance = prompt("Please enter the distance in km:");
          
            if(metric == "m"){
              m = KmToM(distance);
              alert(m);
            } else if(metric == "cm"){
              cm = KmToCm(distance);
              alert(cm);
            }
          }
          
          console.log(getMetric("cm", 0, 0, 0));