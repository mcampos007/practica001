import { Router } from "express";

const router = Router();


//Crear ruta
router.get('/',(req,res) => {
    res.render("index", {
        title: "my first template",
        nombre: "Marioborss",
        filecss:"syles.css"
    })
});

//Array de usuarios
const users = [
    {
      nombre: 'Juan',
      apellido: 'Gómez',
      edad: 15,
      correo: 'juan@gmail.com',
      telefono: '123-456-7890'
    },
    {
      nombre: 'María',
      apellido: 'López',
      edad: 30,
      correo: 'maria@hotmail.com',
      telefono: '987-654-3210'
    },
    {
      nombre: 'Carlos',
      apellido: 'Martínez',
      edad: 22,
      correo: 'carlos@yahoo.com',
      telefono: '555-123-4567'
    },
    {
      nombre: 'Ana',
      apellido: 'Rodríguez',
      edad: 28,
      correo: 'ana@gmail.com',
      telefono: '321-789-4560'
    },
    {
      nombre: 'Pedro',
      apellido: 'Sánchez',
      edad: 5,
      correo: 'pedro@gmail.com',
      telefono: '111-222-3333'
    }
  ];
  
  console.log(users);


  
router.get('/usuarios', (req,res) => {
    // Obtener un índice aleatorio
const indiceAleatorio = Math.floor(Math.random() * users.length);
// Obtener el usuario aleatorio
const usuario = users[indiceAleatorio];
    res.render('usuario', {
        title:"usuario aleatorio",
        usuario,
        isMayor: usuario.edad>=18
    })
})

const food = [
    { name: 'Hamburguesa', price: 10.99 },
    { name: 'Pizza', price: 8.49 },
    { name: 'Ensalada', price: 6.99 },
    { name: 'Sushi', price: 12.99 },
    { name: 'Tacos', price: 9.99 }
  ];

  const usersrole = 
    {
      nombre: 'Juan',
      apellido: 'Gómez',
      edad: 15,
      correo: 'juan@gmail.com',
      telefono: '123-456-7890',
      role:"Admin"
    };

router.get('/foods' ,(req,res) => {
    console.log(food);
    console.log(usersrole);
    res.render('foods', {
        title:"Foods",
        isAdmin: usersrole.role === "Admin",
        food,
        filecss:"styles.css",
    });

});

export default router;

