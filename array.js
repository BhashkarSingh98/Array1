const Find_Prod = (array, N) => {

    const product = array.reduce((acc, curr) => acc = acc * curr);

    console.log(product);
};

Find_Prod([1, 2, 3, 4, 5], 5);