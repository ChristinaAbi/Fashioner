const React = require('react')

class Layout extends React.Component{
    render(){
        return(
            <html>
                <head>
                    <link rel="stylesheet" href="/css/style.css" type="text/css"></link>
                </head>
                <body>
                    {this.props.children}
                </body>
            </html>
        )
    }
}
module.exports = Layout