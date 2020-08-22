const React = require('react')
const Layout = require('../components/Layout')

class New extends React.Component {
    render() {
        return (
            <Layout>
                <div>
                    <h1>
                        New Blog Post
                    </h1>
                    <form action="/fashioner" method="POST">
                        Title: <input type="text" name="title" />
                        Entry Number: <input type="text" name="entryNumber" />
                        Description: <input type="textarea" name="description" />
                    </form>
                </div>
            </Layout>
        )
    }
}

module.exports = New