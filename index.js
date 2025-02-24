const arrfunc=(arg)=>{
    const newarr=arg.filter((cv)=>{
        return cv%2!==0
    })
    const newarr1=newarr.map((cv)=>{
        return cv*2
    })
    console.log(newarr1.sort())
}


const my_arr=[2,4,11,9,8,7];
arrfunc(my_arr)