
// Elección de planes de Netflix

let nombreCompleto = confirm("Desea elegir un plan de Netflix?") ;
let plan = 0 ;
let pago = 0 ;
let precioAnual = 0 ;
let precio = 0 ;
let total = 0 ;
let subtotal = 0 ;
let impuesto = 0 ;
let descuento = 0 ;


if( nombreCompleto == true){

    console.log("Bienvenid@!") ;
    console.log("Nuestros planes son:") ;
    console.log("- Basico por AR$429 mensual + Impuestos (64%)") ;
    console.log("- Estandar por AR$799 mensual + Impuestos (64%)") ;
    console.log("- Premium por AR$1199 mensual + Impuestos (64%)") ;
    plan = prompt("¿Que plan desea elegir?").toLowerCase() ;
    seleccionPlan() ;
    console.log("Métodos de Pago:") ;
    console.log("- Mensual") ;
    console.log("- Anual (-10%)") ;
    pago = prompt("¿Como desea pagar?").toLowerCase() ;
    metodoPago() ;
}

function seleccionPlan(){
    switch(plan) {
        case "basico":
            precio = 429 ;
            return console.log("Buenisimo! Usted eligió el plan Básico") ;      
        case "estandar":
            precio = 799 ;
            return console.log("Buenisimo! Usted eligió el plan Estándar") ;
        case "premium":
            precio = 1119 ;
            return console.log("Buenisimo! Usted eligió el plan Premium") ;
        default:
            return "El plan seleccionado no existe!" ;
    }
}

function metodoPago(){
    switch(pago) {
        case "mensual":
            console.log("Pago mensual de: $",precio) ;
            impuesto = precio * 0.64 ;
            console.log("Impuesto país de: $",impuesto) ;
            total = precio + impuesto ;
            console.log("TOTAL por mes: $",total) ;
            return ;

        case "anual":
            precioAnual = precio * 12 ;
            console.log("Pago anual de: $",precioAnual) ;
            impuesto = precioAnual * 0.64 ;
            console.log("Impuesto país de: $",impuesto) ;
            subtotal = precioAnual + impuesto ;
            descuento = subtotal * 0.10 ;
            console.log("SubTotal: $",subtotal, "- 10%") ;
            total = subtotal - descuento ;
            console.log("TOTAL por año: $",total) ;
            return ;
        
        default:
            return "El metodo de pago no existe!" ;
    }
}