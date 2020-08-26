const React = require('react')
const Layout = require('../components/Layout')

class Show extends React.Component {
    render() {
        const { title, entryNumber, image, description, readyToPost } = this.props.fashioner
        return (
            <Layout>
                <div>
                    <nav class="topnav">
                        <a href="/"> Back to Posts</a>
                    </nav>       
                    <p>
                        Title: {title}
                        < br />
                        Entry Number: {entryNumber}
                        <br />
                        <img src={image} />
                        <br />
                        Description: {description}
                        <br />
                        Was It Ready? {readyToPost ? `Yes` : `No`}
                    </p>
                </div>
            </Layout>
        )
    }
}

module.exports = Show