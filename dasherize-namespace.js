/*:
	@module-license:
		The MIT License (MIT)

		Copyright (c) 2014 Richeve Siodina Bebedor

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"packageName": "dasherize-namespace",
			"fileName": "dasherize-namespace.js",
			"moduleName": "dasherizeNamespace",
			"authorName": "Richeve S. Bebedor",
			"authorEMail": "richeve.bebedor@gmail.com",
			"repository": "git@github.com:volkovasystems/dasherize-namespace.git",
			"testCase": "dasherize-namespace-test.js",
			"isGlobal": true
		}
	@end-module-configuration

	@module-documentation:

	@end-module-documentation
*/
var dasherizeNamespace = function dasherizeNamespace( namespace, doNotDasherizeFirstLetter ){
	/*:
		@meta-configuration:
			{
				"namespace:required": "string",
				"doNotDasherizeFirstLetter:optional": "boolean"
			}
		@end-meta-configuration
	*/

	if( NAMESPACE_PATTERN.test( namespace ) ){
		if( doNotDasherizeFirstLetter ){
			namespace = namespace[ 0 ].toLowerCase( ) + namespace.substring( 1 );
		}

		if( ALL_UPPERCASE_ALPHABET_PATTERN.test( namespace ) ){
			namespace = namespace.toLowerCase( );
		}

		return namespace
			.replace( NAMESPACE_TERM_PATTERN,
				function onReplaced( match, divideCharacter ){
					if( UPPERCASE_ALPHABET_PATTERN.test( divideCharacter ) ){
						return match.replace( divideCharacter, "-" + divideCharacter.toLowerCase( ) );

					}else if( divideCharacter && divideCharacter != "-" ){
						return match.replace( divideCharacter, "-" );
						
					}else{
						return match;
					}
				} )
			.toLowerCase( );

	}else{
		var error = new Error( "invalid namespace format" );
		console.error( error );
		throw error;
	}
};

const ALL_UPPERCASE_ALPHABET_PATTERN = /^(?:[A-Z][A-Z0-9]*[-_ ]?)*[A-Z][A-Z0-9]*$/
const UPPERCASE_ALPHABET_PATTERN = /[A-Z]/;
const NAMESPACE_PATTERN = /^(?:[a-zA-Z][a-zA-Z0-9]*[-_ ]?)*[a-zA-Z][a-zA-Z0-9]*$/;
const NAMESPACE_TERM_PATTERN = /^[a-z]|([-A-Z_ ])[a-zA-Z]/g;

module.exports = dasherizeNamespace;