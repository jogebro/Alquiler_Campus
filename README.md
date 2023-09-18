# EndPoints

#### 1. `Mostrar todos los clientes registrados en la base de datos. ---GET`
```nodejs
http://localhost:5020/clientes
```
#### 2. `Obtener todos los automóviles disponibles para alquiler.`
```nodejs
http://localhost:5020/automoviles
```
#### 3. `Listar todos los alquileres activos junto con los datos de los clientes relacionados.`
```nodejs
http://localhost:5020/alquileres
```
#### 4.`Mostrartodas las reservas pendientes con los datos del cliente y el automóvil reservado.`
```nodejs
http://localhost:5020/reservas
```
#### 5.`Obtener los detalles del alquiler con el ID_Alquiler específico.`
```nodejs
http://localhost:5020/alquileres/

Se envia un ID de la base de datos despues del "/".
Ejemplo: 6505b509c804215afd247f1b
```
#### 6.`Listar los empleados con el cargo de "Vendedor"`
```nodejs
* http://localhost:5020/empleados/vendedor
```
#### 7.`Mostrar la cantidad total de automóviles disponibles en cada sucursal.`
#### 8.`Obtener el costo total de un alquiler específico.`
#### 9.`Listar losclientes conelDNIespecífico.`
#### 10` Mostrar todos los automóviles con una capacidad mayor a 5 personas.`
#### 11` Obtener los detalles del alquiler que tiene fecha de inicio en '2023-07-05'.`
#### 12` Listar las reservas pendientes realizadas por un cliente específico.`
#### 13` Mostrar los empleados con cargo de "Gerente" o "Asistente".`
#### 14` Obtener los datos de los clientes que realizaron almenos un alquiler.`
#### 15` Listar todos los automóviles ordenados por marca y modelo.`
#### 16` Mostrar la cantidad total de automóviles en cada sucursal junto con su dirección.`
#### 17` Obtener la cantidad total de alquileres registrados en la base de datos.`
#### 18` Mostrar los automóviles con capacidad igual a 5 personas y que estén disponibles.`
#### 19` Obtener los datos del cliente que realizó la reservacion`
#### 20` Listar los alquileres con fecha de inicio entre '2023-07-05' y '2023-07-10'.`