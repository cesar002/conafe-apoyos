const cambiarFormatoFecha = (fecha: string): string  => {
	const partes = fecha.split('-'); // Dividir la cadena en partes

	// Crear un nuevo objeto Date con las partes de la fecha
	const nuevaFecha = new Date(parseInt(partes[0]), parseInt(partes[1]) - 1, parseInt(partes[2]));

	// Obtener los componentes de la nueva fecha
	const dia = nuevaFecha.getDate();
	const mes = nuevaFecha.getMonth() + 1; // ¡Recuerda sumar 1 al mes, ya que en JavaScript los meses van de 0 a 11!
	const anio = nuevaFecha.getFullYear();

	// Formatear la fecha como DD/MM/YYYY
	const formatoDDMMYYYY = `${dia.toString().padStart(2, '0')}/${mes.toString().padStart(2, '0')}/${anio}`;

	return formatoDDMMYYYY;
}

export default cambiarFormatoFecha;
