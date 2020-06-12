/**
 *-----------------------------------------------------------------------------------
 * === localStorage JCart ===
 *-----------------------------------------------------------------------------------
 * vs 1.0
 *
 * @author    Solutii Soft <office@solutiisoft.ro>
 * @copyright 2013 Solutii Soft
 * @license   2013 Solutii Soft
 * @link      http://www.solutiisoft.com/local-storage-jcart
 * @since     File available since Release 1.0
 */
/* === DEFINE VALUES === */
cartVat = 0.24;
cartCurrency = "$";
productPage = ""; // complete this with your .php product page
imgPath = "images/cart/"; // complete this with yout images path 
/* === END DEFINE VALUES === */


/* === HTML 5 STORAGE === */
function addToStorage(elem, name) {
    localData = localStorage.getItem(name + 'Storage');

    if (localData == "null" || !localData) {
        var Products = new Array();
    } else {
        var Products = JSON.parse(localData);
    }

    productID = elem.parent().next().val();
    productName = elem.parent().next().attr("data-name");
    productPrice = elem.parent().next().attr("data-price");
    productImg = elem.parent().next().attr("data-img");
    productQty = 1;

    $.each(Products, function(index, value) {
        if (value !== null) {
            if (value["id"] == productID) {
                if (name == "cart") {
                    productQty = value["qty"] + 1;
                }
                delete Products[index];
            }
        }
    });

    Products.push({
        "id": productID,
        "name": productName,
        "price": productPrice,
        "img": productImg,
        "qty": productQty
    });

    localStorage.setItem(name + 'Storage', JSON.stringify(Products));
}

/* === END HTML 5 STORAGE === */


/* === UPDATE DETAILS WISH AND CART DROPDOWN === */
function updateDetails(name) {
        Container = JSON.parse(localStorage.getItem(name + 'Storage'));
        totalSum = 0.00;
        nr = 0;
        wishTbody = '';
        cartTbody = '';

        if (Container) {
            $.each(Container, function(index, value) {
                if (value !== null) {
                    totalPrice = value['qty'] * value['price'];
                    totalSum += totalPrice;
                    if (name == "cart") {
                        nr += value['qty'];
                    } else {
                        nr++;
                    }
                }
            });
        }
        $("." + name + "Count").text(nr);

        if (nr < 1) {
            if (name == "wish") {
                wishTbody = '<tr>' +
                    '<td>Your wish list is empty !</td>' +
                    '</tr>';
                $("#wishContainer tbody").html(wishTbody);
            }

            if (name == "cart") {
                $(".subtotal").text("0.00");
                $(".vat").text("0.00");
                $(".total").text("0.00");

                cartTbody = '<tr>' +
                    '<td colspan="7">Your cart is empty!</td>' +
                    '</tr>';
                $(".cartContainer tbody").html(cartTbody);
                $("#cartContainer tbody").html(cartTbody);
            }
        } else {
            if (name == "wish") {
                if (Container) {
                    $.each(Container, function(index, value) {
                        if (value !== null) {
                            wishTbody += '<tr>' +
                                '<td><a href="' + productPage + '?productid=' + value['id'] + '"><img src="' + imgPath + value['img'] + '" alt="" width="45"></a></td>' +
                                '<td><a href="' + productPage + '?productid=' + value['id'] + '">' + value['name'] + '</a></td>' +
                                '<td>' + cartCurrency + ' ' + value['price'] + '</td>' +
                                '<td><a href="#" role="button" class="btn btn-danger btn-xs pull-right remove-product" title="remove" product-id=' + value['id'] + '><i class="fa fa-times"></i></a></td>' +
                                '</tr>';
                        }
                    });
                }
                $("#wishContainer tbody").html(wishTbody);
            }

            if (name == "cart") {
                if (Container) {
                    $.each(Container, function(index, value) {
                        if (value !== null) {
                            totalPrice = value['qty'] * value['price'];
                            cartTbody += '<tr>' +
                                '<td><a href="' + productPage + '?productid=' + value['id'] + '"><img src="' + imgPath + value['img'] + '" alt="" width="45"><a></td>' +
                                '<td>' + value['qty'] + '</td>' +
                                '<td> x <a href="' + productPage + '?productid=' + value['id'] + '">' + value['name'] + '</a></td>' +
                                '<td class="text-right">' + cartCurrency + totalPrice.toFixed(2) + " " + '</td>' +
                                '<td><a href="#" role="button" class="btn btn-danger btn-xs pull-right remove-product" title="remove" product-id=' + value['id'] + '><i class="fa fa-times"></i></a></td>' +
                                '</tr>';
                        }
                    });
                }

                total = totalSum + (totalSum * cartVat);
                totalVat = totalSum * cartVat;
                $(".subtotal").text(cartCurrency + " " + totalSum.toFixed(2));
                $(".vat").text(cartCurrency + " " + totalVat.toFixed(2));
                $(".total").text(cartCurrency + " " + total.toFixed(2));

                $(".cartContainer tbody").html(cartTbody);
            }
        }
    }
    /* === UPDATE DETAILS WISH AND CART DROPDOWN === */


/* === WISH LIST === */

updateDetails("wish");

$(".wish").click(function(e) {
    e.preventDefault();

    wish = $(this);
    wish.each(function() {
        addToStorage(wish, "wish");
    });
    updateDetails("wish");
    showMessage("wish");
});

$(".wishMenu").click(function(e) {
    updateDetails("wish");
    e.stopPropagation();
});

$(".showWish").mouseenter(function() {
    updateDetails("wish");
});

$(".emptyWish").click(function() {
    localStorage.setItem('wishStorage', null);
    $(".wishCount").text(0);
});

$("#wishContainer tbody").delegate(".remove-product", "click", function(e) {
    removeID = $(this).attr("product-id");

    Wish = JSON.parse(localStorage.getItem('wishStorage'));
    if (Wish) {
        $.each(Wish, function(index, value) {
            if (value !== null) {
                if (value['id'] == removeID) {
                    delete Wish[index];
                }
            }
        });
        localStorage.setItem('wishStorage', JSON.stringify(Wish));
    }
    updateDetails("wish");
});

/* === END WISH LIST === */


/* === SHOPING CART === */

updateDetails("cart");

$(".cart").click(function(e) {
    e.preventDefault();

    cart = $(this);
    cart.each(function() {
        addToStorage(cart, "cart");
    });
    updateDetails("cart");
    showMessage("cart");
});

$(".cartMenu").click(function(e) {
    updateDetails("cart");
    e.stopPropagation();
});

$(".showCart").mouseenter(function() {
    updateDetails("cart");
});

$(".emptyCart").click(function() {
    localStorage.setItem('cartStorage', null);
    updateDetails("cart");
});

$(".cartContainer tbody, #cartContainer tbody").delegate(".remove-product", "click", function(e) {
    removeID = $(this).attr("product-id");

    Cart = JSON.parse(localStorage.getItem('cartStorage'));
    if (Cart) {
        $.each(Cart, function(index, value) {
            if (value !== null) {
                if (value['id'] == removeID) {
                    delete Cart[index];
                }
            }
        });
        localStorage.setItem('cartStorage', JSON.stringify(Cart));
    }
    updateDetails("cart");
    showCheckout();
});

/* === END SHOPING CART === */


/* === CHECKOUT === */
showCheckout();

function showCheckout() {
    Cart = JSON.parse(localStorage.getItem('cartStorage'));
    cartTbody = '';
    totalSum = 0;

    if (Cart) {
        $.each(Cart, function(index, value) {
            if (value !== null) {
                totalPrice = value['qty'] * value['price'];
                cartTbody += '<tr>' +
                    '<td><img src="' + imgPath + value['img'] + '" alt="" width="80"></td>' +
                    '<td>' +
                    '<div class="input-group">' +
                    '<input type="number" class="form-control"' +
                    'value="' + value['qty'] + '"' + ' p-id="' + value['id'] + '" data-name="' + value['name'] + '" data-price="' + value['price'] + '" data-img="' + value['img'] + '">' +
                    '<span class="input-group-btn">' +
                    '<button class="btn btn-primary updatePrice" type="button">Update</button>' +
                    '</span>' +
                    '</div' +
                    '</td>' +
                    '<td>' + value['name'] + '</td>' +
                    '<td class="text-right">' + cartCurrency + value['price'] + " " + '</td>' +
                    '<td class="text-right">' + cartCurrency + totalPrice.toFixed(2) + " " + '</td>' +
                    '<td class="text-right">' + cartCurrency + (totalPrice * cartVat).toFixed(2) + " " + '</td>' +
                    '<td><a href="#" role="button" class="btn btn-danger pull-right remove-product" title="remove" product-id=' + value['id'] + '>Remove item</a></td>' +
                    '</tr>';
            }
        });
    }
    $("#cartContainer tbody").html(cartTbody);
    updateDetails("cart");
}

/* update cart */
$("#cartContainer").delegate(".updatePrice", "click", function() {
    updateCart($(this).parent().prev());
});

function updateCart(elem) {

        var productID = elem.attr("p-id");
        var Qty = parseInt(elem.val());

        Products = JSON.parse(localStorage.getItem('cartStorage'));

        $.each(Products, function(index, value) {
            if (value !== null) {
                if (value['id'] == productID) {
                    if (Qty === 0) {
                        delete Products[index];
                    } else {
                        Products[index]['qty'] = Qty;
                    }
                }
            }
        });

        localStorage.setItem('cartStorage', JSON.stringify(Products));

        showCheckout();
    }
    /* === END CHECKOUT === */