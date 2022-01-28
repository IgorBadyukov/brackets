module.exports = function check(str, bracketsConfig) {
    let k = 0;
    let f = 0;
    let prevl = 0;
    let l = 0;
    let prevSev = 0;
    let sev = 0;
    let prevEight = 0;
    let eight = 0;
    for (let ind = 0; ind < str.length; ind++) {
      if (str[ind]==='|') {
        if ( l== 0) {
          l++;
          prevl = ind;
          continue;
        }
        else if((ind - prevl)%2 != 0){
          l--;
          continue;
        }
        else {
          return false;
        }
      }
      else if(str[ind] === '7') {
        if ( sev == 0) {
          sev++;
          prevSev = ind;
          continue;
        }
        else if((ind - prevSev)%2 != 0){
          sev--;
          continue;
        }
        else {
          return false;
        }
      }
      else if(str[ind] === '8') {
        if ( eight == 0) {
          eight++;
          prevEight = ind;
          continue;
        }
        else if((ind - prevEight)%2 != 0){
          eight--;
          continue;
        }
        else {
          return false;
        }
      }
      else {
        k++;
        for (let item of bracketsConfig) {
          if (item[0] === str[ind]) {
            for (let i = ind; i < str.length; i++) {
              if (str[i] === item[1]  && (i - ind)%2 != 0) {
                f++;
                k--;
                break;
              }
            }
          }
          else if (str[ind] === item[1] && f > 0) {
            k--;
            f--;
          }
        }
      }
    }
    if (k == 0 && l == 0 && sev == 0 && eight == 0) {
      return true;
    }
    else {
      return false;
    }
};


