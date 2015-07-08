function dataTypes (arr_type){
    if (typeof(arr_type) === 'string'){
        return arr_type.length;
    }
    else if (arr_type == null){
        return ("no value");
    } 
    else if (typeof(arr_type) === 'undefined'){
        return ("no value");
    }
    else if (typeof(arr_type) === 'boolean'){
        return arr_type;
    }
    else if (typeof(arr_type) === 'number'){
        if (arr_type < 100){
            return ("less than 100");
        }
        else if (arr_type > 100){
            return ("more than 100");
        }
        else {
            return ("equal to 100");
        }
    }
    else if (typeof (arr_type) === 'object'){
        if (!arr_type[2]){
          return undefined;
        }
        else {
          return arr_type[2];
        }
    }
    else if (typeof(arr_type) === 'function'){
      return arr_type(true);
    }
}


