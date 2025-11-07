class Matrix {
  rows;
  cols;
  data;

  /**
   * Constructor de la clase Matrix.
   */
  constructor(rowsParam, colsParam, defaultValue) {
    this.rows = rowsParam;
    this.cols = colsParam;
    this.data = [];

    for (let i = 0; i < rowsParam; i++) {
      const rowTemp = [];
      for (let j = 0; j < colsParam; j++) {
        rowTemp.push(defaultValue);
      }
      this.data.push(rowTemp);
    }
  }

  // ===============================================
  // === MÉTODOS BASE (Auxiliares) =================
  // ===============================================

  /**
   * Verifica si una posición (fila, columna) es válida.
   */
  isValidPosition(row, col) {
    return row >= 0 && row < this.rows && col >= 0 && col < this.cols;
  }

  /**
   * Establece un valor en una posición específica de la matriz.
   */
  setValue(row, col, value) {
    if (this.isValidPosition(row, col)) {
      this.data[row][col] = value;
    }
  }

  /**
   * Obtiene el valor de una posición específica de la matriz.
   */
  getValue(row, col) {
    if (this.isValidPosition(row, col)) {
      return this.data[row][col];
    } else {
      return null
    }
  }

  /**
   * Llena la matriz con números enteros aleatorios.
   */
  fillRandom(min, max) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        const random = Math.floor(Math.random() * (max - min + 1)) + min;
        this.data[i][j] = random;
      }
    }
  }
  
  /**
   * Llena toda la matriz con un valor constante.
   */
  fill(value) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] = value;
      }
    }
  }
  
  // ===============================================
  // === MÉTODOS EJERCICIOS (1-88) =================
  // ===============================================

  ejercicioClase() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] = (j % 3) + (i * 3 + 1);
      }
    }
  }
  
  // Ejercicio 1. Suma de todos los elementos
  ejercicio1() {
    let sum = 0;
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        sum += this.data[i][j];
      }
    }
    this.fill(sum); 
  }

  // Ejercicio 2. Máximo y mínimo (CORREGIDO y AUTOCONTENIDO)
  ejercicio2() {
    if (this.rows === 0 || this.cols === 0) {
        return;
    }

    let max = this.data[0][0];
    let min = this.data[0][0];
    let maxPos = [0, 0];
    let minPos = [0, 0];

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        const value = this.data[i][j];
        if (value > max) {
          max = value;
          maxPos = [i, j];
        }
        if (value < min) {
          min = value;
          minPos = [i, j];
        }
      }
    }
    
    // ACCIÓN VISUAL: Resaltar Max(1) y Min(2)
    this.fill(0);
    this.setValue(maxPos[0], maxPos[1], 1); 
    this.setValue(minPos[0], minPos[1], 2); 
  }
  
  // Ejercicio 3. Cruz Central (Patrón)
  ejercicio3() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        var mitadColumna = Math.floor(this.cols / 2);
        var mitadFilas = Math.floor(this.rows / 2);
        if (i === mitadFilas || j === mitadColumna) {
          this.data[i][j] = 1;
        } else {
          this.data[i][j] = 0; 
        }
      }
    }
  }

  // Ejercicio 4. Borde (1) y Diagonales (2)
  ejercicio4() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        const maxIndex = this.rows - 1; 
        
        if (i === 0 || j === 0 || i === maxIndex || j === maxIndex) {
          this.data[i][j] = 1; // Borde
        }
        else {
          if (i === j || i + j === maxIndex) {
            this.data[i][j] = 2; // Diagonales
          }
          else {
            this.data[i][j] = 0; // Interior
          }
        }
      }
    }
  }
  
  // Ejercicio 5. Tercios (1, 2, 3)
  ejercicio5() {
    const tercio = Math.floor(this.rows / 3);

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (i < tercio) {
          this.data[i][j] = 1;
        } else if (i < 2 * tercio) {
          this.data[i][j] = 2;
        } else {
          this.data[i][j] = 3;
        }
      }
    }
  }

  // Ejercicio 6. Rotar 90° (Nueva Matriz)
  ejercicio6() {
    const newRows = this.cols;
    const newCols = this.rows;
    
    // Crear una nueva matriz para la rotación
    const rotatedData = [];
    for (let j = 0; j < newRows; j++) {
        const newRow = [];
        for (let i = this.rows - 1; i >= 0; i--) {
            newRow.push(this.data[i][j]);
        }
        rotatedData.push(newRow);
    }
    
    // Actualizar la matriz principal
    this.rows = newRows;
    this.cols = newCols;
    this.data = rotatedData;
  }
  
  // Ejercicio 7. Transpuesta (Nueva Matriz)
  ejercicio7() {
    const newRows = this.cols;
    const newCols = this.rows;
    
    const transposedData = [];
    for (let j = 0; j < newRows; j++) {
        const newRow = [];
        for (let i = 0; i < newCols; i++) {
            newRow.push(this.data[i][j]);
        }
        transposedData.push(newRow);
    }
    
    this.rows = newRows;
    this.cols = newCols;
    this.data = transposedData;
  }
  
  // Ejercicio 8. Multiplicación por Escalar (2)
  ejercicio8() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] *= 8;
      }
    }
  }
  
  // Ejercicio 9. Diagonal Principal (Llenar con 1s)
  ejercicio9() {
    this.fill(0); // Limpiar primero
    const size = Math.min(this.rows, this.cols);
    for (let i = 0; i < size; i++) {
        this.data[i][i] = 1;
    }
  }

  // Ejercicio 10. Diagonal Secundaria (Llenar con 1s)
  ejercicio10() {
    this.fill(0); // Limpiar primero
    const size = Math.min(this.rows, this.cols);
    for (let i = 0; i < size; i++) {
        this.data[i][this.cols - 1 - i] = 1;
    }
  }

  // Ejercicio 11. Suma de Filas (Llenar la matriz con la suma de su fila)
  ejercicio11() {
    // Necesita que la matriz esté llena de datos para calcular la suma.
    for (let i = 0; i < this.rows; i++) {
      let rowSum = 0;
      const originalRow = [...this.data[i]]; 

      for (let value of originalRow) {
        rowSum += value;
      }
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] = rowSum;
      }
    }
  }

  // Ejercicio 12. Suma de Columnas (Llenar la matriz con la suma de su columna)
  ejercicio12() {
    // Necesita que la matriz esté llena de datos para calcular la suma.
    const colSums = new Array(this.cols).fill(0);
    
    for (let j = 0; j < this.cols; j++) {
      for (let i = 0; i < this.rows; i++) {
        colSums[j] += this.data[i][j];
      }
    }
    
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] = colSums[j];
      }
    }
  }

  // Ejercicio 13. Transpuesta (In-place) - SOLO CUADRADA
  ejercicio13() {
    if (this.rows !== this.cols) {
        return;
    }
    for (let i = 0; i < this.rows; i++) {
      for (let j = i + 1; j < this.cols; j++) {
        // Intercambio
        [this.data[i][j], this.data[j][i]] = [this.data[j][i], this.data[i][j]];
      }
    }
  }

  // Ejercicio 14. Matriz Identidad
  ejercicio14() {
    this.fill(0); // Limpiar primero
    const size = Math.min(this.rows, this.cols);
    for (let i = 0; i < size; i++) {
      this.data[i][i] = 1;
    }
  }

  // Ejercicio 15. Matriz Simétrica (Generar con valores aleatorios y forzar simetría)
  ejercicio15() {
    if (this.rows !== this.cols) {
        return;
    }
    // MANTENIDO: Necesita llenar con valores aleatorios para que la simetría tenga datos.
    this.fillRandom(1, 9); 
    for (let i = 0; i < this.rows; i++) {
      for (let j = i + 1; j < this.cols; j++) {
        this.data[j][i] = this.data[i][j]; 
      }
    }
  }

  // Ejercicio 16. Triangular Superior (Poner 1s arriba o en la diagonal principal)
  ejercicio16() {
    this.fill(0);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (i <= j) { 
           this.data[i][j] = 1; 
        }
      }
    }
  }

  // Ejercicio 17. Triangular Inferior (Poner 1s abajo o en la diagonal principal)
  ejercicio17() {
    this.fill(0);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (i >= j) { 
           this.data[i][j] = 1; 
        }
      }
    }
  }

  // Ejercicio 18. Suma de Diagonales (Principal + Secundaria)
  ejercicio18() {
    // Necesita que la matriz esté llena de datos para calcular la suma.
    let sumPrincipal = 0;
    let sumSecundaria = 0;
    const size = Math.min(this.rows, this.cols);

    for (let i = 0; i < size; i++) {
      sumPrincipal += this.data[i][i];
      sumSecundaria += this.data[i][this.cols - 1 - i];
    }
    
    // Si la matriz es cuadrada y de tamaño impar, el elemento central se contó dos veces
    if (this.rows === this.cols && this.rows % 2 !== 0) {
      const center = Math.floor(this.rows / 2);
      sumSecundaria -= this.data[center][center];
    }

    const totalSum = sumPrincipal + sumSecundaria;
    this.fill(totalSum); 
  }

  // Ejercicio 19. Suma de Bordes
  ejercicio19() {
    // Necesita que la matriz esté llena de datos para calcular la suma.
    let sumBordes = 0;

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (i === 0 || i === this.rows - 1 || j === 0 || j === this.cols - 1) {
          sumBordes += this.data[i][j];
        }
      }
    }
    this.fill(sumBordes); 
  }

  // Ejercicio 20. Max y Min con Posición (Muestra Max=1, Min=2)
  ejercicio20() {
    // Opera sobre la matriz actual.
    let max = this.data[0][0];
    let maxPos = [0, 0];
    let min = this.data[0][0];
    let minPos = [0, 0];

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        const value = this.data[i][j];
        if (value > max) {
          max = value;
          maxPos = [i, j];
        }
        if (value < min) {
          min = value;
          minPos = [i, j];
        }
      }
    }
    
    this.fill(0); 
    this.setValue(maxPos[0], maxPos[1], 1);
    this.setValue(minPos[0], minPos[1], 2); 
  }

  // Ejercicio 21. Promedio de la Matriz (AUTOCONTENIDO)
  ejercicio21() {
    // Opera sobre la matriz actual.
    let sum = 0;
    let count = 0;
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        sum += this.data[i][j];
        count++;
      }
    }
    const average = count > 0 ? (sum / count).toFixed(2) : 0;
    this.fill(Math.round(average)); 
  }

  // Ejercicio 22. Contar Pares/Impares
  ejercicio22() {
    // Opera sobre la matriz actual.
    let countPares = 0;
    let countImpares = 0;

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (this.data[i][j] % 2 === 0) {
          countPares++;
        } else {
          countImpares++;
        }
      }
    }
    
    // Acción visual: Patrón Ajedrez
    for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {
            this.data[i][j] = (i + j) % 2; 
        }
    }
  }

  // Ejercicio 23. Buscar Valor (Posiciones de 7)
  ejercicio23() {
    // Opera sobre la matriz actual.
    const target = 7; 
    const positions = [];

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (this.data[i][j] === target) {
          positions.push(`[${i}, ${j}]`);
        }
      }
    }

    // Acción visual: poner 1 donde se encuentre el valor
    this.fill(0);
    positions.forEach(posStr => {
      const [i, j] = posStr.match(/\d+/g).map(Number);
      this.setValue(i, j, 1);
    });
  }

  // Ejercicio 24. Suma Arriba/Abajo Diag. Prin.
  ejercicio24() {
    // Opera sobre la matriz actual.
    let sumArriba = 0;
    let sumAbajo = 0;

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (j > i) { 
          sumArriba += this.data[i][j];
        } else if (i > j) { 
          sumAbajo += this.data[i][j];
        }
      }
    }

    // Acción visual: Llenar arriba con 1, abajo con 2, diagonal con 0
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (j > i) {
          this.data[i][j] = 1;
        } else if (i > j) {
          this.data[i][j] = 2;
        } else {
          this.data[i][j] = 0;
        }
      }
    }
  }

  // Ejercicio 25. Matriz espejo (reflejo horizontal)
  ejercicio25() {
    // MANTENIDO: Necesita llenar con valores aleatorios para crear el patrón de espejo.
    this.fillRandom(1, 9);
    const middleCol = Math.floor(this.cols / 2);
    
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < middleCol; j++) {
        this.data[i][this.cols - 1 - j] = this.data[i][j];
      }
    }
  }

  // Ejercicio 26. Reflejo Vertical de la matriz
  ejercicio26() {
    // Ahora refleja la matriz actual.
    for (let i = 0; i < Math.floor(this.rows / 2); i++) {
      const filaOpuesta = this.rows - 1 - i;
      [this.data[i], this.data[filaOpuesta]] = [this.data[filaOpuesta], this.data[i]];
    }
  }

  // Ejercicio 27. Reflejo Horizontal de la matriz (AUTOCONTENIDO)
  ejercicio27() {
    // Ahora refleja la matriz actual.
    for (let i = 0; i < this.rows; i++) {
      this.data[i].reverse(); 
    }
  }

  // Ejercicio 28. Rotación 90° (AUTOCONTENIDO)
  ejercicio28() {
    const newRows = this.cols;
    const newCols = this.rows;
    
    const rotatedData = [];
    for (let j = 0; j < newRows; j++) {
        const newRow = [];
        for (let i = this.rows - 1; i >= 0; i--) {
            newRow.push(this.data[i][j]);
        }
        rotatedData.push(newRow);
    }
    
    this.rows = newRows;
    this.cols = newCols;
    this.data = rotatedData;
  }

  // Ejercicio 29. Rotación 180°
  ejercicio29() {
    for (let i = 0; i < this.rows; i++) {
        this.data[i].reverse(); // Reflejo horizontal
    }
    this.data.reverse(); // Reflejo vertical
  }

  // Ejercicio 30. Diagonal Principal (1s) (AUTOCONTENIDO)
  ejercicio30() {
    this.fill(0); 
    const size = Math.min(this.rows, this.cols);
    for (let i = 0; i < size; i++) {
        this.data[i][i] = 1;
    }
  }

  // Ejercicio 31. Diagonal Secundaria (1s) (AUTOCONTENIDO)
  ejercicio31() {
    this.fill(0); 
    const size = Math.min(this.rows, this.cols);
    for (let i = 0; i < size; i++) {
        this.data[i][this.cols - 1 - i] = 1;
    }
  }

  // Ejercicio 32. Triángulo Superior (Rellenar con 1s)
  ejercicio32() {
    this.fill(0);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (i <= j) { 
          this.data[i][j] = 1;
        }
      }
    }
  }

  // Ejercicio 33. Triángulo Inferior (Rellenar con 1s)
  ejercicio33() {
    this.fill(0);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (i >= j) { 
          this.data[i][j] = 1;
        }
      }
    }
  }

  // Ejercicio 34. Marco (Bordes 1s)
  ejercicio34() {
    this.fill(0);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (i === 0 || i === this.rows - 1 || j === 0 || j === this.cols - 1) {
          this.data[i][j] = 1;
        }
      }
    }
  }

  // Ejercicio 35. Patrón Simple (0/1)
  ejercicio35() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] = (i + j) % 2;
      }
    }
  }

  // Ejercicio 36. Llenar con Suma Total
  ejercicio36() {
    // Opera sobre la matriz actual.
    let sum = 0;
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        sum += this.data[i][j];
      }
    }
    this.fill(sum);
  }
  
  // Ejercicio 37. Llenar con Promedio
  ejercicio37() {
    // Opera sobre la matriz actual.
    let sum = 0;
    let count = 0;
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        sum += this.data[i][j];
        count++;
      }
    }
    const average = count > 0 ? Math.round(sum / count) : 0;
    this.fill(average);
  }

  // Ejercicio 38. Llenar con Máximo
  ejercicio38() {
    // Opera sobre la matriz actual.
    let max = this.data[0][0];
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (this.data[i][j] > max) {
          max = this.data[i][j];
        }
      }
    }
    this.fill(max);
  }

  // Ejercicio 39. Llenar con Mínimo
  ejercicio39() {
    // Opera sobre la matriz actual.
    let min = this.data[0][0];
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (this.data[i][j] < min) {
          min = this.data[i][j];
        }
      }
    }
    this.fill(min);
  }

  // Ejercicio 40. Cuadrante 1 (Llenar con 1)
  ejercicio40() {
    this.fill(0);
    const midRow = Math.floor(this.rows / 2);
    const midCol = Math.floor(this.cols / 2);
    for (let i = 0; i < midRow; i++) {
      for (let j = midCol; j < this.cols; j++) {
        this.data[i][j] = 1;
      }
    }
  }

  // Ejercicio 41. Cuadrante 2 (Llenar con 1)
  ejercicio41() {
    this.fill(0);
    const midRow = Math.floor(this.rows / 2);
    const midCol = Math.floor(this.cols / 2);
    for (let i = 0; i < midRow; i++) {
      for (let j = 0; j < midCol; j++) {
        this.data[i][j] = 1;
      }
    }
  }

  // Ejercicio 42. Transpuesta (Nueva Matriz)
  ejercicio42() {
    const newRows = this.cols;
    const newCols = this.rows;
    
    const transposedData = [];
    for (let j = 0; j < newRows; j++) {
        const newRow = [];
        for (let i = 0; i < newCols; i++) {
            newRow.push(this.data[i][j]);
        }
        transposedData.push(newRow);
    }
    
    this.rows = newRows;
    this.cols = newCols;
    this.data = transposedData;
  }
  
  // Ejercicio 43. Simetría Principal (Generar con valores aleatorios y forzar simetría)
  ejercicio43() {
    if (this.rows !== this.cols) {
        return;
    }
    this.fillRandom(1, 9); 
    for (let i = 0; i < this.rows; i++) {
      for (let j = i + 1; j < this.cols; j++) {
        this.data[j][i] = this.data[i][j]; 
      }
    }
  }

  // Ejercicio 44. Submatriz 3x3 Centro (1s)
  ejercicio44() {
    this.fill(0);
    const centerRow = Math.floor(this.rows / 2);
    const centerCol = Math.floor(this.cols / 2);

    for (let i = centerRow - 1; i <= centerRow + 1; i++) {
      for (let j = centerCol - 1; j <= centerCol + 1; j++) {
        if (this.isValidPosition(i, j)) {
          this.data[i][j] = 1;
        }
      }
    }
  }

  // Ejercicio 45. Intercambiar Fila 0 y Fila 1
  ejercicio45() {
    // Opera sobre la matriz actual.
    if (this.rows >= 2) {
      [this.data[0], this.data[1]] = [this.data[1], this.data[0]];
    } else {
    }
  }

  // Ejercicio 46. Intercambiar Columna 0 y Columna 1
  ejercicio46() {
    // Opera sobre la matriz actual.
    if (this.cols >= 2) {
      for (let i = 0; i < this.rows; i++) {
        [this.data[i][0], this.data[i][1]] = [this.data[i][1], this.data[i][0]];
      }
    } else {
    }
  }

  // Ejercicio 47. Llenar con Suma Fila (AUTOCONTENIDO)
  ejercicio47() {
    // Opera sobre la matriz actual.
    for (let i = 0; i < this.rows; i++) {
      let rowSum = 0;
      const originalRow = [...this.data[i]]; 

      for (let value of originalRow) {
        rowSum += value;
      }
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] = rowSum;
      }
    }
  }
  
  // Ejercicio 48. Llenar con Suma Columna (AUTOCONTENIDO)
  ejercicio48() {
    // Opera sobre la matriz actual.
    const colSums = new Array(this.cols).fill(0);
    
    for (let j = 0; j < this.cols; j++) {
      for (let i = 0; i < this.rows; i++) {
        colSums[j] += this.data[i][j];
      }
    }
    
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] = colSums[j];
      }
    }
  }

  // Ejercicio 49. Llenar con Producto Fila
  ejercicio49() {
    // Opera sobre la matriz actual.
    for (let i = 0; i < this.rows; i++) {
      let rowProduct = 1;
      const originalRow = [...this.data[i]];

      for (let value of originalRow) { 
        // Usa una lógica simple para no desbordar (ej: valor % 5)
        rowProduct *= (value % 5) + 1;
      }
      // Rellenar la fila con el producto (reducido a módulo 10 para visualización)
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] = rowProduct % 10;
      }
    }
  }

  // Ejercicio 50. Llenar con Promedio Diagonales (Principal)
  ejercicio50() {
    // Opera sobre la matriz actual.
    let sum = 0;
    let count = 0;
    const size = Math.min(this.rows, this.cols);

    for (let i = 0; i < size; i++) {
      sum += this.data[i][i];
      count++;
    }

    const average = count > 0 ? Math.round(sum / count) : 0;
    this.fill(average);
  }

  // Ejercicio 51. Patrón Ajedrez (0 y 1)
  ejercicio51() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] = (i + j) % 2;
      }
    }
  }

  // Ejercicio 52. Matriz Identidad (AUTOCONTENIDO)
  ejercicio52() {
    this.fill(0);
    const size = Math.min(this.rows, this.cols);
    for (let i = 0; i < size; i++) {
      this.data[i][i] = 1;
    }
  }

  // Ejercicio 53. Reflejo Diag. Secundaria
  ejercicio53() {
    // Opera sobre la matriz actual.
    if (this.rows !== this.cols) {
        return;
    }
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols - 1 - i; j++) {
        // Intercambio
        const i_ref = this.rows - 1 - j;
        const j_ref = this.cols - 1 - i;
        [this.data[i][j], this.data[i_ref][j_ref]] = [this.data[i_ref][j_ref], this.data[i][j]];
      }
    }
  }

  // Ejercicio 54. Llenado Concéntrico (Capas)
  ejercicio54() {
    this.fill(0);
    let top = 0, bottom = this.rows - 1, left = 0, right = this.cols - 1;
    let value = 1;

    while (top <= bottom && left <= right) {
      // Borde superior
      for (let j = left; j <= right; j++) {
        this.data[top][j] = value;
      }
      top++; 
      
      // Borde derecho
      for (let i = top; i <= bottom; i++) {
        this.data[i][right] = value;
      }
      right--;
      
      // Borde inferior
      if (top <= bottom) {
        for (let j = right; j >= left; j--) {
          this.data[bottom][j] = value;
        }
        bottom--;
      }

      // Borde izquierdo
      if (left <= right) {
        for (let i = bottom; i >= top; i--) {
          this.data[i][left] = value;
        }
        left++;
      }
      value++;
    }
  }

  // Ejercicio 55. Invertir Filas Pares
  ejercicio55() {
    // Opera sobre la matriz actual.
    for (let i = 0; i < this.rows; i++) {
      if (i % 2 === 0) {
        this.data[i].reverse();
      }
    }
  }

  // Ejercicio 56. Invertir Columnas Pares
  ejercicio56() {
    // Opera sobre la matriz actual.
    for (let j = 0; j < this.cols; j++) {
      if (j % 2 === 0) {
        for (let i = 0; i < Math.floor(this.rows / 2); i++) {
          const i_ref = this.rows - 1 - i;
          [this.data[i][j], this.data[i_ref][j]] = [this.data[i_ref][j], this.data[i][j]];
        }
      }
    }
  }

  // Ejercicio 57. Interc. Fila Central (Con la primera fila)
  ejercicio57() {
    // Opera sobre la matriz actual.
    if (this.rows >= 1) {
      const centerRow = Math.floor(this.rows / 2);
      [this.data[0], this.data[centerRow]] = [this.data[centerRow], this.data[0]];
    } else {
    }
  }

  // Ejercicio 58. Interc. Col Central (Con la primera columna)
  ejercicio58() {
    // Opera sobre la matriz actual.
    if (this.cols >= 1) {
      const centerCol = Math.floor(this.cols / 2);
      for (let i = 0; i < this.rows; i++) {
        [this.data[i][0], this.data[i][centerCol]] = [this.data[i][centerCol], this.data[i][0]];
      }
    } else {
    }
  }

  // Ejercicio 59. Llenar con i + j
  ejercicio59() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] = i + j;
      }
    }
  }

  // Ejercicio 60. Llenar con i * j
  ejercicio60() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] = i * j;
      }
    }
  }

  // Ejercicio 61. Llenado Progresivo Horizontal (1, 2, 3...)
  ejercicio61() {
    let counter = 1;
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] = counter++;
      }
    }
  }

  // Ejercicio 62. Llenado Progresivo Vertical (1, 2, 3...)
  ejercicio62() {
    let counter = 1;
    for (let j = 0; j < this.cols; j++) {
      for (let i = 0; i < this.rows; i++) {
        this.data[i][j] = counter++;
      }
    }
  }

  // Ejercicio 63. Triáng. Inferior Secund. (Llenar con 1s)
  ejercicio63() {
    this.fill(0);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (i + j >= this.rows - 1) {
          this.data[i][j] = 1;
        }
      }
    }
  }

  // Ejercicio 64. Triáng. Superior Secund. (Llenar con 1s)
  ejercicio64() {
    this.fill(0);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (i + j <= this.rows - 1) {
          this.data[i][j] = 1;
        }
      }
    }
  }

  // Ejercicio 65. Anti-Bordes (Llenar con 1s el interior, 0s el borde)
  ejercicio65() {
    this.fill(1);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (i === 0 || i === this.rows - 1 || j === 0 || j === this.cols - 1) {
          this.data[i][j] = 0;
        }
      }
    }
  }

  // Ejercicio 66. Zigzag Horizontal
  ejercicio66() {
    let counter = 1;
    for (let i = 0; i < this.rows; i++) {
      if (i % 2 === 0) { // Fila par
        for (let j = 0; j < this.cols; j++) {
          this.data[i][j] = counter++;
        }
      } else { // Fila impar
        for (let j = this.cols - 1; j >= 0; j--) {
          this.data[i][j] = counter++;
        }
      }
    }
  }

  // Ejercicio 67. Diagonal Superior Única (Poner 1s solo en M[i][i+1])
  ejercicio67() {
    this.fill(0);
    for (let i = 0; i < this.rows; i++) {
      const j = i + 1;
      if (this.isValidPosition(i, j)) {
        this.data[i][j] = 1;
      }
    }
  }

  // Ejercicio 68. Diagonal Inferior Única (Poner 1s solo en M[i][i-1])
  ejercicio68() {
    this.fill(0);
    for (let i = 0; i < this.rows; i++) {
      const j = i - 1;
      if (this.isValidPosition(i, j)) {
        this.data[i][j] = 1;
      }
    }
  }

  // Ejercicio 69. Potencias de 2
  ejercicio69() {
    let counter = 0;
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] = Math.pow(2, counter++);
      }
    }
  }

  // Ejercicio 70. Caracol / Espiral
  ejercicio70() {
    this.fill(0);
    let top = 0, bottom = this.rows - 1, left = 0, right = this.cols - 1;
    let counter = 1;
    while (top <= bottom && left <= right) {
      // De izquierda a derecha (top)
      for (let j = left; j <= right; j++) {
        this.data[top][j] = counter++;
      }
      top++;
      // De arriba a abajo (right)
      for (let i = top; i <= bottom; i++) {
        this.data[i][right] = counter++;
      }
      right--;
      // De derecha a izquierda (bottom)
      if (top <= bottom) {
        for (let j = right; j >= left; j--) {
          this.data[bottom][j] = counter++;
        }
        bottom--;
      }
      // De abajo a arriba (left)
      if (left <= right) {
        for (let i = bottom; i >= top; i--) {
          this.data[i][left] = counter++;
        }
        left++;
      }
    }
  }

  // Ejercicio 71. Patrón Diagonales (Suma)
  ejercicio71() {
    this.fill(0); // Limpiar primero
    for (let i = 0; i < this.rows; i++) {
      // Diagonal Principal (1)
      if (this.isValidPosition(i, i)) {
        this.data[i][i] += 1;
      }
      // Diagonal Secundaria (2)
      const j_sec = this.cols - 1 - i;
      if (this.isValidPosition(i, j_sec)) {
        this.data[i][j_sec] += 2; // Diagonal Secundaria (2)
      }
    }
  }

  // Ejercicio 72. Llenar con Conteo Pares
  ejercicio72() {
    // Opera sobre la matriz actual.
    let countPares = 0;
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (this.data[i][j] % 2 === 0) {
          countPares++;
        }
      }
    }
    this.fill(countPares);
  }

  // Ejercicio 73. Reflejo Mitad Horiz. (Refleja la mitad superior sobre la inferior)
  ejercicio73() {
    // MANTENIDO: Necesita llenar con valores aleatorios para crear el patrón de espejo.
    this.fillRandom(1, 9);
    const midRow = Math.floor(this.rows / 2);
    for (let i = 0; i < midRow; i++) {
      const i_ref = this.rows - 1 - i;
      this.data[i_ref] = [...this.data[i]];
    }
  }

  // Ejercicio 74. Reflejo Mitad Vert. (Refleja la mitad izquierda sobre la derecha)
  ejercicio74() {
    // MANTENIDO: Necesita llenar con valores aleatorios para crear el patrón de espejo.
    this.fillRandom(1, 9);
    const midCol = Math.floor(this.cols / 2);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < midCol; j++) {
        this.data[i][this.cols - 1 - j] = this.data[i][j];
      }
    }
  }
  
  // Ejercicio 75. Llenar con Ceros
  ejercicio75() {
    this.fill(0);
  }

  // Ejercicio 76. Progresivo por Columna
  ejercicio76() {
    let counter = 1;
    for (let j = 0; j < this.cols; j++) {
      for (let i = 0; i < this.rows; i++) {
        this.data[i][j] = counter++;
      }
    }
  }
  
  // Ejercicio 77. Progresivo por Fila
  ejercicio77() {
    let counter = 1;
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] = counter++;
      }
    }
  }

  // Ejercicio 78. Llenar con Índice Fila (i)
  ejercicio78() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] = i;
      }
    }
  }

  // Ejercicio 79. Llenar con Índice Col (j)
  ejercicio79() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] = j;
      }
    }
  }

  // Ejercicio 80. Llenar con Cuadrante (1-4)
  ejercicio80() {
    const midRow = Math.floor(this.rows / 2);
    const midCol = Math.floor(this.cols / 2);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (i < midRow && j < midCol) {
          this.data[i][j] = 2; // Q2
        } else if (i < midRow && j >= midCol) {
          this.data[i][j] = 1; // Q1
        } else if (i >= midRow && j < midCol) {
          this.data[i][j] = 3; // Q3
        } else {
          this.data[i][j] = 4; // Q4
        }
      }
    }
  }

  // Ejercicio 81. Patrón en X (Diagonales)
  ejercicio81() {
    this.fill(0);
    const maxIndex = this.rows - 1; 

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (i === j || i + j === maxIndex) {
          this.data[i][j] = 1; 
        }
      }
    }
  }

  // Ejercicio 82. Patrón de Rombo
  ejercicio82() {
    this.fill(0);
    const mid = Math.floor(this.rows / 2);

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        // La condición para el rombo se basa en la distancia de Manhattan al centro
        if (Math.abs(i - mid) + Math.abs(j - mid) <= mid) {
          this.data[i][j] = 1;
        }
      }
    }
  }

  // Ejercicio 83. Patrón de Cruz Centrada
  ejercicio83() {
    this.fill(0);
    const midRow = Math.floor(this.rows / 2);
    const midCol = Math.floor(this.cols / 2);

    for (let j = 0; j < this.cols; j++) {
      this.data[midRow][j] = 1;
    }
    for (let i = 0; i < this.rows; i++) {
      this.data[i][midCol] = 1;
    }
  }

  // Ejercicio 84. Transpuesta (Nueva Matriz)
  ejercicio84() {
    const newRows = this.cols;
    const newCols = this.rows;
    
    const transposedData = [];
    for (let j = 0; j < newRows; j++) {
        const newRow = [];
        for (let i = 0; i < newCols; i++) {
            newRow.push(this.data[i][j]);
        }
        transposedData.push(newRow);
    }
    
    this.rows = newRows;
    this.cols = newCols;
    this.data = transposedData;
  }
  
  // Ejercicio 85. Llenar con i + j (Simulación Suma de Matrices)
  ejercicio85() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] = i + j;
      }
    }
  }

  // Ejercicio 86. Generar 0/1 Alternado (AUTOCONTENIDO)
  ejercicio86() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] = (i + j) % 2;
      }
    }
  }

  // Ejercicio 87. Zigzag Vertical
  ejercicio87() {
    let counter = 1;
    for (let j = 0; j < this.cols; j++) {
      if (j % 2 === 0) { // Columna par 
        for (let i = 0; i < this.rows; i++) {
          this.data[i][j] = counter++;
        }
      } else { // Columna impar 
        for (let i = this.rows - 1; i >= 0; i--) {
          this.data[i][j] = counter++;
        }
      }
    }
  }

  // Ejercicio 88. Patrón Columna Espejo
  ejercicio88() {
    this.fillRandom(1, 9);
    const midCol = Math.floor(this.cols / 2);
    
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < midCol; j++) {
        this.data[i][this.cols - 1 - j] = this.data[i][j];
      }
    }
  }

  toString() {
    return this.data.map(row => row.join('\t')).join('\n');
  }
}