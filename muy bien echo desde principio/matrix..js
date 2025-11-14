class Matrix {
  rows;
  cols;
  data;

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

  //Función de validacion de rango valido en la matriz
  isValidPosition(row, col) {
    return row >= 0 && row < this.rows && col >= 0 && col < this.cols;
  }

  setValue(row, col, value) {
    //if (isValidPosition(row, col)) {
    this.data[row][col] = value;
    //}
  }

  getValue(row, col) {
    if (this.isValidPosition(row, col)) {
      return this.data[row][col];
    } else {
      return null
    }
  }

  fillRandom(min, max) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        const random = Math.floor(Math.random() * (max - min + 1)) + min;
        this.data[i][j] = random;
      }
    }
  }

  ejercicioClase() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] = (j % 3) + (i * 3 + 1);
      }
    }
  }
  
  ejercicio2() {
    console.log("entor al ejercicio2")
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (i === 0 || j === 0 || i === 9 || j === 9) {
          this.data[i][j] = 0;
        }
        else {
          this.data[i][j] = 1;
        }
      }
    }
  }
  ejercicio3() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {

        var mitadColumna = Math.floor(this.cols / 2);
        var mitadFilas = Math.floor(this.rows / 2);
        if (i === mitadFilas || j === mitadColumna) {
          this.data[i][j] = 1;
        }
      }
    }
  }
  

  ejercicio4() {
    
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (i === 0 || j === 0 || i === 9 || j === 9) {
          this.data[i][j] = 1;
        }
        else {
          if (i === j || i + j === 9) {
            this.data[i][j] = 2;

          }
          else {
            this.data[i][j] = 0;
          }
        }
      }
    }
  }
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
  // * Ejercicio 89: Genera una matriz de tamaño n x m con valores alternados 1 y 0 en patrón de tablero.

ejercicio89() {
  for (let i = 0; i < this.rows; i++) {
    for (let j = 0; j < this.cols; j++) {
      this.data[i][j] = (i + j) % 2;
    }
  }
}

//Ejercicio 90: Rota los valores de la matriz 90 grados en sentido horario, usando la fórmula rotada[j][n - 1 - i] = original[i][j].

ejercicio90() {
  if (this.rows === 0 || this.cols === 0) return;
  
  const n = this.rows; 
  const m = this.cols; 
  
  const rotatedData = [];
  for (let i = 0; i < m; i++) {
    rotatedData.push(Array(n).fill(0));
  }
  
  for (let i = 0; i < n; i++) { 
    for (let j = 0; j < m; j++) {
      rotatedData[j][n - 1 - i] = this.data[i][j];
    }
  }
  
  this.rows = m;
  this.cols = n;
  this.data = rotatedData;
}

//Ejercicio 91: Llena una matriz cuadrada con dos espirales que se encuentran en el centro.

ejercicio91() {
  if (this.rows !== this.cols) return; 
  this.fill(0);
  
  const n = this.rows;
  let [c1, c2, t, b, l, r] = [1, n * n, 0, n - 1, 0, n - 1]; 

  while (c1 <= c2) {
    for (let j = l; j <= r; j++) this.data[t][j] = c1++;
    t++; 
    
    for (let i = t; i <= b; i++) this.data[i][r] = c1++;
    r--;
    
    if (c1 > c2) break;
    
    if (t <= b) {
      for (let j = r; j >= l; j--) this.data[b][j] = c2--;
      b--;
    }
    
    if (l <= r) {
      for (let i = b; i >= t; i--) this.data[i][l] = c2--;
      l++;
    }
  }
}

 //Ejercicio 92: Identifica filas palíndromas, rellenando la matriz con 1/0 y colocando el conteo total en [0][0].
 
ejercicio92() {
  let pCount = 0;
  for (let i = 0; i < this.rows; i++) {
    const row = this.data[i];
    const isPalindrome = row.join(',') === [...row].reverse().join(',');
    
    let indicator = isPalindrome ? 1 : 0;
    if (isPalindrome) pCount++;
    
    for (let j = 0; j < this.cols; j++) this.data[i][j] = indicator; 
  }
  if (this.rows > 0 && this.cols > 0) this.data[0][0] = pCount;
}

// Ejercicio 93: Genera una matriz cuadrada con capas concéntricas (anillos) alternadas de 1 y 0.
 
ejercicio93() {
  if (this.rows !== this.cols) return; 
  this.fill(0);
  const n = this.rows;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const layer = Math.min(i, n - 1 - i, j, n - 1 - j);
      this.data[i][j] = layer % 2 === 0 ? 1 : 0;
    }
  }
}

// Ejercicio 94: Compara la suma de la Diagonal Principal con la Secundaria, rellenando la matriz con 1, 2 o 0.
 
ejercicio94() {
  if (this.rows !== this.cols || this.rows === 0) return; 
  const n = this.rows;
  let [sumP, sumS] = [0, 0];
  
  for (let i = 0; i < n; i++) {
    sumP += this.data[i][i];
    sumS += this.data[i][n - 1 - i];
  }
  
  const result = sumP > sumS ? 1 : (sumS > sumP ? 2 : 0);
  
  for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
          this.data[i][j] = result;
      }
  }
}

// Ejercicio 95: Llena la matriz secuencialmente (1, 2, 3...) siguiendo un recorrido diagonal.
 
ejercicio95() {
  if (this.rows !== this.cols) return;
  this.fill(0);
  const n = this.rows;
  let counter = 1;
  
  for (let d = 0; d < 2 * n - 1; d++) {
    let i = d < n ? 0 : d - (n - 1);
    let j = d < n ? d : n - 1;

    while (i < n && j >= 0) {
        this.data[i][j] = counter++;
        i++;
        j--;
    }
  }
}

// Ejercicio 96: Verifica si la matriz cuadrada es "Mágica" (sumas iguales), rellenando la matriz con 1 o 0.
 
ejercicio96() {
  if (this.rows !== this.cols || this.rows === 0) {
    this.fill(0); 
    return;
  }
  const n = this.rows;
  let isMagical = true;
  const mSum = this.data[0].reduce((a, b) => a + b, 0);
  
  let [dPSum, dSSum] = [0, 0];
  
  for (let i = 0; i < n; i++) {
    let rSum = this.data[i].reduce((a, b) => a + b, 0);
    let cSum = 0;
    for (let j = 0; j < n; j++) cSum += this.data[j][i];
    if (rSum !== mSum || cSum !== mSum) isMagical = false;

    dPSum += this.data[i][i];
    dSSum += this.data[i][n - 1 - i];
  }
  
  if (dPSum !== mSum || dSSum !== mSum) isMagical = false;
  
  this.fill(isMagical ? 1 : 0);
}

// Ejercicio 97: Crea una matriz cuadrada y rellena con 1s las posiciones donde i + j < n, formando un triángulo superior izquierdo.
 
ejercicio97() {
  if (this.rows !== this.cols) return; 
  this.fill(0);
  const n = this.rows;
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      this.data[i][j] = (i + j < n) ? 1 : 0;
    }
  }
}

// -----------Ejercicio 98: Crea una matriz cuadrada con valores 1 formando un patrón de doble flecha (diamante vertical).

ejercicio98() {
  if (this.rows !== this.cols || this.rows === 0) return;
  this.fill(0);
  
  const n = this.rows;
  const center = Math.floor(n / 2); 
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const distance = Math.abs(j - center);
      const limit = i <= center ? i : n - 1 - i; 
      this.data[i][j] = distance <= limit ? 1 : 0;
    }
  }
}




  toString() {
    return this.data.map(row => row.join('\t')).join('\n');
  }

    // Método: rellenar la matriz con nombres de imágenes (array de strings)
  fillFromAssets(imageNames) {
    let index = 0;
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (index < imageNames.length) {
          // Extraer número del nombre de archivo (ej: "img_5.png" → 5)
          const match = imageNames[index].match(/\d+/);
          this.data[i][j] = match ? parseInt(match[0]) : imageNames[index];
          index++;
        } else {
          this.data[i][j] = null; // si no hay más imágenes
        }
      }
    }
  }
}

