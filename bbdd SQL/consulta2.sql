SELECT distinct(clientes.dni) FROM bancabd.clientes
INNER JOIN bancabd.titulares 
on clientes.dni = titulares.idCliente INNER JOIN bancabd.cuentas
on cuentas.numeroCuenta = titulares.idCuenta
where cuentas.saldo > 1000;
