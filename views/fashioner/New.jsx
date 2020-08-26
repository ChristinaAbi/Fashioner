const React = require('react')
const Layout = require('../components/Layout')

class New extends React.Component {
    render() {
        return (
            <Layout>
                <div>
                    <h1>
                        Here's Where the Magic Begins test
                    </h1>
                    <h4>
                        Drop your thoughts below and share to the Fashion World!
                    </h4>
                    <form action="/fashioner" method="POST">
                        Title: <input type="text" name="title" />
                        <br />
                        Entry Number: <input type="text" name="entryNumber" />
                        <br />
                        Description: <input type="text" name="description" />
                        <br />
                        Ready To Post: <input type="checkbox" name="readyToPost" />
                        <br />
                        <input type="submit" name="" value="Add Post" />
                    </form>
                </div>
            </Layout>
        )
    }
}

module.exports = New
