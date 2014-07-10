/*:
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
var dasherizeNamespace = function dasherizeNamespace( namespace ){
	/*:
		@meta-configuration:
			{
				"namespace:required": "string"
			}
		@end-meta-configuration
	*/

	if( NAMESPACE_PATTERN.test( namespace ) ){

	}else{
		var error = new Error( "invalid namespace format" );
		console.error( error );
		throw error;
	}
};

const NAMESPACE_PATTERN = /^(?:[a-zA-Z][a-zA-Z0-9]+[-_ ])*[a-zA-Z][a-zA-Z0-9]+$/;
const NAMESPACE_TERM_PATTERN = /^([a-zA-Z])|[-_ ]([a-zA-Z])/;

( module || { } ).exports = dasherizeNamespace;