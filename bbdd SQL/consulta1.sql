-- 3 formas diferentes de hacer lo mismo
SELECT * FROM bancabd.movimientos inner join bancabd.cuentas on movimientos.idCuenta = cuentas.numeroCuenta 
where cuentas.tipocuenta = "ahorro";

SELECT * FROM bancabd.movimientos where movimientos.idCuenta in (select cuentas.numeroCuenta from bancabd.cuentas where cuentas.tipoCuenta = "ahorro");

SELECT movimientos.* FROM bancabd.movimientos,bancabd.cuentas where  movimientos.idCuenta = cuentas.numeroCuenta and 
cuentas.tipocuenta = "ahorro"; 

SELECT c.* 
FROM bancabd.movimientos as c 
join bancabd.cuentas as d
on d.numeroCuenta = c.idCuenta
where tipocuenta="ahorro"; 