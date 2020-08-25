const React = require('react')
const Default = require('../components/Default')

class Index extends React.Component {
    render() {
        const { designers } = this.props
        return (
            <Default>
                <div>
                    <h1>
                        Welcome to Designer!
                    </h1>
                    <h3>
                        The IT site for Fashion Designers Worldwide!
                    </h3>
                    <nav>
                        <a href="/designer/new">
                            New Post
                        </a>
                        <br />
                        <a href="/fashioner">
                            Enter the world of Fashion Blogging
                        </a>
                    </nav>
                    <ul>
                        {
                            designers.map((designer, i) => {
                                return (
                                    <li>
                                        <a href={`/designer/${designer._id}`}>
                                            {designer.title}
                                        </a>
                                        <br />
                                        <a href={`/designer/${designer._id}/edit`}>
                                            Edit Post
                                        </a>
                                        <br />
                                        <form action={`/designer/${designer._id}?_method=DELETE`} method="POST">
                                            <input type="submit" value="Delete This Post" />
                                        </form>
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