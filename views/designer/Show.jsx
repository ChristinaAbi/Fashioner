const React = require('react')
const Default = require('../components/Default')

class Show extends React.Component {
    render() {
        const { title, outfitNumber,image, description } = this.props.designer
        return (
            <Default>
                <div>
                    <nav class="topnav">
                        <a href="/designer"> Back to Designs</a>
                    </nav>        
                    <p>
                        Title: {title}
                        < br />
                        Outfit Number: {outfitNumber}
                        <br />
                        <img src={image} />
                        <br />
                        Description: {description}
                    </p>
                </div>
            </Default>
        )
    }
}

module.exports = Show