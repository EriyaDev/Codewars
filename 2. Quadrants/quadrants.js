// Quadrants
// 02.08.2024
// 8 kyu

//Given a point in a Euclidean plane (x and y), return the quadrant the point exists in: 1, 2, 3 or 4 (integer). x and y are non-zero integers, therefore the given point never lies on the axes.

// kuadran 1 = x, y | kuadran 2 = -x, y | kuadran 3 = -x, -y | kuadran 4 = x, -y

// logika 

// jika x > 0 & y > 0 = 1 dst.

function quadrant(x, y) {
    let sumbuX = x;
    let sumbuY = y;

    if(sumbuX > 0 && sumbuY > 0){
        return 1;
    }
    else if(sumbuX < 0 && sumbuY > 0){
        return 2;
    }
    else if(sumbuX < 0 && sumbuY < 0){
        return 3;
    }
    else if(sumbuX > 0 && sumbuY < 0){
        return 4;
    }else{
        return 0;
    }
  }

  console.log(quadrant(19, -56))

