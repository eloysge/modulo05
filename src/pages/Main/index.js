import React, { Component } from 'react';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Container from '../../components/Container';
import { Title, Form, SubmitButton, List } from './styles';
import api from '../../services/api';

class Main extends Component {
  state = {
    newRepo: '',
    repos: [],
    loading: false,
  };

  // Carregar lista
  componentDidMount() {
    const repox = localStorage.getItem('repositories');
    if (repox) {
      this.setState({ repos: JSON.parse(repox) });
    }
  }

  // prevProps, prevState ("_" quando não user o parametro)
  componentDidUpdate(_, prevState) {
    const { repos } = this.state;
    if (prevState.repos !== repos) {
      localStorage.setItem('repositories', JSON.stringify(repos));
    }
  }

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
    const { newRepo, loading, repos } = this.state;
    return (
      <>
        <Title error={false}>
          Sge Informática<small>ReactJS</small>
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
          <List>
            {repos.map(repo => (
              <li key={repo.name}>
                <span>{repo.name}</span>
                <Link to={`/repository/${encodeURIComponent(repo.name)}`}>
                  detalhes
                </Link>
              </li>
            ))}
          </List>
        </Container>
      </>
    );
  }
}

export default Main;
