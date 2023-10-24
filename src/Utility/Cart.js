//TODO ADD CART
exports.addCart_update = (id, price, title, type, action, dtArray) => { //id, price, title, type
    // TODO GET DATA
    var cart_data = localStorage.getItem("ssvm_cart"); //TODO GET CART DATA 
    // console.log(dtArray)
    if (cart_data === null || JSON.parse(cart_data).length === 0) {

        //BUILD, STORE TO LOCAL STORAGE
        // LOOP
        const cart_dt = [];
        // dtArry sample {id:dt, date: dateAr, event_type: evtype, evtitle:title} 
        for (var m = 0; m < dtArray.length; m++) {

            var cart_value = { pid: id, amount: price, count: 1, title: title, event_type: type, actualprice: price, did: dtArray[m].id, dar: dtArray[m].date, dtitle: dtArray[m].evtitle };
            cart_dt.push(cart_value);
        }

        localStorage.setItem("ssvm_cart", JSON.stringify(cart_dt));
    } else {
        //TODO CART UPDATE
        var copyCart = JSON.parse(cart_data); //TODO JSON PARCE

        // TODO check


        for (var k = 0; k < dtArray.length; k++) {

            var cart_value_tem = { pid: id, amount: price, count: 1, title: title, event_type: type, actualprice: price, did: dtArray[k].id, dar: dtArray[k].date, dtitle: dtArray[k].evtitle };
            copyCart.push(cart_value_tem);
        }

        localStorage.setItem("ssvm_cart", JSON.stringify(copyCart));


        // if (copyCart.some(cartItem => cartItem.pid === id && cartItem.event_type === type)) {

        //     if (action === "add") {
        //         console.log(copyCart);
        //         for (var i = 0; i < copyCart.length; i++) {
        //             console.log(price)
        //             if (copyCart[i].pid === id && copyCart[i].event_type === type) {
        //                 copyCart[i].amount = copyCart[i].actualprice * (copyCart[i].count + 1);
        //                 copyCart[i].count += 1;
        //                 break;
        //             }
        //         }
        //     }
        //     else {


        //         for (var i = 0; i < copyCart.length; i++) {
        //             if (copyCart[i].pid === id && copyCart[i].event_type === type) {

        //                 if (copyCart[i].count === 1) {
        //                     var cart_data = JSON.parse(localStorage.getItem("ssvm_cart"));
        //                     cart_data = cart_data.filter(product => product.pid !== id);
        //                     localStorage.setItem("ssvm_cart", JSON.stringify(cart_data));
        //                     return (cart_data);
        //                 }
        //                 console.log(price)
        //                 copyCart[i].amount = copyCart[i].amount - copyCart[i].actualprice;
        //                 copyCart[i].count -= 1;
        //                 break;
        //             }
        //         }


        //     }
        // }
        // else {
        //     var cart_value = { pid: id, amount: price, count: 1, title: title, event_type: type, actualprice: price };
        //     copyCart.push(cart_value);
        // }
        // localStorage.setItem("ssvm_cart", JSON.stringify(copyCart));
    }


    // console.log(localStorage.getItem("ssvm_cart"));


    return JSON.parse(localStorage.getItem("ssvm_cart"));



}

exports.RemoveOneDataFromCart = (id, type, did) => {
    //TODO GET VALUE FROM SESSION STORAGE
    var cart_data = JSON.parse(localStorage.getItem("ssvm_cart"));
    // console.log(cart_data);
    cart_data = cart_data.filter(arr => arr.id !== id || arr.etype !== type);
    localStorage.setItem("ssvm_cart", JSON.stringify(cart_data));
    return (cart_data);
}


exports.CartAddRemove = (name, image, price, id, action) => {
    var cart_data = localStorage.getItem("new_cart"); //TODO GET CART DATA 
    var copyCart = JSON.parse(cart_data); //TODO JSON PARCE

    for (var i = 0; i < copyCart.length; i++) {
        if (copyCart[i].id === id && copyCart[i].id === id) {
            if (action === 'add') {
                copyCart[i].amount = copyCart[i].price * (copyCart[i].count + 1);
                copyCart[i].count += 1;
            } else {
                if (copyCart[i].count === 1) {
                    copyCart = copyCart.filter(product => product.id !== id || product.name !== name);
                    break;
                }
                copyCart[i].amount = copyCart[i].amount - copyCart[i].price;
                copyCart[i].count -= 1;
            }
            break;
        }
    }

    localStorage.setItem("new_cart", JSON.stringify(copyCart));
    return (copyCart)


}


exports.RemoveAllDataFromCart = () => {
    //TODO GET VALUE FROM SESSION STORAGE
    let cart_data = [];
    localStorage.removeItem("ssvm_cart");
    return (cart_data);
}





// ----------- NEW METHODS ---------//

exports.NewCartAdd = (name, product_image,attribute_id,quantity, price, id, action) =>{
    var cart_data = localStorage.getItem("new_cart"); //TODO GET CART DATA 
    const cart_dt = [];

    const SampleObject = { name: name, image: product_image, attribute_id : attribute_id, quantity: quantity,  price: price, id: id, count: 1 }

    if (cart_data === null || JSON.parse(cart_data).length === 0) {
        cart_dt.push(SampleObject);
        localStorage.setItem("new_cart", JSON.stringify(cart_dt));
    }

    else {
        var copyCart = JSON.parse(cart_data);
        let index = copyCart.findIndex(crdDT => crdDT.id === id);
        if (action === 'minus') {
            if (copyCart[index].count === 1) {
                copyCart.splice(index, 1)
            } else {
                copyCart[index].count -= 1;
            }
            localStorage.setItem("new_cart", JSON.stringify(copyCart))

        } else {

         

            if (copyCart.some(copyCart => copyCart.id === id)) {
                if (index !== -1) {
                    if (action === 'add') {
                        copyCart[index].count += 1
                    }
                }
                localStorage.setItem("new_cart", JSON.stringify(copyCart))
                
            } else {
                copyCart.push(SampleObject)
                localStorage.setItem("new_cart", JSON.stringify(copyCart))

                
            }
        }


    }


    return JSON.parse(localStorage.getItem("new_cart"));

}