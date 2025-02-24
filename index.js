const arrfunc=(arg)=>{
    const newarr=arg.filter((cv)=>{
        return cv%2!==0
    })
    const newarr1=newarr.map((cv)=>{
        return cv*2
    });
    newarr1.sort((x,y)=>{return x-y});
    console.log(newarr1.reverse())
}


const my_arr=[2,4,3,9,8,7,8,5,0];
arrfunc(my_arr)