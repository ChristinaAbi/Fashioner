const React = require('react')
const Layout = require('../components/Layout')

class Edit extends React.Component {
    render() {
        const { _id, title, entryNumber, description } = this.props.fashioner
        return (
            <Layout>
                <div>
                    <h1>
                        Edit {name} Post
                    </h1>
                    <form action={`/fashioner/${_id}?_method=PUT`} method="POST">
                        Title: <input type="text" name="title" defaultValue={title} />
                        <br />
                        
                        Entry Number: <input type="text" name="entryNumber" defaultValue={entryNumber} />
                        <br />

                        Description: <input type="textarea" name="description" defaultValue={description} />
                        <br />

                        <input type="submit" name="" value="Submit Changes" />

                    </form>
                </div>
            </Layout>
        )
    }
}

module.exports = Edit