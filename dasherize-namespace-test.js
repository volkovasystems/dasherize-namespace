/*:
	@test-configuration:
		{
			"packageName": "dasherize-namespace",
			"fileName": "dasherize-namespace-test.js",
			"authorName": "Richeve S. Bebedor",
			"authorEMail": "richeve.bebedor@gmail.com",
			"repository": "git@github.com:volkovasystems/dasherize-namespace.git",
			"referenceFile": "dasherize-namespace.js",
			"referenceModule": "dasherizeNamespace"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation
*/

describe( "dasherizeNamespace",
	function testDasherizeNamespace( ){
		it( "should transform 'hello world hola' to 'hello-world-hola'",
			function testCase( ){
				assert.strictEqual( dasherizeNamespace( "hello world hola" ), "hello-world-hola" );
			} );

		it( "should transform 'hello_world_hola' to 'hello-world-hola'",
			function testCase( ){
				assert.strictEqual( dasherizeNamespace( "hello_world_hola" ), "hello-world-hola" );
			} );

		it( "should transform 'helloworldhola' to 'helloworldhola'",
			function testCase( ){
				assert.strictEqual( dasherizeNamespace( "helloworldhola" ), "helloworldhola" );
			} );

		it( "should transform 'hello-world-hola' to 'hello-world-hola'",
			function testCase( ){
				assert.strictEqual( dasherizeNamespace( "hello-world-hola" ), "hello-world-hola" );
			} );

		it( "should transform 'helloWorldHola' to 'hello-world-hola'",
			function testCase( ){
				assert.strictEqual( dasherizeNamespace( "helloWorldHola" ), "hello-world-hola" );
			} );

		it( "should transform 'HelloWorldHola' to '-hello-world-hola'",
			function testCase( ){
				assert.strictEqual( dasherizeNamespace( "HelloWorldHola" ), "-hello-world-hola" );
			} );

		it( "should transform 'HelloWorldHola' to 'hello-world-hola' when doNotDasherizeFirstLetter mode on",
			function testCase( ){
				assert.strictEqual( dasherizeNamespace( "HelloWorldHola", true ), "hello-world-hola" );
			} );

		it( "should transform 'hello_world hola' to 'hello-world-hola'",
			function testCase( ){
				assert.strictEqual( dasherizeNamespace( "hello_world hola" ), "hello-world-hola" );
			} );

		it( "should transform 'hello_World hola' to 'hello-world-hola'",
			function testCase( ){
				assert.strictEqual( dasherizeNamespace( "hello_World hola" ), "hello-world-hola" );
			} );

		it( "should transform 'HELLO WORLD HOLA' to 'hello-world-hola'",
			function testCase( ){
				assert.strictEqual( dasherizeNamespace( "HELLO WORLD HOLA" ), "hello-world-hola" );
			} );

		it( "should throw error 'invalid namespace format' when input is ' hello world hola'",
			function testCase( ){
				assert.throws( function testThrow( ){
					dasherizeNamespace( " hello world hola" )	
				}, 
				function validate( error ){
					return error.message == "invalid namespace format";
				} );
			} );

		it( "should throw error 'invalid namespace format' when input is '_hello_world_hola'",
			function testCase( ){
				assert.throws( function testThrow( ){
					dasherizeNamespace( "_hello_world_hola" )	
				}, 
				function validate( error ){
					return error.message == "invalid namespace format";
				} );
			} );

		it( "should throw error 'invalid namespace format' when input is '-hello-world-hola'",
			function testCase( ){
				assert.throws( function testThrow( ){
					dasherizeNamespace( "-hello-world-hola" )	
				}, 
				function validate( error ){
					return error.message == "invalid namespace format";
				} );
			} );

		it( "should throw error 'invalid namespace format' when input is '123helloWorldHola'",
			function testCase( ){
				assert.throws( function testThrow( ){
					dasherizeNamespace( "123helloWorldHola" )	
				}, 
				function validate( error ){
					return error.message == "invalid namespace format";
				} );
			} );

		it( "should throw error 'invalid namespace format' when input is 'hello_123world_hola",
			function testCase( ){
				assert.throws( function testThrow( ){
					dasherizeNamespace( "hello_123world_hola" )	
				}, 
				function validate( error ){
					return error.message == "invalid namespace format";
				} );
			} );

		it( "should throw error 'invalid namespace format' when input is 'hello-world-123hola'",
			function testCase( ){
				assert.throws( function testThrow( ){
					dasherizeNamespace( "hello-world-123hola" )	
				}, 
				function validate( error ){
					return error.message == "invalid namespace format";
				} );
			} );

		it( "should throw error 'invalid namespace format' when input is '1hello 2world 3hola'",
			function testCase( ){
				assert.throws( function testThrow( ){
					dasherizeNamespace( "1hello 2world 3hola" )	
				}, 
				function validate( error ){
					return error.message == "invalid namespace format";
				} );
			} );

		it( "should throw error 'invalid namespace format' when input is '1234567890'",
			function testCase( ){
				assert.throws( function testThrow( ){
					dasherizeNamespace( "1234567890" )	
				}, 
				function validate( error ){
					return error.message == "invalid namespace format";
				} );
			} );

		it( "should throw error 'invalid namespace format' when input is '@#$%^&*(|}{:?><'",
			function testCase( ){
				assert.throws( function testThrow( ){
					dasherizeNamespace( "@#$%^&*(|}{:?><" )	
				}, 
				function validate( error ){
					return error.message == "invalid namespace format";
				} );
			} );
	} );

var dasherizeNamespace = require( "./dasherize-namespace.js" );

var assert = require( "assert" );