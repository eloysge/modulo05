import React, { Component } from 'react';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import { Title, Container, Form, SubmitButton } from './styles';
import api from '../../services/api';

class Main extends Component {
  state = {
    newRepo: '',
    repos: [],
    loading: false,
  };

  handleInputchange = event => {
    this.setState({ newRepo: event.target.value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    this.setState({ loading: true });
    const { newRepo, repos } = this.state;
    const response = await api.get(`/repos/${newRepo}`);
    const data = {
      name: response.data.full_name,
    };
    this.setState({
      repos: [...repos, data],
      newRepo: '',
      loading: false,
    });
  };

  render() {
    const { newRepo, loading } = this.state;
    return (
      <>
        <Title error={false}>
          Main Page<small>Sge Informática</small>
        </Title>
        <Container>
          <h1>
            <FaGithubAlt />
            Repositórios
          </h1>
          <Form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Adicionar repositório"
              value={newRepo}
              onChange={this.handleInputchange}
            />
            <SubmitButton busy={loading}>
              {loading ? (
                <FaSpinner color="#FFF" size={20} />
              ) : (
                <FaPlus color="#FFF" size={20} />
              )}
            </SubmitButton>
          </Form>
        </Container>
      </>
    );
  }
}

export default Main;
