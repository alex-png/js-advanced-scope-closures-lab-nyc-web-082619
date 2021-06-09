function produceDrivingRange(range){
   //str1 == 12th
    return (str1, str2)=>{
        let num1 = parseInt(str1.substring(0, str1 - 2));
        let num2 = parseInt(str2.substring(0, str2-2));
        //find the difference between two nums
        //
        const difference = Math.abs(num1 - num2);
        if(difference > range){
            let output = difference - range;
            return `${output} blocks out of range`;
        }else{
            let output = range - difference;
            return `within range by ${output}`;
        }
    }


}