// src/menuData.js
export const menuData = {
categorias : {
  "Fresas con crema": {
    tamano: {
      "Básico": {
        precio: 9,
        frutas: ["Plátano", "Mango", "Fresa", "Piña", "Uva", "Mandarina", "Sandía"],
        cremas: ["Vainilla", "Maracumango", "Chocolate", "Oreo", "Choco Oreo", "Manjar", "Fresa"],
        toppings: ["Oreo", "Gomitas", "Trululu", "Doña Pepa", "Chocolate Oscuro", "Chocolate Blanco", "Chin Chin", "Marsmelos", "Maní", "Cereal copix", "Granola", "Obsesión"],
        jarabes: ["Leche Condensada", "Fudge de chocolate", "Manjar", "Sirope de fresa", "Miel"],

        maxFrutas: 2,
        maxCremas: 2,
        maxJarabes: 2,
        maxToppings: 2,
      },
      "Mediano": {
        precio: 13,
        frutas: ["Plátano", "Mango", "Fresa", "Piña", "Uva", "Mandarina", "Sandía"],
        cremas: ["Vainilla", "Maracumango", "Chocolate", "Oreo", "Choco Oreo", "Manjar", "Fresa"],
        toppings: ["Oreo", "Gomitas", "Trululu", "Doña Pepa", "Chocolate Oscuro", "Chocolate Blanco", "Chin Chin", "Marsmelos", "Maní", "Cereal copix", "Granola", "Obsesión"],
        jarabes: ["Leche Condensada", "Fudge de chocolate", "Manjar", "Sirope de fresa", "Miel"],

        maxCremas: 2,
        maxFrutas: 2,
        maxJarabes: 2,
        maxToppings: 3,
      },

      "Extra": {
        precio: 15,
        frutas: ["Plátano", "Mango", "Fresa", "Piña", "Uva", "Mandarina", "Sandía"],
        cremas: ["Vainilla", "Maracumango", "Chocolate", "Oreo", "Choco Oreo", "Manjar", "Fresa"],
        toppings: ["Oreo", "Gomitas", "Trululu", "Doña Pepa", "Chocolate Oscuro", "Chocolate Blanco", "Chin Chin", "Marsmelos", "Maní", "Cereal copix", "Granola", "Obsesión"],
        jarabes: ["Leche Condensada", "Fudge de chocolate", "Manjar", "Sirope de fresa", "Miel"],

        maxCremas: 2,
        maxFrutas: 2,
        maxJarabes: 2,
        maxToppings: 4,
      },
      "MegaCream": {
        precio: 29,
        frutas: ["Plátano", "Mango", "Fresa", "Piña", "Uva", "Mandarina", "Sandía"],
        cremas: ["Vainilla", "Maracumango", "Chocolate", "Oreo", "Choco Oreo", "Manjar", "Fresa"],
        toppings: ["Oreo", "Gomitas", "Trululu", "Doña Pepa", "Chocolate Oscuro", "Chocolate Blanco", "Chin Chin", "Marsmelos", "Maní", "Cereal copix", "Granola", "Obsesión"],
        jarabes: ["Leche Condensada", "Fudge de chocolate", "Manjar", "Sirope de fresa", "Miel"],

        maxCremas: 2,
        maxFrutas: 2,
        maxJarabes: 2,
        maxToppings: 5,

      }
    }
  },
  "Raspadillas": {
    tamano: {
      "Clásico": {
        precio: 3,
        jaleas: ["Tamarindo", "Cola", "Piña", "Fresa"],
        maxJaleas: 4,
      },
      "PuraFruta": {
        precio: 7,
        frutas: ["Plátano", "Mango", "Fresa", "Piña", "Uva", "Mandarina", "Sandía"],
        jaleas: ["Tamarindo", "Cola", "Piña", "Fresa"],
        maxJaleas: 4,
        maxFrutas: 3,
      },
      "MegaCream": {
        precio: 9.50,
        toppings: ["Oreo", "Gomitas", "Trululu", "Doña Pepa", "Chocolate Oscuro", "Chocolate Blanco", "Chin Chin", "Marsmelos", "Maní", "Cereal copix", "Granola", "Obsesión"],
        frutas: ["Plátano", "Mango", "Fresa", "Piña", "Uva", "Mandarina", "Sandía"],
        jaleas: ["Tamarindo", "Cola", "Piña", "Fresa"],
        maxJaleas: 4,
        maxFrutas: 3,
        maxToppings: 3,
      },
      "Achorada": {
        precio: 18,
        frutas: ["Plátano", "Mango", "Fresa", "Piña", "Uva", "Mandarina", "Sandía"],
        jaleas: ["Tamarindo", "Cola", "Piña", "Fresa"],
        maxJaleas: 4,
        maxFrutas: 4,
      }
    }
  },
  "Crepes": {
    tamano: {
      "Clasico": {
        precio: 16,
        frutas: ["Plátano", "Mango", "Fresa", "Piña"],
        jarabes: ["Fudge de chocolate", "Manjar"],

        maxJarabes: 1,
        maxFrutas: 2,
      },
      "Especial Nutella": {
        precio: 19,
        frutas: ["Plátano", "Mango", "Fresa", "Piña"],

        maxFrutas: 2,
      }
    }
  },
  "Fresas Locas": {
    tamano: {
      "Personal": {
        precio: 17,
        toppings: ["Oreo", "Gomitas", "Trululu", "Doña Pepa", "Chocolate Oscuro", "Chocolate Blanco", "Chin Chin", "Marsmelos", "Maní", "Cereal copix", "Granola", "Obsesión"],
        jarabes: ["Leche Condensada", "Fudge de chocolate", "Manjar", "Sirope de fresa", "Miel"],

        maxJarabes: 1,
        maxToppings: 1,
      },
      "Familiar": {
        precio: 34,
        toppings: ["Oreo", "Gomitas", "Trululu", "Doña Pepa", "Chocolate Oscuro", "Chocolate Blanco", "Chin Chin", "Marsmelos", "Maní", "Cereal copix", "Granola", "Obsesión"],
        jarabes: ["Leche Condensada", "Fudge de chocolate", "Manjar", "Sirope de fresa", "Miel"],

        maxJarabes: 2,
        maxToppings: 2,
      }

    }
  },

  "Ensalada de frutas": {
    tamano: {
      "Personal": {
        precio: 9,
        frutas: ["Plátano", "Mango", "Fresa", "Piña", "Uva", "Mandarina", "Sandía"],
        toppings: ["Oreo", "Gomitas", "Trululu", "Doña Pepa", "Chocolate Oscuro", "Chocolate Blanco", "Chin Chin", "Marsmelos", "Maní", "Cereal copix", "Granola", "Obsesión"],
        jarabes: ["Leche Condensada", "Fudge de chocolate", "Manjar", "Sirope de fresa", "Miel"],

        maxJarabes: 1,
        maxFrutas: 5,
        maxToppings: 2,
      }
    }
  },

  "Minidonas": {
    tamano: {
      "Seis": {
        precio: 6,
        toppings: ["Oreo", "Gomitas", "Trululu", "Doña Pepa", "Chocolate Oscuro", "Chocolate Blanco", "Chin Chin", "Marsmelos", "Maní", "Cereal copix", "Granola", "Obsesión"],
        jarabes: ["Leche Condensada", "Fudge de chocolate", "Manjar", "Sirope de fresa", "Miel"],

        maxJarabes: 1,
        maxToppings: 2,
      },
      "Nueve": {
        precio: 8,
        toppings: ["Oreo", "Gomitas", "Trululu", "Doña Pepa", "Chocolate Oscuro", "Chocolate Blanco", "Chin Chin", "Marsmelos", "Maní", "Cereal copix", "Granola", "Obsesión"],
        jarabes: ["Leche Condensada", "Fudge de chocolate", "Manjar", "Sirope de fresa", "Miel"],

        maxJarabes: 2,
        maxToppings: 2,
      },
      "Doce": {
        precio: 12,
        toppings: ["Oreo", "Gomitas", "Trululu", "Doña Pepa", "Chocolate Oscuro", "Chocolate Blanco", "Chin Chin", "Marsmelos", "Maní", "Cereal copix", "Granola", "Obsesión"],
        jarabes: ["Leche Condensada", "Fudge de chocolate", "Manjar", "Sirope de fresa", "Miel"],

        maxJarabes: 2,
        maxToppings: 3,
      },
      "Con crema": {
        precio: 14,
        frutas: ["Plátano", "Mango", "Fresa", "Piña", "Uva", "Mandarina", "Sandía"],
        cremas: ["Vainilla", "Maracumango", "Chocolate", "Oreo", "Choco Oreo", "Manjar", "Fresa"],
        toppings: ["Oreo", "Gomitas", "Trululu", "Doña Pepa", "Chocolate Oscuro", "Chocolate Blanco", "Chin Chin", "Marsmelos", "Maní", "Cereal copix", "Granola", "Obsesión"],
        jarabes: ["Leche Condensada", "Fudge de chocolate", "Manjar", "Sirope de fresa", "Miel"],

        maxFrutas: 1,
        maxCremas: 1,
        maxJarabes: 1,
        maxToppings: 3,
      }
    }
  },
  "Postres": {
    tamano: {
      "Cheescake fresa": {
        precio: 10,
      },
      "Cheescake de maracuya": {
        precio: 10,
      },
      "Cinamon Roll": {
        precio: 12,
      },
      "Cheescake de Brownie": {
        precio: 16,
      },
      "Merengado de fresa": {
        precio: 15,
      },
      "Galletas New York": {
        precio: 14,
      },
      "Tropical de piña": {
        precio: 17,
      },
    }
  },
  "Wafles": {
    tamano: {
      "Clásico": {
        precio: 14,
        jarabes: ["Leche Condensada", "Fudge de chocolate", "Manjar", "Sirope de fresa", "Miel"],

        maxJarabes: 1,
      },
      "ConCrema": {
        precio: 16,
        frutas: ["Plátano", "Mango", "Fresa", "Piña", "Uva", "Mandarina", "Sandía"],
        cremas: ["Vainilla", "Maracumango", "Chocolate", "Oreo", "Choco Oreo", "Manjar", "Fresa"],
        toppings: ["Oreo", "Gomitas", "Trululu", "Doña Pepa", "Chocolate Oscuro", "Chocolate Blanco", "Chin Chin", "Marsmelos", "Maní", "Cereal copix", "Granola", "Obsesión"],
        jarabes: ["Leche Condensada", "Fudge de chocolate", "Manjar", "Sirope de fresa", "Miel"],

        maxFrutas: 2,
        maxCremas: 1,
        maxJarabes: 1,
        maxToppings: 1,
      },
      "The Cream": {
        precio: 24,
        frutas: ["Plátano", "Mango", "Fresa", "Piña", "Uva", "Mandarina", "Sandía"],
        cremas: ["Vainilla", "Maracumango", "Chocolate", "Oreo", "Choco Oreo", "Manjar", "Fresa"],
        toppings: ["Oreo", "Gomitas", "Trululu", "Doña Pepa", "Chocolate Oscuro", "Chocolate Blanco", "Chin Chin", "Marsmelos", "Maní", "Cereal copix", "Granola", "Obsesión"],
        
        maxFrutas: 2,
        maxCremas: 1,
        maxToppings: 2,
      }
    },
  },

  "Helados": {
    tamano: {
      "Clasico": {
        precio: 7,
      },
      "Doble": {
        precio: 18,
        toppings: ["Oreo", "Gomitas", "Trululu", "Doña Pepa", "Chocolate Oscuro", "Chocolate Blanco", "Chin Chin", "Marsmelos", "Maní", "Cereal copix", "Granola", "Obsesión"],
        
        maxToppings: 1,
      },
      "Fiesta": {
        precio: 22,
      }
    }
  }

},

// ✅ Extras globales (aparecen siempre)
  extras: {
    frutas: ["Plátano", "Mango", "Fresa", "Piña", "Uva", "Mandarina", "Sandía"],
    cremas: ["Vainilla", "Maracumango", "Chocolate", "Oreo", "Choco Oreo", "Manjar", "Fresa"],
    toppings: ["Oreo", "Gomitas", "Trululu", "Doña Pepa", "Chocolate Oscuro", "Chocolate Blanco", "Chin Chin", "Marsmelos", "Maní", "Cereal copix", "Granola", "Obsesión"],
    jarabes: ["Leche Condensada", "Fudge de chocolate", "Manjar", "Sirope de fresa", "Miel"],

  }
};
