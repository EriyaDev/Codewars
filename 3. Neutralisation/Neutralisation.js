// Neutralisation
// 02.08.2024
// 8 kyu

// Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:
// # "+" against a "+" returns another "+".
// "-" against a "-" returns another "-".
// "+" against a "-" returns "0".
// Return the string of characters.

function neutralise(s1, s2) {
    let str1 = s1;
    let str2 = s2;
    let output = "";
    let count = 0;


    for(i = 0; i <= str1.length; i++){
        
        if(str1[count] === "+" && str2[count] === "+"){
            output + "+"
        }
        else if(str1[count] === "-" && str2[count] === "-"){
            output + "-"
        }
        else if(str1[count] === "+" && str2[count] === "-" || str1[count] === "-" && str2[count] === "+"){
            output + "0"
        }else{
            output = null;
        }
        count++;
    }

    return output;
  }

  console.log(neutralise("+", "+"));