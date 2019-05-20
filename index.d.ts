export default class Vector
	{
		public x: number;
		public y: number;


		/**
		 *
		 * @param [x=0]
		 * @param [y=0]
		 */
		constructor (x?: number, y?: number);


		/**
		 * Distance between one and another vector
		 *
		 * @param {Vector} one
		 * @param {Vector} another
		 * @return {number}
		 */
		static distance (one: Vector, another: Vector): number;


		/**
		 * Create a new vector from an array of numbers
		 *
		 * @param {number[]} data
		 * @return {Vector}
		 */
		static from (data: number[]): Vector;


		/**
		 * Create a new vector based on angle and magnitude
		 *
		 * @param {number} angle
		 * @param {number} magnitude
		 * @return {Vector}
		 */
		static fromAngle (angle: number, magnitude: number): Vector


		/**
		 * Create a new vector based on a string (x and y are separeted by a comma)
		 * Ex: Vector.parse ("2, 3.14") // new Vector (2, 3.14)

		 * @param {string} string
		 * @return {Vector}
		 */
		static parse (string: string): Vector;


		/**
		 * Adds another to one. Returns a new vector.
		 *
		 * @param {Vector} one
		 * @param {Vector} another
		 * @return {Vector}
		 */
		static add (one: Vector, another: Vector): Vector;


		/**
		 * Adds another to one. Vector another is modified directly.
		 *
		 * @param {Vector} one
		 * @param {Vector} another
		 * @return {Vector}
		 */
		static iadd (one: Vector, another: Vector): Vector;


		/**
		 * Substracts another to one. Returns a new vector.
		 *
		 * @param {Vector} one
		 * @param {Vector} another
		 * @return {Vector}
		 */
		static sub (one: Vector, another: Vector): Vector;


		/**
		 * Substracts another to one. Vector another is modified directly.
		 *
		 * @param {Vector} one
		 * @param {Vector} another
		 * @return {Vector}
		 */
		static isub (one: Vector, another: Vector): Vector;


		/**
		 * Multiplies vector by scalar. Returns a new vector.
		 *
		 * @param {number} scalar
		 * @param {Vector} vector
		 * @return {Vector}
		 */
		static mul (scalar: number, vector: Vector): Vector;


		/**
		 * Multiplies vector by scalar. Vector vector is modified directly.
		 *
		 * @param {number} scalar
		 * @param {Vector} vector
		 * @return {Vector}
		 */
		static imul (scalar: number, vector: Vector): Vector;


		/**
		 * Divivides vector by scalar. Returns a new vector.
		 *
		 * @param {number} scalar
		 * @param {Vector} vector
		 * @return {Vector}
		 */
		static div (scalar: number, vector: Vector): Vector;


		/**
		 * Divides vector by scalar. Vector vector is modified directly.
		 *
		 * @param {number} scalar
		 * @param {Vector} vector
		 * @return {Vector}
		 */
		static idiv (scalar: number, vector: Vector): Vector;


		/**
		 * Lineary interpolates another with one by factor t. Returns a new vector.
		 *
		 * @param {Vector} one
		 * @param {Vector} another
		 * @param {number} t 0..1
		 * @return {Vector}
		 */
		static lerp (one: Vector, another: Vector, t: number): Vector;


		/**
		 * Returns a new normalized vector for vector.
		 *
		 * @param {Vector} vector
		 * @return {Vector}
		 */
		static normalized (vector: Vector): Vector;


		/**
		 * Normalizes vector. Vector vector is modified directly.
		 *
		 * @param {Vector} vector
		 * @return {Vector}
		 */
		static normalize (vector: Vector): Vector;


		/**
		 * Returns vector's magnitude (length).
		 *
		 * @param {Vector} vector
		 * @return {number}
		 */
		static magnitude (vector: Vector): number;


		/**
		 * Returns dot product between one and another.
		 *
		 * @param {Vector} one
		 * @param {Vector} another
		 * @return {number}
		 */
		static dot (one: Vector, another: Vector): number;


		/**
		 * Returns angle (radians) of vector.
		 *
		 * @param {Vector} vector
		 * @return {number}
		 */
		static angleOf (vector: Vector): number;


		/**
		 * Returns angle (radians) between one and another.
		 *
		 * @param {Vector} one
		 * @param {Vector} another
		 * @return {number}
		 */
		static angleTo (one: Vector, another: Vector): number;


		/**
		 * Rotates vector by theta angle. Returns a new vector.
		 *
		 * @param {number} theta
		 * @param {Vector} vector
		 * @return {Vector}
		 */
		static rotate (theta: number, vector: Vector): Vector;


		/**
		 * Rotates vector by theta angle. Modifies vector directly.
		 *
		 * @param {number} theta
		 * @param {Vector} vector
		 * @return {Vector}
		 */
		static irotate (theta: number, vector: Vector): Vector;


		/**
		 * Reset another vector with one values. Returns a new vector.
		 *
		 * @param {Vector} one
		 * @param {Vector} another
		 * @return {Vector}
		 */
		static reset (one: Vector, another: Vector): Vector;


		/**
		 * Reset vector to 0 (origin). Returns a new vector.
		 *
		 * @param {Vector} vector
		 * @return {Vector}
		 */
		static zero (vector: Vector): Vector;


		/**
		 * Set vector X et Y values. Returns a new vector.
		 *
		 * @param {number} [x = 0]
		 * @param {number} [y = 0]
		 * @param {Vector} vector
		 * @return {Vector}
		 */
		static set (x?: number, y?: number, vector?: Vector): Vector;


		/**
		 * Returns a new vector copied from vector.
		 *
		 * @param {Vector} vector
		 * @return {Vector}
		 * @name copy
		 * @alias clone
		 */
		static copy (vector: Vector): Vector;


		/**
		 * Returns a JSON representation of vector.
		 *
		 * @param {Vector} vector
		 * @return {number[]}
		 */
		static toJSON (vector: Vector): number[];


		/**
		 * Returns a string representation of vector.
		 *
		 * @param {Vector} vector
		 * @return {string}
		 */
		static toString (vector: Vector): string;


		/**
		 * Returns an array representation of vector.
		 *
		 * @param {Vector} vector
		 * @return {number[]}
		 */
		static toArray (vector: Vector): number[];


		/**
		 * Returns true if one and another magnitude (length) are equal.
		 *
		 * @param {Vector} one
		 * @param {Vector} another
		 * @return {boolean}
		 */
		static compare (one: Vector, another: Vector): boolean;


		/**
		 * Distance between current and another vector
		 *
		 * @param {Vector} vector
		 * @return {number}
		 */
		distance (vector: Vector): number;


		/**
		 * Adds vector to current. Returns a new vector.
		 *
		 * @param {Vector} vector
		 * @return {Vector}
		 */
		add (vector: Vector): Vector;


		/**
		 * Adds vector to current. Current vector is modified directly.
		 *
		 * @param {Vector} vector
		 * @return {Vector}
		 */
		iadd (vector: Vector): Vector;


		/**
		 * Substracts vector to current. Returns a new vector.
		 *
		 * @param {Vector} vector
		 * @return {Vector}
		 */
		sub (vector: Vector): Vector;


		/**
		 * Substracts vector to current. Current vector is modified directly.
		 *
		 * @param {Vector} vector
		 * @return {Vector}
		 */
		isub (vector: Vector): Vector;


		/**
		 * Multiplies vector by scalar. Returns a new vector.
		 *
		 * @param {number} scalar
		 * @return {Vector}
		 */
		mul (scalar: number): Vector;


		/**
		 * Multiplies vector by scalar. Current vector is modified directly.
		 *
		 * @param {number} scalar
		 * @return {Vector}
		 */
		imul (scalar: number): Vector;


		/**
		 * Divides vector by scalar. Returns a new vector.
		 *
		 * @param {number} scalar
		 * @return {Vector}
		 */
		div (scalar: number): Vector;


		/**
		 * Divides vector by scalar. Current vector is modified directly.
		 *
		 * @param {number} scalar
		 * @return {Vector}
		 */
		idiv (scalar: number): Vector;


		/**
		 * Lineary interpolates another with current by factor t. Returns a new vector.
		 *
		 * @param {Vector} vector
		 * @param {number} t 0..1
		 * @return {Vector}
		 */
		lerp (vector: Vector, t: number): Vector;


		/**
		 * Returns a normalized vector for current vector.
		 *
		 * @return {Vector}
		 */
		normalized (): Vector;


		/**
		 * Normalizes current vector which is modified directly.
		 *
		 * @return {Vector}
		 */
		normalize (): Vector;


		/**
		 * Returns current vector's magnitude (length).
		 *
		 * @return {number}
		 */
		magnitude (): number;


		/**
		 * Returns dot product current and vector.
		 *
		 * @param {Vector} vector
		 * @return {number}
		 */
		dot (vector: Vector): number;


		/**
		 * Returns angle (radians) of current vector.
		 *
		 * @return {number}
		 */
		angleOf (): number;


		/**
		 * Returns angle (radians) between vector and current.
		 *
		 * @param {Vector} vector
		 * @return {number}
		 */
		angleTo (vector: Vector): number;


		/**
		 * Rotates current vector by theta angle. Returns a new vector.
		 *
		 * @param {number} theta
		 * @return {Vector}
		 */
		rotate (theta: number): Vector;


		/**
		 * Rotates current vector by theta angle. Current vector is modified.
		 *
		 * @param {number} theta
		 * @return {Vector}
		 */
		irotate (theta: number): Vector;


		/**
		 * Reset current vector with vector values. Returns a new vector.
		 *
		 * @param {Vector} vector
		 * @return {Vector}
		 */
		reset (vector: Vector): Vector;


		/**
		 * Reset current vector to 0 (origin). Returns a new vector.
		 *
		 * @return {Vector}
		 */
		zero (): Vector;


		/**
		 * Set current vector X et Y values. Returns a new vector.
		 *
		 * @param {number} [x = 0]
		 * @param {number} [y = 0]
		 * @return {Vector}
		 */
		set (x?: number, y?: number): Vector;


		/**
		 * Returns a new vector copied from vector.
		 *
		 * @return {Vector}
		 * @alias clone
		 */
		copy (): Vector;


		/**
		 * Returns a JSON representation of current vector.
		 *
		 * @return {number[]}
		 */
		toJSON (): number[];


		/**
		 * Returns string representation of current vector.
		 *
		 * @param {Vector} vector
		 * @return {string}
		 */
		toString (vector: Vector): string;


		/**
		 * Returns array representation of current vector.
		 *
		 * @return {number[]}
		 */
		toArray (): number[];


		/**
		 * Returns true if current vector equals vector.
		 *
		 * @param {Vector} vector
		 * @return {boolean}
		 */
		equals (vector: Vector): boolean;


		/**
		 * Returns true if current and vector magnitude (length) are equal.
		 *
		 * @param {Vector} vector
		 * @return {boolean}
		 */
		compare (vector: Vector): boolean;


		/**
		 * Uses the X value from current vector to create an new vector.
		 *
		 * @return {Vector}
		 */
		xx (): Vector;


		/**
		 * Uses the X value from vector to set current vector X and Y values.
		 *
		 * @param {Vector} vector
		 */
		xx (vector: Vector): void;


		/**
		 * Uses the Y value from current vector to create an new vector.
		 *
		 * @return {Vector}
		 */
		yy (): Vector;


		/**
		 * Uses the Y value from vector to set current vector X and Y values.
		 *
		 * @param {Vector} vector
		 */
		yy (vector: Vector): void;


		/**
		 * Uses the X and Y values from current vector to create an new vector.
		 *
		 * @return {Vector}
		 */
		xy (): Vector;

		/**
		 * Uses the X and Y values from vector to set current vector X and Y values.
		 *
		 * @param {Vector} vector
		 */
		xy (vector: Vector): void;


		/**
		 * Uses the Y and X values from current vector to create an new vector.
		 *
		 * @return {Vector}
		 */
		yx (): Vector;

		
		/**
		 * Uses the Y and X values from vector to set current vector X and Y values.
		 *
		 * @param {Vector} vector
		 */
		yx (vector: Vector): void;
	}
