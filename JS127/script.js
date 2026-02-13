// function Sum(...args) {
//     for(let i=0;i<args.length;i++)
//     {
//         console.log(args[i]);
//     }
// }

function Sum(...args) {
    return args.reduce((sum,el) => sum+el);
}

function min(...args) {
    return args.reduce((min,el)=> {
        if(min>el)
        {
            return el;
        }
        else
        {
            return min;
        }
    })
}