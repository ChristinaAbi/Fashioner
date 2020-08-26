const React = require('react')
const Layout = require('../components/Layout')

class New extends React.Component {
    render() {
        return (
            <Layout>
                <div>
                    <nav class="topnav">
                        <a href="/">See All Blog Posts</a>
                    </nav>
                    <h1>
                        Here's Where the Magic Begins
                    </h1>
                    <h4>
                        Drop your thoughts below and share to the Fashion World!
                    </h4>
                    <form action="/fashioner" method="POST">
                        Title: <input type="text" name="title" />
                        <br />
                        Entry Number: <input type="text" name="entryNumber" />
                        <br />
                        Image Link: <input type="text" name="image" placeholder="https://"/>
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
