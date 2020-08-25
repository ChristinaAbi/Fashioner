const React = require('react')
const Default = require('../components/Default')

class New extends React.Component {
    render() {
        return (
            <Default>
                <div>
                    <h1>
                        Begin Your New Design Here
                    </h1>
                    <form action="/designer" method="POST">
                        Title: <input type="text" name="title" />
                        <br />
                        Outfit Number: <input type="text" name="outfitNumber" />
                        <br />
                        Description: <input type="textarea" name="description" />
                        <br />
                        <input type="submit" name="" value="Add Post" />
                    </form>
                </div>
            </Default>
        )
    }
}

module.exports = New