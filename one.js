function solveProblem(viewers,unstable,minutes)
{
    let finalResult=0
    let res=0
    let newArr = unstable.map(num => 
    {
        if(num===1)
          return  num=0
        else if(num===0)
           return num=1
    } 
    ); 
    
   for(let i=0;i<newArr.length-1;i++)
   {
    let arr2 = [...newArr];
    {
        
        for(let k=0;k<minutes;k++){
            arr2[i+k]=1;
            res=0
            for(let m=0;m<viewers.length;m++){
                res=res+(viewers[m]*arr2[m])

            }
            finalResult=res>finalResult?res:finalResult   
        }
    }
   }
return finalResult
}



// const viewers = [10, 20, 30, 40, 50];
// const unstable = [1, 1, 1, 1, 1];
// const minutes = 3;
// // Output: 120


// const viewers = [5, 1, 2];
// const unstable = [1, 1, 0];
// const minutes = 2;
//o/p 8

// const viewers = [4, 5, 6, 7, 8];
// const unstable = [0, 0, 0, 0, 0];
// const minutes = 2;
//30

// const viewers = [10, 5, 8, 15, 3, 12, 20, 2];
// const unstable = [1, 0, 1, 1, 0, 1, 1, 0];
// const minutes = 2;
//42

// const viewers = [2,3,4,1,2,8,6,3];
// const unstable = [1, 0, 1,0,1,0,1,0];
// const minutes = 2;
// //21

// const viewers = [5, 1, 2];
// const unstable = [1, 1, 0];
// const minutes = 2;
// //8

console.log(solveProblem(viewers,unstable,minutes))

