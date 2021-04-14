require( 'dotenv/config' );
const express = require( 'express' );
const app = express();

//IMPORT ROUTES
const homeRouter = require( './api/routes/home' );

//MIDDLEWARE
//these arespecific functions that are run when specific routes are requested
//NB: if no route is specified, then the function runs for all the routes created

//ROUTING 
app.get( '/', ( req, res ) => { res.redirect( '/home' ) } );
app.use( '/home', homeRouter );

//File handling - to serve static files such as css, img or js files
app.use( express.static( 'views' ) );
//serving more specific types of flies specific to the users of the platform
app.use( express.static( 'files' ) );

//ERROR HANDLING

//ERROR HANNDLING FOR ALL REQUEST THAT DONT HAVE HANDLERS/CONTROLERS
app.use( ( req, res, next ) => {
    const error = new Error('Sorry, the resource your are looking for was NOT FOUND!');
    error.status = 404;
    //pass the error on next in the middleware
    next( error );
});

//ERROR HANDLING FOR ANY OTHER ERRORS NOT CAUGHT THAT HAPPEN IN THE APPLICATION
//E.G. IF A DATABASE OPERATION GOES WRONG, WE WANT TO GIVE A CUSTOM ERROR MESSAGE
app.use( ( error, req, res, next ) => {

    //if the error status isnt already set, we shall set it to 500 as default
    //server error status code
    res.status( error.status || 500 );
    console.log( error );
    res.json( {
        error : {
            message : error.message,
            error_Status : res.status
        }
    } );
} );

module.exports = app;
