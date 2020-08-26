const React = require('react')
const Layout = require('../components/Layout')

class Index extends React.Component {
    render() {
        const { fashioners } = this.props
        return (
            <Layout>
                <div>
                    <nav class="topnav">
                        <a href="/fashioner/new">
                            New Post
                        </a>
                        <a href="/designer">
                            World of Design
                        </a>
                    </nav>
                    <h1>
                        Welcome to Fashioner!
                    </h1>
                    <h3>
                        The IT site for Fashion Bloggers Worldwide!
                    </h3>
                        <ul>
                            {
                                fashioners.map((fashioner, i) => {
                                    return (
                                        <li>
                                            <a href={`/fashioner/${fashioner._id}`}>
                                                {fashioner.title}
                                            </a>
                                            <br />
                                            {fashioner.description}
                                            <br />
                                            <img src={fashioner.image} />
                                            <br />
                                            <footer class="footer">
                                                <a href={`/fashioner/${fashioner._id}/edit`}>
                                                Edit Post
                                                </a>
                                            <br />
                                            <form action={`/fashioner/${fashioner._id}?_method=DELETE`} method="POST">
                                                <input type="submit" value="Delete This Post" />
                                            </form></footer>
                                            
                                        </li>
                                    )
                                })

                            }
                        </ul>
                </div>
            </Layout>
        )
    }
}

module.exports = Index