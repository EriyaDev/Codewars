// Flick Switch
// 01.08.2024
// 8 kyu

// Create a function that always returns True/true for every item in a given list. However, if an element is the word 'flick', switch to always returning the opposite boolean value.

function flickSwitch(arr){
    let numberOfArray = 0;
    let output = []
    let decision = true;
    let printTrue = true;
    let printFalse = false;
    
    for(i = 0; i < arr.length; i++){
        if(arr[numberOfArray] == "flick"){
            if(decision === printTrue){
                decision = printFalse;
            }else{
                decision = printTrue;
            }
            
            output.push(decision);
        }else{
            decision = decision;
            output.push(decision);
        }
        numberOfArray++;
        
    }
    
    
    return output;
  }

  let array = ["bicycle", "jarmony", "flick", "sheep", "flick",];
  console.log(flickSwitch(array));
