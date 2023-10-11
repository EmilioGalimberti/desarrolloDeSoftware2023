const request = require('supertest');


describe('GET /api/productos', () => {
    //Cada caso de prueba asociado al endpoint:
    //escenario feliz:
    it('Debería devolver cod 200 con un listado de productos no vacío', async () => {
        const res = await request('localhost:3000')
            .get('/api/productos')
            .set('Accept', 'application/json')
        expect(res.status).toEqual(200)
        expect(res.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    id: expect.any(Number),
                    nombre: expect.any(String)
                })
            ])
        )
    })

    /*it('Debería
    
    devolver cod 200 con un mensaje de listado vacío', async()=>{
     const res = await request('localhost:3000')
     .get('/api/productos')
     .set('Accept', 'application/json')
     
     expect(res.status).toEqual(200)
     expect(res.body).toEqual(
 
         expect.objectContaining({
             mensaje: 'Sin productos cargados en la BD!'
         })
     )
    })*/
})

/*
Escenarios posibles:
1.Obtener exitosamente un prodcuto para id 1
2. No obtorener un prodcuto para el id 99 (404)
3. Hubo un error al buscar el producto (500) error del lado del servidor

 Ejucion de test, por un lado tengo que tener una terminal con la api levantada
 y en otra terminal para ejecutar los test npm test
 */

describe("GET /api/productos/:id", function () {
    it("Respuesta OK codigo 200 con un objeto encontrado ", async () => {
        const res = await request("localhost:3000").get("/api/productos/1")
        expect(res.statusCode).toEqual(200)
        expect(res.headers["content-type"]).toEqual("application/json; charset=utf-8");
        expect(res.body).toEqual(
            expect.objectContaining({
                "id": 1,
                "nombre": expect.any(String)
            })
        );
    }
    )
    it("Respuesta código 404 con mensaje objeto no encontrado", async () => {
        const res = await request("localhost:3000").get("/api/productos/99");
        expect(res.statusCode).toEqual(404);
        expect(res.body).toEqual(
            expect.objectContaining(
                { mensaje:  'Producto inexistente! (404) no se encontro' }
            )
        );
    }
    )
});

describe('POST /productos', ()=>{
    it("Respuesta código 200 con objeto creado", async () => {
        const res = await request("localhost:3000").post(
            "/api/productos"
        )
        .set('Accept', 'application/json')
        .send({nombre: 'Producto Supertest', precio: 100, stock:1})
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual(
            expect.objectContaining(
                { 
                    id: expect.any(Number) 
                }
            )
        );
    }
    )

    it("Respuesta código 500 con error interno", async () => {
        const res = await request("localhost:3000").post(
            "/api/productos"
        )
        .set('Accept', 'application/json')
        .send({nombre: 'Producto Supertest', precio: 100})
        expect(res.statusCode).toEqual(500);
        expect(res.body).toEqual(
            expect.objectContaining(
                { 
                    mensaje: 'Error interno!' 
                }
            )
        );
    }
    )
})