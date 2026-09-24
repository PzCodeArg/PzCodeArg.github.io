/* ═══════════════════════════════════════════════
   MateStudy — script.js
   Base de datos + lógica completa
═══════════════════════════════════════════════ */

/* ─────────────────────────────────────────────
   BASE DE DATOS DE TEMAS
   Cada tema tiene:
     id, title, level, tags, desc,
     theory (array de párrafos/fórmulas/pasos),
     exercises (array de ejercicios)
───────────────────────────────────────────── */
const TOPICS = [

  /* ═══════════ PRIMARIA ═══════════ */
  {
    id: 'suma-resta',
    title: 'Suma y Resta',
    level: 'primaria',
    tags: ['operaciones', 'básico', 'números', 'aritmética'],
    desc: 'Las operaciones fundamentales con números naturales.',
    theory: [
      { type: 'text', text: 'Las operaciones de suma y resta son las más básicas que vas a usar en toda tu vida. Fijate en este ejemplo: cuando sumás, estás juntando cantidades; cuando restás, estás quitando.' },
      { type: 'formula', text: 'a + b = b + a    (propiedad conmutativa)\na - b ≠ b - a    (la resta NO es conmutativa)' },
      { type: 'text', text: 'Acá lo que hacemos es alinear los números por la derecha y operar columna por columna de derecha a izquierda. Si el resultado de una columna supera el 9, "llevamos" una a la columna siguiente.' },
      { type: 'example', title: 'Ejemplo de parcial', lines: [
        'Calculá: 347 + 285',
        'Paso 1: 7 + 5 = 12 → ponemos 2 y llevamos 1',
        'Paso 2: 4 + 8 + 1 (llevada) = 13 → ponemos 3 y llevamos 1',
        'Paso 3: 3 + 2 + 1 (llevada) = 6',
        'Resultado: 347 + 285 = 632 ✓'
      ]}
    ],
    exercises: [
      {
        id: 'sr1', type: 'multiple',
        question: '¿Cuánto es 456 + 237?',
        options: ['683', '693', '693', '703'],
        options: ['683', '693', '703', '673'],
        correct: 1,
        explanation: {
          correct: '¡Buena esa! Lo resolviste perfecto. 6+7=13 (ponemos 3, llevamos 1); 5+3+1=9; 4+2=6. Resultado: 693.',
          wrong_title: '¡Ojo! Le pifiaste en la suma con llevada.',
          steps: [
            'Sumá las unidades: 6 + 7 = 13. Ponés 3 y llevás 1.',
            'Sumá las decenas: 5 + 3 + 1 (llevada) = 9.',
            'Sumá las centenas: 4 + 2 = 6.',
            'Resultado final: 693'
          ]
        }
      },
      {
        id: 'sr2', type: 'numeric',
        question: '¿Cuánto es 1.000 − 348?',
        correct: 652,
        tolerance: 0,
        explanation: {
          correct: '¡Exacto! Usaste bien el préstamo en la resta.',
          wrong_title: '¡Ojo! El error más común acá es confundirse con los préstamos.',
          steps: [
            'Empezamos por las unidades: 0 − 8 no se puede, pedimos prestado a la decena.',
            'Pero la decena también es 0, así que pedimos prestado a la centena, que también es 0.',
            'Terminamos pidiendo al millar: 1.000 → 0.9.9.10 (reorganizado).',
            '10−8=2 | 9−4=5 | 9−3=6 | 0−0=0. Resultado: 652'
          ]
        }
      }
    ]
  },

  {
    id: 'multiplicacion-division',
    title: 'Multiplicación y División',
    level: 'primaria',
    tags: ['operaciones', 'tablas', 'básico', 'aritmética'],
    desc: 'Multiplicaciones, tablas del 1 al 10 y división entera con resto.',
    theory: [
      { type: 'text', text: 'La multiplicación es una suma repetida. 4 × 3 es lo mismo que sumar cuatro tres veces: 3+3+3+3 = 12. Con las tablas bien aprendidas, esto se hace re rápido.' },
      { type: 'formula', text: 'a × b = b × a    (conmutativa)\na ÷ b = c con resto r  →  a = b×c + r' },
      { type: 'text', text: 'En la división, el resto siempre tiene que ser menor que el divisor. Si el resto es igual o mayor, todavía te queda dividir.' },
      { type: 'example', title: 'División con resto', lines: [
        'Dividir 127 ÷ 5',
        '5 × 25 = 125, entonces el cociente es 25 y el resto es 127 − 125 = 2',
        'Verificación: 5 × 25 + 2 = 125 + 2 = 127 ✓'
      ]}
    ],
    exercises: [
      {
        id: 'md1', type: 'multiple',
        question: '¿Cuánto es 7 × 8?',
        options: ['54', '56', '48', '63'],
        correct: 1,
        explanation: {
          correct: '¡Buena esa! 7 × 8 = 56. Forma rápida: 7×8 = 7×(10−2) = 70−14 = 56.',
          wrong_title: '¡Ojo! La tabla del 7 suele confundir.',
          steps: ['7×1=7, 7×2=14, 7×3=21, 7×4=28, 7×5=35, 7×6=42, 7×7=49, 7×8=56','Recordala: 56 = 7×8, y los dígitos 5,6,7,8 van en orden.']
        }
      },
      {
        id: 'md2', type: 'numeric',
        question: '¿Cuál es el resto de 95 ÷ 7?',
        correct: 4,
        tolerance: 0,
        explanation: {
          correct: '¡Exacto! 7 × 13 = 91, y 95 − 91 = 4. El resto es 4.',
          wrong_title: '¡Ojo! Hay que encontrar el múltiplo de 7 más cercano a 95 sin pasarse.',
          steps: ['7 × 10 = 70, 7 × 13 = 91, 7 × 14 = 98 (se pasa).','Entonces el cociente es 13.', '95 − 91 = 4. El resto es 4.', 'Verificá: 7 × 13 + 4 = 91 + 4 = 95 ✓']
        }
      }
    ]
  },

  {
    id: 'fracciones',
    title: 'Fracciones y Operaciones',
    level: 'primaria',
    tags: ['fracciones', 'numerador', 'denominador', 'equivalentes'],
    desc: 'Fracciones equivalentes, suma, resta, multiplicación y división de fracciones.',
    theory: [
      { type: 'text', text: 'Una fracción representa partes de un entero. El número de arriba se llama numerador (cuántas partes tomás) y el de abajo denominador (en cuántas partes está dividido el entero).' },
      { type: 'formula', text: 'a/b + c/d = (a·d + c·b) / (b·d)\na/b × c/d = (a·c) / (b·d)\na/b ÷ c/d = a/b × d/c  (invertís y multiplicás)' },
      { type: 'text', text: 'Para sumar fracciones, lo primero es tener el mismo denominador. Si no los tenés iguales, buscás el mínimo común múltiplo (MCM) de los denominadores.' },
      { type: 'example', title: 'Suma de fracciones', lines: [
        'Calculá: 1/3 + 1/4',
        'MCM(3,4) = 12',
        '1/3 = 4/12   y   1/4 = 3/12',
        '4/12 + 3/12 = 7/12 ✓'
      ]}
    ],
    exercises: [
      {
        id: 'fr1', type: 'multiple',
        question: '¿Cuánto es 2/5 + 1/3?',
        options: ['3/8', '11/15', '3/15', '13/15'],
        correct: 1,
        explanation: {
          correct: '¡Buena esa! MCM(5,3)=15. 2/5=6/15 y 1/3=5/15. Sumás: 11/15.',
          wrong_title: '¡Ojo! No podés sumar directamente los numeradores si los denominadores son distintos.',
          steps: ['Buscá el MCM de 5 y 3: MCM(5,3) = 15.','Convertí: 2/5 = 6/15 (multiplicás arriba y abajo por 3).','Convertí: 1/3 = 5/15 (multiplicás arriba y abajo por 5).','Sumás los numeradores: 6 + 5 = 11. Resultado: 11/15']
        }
      },
      {
        id: 'fr2', type: 'multiple',
        question: '¿Cuánto es (3/4) ÷ (1/2)?',
        options: ['3/8', '3/2', '6/4', '1/2'],
        correct: 1,
        explanation: {
          correct: '¡Exacto! Invertís el divisor y multiplicás: 3/4 × 2/1 = 6/4 = 3/2.',
          wrong_title: '¡Ojo! Al dividir fracciones, invertís la segunda y multiplicás.',
          steps: ['División de fracciones: a/b ÷ c/d = a/b × d/c','Entonces: 3/4 ÷ 1/2 = 3/4 × 2/1 = 6/4','Simplificás: 6/4 = 3/2 (dividís ambos por 2).']
        }
      }
    ]
  },

  {
    id: 'porcentajes',
    title: 'Porcentajes',
    level: 'primaria',
    tags: ['porcentaje', 'descuento', 'regla de tres', 'proporciones'],
    desc: 'Cálculo de porcentajes, descuentos e incrementos.',
    theory: [
      { type: 'text', text: 'El porcentaje es una forma de expresar una fracción con denominador 100. El símbolo % viene de "por ciento". Entonces 30% = 30/100 = 0,30.' },
      { type: 'formula', text: 'X% de N = (X ÷ 100) × N\nDescuento: Precio final = Precio × (1 − X/100)\nAumento:   Precio final = Precio × (1 + X/100)' },
      { type: 'text', text: 'Truco rápido: para calcular el 10% de cualquier número, corrés la coma un lugar a la izquierda. Para el 5%, calculás el 10% y lo dividís por 2. Para el 1%, corrés dos lugares.' },
      { type: 'example', title: 'Descuento típico de comercio', lines: [
        'Un buzo cuesta $12.500 y tiene 20% de descuento.',
        '20% de 12.500 = 0,20 × 12.500 = $2.500',
        'Precio final = 12.500 − 2.500 = $10.000',
        'O más rápido: 12.500 × 0,80 = $10.000 ✓'
      ]}
    ],
    exercises: [
      {
        id: 'po1', type: 'numeric',
        question: '¿Cuánto es el 15% de 200?',
        correct: 30,
        tolerance: 0,
        explanation: {
          correct: '¡Perfecto! 15% de 200 = 0,15 × 200 = 30.',
          wrong_title: '¡Ojo! Acordate que el porcentaje se convierte a decimal dividiéndolo por 100.',
          steps: ['15% = 15/100 = 0,15','0,15 × 200 = 30','También podés hacer: 10% de 200 = 20; 5% de 200 = 10; suma = 30.']
        }
      },
      {
        id: 'po2', type: 'multiple',
        question: 'Un celular que costaba $80.000 subió un 25%. ¿Cuál es el nuevo precio?',
        options: ['$100.000', '$105.000', '$95.000', '$20.000'],
        correct: 0,
        explanation: {
          correct: '¡Buena esa! 80.000 × 1,25 = 100.000.',
          wrong_title: '¡Ojo! Para un aumento del 25%, multiplicás el precio por 1,25.',
          steps: ['Aumento = 25% × 80.000 = 0,25 × 80.000 = 20.000','Precio nuevo = 80.000 + 20.000 = 100.000','Atajo: 80.000 × (1 + 0,25) = 80.000 × 1,25 = 100.000']
        }
      }
    ]
  },

  {
    id: 'regla-de-tres',
    title: 'Regla de Tres Simple',
    level: 'primaria',
    tags: ['regla de tres', 'proporciones', 'directa', 'inversa'],
    desc: 'Regla de tres simple directa e inversa para resolver problemas cotidianos.',
    theory: [
      { type: 'text', text: 'La regla de tres simple te permite encontrar un valor desconocido cuando conocés tres datos relacionados proporcionalmente. Hay dos tipos: directa e inversa.' },
      { type: 'formula', text: 'Directa:  a/b = c/x  →  x = (b × c) / a\nInversa:  a × b = c × x  →  x = (a × b) / c' },
      { type: 'text', text: 'Es directa cuando al aumentar una cantidad, la otra también aumenta. Es inversa cuando al aumentar una, la otra disminuye.' },
      { type: 'example', title: 'Problema típico', lines: [
        'Directa: Si 3 kg de manzanas cuestan $900, ¿cuánto cuestan 5 kg?',
        '3 kg → $900 | 5 kg → x',
        'x = (5 × 900) / 3 = 4500 / 3 = $1.500 ✓',
        'Inversa: 4 obreros tardan 6 días. ¿Cuánto tardan 3 obreros?',
        '4 × 6 = 3 × x  →  x = 24/3 = 8 días ✓'
      ]}
    ],
    exercises: [
      {
        id: 'rt1', type: 'numeric',
        question: 'Si 5 litros de nafta cuestan $2.500, ¿cuánto cuestan 8 litros?',
        correct: 4000,
        tolerance: 0,
        explanation: {
          correct: '¡Exacto! 8 × 2500 / 5 = 4000.',
          wrong_title: '¡Ojo! Es una regla de tres directa: más litros, más costo.',
          steps: ['5 litros → $2.500 | 8 litros → x', 'x = (8 × 2.500) / 5', 'x = 20.000 / 5 = $4.000']
        }
      }
    ]
  },

  {
    id: 'perimetro-area',
    title: 'Perímetro y Área',
    level: 'primaria',
    tags: ['geometría', 'área', 'perímetro', 'rectángulo', 'triángulo', 'círculo'],
    desc: 'Cálculo de perímetros y áreas de figuras planas fundamentales.',
    theory: [
      { type: 'text', text: 'El perímetro es la longitud del borde de una figura (la suma de todos sus lados). El área es la superficie que ocupa la figura (lo que habría que pintar).' },
      { type: 'formula', text: 'Cuadrado:     P = 4·l        A = l²\nRectángulo:   P = 2(b+h)    A = b·h\nTriángulo:    P = a+b+c     A = (b·h)/2\nCírculo:      P = 2πr       A = π·r²' },
      { type: 'example', title: 'Ejemplo de examen', lines: [
        'Una cancha rectangular mide 40m × 20m.',
        'Perímetro = 2(40+20) = 2×60 = 120m',
        'Área = 40×20 = 800m² ✓'
      ]}
    ],
    exercises: [
      {
        id: 'pa1', type: 'numeric',
        question: 'Una habitación rectangular mide 6m de largo y 4m de ancho. ¿Cuántos m² tiene?',
        correct: 24,
        tolerance: 0,
        explanation: {
          correct: '¡Exacto! Área = 6 × 4 = 24 m².',
          wrong_title: '¡Ojo! El área de un rectángulo es base × altura.',
          steps: ['Área de rectángulo = base × altura', 'A = 6 m × 4 m = 24 m²']
        }
      },
      {
        id: 'pa2', type: 'multiple',
        question: 'Un círculo tiene radio 5cm. ¿Cuál es su área aproximada? (π ≈ 3,14)',
        options: ['78,5 cm²', '31,4 cm²', '62,8 cm²', '25 cm²'],
        correct: 0,
        explanation: {
          correct: '¡Buena esa! A = π × r² = 3,14 × 25 = 78,5 cm².',
          wrong_title: '¡Ojo! No confundas el radio con el diámetro, ni el área con el perímetro.',
          steps: ['A = π × r²', 'A = 3,14 × (5)²', 'A = 3,14 × 25 = 78,5 cm²']
        }
      }
    ]
  },

  {
    id: 'numero-pi',
    title: 'El Número Pi (π) y la Circunferencia',
    level: 'primaria',
    tags: ['pi', 'π', 'circunferencia', 'círculo', 'geometría'],
    desc: 'Qué es π, de dónde viene y cómo se usa en la geometría circular.',
    theory: [
      { type: 'text', text: 'El número Pi (π) es una constante matemática que representa la relación entre la circunferencia de un círculo y su diámetro. Es el mismo para CUALQUIER círculo, ¡de cualquier tamaño!' },
      { type: 'formula', text: 'π = circunferencia / diámetro ≈ 3,14159265...\nπ es un número irracional (no tiene fin ni se repite)' },
      { type: 'text', text: 'Fijate en esto: si agarrás cualquier círculo y medís cuánto mide el borde (circunferencia) y cuánto mide la línea que cruza por el centro (diámetro), la división siempre va a dar π. Siempre.' },
      { type: 'formula', text: 'Circunferencia = π × d = 2 × π × r\nÁrea del disco = π × r²' }
    ],
    exercises: [
      {
        id: 'pi1', type: 'multiple',
        question: 'Una rueda tiene 70cm de diámetro. ¿Cuánto avanza en cada vuelta completa? (π ≈ 3,14)',
        options: ['219,8 cm', '109,9 cm', '153,9 cm', '490 cm'],
        correct: 0,
        explanation: {
          correct: '¡Exacto! La circunferencia = π × d = 3,14 × 70 = 219,8 cm.',
          wrong_title: '¡Ojo! La distancia que avanza en una vuelta es igual a la circunferencia.',
          steps: ['En cada vuelta, la rueda avanza una distancia igual a su circunferencia.', 'C = π × d = 3,14 × 70 = 219,8 cm']
        }
      }
    ]
  },

  /* ═══════════ SECUNDARIA ═══════════ */
  {
    id: 'ecuacion-primer-grado',
    title: 'Ecuaciones de 1er Grado — Despejar X',
    level: 'secundaria',
    tags: ['ecuación', 'despejar', 'variable', 'álgebra', 'primer grado'],
    desc: 'Cómo plantear y resolver ecuaciones lineales con una incógnita.',
    theory: [
      { type: 'text', text: 'Una ecuación de primer grado tiene la forma ax + b = c, donde x es la incógnita. Despejar x significa dejarla sola de un lado del igual.' },
      { type: 'formula', text: 'ax + b = c  →  x = (c − b) / a' },
      { type: 'text', text: 'La regla de oro: todo lo que hacés de un lado del igual, lo tenés que hacer del otro lado también. Cuando algo "pasa" del otro lado del igual, cambia de operación: suma pasa restando, multiplicación pasa dividiendo.' },
      { type: 'steps', items: [
        'Identificá todos los términos con x y los términos independientes.',
        'Pasá todos los términos con x al lado izquierdo y los números al derecho.',
        'Acordate: cuando algo pasa el igual, cambia de signo (suma→resta, ×→÷).',
        'Juntá términos semejantes y despejá.',
        'Verificá reemplazando el resultado en la ecuación original.'
      ]},
      { type: 'example', title: 'Ejemplo de parcial de 1er año', lines: [
        'Resolvé: 3x + 7 = 22',
        '3x = 22 − 7  (el +7 pasa restando)',
        '3x = 15',
        'x = 15/3 = 5',
        'Verificación: 3×5 + 7 = 15 + 7 = 22 ✓'
      ]}
    ],
    exercises: [
      {
        id: 'eq1', type: 'numeric',
        question: 'Resolvé: 2x − 3 = 11. ¿Cuánto vale x?',
        correct: 7,
        tolerance: 0,
        explanation: {
          correct: '¡Buena esa! Lo resolviste perfecto. 2x = 14 → x = 7.',
          wrong_title: '¡Ojo! Le pifiaste al pasar el −3 al otro lado.',
          steps: ['2x − 3 = 11', '2x = 11 + 3  (el −3 pasa sumando)', '2x = 14', 'x = 14 ÷ 2 = 7', 'Verificá: 2×7 − 3 = 14 − 3 = 11 ✓']
        }
      },
      {
        id: 'eq2', type: 'multiple',
        question: '¿Cuál es la solución de 5x + 2 = 3x + 10?',
        options: ['x = 2', 'x = 4', 'x = 6', 'x = 3'],
        correct: 1,
        explanation: {
          correct: '¡Exacto! x = 4. Verificación: 5×4+2 = 22 = 3×4+10 = 22 ✓',
          wrong_title: '¡Ojo! Primero juntá todas las x del mismo lado.',
          steps: ['5x + 2 = 3x + 10', '5x − 3x = 10 − 2  (pasás 3x restando y +2 restando)', '2x = 8', 'x = 4']
        }
      },
      {
        id: 'eq3', type: 'numeric',
        question: 'Resolvé: (x + 1)/3 = 4. ¿Cuánto es x?',
        correct: 11,
        tolerance: 0,
        explanation: {
          correct: '¡Perfecto! x + 1 = 12, entonces x = 11.',
          wrong_title: '¡Ojo! Cuando hay un denominador, el 3 pasa multiplicando al otro lado.',
          steps: ['(x + 1)/3 = 4', 'x + 1 = 4 × 3  (el /3 pasa multiplicando)', 'x + 1 = 12', 'x = 12 − 1 = 11']
        }
      }
    ]
  },

  {
    id: 'formula-resolvente',
    title: 'Ecuación Cuadrática — Fórmula Resolvente',
    level: 'secundaria',
    tags: ['cuadrática', 'resolvente', 'bhaskara', 'discriminante', 'segundo grado'],
    desc: 'Cómo resolver ecuaciones de segundo grado con la fórmula resolvente (Bhaskara).',
    theory: [
      { type: 'text', text: 'Una ecuación cuadrática tiene la forma ax² + bx + c = 0. La fórmula resolvente (también llamada Bhaskara) te da directamente las soluciones sin necesidad de factorear.' },
      { type: 'formula', text: 'x = (−b ± √(b² − 4ac)) / (2a)\n\nDonde b² − 4ac se llama DISCRIMINANTE (Δ)' },
      { type: 'text', text: 'El discriminante te dice cuántas soluciones reales tiene la ecuación sin necesidad de resolverla:' },
      { type: 'steps', items: [
        'Si Δ > 0 → la ecuación tiene DOS soluciones reales distintas.',
        'Si Δ = 0 → la ecuación tiene UNA solución real (raíz doble).',
        'Si Δ < 0 → la ecuación NO tiene soluciones reales (las raíces son complejas).'
      ]},
      { type: 'example', title: 'Ejemplo típico de parcial', lines: [
        'Resolvé: x² − 5x + 6 = 0',
        'a=1, b=−5, c=6',
        'Δ = (−5)² − 4×1×6 = 25 − 24 = 1',
        'x = (5 ± √1) / 2',
        'x₁ = (5+1)/2 = 3    x₂ = (5−1)/2 = 2',
        'Verificá: (x−3)(x−2) = 0 ✓'
      ]}
    ],
    exercises: [
      {
        id: 'res1', type: 'multiple',
        question: 'Resolvé x² − 7x + 12 = 0 con la resolvente. ¿Cuáles son las raíces?',
        options: ['x = 3 y x = 4', 'x = −3 y x = −4', 'x = 6 y x = 2', 'x = 12 y x = 1'],
        correct: 0,
        explanation: {
          correct: '¡Buena esa! a=1, b=−7, c=12. Δ=49−48=1. x=(7±1)/2 → 4 y 3.',
          wrong_title: '¡Ojo! Cuidado con los signos de b y c.',
          steps: ['a=1, b=−7, c=12', 'Δ = (−7)² − 4×1×12 = 49 − 48 = 1', 'x = (7 ± 1) / 2', 'x₁ = 8/2 = 4   y   x₂ = 6/2 = 3']
        }
      },
      {
        id: 'res2', type: 'multiple',
        question: '¿Cuántas soluciones reales tiene x² + 4x + 5 = 0?',
        options: ['Dos soluciones', 'Una solución (raíz doble)', 'Ninguna solución real', 'Infinitas soluciones'],
        correct: 2,
        explanation: {
          correct: '¡Exacto! El discriminante es negativo, así que no tiene raíces reales.',
          wrong_title: '¡Ojo! La cantidad de soluciones depende del discriminante.',
          steps: ['a=1, b=4, c=5', 'Δ = 4² − 4×1×5 = 16 − 20 = −4', 'Como Δ < 0, no hay soluciones reales.']
        }
      }
    ]
  },

  {
    id: 'factoreo',
    title: 'Casos de Factoreo',
    level: 'secundaria',
    tags: ['factoreo', 'factor común', 'trinomio', 'diferencia de cuadrados', 'suma cubo'],
    desc: 'Los casos de factorización más usados en secundaria: factor común, trinomio cuadrado perfecto y diferencia de cuadrados.',
    theory: [
      { type: 'text', text: 'Factorear es reescribir una expresión algebraica como producto de factores más simples. Es el proceso inverso a la distributiva.' },
      { type: 'formula', text: '1. Factor Común:    ab + ac = a(b + c)\n2. T.C.P.:          a² ± 2ab + b² = (a ± b)²\n3. Dif. Cuadrados:  a² − b² = (a+b)(a−b)\n4. Suma/Dif. Cubos: a³ ± b³ = (a±b)(a²∓ab+b²)' },
      { type: 'steps', items: [
        'Buscá primero si hay factor común en todos los términos.',
        'Si los términos son dos, fijate si es diferencia de cuadrados o suma/diferencia de cubos.',
        'Si son tres términos, intentá trinomio cuadrado perfecto o factoreo por aspa.',
        'Siempre verificá multiplicando el resultado.'
      ]},
      { type: 'example', title: 'Diferencia de cuadrados', lines: [
        'Factoreá: x² − 16',
        'x² − 16 = x² − 4²',
        '= (x + 4)(x − 4) ✓'
      ]},
      { type: 'example', title: 'Trinomio cuadrado perfecto', lines: [
        'Factoreá: x² + 6x + 9',
        'Fijate: √9 = 3 y 2×x×3 = 6x ✓ (coincide)',
        'x² + 6x + 9 = (x + 3)² ✓'
      ]}
    ],
    exercises: [
      {
        id: 'fa1', type: 'multiple',
        question: '¿Cómo factoreás x² − 25?',
        options: ['(x − 5)²', '(x + 5)(x − 5)', '(x − 5)(x − 5)', '(x + 25)(x − 1)'],
        correct: 1,
        explanation: {
          correct: '¡Buena esa! Es diferencia de cuadrados: x² − 5² = (x+5)(x−5).',
          wrong_title: '¡Ojo! a² − b² = (a+b)(a−b). No es lo mismo que (a−b)².',
          steps: ['x² − 25 = x² − 5²', 'Reconocés diferencia de cuadrados: a² − b²', 'a = x, b = 5', 'Resultado: (x+5)(x−5)']
        }
      },
      {
        id: 'fa2', type: 'multiple',
        question: '¿Cuál es el factor común de 6x³ + 9x² − 3x?',
        options: ['3x', '3x²', 'x', '3'],
        correct: 0,
        explanation: {
          correct: '¡Exacto! 3x(2x² + 3x − 1). El MCD de 6,9,3 es 3 y la menor potencia de x es x¹.',
          wrong_title: '¡Ojo! El factor común incluye tanto el MCD numérico como la menor potencia de cada variable.',
          steps: ['MCD de los coeficientes 6, 9, 3 → MCD = 3', 'Menor potencia de x: x¹ (está en el último término)', 'Factor común: 3x', '6x³ ÷ 3x = 2x²    9x² ÷ 3x = 3x    3x ÷ 3x = 1', 'Resultado: 3x(2x² + 3x − 1)']
        }
      }
    ]
  },

  {
    id: 'pitagoras',
    title: 'Teorema de Pitágoras',
    level: 'secundaria',
    tags: ['pitágoras', 'triángulo', 'hipotenusa', 'cateto', 'geometría'],
    desc: 'Relación entre los lados de un triángulo rectángulo y sus aplicaciones.',
    theory: [
      { type: 'text', text: 'El Teorema de Pitágoras dice que en todo triángulo rectángulo, el cuadrado de la hipotenusa (el lado más largo, opuesto al ángulo recto) es igual a la suma de los cuadrados de los catetos.' },
      { type: 'formula', text: 'c² = a² + b²\nDonde c = hipotenusa, a y b = catetos\n\nPara encontrar un cateto: a = √(c² − b²)' },
      { type: 'text', text: 'Las ternas pitagóricas más usadas en exámenes: (3,4,5), (5,12,13), (8,15,17), (7,24,25). Si ves dos de estos números, ya sabés el tercero.' },
      { type: 'example', title: 'Aplicación clásica', lines: [
        'Una escalera de 5m se apoya en una pared.',
        'La base está a 3m de la pared. ¿Hasta dónde llega?',
        'h² = 5² − 3² = 25 − 9 = 16',
        'h = √16 = 4m ✓'
      ]}
    ],
    exercises: [
      {
        id: 'pit1', type: 'numeric',
        question: 'Un triángulo rectángulo tiene catetos de 6 y 8. ¿Cuánto mide la hipotenusa?',
        correct: 10,
        tolerance: 0,
        explanation: {
          correct: '¡Buena! c² = 36 + 64 = 100 → c = 10. Terna 6-8-10 (el doble de 3-4-5).',
          wrong_title: '¡Ojo! La hipotenusa se encuentra con c = √(a²+b²).',
          steps: ['c² = a² + b²', 'c² = 6² + 8²', 'c² = 36 + 64 = 100', 'c = √100 = 10']
        }
      }
    ]
  },

  {
    id: 'trigonometria',
    title: 'Trigonometría Básica',
    level: 'secundaria',
    tags: ['trigonometría', 'seno', 'coseno', 'tangente', 'ángulos', 'razones trigonométricas'],
    desc: 'Seno, coseno y tangente de ángulos en triángulos rectángulos.',
    theory: [
      { type: 'text', text: 'Las razones trigonométricas relacionan los ángulos de un triángulo rectángulo con los lados. El mnemotécnico SOH-CAH-TOA te las hace acordar fácil.' },
      { type: 'formula', text: 'sen(θ) = cateto opuesto / hipotenusa      (SOH)\ncos(θ) = cateto adyacente / hipotenusa   (CAH)\ntg(θ)  = cateto opuesto / adyacente      (TOA)\n\ntg(θ) = sen(θ) / cos(θ)' },
      { type: 'text', text: 'Valores que sí o sí tenés que saber de memoria para rendir bien:' },
      { type: 'formula', text: 'sen(30°)=1/2  cos(30°)=√3/2  tg(30°)=1/√3\nsen(45°)=√2/2 cos(45°)=√2/2 tg(45°)=1\nsen(60°)=√3/2 cos(60°)=1/2  tg(60°)=√3' },
      { type: 'example', title: 'Ejercicio típico de ingreso', lines: [
        'Un poste crea una sombra de 6m cuando el sol forma 30° con el suelo.',
        'tg(30°) = altura / sombra',
        '1/√3 = h / 6  →  h = 6/√3 = 6√3/3 = 2√3 ≈ 3,46m ✓'
      ]}
    ],
    exercises: [
      {
        id: 'tri1', type: 'multiple',
        question: 'Si sen(θ) = 3/5 y θ es agudo, ¿cuánto vale cos(θ)?',
        options: ['4/5', '3/4', '5/3', '4/3'],
        correct: 0,
        explanation: {
          correct: '¡Exacto! Por Pitágoras: si opuesto=3 e hipotenusa=5, el adyacente = 4. Entonces cos = 4/5.',
          wrong_title: '¡Ojo! Usá el Teorema de Pitágoras para encontrar el lado que falta.',
          steps: ['sen(θ) = opuesto/hipotenusa = 3/5', 'Entonces opuesto = 3, hipotenusa = 5', 'Por Pitágoras: adyacente² = 5² − 3² = 25 − 9 = 16 → adyacente = 4', 'cos(θ) = 4/5']
        }
      }
    ]
  },

  {
    id: 'potencias-raices',
    title: 'Potencias y Raíces',
    level: 'secundaria',
    tags: ['potencia', 'raíz cuadrada', 'exponente', 'propiedades'],
    desc: 'Propiedades de las potencias y simplificación de raíces.',
    theory: [
      { type: 'text', text: 'Una potencia es una multiplicación repetida. aⁿ significa multiplicar a por sí mismo n veces. Las propiedades de las potencias son fundamentales para simplificar expresiones algebraicas.' },
      { type: 'formula', text: 'aⁿ × aᵐ = aⁿ⁺ᵐ\naⁿ ÷ aᵐ = aⁿ⁻ᵐ\n(aⁿ)ᵐ  = aⁿˣᵐ\n(ab)ⁿ  = aⁿ × bⁿ\na⁻ⁿ   = 1/aⁿ\na⁰    = 1  (con a ≠ 0)' },
      { type: 'example', title: 'Simplificación', lines: [
        'Simplificá: (2³ × 2⁴) / 2⁵',
        '= 2^(3+4) / 2⁵',
        '= 2⁷ / 2⁵ = 2^(7-5) = 2² = 4 ✓'
      ]}
    ],
    exercises: [
      {
        id: 'pot1', type: 'multiple',
        question: '¿Cuánto es 2⁻³?',
        options: ['−8', '1/8', '−6', '8'],
        correct: 1,
        explanation: {
          correct: '¡Buena! 2⁻³ = 1/2³ = 1/8. Exponente negativo = fracción inversa.',
          wrong_title: '¡Ojo! Un exponente negativo NO significa que el resultado es negativo.',
          steps: ['a⁻ⁿ = 1/aⁿ', '2⁻³ = 1/2³ = 1/8']
        }
      }
    ]
  },

  {
    id: 'inecuaciones',
    title: 'Inecuaciones de Primer Grado',
    level: 'secundaria',
    tags: ['inecuación', 'desigualdad', 'mayor', 'menor', 'intervalo'],
    desc: 'Resolución de inecuaciones y representación en la recta numérica.',
    theory: [
      { type: 'text', text: 'Una inecuación es como una ecuación pero con desigualdad (< > ≤ ≥). Se resuelve igual que una ecuación con una regla EXTRA: si multiplicás o dividís por un número NEGATIVO, el sentido de la desigualdad se invierte.' },
      { type: 'formula', text: 'Si k > 0: a < b  →  a×k < b×k\nSi k < 0: a < b  →  a×k > b×k  (¡se invierte!)' },
      { type: 'example', title: 'Inecuación con inversión de signo', lines: [
        'Resolvé: −2x + 3 < 7',
        '−2x < 7 − 3',
        '−2x < 4',
        'x > −2  (dividiste por −2, se invierte la desigualdad)',
        'Conjunto solución: x ∈ (−2, +∞) ✓'
      ]}
    ],
    exercises: [
      {
        id: 'ineq1', type: 'multiple',
        question: '¿Cuál es la solución de 3x − 6 > 9?',
        options: ['x > 5', 'x > 1', 'x < 5', 'x > 15'],
        correct: 0,
        explanation: {
          correct: '¡Buena! 3x > 15 → x > 5.',
          wrong_title: '¡Ojo! El 6 pasa sumando: 3x > 9+6 = 15.',
          steps: ['3x − 6 > 9', '3x > 9 + 6 = 15', 'x > 15/3 = 5']
        }
      }
    ]
  },

  /* ═══════════ TERCIARIO / INGRESO ═══════════ */
  {
    id: 'funciones',
    title: 'Funciones: Lineal, Cuadrática y Exponencial',
    level: 'terciario',
    tags: ['función', 'lineal', 'cuadrática', 'exponencial', 'gráfico', 'dominio', 'imagen'],
    desc: 'Análisis de los tipos de funciones más importantes del ingreso universitario.',
    theory: [
      { type: 'text', text: 'Una función es una relación que asigna a cada valor de x exactamente un valor de y. Acá lo que hacemos es estudiar los tres tipos más importantes para el ingreso.' },
      { type: 'formula', text: 'Lineal:      f(x) = mx + b        (recta)\nCuadrática:  f(x) = ax² + bx + c  (parábola)\nExponencial: f(x) = a·bˣ          (crecimiento/decrecimiento)' },
      { type: 'steps', items: [
        'Función lineal: pendiente m (si m>0 crece, si m<0 decrece), ordenada al origen b.',
        'Función cuadrática: si a>0 la parábola abre hacia arriba; si a<0, hacia abajo. Vértice: x = −b/(2a).',
        'Función exponencial: si b>1 crece sin límite; si 0<b<1 decrece acercándose a cero.',
        'Dominio: todos los x posibles. Imagen (codominio): todos los y posibles.'
      ]},
      { type: 'example', title: 'Vértice de una parábola', lines: [
        'f(x) = x² − 4x + 3',
        'Vértice: xᵥ = −(−4)/(2×1) = 4/2 = 2',
        'yᵥ = f(2) = 4 − 8 + 3 = −1',
        'Vértice en V(2, −1) ✓'
      ]}
    ],
    exercises: [
      {
        id: 'fn1', type: 'multiple',
        question: 'Para f(x) = 2x² − 8x + 6, ¿en qué valor de x está el vértice?',
        options: ['x = 2', 'x = −2', 'x = 4', 'x = 1'],
        correct: 0,
        explanation: {
          correct: '¡Exacto! xᵥ = −b/(2a) = −(−8)/(2×2) = 8/4 = 2.',
          wrong_title: '¡Ojo! La fórmula del vértice es xᵥ = −b/(2a). Cuidado con los signos.',
          steps: ['a = 2, b = −8', 'xᵥ = −b/(2a) = −(−8)/(2×2) = 8/4 = 2', 'yᵥ = f(2) = 8 − 16 + 6 = −2', 'Vértice: V(2, −2)']
        }
      },
      {
        id: 'fn2', type: 'multiple',
        question: 'La función f(x) = 3·2ˣ, ¿cuánto vale f(3)?',
        options: ['24', '18', '12', '48'],
        correct: 0,
        explanation: {
          correct: '¡Buena! f(3) = 3×2³ = 3×8 = 24.',
          wrong_title: '¡Ojo! Primero calculás la potencia 2³ y después multiplicás por 3.',
          steps: ['f(x) = 3·2ˣ', 'f(3) = 3·2³ = 3·8 = 24']
        }
      }
    ]
  },

  {
    id: 'sistemas-ecuaciones',
    title: 'Sistemas de Ecuaciones 2×2 y 3×3',
    level: 'terciario',
    tags: ['sistema', 'ecuaciones', 'sustitución', 'reducción', 'Gauss', 'determinante'],
    desc: 'Resolución de sistemas de ecuaciones con 2 y 3 incógnitas.',
    theory: [
      { type: 'text', text: 'Un sistema de ecuaciones es un conjunto de ecuaciones que deben cumplirse simultáneamente. Los métodos más usados son: sustitución, reducción (o suma/resta) y regla de Cramer.' },
      { type: 'formula', text: 'Sistema 2×2:\n  a₁x + b₁y = c₁\n  a₂x + b₂y = c₂\n\nRegla de Cramer (2×2):\n  x = (c₁b₂ − c₂b₁) / (a₁b₂ − a₂b₁)\n  y = (a₁c₂ − a₂c₁) / (a₁b₂ − a₂b₁)' },
      { type: 'steps', items: [
        'Sustitución: despejás una variable de una ecuación y la sustituís en la otra.',
        'Reducción: multiplicás las ecuaciones para que un coeficiente se cancele al sumar.',
        'Para 3×3: eliminás una variable para obtener un sistema 2×2, luego repetís.'
      ]},
      { type: 'example', title: 'Sistema 2×2 por sustitución', lines: [
        'x + y = 10  y  2x − y = 5',
        'De la 1ra: y = 10 − x',
        'Sustituís en la 2da: 2x − (10−x) = 5',
        '2x − 10 + x = 5  →  3x = 15  →  x = 5',
        'y = 10 − 5 = 5  →  Solución: (5, 5) ✓'
      ]}
    ],
    exercises: [
      {
        id: 'sis1', type: 'numeric',
        question: 'Resolví el sistema: x + y = 8 y x − y = 2. ¿Cuánto vale x?',
        correct: 5,
        tolerance: 0,
        explanation: {
          correct: '¡Buena! Por reducción: 2x = 10 → x = 5, y = 3.',
          wrong_title: '¡Ojo! Sumá las dos ecuaciones para eliminar y.',
          steps: ['Suma las ecuaciones: (x+y) + (x−y) = 8+2', '2x = 10 → x = 5', 'Reemplazás: 5 + y = 8 → y = 3']
        }
      }
    ]
  },

  {
    id: 'vectores',
    title: 'Vectores en el Plano',
    level: 'terciario',
    tags: ['vector', 'módulo', 'producto escalar', 'suma vectorial', 'componentes'],
    desc: 'Operaciones con vectores: suma, resta, producto escalar y módulo.',
    theory: [
      { type: 'text', text: 'Un vector en el plano es un par ordenado (a, b) que representa una magnitud con dirección. Se puede sumar componente a componente y el módulo es su "longitud".' },
      { type: 'formula', text: 'v = (a, b)\n|v| = √(a² + b²)  (módulo)\nu + v = (a₁+a₂, b₁+b₂)  (suma)\nu · v = a₁·a₂ + b₁·b₂  (producto escalar)\n\nSon perpendiculares si u·v = 0' },
      { type: 'example', title: 'Ejemplo de física o ingreso UTN', lines: [
        'u = (3, 4)    v = (1, −2)',
        '|u| = √(9+16) = √25 = 5',
        'u + v = (4, 2)',
        'u · v = 3×1 + 4×(−2) = 3 − 8 = −5 ≠ 0 (no son ⊥)'
      ]}
    ],
    exercises: [
      {
        id: 'vec1', type: 'numeric',
        question: '¿Cuánto es el módulo del vector (5, 12)?',
        correct: 13,
        tolerance: 0,
        explanation: {
          correct: '¡Exacto! |v| = √(25+144) = √169 = 13. Terna pitagórica 5-12-13.',
          wrong_title: '¡Ojo! El módulo es √(a²+b²), no a+b.',
          steps: ['|v| = √(5² + 12²)', '= √(25 + 144)', '= √169 = 13']
        }
      }
    ]
  },

  {
    id: 'logaritmos',
    title: 'Logaritmos y Propiedades',
    level: 'terciario',
    tags: ['logaritmo', 'log', 'ln', 'propiedades', 'ecuación logarítmica'],
    desc: 'Definición de logaritmo, propiedades fundamentales y ecuaciones logarítmicas.',
    theory: [
      { type: 'text', text: 'El logaritmo es la operación inversa a la potencia. log_b(x) = y significa que b^y = x. Es la respuesta a "¿a qué exponente hay que elevar b para obtener x?"' },
      { type: 'formula', text: 'logₐ(M×N) = logₐM + logₐN\nlogₐ(M/N) = logₐM − logₐN\nlogₐ(Mⁿ)  = n·logₐM\nlogₐ(a)   = 1\nlogₐ(1)   = 0\nCambio de base: logₐM = ln(M)/ln(a)' },
      { type: 'example', title: 'Ecuación logarítmica', lines: [
        'Resolvé: log₂(x+1) = 3',
        'Pasás a forma exponencial: 2³ = x+1',
        '8 = x+1  →  x = 7',
        'Verificá: log₂(8) = 3 ✓'
      ]}
    ],
    exercises: [
      {
        id: 'log1', type: 'multiple',
        question: '¿Cuánto es log₁₀(1000)?',
        options: ['3', '100', '1/3', '10'],
        correct: 0,
        explanation: {
          correct: '¡Exacto! log₁₀(1000) = 3 porque 10³ = 1000.',
          wrong_title: '¡Ojo! logₐ(x) = y significa aʸ = x.',
          steps: ['log₁₀(1000) = y significa que 10ʸ = 1000', '10¹=10, 10²=100, 10³=1000', 'Entonces y = 3']
        }
      }
    ]
  },

  /* ═══════════ FACULTAD / CBC ═══════════ */
  {
    id: 'limites',
    title: 'Límites e Indeterminaciones',
    level: 'facultad',
    tags: ['límite', 'indeterminación', '0/0', 'infinito', 'L\'Hôpital', 'continuidad'],
    desc: 'Cálculo de límites, resolución de indeterminaciones 0/0 y ∞/∞.',
    theory: [
      { type: 'text', text: 'El límite de una función cuando x tiende a un valor es el valor al que se "acerca" f(x) sin necesariamente llegar. Las indeterminaciones son los casos donde no podés evaluar directamente.' },
      { type: 'formula', text: 'Indeterminaciones: 0/0, ∞/∞, 0·∞, ∞−∞, 1^∞, 0⁰, ∞⁰\n\nRegla de L\'Hôpital (para 0/0 o ∞/∞):\nlím f(x)/g(x) = lím f\'(x)/g\'(x)' },
      { type: 'steps', items: [
        'Intentá sustituir directamente x → a. Si da un número, ese es el límite.',
        'Si da 0/0: factoreá numerador y denominador y cancelá el factor común.',
        'Si da ∞/∞: dividí todo por la mayor potencia de x.',
        'Si persiste la indeterminación, usá Regla de L\'Hôpital (derivar arriba y abajo).'
      ]},
      { type: 'example', title: 'Indeterminación 0/0 por factoreo', lines: [
        'lím(x→2) (x² − 4)/(x − 2)',
        'Sustituís: (4−4)/(2−2) = 0/0  (indeterminación)',
        'Factoreás: (x+2)(x−2)/(x−2) = (x+2)',
        'lím(x→2) (x+2) = 4 ✓'
      ]},
      { type: 'example', title: 'Límite en el infinito', lines: [
        'lím(x→∞) (3x² + x)/(2x² − 5)',
        'Dividís por x²: (3 + 1/x)/(2 − 5/x²)',
        'Cuando x→∞: (3 + 0)/(2 − 0) = 3/2 ✓'
      ]}
    ],
    exercises: [
      {
        id: 'lim1', type: 'multiple',
        question: '¿Cuánto es lím(x→3) (x² − 9)/(x − 3)?',
        options: ['0', '6', 'Infinito', 'Indeterminado'],
        correct: 1,
        explanation: {
          correct: '¡Buena esa! Factoreás (x+3)(x−3)/(x−3) = (x+3) → lím = 3+3 = 6.',
          wrong_title: '¡Ojo! Cuando da 0/0, factoreá el numerador.',
          steps: ['Sustituís x=3: (9−9)/(3−3) = 0/0 (indeterminación)', 'Factoreás el numerador: x²−9 = (x+3)(x−3)', '(x+3)(x−3)/(x−3) = x+3  (cancelás x−3)', 'lím(x→3) (x+3) = 3+3 = 6']
        }
      },
      {
        id: 'lim2', type: 'multiple',
        question: '¿Cuánto es lím(x→∞) (5x³ − 2x)/(3x³ + x²)?',
        options: ['5/3', '0', 'Infinito', '−2'],
        correct: 0,
        explanation: {
          correct: '¡Exacto! Cuando x→∞ en un cociente de polinomios, el resultado es el cociente de los coeficientes principales: 5/3.',
          wrong_title: '¡Ojo! En límites al infinito de cocientes de polinomios, comparás los grados.',
          steps: ['Ambos polinomios son de grado 3 (mismo grado).', 'Dividís todo por x³: (5 − 2/x²)/(3 + 1/x)', 'Cuando x→∞, los términos con x en el denominador se van a 0.', 'Resultado: 5/3']
        }
      }
    ]
  },

  {
    id: 'derivadas',
    title: 'Derivadas y Regla de la Cadena',
    level: 'facultad',
    tags: ['derivada', 'regla de la cadena', 'diferenciación', 'pendiente', 'calculus'],
    desc: 'Derivadas de funciones elementales, producto, cociente y regla de la cadena.',
    theory: [
      { type: 'text', text: 'La derivada f\'(x) mide la tasa de cambio instantánea de una función. Geométricamente, es la pendiente de la recta tangente a la curva en un punto.' },
      { type: 'formula', text: 'Reglas básicas:\n(xⁿ)\' = n·xⁿ⁻¹\n(eˣ)\'  = eˣ\n(ln x)\' = 1/x\n(sen x)\' = cos x\n(cos x)\' = −sen x\n\nProducto: (f·g)\' = f\'·g + f·g\'\nCociente: (f/g)\' = (f\'·g − f·g\')/g²\nCadena:  (f(g(x)))\' = f\'(g(x))·g\'(x)' },
      { type: 'example', title: 'Regla de la cadena', lines: [
        'Derivá: f(x) = (3x² + 1)⁵',
        'Función externa: u⁵  →  derivada: 5u⁴',
        'Función interna: u = 3x² + 1  →  u\' = 6x',
        'f\'(x) = 5(3x²+1)⁴ × 6x = 30x(3x²+1)⁴ ✓'
      ]},
      { type: 'example', title: 'Regla del producto', lines: [
        'Derivá: f(x) = x²·sen(x)',
        'f = x², f\' = 2x | g = sen(x), g\' = cos(x)',
        'f\'(x) = 2x·sen(x) + x²·cos(x) ✓'
      ]}
    ],
    exercises: [
      {
        id: 'der1', type: 'multiple',
        question: '¿Cuál es la derivada de f(x) = x³ − 4x + 7?',
        options: ['3x² − 4', 'x² − 4', '3x² + 7', '3x² − 4x'],
        correct: 0,
        explanation: {
          correct: '¡Buena esa! (x³)\' = 3x², (−4x)\' = −4, (7)\' = 0. Total: 3x² − 4.',
          wrong_title: '¡Ojo! La derivada de una constante es cero.',
          steps: ['Derivás término a término.', '(x³)\' = 3x² (bajás el exponente y restás 1)', '(−4x)\' = −4', '(7)\' = 0 (constante → derivada = 0)', 'f\'(x) = 3x² − 4']
        }
      },
      {
        id: 'der2', type: 'multiple',
        question: 'Derivá f(x) = sen(x²). ¿Cuál es f\'(x)?',
        options: ['cos(x²)', '2x·cos(x²)', 'x·cos(x²)', '−cos(x²)'],
        correct: 1,
        explanation: {
          correct: '¡Exacto! Regla de la cadena: (sen(x²))\' = cos(x²) × 2x.',
          wrong_title: '¡Ojo! Usá la regla de la cadena: derivada de afuera × derivada de adentro.',
          steps: ['f(x) = sen(g(x)) con g(x) = x²', 'f\'(x) = cos(g(x)) × g\'(x)', 'g\'(x) = 2x', 'f\'(x) = cos(x²) × 2x = 2x·cos(x²)']
        }
      }
    ]
  },

  {
    id: 'integrales',
    title: 'Integrales Definidas e Indefinidas',
    level: 'facultad',
    tags: ['integral', 'primitiva', 'antiderivada', 'Riemann', 'sustitución', 'por partes'],
    desc: 'Integración básica, por sustitución y por partes. Cálculo de área bajo la curva.',
    theory: [
      { type: 'text', text: 'La integral es la operación inversa a la derivada. La integral indefinida da una familia de funciones (las primitivas); la integral definida da un número (el área entre la curva y el eje x).' },
      { type: 'formula', text: 'Integrales básicas:\n∫xⁿ dx = xⁿ⁺¹/(n+1) + C    (n ≠ −1)\n∫eˣ dx = eˣ + C\n∫1/x dx = ln|x| + C\n∫sen(x) dx = −cos(x) + C\n∫cos(x) dx = sen(x) + C\n\nIntegral definida:\n∫[a,b] f(x)dx = F(b) − F(a)' },
      { type: 'steps', items: [
        'Sustitución (cambio de variable): si hay una función compuesta, llamás u a la función interior.',
        'Por partes: ∫u·dv = u·v − ∫v·du. Elegís u como la parte que simplifica al derivar.',
        'Verificación: derivar el resultado tiene que dar la función original.'
      ]},
      { type: 'example', title: 'Sustitución simple', lines: [
        '∫ 2x·(x²+1)⁴ dx',
        'u = x² + 1  →  du = 2x dx',
        '∫ u⁴ du = u⁵/5 + C = (x²+1)⁵/5 + C ✓'
      ]},
      { type: 'example', title: 'Integral definida (área)', lines: [
        '∫[0,3] x² dx',
        'F(x) = x³/3',
        'F(3) − F(0) = 27/3 − 0 = 9 ✓'
      ]}
    ],
    exercises: [
      {
        id: 'int1', type: 'multiple',
        question: '¿Cuál es ∫(3x² + 2x) dx?',
        options: ['x³ + x² + C', '6x + 2 + C', '3x³ + 2x² + C', 'x³/3 + x² + C'],
        correct: 0,
        explanation: {
          correct: '¡Exacto! ∫3x²dx = 3·x³/3 = x³ y ∫2x dx = 2·x²/2 = x². Total: x³ + x² + C.',
          wrong_title: '¡Ojo! Para integrar xⁿ, sumás 1 al exponente y dividís por ese nuevo exponente.',
          steps: ['∫3x² dx = 3 × x³/3 = x³', '∫2x dx = 2 × x²/2 = x²', 'Resultado: x³ + x² + C']
        }
      },
      {
        id: 'int2', type: 'numeric',
        question: 'Calculá ∫[1,3] 2x dx. ¿Cuánto da?',
        correct: 8,
        tolerance: 0,
        explanation: {
          correct: '¡Perfecto! F(x) = x². F(3) − F(1) = 9 − 1 = 8.',
          wrong_title: '¡Ojo! Primero encontrás la primitiva, luego evaluás en los extremos y restás.',
          steps: ['Primitiva de 2x: F(x) = x²', 'Aplicás Teorema Fundamental del Cálculo: F(3) − F(1)', '= 3² − 1² = 9 − 1 = 8']
        }
      }
    ]
  },

  {
    id: 'matrices',
    title: 'Matrices y Determinantes',
    level: 'facultad',
    tags: ['matriz', 'determinante', 'inversa', 'Gauss', 'álgebra lineal'],
    desc: 'Operaciones con matrices, cálculo de determinantes y matriz inversa.',
    theory: [
      { type: 'text', text: 'Una matriz es una tabla de números ordenados en filas y columnas. Son fundamentales en álgebra lineal y tienen aplicaciones en sistemas de ecuaciones, transformaciones y más.' },
      { type: 'formula', text: 'Suma A+B: se suman componente a componente (mismo tamaño)\nProducto A×B: (AB)ᵢⱼ = Σ aᵢₖ·bₖⱼ\n\nDeterminante 2×2:\n|a b|  = a·d − b·c\n|c d|\n\nDeterminante 3×3 (Sarrus):\nSumar diagonales "yendo" y restar "volviendo"' },
      { type: 'steps', items: [
        'Para det(2×2): multiplicás cruzado y restás.',
        'Para det(3×3): usás la regla de Sarrus o expansión por cofactores.',
        'Una matriz tiene inversa solo si su determinante ≠ 0.',
        'A⁻¹ = (1/det(A)) × adj(A), donde adj es la matriz adjunta transpuesta.'
      ]},
      { type: 'example', title: 'Determinante 2×2', lines: [
        'A = | 3  1 |',
        '    | 2  4 |',
        'det(A) = 3×4 − 1×2 = 12 − 2 = 10 ✓'
      ]}
    ],
    exercises: [
      {
        id: 'mat1', type: 'numeric',
        question: 'Calculá el determinante de la matriz: [[5, 2], [3, 4]]',
        correct: 14,
        tolerance: 0,
        explanation: {
          correct: '¡Exacto! det = 5×4 − 2×3 = 20 − 6 = 14.',
          wrong_title: '¡Ojo! det(2×2) = ad − bc. Cuidado con el orden de la multiplicación cruzada.',
          steps: ['det = a·d − b·c', 'a=5, b=2, c=3, d=4', 'det = 5×4 − 2×3 = 20 − 6 = 14']
        }
      }
    ]
  },

  {
    id: 'combinatoria',
    title: 'Combinatoria — Permutaciones y Combinaciones',
    level: 'terciario',
    tags: ['combinatoria', 'permutación', 'combinación', 'factorial', 'probabilidad'],
    desc: 'Conteo: principio multiplicativo, permutaciones y combinaciones.',
    theory: [
      { type: 'text', text: 'La combinatoria responde preguntas como "¿de cuántas formas se puede...?". La diferencia clave: en permutaciones el orden importa; en combinaciones, no.' },
      { type: 'formula', text: 'n! = n × (n−1) × ... × 2 × 1   (factorial)\n\nPermutaciones de n en r:\nP(n,r) = n! / (n−r)!\n\nCombinaciones de n en r:\nC(n,r) = n! / (r! × (n−r)!)  = "n sobre r"' },
      { type: 'example', title: 'Ejemplo clásico', lines: [
        '¿De cuántas formas se eligen 3 personas de 5 para un comité?',
        '(El orden no importa → combinación)',
        'C(5,3) = 5! / (3!×2!) = 120 / (6×2) = 10 formas ✓',
        '',
        '¿Y si los cargos son distintos (presidente, secretario, tesorero)?',
        '(El orden importa → permutación)',
        'P(5,3) = 5!/2! = 120/2 = 60 formas ✓'
      ]}
    ],
    exercises: [
      {
        id: 'comb1', type: 'numeric',
        question: '¿Cuántos grupos de 2 se pueden formar con 4 personas?',
        correct: 6,
        tolerance: 0,
        explanation: {
          correct: '¡Exacto! C(4,2) = 4!/(2!×2!) = 24/4 = 6.',
          wrong_title: '¡Ojo! Los grupos no tienen orden, entonces es combinación.',
          steps: ['C(4,2) = 4! / (2! × 2!)', '= (4×3×2×1) / ((2×1)×(2×1))', '= 24 / 4 = 6']
        }
      }
    ]
  },

  {
    id: 'numeros-complejos',
    title: 'Números Complejos',
    level: 'facultad',
    tags: ['complejo', 'imaginario', 'módulo', 'argumento', 'polar', 'De Moivre'],
    desc: 'Números complejos, forma binómica y polar, operaciones y Teorema de De Moivre.',
    theory: [
      { type: 'text', text: 'Los números complejos extienden los reales para incluir raíces de números negativos. Se escriben como z = a + bi, donde i = √(−1).' },
      { type: 'formula', text: 'i = √(−1)   i² = −1   i³ = −i   i⁴ = 1\n\nForma binómica:  z = a + bi\nMódulo:          |z| = √(a² + b²)\nConjugado:       z̄ = a − bi\n\nForma polar:     z = r(cos θ + i·sen θ)\nDe Moivre:       zⁿ = rⁿ(cos(nθ) + i·sen(nθ))' },
      { type: 'example', title: 'Multiplicación de complejos', lines: [
        '(2+3i)(1−i)',
        '= 2×1 + 2×(−i) + 3i×1 + 3i×(−i)',
        '= 2 − 2i + 3i − 3i²',
        '= 2 + i − 3×(−1) = 2 + i + 3 = 5 + i ✓'
      ]}
    ],
    exercises: [
      {
        id: 'comp1', type: 'multiple',
        question: '¿Cuánto es i⁶?',
        options: ['1', '−1', 'i', '−i'],
        correct: 1,
        explanation: {
          correct: '¡Buena! i⁶ = (i⁴)×i² = 1×(−1) = −1.',
          wrong_title: '¡Ojo! Las potencias de i tienen ciclo de 4: i¹=i, i²=−1, i³=−i, i⁴=1.',
          steps: ['El ciclo de i: i¹=i, i²=−1, i³=−i, i⁴=1, i⁵=i, i⁶=−1,...', 'i⁶: 6 = 4×1 + 2, entonces i⁶ = i² = −1']
        }
      }
    ]
  },

  {
    id: 'probabilidad',
    title: 'Probabilidad Básica',
    level: 'terciario',
    tags: ['probabilidad', 'evento', 'espacio muestral', 'Laplace', 'independiente'],
    desc: 'Conceptos de probabilidad clásica, eventos y la regla de Laplace.',
    theory: [
      { type: 'text', text: 'La probabilidad mide qué tan probable es que ocurra un evento. La regla de Laplace se aplica cuando todos los resultados posibles son igualmente probables.' },
      { type: 'formula', text: 'P(A) = casos favorables / casos totales   (Laplace)\n\nP(Aᶜ) = 1 − P(A)  (complemento)\nP(A∪B) = P(A) + P(B) − P(A∩B)  (unión)\nP(A∩B) = P(A)×P(B)  (si A y B son independientes)' },
      { type: 'example', title: 'Dado clásico', lines: [
        'Al tirar un dado, ¿cuál es la probabilidad de sacar número par?',
        'Casos favorables: {2, 4, 6} → 3 casos',
        'Casos totales: {1,2,3,4,5,6} → 6 casos',
        'P(par) = 3/6 = 1/2 = 0,5 = 50% ✓'
      ]}
    ],
    exercises: [
      {
        id: 'prob1', type: 'multiple',
        question: 'Al sacar una carta de un mazo de 40 naipes, ¿cuál es la P(as)?',
        options: ['1/10', '1/4', '4/40', '1/40'],
        correct: 0,
        explanation: {
          correct: '¡Exacto! Hay 4 ases en 40 cartas: 4/40 = 1/10.',
          wrong_title: '¡Ojo! En un mazo de 40 naipes hay 4 ases (uno por palo).',
          steps: ['Casos favorables: 4 ases (espadas, bastos, copas, oros)', 'Casos totales: 40 cartas', 'P(as) = 4/40 = 1/10']
        }
      }
    ]
  }
];

/* ═══════════════════════════════════════════════
   ESTADO DE LA APP
═══════════════════════════════════════════════ */
let currentLevel = 'all';
let currentQuery = '';
let currentTopicId = null;
let exerciseScores = {}; // {topicId: {correct: N, total: M}}

/* ═══════════════════════════════════════════════
   HELPERS
═══════════════════════════════════════════════ */
const levelLabel = {
  all: 'Todos',
  primaria: 'Primaria',
  secundaria: 'Secundaria',
  terciario: 'Terciario / Ingreso',
  facultad: 'Facultad / CBC'
};
const levelBadgeClass = {
  primaria: 'badge-primaria',
  secundaria: 'badge-secundaria',
  terciario: 'badge-terciario',
  facultad: 'badge-facultad'
};

function renderKaTeX(text) {
  // Simple inline math renderer usando KaTeX si está disponible
  if (typeof katex === 'undefined') return escapeHtml(text);
  return text.replace(/\$\$(.+?)\$\$/g, (_, math) => {
    try { return katex.renderToString(math, { displayMode: true }); } catch { return math; }
  }).replace(/\$(.+?)\$/g, (_, math) => {
    try { return katex.renderToString(math, { displayMode: false }); } catch { return math; }
  });
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

/* ═══════════════════════════════════════════════
   BÚSQUEDA Y FILTRO
═══════════════════════════════════════════════ */
function filterTopics(query, level) {
  const q = query.toLowerCase().trim();
  return TOPICS.filter(topic => {
    const matchLevel = (level === 'all') || (topic.level === level);
    if (!q) return matchLevel;
    const matchText =
      topic.title.toLowerCase().includes(q) ||
      topic.desc.toLowerCase().includes(q) ||
      topic.tags.some(t => t.toLowerCase().includes(q));
    return matchLevel && matchText;
  });
}

/* ═══════════════════════════════════════════════
   RENDERIZADO DE RESULTADOS
═══════════════════════════════════════════════ */
function renderResults(topics, query) {
  const section = document.getElementById('results-section');
  const grid = document.getElementById('topics-grid');
  const homeSection = document.getElementById('home-section');
  const topicView = document.getElementById('topic-view');

  homeSection.style.display = 'none';
  topicView.classList.remove('visible');
  section.classList.add('visible');

  document.getElementById('results-count').textContent =
    `${topics.length} tema${topics.length !== 1 ? 's' : ''} encontrado${topics.length !== 1 ? 's' : ''}`;
  document.getElementById('results-title').textContent =
    query ? `Resultados para "${query}"` : `Nivel: ${levelLabel[currentLevel] || 'Todos'}`;

  if (topics.length === 0) {
    grid.innerHTML = `<div class="no-results" style="grid-column:1/-1">
      <div class="nr-icon">🔍</div>
      <p>No encontramos temas para tu búsqueda.</p>
      <p style="margin-top:0.5rem">Probá con: <strong>ecuación</strong>, <strong>integral</strong>, <strong>factoreo</strong>, <strong>límites</strong>...</p>
    </div>`;
    return;
  }

  grid.innerHTML = topics.map(topic => `
    <article class="topic-card" data-level="${topic.level}" onclick="openTopic('${topic.id}')">
      <span class="card-level-badge ${levelBadgeClass[topic.level]}">${levelLabel[topic.level]}</span>
      <h3 class="card-title">${highlightMatch(topic.title, query)}</h3>
      <p class="card-desc">${topic.desc}</p>
      <div class="card-tags">
        ${topic.tags.slice(0,4).map(t => `<span class="card-tag">${t}</span>`).join('')}
      </div>
    </article>
  `).join('');
}

function highlightMatch(text, query) {
  if (!query) return escapeHtml(text);
  const escaped = escapeHtml(text);
  const q = escapeHtml(query.trim());
  if (!q) return escaped;
  return escaped.replace(new RegExp(`(${q})`, 'gi'), '<mark>$1</mark>');
}

/* ═══════════════════════════════════════════════
   RENDERIZADO TEMA INDIVIDUAL
═══════════════════════════════════════════════ */
function openTopic(id) {
  const topic = TOPICS.find(t => t.id === id);
  if (!topic) return;
  currentTopicId = id;

  const view = document.getElementById('topic-view');
  const resultsSection = document.getElementById('results-section');
  const homeSection = document.getElementById('home-section');

  homeSection.style.display = 'none';
  resultsSection.classList.remove('visible');
  view.classList.add('visible');

  // Construir HTML del tema
  view.innerHTML = `
    <button class="back-btn" onclick="goBack()">← Volver</button>
    <div class="topic-header">
      <span class="level-badge-large ${levelBadgeClass[topic.level]}"
            style="background:${levelBadgeBg(topic.level)};color:${levelBadgeFg(topic.level)}">${levelLabel[topic.level]}</span>
      <h1>${topic.title}</h1>
      <p class="topic-meta">${topic.tags.join(' · ')}</p>
    </div>
    <div class="pizarron">
      <div class="pizarron-label">📋 Teoría y Explicación</div>
      ${topic.theory.map(block => renderBlock(block)).join('')}
    </div>
    <div class="exercises-section">
      <div class="section-title"><span>✏️</span> Ejercicios</div>
      ${topic.exercises.map((ex, i) => renderExercise(ex, i)).join('')}
      <div class="ex-progress" id="score-row-${id}" style="display:none">
        <div class="score-display">Puntaje: <strong id="score-val-${id}">0</strong> / <strong>${topic.exercises.length}</strong></div>
        <button class="btn-check" onclick="resetExercises('${id}')">🔄 Intentar de nuevo</button>
      </div>
    </div>
  `;

  // Scroll hacia arriba
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function levelBadgeBg(level) {
  const map = { primaria: 'rgba(52,211,153,0.15)', secundaria: 'rgba(56,189,248,0.15)', terciario: 'rgba(167,139,250,0.15)', facultad: 'rgba(244,114,182,0.15)' };
  return map[level] || 'rgba(255,255,255,0.1)';
}
function levelBadgeFg(level) {
  const map = { primaria: 'var(--c-primaria)', secundaria: 'var(--c-secundaria)', terciario: 'var(--c-terciario)', facultad: 'var(--c-facultad)' };
  return map[level] || 'white';
}

function renderBlock(block) {
  switch (block.type) {
    case 'text':
      return `<p>${escapeHtml(block.text)}</p>`;
    case 'formula':
      return `<div class="formula-box"><pre style="font-family:var(--font-mono);white-space:pre-wrap;color:var(--accent-blue);background:none;margin:0">${escapeHtml(block.text)}</pre></div>`;
    case 'steps':
      return `<ul class="steps-list">${block.items.map(s => `<li>${escapeHtml(s)}</li>`).join('')}</ul>`;
    case 'example':
      return `<div class="ejemplo-box">
        <div class="ej-label">📌 ${escapeHtml(block.title)}</div>
        ${block.lines.map(l => `<p>${escapeHtml(l)}</p>`).join('')}
      </div>`;
    default: return '';
  }
}

function renderExercise(ex, idx) {
  const num = idx + 1;
  if (ex.type === 'multiple') {
    return `
      <div class="exercise-card" id="ex-card-${ex.id}">
        <div class="ex-question">Ejercicio ${num}: ${escapeHtml(ex.question)}</div>
        <div class="options-grid">
          ${ex.options.map((opt, i) => `
            <button class="option-btn" id="opt-${ex.id}-${i}" onclick="checkMultiple('${ex.id}', ${i}, ${ex.correct})">
              ${String.fromCharCode(65+i)}) ${escapeHtml(opt)}
            </button>
          `).join('')}
        </div>
        <div class="feedback-box" id="fb-${ex.id}"></div>
      </div>
    `;
  }
  if (ex.type === 'numeric') {
    return `
      <div class="exercise-card" id="ex-card-${ex.id}">
        <div class="ex-question">Ejercicio ${num}: ${escapeHtml(ex.question)}</div>
        <div class="num-input-row">
          <input type="number" step="any" id="inp-${ex.id}" placeholder="Tu respuesta..." onkeypress="if(event.key==='Enter') checkNumeric('${ex.id}', ${ex.correct}, ${ex.tolerance})">
          <button class="btn-check" id="btn-${ex.id}" onclick="checkNumeric('${ex.id}', ${ex.correct}, ${ex.tolerance})">Verificar</button>
        </div>
        <div class="feedback-box" id="fb-${ex.id}"></div>
      </div>
    `;
  }
  return '';
}

/* ═══════════════════════════════════════════════
   LÓGICA DE CORRECCIÓN
═══════════════════════════════════════════════ */
function checkMultiple(exId, chosen, correct) {
  const ex = findExercise(exId);
  if (!ex) return;
  const card = document.getElementById(`ex-card-${exId}`);
  if (card.classList.contains('answered')) return;

  // Deshabilitar todos los botones
  ex.options.forEach((_, i) => {
    const btn = document.getElementById(`opt-${exId}-${i}`);
    btn.disabled = true;
    if (i === correct) btn.classList.add('correct-opt');
  });

  const isCorrect = (chosen === correct);
  if (!isCorrect) {
    document.getElementById(`opt-${exId}-${chosen}`).classList.add('wrong-opt');
  }
  card.classList.add('answered', isCorrect ? 'correct' : 'wrong');
  showFeedback(exId, isCorrect, ex.explanation);
  updateScore(currentTopicId, isCorrect);
}

function checkNumeric(exId, correct, tolerance) {
  const ex = findExercise(exId);
  if (!ex) return;
  const card = document.getElementById(`ex-card-${exId}`);
  if (card.classList.contains('answered')) return;

  const inp = document.getElementById(`inp-${exId}`);
  const val = parseFloat(inp.value.replace(',', '.'));
  if (isNaN(val)) { showToast('Ingresá un número válido'); return; }

  const isCorrect = Math.abs(val - correct) <= tolerance;
  inp.classList.add(isCorrect ? 'correct-input' : 'wrong-input');
  inp.disabled = true;
  document.getElementById(`btn-${exId}`).disabled = true;
  card.classList.add('answered', isCorrect ? 'correct' : 'wrong');
  showFeedback(exId, isCorrect, ex.explanation);
  updateScore(currentTopicId, isCorrect);
}

function showFeedback(exId, isCorrect, explanation) {
  const fb = document.getElementById(`fb-${exId}`);
  fb.classList.add('show');

  if (isCorrect) {
    fb.classList.add('correct-fb');
    fb.innerHTML = `
      <div class="fb-title">✅ ${escapeHtml(explanation.correct)}</div>
    `;
  } else {
    fb.classList.add('wrong-fb');
    const steps = explanation.steps.map(s =>
      `<div class="fb-step">→ ${escapeHtml(s)}</div>`
    ).join('');
    fb.innerHTML = `
      <div class="fb-title">❌ ${escapeHtml(explanation.wrong_title)}</div>
      <p style="margin-top:0.5rem;font-size:0.88rem">Acá te explico cómo llegar al resultado:</p>
      ${steps}
      <div style="margin-top:0.7rem;color:var(--c-primaria);font-weight:700;font-size:0.88rem">
        Respuesta correcta: ${escapeHtml(String(explanation.steps[explanation.steps.length-1]))}
      </div>
    `;
  }
}

function findExercise(exId) {
  for (const topic of TOPICS) {
    const ex = topic.exercises.find(e => e.id === exId);
    if (ex) return ex;
  }
  return null;
}

function updateScore(topicId, correct) {
  if (!exerciseScores[topicId]) exerciseScores[topicId] = { correct: 0, answered: 0 };
  exerciseScores[topicId].answered++;
  if (correct) exerciseScores[topicId].correct++;

  const topic = TOPICS.find(t => t.id === topicId);
  const total = topic.exercises.length;
  const { correct: c, answered: a } = exerciseScores[topicId];

  // Actualizar score display
  const scoreVal = document.getElementById(`score-val-${topicId}`);
  const scoreRow = document.getElementById(`score-row-${topicId}`);
  if (scoreVal) scoreVal.textContent = c;
  if (scoreRow) scoreRow.style.display = 'flex';

  if (a === total) {
    const pct = Math.round((c / total) * 100);
    if (pct === 100) showToast('🏆 ¡Perfecto! Respondiste todo bien.');
    else if (pct >= 60) showToast(`✅ Terminaste el tema con ${pct}%. ¡Bien!`);
    else showToast(`📚 Terminaste con ${pct}%. Repasá la teoría y volvé a intentar.`);
  }
}

function resetExercises(topicId) {
  delete exerciseScores[topicId];
  openTopic(topicId);
}

/* ═══════════════════════════════════════════════
   AUTOCOMPLETADO
═══════════════════════════════════════════════ */
function buildAutoComplete(query) {
  const list = document.getElementById('autocomplete-list');
  if (!query.trim()) { list.classList.remove('show'); return; }
  const matches = filterTopics(query, 'all').slice(0, 6);
  if (matches.length === 0) { list.classList.remove('show'); return; }

  list.innerHTML = matches.map(t => `
    <li onclick="selectAutoComplete('${t.id}')">
      <span class="ac-badge ${levelBadgeClass[t.level]}">${levelLabel[t.level]}</span>
      ${highlightMatch(t.title, query)}
    </li>
  `).join('');
  list.classList.add('show');
}

function selectAutoComplete(id) {
  document.getElementById('autocomplete-list').classList.remove('show');
  openTopic(id);
}

/* ═══════════════════════════════════════════════
   NAVEGACIÓN
═══════════════════════════════════════════════ */
function goBack() {
  const view = document.getElementById('topic-view');
  view.classList.remove('visible');
  view.innerHTML = '';

  if (currentQuery || currentLevel !== 'all') {
    const results = filterTopics(currentQuery, currentLevel);
    renderResults(results, currentQuery);
  } else {
    document.getElementById('results-section').classList.remove('visible');
    document.getElementById('home-section').style.display = 'block';
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function doSearch() {
  const inp = document.getElementById('search-input');
  currentQuery = inp.value;
  document.getElementById('autocomplete-list').classList.remove('show');
  const results = filterTopics(currentQuery, currentLevel);
  renderResults(results, currentQuery);
}

/* ═══════════════════════════════════════════════
   HOME — TEMAS POR NIVEL
═══════════════════════════════════════════════ */
function renderHome() {
  const container = document.getElementById('home-section');
  const levels = ['primaria', 'secundaria', 'terciario', 'facultad'];

  container.innerHTML = levels.map(level => {
    const topics = TOPICS.filter(t => t.level === level);
    return `
      <div class="level-section-title ls-${level}">
        <span class="dot"></span>${levelLabel[level]}
        <span style="font-size:0.75rem;color:var(--text-muted);margin-left:auto">${topics.length} temas</span>
      </div>
      <div class="home-grid">
        ${topics.map(t => `
          <article class="topic-card" data-level="${t.level}" onclick="openTopic('${t.id}')">
            <span class="card-level-badge ${levelBadgeClass[t.level]}">${levelLabel[t.level]}</span>
            <h3 class="card-title">${t.title}</h3>
            <p class="card-desc">${t.desc}</p>
            <div class="card-tags">
              ${t.tags.slice(0,3).map(tag => `<span class="card-tag">${tag}</span>`).join('')}
            </div>
          </article>
        `).join('')}
      </div>
    `;
  }).join('');
}

/* ═══════════════════════════════════════════════
   PARTÍCULAS MATEMÁTICAS
═══════════════════════════════════════════════ */
function createParticles() {
  const container = document.querySelector('.math-particles');
  const symbols = ['∫','∑','π','√','∂','∞','≤','≥','≠','∈','∀','∃','Δ','α','β','θ','λ','∇','⊂','∏','dx','dy','f(x)','lim','n!'];
  for (let i = 0; i < 20; i++) {
    const span = document.createElement('span');
    span.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    span.style.left = `${Math.random() * 100}%`;
    span.style.animationDuration = `${8 + Math.random() * 15}s`;
    span.style.animationDelay = `${Math.random() * 15}s`;
    span.style.fontSize = `${14 + Math.random() * 20}px`;
    container.appendChild(span);
  }
}

/* ═══════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  createParticles();
  renderHome();

  const searchInput = document.getElementById('search-input');
  const acList = document.getElementById('autocomplete-list');

  searchInput.addEventListener('input', e => {
    buildAutoComplete(e.target.value);
  });

  searchInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
      acList.classList.remove('show');
      doSearch();
    }
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('.search-row-wrap')) {
      acList.classList.remove('show');
    }
  });

  // Nivel buttons
  document.querySelectorAll('.level-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.level-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentLevel = btn.dataset.level;

      if (currentQuery || currentLevel !== 'all') {
        const results = filterTopics(currentQuery, currentLevel);
        renderResults(results, currentQuery);
      }
    });
  });

  // Quick tags
  document.querySelectorAll('.quick-tag').forEach(tag => {
    tag.addEventListener('click', () => {
      const q = tag.dataset.query;
      searchInput.value = q;
      currentQuery = q;
      doSearch();
    });
  });
});