const React = require('react')
const Default = require('../components/Default')

class Index extends React.Component {
    render() {
        const { designers } = this.props
        console.log(designers)
        return (
            <Default>
                <div>
                    <nav class="topnav">
                        <a href="/designer/new">
                            New Post
                        </a>
                        <a href="/fashioner">
                            World of Fashion Blogging
                        </a>
                    </nav>
                    <h1>
                        Welcome to Designer!
                    </h1>
                    <h3>
                        The IT site for Fashion Designers Worldwide!
                    </h3>
                   
                    <ul>
                        {
                            designers.map((designer, i) => {
                                return (
                                    <li>
                                        <a href={`/designer/${designer._id}`}>
                                            {designer.title}
                                        </a>
                                        <br />
                                        {designer.description}
                                        <br />
                                        <img src={designer.image} />
                                        <br />
                                        <footer class="footer"></footer>
                                        <a href={`/designer/${designer._id}/edit`}>
                                            Edit Post
                                        </a>
                                        <br />
                                        <form action={`/designer/${designer._id}?_method=DELETE`} method="POST">
                                            <input type="submit" value="Delete This Post" />
                                        </form>
                                        <footer/>
                                    </li>
                                )
                            })

                        }
                    </ul>
                </div>
            </Default>
        )
    }
}

module.exports = Index
