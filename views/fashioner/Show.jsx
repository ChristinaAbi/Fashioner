const React = require('react')
const Layout = require('../components/Layout')

class Show extends React.Component {
    render() {
        const { title, entryNumber, description, readyToPost } = this.props.fashioner
        return (
            <Layout>
                <div>
                    <p>
                        Title: {title}
                        < br />
                        Entry Number: {entryNumber}
                        <br />
                        Description: {description}
                        <br />
                        Was It Ready?: {readyToPost}
                    </p>
                </div>
            </Layout>
        )
    }
}

module.exports = Show