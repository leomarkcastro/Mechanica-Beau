function IDGen() { 
    return (Math.random() + 1).toString(36).substring(7)
};

function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

export {
    IDGen,
    numberWithCommas
}