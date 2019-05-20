export default class Vector
	{
		public x: number;
		public y: number;


		/**
		 *
		 * @param [x=0]
		 * @param [y=0]
		 */
		constructor (x: number, y: number);


		/**
		 * Distance between one and another vector
		 *
		 * @param one
		 * @param another
		 */
		static distance (one: Vector, another: Vector): number;


		/**
		 * Create a new vector from an array of numbers
		 * @param data
		 */
		static from (data: number[]): Vector;


		/**
		 * Create a new vector based on angle and magnitude
		 *
		 * @param angle
		 * @param magnitude
		 */
		static fromAngle (angle: number, magnitude: number): Vector


		/**
		 * Create a new vector based on a string (x and y are separeted by a comma)
		 * Ex: Vector.parse ("2, 3.14") // new Vector (2, 3.14)
		 *
		 * @param string
		 */
		static parse (string: string): Vector;


		/**
		 * Adds another to one. Returns a new vector.
		 *
		 * @param one
		 * @param another
		 */
		static add (one: Vector, another: Vector): Vector;


		/**
		 * Adds another to one. Vector another is modified directly.
		 *
		 * @param one
		 * @param another
		 */
		static iadd (one: Vector, another: Vector): Vector;


		/**
		 * Substracts another to one. Returns a new vector.
		 *
		 * @param one
		 * @param another
		 */
		static sub (one: Vector, another: Vector): Vector;


		/**
		 * Substracts another to one. Vector another is modified directly.
		 *
		 * @param one
		 * @param another
		 */
		static isub (one: Vector, another: Vector): Vector;


		/**
		 * Multiplies vector by scalar. Returns a new vector.
		 *
		 * @param scala
		 * @param another
		 */
		static mul (scalar: number, vector: Vector): Vector;


		/**
		 * Multiplies vector by scalar. Vector vector is modified directly.
		 *
		 * @param scala
		 * @param another
		 */
		static imul (scalar: number, vector: Vector): Vector;


		/**
		 * Divivides vector by scalar. Returns a new vector.
		 *
		 * @param scala
		 * @param another
		 */
		static div (scalar: number, vector: Vector): Vector;


		/**
		 * Divides vector by scalar. Vector vector is modified directly.
		 *
		 * @param scala
		 * @param another
		 */
		static idiv (scalar: number, vector: Vector): Vector;


		/**
		 * Lineary interpolates another with one by factor t. Returns a new vector.
		 *
		 * @param one
		 * @param another
		 * @param t        value between 0 and 1
		 */
		static lerp (one: Vector, another: Vector, t: number): Vector;


		/**
		 * Returns a new normalized vector for vector.
		 *
		 * @param vector
		 */
		static normalized (vector: Vector): Vector;


		/**
		 * Normalizes vector. Vector vector is modified directly.
		 *
		 * @param vector
		 */
		static normalize (vector: Vector): Vector;


		/**
		 * Returns vector's magnitude (length).
		 * @param vector
		 */
		static magnitude (vector: Vector): number;


		/**
		 * Returns dot product between one and another.
		 * @param vector
		 */
		static dot (one: Vector, another: Vector): number;


		/**
		 * Returns angle (radians) of vector.
		 * @param vector
		 */
		static angleOf (vector: Vector): number;


		/**
		 * Returns angle (radians) between one and another.
		 * @param vector
		 */
		static angleTo (one: Vector, another: Vector): number;


		/**
		 * Rotates vector by theta angle. Returns a new vector.
		 * @param theta
		 * @param vector
		 */
		static rotate (theta: number, vector: Vector): Vector;


		/**
		 * Rotates vector by theta angle. Modifies vector directly.
		 * @param theta
		 * @param vector
		 */
		static irotate (theta: number, vector: Vector): Vector;


		/**
		 * Reset another vector with one values. Returns a new vector.
		 *
		 * @param one
		 * @param another
		 */
		static reset (one: Vector, another: Vector): Vector;


		/**
		 * Reset vector to 0 (origin). Returns a new vector.
		 *
		 * @param vector
		 */
		static zero (vector: Vector): Vector;


		/**
		 * Set vector X et Y values. Returns a new vector.
		 *
		 * @param [x=0]
		 * @param [y=0]
		 * @param vector
		 */
		static set (x: number, y: number, vector: Vector): Vector;


		/**
		 * Returns a new vector copied from vector.
		 *
		 * @param vector
		 */
		static copy (vector: Vector): Vector;


		/**
		 * Returns a JSON representation of vector.
		 *
		 * @param vector
		 */
		static toJSON (vector: Vector): number[];


		/**
		 * Returns string representation of vector.
		 *
		 * @param vector
		 */
		static toString (vector: Vector): string;


		/**
		 * Distance between current and another vector
		 *
		 * @param vector
		 */
		distance (vector: Vector): number;


		/**
		 * Adds vector to current. Returns a new vector.
		 *
		 * @param vector
		 */
		add (vector: Vector): Vector;


		/**
		 * Adds vector to current. Current vector is modified directly.
		 *
		 * @param vector
		 */
		iadd (vector: Vector): Vector;


		/**
		 * Substracts vector to current. Returns a new vector.
		 *
		 * @param vector
		 */
		sub (vector: Vector): Vector;


		/**
		 * Substracts vector to current. Current vector is modified directly.
		 *
		 * @param vector
		 */
		isub (vector: Vector): Vector;


		/**
		 * Multiplies vector by scalar. Returns a new vector.
		 *
		 * @param scalar
		 */
		mul (scalar: Vector): Vector;


		/**
		 * Multiplies vector by scalar. Current vector is modified directly.
		 *
		 * @param scalar
		 */
		imul (scalar: Vector): Vector;


		/**
		 * Divides vector by scalar. Returns a new vector.
		 *
		 * @param scalar
		 */
		div (scalar: Vector): Vector;


		/**
		 * Divides vector by scalar. Current vector is modified directly.
		 *
		 * @param scalar
		 */
		idiv (scalar: Vector): Vector;


		/**
		 * Lineary interpolates another with current by factor t. Returns a new vector.
		 *
		 * @param vector
		 * @param t        value between 0 and 1
		 */
		lerp (vector: Vector, t: number): Vector;


		/**
		 * Returns a normalized vector for current vector.
		 */
		normalized (): Vector;


		/**
		 * Normalizes current vector which is modified directly.
		 *
		 * @param vector
		 */
		normalize (): Vector;


		/**
		 * Returns current vector's magnitude (length).
		 */
		magnitude (): number;


		/**
		 * Returns dot product current and vector.
		 *
		 * @param vector
		 */
		dot (vector: Vector): number;


		/**
		 * Returns angle (radians) of current vector.
		 */
		angleOf (): number;


		/**
		 * Returns angle (radians) between vector and current.
		 *
		 * @param vector
		 */
		angleTo (vector: Vector): number;


		/**
		 * Rotates current vector by theta angle. Returns a new vector.
		 *
		 * @param theta
		 */
		rotate (theta: number): Vector;


		/**
		 * Rotates current vector by theta angle. Current vector is modified.
		 *
		 * @param theta
		 *
		 */
		irotate (theta: number): Vector;


		/**
		 * Reset current vector with vector values. Returns a new vector.
		 *
		 * @param vector
		 */
		reset (vector: Vector): Vector;


		/**
		 * Reset current vector to 0 (origin). Returns a new vector.
		 */
		zero (): Vector;


		/**
		 * Set current vector X et Y values. Returns a new vector.
		 *
		 * @param [x=0]
		 * @param [y=0]
		 */
		set (x: number, y: number): Vector;


		/**
		 * Returns a new vector copied from vector.
		 */
		copy (): Vector;


		/**
		 * Returns a JSON representation of current vector.
		 */
		toJSON (): number[];


		/**
		 * Returns string representation of current vector.
		 *
		 */
		toString (vector: Vector): string;

	}

/*


	/!* istanbul ignore else *!/
	if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
		Vector$1.prototype[Symbol.toStringTag] = 'Vector';
	}

	Vector$1.toArray = function (vector) {
		return vector.toArray()
	};

	Vector$1.prototype.toArray = function () {
		return [this.x, this.y]
	};

	'use strict';
	var numberEpsilon = 'EPSILON' in Number ? Number.EPSILON : 2.220446049250313e-16;

	Vector$1.equals = function (one, another) {
		return one.equals(another)
	};

	Vector$1.prototype.equals = function (vector) {
		return (
			Math.abs(this.x - vector.x) < numberEpsilon &&
			Math.abs(this.y - vector.y) < numberEpsilon
		)
	};

	Vector$1.compare = function (one, another) {
		return one.compare(another)
	};

	Vector$1.prototype.compare = function (vector) {
		var thisMagnitude = this.magnitude();
		var vectorMagnitude = vector.magnitude();
		return (thisMagnitude > vectorMagnitude) - (vectorMagnitude > thisMagnitude)
	};

	Object.defineProperties(Vector$1.prototype, {
		xx: {
			configurable: true,
			get: function () {
				return new Vector$1(this.x, this.x)
			},
			set: function (vector) {
				this.x = vector.x;
				this.y = vector.x;
			}
		},
		xy: {
			configurable: true,
			get: function () {
				return new Vector$1(this.x, this.y)
			},
			set: function (vector) {
				this.x = vector.x;
				this.y = vector.y;
			}
		},
		yx: {
			configurable: true,
			get: function () {
				return new Vector$1(this.y, this.x)
			},
			set: function (vector) {
				this.x = vector.y;
				this.y = vector.x;
			}
		},
		yy: {
			configurable: true,
			get: function () {
				return new Vector$1(this.y, this.y)
			},
			set: function (vector) {
				this.x = vector.y;
				this.y = vector.y;
			}
		}
	});

	function VectorIterator (vector) {
		this.vector = vector;
		this.__idx = 0;
	}

	VectorIterator.prototype.next = function () {
		if (this.__idx === 0) {
			this.__idx++;
			return {
				done: false,
				value: this.vector.x
			}
		} else if (this.__idx === 1) {
			this.__idx++;
			return {
				done: false,
				value: this.vector.y
			}
		} else {
			return {
				done: true,
				value: void 0
			}
		}
	};

	/!* istanbul ignore else *!/
	if (typeof Symbol !== 'undefined' && Symbol.iterator) {
		Vector$1.prototype[Symbol.iterator] = function iterator () {
			return new VectorIterator(this)
		};
	}

	return Vector$1;

})));
*/
