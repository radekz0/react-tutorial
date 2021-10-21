import React from 'react';

class ImageCard extends React.Component {
    constructor(props){
        super(props);
        this.state = { spans: 0 };
        this.imageRef = React.createRef();
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10 + 1);
        this.setState({ spans }); //When we have spans: spans we can just type it like this
    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load', this.setSpans); //When the img element successfully renders it emits load event
    }

    render() {
        const { description, urls } = this.props.image;
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img ref={this.imageRef} alt={description} src={urls.regular}/>
            </div>
        );
    }
}

export default ImageCard;