import React, { Component } from 'react'
import { Button,Form,Input, Header, Icon, Image, Modal } from 'semantic-ui-react'
import './Banner.css';
import moneyheist from '../images/moneyheist.jpg';
import { movies } from '../request';

export class Banner extends Component {
    state = {
        modal: false,
        MovieName: '',
        MovieDetails: "",
        Genre: "",
        Language: "",
        file:null,
    }
    openModal = () => this.setState({ modal: true });

    closeModal = () => this.setState({ modal: false });

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    
    addFile = event => {
      const file = event.target.files[0];
      let freader = new FileReader();
      if (file) {
          
          this.setState({ file });
        }
    };

    handleSubmit = event => {
      event.preventDefault();
      var date = new Date();
        if (this.isFormValid(this.state)) {
            var subs = [];
            subs.push(this.state.Genre);
            const adventure = {
                beta: {
                    name: this.state.MovieName,
                    image: this.state.file,
                    description: this.state.MovieDetails,
                    genre: subs,
                    language: this.state.Language,
                    addedTime: date.getTime(),
                }
            };
            console.log(adventure);
            this.setState({
                name: "",
                image: "",
                description: "",
                genre: "",
                language:""
            })
            const Movies = { ...movies, ...adventure };
            localStorage.setItem("Movies", JSON.stringify(Movies));
            this.setState({modal:false})
            
        }
    };

    isFormValid = ({ MovieName,MovieDetails,Genre,Language }) =>
        MovieName && MovieDetails && Genre && Language;
    
    render() {
        const { modal } = this.state;
        const banner = {
            3: {
                image: moneyheist,
                Title: "Money Heist",
                description: "Money Heist (Spanish: La casa de papel, \"The House of Paper\") is a Spanish heist crime drama television series created by Álex Pina. The series traces two long-prepared heists led by the Professor (Álvaro Morte), one on the Royal Mint of Spain, and one on the Bank of Spain.",
            },
        };

        return (
            <header className="banner">
            <div className="banner__contents">
                <h1 className="banner__title">{banner[3].Title}</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">
                    {banner[3].description}
                </h1>
            </div>

            <div className="banner__fade" />
            <div>
              <span className="banner__addback">
              
                    <Icon className={`banner__add ${JSON.parse(localStorage.getItem('admin'))=== 1? "banner__visible" : ""}`} size='big' name="add" onClick={this.openModal} />
                </span> 
  
            <Modal basic open={modal} onClose={this.closeModal}>
                <Modal.Header>Add Movie</Modal.Header>
                <Modal.Content>
            <Form onSubmit={this.handleSubmit} >
              <Form.Field>
                <Input
                  fluid
                  label="Movie Name"
                  name="MovieName"
                  placeholder="Enter the movie name."
                  onChange={this.handleChange}
                />
              </Form.Field>

              <Form.Field>
                <Input
                  fluid
                  label="Enter Description"
                  name="MovieDetails"
                  placeholder="Enter movie description"
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <Input
                  fluid
                  label="Enter Genre"
                  name="Genre"
                  placeholder="Enter Genre."
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <Input
                  fluid
                  label="Language"
                  name="Language"
                  placeholder="Enter language."
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <Input
                  type="file"
                  fluid
                  label="Insert image"
                  name="Image"
                  onChange={this.addFile}
                />
              </Form.Field>
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button color="green" inverted onClick={this.handleSubmit}>
              <Icon name="checkmark" /> Add
            </Button>
            <Button color="red" inverted onClick={this.closeModal}>
              <Icon name="remove" /> Cancel
            </Button>
          </Modal.Actions>
                </Modal>
            </div>
        </header>
        )
    }
}

export default Banner
