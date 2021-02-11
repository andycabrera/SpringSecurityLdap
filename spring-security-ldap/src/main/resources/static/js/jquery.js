/ *!
 * Biblioteca jQuery JavaScript v3.5.1 -ajax, -ajax / jsonp, -ajax / load, -ajax / script, -ajax / var / location, -ajax / var / nonce, -ajax / var / rquery, -ajax / xhr , -manipulación / _evalUrl, -deprecated / ajax-event-alias, -effects, -effects / Tween, -effects / animatedSelector
 * https://jquery.com/
 *
 * Incluye Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation y otros colaboradores
 * Publicado bajo la licencia MIT
 * https://jquery.org/license
 *
 * Fecha: 2020-05-04T22: 49Z
 * /
(función (global, fábrica) {

	"uso estricto";

	if (typeof module === "object" && typeof module.exports === "object") {

		// Para entornos CommonJS y CommonJS-like donde una `ventana` adecuada
		// está presente, ejecuta la fábrica y obtén jQuery.
		// Para entornos que no tienen una `ventana` con un` documento`
		// (como Node.js), expone una fábrica como module.exports.
		// Esto acentúa la necesidad de crear una `ventana` real.
		// por ejemplo, var jQuery = require ("jquery") (ventana);
		// Ver boleto # 14549 para más información.
		module.exports = global.document?
			fábrica (global, verdadero):
			función (w) {
				if (! w.document) {
					lanzar un nuevo error ("jQuery requiere una ventana con un documento");
				}
				retorno de fábrica (w);
			};
	} más {
		fábrica (global);
	}

// Pasa esto si la ventana aún no está definida
}) (typeof window! == "undefined"? window: this, function (window, noGlobal) {

// Edge <= 12 - 13+, Firefox <= 18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// lanzar excepciones cuando el código no estricto (por ejemplo, ASP.NET 4.5) accede al modo estricto
// argumentos.callee.caller (trac-13335). Pero a partir de jQuery 3.0 (2016), el modo estricto debería ser común
// suficiente para que todos estos intentos estén protegidos en un bloque try.
"uso estricto";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat? función (matriz) {
	return arr.flat.call (matriz);
}: función (matriz) {
	return arr.concat.apply ([], matriz);
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call (Objeto);

var support = {};

var isFunction = function isFunction (obj) {

      // Soporte: Chrome <= 57, Firefox <= 52
      // En algunos navegadores, typeof devuelve "función" para elementos HTML <object>
      // (es decir, `typeof document.createElement (" objeto ") ===" función "`).
      // No queremos clasificar * ningún * nodo DOM como una función.
      return typeof obj === "function" && typeof obj.nodeType! == "number";
  };


var isWindow = function isWindow (obj) {
		return obj! = null && obj === obj.window;
	};


var document = window.document;



	var preserveScriptAttributes = {
		tipo: verdadero,
		src: cierto,
		nonce: cierto,
		noModule: verdadero
	};

	función DOMEval (código, nodo, doc) {
		doc = doc || documento;

		var i, val,
			script = doc.createElement ("script");

		script.text = código;
		si (nodo) {
			para (i en protectedScriptAttributes) {

				// Soporte: Firefox 64+, Edge 18+
				// Algunos navegadores no admiten la propiedad "nonce" en los scripts.
				// Por otro lado, usar `getAttribute` no es suficiente ya que
				// el atributo `nonce` se restablece a una cadena vacía siempre que
				// se conecta al contexto de navegación.
				// Ver https://github.com/whatwg/html/issues/2369
				// Ver https://html.spec.whatwg.org/#nonce-attributes
				// La comprobación `node.getAttribute` se agregó por el bien de
				// `jQuery.globalEval` para que pueda falsificar un nodo que contenga nonce
				// a través de un objeto.
				val = nodo [i] || node.getAttribute && node.getAttribute (i);
				if (val) {
					script.setAttribute (i, val);
				}
			}
		}
		doc.head.appendChild (script) .parentNode.removeChild (script);
	}


función toType (obj) {
	if (obj == null) {
		return obj + "";
	}

	// Soporte: Android <= 2.3 solamente (RegExp funcional)
	tipo de retorno de obj === "objeto" || typeof obj === "función"?
		class2type [toString.call (obj)] || "objeto":
		typeof obj;
}
/ * Símbolo global * /
// Definir este global en .eslintrc.json crearía el peligro de usar el global
// sin vigilancia en otro lugar, parece más seguro definir global solo para este módulo



var
	version = "3.5.1 -ajax, -ajax / jsonp, -ajax / load, -ajax / script, -ajax / var / location, -ajax / var / nonce, -ajax / var / rquery, -ajax / xhr, -manipulación / _evalUrl, -deprecated / ajax-event-alias, -effects, -effects / Tween, -effects / animatedSelector ",

	// Definir una copia local de jQuery
	jQuery = función (selector, contexto) {

		// El objeto jQuery es en realidad solo el constructor init 'mejorado'
		// Necesita init si se llama a jQuery (solo permita que se lance un error si no está incluido)
		devolver nuevo jQuery.fn.init (selector, contexto);
	};

jQuery.fn = jQuery.prototype = {

	// La versión actual de jQuery que se está utilizando
	jquery: versión,

	constructor: jQuery,

	// La longitud predeterminada de un objeto jQuery es 0
	longitud: 0,

	toArray: function () {
		return slice.call (esto);
	},

	// Obtener el elemento N en el conjunto de elementos coincidentes O
	// Obtener todo el conjunto de elementos coincidentes como una matriz limpia
	obtener: function (num) {

		// Devuelve todos los elementos en una matriz limpia
		if (num == null) {
			return slice.call (esto);
		}

		// Devuelve solo un elemento del conjunto
		devolver num <0? este [num + this.length]: este [num];
	},

	// Toma una matriz de elementos y empújala hacia la pila
	// (devolviendo el nuevo conjunto de elementos coincidentes)
	pushStack: function (elems) {

		// Construye un nuevo conjunto de elementos coincidentes de jQuery
		var ret = jQuery.merge (este.constructor (), elems);

		// Agrega el objeto antiguo a la pila (como referencia)
		ret.prevObject = esto;

		// Devuelve el conjunto de elementos recién formado
		return ret;
	},

	// Ejecuta una devolución de llamada para cada elemento del conjunto coincidente.
	cada uno: función (devolución de llamada) {
		return jQuery.each (esto, devolución de llamada);
	},

	mapa: función (devolución de llamada) {
		return this.pushStack (jQuery.map (this, function (elem, i) {
			return callback.call (elem, i, elem);
		}));
	},

	rebanada: función () {
		return this.pushStack (slice.apply (esto, argumentos));
	},

	primero: función () {
		devuelve this.eq (0);
	},

	último: function () {
		devuelve this.eq (-1);
	},

	par: función () {
		return this.pushStack (jQuery.grep (this, function (_elem, i) {
			return (i + 1)% 2;
		}));
	},

	Función impar() {
		return this.pushStack (jQuery.grep (this, function (_elem, i) {
			return i% 2;
		}));
	},

	eq: función (i) {
		var len = this.length,
			j = + i + (i <0? len: 0);
		return this.pushStack (j> = 0 && j <len? [this [j]]: []);
	},

	end: function () {
		devuelve this.prevObject || this.constructor ();
	},

	// Sólo para uso interno.
	// Se comporta como un método de Array, no como un método de jQuery.
	empuja empuja,
	sort: arr.sort,
	empalme: empalme arr.
};

jQuery.extend = jQuery.fn.extend = function () {
	var opciones, nombre, src, copia, copyIsArray, clon,
		objetivo = argumentos [0] || {},
		i = 1,
		longitud = argumentos.longitud,
		profundo = falso;

	// Manejar una situación de copia profunda
	if (typeof target === "boolean") {
		profundo = objetivo;

		// Omite el booleano y el objetivo
		objetivo = argumentos [i] || {};
		i ++;
	}

	// Manejar el caso cuando el objetivo es una cadena o algo (posible en una copia profunda)
	if (typeof target! == "object" &&! isFunction (target)) {
		objetivo = {};
	}

	// Extiende jQuery si solo se pasa un argumento
	si (i === longitud) {
		objetivo = esto;
		yo--;
	}

	para (; i <longitud; i ++) {

		// Tratar solo con valores no nulos / indefinidos
		if ((opciones = argumentos [i])! = nulo) {

			// Extiende el objeto base
			para (nombre en opciones) {
				copiar = opciones [nombre];

				// Prevenir la contaminación de Object.prototype
				// Evita un bucle sin fin
				if (nombre === "__proto__" || destino === copiar) {
					Seguir;
				}

				// Recurrir si estamos fusionando objetos simples o matrices
				if (deep && copy && (jQuery.isPlainObject (copy) ||
					(copyIsArray = Array.isArray (copia)))) {
					src = objetivo [nombre];

					// Asegúrate del tipo adecuado para el valor fuente
					if (copyIsArray &&! Array.isArray (src)) {
						clon = [];
					} else if (! copyIsArray &&! jQuery.isPlainObject (src)) {
						clon = {};
					} más {
						clon = src;
					}
					copyIsArray = falso;

					// Nunca mueva objetos originales, clónelos
					target [nombre] = jQuery.extend (deep, clone, copy);

				// No introduzcas valores indefinidos
				} else if (copy! == undefined) {
					destino [nombre] = copiar;
				}
			}
		}
	}

	// Devuelve el objeto modificado
	objetivo de retorno;
};

jQuery.extend ({

	// Único para cada copia de jQuery en la página
	expando: "jQuery" + (version + Math.random ()) .replace (/ \ D / g, ""),

	// Supongamos que jQuery está listo sin el módulo listo
	isReady: cierto,

	error: function (msg) {
		lanzar nuevo error (msg);
	},

	noop: function () {},

	isPlainObject: function (obj) {
		var proto, Ctor;

		// Detecta negativos obvios
		// Use toString en lugar de jQuery.type para capturar objetos del host
		if (! obj || toString.call (obj)! == "[object Object]") {
			falso retorno;
		}

		proto = getProto (obj);

		// Los objetos sin prototipo (por ejemplo, `Object.create (null)`) son simples
		if (! proto) {
			devuelve verdadero;
		}

		// Los objetos con prototipo son simples si fueron construidos por una función de objeto global
		Ctor = hasOwn.call (proto, "constructor") && proto.constructor;
		return typeof Ctor === "función" && fnToString.call (Ctor) === ObjectFunctionString;
	},

	isEmptyObject: function (obj) {
		var nombre;

		para (nombre en obj) {
			falso retorno;
		}
		devuelve verdadero;
	},

	// Evalúa un script en un contexto proporcionado; recae en el global
	// si no se especifica.
	globalEval: function (código, opciones, doc) {
		DOMEval (código, {nonce: options && options.nonce}, doc);
	},

	cada uno: función (obj, devolución de llamada) {
		var longitud, i = 0;

		if (isArrayLike (obj)) {
			length = obj.length;
			para (; i <longitud; i ++) {
				if (callback.call (obj [i], i, obj [i]) === falso) {
					romper;
				}
			}
		} más {
			for (i in obj) {
				if (callback.call (obj [i], i, obj [i]) === falso) {
					romper;
				}
			}
		}

		return obj;
	},

	// los resultados son solo para uso interno
	makeArray: function (arr, results) {
		var ret = resultados || [];

		if (arr! = null) {
			if (isArrayLike (Object (arr))) {
				jQuery.merge (ret,
					typeof arr === "cadena"?
					[arr]: arr
				);
			} más {
				push.call (ret, arr);
			}
		}

		return ret;
	},

	inArray: function (elem, arr, i) {
		return arr == null? -1: indexOf.call (arr, elem, i);
	},

	// Soporte: Android <= 4.0 solamente, solo PhantomJS 1
	// push.apply (_, arraylike) arroja un WebKit antiguo
	fusionar: función (primero, segundo) {
		var len = + second.length,
			j = 0,
			i = primera.longitud;

		para (; j <len; j ++) {
			primero [i ++] = segundo [j];
		}

		primera.longitud = i;

		regresar primero;
	},

	grep: function (elems, callback, invertir) {
		var callbackInverse,
			coincidencias = [],
			i = 0,
			length = elems.length,
			callbackExpect =! invertir;

		// Ir a través de la matriz, solo guardando los elementos
		// que pasan la función de validador
		para (; i <longitud; i ++) {
			callbackInverse =! callback (elems [i], i);
			if (callbackInverse! == callbackExpect) {
				fósforos.push (elems [i]);
			}
		}

		devolver partidos;
	},

	// arg es solo para uso interno
	map: function (elems, callback, arg) {
		var longitud, valor,
			i = 0,
			ret = [];

		// Repasa la matriz, traduciendo cada uno de los elementos a sus nuevos valores
		if (isArrayLike (elems)) {
			length = elems.length;
			para (; i <longitud; i ++) {
				valor = devolución de llamada (elems [i], i, arg);

				si (valor! = nulo) {
					ret.push (valor);
				}
			}

		// Revisa todas las claves del objeto,
		} más {
			para (yo en elems) {
				valor = devolución de llamada (elems [i], i, arg);

				si (valor! = nulo) {
					ret.push (valor);
				}
			}
		}

		// Aplanar cualquier arreglo anidado
		volver plano (ret);
	},

	// Un contador GUID global para objetos
	guid: 1,

	// jQuery.support no se usa en Core pero otros proyectos adjuntan su
	// propiedades para que exista.
	soporte soporte
});

if (tipo de símbolo === "función") {
	jQuery.fn [Symbol.iterator] = arr [Symbol.iterator];
}

// Rellenar el mapa class2type
jQuery.each ("Número booleano Cadena Función Array Fecha RegExp Objeto Símbolo de error" .split (""),
función (_i, nombre) {
	class2type ["[objeto" + nombre + "]"] = name.toLowerCase ();
});

function isArrayLike (obj) {

	// Soporte: solo iOS 8.2 real (no reproducible en el simulador)
	// Comprobación `in` utilizada para evitar el error JIT (gh-2145)
	// hasOwn no se usa aquí debido a falsos negativos
	// con respecto a la longitud de la lista de nodos en IE
	var length = !! obj && "length" en obj && obj.length,
		tipo = toType (obj);

	if (isFunction (obj) || isWindow (obj)) {
		falso retorno;
	}

	tipo de retorno === "matriz" || longitud === 0 ||
		typeof length === "número" && longitud> 0 && (longitud - 1) en obj;
}
var Sizzle =
/ *!
 * Sizzle CSS Selector Engine v2.3.5
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation y otros colaboradores
 * Publicado bajo la licencia MIT
 * https://js.foundation/
 *
 * Fecha: 2020-03-14
 * /
(función (ventana) {
var i,
	apoyo,
	Expr,
	getText,
	isXML,
	tokenizar
	compilar,
	Seleccione,
	outsidemostContext,
	sortInput,
	hasDuplicate,

	// Variables de documentos locales
	setDocument
	documento,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	partidos,
	contiene

	// Datos específicos de la instancia
	expando = "chisporroteo" + 1 * nueva fecha (),
	favoriteDoc = window.document,
	dirruns = 0,
	hecho = 0,
	classCache = createCache (),
	tokenCache = createCache (),
	compilerCache = createCache (),
	nonnativeSelectorCache = createCache (),
	sortOrder = function (a, b) {
		si (a === b) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Métodos de instancia
	hasOwn = ({}) .hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	empujar = arr.push,
	rebanada = arr. rebanada,

	// Usa un indexOf reducido ya que es más rápido que el nativo
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function (lista, elem) {
		var i = 0,
			len = list.length;
		para (; i <len; i ++) {
			si (lista [i] === elem) {
				volver i;
			}
		}
		return -1;
	},

	booleanos = "comprobado | seleccionado | asíncrono | enfoque automático | reproducción automática | controles | aplazar | desactivado | oculto |" +
		"ismap | loop | multiple | open | readonly | required | scoped",

	// Expresiones regulares

	// http://www.w3.org/TR/css3-selectors/#whitespace
	espacio en blanco = "[\\ x20 \\ t \\ r \\ n \\ f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identificador = "(?: \\\\ [\\ da-fA-F] {1,6}" + espacio en blanco +
		"? | \\\\ [^ \\ r \\ n \\ f] | [\\ w-] | [^ \ 0 - \\ x7f]) +",

	// Selectores de atributos: http://www.w3.org/TR/selectors/#attribute-selectors
	atributos = "\\ [" + espacio en blanco + "* (" + identificador + ") (?:" + espacio en blanco +

		// Operador (captura 2)
		"* ([* ^ $ |! ~]? =)" + espacio en blanco +

		// "Los valores de los atributos deben ser identificadores CSS [captura 5]
		// o cadenas [captura 3 o captura 4] "
		"* (?: '((?: \\\\. | [^ \\\\']) *) '| \" ((?: \\\\. | [^ \\\\\ "] ) *) \ "| (" + identificador + ")) |)" +
		espacio en blanco + "* \\]",

	pseudos = ":(" + identificador + ") (?: \\ ((" +

		// Para reducir el número de selectores que necesitan tokenizar en el preFilter, prefiera argumentos:
		// 1. citado (captura 3; captura 4 o captura 5)
		"('((?: \\\\. | [^ \\\\']) *) '| \" ((?: \\\\. | [^ \\\\\ "]) *) \ ") |" +

		// 2. simple (captura 6)
		"((?: \\\\. | [^ \\\\ () [\\]] |" + atributos + ") *) |" +

		// 3. cualquier otra cosa (captura 2)
		". *" +
		") \\) |)",

	// Espacios en blanco iniciales y finales sin escape, capturando algunos caracteres que no son espacios en blanco que preceden a este último
	rwhitespace = new RegExp (espacio en blanco + "+", "g"),
	rtrim = new RegExp ("^" + espacio en blanco + "+ | ((?: ^ | [^ \\\\]) (?: \\\\.) *)" +
		espacio en blanco + "+ $", "g"),

	rcomma = new RegExp ("^" + espacio en blanco + "*," + espacio en blanco + "*"),
	rcombinators = new RegExp ("^" + espacio en blanco + "* ([> + ~] |" + espacio en blanco + ")" + espacio en blanco +
		"*"),
	rdescend = new RegExp (espacio en blanco + "|>"),

	rpseudo = new RegExp (pseudos),
	ridentifier = new RegExp ("^" + identificador + "$"),

	matchExpr = {
		"ID": nueva expresión regular ("^ # (" + identificador + ")"),
		"CLASE": nueva RegExp ("^ \\. (" + Identificador + ")"),
		"TAG": nueva expresión regular ("^ (" + identificador + "| [*])"),
		"ATTR": nueva RegExp ("^" + atributos),
		"PSEUDO": nueva expresión regular ("^" + pseudos),
		"NIÑO": nueva RegExp ("^ :( sólo | primero | último | enésimo | enésimo-último) - (niño | de tipo) (?: \\ (" +
			espacio en blanco + "* (par | impar | (([+ -] |) (\\ d *) n |)" + espacio en blanco + "* (?: ([+ -] |)" +
			espacio en blanco + "* (\\ d +) |))" + espacio en blanco + "* \\) |)", "i"),
		"bool": nueva expresión regular ("^ (?:" + booleanos + ") $", "i"),

		// Para usar en bibliotecas que implementan .is ()
		// Usamos esto para la coincidencia de POS en `select`
		"needContext": nueva RegExp ("^" + espacio en blanco +
			"* [> + ~] |: (par | impar | eq | gt | lt | nth | primero | último) (?: \\ (" + espacio en blanco +
			"* ((?: - \\ d)? \\ d *)" + espacio en blanco + "* \\) |) (? = [^ -] | $)", "i")
	},

	rhtml = / HTML $ / i,
	rinputs = / ^ (?: input | select | textarea | button) $ / i,
	rheader = / ^ h \ d $ / i,

	rnative = / ^ [^ {] + \ {\ s * \ [nativo \ w /,

	// Selectores de ID o TAG o CLASE fácilmente analizables / recuperables
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = / [+ ~] /,

	// CSS escapa
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp ("\\\\ [\\ da-fA-F] {1,6}" + espacio en blanco + "? | \\\\ ([^ \\ r \\ n \\ f])" , "g"),
	funescape = function (escape, nonHex) {
		var high = "0x" + escape.slice (1) - 0x10000;

		return nonHex?

			// Quita el prefijo de barra invertida de una secuencia de escape no hexadecimal
			nonHex:

			// Reemplazar una secuencia de escape hexadecimal con el punto de código Unicode codificado
			// Soporte: IE <= 11 +
			// Para valores fuera del plano multilingüe básico (BMP), construya manualmente un
			// pareja sustituta
			alto <0?
				String.fromCharCode (alto + 0x10000):
				String.fromCharCode (alto >> 10 | 0xD800, alto & 0x3FF | 0xDC00);
	},

	// serialización de cadena / identificador CSS
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = / ([\ 0- \ x1f \ x7f] | ^ -? \ d) | ^ - $ | [^ \ 0- \ x1f \ x7f- \ uFFFF \ w -] / g,
	fcssescape = function (ch, asCodePoint) {
		if (asCodePoint) {

			// U + 0000 NULL se convierte en U + FFFD REPLACEMENT CARACTER
			si (ch === "\ 0") {
				devolver "\ uFFFD";
			}

			// Los caracteres de control y los números (dependiendo de la posición) se escapan como puntos de código
			return ch.slice (0, -1) + "\\" +
				ch.charCodeAt (ch.length - 1) .toString (16) + "";
		}

		// Otros caracteres ASCII potencialmente especiales obtienen un escape con barra invertida
		return "\\" + ch;
	},

	// Usado para iframes
	// Ver setDocument ()
	// Eliminar el contenedor de la función provoca un "Permiso denegado"
	// error en IE
	unloadHandler = function () {
		setDocument ();
	},

	inDisabledFieldset = addCombinator (
		function (elem) {
			return elem.disabled === verdadero && elem.nodeName.toLowerCase () === "fieldset";
		},
		{dir: "parentNode", siguiente: "leyenda"}
	);

// Optimizar para push.apply (_, NodeList)
tratar {
	empujar.apply
		(arr = slice.call (favoriteDoc.childNodes)),
		preferidosDoc.childNodes
	);

	// Soporte: Android <4.0
	// Detecta push.apply fallido silenciosamente
	// eslint-disable-next-line no-unused-expresiones
	arr [preferenciaDoc.childNodes.length] .nodeType;
} captura (e) {
	push = {apply: arr.length?

		// Aprovechar el segmento si es posible
		function (target, els) {
			pushNative.apply (destino, corte.call (els));
		}:

		// Soporte: IE <9
		// De lo contrario, agregue directamente
		function (target, els) {
			var j = target.length,
				i = 0;

			// No puedo confiar en NodeList.length
			while ((objetivo [j ++] = els [i ++])) {}
			target.length = j - 1;
		}
	};
}

función Sizzle (selector, contexto, resultados, semilla) {
	var m, i, elem, nid, coincidencia, grupos, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType por defecto es 9, ya que el contexto por defecto es document
		nodeType = contexto? context.nodeType: 9;

	resultados = resultados || [];

	// Regrese antes de las llamadas con un selector o contexto no válido
	if (typeof selector! == "string" ||! selector ||
		nodeType! == 1 && nodeType! == 9 && nodeType! == 11) {

		devolver resultados;
	}

	// Intente atajar las operaciones de búsqueda (a diferencia de los filtros) en documentos HTML
	si (! semilla) {
		setDocument (contexto);
		contexto = contexto || documento;

		if (documentIsHTML) {

			// Si el selector es lo suficientemente simple, intente usar un método DOM "get * By *"
			// (excepto el contexto DocumentFragment, donde los métodos no existen)
			if (nodeType! == 11 && (match = rquickExpr.exec (selector))) {

				// selector de ID
				si ((m = coincidir [1])) {

					// Contexto del documento
					if (nodeType === 9) {
						if ((elem = context.getElementById (m))) {

							// Soporte: IE, Opera, Webkit
							// TODO: identificar versiones
							// getElementById puede hacer coincidir elementos por nombre en lugar de ID
							if (elem.id === m) {
								results.push (elem);
								devolver resultados;
							}
						} más {
							devolver resultados;
						}

					// Contexto del elemento
					} más {

						// Soporte: IE, Opera, Webkit
						// TODO: identificar versiones
						// getElementById puede hacer coincidir elementos por nombre en lugar de ID
						if (newContext && (elem = newContext.getElementById (m)) &&
							contiene (contexto, elem) &&
							elem.id === m) {

							results.push (elem);
							devolver resultados;
						}
					}

				// selector de tipo
				} más si (coincide con [2]) {
					push.apply (resultados, context.getElementsByTagName (selector));
					devolver resultados;

				// selector de clase
				} más si ((m = coincidir con [3]) && support.getElementsByClassName &&
					context.getElementsByClassName) {

					push.apply (resultados, context.getElementsByClassName (m));
					devolver resultados;
				}
			}

			// Aprovecha querySelectorAll
			si (support.qsa &&
				! nonnativeSelectorCache [selector + ""] &&
				(! rbuggyQSA ||! rbuggyQSA.test (selector)) &&

				// Soporte: solo IE 8
				// Excluir elementos de objeto
				(nodeType! == 1 || context.nodeName.toLowerCase ()! == "objeto")) {

				newSelector = selector;
				newContext = contexto;

				// qSA considera elementos fuera de una raíz de alcance al evaluar al niño o
				// combinadores descendientes, que no es lo que queremos.
				// En tales casos, solucionamos el comportamiento colocando el prefijo de cada selector en el
				// lista con un selector de ID que hace referencia al contexto del alcance.
				// La técnica debe usarse también cuando se usa un combinador principal
				// como tales selectores no son reconocidos por querySelectorAll.
				// Gracias a Andrew Dupont por esta técnica.
				si (nodeType === 1 &&
					(rdescend.test (selector) || rcombinators.test (selector))) {

					// Expandir contexto para selectores de hermanos
					newContext = rsibling.test (selector) && testContext (context.parentNode) ||
						contexto;

					// Podemos usar: scope en lugar del truco de ID si el navegador
					// lo admite y si no cambiamos el contexto.
					if (newContext! == context ||! support.scope) {

						// Capture el ID de contexto, configurándolo primero si es necesario
						if ((nid = context.getAttribute ("id"))) {
							nid = nid.replace (rcssescape, fcssescape);
						} más {
							context.setAttribute ("id", (nid = expandir));
						}
					}

					// Prefijo cada selector en la lista
					grupos = tokenizar (selector);
					i = grupos.longitud;
					mientras yo-- ) {
						grupos [i] = (nid? "#" + nid: ": alcance") + "" +
							toSelector (grupos [i]);
					}
					newSelector = groups.join (",");
				}

				tratar {
					push.apply (resultados,
						newContext.querySelectorAll (nuevoSelector)
					);
					devolver resultados;
				} catch (qsaError) {
					nonnativeSelectorCache (selector, verdadero);
				} finalmente {
					if (nid === expandir) {
						context.removeAttribute ("id");
					}
				}
			}
		}
	}

	// Todos los otros
	return select (selector.replace (rtrim, "$ 1"), contexto, resultados, semilla);
}

/ **
 * Cree cachés de valores-clave de tamaño limitado
 * @returns {función (cadena, objeto)} Devuelve los datos del objeto después de almacenarlos en sí mismo con
 * nombre de propiedad de la cadena (con sufijo de espacio) y (si la caché es mayor que Expr.cacheLength)
 * eliminar la entrada más antigua
 * /
function createCache () {
	var claves = [];

	función caché (clave, valor) {

		// Utilice (tecla + "") para evitar la colisión con las propiedades del prototipo nativo (consulte el número 157)
		if (keys.push (key + "")> Expr.cacheLength) {

			// Conserve solo las entradas más recientes
			eliminar caché [keys.shift ()];
		}
		return (caché [clave + ""] = valor);
	}
	retorno de caché;
}

/ **
 * Marcar una función para uso especial de Sizzle
 * @param {Función} fn La función para marcar
 * /
función markFunction (fn) {
	fn [expandir] = verdadero;
	return fn;
}

/ **
 * Soporte de pruebas usando un elemento
 * @param {Función} fn Pasó el elemento creado y devuelve un resultado booleano
 * /
función aseverar (fn) {
	var el = document.createElement ("conjunto de campos");

	tratar {
		volver !! fn (el);
	} captura (e) {
		falso retorno;
	} finalmente {

		// Eliminar de su padre por defecto
		if (el.parentNode) {
			el.parentNode.removeChild (el);
		}

		// liberar memoria en IE
		el = nulo;
	}
}

/ **
 * Agrega el mismo controlador para todos los atributos especificados
 * @param {String} attrs Lista de atributos separados por tuberías
 * @param {Function} handler El método que se aplicará
 * /
function addHandle (attrs, handler) {
	var arr = attrs.split ("|"),
		i = longitud de arr.;

	mientras yo-- ) {
		Expr.attrHandle [arr [i]] = controlador;
	}
}

/ **
 * Verifica el orden de los documentos de dos hermanos
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Devuelve menos de 0 si a precede a b, mayor que 0 si a sigue a b
 * /
function siblingCheck (a, b) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex si está disponible en ambos nodos
	if (diff) {
		return diff;
	}

	// Comprueba si b sigue a
	si (cur) {
		while ((cur = cur.nextSibling)) {
			si (cur === b) {
				return -1;
			}
		}
	}

	devolver un? 1: -1;
}

/ **
 * Devuelve una función para usar en pseudos para tipos de entrada
 * @param {String} tipo
 * /
function createInputPseudo (type) {
	función de retorno (elem) {
		var name = elem.nodeName.toLowerCase ();
		nombre de retorno === "entrada" && elem.type === tipo;
	};
}

/ **
 * Devuelve una función para usar en pseudos para botones
 * @param {String} tipo
 * /
function createButtonPseudo (type) {
	función de retorno (elem) {
		var name = elem.nodeName.toLowerCase ();
		return (nombre === "entrada" || nombre === "botón") && elem.type === tipo;
	};
}

/ **
 * Devuelve una función para usar en pseudos para: habilitado /: deshabilitado
 * @param {Boolean} desactivado verdadero para: desactivado; falso para: habilitado
 * /
function createDisabledPseudo (deshabilitado) {

	// Conocido: falsos positivos deshabilitados: fieldset [deshabilitado]> leyenda: n-ésimo de tipo (n + 2): can-disable
	función de retorno (elem) {

		// Solo ciertos elementos pueden coincidir: habilitado o: deshabilitado
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ("formulario" en elem) {

			// Verifique la discapacidad heredada en elementos relevantes no discapacitados:
			// * enumera los elementos asociados al formulario en un conjunto de campos deshabilitado
			// https://html.spec.whatwg.org/multipage/forms.html#category-listed
			// https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * elementos de opción en un optgroup deshabilitado
			// https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// Todos estos elementos tienen una propiedad "forma".
			if (elem.parentNode && elem.disabled === false) {

				// Los elementos de opción se remiten a un optgroup padre si está presente
				if ("etiqueta" en elem) {
					if ("etiqueta" en elem.parentNode) {
						return elem.parentNode.disabled === desactivado;
					} más {
						return elem.disabled === desactivado;
					}
				}

				// Soporte: IE 6 - 11
				// Use la propiedad de acceso directo isDisabled para buscar antepasados ​​de conjuntos de campos deshabilitados
				return elem.isDisabled === desactivado ||

					// Donde no hay isDisabled, verifique manualmente
					/ * jshint -W018 * /
					elem.isDisabled! ==! disabled &&
					inDisabledFieldset (elem) === desactivado;
			}

			return elem.disabled === desactivado;

		// Intenta eliminar los elementos que no se pueden desactivar antes de confiar en la propiedad desactivada.
		// Algunas víctimas quedan atrapadas en nuestra red (etiqueta, leyenda, menú, pista), pero no debería
		// incluso existen en ellos, y mucho menos tienen un valor booleano.
		} else if ("etiqueta" en elem) {
			return elem.disabled === desactivado;
		}

		// Los elementos restantes no están: habilitados ni: deshabilitados
		falso retorno;
	};
}

/ **
 * Devuelve una función para usar en pseudos para posicionales
 * @param {Función} fn
 * /
function createPositionalPseudo (fn) {
	return markFunction (función (argumento) {
		argumento = + argumento;
		return markFunction (función (semilla, coincidencias) {
			var j,
				matchIndexes = fn ([], seed.length, argument),
				i = matchIndexes.length;

			// Coincidir con elementos encontrados en los índices especificados
			mientras yo-- ) {
				if (semilla [(j = matchIndexes [i])]) {
					semilla [j] =! (coincide con [j] = semilla [j]);
				}
			}
		});
	});
}

/ **
 * Comprueba la validez de un nodo como contexto Sizzle
 * @param {Elemento | Objeto =} contexto
 * @returns {Elemento | Objeto | Booleano} El nodo de entrada si es aceptable; de ​​lo contrario, un valor falso
 * /
function testContext (context) {
	return context && typeof context.getElementsByTagName! == "undefined" && context;
}

// Exponer vars de soporte por conveniencia
soporte = Sizzle.support = {};

/ **
 * Detecta nodos XML
 * @param {Elemento | Objeto} elem Un elemento o un documento
 * @returns {Boolean} Verdadero si el elemento es un nodo XML que no es HTML
 * /
isXML = Sizzle.isXML = función (elem) {
	var namespace = elem.namespaceURI,
		docElem = (elem.ownerDocument || elem) .documentElement;

	// Soporte: IE <= 8
	// Asume HTML cuando documentElement aún no existe, como iframes de carga dentro
	// https://bugs.jquery.com/ticket/4833
	return! rhtml.test (espacio de nombres || docElem && docElem.nodeName || "HTML");
};

/ **
 * Establece variables relacionadas con el documento una vez basadas en el documento actual
 * @param {Elemento | Objeto} [doc] Un elemento u objeto de documento para usar para configurar el documento
 * @returns {Object} Devuelve el documento actual
 * /
setDocument = Sizzle.setDocument = function (nodo) {
	var hasCompare, subWindow,
		doc = nodo? node.ownerDocument || nodo: favoriteDoc;

	// Regrese antes si el documento no es válido o ya está seleccionado
	// Soporte: IE 11+, Edge 17 - 18+
	// IE / Edge a veces arroja un error de "Permiso denegado" cuando se compara estrictamente
	// dos documentos; las comparaciones superficiales funcionan.
	// eslint-disable-next-line eqeqeq
	if (doc == documento || doc.nodeType! == 9 ||! doc.documentElement) {
		documento de devolución;
	}

	// Actualizar variables globales
	document = doc;
	docElem = document.documentElement;
	documentIsHTML =! isXML (documento);

	// Soporte: IE 9 - 11+, Edge 12 - 18+
	// Acceder a documentos iframe después de descargar arroja errores de "permiso denegado" (jQuery # 13936)
	// Soporte: IE 11+, Edge 17 - 18+
	// IE / Edge a veces arroja un error de "Permiso denegado" cuando se compara estrictamente
	// dos documentos; las comparaciones superficiales funcionan.
	// eslint-disable-next-line eqeqeq
	si (preferidoDoc! = documento &&
		(subWindow = document.defaultView) && subWindow.top! == subWindow) {

		// Soporte: IE 11, Edge
		if (subWindow.addEventListener) {
			subWindow.addEventListener ("descargar", unloadHandler, falso);

		// Soporte: IE 9 - 10 solamente
		} else if (subWindow.attachEvent) {
			subWindow.attachEvent ("onunload", unloadHandler);
		}
	}

	// Soporte: IE 8 - 11+, Edge 12 - 18+, Chrome <= 16 - 25 solamente, Firefox <= 3.6 - 31 solamente,
	// Solo Safari 4-5, Opera <= 11.6 - 12.x únicamente
	// IE / Edge y los navegadores más antiguos no admiten la pseudoclase: scope.
	// Soporte: Safari 6.0 solamente
	// Safari 6.0 admite: scope pero es un alias de: root allí.
	support.scope = assert (function (el) {
		docElem.appendChild (el) .appendChild (document.createElement ("div"));
		return typeof el.querySelectorAll! == "undefined" &&
			! el.querySelectorAll (": campo de alcance div") .length;
	});

	/ * Atributos
	-------------------------------------------------- -------------------- * /

	// Soporte: IE <8
	// Verifica que getAttribute realmente devuelve atributos y no propiedades
	// (excepto los booleanos IE8)
	support.attributes = assert (function (el) {
		el.className = "i";
		return! el.getAttribute ("className");
	});

	/ * getElement (s) por *
	-------------------------------------------------- -------------------- * /

	// Verifica si getElementsByTagName ("*") devuelve solo elementos
	support.getElementsByTagName = assert (function (el) {
		el.appendChild (document.createComment (""));
		return! el.getElementsByTagName ("*") .length;
	});

	// Soporte: IE <9
	support.getElementsByClassName = rnative.test (document.getElementsByClassName);

	// Soporte: IE <10
	// Verifica si getElementById devuelve elementos por nombre
	// Los métodos getElementById rotos no recogen nombres establecidos mediante programación,
	// así que usa una prueba indirecta getElementsByName
	support.getById = assert (function (el) {
		docElem.appendChild (el) .id = expandir;
		return! document.getElementsByName || ! document.getElementsByName (expando) .length;
	});

	// ID filtrar y buscar
	if (support.getById) {
		Expr.filter ["ID"] = función (id) {
			var attrId = id.replace (runescape, funescape);
			función de retorno (elem) {
				return elem.getAttribute ("id") === attrId;
			};
		};
		Expr.find ["ID"] = función (id, contexto) {
			if (typeof context.getElementById! == "undefined" && documentIsHTML) {
				var elem = context.getElementById (id);
				volver elem? [elem]: [];
			}
		};
	} más {
		Expr.filter ["ID"] = función (id) {
			var attrId = id.replace (runescape, funescape);
			función de retorno (elem) {
				var nodo = tipo de elem.getAttributeNode! == "indefinido" &&
					elem.getAttributeNode ("id");
				return nodo && node.value === attrId;
			};
		};

		// Soporte: IE 6 - 7 solamente
		// getElementById no es confiable como atajo de búsqueda
		Expr.find ["ID"] = función (id, contexto) {
			if (typeof context.getElementById! == "undefined" && documentIsHTML) {
				var nodo, yo, elems,
					elem = context.getElementById (id);

				si (elem) {

					// Verifica el atributo id
					nodo = elem.getAttributeNode ("id");
					if (nodo && node.value === id) {
						return [elem];
					}

					// Recurrir a getElementsByName
					elems = context.getElementsByName (id);
					i = 0;
					while ((elem = elems [i ++])) {
						nodo = elem.getAttributeNode ("id");
						if (nodo && node.value === id) {
							return [elem];
						}
					}
				}

				regreso [];
			}
		};
	}

	// Etiqueta
	Expr.find ["TAG"] = support.getElementsByTagName?
		función (etiqueta, contexto) {
			if (typeof context.getElementsByTagName! == "undefined") {
				return context.getElementsByTagName (etiqueta);

			// Los nodos DocumentFragment no tienen gEBTN
			} else if (support.qsa) {
				return context.querySelectorAll (etiqueta);
			}
		}:

		función (etiqueta, contexto) {
			var elem,
				tmp = [],
				i = 0,

				// Por feliz coincidencia, también aparece un gEBTN (roto) en los nodos de DocumentFragment
				resultados = context.getElementsByTagName (etiqueta);

			// Filtrar posibles comentarios
			si (etiqueta === "*") {
				while ((elem = results [i ++])) {
					if (elem.nodeType === 1) {
						tmp.push (elem);
					}
				}

				return tmp;
			}
			devolver resultados;
		};

	// Clase
	Expr.find ["CLASS"] = support.getElementsByClassName && function (className, context) {
		if (typeof context.getElementsByClassName! == "undefined" && documentIsHTML) {
			return context.getElementsByClassName (className);
		}
	};

	/ * QSA / MatchSelector
	-------------------------------------------------- -------------------- * /

	// Soporte QSA y MatchSelector

	// MatchSelector (: active) informa falso cuando es verdadero (IE 9 / Opera 11.5)
	rbuggyMatches = [];

	// qSa (: focus) informa falso cuando es verdadero (Chrome 21)
	// Permitimos esto debido a un error en IE8 / 9 que arroja un error
	// siempre que se accede a `document.activeElement` en un iframe
	// Entonces, permitimos que: focus pase por QSA todo el tiempo para evitar el error de IE
	// Ver https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ((support.qsa = rnative.test (document.querySelectorAll))) {

		// Construir expresiones regulares QSA
		// Estrategia de regex adoptada por Diego Perini
		afirmar (función (el) {

			var input;

			// Seleccionar se establece en una cadena vacía a propósito
			// Esto es para probar el tratamiento de IE de no explícitamente
			// establecer un atributo de contenido booleano,
			// ya que su presencia debería ser suficiente
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild (el) .innerHTML = "<a id='" + expando + "'> </a>" +
				"<select id = '" + expando + "- \ r \\' msallowcapture = ''>" +
				"<option selected = ''> </option> </select>";

			// Soporte: IE8, Opera 11-12.16
			// No se debe seleccionar nada cuando siguen cadenas vacías ^ = o $ = o * =
			// El atributo de prueba debe ser desconocido en Opera pero "seguro" para WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if (el.querySelectorAll ("[msallowcapture ^ = '']") .length) {
				rbuggyQSA.push ("[* ^ $] =" + espacio en blanco + "* (?: '' | \" \ ")");
			}

			// Soporte: IE8
			// Los atributos booleanos y el "valor" no se tratan correctamente
			if (! el.querySelectorAll ("[seleccionado]") .length) {
				rbuggyQSA.push ("\\ [" + espacio en blanco + "* (?: valor |" + booleanos + ")");
			}

			// Soporte: Chrome <29, Android <4.4, Safari <7.0+, iOS <7.0+, PhantomJS <1.9.8+
			if (! el.querySelectorAll ("[id ~ =" + expando + "-]") .length) {
				rbuggyQSA.push ("~ =");
			}

			// Soporte: IE 11+, Edge 15 - 18+
			// IE 11 / Edge no encuentra elementos en una consulta `[name = '']` en algunos casos.
			// Agregar un atributo temporal al documento antes de que funcione la selección
			// en torno al problema.
			// Curiosamente, IE 10 y anteriores no parecen tener el problema.
			input = document.createElement ("entrada");
			input.setAttribute ("nombre", "");
			el.appendChild (entrada);
			if (! el.querySelectorAll ("[nombre = '']") .length) {
				rbuggyQSA.push ("\\ [" + espacio en blanco + "* nombre" + espacio en blanco + "* =" +
					espacio en blanco + "* (?: '' | \" \ ")");
			}

			// Webkit / Opera -: marcado debe devolver elementos de opción seleccionados
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 arroja un error aquí y no verá pruebas posteriores
			if (! el.querySelectorAll (": comprobado") .length) {
				rbuggyQSA.push (": comprobado");
			}

			// Soporte: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector # id sibling-combinator selector` falla
			if (! el.querySelectorAll ("a #" + expando + "+ *") .length) {
				rbuggyQSA.push (". #. + [+ ~]");
			}

			// Soporte: Firefox <= 3.6 - 5 solamente
			// Old Firefox no arroja un identificador mal escapado.
			el.querySelectorAll ("\\\ f");
			rbuggyQSA.push ("[\\ r \\ n \\ f]");
		});

		afirmar (función (el) {
			el.innerHTML = "<a href='' disabled='disabled'> </a>" +
				"<select disabled = 'disabled'> <option /> </select>";

			// Soporte: Aplicaciones nativas de Windows 8
			// Los atributos de tipo y nombre están restringidos durante la asignación .innerHTML
			var input = document.createElement ("entrada");
			input.setAttribute ("tipo", "oculto");
			el.appendChild (entrada) .setAttribute ("nombre", "D");

			// Soporte: IE8
			// Hacer cumplir la distinción entre mayúsculas y minúsculas del atributo de nombre
			if (el.querySelectorAll ("[nombre = d]") .length) {
				rbuggyQSA.push ("nombre" + espacio en blanco + "* [* ^ $ |! ~]? =");
			}

			// FF 3.5 -: habilitado /: elementos deshabilitados y ocultos (los elementos ocultos todavía están habilitados)
			// IE8 arroja un error aquí y no verá pruebas posteriores
			if (el.querySelectorAll (": habilitado") .length! == 2) {
				rbuggyQSA.push (": habilitado", ": deshabilitado");
			}

			// Soporte: IE9-11 +
			// IE's: el selector deshabilitado no recoge los hijos de los conjuntos de campos deshabilitados
			docElem.appendChild (el) .disabled = true;
			if (el.querySelectorAll (": disabled") .length! == 2) {
				rbuggyQSA.push (": habilitado", ": deshabilitado");
			}

			// Soporte: Opera 10-11 solamente
			// Opera 10-11 no lanza pseudos inválidos post-coma
			el.querySelectorAll ("* ,: x");
			rbuggyQSA.push (",. *:");
		});
	}

	if ((support.matchesSelector = rnative.test ((coincide con = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector)))) {

		afirmar (función (el) {

			// Comprueba si es posible hacer coincidencias
			// en un nodo desconectado (IE 9)
			support.disconnectedMatch = coincidencias.call (el, "*");

			// Esto debería fallar con una excepción
			// Gecko no se equivoca, devuelve falso en su lugar
			coincidencias.call (el, "[s! = '']: x");
			rbuggyMatches.push ("! =", pseudos);
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp (rbuggyQSA.join ("|"));
	rbuggyMatches = rbuggyMatches.length && new RegExp (rbuggyMatches.join ("|"));

	/ * Contiene
	-------------------------------------------------- -------------------- * /
	hasCompare = rnative.test (docElem.compareDocumentPosition);

	// El elemento contiene otro
	// A propósito auto-exclusivo
	// Como en, un elemento no se contiene a sí mismo
	contiene = hasCompare || rnative.test (docElem.contains)?
		función (a, b) {
			var adown = a.nodeType === 9? a.documentElement: a,
				bup = b && b.parentNode;
			devuelve un === bup || !! (bup && bup.nodeType === 1 && (
				adown.contains?
					adown.contains (bup):
					a.compareDocumentPosition && a.compareDocumentPosition (bup) & 16
			));
		}:
		función (a, b) {
			si (b) {
				while ((b = b.parentNode)) {
					si (b === a) {
						devuelve verdadero;
					}
				}
			}
			falso retorno;
		};

	/ * Clasificación
	-------------------------------------------------- -------------------- * /

	// Clasificación del orden de los documentos
	sortOrder = hasCompare?
	función (a, b) {

		// Marcar para eliminar duplicados
		si (a === b) {
			hasDuplicate = true;
			return 0;
		}

		// Ordenar según la existencia del método si solo una entrada tiene compareDocumentPosition
		var compare =! a.compareDocumentPosition -! b.compareDocumentPosition;
		si (comparar) {
			retorno comparar;
		}

		// Calcular la posición si ambas entradas pertenecen al mismo documento
		// Soporte: IE 11+, Edge 17 - 18+
		// IE / Edge a veces arroja un error de "Permiso denegado" cuando se compara estrictamente
		// dos documentos; las comparaciones superficiales funcionan.
		// eslint-disable-next-line eqeqeq
		comparar = (a.ownerDocument || a) == (b.ownerDocument || b)?
			a.compareDocumentPosition (b):

			// De lo contrario, sabemos que están desconectados
			1;

		// Nodos desconectados
		si (comparar & 1 ||
			(! support.sortDetached && b.compareDocumentPosition (a) === compare)) {

			// Elija el primer elemento relacionado con nuestro documento preferido
			// Soporte: IE 11+, Edge 17 - 18+
			// IE / Edge a veces arroja un error de "Permiso denegado" cuando se compara estrictamente
			// dos documentos; las comparaciones superficiales funcionan.
			// eslint-disable-next-line eqeqeq
			if (un == documento || a.ownerDocument == preferidoDoc &&
				contiene (preferidoDoc, a)) {
				return -1;
			}

			// Soporte: IE 11+, Edge 17 - 18+
			// IE / Edge a veces arroja un error de "Permiso denegado" cuando se compara estrictamente
			// dos documentos; las comparaciones superficiales funcionan.
			// eslint-disable-next-line eqeqeq
			if (b == documento || b.ownerDocument == preferidoDoc &&
				contiene (preferidoDoc, b)) {
				return 1;
			}

			// Mantener el orden original
			return sortInput?
				(indexOf (sortInput, a) - indexOf (sortInput, b)):
				0;
		}

		volver comparar & 4? -1: 1;
	}:
	función (a, b) {

		// Salir temprano si los nodos son idénticos
		si (a === b) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [a],
			bp = [b];

		// Los nodos sin padres son documentos o están desconectados
		si (! aup ||! bup) {

			// Soporte: IE 11+, Edge 17 - 18+
			// IE / Edge a veces arroja un error de "Permiso denegado" cuando se compara estrictamente
			// dos documentos; las comparaciones superficiales funcionan.
			/ * eslint-deshabilitar eqeqeq * /
			devolver un == documento? -1:
				b == documento? 1:
				/ * eslint-enable eqeqeq * /
				aup? -1:
				bup? 1:
				sortInput?
				(indexOf (sortInput, a) - indexOf (sortInput, b)):
				0;

		// Si los nodos son hermanos, podemos hacer una comprobación rápida
		} más si (aup === bup) {
			return siblingCheck (a, b);
		}

		// De lo contrario, necesitamos listas completas de sus antepasados ​​para comparar
		cur = a;
		while ((cur = cur.parentNode)) {
			ap.unshift (cur);
		}
		cur = b;
		while ((cur = cur.parentNode)) {
			bp.unshift (cur);
		}

		// Camina por el árbol buscando una discrepancia
		while (ap [i] === bp [i]) {
			i ++;
		}

		regreso yo?

			// Hacer una verificación de hermanos si los nodos tienen un ancestro común
			siblingCheck (ap [i], bp [i]):

			// De lo contrario, los nodos en nuestro documento se ordenan primero
			// Soporte: IE 11+, Edge 17 - 18+
			// IE / Edge a veces arroja un error de "Permiso denegado" cuando se compara estrictamente
			// dos documentos; las comparaciones superficiales funcionan.
			/ * eslint-deshabilitar eqeqeq * /
			ap [i] == favoriteDoc? -1:
			bp [i] == favoriteDoc? 1:
			/ * eslint-enable eqeqeq * /
			0;
	};

	documento de devolución;
};

Sizzle.matches = function (expr, elementos) {
	return Sizzle (expr, null, null, elementos);
};

Sizzle.matchesSelector = function (elem, expr) {
	setDocument (elem);

	if (support.matchesSelector && documentIsHTML &&
		! nonnativeSelectorCache [expr + ""] &&
		(! rbuggyMatches ||! rbuggyMatches.test (expr)) &&
		(! rbuggyQSA ||! rbuggyQSA.test (expr))) {

		tratar {
			var ret = coincidencias.call (elem, expr);

			// MatchSelector de IE 9 devuelve falso en los nodos desconectados
			if (ret || support.disconnectedMatch ||

				// Además, se dice que los nodos desconectados están en un documento
				// fragmento en IE 9
				elem.document && elem.document.nodeType! == 11) {
				return ret;
			}
		} captura (e) {
			nonnativeSelectorCache (expr, true);
		}
	}

	return Sizzle (expr, document, null, [elem]) .length> 0;
};

Sizzle.contains = function (context, elem) {

	// Establecer variables de documento si es necesario
	// Soporte: IE 11+, Edge 17 - 18+
	// IE / Edge a veces arroja un error de "Permiso denegado" cuando se compara estrictamente
	// dos documentos; las comparaciones superficiales funcionan.
	// eslint-disable-next-line eqeqeq
	if ((context.ownerDocument || context)! = document) {
		setDocument (contexto);
	}
	return contiene (contexto, elem);
};

Sizzle.attr = function (elem, name) {

	// Establecer variables de documento si es necesario
	// Soporte: IE 11+, Edge 17 - 18+
	// IE / Edge a veces arroja un error de "Permiso denegado" cuando se compara estrictamente
	// dos documentos; las comparaciones superficiales funcionan.
	// eslint-disable-next-line eqeqeq
	if ((elem.ownerDocument || elem)! = documento) {
		setDocument (elem);
	}

	var fn = Expr.attrHandle [name.toLowerCase ()],

		// No se deje engañar por las propiedades de Object.prototype (jQuery # 13807)
		val = fn && hasOwn.call (Expr.attrHandle, name.toLowerCase ())?
			fn (elem, nombre,! documentIsHTML):
			indefinido

	return val! == undefined?
		val:
		support.attributes || ! documentIsHTML?
			elem.getAttribute (nombre):
			(val = elem.getAttributeNode (nombre)) && val.specified?
				val.value:
				nulo;
};

Sizzle.escape = function (sel) {
	return (sel + "") .replace (rcssescape, fcssescape);
};

Sizzle.error = function (msg) {
	lanzar nuevo Error ("Error de sintaxis, expresión no reconocida:" + msg);
};

/ **
 * Clasificación de documentos y eliminación de duplicados
 * @param {ArrayLike} resultados
 * /
Sizzle.uniqueSort = function (resultados) {
	var elem,
		duplicados = [],
		j = 0,
		i = 0;

	// A menos que * sepamos * que podemos detectar duplicados, asumimos su presencia
	hasDuplicate =! support.detectDuplicates;
	sortInput =! support.sortStable && results.slice (0);
	results.sort (sortOrder);

	if (hasDuplicate) {
		while ((elem = results [i ++])) {
			if (elem === resultados [i]) {
				j = duplicados.push (i);
			}
		}
		while (j--) {
			results.splice (duplica [j], 1);
		}
	}

	// Borrar entrada después de ordenar para liberar objetos
	// Ver https://github.com/jquery/sizzle/pull/225
	sortInput = nulo;

	devolver resultados;
};

/ **
 * Función de utilidad para recuperar el valor de texto de una matriz de nodos DOM
 * @param {Array | Element} elem
 * /
getText = Sizzle.getText = function (elem) {
	var nodo,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if (! nodeType) {

		// Si no hay nodeType, se espera que sea una matriz
		while ((nodo = elem [i ++])) {

			// No atravesar los nodos de comentarios
			ret + = getText (nodo);
		}
	} else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {

		// Usa textContent para elementos
		// uso de innerText eliminado para la coherencia de las nuevas líneas (jQuery # 11153)
		if (typeof elem.textContent === "cadena") {
			return elem.textContent;
		} más {

			// Atraviesa a sus hijos
			para (elem = elem.firstChild; elem; elem = elem.nextSibling) {
				ret + = getText (elem);
			}
		}
	} else if (nodeType === 3 || nodeType === 4) {
		return elem.nodeValue;
	}

	// No incluya comentarios o nodos de instrucción de procesamiento

	return ret;
};

Expr = Sizzle.selectors = {

	// Puede ser ajustado por el usuario
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	encontrar: {},

	relativo: {
		">": {dir: "parentNode", primero: verdadero},
		"": {dir: "parentNode"},
		"+": {dir: "hermano anterior", primero: verdadero},
		"~": {dir: "hermano anterior"}
	},

	preFilter: {
		"ATTR": función (coincidencia) {
			coincidir [1] = coincidir [1] .replace (runescape, funescape);

			// Mover el valor dado para que coincida con [3] ya sea entre comillas o sin comillas
			partido [3] = (partido [3] || partido [4] ||
				partido [5] || "") .replace (runescape, funescape);

			si (coincide con [2] === "~ =") {
				coincidir [3] = "" + coincidir [3] + "";
			}

			return match.slice (0, 4);
		},

		"NIÑO": función (partido) {

			/ * coincidencias de matchExpr ["NIÑO"]
				1 tipo (solo | nth | ...)
				2 qué (hijo | de tipo)
				3 argumento (par | impar | \ d * | \ d * n ([+ -] \ d +)? | ...)
				4 componente xn del argumento xn + y ([+ -]? \ D * n |)
				5 signo de componente xn
				6 x de componente xn
				7 signo de componente y
				8 años de componente y
			* /
			coincidir [1] = coincidir [1] .toLowerCase ();

			if (coincide con [1] .slice (0, 3) === "nth") {

				// nth- * requiere argumento
				if (! match [3]) {
					Sizzle.error (coincide con [0]);
				}

				// parámetros numéricos xey para Expr.filter.CHILD
				// recuerda que falso / verdadero se lanza respectivamente a 0/1
				coincidir [4] = + (coincidir [4]?
					coincide con [5] + (coincide con [6] || 1):
					2 * (coincide con [3] === "par" || coincide con [3] === "impar"));
				coincide con [5] = + ((coincide con [7] + coincide con [8]) || coincide con [3] === "impar");

				// otros tipos prohíben argumentos
			} más si (coincide con [3]) {
				Sizzle.error (coincide con [0]);
			}

			partido de vuelta;
		},

		"PSEUDO": función (coincidencia) {
			var exceso,
				unquoted =! match [6] && match [2];

			if (matchExpr ["CHILD"] .test (match [0])) {
				devolver nulo;
			}

			// Acepta los argumentos citados tal cual
			si (coincide con [3]) {
				partido [2] = partido [4] || partido [5] || "";

			// Elimina el exceso de caracteres de los argumentos sin comillas
			} else if (sin comillas && rpseudo.test (sin comillas) &&

				// Obtener el exceso de tokenize (recursivamente)
				(exceso = tokenizar (sin comillas, verdadero)) &&

				// avanzar al próximo paréntesis de cierre
				(exceso = unquoted.indexOf (")", unquoted.length - exceso) - unquoted.length)) {

				// el exceso es un índice negativo
				igualar [0] = igualar [0] .slice (0, exceso);
				match [2] = unquoted.slice (0, exceso);
			}

			// Devuelve solo las capturas que necesita el método de pseudo filtro (tipo y argumento)
			return match.slice (0, 3);
		}
	},

	filtro: {

		"TAG": función (nodeNameSelector) {
			var nodeName = nodeNameSelector.replace (runescape, funescape) .toLowerCase ();
			return nodeNameSelector === "*"?
				function () {
					devuelve verdadero;
				}:
				function (elem) {
					return elem.nodeName && elem.nodeName.toLowerCase () === nodeName;
				};
		},

		"CLASE": función (className) {
			var patrón = classCache [className + ""];

			patrón de retorno ||
				(patrón = nueva expresión regular ("(^ |" + espacio en blanco +
					")" + className + "(" + espacio en blanco + "| $)")) && classCache (
						className, función (elem) {
							patrón de retorno.prueba (
								typeof elem.className === "cadena" && elem.className ||
								typeof elem.getAttribute! == "indefinido" &&
									elem.getAttribute ("clase") ||
								""
							);
				});
		},

		"ATTR": función (nombre, operador, verificación) {
			función de retorno (elem) {
				var result = Sizzle.attr (elem, name);

				si (resultado == nulo) {
					operador de retorno === "! =";
				}
				if (! operator) {
					devuelve verdadero;
				}

				resultado + = "";

				/ * eslint-disable max-len * /

				operador de retorno === "="? resultado === comprobar:
					operador === "! ="? resultado! == comprobar:
					operador === "^ ="? comprobar && result.indexOf (comprobar) === 0:
					operador === "* ="? comprobar && result.indexOf (comprobar)> -1:
					operador === "$ ="? comprobar && result.slice (-check.length) === comprobar:
					operador === "~ ="? ("" + result.replace (rwhitespace, "") + "") .indexOf (comprobar)> -1:
					operador === "| ="? resultado === comprobar || result.slice (0, check.length + 1) === check + "-":
					falso;
				/ * eslint-enable max-len * /

			};
		},

		"NIÑO": función (tipo, qué, _argumento, primero, último) {
			var simple = type.slice (0, 3)! == "nth",
				forward = type.slice (-4)! == "last",
				ofType = what === "of-type";

			volver primero === 1 && último === 0?

				// Atajo para: nth - * (n)
				function (elem) {
					return !! elem.parentNode;
				}:

				función (elem, _context, xml) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple! == hacia adelante? "nextSibling": "previousSibling",
						parent = elem.parentNode,
						nombre = ofType && elem.nodeName.toLowerCase (),
						useCache =! xml &&! ofType,
						diff = falso;

					if (padre) {

						//: (primero | último | solo) - (hijo | de tipo)
						if (simple) {
							while (dir) {
								nodo = elem;
								while ((nodo = nodo [dir])) {
									si (deTipo?
										node.nodeName.toLowerCase () === nombre:
										node.nodeType === 1) {

										falso retorno;
									}
								}

								// Dirección inversa para: solo- * (si aún no lo hemos hecho)
								start = dir = type === "only" &&! start && "nextSibling";
							}
							devuelve verdadero;
						}

						start = [forward? parent.firstChild: parent.lastChild];

						// no xml: nth-child (...) almacena datos de caché en `parent`
						if (reenviar && useCache) {

							// Busca `elem` de un índice previamente almacenado en caché

							// ... de una manera compatible con gzip
							nodo = padre;
							externalCache = nodo [expando] || (nodo [expando] = {});

							// Soporte: IE <9 solamente
							// Defiéndete contra attroperties clonadas (jQuery gh-1709)
							UniqueCache = ExternalCache [node.uniqueID] ||
								(ExternalCache [node.uniqueID] = {});

							cache = uniqueCache [tipo] || [];
							nodeIndex = cache [0] === dirruns && cache [1];
							diff = nodeIndex && cache [2];
							node = nodeIndex && parent.childNodes [nodeIndex];

							while ((nodo = ++ nodeIndex && nodo && nodo [dir] ||

								// Retorno a la búsqueda de `elem` desde el principio
								(diff = nodeIndex = 0) || start.pop ())) {

								// Cuando se encuentra, almacena en caché los índices en `parent` y rompe
								if (node.nodeType === 1 && ++ diff && node === elem) {
									uniqueCache [tipo] = [dirruns, nodeIndex, diff];
									romper;
								}
							}

						} más {

							// Use el índice de elementos previamente almacenado en caché si está disponible
							if (useCache) {

								// ... de una manera compatible con gzip
								nodo = elem;
								externalCache = nodo [expando] || (nodo [expando] = {});

								// Soporte: IE <9 solamente
								// Defiéndete contra attroperties clonadas (jQuery gh-1709)
								UniqueCache = ExternalCache [node.uniqueID] ||
									(ExternalCache [node.uniqueID] = {});

								cache = uniqueCache [tipo] || [];
								nodeIndex = cache [0] === dirruns && cache [1];
								diff = nodeIndex;
							}

							// xml: nth-child (...)
							// o: nth-last-child (...) o: nth (-last)? - of-type (...)
							si (diff === falso) {

								// Usa el mismo ciclo anterior para buscar `elem` desde el principio
								while ((nodo = ++ nodeIndex && nodo && nodo [dir] ||
									(diff = nodeIndex = 0) || start.pop ())) {

									si ((deTipo?
										node.nodeName.toLowerCase () === nombre:
										node.nodeType === 1) &&
										++ diff) {

										// Guarda en caché el índice de cada elemento encontrado
										if (useCache) {
											externalCache = nodo [expando] ||
												(nodo [expando] = {});

											// Soporte: IE <9 solamente
											// Defiéndete contra attroperties clonadas (jQuery gh-1709)
											UniqueCache = ExternalCache [node.uniqueID] ||
												(ExternalCache [node.uniqueID] = {});

											UniqueCache [tipo] = [dirruns, diff];
										}

										si (nodo === elem) {
											romper;
										}
									}
								}
							}
						}

						// Incorporar el desplazamiento, luego verificar el tamaño del ciclo
						diff - = último;
						return diff === primero || (diff% first === 0 && diff / first> = 0);
					}
				};
		},

		"PSEUDO": función (pseudo, argumento) {

			// Los nombres de pseudo-clases no distinguen entre mayúsculas y minúsculas
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Priorizar por distinción entre mayúsculas y minúsculas en caso de que se agreguen pseudos personalizados con letras mayúsculas
			// Recuerda que setFilters hereda de pseudos
			var args,
				fn = Expr.pseudos [pseudo] || Expr.setFilters [pseudo.toLowerCase ()] ||
					Sizzle.error ("pseudo no admitido:" + pseudo);

			// El usuario puede usar createPseudo para indicar que
			// se necesitan argumentos para crear la función de filtro
			// tal como lo hace Sizzle
			if (fn [expandir]) {
				return fn (argumento);
			}

			// Pero mantén el soporte para firmas antiguas
			if (fn.length> 1) {
				args = [pseudo, pseudo, "", argumento];
				return Expr.setFilters.hasOwnProperty (pseudo.toLowerCase ())?
					markFunction (función (semilla, coincidencias) {
						var idx,
							emparejado = fn (semilla, argumento),
							i = longitud coincidente;
						mientras yo-- ) {
							idx = indexOf (semilla, coincidente [i]);
							semilla [idx] =! (coincide con [idx] = coincidente [i]);
						}
					}):
					function (elem) {
						return fn (elem, 0, args);
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Pseudos potencialmente complejos
		"no": markFunction (función (selector) {

			// Recorta el selector pasado para compilar
			// para evitar tratar el inicio y el final
			// espacios como combinadores
			var input = [],
				resultados = [],
				matcher = compile (selector.replace (rtrim, "$ 1"));

			return matcher [expando]?
				markFunction (función (semilla, coincidencias, _context, xml) {
					var elem,
						incomparable = coincidente (semilla, nulo, xml, []),
						i = longitud de semilla;

					// Coincidir con elementos no igualados por `matcher`
					mientras yo-- ) {
						if ((elem = incomparable [i])) {
							semilla [i] =! (coincide con [i] = elem);
						}
					}
				}):
				función (elem, _context, xml) {
					entrada [0] = elem;
					comparador (entrada, nulo, xml, resultados);

					// No conserve el elemento (número 299)
					entrada [0] = nulo;
					return! results.pop ();
				};
		}),

		"tiene": markFunction (función (selector) {
			función de retorno (elem) {
				return Sizzle (selector, elem) .length> 0;
			};
		}),

		"contiene": markFunction (función (texto) {
			text = text.replace (runescape, funescape);
			función de retorno (elem) {
				return (elem.textContent || getText (elem)) .indexOf (texto)> -1;
			};
		}),

		// "Si un elemento está representado por un selector: lang ()
		// se basa únicamente en el valor de idioma del elemento
		// siendo igual al identificador C,
		// o comenzando con el identificador C seguido inmediatamente por "-".
		// La comparación de C con el valor del idioma del elemento se realiza sin distinción entre mayúsculas y minúsculas.
		// El identificador C no tiene que ser un nombre de idioma válido ".
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction (function (lang) {

			// el valor de idioma debe ser un identificador válido
			if (! ridentifier.test (lang || "")) {
				Sizzle.error ("idioma no admitido:" + idioma);
			}
			lang = lang.replace (runescape, funescape) .toLowerCase ();
			función de retorno (elem) {
				var elemLang;
				hacer {
					si ((elemLang = documentIsHTML?
						elem.lang:
						elem.getAttribute ("xml: lang") || elem.getAttribute ("lang"))) {

						elemLang = elemLang.toLowerCase ();
						return elemLang === lang || elemLang.indexOf (lang + "-") === 0;
					}
				} while ((elem = elem.parentNode) && elem.nodeType === 1);
				falso retorno;
			};
		}),

		// Varios
		"objetivo": función (elem) {
			var hash = window.location && window.location.hash;
			devolver hash && hash.slice (1) === elem.id;
		},

		"raíz": función (elem) {
			return elem === docElem;
		},

		"foco": función (elem) {
			return elem === document.activeElement &&
				(! document.hasFocus || document.hasFocus ()) &&
				!! (elem.type || elem.href || ~ elem.tabIndex);
		},

		// Propiedades booleanas
		"habilitado": createDisabledPseudo (falso),
		"deshabilitado": createDisabledPseudo (verdadero),

		"comprobado": función (elem) {

			// En CSS3,: check debe devolver tanto los elementos seleccionados como los seleccionados
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase ();
			return (nodeName === "input" && !! elem.checked) ||
				(nodeName === "opción" && !! elem.selected);
		},

		"seleccionado": función (elem) {

			// Acceder a esta propiedad hace que se seleccione por defecto
			// las opciones en Safari funcionan correctamente
			if (elem.parentNode) {
				// eslint-disable-next-line no-unused-expresiones
				elem.parentNode.selectedIndex;
			}

			return elem.selected === verdadero;
		},

		// Contenidos
		"vacío": función (elem) {

			// http://www.w3.org/TR/selectors/#empty-pseudo
			//: el elemento (1) o los nodos de contenido niegan el vacío (texto: 3; cdata: 4; referencia de la entidad: 5),
			// pero no por otros (comentario: 8; instrucción de procesamiento: 7; etc.)
			// nodeType <6 funciona porque los atributos (2) no aparecen como hijos
			para (elem = elem.firstChild; elem; elem = elem.nextSibling) {
				if (elem.nodeType <6) {
					falso retorno;
				}
			}
			devuelve verdadero;
		},

		"padre": función (elem) {
			return! Expr.pseudos ["vacío"] (elem);
		},

		// Elementos / tipos de entrada
		"encabezado": función (elem) {
			return rheader.test (elem.nodeName);
		},

		"entrada": función (elem) {
			return rinputs.test (elem.nodeName);
		},

		"botón": función (elem) {
			var name = elem.nodeName.toLowerCase ();
			nombre de retorno === "entrada" && elem.type === "botón" || nombre === "botón";
		},

		"texto": función (elem) {
			var attr;
			return elem.nodeName.toLowerCase () === "input" &&
				elem.type === "texto" &&

				// Soporte: IE <8
				// Aparecen nuevos valores de atributo HTML5 (p. Ej., "Búsqueda") con elem.type === "texto"
				((atributo = elem.getAttribute ("tipo")) == nulo ||
					attr.toLowerCase () === "texto");
		},

		// Posición en la colección
		"primero": createPositionalPseudo (function () {
			return [0];
		}),

		"último": createPositionalPseudo (function (_matchIndexes, length) {
			return [longitud - 1];
		}),

		"eq": createPositionalPseudo (function (_matchIndexes, length, argument) {
			return [argumento <0? argumento + longitud: argumento];
		}),

		"incluso": createPositionalPseudo (function (matchIndexes, length) {
			var i = 0;
			para (; i <longitud; i + = 2) {
				matchIndexes.push (i);
			}
			return matchIndexes;
		}),

		"impar": createPositionalPseudo (function (matchIndexes, length) {
			var i = 1;
			para (; i <longitud; i + = 2) {
				matchIndexes.push (i);
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo (function (matchIndexes, length, argument) {
			var i = argumento <0?
				argumento + longitud:
				argumento> longitud?
					longitud :
					argumento;
			para (; --i> = 0;) {
				matchIndexes.push (i);
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo (function (matchIndexes, length, argument) {
			var i = argumento <0? argumento + longitud: argumento;
			para (; ++ i <longitud;) {
				matchIndexes.push (i);
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos ["nth"] = Expr.pseudos ["eq"];

// Agregar botón / tipo de entrada pseudos
para (yo en {radio: verdadero, casilla de verificación: verdadero, archivo: verdadero, contraseña: verdadero, imagen: verdadero}) {
	Expr.pseudos [i] = createInputPseudo (i);
}
para (yo en {enviar: verdadero, restablecer: verdadero}) {
	Expr.pseudos [i] = createButtonPseudo (i);
}

// API fácil para crear nuevos setFilters
function setFilters () {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters ();

tokenize = Sizzle.tokenize = function (selector, parseOnly) {
	var emparejado, coincidencia, tokens, tipo,
		soFar, grupos, preFiltros,
		cached = tokenCache [selector + ""];

	si (en caché) {
		return parseOnly? 0: cached.slice (0);
	}

	soFar = selector;
	grupos = [];
	preFilters = Expr.preFilter;

	while (soFar) {

		// Coma y primera ejecución
		if (! coincidió || (coincidencia = rcomma.exec (soFar))) {
			si (coincidencia) {

				// No consuma las comas finales como válidas
				soFar = soFar.slice (coincide con [0] .length) || hasta aquí;
			}
			grupos.push ((tokens = []));
		}

		emparejado = falso;

		// Combinadores
		if ((coincidencia = rcombinators.exec (soFar))) {
			emparejado = match.shift ();
			tokens.push ({
				valor: emparejado,

				// Lanza combinadores descendientes al espacio
				tipo: coincide con [0] .replace (rtrim, "")
			});
			soFar = soFar.slice (coincidente.longitud);
		}

		// Filtros
		para (escriba Expr.filter) {
			if ((match = matchExpr [type] .exec (soFar)) && (! preFilters [type] ||
				(coincidencia = preFiltros [tipo] (coincidencia)))) {
				emparejado = match.shift ();
				tokens.push ({
					valor: emparejado,
					tipo: tipo,
					partidos: partido
				});
				soFar = soFar.slice (coincidente.longitud);
			}
		}

		si (! coincidió) {
			romper;
		}
	}

	// Devuelve la longitud del exceso no válido
	// si solo estamos analizando
	// De lo contrario, arroja un error o devuelve tokens
	return parseOnly?
		soFar.length:
		hasta aquí ?
			Sizzle.error (selector):

			// Caché los tokens
			tokenCache (selector, grupos) .slice (0);
};

función toSelector (tokens) {
	var i = 0,
		len = tokens.length,
		selector = "";
	para (; i <len; i ++) {
		selector + = tokens [i] .value;
	}
	selector de retorno;
}

función addCombinator (comparador, combinador, base) {
	var dir = combinator.dir,
		skip = combinator.next,
		clave = saltar || dir,
		checkNonElements = base && key === "parentNode",
		doneName = hecho ++;

	volver combinator.primero?

		// Verificar contra el antepasado más cercano / elemento anterior
		función (elem, contexto, xml) {
			while ((elem = elem [dir])) {
				if (elem.nodeType === 1 || checkNonElements) {
					return matcher (elem, context, xml);
				}
			}
			falso retorno;
		}:

		// Verificar con todos los elementos antepasados ​​/ precedentes
		función (elem, contexto, xml) {
			var oldCache, uniqueCache, outerCache,
				newCache = [dirruns, doneName];

			// No podemos establecer datos arbitrarios en nodos XML, por lo que no se benefician del almacenamiento en caché del combinador
			si (xml) {
				while ((elem = elem [dir])) {
					if (elem.nodeType === 1 || checkNonElements) {
						if (matcher (elem, context, xml)) {
							devuelve verdadero;
						}
					}
				}
			} más {
				while ((elem = elem [dir])) {
					if (elem.nodeType === 1 || checkNonElements) {
						externalCache = elem [expando] || (elem [expando] = {});

						// Soporte: IE <9 solamente
						// Defiéndete contra attroperties clonadas (jQuery gh-1709)
						caché único = caché externo [elem.uniqueID] ||
							(caché externo [elem.uniqueID] = {});

						if (omitir && omitir === elem.nodeName.toLowerCase ()) {
							elem = elem [dir] || elem;
						} else if ((oldCache = uniqueCache [clave]) &&
							oldCache [0] === dirruns && oldCache [1] === doneName) {

							// Asignar a newCache para que los resultados se propaguen a los elementos anteriores
							return (newCache [2] = oldCache [2]);
						} más {

							// Reutiliza newcache para que los resultados se propaguen a los elementos anteriores
							UniqueCache [clave] = newCache;

							// Una coincidencia significa que hemos terminado; un error significa que tenemos que seguir controlando
							if ((newCache [2] = matcher (elem, context, xml))) {
								devuelve verdadero;
							}
						}
					}
				}
			}
			falso retorno;
		};
}

function elementMatcher (comparadores) {
	return matchers.length> 1?
		función (elem, contexto, xml) {
			var i = matchers.length;
			mientras yo-- ) {
				if (! matchers [i] (elem, context, xml)) {
					falso retorno;
				}
			}
			devuelve verdadero;
		}:
		emparejadores [0];
}

function multipleContexts (selector, contextos, resultados) {
	var i = 0,
		len = contexts.length;
	para (; i <len; i ++) {
		Sizzle (selector, contextos [i], resultados);
	}
	devolver resultados;
}

función condensar (incomparable, mapa, filtro, contexto, xml) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = inigualable.longitud,
		mapeado = mapa! = nulo;

	para (; i <len; i ++) {
		if ((elem = incomparable [i])) {
			if (! filter || filter (elem, context, xml)) {
				newUnmatched.push (elem);
				if (mapeado) {
					map.push (i);
				}
			}
		}
	}

	return newUnmatched;
}

función setMatcher (preFilter, selector, matcher, postFilter, postFinder, postSelector) {
	if (postFilter &&! postFilter [expando]) {
		postFilter = setMatcher (postFilter);
	}
	if (postFinder &&! postFinder [expando]) {
		postFinder = setMatcher (postFinder, postSelector);
	}
	return markFunction (función (semilla, resultados, contexto, xml) {
		var temp, yo, elem,
			preMap = [],
			postMap = [],
			preexistente = resultados.longitud,

			// Obtener elementos iniciales de semilla o contexto
			elems = semilla || multipleContexts (
				selector || "*",
				context.nodeType? [contexto]: contexto,
				[]
			),

			// Prefiltro para obtener la entrada del comparador, conservando un mapa para la sincronización de los resultados de la semilla
			matcherIn = preFilter && (semilla ||! selector)?
				condensar (elems, preMap, preFilter, context, xml):
				elems,

			matcherOut = matcher?

				// Si tenemos un postFinder, o semilla filtrada, o postFilter no semilla o resultados preexistentes,
				postFinder || (semilla? preFiltro: preexistente || postFiltro)?

					// ... es necesario un procesamiento intermedio
					[]:

					// ... de lo contrario, use los resultados directamente
					resultados:
				matcherIn;

		// Encuentra coincidencias primarias
		si (comparador) {
			matcher (matcherIn, matcherOut, context, xml);
		}

		// Aplicar postFilter
		if (postFilter) {
			temp = condensar (matcherOut, postMap);
			postFilter (temp, [], context, xml);

			// Elimina la coincidencia de los elementos defectuosos moviéndolos de nuevo a matcherIn
			i = temp.length;
			mientras yo-- ) {
				if ((elem = temp [i])) {
					matcherOut [postMap [i]] =! (matcherIn [postMap [i]] = elem);
				}
			}
		}

		if (semilla) {
			if (postFinder || preFilter) {
				if (postFinder) {

					// Obtenga el matcherOut final condensando este intermedio en contextos postFinder
					temp = [];
					i = matcherOut.length;
					mientras yo-- ) {
						if ((elem = matcherOut [i])) {

							// Restaurar matcherIn ya que elem aún no es una coincidencia final
							temp.push ((matcherIn [i] = elem));
						}
					}
					postFinder (nulo, (matcherOut = []), temp, xml);
				}

				// Mueve los elementos coincidentes de la semilla a los resultados para mantenerlos sincronizados
				i = matcherOut.length;
				mientras yo-- ) {
					si ((elem = matcherOut [i]) &&
						(temp = postFinder? indexOf (semilla, elem): preMap [i])> -1) {

						semilla [temp] =! (resultados [temp] = elem);
					}
				}
			}

		// Agregar elementos a los resultados, a través de postFinder si está definido
		} más {
			matcherOut = condensar (
				matcherOut === resultados?
					matcherOut.splice (preexistente, matcherOut.length):
					matcherOut
			);
			if (postFinder) {
				postFinder (nulo, resultados, matcherOut, xml);
			} más {
				push.apply (resultados, matcherOut);
			}
		}
	});
}

function matcherFromTokens (tokens) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadRelative = Expr.relative [tokens [0] .type],
		implícitoRelativo = líderRelativo || Expr.relative [""],
		i = leadRelative? 1: 0,

		// El comparador fundamental asegura que los elementos sean accesibles desde contextos de nivel superior
		matchContext = addCombinator (función (elem) {
			return elem === checkContext;
		}, implícitoRelativo, verdadero),
		matchAnyContext = addCombinator (function (elem) {
			return indexOf (checkContext, elem)> -1;
		}, implícitoRelativo, verdadero),
		matchers = [function (elem, context, xml) {
			var ret = (! LeadRelative && (xml || context! == outsidemostContext)) || (
				(checkContext = contexto) .nodeType?
					matchContext (elem, contexto, xml):
					matchAnyContext (elem, contexto, xml));

			// Evite colgarse del elemento (número 299)
			checkContext = null;
			return ret;
		}];

	para (; i <len; i ++) {
		if ((matcher = Expr.relative [tokens [i] .type])) {
			matchers = [addCombinator (elementMatcher (matchers), matcher)];
		} más {
			matcher = Expr.filter [tokens [i] .type] .apply (nulo, tokens [i] .matches);

			// Devuelve especial al ver un comparador posicional
			if (comparador [expando]) {

				// Encuentra el siguiente operador relativo (si lo hay) para un manejo adecuado
				j = ++ i;
				para (; j <len; j ++) {
					if (Expr.relative [tokens [j] .type]) {
						romper;
					}
				}
				return setMatcher (
					i> 1 && elementMatcher (comparadores),
					i> 1 && toSelector (

					// Si el token anterior era un combinador descendiente, inserte un elemento cualquiera implícito `*`
					tokens
						rebanada (0, i - 1)
						.concat ({valor: tokens [i - 2] .type === ""? "*": ""})
					) .replace (rtrim, "$ 1"),
					emparejador
					i <j && matcherFromTokens (tokens.slice (i, j)),
					j <len && matcherFromTokens ((tokens = tokens.slice (j))),
					j <len && toSelector (tokens)
				);
			}
			matchers.push (igualador);
		}
	}

	return elementMatcher (comparadores);
}

function matcherFromGroupMatchers (elementMatchers, setMatchers) {
	var bySet = setMatchers.length> 0,
		byElement = elementMatchers.length> 0,
		superMatcher = función (semilla, contexto, xml, resultados, más externo) {
			var elem, j, comparador,
				matchedCount = 0,
				i = "0",
				inigualable = semilla && [],
				setMatched = [],
				contextBackup = outermostContext,

				// Siempre debemos tener elementos semilla o contexto más externo
				elems = semilla || byElement && Expr.find ["TAG"] ("*", más externo),

				// Use dirruns enteros si este es el comparador más externo
				dirrunsUnique = (dirruns + = contextBackup == null? 1: Math.random () || 0.1),
				len = elems.length;

			if (más externo) {

				// Soporte: IE 11+, Edge 17 - 18+
				// IE / Edge a veces arroja un error de "Permiso denegado" cuando se compara estrictamente
				// dos documentos; las comparaciones superficiales funcionan.
				// eslint-disable-next-line eqeqeq
				externalmostContext = contexto == documento || contexto || más exterior;
			}

			// Agrega elementos pasando elementMatchers directamente a los resultados
			// Soporte: IE <9, Safari
			// Tolerar las propiedades de NodeList (IE: "length"; Safari: <number>) elementos coincidentes por id
			para (; i! == len && (elem = elems [i])! = null; i ++) {
				if (byElement && elem) {
					j = 0;

					// Soporte: IE 11+, Edge 17 - 18+
					// IE / Edge a veces arroja un error de "Permiso denegado" cuando se compara estrictamente
					// dos documentos; las comparaciones superficiales funcionan.
					// eslint-disable-next-line eqeqeq
					if (! context && elem.ownerDocument! = document) {
						setDocument (elem);
						xml =! documentIsHTML;
					}
					while ((matcher = elementMatchers [j ++])) {
						if (matcher (elem, contexto || documento, xml)) {
							results.push (elem);
							romper;
						}
					}
					if (más externo) {
						dirruns = dirrunsUnique;
					}
				}

				// Seguimiento de elementos no coincidentes para establecer filtros
				if (bySet) {

					// Habrán pasado por todos los emparejamientos posibles
					if ((elem =! matcher && elem)) {
						matchedCount--;
					}

					// Alarga la matriz para cada elemento, coincidente o no
					if (semilla) {
						inigualable.push (elem);
					}
				}
			}

			// `i` es ahora el recuento de elementos visitados arriba, y lo agrega a` matchedCount`
			// hace que este último no sea negativo.
			matchedCount + = i;

			// Aplicar filtros de conjunto a elementos no coincidentes
			// NOTA: Esto se puede omitir si no hay elementos no coincidentes (es decir, `matchedCount`
			// es igual a `i`), a menos que no hayamos visitado _cualquier_ elementos en el ciclo anterior porque tenemos
			// sin coincidencias de elementos y sin semilla.
			// Incrementar una cadena inicial "0" `i` permite que` i` siga siendo una cadena solo en ese
			// caso, que dará como resultado un "00" `matchedCount` que difiere de` i` pero también
			// numéricamente cero.
			if (bySet && i! == matchedCount) {
				j = 0;
				while ((matcher = setMatchers [j ++])) {
					comparador (inigualable, setMatched, context, xml);
				}

				if (semilla) {

					// Reintegrar las coincidencias de elementos para eliminar la necesidad de ordenar
					if (matchedCount> 0) {
						mientras yo-- ) {
							if (! (inigualable [i] || setMatched [i])) {
								setMatched [i] = pop.call (resultados);
							}
						}
					}

					// Descartar los valores del marcador de posición del índice para obtener solo coincidencias reales
					setMatched = condensar (setMatched);
				}

				// Agregar coincidencias a los resultados
				push.apply (resultados, setMatched);

				// Las coincidencias de conjuntos sin semillas que tienen éxito en varios emparejadores exitosos estipulan clasificación
				if (más externo &&! seed && setMatched.length> 0 &&
					(matchedCount + setMatchers.length)> 1) {

					Sizzle.uniqueSort (resultados);
				}
			}

			// Anular la manipulación de globales por comparadores anidados
			if (más externo) {
				dirruns = dirrunsUnique;
				externalmostContext = contextBackup;
			}

			regreso inigualable;
		};

	volver por Set?
		markFunction (superMatcher):
		superMatcher;
}

compile = Sizzle.compile = function (selector, match / * Internal Use Only * /) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache [selector + ""];

	if (! caché) {

		// Genera una función de funciones recursivas que se pueden usar para verificar cada elemento
		if (! match) {
			coincidencia = tokenizar (selector);
		}
		i = coincidencia.longitud;
		mientras yo-- ) {
			cached = matcherFromTokens (coincide con [i]);
			if (en caché [expando]) {
				setMatchers.push (en caché);
			} más {
				elementMatchers.push (en caché);
			}
		}

		// Caché la función compilada
		cached = compilerCache (
			selector,
			matcherFromGroupMatchers (elementMatchers, setMatchers)
		);

		// Guardar selector y tokenización
		cached.selector = selector;
	}
	retorno en caché;
};

/ **
 * Una función de selección de bajo nivel que funciona con compilado de Sizzle
 * funciones de selector
 * @param {String | Function} selector Un selector o un precompilado
 * función de selector construida con Sizzle.compile
 * @param {Element} contexto
 * @param {Array} [resultados]
 * @param {Array} [semilla] Un conjunto de elementos para comparar
 * /
select = Sizzle.select = function (selector, contexto, resultados, semilla) {
	var i, tokens, token, tipo, buscar,
		compilado = tipo de selector === "función" && selector,
		coincidir =! semilla && tokenizar ((selector = compilado.selector || selector));

	resultados = resultados || [];

	// Intente minimizar las operaciones si solo hay un selector en la lista y no hay semilla
	// (el último de los cuales nos garantiza contexto)
	if (match.length === 1) {

		// Reducir el contexto si el selector compuesto principal es un ID
		tokens = coincidir [0] = coincidir [0] .slice (0);
		if (tokens.length> 2 && (token = tokens [0]) .type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative [tokens [1] .type]) {

			context = (Expr.find ["ID"] (token.matches [0]
				.replace (runescape, funescape), contexto) || []) [0];
			if (! context) {
				devolver resultados;

			// Los comparadores precompilados seguirán verificando la ascendencia, así que suba de nivel
			} else if (compilado) {
				context = context.parentNode;
			}

			selector = selector.slice (tokens.shift (). value.length);
		}

		// Obtener un conjunto de semillas para la coincidencia de derecha a izquierda
		i = matchExpr ["needsContext"] .test (selector)? 0: tokens.length;
		mientras yo-- ) {
			token = tokens [i];

			// Abortar si golpeamos un combinador
			if (Expr.relative [(type = token.type)]) {
				romper;
			}
			if ((buscar = Expr.find [tipo])) {

				// Búsqueda, ampliando el contexto para los principales combinadores de hermanos
				si ((semilla = encontrar (
					token.matches [0] .replace (runescape, funescape),
					rsibling.test (tokens [0] .type) && testContext (context.parentNode) ||
						contexto
				))) {

					// Si la semilla está vacía o no quedan tokens, podemos regresar antes
					tokens.splice (i, 1);
					selector = seed.length && toSelector (tokens);
					if (! selector) {
						push.apply (resultados, semilla);
						devolver resultados;
					}

					romper;
				}
			}
		}
	}

	// Compila y ejecuta una función de filtrado si no se proporciona una
	// Proporcione `match` para evitar la retoquenización si modificamos el selector de arriba
	(compilado || compilar (selector, emparejar)) (
		semilla,
		contexto,
		! documentIsHTML,
		resultados,
		! contexto || rsibling.test (selector) && testContext (context.parentNode) || contexto
	);
	devolver resultados;
};

// Asignaciones únicas

// Clasificar estabilidad
support.sortStable = expando.split ("") .sort (sortOrder) .join ("") === expandir;

// Soporte: Chrome 14-35 +
// Asume siempre duplicados si no se pasan a la función de comparación
support.detectDuplicates = !! hasDuplicate;

// Inicializar con el documento predeterminado
setDocument ();

// Soporte: Webkit <537.32 - Safari 6.0.3 / Chrome 25 (corregido en Chrome 27)
// Los nodos separados se siguen * de manera confusa * entre sí *
support.sortDetached = assert (function (el) {

	// Debería devolver 1, pero devuelve 4 (siguiente)
	return el.compareDocumentPosition (document.createElement ("conjunto de campos")) & 1;
});

// Soporte: IE <8
// Evita la "interpolación" de atributos / propiedades
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if (! assert (function (el) {
	el.innerHTML = "<a href='#'> </a>";
	return el.firstChild.getAttribute ("href") === "#";
})) {
	addHandle ("tipo | href | altura | ancho", función (elem, nombre, isXML) {
		if (! isXML) {
			return elem.getAttribute (name, name.toLowerCase () === "type"? 1: 2);
		}
	});
}

// Soporte: IE <9
// Usa defaultValue en lugar de getAttribute ("valor")
if (! support.attributes ||! assert (function (el) {
	el.innerHTML = "<entrada />";
	el.firstChild.setAttribute ("valor", "");
	return el.firstChild.getAttribute ("valor") === "";
})) {
	addHandle ("valor", función (elem, _name, isXML) {
		if (! isXML && elem.nodeName.toLowerCase () === "input") {
			return elem.defaultValue;
		}
	});
}

// Soporte: IE <9
// Usa getAttributeNode para buscar booleanos cuando getAttribute miente
if (! assert (function (el) {
	return el.getAttribute ("deshabilitado") == null;
})) {
	addHandle (booleanos, función (elem, nombre, isXML) {
		var val;
		if (! isXML) {
			return elem [nombre] === verdadero? name.toLowerCase ():
				(val = elem.getAttributeNode (nombre)) && val.specified?
					val.value:
					nulo;
		}
	});
}

volver Sizzle;

} )( ventana );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Obsoleto
jQuery.expr [":"] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = función (elem, dir, hasta) {
	var coincidente = [],
		truncar = hasta! == indefinido;

	while ((elem = elem [dir]) && elem.nodeType! == 9) {
		if (elem.nodeType === 1) {
			if (truncar && jQuery (elem) .is (hasta)) {
				romper;
			}
			emparejado.push (elem);
		}
	}
	retorno emparejado;
};


var hermanos = función (n, elem) {
	var emparejado = [];

	para (; n; n = n. Hermano siguiente) {
		if (n.nodeType === 1 && n! == elem) {
			emparejado.push (n);
		}
	}

	retorno emparejado;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName (elem, nombre) {

  return elem.nodeName && elem.nodeName.toLowerCase () === nombre.toLowerCase ();

};
var rsingleTag = (/ ^ <([az] [^ \ / \ 0>: \ x20 \ t \ r \ n \ f] *) [\ x20 \ t \ r \ n \ f] * \ /?> ( ?: <\ / \ 1> |) $ / i);



// Implementar la misma funcionalidad para filtrar y no
función aventar (elementos, calificador, no) {
	if (isFunction (calificador)) {
		return jQuery.grep (elementos, función (elem, i) {
			return !! qualifier.call (elem, i, elem)! == not;
		});
	}

	// Elemento único
	if (qualifier.nodeType) {
		return jQuery.grep (elementos, función (elem) {
			return (elem === calificador)! == no;
		});
	}

	// Arraylike de elementos (jQuery, argumentos, Array)
	if (typeof qualifier! == "string") {
		return jQuery.grep (elementos, función (elem) {
			return (indexOf.call (calificador, elem)> -1)! == no;
		});
	}

	// Filtrado directamente para selectores simples y complejos
	return jQuery.filter (calificador, elementos, no);
}

jQuery.filter = function (expr, elems, not) {
	var elem = elems [0];

	si no ) {
		expr = ": no (" + expr + ")";
	}

	if (elems.length === 1 && elem.nodeType === 1) {
		return jQuery.find.matchesSelector (elem, expr)? [elem]: [];
	}

	return jQuery.find.matches (expr, jQuery.grep (elems, function (elem) {
		return elem.nodeType === 1;
	}));
};

jQuery.fn.extend ({
	encontrar: función (selector) {
		var i, ret,
			len = this.length,
			self = esto;

		if (typeof selector! == "string") {
			devuelve this.pushStack (jQuery (selector) .filter (function () {
				para (i = 0; i <len; i ++) {
					if (jQuery.contains (self [i], this)) {
						devuelve verdadero;
					}
				}
			}));
		}

		ret = this.pushStack ([]);

		para (i = 0; i <len; i ++) {
			jQuery.find (selector, self [i], ret);
		}

		return len> 1? jQuery.uniqueSort (ret): ret;
	},
	filtro: función (selector) {
		return this.pushStack (winnow (this, selector || [], false));
	},
	no: función (selector) {
		return this.pushStack (aventar (esto, selector || [], verdadero));
	},
	es: función (selector) {
		volver !! aventar
			esta,

			// Si se trata de un selector posicional / relativo, verifique la pertenencia al conjunto devuelto
			// entonces $ ("p: first"). is ("p: last") no devolverá verdadero para un documento con dos "p".
			typeof selector === "cadena" && rneedsContext.test (selector)?
				jQuery (selector):
				selector || [],
			falso
		).longitud;
	}
});


// Inicializar un objeto jQuery


// Una referencia central a la raíz jQuery (documento)
var rootjQuery,

	// Una forma sencilla de comprobar cadenas HTML
	// Priorice #id sobre <tag> para evitar XSS a través de location.hash (# 9521)
	// Reconocimiento estricto de HTML (# 11290: debe comenzar con <)
	// Atajo simple #id case para velocidad
	rquickExpr = / ^ (?: \ s * (<[\ w \ W] +>) [^>] * | # ([\ w -] +)) $ /,

	init = jQuery.fn.init = función (selector, contexto, raíz) {
		var match, elem;

		// MANEJO: $ (""), $ (nulo), $ (indefinido), $ (falso)
		if (! selector) {
			devuelve esto;
		}

		// El método init () acepta un rootjQuery alternativo
		// para que la migración admita jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Manejar cadenas HTML
		if (typeof selector === "cadena") {
			if (selector [0] === "<" &&
				selector [selector.length - 1] === ">" &&
				selector.length> = 3) {

				// Suponga que las cadenas que comienzan y terminan con <> son HTML y omita la verificación de expresiones regulares
				coincidencia = [nulo, selector, nulo];

			} más {
				coincidencia = rquickExpr.exec (selector);
			}

			// Coincide con html o asegúrese de que no se especifique ningún contexto para #id
			si (coincide con && (coincide con [1] ||! contexto)) {

				// MANEJO: $ (html) -> $ (matriz)
				si (coincide con [1]) {
					context = instancia de contexto de jQuery? contexto [0]: contexto;

					// La opción para ejecutar scripts es verdadera para retrocompatibilidad
					// Deje que se lance el error intencionalmente si parseHTML no está presente
					jQuery.merge (esto, jQuery.parseHTML (
						coincidir [1],
						context && context.nodeType? context.ownerDocument || contexto: documento,
						cierto
					));

					// MANEJO: $ (html, props)
					if (rsingleTag.test (coincide con [1]) && jQuery.isPlainObject (contexto)) {
						para (coincidencia en contexto) {

							// Las propiedades del contexto se llaman como métodos si es posible
							if (isFunction (este [partido])) {
								este [partido] (contexto [partido]);

							// ... y de lo contrario establecer como atributos
							} más {
								this.attr (coincidencia, contexto [coincidencia]);
							}
						}
					}

					devuelve esto;

				// MANIJA: $ (# id)
				} más {
					elem = document.getElementById (coincide con [2]);

					si (elem) {

						// Inyecta el elemento directamente en el objeto jQuery
						esto [0] = elem;
						this.length = 1;
					}
					devuelve esto;
				}

			// MANEJO: $ (expr, $ (...))
			} else if (! context || context.jquery) {
				return (contexto || raíz) .find (selector);

			// MANEJO: $ (expr, contexto)
			// (que es equivalente a: $ (contexto) .find (expr)
			} más {
				devuelve this.constructor (contexto) .find (selector);
			}

		// MANIJA: $ (DOMElement)
		} else if (selector.nodeType) {
			este [0] = selector;
			this.length = 1;
			devuelve esto;

		// MANIJA: $ (función)
		// Atajo para documento listo
		} else if (isFunction (selector)) {
			return root.ready! == undefined?
				root.ready (selector):

				// Ejecutar inmediatamente si listo no está presente
				selector (jQuery);
		}

		return jQuery.makeArray (selector, esto);
	};

// Dar a la función init el prototipo de jQuery para una instanciación posterior
init.prototype = jQuery.fn;

// Inicializar la referencia central
rootjQuery = jQuery (documento);


var rparentsprev = / ^ (?: padres | anterior (?: Hasta | Todos)) /,

	// Métodos garantizados para producir un conjunto único cuando se parte de un conjunto único
	GuaranteUnique = {
		niños: cierto,
		contenido: verdadero,
		siguiente: cierto,
		prev: cierto
	};

jQuery.fn.extend ({
	tiene: función (objetivo) {
		var objetivos = jQuery (objetivo, esto),
			l = objetivos.longitud;

		devuelve this.filter (function () {
			var i = 0;
			para (; i <l; i ++) {
				if (jQuery.contains (this, objetivos [i])) {
					devuelve verdadero;
				}
			}
		});
	},

	más cercano: función (selectores, contexto) {
		var cur,
			i = 0,
			l = esta.longitud,
			coincidente = [],
			objetivos = tipo de selectores! == "cadena" && jQuery (selectores);

		// Los selectores posicionales nunca coinciden, ya que no hay contexto _selection_
		if (! rneedsContext.test (selectores)) {
			para (; i <l; i ++) {
				para (cur = this [i]; cur && cur! == context; cur = cur.parentNode) {

					// Omitir siempre fragmentos de documentos
					if (cur.nodeType <11 && (objetivos?
						target.index (cur)> -1:

						// No pases elementos no a Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector (cur, selectores))) {

						emparejado.push (cur);
						romper;
					}
				}
			}
		}

		return this.pushStack (coincidente.longitud> 1? jQuery.uniqueSort (coincidente): coincidente);
	},

	// Determinar la posición de un elemento dentro del conjunto
	índice: función (elem) {

		// Sin argumento, índice de retorno en padre
		si (! elem) {
			return (este [0] && este [0] .parentNode)? this.first (). prevAll (). length: -1;
		}

		// Índice en selector
		if (typeof elem === "cadena") {
			return indexOf.call (jQuery (elem), this [0]);
		}

		// Localiza la posición del elemento deseado
		return indexOf.call (esto,

			// Si recibe un objeto jQuery, se usa el primer elemento
			elem.jquery? elem [0]: elem
		);
	},

	agregar: función (selector, contexto) {
		devuelve this.pushStack (
			jQuery.uniqueSort (
				jQuery.merge (this.get (), jQuery (selector, contexto))
			)
		);
	},

	addBack: function (selector) {
		devolver this.add (selector == null?
			this.prevObject: this.prevObject.filter (selector)
		);
	}
});

función hermano (cur, dir) {
	while ((cur = cur [dir]) && cur.nodeType! == 1) {}
	return cur;
}

jQuery.each ({
	padre: función (elem) {
		var parent = elem.parentNode;
		return parent && parent.nodeType! == 11? padre: nulo;
	},
	padres: función (elem) {
		return dir (elem, "parentNode");
	},
	padresHasta: función (elem, _i, hasta) {
		return dir (elem, "parentNode", hasta);
	},
	siguiente: función (elem) {
		return hermano (elem, "nextSibling");
	},
	prev: function (elem) {
		return hermano (elem, "hermano anterior");
	},
	nextAll: function (elem) {
		return dir (elem, "nextSibling");
	},
	prevAll: function (elem) {
		return dir (elem, "hermano anterior");
	},
	nextUntil: function (elem, _i, until) {
		return dir (elem, "nextSibling", hasta);
	},
	prevUntil: function (elem, _i, until) {
		return dir (elem, "hermano anterior", hasta);
	},
	hermanos: función (elem) {
		devolver hermanos ((elem.parentNode || {}) .firstChild, elem);
	},
	hijos: función (elem) {
		hermanos de retorno (elem.firstChild);
	},
	contenido: function (elem) {
		if (elem.contentDocument! = null &&

			// Soporte: IE 11+
			// <object> elementos sin atributo `data` tienen un objeto
			// `contentDocument` con un prototipo` null`.
			getProto (elem.contentDocument)) {

			return elem.contentDocument;
		}

		// Soporte: solo IE 9-11, solo iOS 7, navegador Android <= 4.3 solo
		// Trate el elemento de la plantilla como uno normal en los navegadores que
		// no lo soportas.
		if (nodeName (elem, "plantilla")) {
			elem = elem.content || elem;
		}

		return jQuery.merge ([], elem.childNodes);
	}
}, función (nombre, fn) {
	jQuery.fn [nombre] = función (hasta, selector) {
		var emparejado = jQuery.map (esto, fn, hasta);

		if (name.slice (-5)! == "Hasta") {
			selector = hasta;
		}

		if (selector && typeof selector === "cadena") {
			emparejado = jQuery.filter (selector, emparejado);
		}

		if (this.length> 1) {

			// Eliminar duplicados
			if (! GuaranteUnique [nombre]) {
				jQuery.uniqueSort (coincidente);
			}

			// Orden inverso para padres * y prev-derivados
			if (rparentsprev.test (nombre)) {
				emparejado.reverse ();
			}
		}

		return this.pushStack (coincidente);
	};
});
var rnothtmlwhite = (/ [^ \ x20 \ t \ r \ n \ f] + / g);



// Convertir opciones con formato de cadena en opciones con formato de objeto
function createOptions (opciones) {
	var object = {};
	jQuery.each (options.match (rnothtmlwhite) || [], function (_, flag) {
		objeto [bandera] = verdadero;
	});
	devolver objeto;
}

/ *
 * Cree una lista de devolución de llamada utilizando los siguientes parámetros:
 *
 * opciones: una lista opcional de opciones separadas por espacios que cambiarán cómo
 * la lista de devolución de llamada se comporta o un objeto de opción más tradicional
 *
 * De forma predeterminada, una lista de devolución de llamada actuará como una lista de devolución de llamada de evento y puede
 * "disparado" varias veces.
 *
 * Posibles opciones:
 *
 * una vez: asegurará que la lista de devolución de llamada solo se pueda activar una vez (como un aplazado)
 *
 * memoria: realizará un seguimiento de los valores anteriores y llamará a cualquier devolución de llamada agregada
 * después de que la lista se haya disparado de inmediato con la última "memorizada"
 * valores (como un diferido)
 *
 * único: asegurará que una devolución de llamada solo se pueda agregar una vez (no hay duplicados en la lista)
 *
 * stopOnFalse: interrumpe las llamadas cuando una devolución de llamada devuelve falso
 *
 * /
jQuery.Callbacks = function (opciones) {

	// Convierta las opciones de formato de cadena a formato de objeto si es necesario
	// (primero revisamos el caché)
	opciones = tipo de opciones === "cadena"?
		createOptions (opciones):
		jQuery.extend ({}, opciones);

	var // Marcar para saber si la lista se está activando actualmente
		disparo,

		// Último valor de disparo para listas no olvidables
		memoria,

		// Marcar para saber si la lista ya se disparó
		despedido,

		// Bandera para evitar disparos
		bloqueado

		// Lista de devolución de llamada real
		lista = [],

		// Cola de datos de ejecución para listas repetibles
		cola = [],

		// Índice de devolución de llamada que se activa actualmente (modificado por agregar / eliminar según sea necesario)
		firingIndex = -1,

		// Devolver llamadas
		fuego = función () {

			// Hacer cumplir el disparo único
			bloqueado = bloqueado || options.once;

			// Ejecuta devoluciones de llamada para todas las ejecuciones pendientes,
			// respetar las anulaciones de firingIndex y los cambios de tiempo de ejecución
			disparado = disparando = verdadero;
			para (; queue.length; firingIndex = -1) {
				memoria = queue.shift ();
				while (++ firingIndex <list.length) {

					// Ejecute la devolución de llamada y verifique la terminación anticipada
					if (list [firingIndex] .apply (memoria [0], memoria [1]) === falso &&
						options.stopOnFalse) {

						// Salta al final y olvida los datos para que .add no se vuelva a disparar
						firingIndex = list.length;
						memoria = falso;
					}
				}
			}

			// Olvida los datos si hemos terminado con ellos
			if (! options.memory) {
				memoria = falso;
			}

			disparo = falso;

			// Limpia si hemos terminado de disparar para siempre
			si (bloqueado) {

				// Mantener una lista vacía si tenemos datos para futuras llamadas de adición
				si (memoria) {
					lista = [];

				// De lo contrario, este objeto se gasta
				} más {
					lista = "";
				}
			}
		},

		// Objeto de devolución de llamada real
		self = {

			// Agrega una devolución de llamada o una colección de devoluciones de llamada a la lista
			agregar: función () {
				if (lista) {

					// Si tenemos memoria de una ejecución pasada, deberíamos disparar después de agregar
					if (memoria &&! disparando) {
						firingIndex = list.length - 1;
						queue.push (memoria);
					}

					(función agregar (args) {
						jQuery.each (argumentos, función (_, arg) {
							if (isFunction (arg)) {
								if (! options.unique ||! self.has (arg)) {
									list.push (arg);
								}
							} else if (arg && arg.length && toType (arg)! == "cadena") {

								// Inspeccionar de forma recursiva
								agregar (arg);
							}
						});
					}) (argumentos);

					if (memoria &&! disparando) {
						fuego();
					}
				}
				devuelve esto;
			},

			// Eliminar una devolución de llamada de la lista
			eliminar: función () {
				jQuery.each (argumentos, función (_, arg) {
					var index;
					while ((índice = jQuery.inArray (arg, lista, índice))> -1) {
						list.splice (índice, 1);

						// Manejar índices de disparo
						if (índice <= firingIndex) {
							firingIndex--;
						}
					}
				});
				devuelve esto;
			},

			// Comprueba si una devolución de llamada determinada está en la lista.
			// Si no se proporciona ningún argumento, devuelve si la lista tiene devoluciones de llamada adjuntas.
			tiene: función (fn) {
				volver fn?
					jQuery.inArray (fn, lista)> -1:
					list.length> 0;
			},

			// Elimina todas las devoluciones de llamada de la lista
			vacío: función () {
				if (lista) {
					lista = [];
				}
				devuelve esto;
			},

			// Deshabilitar .fire y .add
			// Abortar cualquier ejecución actual / pendiente
			// Borrar todas las devoluciones de llamada y valores
			inhabilitar: función () {
				bloqueado = cola = [];
				lista = memoria = "";
				devuelve esto;
			},
			inhabilitado: función () {
				volver! lista;
			},

			// Deshabilitar .fire
			// También deshabilitar .add a menos que tengamos memoria (ya que no tendría ningún efecto)
			// Abortar las ejecuciones pendientes
			bloqueo: función () {
				bloqueado = cola = [];
				if (! memory &&! disparando) {
					lista = memoria = "";
				}
				devuelve esto;
			},
			bloqueado: función () {
				volver !! bloqueado;
			},

			// Llamar a todas las devoluciones de llamada con el contexto y los argumentos dados
			fireWith: function (context, args) {
				si (! bloqueado) {
					argumentos = argumentos || [];
					args = [contexto, args.slice? args.slice (): args];
					queue.push (argumentos);
					si (! disparando) {
						fuego();
					}
				}
				devuelve esto;
			},

			// Llamar a todas las devoluciones de llamada con los argumentos dados
			fuego: función () {
				self.fireWith (esto, argumentos);
				devuelve esto;
			},

			// Para saber si las devoluciones de llamada ya se han llamado al menos una vez
			despedido: function () {
				volver !! despedido;
			}
		};

	volver a sí mismo;
};


función Identidad (v) {
	return v;
}
función Thrower (ex) {
	tirar ex;
}

function adoptValue (valor, resolver, rechazar, noValue) {
	método var;

	tratar {

		// Verifique primero el aspecto de la promesa para privilegiar el comportamiento sincrónico
		if (valor && esFunción ((método = valor.promesa))) {
			method.call (valor) .done (resolver) .fail (rechazar);

		// Otras thenables
		} else if (value && isFunction ((method = value.then))) {
			method.call (valorar, resolver, rechazar);

		// Otros non-thenables
		} más {

			// Controla los argumentos de `resolve` dejando que Array # slice convierta el booleano` noValue` en un entero:
			// * falso: [valor] .slice (0) => resolver (valor)
			// * verdadero: [valor] .slice (1) => resolver ()
			resolve.apply (undefined, [value] .slice (noValue));
		}

	// Para Promesas / A +, convierta las excepciones en rechazos
	// Dado que jQuery.when no desenvuelve las posibilidades, podemos omitir las comprobaciones adicionales que aparecen en
	// Diferido # luego para suprimir condicionalmente el rechazo.
	} captura (valor) {

		// Soporte: solo Android 4.0
		// Funciones de modo estricto invocadas sin .call / .apply obtienen contexto de objeto global
		rechazar.aplicar (indefinido, [valor]);
	}
}

jQuery.extend ({

	Diferido: función (func) {
		var tuplas = [

				// acción, agregar escucha, devoluciones de llamada,
				// ... luego manejadores, índice de argumento, [estado final]
				["notificar", "progreso", jQuery.Callbacks ("memoria"),
					jQuery.Callbacks ("memoria"), 2],
				["resolver", "hecho", jQuery.Callbacks ("memoria una vez"),
					jQuery.Callbacks ("una vez memoria"), 0, "resuelto"],
				["rechazar", "fallar", jQuery.Callbacks ("memoria una vez"),
					jQuery.Callbacks ("una vez memoria"), 1, "rechazado"]
			],
			estado = "pendiente",
			promesa = {
				función estatal() {
					estado de retorno;
				},
				siempre: función () {
					diferido.done (argumentos) .fail (argumentos);
					devuelve esto;
				},
				"captura": función (fn) {
					devolver promesa, entonces (nulo, fn);
				},

				// Mantener la tubería para retrocompatibilidad
				pipe: function (/ * fnDone, fnFail, fnProgress * /) {
					var fns = argumentos;

					return jQuery.Deferred (funct ion (newDefer) {
						jQuery.each (tuplas, función (_i, tupla) {

							// Asignar tuplas (progreso, hecho, error) a argumentos (hecho, error, progreso)
							var fn = isFunction (fns [tupla [4]]) && fns [tupla [4]];

							// deferred.progress (function () {enlazar a newDefer o newDefer.notify})
							// diferido.done (función () {enlazar a newDefer o newDefer.resolve})
							// deferred.fail (function () {enlazar con newDefer o newDefer.reject})
							diferido [tupla [1]] (función () {
								var devuelto = fn && fn.apply (esto, argumentos);
								if (devuelto && isFunction (devuelto.promise)) {
									devuelto.promise ()
										.progreso (newDefer.notify)
										.done (newDefer.resolve)
										.fail (newDefer.reject);
								} más {
									newDefer [tupla [0] + "Con"] (
										esta,
										fn? [devuelto]: argumentos
									);
								}
							});
						});
						fns = nulo;
					}) .promise ();
				},
				luego: función (onFuldered, onRejected, onProgress) {
					var maxDepth = 0;
					función resolver (profundidad, diferido, controlador, especial) {
						función de retorno () {
							var that = this,
								args = argumentos,
								mightThrow = function () {
									var regresó, entonces;

									// Soporte: Promesas / A + sección 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignorar los intentos de doble resolución
									if (profundidad <maxDepth) {
										regreso;
									}

									devuelto = manejador.apply (eso, argumentos);

									// Soporte: Promesas / A + sección 2.3.1
									// https://promisesaplus.com/#point-48
									if (devuelto === deferred.promise ()) {
										lanzar nuevo TypeError ("Auto-resolución Thenable");
									}

									// Soporte: Promesas / A + secciones 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Recuperar `entonces` solo una vez
									luego = devuelto &&

										// Soporte: Promesas / A + sección 2.3.4
										// https://promisesaplus.com/#point-64
										// Verifique solo objetos y funciones para determinar la posibilidad
										(typeof devuelto === "objeto" ||
											typeof devuelto === "función") &&
										regresó.entonces;

									// Manejar un thenable devuelto
									if (isFunction (entonces)) {

										// Procesadores especiales (notificar) solo espere la resolución
										if (especial) {
											luego llame(
												regresó
												resolver (maxDepth, diferido, Identidad, especial),
												resolver (maxDepth, diferido, lanzador, especial)
											);

										// Los procesadores normales (resolver) también se conectan al progreso
										} más {

											// ... e ignore los valores de resolución más antiguos
											maxDepth ++;

											luego llame(
												regresó
												resolver (maxDepth, diferido, Identidad, especial),
												resolver (maxDepth, diferido, lanzador, especial),
												resolver (maxDepth, diferido, identidad,
													diferido.notifyWith)
											);
										}

									// Maneja todos los demás valores devueltos
									} más {

										// Solo los manejadores sustitutos transmiten contexto
										// y varios valores (comportamiento sin especificaciones)
										if (controlador! == Identidad) {
											eso = indefinido;
											args = [devuelto];
										}

										// Procesar el (los) valor (es)
										// El proceso predeterminado es resolver
										(especial || diferido.resolveWith) (eso, argumentos);
									}
								},

								// Solo los procesadores normales (resuelven) detectan y rechazan excepciones
								proceso = especial?
									mightThrow:
									function () {
										tratar {
											mightThrow ();
										} captura (e) {

											if (jQuery.Deferred.exceptionHook) {
												jQuery.Deferred.exceptionHook (e,
													process.stackTrace);
											}

											// Soporte: Promesas / A + sección 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignorar las excepciones posteriores a la resolución
											if (profundidad + 1> = maxDepth) {

												// Solo los manejadores sustitutos transmiten contexto
												// y varios valores (comportamiento sin especificaciones)
												if (manejador! == Lanzador) {
													eso = indefinido;
													args = [e];
												}

												deferred.rejectWith (eso, argumentos);
											}
										}
									};

							// Soporte: Promesas / A + sección 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Resolver las promesas inmediatamente para esquivar el falso rechazo de
							// errores posteriores
							if (profundidad) {
								proceso();
							} más {

								// Llamar a un gancho opcional para registrar la pila, en caso de excepción
								// ya que de lo contrario se pierde cuando la ejecución se vuelve asincrónica
								if (jQuery.Deferred.getStackHook) {
									process.stackTrace = jQuery.Deferred.getStackHook ();
								}
								window.setTimeout (proceso);
							}
						};
					}

					return jQuery.Deferred (function (newDefer) {

						// progress_handlers.add (...)
						tuplas [0] [3] .add (
							resolver(
								0,
								newDefer,
								isFunction (onProgress)?
									en progreso :
									Identidad,
								newDefer.notifyWith
							)
						);

						// manipuladores_cumplidos.add (...)
						tuplas [1] [3] .add (
							resolver(
								0,
								newDefer,
								isFunction (onFuldered)?
									en Cumplido:
									Identidad
							)
						);

						// manipuladores_rechazados.add (...)
						tuplas [2] [3] .add (
							resolver(
								0,
								newDefer,
								isFunction (onRejected)?
									onRejected:
									Lanzador
							)
						);
					}) .promise ();
				},

				// Obtenga una promesa para este aplazado
				// Si se proporciona obj, el aspecto de promesa se agrega al objeto
				promesa: función (obj) {
					return obj! = null? jQuery.extend (obj, promesa): promesa;
				}
			},
			diferido = {};

		// Agregar métodos específicos de la lista
		jQuery.each (tuplas, función (i, tupla) {
			var list = tuple [2],
				stateString = tupla [5];

			// promesa.progreso = lista.add
			// promise.done = list.add
			// promise.fail = list.add
			promesa [tupla [1]] = lista.add;

			// Manejar estado
			if (stateString) {
				list.add (
					function () {

						// estado = "resuelto" (es decir, cumplido)
						// estado = "rechazado"
						state = stateString;
					},

					// rechazadas_callbacks.disable
					// devoluciones_de_llamadas.disable
					tuplas [3 - i] [2] .disable,

					// manipuladores_rechazados.disable
					// manipuladores_cumplidos.disable
					tuplas [3 - i] [3] .disable,

					// progress_callbacks.lock
					tuplas [0] [2] .lock,

					// progress_handlers.lock
					tuplas [0] [3] .lock
				);
			}

			// progress_handlers.fire
			// manipuladores_cumplidos.fire
			// manipuladores_rechazados.fire
			list.add (tupla [3] .fire);

			// deferred.notify = function () {deferred.notifyWith (...)}
			// deferred.resolve = function () {deferred.resolveWith (...)}
			// deferred.reject = function () {deferred.rejectWith (...)}
			diferido [tupla [0]] = función () {
				diferido [tupla [0] + "Con"] (esto === diferido? indefinido: esto, argumentos);
				devuelve esto;
			};

			// diferido.notifyWith = list.fireWith
			// diferido.resolveWith = list.fireWith
			// diferido.rejectWith = list.fireWith
			diferido [tupla [0] + "Con"] = list.fireWith;
		});

		// Haz lo diferido una promesa
		promesa.promise (diferido);

		// Llamar a la función dada si existe
		if (func) {
			func.call (diferido, diferido);
		}

		// ¡Todo listo!
		retorno diferido;
	},

	// Ayudante diferido
	cuando: function (singleValue) {
		var

			// recuento de subordinados incompletos
			restante = argumentos.longitud,

			// recuento de argumentos sin procesar
			i = restante,

			// datos de cumplimiento subordinados
			resolveContexts = Matriz (i),
			resolveValues ​​= slice.call (argumentos),

			// el maestro diferido
			maestro = jQuery.Deferred (),

			// fábrica de devolución de llamada subordinada
			updateFunc = function (i) {
				función de retorno (valor) {
					resolveContexts [i] = esto;
					resolveValues ​​[i] = argumentos.longitud> 1? slice.call (argumentos): valor;
					si (! (--restante)) {
						master.resolveWith (resolveContexts, resolveValues);
					}
				};
			};

		// Se adoptan argumentos simples y vacíos como Promise.resolve
		si (restante <= 1) {
			adoptValue (singleValue, master.done (  updateFunc (i)) .resolve, master.reject,
				!restante );

			// Usa .then () para desenvolver las thenables secundarias (cf. gh-3000)
			if (master.state () === "pendiente" ||
				isFunction (resolveValues ​​[i] && resolveValues ​​[i]. then)) {

				volver maestro, luego ();
			}
		}

		// Se agregan múltiples argumentos como Promise.all elementos de la matriz
		mientras yo-- ) {
			adoptValue (resolveValues ​​[i], updateFunc (i), master.reject);
		}

		return master.promise ();
	}
});


// Estos suelen indicar un error del programador durante el desarrollo,
// advertir sobre ellos lo antes posible en lugar de tragarlos por defecto.
var rerrorNames = / ^ (Eval | Interno | Rango | Referencia | Sintaxis | Tipo | URI) Error $ /;

jQuery.Deferred.exceptionHook = function (error, stack) {

	// Soporte: IE 8 - 9 solamente
	// La consola existe cuando las herramientas de desarrollo están abiertas, lo que puede suceder en cualquier momento
	if (window.console && window.console.warn && error && rerrorNames.test (error.name)) {
		window.console.warn ("jQuery.Excepción diferida:" + error.message, error.stack, stack);
	}
};




jQuery.readyException = function (error) {
	window.setTimeout (function () {
		lanzar error;
	});
};




// El diferido usado en DOM listo
var readyList = jQuery.Deferred ();

jQuery.fn.ready = function (fn) {

	readyList
		.entonces (fn)

		// Envuelve jQuery.readyException en una función para que la búsqueda
		// ocurre en el momento del manejo de errores en lugar de la devolución de llamada
		// registro.
		.catch (función (error) {
			jQuery.readyException (error);
		});

	devuelve esto;
};

jQuery.extend ({

	// ¿El DOM está listo para usarse? Establecer en verdadero una vez que ocurra.
	isReady: falso,

	// Un contador para rastrear cuántos elementos esperar antes
	// el evento listo se dispara. Ver # 6781
	readyWait: 1,

	// Manejar cuando el DOM esté listo
	listo: función (esperar) {

		// Abortar si hay retenciones pendientes o ya estamos listos
		if (esperar === cierto? --jQuery.readyWait: jQuery.isReady) {
			regreso;
		}

		// Recuerda que el DOM está listo
		jQuery.isReady = verdadero;

		// Si se dispara un evento DOM Ready normal, disminuya y espere si es necesario
		if (espera! == verdadero && --jQuery.readyWait> 0) {
			regreso;
		}

		// Si hay funciones vinculadas, ejecutar
		readyList.resolveWith (documento, [jQuery]);
	}
});

jQuery.ready.then = readyList.then;

// El manejador de eventos listo y el método de autolimpieza
función completada () {
	document.removeEventListener ("DOMContentLoaded", completado);
	window.removeEventListener ("cargar", completado);
	jQuery.ready ();
}

// Detectar casos en los que se llama a $ (document) .ready ()
// después de que el evento del navegador ya haya ocurrido.
// Soporte: IE <= 9 - 10 solamente
// El IE más antiguo a veces indica "interactivo" demasiado pronto
if (document.readyState === "complete" ||
	(document.readyState! == "loading" &&! document.documentElement.doScroll)) {

	// Manejarlo de forma asincrónica para permitir que los scripts tengan la oportunidad de retrasarse
	window.setTimeout (jQuery.ready);

} más {

	// Usa la práctica devolución de llamada de eventos
	document.addEventListener ("DOMContentLoaded", completado);

	// Una alternativa a window.onload, que siempre funcionará
	window.addEventListener ("cargar", completado);
}




// Método multifuncional para obtener y establecer valores de una colección
// El valor / s se puede ejecutar opcionalmente si es una función
var access = function (elems, fn, key, value, chainable, emptyGet, raw) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Establece muchos valores
	if (toType (clave) === "objeto") {
		encadenable = verdadero;
		para (yo en clave) {
			acceso (elems, fn, i, key [i], true, emptyGet, raw);
		}

	// Establece un valor
	} más si (valor! == indefinido) {
		encadenable = verdadero;

		if (! isFunction (valor)) {
			crudo = verdadero;
		}

		if (masivo) {

			// Las operaciones masivas se ejecutan en todo el conjunto
			si (crudo) {
				fn.call (elems, valor);
				fn = nulo;

			// ... excepto al ejecutar valores de función
			} más {
				bulk = fn;
				fn = función (elem, _key, value) {
					return bulk.call (jQuery (elem), valor);
				};
			}
		}

		si (fn) {
			para (; i <len; i ++) {
				fn
					elems [i], key, raw?
					valor:
					value.call (elems [i], i, fn (elems [i], key))
				);
			}
		}
	}

	if (encadenable) {
		devolver elems;
	}

	// Obtiene
	if (masivo) {
		return fn.call (elems);
	}

	volver len? fn (elems [0], clave): emptyGet;
};


// Coincide con la cuerda discontinua para camelizar
var rmsPrefix = / ^ - ms- /,
	rdashAlpha = / - ([az]) / g;

// Usado por camelCase como devolución de llamada para reemplazar ()
function fcamelCase (_todos, letra) {
	return letter.toUpperCase ();
}

// Convertir punteado en camelCase; utilizado por los módulos css y de datos
// Soporte: IE <= 9 - 11, Edge 12 - 15
// Microsoft olvidó usar el prefijo de su proveedor (# 9572)
function camelCase (string) {
	return string.replace (rmsPrefix, "ms-") .replace (rdashAlpha, fcamelCase);
}
var acceptData = function (propietario) {

	// Acepta solo:
	// - Nodo
	// - Nodo.ELEMENT_NODE
	// - Nodo.DOCUMENT_NODE
	// - Objeto
	// - Ninguna
	return owner.nodeType === 1 || owner.nodeType === 9 || ! (+ owner.nodeType);
};




function Data () {
	this.expando = jQuery.expando + Data.uid ++;
}

Data.uid = 1;

Data.prototype = {

	caché: función (propietario) {

		// Comprueba si el objeto propietario ya tiene caché
		var value = owner [this.expando];

		// Si no, crea uno
		si (! valor) {
			valor = {};

			// Podemos aceptar datos para nodos que no son elementos en navegadores modernos,
			// pero no deberíamos, ver # 8335.
			// Devuelve siempre un objeto vacío.
			if (acceptData (propietario)) {

				// Si se trata de un nodo que es poco probable que esté en cadena o en bucle
				// usa una asignación simple
				if (owner.nodeType) {
					propietario [this.expando] = valor;

				// De lo contrario, asegúrelo en una propiedad no enumerable
				// configurable debe ser verdadero para permitir que la propiedad sea
				// eliminado cuando se eliminan los datos
				} más {
					Object.defineProperty (propietario, this.expando, {
						valor: valor,
						configurable: verdadero
					});
				}
			}
		}

		valor de retorno;
	},
	conjunto: función (propietario, datos, valor) {
		var prop,
			cache = this.cache (propietario);

		// Manejar: [propietario, clave, valor] argumentos
		// Utilice siempre la clave camelCase (gh-2257)
		if (tipo de datos === "cadena") {
			caché [camelCase (datos)] = valor;

		// Manejar: [propietario, {propiedades}] argumentos
		} más {

			// Copie las propiedades una por una al objeto de caché
			para (apoyo en datos) {
				caché [camelCase (prop)] = datos [prop];
			}
		}
		retorno de caché;
	},
	obtener: función (propietario, clave) {
		tecla de retorno === indefinido?
			this.cache (propietario):

			// Utilice siempre la clave camelCase (gh-2257)
			propietario [this.expando] && propietario [this.expando] [camelCase (clave)];
	},
	acceso: función (propietario, clave, valor) {

		// En los casos en los que:
		//
		// 1. No se especificó ninguna clave
		// 2. Se especificó una clave de cadena, pero no se proporcionó ningún valor
		//
		// Toma la ruta de "lectura" y permite que el método get determine
		// qué valor devolver, respectivamente:
		//
		// 1. Todo el objeto de caché
		// 2. Los datos almacenados en la llave
		//
		si (clave === indefinido ||
				((clave && tipo de clave === "cadena") && valor === indefinido)) {

			return this.get (propietario, clave);
		}

		// Cuando la clave no es una cadena, o tanto una clave como un valor
		// se especifican, establecen o extienden (objetos existentes) con:
		//
		// 1. Un objeto de propiedades
		// 2. Una clave y un valor
		//
		this.set (propietario, clave, valor);

		// Dado que la ruta "set" puede tener dos posibles puntos de entrada
		// devuelve los datos esperados según la ruta que se tomó [*]
		valor de retorno! == indefinido? valor: clave;
	},
	eliminar: función (propietario, clave) {
		var i,
			cache = propietario [this.expando];

		si (caché === indefinido) {
			regreso;
		}

		if (clave! == indefinido) {

			// Soporte de matriz o cadena de claves separadas por espacios
			if (Array.isArray (clave)) {

				// Si la clave es una matriz de claves ...
				// Siempre configuramos las claves camelCase, así que elimínelas.
				key = key.map (camelCase);
			} más {
				clave = camelCase (clave);

				// Si existe una clave con los espacios, úsela.
				// De lo contrario, cree una matriz haciendo coincidir espacios que no sean en blanco
				clave = clave en caché?
					[ llave ] :
					(key.match (rnothtmlwhite) || []);
			}

			i = key.length;

			mientras yo-- ) {
				eliminar caché [clave [i]];
			}
		}

		// Elimina el expando si no hay más datos
		if (clave === undefined || jQuery.isEmptyObject (caché)) {

			// Soporte: Chrome <= 35 - 45
			// El rendimiento de Webkit & Blink se ve afectado al eliminar propiedades
			// de los nodos DOM, así que configúrelo como indefinido
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (error restringido)
			if (owner.nodeType) {
				propietario [this.expando] = undefined;
			} más {
				eliminar propietario [this.expando];
			}
		}
	},
	hasData: function (propietario) {
		var cache = propietario [this.expando];
		return cache! == undefined &&! jQuery.isEmptyObject (cache);
	}
};
var dataPriv = new Data ();

var dataUser = new Data ();



// Resumen de implementación
//
// 1. Aplicar la superficie de API y la compatibilidad semántica con la rama 1.9.x
// 2. Mejorar la capacidad de mantenimiento del módulo reduciendo el almacenamiento
// rutas a un solo mecanismo.
// 3. Utilice el mismo mecanismo único para admitir datos "privados" y "de usuario".
// 4. _Nunca_ exponga datos "privados" al código de usuario (TODO: Drop _data, _removeData)
// 5. Evite exponer detalles de implementación en objetos de usuario (por ejemplo, propiedades de expansión)
// 6. Proporcionar una ruta clara para la actualización de la implementación a WeakMap en 2014

var rbrace = / ^ (?: \ {[\ w \ W] * \} | \ [[\ w \ W] * \]) $ /,
	rmultiDash = / [AZ] / g;

function getData (datos) {
	si (datos === "verdadero") {
		devuelve verdadero;
	}

	si (datos === "falso") {
		falso retorno;
	}

	si (datos === "nulo") {
		devolver nulo;
	}

	// Solo convierte a un número si no cambia la cadena
	si (datos === + datos + "") {
		retorno + datos;
	}

	if (rbrace.test (datos)) {
		return JSON.parse (datos);
	}

	devolver datos;
}

function dataAttr (elem, key, data) {
	var nombre;

	// Si no se encontró nada internamente, intente recuperar cualquier
	// datos del atributo HTML5 data- *
	if (datos === indefinido && elem.nodeType === 1) {
		nombre = "data-" + key.replace (rmultiDash, "- $ &") .toLowerCase ();
		data = elem.getAttribute (nombre);

		if (tipo de datos === "cadena") {
			tratar {
				datos = getData (datos);
			} captura (e) {}

			// Asegúrate de configurar los datos para que no se modifiquen más tarde
			dataUser.set (elem, clave, datos);
		} más {
			datos = indefinido;
		}
	}
	devolver datos;
}

jQuery.extend ({
	hasData: function (elem) {
		devolver dataUser.hasData (elem) || dataPriv.hasData (elem);
	},

	datos: función (elem, nombre, datos) {
		return dataUser.access (elem, nombre, datos);
	},

	removeData: function (elem, name) {
		dataUser.remove (elem, nombre);
	},

	// TODO: Ahora que todas las llamadas a _data y _removeData han sido reemplazadas
	// con llamadas directas a métodos dataPriv, estos pueden quedar obsoletos.
	_data: function (elem, name, data) {
		return dataPriv.access (elem, nombre, datos);
	},

	_removeData: function (elem, name) {
		dataPriv.remove (elem, nombre);
	}
});

jQuery.fn.extend ({
	datos: función (clave, valor) {
		var i, nombre, datos,
			elem = esto [0],
			attrs = elem && elem.attributes;

		// Obtiene todos los valores
		si (clave === indefinido) {
			if (this.length) {
				datos = dataUser.get (elem);

				if (elem.nodeType === 1 &&! dataPriv.get (elem, "hasDataAttrs")) {
					i = attrs.length;
					mientras yo-- ) {

						// Soporte: solo IE 11
						// Los elementos attrs pueden ser nulos (# 14894)
						if (attrs [i]) {
							nombre = atributos [i] .nombre;
							if (name.indexOf ("data-") === 0) {
								nombre = camelCase (nombre.slice (5));
								dataAttr (elem, nombre, datos [nombre]);
							}
						}
					}
					dataPriv.set (elem, "hasDataAttrs", verdadero);
				}
			}

			devolver datos;
		}

		// Establece varios valores
		if (typeof key === "object") {
			devuelve this.each (function () {
				dataUser.set (esto, clave);
			});
		}

		acceso de retorno (esto, función (valor) {
			var datos;

			// El objeto jQuery que llama (coincide con el elemento) no está vacío
			// (y por lo tanto tiene un elemento aparece en este [0]) y el
			// El parámetro `value` no estaba indefinido. Un objeto jQuery vacío
			// resultará en `undefined` para elem = this [0] que
			// lanza una excepción si se intenta leer una caché de datos.
			if (elem && value === undefined) {

				// Intenta obtener datos de la caché
				// La clave siempre será camelCased in Data
				data = dataUser.get (elem, clave);
				if (data! == undefined) {
					devolver datos;
				}

				// Intente "descubrir" los datos en
				// datos personalizados HTML5- * attrs
				data = dataAttr (elem, clave);
				if (data! == undefined) {
					devolver datos;
				}

				// Lo intentamos mucho, pero los datos no existen.
				regreso;
			}

			// Establecer los datos ...
			this.each (function () {

				// Siempre almacenamos la llave camelCased
				dataUser.set (esto, clave, valor);
			});
		}, nulo, valor, argumentos.longitud> 1, nulo, verdadero);
	},

	removeData: function (key) {
		devuelve this.each (function () {
			dataUser.remove (esto, clave);
		});
	}
});


jQuery.extend ({
	cola: función (elem, tipo, datos) {
		var queue;

		si (elem) {
			tipo = (tipo || "fx") + "cola";
			cola = dataPriv.get (elem, tipo);

			// Acelera la salida de la cola saliendo rápidamente si esto es solo una búsqueda
			si (datos) {
				if (! cola || Array.isArray (datos)) {
					cola = dataPriv.access (elem, tipo, jQuery.makeArray (datos));
				} más {
					queue.push (datos);
				}
			}
			cola de retorno || [];
		}
	},

	dequeue: function (elem, type) {
		tipo = tipo || "fx";

		var queue = jQuery.queue (elem, tipo),
			startLength = queue.length,
			fn = queue.shift (),
			hooks = jQuery._queueHooks (elem, tipo),
			siguiente = función () {
				jQuery.dequeue (elem, tipo);
			};

		// Si se quita la cola de fx, siempre elimine el centinela de progreso
		if (fn === "inprogress") {
			fn = queue.shift ();
			startLength--;
		}

		si (fn) {

			// Agrega un centinela de progreso para evitar que la cola de fx sea
			// retirado automáticamente de la cola
			if (escriba === "fx") {
				queue.unshift ("en progreso");
			}

			// Limpia la última función de parada de la cola
			eliminar hooks.stop;
			fn.call (elem, siguiente, ganchos);
		}

		if (! startLength && hooks) {
			hooks.empty.fire ();
		}
	},

	// No público: genera un objeto queueHooks o devuelve el actual
	_queueHooks: function (elem, type) {
		var key = type + "queueHooks";
		return dataPriv.get (elem, clave) || dataPriv.access (elem, clave, {
			vacío: jQuery.Callbacks ("memoria una vez") .add (function () {
				dataPriv.remove (elem, [tipo + "cola", clave]);
			})
		});
	}
});

jQuery.fn.extend ({
	cola: función (tipo, datos) {
		var setter = 2;

		if (typeof type! == "string") {
			datos = tipo;
			tipo = "fx";
			setter--;
		}

		si (argumentos.longitud <establecedor) {
			return jQuery.queue (este [0], tipo);
		}

		devolver datos === indefinido?
			esta :
			this.each (function () {
				var queue = jQuery.queue (este, tipo, datos);

				// Asegurar ganchos para esta cola
				jQuery._queueHooks (este, tipo);

				if (escriba === "fx" && queue [0]! == "inprogress") {
					jQuery.dequeue (este, tipo);
				}
			});
	},
	dequeue: function (type) {
		devuelve this.each (function () {
			jQuery.dequeue (este, tipo);
		});
	},
	clearQueue: function (tipo) {
		return this.queue (escriba || "fx", []);
	},

	// Obtener una promesa resuelta cuando hay colas de cierto tipo
	// se vacían (fx es el tipo por defecto)
	promesa: función (tipo, obj) {
		var tmp,
			cuenta = 1,
			diferir = jQuery.Deferred (),
			elementos = esto,
			i = esta.longitud,
			resolver = función () {
				if (! (--count)) {
					defer.resolveWith (elementos, [elementos]);
				}
			};

		if (typeof type! == "string") {
			obj = tipo;
			tipo = indefinido;
		}
		tipo = tipo || "fx";

		mientras yo-- ) {
			tmp = dataPriv.get (elementos [i], tipo + "queueHooks");
			if (tmp && tmp.empty) {
				contar ++;
				tmp.empty.add (resolver);
			}
		}
		resolver();
		return diferir.promise (obj);
	}
});
var pnum = (/[+-]?(?:\d*\.|)\d+(?:[e][+-]?\d+|)/) .source;

var rcssNum = new RegExp ("^ (?: ([+ -]) = |) (" + pnum + ") ([az%] *) $", "i");


var cssExpand = ["Arriba", "Derecha", "Abajo", "Izquierda"];

var documentElement = document.documentElement;



	var isAttached = function (elem) {
			return jQuery.contains (elem.ownerDocument, elem);
		},
		compuesto = {compuesto: verdadero};

	// Soporte: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 solamente
	// Verifique el archivo adjunto a través de los límites del DOM de sombra cuando sea posible (gh-3504)
	// Soporte: iOS 10.0-10.2 solamente
	// Las primeras versiones de iOS 10 admiten `attachShadow` pero no` getRootNode`,
	// que conduce a errores. Necesitamos buscar `getRootNode`.
	if (documentElement.getRootNode) {
		isAttached = function (elem) {
			return jQuery.contains (elem.ownerDocument, elem) ||
				elem.getRootNode (compuesto) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function (elem, el) {

		// isHiddenWithinTree puede ser llamado desde la función de filtro jQuery #;
		// en ese caso, el elemento será el segundo argumento
		elem = el || elem;

		// El estilo en línea triunfa sobre todo
		return elem.style.display === "ninguno" ||
			elem.style.display === "" &&

			// De lo contrario, verifique el estilo calculado
			// Soporte: Firefox <= 43 - 45
			// Los elementos desconectados pueden tener una pantalla calculada: ninguna, así que primero confirme que elem es
			// en el documento.
			está adjunto (elem) &&

			jQuery.css (elem, "pantalla") === "ninguno";
	};



función ajustarCSS (elem, prop, valueParts, interpolación) {
	var ajustado, escala,
		maxIteraciones = 20,
		currentValue = interpolación?
			function () {
				return tween.cur ();
			}:
			function () {
				return jQuery.css (elem, prop, "");
			},
		initial = currentValue (),
		unit = valueParts && valueParts [3] || (jQuery.cssNumber [prop]? "": "px"),

		// Se requiere el cálculo del valor inicial para posibles desajustes de unidades
		initialInUnit = elem.nodeType &&
			(jQuery.cssNumber [prop] || unidad! == "px" && + inicial) &&
			rcssNum.exec (jQuery.css (elem, prop));

	if (initialInUnit && initialInUnit [3]! == unidad) {

		// Soporte: Firefox <= 54
		// Reducir a la mitad el valor objetivo de la iteración para evitar la interferencia de los límites superiores de CSS (gh-2144)
		inicial = inicial / 2;

		// Unidades de confianza informadas por jQuery.css
		unidad = unidad || initialInUnit [3];

		// Iterativamente aproximado desde un punto de partida distinto de cero
		initialInUnit = + initial || 1;

		while (maxIterations--) {

			// Evaluar y actualizar nuestra mejor suposición (duplicando las suposiciones que ponen en cero).
			// Finalizar si la escala es igual o cruza 1 (haciendo que el producto nuevo * antiguo no sea positivo).
			jQuery.style (elem, prop, initialInUnit + unidad);
			if ((1 - scale) * (1 - (scale = currentValue () / initial || 0.5)) <= 0) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style (elem, prop, initialInUnit + unidad);

		// Asegúrese de actualizar las propiedades de interpolación más adelante
		valueParts = valueParts || [];
	}

	if (valueParts) {
		initialInUnit = + initialInUnit || + inicial || 0;

		// Aplicar desplazamiento relativo (+ = / - =) si se especifica
		ajustado = valueParts [1]?
			initialInUnit + (valueParts [1] + 1) * valueParts [2]:
			+ valueParts [2];
		si (interpolación) {
			tween.unit = unidad;
			tween.start = initialInUnit;
			tween.end = ajustado;
		}
	}
	retorno ajustado;
}


var defaultDisplayMap = {};

function getDefaultDisplay (elem) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap [nombredenodo];

	if (mostrar) {
		pantalla de retorno;
	}

	temp = doc.body.appendChild (doc.createElement (nombredenodo));
	display = jQuery.css (temp, "display");

	temp.parentNode.removeChild (temp);

	si (mostrar === "ninguno") {
		display = "bloque";
	}
	defaultDisplayMap [nodeName] = mostrar;

	pantalla de retorno;
}

función showHide (elementos, mostrar) {
	pantalla var, elem,
		valores = [],
		índice = 0,
		length = elements.length;

	// Determine un nuevo valor de visualización para los elementos que necesitan cambiar
	para (; índice <longitud; índice ++) {
		elem = elementos [índice];
		if (! elem.style) {
			Seguir;
		}

		display = elem.style.display;
		si (mostrar) {

			// Dado que forzamos la visibilidad de los elementos ocultos en cascada, una inmediata (y lenta)
			// Se requiere verificación en este primer ciclo a menos que tengamos un valor de visualización no vacío (ya sea
			// en línea o a punto de ser restaurado)
			si (mostrar === "ninguno") {
				valores [índice] = dataPriv.get (elem, "display") || nulo;
				if (! valores [índice]) {
					elem.style.display = "";
				}
			}
			if (elem.style.display === "" && isHiddenWithinTree (elem)) {
				valores [índice] = getDefaultDisplay (elem);
			}
		} más {
			if (display! == "none") {
				valores [índice] = "ninguno";

				// Recuerda lo que estamos sobrescribiendo
				dataPriv.set (elem, "pantalla", pantalla);
			}
		}
	}

	// Establecer la visualización de los elementos en un segundo bucle para evitar un reflujo constante
	para (índice = 0; índice <longitud; índice ++) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <= 9 reemplaza las etiquetas <option> con su contenido cuando se inserta fuera de
	// el elemento de selección.
	div.innerHTML = "<opción> </opción>";
	support.option = !! div.lastChild;
}) ();


// Tenemos que cerrar estas etiquetas para admitir XHTML (# 13200)
var wrapMap = {

	// Los analizadores XHTML no insertan elementos mágicamente en el
	// de la misma manera que lo hacen los analizadores de sopa de etiquetas. Entonces no podemos acortar
	// esto omitiendo <tbody> u otros elementos obligatorios.
	thead: [1, "<table>", "</table>"],
	col: [2, "<table> <colgroup>", "</colgroup> </table>"],
	tr: [2, "<table> <tbody>", "</tbody> </table>"],
	td: [3, "<table> <tbody> <tr>", "</tr> </tbody> </table>"],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
					dataPriv.get( this, "events" ) || Object.create( null )
				)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px";
				tr.style.height = "1px";
				trChild.style.height = "9px";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = parseInt( trStyle.height ) > 3;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = (
					dataPriv.get( cur, "events" ) || Object.create( null )
				)[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}


// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			if ( typeof props.top === "number" ) {
				props.top += "px";
			}
			if ( typeof props.left === "number" ) {
				props.left += "px";
			}
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );