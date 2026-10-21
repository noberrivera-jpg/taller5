/* ---------- EJERCICIO 2 ---------- */
const layouts = [
    { nombre: "Real Estate",      imagen: "imagenes/Real Estate.jpg" },
    { nombre: "Library",          imagen: "imagenes/Library.jpg" },
    { nombre: "Transportation",   imagen: "imagenes/Transportation.jpg" },
    { nombre: "Gas & Oil",        imagen: "imagenes/Gas & Oil.jpg" },
    { nombre: "Marketing Agency", imagen: "imagenes/Marketing Agency.jpg" },
    { nombre: "Pizza",            imagen: "imagenes/Pizza.jpg" },
    { nombre: "Flooring",         imagen: "imagenes/Flooring.jpg" },
    { nombre: "Steel Processing", imagen: "imagenes/Steel Processing.jpg" }
];

function crearTarjeta(layout) {
    const figura = document.createElement("figure");
    figura.className = "tarjeta";

    const img = document.createElement("img");
    img.src = layout.imagen;
    img.alt = layout.nombre;

    const leyenda = document.createElement("figcaption");
    leyenda.textContent = layout.nombre;

    figura.appendChild(img);
    figura.appendChild(leyenda);
    return figura;
}

function crearComingSoon() {
    const figura = document.createElement("figure");
    figura.className = "tarjeta";

    const caja = document.createElement("div");
    caja.className = "caja-proximamente";

    const icono = document.createElement("div");
    icono.className = "icono-grid";
    for (let i = 0; i < 9; i++) {
        icono.appendChild(document.createElement("span"));
    }
    caja.appendChild(icono);

    const leyenda = document.createElement("figcaption");
    leyenda.className = "gris";
    leyenda.textContent = "Coming Soon";

    figura.appendChild(caja);
    figura.appendChild(leyenda);
    return figura;
}

function construirEjercicio2() {
    const panel = document.createElement("section");
    panel.className = "panel";

    const titulo = document.createElement("h2");
    titulo.textContent = "Beautiful, Hand-crafted Layouts";
    panel.appendChild(titulo);

    const grid = document.createElement("div");
    grid.className = "grid";
    layouts.forEach(function (layout) {
        grid.appendChild(crearTarjeta(layout));
    });
    grid.appendChild(crearComingSoon());
    panel.appendChild(grid);

    document.getElementById("app").appendChild(panel);
}

/* ---------- EJERCICIO 3 ---------- */
const parrafoGrande = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.";

const columnas = [
    {
        items: [
            {
                titulo: "Market Analysis",
                icono: "imagenes/icono1.jpg",
                texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim."
            },
            {
                titulo: "Top Security",
                icono: "imagenes/icono3.jpg",
                texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim."
            }
        ],
        boton: "Learn More"
    },
    {
        items: [
            {
                titulo: "Fast Support",
                icono: "imagenes/icono2.jpg",
                texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                titulo: "Social Work",
                icono: "imagenes/icono4.jpg",
                texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim."
            }
        ],
        boton: "Details"
    }
];

function crearItem(item) {
    const div = document.createElement("div");
    div.className = "item";

    const img = document.createElement("img");
    img.className = "icono";
    img.src = item.icono;
    img.alt = item.titulo;

    const cuerpo = document.createElement("div");
    cuerpo.className = "cuerpo";

    const h3 = document.createElement("h3");
    h3.textContent = item.titulo;

    const p = document.createElement("p");
    p.textContent = item.texto;

    cuerpo.appendChild(h3);
    cuerpo.appendChild(p);
    div.appendChild(img);
    div.appendChild(cuerpo);
    return div;
}

function construirEjercicio3() {
    const seccion = document.createElement("section");
    seccion.className = "contenedor";

    const titulo = document.createElement("h2");
    titulo.textContent = "What We Do";
    seccion.appendChild(titulo);

    const intro = document.createElement("p");
    intro.className = "intro";
    intro.textContent = parrafoGrande;
    seccion.appendChild(intro);

    const grid = document.createElement("div");
    grid.className = "columnas";

    columnas.forEach(function (col) {
        const divCol = document.createElement("div");
        divCol.className = "columna";

        col.items.forEach(function (item) {
            divCol.appendChild(crearItem(item));
        });

        const boton = document.createElement("button");
        boton.className = "boton";
        boton.textContent = col.boton;
        divCol.appendChild(boton);

        grid.appendChild(divCol);
    });

    seccion.appendChild(grid);
    document.getElementById("app").appendChild(seccion);
}

/* ---------- INDEX ---------- */
const paginas = [
    { texto: "Ejemplo CSS # 2",   archivo: "ejercicio2.html" },
    { texto: "Ejercicio CSS # 3", archivo: "ejercicio3.html" }
];

function construirIndex() {
    const caja = document.createElement("div");
    caja.className = "caja";

    const h1 = document.createElement("h1");
    h1.textContent = "Menú Principal";
    caja.appendChild(h1);

    paginas.forEach(function (pagina) {
        const a = document.createElement("a");
        a.href = pagina.archivo;
        a.className = "enlace";
        a.textContent = pagina.texto;
        caja.appendChild(a);
    });

    document.getElementById("app").appendChild(caja);
}

/* ---------- INICIO ---------- */
switch (document.body.id) {
    case "ejercicio2": construirEjercicio2(); break;
    case "ejercicio3": construirEjercicio3(); break;
    case "index":      construirIndex();      break;
}