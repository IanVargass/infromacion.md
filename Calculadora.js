function calcularPuntaje(rojas, azules, amarillas) {
    // Calculamos el puntaje según la fórmula
    const puntaje = Math.pow(rojas, 3) + (azules * 2) - Math.pow(amarillas, 2);
    return puntaje;
}

function main() {
    let continuar = true;
    
    while (continuar) {
        // Entradas de las cantidades de fichas obtenidas por Andrés
        let rojas = 3; // Andrés llegó 3 veces en primer lugar
        let azules = 6; // Andrés llegó 6 veces en intermedio (segundo lugar)
        let amarillas = 4; // Andrés llegó 4 veces en último lugar (tercer lugar)
        
        // Calculamos el puntaje
        const puntaje = calcularPuntaje(rojas, azules, amarillas);
        
        // Mostramos el resultado
        console.log(`El puntaje total de Andrés es: ${puntaje}`);
        
        // Preguntamos si el usuario quiere hacer otro cálculo
        const respuesta = prompt("¿Quieres realizar otro cálculo? (s/n): ");
        if (respuesta.toLowerCase() !== "s") {
            continuar = false;
        }
    }
}

// Ejecutamos la función principal
main();
