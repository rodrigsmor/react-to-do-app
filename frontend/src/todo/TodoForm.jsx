import Grid from '../template/Grid';
import React from 'react';
import IconButton from '../template/IconButton';

export default props => (
    <div role={'form'} className={'todoForm'}>
        <Grid cols={'12 9 10'}>
            <input 
                type="text" 
                id="description"
                className="form-control"
                placeholder='Adicione uma tarefa...' 
            />
        </Grid>

        <Grid cols={'12 3 2'}>
            <button className="btn btn-primary">
                <i className="fa fa-plus"></i>
            </button>
            <IconButton
                icon={'plus'}
                style={'primary'}
            />
        </Grid>
    </div>
);