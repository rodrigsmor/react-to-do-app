import React, { Component } from 'react';
import Grid from '../template/Grid';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import IconButton from '../template/IconButton';
import { add, changeDescription, search } from '../store/actions/todoAction';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.keyHandler = this.keyHandler.bind(this);
    }

    keyHandler(e) {
        const { add, search, description } = this.props;
        
        if(e.key == 'Enter') {
            e.shiftKey 
                ? search()
                : add(description)
        } else if(e.key === 'Escape') {
            this.props.handleClear();
        }
    }

    componentWillMount() {
        this.props.search();
    }

    render() {
        const { add, search, description } = this.props;

        return (
            <div role={'form'} className={'todoForm'}>
                <Grid cols={'12 9 10'}>
                    <input 
                        type="text" 
                        id="description"
                        className="form-control"
                        value={this.props.description}
                        onChange={this.props.changeDescription}
                        onKeyUp={this.keyHandler}
                        placeholder='Adicione uma tarefa...' 
                    />
                </Grid>

                <Grid cols={'12 3 2'}>
                    <IconButton
                        icon={'plus'}
                        style={'primary'}
                        onClick={() => add(description)}
                    />
                    <IconButton
                        icon={'search'}
                        style={'info'}
                        onClick={() => search()}
                    />
                    <IconButton
                        icon={'close'}
                        style={'default'}
                        onClick={this.props.handleClear}
                    />
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    description: state.todo.description
})

const mapDispatchToProps = dispatch => bindActionCreators({
    changeDescription,
    search,
    add,
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoForm)