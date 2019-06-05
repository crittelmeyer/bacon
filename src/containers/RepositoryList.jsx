import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { loadRepos } from '../modules/repos/reposActions';

/* eslint-disable no-shadow */
const RepositoryList = ({ repos, loadRepos }) => {
  useEffect(() => {
    loadRepos();
  }, []);
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Source</TableCell>
            <TableCell align="left">Last commit date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!repos.loading &&
            Object.keys(repos.data).length !== 0 &&
            Object.values(repos.data).map(repo => (
              <TableRow key={repo.id}>
                <TableCell align="left">{repo.name}</TableCell>
                <TableCell align="left">
                  <a href={repo.html_url} target="_blank" rel="noopener">
                    {repo.html_url}
                  </a>
                </TableCell>
                <TableCell align="left">{repo.pushed_at}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

const mapStateToProps = state => ({
  repos: state.repos,
});

const mapDispatchToProps = {
  loadRepos,
};

RepositoryList.propTypes = {
  repos: PropTypes.object,
  loadRepos: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RepositoryList);
