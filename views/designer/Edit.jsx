const React = require('react')
const Default = require('../components/Default')

class Edit extends React.Component {
    render() {
        const { _id, title, outfitNumber, description, readyToShowOff } = this.props.designer
        return (
            <Default>
                <div>
                    <h1>
                        Edit {name} Post
                    </h1>
                    <form action={`/designer/${_id}?_method=PUT`} method="POST">
                        Title: <input type="text" name="title" defaultValue={title} />
                        <br />
                        
                        Outfit Number: <input type="text" name="outfitNumber" defaultValue={outfitNumber} />
                        <br />

                        Description: <input type="textarea" name="description" defaultValue={description} />
                        <br />

                        Ready To Post: <input type="checkbox" name="readyToShowOff" defaultValue={readyToShowOff} />

                        <input type="submit" name="" value="Submit Changes" />

                    </form>
                </div>
            </Default>
        )
    }
}

module.exports = Edit