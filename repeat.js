

let word3="abcabcbb";
const multiple=(word)=>{
  
   let cont=word.split('');
 
 	const rdo=cont.filter((value,index)=>{
 	return cont.indexOf(value)===index;
 });

 return rdo.length;
  
    }

  multiple(word3);
   
   