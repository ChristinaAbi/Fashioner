const React = require('react')
const Default = require('../components/Default')

class Show extends React.Component {
    render() {
        const { title, outfitNumber, description } = this.props.designer
        return (
            <Default>
                <div>
                    <p>
                        Title: {title}
                        < br />
                        Outfit Number: {outfitNumber}
                        <br />
                        Description: {description}
                    </p>
                </div>
            </Default>
        )
    }
}

module.exports = Show