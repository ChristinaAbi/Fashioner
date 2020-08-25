const React = require('react')

class Default extends React.Component{
    render(){
        return(
            <html>
                <head>
                    <link rel="stylesheet" href="/css/app.css" type="text/css"></link>
                </head>
                <body>
                    {this.props.children}
                </body>
            </html>
        )
    }
}
module.exports = Default