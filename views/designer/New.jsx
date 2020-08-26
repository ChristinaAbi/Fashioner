const React = require('react')
const Default = require('../components/Default')

class New extends React.Component {
    render() {
        return (
            <Default>
                <div>
                <nav class="topnav">
                        <a href="/designer">See All Designs</a>
                    </nav>
                    <h1>
                        Welcome to the Drawing Board
                    </h1>
                    <h4>
                        Drop your designs below and share to the Fashion World!
                    </h4>
                    <form action="/designer" method="POST">
                        Title: <input type="text" name="title" />
                        <br />
                        Outfit Number: <input type="text" name="outfitNumber" />
                        <br />
                        Image Link: <input type="text" name="image" placeholder="https://"/>
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