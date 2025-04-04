const products = [
    {
        id: 1,
        name: "Reloj Cronos",
        precio: 250000,
        categoria: "Hombre",
        colores: [
            { name: "Dorado", hex: "#FFD700" },
            { name: "Plateado", hex: "#C0C0C0" },
            { name: "Bronce", hex: "#CD7F32" }
        ],
        descripcion: "Hermoso modelo Cronos para caballero, con un toque místico pero elegante. Luce fantástico con todos tus outfits.",
        image: "/Cronos.jpeg",
        model3D: "/DiseñoCronos.glb",
        model3DHand: "/CronosMano.glb",
        gallery: [
            "/Cronos.jpeg",
            "/Cronos2.jpg",
            "/Cronos3.jpeg",
            "/Cronos4.jpeg",
        ],
    },
    {
        id: 2,
        name: "Reloj Ares",
        price: 150,
        categoria: "Unisex",
        image: "/assets/Ares.jpeg",
        model3D: "/DiseñoAres.glb",
        model3DHand: "/AresMano.glb",
        gallery: [
            "/Ares.jpeg",
            "/Ares2.jpg",
            "/Ares3.jpeg",
        ],
    },
    {
        id: 3,
        name: "Reloj Poseidon",
        price: 150,
        categoria: "Hombre",
        image: "/assets/images/reloj2.jpg",
        model3D: "/relojes/reloj2.glb",
        model3DHand: "/relojes/reloj2_hand.glb",
        gallery: [
            "/reloj2_1.jpg",
            "/reloj2_2.jpg",
            "/reloj2_3.jpg",
        ],
    },
];

export default products;
