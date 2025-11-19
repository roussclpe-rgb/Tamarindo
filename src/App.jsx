import { useState,useEffect } from "react";
import "./index.css";
import React from "react";
import { menuData } from "./menuData";
import { useRef } from "react";


export default function App() {
  const [metaDiaria,setMetaDiaria]= useState(() => {
return localStorage.getItem("metaDiaria")
      ? Number(localStorage.getItem("metaDiaria"))
      : 1000;
  });

   const [registroMetas, setRegistroMetas] = useState(() => {
    return JSON.parse(localStorage.getItem("registroMetas")) || [];
  });
  const [montoEfectivo, setMontoEfectivo] = useState(0);
  const [montoYape, setMontoYape] = useState(0);
  const [totalEntregado, setTotalEntregado] = useState(0);
  const [porcentaje, setPorcentaje] = useState(0);
  const [pedidosEntregados, setPedidosEntregados] = useState([]);
  const [historial, setHistorial] = useState([]);



// 🔄 Actualizar totales y porcentaje en tiempo real
  useEffect(() => {
    const totalYape = pedidosEntregados
      .filter((p) => p.metodoPago === "Yape")
      .reduce((acc, p) => acc + p.monto, 0);

    const totalEfectivo = pedidosEntregados
      .filter((p) => p.metodoPago === "Efectivo")
      .reduce((acc, p) => acc + p.monto, 0);

    const total = totalYape + totalEfectivo;
    const progreso = metaDiaria > 0 ? (total / metaDiaria) * 100 : 0;

    setMontoYape(totalYape);
    setMontoEfectivo(totalEfectivo);
    setTotalEntregado(total);
    setPorcentaje(Math.min(progreso, 100)); // nunca pasa de 100%
  }, [pedidosEntregados, metaDiaria]);

  // 💾 Guardar meta y su historial
  useEffect(() => {
    localStorage.setItem("metaDiaria", metaDiaria);
    localStorage.setItem("registroMetas", JSON.stringify(registroMetas));
  }, [metaDiaria, registroMetas]);

  // ✏️ Cambiar meta
  const actualizarMeta = () => {
    const nuevaMeta = prompt("Ingrese nueva meta diaria:", metaDiaria);
    if (nuevaMeta && !isNaN(nuevaMeta)) {
      const valor = Number(nuevaMeta);
      setMetaDiaria(valor);
      setRegistroMetas([
        ...registroMetas,
        { fecha: new Date().toLocaleDateString(), meta: valor },
      ]);
    }
  };
  const [pedido, setPedido] = useState({
    cliente: "",
    categoria: "",
    tamaño: "",
    extras: [],
    metodoPago: "",
  });

  const nombreClienteRef = useRef(null);

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
  const [tamanoSeleccionado, setTamanoSeleccionado] = useState("");
  const [ingredientesSeleccionados, setIngredientesSeleccionados] = useState({
    frutas: [],
    cremas: [],
    toppings: [],
    jarabes: [],
    jaleas: [],
  });

  const [extrasSeleccionados, setExtrasSeleccionados] = useState({
    frutas: [],
    cremas: [],
    toppings: [],
    jarabes: [],
  });

  const preciosExtras = {
    frutas: 2.0,
    cremas: 2.0,
    toppings: 1.0,
    jarabes: 1.0,
  };

  const totalExtras = Object.entries(extrasSeleccionados || {}).reduce(
  (total, [grupo, items]) =>
    total + (preciosExtras[grupo] || 0) * (items?.length || 0),
  0
);


 <h4 style={{ fontSize: "15px", color: "#222", marginTop: "10px" }}>
  Total de Extras:{" "}
  <span style={{ color: "#d14", fontWeight: "bold" }}>
    S/ {totalExtras.toFixed(2)}
  </span>
</h4>

  

const calcularTotalExtras = () => {
  let total = 0;

  Object.keys(extrasSeleccionados).forEach((categoria) => {
    const precio = preciosExtras[categoria];
    const cantidad = extrasSeleccionados[categoria]?.length || 0;

    total += precio * cantidad;
  });

  return total.toFixed(2);
};



  const gruposIngredientes = ["frutas", "toppings", "jarabes", "cremas", "jaleas"];
  const gruposExtras = ["frutas", "toppings", "jarabes", "cremas"];
  const pastelColors = ["#ffe5ec", "#d8e2dc", "#fefae0", "#e9edc9", "#dbe7f0"];
  const coloresExtras = ["#ffb3ba", "#ffdfba", "#ffffba", "#baffc9", "#bae1ff"];
  const iconos = { frutas: "🍓", cremas: "🍦", jarabes: "🍯", toppings: "🍫", jaleas: "🍇" };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPedido({ ...pedido, [name]: value });
  };

  const handleCheckbox = (grupo, item, esIngrediente = true) => {
  if (!categoriaSeleccionada || !tamanoSeleccionado) return;

  const detalles = menuData.categorias[categoriaSeleccionada].tamano[tamanoSeleccionado];
  const maxKeyMap = {
    frutas: "maxFrutas",
    cremas: "maxCremas",
    jarabes: "maxJarabes",
    toppings: "maxToppings",
    jaleas: "maxJaleas",
  };
  const precioActual = detalles?.precio || 0;
  const maxPermitido = detalles[maxKeyMap[grupo]] ?? 0;

  if (esIngrediente) {
    setIngredientesSeleccionados((prev) => ({
      ...prev,
      [grupo]: prev[grupo]?.includes(item)
        ? prev[grupo].filter((i) => i !== item)
        : [...(prev[grupo] || []), item],
    }));
  } else {
    setExtrasSeleccionados((prev) => ({
      ...prev,
      [grupo]: prev[grupo]?.includes(item)
        ? prev[grupo].filter((i) => i !== item)
        : [...(prev[grupo] || []), item],
    }));
  }
};

const [metodoPago, setMetodoPago] = useState("");


  const [pedidos, setPedidos] = useState([]);

  // 💰 Precios base y total (deben estar fuera de agregarPedido)
const precioBase =
  categoriaSeleccionada && tamanoSeleccionado
    ? menuData.categorias[categoriaSeleccionada].tamano[tamanoSeleccionado].precio
    : 0;

const totalPedido = precioBase + totalExtras;

 // 🧾 AGREGAR PEDIDO
const agregarPedido = () => {
  if (!pedido.cliente || !categoriaSeleccionada || !tamanoSeleccionado) {
    alert("Por favor completa los campos obligatorios");
    return;
  }

  // 🔹 Datos base y precios
  const detalles = menuData.categorias[categoriaSeleccionada]?.tamano[tamanoSeleccionado];
  const precioBase = detalles?.precio || 0;

 

  const totalPedido = precioBase + totalExtras;

  // ✅ Primero crear el nuevo pedido
  const nuevoPedido = {
    cliente: pedido.cliente,
    categoria: categoriaSeleccionada,
    tamaño: tamanoSeleccionado,
    precioBase,
    totalExtras,
    totalPedido,
    ingredientesSeleccionados,
    extrasSeleccionados,
    montoEfectivo: 0,
    montoYape: 0,
    estado: "pendiente",
    creadoEn: new Date().toISOString(),
  };

  console.log("✅ Pedido agregado:", nuevoPedido);

  // ✅ Luego agregarlo a la lista
  setPedidos((prev) => [...prev, nuevoPedido]);

  // 🔹 Reset de todos los campos
  setPedido({ cliente: "", categoria: "", tamaño: "", extras: [], metodoPago: "" });
  setCategoriaSeleccionada("");
  setTamanoSeleccionado("");
  setIngredientesSeleccionados({
    frutas: [],
    cremas: [],
    toppings: [],
    jarabes: [],
    jaleas: [],
  });
  setExtrasSeleccionados({ frutas: [], cremas: [], toppings: [], jarabes: [] });
  setMontoEfectivo(0);
  setMontoYape(0);

  if (nombreClienteRef.current) nombreClienteRef.current.focus();
};

// 🪙 ACTUALIZAR MONTOS
const actualizarMonto = (index, campo, valor) => {
  setPedidos((prev) =>
    prev.map((p, i) => (i === index ? { ...p, [campo]: Number(valor) } : p))
  );
};

// Cambiar estado a ENTREGADO
// Cambiar estado a ENTREGADO (usa index porque PedidoCard envía index)
const marcarComoEntregado = (index) => {
  setPedidos(prev => {
    // actualizamos la lista de pedidos
    const updated = prev.map((p, i) => (i === index ? { ...p, estado: "entregado" } : p));

    // agregamos el pedido entregado al array de pedidosEntregados (si lo usas)
    const pedidoEntregado = { ...prev[index], estado: "entregado" };
    setPedidosEntregados(pe => [...pe, pedidoEntregado]);

    return updated;
  });
};


// Cambiar estado a PAGADO
const marcarComoPagado = (index) => {
  setPedidos(prevPedidos => {
    const pedidoPagado = prevPedidos[index];

    // 👉 Solo se agrega UNA VEZ al historial
    setHistorial((prev) => [...prev, pedidoPagado]);


    // 👉 Eliminar del listado normal
    return prevPedidos.filter((_, i) => i !== index);
  });
};




// 🧾 HISTORIAL Y ENTREGADOS
const [mostrarHistorial, setMostrarHistorial] = useState(false);



// 💳 COMPONENTE DE PEDIDO
const PedidoCard = ({ p, index, actualizarMonto, marcarComoPagado, marcarComoEntregado }) => {
  const totalPagado = Number(p.montoEfectivo || 0) + Number(p.montoYape || 0);
  const falta = (p.totalPedido || 0) - totalPagado;

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 8,
        padding: 12,
        marginBottom: 10,
        boxShadow: "0 2px 5px rgba(0,0,0,0.06)"
      }}
    >
      <strong>Cliente:</strong> {p.cliente} <br />
      <strong>Categoría:</strong> {p.categoria} ({p.tamaño}) <br />
      <strong>Base:</strong> S/ {Number(p.precioBase || 0).toFixed(2)} <br />
      <strong>Extras:</strong> S/ {Number(p.totalExtras || 0).toFixed(2)} <br />
      <strong>Total:</strong> S/ {Number(p.totalPedido || 0).toFixed(2)} <br />
      <strong>Ingredientes:</strong>{" "}
      {Object.entries(p.ingredientesSeleccionados || {})
        .flatMap(([g, a]) => a)
        .join(", ") || "Ninguno"}{" "}
      <br />
      <strong>Extras seleccionados:</strong>{" "}
      {Object.entries(p.extrasSeleccionados || {})
        .flatMap(([g, a]) => a)
        .join(", ") || "Ninguno"}{" "}
      <br />
      <strong>Estado:</strong>{" "}
      <span
        style={{
          color:
            p.estado === "pendiente"
              ? "orange"
              : p.estado === "entregado"
              ? "blue"
              : "green"
        }}
      >
        {p.estado}
      </span>

      {/* 📦 Si está pendiente → SOLO marcar como ENTREGADO */}
      {p.estado === "pendiente" && (
        <div style={{ marginTop: 8 }}>
          <button onClick={() => marcarComoEntregado(index)} style={{ marginTop: 6 }}>
            📦 Marcar como Entregado
          </button>
        </div>
      )}

      {/* 📌 Si está ENTREGADO → Aquí recién se paga */}
      {p.estado === "entregado" && (
        <div style={{ marginTop: 8 }}>
          <label>Efectivo:</label>
          <input
            type="number"
            value={p.montoEfectivo || ""}
            onChange={(e) => actualizarMonto(index, "montoEfectivo", e.target.value)}
            style={{ width: 90, marginLeft: 8 }}
          />
          <label style={{ marginLeft: 12 }}>Yape:</label>
          <input
            type="number"
            value={p.montoYape || ""}
            onChange={(e) => actualizarMonto(index, "montoYape", e.target.value)}
            style={{ width: 90, marginLeft: 8 }}
          />

          <p style={{ marginTop: 6 }}>
            Total pagado: S/ {totalPagado.toFixed(2)}{" "}
            {falta > 0 ? (
              <span style={{ color: "red" }}>
                (Falta S/ {falta.toFixed(2)})
              </span>
            ) : (
              <span style={{ color: "green" }}>
                (Puede marcar como pagado)
              </span>
            )}
          </p>

          {totalPagado >= (p.totalPedido || 0) && (
            <button onClick={() => marcarComoPagado(index)} style={{ marginTop: 6 }}>
              💵 Marcar como Pagado
            </button>
          )}
        </div>
      )}

      {/* 💰 Si ya está pagado */}
      {p.estado === "pagado" && (
        <p style={{ color: "green", marginTop: 8 }}>✔ Pagado</p>
      )}
    </div>
  );
};



// EMPIEZA MI INTERFAZ // 
  return (
  <div className="container">
    <h1 className="titulo">🍦 The Cream - Panel de Pedidos</h1>

 <div className="meta-panel">
    <div className="meta-header">
      <button onClick={actualizarMeta}>Cambiar Meta 
</button>
 </div>  

<div className="resumen">
<p> 💵 Efectivo: <b>S/ {montoEfectivo}</b></p>
<p> 📱 Yape: <b>S/ {montoYape}</b></p>
<p>🧾 Total: <b>S/ {totalEntregado}</b></p>
</div>

<div className="progress-container">
<div className="progress-bar">
<div className="pogress" style={{ width: `${porcentaje}%`}}></div>

<p className="progress-text">
  {porcentaje.toFixed(1)}% completado - faltan S/{""}
  {Math.max(metaDiaria - totalEntregado, 0).toFixed(2)} para cumplir la meta 🎉
</p>
</div>
</div>
    <div className="card">
      <h2 className="subtitulo">🆕 Nuevo Pedido</h2>

      <input
        type="text"
        name="cliente"
        value={pedido.cliente}
        onChange={handleChange}
        placeholder="Nombre del cliente"
        className="input"
        ref={nombreClienteRef} 
      />

      <select
        value={categoriaSeleccionada}
        onChange={(e) => {
          setCategoriaSeleccionada(e.target.value);
          setTamanoSeleccionado("");
          setIngredientesSeleccionados({
            frutas: [],
            cremas: [],
            toppings: [],
            jarabes: [],
            jaleas: [],
          });
          setExtrasSeleccionados({ frutas: [], cremas: [], toppings: [], jarabes: [] });
        }}
        className="input"
      >
        <option value="">Seleccionar categoría</option>
        {Object.keys(menuData.categorias).map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {categoriaSeleccionada && (
        <select
          value={tamanoSeleccionado}
          onChange={(e) => setTamanoSeleccionado(e.target.value)}
          className="input"
        >
          <option value="">Seleccionar tamaño</option>
          {Object.keys(menuData.categorias[categoriaSeleccionada].tamano).map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      )}
{/* -------------------- PRECIO DEL TAMAÑO SELECCIONADO -------------------- */}
{categoriaSeleccionada && tamanoSeleccionado && (
  <div style={{ textAlign: "center", marginBottom: 15 }}>
    {(() => {
      const detalles =
        menuData.categorias[categoriaSeleccionada]?.tamano[tamanoSeleccionado];
      const precioActual = detalles?.precio || 0;
      return (
        <h3 style={{ fontSize: "18px", color: "#333" }}>
          💰 Precio: <span style={{ color: "#d14" }}>S/ {precioActual.toFixed(2)}</span>
        </h3>
      );
    })()}
  </div>
  

)}
       
      {/* -------------------- INGREDIENTES -------------------- */}
      {categoriaSeleccionada && tamanoSeleccionado && (
        <div className="ingredientes-section" style={{fontSize: "12px", marginTop: 20 }}>
        
          <h3>Selecciona los ingredientes: </h3>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 20,
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            {gruposIngredientes.map((grupo, index) => {
              const detalles =
                menuData.categorias[categoriaSeleccionada].tamano[tamanoSeleccionado];
              const itemsGrupo = detalles[grupo] || [];
              if (!itemsGrupo.length) return null;

              // Mostrar jaleas solo si la categoría es Raspadillas
              if (grupo === "jaleas" && categoriaSeleccionada !== "Raspadillas") return null;

              const maxKey = `max${grupo.charAt(0).toUpperCase() + grupo.slice(1)}`;
              const maximo = detalles[maxKey] ?? 0;
              const seleccionados = ingredientesSeleccionados[grupo] || [];
              const llegoAlMaximo = seleccionados.length >= maximo;

              return (
                <div
                  key={grupo}
                  style={{
                    flex: "1 1 220px",
                    backgroundColor: pastelColors[index % pastelColors.length],
                    borderRadius: 16,
                    padding: 18,
                    boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
                  }}
                >
                  <h4 style={{ textAlign: "center" }}>
                    {iconos[grupo]} {grupo} ({seleccionados.length}/{maximo})
                  </h4>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
                      gap: 6,
                    }}
                  >
                    {itemsGrupo.map((item) => {
                      const estaSeleccionado = seleccionados.includes(item);
                      const deshabilitado = !estaSeleccionado && llegoAlMaximo;
                      return (
                        <label
                          key={item}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 6,
                            padding: "4px 6px",
                            backgroundColor: estaSeleccionado
                              ? "rgba(255,255,255,0.8)"
                              : deshabilitado
                              ? "rgba(255,255,255,0.3)"
                              : "transparent",
                            borderRadius: 8,
                            cursor: deshabilitado ? "not-allowed" : "pointer",
                          }}
                        >
                          <input
                            type="checkbox"
                            checked={estaSeleccionado}
                            disabled={deshabilitado}
                            onChange={() => handleCheckbox(grupo, item, true)} // ✅ ingrediente
                          />
                          <span style={{ opacity: deshabilitado ? 0.5 : 1 }}>{item}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* -------------------- EXTRAS (Siempre visibles, sin jaleas) -------------------- */}
<div className="extras-section" style={{ fontSize: "12px" ,marginTop: 30 }}>
  <h3>Selecciona tus adicionales:</h3>
  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      gap: 20,
      justifyContent: "center",
      marginTop: 10,
    }}
  >
    {["frutas", "cremas", "toppings", "jarabes"].map((grupo, index) => {
      const itemsGrupo = menuData.extras?.[grupo] || []; // ✅ Toma los extras globales
     if (!itemsGrupo.length) return null;
      return (
        <div
          key={grupo}
          style={{
            flex: "1 1 220px",
            backgroundColor: coloresExtras[index % coloresExtras.length],
            borderRadius: 16,
            padding: 18,
            boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h4 style={{ textAlign: "center" }}>
            {grupo.charAt(0).toUpperCase() + grupo.slice(1)}
          </h4>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
              gap: 6,
            }}
          >
            {itemsGrupo.map((item) => {
              const seleccionados = extrasSeleccionados[grupo] || [];
              const estaSeleccionado = seleccionados.includes(item);
              return (
               <label
  key={item}
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "4px 6px",
    borderRadius: 8,
    backgroundColor: estaSeleccionado
      ? "rgba(255,255,255,0.8)"
      : "transparent",
    cursor: "pointer",
  }}
>
  <span>{item}</span>

  <input
    type="checkbox"
    checked={extrasSeleccionados[grupo]?.includes(item)}
    onChange={() => handleCheckbox(grupo, item, false)}
  />
</label>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

      {/* 🔢 Total de extras */}
<div style={{ textAlign: "center", marginTop: 20 }}>
  {(() => {
    const preciosExtras = {
      frutas: 2,
      cremas: 2,
      toppings: 1,
      jarabes: 1,
    };

    // Calculamos el total de extras
    const totalExtrasVisual = Object.entries(extrasSeleccionados).reduce(
  (total, [grupo, items]) => {
    if (!Array.isArray(items)) return total;
    return total + (preciosExtras[grupo] || 0) * items.length;
  },
  0
);


    return (
      <h4 style={{ fontSize: "15px", color: "#222" }}>
        Total de Extras:{" "}
        <span style={{ color: "#d14", fontWeight: "bold" }}>
          S/ {totalExtrasVisual.toFixed(2)}

          </span>
        </h4>
    );
  })()}
</div>

      <button onClick={agregarPedido} className="boton" style={{ marginTop: 20 }}>
        ➕ Agregar pedido
      </button>
    </div>

{/* -------------------- LISTA DE PEDIDOS -------------------- */}
<div className="lista-pedidos" style={{ marginTop: 40 }}>
  <h2 className="subtitulo">📋 Pedidos</h2>

  {pedidos.length === 0 ? (
    <p>No hay pedidos todavía.</p>
  ) : (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "20px",
        marginTop: 20,
      }}
    >
      {/* 🟠 Pendientes */}
      <div
        style={{
          background: "#fff7e6",
          borderRadius: 12,
          padding: 16,
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        <h3>🟠 Pendientes</h3>
        {pedidos.filter(p => p.estado === "pendiente").length === 0 ? (
          <p>No hay pendientes</p>
        ) : (
          pedidos
            .filter(p => p.estado === "pendiente")
            .map((p, index) => (
              <PedidoCard
                key={index}
                p={p}
                index={index}
                actualizarMonto={actualizarMonto}
                marcarComoEntregado={marcarComoEntregado}
                
              />
            ))
        )}
      </div>

      {/* 💵 Pagados */}
      <div
        style={{
          background: "#e6ffed",
          borderRadius: 12,
          padding: 16,
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        <h3>💵 Pagados</h3>
       <div
  style={{
    background: "#e6ffed",
    borderRadius: 12,
    padding: 16,
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  }}
>
  <p>No hay pagados (ver historial)</p>
</div>
      </div>

      {/* ✅ Entregados */}
      <div
        style={{
          background: "#e6f0ff",
          borderRadius: 12,
          padding: 16,
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        <h3>✅ Entregados</h3>
        {pedidos
  .filter(p => p.estado === "entregado")
  .map((p, index) => (
    <PedidoCard
      key={index}
      p={p}
      index={index}
      actualizarMonto={actualizarMonto}
      marcarComoPagado={marcarComoPagado} />
            ))
        }
      </div>
    </div>
  )}
</div>

{/* -------------------- MÉTODO DE PAGO -------------------- */}
<div
  className="metodo-pago"
  style={{
    marginTop: 30,
    backgroundColor: "#fff",
    borderRadius: 16,
    boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
    padding: 20,
  }}
>
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: 8,
      marginTop: 20,
    }}
  >
    {/* 🧾 Título */}
    <h3 style={{ margin: 0 }}>Método de pago</h3>

    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 20,
        justifyContent: "flex-end",
        marginTop: 10,
      }}
    >
      {/* 💵 EFECTIVO */}
      <div style={{ textAlign: "center" }}>
        <label style={{ display: "block", marginBottom: 5 }}>💵 Efectivo (S/)</label>
        <input
          type="number"
          value={montoEfectivo}
          onChange={(e) => setMontoEfectivo(parseFloat(e.target.value) || 0)}
          style={{
            padding: 6,
            borderRadius: 8,
            border: "1px solid #ccc",
            width: 100,
            textAlign: "center",
          }}
        />
      </div>

      {/* 📱 YAPE */}
      <div style={{ textAlign: "center" }}>
        <label style={{ display: "block", marginBottom: 5 }}>📱 Yape / Plin (S/)</label>
        <input
          type="number"
          value={montoYape}
          onChange={(e) => setMontoYape(parseFloat(e.target.value) || 0)}
          style={{
            padding: 6,
            borderRadius: 8,
            border: "1px solid #ccc",
            width: 100,
            textAlign: "center",
          }}
        />
      </div>
    </div>
  </div>

  {/* Totales dinámicos */}
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: 8,
      marginTop: 20,
    }}
  >
    <div>
      <strong>Total pedido:</strong> S/ {totalPedido.toFixed(2)}
    </div>
    <div>
      <strong>Total pagado:</strong> S/ {(montoEfectivo + montoYape).toFixed(2)}
    </div>

    {/* 💰 Vuelto o Falta */}
    {(() => {
      const totalPagado = montoEfectivo + montoYape;
      const diferencia = totalPagado - totalPedido;

      if (diferencia < 0) {
        return (
          <div style={{ color: "red" }}>
            <strong>Falta:</strong> S/ {Math.abs(diferencia).toFixed(2)}
          </div>
        );
      } else {
        return (
<div style={{ color: "green" }}>
            <strong>Vuelto:</strong> S/ {diferencia.toFixed(2)}
          </div>
        );
      }
    })()}
  </div>
</div>

  {/* -------------------- HISTORIAL DE ENTREGADOS -------------------- */}
<div style={{ marginTop: 30 }}>
  <button
    onClick={() => setMostrarHistorial(!mostrarHistorial)}
    style={{
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      padding: "10px 16px",
      borderRadius: 8,
      cursor: "pointer",
    }}
  >
    {mostrarHistorial ? "🔽 Ocultar historial" : "📦 Ver historial de pedidos"}
  </button>

  {mostrarHistorial && (
  <div
    style={{
      marginTop: 20,
      background: "#f5f5f5",
      borderRadius: 12,
      padding: 16,
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    }}
  >
    <h3>📚 Historial de Pagados</h3>

    {historial.length === 0 ? (
      <p>No hay pedidos pagados aún.</p>
    ) : (
      <ul>
        {historial.map((p, i) => (
          <li key={i} style={{ marginBottom: 10 }}>
            <strong>Cliente:</strong> {p.cliente} <br />
            <strong>Categoría:</strong> {p.categoria} ({p.tamaño}) <br />
            <strong>Base:</strong> S/ {Number(p.precioBase || 0).toFixed(2)} <br />
            <strong>Extras:</strong> S/ {Number(p.totalExtras || 0).toFixed(2)} <br />
            <strong>Total:</strong> S/ {Number(p.totalPedido || 0).toFixed(2)} <br />
            <span style={{ color: "green", fontWeight: "bold" }}>✔ Pagado</span>
            </li>
          ))}
        </ul>
      )}
    </div> 
  )}
</div>
</div>
</div>
</div>
);
}