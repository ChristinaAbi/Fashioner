const React = require('react')
const Layout = require('../components/Layout')

class Show extends React.Component {
    render() {
        const { title, entryNumber, description } = this.props.fashioner
        return (
            <Layout>
                <div>
                    <p>
                        Title: {title}
                        < br />
                        Entry Number: {entryNumber}
                        <br />
                        Description: {description}
                    </p>
                </div>
            </Layout>
        )
    }
}

module.exports = Show